import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { type HeroSector, IndustriesHero } from "@/components/industries/IndustriesHero";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/system/Button";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { Stat } from "@/components/system/Stat";
import { PRODUCTS_DATA } from "@/data/products";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Industries We Serve | Battery Energy Storage | Lith-On",
  description:
    "Battery storage for campuses, factories, commercial buildings, hospitals, EV charging and data centres, with documented results where available.",
};

/**
 * /industries (audit §6.4). Hero with sector switch (IND-01) → six split
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
    outcomes: ["Annual energy cost down from ₹4.14 Cr to ₹1.88 Cr", "Midday solar stored for evening use", "Cutover in under 10 ms when the grid fails"],
    product: "magna-ci",
    caseLink: { href: "/case-studies/invertis-university", label: "Invertis case study" },
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
    challenge: "Lifts, pumps and common areas need backup, and CAQM GRAP restricts diesel generators in Delhi-NCR.",
    stat: { value: 73, unit: "%", label: "Lower annual energy cost", note: "500-flat society in Gurugram: ₹6.52 Cr to ₹1.76 Cr a year" },
    outcomes: ["Simple payback of about 1.6 years at the Gurugram society", "Compliant with CAQM GRAP Stages I–IV", "Lifts keep moving through grid failures"],
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
    outcomes: ["With 75 kWp of solar: ₹20.26 lakh a year saved", "3.9-year payback on the hybrid system", "Avoids waiting for a transformer upgrade"],
    product: "lt215",
    caseLink: { href: "/case-studies/ev-charging-hub", label: "EV hub case study" },
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
                <p className="tabular text-small text-ink-3">{String(i + 1).padStart(2, "0")} / 06</p>
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
            </article>
          ))}
        </div>
      </div>

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
