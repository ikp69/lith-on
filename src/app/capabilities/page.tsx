import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing & Engineering Capabilities | Lith-On Facility & EPC",
  description:
    "Explore Lith-On's 20,000 sq. ft. Noida manufacturing facility (250 MWh annual capacity), testing laboratories, 6-step assembly process, and turnkey EPC capabilities.",
};

const MANUFACTURING_STEPS = [
  {
    step: "01",
    title: "Cell Sorting & Capacity Grading",
    description: "Every incoming Tier-1 LiFePO4 cell undergoes automated testing for internal resistance (IR), open-circuit voltage (OCV), and capacity matching within tight tolerances to ensure uniform aging and long pack life."
  },
  {
    step: "02",
    title: "Structural Module Assembly",
    description: "Graded cells are fitted into robust structural frames utilizing fire-retardant polymers and high-strength aluminum side-plates for vibration resilience and optimal thermal spacing."
  },
  {
    step: "03",
    title: "Automated Laser Busbar Micro-Welding",
    description: "Multi-axis CNC laser welding creates low-resistance, metallurgical bonds between nickel-plated copper busbars and cell terminals, impervious to vibration and thermal expansion."
  },
  {
    step: "04",
    title: "BMS & Sensor Harness Integration",
    description: "Precision voltage sensing leads, dual-point temperature thermistors, and active balancing harnesses are routed with automotive-grade locking connectors for reliable telemetry."
  },
  {
    step: "05",
    title: "IceBattery® Ceramic Coating Application",
    description: "The proprietary 300µm–400µm inorganic ceramic shield is precision-applied in dedicated spray booths, imparting high NIR reflectance and FIR deep-space radiative cooling."
  },
  {
    step: "06",
    title: "Full-Load System Burn-In & End-of-Line Validation",
    description: "Complete BESS cabinets undergo full-capacity charge/discharge cycling on automated test benches, dielectric withstand testing (3,000V DC), and safety trip verification."
  }
];

const LAB_TESTS = [
  {
    title: "Dielectric & Insulation Resistance",
    spec: "Up to 3,000V DC Validation",
    description: "Tests isolation between live high-voltage DC buses and metal chassis ground to prevent electrical leakage or arc-faults."
  },
  {
    title: "Thermal Chamber Stress Cycling",
    spec: "-20°C to +60°C Extreme Range",
    description: "Subjects modules to rapid temperature shifts inside environmental chambers to verify BMS temperature trip points and heat dissipation."
  },
  {
    title: "Vibration & Mechanical Stress Simulation",
    spec: "Seismic & Transport Standard",
    description: "Verifies busbar weld integrity, fastener torque retention, and wiring harness stability under heavy transport and earthquake load simulations."
  },
  {
    title: "Grid Simulation & Islanding Stand",
    spec: "Sub-10ms Cutover & <3% THD",
    description: "Validates instantaneous grid-loss islanding, bi-directional power conversion, and clean power quality on a live 415V AC test bench."
  }
];

const EPC_WORKFLOW = [
  { step: "1", title: "Energy Audit & Load Profiling", desc: "Second-by-second logging of facility kW demand, transformer capacity, and DG fuel logbooks." },
  { step: "2", title: "System Sizing & Financial Model", desc: "Precise engineering of kWh capacity and solar-hybrid matching with transparent payback and ROI projections." },
  { step: "3", title: "Turnkey EPC Site Execution", desc: "Civil plinth foundation, DC/AC switchgear, isolation transformers, fire suppression, and cabling." },
  { step: "4", title: "Grid & CEIG Approvals", desc: "Comprehensive documentation support for state discom net-metering and Chief Electrical Inspectorate clearances." },
  { step: "5", title: "Cloud SCADA & 24/7 Monitoring", desc: "Commissioning and integration into Lith-On’s 24/7 cloud NOC for proactive maintenance and telemetry." }
];

export default function CapabilitiesPage() {
  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-36 pb-28 lg:pb-36">
      {/* 1. Header Banner */}
      <section className="border-b border-gray-200 bg-white px-4 sm:px-6 pt-10 sm:pt-36 pb-14 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span>Capabilities &amp; Factory</span>
          </div>

          <h1 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            In-House Manufacturing, <br className="hidden sm:block" />
            <span className="font-semibold text-lithon-blue">
              Engineering &amp; Quality Infrastructure
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            Lith-On operates an integrated industrial manufacturing infrastructure designed to deliver dependable, 
            high-yield battery packs and containerized energy storage systems. By maintaining end-to-end control 
            over hardware fabrication, software firmware, and system assembly, we ensure rigorous quality control 
            and rapid delivery cycles.
          </p>
        </div>
      </section>

      {/* 2. Manufacturing Footprint Bar */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-lithon-blue">
                  Primary Manufacturing Plant
                </span>
                <span className="text-xs font-normal text-gray-500">Sector 136, Noida, UP</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-4">20,000 sq. ft. Noida Assembly &amp; Testing Facility</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="border-t border-gray-200 pt-3">
                  <span className="text-gray-500 block text-xs font-medium">Total Annual Capacity</span>
                  <span className="text-xl font-bold font-mono text-gray-900 mt-0.5 block">250 MWh</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <span className="text-gray-500 block text-xs font-medium">BESS &amp; Pack Split</span>
                  <span className="text-xl font-bold font-mono text-lithon-blue mt-0.5 block">50 + 200 MWh</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                Equipped with multi-axis automated CNC laser micro-welding stations, automated cell sorting and grading benches, 
                torque-calibrated pneumatic busbar fastening, and specialized IceBattery® ceramic spray-coating booths.
              </p>
            </div>

            <div id="foshan" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-lithon-blue">
                  International Sourcing Hub
                </span>
                <span className="text-xs font-normal text-gray-500">Foshan, Guangdong, China</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-4">Foshan Innovation &amp; Supply Center</h2>
              <div className="mt-4 border-t border-gray-200 pt-3 text-xs">
                <span className="text-gray-500 block text-xs font-medium">Strategic Location</span>
                <span className="text-sm font-semibold text-gray-800 mt-0.5 block">
                  C11-6, Foshan Innovation Torchpark, Jihua 2 Road, Chancheng, Foshan
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                Facilitates direct technical collaboration with leading global Tier-1 cell manufacturers and provides an 
                international logistics platform for raw material procurement, ensuring priority allocation of 314Ah utility cells.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 6-Step Manufacturing Process */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <span className="text-xs font-medium text-lithon-blue">
              Standardized Assembly Workflow
            </span>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mt-1">
              The 6-Step Manufacturing Process
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              Every battery module and containerized system follows a documented, traceable industrial assembly protocol.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MANUFACTURING_STEPS.map((step) => (
              <div 
                key={step.step}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lithon-blue text-white text-xs font-mono font-bold">
                      {step.step}
                    </span>
                    <Layers className="h-4 w-4 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mt-4">{step.title}</h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-5 border-t border-gray-100 pt-3 text-xs text-emerald-700 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Quality Assurance Checkpoint Passed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comprehensive In-House Testing Laboratory */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <span className="text-xs font-medium text-lithon-blue">
              Rigorous Quality Validation
            </span>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mt-1">
              Comprehensive In-House Testing Laboratory
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              To guarantee field reliability under harsh Indian operating conditions, Lith-On conducts extensive hardware verification 
              before any system departs the factory.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LAB_TESTS.map((test) => (
              <div key={test.title} className="border-t border-gray-200 pt-5">
                <span className="text-xs font-mono font-bold text-lithon-blue">{test.spec}</span>
                <h3 className="text-base font-bold text-gray-900 mt-2">{test.title}</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">{test.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Turnkey EPC & Project Execution Workflow */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <span className="text-xs font-medium text-lithon-blue">
              End-to-End Implementation
            </span>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mt-1">
              Turnkey EPC &amp; Deployment Execution
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              Lith-On manages every phase from initial power audit to civil engineering, discom liaison, and 24/7 cloud SCADA integration.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {EPC_WORKFLOW.map((item) => (
              <div key={item.step} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-lithon-blue text-xs font-bold font-mono">
                  {item.step}
                </span>
                <h3 className="text-sm font-bold text-gray-900 mt-3">{item.title}</h3>
                <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Factory Visit & Audit CTA */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-lithon-blue text-white p-8 sm:p-12 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">Schedule a Factory Visit to Noida</h3>
            <p className="text-sm text-blue-100 mt-2 max-w-xl">
              Inspect our multi-axis CNC laser welding line, environmental test chambers, and active BESS burn-in racks. 
              Our engineering team hosts technical delegation tours at Sector 136, Noida.
            </p>
          </div>
          <Link
            href="/contact?type=factory-visit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lithon-red-ink px-6 py-3.5 text-xs font-semibold text-white hover:bg-lithon-red-ink-hover transition-colors shadow-md shrink-0 min-h-[44px]"
          >
            <span>Book Facility Tour</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
