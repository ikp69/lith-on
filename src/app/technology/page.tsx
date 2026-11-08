import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2
} from "lucide-react";
import { IceBatteryThermal } from "@/components/illustrations/IceBatteryThermal";
import { Sub10msWaveform } from "@/components/illustrations/Sub10msWaveform";
import { InteractiveBessCutaway } from "@/components/technology/InteractiveBessCutaway";
import { EnergyFlowVisualizer } from "@/components/technology/EnergyFlowVisualizer";

export const metadata: Metadata = {
  title: "Proprietary Technology & Engineering Architecture | Lith-On BESS",
  description:
    "Explore Lith-On's core engineering technologies: IceBattery® ceramic thermal management, sub-10ms UPS transfer, in-house BMS/PCS/EMS, and LiFePO4 cell longevity.",
};

const OPERATING_MODES = [
  {
    mode: "01",
    name: "Peak Shaving & Demand Limiting",
    description: "Monitors real-time facility demand and discharges BESS to cap utility maximum demand spikes, avoiding costly kVA penalty billing under industrial HT tariffs."
  },
  {
    mode: "02",
    name: "Solar PV Self-Consumption",
    description: "Captures surplus midday solar generation that would otherwise be curtailed or exported at unfavorable feed-in tariffs, discharging during expensive evening peak hours."
  },
  {
    mode: "03",
    name: "Sub-10ms Islanded Microgrid",
    description: "Instantly islanding in <10ms during utility grid failure, supplying critical elevators, surgical suites, and server racks without blackout delay."
  },
  {
    mode: "04",
    name: "Time-of-Day (ToD) Tariff Arbitrage",
    description: "Autonomous scheduling algorithm that charges the battery bank during low-cost off-peak night windows and discharges during high-cost utility tariff slots."
  },
  {
    mode: "05",
    name: "Synthetic Inertia & Frequency Regulation",
    description: "Utility-scale sub-cycle active power injection to arrest rapid grid frequency decay and comply with state transmission utility grid codes."
  },
  {
    mode: "06",
    name: "Black-Start Capability",
    description: "Internal auxiliary energy storage architecture allows the BESS to re-energize an isolated distribution transformer network without external grid power."
  }
];

export default function TechnologyPage() {
  return (
    <div className="space-y-16 py-10 sm:py-16">
      {/* 1. Header Banner */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span>Technology &amp; R&amp;D</span>
          </div>

          <h1 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Advanced Engineering &amp; <br className="hidden sm:block" />
            <span className="font-bold text-lithon-blue">
              Proprietary Energy Storage Technology
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Lith-On distinguishes itself from commodity assemblers by engineering and manufacturing its core 
            intellectual property in-house. From cell-level thermodynamic management to edge-computing firmware, 
            our systems are built specifically to master the extreme climatic and electrical demands of the Indian subcontinent.
          </p>
        </div>
      </section>

      {/* 2. Interactive 3D Cutaway Subsystem Explorer */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <InteractiveBessCutaway />
        </div>
      </section>

      {/* 3. IceBattery® Ceramic Thermal Shield Section */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="border-b border-gray-200 pb-4">
            <span className="text-xs font-medium text-lithon-blue">
              Thermodynamic Innovation
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl mt-1">
              1. IceBattery® Passive Ceramic Shield
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-3xl leading-relaxed">
              In tropical climates, solar radiation and ambient temperatures regularly exceed 45°C. Traditional battery enclosures 
              absorb intense solar heat, forcing HVAC chillers to consume 15%–25% of battery capacity. Lith-On integrates an 
              ultra-thin (300µm–400µm) inorganic ceramic film applied to the internal and external surfaces of our enclosures.
            </p>
          </div>

          {/* Interactive Illustration Component */}
          <IceBatteryThermal />

          {/* Authentic Technical Ceramic Thermodynamic Diagram Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative aspect-[16/10] w-full md:w-1/2 min-h-[220px] rounded-xl bg-gray-50 border border-gray-100 overflow-hidden flex items-center justify-center p-3">
                <Image
                  src="/images/technology/icebattery-thermodynamics.jpg"
                  alt="IceBattery Ceramic Coating Thermodynamic Reflection and Far-Infrared Radiation Diagram"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="w-full md:w-1/2 space-y-3">
                <span className="text-xs font-semibold text-lithon-blue">
                  Thermodynamic Mechanism
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  NIR Reflection + Far-Infrared Radiative Equilibrium
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  The microscopic ceramic composite operates as a double-action thermal barrier:
                </p>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lithon-blue shrink-0 mt-0.5" />
                    <span><strong>Solar Rejection:</strong> 90%+ of near-infrared radiation is bounced off the exterior before substrate absorption occurs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lithon-blue shrink-0 mt-0.5" />
                    <span><strong>Deep Space Radiation:</strong> Radiates internal thermal accumulation outward as far-infrared rays through the 8 to 14µm atmospheric transparency window.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Sub-Zero Heat Retention:</strong> In freezing Himalayan regions, the ceramic film creates thermal equilibrium, preventing internal warmth escape.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Thermodynamic Key Pillars */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <span className="text-xs font-semibold text-lithon-blue">01. NIR Solar Reflectance</span>
              <h3 className="text-base font-bold text-gray-900 mt-2">&gt;90% Heat Reflected</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Blocks near-infrared solar wavelengths (700nm to 2500nm), preventing cabinet walls from absorbing thermal energy.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <span className="text-xs font-semibold text-lithon-blue">02. Radiative Cooling</span>
              <h3 className="text-base font-bold text-gray-900 mt-2">8 to 13µm Atmospheric Window</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Exhibits emissivity &gt;0.92, radiating internal thermal accumulation directly into the cold vacuum of space.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <span className="text-xs font-semibold text-lithon-blue">03. Temperature Delta</span>
              <h3 className="text-base font-bold text-gray-900 mt-2">15°C to 30°C Cooler Core</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Maintains internal cells within optimal operating zones, dramatically reducing thermal stress and extending cell life.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <span className="text-xs font-semibold text-lithon-red">04. Parasitic Load Reduction</span>
              <h3 className="text-base font-bold text-gray-900 mt-2">&gt;20% HVAC Energy Saved</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Reduces continuous compressor load, increasing project net round-trip efficiency and lowering lifetime OPEX.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sub-10ms UPS Switchover Section */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="border-b border-gray-200 pb-4">
            <span className="text-xs font-medium text-lithon-blue">
              Power Electronics &amp; Resilience
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl mt-1">
              2. Instantaneous Sub-10ms UPS Cutover
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-3xl leading-relaxed">
              Standard diesel generators require 10 to 30 seconds to crank, start, and engage transfer switches. 
              During this 30-second blackout gap, elevators halt mid-shaft and enterprise servers reboot. 
              Lith-On solid-state PCS power conversion transitions into islanded mode in less than 10 milliseconds.
            </p>
          </div>

          {/* Interactive Oscilloscope Component */}
          <Sub10msWaveform />
        </div>
      </section>

      {/* 4. In-House Integrated Tech Stack & 6 Native Modes */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="border-b border-gray-200 pb-4">
            <span className="text-xs font-medium text-lithon-blue">
              Unified Firmware Architecture
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl mt-1">
              3. In-House BMS + PCS + EMS Unified Stack
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-3xl leading-relaxed">
              Unlike generic pack assemblers that stitch together mismatched 3rd-party subsystems, Lith-On engineers 
              the Battery Management System (BMS), Power Conversion System (PCS), and Energy Management System (EMS) 
              as a cohesive, single-clock architecture with native support for 6 operating modes.
            </p>
          </div>

          {/* Interactive Power Flow Schematic Simulator */}
          <EnergyFlowVisualizer />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {OPERATING_MODES.map((m) => (
              <div 
                key={m.mode}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-lithon-blue transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-lithon-blue">MODE {m.mode}</span>
                    <Cpu className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mt-3">{m.name}</h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {m.description}
                  </p>
                </div>
                <div className="mt-5 border-t border-gray-100 pt-3 text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Autonomous Edge Firmware Execution</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tier-1 LiFePO4 Chemistry Longevity */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-medium text-lithon-blue">
                Electrochemistry Excellence
              </span>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl mt-1">
                4. Heavy-Duty Tier-1 LiFePO4 (LFP) Architecture
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Lith-On exclusively deploys certified Tier-1 Lithium Iron Phosphate (LiFePO4) cell chemistry. 
                LFP is inherently resistant to thermal runaway, does not release oxygen during high-temperature exposure, 
                and delivers industry-leading cycle longevity backed by our 10-year warranty.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-gray-100 pt-6">
                <div>
                  <span className="text-xs text-gray-500 font-medium">Cycle Longevity</span>
                  <span className="text-2xl font-black font-mono text-gray-900 mt-1 block">&gt;6,000</span>
                  <span className="text-xs text-gray-500">@ 88% to 90% DoD, 25°C</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-medium">Standard Warranty</span>
                  <span className="text-2xl font-black font-mono text-lithon-blue mt-1 block">10 Years</span>
                  <span className="text-xs text-gray-500">Comprehensive SLA</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-medium">Coulombic Efficiency</span>
                  <span className="text-2xl font-black font-mono text-emerald-700 mt-1 block">&gt;98%</span>
                  <span className="text-xs text-gray-500">Cell-level efficiency</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-medium">Self-Discharge</span>
                  <span className="text-2xl font-black font-mono text-gray-900 mt-1 block">&lt;2.5%</span>
                  <span className="text-xs text-gray-500">Per month idle loss</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 text-center shadow-sm w-full">
                <ShieldCheck className="h-12 w-12 text-emerald-700 mx-auto" />
                <h3 className="text-lg font-bold text-gray-900 mt-3">Zero Thermal Runaway</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Chemical bond strength of P-O covalent bond prevents thermal decomposition up to 270°C.
                </p>
                <div className="mt-4 rounded-full bg-blue-50 border border-blue-200 py-1.5 px-3 text-xs font-semibold text-lithon-blue">
                  Trifecta Certified: IEC 61508 SIL 2/3
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-lithon-blue text-white p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">Discuss Your Technical Requirements</h3>
            <p className="text-sm text-blue-100 mt-2 max-w-xl">
              Connect with our power electronics and thermal engineering specialists to review single-line diagrams (SLD) 
              and custom BMS integration protocols.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lithon-red hover:bg-lithon-red-hover px-6 py-3.5 text-xs font-semibold text-white transition-colors shrink-0 shadow-md min-h-[44px]"
          >
            <span>Consult an Engineer</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
