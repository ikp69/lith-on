import type { ChangeEvent, ReactNode } from "react";
import type { FieldDef } from "@/lib/contact";
import { cn } from "@/lib/utils";

/** Shared form field and error copy for the Contact intake and the distributor form. */

const PHONE = "+91 70000 13009";
const EMAIL = "tech@lith-onbharat.com";

const control =
  "block w-full min-h-12 rounded-control border border-line-strong bg-canvas px-4 py-3 text-body text-ink placeholder:text-ink-3 transition-colors hover:border-ink-3 " +
  "focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-lithon-blue aria-[invalid=true]:border-lithon-red-ink";

export function Field({ field, value, error, onChange }: { field: FieldDef; value: string; error?: string; onChange: (name: string, value: string) => void }) {
  const id = `f-${field.name}`;
  const describedBy = [field.hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;
  const common = {
    id,
    name: field.name,
    value,
    required: field.required,
    autoComplete: field.autoComplete ?? "off",
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => onChange(field.name, e.target.value),
    className: control,
  };
  let input: ReactNode;
  if (field.type === "select") {
    input = (
      <select {...common}>
        {field.options?.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    );
  } else if (field.type === "textarea") {
    input = <textarea {...common} rows={4} placeholder={field.placeholder} />;
  } else {
    input = <input {...common} type={field.type} inputMode={field.type === "number" ? "decimal" : undefined} min={field.type === "number" ? 0 : undefined} placeholder={field.placeholder} />;
  }
  return (
    <div className={cn(field.wide && "sm:col-span-2")}>
      <label htmlFor={id} className="mb-2 block text-small font-[500] text-ink">
        {field.label}
      </label>
      {input}
      {field.hint && (
        <p id={`${id}-hint`} className="mt-1.5 text-small text-ink-3">
          {field.hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-small font-[500] text-lithon-red-ink">
          {error}
        </p>
      )}
    </div>
  );
}

export function errorMessage(code: string): string {
  if (code === "validation") {
    return "Some details need attention. Please check the highlighted fields.";
  }
  if (code === "rate_limited") {
    return `Too many messages from this connection. Please wait a few minutes, or call us on ${PHONE}.`;
  }
  return `We couldn't send your message just now. Please call ${PHONE} or email ${EMAIL}.`;
}

