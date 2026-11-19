import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Zap,
  Activity,
  Radio,
  ShieldCheck,
  Clock,
  Globe2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Grid Services & Utility Solutions | Lith-On BESS",
  description:
    "Lith-On utility-scale BESS for grid frequency regulation, synthetic inertia, peak shaving at substations, renewable energy firming, black-start capability, and ancillary services.",
};

const GRID_SERVICES = [
  {
    service: "Frequency Regulation & Synthetic Inertia",
    icon: Activity,
    description:
      "Sub-cycle active power injection to arrest rapid grid frequency decay following generator trips or sudden load changes. Lith-On BESS responds far faster than conventional spinning reserve, providing synthetic inertia that stabilises the grid during frequency excursions.",
    specs: [
      "Droop control with configurable deadband (±0.03 Hz default)",
      "Compliant with CEA (Technical Standards for Connectivity) Regulations",
      "Continuous 4C discharge capability for rapid power injection",
    ],
    markets: "State Transmission Utilities, POSOCO/NLDC, Independent System Operators",
  },
  {
    service: "Renewable Energy Firming & Dispatchability",
    icon: Zap,
    description:
      "Transform intermittent solar and wind generation into firm, dispatchable power. Lith-On BESS stores surplus generation during high-output periods and dispatches during evening peaks, curtailment windows, and cloud transients — enabling RE+Storage hybrid projects to meet SECI and state DISCOM scheduling requirements.",
    specs: [
      "4-hour duration storage at rated power (Max-20HC)",
      "Ramp rate control to smooth RE output within DISCOM norms",
      "Automated curtailment prevention and energy recovery",
      "Compatible with SECI hybrid wind-solar-storage tender architectures",
    ],
    markets: "Solar Park Developers, Wind IPPs, SECI Tender Participants, C&I Open Access",
  },
  {
    service: "Transmission & Distribution Deferral",
    icon: Globe2,
    description:
      "Deploy containerised BESS at constrained substations to defer or eliminate costly transformer upgrades and new transmission line construction. BESS provides targeted capacity during peak hours, extending the life of existing infrastructure while new capacity is planned.",
    specs: [
      "5.0 MWh per 20ft container, scalable to 50+ MWh farms",
      "Direct 11kV / 33kV medium-voltage interconnection",
      "Automated peak shaving to keep substation loading below thermal limits",
      "Modular deployment: install in 8–12 weeks vs 2–3 years for new substation",
    ],
    markets: "State DISCOMs, Transmission Utilities, Industrial Estate Developers",
  },
  {
    service: "Black-Start & Grid Restoration",
    icon: Radio,
    description:
      "Re-energize an isolated distribution network without external grid power. Lith-On BESS provides the initial active and reactive power needed to cold-start transformer magnetisation currents and sequentially restore distribution feeders following a complete blackout.",
    specs: [
      "Internal auxiliary energy storage for self-start capability",
      "Soft-start transformer energisation to avoid inrush overcurrent",
      "Sequential feeder restoration with load acceptance protocols",
      "IEC 61850 GOOSE messaging for substation relay coordination",
    ],
    markets: "Critical Substations, Island Microgrids, Defense Installations, Industrial Parks",
  },
  {
    service: "Voltage Support & Reactive Power",
    icon: ShieldCheck,
    description:
      "Provide dynamic reactive power compensation (VAR support) to maintain voltage profiles within statutory limits at distribution and sub-transmission level. The PCS bi-directional inverter delivers both leading and lagging reactive power independently of real power dispatch.",
    specs: [
      "4-quadrant PCS operation: active + reactive power simultaneously",
      "Continuous voltage regulation within ±5% nominal",
      "Power factor correction from 0.8 lagging to 0.8 leading",
      "Fault ride-through compliant with Indian grid code requirements",
    ],
    markets: "DISCOMs with Voltage Quality Issues, Industrial Clusters, Remote Feeder Ends",
  },
  {
    service: "Ancillary Services Market Participation",
    icon: Clock,
    description:
      "As CERC operationalises the Indian ancillary services market, BESS assets become eligible for revenue from primary reserve, secondary reserve, and tertiary reserve services. Lith-On systems support IEC 61850 communication for grid-interactive utility integration.",
    specs: [
      "AGC signal tracking with <1 second response latency",
      "Bi-directional power modulation for up and down regulation",
      "Revenue stacking: frequency regulation + energy arbitrage + capacity payments",
    ],
    markets: "POSOCO/NLDC, Generating Companies, RE Aggregators, Merchant Power Plants",
  },
];

export default function GridServicesPage() {
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
              Grid Services
            </span>
          </nav>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
            Grid Services &amp;{" "}
            <span className="font-semibold text-lithon-blue">Utility Solutions</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed font-normal">
            Lith-On utility-scale BESS delivers the grid services that India&apos;s evolving power
            system demands — from sub-second frequency response and renewable firming to
            transmission deferral and black-start restoration. Built for DISCOMs, transmission
            utilities, IPPs, and ancillary services market participants.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/products/max-20hc"
              className="inline-flex items-center gap-2 rounded-full bg-lithon-blue hover:bg-lithon-blue-hover px-5 py-2.5 text-xs font-semibold text-white transition-colors shadow-xs"
            >
              <span>Max-20HC 5.0 MWh Platform</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-lithon-blue" />
              <span>Grid Compliance Certifications</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Grid Services Detailed Listings */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-mono font-bold text-lithon-blue">
              Utility-Scale Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mt-2">
              Services for the{" "}
              <span className="font-semibold text-lithon-blue">Modern Grid</span>
            </h2>
          </div>

          <div className="space-y-6">
            {GRID_SERVICES.map((gs) => {
              const Icon = gs.icon;
              return (
                <div
                  key={gs.service}
                  className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs"
                >
                  <div className="grid gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-7 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 border border-blue-200">
                          <Icon className="h-4.5 w-4.5 text-lithon-blue" />
                        </div>
                        <h3 className="text-base font-bold text-gray-900">{gs.service}</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">{gs.description}</p>
                      <div className="pt-2">
                        <span className="text-[10px] font-bold text-gray-500">
                          Target Markets
                        </span>
                        <p className="text-xs text-gray-700 mt-1">{gs.markets}</p>
                      </div>
                    </div>
                    <div className="lg:col-span-5">
                      <div className="border-t border-gray-200 pt-5">
                        <span className="text-[10px] font-bold text-lithon-blue block mb-3">
                          Technical Parameters
                        </span>
                        <ul className="space-y-2">
                          {gs.specs.map((spec) => (
                            <li
                              key={spec}
                              className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-lithon-blue p-8 sm:p-12 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">
                Planning a Utility-Scale BESS Project?
              </h3>
              <p className="text-sm text-blue-100 mt-2 max-w-xl">
                Our grid integration engineering team can design a solution tailored to your substation
                constraints, DISCOM interconnection requirements, and ancillary services revenue targets.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-lithon-red-ink hover:bg-lithon-red-ink-hover px-6 py-3.5 text-xs font-bold text-white transition-colors shadow-md"
              >
                <span>Request Grid Assessment</span>
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
