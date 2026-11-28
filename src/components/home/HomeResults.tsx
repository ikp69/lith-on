import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CountUp } from "@/components/motion/CountUp";
import { Button } from "@/components/system/Button";
import { PhotoNeeded } from "@/components/system/PhotoNeeded";
import { SectionIntro } from "@/components/system/SectionIntro";

/**
 * HOME-07 Results (audit §5). Editorial feature for Invertis University, the
 * other two case studies as hairline rows.
 * Figures from LITHON_DATA_VAULT.md §3 case studies A–D only.
 */

const MORE = [
  {
    href: "/case-studies/residential-society-500",
    title: "500-flat housing society",
    place: "Gurugram, Delhi-NCR",
    figure: "₹6.52 Cr → ₹1.76 Cr",
    note: "Annual energy cost, diesel to storage",
  },
  {
    href: "/case-studies/ev-charging-hub",
    title: "Highway EV fast-charging hub",
    place: "NH-48, Haryana",
    figure: "3.9-year payback",
    note: "450 kWh storage with 75 kWp solar",
  },
];

export function HomeResults() {
  return (
    <section aria-labelledby="home-results-title" className="section bg-canvas-warm">
      <div className="container-site">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-10">
          <SectionIntro
            title={<span id="home-results-title">Results from installed systems</span>}
            lead="Documented savings from campuses, housing and EV charging."
            className="mb-6 lg:mb-12"
          />
          <div className="mb-10 lg:mb-12 lg:shrink-0">
            <Button href="/case-studies" variant="tertiary">
              All case studies
            </Button>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          {/* Feature: Invertis University */}
          <article aria-labelledby="result-invertis" className="lg:col-span-8">
            <PhotoNeeded
              subject="Invertis University storage yard and solar array, wide landscape"
              size="2400 × 1000 px or larger"
              className="aspect-[16/9] sm:aspect-[2/1] lg:aspect-[1070/420]"
            />
            <div className="pt-6">
              <p className="tabular flex flex-wrap items-baseline gap-x-[0.08em] text-stat-xl text-ink">
                <span>₹</span>
                <CountUp value={2.26} decimals={2} />
                <span className="ml-2 text-[0.3em] font-[500] tracking-normal">Cr a year saved</span>
              </p>
              <h3 id="result-invertis" className="mt-2 text-body font-[500] text-ink-2">
                Invertis University, Bareilly
              </h3>
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 border-t border-line pt-5 sm:grid-cols-3">
              <div>
                <dt className="text-small text-ink-3">Diesel cost before</dt>
                <dd className="tabular mt-1 text-body text-ink">₹4.14 Cr a year</dd>
              </div>
              <div>
                <dt className="text-small text-ink-3">With storage and solar</dt>
                <dd className="tabular mt-1 text-body text-ink">₹1.88 Cr a year</dd>
              </div>
              <div>
                <dt className="text-small text-ink-3">System</dt>
                <dd className="tabular mt-1 text-body text-ink">1 MWh + 900 kWp solar</dd>
              </div>
            </dl>
            <div className="mt-6">
              <Button href="/case-studies/invertis-university" variant="tertiary">
                Read the Invertis case study
              </Button>
            </div>
          </article>

          {/* More results */}
          <div className="lg:col-span-4">
            <h3 className="text-small font-[500] text-ink-3">More results</h3>
            <ul className="mt-4 border-t border-line">
              {MORE.map((m) => (
                <li key={m.href} className="border-b border-line">
                  <Link
                    href={m.href}
                    className="group/row -mx-3 flex items-start justify-between gap-4 rounded-control px-3 py-5 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
                  >
                    <span className="min-w-0">
                      <span className="block text-body font-[500] text-ink">{m.title}</span>
                      <span className="mt-0.5 block text-small text-ink-3">{m.place}</span>
                      <span className="tabular mt-4 block text-heading-3 text-ink">{m.figure}</span>
                      <span className="mt-1 block text-small text-ink-2">{m.note}</span>
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-lithon-blue transition-transform duration-200 group-hover/row:translate-x-1 motion-reduce:transition-none"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
