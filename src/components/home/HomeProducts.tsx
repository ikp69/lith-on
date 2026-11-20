"use client";

import Image from "next/image";
import Link from "next/link";
import { type KeyboardEvent, type PointerEvent, type RefObject, useCallback, useRef, useState } from "react";
import { Button } from "@/components/system/Button";
import { HorizontalRail, type RailSeek, RailItem } from "@/components/system/HorizontalRail";
import { SectionIntro } from "@/components/system/SectionIntro";
import { MORE_PRODUCTS } from "@/data/navigation";
import { cn } from "@/lib/utils";

/**
 * HOME-04 Product rail (audit §5). The homepage's second and last scroll
 * experience (M5): pinned and scroll-driven on desktop, native swipe with snap
 * on touch. Signature element: one logarithmic capacity axis under the rail
 * whose marker follows the rail's progress.
 * Specs from LITHON_DATA_VAULT.md §3 product table only.
 */

interface RailProduct {
  slug: string;
  name: string;
  /** Capacity in kWh, for the axis. */
  kwh: number;
  capacity: string;
  capacityUnit: string;
  capacityNote?: string;
  axisLabel: string;
  power: string;
  format: string;
  /** Catalogue render, background removed (data-sources/Lith-On Catalogue). */
  image: { src: string; width: number; height: number; alt: string };
}

const PRODUCTS: RailProduct[] = [
  {
    slug: "lithon-50",
    name: "Lith-On-50 Compact ESS",
    kwh: 48,
    capacity: "48",
    capacityUnit: "kWh",
    capacityNote: "Scalable",
    axisLabel: "48 kWh",
    power: "48 kW",
    format: "Modular compact cabinet, indoor or outdoor",
    image: { src: "/images/products/catalogue/lithon-50.webp", width: 845, height: 1126, alt: "Lith-On-50 compact energy storage cabinet" },
  },
  {
    slug: "lt215",
    name: "LT215 All-in-One Container",
    kwh: 215,
    capacity: "215",
    capacityUnit: "kWh",
    axisLabel: "215",
    power: "110 kW",
    format: "Modular weatherproof container",
    image: { src: "/images/products/catalogue/lt215.webp", width: 845, height: 1413, alt: "LT215 all-in-one energy storage cabinet with ventilation grille" },
  },
  {
    slug: "magna-ci",
    name: "Magna-C&I Series",
    kwh: 260,
    capacity: "260",
    capacityUnit: "kWh",
    axisLabel: "260",
    power: "125 kW",
    format: "Outdoor all-in-one IP55 cabinet",
    image: { src: "/images/products/catalogue/magna-ci-260.webp", width: 709, height: 1044, alt: "Magna-C&I outdoor cabinet with control display" },
  },
  {
    slug: "max-20hc",
    name: "Max-20HC-5000",
    kwh: 5000,
    capacity: "5",
    capacityUnit: "MWh",
    axisLabel: "5 MWh",
    power: "2.5 MW",
    format: "20-ft high-cube ISO container",
    image: { src: "/images/products/catalogue/max-20hc-5000.webp", width: 1048, height: 672, alt: "Max-20HC-5000 energy storage system in a 20-ft container" },
  },
];

/** Axis spans 10 kWh to 10 MWh on a log10 scale. */
const axisPos = (kwh: number) => ((Math.log10(kwh) - 1) / 3) * 100;
const POSITIONS = PRODUCTS.map((p) => axisPos(p.kwh));
const TICKS = [
  { label: "10 kWh", at: 0 },
  { label: "100 kWh", at: 100 / 3 },
  { label: "1 MWh", at: 200 / 3 },
  { label: "10 MWh", at: 100 },
];

function ProductMedia({ product }: { product: RailProduct }) {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-media bg-surface lg:aspect-[16/11]">
      <Image
        src={product.image.src}
        alt={product.image.alt}
        width={product.image.width}
        height={product.image.height}
        sizes="(min-width: 1024px) 420px, 80vw"
        quality={75}
        className={cn(
          "object-contain drop-shadow-[0_18px_24px_rgb(15_23_42/0.10)]",
          product.image.width > product.image.height ? "h-auto w-[84%]" : "h-[80%] w-auto"
        )}
      />
    </div>
  );
}

function ProductItem({ product, active }: { product: RailProduct; active: boolean }) {
  return (
    <article aria-labelledby={`rail-${product.slug}`} className="flex h-full flex-col">
      <ProductMedia product={product} />
      <div className="mt-6 flex flex-1 flex-col">
        <p className="tabular flex items-baseline gap-x-[0.12em] text-stat-l text-ink">
          <span>{product.capacity}</span>
          <span className="text-[0.32em] font-[500] tracking-normal">{product.capacityUnit}</span>
          {product.capacityNote && <span className="ml-2 text-[0.28em] font-[500] tracking-normal text-ink-3">{product.capacityNote}</span>}
        </p>
        <h3 id={`rail-${product.slug}`} className={cn("mt-2 text-heading-3 transition-colors duration-300", active ? "text-ink" : "text-ink-2")}>
          {product.name}
        </h3>
        <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-line pt-4 text-small">
          <dt className="text-ink-3">Power</dt>
          <dd className="tabular text-ink">{product.power}</dd>
          <dt className="text-ink-3">Format</dt>
          <dd className="text-ink">{product.format}</dd>
        </dl>
        <div className="mt-auto pt-5">
          <Button href={`/products/${product.slug}`} variant="tertiary">
            View {product.name.split(" ")[0]}
          </Button>
        </div>
      </div>
    </article>
  );
}

const LAST = PRODUCTS.length - 1;

const FIRST_AT = POSITIONS[0];
const LAST_AT = POSITIONS[LAST];
/**
 * Pinned tail after the track stops: the marker keeps moving from the last
 * product to the 10 MWh end at the same speed, then the section unpins.
 */
const TAIL_RATIO = (100 - LAST_AT) / (LAST_AT - FIRST_AT);
/**
 * Share of the tail spent moving to 10 MWh; the rest holds the marker at the
 * end (still pinned) so it visibly arrives before the section scrolls away.
 */
const TAIL_TRAVEL = 0.7;

/**
 * Axis position (0–100) to rail progress (0–1). Product dots occupy
 * [0, trackEnd]; the stretch past the last product maps to the pinned tail.
 */
function axisToProgress(at: number, trackEnd: number) {
  if (at <= FIRST_AT) {
    return 0;
  }
  for (let i = 0; i < LAST; i++) {
    if (at <= POSITIONS[i + 1]) {
      return ((i + (at - POSITIONS[i]) / (POSITIONS[i + 1] - POSITIONS[i])) / LAST) * trackEnd;
    }
  }
  return Math.min(1, trackEnd + ((at - LAST_AT) / (100 - LAST_AT)) * (1 - trackEnd) * TAIL_TRAVEL);
}

/** Rail progress to the marker's axis position (0–100). */
function progressToAxis(progress: number, trackEnd: number) {
  if (progress > trackEnd && trackEnd < 1) {
    const t = Math.min(1, (progress - trackEnd) / ((1 - trackEnd) * TAIL_TRAVEL));
    return LAST_AT + t * (100 - LAST_AT);
  }
  const f = (progress / trackEnd) * LAST;
  const i = Math.min(LAST - 1, Math.floor(f));
  return POSITIONS[i] + (POSITIONS[i + 1] - POSITIONS[i]) * (f - i);
}

const KEY_STEP: Record<string, number> = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 };

function CapacityAxis({ progress, trackEnd, seekRef }: { progress: number; trackEnd: number; seekRef: RefObject<RailSeek | null> }) {
  const axisRef = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState<number | null>(null);
  const shown = drag ?? progress;

  // Marker glides between product positions as the rail moves, then on to
  // the 10 MWh end during the pinned tail.
  const markerAt = progressToAxis(shown, trackEnd);
  const active = Math.round(Math.min(1, shown / trackEnd) * LAST);

  const progressAt = (clientX: number) => {
    const rect = axisRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) {
      return shown;
    }
    return axisToProgress(((clientX - rect.left) / rect.width) * 100, trackEnd);
  };

  const goTo = (index: number) => {
    const target = Math.min(LAST, Math.max(0, index));
    seekRef.current?.((target / LAST) * trackEnd, true);
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) {
      return;
    }
    e.currentTarget.setPointerCapture(e.pointerId);
    const p = progressAt(e.clientX);
    setDrag(p);
    seekRef.current?.(p, false);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (drag === null) {
      return;
    }
    const p = progressAt(e.clientX);
    setDrag(p);
    seekRef.current?.(p, false);
  };

  const endDrag = () => {
    if (drag === null) {
      return;
    }
    // Snap to the nearest product; a release past the last product (the
    // pinned tail) stays where it was dropped.
    if (drag <= trackEnd) {
      goTo(Math.round((drag / trackEnd) * LAST));
    }
    setDrag(null);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    let target: number | null = null;
    if (e.key in KEY_STEP) {
      target = active + KEY_STEP[e.key];
    } else if (e.key === "Home") {
      target = 0;
    } else if (e.key === "End") {
      target = LAST;
    }
    if (target !== null) {
      e.preventDefault();
      goTo(target);
    }
  };

  const current = PRODUCTS[active];

  return (
    <figure className="mt-10 lg:mt-12">
      <div
        role="slider"
        tabIndex={0}
        aria-label="Browse products by capacity per unit"
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={LAST}
        aria-valuenow={active}
        aria-valuetext={`${current.name}, ${current.capacity} ${current.capacityUnit}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={onKeyDown}
        className={cn(
          "group -mx-1 cursor-grab touch-pan-y rounded-sm px-1 select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lithon-blue",
          drag !== null && "cursor-grabbing"
        )}
      >
      <div ref={axisRef} className="relative mx-1 h-16" aria-hidden="true">
        {/* product labels */}
        {PRODUCTS.map((p, idx) => {
          const align = p.slug === "lt215" ? "-translate-x-full pr-1.5" : p.slug === "magna-ci" ? "pl-1.5" : "-translate-x-1/2";
          return (
            <span
              key={p.slug}
              className={cn(
                "tabular absolute top-0 text-small whitespace-nowrap transition-colors duration-300",
                align,
                idx === active ? "font-[500] text-ink" : "text-ink-3"
              )}
              style={{ left: `${POSITIONS[idx]}%` }}
            >
              {p.axisLabel}
            </span>
          );
        })}
        {/* line */}
        <div className="absolute inset-x-0 top-9 h-px bg-line-strong" />
        {/* ticks */}
        {TICKS.map((t) => (
          <span key={t.label} className="absolute top-[30px] h-2 w-px bg-line-strong" style={{ left: `${t.at}%` }} />
        ))}
        {/* product dots */}
        {PRODUCTS.map((p, idx) => (
          <span
            key={p.slug}
            className={cn(
              "absolute top-9 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-300",
              idx === active ? "border-lithon-blue bg-lithon-blue" : "border-line-strong bg-white"
            )}
            style={{ left: `${POSITIONS[idx]}%` }}
          />
        ))}
        {/* marker + handle */}
        <span
          className={cn(
            "absolute top-6 h-6 w-0.5 -translate-x-1/2 rounded-full bg-lithon-blue motion-reduce:transition-none",
            drag === null && "transition-[left] duration-200 ease-out"
          )}
          style={{ left: `${markerAt}%` }}
        />
        <span
          className={cn(
            "absolute top-9 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-lithon-blue ring-1 ring-lithon-blue duration-200 ease-out group-hover:scale-110 motion-reduce:transition-none",
            drag === null ? "transition-[left,scale]" : "scale-125 transition-[scale]"
          )}
          style={{ left: `${markerAt}%` }}
        />
        {/* tick labels */}
        {TICKS.map((t, idx) => (
          <span
            key={t.label}
            className={cn(
              "tabular absolute top-12 text-[0.75rem] leading-4 whitespace-nowrap text-ink-3",
              idx === 0 ? "" : idx === TICKS.length - 1 ? "-translate-x-full" : "-translate-x-1/2"
            )}
            style={{ left: `${t.at}%` }}
          >
            {t.label}
          </span>
        ))}
      </div>
      </div>
      <figcaption className="mt-3 text-small text-ink-3">Capacity per unit, logarithmic scale</figcaption>
    </figure>
  );
}

export function HomeProducts() {
  const seekRef = useRef<RailSeek | null>(null);
  const [rail, setRail] = useState({ progress: 0, trackEnd: 1 });

  // Scrubbed progress from the rail (pinned timeline or native scroll).
  const onProgress = useCallback((progress: number, trackEnd: number) => {
    setRail((prev) => (prev.progress === progress && prev.trackEnd === trackEnd ? prev : { progress, trackEnd }));
  }, []);

  const active = Math.round(Math.min(1, rail.progress / rail.trackEnd) * LAST);

  return (
    <section aria-labelledby="home-products-title" className="section bg-canvas">
      <div className="container-site">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-10">
          <SectionIntro
            title={<span id="home-products-title">Four product families, 48 kWh to 5 MWh</span>}
            lead="Cabinets and containers, each assembled and tested at our Noida plant. The full range runs from home batteries to 10 MWh containers."
            className="mb-6 lg:mb-12"
          />
          <div className="mb-10 lg:mb-12 lg:shrink-0">
            <Button href="/products" variant="tertiary">
              All products
            </Button>
          </div>
        </div>
        <HorizontalRail
          label="Lith-On product families"
          scrollDriven
          bleed
          controlRef={seekRef}
          tailRatio={TAIL_RATIO}
          onProgress={onProgress}
          footer={<CapacityAxis progress={rail.progress} trackEnd={rail.trackEnd} seekRef={seekRef} />}
        >
          {PRODUCTS.map((p, idx) => (
            <RailItem key={p.slug} className="w-[min(82vw,360px)] md:w-[min(44vw,380px)] lg:w-[clamp(340px,34vw,480px)]">
              <ProductItem product={p} active={idx === active} />
            </RailItem>
          ))}
        </HorizontalRail>
        <div className="mt-10 border-t border-line pt-5 lg:flex lg:items-baseline lg:gap-8">
          <p className="text-small font-[500] text-ink lg:shrink-0">Also in the range</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 lg:mt-0">
            {MORE_PRODUCTS.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="inline-flex min-h-9 items-baseline gap-2 text-small text-ink-2 underline-offset-4 hover:text-lithon-blue hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue rounded-sm"
                >
                  {p.label}
                  <span className="tabular text-ink-3">{p.meta}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
