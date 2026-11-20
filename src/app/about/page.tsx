import type { Metadata } from "next";
import Image from "next/image";
import { SitesSplit } from "@/components/company/SitesSplit";
import { Button } from "@/components/system/Button";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { HorizontalRail, RailItem } from "@/components/system/HorizontalRail";
import { PageHero } from "@/components/system/PageHero";
import { SectionIntro } from "@/components/system/SectionIntro";
import { StatBand } from "@/components/system/Stat";

export const metadata: Metadata = {
  title: "About Lith-On Bharat Energy | Battery Storage Manufacturer in Noida",
  description:
    "Founded in 2022 as Neoclo Energy, Lith-On designs and manufactures battery energy storage at a 20,000 sq. ft. plant in Noida, with a hub in Foshan.",
};

/**
 * /about (audit §6.8). Editorial hero → stat band (ABT-02) → our story
 * (ABT-03/04 merged) → Noida and Foshan (ABT-05) → timeline rail (ABT-07) →
 * standards (ABT-08) → values (ABT-09) → statement closing (ABT-10).
 * ABT-06 exports removed (projects live in Case Studies). Sources:
 * LITHON_DATA_VAULT.md §1–2, §5; timeline from the client corporate deck
 * (data-sources/Lith-On Corporate Deck, page 4).
 */

const TIMELINE = [
  { year: "2022", title: "Lith-On established", text: "Founded as Neoclo Energy Private Limited, with a vision to redefine energy storage in India." },
  { year: "2023", title: "First lithium battery", text: "Launched for the inverter segment." },
  { year: "2024", title: "First 50 kWh systems", text: "Production capacity scaled to 150 kWh." },
  { year: "2025", title: "Critical BESS commissioned", text: "For PSUs, Defence and large corporates, with capacities up to 1.5 MWh." },
  { year: "Jul 2025", title: "Eco and Premium series", text: "Launched for different affordability and performance needs." },
  { year: "Oct 2025", title: "Fully integrated BESS", text: "Introduced with PCS, BMS, fire protection and complete enclosures." },
];

const VALUES = [
  { title: "Engineered for Indian conditions", text: "Systems designed for summer heat up to 60 °C ambient, unstable grids and diesel restrictions." },
  { title: "Safety at every level", text: "LFP chemistry, multi-stage electrical isolation, cell-level telemetry and the IceBattery® thermal shield." },
  { title: "Built to last", text: "More than 6,000 cycles at 88–90% depth of discharge, a 15–20 year design life and a warranty set for each product." },
  { title: "With you after commissioning", text: "Cloud SCADA monitoring with predictive anomaly detection, cell-level health tracking and alarms." },
];

const STANDARDS = [
  { code: "IEC 61508", text: "Functional safety of electrical, electronic and programmable safety-related systems, covering the battery and PCS controller architecture." },
  { code: "IEC 61850", text: "Communication for substation automation, teleprotection and grid-interactive SCADA." },
  { code: "BIS", text: "Bureau of Indian Standards compliance for lithium cell chemistry, module packaging and domestic distribution." },
];

export default function AboutPage() {
  return (
    <div className="bg-canvas">
      {/* ABT-01 */}
      <PageHero
        variant="editorial"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        title={["Battery storage,", "built in India"]}
        lead="Founded in 2022 as Neoclo Energy, Lith-On designs and manufactures battery energy storage in Noida."
        visual={
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-media bg-surface">
              <Image src="/images/factory/noida-facility-bench-photo.jpg" alt="Lith-On home and commercial battery units on display" fill priority sizes="(min-width: 1024px) 30vw, 100vw" quality={80} className="object-cover object-[70%_50%]" />
            </div>
            <figcaption className="mt-2 text-small text-ink-3">Lith-On home and commercial battery units</figcaption>
          </figure>
        }
      />

      {/* ABT-02 */}
      <section aria-labelledby="about-numbers" className="pb-16 lg:pb-24">
        <div className="container-site">
          <h2 id="about-numbers" className="sr-only">
            Lith-On in numbers
          </h2>
          <StatBand
            stats={[
              { value: 250, unit: "MWh", label: "Annual manufacturing capacity", note: "50 MWh BESS and 200 MWh battery packs" },
              { value: 20000, label: "Sq. ft. assembly and testing plant", note: "Sector 136, Noida" },
              { value: 500, unit: "+ MWh", label: "Deployed globally" },
              { value: 25, unit: "+", label: "Countries", note: "Asia, Middle East, Africa, N. America" },
            ]}
          />
        </div>
      </section>

      {/* ABT-03/04 */}
      <section id="company" aria-labelledby="story-title" className="section scroll-mt-24 bg-canvas-warm">
        <div className="container-site">
          <h2 id="story-title" className="text-small font-[500] text-ink-3">
            Our story
          </h2>
          <p className="mt-6 max-w-4xl text-display-l text-balance text-ink">We design storage for Indian conditions: summer heat, unstable grids and diesel restrictions.</p>
          <div className="mt-12 grid gap-10 border-t border-line pt-10 md:grid-cols-2 md:gap-6">
            <div>
              <h3 className="text-heading-3 text-ink">From Neoclo Energy to Lith-On</h3>
              <p className="mt-3 text-body text-ink-2">
                The company was incorporated in 2022 as Neoclo Energy Private Limited. It now operates as Lith-On Bharat Energy Private Limited, making battery packs and
                energy storage systems for commercial, industrial and utility customers.
              </p>
            </div>
            <div>
              <h3 className="text-heading-3 text-ink">Leadership</h3>
              <p className="mt-3 text-body text-ink-2">
                IIT alumni lead the company alongside energy storage specialists with more than 40 years of combined Indian grid engineering experience. The battery
                management, power conversion, energy management and SCADA software are developed in-house.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABT-05 */}
      <section id="manufacturing" aria-labelledby="sites-title" className="section scroll-mt-24">
        <div className="container-site">
          <SectionIntro title={<span id="sites-title">Two sites</span>} lead="Manufacturing in Noida, with an international innovation and supply hub in Foshan." split className="mb-8 lg:mb-10" />
          <SitesSplit plantLink />
        </div>
      </section>

      {/* ABT-07 */}
      <section id="timeline" aria-labelledby="timeline-title" className="section scroll-mt-24 bg-canvas-warm">
        <div className="container-site">
          <SectionIntro title={<span id="timeline-title">Our growth</span>} lead="From a first lithium battery to fully integrated storage systems, since 2022." split className="mb-8 lg:mb-10" />
          <HorizontalRail label="Company timeline">
            {TIMELINE.map((t, i) => (
              <RailItem key={t.year} className="w-[min(76vw,300px)] lg:w-[280px]">
                <div className="relative pt-8">
                  <span aria-hidden="true" className="absolute top-[11px] right-[-24px] left-0 h-px bg-line-strong" />
                  <span aria-hidden="true" className={`absolute top-1.5 left-0 size-3 rounded-full ${i === TIMELINE.length - 1 ? "bg-lithon-blue" : "border-2 border-lithon-blue bg-canvas-warm"}`} />
                  <p className="tabular text-heading-2 text-ink">{t.year}</p>
                  <h3 className="mt-2 text-body font-[500] text-ink">{t.title}</h3>
                  <p className="mt-1 text-small text-ink-2">{t.text}</p>
                </div>
              </RailItem>
            ))}
          </HorizontalRail>
        </div>
      </section>

      {/* ABT-08 */}
      <section id="certifications" aria-labelledby="standards-title" className="section scroll-mt-24">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <h2 id="standards-title" className="text-heading-1 text-ink">
              Standards
            </h2>
            <div className="mt-6">
              <Button href="/certifications" variant="tertiary">
                Certifications
              </Button>
            </div>
          </div>
          <dl className="border-t border-line lg:col-span-8">
            {STANDARDS.map((s) => (
              <div key={s.code} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="tabular text-heading-3 text-ink">{s.code}</dt>
                <dd className="text-body text-ink-2">{s.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ABT-09 */}
      <section aria-labelledby="values-title" className="section-tight">
        <div className="container-site">
          <SectionIntro title={<span id="values-title">What we hold to</span>} className="mb-8 lg:mb-10" />
          <ol className="grid gap-x-6 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <li key={v.title} className="grid grid-cols-[3rem_1fr] border-t border-line py-6">
                <span className="tabular text-small text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-heading-3 text-ink">{v.title}</h3>
                  <p className="mt-2 text-body text-ink-2">{v.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ABT-10 */}
      <ClosingCTA
        variant="statement"
        title={["Visit the plant", "in Noida"]}
        lead="See how systems are assembled and tested at our Sector 136 plant, and talk through your site with our engineers."
        primary={{ label: "Arrange a visit", href: "/contact" }}
        links={[
          { label: "Manufacturing", href: "/capabilities", description: "Our six-step process" },
          { label: "Careers", href: "/careers", description: "Join the team in Noida" },
          { label: "Distributors", href: "/distributor", description: "Partner with Lith-On" },
        ]}
      />
    </div>
  );
}
