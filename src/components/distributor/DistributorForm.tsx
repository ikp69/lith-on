"use client";

import { CheckCircle2 } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { errorMessage, Field } from "@/components/contact/FormField";
import { Button } from "@/components/system/Button";
import { DISTRIBUTOR_FIELDS, initialValues, validateFields } from "@/lib/contact";

/**
 * DIS-01/03 merged: the distributor application, visible in the hero. Same
 * fields, validation and /api/contact route as the Contact page's distributor
 * intent (src/lib/contact.ts), so submissions arrive in the same mailbox.
 */

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; code: string };

export function DistributorForm() {
  const [values, setValues] = useState<Record<string, string>>(() => initialValues("distributor"));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [honeypot, setHoneypot] = useState("");
  const focusId = useRef<string | null>(null);

  useEffect(() => {
    if (focusId.current) {
      document.getElementById(focusId.current)?.focus();
      focusId.current = null;
    }
  });

  const update = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((e) => Object.fromEntries(Object.entries(e).filter(([k]) => k !== name)));
    }
  };

  const showErrors = (errs: Record<string, string>) => {
    setErrors(errs);
    const first = DISTRIBUTOR_FIELDS.find((f) => errs[f.name]);
    if (first) {
      focusId.current = `f-${first.name}`;
    }
  };

  const send = async () => {
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intent: "distributor", values, website: honeypot }),
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
    const errs = validateFields(DISTRIBUTOR_FIELDS, values);
    if (Object.keys(errs).length > 0) {
      showErrors(errs);
      return;
    }
    send();
  };

  if (status.kind === "sent") {
    return (
      <div role="status" className="py-6">
        <CheckCircle2 className="h-10 w-10 text-lithon-blue" aria-hidden="true" />
        <h2 className="mt-5 text-heading-2 text-ink">Thank you, {values.name}</h2>
        <p className="mt-3 text-body text-ink-2">Your application has reached our channel team in Noida. We will reply to {values.email}.</p>
        <div className="mt-8">
          <Button href="/products" variant="tertiary">
            Browse the range
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-labelledby="dist-form-title" className="relative">
      <div className="border-b border-line pb-5">
        <h2 id="dist-form-title" className="text-heading-2 text-ink">
          Partner application
        </h2>
        <p className="mt-2 text-small text-ink-2">Fields marked optional can be left blank.</p>
      </div>
      <div className="grid gap-x-5 gap-y-5 pt-6 sm:grid-cols-2">
        {DISTRIBUTOR_FIELDS.map((f) => (
          <Field key={f.name} field={f} value={values[f.name] ?? ""} error={errors[f.name]} onChange={update} />
        ))}
      </div>

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="f-website">Leave this field empty</label>
        <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      {status.kind === "error" && (
        <p role="alert" className="mt-6 rounded-control border border-lithon-red-ink/40 bg-canvas-warm p-4 text-small text-ink">
          {errorMessage(status.code)}
        </p>
      )}

      <div className="mt-8 flex justify-end border-t border-line pt-6">
        <Button type="submit" loading={status.kind === "sending"}>
          Send application
        </Button>
      </div>
    </form>
  );
}
