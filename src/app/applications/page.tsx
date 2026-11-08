import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "BESS Applications & Priority Sectors | Lith-On Bharat Energy",
  description:
    "Discover Lith-On BESS applications across high-rise residential societies (GRAP compliant), commercial tech parks, critical care hospitals, EV fast-charging plazas, and high-altitude defense.",
};

const SECTOR_APPLICATIONS = [
  {
    id: "residential-societies",
    title: "High-Rise Residential Communities",
    tagline: "100% CAQM GRAP Stage II–IV Compliant Diesel Displacement",
    image: "/images/heroes/hero-residential.jpg",
    challenge: "Traditional diesel generators require 10–30s to crank up, stranding residents in elevators and resetting home Wi-Fi. In Delhi-NCR, winter CAQM GRAP mandates ban diesel outright while annual DG fuel runs exceed ₹6 Crore.",
    solution: "Centralized 2.0 MW to 7.0 MWh BESS (or modular Lith-On-50 racks) tied to common area distribution boards.",
    roi: "1.6-Year Payback",
    highlights: [
      "Sub-10ms cutover keeps 42 lifts and water booster pumps running continuously",
      "100% GRAP compliant with zero diesel exhaust, zero PM2.5, zero smoke",
      "Whisper-quiet (<55 dB) replacing 85+ dB deafening diesel engine noise",
      "Slashes annual OPEX from ₹6.52 Cr to ₹1.76 Cr (audited 500-flat model)"
    ]
  },
  {
    id: "educational-campuses",
    title: "Educational Campuses & Universities",
    tagline: "Solar-Hybrid Microgrids for 24/7 Silent Academic Excellence",
    image: "/images/installations/invertis-bess-yard.jpg",
    challenge: "Modern universities house computing centers, research laboratories, and student hostels requiring 24/7 continuous electricity. Running multi-megawatt DGs results in massive fuel logistics bills and engine noise near classrooms.",
    solution: "1.0 MWh Lith-On BESS coupled with 900 kW rooftop solar PV (proven at Invertis University Bareilly campus).",
    roi: "4.29-Year Payback",
    highlights: [
      "Generates ₹2.26 Cr annual net savings with ₹17.76 Cr 10-year savings",
      "Stores surplus daytime rooftop solar generation for evening hostel study hours",
      "Eliminates thousands of liters of dirty diesel transport inside campus grounds",
      "Provides silent, environmentally conscious infrastructure for green accreditations"
    ]
  },
  {
    id: "hospitals-healthcare",
    title: "Critical Healthcare & Hospitals",
    tagline: "Mission-Critical Online Power for Surgical Suites & ICUs",
    image: "/images/heroes/hero-hospital.jpg",
    challenge: "Operating rooms, ICUs, neonatal incubators, and dialysis machines cannot endure even a millisecond blackout. Traditional DGs have dangerous 10–30s startup delays and emit toxic fumes incompatible with medical wards.",
    solution: "Hospital-grade Magna-C&I BESS providing true online UPS performance with sub-10ms automatic cutover.",
    roi: "Life-Safety Critical",
    highlights: [
      "Zero millisecond interruption for life-support systems and surgical robotic arms",
      "100% fume-free and vibration-free installation directly adjacent to ward buildings",
      "Scalable multi-hour duration sustains full hospital operations during city outages",
      "Direct interface with medical gas alarms and central monitoring panels"
    ]
  },
  {
    id: "ev-charging-plazas",
    title: "High-Power EV Fast-Charging Hubs",
    tagline: "Peak Demand Shaving & Grid Expansion Avoidance",
    image: "/images/installations/commercial-campus-bess.jpg",
    challenge: "Simultaneous 60 kW to 350 kW DC fast chargers trigger immense instantaneous power spikes, causing utility Maximum Demand penalties (40%–60% of total bills) or exceeding local transformer limits.",
    solution: "LT215 (215 kWh) & Magna-C&I (260 kWh) acting as high-rate battery energy buffers.",
    roi: "3.9-Year Payback",
    highlights: [
      "Eliminates DHBVN/utility HT demand penalties, saving ₹20.26 Lakh annually",
      "Enables ultra-fast charging without waiting 12–24 months for grid substation upgrades",
      "Pairs with rooftop solar canopies to charge electric vehicles on 100% green energy",
      "Delivers a 153% 10-year financial return on investment (Hyundai model)"
    ]
  },
  {
    id: "renewable-microgrids",
    title: "Solar-Wind Hybrid Microgrids",
    tagline: "High-Penetration Renewable Integration & Spinning Reserve",
    image: "/images/installations/microgrid-solar-wind.jpg",
    challenge: "Intermittent wind generation and cloud cover dips destabilize isolated industrial microgrids, forcing continuous running of inefficient spinning diesel generators.",
    solution: "Multi-MWh Lith-On BESS with sub-10ms synthetic inertia and autonomous frequency stabilization.",
    roi: "3.2-Year Payback",
    highlights: [
      "Absorbs excess wind/solar production and discharges instantly during load surges",
      "Eliminates requirement for spinning diesel generators running at 30% partial loads",
      "Delivers autonomous transition between grid-connected and islanded microgrid operation",
      "IEC 61850 protocol integration with substation teleprotection and EMS SCADA"
    ]
  }
];

export default function ApplicationsPage() {
  return (
    <div className="space-y-16 py-10 sm:py-16">
      {/* 1. Header Banner */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3388] mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span>Sector Applications</span>
          </div>

          <h1 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Real-World Energy Storage <br className="hidden sm:block" />
            <span className="font-bold text-[#0B3388]">
              Applications Across Critical Sectors
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Lith-On Battery Energy Storage Systems (BESS) resolve acute power challenges across residential, 
            commercial, industrial, and institutional infrastructure. By combining 
            <strong className="text-gray-900 font-semibold"> sub-10ms cutover</strong>, 
            <strong className="text-[#F74530] font-semibold"> 60°C ambient tolerance</strong>, and smart tariff arbitrage, 
            Lith-On turns volatile power liabilities into predictable financial savings.
          </p>
        </div>
      </section>

      {/* 2. Priority Applications Matrix */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
              Strategic Deployment Framework
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight mt-1 sm:text-3xl">
              Priority Applications Matrix
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-2xl">
              Categorized by payback velocity, continuous base load requirements, and mission-critical reliability needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-50 text-emerald-800 text-xs px-3 py-1 font-bold border border-emerald-200">
                    Tier 1: Fastest Payback
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-700">1.5 – 4 Yr ROI</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">High Daytime Commercial &amp; Residential</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  High-rise housing societies, university campuses, shopping malls, and corporate IT parks. 
                  Driven by heavy diesel generator bills, winter CAQM GRAP diesel bans, and rooftop solar synergy.
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100 pt-4 text-xs text-gray-500">
                Primary Goal: <strong className="text-gray-900">Diesel Replacement &amp; GRAP Compliance</strong>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 text-[#0B3388] text-xs px-3 py-1 font-bold border border-blue-200">
                    Tier 2: Industrial Continuity
                  </span>
                  <span className="text-xs font-mono font-bold text-[#0B3388]">3 – 5 Yr ROI</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Heavy Manufacturing &amp; Logistics</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Plastics injection molding, pharmaceutical plants, cold storage warehouses, and EV fast-charging plazas. 
                  Where a 1-second outage causes machine recalibration and batch spoilage.
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100 pt-4 text-xs text-gray-500">
                Primary Goal: <strong className="text-gray-900">Peak Demand Shaving &amp; Zero Downtime</strong>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-red-50 text-[#F74530] text-xs px-3 py-1 font-bold border border-red-200">
                    Tier 3: Strategic Showcase
                  </span>
                  <span className="text-xs font-mono font-bold text-[#F74530]">Mission-Critical</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Hospitals, Defense &amp; Utilities</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Trauma hospitals, data center campuses, Indian Army forward border posts, and 33kV utility substations. 
                  Zero tolerance for power dropouts; human lives and defense resilience demand silent perfection.
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100 pt-4 text-xs text-gray-500">
                Primary Goal: <strong className="text-gray-900">Sub-10ms UPS Security &amp; Grid Services</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Sector Deep Dives */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl">Comprehensive Sector Solutions</h2>
            <p className="text-sm text-gray-500 mt-1">Real-world operational architectures engineered for high-consequence Indian environments.</p>
          </div>

          {SECTOR_APPLICATIONS.map((sector, idx) => (
            <div 
              key={sector.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* Visual Image */}
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <span className="rounded-full bg-white/90 px-3 py-1 font-semibold text-gray-900 shadow-sm">
                        {sector.title}
                      </span>
                      <span className="rounded-full bg-[#0B3388] px-3 py-1 font-bold text-white shadow-sm">
                        {sector.roi}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-xs font-semibold text-[#0B3388] uppercase tracking-wider">
                    Sector Blueprint
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight mt-1">{sector.title}</h3>
                  <div className="text-xs font-medium text-emerald-700 mt-0.5">{sector.tagline}</div>

                  <div className="mt-4 space-y-3 text-xs leading-relaxed text-gray-600">
                    <p><strong className="text-gray-900">The Operational Challenge:</strong> {sector.challenge}</p>
                    <p><strong className="text-[#0B3388]">The Lith-On Solution:</strong> {sector.solution}</p>
                  </div>

                  <div className="mt-5 border-t border-gray-100 pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-2.5">
                      Key Verified Outcomes:
                    </span>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs text-gray-600">
                      {sector.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-2">
                    <Link
                      href={`/contact?sector=${encodeURIComponent(sector.title)}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#0B3388] hover:bg-[#092768] px-4 py-2.5 text-xs font-semibold text-white transition-all shadow-sm"
                    >
                      <span>Request Sizing for This Sector</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Strategic Defense & Remote Microgrids Feature */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-semibold text-[#F74530] mb-4">
                <ShieldAlert className="h-3.5 w-3.5" />
                <span>Defense &amp; Extreme Environment Proven</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl">
                High-Altitude Border Bases &amp; Arctic Resiliency
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Proven in partnership with the Indian Army across forward defense posts in Srinagar, Jammu &amp; Kashmir. 
                Replaces high-risk mountain kerosene and diesel logistics with ruggedized, insulated LiFePO4 battery arrays 
                operating flawlessly from <strong className="text-gray-900 font-semibold">-30°C extreme arctic freezing to +60°C intense heat</strong>.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-gray-700">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Up to 80% Diesel Reduction</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> IceBattery® Ceramic Shield</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Modular Skid Mounting</span>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm">
                <Image
                  src="/images/installations/mountain-defense-offgrid.jpg"
                  alt="Indian Army forward high altitude defense BESS deployment in sub-zero snow conditions"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-bold">Indian Army Forward Post</div>
                  <div className="text-[11px] text-gray-300 font-mono mt-0.5">Srinagar, J&amp;K • -30°C to +60°C Operating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Sizing CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#0B3388] text-white p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">Ready to Model Your Sector Sizing?</h3>
            <p className="text-sm text-blue-100 mt-2 max-w-xl">
              Our engineering team analyzes your transformer capacity, sanctioned load, and DG operating costs to design a turnkey BESS solution.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F74530] hover:bg-[#d63623] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all shrink-0 shadow-md"
          >
            <span>Start Sizing Assessment</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
