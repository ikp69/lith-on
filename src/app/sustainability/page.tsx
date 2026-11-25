import type { Metadata } from "next";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { ImpactCompare } from "@/components/sustainability/ImpactCompare";
import { Button } from "@/components/system/Button";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { PageHero } from "@/components/system/PageHero";
import { SectionIntro } from "@/components/system/SectionIntro";
import { StatBand } from "@/components/system/Stat";

export const metadata: Metadata = {
  title: "Sustainability | Backup Power Without Diesel Exhaust | Lith-On",
  description:
    "How Lith-On battery storage cuts on-site diesel use: no fuel burned at the point of use, operation through GRAP restrictions, solar storage and LFP cells.",
};

/**
 * /sustainability (audit §6.16). Image hero (SUS-01, illustrative scene) →
 * one-site stat band (SUS-02) → the cost of diesel as four figures (SUS-03) →
 * diesel vs Lith-On comparison with bars (SUS-04) → GRAP and solar splits
 * (SUS-05) → lifecycle (SUS-06) → inline closing (SUS-07).
 * Sources: content/sustainability.md; LITHON_DATA_VAULT.md §2, §4 (Case B),
 * §5. Emissions are stated as direct, on-site emissions: grid charging is not
 * zero-carbon and no grid factor is sourced.
 */

const DIESEL_COSTS = [
  { value: <CountUp value={2.68} decimals={2} />, unit: "kg", label: "CO₂ from every litre of diesel burned" },
  { value: "PM2.5", label: "Fine particulates that reach deep into the lungs and add to winter smog" },
  { value: "NOx · SOx", label: "Nitrogen and sulphur oxides released at ground level, near homes and air intakes" },
  { value: "75–95", unit: "dB", label: "Typical sound level of industrial diesel generators" },
  /* Universities deck p.3 (src/data/deck-content: sus-diesel-health). */
  { value: "Group 1", label: "Diesel exhaust is classified as carcinogenic to humans by the International Agency for Research on Cancer (IARC)" },
];

const LIFECYCLE = [
  {
    title: "Cobalt- and nickel-free",
    text: "Lith-On uses lithium iron phosphate (LFP) cells only. LFP relies on abundant iron and phosphate rather than cobalt or nickel.",
  },
  {
    title: "Built to be recycled",
    text: "Packs and enclosures are designed for disassembly: steel and aluminium enclosures and copper busbars are recyclable. Spent LFP cells go to government-authorised recyclers, where over 95% of lithium carbonate and iron phosphate can be recovered.",
  },
  {
    title: "A second life",
    text: "Cells retired after 6,000 cycles still hold about 70–75% of their capacity. Lith-On supports reusing them in low-rate applications such as rural microgrids, solar water pumping and street lighting before recycling.",
  },
];

export default function SustainabilityPage() {
  return (
    <div className="bg-canvas">
      {/* SUS-01 */}
      <PageHero
        variant="image"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Sustainability" }]}
        title={["Backup power", "without the exhaust"]}
        emphasisLine={1}
        lead="Lith-On systems replace diesel generator running with stored energy: no fuel burned on site, no exhaust and far less noise."
        image={{ src: "/images/scenes/campus.webp", alt: "Battery storage cabinets under a canopy outside a campus engineering block on a clear day", illustrative: true }}
      />

      {/* SUS-02 */}
      <section aria-labelledby="impact-title" className="section">
        <div className="container-site">
          <SectionIntro
            title={<span id="impact-title">One site, one year</span>}
            lead="A 500-flat housing society in Gurugram that replaced four 750 kVA diesel generators with a 7 MWh Lith-On system."
            split
          />
          <StatBand
            leadFirst={false}
            stats={[
              { value: 650000, prefix: "≈", unit: "litres", label: "Diesel no longer burned each year" },
              { value: 1740, prefix: "≈", unit: "t CO₂", label: "Direct emissions avoided each year", note: "At 2.68 kg of CO₂ per litre" },
              { value: 55, prefix: "<", unit: "dB", label: "Operating sound level", note: "Against 85–95 dB for the generators" },
            ]}
          />
        </div>
      </section>

      {/* SUS-03 */}
      <section id="cost-of-diesel" aria-labelledby="diesel-title" className="section scroll-mt-24 bg-canvas-warm">
        <div className="container-site">
          <SectionIntro title={<span id="diesel-title">What a diesel generator puts out</span>} lead="Backup generators burn fuel next to the buildings they serve." split className="mb-10 lg:mb-14" />
          <dl className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {DIESEL_COSTS.map((d) => (
              <div key={d.label} className="border-t border-ink pt-6">
                <dt className="sr-only">{d.label}</dt>
                <dd className="tabular flex items-baseline gap-2 text-stat-l text-ink">
                  {d.value}
                  {d.unit && <span className="text-[0.32em] font-[500] tracking-normal">{d.unit}</span>}
                </dd>
                <dd className="mt-3 text-small text-ink-2" aria-hidden="true">
                  {d.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SUS-04 */}
      <section id="comparison" aria-labelledby="compare-title" className="section scroll-mt-24">
        <div className="container-site">
          <SectionIntro title={<span id="compare-title">Diesel or Lith-On</span>} lead="The same 500-flat housing society, before and after." split className="mb-8 lg:mb-12" />
          <ImpactCompare />
          <p className="mt-6 max-w-3xl text-small text-ink-3">
            Figures are direct emissions at the site. Charging from the grid carries the emissions of the grid&apos;s own generation; charging from on-site solar avoids
            them.
          </p>
        </div>
      </section>

      {/* SUS-05 */}
      <section id="grap" aria-labelledby="grap-title" className="section scroll-mt-24 bg-canvas-warm">
        <div className="container-site space-y-16 lg:space-y-24">
          <div className="grid gap-6 lg:grid-cols-12">
            <h2 id="grap-title" className="text-heading-1 text-ink lg:col-span-5">
              Running through GRAP
            </h2>
            <Reveal className="lg:col-span-6 lg:col-start-7">
              <p className="text-body text-ink-2">
                In Delhi-NCR, the Commission for Air Quality Management enforces the Graded Response Action Plan (GRAP). Under Stages II, III and IV, diesel generator use is
                restricted, which can leave housing societies, offices and campuses without backup.
              </p>
              <p className="mt-4 text-body text-ink-2">A Lith-On system burns no fuel and has no exhaust, so it keeps supplying power through every GRAP stage.</p>
            </Reveal>
          </div>
          <div id="solar" className="grid scroll-mt-24 gap-6 lg:grid-cols-12">
            <h2 className="text-heading-1 text-ink lg:col-span-5">Storing solar for the evening</h2>
            <Reveal className="lg:col-span-6 lg:col-start-7">
              <p className="text-body text-ink-2">
                Solar panels produce most at midday, when demand can be low. A Lith-On system stores the surplus that would otherwise be curtailed and releases it in the
                evening peak, from about 4 pm to 10 pm.
              </p>
              <p className="mt-4 text-body text-ink-2">Depending on solar capacity and load, facilities can reach 70–90% clean-energy self-sufficiency.</p>
              <div className="mt-6">
                <Button href="/solutions#solar-shifting" variant="tertiary">
                  Solar and storage
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SUS-06 */}
      <section id="lifecycle" aria-labelledby="lifecycle-title" className="section scroll-mt-24">
        <div className="container-site">
          <SectionIntro title={<span id="lifecycle-title">Over the whole lifecycle</span>} lead="From cell chemistry to what happens after 6,000 cycles." split className="mb-8 lg:mb-10" />
          <ol className="grid gap-x-6 lg:grid-cols-3">
            {LIFECYCLE.map((l, i) => (
              <li key={l.title} className="border-t border-line py-6">
                <span className="tabular text-small text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-heading-3 text-ink">{l.title}</h3>
                <p className="mt-2 text-body text-ink-2">{l.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SUS-07 */}
      <ClosingCTA
        variant="inline"
        title={["See what your site would avoid"]}
        lead="The savings calculator estimates diesel and CO₂ avoided alongside cost."
        primary={{ label: "Use the savings calculator", href: "/calculator" }}
        secondary={{ label: "Talk to an engineer", href: "/contact?type=assessment" }}
      />
    </div>
  );
}
