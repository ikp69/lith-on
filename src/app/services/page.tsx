import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Wrench,
  Clock,
  ShieldCheck,
  Truck,
  Monitor,
  Cpu,
  Settings,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "After-Sales, Commissioning & O&M Services | Lith-On BESS",
  description:
    "Lith-On BESS turnkey services: site survey, installation, commissioning, 24/7 SCADA monitoring, preventive maintenance, spare parts, and 10-year warranty support across India.",
};

const SERVICE_PHASES = [
  {
    phase: "01",
    title: "Site Survey & System Design",
    icon: Settings,
    timeline: "Week 1–2",
    items: [
      "On-site electrical load profiling and demand pattern analysis",
      "Existing DG, transformer, and switchgear audit",
      "Foundation and civil space assessment for BESS placement",
      "Single Line Diagram (SLD) and protection coordination design",
      "Utility interconnection scheme and DISCOM liaison",
      "Customized system sizing report with ROI projections",
    ],
  },
  {
    phase: "02",
    title: "Manufacturing & Factory Testing",
    icon: Cpu,
    timeline: "Week 3–8",
    items: [
      "Cell-level capacity grading and internal resistance sorting",
      "Module assembly with automated laser busbar welding",
      "BMS firmware loading and cell-level calibration",
      "Full system Factory Acceptance Test (FAT) at Noida facility",
      "IceBattery® ceramic coating application and curing",
      "Pre-shipment visual and electrical inspection",
    ],
  },
  {
    phase: "03",
    title: "Delivery, Installation & Wiring",
    icon: Truck,
    timeline: "Week 8–10",
    items: [
      "Logistics coordination with specialised heavy-equipment transport",
      "Foundation alignment, levelling, and anchoring",
      "AC/DC cabling, busbar, and earthing connections",
      "Protection relay and switchgear integration",
      "Communication wiring (Modbus, CAN, Ethernet, 4G gateway)",
      "Fire suppression system arming and sensor verification",
    ],
  },
  {
    phase: "04",
    title: "Commissioning & Handover",
    icon: CheckCircle2,
    timeline: "Week 10–11",
    items: [
      "Site Acceptance Test (SAT) with client facility team",
      "Full charge-discharge cycle verification at rated power",
      "Sub-10ms static transfer switch cutover test (oscilloscope-verified)",
      "Grid synchronisation and islanding mode validation",
      "SCADA cloud dashboard activation and user training",
      "Commissioning certificate and O&M manual handover",
    ],
  },
];

const MAINTENANCE_TIERS = [
  {
    tier: "Standard",
    description: "Included with 10-year warranty",
    features: [
      "24/7 cloud SCADA remote monitoring",
      "Automated fault detection and alerting",
      "Quarterly remote health check reports",
      "Firmware and EMS software updates",
      "Phone and email technical support (business hours)",
    ],
  },
  {
    tier: "Comprehensive AMC",
    description: "Annual Maintenance Contract",
    features: [
      "Everything in Standard, plus:",
      "Bi-annual on-site preventive maintenance visits",
      "Cell-level impedance and capacity spot-checks",
      "Cooling system inspection and coolant top-up (liquid-cooled units)",
      "Electrical torque and thermal imaging inspection",
      "Fire suppression system integrity check",
    ],
  },
  {
    tier: "Premium 24/7",
    description: "Mission-critical installations",
    features: [
      "Everything in Comprehensive AMC, plus:",
      "Dedicated 24/7 technical helpline",
      "On-site critical spare parts inventory",
      "Annual full-system performance audit and reporting",
      "Dedicated account manager and field engineer",
      "Proactive battery cell balancing optimisation",
      "Annual insurance compliance documentation package",
    ],
  },
];

export default function ServicesPage() {
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
              Services
            </span>
          </nav>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
            Turnkey Services &amp;{" "}
            <span className="font-semibold text-lithon-blue">
              After-Sales Support
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed font-normal">
            From initial site survey to 10-year warranty support, Lith-On delivers end-to-end BESS
            project execution. Our in-house engineering team handles design, manufacturing,
            installation, commissioning, and ongoing operations &amp; maintenance — all from our
            20,000 sq. ft. Noida facility.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700">
              <Clock className="h-4 w-4 text-lithon-blue" />
              <span>8–11 Week Turnkey Timeline</span>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700">
              <Monitor className="h-4 w-4 text-lithon-blue" />
              <span>24/7 Cloud SCADA Monitoring</span>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700">
              <ShieldCheck className="h-4 w-4 text-lithon-blue" />
              <span>10-Year Manufacturer Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Delivery Timeline */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-mono font-bold text-lithon-blue">
              End-to-End Project Delivery
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mt-2">
              From Site Survey to{" "}
              <span className="font-semibold text-lithon-blue">Live Operation</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {SERVICE_PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.phase}
                  className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-200">
                        <Icon className="h-5 w-5 text-lithon-blue" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-gray-500">
                          Phase {phase.phase}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900">{phase.title}</h3>
                      </div>
                    </div>
                    <span className="rounded-full bg-canvas-offwhite border border-gray-200 px-3 py-1 text-[10px] font-mono font-bold text-gray-600">
                      {phase.timeline}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-lithon-blue shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* O&M Maintenance Tiers */}
      <section className="px-4 sm:px-6 bg-canvas-offwhite py-16 sm:py-20 border-y border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-mono font-bold text-lithon-blue">
              Operations &amp; Maintenance
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mt-2">
              Maintenance &amp;{" "}
              <span className="font-semibold text-lithon-blue">Support Plans</span>
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Choose the support level that matches your operational requirements. All plans include
              Lith-On&apos;s cloud-based SCADA monitoring and remote diagnostics.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {MAINTENANCE_TIERS.map((tier, idx) => (
              <div
                key={tier.tier}
                className={`rounded-2xl border p-6 sm:p-7 shadow-xs ${
                  idx === 2
                    ? "border-lithon-blue bg-white ring-1 ring-lithon-blue/20"
                    : "border-gray-200 bg-white"
                }`}
              >
                {idx === 2 && (
                  <span className="inline-block rounded-full bg-lithon-blue px-3 py-0.5 text-[10px] font-bold text-white mb-3">
                    Recommended for Hospitals &amp; Data Centers
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900">{tier.tier}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{tier.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spare Parts & Response Coverage */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-4">
                <Wrench className="h-4 w-4 text-lithon-blue" />
                <span>Spare Parts &amp; Logistics</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Noida warehouse stocking critical spares: BMS controller boards, PCS IGBT modules,
                    contactors, fuses, temperature sensors, and cooling fans
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Replacement battery modules pre-matched and pre-calibrated for hot-swap deployment
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Pan-India logistics network serving major metros and industrial clusters
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Critical replacement modules, BMS boards, and contactors available directly from our Noida manufacturing hub
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-4">
                <Headphones className="h-4 w-4 text-lithon-blue" />
                <span>Field Service Coverage</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    In-house field engineering team based in Noida with trained partner technicians
                    across North India, West India, and South India
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    On-site dispatch: within 4 to 8 hours in Delhi-NCR, 24 hours in Tier-1 Indian cities, and 48 hours pan-India
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Cloud SCADA enables remote firmware updates, parameter tuning, and diagnostics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Escalation path: L1 remote support → L2 field engineer dispatch → L3 Noida
                    factory engineering team
                  </span>
                </li>
              </ul>
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
                Ready for a Turnkey BESS Project?
              </h3>
              <p className="text-sm text-blue-100 mt-2 max-w-xl">
                From site assessment to commissioning — our engineering team manages the entire project
                lifecycle. Get a detailed project timeline and proposal.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-lithon-red-ink hover:bg-lithon-red-ink-hover px-6 py-3.5 text-xs font-bold text-white transition-colors shadow-md"
              >
                <span>Get Project Proposal</span>
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
