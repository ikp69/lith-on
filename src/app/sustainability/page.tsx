import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Sun
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability & Environmental Impact | Lith-On Clean Energy",
  description:
    "Discover Lith-On's environmental impact: Displacing millions of liters of diesel fuel, eliminating PM2.5 emissions, 100% CAQM GRAP compliance, and cobalt-free circular battery recycling.",
};

const EMISSION_ROWS = [
  { parameter: "Annual Diesel Fuel Consumed", dg: "~650,000 Liters / Year", bess: "0 Liters (100% Displaced)", advantage: "Zero fossil fuel burn" },
  { parameter: "Direct CO2 Atmospheric Emissions", dg: ">1,740 Metric Tons / Year", bess: "ZERO Direct Emissions", advantage: "1,740 Tons CO2e eliminated" },
  { parameter: "Toxic PM2.5 / PM10 Particulates", dg: "2,800+ Kilograms / Year", bess: "ZERO Exhaust Smoke", advantage: "Prevents toxic urban lung smog" },
  { parameter: "Ground-Level NOx & SOx", dg: "Heavy Toxic Exhaust", bess: "ZERO Harmful Gases", advantage: "No acid-rain precursors" },
  { parameter: "Operating Acoustic Sound Level", dg: "85 dB – 95 dB (Deafening Engine)", bess: "<55 dB (Solid-State Silent)", advantage: "Safe for residential & wards" },
  { parameter: "CAQM GRAP Winter Status", dg: "BANNED (Illegal in Stage II–IV)", bess: "100% COMPLIANT & LEGAL", advantage: "Zero risk of shutdown" },
];

export default function SustainabilityPage() {
  return (
    <div className="space-y-16 py-10 sm:py-16">
      {/* 1. Header Banner */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3388] mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span>Sustainability &amp; ESG</span>
          </div>

          <h1 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Accelerating Decarbonization <br className="hidden sm:block" />
            <span className="font-bold text-[#0B3388]">
              Through Digital Energy Storage
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Energy storage is the critical missing link in the global transition away from fossil fuel combustion. 
            Lith-On Bharat Energy directly replaces toxic diesel generator liabilities with zero-emission, 
            solid-state battery energy storage systems engineered for maximum circularity.
          </p>
        </div>
      </section>

      {/* 2. Environmental Impact Counters */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:grid-cols-4 lg:p-8">
            <div className="border-r border-gray-100 pr-4">
              <div className="text-3xl font-extrabold text-emerald-700 sm:text-4xl">1,740 T</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Annual CO2e Abated</div>
              <div className="text-[11px] text-emerald-600 mt-0.5 font-semibold">Per 500-flat housing society</div>
            </div>

            <div className="border-r border-gray-100 pr-4 pl-2 lg:pl-4">
              <div className="text-3xl font-extrabold text-gray-900 sm:text-4xl">650k L</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Diesel Fuel Displaced</div>
              <div className="text-[11px] text-[#0B3388] mt-0.5 font-semibold">Eliminates toxic tanker deliveries</div>
            </div>

            <div className="border-r border-gray-100 pr-4 pl-2 lg:pl-4">
              <div className="text-3xl font-extrabold text-[#0B3388] sm:text-4xl">100%</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">CAQM GRAP Compliant</div>
              <div className="text-[11px] text-emerald-600 mt-0.5 font-semibold">Zero Stage II–IV diesel violation</div>
            </div>

            <div className="pl-2 lg:pl-4">
              <div className="text-3xl font-extrabold text-[#F74530] sm:text-4xl">&lt;55 dB</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Operating Acoustic Level</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Replaces 85+ dB engine roar</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The True Environmental Cost of Diesel Generation */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="border-b border-gray-100 pb-4 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F74530]">
              Fossil Fuel Liability
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl mt-1">
              The Real Cost of Diesel Generator Operation
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-3xl">
              Diesel combustion in dense urban and commercial centers releases severe air pollutants that threaten 
              human health and violate environmental guidelines.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-[#F8FAFC] p-5 border border-gray-200">
              <span className="text-xs font-mono font-bold text-[#F74530]">2.68 kg CO2 / Liter</span>
              <h3 className="text-base font-bold text-gray-900 mt-2">Carbon Intensity</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Burning 1 liter of diesel produces 2.68 kg of atmospheric greenhouse gas, driving urban heat islands.
              </p>
            </div>

            <div className="rounded-xl bg-[#F8FAFC] p-5 border border-gray-200">
              <span className="text-xs font-mono font-bold text-amber-600">PM2.5 &amp; PM10 Dust</span>
              <h3 className="text-base font-bold text-gray-900 mt-2">Microscopic Particulates</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Carcinogenic particulate matter penetrates deep into lung tissue, triggering asthma and cardiovascular illness.
              </p>
            </div>

            <div className="rounded-xl bg-[#F8FAFC] p-5 border border-gray-200">
              <span className="text-xs font-mono font-bold text-blue-600">NOx &amp; SOx Precursors</span>
              <h3 className="text-base font-bold text-gray-900 mt-2">Acid Smog Precursors</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Exhaust stacks emit nitrogen and sulfur dioxides directly at ground level near residential balconies and air intakes.
              </p>
            </div>

            <div className="rounded-xl bg-[#F8FAFC] p-5 border border-gray-200">
              <span className="text-xs font-mono font-bold text-gray-600">75 dB – 95 dB Noise</span>
              <h3 className="text-base font-bold text-gray-900 mt-2">Acoustic Pollution</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Vibration and engine rumble create chronic stress in high-density residential towers and hospital zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Audited Emissions Comparison Table */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="border-b border-gray-100 pb-4 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Comparative Impact
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl mt-1">
              Annual Emissions Comparison: 500-Flat Community (3,000 kVA DG)
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-gray-700">
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider">Environmental Parameter</th>
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[#F74530]">Traditional Diesel DG Sets</th>
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-emerald-700">Lith-On BESS Solution</th>
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[#0B3388]">Environmental Net Gain</th>
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
        </div>
      </section>

      {/* 5. 100% CAQM GRAP Compliance & Renewable Energy Storage */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
              <ShieldCheck className="h-4 w-4" />
              <span>National Capital Region Mandates</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">100% CAQM GRAP Regulatory Compliance</h3>
            <p className="text-xs text-gray-600 mt-3 leading-relaxed">
              In Delhi-NCR and major metros, the Commission for Air Quality Management (CAQM) enforces emergency anti-pollution 
              measures under the Graded Response Action Plan (GRAP). Under <strong className="text-gray-900 font-semibold">GRAP Stage II, III, and IV</strong>, 
              running diesel generator sets is strictly illegal, exposing residential societies and commercial facilities to 
              disconnection notices, heavy daily fines, or total power shutdown.
            </p>
            <div className="mt-6 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-xs text-emerald-800">
              <strong>100% Legally Protected:</strong> Lith-On BESS operates with zero tailpipe emissions, guaranteeing continuous, 
              uninterrupted legal electricity throughout every air pollution alert.
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3388] mb-2">
              <Sun className="h-4 w-4" />
              <span>Renewable Energy Synergy</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">70% to 90% Clean Energy Self-Sufficiency</h3>
            <p className="text-xs text-gray-600 mt-3 leading-relaxed">
              Solar generation peaks at midday when commercial demand may be moderate. Without battery storage, surplus solar power 
              is either exported at low feed-in tariffs or curtailed. Lith-On BESS absorbs 100% of midday solar surplus and stores it 
              for high-cost evening peak hours (4:00 PM to 10:00 PM), drastically reducing coal-fired grid reliance.
            </p>
            <div className="mt-6 rounded-xl bg-blue-50/70 border border-blue-200 p-4 text-xs text-blue-900">
              <strong>Decarbonization Impact:</strong> Over 15–20 years of design life, each MWh of deployed Lith-On BESS prevents 
              thousands of tons of coal combustion.
            </div>
          </div>
        </div>
      </section>

      {/* 6. Circular Lifecycle & Cobalt-Free Chemistry */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="border-b border-gray-100 pb-4 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Ethical Materials
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl mt-1">
              Responsible &amp; Circular Lifecycle Management
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-[#F8FAFC] p-6 border border-gray-200">
              <h3 className="text-base font-bold text-gray-900">100% Cobalt &amp; Nickel-Free Chemistry</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Lith-On exclusively utilizes Lithium Iron Phosphate (LiFePO4). Unlike chemistries requiring cobalt 
                (associated with severe mining humanitarian concerns) or nickel, LFP uses earth-abundant iron and phosphate, 
                eliminating toxic mining footprints.
              </p>
            </div>

            <div className="rounded-xl bg-[#F8FAFC] p-6 border border-gray-200">
              <h3 className="text-base font-bold text-gray-900">&gt;95% Materials Recyclability</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Designed for end-of-life circular dismantling. Steel and aluminum chassis are 100% recyclable, 
                copper busbars are fully reclaimed, and certified recycling partners extract high-purity lithium carbonate for next-generation cells.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#0B3388] text-white p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">Calculate Your Facility Carbon Abatement</h3>
            <p className="text-sm text-blue-100 mt-2 max-w-xl">
              Model your annual diesel displacement, metric tons of CO2e reduced, and GRAP compliance status with our engineers.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F74530] hover:bg-[#d63623] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all shrink-0 shadow-md"
          >
            <span>Request Carbon Audit</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
