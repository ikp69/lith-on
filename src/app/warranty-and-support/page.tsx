import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Clock, 
  Activity, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Warranty & Support | 10-Year Coverage & 24/7 SCADA Telemetry",
  description:
    "Review Lith-On's industry-leading 10-year manufacturer warranty, cycle-life performance guarantees, 24/7 cloud SCADA monitoring, and Noida engineering support SLAs.",
};

const SLA_TIERS = [
  { region: "Delhi-NCR Core", time: "4 to 8 Hours", desc: "Rapid field engineer deployment from Noida Sector 136 manufacturing plant with full spare module inventory." },
  { region: "Tier-1 Metro Cities", time: "Within 24 Hours", desc: "Regional certified field engineering dispatch for commercial and industrial installations." },
  { region: "Pan-India & Remote Sites", time: "Within 48 Hours", desc: "Guaranteed on-site dispatch supported by 24/7 remote cloud telemetry bypass and diagnostic triage." },
  { region: "Critical Spare Parts", time: "Immediate Dispatch", desc: "Domestic inventory of replacement BMS controllers, contactors, and cell modules at Noida hub." }
];

export default function WarrantyAndSupportPage() {
  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-36 pb-28 lg:pb-36">
      {/* 1. Header Banner */}
      <section className="border-b border-gray-200 bg-white px-4 sm:px-6 pt-10 sm:pt-36 pb-14 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900 font-semibold" aria-current="page">Warranty &amp; Technical Support</span>
          </nav>

          <h1 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            10-Year Manufacturer Warranty &amp; <br className="hidden sm:block" />
            <span className="font-semibold text-lithon-blue">
              Factory Engineering Support
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Lith-On Bharat Energy stands behind every battery pack and containerized BESS with an industry-leading 
            <strong className="text-gray-900 font-semibold"> 10-year manufacturer warranty</strong> backed by documented cycle-life performance testing. 
            Our commitment extends throughout your asset lifespan with 24/7 cloud SCADA telemetry and factory-trained field response teams.
          </p>
        </div>
      </section>

      {/* 2. 10-Year Warranty at a Glance */}
      <section className="px-4 sm:px-6 -mt-12 sm:-mt-16">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold text-lithon-blue mb-2">
            <ShieldCheck className="h-4 w-4" />
            <span>Bankable Asset Protection</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl">
            10-Year Comprehensive Warranty At a Glance
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border-t border-gray-200 pt-5">
              <span className="text-xs font-mono font-bold text-lithon-blue">Coverage period</span>
              <div className="text-2xl font-black text-gray-900 mt-1">10 Full Years</div>
              <span className="text-xs text-gray-500 mt-1 block">120 consecutive calendar months from commissioning</span>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <span className="text-xs font-mono font-bold text-emerald-700">Cycle life guarantee</span>
              <div className="text-2xl font-black text-gray-900 mt-1">&gt;6,000 Cycles</div>
              <span className="text-xs text-gray-500 mt-1 block">Full charge-discharge cycles @ 88%–90% DoD</span>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <span className="text-xs font-mono font-bold text-lithon-red-ink">Capacity retention</span>
              <div className="text-2xl font-black text-gray-900 mt-1">&ge;70% Capacity</div>
              <span className="text-xs text-gray-500 mt-1 block">Guaranteed usable nameplate capacity at Year 10</span>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <span className="text-xs font-mono font-bold text-blue-600">Structural integrity</span>
              <div className="text-base font-bold text-gray-900 mt-1">Full Chassis &amp; Busbars</div>
              <span className="text-xs text-gray-500 mt-1 block">Heavy-gauge enclosure, laser welds &amp; internal frames</span>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <span className="text-xs font-mono font-bold text-amber-700">Electronics &amp; sensors</span>
              <div className="text-base font-bold text-gray-900 mt-1">BMS &amp; Isolation Contactors</div>
              <span className="text-xs text-gray-500 mt-1 block">BMS master/slave boards, active balancers &amp; pyrofuses</span>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <span className="text-xs font-mono font-bold text-indigo-600">Thermal barrier</span>
              <div className="text-base font-bold text-gray-900 mt-1">IceBattery® Shield</div>
              <span className="text-xs text-gray-500 mt-1 block">Inorganic ceramic coating passive thermal protection</span>
            </div>
          </div>

          {/* Warranty Terms & Conditions Disclosure */}
          <div className="mt-8 border-l-2 border-lithon-blue/50 pl-5">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-lithon-blue shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-gray-700 space-y-2">
                <p className="font-semibold text-gray-900">Documented Warranty Conditions &amp; Exclusions:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                  <li><strong>Operating Temperature:</strong> Warranty applies when cells are operated within the design envelope (15°C to 35°C cell core temperature, maintained automatically via BMS and thermal cooling systems).</li>
                  <li><strong>Telemetry Connection:</strong> System must remain registered with Lith-On cloud SCADA for automated health monitoring or undergo annual factory-authorized maintenance audits.</li>
                  <li><strong>Standard Exclusions:</strong> Coverage does not extend to damage resulting from unauthorized third-party firmware modifications, external mechanical impacts, water flooding exceeding cabinet IP ratings, or unapproved non-isolated inverters.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 24/7 Cloud SCADA Telemetry & Remote Monitoring */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-lithon-blue mb-2">
                <Activity className="h-4 w-4" />
                <span>Active IoT Operations Center</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl">
                24/7 Cloud SCADA Telemetry &amp; Remote Diagnostics
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Every commercial and utility Lith-On BESS connects to our centralized telemetry operations center via 
                redundant encrypted cellular and industrial Ethernet links. Individual cell voltages, dual-point temperature thermistors, 
                and string currents are logged every second.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 text-xs text-gray-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Cell-by-Cell Precision:</strong> Millivolt-level telemetry across every series-connected string.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Predictive Anomaly Detection:</strong> Algorithms detect cell balancing drift weeks before operational disruption.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Automated Alerts &amp; Remote Bypass:</strong> Instant notifications to Noida operations center for rapid dispatch.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Enterprise Dashboard:</strong> Facility managers monitor real-time state of charge, diesel savings, and tariff optimization.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="border-t border-emerald-200 pt-6 text-center w-full">
                <div className="text-4xl font-extrabold text-emerald-700">99.9%</div>
                <div className="text-xs text-gray-900 font-bold mt-1">Uptime Availability Benchmark</div>
                <p className="text-[11px] text-gray-600 mt-2">
                  Continuous proactive remote monitoring ensures high uptime for critical facilities, hospitals, and residential microgrids.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service Level Agreements (SLAs) */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <span className="text-xs font-semibold text-lithon-blue">Field Response Commitments</span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl mt-1">Service Level Agreements (SLAs)</h2>
            <p className="text-sm text-gray-500 mt-1 max-w-2xl">
              Factory-certified field engineering teams deployed directly from our Noida headquarters.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SLA_TIERS.map((tier) => (
              <div key={tier.region} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <span className="text-xs font-mono font-bold text-emerald-700">{tier.time}</span>
                <h3 className="text-base font-bold text-gray-900 mt-2">{tier.region}</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Support Operations Center Coordinates */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-lithon-blue mb-2">
                <Phone className="h-4 w-4 text-lithon-red" />
                <span>Technical Telephony Desk</span>
              </div>
              <div className="text-xl font-bold text-gray-900 mt-1">
                <a href="tel:+917000013009" className="hover:text-lithon-blue transition-colors">+91-7000013009</a>
              </div>
              <div className="text-sm text-gray-600 mt-0.5">
                <a href="tel:+917000017005" className="hover:text-lithon-blue transition-colors">+91-7000017005</a>
              </div>
              <p className="text-xs text-gray-500 mt-2">24/7 Priority Emergency Telemetry &amp; Field Support</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-lithon-blue mb-2">
                <Mail className="h-4 w-4" />
                <span>Engineering Operations Email</span>
              </div>
              <div className="text-lg font-bold text-gray-900 mt-1">
                <a href="mailto:tech@lith-onbharat.com" className="hover:text-lithon-blue transition-colors">
                  tech@lith-onbharat.com
                </a>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-lithon-blue mb-2">
                <Clock className="h-4 w-4" />
                <span>Operations Coverage</span>
              </div>
              <div className="text-sm font-semibold text-gray-900 mt-1">
                Remote Cloud SCADA: 24/7/365
              </div>
              <div className="text-xs text-gray-600 mt-0.5">
                Factory Engineering Hub: Mon–Sat 9:00 AM – 7:00 PM IST
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-lithon-blue text-white p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">Register Your System or Open a Ticket</h3>
            <p className="text-sm text-blue-100 mt-2 max-w-xl">
              Connect directly with our Noida engineering team to log your 10-year warranty, request field telemetry audits, or schedule preventive maintenance.
            </p>
          </div>
          <Link
            href="/contact?type=support"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lithon-red-ink hover:bg-lithon-red-ink-hover px-6 py-3.5 text-xs font-semibold text-white transition-all shrink-0 shadow-md min-h-[44px]"
          >
            <span>Open Support Request</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
