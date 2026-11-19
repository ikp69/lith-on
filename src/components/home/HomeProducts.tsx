"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/system/Button";
import { HorizontalRail, RailItem } from "@/components/system/HorizontalRail";
import { SectionIntro } from "@/components/system/SectionIntro";
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
    power: "1.25 MW",
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

function CapacityAxis({ progress }: { progress: number }) {
  // Marker glides between product positions as the rail moves.
  const f = progress * (PRODUCTS.length - 1);
  const i = Math.min(PRODUCTS.length - 2, Math.floor(f));
  const markerAt = POSITIONS[i] + (POSITIONS[i + 1] - POSITIONS[i]) * (f - i);
  const active = Math.round(f);

  return (
    <figure className="mt-10 lg:mt-12" aria-label="Capacity per unit on a logarithmic scale, from 10 kWh to 10 MWh">
      <div className="relative mx-1 h-16" aria-hidden="true">
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
        {/* marker */}
        <span
          className="absolute top-6 h-6 w-0.5 -translate-x-1/2 rounded-full bg-lithon-blue transition-[left] duration-200 ease-out motion-reduce:transition-none"
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
      <figcaption className="mt-3 text-small text-ink-3">Capacity per unit, logarithmic scale</figcaption>
    </figure>
  );
}

export function HomeProducts() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Rail progress from the track's position, whether it moves by pin
  // (transform) or by native horizontal scroll.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) {
      return;
    }
    let frame = 0;
    const measure = () => {
      frame = 0;
      const track = wrap.querySelector<HTMLElement>("[data-rail-item]")?.parentElement;
      const viewport = track?.parentElement;
      if (!track || !viewport) {
        return;
      }
      const pinned = getComputedStyle(viewport).overflowX === "hidden";
      let shift = viewport.scrollLeft;
      let max = viewport.scrollWidth - viewport.clientWidth;
      if (pinned) {
        // Track is moved by a transform; read it from the layout boxes.
        const cs = getComputedStyle(viewport);
        const padL = Number.parseFloat(cs.paddingLeft) || 0;
        const padR = Number.parseFloat(cs.paddingRight) || 0;
        shift = viewport.getBoundingClientRect().left + padL - track.getBoundingClientRect().left;
        max = track.scrollWidth - (viewport.clientWidth - padL - padR);
      }
      setProgress(max < 1 ? 0 : Math.min(1, Math.max(0, shift / max)));
    };
    const schedule = () => {
      if (!frame) {
        frame = requestAnimationFrame(measure);
      }
    };
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    wrap.addEventListener("scroll", schedule, { passive: true, capture: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      wrap.removeEventListener("scroll", schedule, { capture: true });
    };
  }, []);

  const active = Math.round(progress * (PRODUCTS.length - 1));

  return (
    <section aria-labelledby="home-products-title" className="section bg-canvas">
      <div ref={wrapRef} className="container-site">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-10">
          <SectionIntro
            title={<span id="home-products-title">Four product families, 48 kWh to 5 MWh</span>}
            lead="Cabinets and containers, each assembled and tested at our Noida plant."
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
          footer={<CapacityAxis progress={progress} />}
        >
          {PRODUCTS.map((p, idx) => (
            <RailItem key={p.slug} className="w-[min(82vw,360px)] md:w-[min(44vw,380px)] lg:w-[clamp(340px,34vw,480px)]">
              <ProductItem product={p} active={idx === active} />
            </RailItem>
          ))}
        </HorizontalRail>
      </div>
    </section>
  );
}
