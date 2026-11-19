import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Sun,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability & Environmental Impact | Lith-On Clean Energy",
  description:
    "Discover Lith-On's environmental impact: Displacing millions of liters of diesel fuel, eliminating PM2.5 emissions, 100% CAQM GRAP compliance, and cobalt-free circular battery recycling.",
};

const EMISSION_ROWS = [
  { parameter: "Annual Diesel Fuel Consumed", dg: "~650,000 Liters / Year", bess: "0 Liters (100% Displaced)", advantage: "Zero fossil fuel combustion" },
  { parameter: "Direct CO2 Atmospheric Emissions", dg: ">1,740 Metric Tons / Year", bess: "ZERO Point-of-Use Emissions", advantage: "1,740 Tons CO2e eliminated" },
  { parameter: "Toxic PM2.5 / PM10 Particulates", dg: "2,800+ Kilograms / Year", bess: "ZERO Exhaust Smoke", advantage: "Prevents toxic urban smog" },
  { parameter: "Ground-Level NOx & SOx", dg: "Heavy Toxic Exhaust", bess: "ZERO Harmful Gases", advantage: "No ground-level acid precursors" },
  { parameter: "Operating Acoustic Sound Level", dg: "85 dB – 95 dB (Combustion Engine)", bess: "<55 dB (Solid-State Quiet)", advantage: "Safe for residential & hospital zones" },
  { parameter: "CAQM GRAP Winter Compliance", dg: "Prohibited under Stage II–IV", bess: "100% Legal & Compliant", advantage: "Zero regulatory shutdown risk" },
];

export default function SustainabilityPage() {
  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-36 pb-28 lg:pb-36">
      {/* 1. Header Banner */}
      <section className="border-b border-gray-200 bg-white px-4 sm:px-6 pt-10 sm:pt-36 pb-14 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900 font-semibold" aria-current="page">Sustainability &amp; ESG</span>
          </nav>

          <h1 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Accelerating Decarbonization <br className="hidden sm:block" />
            <span className="font-semibold text-lithon-blue">
              Through Solid-State Energy Storage
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Energy storage is the critical missing link in transitioning away from diesel generator sets. 
            Lith-On Bharat Energy directly replaces polluting fossil fuel generators with zero-emission, 
            solid-state battery energy storage systems engineered for maximum circularity and 15–20 year lifespans.
          </p>
        </div>
      </section>

      {/* 2. Environmental Impact Counters */}
      <section className="px-4 sm:px-6 -mt-12 sm:-mt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:grid-cols-4 lg:p-8">
            <div className="border-r border-gray-100 pr-4">
              <div className="text-3xl font-extrabold text-emerald-700 sm:text-4xl">1,740 T</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Annual CO2e Abated</div>
              <div className="text-[11px] text-emerald-700 mt-0.5 font-semibold">Per 500-flat housing society</div>
            </div>

            <div className="border-r border-gray-100 pr-4 pl-2 lg:pl-4">
              <div className="text-3xl font-extrabold text-gray-900 sm:text-4xl">650k L</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Diesel Displaced Annually</div>
              <div className="text-[11px] text-lithon-blue mt-0.5 font-semibold">Eliminates fuel truck logistics</div>
            </div>

            <div className="border-r border-gray-100 pr-4 pl-2 lg:pl-4">
              <div className="text-3xl font-extrabold text-lithon-blue sm:text-4xl">100%</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">CAQM GRAP Compliant</div>
              <div className="text-[11px] text-emerald-700 mt-0.5 font-semibold">Zero point-of-use emissions</div>
            </div>

            <div className="pl-2 lg:pl-4">
              <div className="text-3xl font-extrabold text-lithon-red sm:text-4xl">&lt;55 dB</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Operating Acoustic Level</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Silent vs 85+ dB engine roar</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The True Environmental Cost of Diesel Generation */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="border-b border-gray-100 pb-4 mb-8">
            <span className="text-xs font-semibold text-lithon-red-ink">
              Fossil Fuel Liability
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl mt-1">
              The Real Cost of Diesel Generator Operation
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Diesel combustion in dense urban and commercial centers releases severe air pollutants that threaten 
              human health and violate environmental guidelines.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-t border-gray-200 pt-5">
              <span className="text-xs font-mono font-bold text-lithon-red-ink">2.68 kg CO2 / Liter</span>
              <h3 className="text-base font-bold text-gray-900 mt-2">Carbon Intensity Factor</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Burning 1 liter of diesel produces 2.68 kg of atmospheric CO2 (IPCC standard factor), intensifying urban heat and emissions.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <span className="text-xs font-mono font-bold text-amber-700">PM2.5 &amp; PM10 Particulates</span>
              <h3 className="text-base font-bold text-gray-900 mt-2">Microscopic Particulates</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Microscopic soot penetrates deep into lung tissue, contributing directly to severe winter smog episodes in major metros.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <span className="text-xs font-mono font-bold text-lithon-blue">NOx &amp; SOx Precursors</span>
              <h3 className="text-base font-bold text-gray-900 mt-2">Ground-Level Gases</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Exhaust stacks emit nitrogen and sulfur oxides directly at low elevations near residential balconies and air intake shafts.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <span className="text-xs font-mono font-bold text-gray-600">75 dB – 95 dB Noise</span>
              <h3 className="text-base font-bold text-gray-900 mt-2">Acoustic Pollution</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Continuous mechanical engine vibration creates acoustic fatigue in high-density residential towers and hospital zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Audited Emissions Comparison Table */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="border-b border-gray-100 pb-4 mb-6">
            <span className="text-xs font-semibold text-emerald-700">
              Comparative Impact
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl mt-1">
              Annual Emissions Comparison: 500-Flat Community (3,000 kVA DG)
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Based on audited monthly diesel log sheets displacing 650,000 liters of fuel annually with 7.0 MWh Lith-On BESS.
            </p>
          </div>

          {/* Phone layout: one stacked block per parameter so no column falls off-screen */}
          <ul className="divide-y divide-gray-100 md:hidden">
            {EMISSION_ROWS.map((row) => (
              <li key={row.parameter} className="py-4 first:pt-0">
                <h3 className="text-sm font-semibold text-gray-900">{row.parameter}</h3>
                <dl className="mt-2 grid grid-cols-[minmax(0,7rem)_minmax(0,1fr)] gap-x-3 gap-y-1.5 text-xs">
                  <dt className="text-lithon-red-ink font-semibold">Diesel DG sets</dt>
                  <dd className="text-gray-600">{row.dg}</dd>
                  <dt className="text-emerald-700 font-semibold">Lith-On BESS</dt>
                  <dd className="text-emerald-700 font-bold">{row.bess}</dd>
                  <dt className="text-lithon-blue font-semibold">Net gain</dt>
                  <dd className="text-gray-700">{row.advantage}</dd>
                </dl>
              </li>
            ))}
          </ul>

          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-gray-700">
                  <th scope="col" className="p-3.5 font-bold">Environmental Parameter</th>
                  <th scope="col" className="p-3.5 font-bold text-lithon-red-ink">Traditional Diesel DG Sets</th>
                  <th scope="col" className="p-3.5 font-bold text-emerald-700">Lith-On BESS Solution</th>
                  <th scope="col" className="p-3.5 font-bold text-lithon-blue">Environmental Net Gain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-sans">
                {EMISSION_ROWS.map((row) => (
                  <tr key={row.parameter} className="hover:bg-gray-50/70">
                    <td className="p-3.5 font-semibold text-gray-900 whitespace-nowrap">{row.parameter}</td>
                    <td className="p-3.5 text-gray-600 font-mono">{row.dg}</td>
                    <td className="p-3.5 text-emerald-700 font-mono font-bold">{row.bess}</td>
                    <td className="p-3.5 text-gray-700 font-medium">{row.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500 flex items-center gap-2">
            <FileText className="h-3.5 w-3.5 text-gray-500 shrink-0" />
            <span>Calculation formula: 1 Liter Diesel = 2.68 kg CO2e (IPCC guidelines). Upstream grid charging emissions factored at 0.71 kg CO2/kWh off-peak average.</span>
          </div>
        </div>
      </section>

      {/* 5. 100% CAQM GRAP Compliance & Renewable Energy Storage */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-2">
              <ShieldCheck className="h-4 w-4" />
              <span>CAQM Legal Framework</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">CAQM GRAP Directions: Factual Technical Compliance</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
              Under CAQM GRAP (Graded Response Action Plan) guidelines across Delhi-NCR, conventional diesel generator operation is prohibited or severely restricted during Stage II, III, and IV air quality emergencies. Lith-On BESS delivers 100% emission-free electrical power, enabling continuous business and residential operation without diesel combustion or regulatory shutdown risk.
            </p>
            <div className="mt-6 border-l-2 border-emerald-500 pl-4 text-xs text-emerald-800 leading-relaxed">
              <strong>Point-of-Use Zero Emissions:</strong> Because BESS produces zero particulate matter, NOx, or smoke during discharge, facility operations fully satisfy CAQM pollution directives without requiring diesel generator conversion kits or penalty risks.
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-lithon-blue mb-2">
              <Sun className="h-4 w-4" />
              <span>Renewable Synergy</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Capturing 100% of Midday Solar Generation</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
              Solar generation peaks at midday when commercial demand may be lower. Without battery storage, surplus solar power is either curtailed or exported at minimal net-metering credits. Lith-On BESS stores midday solar electricity and discharges it during peak evening hours, maximizing rooftop clean energy utilization.
            </p>
            <div className="mt-6 border-l-2 border-lithon-blue/50 pl-4 text-xs text-blue-900 leading-relaxed">
              <strong>Long-Term Decarbonization:</strong> Over a 15–20 year operational lifespan, each 1 MWh of deployed Lith-On BESS prevents thousands of tons of fossil fuel generation while delivering reliable sub-10ms backup.
            </div>
          </div>
        </div>
      </section>

      {/* 6. Circular Lifecycle & Cobalt-Free Chemistry */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="border-b border-gray-100 pb-4 mb-6">
            <span className="text-xs font-semibold text-emerald-700">
              Ethical Chemistry &amp; Materials
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl mt-1">
              Responsible &amp; Circular Lifecycle Management
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-base font-bold text-gray-900">100% Cobalt-Free &amp; Nickel-Free LiFePO4 Chemistry</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Lith-On exclusively utilizes Lithium Iron Phosphate (LiFePO4) chemistry. Unlike NMC batteries that require cobalt (associated with severe mining humanitarian concerns) and nickel, LFP uses earth-abundant iron and phosphate, significantly reducing raw material extraction hazards.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-base font-bold text-gray-900">&gt;95% Materials Recyclability by Weight</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Engineered for modular end-of-life disassembly. Galvanized steel enclosures and aluminum structural trays are 100% recyclable, copper busbars are reclaimed, and certified domestic recycling partners recover high-purity lithium carbonate for reuse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-lithon-blue text-white p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">Calculate Your Facility Carbon Abatement</h3>
            <p className="text-sm text-blue-100 mt-2 max-w-xl">
              Model your annual diesel fuel displacement, metric tons of CO2e reduced, and CAQM GRAP compliance feasibility with our Noida engineers.
            </p>
          </div>
          <Link
            href="/contact?type=assessment"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lithon-red-ink hover:bg-lithon-red-ink-hover px-6 py-3.5 text-xs font-semibold text-white transition-all shrink-0 shadow-md min-h-[44px]"
          >
            <span>Request Carbon Audit</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
