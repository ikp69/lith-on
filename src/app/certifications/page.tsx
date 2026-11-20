import type { Metadata } from "next";
import Link from "next/link";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { PageHero } from "@/components/system/PageHero";
import { SectionIntro } from "@/components/system/SectionIntro";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Certifications and Standards | IEC 61508, IEC 61850, BIS | Lith-On",
  description:
    "Lith-On battery storage is built to IEC 61508 functional safety, IEC 61850 grid communication and BIS. See what each covers and request tender documents.",
};

/**
 * /certifications (audit §6, CRT-01–04). Utility hero (CRT-01) → four standard
 * rows: name large, scope in one line, applicable products as tags (CRT-02) →
 * grouped two-column list of in-house testing and project documentation, with
 * the note as a footnote (CRT-03) → inline closing (CRT-04).
 *
 * Sources: LITHON_DATA_VAULT.md §5 (trifecta), §3 (enclosures);
 * content/capabilities.md (testing laboratory, regulatory documentation).
 * Removed as unsourced (CLAIMS_REVIEW §5 items 3 and 7): the SIL level, the
 * document checklist of specific test reports, the NDA note, "within 48 hours"
 * and the named compliance packages.
 */

const STANDARDS = [
  {
    code: "IEC 61508",
    name: "Functional safety",
    scope: "Safety-related electrical, electronic and programmable systems. Covers the SIL-rated battery and PCS controller architecture.",
    applies: ["Battery management system", "PCS controller"],
  },
  {
    code: "IEC 61850",
    name: "Grid communication",
    scope: "The international protocol for substation automation, teleprotection and grid-interactive SCADA integration with utilities.",
    applies: ["Energy management system", "SCADA interface"],
  },
  {
    code: "BIS",
    name: "Bureau of Indian Standards",
    scope: "Mandatory compliance for lithium cell chemistry, module packaging and domestic distribution in India.",
    applies: ["Cells", "Modules", "Domestic supply"],
  },
  {
    code: "IP55 / IP67",
    name: "Enclosure protection",
    scope: "Outdoor cabinets are IP55-rated against dust and water jets; LT215 cell compartments are IP67-sealed. Each product page lists its own rating.",
    applies: ["Magna-C&I", "LT215", "Max-20HC"],
  },
];

const TESTING = [
  { title: "Insulation and dielectric", text: "High-voltage isolation between live circuits and chassis ground, up to 3,000 V DC." },
  { title: "Thermal chamber cycling", text: "Rapid shifts from −20 °C to +60 °C to verify BMS temperature trip points and heat dissipation." },
  { title: "Vibration and mechanical stress", text: "Busbar weld integrity and harness retention under transport and earthquake load simulation." },
  { title: "Grid simulation and islanding", text: "Sub-10 ms transfer switching and harmonic distortion below 3% THD on a live bi-directional AC bench." },
];

const PROJECT_DOCS = [
  { title: "Standards evidence", text: "Documentation for IEC 61508, IEC 61850 and BIS compliance, for procurement and tender evaluation." },
  { title: "Product datasheets", text: "Specifications for each system, including enclosure ratings and electrical data." },
  { title: "Utility approvals", text: "Documentation support for state DISCOM approvals, Chief Electrical Inspectorate (CEIG) compliance and net-metering permits." },
  { title: "End-of-line validation", text: "Every system is capacity-verified, insulation-tested and checked for automatic safety trips before it leaves Noida." },
];

const link = "text-lithon-blue underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue rounded-sm";

function DocList({ id, title, items }: { id: string; title: string; items: { title: string; text: string }[] }) {
  return (
    <div>
      <h3 id={id} className="text-heading-3 text-ink">
        {title}
      </h3>
      <dl aria-labelledby={id} className="mt-5 border-t border-line">
        {items.map((d) => (
          <div key={d.title} className="border-b border-line py-5">
            <dt className="text-body font-[500] text-ink">{d.title}</dt>
            <dd className="mt-1 text-body text-ink-2">{d.text}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function CertificationsPage() {
  return (
    <div className="bg-canvas">
      {/* CRT-01 */}
      <PageHero
        variant="utility"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Certifications" }]}
        title={["Certifications", "and standards"]}
        emphasisLine={1}
        lead="Every Lith-On system is designed, built and tested to three standards that together cover safety, grid communication and Indian compliance."
        primary={{ label: "Request documents", href: "/contact?type=assessment" }}
        secondary={{ label: "Why the three matter", href: "/why-lith-on" }}
      />

      {/* CRT-02 */}
      <section aria-labelledby="standards-title" className="section">
        <div className="container-site">
          <SectionIntro
            title={<span id="standards-title">What we build to</span>}
            lead="IEC 61508, IEC 61850 and BIS together form our compliance framework; enclosure ratings are set per product."
            split
            className="mb-10 lg:mb-14"
          />
          <Reveal>
            <ul className="border-t border-ink">
              {STANDARDS.map((s) => (
                <li key={s.code} className="grid gap-4 border-b border-line py-8 lg:grid-cols-12 lg:gap-6 lg:py-10">
                  <div className="lg:col-span-4">
                    <p className="tabular text-heading-1 text-ink">{s.code}</p>
                    <p className="mt-1 text-body font-[500] text-lithon-blue">{s.name}</p>
                  </div>
                  <p className="text-body text-ink-2 lg:col-span-5">{s.scope}</p>
                  <ul aria-label={`${s.code} applies to`} className="flex flex-wrap content-start gap-2 lg:col-span-3 lg:justify-end">
                    {s.applies.map((a) => (
                      <li key={a} className="rounded-full border border-line px-3 py-1 text-label text-ink-2">
                        {a}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CRT-03 */}
      <section aria-labelledby="documents-title" className="section bg-canvas-warm">
        <div className="container-site">
          <SectionIntro
            title={<span id="documents-title">Testing and documentation</span>}
            lead="What our Noida laboratory verifies, and what procurement teams can request for a project."
            split
            className="mb-10 lg:mb-14"
          />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <DocList id="testing-title" title="Tested in-house" items={TESTING} />
            <DocList id="project-docs-title" title="Available for your project" items={PROJECT_DOCS} />
          </div>
          <p className="mt-10 max-w-3xl text-small text-ink-3">
            Documents are shared on request with procurement teams, EPC contractors and utility evaluators. Include your project or tender reference when you{" "}
            <Link href="/contact?type=assessment" className={link}>
              contact our engineering team
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CRT-04 */}
      <ClosingCTA
        variant="inline"
        title={["Need compliance documents for a tender?"]}
        lead="Tell us the project and the standards you need evidence for."
        primary={{ label: "Request documents", href: "/contact?type=assessment" }}
        secondary={{ label: "Call +91 70000 13009", href: "tel:+917000013009" }}
      />
    </div>
  );
}
