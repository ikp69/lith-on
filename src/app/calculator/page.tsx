import type { Metadata } from "next";
import Link from "next/link";
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Coins, 
  Clock
} from "lucide-react";
import { SavingsCalculator } from "@/components/calculator/SavingsCalculator";
import { CallToAction } from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "BESS ROI & Diesel Replacement Calculator | Lith-On Bharat Energy",
  description:
    "Calculate your facility's operational savings, payback period, and diesel displacement when upgrading from DG generator sets to Lith-On Battery Energy Storage Systems (BESS).",
  keywords: [
    "BESS ROI Calculator",
    "Diesel Replacement Savings",
    "CAQM GRAP DG Ban Calculator",
    "BESS Payback Period India",
    "LFP Battery Storage Cost Analysis",
  ],
};

export default function CalculatorPage() {
  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-36 pb-28 lg:pb-36 bg-white">
      {/* 1. Header Banner */}
      <section className="border-b border-gray-200 bg-canvas-offwhite px-4 sm:px-6 pt-10 sm:pt-40 pb-14 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-4">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-600">Engineering Tools</span>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900 font-semibold" aria-current="page">ROI Calculator</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1 text-xs font-semibold text-lithon-blue mb-4">
              <Calculator className="h-3.5 w-3.5 text-lithon-red" />
              <span>Capital Expenditure &amp; Operating Savings Engine</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
              BESS ROI &amp; Diesel <br className="hidden sm:block" />
              <span className="font-semibold text-lithon-blue">
                Displacement Calculator
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              Compare your current diesel generator running costs against turnkey Lith-On Battery Energy Storage Systems. Model annual fuel displacement, CAQM GRAP compliance feasibility, and project payback timelines based on audited Noida factory benchmark data.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-200">
            <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-lithon-blue mb-1">
                <Coins className="h-4 w-4 text-emerald-700" />
                <span className="text-xs font-medium text-gray-500">Average Payback</span>
              </div>
              <div className="text-2xl font-bold font-mono text-gray-900">1.8 – 2.4 Yrs</div>
              <p className="text-[11px] text-gray-500 mt-0.5">Based on ₹98/L industrial diesel</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-lithon-blue mb-1">
                <TrendingDown className="h-4 w-4 text-lithon-red" />
                <span className="text-xs font-medium text-gray-500">OPEX Reduction</span>
              </div>
              <div className="text-2xl font-bold font-mono text-emerald-700">Up to 73%</div>
              <p className="text-[11px] text-gray-500 mt-0.5">Vs. continuous diesel genset run</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-lithon-blue mb-1">
                <Clock className="h-4 w-4 text-lithon-blue" />
                <span className="text-xs font-medium text-gray-500">Switchover Speed</span>
              </div>
              <div className="text-2xl font-bold font-mono text-gray-900">&lt;10 ms</div>
              <p className="text-[11px] text-gray-500 mt-0.5">Zero precision machine stoppage</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-lithon-blue mb-1">
                <ShieldCheck className="h-4 w-4 text-emerald-700" />
                <span className="text-xs font-medium text-gray-500">GRAP Compliance</span>
              </div>
              <div className="text-2xl font-bold font-mono text-gray-900">100% Legal</div>
              <p className="text-[11px] text-gray-500 mt-0.5">Zero diesel generator fines</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Calculator Section */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-tight">
              Interactive System Sizing &amp; <span className="font-semibold text-lithon-blue">Payback Modeler</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Select an audited customer case study or adjust real-time sliders for your generator rating (kVA), daily operating run-hours, and local diesel tariffs.
            </p>
          </div>

          <SavingsCalculator />
        </div>
      </section>

      {/* 3. Engineering Guidance Note */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center gap-2 text-lithon-blue">
                <ShieldCheck className="h-5 w-5 text-lithon-red" />
                <h3 className="text-base font-semibold text-gray-900">
                  Engineering Sizing Methodology &amp; CAQM Compliance
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                All model calculations incorporate Tier-1 LFP cell degradation curves (6,000+ cycles @ 88% Depth of Discharge), round-trip efficiency of 95%–98%, and auxiliary thermal cooling loads under India&apos;s extreme summer conditions (60°C ambient tolerance supported by proprietary IceBattery® ceramic coatings).
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" />
                  <span>Sub-10ms instantaneous static switch included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" />
                  <span>Integrated aerosol fire suppression</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" />
                  <span>IEC 61508 / IEC 61850 grid compliant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" />
                  <span>Complete turn-key commissioning &amp; 10-yr warranty</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-gray-500 block mb-1">
                  Custom Engineering RFQ
                </span>
                <h4 className="text-sm font-bold text-gray-900">Need On-Site Load Profiling?</h4>
                <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                  Our Noida engineering team deploys power quality analyzers to log your factory 15-minute load curves before finalizing transformer &amp; inverter ratings.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact?type=assessment"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lithon-red-ink hover:bg-lithon-red-ink-hover px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition-colors"
                >
                  <span>Request Engineering Site Audit</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Global Call To Action */}
      <CallToAction
        eyebrow="Turnkey Payback Analysis"
        title="Ready to Replace Diesel Generation with BESS?"
        description="Share your monthly diesel consumption or transformer load data. Our Noida factory application engineers will deliver an audited ROI model and Single Line Diagram (SLD) tailored to your facility."
        primaryAction={{
          label: "Request Turnkey Sizing Proposal",
          href: "/contact?type=assessment",
        }}
        secondaryAction={{
          label: "+91-7000013009",
          href: "tel:+917000013009",
          isPhone: true,
        }}
        variant="contrast"
      />
    </div>
  );
}

function TrendingDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}
