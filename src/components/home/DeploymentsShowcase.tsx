"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * "Deployed for": one large installation photograph with the heading set into
 * a notch at the top left and the other deployments as thumbnails in a notch
 * at the top right. Choosing a thumbnail crossfades it into the main frame.
 * Photographs from the client catalogue; clients from LITHON_DATA_VAULT.md.
 */

export interface Deployment {
  src: string;
  alt: string;
  client: string;
  where: string;
}

/** Notch radius, matched to the frame's outer radius. */
const R = 28;
/** Concave fillet that joins a notch to the frame edge. */
const fillet = (at: "100% 100%" | "0% 100%") => ({
  width: R,
  height: R,
  background: `radial-gradient(circle at ${at}, transparent ${R - 0.5}px, var(--color-canvas-warm) ${R}px)`,
});

export function DeploymentsShowcase({ items, also }: { items: Deployment[]; also?: string }) {
  const [active, setActive] = useState(0);
  const current = items[active] ?? items[0];
  if (!current) {
    return null;
  }

  const heading = (
    <div>
      <h3 className="text-heading-1 text-ink">Deployed for</h3>
      {also && <p className="mt-2 text-small text-ink-3">{also}</p>}
    </div>
  );

  const thumbs = (
    <ul className="flex gap-3">
      {items.map((d, i) =>
        i === active ? null : (
          <li key={d.client}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${d.client}, ${d.where}`}
              className="group relative block size-20 overflow-hidden rounded-[16px] bg-surface outline-offset-2 transition-[scale] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-lithon-blue active:scale-[0.96] sm:size-24 lg:size-28"
            >
              <Image src={d.src} alt="" fill sizes="112px" quality={70} className="object-cover transition-[scale] duration-300 ease-out group-hover:scale-105" />
              <span aria-hidden="true" className="absolute inset-0 rounded-[16px] ring-1 ring-black/10 ring-inset" />
            </button>
          </li>
        )
      )}
    </ul>
  );

  return (
    <div>
      {/* Phones: heading above, thumbnails below; no notches */}
      <div className="mb-5 sm:hidden">{heading}</div>

      <figure className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-surface sm:aspect-[16/10] lg:aspect-[16/8]">
          {items.map((d, i) => (
            <Image
              key={d.src}
              src={d.src}
              alt={i === active ? d.alt : ""}
              aria-hidden={i === active ? undefined : true}
              fill
              sizes="(min-width: 1440px) 1312px, 100vw"
              quality={80}
              className={cn(
                "object-cover object-[center_40%] transition-opacity duration-500 ease-out motion-reduce:transition-none",
                i === active ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
          <span aria-hidden="true" className="absolute inset-0 rounded-[28px] ring-1 ring-black/10 ring-inset" />

          {/* Caption pill */}
          <figcaption
            aria-live="polite"
            className="absolute bottom-4 left-4 flex max-w-[calc(100%-32px)] items-center gap-3 rounded-full bg-white/95 py-2 pr-5 pl-2 shadow-[0_8px_24px_rgba(17,24,39,0.12)] backdrop-blur-sm sm:bottom-6 sm:left-6"
          >
            <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full bg-lithon-blue/10">
              <span className="size-2 rounded-full bg-lithon-red" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-[600] text-[14px] text-ink">{current.client}</span>
              <span className="block truncate text-[12px] text-ink-3">{current.where}</span>
            </span>
          </figcaption>
        </div>

        {/* Top-left notch: heading */}
        <div className="absolute top-0 left-0 hidden rounded-br-[28px] bg-canvas-warm pr-8 pb-6 sm:block lg:pr-12 lg:pb-8">
          {heading}
          <span aria-hidden="true" className="absolute top-0 -right-7" style={fillet("100% 100%")} />
          <span aria-hidden="true" className="absolute -bottom-7 left-0" style={fillet("100% 100%")} />
        </div>

        {/* Top-right notch: other deployments */}
        <div className="absolute top-0 right-0 hidden rounded-bl-[28px] bg-canvas-warm pb-3 pl-3 sm:block">
          {thumbs}
          <span aria-hidden="true" className="absolute top-0 -left-7" style={fillet("0% 100%")} />
          <span aria-hidden="true" className="absolute right-0 -bottom-7" style={fillet("0% 100%")} />
        </div>
      </figure>

      <div className="mt-4 sm:hidden">{thumbs}</div>
    </div>
  );
}
