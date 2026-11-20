"use client";

import Link from "next/link";
import { useState } from "react";
import { PRODUCTS_DATA } from "@/data/products";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Commercial", "Modular", "Industrial", "Utility"] as const;
type Category = (typeof CATEGORIES)[number];

const link = "rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue";

/**
 * RES-03: compact datasheet library (product, capacity, file, request),
 * filterable by category. Datasheets are sent on request: each row's action
 * prefills the contact form with the product's datasheet reference.
 */
export function DatasheetLibrary() {
  const [category, setCategory] = useState<Category>("All");
  const rows = category === "All" ? PRODUCTS_DATA : PRODUCTS_DATA.filter((p) => p.category === category);

  return (
    <>
      <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
        <fieldset className="inline-flex gap-1 rounded-full bg-surface p-1">
          <legend className="sr-only">Filter datasheets by category</legend>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={category === cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "min-h-11 whitespace-nowrap rounded-full px-4 text-small font-[500] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue",
                category === cat ? "bg-white text-ink shadow-[0_1px_3px_rgb(15_23_42/0.12)]" : "text-ink-2 hover:text-ink"
              )}
            >
              {cat}
            </button>
          ))}
        </fieldset>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {rows.length} {rows.length === 1 ? "datasheet" : "datasheets"}
      </p>

      <div className="relative mt-8 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[620px] border-collapse text-left">
          <caption className="sr-only">Product datasheets</caption>
          <thead>
            <tr className="border-b border-ink text-small text-ink-3">
              <th scope="col" className="py-3 pr-6 font-[500]">
                Product
              </th>
              <th scope="col" className="py-3 pr-6 font-[500]">
                Capacity
              </th>
              <th scope="col" className="py-3 pr-6 font-[500]">
                Category
              </th>
              <th scope="col" className="py-3 text-right font-[500]">
                Datasheet
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => {
              const sheet = p.documents.find((d) => d.type === "datasheet");
              const href = sheet?.downloadUrl ?? `/contact?doc=${encodeURIComponent(`${p.slug}-datasheet`)}`;
              return (
                <tr key={p.id} className="border-b border-line">
                  <th scope="row" className="py-4 pr-6 font-[400]">
                    <Link href={`/products/${p.slug}`} className={cn(link, "text-body font-[500] text-ink")}>
                      {p.name}
                    </Link>
                    <span className="mt-0.5 block font-mono text-small text-ink-3">{p.modelCode}</span>
                  </th>
                  <td className="tabular py-4 pr-6 text-body text-ink-2">{p.capacity}</td>
                  <td className="py-4 pr-6 text-body text-ink-2">{p.category}</td>
                  <td className="py-4 text-right">
                    <Link href={href} className={cn(link, "inline-flex min-h-11 items-center text-small font-[600] text-lithon-blue")}>
                      Request PDF<span className="sr-only">: {p.name} datasheet</span>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
