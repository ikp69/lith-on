import { GraduationCap, Layers, ShieldCheck, ThermometerSun } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/system/Button";
import { cn } from "@/lib/utils";

/**
 * Why Lith-On (Hallmark redesign, full depth, inside design.md).
 *
 *   intro (open)            | the product family on `surface` (signature)
 *   full stack | heat (blue) | certified
 *   40+ pedigree, an open ruled row
 *
 * Imagery is genuine Lith-On hardware only (design.md §12): the catalogue
 * cut-outs, shown without containers on `surface` (§11). One entrance for the
 * section, staggered (M1). The products are not links, so they hold still.
 * Facts from content/about.md, content/why-lith-on.md, LITHON_DATA_VAULT.md
 * §1–2 and design.md §12 (product names and capacities).
 */

const FAMILY = [
  { src: "/images/products/catalogue/lithon-50.webp", w: 845, h: 1126, name: "Lith-On-50", cap: "48 kWh", height: "clamp(170px, 17vw, 250px)" },
  { src: "/images/products/catalogue/magna-ci-260.webp", w: 709, h: 1044, name: "Magna-C&I 260", cap: "260 kWh", height: "clamp(190px, 19.5vw, 285px)" },
  { src: "/images/products/catalogue/lt215.webp", w: 845, h: 1413, name: "LT215", cap: "215 kWh", height: "clamp(210px, 22vw, 320px)" },
  { src: "/images/products/catalogue/max-20hc-5000.webp", w: 1048, h: 672, name: "Max-20HC-5000", cap: "5.0 MWh", height: "clamp(120px, 12.5vw, 180px)" },
];

const STACK = [
  { k: "EMS", v: "Energy management" },
  { k: "PCS", v: "Power conversion" },
  { k: "BMS", v: "Battery management" },
];

const CERTS = [
  { k: "IEC 61508", v: "Functional safety" },
  { k: "IEC 61850", v: "Utility communication" },
  { k: "BIS", v: "Indian standards compliance" },
];

const tile = "flex flex-col rounded-media p-7 sm:p-8";
const tileHead = "mt-5 text-heading-3";

/* Illustrative dial: ticks and an arc that stops short of full. Not a reading. */
const TICKS = Array.from({ length: 31 }, (_, i) => i);
const ARC = "M 30.7 140 A 80 80 0 1 1 169.3 140";
const pt = (r: number, a: number, f: (x: number) => number) => Math.round((100 + r * f(a)) * 100) / 100;

function HeatDial() {
  return (
    <svg viewBox="0 0 200 160" role="img" aria-label="60 °C rated ambient" className="mx-auto h-auto w-full max-w-[230px]">
      <title>60 °C rated ambient</title>
      {TICKS.map((i) => {
        const a = ((-210 + i * 8) * Math.PI) / 180;
        const major = i % 5 === 0;
        const r1 = major ? 62 : 66;
        return (
          <line
            key={i}
            x1={pt(r1, a, Math.cos)}
            y1={pt(r1, a, Math.sin)}
            x2={pt(72, a, Math.cos)}
            y2={pt(72, a, Math.sin)}
            stroke="currentColor"
            strokeOpacity={major ? 0.6 : 0.25}
            strokeWidth={major ? 1.6 : 1}
            strokeLinecap="round"
          />
        );
      })}
      <path d={ARC} fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="3" strokeLinecap="round" />
      <path d={ARC} fill="none" stroke="var(--color-lithon-red)" strokeWidth="3" strokeLinecap="round" strokeDasharray="335.1" strokeDashoffset="83.8" />
      <text x="100" y="108" textAnchor="middle" fill="currentColor" style={{ fontSize: 42, fontWeight: 300, letterSpacing: "-0.04em" }}>
        60
        <tspan dx="2" dy="-17" style={{ fontSize: 16 }}>
          °C
        </tspan>
      </text>
      <text x="100" y="131" textAnchor="middle" fill="currentColor" fillOpacity="0.75" style={{ fontSize: 12 }}>
        Rated ambient
      </text>
    </svg>
  );
}

export function WhyBento() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
      {/* Intro: open, no card */}
      <Reveal className="flex min-w-0 flex-col justify-between gap-10 py-2 md:col-span-2 lg:col-span-5 lg:pr-8">
        <h2 id="why-lithon-title" className="min-w-0 text-display-l text-ink [overflow-wrap:break-word]">
          Why Lith-On
        </h2>
        <div>
          <p className="text-pretty text-lead text-ink">
            Lith-On Bharat Energy is an Indian manufacturer and integrator of lithium battery packs and turnkey battery energy
            storage systems, designed and built in Noida.
          </p>
          <p className="mt-4 text-pretty text-body text-ink-2">
            Founded in 2022 as Neoclo Energy, we deliver safe, scalable LiFePO4 storage that helps commercial and industrial sites cut
            diesel use, manage peak demand and keep power continuous.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2">
            <Button href="/about" variant="tertiary">
              More about Lith-On
            </Button>
            <p className="text-small text-ink-3">Headquarters and plant in Sector 136, Noida</p>
          </div>
        </div>
      </Reveal>

      {/* Signature: the product family, genuine cut-outs on surface */}
      <Reveal delay={0.09} className="md:col-span-2 lg:col-span-7">
        <figure className="flex h-full flex-col justify-end rounded-media bg-surface px-6 pt-10 pb-6 sm:px-10 sm:pt-14">
          <ul className="grid grid-cols-2 items-end gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-4">
            {FAMILY.map((p) => (
              <li key={p.name} className="flex min-w-0 flex-col items-center">
                <div className="relative w-full" style={{ height: p.height }}>
                  <Image
                    src={p.src}
                    alt={`${p.name} energy storage system`}
                    fill
                    sizes="(min-width: 1024px) 15vw, (min-width: 640px) 22vw, 45vw"
                    quality={80}
                    className="object-contain object-bottom"
                  />
                </div>
                <div className="mt-4 w-full border-line-strong border-t pt-3 text-center">
                  <p className="text-small text-ink">{p.name}</p>
                  <p className="tabular text-small text-ink-2">{p.cap}</p>
                </div>
              </li>
            ))}
          </ul>
          <figcaption className="sr-only">The Lith-On product family, from a 48 kWh cabinet to a 5.0 MWh container.</figcaption>
        </figure>
      </Reveal>

      {/* Full stack: hairline rows, no inner cards */}
      <Reveal delay={0.18} className="lg:col-span-4">
        <article className={cn(tile, "h-full bg-surface")}>
          <Layers aria-hidden="true" className="size-6 text-lithon-blue" strokeWidth={1.5} />
          <h3 className={cn(tileHead, "text-ink")}>Full stack, designed in-house</h3>
          <p className="mt-2 text-pretty text-body text-ink-2">Our own hardware and firmware, tuned for the Indian grid.</p>
          <ul className="mt-auto pt-8">
            {STACK.map((l) => (
              <li key={l.k} className="flex items-baseline justify-between gap-4 border-line-strong border-t py-3">
                <span className="text-heading-2 text-ink">{l.k}</span>
                <span className="text-small text-ink-2">{l.v}</span>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>

      {/* Heat: the one blue tile */}
      <Reveal delay={0.27} className="lg:col-span-4">
        <article className={cn(tile, "h-full bg-lithon-blue text-white")}>
          <ThermometerSun aria-hidden="true" className="size-6" strokeWidth={1.5} />
          <h3 className={tileHead}>Built for Indian heat</h3>
          <div className="my-6">
            <HeatDial />
          </div>
          <p className="mt-auto text-pretty text-small text-on-dark-2">
            IceBattery® applies a 300 to 400 µm ceramic coating to the enclosure.
          </p>
        </article>
      </Reveal>

      {/* Certified: outlined, standards set large */}
      <Reveal delay={0.36} className="md:col-span-2 lg:col-span-4">
        <article className={cn(tile, "h-full border border-line bg-canvas")}>
          <ShieldCheck aria-hidden="true" className="size-6 text-lithon-blue" strokeWidth={1.5} />
          <h3 className={cn(tileHead, "text-ink")}>Certified for critical sites</h3>
          <ul className="mt-auto pt-8">
            {CERTS.map((c) => (
              <li key={c.k} className="border-line border-t py-3">
                <p className="tabular text-heading-2 text-ink">{c.k}</p>
                <p className="text-small text-ink-3">{c.v}</p>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>

      {/* Pedigree: open ruled row */}
      <Reveal delay={0.45} className="md:col-span-2 lg:col-span-12">
        <div className="mt-6 grid gap-6 border-line border-t pt-10 lg:grid-cols-12 lg:items-end">
          <p className="tabular text-ink leading-[0.9] lg:col-span-5" style={{ fontSize: "clamp(88px, 10vw, 144px)", fontWeight: 300, letterSpacing: "-0.045em" }}>
            40<span className="text-lithon-red">+</span>
          </p>
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <GraduationCap aria-hidden="true" className="size-6 text-lithon-blue" strokeWidth={1.5} />
              <h3 className="text-heading-3 text-ink">Engineering pedigree</h3>
            </div>
            <p className="mt-2 max-w-[48ch] text-pretty text-body text-ink-2">
              IIT alumni leadership with seasoned grid and storage engineers, bringing more than 40 cumulative years of engineering
              experience.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
