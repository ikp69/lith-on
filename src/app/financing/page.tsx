import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  Banknote,
  Calculator,
  ShieldCheck,
  Clock,
  IndianRupee,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "BESS Financing, Rental & EMI Options | Lith-On Bharat Energy",
  description:
    "Flexible BESS financing: BESS on Rent, 10% down payment EMI plans (5-year term), OPEX models, and institutional financing partnerships for industrial battery energy storage in India.",
};

const FINANCING_MODELS = [
  {
    model: "BESS on Rent",
    icon: Building2,
    tagline: "Zero CAPEX — Operational Expenditure Model",
    description:
      "Deploy a Lith-On BESS at your facility with zero upfront capital expenditure. Pay a fixed monthly rental fee that includes installation, commissioning, 24/7 monitoring, and warranty-backed maintenance. Ideal for facilities that want to eliminate diesel immediately without capital allocation.",
    highlights: [
      "Zero upfront investment — start saving from Day 1",
      "Fixed monthly rental includes installation, O&M, and insurance",
      "Flexible 3-year and 5-year rental terms available",
      "System ownership transfer option at end of rental period",
      "No balance sheet impact — classified as operating expense",
    ],
    cta: "Enquire About Rental",
  },
  {
    model: "EMI Financing",
    icon: Banknote,
    tagline: "10% Down Payment — 5-Year Monthly EMI",
    description:
      "Acquire your BESS with just 10% down payment and affordable monthly EMIs over a 5-year period through our institutional financing partners. The monthly savings from diesel displacement and demand charge elimination typically exceed your EMI, making the investment cash-flow positive from Month 1.",
    highlights: [
      "Only 10% down payment required to initiate project",
      "5-year EMI period with fixed monthly installments",
      "Best case and worst case EMI scenarios provided upfront",
      "Financing partners handle documentation and approvals",
      "Asset ownership from Day 1 with hypothecation to lender",
    ],
    cta: "Calculate EMI",
  },
  {
    model: "Direct CAPEX Purchase",
    icon: IndianRupee,
    tagline: "Full Ownership — Maximum Long-Term Returns",
    description:
      "Purchase the BESS outright for maximum 10-year and 15-year financial returns. Best suited for companies with available capital budgets, government institutions, and organisations leveraging accelerated depreciation benefits under Income Tax Act provisions.",
    highlights: [
      "Highest 10-year net ROI (up to 500%+ on verified projects)",
      "Full ownership and unrestricted operational control",
      "Accelerated depreciation benefits under Indian Income Tax Act",
      "No interest costs or financing fees",
      "Eligible for applicable MNRE / state subsidies",
    ],
    cta: "Request Quotation",
  },
];

const PARTNER_TYPES = [
  "Scheduled Commercial Banks (PSU & Private Sector)",
  "Non-Banking Financial Companies (NBFCs) specializing in clean energy",
  "Equipment leasing companies with industrial asset expertise",
  "Green financing institutions and multilateral development agencies",
];

export default function FinancingPage() {
  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-36 pb-28 lg:pb-36 bg-white">
      {/* Header */}
      <section className="border-b border-gray-200 bg-canvas-offwhite px-4 sm:px-6 pt-10 sm:pt-40 pb-14 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-4"
          >
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900 font-semibold" aria-current="page">
              Financing
            </span>
          </nav>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
            Financing &amp;{" "}
            <span className="font-semibold text-lithon-blue">
              BESS on Rent
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed font-normal">
            Not every facility has upfront capital for a BESS. Lith-On offers flexible commercial
            models — from zero-CAPEX rental to low-down-payment EMI financing — so you can start
            saving on diesel and demand charges immediately, regardless of budget cycle.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://lith-onbharat.com/calc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-lithon-red-ink hover:bg-lithon-red-ink-hover px-6 py-3 text-xs font-semibold text-white shadow-sm transition-colors"
            >
              <Calculator className="h-4 w-4" />
              <span>Open EMI Calculator</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span>Speak to Finance Team</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Financing Models */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-mono font-bold text-lithon-blue">
              Commercial Models
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mt-2">
              Choose Your{" "}
              <span className="font-semibold text-lithon-blue">Acquisition Model</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {FINANCING_MODELS.map((fm) => {
              const Icon = fm.icon;
              return (
                <div
                  key={fm.model}
                  className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs hover:border-blue-200 transition-colors flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-200">
                      <Icon className="h-5 w-5 text-lithon-blue" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{fm.model}</h3>
                      <p className="text-[10px] font-medium text-gray-500">
                        {fm.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">{fm.description}</p>

                  <ul className="mt-5 space-y-2 flex-1">
                    {fm.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-lithon-blue hover:text-lithon-blue-hover transition-colors"
                    >
                      <span>{fm.cta}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EMI Calculator CTA */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white border border-blue-200 px-3.5 py-1.5 text-xs font-semibold text-lithon-blue">
                  <Calculator className="h-3.5 w-3.5" />
                  <span>Interactive EMI Calculator</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
                  Calculate Your{" "}
                  <span className="font-semibold text-lithon-blue">Monthly EMI</span>
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                  Use our interactive calculator to see best-case and worst-case monthly EMI
                  projections for your specific BESS configuration. Compare EMI payments against your
                  current diesel and demand charge costs to see the net monthly cash-flow impact.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
                    <Clock className="h-4 w-4 text-lithon-blue" />
                    <span>5-Year Term</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
                    <Banknote className="h-4 w-4 text-lithon-blue" />
                    <span>10% Down Payment</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
                    <ShieldCheck className="h-4 w-4 text-lithon-blue" />
                    <span>Best &amp; Worst Case Scenarios</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <a
                  href="https://lith-onbharat.com/calc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-lithon-blue hover:bg-lithon-blue-hover px-8 py-5 text-sm font-bold text-white transition-colors shadow-lg"
                >
                  <Calculator className="h-5 w-5" />
                  <span>Open EMI Calculator</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Partners */}
      <section className="px-4 sm:px-6 bg-canvas-offwhite py-16 sm:py-20 border-y border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <span className="text-xs font-mono font-bold text-lithon-blue">
                Institutional Financing Network
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mt-2">
                Our Financing{" "}
                <span className="font-semibold text-lithon-blue">Partners</span>
              </h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Lith-On works with established institutional financing partners who specialise in clean
                energy and industrial equipment financing. Our finance team facilitates the entire
                application, documentation, and disbursement process.
              </p>
              <ul className="mt-5 space-y-3">
                {PARTNER_TYPES.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs">
              <h3 className="text-sm font-bold text-gray-900 mb-4">
                How EMI Financing Works
              </h3>
              <ol className="space-y-4">
                {[
                  { step: "1", text: "Submit project inquiry with your facility load profile and BESS configuration" },
                  { step: "2", text: "Receive a detailed quotation with best-case and worst-case monthly EMI options" },
                  { step: "3", text: "Pay 10% down payment and complete lender documentation (facilitated by Lith-On)" },
                  { step: "4", text: "BESS manufacturing, installation, and commissioning proceeds" },
                  { step: "5", text: "Monthly EMI payments begin — typically offset by diesel and demand charge savings" },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lithon-blue text-white text-[10px] font-bold shrink-0">
                      {item.step}
                    </span>
                    <span className="text-xs text-gray-700 leading-relaxed pt-0.5">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-lithon-blue p-8 sm:p-12 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">
                Budget Should Not Block Clean Energy
              </h3>
              <p className="text-sm text-blue-100 mt-2 max-w-xl">
                Whether you prefer rental, EMI, or outright purchase — our team will find the right
                commercial structure for your facility. Get a customised financial proposal.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-lithon-red-ink hover:bg-lithon-red-ink-hover px-6 py-3.5 text-xs font-bold text-white transition-colors shadow-md"
              >
                <span>Get Financial Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+917000013009"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-colors"
              >
                <Phone className="h-4 w-4 text-white" />
                <span>+91-7000013009</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
