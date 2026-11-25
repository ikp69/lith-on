import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { type HeroSector, IndustriesHero } from "@/components/industries/IndustriesHero";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/system/Button";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { DeckFigures } from "@/components/deck/DeckFigures";
import { DeckTable } from "@/components/deck/DeckTable";
import { Stat } from "@/components/system/Stat";
import { getDeckBlock } from "@/data/deck-content";
import { PRODUCTS_DATA } from "@/data/products";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Industries We Serve | Battery Energy Storage | Lith-On",
  description:
    "Battery storage for campuses, factories, commercial buildings, residential societies, hospitals, EV charging and data centres, with documented results where available.",
};

/**
 * /industries (audit §6.4). Hero with sector switch (IND-01) → seven split
 * chapters (IND-03; IND-02 removed) → defence band (IND-04, the page's
 * stage-dark use) → inline closing (IND-05). Chapter ids keep existing
 * anchors. Figures from LITHON_DATA_VAULT.md only.
 */

interface Sector extends HeroSector {
  challenge: string;
  stat: React.ComponentProps<typeof Stat>;
  outcomes: string[];
  product: string;
  caseLink?: { href: string; label: string };
  caption: string;
  /** Full-width detail under the chapter (tables, models, diagrams). */
  detail?: React.ReactNode;
}

/* Deck content (src/data/deck-content): sources cited on each block. */
const campusZones = getDeckBlock("ind-education-zones");
const campusModel = getDeckBlock("ind-education-model");
const evConnection = getDeckBlock("ind-ev-connection");
const evPolicy = getDeckBlock("ind-ev-policy");
const otherSectors = getDeckBlock("ind-other-sectors");

function EducationDetail() {
  return (
    <div className="grid gap-12 border-t border-line pt-10 lg:grid-cols-12 lg:gap-6">
      <div className="lg:col-span-6">
        <h3 className="text-heading-3 text-ink">{campusZones.heading}</h3>
        {campusZones.table && <DeckTable table={campusZones.table} sources={campusZones.sources} className="mt-4" />}
      </div>
      <div className="lg:col-span-5 lg:col-start-8">
        <h3 className="text-heading-3 text-ink">{campusModel.heading}</h3>
        <p className="mt-2 text-small text-ink-2">{campusModel.lead}</p>
        {campusModel.figures && <DeckFigures figures={campusModel.figures.slice(2)} className="mt-6 lg:grid-cols-2" />}
        {campusModel.table && <DeckTable table={campusModel.table} sources={campusModel.sources} totalRow className="mt-8" />}
      </div>
    </div>
  );
}

function EvDetail() {
  return (
    <div className="grid gap-12 border-t border-line pt-10 lg:grid-cols-12 lg:gap-6">
      <div className="lg:col-span-7">
        <h3 className="text-heading-3 text-ink">{evConnection.heading}</h3>
        {evConnection.table && <DeckTable table={evConnection.table} sources={evConnection.sources} className="mt-4" />}
      </div>
      <div className="lg:col-span-4 lg:col-start-9">
        <h3 className="text-heading-3 text-ink">{evPolicy.heading}</h3>
        <ul className="mt-4 space-y-2 text-small text-ink-2">
          {evPolicy.points?.map((p) => (
            <li key={p.text} className="border-l-2 border-line pl-3">
              {p.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const SECTORS: Sector[] = [
  {
    id: "education",
    name: "Education",
    image: "/images/industries/campus-sector.webp",
    alt: "Battery storage cabinets beside a university engineering block",
    illustrative: true,
    caption: "Illustrative scene",
    challenge: "Hostels, labs and computing centres need power around the clock, and diesel backup is noisy and costly to run.",
    stat: { value: 2.26, decimals: 2, prefix: "₹", unit: "Cr a year", label: "Saved at Invertis University", note: "1 MWh of storage with 900 kWp of rooftop solar" },
    outcomes: [
      "Annual energy cost down from ₹4.14 Cr to ₹1.88 Cr",
      "500 kW of backup for up to 2 hours across 700+ hostel rooms, 140 classrooms and 8 offices",
      "Midday solar stored for evening use, with the surplus exported to the grid",
      "Cutover in under 10 ms when the grid fails",
    ],
    product: "magna-ci",
    caseLink: { href: "/case-studies/invertis-university", label: "Invertis case study" },
    detail: <EducationDetail />,
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    image: "/images/industries/industrial-sector.webp",
    alt: "Battery storage cabinets under a canopy at a factory",
    illustrative: true,
    caption: "Illustrative scene",
    challenge: "A short interruption can stop a production line, and motor start-ups push maximum demand charges up.",
    stat: { value: 10, prefix: "<", unit: "ms", label: "Grid-to-battery cutover", note: "Lines keep running through grid failures" },
    outcomes: ["Peak demand shaving keeps draw under the contracted limit", "Full power at ambient temperatures up to 60 °C", "In-house BMS, PCS and EMS, monitored over cloud SCADA"],
    product: "magna-ci",
  },
  {
    id: "commercial",
    name: "Commercial buildings",
    image: "/images/industries/commercial-sector.webp",
    alt: "Battery storage cabinets outside an office and commercial building",
    illustrative: true,
    caption: "Illustrative scene",
    challenge: "Lifts, pumps and common areas need backup, air-conditioning drives up demand charges, and CAQM GRAP restricts diesel generators in Delhi-NCR.",
    stat: { value: 10, prefix: "<", unit: "ms", label: "Grid-to-battery cutover", note: "Lifts keep moving and computers stay on" },
    outcomes: ["Daytime peak shaving of air-conditioning demand charges", "Compliant with CAQM GRAP Stages I–IV", "Installed for PwC, New Delhi"],
    product: "magna-ci",
  },
  {
    id: "residential",
    name: "Residential societies",
    image: "/images/hero-2/residential.webp",
    alt: "An apartment block with a Lith-On storage container beside it",
    illustrative: true,
    caption: "Illustrative scene",
    challenge:
      "Diesel generators leave 10–30 seconds of blackout, run at 75–90 dB, and with their fuel tanks take space that could hold EV charging or parking. Fuel alone is 75–80% of what they cost to run.",
    stat: { value: 73, unit: "%", label: "Lower annual energy cost", note: "500-flat society in Gurugram: ₹6.52 Cr to ₹1.76 Cr a year" },
    outcomes: [
      "Stores grid power at normal rates for outages, so monthly common-area maintenance bills fall",
      "Switchover in under 10 ms: lifts do not stall and Wi-Fi routers do not drop",
      "Near-silent with no fuel burned on site, so it can stand close to the towers, in up to 50% less space",
      "No moving parts; the BMS runs regular digital health checks",
      "Keeps supplying power through every CAQM GRAP stage",
    ],
    product: "lithon-50",
    caseLink: { href: "/case-studies/residential-society-500", label: "Gurugram case study" },
  },
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/images/industries/hospital-sector.webp",
    alt: "Battery storage cabinets near a hospital emergency entrance",
    illustrative: true,
    caption: "Illustrative scene",
    challenge: "Critical equipment cannot wait 10–30 seconds for a diesel generator to start.",
    stat: { value: 10, prefix: "<", unit: "ms", label: "Grid-to-battery cutover", note: "A diesel generator leaves 10–30 seconds without power" },
    outcomes: ["No exhaust near wards or entrances", "A critical-backup mode reserves charge for outages", "Full power at ambient temperatures up to 60 °C"],
    product: "magna-ci",
  },
  {
    id: "ev-infrastructure",
    name: "EV charging",
    image: "/images/installations/catalogue/fuel-station.webp",
    alt: "A Lith-On outdoor storage cabinet installed at a fuel station",
    illustrative: false,
    caption: "Installed at a fuel retail station",
    challenge: "Several fast chargers starting at once set a high maximum demand charge, often 40–60% of the bill.",
    stat: { value: 100, unit: "%", label: "Of demand charges removed", note: "Highway EV fast-charging hub, storage-only model" },
    outcomes: [
      "Chargers run at full power: without storage, operators throttle them and a 30-minute charge can take 90 minutes",
      "Solar charges the battery by day and off-peak grid power by night; the EMS charges ahead of forecast demand",
      "Stations keep charging in an outage, in island mode",
      "With 75 kWp of solar: ₹20.26 lakh a year saved, 3.9-year payback",
      "Avoids waiting for a transformer upgrade",
    ],
    product: "lt215",
    caseLink: { href: "/case-studies/ev-charging-hub", label: "EV hub case study" },
    detail: <EvDetail />,
  },
  {
    id: "data-centers",
    name: "Data centres and telecom",
    image: "/images/installations/catalogue/ntpc-cabinet.webp",
    alt: "A large Lith-On storage cabinet installed indoors",
    illustrative: false,
    caption: "Indoor installation, NTPC",
    challenge: "Servers and network equipment must ride through outages without rebooting.",
    stat: { value: 10, prefix: "<", unit: "ms", label: "Grid-to-battery cutover", note: "Servers run without a separate double-conversion UPS" },
    outcomes: ["Wi-Fi routers and IT servers keep running", "Lith-On-50 cabinets for telecom towers", "480 V telecom battery systems and rack modules"],
    product: "lithon-50",
  },
];

function ProductLink({ slug }: { slug: string }) {
  const p = PRODUCTS_DATA.find((x) => x.slug === slug);
  if (!p) {
    return null;
  }
  return (
    <Link
      href={`/products/${p.slug}`}
      className="group mt-6 flex items-center gap-4 rounded-media border border-line p-3 pr-5 transition-colors hover:border-line-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
    >
      <span className="relative isolate flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-control bg-surface">
        <Image src={p.image} alt="" width={64} height={64} className="h-[80%] w-auto object-contain mix-blend-multiply transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] motion-reduce:transition-none" />
      </span>
      <span className="min-w-0">
        <span className="block text-small text-ink-3">Typical system</span>
        <span className="block text-body font-[500] text-ink group-hover:text-lithon-blue">{p.name}</span>
      </span>
    </Link>
  );
}

export default function IndustriesPage() {
  return (
    <div className="bg-canvas">
      {/* IND-01 */}
      <IndustriesHero sectors={SECTORS.map(({ id, name, image, alt, illustrative }) => ({ id, name, image, alt, illustrative }))} />

      {/* IND-03 Sector chapters */}
      <div className="section">
        <div className="container-site space-y-24 lg:space-y-32">
          {SECTORS.map((s, i) => (
            <article key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="grid scroll-mt-28 gap-8 lg:grid-cols-12 lg:items-center lg:gap-6">
              <figure className={cn("lg:col-span-7", i % 2 === 1 && "lg:order-2 lg:col-start-6")}>
                <Reveal>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-media bg-surface">
                    <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" quality={70} className="object-cover" />
                  </div>
                </Reveal>
                <figcaption className="mt-2 text-small text-ink-3">{s.caption}</figcaption>
              </figure>
              <div className={cn("lg:col-span-5", i % 2 === 0 ? "lg:col-start-8 lg:pl-6" : "lg:order-1 lg:pr-6")}>
                <p className="tabular text-small text-ink-3">
                  {String(i + 1).padStart(2, "0")} / {String(SECTORS.length).padStart(2, "0")}
                </p>
                <h2 id={`${s.id}-title`} className="mt-2 text-heading-1 text-ink">
                  {s.name}
                </h2>
                <p className="mt-4 text-body text-ink-2">{s.challenge}</p>
                <div className="mt-6 border-t border-line pt-6">
                  <Stat {...s.stat} />
                </div>
                <ul className="mt-6 space-y-2 text-small text-ink-2">
                  {s.outcomes.map((o) => (
                    <li key={o} className="border-l-2 border-line pl-3">
                      {o}
                    </li>
                  ))}
                </ul>
                <ProductLink slug={s.product} />
                {s.caseLink && (
                  <div className="mt-4">
                    <Button href={s.caseLink.href} variant="tertiary">
                      {s.caseLink.label}
                    </Button>
                  </div>
                )}
              </div>
              {s.detail && <div className="lg:order-3 lg:col-span-12">{s.detail}</div>}
            </article>
          ))}
        </div>
      </div>

      {/* Also suited to (deck content: ind-other-sectors, ind-dg-market) */}
      <section aria-labelledby="also-title" className="section-tight bg-canvas-warm">
        <div className="container-site grid gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <h2 id="also-title" className="text-heading-1 text-ink">
              {otherSectors.heading}
            </h2>
            <p className="mt-4 text-body text-ink-2">India has more than 70,000 MW of legacy diesel generators. Any site that runs one is worth assessing.</p>
          </div>
          <dl className="grid gap-x-6 sm:grid-cols-3 lg:col-span-8">
            {otherSectors.points?.map((p) => (
              <div key={p.title} className="border-t border-line py-5">
                <dt className="text-body font-[500] text-ink">{p.title}</dt>
                <dd className="mt-1.5 text-small text-ink-2">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* IND-04 Defence band (the page's stage-dark use) */}
      <section id="defence" aria-labelledby="defence-title" className="scroll-mt-24 bg-stage-dark text-on-dark">
        <div className="container-site grid gap-10 py-20 lg:grid-cols-12 lg:items-center lg:gap-6 lg:py-28">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-media">
              <Image
                src="/images/installations/catalogue/indian-army-jk.webp"
                alt="Two Lith-On outdoor storage cabinets installed for the Indian Army in Jammu and Kashmir"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                quality={75}
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-small text-on-dark-2">Defence</p>
            <h2 id="defence-title" className="mt-3 text-display-l text-balance text-on-dark">
              Power for forward bases in J&amp;K
            </h2>
            <dl className="mt-10 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-small text-on-dark-2">Deployed for</dt>
                <dd className="mt-1 text-body text-on-dark">Indian Army forward operational bases, Srinagar and J&amp;K</dd>
              </div>
              <div>
                <dt className="text-small text-on-dark-2">Thermal</dt>
                <dd className="mt-1 text-body text-on-dark">Full power at ambient temperatures up to 60 °C</dd>
              </div>
              <div>
                <dt className="text-small text-on-dark-2">Control</dt>
                <dd className="mt-1 text-body text-on-dark">In-house BMS, PCS and EMS, monitored over cloud SCADA</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* IND-05 Closing */}
      <ClosingCTA
        variant="inline"
        title={["Not sure which system fits your site?"]}
        lead="Tell us how you use power and our engineers will recommend a system."
        primary={{ label: "Request sizing", href: "/contact?type=assessment" }}
        secondary={{ label: "Browse products", href: "/products" }}
      />
    </div>
  );
}
