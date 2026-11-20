import type { Metadata } from "next";
import { FinanceEstimator } from "@/components/financing/FinanceEstimator";
import { DeliverySteps } from "@/components/services/DeliverySteps";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { PageHero } from "@/components/system/PageHero";
import { SectionIntro } from "@/components/system/SectionIntro";

export const metadata: Metadata = {
  title: "Financing | Rent, EMI or Purchase Battery Storage | Lith-On",
  description:
    "Rent, EMI or purchase a Lith-On battery storage system, financed through our Japanese partners without affecting your CIBIL record. Estimate rent or EMI.",
};

/**
 * /financing (audit §6, FIN-01–05). Editorial hero with a visual comparing the
 * upfront cost of the three models (FIN-01) → comparison table with the
 * best-for line on top (FIN-02) → in-page rent and EMI estimator (FIN-03) → five-step
 * stepper (FIN-04) → inline closing (FIN-05).
 *
 * Sources: owner, 20 Nov 2026: rent and EMI are offered in India, financed
 * through Japanese partners without affecting the customer's CIBIL record.
 * Rent model (PTPQ quarterly rent, security deposit, end-of-term buyout) from
 * Lith-On's own lease calculator at lith-onbharat.com/calc; maintenance by the
 * provider follows the Energy-as-a-Service model in data-sources; warranty
 * "depends on the product" (owner); sizing and turnkey EPC,
 * content/capabilities.md. EMI: 10% down payment, 5-year tenure, rate as in
 * /calc (owner, 20 Nov 2026). Still unsourced and left out: insurance, accelerated depreciation, MNRE subsidies
 * and ROI claims.
 */

const MODELS = [
  {
    name: "Rent",
    bestFor: "Facilities that want to replace diesel without a capital budget",
    upfront: "A security deposit",
    payment: "A fixed quarterly rent",
    owner: "The financing partner, with a buyout option at the end of the term",
    upkeep: "Lith-On",
  },
  {
    name: "EMI",
    bestFor: "Owning the system while spreading the cost over time",
    upfront: "A 10% down payment",
    payment: "Monthly instalments over 5 years",
    owner: "You",
    upkeep: "You, backed by the product warranty",
  },
  {
    name: "Purchase",
    bestFor: "Organisations with capital available that want the longest-term return",
    upfront: "The full system cost",
    payment: "None after purchase",
    owner: "You",
    upkeep: "You, backed by the product warranty",
  },
] as const;

const ROWS: { label: string; key: "upfront" | "payment" | "owner" | "upkeep" }[] = [
  { label: "Upfront cost", key: "upfront" },
  { label: "Ongoing payment", key: "payment" },
  { label: "Who owns the system", key: "owner" },
  { label: "Who maintains it", key: "upkeep" },
];

const STEPS = [
  { title: "Load audit", text: "We log your site's demand, diesel run hours and tariff penalties." },
  { title: "Sizing and savings", text: "We size the battery and inverter and model the payback transparently." },
  { title: "Choose a model", text: "Rent, EMI or purchase, set against the savings the system produces." },
  { title: "Installation", text: "Turnkey civil works, cabling, switchgear and fire suppression by our team." },
  { title: "Commissioning", text: "Field commissioning, staff training and 24/7 cloud monitoring from Noida." },
];

/** FIN-01 visual: upfront cost of each model as a bar, none → part → full. */
function UpfrontVisual() {
  const bars = [
    { name: "Rent", share: 0.1, note: "Security deposit only" },
    { name: "EMI", share: 0.1, note: "10% down payment" },
    { name: "Purchase", share: 1, note: "Full system cost" },
  ];
  return (
    <figure className="border-t border-ink pt-5">
      <figcaption className="text-small text-ink-3">What you pay upfront</figcaption>
      <ul className="mt-5 space-y-5">
        {bars.map((b) => (
          <li key={b.name}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-body font-[500] text-ink">{b.name}</span>
              <span className="text-small text-ink-2">{b.note}</span>
            </div>
            <div className="mt-2 h-2.5 rounded-full bg-surface" aria-hidden="true">
              <div className={b.share === 1 ? "h-full rounded-full bg-lithon-blue" : "h-full rounded-full bg-line-strong"} style={{ width: `${Math.max(b.share * 100, 1.5)}%` }} />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-small text-ink-3">Proportions are illustrative.</p>
    </figure>
  );
}

export default function FinancingPage() {
  return (
    <div className="bg-canvas">
      {/* FIN-01 */}
      <PageHero
        variant="editorial"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: "Financing" }]}
        title={["Start saving", "before you own it"]}
        emphasisLine={1}
        lead="Rent a system for a security deposit, spread the cost with EMI, or buy it outright. Rent and EMI are financed through our Japanese partners, without affecting your CIBIL record."
        primary={{ label: "Talk to us about financing", href: "/contact?type=assessment" }}
        secondary={{ label: "Estimate rent or EMI", href: "#estimate" }}
        visual={<UpfrontVisual />}
      />

      {/* FIN-02 */}
      <section aria-labelledby="models-title" className="section bg-canvas-warm">
        <div className="container-site">
          <SectionIntro title={<span id="models-title">Three ways to pay</span>} lead="The system, warranty and monitoring are the same in each; only the payment changes." split className="mb-10 lg:mb-14" />
          <div className="hidden overflow-x-auto sm:block">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">Rent, EMI and purchase compared</caption>
              <thead>
                <tr className="border-b border-ink">
                  <td className="w-[22%] pb-4" />
                  {MODELS.map((m) => (
                    <th key={m.name} scope="col" className="pb-4 pr-6 align-bottom">
                      <span className="block text-heading-2 font-[500] text-ink">{m.name}</span>
                      <span className="mt-2 block text-small font-[400] text-lithon-blue">Best for: {m.bestFor.toLowerCase()}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.key} className="border-b border-line">
                    <th scope="row" className="py-4 pr-6 text-small font-[500] text-ink-3">
                      {r.label}
                    </th>
                    {MODELS.map((m) => (
                      <td key={m.name} className="py-4 pr-6 text-body text-ink">
                        {m[r.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Phones: one block per model instead of a sideways-scrolling table. */}
          <div className="space-y-10 sm:hidden">
            {MODELS.map((m) => (
              <div key={m.name} className="border-t border-ink pt-5">
                <h3 className="text-heading-2 text-ink">{m.name}</h3>
                <p className="mt-1 text-small text-lithon-blue">Best for: {m.bestFor.toLowerCase()}</p>
                <dl className="mt-4">
                  {ROWS.map((r) => (
                    <div key={r.key} className="grid grid-cols-[8.5rem_1fr] gap-3 border-b border-line py-3">
                      <dt className="text-small text-ink-3">{r.label}</dt>
                      <dd className="text-body text-ink">{m[r.key]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-small text-ink-3">Rent and EMI are financed through our Japanese partners and do not affect your CIBIL record. Terms depend on the system size and are set out in your proposal.</p>
        </div>
      </section>

      {/* FIN-03 */}
      <section id="estimate" aria-labelledby="estimate-title" className="section scroll-mt-24">
        <div className="container-site">
          <SectionIntro title={<span id="estimate-title">Estimate rent or EMI</span>} lead="Choose rent or EMI, then move the sliders to see the monthly payment and what you pay upfront." split className="mb-10 lg:mb-12" />
          <FinanceEstimator />
        </div>
      </section>

      {/* FIN-04 */}
      <section aria-labelledby="steps-title" className="section-tight bg-canvas-warm">
        <div className="container-site">
          <SectionIntro title={<span id="steps-title">From audit to commissioning</span>} className="mb-10 lg:mb-14" />
          <DeliverySteps steps={STEPS} />
        </div>
      </section>

      {/* FIN-05 */}
      <ClosingCTA
        variant="inline"
        title={["Want a financing proposal?"]}
        lead="Share your site and budget, and we will set out rent, EMI and purchase side by side."
        primary={{ label: "Talk to us about financing", href: "/contact?type=assessment" }}
        secondary={{ label: "Savings calculator", href: "/calculator" }}
      />
    </div>
  );
}
