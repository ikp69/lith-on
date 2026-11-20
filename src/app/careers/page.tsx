import { ShieldAlert } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/system/PageHero";
import { SectionIntro } from "@/components/system/SectionIntro";

export const metadata: Metadata = {
  title: "Careers | Work on Battery Storage in Noida | Lith-On",
  description:
    "Careers at Lith-On in Noida: battery management, power electronics, thermal engineering, manufacturing, commissioning and sales. We never charge fees.",
};

/**
 * /careers (audit §6, CAR-01–04). Editorial hero with a plant photo (CAR-01;
 * the photo is small, so it sits in the side column rather than full-bleed:
 * plant photography is asset A2/A3) → calm fraud notice (CAR-02, mandatory;
 * wording from content/contact.md) → hairline role list (CAR-03) → inline
 * line and email link (CAR-04).
 *
 * The five roles on the previous page had no source (titles, experience
 * ranges, locations and a "< 2.5 °C" design target). Publishing unconfirmed
 * vacancies is risky on a page that warns about recruitment fraud, so
 * OPEN_ROLES is empty until the client confirms current openings; the page
 * then lists the teams Lith-On's own work implies, without claiming vacancies.
 */

interface Role {
  id: string;
  title: string;
  team: string;
  location: string;
}

/** Add confirmed openings here; the list renders when it is not empty. */
const OPEN_ROLES: Role[] = [];

const TEAMS = [
  { title: "Battery management and firmware", text: "Cell-level BMS, active balancing, EMS algorithms and SCADA telemetry, all developed in-house." },
  { title: "Power electronics", text: "Bi-directional PCS inverters for four-quadrant grid support and sub-10 ms switchover." },
  { title: "Thermal engineering", text: "Liquid and air cooling, and the IceBattery® ceramic coating that keeps cabinets running at 60 °C." },
  { title: "Manufacturing and testing", text: "Cell grading, laser welding, assembly and end-of-line validation at the 20,000 sq. ft. Noida plant." },
  { title: "Projects and commissioning", text: "Site audits, turnkey installation, commissioning and after-sales service across India." },
  { title: "Sales and applications", text: "Sizing systems for housing societies, factories, campuses, EV hubs and utilities." },
];

const APPLY = "mailto:tech@lith-onbharat.com?subject=Career%20enquiry";
const link = "text-lithon-blue underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue rounded-sm";

export default function CareersPage() {
  return (
    <div className="bg-canvas">
      {/* CAR-01 */}
      <PageHero
        variant="editorial"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Company", href: "/about" }, { label: "Careers" }]}
        title={["Build energy storage", "in India"]}
        emphasisLine={1}
        lead="Lith-On designs its own BMS, PCS and EMS and builds every system in Noida. We look for engineers and builders who want to work on the whole stack."
        primary={{ label: "Send your CV", href: APPLY }}
        secondary={{ label: "Teams we hire for", href: "#teams" }}
        visual={
          <figure>
            <div className="relative aspect-[3/2] overflow-hidden rounded-media bg-surface">
              <Image src="/images/factory/battery-pack-assembly.jpg" alt="A Lith-On technician assembling a battery pack at the Noida plant" fill priority sizes="(min-width: 1024px) 30vw, 100vw" quality={80} className="object-cover" />
            </div>
            <figcaption className="mt-2 text-small text-ink-3">Battery pack assembly, Noida</figcaption>
          </figure>
        }
      />

      {/* CAR-02 */}
      <section aria-labelledby="fraud-title" className="pb-4">
        <div className="container-site">
          <div className="flex flex-col gap-4 rounded-media border border-line-strong p-6 sm:flex-row sm:gap-6 sm:p-8">
            <ShieldAlert className="h-6 w-6 shrink-0 text-lithon-red-ink" aria-hidden="true" />
            <div>
              <h2 id="fraud-title" className="text-heading-3 text-ink">
                Lith-On never charges for recruitment
              </h2>
              <p className="mt-2 text-body text-ink-2 measure">
                We never ask for money, application fees, deposits or training charges at any stage of hiring. Genuine messages come only from @lith-onbharat.com or
                @lith-on.com addresses. If someone claiming to represent Lith-On or Neoclo Energy asks you for payment, report it to{" "}
                <a href="mailto:tech@lith-onbharat.com" className={link}>
                  tech@lith-onbharat.com
                </a>{" "}
                or call{" "}
                <a href="tel:+917000013009" className={link}>
                  +91 70000 13009
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAR-03 */}
      <section id="teams" aria-labelledby="roles-title" className="section scroll-mt-24">
        <div className="container-site">
          {OPEN_ROLES.length > 0 ? (
            <>
              <SectionIntro title={<span id="roles-title">Open roles</span>} className="mb-8 lg:mb-10" />
              <ul className="border-t border-ink">
                {OPEN_ROLES.map((r) => (
                  <li key={r.id} className="border-b border-line">
                    <a
                      href={`mailto:tech@lith-onbharat.com?subject=${encodeURIComponent(`Application: ${r.title}`)}`}
                      className="group grid gap-1 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                    >
                      <span className="text-heading-3 text-ink transition-colors group-hover:text-lithon-blue sm:col-span-5">{r.title}</span>
                      <span className="text-body text-ink-2 sm:col-span-3">{r.team}</span>
                      <span className="text-body text-ink-2 sm:col-span-3">{r.location}</span>
                      <span aria-hidden="true" className="hidden text-right text-lithon-blue transition-transform group-hover:translate-x-1 motion-reduce:transition-none sm:col-span-1 sm:block">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <SectionIntro
                title={<span id="roles-title">Teams we hire for</span>}
                lead="There are no advertised openings right now. We still read every application, and contact people when a role opens in their field."
                split
                className="mb-10 lg:mb-12"
              />
              <ol className="grid gap-x-6 md:grid-cols-2">
                {TEAMS.map((t, i) => (
                  <li key={t.title} className="flex gap-5 border-t border-line py-6">
                    <span className="tabular text-small text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-heading-3 text-ink">{t.title}</h3>
                      <p className="mt-1 text-body text-ink-2">{t.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
      </section>

      {/* CAR-04 */}
      <section aria-labelledby="apply-title" className="pb-20 lg:pb-28">
        <div className="container-site">
          <div className="border-t border-line pt-8">
            <h2 id="apply-title" className="text-heading-2 text-ink">
              Don&apos;t see your role?
            </h2>
            <p className="mt-3 text-lead text-ink-2">
              Email your CV and the kind of work you want to do to{" "}
              <a href={APPLY} className={link}>
                tech@lith-onbharat.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
