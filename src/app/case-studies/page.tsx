import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { DieselVisual, PeakVisual } from "@/components/home/ChallengeVisuals";
import { ActiveOnView } from "@/components/motion/ActiveOnView";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/system/Button";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { HorizontalRail, RailItem } from "@/components/system/HorizontalRail";
import { PageHero } from "@/components/system/PageHero";
import { SectionIntro } from "@/components/system/SectionIntro";
import { Stat } from "@/components/system/Stat";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Case Studies | Documented Savings from Lith-On Battery Storage",
  description:
    "Documented results from Lith-On battery storage: Invertis University, a 500-flat Gurugram society and an EV charging hub, plus NTPC and Indian Army sites.",
};

/**
 * /case-studies (audit §6.6). Editorial hero with three headline results
 * (CS-01) → three case features (CS-02–04) → real installation photographs
 * (CS-05/07 merged; the old schematic map and render-based gallery are
 * removed) → institutional deployments (CS-06) → split closing (CS-08).
 * Figures from LITHON_DATA_VAULT.md §3 cases A–D only.
 */

interface Feature {
  id: string;
  name: string;
  place: string;
  href: string;
  media: ReactNode;
  stat: React.ComponentProps<typeof Stat>;
  metrics: [string, string][];
}

const FEATURES: Feature[] = [
  {
    id: "invertis_university",
    name: "Invertis University",
    place: "Bareilly, Uttar Pradesh",
    href: "/case-studies/invertis-university",
    media: (
      <figure>
        <div className="relative aspect-[1070/560] overflow-hidden rounded-media bg-surface">
          <Image src="/images/installations/invertis-bess-yard.jpg" alt="Lith-On storage cabinets in the equipment yard at Invertis University" fill sizes="(min-width: 1024px) 58vw, 100vw" quality={75} className="object-cover" />
        </div>
        <figcaption className="mt-2 text-small text-ink-3">The storage yard at Invertis University</figcaption>
      </figure>
    ),
    stat: { value: 2.26, decimals: 2, prefix: "₹", unit: "Cr a year saved", label: "Campus microgrid with solar" },
    metrics: [
      ["Before", "₹4.14 Cr a year on diesel generators"],
      ["After", "₹1.88 Cr a year with storage and solar"],
      ["System", "1 MWh of storage, 900 kWp of rooftop solar"],
    ],
  },
  {
    id: "residential_society_500",
    name: "500-flat housing society",
    place: "Gurugram, Delhi-NCR",
    href: "/case-studies/residential-society-500",
    media: (
      <ActiveOnView className="relative overflow-hidden rounded-media bg-white shadow-[0_1px_2px_rgb(15_23_42/0.06),0_12px_32px_-12px_rgb(15_23_42/0.12)] lg:aspect-[5/4]">
        <DieselVisual />
      </ActiveOnView>
    ),
    stat: { value: 4.76, decimals: 2, prefix: "₹", unit: "Cr a year saved", label: "Diesel replaced across 14 towers" },
    metrics: [
      ["System", "7 MWh / 2.4 MW, three hours of full-demand backup"],
      ["Payback", "About 1.6 years on the incremental cost over diesel"],
      ["Compliance", "Meets CAQM GRAP Stage II–IV diesel restrictions"],
    ],
  },
  {
    id: "ev_charging_hub",
    name: "Highway EV fast-charging hub",
    place: "NH-48 corridor, Haryana",
    href: "/case-studies/ev-charging-hub",
    media: (
      <ActiveOnView className="relative overflow-hidden rounded-media bg-white shadow-[0_1px_2px_rgb(15_23_42/0.06),0_12px_32px_-12px_rgb(15_23_42/0.12)] lg:aspect-[5/4]">
        <PeakVisual />
      </ActiveOnView>
    ),
    stat: { value: 100, unit: "%", label: "Of demand charges removed", note: "Storage-only model" },
    metrics: [
      ["System", "450 kWh / 150 kW buffering 60–350 kW charging spikes"],
      ["Storage only", "₹12.91 lakh a year, payback in about four years"],
      ["With 75 kWp solar", "₹20.26 lakh a year, 3.9-year payback"],
    ],
  },
];

const INSTALLS = [
  { src: "indian-army-jk", caption: "Indian Army, Jammu & Kashmir" },
  { src: "ntpc-cabinet", caption: "NTPC" },
  { src: "fuel-station", caption: "Fuel retail station" },
  { src: "ntpc-shravasti", caption: "NTPC, Shravasti" },
  { src: "lucknow-rack", caption: "Lucknow" },
  { src: "srinagar", caption: "Srinagar" },
  { src: "uttar-pradesh", caption: "Uttar Pradesh" },
  { src: "ntpc-office", caption: "NTPC" },
  { src: "kashmir", caption: "Kashmir" },
  { src: "ghaziabad", caption: "Ghaziabad" },
  { src: "rspl-kanpur", caption: "Kanpur" },
  { src: "patna", caption: "Patna" },
];

const DEPLOYMENTS = [
  { who: "Indian Army", where: "Srinagar and Jammu & Kashmir", what: "Power for border forward operational bases" },
  { who: "NTPC", where: "Lucknow, Shravasti and Jammu & Kashmir", what: "Installations at NTPC sites" },
  { who: "RVUNL", where: "Jaipur, Rajasthan", what: "Substation buffering" },
  { who: "PwC", where: "New Delhi", what: "Backup for the corporate headquarters" },
  { who: "Fuel retail networks", where: "Lucknow, Ghaziabad and Patna", what: "Station power stabilisation" },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-canvas">
      {/* CS-01 */}
      <PageHero
        variant="editorial"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Case studies" }]}
        title={["Documented results", "from real sites"]}
        lead="Three projects with full financial models, and installations across India."
        visual={
          <dl className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["₹2.26 Cr", "a year saved at Invertis University"],
              ["73%", "lower energy cost at the Gurugram society"],
              ["100%", "of demand charges removed at the EV hub"],
            ].map(([v, l]) => (
              <div key={l} className="border-t border-line pt-4">
                <dt className="sr-only">{l}</dt>
                <dd className="tabular text-stat-l leading-none text-ink">{v}</dd>
                <dd className="mt-2 text-small text-ink-2">{l}</dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* CS-02–04 */}
      <section aria-labelledby="cases-title" className="section-tight">
        <div className="container-site">
          <h2 id="cases-title" className="sr-only">
            Case studies
          </h2>
          <div className="space-y-24 lg:space-y-32">
            {FEATURES.map((f, i) => (
              <article key={f.id} id={f.id} aria-labelledby={`${f.id}-title`} className="grid scroll-mt-28 gap-8 lg:grid-cols-12 lg:items-center lg:gap-6">
                <div className={cn("lg:col-span-7", i % 2 === 1 && "lg:order-2 lg:col-start-6")}>
                  <Reveal>{f.media}</Reveal>
                </div>
                <div className={cn("lg:col-span-5", i % 2 === 0 ? "lg:col-start-8 lg:pl-6" : "lg:order-1 lg:pr-6")}>
                  <p className="text-small text-ink-3">{f.place}</p>
                  <h3 id={`${f.id}-title`} className="mt-2 text-heading-1 text-ink">
                    {f.name}
                  </h3>
                  <div className="mt-6 border-t border-line pt-6">
                    <Stat {...f.stat} />
                  </div>
                  <dl className="mt-6 space-y-3 text-small">
                    {f.metrics.map(([k, v]) => (
                      <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-x-4 border-t border-line pt-3">
                        <dt className="text-ink-3">{k}</dt>
                        <dd className="text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-6">
                    <Button href={f.href} variant="tertiary">
                      Read the case
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CS-05/07 Installations */}
      <section id="deployment-map" aria-labelledby="installs-title" className="section scroll-mt-24 bg-canvas-warm">
        <div className="container-site">
          <SectionIntro
            title={<span id="installs-title">Installed across India</span>}
            lead="Photographs of Lith-On systems on site, from cabinets at army posts to indoor units at utility offices."
            split
            className="mb-8 lg:mb-10"
          />
          <HorizontalRail label="Installation photographs" scrollDriven bleed>
            {INSTALLS.map((p) => (
              <RailItem key={p.src} className="w-[min(70vw,280px)] lg:w-[300px]">
                <figure>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-media bg-surface">
                    <Image src={`/images/installations/catalogue/${p.src}.webp`} alt={`Lith-On storage installation, ${p.caption}`} fill sizes="300px" quality={75} className="object-cover" />
                  </div>
                  <figcaption className="mt-3 text-body font-[500] text-ink">{p.caption}</figcaption>
                </figure>
              </RailItem>
            ))}
          </HorizontalRail>
        </div>
      </section>

      {/* CS-06 */}
      <section aria-labelledby="deploy-title" className="section">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <h2 id="deploy-title" className="text-heading-1 text-ink">
              Deployed for
            </h2>
            <p className="mt-4 text-body text-ink-2">Government, utility and enterprise sites.</p>
          </div>
          <ul className="border-t border-line lg:col-span-8">
            {DEPLOYMENTS.map((d) => (
              <li key={d.who} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[12rem_1fr] sm:gap-6">
                <p className="text-heading-3 text-ink">{d.who}</p>
                <div>
                  <p className="text-body text-ink">{d.what}</p>
                  <p className="mt-0.5 text-small text-ink-3">{d.where}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container-site pb-4">
        <p id="method" className="max-w-3xl border-t border-line pt-5 text-small text-ink-3">
          How these figures are calculated: each case uses the project&apos;s financial model. Annual savings compare operating cost with diesel generators or demand charges against operating cost with Lith-On storage.
        </p>
      </div>

      {/* CS-08 */}
      <ClosingCTA
        variant="split"
        title={["Get a financial model for your site"]}
        lead="Share your diesel run hours, demand charges or solar output. We will model savings and payback for your site."
        primary={{ label: "Request a model", href: "/contact?type=assessment" }}
        secondary={{ label: "Use the calculator", href: "/calculator" }}
        image={{ src: "/images/installations/catalogue/ntpc-cabinet.webp", alt: "A large Lith-On storage cabinet installed indoors at an NTPC site" }}
      />
    </div>
  );
}
