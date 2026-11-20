import { API_INTENTS, type ApiIntent, fieldsFor, INTENT_LABEL, validateFields } from "@/lib/contact";

/**
 * POST /api/contact: receives a Contact page submission and emails it to the
 * Lith-On team through Resend's HTTP API (no SDK dependency).
 *
 * Configuration (server-only environment variables, see .env.example):
 *   RESEND_API_KEY       Resend API key (required)
 *   CONTACT_FROM_EMAIL   Verified sender, e.g. "Lith-On website <website@lith-on.com>" (required)
 *   CONTACT_TO_EMAIL     Recipient(s), comma-separated (default tech@lith-onbharat.com)
 *
 * Until the key and sender are set, the route answers 503 "not_configured"
 * and the form shows the phone and email fallback.
 *
 * Catalogue downloads (intent "catalogue") never block the visitor: when email
 * is not configured or fails, the route still answers ok with delivered:false
 * so the download unlocks. Leads are not stored anywhere yet; saveLead() is
 * the single place to add the database later (owner: database work comes last).
 */

const DEFAULT_TO = "tech@lith-onbharat.com";
const RESEND_URL = "https://api.resend.com/emails";
const MAX_BODY_BYTES = 20_000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const LINE_BREAKS = /[\r\n]+/g;

// Best-effort, per-instance limit. On serverless hosts each instance keeps its
// own map, so treat this as a speed bump, not a guarantee.
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    hits.clear();
  }
  return recent.length > MAX_PER_WINDOW;
}

function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) {
    return true;
  }
  try {
    return new URL(origin).host === (request.headers.get("x-forwarded-host") ?? request.headers.get("host"));
  } catch {
    return false;
  }
}

const json = (body: Record<string, unknown>, status = 200) => Response.json(body, { status });

/** Database hook for catalogue leads. Not connected yet; returns false until it is. */
function saveLead(_intent: ApiIntent, _values: Record<string, string>): Promise<boolean> {
  return Promise.resolve(false);
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return json({ error: "forbidden" }, 403);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return json({ error: "too_large" }, 413);
  }

  let payload: { intent?: unknown; values?: unknown; website?: unknown };
  try {
    payload = JSON.parse(raw);
  } catch {
    return json({ error: "invalid" }, 400);
  }

  // Honeypot: real visitors never see or fill this field.
  if (typeof payload.website === "string" && payload.website.trim()) {
    return json({ ok: true });
  }

  const intent = payload.intent as ApiIntent;
  if (!API_INTENTS.includes(intent) || typeof payload.values !== "object" || payload.values === null) {
    return json({ error: "invalid" }, 400);
  }

  // Keep only the fields defined for this intent, as trimmed strings.
  const fields = fieldsFor(intent);
  const input = payload.values as Record<string, unknown>;
  const values: Record<string, string> = {};
  for (const f of fields) {
    const v = input[f.name];
    values[f.name] = typeof v === "string" || typeof v === "number" ? String(v).trim() : "";
  }

  const errors = validateFields(fields, values);
  if (Object.keys(errors).length > 0) {
    return json({ error: "validation", fields: errors }, 422);
  }

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return json({ error: "rate_limited" }, 429);
  }

  const lenient = intent === "catalogue";
  const stored = lenient ? await saveLead(intent, values) : false;

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!(apiKey && from)) {
    return lenient ? json({ ok: true, delivered: stored }) : json({ error: "not_configured" }, 503);
  }
  const to = (process.env.CONTACT_TO_EMAIL || DEFAULT_TO)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const who = values.organisation || values.site || values.name;
  const subject = `${INTENT_LABEL[intent]}: ${who}`.replace(LINE_BREAKS, " ").slice(0, 150);
  const text = [
    `${INTENT_LABEL[intent]} from the lith-on.com contact page`,
    "",
    ...fields.filter((f) => values[f.name]).map((f) => `${f.label.replace(" (optional)", "")}: ${values[f.name]}`),
  ].join("\n");

  try {
    const res = await fetch(RESEND_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, subject, text, reply_to: values.email }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      return lenient ? json({ ok: true, delivered: stored }) : json({ error: "send_failed" }, 502);
    }
  } catch {
    return lenient ? json({ ok: true, delivered: stored }) : json({ error: "send_failed" }, 502);
  }

  return json({ ok: true, delivered: true });
}
