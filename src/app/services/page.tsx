import type { Metadata } from "next";
import Image from "next/image";
import { DeliverySteps } from "@/components/services/DeliverySteps";
import { ResponseZones } from "@/components/services/ResponseZones";
import { Button } from "@/components/system/Button";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { PageHero } from "@/components/system/PageHero";
import { SectionIntro } from "@/components/system/SectionIntro";

export const metadata: Metadata = {
  title: "Services | Survey, Installation, Commissioning, Monitoring | Lith-On",
  description:
    "End-to-end battery storage delivery: energy audit, sizing, installation, approvals, commissioning and 24/7 monitoring, with 4–8 hour response in Delhi-NCR.",
};

/**
 * /services (audit §6.14). Editorial hero with an installation photo (SRV-01)
 * → five-step delivery stepper (SRV-02, no week numbers: none is sourced) and
 * site readiness → support after commissioning (SRV-03; the three support
 * plans are withheld, CLAIMS_REVIEW item 6) → response zones (SRV-04) →
 * inline closing (SRV-05). Sources: content/capabilities.md (EPC steps),
 * content/warranty-and-support.md (monitoring, SLAs, site readiness, spares).
 */

const STEPS = [
  { title: "Energy audit", text: "Second-by-second power logging to find peak demand, generator run hours and time-of-day tariff penalties." },
  { title: "Sizing and payback", text: "Battery capacity, inverter rating and any solar matched to your site, with a transparent payback projection." },
  { title: "Build and install", text: "Systems are built and tested in Noida, then installed: foundations, DC and AC cabling, switchgear, transformer and fire suppression." },
  { title: "Approvals", text: "Documents for state discom approval, Chief Electrical Inspectorate (CEIG) compliance and net-metering permits." },
  { title: "Commissioning", text: "Field commissioning, staff training and connection to our 24/7 cloud SCADA monitoring." },
];

const READINESS = [
  { title: "Civil", text: "Plinth foundation drawings matched to soil bearing capacity and system weight." },
  { title: "Electrical", text: "Single-line diagrams for switchgear, neutral grounding, isolation transformers and utility meters." },
  { title: "Clearances", text: "Space for airflow, maintenance doors and cable entry." },
  { title: "Protection", text: "Earthing pits below 1 ohm, lightning protection and emergency stop buttons." },
];

const MONITORING = [
  { title: "Cell-by-cell telemetry", text: "Individual cell voltages, temperatures, string currents and enclosure humidity, logged in real time." },
  { title: "Anomaly detection", text: "Cloud analysis of internal resistance and balancing drift flags a weakening cell before it causes a failure." },
  { title: "Alerts and remote diagnosis", text: "Warnings and trips reach our Noida operations centre at once, for remote diagnosis and field dispatch." },
  { title: "Your dashboard", text: "State of charge, energy savings and diesel displaced on web and mobile." },
];

const ZONES = [
  { zone: "Delhi-NCR", time: "4–8 hours", text: "Field engineer on site after a critical alert." },
  { zone: "Tier-1 cities", time: "24 hours", text: "Technician on site." },
  { zone: "Pan-India", time: "48 hours", text: "On-site dispatch, backed by 24/7 remote diagnostics." },
];

export default function ServicesPage() {
  return (
    <div className="bg-canvas">
      {/* SRV-01 */}
      <PageHero
        variant="editorial"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title={["From site survey", "to 24/7 monitoring"]}
        emphasisLine={1}
        lead="We audit your site, build and install the system, commission it, and monitor it from Noida for its working life."
        primary={{ label: "Request technical sizing", href: "/contact?type=assessment" }}
        secondary={{ label: "Get support", href: "/contact?type=support" }}
        visual={
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden rounded-media bg-surface">
              <Image
                src="/images/installations/catalogue/lucknow-rack.webp"
                alt="An open Lith-On battery rack with its cabling and control display, installed indoors"
                fill
                priority
                sizes="(min-width: 1024px) 30vw, 100vw"
                quality={75}
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-small text-ink-3">A Lith-On battery rack installed in Lucknow</figcaption>
          </figure>
        }
      />

      {/* SRV-02 */}
      <section id="delivery" aria-labelledby="delivery-title" className="section scroll-mt-24 bg-canvas-warm">
        <div className="container-site">
          <SectionIntro title={<span id="delivery-title">How a project runs</span>} lead="One team from the first site visit to a system that is monitored around the clock." split className="mb-10 lg:mb-14" />
          <DeliverySteps steps={STEPS} />

          <div className="mt-16 grid gap-8 border-t border-line pt-10 lg:mt-20 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-4">
              <h3 className="text-heading-3 text-ink">Getting your site ready</h3>
              <p className="mt-2 text-small text-ink-2">We provide preparation guidelines so commissioning goes smoothly and the warranty stays intact.</p>
            </div>
            <dl className="grid gap-x-6 sm:grid-cols-2 lg:col-span-8">
              {READINESS.map((r) => (
                <div key={r.title} className="border-t border-line py-4 first:border-t-0 sm:[&:nth-child(2)]:border-t-0">
                  <dt className="text-body font-[500] text-ink">{r.title}</dt>
                  <dd className="mt-1 text-small text-ink-2">{r.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* SRV-03 */}
      <section id="support" aria-labelledby="support-title" className="section scroll-mt-24">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <h2 id="support-title" className="text-heading-1 text-ink">
              After commissioning
            </h2>
            <p className="mt-4 text-body text-ink-2">Every commercial and industrial system connects to our cloud SCADA platform over encrypted cellular or industrial Ethernet links.</p>
            <div className="mt-8 border-t border-line pt-6">
              <p className="tabular text-heading-1 text-ink">6,000+ cycles</p>
              <p className="mt-1 text-small text-ink-2">Cell rating at 88–90% depth of discharge. Warranty terms depend on the product.</p>
              <div className="mt-4">
                <Button href="/warranty-and-support" variant="tertiary">
                  Warranty and support
                </Button>
              </div>
            </div>
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {MONITORING.map((m, i) => (
              <li key={m.title} className="grid grid-cols-[3rem_1fr] border-t border-line py-6 last:border-b">
                <span className="tabular text-small text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-heading-3 text-ink">{m.title}</h3>
                  <p className="mt-2 text-body text-ink-2">{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SRV-04 */}
      <section id="coverage" aria-labelledby="coverage-title" className="section scroll-mt-24 bg-canvas-warm">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6">
            <ResponseZones />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 id="coverage-title" className="text-heading-1 text-ink">
              Field response
            </h2>
            <dl className="mt-8 border-t border-line">
              {ZONES.map((z) => (
                <div key={z.zone} className="grid grid-cols-[1fr_auto] gap-x-6 border-b border-line py-5">
                  <dt className="text-body font-[500] text-ink">{z.zone}</dt>
                  <dd className="tabular text-heading-3 text-ink">{z.time}</dd>
                  <dd className="col-span-2 mt-1 text-small text-ink-2">{z.text}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-small text-ink-2">
              Replacement modules, BMS boards and contactors ship from our Noida plant. Support line: Monday to Saturday, 9:00 am to 7:00 pm IST; emergency remote diagnostics 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* SRV-05 */}
      <ClosingCTA
        variant="inline"
        title={["Plan your project with our engineers"]}
        lead="Tell us about your site and we will recommend a system and a plan to deliver it."
        primary={{ label: "Request technical sizing", href: "/contact?type=assessment" }}
        secondary={{ label: "Support for an installed system", href: "/contact?type=support" }}
      />
    </div>
  );
}
