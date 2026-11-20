"use client";

import { CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { type FormEvent, type ReactNode, useEffect, useRef, useState } from "react";
import { errorMessage, Field } from "@/components/contact/FormField";
import { Button } from "@/components/system/Button";
import { PRODUCTS_DATA } from "@/data/products";
import {
  ASSESSMENT_STEPS,
  DISTRIBUTOR_FIELDS,
  FACILITY_TYPES,
  type FieldDef,
  fieldsFor,
  INTENT_LABEL,
  INTENTS,
  type Intent,
  initialValues,
  SUPPORT_FIELDS,
  URGENT,
  validateFields,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

/**
 * CON-01 contact intake (audit §6.13). Left: the page intro, three intents as
 * large selectable rows, direct contacts. Right: the form, sticky on desktop.
 * The project request keeps its four-step flow (steps slide in 24px, progress
 * bar fills). Submissions POST to /api/contact; errors show inline and the
 * phone and email stay visible as a fallback. Query parameters used across the
 * site (type, product, sector, doc, download, insight, sanctionedLoad,
 * dgCapacity) preselect the intent and prefill fields.
 */

const PHONE = "+91 70000 13009";
const PHONE_HREF = "tel:+917000013009";

const INTENT_ROWS: { id: Intent; title: string; text: string }[] = [
  { id: "assessment", title: "Size a system for my site", text: "Tell us about your site and our engineers will recommend a system." },
  { id: "distributor", title: "Become a distributor", text: "For EPCs, electrical distributors and integrators." },
  { id: "support", title: "Support for an installed system", text: "Alarms, maintenance and warranty." },
];

const FORM_TITLE: Record<Intent, string> = {
  assessment: "Request technical sizing",
  distributor: "Distributor application",
  support: "Support request",
};

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; code: string };
type Values = Record<Intent, Record<string, string>>;

const SEPARATORS = /[-_]+/g;

const humanise = (s: string) => {
  const t = s.replace(SEPARATORS, " ").trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
};

/** A non-negative number from the query string, as a string, or "". */
function numberParam(params: URLSearchParams, key: string): string {
  const v = params.get(key);
  return v && Number.isFinite(Number(v)) && Number(v) >= 0 ? String(Number(v)) : "";
}

/** Reads the query parameters other pages link with. */
function fromParams(params: URLSearchParams): { intent: Intent; values: Values; request?: string } {
  const type = params.get("type") ?? "";
  const intent: Intent = (INTENTS as readonly string[]).includes(type) ? (type as Intent) : "assessment";
  const values: Values = { assessment: initialValues("assessment"), distributor: initialValues("distributor"), support: initialValues("support") };
  const a = values.assessment;

  const product = PRODUCTS_DATA.find((p) => p.slug === params.get("product"));
  if (product) {
    a.product = product.name;
    values.support.product = product.name;
  }
  const sector = FACILITY_TYPES.find((f) => f.key === params.get("sector"));
  if (sector) {
    a.facility = sector.label;
  }
  a.load = numberParam(params, "sanctionedLoad");
  a.dg = numberParam(params, "dgCapacity");
  a.outage = numberParam(params, "outage");

  const doc = params.get("doc") ?? params.get("download");
  const insight = params.get("insight");
  const calcLoad = numberParam(params, "load");
  let request: string | undefined;
  if (params.get("from") === "calculator" && calcLoad) {
    request = `From the savings calculator: back up ${calcLoad} kW for ${a.outage || "?"} h a day, with a ${a.dg || "?"} kVA generator today.`;
  } else if (type === "factory-visit") {
    request = "I would like to visit the Noida plant.";
  } else if (type === "ecatalogue") {
    request = "Please send me the product catalogue.";
  } else if (doc) {
    request = `Please send me: ${humanise(doc).slice(0, 120)}.`;
  } else if (insight) {
    request = `About: ${insight.slice(0, 160)}`;
  }
  if (request) {
    a.notes = request;
  }
  return { intent, values, request };
}

export function ContactIntake({ intro, contacts }: { intro: ReactNode; contacts: ReactNode }) {
  const params = useSearchParams();
  const [initial] = useState(() => fromParams(new URLSearchParams(params.toString())));
  const [intent, setIntent] = useState<Intent>(initial.intent);
  const [values, setValues] = useState<Values>(initial.values);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [honeypot, setHoneypot] = useState("");
  const focusId = useRef<string | null>(null);
  const formTop = useRef<HTMLDivElement>(null);

  // Move focus after a render: first invalid field, or the first field of a new step.
  useEffect(() => {
    if (focusId.current) {
      document.getElementById(focusId.current)?.focus();
      focusId.current = null;
    }
  });

  const current = values[intent];
  const isSteps = intent === "assessment";
  const stepFields = isSteps ? ASSESSMENT_STEPS[step].fields : fieldsFor(intent);

  const update = (name: string, value: string) => {
    setValues((v) => ({ ...v, [intent]: { ...v[intent], [name]: value } }));
    if (errors[name]) {
      setErrors((e) => Object.fromEntries(Object.entries(e).filter(([k]) => k !== name)));
    }
  };

  const chooseIntent = (next: Intent) => {
    setIntent(next);
    setErrors({});
    setStatus({ kind: "idle" });
  };

  const showErrors = (errs: Record<string, string>) => {
    setErrors(errs);
    const first = fieldsFor(intent).find((f) => errs[f.name]);
    if (first) {
      focusId.current = `f-${first.name}`;
    }
  };

  const goTo = (next: number) => {
    setStep(next);
    focusId.current = `f-${ASSESSMENT_STEPS[next].fields[0].name}`;
    if (formTop.current && formTop.current.getBoundingClientRect().top < 0) {
      formTop.current.scrollIntoView({ block: "start" });
    }
  };

  const next = () => {
    const errs = validateFields(stepFields, current);
    if (Object.keys(errs).length > 0) {
      showErrors(errs);
      return;
    }
    goTo(step + 1);
  };

  const send = async () => {
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intent, values: current, website: honeypot }),
      });
      if (res.ok) {
        setStatus({ kind: "sent" });
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string; fields?: Record<string, string> };
      if (data.fields) {
        showErrors(data.fields);
      }
      setStatus({ kind: "error", code: data.error ?? "send_failed" });
    } catch {
      setStatus({ kind: "error", code: "network" });
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isSteps && step < ASSESSMENT_STEPS.length - 1) {
      next();
      return;
    }
    const errs = validateFields(fieldsFor(intent), current);
    if (Object.keys(errs).length > 0) {
      if (isSteps) {
        const bad = ASSESSMENT_STEPS.findIndex((s) => s.fields.some((f) => errs[f.name]));
        setStep(bad);
      }
      showErrors(errs);
      return;
    }
    send();
  };

  const reset = () => {
    setValues((v) => ({ ...v, [intent]: initialValues(intent) }));
    setStep(0);
    setErrors({});
    setStatus({ kind: "idle" });
  };

  const fieldGrid = (fields: FieldDef[]) => (
    <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
      {fields.map((f) => (
        <Field key={f.name} field={f} value={current[f.name] ?? ""} error={errors[f.name]} onChange={update} />
      ))}
    </div>
  );

  const lastStep = !isSteps || step === ASSESSMENT_STEPS.length - 1;
  let body: ReactNode;
  if (isSteps) {
    body = (
      <div key={step} className="motion-safe:animate-[form-step-in_400ms_cubic-bezier(0.16,1,0.3,1)_both]">
        {ASSESSMENT_STEPS[step].note && <p className="mb-6 text-small text-ink-2">{ASSESSMENT_STEPS[step].note}</p>}
        {fieldGrid(ASSESSMENT_STEPS[step].fields)}
      </div>
    );
  } else {
    body = fieldGrid(intent === "distributor" ? DISTRIBUTOR_FIELDS : SUPPORT_FIELDS);
  }

  return (
    <div className="grid gap-x-6 gap-y-12 lg:grid-cols-12 lg:grid-rows-[auto_1fr]">
      <div className="lg:col-span-5">
        {intro}
        <fieldset className="mt-10">
          <legend className="mb-3 text-small font-[500] text-ink-3">How can we help?</legend>
          <div className="border-b border-line">
            {INTENT_ROWS.map((row, i) => {
              const on = intent === row.id;
              return (
                <label
                  key={row.id}
                  className="group flex cursor-pointer items-start gap-4 border-t border-line py-5 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-lithon-blue"
                >
                  <input type="radio" name="intent" value={row.id} checked={on} onChange={() => chooseIntent(row.id)} className="peer sr-only" />
                  <span className="tabular pt-1 text-small text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1">
                    <span className={cn("block text-heading-3 transition-colors", on ? "text-lithon-blue" : "text-ink group-hover:text-lithon-blue")}>{row.title}</span>
                    <span className="mt-1 block text-small text-ink-2">{row.text}</span>
                  </span>
                  <span aria-hidden="true" className={cn("mt-2 flex size-5 shrink-0 items-center justify-center rounded-full border", on ? "border-lithon-blue" : "border-line-strong")}>
                    <span className={cn("size-2.5 rounded-full bg-lithon-blue transition-transform motion-reduce:transition-none", on ? "scale-100" : "scale-0")} />
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
      </div>

      {/* Form */}
      <div ref={formTop} className="scroll-mt-28 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:pl-6">
        <div className="rounded-media border border-line bg-canvas p-6 shadow-[0_1px_2px_rgba(17,24,39,0.04),0_8px_24px_-12px_rgba(17,24,39,0.12)] sm:p-10 lg:sticky lg:top-28">
          {status.kind === "sent" ? (
            <div role="status" className="py-6">
              <CheckCircle2 className="h-10 w-10 text-lithon-blue" aria-hidden="true" />
              <h2 className="mt-5 text-heading-2 text-ink">Thank you, {current.name}</h2>
              <p className="mt-3 text-body text-ink-2">
                Your {INTENT_LABEL[intent].toLowerCase()} has reached our team in Noida. We will reply to {current.email}.
              </p>
              {intent === "support" && current.urgency === URGENT && (
                <p className="mt-3 text-body text-ink-2">
                  If the system is offline, please also call{" "}
                  <a href={PHONE_HREF} className="font-[500] text-lithon-blue underline underline-offset-2">
                    {PHONE}
                  </a>
                  .
                </p>
              )}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button variant="secondary" onClick={reset}>
                  Send another
                </Button>
                <Button href="/products" variant="tertiary">
                  Browse products
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate aria-labelledby="form-title">
              <div className="border-b border-line pb-6">
                <h2 id="form-title" className="text-heading-2 text-ink">
                  {FORM_TITLE[intent]}
                </h2>
                {isSteps && (
                  <>
                    <p className="mt-2 text-small text-ink-2" aria-live="polite">
                      Step {step + 1} of {ASSESSMENT_STEPS.length}: {ASSESSMENT_STEPS[step].title}
                    </p>
                    <ol className="mt-4 grid grid-cols-4 gap-2" aria-hidden="true">
                      {ASSESSMENT_STEPS.map((s, i) => (
                        <li key={s.title}>
                          <span className="block h-1 overflow-hidden rounded-full bg-surface">
                            <span
                              className={cn(
                                "block h-full origin-left rounded-full bg-lithon-blue motion-safe:transition-transform motion-safe:duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                                i <= step ? "scale-x-100" : "scale-x-0"
                              )}
                            />
                          </span>
                          <span className={cn("mt-2 hidden text-[13px] sm:block", i === step ? "text-ink" : "text-ink-3")}>{s.title}</span>
                        </li>
                      ))}
                    </ol>
                  </>
                )}
                {isSteps && initial.request && step === 0 && <p className="mt-4 text-small text-ink-2">Your request is in the notes: “{initial.request}”</p>}
              </div>

              <div className="pt-8">{body}</div>

              {intent === "support" && current.urgency === URGENT && (
                <p className="mt-6 border-l-2 border-lithon-red-ink pl-4 text-small text-ink-2">
                  If the system is offline, call us as well on{" "}
                  <a href={PHONE_HREF} className="font-[500] text-lithon-blue underline underline-offset-2">
                    {PHONE}
                  </a>
                  . Remote diagnostics run 24/7.
                </p>
              )}

              {/* Honeypot for bots; people never see it. */}
              <div className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="f-website">Leave this field empty</label>
                <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
              </div>

              {status.kind === "error" && (
                <p role="alert" className="mt-6 rounded-control border border-lithon-red-ink/40 bg-canvas-warm p-4 text-small text-ink">
                  {errorMessage(status.code)}
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                {isSteps && step > 0 ? (
                  <Button variant="secondary" onClick={() => goTo(step - 1)}>
                    Back
                  </Button>
                ) : (
                  <span />
                )}
                <Button type="submit" arrow={!lastStep} loading={status.kind === "sending"} variant={lastStep ? "primary" : "secondary"}>
                  {lastStep ? "Send" : "Continue"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="lg:col-span-5">{contacts}</div>
    </div>
  );
}
