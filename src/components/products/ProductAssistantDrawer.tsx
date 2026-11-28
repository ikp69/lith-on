"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { SlidersHorizontal, X } from "lucide-react";
import Image from "next/image";
import { PhotoNeeded } from "@/components/system/PhotoNeeded";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/system/Button";
import { PRODUCTS_DATA } from "@/data/products";
import { cn } from "@/lib/utils";

/**
 * PDP-07 sizing assistant: a side sheet that suggests a starting product from
 * the facility type and generator size. Rebuilt in Phase 4 (20 Nov 2026):
 * - The old drawer showed invented savings, payback and diesel figures per
 *   product, "100% CAQM GRAP Compliant" and a "<20 ms" claim; all removed.
 *   Savings now come from the calculator (content/calculator-data.json).
 * - Capacity, power and image come from src/data/products.ts, as on the
 *   product pages.
 * - The recommendation is derived from state on render (the old version
 *   computed it from the previous selection via setTimeout).
 */

const FACILITIES = [
  { id: "commercial", label: "Commercial building or IT park" },
  { id: "housing", label: "Housing society" },
  { id: "industrial", label: "Factory or industrial plant" },
  { id: "ev", label: "EV charging hub" },
  { id: "telecom", label: "Fuel station or telecom site" },
  { id: "utility", label: "Solar plant or substation" },
] as const;

const SCALES = [
  { id: "small", label: "Up to 125 kVA" },
  { id: "medium", label: "250–750 kVA" },
  { id: "large", label: "1,000 kVA and above" },
] as const;

type Facility = (typeof FACILITIES)[number]["id"];
type Scale = (typeof SCALES)[number]["id"];

function recommend(facility: Facility, scale: Scale): string {
  if (facility === "utility" || scale === "large") {
    return "max-20hc";
  }
  if (facility === "telecom" || scale === "small") {
    return "lithon-50";
  }
  if (facility === "industrial") {
    return "lt215";
  }
  return "magna-ci";
}

function Choice<T extends string>({
  legend,
  name,
  options,
  value,
  onChange,
  columns,
}: {
  legend: string;
  name: string;
  options: readonly { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  columns: string;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-small font-[500] text-ink">{legend}</legend>
      <div className={cn("grid gap-2", columns)}>
        {options.map((o) => (
          <label
            key={o.id}
            className={cn(
              "flex min-h-12 cursor-pointer items-center rounded-control border px-4 py-3 text-small transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-lithon-blue",
              value === o.id ? "border-lithon-blue bg-canvas-warm font-[500] text-lithon-blue" : "border-line text-ink-2 hover:border-ink-3 hover:text-ink"
            )}
          >
            <input type="radio" name={name} value={o.id} checked={value === o.id} onChange={() => onChange(o.id)} className="sr-only" />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function ProductAssistantDrawer({ preselectedProduct, triggerLabel = "Sizing assistant" }: { preselectedProduct?: string; triggerLabel?: string }) {
  const [facility, setFacility] = useState<Facility>("commercial");
  const [scale, setScale] = useState<Scale>("medium");
  const [open, setOpen] = useState(false);
  // Close when a link inside the sheet navigates to another product page.
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  const slug = recommend(facility, scale);
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  const facilityLabel = FACILITIES.find((f) => f.id === facility)?.label ?? "";
  const whatsapp = `https://wa.me/917000013009?text=${encodeURIComponent(
    `Hello Lith-On, I used the sizing assistant for a ${facilityLabel.toLowerCase()} and it suggested the ${product?.name ?? "a battery system"}. Please send a quote.`
  )}`;

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="group inline-flex min-h-11 items-center gap-2 rounded-sm text-[15px] font-[600] text-lithon-blue transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lithon-blue"
        >
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
          <span className="bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
            {triggerLabel}
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-sheet-overlay fixed inset-0 z-[60] bg-black/40" />
        <Dialog.Content className="side-sheet fixed top-0 right-0 bottom-0 z-[61] flex w-full max-w-lg flex-col overflow-y-auto bg-white shadow-2xl">
          <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5 sm:px-8">
            <div>
              <Dialog.Title className="text-heading-3 text-ink">Find a starting point</Dialog.Title>
              <Dialog.Description className="mt-1 text-small text-ink-2">
                {preselectedProduct ? `You are viewing the ${preselectedProduct}. ` : ""}Tell us about the site and we will suggest a system to start from.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close sizing assistant"
                className="-m-2 flex size-11 shrink-0 items-center justify-center rounded-full text-ink-2 transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-lithon-blue"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <div className="flex-1 space-y-8 px-6 py-6 sm:px-8">
            <Choice legend="What kind of site is it?" name="facility" options={FACILITIES} value={facility} onChange={setFacility} columns="sm:grid-cols-2" />
            <Choice legend="Generator capacity it would replace" name="scale" options={SCALES} value={scale} onChange={setScale} columns="sm:grid-cols-3" />

            {product && (
              <section aria-live="polite" aria-labelledby="assistant-result" className="border-t border-ink pt-6">
                <p className="text-small text-ink-3">Suggested starting point</p>
                <div className="mt-3 grid grid-cols-[96px_1fr] items-center gap-5">
                  <div className="relative aspect-square rounded-control bg-surface">
                    {product.image ? (
                      <Image src={product.image} alt="" fill sizes="96px" className="object-contain p-2 mix-blend-multiply" />
                    ) : (
                      <PhotoNeeded fill compact subject={`${product.name} product cut-out`} className="rounded-control p-2" />
                    )}
                  </div>
                  <div>
                    <h3 id="assistant-result" className="text-heading-3 text-ink">
                      {product.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-small text-ink-3">{product.modelCode}</p>
                  </div>
                </div>
                <dl className="mt-5 border-t border-line">
                  <div className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                    <dt className="text-small text-ink-2">Capacity</dt>
                    <dd className="tabular text-body font-[500] text-ink">{product.capacity}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                    <dt className="text-small text-ink-2">Power</dt>
                    <dd className="tabular text-body font-[500] text-ink">{product.powerRating}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-small text-ink-3">Larger sites combine several units. Our engineers confirm the final size from your load profile.</p>
              </section>
            )}
          </div>

          <div className="space-y-4 border-t border-line px-6 py-5 sm:px-8">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {product && (
                <Button href={`/products/${product.slug}`} arrow>
                  View {product.name.split(" (")[0]}
                </Button>
              )}
              <Button href="/calculator" variant="tertiary">
                Estimate savings
              </Button>
            </div>
            <p className="text-small text-ink-3">
              Or message our engineers on{" "}
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="font-[500] text-lithon-blue underline-offset-4 hover:underline">
                WhatsApp
              </a>{" "}
              or call{" "}
              <a href="tel:+917000013009" className="font-[500] text-lithon-blue underline-offset-4 hover:underline">
                +91 70000 13009
              </a>
              .
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
