import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Clock, 
  Award,
  Layers
} from "lucide-react";
import { SevenMoatsStack } from "@/components/illustrations/SevenMoatsStack";

export const metadata: Metadata = {
  title: "Why Lith-On | The 7 Moats & Competitive Comparison Matrix",
  description:
    "Discover Lith-On's competitive moats: The 7-Certification Wall (IEC 61508 + IEC 61850 + BIS), 10-year warranty, in-house manufacturing, and comparison against Tata, Adani, JSW, and Exide.",
};

const COMPETITORS = [
  {
    name: "Tata Power",
    focus: "Large Utility & Grid-scale",
    scale: "100 MW / 200 MWh Jaisalmer",
    lithonAdvantage: "Tata is focused almost exclusively on large utility solar projects. Lith-On is modular and agile, deploying commercial, industrial, and EV station systems 3x faster with customized localized engineering."
  },
  {
    name: "Adani Energy",
    focus: "Giga-Scale Hybrid Plants",
    scale: "1,126 MW / 3,530 MWh Khavda",
    lithonAdvantage: "Adani relies heavily on outsourced international technology stacks. Lith-On features 100% in-house BMS, EMS, PCS, and SCADA, coupled with IceBattery® coating reducing operational cooling OPEX by >20%."
  },
  {
    name: "JSW Energy",
    focus: "Large Utility Integration",
    scale: "500 MWh Maharashtra / Karnataka",
    lithonAdvantage: "JSW lacks specific commercial and industrial (C&I) certifications, specialized sub-10ms UPS transfer topology, and decentralized building integration capabilities."
  },
  {
    name: "Exide Energy",
    focus: "Legacy Lead-Acid & Gigafactory",
    scale: "12 GWh Bengaluru Gigafactory",
    lithonAdvantage: "Exide offers standard industrial warranties (typically 3 to 5 years). Lith-On provides a comprehensive 10-year transparent warranty backed by >6,000 cycle testing and integrated IceBattery® thermal protection."
  },
  {
    name: "Lith-On Bharat Energy",
    focus: "EV, Commercial, Industrial, Residential & Microgrids",
    scale: "500+ MWh Deployed Globally, 250 MWh Noida Plant",
    lithonAdvantage: "Optimized Full-Stack BMS/EMS, sub-10ms UPS switchover, IceBattery® 60°C ambient tolerance, CAQM GRAP compliance, and 1.6 to 4-year payback models."
  }
];

export default function WhyLithOnPage() {
  return (
    <div className="space-y-16 py-10 sm:py-16">
      {/* 1. Header Banner */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span>Why Lith-On</span>
          </div>

          <h1 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Why Choose Lith-On: <br className="hidden sm:block" />
            <span className="font-bold text-lithon-blue">
              Unbreachable Moats &amp; Engineering Superiority
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            In an emerging market crowded with trading resellers and basic pack assemblers, Lith-On Bharat Energy 
            stands apart as a vertically integrated energy storage technology manufacturer. We combine native Indian grid 
            engineering with proprietary thermal technology, an institutional certification wall, and an unmatched 10-year warranty.
          </p>
        </div>
      </section>

      {/* 2. The 7 Defensible Moats Interactive Stack */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <SevenMoatsStack />
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-3">
                  <Layers className="h-4 w-4" />
                  <span>Defensibility Architecture</span>
                </div>
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-gray-100 bg-gray-50 shadow-inner">
                  <Image
                    src="/images/case-studies/competitive-moat-tower.jpg"
                    alt="The 7 Defensible Engineering Moats Tower Architecture"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-3 leading-snug text-center">
                  Full-stack native IP: In-house BMS, IceBattery® ceramic shield, sub-10ms topology, and certified grid teleprotection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Certification Trifecta Wall */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-2">
            <Award className="h-4 w-4" />
            <span>Institutional Compliance Barrier</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl">
            The Certification Trifecta: IEC 61508 + IEC 61850 + BIS
          </h2>
          <p className="text-sm text-gray-600 mt-2 max-w-3xl leading-relaxed">
            Attaining simultaneous compliance across functional safety, substation communication protocols, and domestic standards 
            requires <strong className="text-gray-900 font-semibold">24 to 36 months of rigorous laboratory compliance testing</strong>, creating a 
            formidable defense barrier that generic assemblers cannot replicate.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mt-8">
            <div className="rounded-xl bg-surface-light p-6 border border-gray-200">
              <span className="rounded-md bg-blue-50 border border-blue-200 text-lithon-blue text-xs font-mono font-bold px-2.5 py-1">
                IEC 61508
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-4">Functional Safety (SIL 2 / SIL 3)</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Certifies that hardware architecture and firmware algorithms have audited fail-safe mechanisms against over-voltage, 
                current surges, and thermal runaway.
              </p>
            </div>

            <div className="rounded-xl bg-surface-light p-6 border border-gray-200">
              <span className="rounded-md bg-blue-50 border border-blue-200 text-lithon-blue text-xs font-mono font-bold px-2.5 py-1">
                IEC 61850
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-4">Substation Automation Protocol</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Enables immediate, native SCADA communications with national transmission utilities (NTPC, PGCIL, state discoms) 
                without external protocol converters.
              </p>
            </div>

            <div className="rounded-xl bg-surface-light p-6 border border-gray-200">
              <span className="rounded-md bg-blue-50 border border-blue-200 text-lithon-blue text-xs font-semibold px-2.5 py-1">
                BIS IS 16046 Certified
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-4">Bureau of Indian Standards</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Mandatory domestic Indian safety standard ensuring all cell assemblies, enclosures, and insulation meet stringent 
                national quality benchmarks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Head-to-Head Competitive Comparison Matrix */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="border-b border-gray-100 pb-4 mb-6">
            <span className="text-xs font-medium text-lithon-blue">
              Market Positioning
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl mt-1">
              Head-to-Head Competitive Matrix
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-2xl">
              An objective evaluation of market focus, representative scale, and Lith-On’s decisive engineering moats.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-gray-700">
                  <th scope="col" className="p-3.5 font-semibold">Manufacturer</th>
                  <th scope="col" className="p-3.5 font-semibold">Market Focus</th>
                  <th scope="col" className="p-3.5 font-semibold">Milestones &amp; Scale</th>
                  <th scope="col" className="p-3.5 font-semibold text-lithon-blue">Lith-On Decisive Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-sans">
                {COMPETITORS.map((c) => {
                  const isLithon = c.name.includes("Lith-On");
                  return (
                    <tr key={c.name} className={isLithon ? "bg-blue-50/50 font-medium" : "hover:bg-gray-50/70"}>
                      <td className="p-3.5 font-bold text-gray-900 whitespace-nowrap">
                        {isLithon ? (
                          <span className="inline-flex items-center gap-1.5 text-lithon-blue font-bold">
                            <span>{c.name}</span>
                            <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-semibold text-lithon-blue">OEM</span>
                          </span>
                        ) : c.name}
                      </td>
                      <td className="p-3.5 text-gray-600">{c.focus}</td>
                      <td className="p-3.5 font-mono text-gray-500 text-xs">{c.scale}</td>
                      <td className="p-3.5 text-gray-700 leading-relaxed max-w-md">{c.lithonAdvantage}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Time-to-Replicate Barrier Analysis */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-lithon-blue">
                <Clock className="h-4 w-4" />
                <span>18-Month Lead Time</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-3">Manufacturing Plant Setup</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Establishing a 20,000 sq. ft. precision facility with CNC laser welding, pneumatic busbar assembly, 
                and environmental burn-in cyclers requires at least 18 months of capital lead time.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-lithon-blue">
                <Clock className="h-4 w-4" />
                <span>24 to 36 Month Cycle</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-3">The Trifecta Certification Testing</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Achieving IEC 61508 SIL functional safety, IEC 61850 substation communications, and BIS compliance 
                demands multi-year laboratory burn-in testing and independent audits.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-lithon-red">
                <Clock className="h-4 w-4" />
                <span>40+ Years Cumulative</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-3">Institutional IIT Wisdom</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Decades of engineering knowledge regarding Indian grid surges, floating neutrals, and desert ambient heat 
                cannot be purchased off the shelf by trading competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-lithon-blue text-white p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">Partner with a Bankable Technology OEM</h3>
            <p className="text-sm text-blue-100 mt-2 max-w-xl">
              Explore how Lith-On’s 10-year warranty, in-house tech stack, and rapid turnkey EPC delivery derisk your energy storage investment.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lithon-red hover:bg-lithon-red-hover px-6 py-3.5 text-xs font-semibold text-white transition-colors shrink-0 shadow-md min-h-[44px]"
          >
            <span>Request Bankability Dossier</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
