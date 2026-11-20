import type { Metadata } from "next";
import { Calculator } from "@/components/calculator/Calculator";
import { Button } from "@/components/system/Button";
import { PageHero } from "@/components/system/PageHero";

export const metadata: Metadata = {
  title: "Diesel vs Battery Savings Calculator | Lith-On",
  description:
    "Estimate the annual saving, payback and battery size when a Lith-On battery system charged from the grid replaces diesel generator running for backup.",
};

/**
 * /calculator (audit §6.12). Compact utility hero (CAL-01, stat boxes
 * removed) → two-pane calculator with methodology disclosure and inline
 * proposal action (CAL-02/03/04 merged). Formulas and defaults from
 * content/calculator-data.json via src/lib/savings.ts.
 */
export default function CalculatorPage() {
  return (
    <div className="bg-canvas">
      {/* CAL-01 */}
      <PageHero
        variant="utility"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Savings calculator" }]}
        title={["Diesel vs battery", "savings calculator"]}
        emphasisLine={1}
        lead="Compare what your diesel generator costs to run for backup with a Lith-On battery system charged from the grid."
      />

      {/* CAL-02–04 */}
      <section aria-label="Calculator" className="section">
        <div className="container-site">
          <Calculator />
        </div>
      </section>

      <section aria-label="Documented results" className="pb-20 lg:pb-28">
        <div className="container-site">
          <div className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-body text-ink-2">See what real sites achieved, from a university microgrid to a 500-flat housing society.</p>
            <Button href="/case-studies" variant="tertiary">
              Case studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
