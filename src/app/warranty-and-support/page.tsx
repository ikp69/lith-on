import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { CountUp } from "@/components/motion/CountUp";
import { Button } from "@/components/system/Button";
import { PageHero } from "@/components/system/PageHero";
import { SectionIntro } from "@/components/system/SectionIntro";
import { ResponseScale } from "@/components/warranty/ResponseScale";
import { TelemetryPanel } from "@/components/warranty/TelemetryPanel";

export const metadata: Metadata = {
  title: "Warranty and Support | Product Warranty and 24/7 Monitoring | Lith-On",
  description:
    "Lith-On's 10-year manufacturer warranty, cells rated for 6,000+ cycles, 24/7 cloud monitoring from Noida and 4–8 hour on-site response in Delhi-NCR.",
};

/**
 * /warranty-and-support (audit §6.17). Editorial hero with the cycle rating as
 * the visual (WAR-01) → how the warranty works: what sets the terms, coverage,
 * conditions (WAR-02). Owner decision 26 Nov 2026: a 10-year manufacturer
 * warranty site-wide (vault §2; replaces the 20 Nov "depends on the product"
 * decision, CLAIMS_REVIEW item 20). No capacity floor is stated → telemetry illustration and 99.9% (WAR-03) → response-time scale
 * (WAR-04) → one support panel (WAR-05/06 merged). Sources:
 * content/warranty-and-support.md; 99.9% availability from
 * content/why-lith-on.md (kept per CLAIMS_REVIEW §3).
 */

const COVERAGE = [
  { title: "Structure and workmanship", text: "Module enclosures, copper busbars, laser-welded terminals, internal cabling and the IceBattery® coating." },
  { title: "Power electronics and BMS", text: "Repair or replacement of cell-level BMS boards, active balancers, pyrofuses, contactors and sensors." },
];

const TERMS = [
  { title: "Ten years", text: "Every Lith-On storage system carries a 10-year manufacturer warranty from commissioning." },
  { title: "Backed by cycle life", text: "Cells are rated for more than 6,000 cycles at 88–90% depth of discharge, with a 15–20 year design life." },
  { title: "Operating conditions", text: "Operation within the recommended temperature and C-rate limits." },
];

const link = "text-lithon-blue underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue rounded-sm";

export default function WarrantyAndSupportPage() {
  return (
    <div className="bg-canvas">
      {/* WAR-01 */}
      <PageHero
        variant="editorial"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Warranty and support" }]}
        title={["Warranty", "and support"]}
        emphasisLine={1}
        lead="Every Lith-On system carries a 10-year manufacturer warranty, backed by documented cycle-life testing, and is monitored around the clock from Noida."
        visual={
          <div className="border-t border-ink pt-4">
            <p className="tabular text-[clamp(140px,18vw,240px)] leading-[0.85] font-[300] tracking-[-0.05em] text-lithon-blue">
              <CountUp value={6000} />
              <span className="text-[0.4em]">+</span>
            </p>
            <p className="mt-4 text-heading-3 text-ink">cycles at 88–90% depth of discharge</p>
          </div>
        }
      />

      {/* WAR-02 */}
      <section id="warranty" aria-labelledby="warranty-title" className="section scroll-mt-24 bg-canvas-warm">
        <div className="container-site">
          <SectionIntro title={<span id="warranty-title">How the warranty works</span>} lead="A 10-year manufacturer warranty on every system, backed by more than 6,000 rated cycles." split className="mb-10 lg:mb-14" />
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-7">
              <h3 className="text-heading-3 text-ink">The terms</h3>
              <ol className="mt-4 border-t border-ink">
                {TERMS.map((t, i) => (
                  <li key={t.title} className="flex gap-5 border-b border-line py-6">
                    <span className="tabular text-small text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-heading-3 text-ink">{t.title}</p>
                      <p className="mt-1 text-body text-ink-2">{t.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <h3 className="text-heading-3 text-ink">What it covers</h3>
              <dl className="mt-4 border-t border-line">
                {COVERAGE.map((c) => (
                  <div key={c.title} className="border-b border-line py-4">
                    <dt className="text-body font-[500] text-ink">{c.title}</dt>
                    <dd className="mt-1 text-small text-ink-2">{c.text}</dd>
                  </div>
                ))}
              </dl>
              <details className="group mt-4">
                <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 text-small font-[500] text-lithon-blue [&::-webkit-details-marker]:hidden">
                  Conditions
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
                </summary>
                <ul className="mt-3 space-y-2 border-l-2 border-line pl-4 text-small text-ink-2">
                  <li>The warranty runs for 10 years from commissioning.</li>
                  <li>It applies when the system is operated within its recommended temperature and C-rate limits.</li>
                  <li>Cells are rated for more than 6,000 cycles at 88–90% depth of discharge.</li>
                  <li>
                    For the full terms for your system,{" "}
                    <Link href="/contact?type=support" className={link}>
                      contact our support team
                    </Link>
                    .
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* WAR-03 */}
      <section id="monitoring" aria-labelledby="monitoring-title" className="section scroll-mt-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <h2 id="monitoring-title" className="text-heading-1 text-ink">
              Monitored cell by cell
            </h2>
            <p className="mt-4 text-body text-ink-2">
              Every commercial and industrial system connects to our cloud SCADA platform over encrypted cellular or industrial Ethernet links. Cell voltages, temperatures,
              string currents and enclosure humidity are logged in real time, and analysis of resistance and balancing drift flags a weakening cell early.
            </p>
            <div className="mt-8 border-t border-line pt-6">
              <p className="tabular text-stat-l text-ink">
                <CountUp value={99.9} decimals={1} />
                <span className="text-[0.32em] font-[500]">%</span>
              </p>
              <p className="mt-3 text-body font-[500] text-ink">Power availability</p>
              <p className="mt-1 text-small text-ink-3">Maintained with 24/7 remote monitoring and factory-trained field engineers</p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <TelemetryPanel />
          </div>
        </div>
      </section>

      {/* WAR-04 */}
      <section id="response" aria-labelledby="response-title" className="section scroll-mt-24 bg-canvas-warm">
        <div className="container-site">
          <SectionIntro
            title={<span id="response-title">On-site response</span>}
            lead="How quickly a field engineer reaches your site after a critical alert."
            split
            className="mb-8 lg:mb-12"
          />
          <ResponseScale />
          <p className="mt-6 max-w-3xl text-small text-ink-2">
            Pan-India dispatch is backed by 24/7 remote diagnostics. Replacement modules, BMS boards and contactors are available directly from our Noida plant.
          </p>
        </div>
      </section>

      {/* WAR-05/06 */}
      <section id="contact" aria-labelledby="help-title" className="section scroll-mt-24">
        <div className="container-site">
          <div className="grid gap-10 rounded-media border border-line p-6 sm:p-10 lg:grid-cols-12 lg:gap-6 lg:p-14">
            <div className="lg:col-span-5">
              <h2 id="help-title" className="text-heading-1 text-ink">
                Need help with a system?
              </h2>
              <p className="mt-4 text-body text-ink-2">Open a support request and our Noida engineering team will pick it up. If a system is offline, call us as well.</p>
              <div className="mt-8">
                <Button href="/contact?type=support" arrow>
                  Open a support request
                </Button>
              </div>
            </div>
            <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              <div className="border-t border-line pt-4">
                <dt className="text-small text-ink-3">Technical support line</dt>
                <dd className="mt-1 text-heading-3 text-ink">
                  <a href="tel:+917000013009" className={link}>
                    +91 70000 13009
                  </a>
                </dd>
                <dd className="mt-1 text-body text-ink">
                  <a href="tel:+917000017005" className={link}>
                    +91 70000 17005
                  </a>
                </dd>
              </div>
              <div className="border-t border-line pt-4">
                <dt className="text-small text-ink-3">Engineering email</dt>
                <dd className="mt-1 text-body text-ink">
                  <a href="mailto:tech@lith-onbharat.com" className={link}>
                    tech@lith-onbharat.com
                  </a>
                </dd>
              </div>
              <div className="border-t border-line pt-4 sm:col-span-2">
                <dt className="text-small text-ink-3">Hours</dt>
                <dd className="mt-1 text-body text-ink-2">Standard support Monday to Saturday, 9:00 am to 7:00 pm IST. Emergency remote diagnostics 24/7.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
