import type { Metadata } from "next";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  ArrowRight, 
  Mail
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at Lith-On Bharat Energy | Engineering Tomorrow's Grid Storage",
  description: "Join Lith-On's engineering team in Noida. Explore open positions in battery management systems, power electronics, thermal physics, and grid commissioning.",
};

const OPEN_ROLES = [
  {
    id: "lead-bess-eng",
    title: "Lead BESS Systems Engineer",
    department: "System Architecture & Integration",
    location: "Noida Plant, Sector 136 (U.P.)",
    type: "Full-Time",
    experience: "5–8 Years",
    description: "Lead electrical integration of 215 kWh to 5.0 MWh containerized BESS skids, coordinating high-voltage DC busbars, bi-directional PCS inverters, and switchgear protection."
  },
  {
    id: "thermal-mech-eng",
    title: "Thermal & Mechanical Design Engineer",
    department: "R&D / IceBattery® Lab",
    location: "Noida Plant, Sector 136 (U.P.)",
    type: "Full-Time",
    experience: "3–6 Years",
    description: "Design CFD thermal liquid cooling loops and exterior ceramic radiative cooling surfaces to ensure cell-to-cell thermal variance stays under 2.5°C in extreme 60°C Indian heat."
  },
  {
    id: "firmware-bms-eng",
    title: "Embedded Firmware Engineer (BMS & EMS)",
    department: "Power Electronics & Firmware",
    location: "Noida Plant / Hybrid",
    type: "Full-Time",
    experience: "4–7 Years",
    description: "Develop cell-level telemetry firmware, active balancing algorithms, and IEC 61850 substation teleprotection protocols for direct utility SCADA telemetry."
  },
  {
    id: "field-commissioning-mgr",
    title: "Field Commissioning & Grid Interconnection Manager",
    department: "Projects & Operations",
    location: "Pan-India Travel / HQ Noida",
    type: "Full-Time",
    experience: "4–8 Years",
    description: "Supervise on-site electrical commissioning, DISCOM net-metering synchronization, sub-10ms cutover testing, and client handover at industrial factory sites."
  },
  {
    id: "ci-sales-director",
    title: "C&I Energy Storage Sales Director",
    department: "Commercial & Business Development",
    location: "Delhi-NCR / Gurugram Hub",
    type: "Full-Time",
    experience: "6–10 Years",
    description: "Spearhead turnkey BESS sales to high-rise commercial complexes, industrial plants, and EV charging hubs navigating CAQM GRAP diesel generator replacement."
  }
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Editorial Header */}
      <section className="relative border-b border-gray-200 bg-[#FAFAF8] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
              <Briefcase className="h-3.5 w-3.5 text-[#0B3388]" />
              <span>Engineering Careers</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-light tracking-tight text-gray-900">
              Build India&apos;s Clean <span className="font-semibold text-[#0B3388]">Energy Grid</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Lith-On Bharat Energy is an IIT alumni-led engineering enterprise pioneering utility-scale Battery Energy Storage Systems. Join our Noida manufacturing and R&amp;D team solving complex electrical and thermal physics challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Recruitment Fraud Public Advisory */}
      <section className="border-b border-amber-200 bg-amber-50/70 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-xs text-amber-900">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Official Public Notice Regarding Recruitment Fraud:</strong> Lith-On Bharat Energy Private Limited follows a strict zero-fee policy. We NEVER solicit fees, registration charges, or security deposits at any stage of recruitment. All official offers originate exclusively from <code>@lith-onbharat.com</code> or <code>@lith-on.com</code>.
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-16 sm:py-24 bg-white" id="openings">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
              Current Opportunities
            </span>
            <h2 className="text-3xl font-light text-gray-900 mt-2">
              Open Positions at <span className="font-semibold text-[#0B3388]">Noida Headquarters</span>
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Select a position to review technical requirements and submit your credentials directly to our engineering leadership.
            </p>
          </div>

          <div className="space-y-6">
            {OPEN_ROLES.map((role) => (
              <div
                key={role.id}
                className="rounded-3xl border border-gray-200 bg-[#FAFAF8] p-7 sm:p-8 hover:border-blue-300 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-[11px] font-semibold text-[#0B3388]">
                      {role.department}
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-0.5 text-[11px] text-gray-600 font-mono">
                      {role.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">{role.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">{role.description}</p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-2 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-gray-400" />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-gray-400" />
                      Experience: {role.experience}
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <a
                    href={`mailto:tech@lith-onbharat.com?subject=Job%20Application%3A%20${encodeURIComponent(role.title)}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B3388] hover:bg-[#082666] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all"
                  >
                    <span>Apply via Email</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Resume Submission Banner */}
      <section className="border-t border-gray-200 bg-[#FAFAF8] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-200 bg-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0B3388]">Spontaneous Applications</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">Don&apos;t See Your Exact Role?</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                We are constantly looking for talented power electronics engineers, thermal simulation researchers, and battery chemists. Send your CV and portfolio directly to our engineering desk.
              </p>
            </div>
            <a
              href="mailto:tech@lith-onbharat.com?subject=Spontaneous%20Engineering%20Application"
              className="inline-flex items-center gap-2 rounded-full bg-[#F74530] hover:bg-[#d83522] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all shrink-0"
            >
              <Mail className="h-4 w-4" />
              <span>Send CV to tech@lith-onbharat.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
