"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Check, Download, X } from "lucide-react";
import Link from "next/link";
import { type FormEvent, useState } from "react";
import { errorMessage, Field } from "@/components/contact/FormField";
import { CATALOGUE_FIELDS, validateFields } from "@/lib/contact";
import { cn } from "@/lib/utils";

/**
 * Gated catalogue download (owner, 20 Nov 2026): the button opens a dialog
 * asking for name, email and phone; on submit the details go to /api/contact
 * (intent "catalogue") and the PDF download starts. The route never blocks the
 * download when email is not configured; lead storage in a database comes
 * later (see saveLead in the route). A visitor who has already filled the form
 * on this browser downloads straight away.
 *
 * The PDF is public/downloads/lith-on-bess-products-catalogue.pdf, built from
 * the page images in data-sources/Lith-On Catalogue.
 */

export const CATALOGUE_PDF = "/downloads/lith-on-bess-products-catalogue.pdf";
const FILE_NAME = "Lith-On-BESS-Products-Catalogue.pdf";
const STORAGE_KEY = "lithon-catalogue-lead";

const empty = () => Object.fromEntries(CATALOGUE_FIELDS.map((f) => [f.name, ""])) as Record<string, string>;

function startDownload() {
  const a = document.createElement("a");
  a.href = CATALOGUE_PDF;
  a.download = FILE_NAME;
  document.body.append(a);
  a.click();
  a.remove();
}

function alreadyRegistered(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function remember() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Storage unavailable (private mode): the form simply shows again next time.
  }
}

const trigger =
  "group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-lithon-red-ink px-6 text-[15px] font-[600] whitespace-nowrap text-white select-none " +
  "transition-[background-color,scale] duration-200 ease-out hover:bg-lithon-red-ink-hover active:scale-[0.96] motion-reduce:active:scale-100 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue";

export function CatalogueDownload({ label = "Download the catalogue", className }: { label?: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [problem, setProblem] = useState("");
  const [website, setWebsite] = useState("");

  const onTrigger = () => {
    if (alreadyRegistered()) {
      startDownload();
      return;
    }
    setStatus("idle");
    setOpen(true);
  };

  const onChange = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((e) => ({ ...e, [name]: "" }));
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validateFields(CATALOGUE_FIELDS, values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById(`f-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intent: "catalogue", values, website }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fields?: Record<string, string> };
      if (res.ok && data.ok) {
        remember();
        setStatus("done");
        startDownload();
        return;
      }
      if (data.fields) {
        setErrors(data.fields);
      }
      setProblem(errorMessage(data.error ?? "send_failed"));
      setStatus("error");
    } catch {
      setProblem(errorMessage("send_failed"));
      setStatus("error");
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <button type="button" onClick={onTrigger} className={cn(trigger, className)}>
        <Download className="h-4 w-4" aria-hidden="true" />
        {label}
      </button>
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-sheet-overlay fixed inset-0 z-[80] bg-ink/40 backdrop-blur-[2px]" />
        <Dialog.Content className="modal-pop fixed top-1/2 left-1/2 z-[90] max-h-[calc(100dvh-32px)] w-[calc(100vw-32px)] max-w-[480px] overflow-y-auto rounded-media bg-canvas p-6 shadow-[0_24px_64px_-24px_rgba(17,24,39,0.35)] sm:p-8">
          <Dialog.Close
            className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-2 transition-colors hover:bg-surface hover:text-ink focus-visible:outline-2 focus-visible:outline-lithon-blue"
            aria-label="Close"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </Dialog.Close>

          {status === "done" ? (
            <div className="pr-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lithon-blue text-white">
                <Check className="h-5 w-5" aria-hidden="true" />
              </span>
              <Dialog.Title className="mt-5 text-heading-2 text-ink">Your download has started</Dialog.Title>
              <Dialog.Description className="mt-2 text-body text-ink-2">
                Thank you, {values.name.split(" ")[0]}. If it doesn&apos;t begin,{" "}
                <a href={CATALOGUE_PDF} download={FILE_NAME} className="text-lithon-blue underline-offset-4 hover:underline">
                  download the PDF directly
                </a>{" "}
                (7.6 MB).
              </Dialog.Description>
              <Dialog.Close className="mt-8 inline-flex h-12 items-center rounded-full border border-line-strong px-6 text-[15px] font-[600] text-ink hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue">
                Close
              </Dialog.Close>
            </div>
          ) : (
            <>
              <Dialog.Title className="pr-10 text-heading-2 text-ink">Download the product catalogue</Dialog.Title>
              <Dialog.Description className="mt-2 text-body text-ink-2">
                Every Lith-On system with its specifications, in one PDF. Tell us who you are and the download starts straight away.
              </Dialog.Description>
              <form onSubmit={onSubmit} noValidate className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {CATALOGUE_FIELDS.map((f) => (
                    <Field key={f.name} field={f} value={values[f.name]} error={errors[f.name] || undefined} onChange={onChange} />
                  ))}
                </div>
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label>
                    Website
                    <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
                  </label>
                </div>
                {status === "error" && (
                  <p role="alert" className="mt-4 text-small font-[500] text-lithon-red-ink">
                    {problem}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-lithon-red-ink text-[15px] font-[600] text-white transition-colors hover:bg-lithon-red-ink-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue disabled:opacity-60"
                >
                  {status === "sending" ? "Preparing your download…" : "Download PDF"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                </button>
                <p className="mt-4 text-small text-ink-3">
                  See our{" "}
                  <Link href="/privacy-policy" className="text-lithon-blue underline-offset-4 hover:underline">
                    privacy policy
                  </Link>{" "}
                  for how we handle your details.
                </p>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
