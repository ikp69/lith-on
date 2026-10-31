import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Clock, 
  Activity, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Warranty & Support | 10-Year Coverage & 24/7 SCADA Telemetry",
  description:
    "Review Lith-On's industry-leading 10-year manufacturer warranty, cycle-life performance guarantees, 24/7 cloud SCADA monitoring, and Noida engineering support SLAs.",
};

const SLA_TIERS = [
  { region: "Delhi-NCR Core", time: "4 to 8 Hours", desc: "Rapid field engineer deployment from Noida Sector 136 manufacturing plant with full spare module kits." },
  { region: "Tier-1 Metro Cities", time: "Within 24 Hours", desc: "Regional certified field technician arrival for all major metropolitan commercial installations." },
  { region: "Pan-India & Remote Sites", time: "Within 48 Hours", desc: "Guaranteed on-site dispatch supported by 24/7 remote cloud telemetry bypass and diagnostics." },
  { region: "Critical Spare Parts", time: "Immediate Dispatch", desc: "Guaranteed domestic inventory of spare BMS boards, contactors, and cell modules at Noida hub." }
];

export default function WarrantyAndSupportPage() {
  return (
    <div className="space-y-16 py-10 sm:py-16">
      {/* 1. Header Banner */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3388] mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span>Warranty &amp; Support</span>
          </div>

          <h1 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            10-Year Transparent Warranty &amp; <br className="hidden sm:block" />
            <span className="font-bold text-[#0B3388]">
              Factory Engineering Support
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Lith-On Bharat Energy stands behind every battery pack and containerized BESS with an industry-leading 
            <strong className="text-gray-900 font-semibold"> 10-year manufacturer warranty</strong> backed by documented cycle-life performance testing. 
            Our commitment extends beyond delivery through our 24/7 cloud SCADA operations center and factory-trained field engineering teams.
          </p>
        </div>
      </section>

      {/* 2. 10-Year Warranty at a Glance */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3388] mb-2">
            <ShieldCheck className="h-4 w-4" />
            <span>Bankable Investment Security</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl">
            10-Year Comprehensive Warranty At a Glance
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-[#F8FAFC] p-5 border border-gray-200">
              <span className="text-xs font-mono font-bold text-[#0B3388]">COVERAGE PERIOD</span>
              <div className="text-2xl font-black text-gray-900 mt-1">10 Full Years</div>
              <span className="text-xs text-gray-500 mt-1 block">120 consecutive months from commissioning</span>
            </div>

            <div className="rounded-xl bg-[#F8FAFC] p-5 border border-gray-200">
              <span className="text-xs font-mono font-bold text-emerald-700">CYCLE LIFE GUARANTEE</span>
              <div className="text-2xl font-black text-gray-900 mt-1">&gt;6,000 Cycles</div>
              <span className="text-xs text-gray-500 mt-1 block">Full charge-discharge cycles @ 88%–90% DoD</span>
            </div>

            <div className="rounded-xl bg-[#F8FAFC] p-5 border border-gray-200">
              <span className="text-xs font-mono font-bold text-[#F74530]">CAPACITY RETENTION</span>
              <div className="text-2xl font-black text-gray-900 mt-1">&gt;=70% Capacity</div>
              <span className="text-xs text-gray-500 mt-1 block">Guaranteed usable nameplate capacity at Year 10</span>
            </div>

            <div className="rounded-xl bg-[#F8FAFC] p-5 border border-gray-200">
              <span className="text-xs font-mono font-bold text-blue-600">STRUCTURAL INTEGRITY</span>
              <div className="text-base font-bold text-gray-900 mt-1">Full Chassis &amp; Busbars</div>
              <span className="text-xs text-gray-500 mt-1 block">Heavy-gauge enclosure, laser welds &amp; frames</span>
            </div>

            <div className="rounded-xl bg-[#F8FAFC] p-5 border border-gray-200">
              <span className="text-xs font-mono font-bold text-amber-600">ELECTRONICS &amp; SENSORS</span>
              <div className="text-base font-bold text-gray-900 mt-1">BMS &amp; Contactors</div>
              <span className="text-xs text-gray-500 mt-1 block">BMS boards, active balancers &amp; pyrofuses</span>
            </div>

            <div className="rounded-xl bg-[#F8FAFC] p-5 border border-gray-200">
              <span className="text-xs font-mono font-bold text-indigo-600">THERMAL BARRIER</span>
              <div className="text-base font-bold text-gray-900 mt-1">IceBattery® Shield</div>
              <span className="text-xs text-gray-500 mt-1 block">Inorganic ceramic coating thermal protection</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 24/7 Cloud SCADA Telemetry & Remote Monitoring */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3388] mb-2">
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
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Cell-by-Cell Precision:</strong> Millivolt-level telemetry across every series-connected string.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Predictive AI Anomaly Detection:</strong> Detects subtle balancing drifts weeks before failure.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Automated Alerts &amp; Remote Bypass:</strong> Instant notifications to Noida operations center.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Client Web &amp; Mobile Portal:</strong> Monitor state of charge, diesel savings, and arbitrage revenue.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 text-center shadow-sm w-full">
                <div className="text-4xl font-extrabold text-emerald-700">99.9%</div>
                <div className="text-xs text-gray-900 font-bold mt-1">Uptime Availability Guarantee</div>
                <p className="text-[11px] text-gray-600 mt-2">
                  Continuous proactive remote monitoring ensures high uptime for critical facilities and hospitals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service Level Agreements (SLAs) */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0B3388]">Field Response Commitments</span>
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
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0B3388] uppercase tracking-wider mb-2">
                <Phone className="h-4 w-4" />
                <span>Technical Telephony</span>
              </div>
              <div className="text-xl font-bold text-gray-900 mt-1">
                <a href="tel:+917000013009" className="hover:text-[#0B3388] transition-colors">+91-7000013009</a>
              </div>
              <div className="text-sm text-gray-600 mt-0.5">
                <a href="tel:+917000017005" className="hover:text-[#0B3388] transition-colors">+91-7000017005</a>
              </div>
              <p className="text-xs text-gray-500 mt-2">24/7 Priority Emergency Field Desk</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0B3388] uppercase tracking-wider mb-2">
                <Mail className="h-4 w-4" />
                <span>Engineering Operations Email</span>
              </div>
              <div className="text-lg font-bold text-gray-900 mt-1">
                <a href="mailto:tech@lith-onbharat.com" className="hover:text-[#0B3388] transition-colors">
                  tech@lith-onbharat.com
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-2">Response guaranteed within 2 business hours</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0B3388] uppercase tracking-wider mb-2">
                <Clock className="h-4 w-4" />
                <span>Support Operations Hours</span>
              </div>
              <div className="text-sm font-semibold text-gray-900 mt-1">
                Remote Cloud SCADA: 24/7/365
              </div>
              <div className="text-xs text-gray-600 mt-0.5">
                Factory Engineering: Mon–Sat 9:00 AM – 7:00 PM IST
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#0B3388] text-white p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">Register Your System or Request Service</h3>
            <p className="text-sm text-blue-100 mt-2 max-w-xl">
              Connect directly with our Noida engineering team to register your 10-year warranty or schedule preventive on-site maintenance.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F74530] hover:bg-[#d63623] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all shrink-0 shadow-md"
          >
            <span>Open Support Request</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
