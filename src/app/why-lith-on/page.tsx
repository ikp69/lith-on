import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Award,
  Layers,
  Cpu,
  Factory,
  Flame,
  ShieldCheck,
  Wrench,
  Clock,
  Activity
} from "lucide-react";
import { SevenMoatsStack } from "@/components/illustrations/SevenMoatsStack";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CallToAction } from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "Why Lith-On | Evidence-Backed Engineering Differentiation & The 7 Moats",
  description:
    "Discover Lith-On's defensible engineering moats: in-house BMS/PCS firmware, Noida plant laser fabrication, IceBattery® thermal management, the Certification Trifecta, and 10-year warranty SLAs.",
};

const DIFFERENTIATION_PILLARS = [
  {
    id: "firmware",
    title: "1. In-House Engineering & Firmware",
    icon: Cpu,
    category: "Full-Stack Architecture",
    description: "Unlike pack assemblers who stitch together third-party inverters, generic imported BMS boards, and separate external EMS boxes, Lith-On engineers the entire power and software stack under a unified single-clock architecture.",
    evidence: "Proprietary firmware controls sub-10ms static transfer switches and coordinates 6 native operating modes (Peak Shaving, ToD Arbitrage, Solar Buffering, Microgrid Islanding, Synthetic Inertia, and Black-Start) without protocol latency."
  },
  {
    id: "manufacturing",
    title: "2. Manufacturing & Assembly Scale",
    icon: Factory,
    category: "20,000 sq.ft. Noida Facility",
    description: "Operates an industrial-scale manufacturing plant in Sector 136, Noida, Uttar Pradesh, with 250 MWh annual production throughput (50 MWh complete containerized BESS + 200 MWh high-voltage battery packs).",
    evidence: "Equipped with automated CNC laser busbar micro-welding stations, pneumatic torque-calibrated busbar tooling, and automated cell sorting and capacity grading lines."
  },
  {
    id: "thermal",
    title: "3. Battery Management & Thermal Physics",
    icon: Flame,
    category: "IceBattery® Technology",
    description: "Indian ambient operating conditions regularly exceed 45°C. Lith-On integrates an inorganic 300–400µm ceramic coating on enclosure panels, reflecting >90% of solar Near-Infrared radiation and radiating heat outward through the atmospheric window (8–13 µm).",
    evidence: "Laboratory spectrophotometer reflectance tests confirm >90% NIR rejection. Industrial liquid-cooling loops in the LT215 hold cell-to-cell thermal variations under 2.5°C in continuous 50°C+ summer environments."
  },
  {
    id: "qa-testing",
    title: "4. Quality Assurance & Lab Infrastructure",
    icon: ShieldCheck,
    category: "Full-Load Validation",
    description: "Every module and completed BESS enclosure undergoes rigorous end-of-line testing in our Noida laboratories before leaving the factory floor.",
    evidence: "In-house 3,000V DC dielectric withstand testing, environmental chamber thermal cycling (-20°C to +60°C), automated IR/OCV grading, and live 415V AC grid simulation benches."
  },
  {
    id: "epc-integration",
    title: "5. Turnkey System Integration & EPC",
    icon: Wrench,
    category: "End-to-End Execution",
    description: "Lith-On provides turnkey project delivery from initial on-site load profiling and tariff modeling to civil plinth engineering, medium-voltage transformer skids, and discom net-metering synchronization.",
    evidence: "Proven multi-megawatt execution across private universities (Invertis 1 MWh microgrid), EV fast-charging corridors, forward defense outposts, and state utility substations."
  },
  {
    id: "after-sales",
    title: "6. After-Sales Engineering & 24/7 SCADA",
    icon: Activity,
    category: "10-Year Warranty SLA",
    description: "Backed by an industry-leading 10-year manufacturer warranty guaranteeing >=70% residual capacity retention at 10 years or 6,000 cycles (at 88%–90% DoD).",
    evidence: "Centralized cloud SCADA operations center monitors cell-level voltages and temperatures every second, backed by factory-certified field technicians offering 4–8 hour response SLAs across Delhi-NCR."
  }
];

export default function WhyLithOnPage() {
  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-36 pt-28 sm:pt-36 pb-28 lg:pb-36 bg-white">
      {/* 1. Header Banner */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-4">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900 font-semibold" aria-current="page">Why Lith-On</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
            Why Choose Lith-On: <br className="hidden sm:block" />
            <span className="font-semibold text-lithon-blue">
              Defensible Engineering &amp; Native IP
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed font-normal">
            In an energy storage sector often dominated by trading resellers and generic kit assemblers, 
            Lith-On Bharat Energy stands apart as a vertically integrated manufacturer. We build native 
            Indian grid intelligence into every BMS, PCS, and enclosure, backed by verifiable laboratory 
            certifications and a transparent 10-year warranty.
          </p>
        </div>
      </section>

      {/* 2. The 7 Defensible Structural Moats */}
      <section className="px-4 sm:px-6" id="moats">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Defensibility Stack"
            eyebrowIcon={Layers}
            title={
              <>
                The Seven Structural <span className="font-semibold text-lithon-blue">Engineering Moats</span>
              </>
            }
            subtitle="Explore the technological, manufacturing, and regulatory barriers that underpin Lith-On systems."
          />

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center mt-6">
            <div className="lg:col-span-8">
              <SevenMoatsStack />
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-gray-200 bg-canvas-offwhite p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-lithon-blue mb-3">
                  <Layers className="h-4 w-4" />
                  <span>Defensibility Architecture</span>
                </div>
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-gray-200 bg-white shadow-inner">
                  <Image
                    src="/images/case-studies/competitive-moat-tower.jpg"
                    alt="The 7 Defensible Engineering Moats Tower Architecture"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
                <a
                  href="/images/case-studies/competitive-moat-tower.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-lithon-blue underline underline-offset-4 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue rounded"
                >
                  Open the full-size moats diagram
                </a>
                <p className="text-xs text-gray-600 mt-3 leading-snug text-center font-normal">
                  Full-stack native IP: In-house BMS/PCS firmware, IceBattery® ceramic passive shield, sub-10ms topology, and certified substation teleprotection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Evidence-Backed Engineering Differentiation (6 Pillars) */}
      <section className="px-4 sm:px-6" id="differentiation">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeader
            eyebrow="Objective Engineering Evidence"
            eyebrowIcon={ShieldCheck}
            title={
              <>
                Evidence-Backed <span className="font-semibold text-lithon-blue">Technical Differentiation</span>
              </>
            }
            subtitle="How Lith-On provides defensible advantages across firmware, thermodynamics, testing, and lifecycle support."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATION_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <span className="text-[11px] font-mono font-bold text-lithon-blue">
                        {pillar.category}
                      </span>
                      <Icon className="h-5 w-5 text-gray-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mt-3">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-gray-100 bg-blue-50/40 -mx-6 -mb-6 p-4 rounded-b-2xl">
                    <span className="text-[11px] font-bold text-lithon-blue block mb-1">
                      Supporting Verification:
                    </span>
                    <p className="text-xs text-gray-700 leading-relaxed font-normal">
                      {pillar.evidence}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. The Certification Trifecta Wall */}
      <section className="px-4 sm:px-6" id="certifications">
        <div className="mx-auto max-w-7xl rounded-3xl border border-gray-200 bg-canvas-offwhite p-8 sm:p-10 shadow-xs">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-lithon-blue mb-2">
              <Award className="h-4 w-4" />
              <span>Institutional Quality Wall</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              The Certification Trifecta: IEC 61508 + IEC 61850 + BIS
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed font-normal">
              Achieving simultaneous audited compliance across functional safety, substation communication protocols, 
              and mandatory domestic battery standards requires 24 to 36 months of rigorous laboratory compliance testing, 
              creating a defensible barrier that trading resellers cannot replicate.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border-t border-gray-200 pt-6">
              <span className="rounded-md bg-blue-50 border border-blue-200 text-lithon-blue text-xs font-mono font-bold px-2.5 py-1">
                IEC 61508
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-4">Functional Safety (SIL 2 / SIL 3)</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed font-normal">
                Audited principles for electrical and electronic safety-related systems. Validates failsafe hardware isolation, over-voltage protection, and multi-tier contactor trip logic.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <span className="rounded-md bg-blue-50 border border-blue-200 text-lithon-blue text-xs font-mono font-bold px-2.5 py-1">
                IEC 61850
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-4">Substation Automation Protocol</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed font-normal">
                Enables immediate, native SCADA communications with national transmission utilities (NTPC, PGCIL, state discoms) for synthetic inertia and frequency containment.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <span className="rounded-md bg-blue-50 border border-blue-200 text-lithon-blue text-xs font-semibold px-2.5 py-1">
                BIS Certified
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-4">Bureau of Indian Standards</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed font-normal">
                Mandatory domestic Indian safety standard ensuring all secondary lithium cell assemblies, module enclosures, and wiring insulation meet national safety benchmarks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Time-to-Replicate Barrier Analysis */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Barriers to Entry"
            eyebrowIcon={Clock}
            title={
              <>
                Time-to-Replicate <span className="font-semibold text-lithon-blue">Analysis</span>
              </>
            }
            subtitle="The capital, technical, and institutional lead time required to establish a domestic energy storage manufacturing ecosystem."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-lithon-blue">
                <Clock className="h-4 w-4" />
                <span>18-Month Lead Time</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-3">Manufacturing Plant Infrastructure</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed font-normal">
                Establishing a 20,000 sq. ft. precision facility with CNC laser welding, pneumatic busbar assembly, 
                and environmental burn-in cyclers requires at least 18 months of capital lead time.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-lithon-blue">
                <Clock className="h-4 w-4" />
                <span>24 to 36 Month Cycle</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-3">Laboratory Certification Process</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed font-normal">
                Achieving verified IEC 61508 SIL functional safety, IEC 61850 substation communications, and BIS compliance 
                demands multi-year laboratory burn-in testing and third-party safety audits.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-lithon-red-ink">
                <Clock className="h-4 w-4" />
                <span>40+ Years Cumulative</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-3">IIT Engineering Pedigree</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed font-normal">
                Decades of engineering knowledge regarding Indian electrical grid surges, floating neutrals, and desert ambient heat 
                cannot be purchased off the shelf by trading competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <CallToAction
        eyebrow="Bankable Technology OEM"
        title="Partner with a Proven Indian BESS Manufacturer"
        description="Explore how Lith-On's 10-year warranty, in-house tech stack, and rapid turnkey EPC delivery derisk your energy storage investment."
        primaryAction={{
          label: "Request Bankability Dossier",
          href: "/contact?type=bankability",
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
