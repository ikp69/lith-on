import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Building, 
  GraduationCap, 
  Car,
  Landmark
} from "lucide-react";
import { InstallationGallery } from "@/components/gallery/InstallationGallery";

export const metadata: Metadata = {
  title: "Proven Case Studies & Financial Models | Lith-On Bharat Energy",
  description:
    "Review audited financial models, operational outcomes, and technical ROI for Lith-On BESS installations at Invertis University, Gurugram Housing Societies, Hyundai EV Hubs, Indian Army, and NTPC.",
};

export default function CaseStudiesPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header Banner */}
      <section className="border-b border-gray-200 bg-white px-6 pt-16 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3388] mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span>Case Studies</span>
          </div>

          <h1 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Real-World Case Studies &amp; <br className="hidden sm:block" />
            <span className="font-semibold text-[#0B3388]">
              Operational Financial Models
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            Every Lith-On deployment is backed by rigorous empirical data, real electrical engineering profiles, 
            and audited financial savings. Below are verified case studies illustrating the economic and operational 
            impact of Lith-On Battery Energy Storage Systems.
          </p>
        </div>
      </section>

      {/* 2. CASE STUDY 1: Invertis University */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <GraduationCap className="h-4 w-4" />
                <span>Institutional Solar + Storage Microgrid • Bareilly, U.P.</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mt-2">
                Invertis University Campus Microgrid
              </h2>
              <div className="text-sm font-semibold text-[#0B3388] mt-1">
                1.0 MWh Lith-On BESS + 900 kWp Rooftop Solar PV
              </div>

              <div className="mt-6 space-y-3 text-sm leading-relaxed text-gray-600">
                <p>
                  <strong className="text-gray-900">The Baseline Problem:</strong> The university campus previously relied on a massive 
                  <strong className="text-amber-700"> 2,500 kVA Diesel Generator fleet</strong> to sustain classrooms, student hostels, and computer labs. 
                  Monthly diesel bills averaged over ₹34.5 Lakhs (totaling <strong className="text-[#F74530]">₹4.14 Crore annually</strong>), 
                  with frequent generator noise disrupting lectures and strict state pollution directives penalizing diesel exhaust.
                </p>
                <p>
                  <strong className="text-[#0B3388]">The Engineered Solution:</strong> Lith-On delivered a turnkey 1,000 kWh (1 MWh) BESS 
                  coupled directly with the existing 900 kWp rooftop solar array. An automated EMS manages peak shaving, stores midday surplus solar, 
                  and supplies evening hostel peak demand without running generators.
                </p>
              </div>

              {/* Financial Metric Cards */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-gray-200 pt-6">
                <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-gray-200">
                  <span className="text-[10px] text-gray-500 uppercase font-mono">Annual Net Savings</span>
                  <span className="text-xl font-bold text-emerald-600 block mt-1">₹2.26 Cr / yr</span>
                </div>
                <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-gray-200">
                  <span className="text-[10px] text-gray-500 uppercase font-mono">Payback Period</span>
                  <span className="text-xl font-bold text-[#0B3388] block mt-1">4.29 Years</span>
                </div>
                <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-gray-200">
                  <span className="text-[10px] text-gray-500 uppercase font-mono">10-Year Cumulative</span>
                  <span className="text-xl font-bold text-gray-900 block mt-1">₹17.76 Cr</span>
                </div>
                <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-gray-200">
                  <span className="text-[10px] text-gray-500 uppercase font-mono">Diesel Displaced</span>
                  <span className="text-xl font-bold text-emerald-700 block mt-1">418k L / yr</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-slate-900">
                <Image
                  src="/images/installations/invertis-bess-yard.jpg"
                  alt="Invertis University 1 MWh 4-Cabinet BESS Yard with PCS switchgear"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="rounded bg-black/60 px-2.5 py-0.5 font-mono text-[11px] backdrop-blur-md border border-white/20">
                    4x Lith-On Cabinets + PCS
                  </span>
                  <span className="rounded bg-emerald-600 px-2 py-0.5 text-[11px] font-bold">
                    4.29-Yr Payback
                  </span>
                </div>
              </div>

              {/* Invertis Solar Array & Campus Facade Thumbnails */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src="/images/installations/invertis-900kw-solar.jpg"
                    alt="Invertis 900 kWp Campus Rooftop Solar Array"
                    fill
                    className="object-cover"
                    sizes="250px"
                  />
                  <div className="absolute bottom-1.5 left-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur-sm">
                    900 kWp Solar Array
                  </div>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src="/images/installations/invertis-university-facade.jpg"
                    alt="Invertis University Campus Entrance"
                    fill
                    className="object-cover"
                    sizes="250px"
                  />
                  <div className="absolute bottom-1.5 left-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur-sm">
                    Bareilly Campus Facade
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY 2: 500-Flat Housing Society (Gurugram NCR) */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 lg:order-2">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white p-2">
                <Image
                  src="/images/case-studies/diesel-vs-bess-comparison.jpg"
                  alt="Diesel Generators vs Lith-On BESS: Sub-10ms UPS, 100% GRAP compliance, Near-Total Silence"
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B3388]">
                <Building className="h-4 w-4" />
                <span>Residential Community Transformation • Gurugram NCR</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mt-2">
                500-Flat High-Rise Housing Society
              </h2>
              <div className="text-sm font-semibold text-emerald-700 mt-1">
                Replacing a 3,000 kVA DG Fleet with 7.0 MWh / 2.4 MW Lith-On BESS
              </div>

              <div className="mt-6 space-y-3 text-sm leading-relaxed text-gray-600">
                <p>
                  <strong className="text-gray-900">The Baseline Problem:</strong> A 14-tower community with 42 elevators and 14 water booster pumps 
                  faced recurring outages. Backing up the ~2,000 kW load required <strong className="text-amber-700">four 750 kVA diesel generators (3,000 kVA total)</strong>. 
                  Annual diesel fuel expenses reached <strong className="text-[#F74530]">₹6.49 Crore</strong> plus ₹3.0 Lakhs in maintenance, 
                  totaling <strong className="text-[#F74530]">₹6.52 Crore/year</strong>. Outages caused 10–30s blackout delays that trapped residents in lifts. 
                  Crucially, winter CAQM GRAP Stage II–IV rules completely banned diesel generator operation.
                </p>
                <p>
                  <strong className="text-[#0B3388]">The Engineered Solution:</strong> Lith-On designed a centralized 7,000 kWh (7.0 MWh) BESS 
                  with 2,400 kW PCS rating. Operating cost charging from the standard low-cost off-peak grid is only ₹1.76 Crore/year—slashing annual expenses by ₹4.76 Crore.
                </p>
              </div>

              {/* Financial Metric Cards */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-gray-200 pt-6">
                <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-gray-200">
                  <span className="text-[10px] text-gray-500 uppercase font-mono">Annual Net Savings</span>
                  <span className="text-xl font-bold text-emerald-600 block mt-1">₹4.76 Cr / yr</span>
                </div>
                <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-gray-200">
                  <span className="text-[10px] text-gray-500 uppercase font-mono">Payback Period</span>
                  <span className="text-xl font-bold text-[#0B3388] block mt-1">1.6 Years</span>
                </div>
                <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-gray-200">
                  <span className="text-[10px] text-gray-500 uppercase font-mono">5-Year ROI</span>
                  <span className="text-xl font-bold text-gray-900 block mt-1">204%</span>
                </div>
                <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-gray-200">
                  <span className="text-[10px] text-gray-500 uppercase font-mono">10-Year ROI</span>
                  <span className="text-xl font-bold text-emerald-700 block mt-1">508%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CASE STUDY 3: Hyundai Commercial EV Fast-Charging Hub */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B3388]">
                <Car className="h-4 w-4" />
                <span>Highway Commercial EV Charging Plaza • Hyundai Partnership Model</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mt-2">
                Commercial EV Fast-Charging Hub
              </h2>
              <div className="text-sm font-semibold text-[#0B3388] mt-1">
                LT215 / 450 kWh BESS + 75 kWp Canopy Solar PV
              </div>

              <div className="mt-6 space-y-3 text-sm leading-relaxed text-gray-600">
                <p>
                  <strong className="text-gray-900">The Baseline Problem:</strong> High-power 60 kW to 350 kW DC fast chargers trigger intense 15-minute load spikes. 
                  Under DHBVN HT commercial tariffs, Maximum Demand penalties accounted for <strong className="text-[#F74530]">40% to 60% of total bills</strong>—incurring 
                  ₹2.41 Lakhs/month in demand penalties even during low vehicle turnover. Furthermore, the local utility mandated a ₹45+ Lakh transformer enhancement 
                  with an 18-month civil delay before permitting station operation.
                </p>
                <p>
                  <strong className="text-[#0B3388]">The Engineered Solution:</strong> Lith-On deployed an LT215 450 kWh / 150 kW BESS acting as a dynamic buffer. 
                  The battery trickle-charges during low grid demand and instantly discharges during fast-charging sessions to flatten peak utility draw.
                </p>
              </div>

              {/* Financial Metric Cards */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-gray-200 pt-6">
                <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-gray-200">
                  <span className="text-[10px] text-gray-500 uppercase font-mono">Annual Savings</span>
                  <span className="text-xl font-bold text-emerald-600 block mt-1">₹20.26 Lakh/yr</span>
                </div>
                <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-gray-200">
                  <span className="text-[10px] text-gray-500 uppercase font-mono">System Payback</span>
                  <span className="text-xl font-bold text-[#0B3388] block mt-1">3.9 Years</span>
                </div>
                <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-gray-200">
                  <span className="text-[10px] text-gray-500 uppercase font-mono">10-Year Cashflow</span>
                  <span className="text-xl font-bold text-gray-900 block mt-1">&gt;₹2.0 Crore</span>
                </div>
                <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-gray-200">
                  <span className="text-[10px] text-gray-500 uppercase font-mono">Transformer Capex</span>
                  <span className="text-xl font-bold text-emerald-700 block mt-1">₹45 Lakh Saved</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-slate-900">
                <Image
                  src="/images/installations/commercial-campus-bess.jpg"
                  alt="Commercial EV Fast Charging Plaza & Campus BESS"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="rounded bg-black/60 px-3 py-1 font-mono backdrop-blur-md border border-white/20">
                    450 kWh BESS + 75 kWp Solar
                  </span>
                  <span className="rounded bg-[#0B3388] px-2.5 py-1 font-bold">
                    153% 10-Yr ROI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Strategic Government & Enterprise Deployments */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
              Institutional Credentials
            </span>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mt-1">
              Government &amp; Utility Deployments
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
              Installed commercial and defense energy storage solutions powering forward bases, state distribution utilities, and industrial groups across India.
            </p>
          </div>

          {/* Authentic India Deployment Graphic */}
          <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm p-3 mb-8 min-h-[300px]">
            <Image
              src="/images/case-studies/india-deployment-map.jpg"
              alt="Lith-On Installed Commercial & Defense BESS Solutions across India (Indian Army, NTPC, RVUNL, RSPL)"
              fill
              className="object-contain p-2"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F74530]">
                <ShieldCheck className="h-4 w-4" />
                <span>Indian Army</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mt-2">Srinagar &amp; J&amp;K Forward Posts</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Ruggedized high-altitude LFP systems operating reliably between -20°C and +45°C, replacing mountain diesel transport.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0B3388]">
                <Zap className="h-4 w-4" />
                <span>NTPC</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mt-2">Substation Storage &amp; Grid Peaking</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Deployed across Lucknow and Shravasti with certified IEC 61850 substation automation and frequency regulation.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                <Landmark className="h-4 w-4" />
                <span>RVUNL Rajasthan</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mt-2">Jaipur 33kV Substation Support</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Leveraged IceBattery® passive thermal coating to endure summer ambient heat exceeding 48°C without thermal throttling.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                <Building className="h-4 w-4" />
                <span>PwC India HQ</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mt-2">New Delhi Corporate Towers</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Sub-10ms instantaneous UPS battery backup preventing IT server reboots and packet loss during grid feeder trips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Real Installations & Photo Proof Gallery */}
      <InstallationGallery />

      {/* 7. Bottom CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#0B3388] text-white p-8 sm:p-12 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">Want an Audited Financial Model for Your Facility?</h3>
            <p className="text-sm text-blue-100 mt-2 max-w-xl">
              Send us your last 6 months of utility bills and diesel generator log sheets. 
              Our team calculates your exact payback period, annual OPEX savings, and single-line diagram.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F74530] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#d83522] transition-all shadow-md shrink-0"
          >
            <span>Request Facility Audit</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
