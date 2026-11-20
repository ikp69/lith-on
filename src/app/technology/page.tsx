import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { CompareSection } from "@/components/system/CompareTable";
import { PageHero } from "@/components/system/PageHero";
import { ScrollStory, type StoryChapter } from "@/components/system/ScrollStory";
import { SectionIntro } from "@/components/system/SectionIntro";
import { StatBand } from "@/components/system/Stat";
import { CutoverCompare } from "@/components/technology/CutoverCompare";
import { ModeDiagram } from "@/components/technology/ModeDiagram";
import { ThermalStep } from "@/components/technology/ThermalStep";
import { LEAD_ACID_VS_LITHIUM } from "@/data/comparisons";

export const metadata: Metadata = {
  title: "Technology | IceBattery®, Under-10 ms Cutover and LFP | Lith-On",
  description:
    "How Lith-On storage works: IceBattery® thermal shielding, under-10 ms cutover, an in-house BMS, PCS, EMS and SCADA stack, and LFP cells rated for 6,000+ cycles.",
};

/**
 * /technology (audit §6.5). Editorial hero with chapter index (TEC-01) →
 * inside the system (TEC-02 interim) → IceBattery scroll story (TEC-03, the
 * page's scroll experience) → cutover comparison (TEC-04) → control stack and
 * six modes (TEC-05) → LFP stat band (TEC-06) → lead-acid comparison →
 * inline closing (TEC-07). Anchors kept: cutaway, icebattery, waveform,
 * stack, flow, lifepo4. Figures from LITHON_DATA_VAULT.md §2.
 */

const THERMAL: StoryChapter[] = [
  { id: "ice-heat", title: "Sunlight heats bare steel", body: "In an Indian summer, a plain steel cabinet absorbs sunlight and the heat reaches the cells inside.", visual: <ThermalStep step={0} /> },
  { id: "ice-reflect", title: "The coating reflects it", body: "IceBattery® is a 300–400 µm inorganic ceramic coating with high reflectance in the near-infrared, so most incoming solar heat bounces off.", visual: <ThermalStep step={1} /> },
  { id: "ice-radiate", title: "Heat radiates away", body: "Its emissivity above 0.92 in the 8–13 µm atmospheric window lets heat inside the cabinet radiate out to the sky.", visual: <ThermalStep step={2} /> },
  {
    id: "ice-result",
    title: "The result",
    body: "Lower internal temperature, full power on the hottest days, and less energy spent on cooling.",
    visual: <ThermalStep step={3} />,
    aside: (
      <dl className="grid gap-6 border-t border-line pt-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        {[
          ["15–30 °C", "Lower internal temperature"],
          ["60 °C", "Ambient limit at full power"],
          ["> 20%", "Less cooling energy"],
        ].map(([v, l]) => (
          <div key={l}>
            <dt className="sr-only">{l}</dt>
            <dd className="tabular text-heading-1 text-ink">{v}</dd>
            <dd className="mt-1 text-small text-ink-2">{l}</dd>
          </div>
        ))}
      </dl>
    ),
  },
];

const SUBSYSTEMS = [
  { name: "LFP battery racks", fact: "Lithium iron phosphate cells rated for more than 6,000 cycles at 88–90% depth of discharge." },
  { name: "Battery management (BMS)", fact: "Three-tier cell-level active balancing, telemetry and multi-stage isolation for voltage, current and temperature faults." },
  { name: "Power conversion (PCS)", fact: "Bi-directional inverters with four-quadrant grid support and synthetic inertia." },
  { name: "Energy management (EMS)", fact: "An edge controller running six automatic operating modes." },
  { name: "Cloud SCADA", fact: "Real-time monitoring with predictive anomaly detection, cell-level state-of-health tracking and alarms." },
  { name: "IceBattery® shield", fact: "A 300–400 µm ceramic coating on the enclosure that keeps the cabinet 15–30 °C cooler inside." },
];

export default function TechnologyPage() {
  return (
    <div className="bg-canvas">
      {/* TEC-01 */}
      <PageHero
        variant="editorial"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Technology" }]}
        title={["How a Lith-On", "system works"]}
        lead="A ceramic thermal shield, instant cutover, a control stack built in-house and long-life LFP cells."
        index={[
          { label: "IceBattery® thermal shield", href: "#icebattery" },
          { label: "Under-10 ms cutover", href: "#waveform" },
          { label: "Control stack and modes", href: "#stack" },
          { label: "LFP cells", href: "#lifepo4" },
        ]}
      />

      {/* TEC-02 Inside the system (interim until a layout drawing exists) */}
      <section id="cutaway" aria-labelledby="cutaway-title" className="section-tight scroll-mt-24">
        <div className="container-site">
          <SectionIntro title={<span id="cutaway-title">Inside the system</span>} lead="What sits inside a Lith-On cabinet or container, and what each part does." split className="mb-8 lg:mb-10" />
          <figure>
            <div className="relative aspect-[1522/560] overflow-hidden rounded-media bg-stage-dark">
              <Image src="/images/products/cutaway-interior.webp" alt="Cutaway render of a containerised system showing battery racks, control and power conversion cabinets" fill sizes="(min-width: 1360px) 1360px, 100vw" quality={75} className="object-cover" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[12px] text-ink-2">Illustrative render</span>
            </div>
          </figure>
          <dl className="mt-10 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {SUBSYSTEMS.map((s) => (
              <div key={s.name} className="border-t border-line py-5">
                <dt className="text-body font-[500] text-ink">{s.name}</dt>
                <dd className="mt-1.5 text-small text-ink-2">{s.fact}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* TEC-03 IceBattery scroll story */}
      <section id="icebattery" aria-labelledby="ice-title" className="section scroll-mt-24 bg-canvas-warm">
        <div className="container-site">
          <ScrollStory
            chapters={THERMAL}
            mediaAspect="3/2"
            introBg="bg-canvas-warm"
            intro={
              <SectionIntro
                title={<span id="ice-title">IceBattery® thermal shield</span>}
                lead="Why a coated cabinet stays cool in Indian heat, in four steps."
                split
                className="lg:mb-8"
              />
            }
          />
        </div>
      </section>

      {/* TEC-04 Cutover */}
      <section id="waveform" aria-labelledby="waveform-title" className="section scroll-mt-24">
        <div className="container-site">
          <SectionIntro title={<span id="waveform-title">Cutover in under 10 milliseconds</span>} lead="When the grid fails, the supply carries on. One 50 Hz cycle lasts 20 ms; the cutover takes less than half of one." split className="mb-8 lg:mb-10" />
          <CutoverCompare />
          <p className="mt-6 max-w-3xl text-small text-ink-3">Lifts do not stall, Wi-Fi routers do not reboot, and IT servers run through the outage without a separate double-conversion UPS.</p>
        </div>
      </section>

      {/* TEC-05 Stack and modes */}
      <section id="stack" aria-labelledby="stack-title" className="section scroll-mt-24 bg-canvas-warm">
        <div className="container-site">
          <SectionIntro
            title={<span id="stack-title">One control stack, six modes</span>}
            lead="The battery management, power conversion, energy management and SCADA software are all developed by Lith-On. Choose a mode to see how power flows."
            split
            className="mb-8 lg:mb-10"
          />
          <div id="flow" className="scroll-mt-28">
            <ModeDiagram />
          </div>
        </div>
      </section>

      {/* TEC-06 LFP */}
      <section id="lifepo4" aria-labelledby="lfp-title" className="section scroll-mt-24">
        <div className="container-site">
          <SectionIntro title={<span id="lfp-title">LFP cells</span>} lead="Lithium iron phosphate: thermally stable, free of cobalt and nickel, and non-combustible under puncture testing." split />
          <StatBand
            stats={[
              { value: 6000, prefix: ">", unit: "cycles", label: "At 88–90% depth of discharge", note: "15–20 year design life" },
              { value: 10, unit: "years", label: "Standard manufacturer warranty" },
              { value: 95, prefix: ">", unit: "%", label: "Round-trip efficiency" },
              { value: 2.5, decimals: 1, prefix: "<", unit: "% / month", label: "Self-discharge", note: "Against 10–15% for lead-acid" },
            ]}
          />
        </div>
      </section>

      <div className="pb-20 lg:pb-28">
        <CompareSection data={LEAD_ACID_VS_LITHIUM} />
      </div>

      {/* TEC-07 */}
      <ClosingCTA
        variant="inline"
        title={["Talk to an engineer about your site"]}
        lead="We will recommend a system and explain how it would run."
        primary={{ label: "Talk to an engineer", href: "/contact?type=assessment" }}
        secondary={{ label: "Browse products", href: "/products" }}
      />
    </div>
  );
}
