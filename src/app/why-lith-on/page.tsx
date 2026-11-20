import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Button } from "@/components/system/Button";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { PageHero } from "@/components/system/PageHero";
import { ScrollStory, type StoryChapter } from "@/components/system/ScrollStory";
import { SectionIntro } from "@/components/system/SectionIntro";
import { MOAT_LAYERS, MoatStack } from "@/components/why/MoatStack";
import { ReplicateChart } from "@/components/why/ReplicateChart";

export const metadata: Metadata = {
  title: "Why Lith-On | In-House Engineering, Built in Noida",
  description:
    "Seven reasons to choose Lith-On: a Noida plant, IEC 61508, IEC 61850 and BIS, product warranties, an in-house control stack and 40+ years of grid experience.",
};

/**
 * /why-lith-on (audit §6.10). Editorial hero indexing the seven advantages
 * (WHY-01) → seven-chapter scroll story with a live moat tower (WHY-02), each
 * chapter carrying its evidence as a disclosure (WHY-03 merged) → certification
 * trifecta (WHY-04) → time to replicate (WHY-05) → statement closing (WHY-06).
 * Sources: content/why-lith-on.md (the seven moats and replication times),
 * content/about.md, content/capabilities.md, content/warranty-and-support.md
 * and LITHON_DATA_VAULT.md §1, §2, §5. The competitor matrix in the content
 * file is left out: its comparative claims are unverified.
 */

function Evidence({ value, label, points, link }: { value: string; label: string; points: ReactNode[]; link?: { href: string; label: string } }) {
  return (
    <div className="border-t border-line pt-6">
      <p className="tabular text-heading-1 text-ink">{value}</p>
      <p className="mt-1 text-small text-ink-2">{label}</p>
      <details className="group mt-5">
        <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 text-small font-[500] text-lithon-blue [&::-webkit-details-marker]:hidden">
          The evidence
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
        </summary>
        <ul className="mt-3 space-y-2 border-l-2 border-line pl-4 text-small text-ink-2">
          {points.map((p, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static ordered list
            <li key={i}>{p}</li>
          ))}
        </ul>
      </details>
      {link && (
        <div className="mt-4">
          <Button href={link.href} variant="tertiary">
            {link.label}
          </Button>
        </div>
      )}
    </div>
  );
}

const MOATS: (Omit<StoryChapter, "title" | "visual"> & { body: string })[] = [
  {
    id: "tie-ups",
    body: "Global supply relationships and engineering collaboration keep our systems on current LFP cell technology.",
    aside: (
      <Evidence
        value="Foshan"
        label="International innovation and supply hub"
        points={[
          "The Foshan hub, at Foshan Innovation Torchpark in Guangdong, China, is our international supply chain interface and component testing centre.",
          "It gives Lith-On access to Tier-1 cell supply channels.",
        ]}
      />
    ),
  },
  {
    id: "service",
    body: "Factory-trained field engineers and cloud SCADA monitoring look after every system once it is running.",
    aside: (
      <Evidence
        value="4–8 h"
        label="On-site response in Delhi-NCR"
        points={[
          "Cloud SCADA with 24/7 predictive anomaly detection, cell-level state-of-health tracking and automated alarms.",
          "On-site engineer within 4 to 8 hours of a critical alert in Delhi-NCR, 24 hours in Tier-1 cities and 48 hours pan-India.",
        ]}
        link={{ href: "/warranty-and-support", label: "Warranty and support" }}
      />
    ),
  },
  {
    id: "warranty",
    body: "Every system carries a manufacturer warranty set for its product and backed by documented cycle-life testing, the security long-term project finance needs.",
    aside: (
      <Evidence
        value="6,000+"
        label="Cycles at 88–90% depth of discharge"
        points={[
          "Warranty terms depend on the product and are set out in each quotation.",
          "Cells are rated for more than 6,000 cycles at 88–90% depth of discharge, with a 15–20 year design life.",
        ]}
      />
    ),
  },
  {
    id: "experience",
    body: "IIT alumni lead the company alongside energy storage specialists who know how Indian grids behave.",
    aside: (
      <Evidence
        value="40+ years"
        label="Combined Indian grid engineering experience"
        points={["That experience covers the conditions Indian sites face: voltage surges, floating neutrals, frequency excursions and extreme heat."]}
        link={{ href: "/about", label: "About Lith-On" }}
      />
    ),
  },
  {
    id: "trifecta",
    body: "Lith-On holds functional safety, grid communication and Indian battery safety certification at the same time.",
    aside: (
      <Evidence
        value="3 standards"
        label="IEC 61508, IEC 61850 and BIS"
        points={["Attaining all three at once takes a new entrant an estimated 24 to 36 months of compliance testing."]}
        link={{ href: "#certifications", label: "The three standards" }}
      />
    ),
  },
  {
    id: "manufacturing",
    body: "A 20,000 sq. ft. plant in Sector 136, Noida, gives us control of cell sorting, laser welding, module framing and end-of-line testing.",
    aside: (
      <Evidence
        value="250 MWh"
        label="Annual manufacturing capacity"
        points={[
          "50 MWh of complete BESS and 200 MWh of battery packs a year.",
          "Every incoming cell is tested for internal resistance, open-circuit voltage and capacity.",
          "Complete systems go through capacity verification, insulation and dielectric testing before dispatch.",
        ]}
        link={{ href: "/capabilities", label: "Inside the Noida plant" }}
      />
    ),
  },
  {
    id: "architecture",
    body: "Systems scale from 48 kWh cabinets to multi-MWh installations, with a thermal shield for Indian summers and instant cutover when the grid fails.",
    aside: (
      <Evidence
        value="< 10 ms"
        label="Grid-to-battery cutover"
        points={[
          "The range runs from the Lith-On-50 (48 kWh) to the Max-20HC-5000 (5 MWh).",
          "The IceBattery® ceramic coating keeps the cabinet 15–30 °C cooler inside and sustains full power up to 60 °C ambient.",
        ]}
        link={{ href: "/technology", label: "How the technology works" }}
      />
    ),
  },
];

const CHAPTERS: StoryChapter[] = MOATS.map((m, i) => ({
  ...m,
  title: MOAT_LAYERS[i],
  visual: <MoatStack active={i} />,
}));

const STANDARDS = [
  { code: "IEC 61508", title: "Functional safety", text: "Safety-related electrical and programmable systems, covering the battery and PCS controller architecture." },
  { code: "IEC 61850", title: "Grid communication", text: "Substation automation, teleprotection and grid-interactive SCADA with utilities." },
  { code: "BIS", title: "Indian battery safety", text: "Bureau of Indian Standards compliance for cell chemistry, module packaging and domestic distribution." },
];

export default function WhyLithOnPage() {
  return (
    <div className="bg-canvas">
      {/* WHY-01 */}
      <PageHero
        variant="editorial"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Why Lith-On" }]}
        title={["Built in-house,", "hard to replicate"]}
        emphasisLine={1}
        lead="Seven structural advantages, from our Noida plant to our certifications, that would take a new entrant years to match."
        index={MOATS.map((m, i) => ({ label: MOAT_LAYERS[i], href: `#${m.id}` }))}
      />

      {/* WHY-02 + WHY-03 */}
      <section id="moats" aria-labelledby="moats-title" className="section scroll-mt-24 bg-canvas-warm">
        <div id="differentiation" className="container-site scroll-mt-24">
          <ScrollStory
            chapters={CHAPTERS}
            mediaAspect="4/3"
            introBg="bg-canvas-warm"
            intro={
              <SectionIntro
                title={<span id="moats-title">Seven advantages</span>}
                lead="What sets Lith-On apart, and the evidence behind each one."
                split
                className="lg:mb-8"
              />
            }
          />
        </div>
      </section>

      {/* WHY-04 */}
      <section id="certifications" aria-labelledby="trifecta-title" className="section scroll-mt-24">
        <div className="container-site">
          <SectionIntro
            title={<span id="trifecta-title">The certification trifecta</span>}
            lead="Functional safety, grid communication and Indian battery safety, held together."
            split
            className="mb-8 lg:mb-12"
          />
          <dl className="grid gap-x-6 lg:grid-cols-3">
            {STANDARDS.map((s) => (
              <div key={s.code} className="border-t border-ink py-6">
                <dt>
                  <span className="tabular block text-display-l text-lithon-blue">{s.code}</span>
                  <span className="mt-4 block text-body font-[500] text-ink">{s.title}</span>
                </dt>
                <dd className="mt-1 text-small text-ink-2">{s.text}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6">
            <Button href="/certifications" variant="tertiary">
              Certifications
            </Button>
          </div>
        </div>
      </section>

      {/* WHY-05 */}
      <section id="time-to-replicate" aria-labelledby="replicate-title" className="section scroll-mt-24 bg-canvas-warm">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <h2 id="replicate-title" className="text-heading-1 text-ink">
              Time to replicate
            </h2>
            <p className="mt-4 text-body text-ink-2 measure">How long a new entrant would need to build what we already have.</p>
          </div>
          <div className="lg:col-span-8">
            <ReplicateChart />
          </div>
        </div>
      </section>

      {/* WHY-06 */}
      <ClosingCTA
        variant="statement"
        title={["Work with an Indian", "storage manufacturer"]}
        lead="Tell us about your site. Our engineers will size a system and explain how it would run."
        primary={{ label: "Request technical sizing", href: "/contact?type=assessment" }}
        links={[
          { label: "Products", href: "/products", description: "From 48 kWh to 5 MWh" },
          { label: "Case studies", href: "/case-studies", description: "Documented results" },
          { label: "Technology", href: "/technology", description: "How a system works" },
        ]}
      />
    </div>
  );
}
