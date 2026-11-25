import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { type GridDiagram, ServiceDiagram } from "@/components/grid/ServiceDiagram";
import { Reveal } from "@/components/motion/Reveal";
import { BentoGrid, BentoTile } from "@/components/system/BentoGrid";
import { Button } from "@/components/system/Button";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { PageHero } from "@/components/system/PageHero";
import { SectionIntro } from "@/components/system/SectionIntro";

export const metadata: Metadata = {
  title: "Grid Services | Utility-Scale Battery Storage | Lith-On",
  description:
    "Utility-scale battery storage for frequency response, renewable firming, substation buffering and reactive power, with IEC 61850 integration.",
};

/**
 * /grid-services (audit §6, GRD-01–03). Product hero with the Max-20HC-5000
 * catalogue render (GRD-01; no substation photograph exists) → bento of five
 * services, each with a line diagram, one line and a disclosure, plus a product
 * tile (GRD-02) → deployments split (vault case D) → inline closing (GRD-03).
 *
 * Sources: LITHON_DATA_VAULT.md §2 (four-quadrant PCS, synthetic inertia, EMS
 * solar firming), §3 (Max-20HC-5000: 5,000 kWh, 20-ft HC; power 2.5 MW per the catalogue; utility
 * substations and IPP solar farms), §4 case D (RVUNL, NTPC), §5 (IEC 61850).
 * Removed as unsourced (CLAIMS_REVIEW §5 item 5): ±0.03 Hz deadband, AGC < 1 s,
 * CEA connectivity compliance, ±5% regulation, 0.8 PF range, fault ride-through,
 * 4C discharge, 4-hour duration, 11/33 kV interconnection, 8–12 week
 * deployment, 50+ MWh farms, SECI tender compatibility. Black-start was dropped
 * because no source says Lith-On systems can self-start a dead network.
 */

const SERVICES: { title: string; line: string; detail: string; diagram: GridDiagram; cols: 4 | 5 | 7 | 8 }[] = [
  {
    title: "Frequency response",
    line: "Fast active-power injection steadies frequency after a generator trip or sudden load change.",
    detail:
      "The bi-directional PCS responds far faster than conventional spinning reserve and supplies synthetic inertia, arresting the frequency fall before slower plant can react.",
    diagram: "frequency",
    cols: 7,
  },
  {
    title: "Renewable firming",
    line: "Solar output is stored when it peaks and dispatched when it is needed.",
    detail:
      "The EMS smooths solar variability and shifts surplus generation into evening demand, so a solar plant can deliver steadier, more predictable power.",
    diagram: "firming",
    cols: 5,
  },
  {
    title: "Substation buffering",
    line: "Storage at a constrained substation covers peak hours and keeps loading below thermal limits.",
    detail:
      "Containerised storage adds capacity where it is needed, which can defer or avoid a transformer upgrade while longer-term grid capacity is planned. On a campus or industrial site, a Max-20HC-5000 at the substation stabilises the 33/11 kV supply, runs energy arbitrage and anchors a closed-loop microgrid.",
    diagram: "deferral",
    cols: 5,
  },
  {
    title: "Voltage and reactive support",
    line: "Four-quadrant operation supplies active and reactive power together.",
    detail:
      "The PCS can deliver leading or lagging reactive power independently of real-power dispatch, helping hold voltage within limits on weak or long feeders.",
    diagram: "reactive",
    cols: 7,
  },
  {
    title: "Utility integration",
    line: "IEC 61850 communication connects storage to substation automation and SCADA.",
    detail:
      "IEC 61850 is the international protocol for substation automation, teleprotection and grid-interactive SCADA. It lets a utility monitor and dispatch Lith-On storage alongside its other assets.",
    diagram: "integration",
    cols: 7,
  },
];

const DEPLOYMENTS = [
  { name: "RVUNL", place: "Jaipur", text: "Critical substation buffering for Rajasthan Rajya Vidyut Utpadan Nigam." },
  { name: "NTPC", place: "Lucknow, Shravasti, Jammu and Kashmir", text: "Strategic installations for the National Thermal Power Corporation." },
];

export default function GridServicesPage() {
  return (
    <div className="bg-canvas">
      {/* GRD-01 */}
      <PageHero
        variant="product"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: "Grid services" }]}
        title={["Storage that", "supports the grid"]}
        emphasisLine={1}
        lead="Utility-scale battery systems for frequency response, renewable firming and substation buffering, controlled over IEC 61850."
        primary={{ label: "Discuss a utility project", href: "/contact?type=assessment" }}
        secondary={{ label: "Max-20HC-5000", href: "/products/max-20hc" }}
        product={{ src: "/images/products/catalogue/max-20hc-5000.webp", alt: "Lith-On Max-20HC-5000 20-foot high-cube battery storage container" }}
        footnote="Max-20HC-5000: 5,000 kWh and 2.5 MW in one 20-foot high-cube container."
      />

      {/* GRD-02 */}
      <section aria-labelledby="services-title" className="section">
        <div className="container-site">
          <SectionIntro
            title={<span id="services-title">Five services, one system</span>}
            lead="The same PCS, EMS and SCADA stack delivers each service; the EMS decides which one runs."
            split
            className="mb-10 lg:mb-14"
          />
          <BentoGrid>
            {SERVICES.map((s, i) => (
              <BentoTile key={s.title} cols={s.cols} className="flex flex-col">
                <Reveal delay={(i % 2) * 0.09} className="flex flex-1 flex-col justify-between gap-8">
                <ServiceDiagram type={s.diagram} />
                <div>
                  <h3 className="text-heading-3 text-ink">{s.title}</h3>
                  <p className="mt-2 text-body text-ink-2">{s.line}</p>
                  <details className="group mt-3">
                    <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 text-small font-[500] text-lithon-blue [&::-webkit-details-marker]:hidden">
                      How it works
                      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
                    </summary>
                    <p className="mt-2 border-l-2 border-line pl-4 text-small text-ink-2">{s.detail}</p>
                  </details>
                </div>
                </Reveal>
              </BentoTile>
            ))}
            <BentoTile cols={5} surface="surface" className="flex flex-col justify-between gap-6">
              <div className="relative mx-auto aspect-[16/10] w-full max-w-[320px]">
                <Image src="/images/products/catalogue/max-20hc-5000.webp" alt="" fill sizes="320px" className="object-contain mix-blend-multiply" />
              </div>
              <div>
                <p className="text-small text-ink-2">Built on</p>
                <h3 className="mt-1 text-heading-3 text-ink">Max-20HC-5000</h3>
                <p className="mt-2 text-body text-ink-2">A 20-foot high-cube ISO container for utility substations and large solar parks.</p>
                <div className="mt-3">
                  <Button href="/products/max-20hc" variant="tertiary">
                    View specifications
                  </Button>
                </div>
              </div>
            </BentoTile>
          </BentoGrid>
        </div>
      </section>

      {/* Deployments */}
      <section aria-labelledby="deployments-title" className="section-tight bg-canvas-warm">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <Reveal>
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden rounded-media bg-surface">
                  <Image
                    src="/images/installations/catalogue/ntpc-shravasti.webp"
                    alt="A row of Lith-On storage cabinets installed indoors at an NTPC site in Shravasti"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    quality={75}
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-small text-ink-3">NTPC, Shravasti</figcaption>
              </figure>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 id="deployments-title" className="text-heading-1 text-ink">
              Already on utility sites
            </h2>
            <p className="mt-4 text-lead text-ink-2">Lith-On systems are installed with India&apos;s power utilities.</p>
            <dl className="mt-8 border-t border-line">
              {DEPLOYMENTS.map((d) => (
                <div key={d.name} className="border-b border-line py-5">
                  <dt className="flex flex-wrap items-baseline gap-x-3">
                    <span className="text-heading-3 text-ink">{d.name}</span>
                    <span className="text-small text-ink-3">{d.place}</span>
                  </dt>
                  <dd className="mt-1 text-body text-ink-2">{d.text}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6">
              <Button href="/case-studies" variant="tertiary">
                See all case studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* GRD-03 */}
      <ClosingCTA
        variant="inline"
        title={["Planning a utility-scale project?"]}
        lead="Share the site, the service you need and the grid connection, and our engineers will size a system."
        primary={{ label: "Discuss a utility project", href: "/contact?type=assessment" }}
        secondary={{ label: "Certifications", href: "/certifications" }}
      />
    </div>
  );
}
