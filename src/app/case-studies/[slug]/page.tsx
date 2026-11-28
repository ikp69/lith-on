import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BeforeAfter } from "@/components/case-studies/BeforeAfter";
import { DeckFigures } from "@/components/deck/DeckFigures";
import { DeckTable } from "@/components/deck/DeckTable";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { PageHero } from "@/components/system/PageHero";
import { PhotoNeeded } from "@/components/system/PhotoNeeded";
import { SectionIntro } from "@/components/system/SectionIntro";
import { SlideFigure } from "@/components/system/SlideFigure";
import { type StatData, StatBand } from "@/components/system/Stat";
import { getDeckBlock, SHOW_REVIEW_CONTENT } from "@/data/deck-content";

/**
 * /case-studies/[slug] (audit §6.7). Hero (CSD-01) with four figures →
 * before/after economics (CSD-02) → project facts (CSD-03) → other cases and
 * inline CTA (CSD-04). Figures from LITHON_DATA_VAULT.md §3 cases A–C only.
 * The Invertis payback and 10-year figures are left out pending CLAIMS_REVIEW
 * item 13; derived capex figures are not shown.
 */

interface CaseDetail {
  slug: string;
  title: string;
  short: string;
  place: string;
  lead: string;
  hero: { kind: "image"; src: string; alt: string } | { kind: "needed"; subject: string; size: string } | { kind: "none" };
  /** The proposal slide behind the figures, shown as-is with a full-size link. */
  slide?: { src: string; width: number; height: number; alt: string; caption: string; source: string };
  stats: StatData[];
  economics: React.ComponentProps<typeof BeforeAfter>;
  facts: { label: string; value: string }[];
  description: string;
}

const CASES: CaseDetail[] = [
  {
    slug: "invertis-university",
    title: "Invertis University campus microgrid",
    short: "Invertis University",
    place: "Bareilly, Uttar Pradesh",
    lead: "1 MWh of Lith-On storage with 900 kWp of rooftop solar replaced a 2,500 kVA diesel generator setup.",
    hero: { kind: "needed", subject: "Invertis University storage yard, on site", size: "1600 × 1200 px or larger" },
    stats: [
      { value: 2.26, decimals: 2, prefix: "₹", unit: "Cr a year", label: "Net annual cash savings" },
      { value: 4.14, decimals: 2, prefix: "₹", unit: "Cr", label: "Annual diesel cost before" },
      { value: 1, unit: "MWh", label: "Lith-On storage" },
      { value: 900, unit: "kWp", label: "Rooftop solar" },
    ],
    economics: {
      before: { label: "Diesel generators", value: 4.14, display: "₹4.14 Cr a year" },
      after: { label: "Lith-On storage with solar", value: 1.88, display: "₹1.88 Cr a year" },
      caption: "Annual operating cost. Net saving: ₹2.26 Cr a year.",
    },
    facts: [
      { label: "Before", value: "2,500 kVA of diesel generators, with heavy fuel use, pollution and exposure to NCR/UP diesel restrictions" },
      { label: "System", value: "1,000 kWh Lith-On battery storage coupled with 900 kWp of rooftop solar" },
      { label: "Result", value: "Annual operating cost down from ₹4.14 Cr to ₹1.88 Cr" },
      { label: "Backup", value: "500 kW of backup for up to 2 hours during power outages" },
      { label: "Campus served", value: "More than 700 hostel rooms, 140 classrooms and 8 offices" },
      { label: "Solar export", value: "Surplus solar is exported directly to the grid, reducing electricity bills" },
    ],
    description: "Invertis University in Bareilly cut its annual energy operating cost from ₹4.14 Cr to ₹1.88 Cr with 1 MWh of Lith-On storage and 900 kWp of rooftop solar.",
  },
  {
    slug: "residential-society-500",
    title: "500-flat housing society",
    short: "Gurugram society",
    place: "Gurugram, Delhi-NCR",
    lead: "A 7 MWh Lith-On system replaced four 750 kVA diesel generators across 14 towers.",
    hero: { kind: "none" },
    slide: {
      src: "/images/deck/housing-cost-analysis.webp",
      width: 2400,
      height: 1350,
      alt: "Proposal slide: a 7,000 kWh, 2,400 kW system at 90% depth of discharge and 95% efficiency. Diesel against storage: capital cost ₹1.8 Cr against ₹8.3 Cr, annual operating cost ₹6.5 Cr against ₹1.7 Cr. Incremental capital ₹7.84 Cr, annual savings ₹4.76 Cr, simple payback about 1.6 years, about 204% return over 5 years and 508% over 10.",
      caption: "The cost and payback model from the society proposal",
      source: "BESS in Housing Society Presentation, slide 10",
    },
    stats: [
      { value: 4.76, decimals: 2, prefix: "₹", unit: "Cr a year", label: "Net annual savings" },
      { value: 73, unit: "%", label: "Lower annual energy cost" },
      { value: 1.6, decimals: 1, prefix: "~", unit: "years", label: "Simple payback" },
      { value: 7, unit: "MWh", label: "Storage, 2.4 MW" },
    ],
    economics: {
      before: { label: "Diesel generators", value: 6.52, display: "₹6.52 Cr a year", note: "₹6.49 Cr of fuel at ₹98.8 a litre, plus ₹3 lakh maintenance" },
      after: { label: "Lith-On storage", value: 1.76, display: "₹1.76 Cr a year", note: "About ₹15 lakh a month, charging from the grid at ₹7 per kWh" },
      caption: "Annual operating cost. Net saving: ₹4.76 Cr a year.",
    },
    facts: [
      { label: "Site", value: "14 towers, 11 floors, 500 flats; about 2,000 kW demand, including 42 lifts and 14 water pumps" },
      { label: "Before", value: "Four 750 kVA diesel generators (3,000 kVA)" },
      { label: "System", value: "7,000 kWh / 2,400 kW, 90% depth of discharge, 95% efficiency, three hours of full-demand backup" },
      { label: "Investment", value: "₹8.28 Cr (₹7.84 Cr more than diesel); simple payback about 1.6 years" },
      { label: "Returns", value: "About 204% over 5 years and 508% over 10 years" },
      { label: "Compliance", value: "Meets CAQM GRAP Stage II, III and IV diesel generator restrictions" },
    ],
    description: "A 500-flat Gurugram housing society saves ₹4.76 Cr a year after replacing diesel generators with a 7 MWh Lith-On system, with a simple payback of about 1.6 years.",
  },
  {
    slug: "ev-charging-hub",
    title: "Highway EV fast-charging hub",
    short: "EV charging hub",
    place: "NH-48 corridor, Haryana",
    lead: "A 450 kWh / 150 kW Lith-On buffer absorbs 60–350 kW charging spikes, removing the hub's demand charges.",
    hero: { kind: "none" },
    slide: {
      src: "/images/deck/ev-solar-bess-cost-analysis.webp",
      width: 2400,
      height: 1350,
      alt: "Proposal slide: 75 kWp of solar with 450 kWh of storage. Annual saving ₹20.26 lakh, payback 4 years with storage only and 3.9 years with solar, 10-year return 140% and 153%.",
      caption: "The solar-plus-storage cost model from the EV charging proposal",
      source: "Hyundai Lith-On presentation, slide 11",
    },
    stats: [
      { value: 100, unit: "%", label: "Of demand charges removed", note: "Storage-only model" },
      { value: 12.91, decimals: 2, prefix: "₹", unit: "lakh a year", label: "Saved, storage only" },
      { value: 20.26, decimals: 2, prefix: "₹", unit: "lakh a year", label: "Saved with 75 kWp solar" },
      { value: 3.9, decimals: 1, unit: "years", label: "Payback with solar" },
    ],
    economics: {
      before: { label: "Demand charges", value: 96_000, display: "₹96,000 a month", note: "240 kVA peak at ₹400 per kVA under the DHBVN HT commercial tariff, out of a total bill of ₹2.42 lakh a month" },
      after: { label: "With Lith-On storage", value: 0, display: "₹0", note: "Storage-only model: the 150 kW charger runs through the battery, so the grid never reaches the peak" },
      caption: "Monthly demand charges. Removing them saves ₹11.52 lakh a year.",
    },
    facts: [
      { label: "Challenge", value: "Several chargers drawing 60–350 kW at once set a high maximum demand charge" },
      { label: "Baseline bill", value: "₹2.42 lakh a month for 18,000 kWh: energy ₹1.26 lakh, demand ₹96,000, fuel surcharge ₹9,000, electricity duty ₹10,800" },
      { label: "System", value: "450 kWh / 150 kW storage, charging off-peak and discharging through charging spikes" },
      { label: "Storage only", value: "₹12.91 lakh a year saved, payback in about four years" },
      { label: "With 75 kWp solar", value: "₹20.26 lakh a year, 3.9-year payback, 153% 10-year ROI, more than ₹2.0 Cr net savings over 10 years" },
    ],
    description: "A highway EV fast-charging hub removed 100% of its demand charges with a 450 kWh Lith-On buffer, saving ₹20.26 lakh a year with solar and paying back in 3.9 years.",
  },
];

/* Extra economics from the source decks (src/data/deck-content), keyed by case slug. */
const DECK_ECONOMICS: Record<string, string> = {
  "ev-charging-hub": "cs-ev-bill",
  "residential-society-500": "cs-gurugram-five-year",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES.find((x) => x.slug === slug);
  if (!c) {
    return {};
  }
  return { title: `${c.title}: Case Study | Lith-On`, description: c.description };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const c = CASES.find((x) => x.slug === slug);
  if (!c) {
    notFound();
  }
  const others = CASES.filter((x) => x.slug !== c.slug);
  const extraId = DECK_ECONOMICS[c.slug];
  const extraBlock = extraId ? getDeckBlock(extraId) : undefined;
  const extra = extraBlock && (extraBlock.status === "ready" || SHOW_REVIEW_CONTENT) ? extraBlock : undefined;
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case studies", href: "/case-studies" }, { label: c.short }];

  return (
    <div className="bg-canvas">
      {/* CSD-01 */}
      <PageHero
        variant="editorial"
        breadcrumb={crumbs}
        title={[c.title]}
        lead={c.lead}
        visual={
          c.hero.kind === "none" ? undefined : (
            <figure>
              {c.hero.kind === "image" ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-media bg-surface">
                  <Image src={c.hero.src} alt={c.hero.alt} fill priority sizes="(min-width: 1024px) 30vw, 100vw" quality={80} className="object-cover" />
                </div>
              ) : (
                <PhotoNeeded subject={c.hero.subject} size={c.hero.size} ratio="4/3" />
              )}
              <figcaption className="mt-2 text-small text-ink-3">On site at {c.short}</figcaption>
            </figure>
          )
        }
      />
      <section aria-label="Key figures" className="pb-14 lg:pb-24">
        <div className="container-site">
          <p className="mb-6 text-small text-ink-3">{c.place}</p>
          <StatBand stats={c.stats} leadFirst={false} />
        </div>
      </section>

      {/* CSD-02 */}
      <section aria-labelledby="econ-title" className="section-tight bg-canvas-warm">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <h2 id="econ-title" className="text-heading-1 text-ink">
              Before and after
            </h2>
            <p className="mt-4 text-body text-ink-2">{c.economics.caption}</p>
          </div>
          <div className="lg:col-span-8">
            <BeforeAfter {...c.economics} />
          </div>
        </div>
      </section>

      {/* CSD-02b: bill or cost breakdown from the source deck */}
      {extra && (
        <section aria-labelledby="breakdown-title" className="section-tight">
          <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-4">
              <h2 id="breakdown-title" className="text-heading-1 text-ink">
                {extra.heading}
              </h2>
              {extra.lead && <p className="mt-4 text-body text-ink-2">{extra.lead}</p>}
            </div>
            <div className="min-w-0 lg:col-span-8">
              {extra.table && <DeckTable table={extra.table} sources={extra.sources} totalRow={c.slug === "ev-charging-hub"} />}
              {extra.figures && <DeckFigures figures={extra.figures} className="mt-10 lg:grid-cols-2" />}
            </div>
          </div>
        </section>
      )}

      {/* CSD-02c: the source slide, as presented to the client */}
      {c.slide && (
        <section aria-labelledby="slide-title" className="section-tight">
          <div className="container-site">
            <h2 id="slide-title" className="mb-8 text-heading-2 text-ink">
              The original model
            </h2>
            <SlideFigure {...c.slide} />
          </div>
        </section>
      )}

      {/* CSD-03 */}
      <section aria-labelledby="facts-title" className="section-tight">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-6">
          <h2 id="facts-title" className="text-heading-1 text-ink lg:col-span-4">
            The project
          </h2>
          <dl className="border-t border-line lg:col-span-8">
            {c.facts.map((f) => (
              <div key={f.label} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="text-small font-[500] text-ink-3">{f.label}</dt>
                <dd className="text-body text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CSD-04 */}
      <ClosingCTA
        variant="inline"
        title={["Get a model like this for your site"]}
        lead="Share your diesel, demand or solar figures and we will estimate savings and payback."
        primary={{ label: "Request a model", href: "/contact?type=assessment" }}
        secondary={{ label: "All case studies", href: "/case-studies" }}
      />
      <section aria-labelledby="more-title" className="pb-20 lg:pb-28">
        <div className="container-site">
          <SectionIntro title={<span id="more-title">More results</span>} className="mb-6 lg:mb-8" />
          <ul className="grid gap-6 md:grid-cols-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/case-studies/${o.slug}`}
                  className="group flex h-full items-center gap-5 rounded-media border border-line p-5 transition-colors hover:border-line-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
                >
                  {o.hero.kind === "image" && (
                    <span className="relative hidden h-20 w-28 shrink-0 overflow-hidden rounded-control bg-surface sm:block">
                      <Image src={o.hero.src} alt="" fill sizes="112px" className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] motion-reduce:transition-none" />
                    </span>
                  )}
                  <span className="min-w-0">
                    <span className="block text-small text-ink-3">{o.place}</span>
                    <span className="mt-1 block text-heading-3 text-ink group-hover:text-lithon-blue">{o.title}</span>
                    <span className="tabular mt-1 block text-small text-ink-2">
                      {o.stats[0].prefix ?? ""}
                      {o.stats[0].value}
                      {o.stats[0].unit ? ` ${o.stats[0].unit}` : ""} · {o.stats[0].label}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
