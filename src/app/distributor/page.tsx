import type { Metadata } from "next";
import Link from "next/link";
import { DistributorForm } from "@/components/distributor/DistributorForm";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/system/SectionIntro";

export const metadata: Metadata = {
  title: "Become a Distributor | Lith-On Channel Partners",
  description:
    "Become a Lith-On channel partner. Supply battery storage made in Noida, from home batteries to 5 MWh containers, with sizing support and manufacturer warranties.",
};

/**
 * /distributor (audit §6, DIS-01–03). Split hero with the application form
 * above the fold (DIS-01, with DIS-03 "who can apply" merged into the left
 * column) → four-item editorial list of benefits (DIS-02).
 *
 * Sources: 250 MWh plant capacity, 24/7 SCADA (vault §1–2); warranty "depends on the product" (owner, 20 Nov 2026);
 * sizing and financial modelling (content/capabilities.md); product range
 * (src/data/products.ts). Removed as unsourced: protected or exclusive
 * territories, "zero broker markups", "guaranteed cell availability",
 * "certified SLDs", "high margins", and the partner-discussion timeframe
 * (CLAIMS_REVIEW §3).
 */

const WHO = ["Solar and electrical EPC contractors", "Electrical equipment distributors", "Diesel generator dealers", "EV charging integrators", "Engineering and MEP consultants"];

const BENEFITS = [
  { title: "Supply from the Noida plant", text: "Systems come straight from our 20,000 sq. ft. plant in Noida, with 250 MWh of annual production capacity." },
  { title: "One range, every customer", text: "Home and small-business batteries, commercial cabinets and 5 MWh utility containers, so you can serve each site you win." },
  { title: "Engineering behind every bid", text: "Our team sizes the system and models the payback for your customer's load profile before you quote." },
  { title: "Backed after handover", text: "Each system carries a manufacturer warranty set for its product and is monitored 24/7 from Noida over cloud SCADA." },
  /* Six-deck timeline, 2023 (src/data/deck-content: dist-white-label); under owner review R10. */
  { title: "OEM and white-label supply", text: "Lith-On has supplied white-label battery storage to established brands since 2023." },
];

const link = "text-lithon-blue underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue rounded-sm";

export default function DistributorPage() {
  return (
    <div className="bg-canvas">
      {/* DIS-01 + DIS-03 */}
      <section id="apply" aria-labelledby="dist-title" className="border-b border-line bg-canvas-warm">
        <div className="container-site grid gap-12 pt-10 pb-16 lg:grid-cols-12 lg:gap-6 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-5">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-small text-ink-3">
                <li className="flex items-center gap-2">
                  <Link href="/" className="hover:text-ink hover:underline underline-offset-4">
                    Home
                  </Link>
                  <span aria-hidden="true">/</span>
                </li>
                <li>
                  <span aria-current="page" className="text-ink">
                    Become a distributor
                  </span>
                </li>
              </ol>
            </nav>
            <h1 id="dist-title" className="text-display-l text-ink">
              <span className="block">Sell storage</span>
              <span className="block font-[500] text-lithon-blue">made in India</span>
            </h1>
            <p className="mt-6 text-lead text-ink-2 measure text-pretty">Partner with Lith-On to supply and install battery storage across your territory, with our engineers behind every project.</p>

            <h2 className="mt-12 text-heading-3 text-ink">Who can apply</h2>
            <ul className="mt-4 border-t border-line">
              {WHO.map((w) => (
                <li key={w} className="border-b border-line py-3 text-body text-ink-2">
                  {w}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-small text-ink-3">
              Prefer to talk first? Call{" "}
              <a href="tel:+917000013009" className={link}>
                +91 70000 13009
              </a>{" "}
              or email{" "}
              <a href="mailto:tech@lith-onbharat.com" className={link}>
                tech@lith-onbharat.com
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 lg:pl-6">
            <div className="rounded-media border border-line bg-canvas p-6 shadow-[0_1px_2px_rgba(17,24,39,0.04),0_8px_24px_-12px_rgba(17,24,39,0.12)] sm:p-10">
              <DistributorForm />
            </div>
          </div>
        </div>
      </section>

      {/* DIS-02 */}
      <section aria-labelledby="benefits-title" className="section">
        <div className="container-site">
          <SectionIntro title={<span id="benefits-title">What partners get</span>} className="mb-8 lg:mb-12" />
          <Reveal>
            <ol className="grid gap-x-6 md:grid-cols-2">
              {BENEFITS.map((b, i) => (
                <li key={b.title} className="flex gap-5 border-t border-line py-7">
                  <span className="tabular text-small text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-heading-3 text-ink">{b.title}</h3>
                    <p className="mt-2 text-body text-ink-2">{b.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
