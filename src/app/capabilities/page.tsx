import type { Metadata } from "next";
import { SitesSplit } from "@/components/company/SitesSplit";
import { Reveal } from "@/components/motion/Reveal";
import { DeliverySteps } from "@/components/services/DeliverySteps";
import { BentoGrid, BentoTile } from "@/components/system/BentoGrid";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { HorizontalRail, RailItem } from "@/components/system/HorizontalRail";
import { PageHero } from "@/components/system/PageHero";
import { PhotoNeeded } from "@/components/system/PhotoNeeded";
import { SectionIntro } from "@/components/system/SectionIntro";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities | Noida Battery Plant | Lith-On",
  description:
    "Inside Lith-On's 20,000 sq. ft. Noida plant: a six-step assembly process, an in-house testing laboratory and turnkey EPC delivery, with 250 MWh of annual capacity.",
};

/**
 * /capabilities (audit §6, CAP-01–06). INTERIM version: plant photography
 * (assets A2, A3) is still outstanding, so the hero is editorial with a small
 * genuine photo rather than a full-bleed assembly-floor image, and the
 * assembly line shows a PhotoNeeded slot per stage (the deck crops had slide
 * text baked in).
 * Swap in plant photos when they arrive (CAP-01 image hero, CAP-03 one photo
 * per stage, CAP-04 lab photos, CAP-06 plant exterior).
 *
 * Editorial hero (CAP-01) → shared SitesSplit (CAP-02) → six-stage assembly
 * rail (CAP-03, M5) → testing bento, one figure per test (CAP-04) → EPC
 * stepper (CAP-05, M7) → split closing (CAP-06).
 * Source: content/capabilities.md; capacity figures, vault §1.
 */

const STAGES = [
  {
    title: "Cell sorting and grading",
    text: "Every incoming Tier-1 cell is tested for internal resistance, open-circuit voltage and capacity, then matched within tight tolerances for uniform ageing.",
  },
  {
    title: "Module assembly",
    text: "Matched cells go into high-impact structural frames with fire-retardant polymers and high-strength aluminium side plates.",
  },
  {
    title: "Laser busbar welding",
    text: "Cell terminals are laser-welded to nickel-plated copper busbars, a low-resistance bond that resists vibration and thermal cycling.",
  },
  {
    title: "BMS and sensor harness",
    text: "Voltage sensing leads, dual-point thermistors and active balancing harnesses are routed and secured with automotive-grade locking connectors.",
  },
  {
    title: "IceBattery® coating",
    text: "The proprietary inorganic ceramic shield is applied to the enclosure for high solar reflectance and far-infrared heat radiation.",
  },
  {
    title: "Burn-in and end-of-line validation",
    text: "Complete systems run on multi-channel cyclers for 100% capacity verification, insulation and dielectric testing, and automatic safety-trip checks.",
  },
];

const TESTS = [
  { figure: "3,000 V DC", title: "Insulation and dielectric", text: "High-voltage isolation between live circuits and chassis ground." },
  { figure: "−20 to +60 °C", title: "Thermal chamber cycling", text: "Rapid temperature shifts verify BMS trip points and heat dissipation." },
  { figure: "< 10 ms", title: "Grid simulation and islanding", text: "UPS transfer switching on a live bi-directional AC test bench." },
  { figure: "< 3% THD", title: "Harmonic distortion", text: "Power quality checked on the same grid-simulation bench." },
  { figure: null, title: "Vibration and mechanical stress", text: "Busbar weld integrity and harness retention under transport and earthquake load simulation." },
];

const EPC = [
  { title: "Energy audit", text: "Second-by-second power logging of peak demand, diesel run hours and time-of-day penalties." },
  { title: "Sizing and modelling", text: "kWh capacity, inverter rating and solar matching, with transparent payback and ROI." },
  { title: "Turnkey EPC", text: "Foundations, DC and AC cabling, switchgear, transformer integration and fire-suppression plumbing." },
  { title: "Approvals", text: "Documentation for DISCOM approvals, CEIG compliance and net-metering permits." },
  { title: "Commissioning", text: "Field commissioning, staff training and 24/7 cloud SCADA monitoring." },
];

export default function CapabilitiesPage() {
  return (
    <div className="bg-canvas">
      {/* CAP-01 (interim) */}
      <PageHero
        variant="editorial"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Company", href: "/about" }, { label: "Capabilities" }]}
        title={["Built and tested", "in Noida"]}
        emphasisLine={1}
        lead="Every Lith-On system is assembled to a documented six-step process and validated in our own laboratory before it ships."
        primary={{ label: "Book a plant visit", href: "/contact?type=factory-visit" }}
        secondary={{ label: "See the process", href: "#process" }}
        visual={
          <figure>
            <PhotoNeeded subject="Cabinet assembly on the Noida plant floor" size="2400 × 1600 px, landscape" ratio="3/2" />
            <figcaption className="mt-2 text-small text-ink-3">Cabinet assembly, Noida</figcaption>
          </figure>
        }
      />

      {/* CAP-02 */}
      <section aria-labelledby="sites-title" className="section-tight">
        <div className="container-site">
          <SectionIntro title={<span id="sites-title">Two sites</span>} lead="Manufacturing in Noida; cell sourcing and logistics through Foshan." split className="mb-8 lg:mb-10" />
          <SitesSplit detail />
        </div>
      </section>

      {/* CAP-03 */}
      <section id="process" aria-labelledby="process-title" className="section scroll-mt-24 bg-canvas-warm">
        <div className="container-site">
          <HorizontalRail
            label="Six-step assembly process"
            scrollDriven
            header={<SectionIntro title={<span id="process-title">Six steps, every system</span>} lead="The same documented sequence for a battery module or a 5 MWh container." split className="mb-8 lg:mb-10" reveal={false} />}
          >
            {STAGES.map((s, i) => (
              <RailItem key={s.title} className="w-[min(80vw,340px)] lg:w-[360px]">
                <article>
                  <PhotoNeeded subject={`${s.title}, on the Noida line`} size="1600 × 1200 px" ratio="4/3" />
                  <p className="tabular mt-5 text-small text-ink-3">Step {i + 1} of 6</p>
                  <h3 className="mt-1 text-heading-3 text-ink">{s.title}</h3>
                  <p className="mt-2 text-small text-ink-2">{s.text}</p>
                </article>
              </RailItem>
            ))}
          </HorizontalRail>
        </div>
      </section>

      {/* CAP-04 */}
      <section aria-labelledby="lab-title" className="section">
        <div className="container-site">
          <SectionIntro title={<span id="lab-title">Our testing laboratory</span>} lead="Validation for harsh operating conditions, before a system reaches site." split className="mb-10 lg:mb-14" />
          <Reveal>
            <BentoGrid>
              {TESTS.map((t, i) => (
                <BentoTile key={t.title} cols={i < 2 ? 6 : 4} className="flex flex-col justify-between gap-8">
                  {t.figure ? <p className="tabular text-stat-l text-ink">{t.figure}</p> : <p className="text-heading-2 text-ink-3">Simulated in-house</p>}
                  <div>
                    <h3 className="text-heading-3 text-ink">{t.title}</h3>
                    <p className="mt-1 text-body text-ink-2">{t.text}</p>
                  </div>
                </BentoTile>
              ))}
            </BentoGrid>
          </Reveal>
        </div>
      </section>

      {/* CAP-05 */}
      <section aria-labelledby="epc-title" className="section-tight bg-canvas-warm">
        <div className="container-site">
          <SectionIntro title={<span id="epc-title">From audit to commissioning</span>} lead="Turnkey delivery for commercial, industrial and institutional clients." split className="mb-10 lg:mb-14" />
          <DeliverySteps steps={EPC} />
        </div>
      </section>

      {/* CAP-06 (interim image) */}
      <ClosingCTA
        variant="split"
        title={["Visit the plant in Noida"]}
        lead="See cell grading, assembly and testing on the floor, and meet the engineers who will build your system."
        primary={{ label: "Book a plant visit", href: "/contact?type=factory-visit" }}
        secondary={{ label: "Certifications", href: "/certifications" }}
        image={{ needed: "Noida plant: exterior or assembly floor", size: "2000 × 1500 px" }}
      />
    </div>
  );
}
