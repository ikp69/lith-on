import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { DieselVisual, OutageVisual, PeakVisual, SolarVisual } from "@/components/home/ChallengeVisuals";
import { Button } from "@/components/system/Button";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { CompareSection } from "@/components/system/CompareTable";
import { PageHero } from "@/components/system/PageHero";
import { ScrollStory, type StoryChapter } from "@/components/system/ScrollStory";
import { SectionIntro } from "@/components/system/SectionIntro";
import { Stat } from "@/components/system/Stat";
import { DG_VS_BESS } from "@/data/comparisons";

export const metadata: Metadata = {
  title: "Battery Storage Solutions for Facilities | Lith-On Bharat Energy",
  description:
    "Diesel replacement, peak shaving, backup power, solar shifting and microgrids: how Lith-On battery storage cuts energy costs and keeps power on.",
};

/**
 * /solutions (audit §6.3). Image hero (SOL-01) → five solutions as a scroll
 * story with live diagrams (SOL-02) → DG vs BESS comparison (catalogue) →
 * DC systems split (SOL-03) → statement closing (SOL-05). SOL-04 removed.
 * Figures from LITHON_DATA_VAULT.md §2–5 only; chapter ids keep the anchors
 * used by navigation and the homepage.
 */

function Detail({ stat, points, caseLink }: { stat?: React.ComponentProps<typeof Stat>; points: ReactNode[]; caseLink?: { href: string; label: string } }) {
  return (
    <div className="border-t border-line pt-6">
      {stat && <Stat {...stat} />}
      <details className="group mt-5">
        <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 text-small font-[500] text-lithon-blue [&::-webkit-details-marker]:hidden">
          How it works
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
        </summary>
        <ul className="mt-3 space-y-2 border-l-2 border-line pl-4 text-small text-ink-2">
          {points.map((p, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static ordered list
            <li key={i}>{p}</li>
          ))}
        </ul>
      </details>
      {caseLink && (
        <div className="mt-4">
          <Button href={caseLink.href} variant="tertiary">
            {caseLink.label}
          </Button>
        </div>
      )}
    </div>
  );
}

const CHAPTERS: StoryChapter[] = [
  {
    id: "dg-reduction",
    title: "Diesel replacement",
    body: "Diesel backup is expensive to run and restricted under CAQM GRAP in Delhi-NCR. Storage charges from the grid or solar and takes over silently when the grid fails.",
    visual: <DieselVisual />,
    aside: (
      <Detail
        stat={{ value: 73, unit: "%", label: "Lower annual energy cost", note: "500-flat society in Gurugram: ₹6.52 Cr to ₹1.76 Cr a year" }}
        points={[
          "Takes over in under 10 milliseconds when the grid fails, so lifts and pumps keep running.",
          "Compliant with CAQM GRAP Stages I–IV, which restrict diesel generators in Delhi-NCR during air-quality emergencies.",
          "The energy management system runs a diesel-minimisation mode where a generator is kept for long outages.",
          "A 500 kVA generator burns 105–150 litres of diesel an hour, so each kWh it makes costs ₹25–40; fuel is 75–80% of the cost of generating.",
          "Storage needs up to 50% less space than generators and their fuel tanks.",
        ]}
        caseLink={{ href: "/case-studies/residential-society-500", label: "Gurugram case study" }}
      />
    ),
  },
  {
    id: "peak-shaving",
    title: "Peak demand shaving",
    body: "A few short spikes set the maximum demand charge for the month. The battery discharges through each spike, so grid draw stays under the contracted limit.",
    visual: <PeakVisual />,
    aside: (
      <Detail
        stat={{ value: 100, unit: "%", label: "Of demand charges removed", note: "Highway EV fast-charging hub, storage-only model" }}
        points={[
          "At the EV hub, maximum demand charges made up 40–60% of the electricity bill.",
          "Storage only: ₹12.91 lakh saved a year, with payback in about four years.",
          "With 75 kWp of solar added: ₹20.26 lakh a year and a 3.9-year payback.",
        ]}
        caseLink={{ href: "/case-studies/ev-charging-hub", label: "EV hub case study" }}
      />
    ),
  },
  {
    id: "backup-power",
    title: "Backup power",
    body: "The system switches from grid to battery in under 10 milliseconds. Lifts keep moving, servers keep running, and nothing needs restarting.",
    visual: <OutageVisual />,
    aside: (
      <Detail
        stat={{ value: 10, prefix: "<", unit: "ms", label: "Grid-to-battery cutover", note: "A diesel generator leaves 10–30 seconds without power" }}
        points={[
          "Wi-Fi routers do not reboot and IT servers run through the outage without a separate double-conversion UPS.",
          "A dedicated critical-backup mode in the energy management system reserves charge for outages.",
          "Used for station power at fuel retail sites in Lucknow, Ghaziabad and Patna.",
        ]}
      />
    ),
  },
  {
    id: "solar-shifting",
    title: "Solar shifting",
    body: "Midday surplus is stored instead of exported cheaply, then released in the evening when tariffs are highest.",
    visual: <SolarVisual />,
    aside: (
      <Detail
        stat={{ value: 2.26, decimals: 2, prefix: "₹", unit: "Cr a year", label: "Saved at Invertis University", note: "1 MWh of storage with 900 kWp of rooftop solar" }}
        points={[
          "Annual energy cost fell from ₹4.14 Cr with diesel generators to ₹1.88 Cr with storage and solar.",
          "Round-trip efficiency above 95%, so little of the stored solar is lost.",
          "A solar self-consumption mode in the energy management system schedules charge and discharge automatically.",
          "Three steps: solar powers the building by day, the surplus charges the battery, and the battery supplies the building at peak-tariff hours and during outages.",
        ]}
        caseLink={{ href: "/case-studies/invertis-university", label: "Invertis case study" }}
      />
    ),
  },
  {
    id: "microgrids",
    title: "Microgrids",
    body: "A microgrid combines solar, batteries and generators and runs alone or alongside the grid. For remote and off-grid sites, it cuts the diesel that has to be trucked in and keeps power steady when there is no grid at all.",
    image: { src: "/images/installations/catalogue/indian-army-jk.webp", alt: "Two Lith-On outdoor storage cabinets installed for the Indian Army in Jammu and Kashmir" },
    aside: (
      <Detail
        points={[
          "Installed for the Indian Army at forward operational bases in Srinagar and Jammu & Kashmir.",
          "The IceBattery® thermal shield allows full-power operation at ambient temperatures up to 60 °C.",
          "In-house battery management, power conversion and control software, monitored remotely over cloud SCADA.",
          "Off-grid systems serve sites without a reliable grid and critical infrastructure, built for harsh conditions with low running cost.",
        ]}
      />
    ),
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-canvas">
      {/* SOL-01 Hero */}
      <PageHero
        variant="image"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
        title={["What storage does", "for your site"]}
        lead="Five ways a Lith-On system cuts energy cost and keeps the power on."
        primary={{ label: "Request sizing", href: "/contact?type=assessment" }}
        secondary={{ label: "Compare with diesel", href: "#dg-vs-bess" }}
        image={{ src: "/images/scenes/solutions-industrial.webp", alt: "Battery storage cabinets under a canopy at an industrial site", illustrative: true }}
      />

      {/* SOL-02 Five solutions */}
      <section aria-labelledby="solutions-title" className="section">
        <div className="container-site">
          <ScrollStory
            chapters={CHAPTERS}
            mediaAspect="5/4"
            introBg="bg-canvas"
            intro={
              <SectionIntro
                title={<span id="solutions-title">Five solutions</span>}
                lead="Each one shows the problem, how storage answers it, and a result from a documented project where there is one."
                split
                className="lg:mb-8"
              />
            }
          />
        </div>
      </section>

      {/* DG vs BESS comparison (catalogue) */}
      <div className="pb-20 lg:pb-32">
        <CompareSection data={DG_VS_BESS} />
      </div>

      {/* SOL-03 DC systems */}
      <section aria-labelledby="dc-title" className="section bg-canvas-warm">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-6">
          <div className="lg:col-span-5">
            <div className="relative isolate flex aspect-[4/5] items-center justify-center overflow-hidden rounded-media bg-surface">
              <Image
                src="/images/products/catalogue/magna-utl.webp"
                alt="Magna-UTL DC outdoor battery cabinet"
                width={708}
                height={1113}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-[80%] w-auto object-contain drop-shadow-[0_18px_18px_rgb(15_23_42/0.12)]"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 id="dc-title" className="text-heading-1 text-ink">
              DC systems for telecom and large sites
            </h2>
            <p className="mt-4 text-lead text-ink-2">For sites that already have their own inverters or power conversion.</p>
            <div className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 sm:gap-6">
              <div>
                <h3 className="text-heading-3 text-ink">Telecom</h3>
                <p className="mt-2 text-small text-ink-2">
                  480 V lithium battery systems for tower sites, rated in the catalogue for over 3,000 cycles at 80% depth of discharge, and the Tele-Rack 100 rack module.
                </p>
                <Link href="/products/tele-rack-100" className="mt-3 inline-flex min-h-11 items-center text-small font-[500] text-lithon-blue hover:underline">
                  Tele-Rack 100
                </Link>
              </div>
              <div>
                <h3 className="text-heading-3 text-ink">DC outdoor cabinets</h3>
                <p className="mt-2 text-small text-ink-2">Magna-UTL cabinets store 373 or 418 kWh at 900–1500 V DC and connect in series with a power conversion system.</p>
                <Link href="/products/magna-utl-418" className="mt-3 inline-flex min-h-11 items-center text-small font-[500] text-lithon-blue hover:underline">
                  Magna-UTL
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOL-05 Closing */}
      <ClosingCTA
        variant="statement"
        title={["Find the right", "solution for your site"]}
        lead="Share your diesel run hours or maximum demand. Our engineers will recommend a system and estimate the payback."
        primary={{ label: "Request sizing", href: "/contact?type=assessment" }}
        links={[
          { label: "Browse products", href: "/products", description: "From 10 kWh modules to 10 MWh containers" },
          { label: "See case studies", href: "/case-studies", description: "Documented results from installed systems" },
          { label: "Call +91 70000 13009", href: "tel:+917000013009", description: "Sector 136, Noida" },
        ]}
      />
    </div>
  );
}
