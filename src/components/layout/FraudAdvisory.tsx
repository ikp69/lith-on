"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AlertTriangle, X } from "lucide-react";

/**
 * Recruitment and payment fraud warning (AGENTS.md: keep prominent).
 * Wording unchanged from the approved footer dialog.
 */
export function FraudAdvisory() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="inline-flex min-h-11 items-center gap-1.5 font-[500] text-lithon-red-ink underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
        >
          <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
          Recruitment fraud warning
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-5 rounded-media bg-white p-6 shadow-2xl sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <Dialog.Title className="text-heading-3 text-ink">Fraudulent recruitment and payment advisory</Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close"
                className="-m-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink-2 hover:bg-surface focus-visible:outline-2 focus-visible:outline-lithon-blue"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Description asChild>
            <div className="space-y-4 text-small text-ink-2">
              <p>
                It has come to our notice that certain fraudulent entities or recruitment consultancies are falsely claiming to represent{" "}
                <strong className="font-[600] text-ink">LITH-ON BHARAT ENERGY PRIVATE LIMITED</strong> and soliciting application fees, interview charges, or security deposits
                for employment opportunities.
              </p>
              <ol className="space-y-2 border-l-2 border-lithon-red pl-4">
                <li>
                  <strong className="font-[600] text-ink">Zero-fee policy.</strong> Lith-On Bharat Energy never demands any money, refundable deposits, or processing fees at any
                  stage of recruitment.
                </li>
                <li>
                  <strong className="font-[600] text-ink">Official domains.</strong> All genuine communications come only from @lith-onbharat.com or @lith-on.com.
                </li>
                <li>
                  <strong className="font-[600] text-ink">Report it.</strong> Forward fraudulent messages to{" "}
                  <a href="mailto:tech@lith-onbharat.com" className="font-[500] text-lithon-blue underline underline-offset-2">
                    tech@lith-onbharat.com
                  </a>{" "}
                  or call our Noida plant on{" "}
                  <a href="tel:+917000013009" className="font-[500] text-lithon-blue underline underline-offset-2">
                    +91 70000 13009
                  </a>
                  .
                </li>
              </ol>
            </div>
          </Dialog.Description>
          <div className="flex justify-end">
            <Dialog.Close asChild>
              <button
                type="button"
                className="min-h-11 rounded-full bg-ink px-5 text-small font-[500] text-white hover:bg-ink-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
              >
                I understand
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
