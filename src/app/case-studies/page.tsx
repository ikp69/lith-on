import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Zap, 
  Building, 
  GraduationCap, 
  Car,
  Landmark,
  Info
} from "lucide-react";
import { InstallationGallery } from "@/components/gallery/InstallationGallery";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CallToAction } from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "Proven Case Studies & Financial Models | Lith-On Bharat Energy",
  description:
    "Review audited financial models, operational outcomes, and technical ROI for Lith-On BESS installations at Invertis University, Gurugram Housing Societies, Hyundai EV Hubs, Indian Army, and NTPC.",
};

export default function CaseStudiesPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-white">
      {/* 1. Header Banner */}
      <section className="border-b border-gray-200 bg-[#FAFAF8] px-4 sm:px-6 pt-16 sm:pt-20 pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span>Case Studies</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
            Real-World Case Studies &amp; <br className="hidden sm:block" />
            <span className="font-semibold text-[#0B3388]">
              Operational Financial Models
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed font-normal">
            Every Lith-On deployment is backed by empirical operational telemetry, measured electricity tariffs, and audited financial payback. Below are verified industrial and commercial deployments illustrating measurable diesel displacement and peak-shaving economics.
          </p>

          {/* Methodology & Classification Framework */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 mb-3">
              <Info className="h-4 w-4 text-[#0B3388]" />
              <span>Data Transparency &amp; Accounting Standards</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-bold text-emerald-700 block">Measured Data</span>
                <span className="text-gray-500 mt-0.5 block leading-relaxed">Direct telemetry from on-site revenue meters.</span>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-bold text-[#0B3388] block">Modeled Data</span>
                <span className="text-gray-500 mt-0.5 block leading-relaxed">Simulated on official DISCOM HT tariff rates.</span>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-bold text-amber-700 block">Assumed Baseline</span>
                <span className="text-gray-500 mt-0.5 block leading-relaxed">₹95/L diesel fuel price &amp; 3.5 kWh/L DG heat rate.</span>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-bold text-gray-800 block">Projected Lifespan</span>
                <span className="text-gray-500 mt-0.5 block leading-relaxed">10-year cumulative cashflow at 88% DoD.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CASE STUDY 1: Invertis University */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <GraduationCap className="h-4 w-4" />
                <span>Institutional Solar + Storage Microgrid • Bareilly, U.P.</span>
                <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] text-emerald-800 font-semibold">
                  Measured Operating Data
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                Invertis University Campus Microgrid
              </h2>
              <div className="text-sm sm:text-base font-semibold text-[#0B3388] mt-1">
                1.0 MWh Lith-On BESS + 900 kWp Rooftop Solar PV
              </div>

              <div className="mt-5 space-y-3.5 text-sm sm:text-base leading-relaxed text-gray-600 font-normal">
                <p>
                  <strong className="text-gray-900 font-semibold">The Baseline Problem:</strong> The university campus previously relied on a massive{" "}
                  <strong className="text-amber-700 font-semibold">2,500 kVA Diesel Generator fleet</strong> to sustain classrooms, student hostels, and computer labs. Monthly diesel bills averaged over ₹34.5 Lakhs (totaling <strong className="text-lithon-red font-semibold">₹4.14 Crore annually</strong>), with frequent generator noise disrupting lectures and strict state pollution directives penalizing diesel exhaust.
                </p>
                <p>
                  <strong className="text-lithon-blue font-semibold">The Engineered Solution:</strong> Lith-On delivered a turnkey 1,000 kWh (1 MWh) BESS coupled directly with the existing 900 kWp rooftop solar array. An automated EMS manages peak shaving, stores midday surplus solar, and supplies evening hostel peak demand without running generators.
                </p>
              </div>

              {/* Standardized Financial Metric Tiles */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-gray-200/80 pt-6 font-mono">
                <div className="rounded-xl bg-canvas-offwhite p-3.5 border border-gray-200/90">
                  <span className="text-xs text-gray-500 font-sans block">Annual Net Savings</span>
                  <span className="text-xl sm:text-2xl font-bold text-emerald-600 block mt-1">₹2.26 Cr / yr</span>
                  <span className="text-xs text-gray-500 font-sans block mt-0.5">Audited Diesel Offset</span>
                </div>
                <div className="rounded-xl bg-canvas-offwhite p-3.5 border border-gray-200/90">
                  <span className="text-xs text-gray-500 font-sans block">Payback Period</span>
                  <span className="text-xl sm:text-2xl font-bold text-lithon-blue block mt-1">4.29 Years</span>
                  <span className="text-xs text-gray-500 font-sans block mt-0.5">Capex Amortization</span>
                </div>
                <div className="rounded-xl bg-canvas-offwhite p-3.5 border border-gray-200/90">
                  <span className="text-xs text-gray-500 font-sans block">10-Year Cumulative</span>
                  <span className="text-xl sm:text-2xl font-bold text-gray-900 block mt-1">₹17.76 Cr</span>
                  <span className="text-xs text-gray-500 font-sans block mt-0.5">Net Lifecycle Value</span>
                </div>
                <div className="rounded-xl bg-canvas-offwhite p-3.5 border border-gray-200/90">
                  <span className="text-xs text-gray-500 font-sans block">Diesel Displaced</span>
                  <span className="text-xl sm:text-2xl font-bold text-emerald-700 block mt-1">418k L / yr</span>
                  <span className="text-xs text-gray-500 font-sans block mt-0.5">1,100+ Tons CO2 Saved</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-slate-900">
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
                  <span className="rounded bg-black/60 px-2.5 py-0.5 font-mono text-xs backdrop-blur-md border border-white/20">
                    4x Lith-On Cabinets + PCS
                  </span>
                  <span className="rounded bg-emerald-600 px-2.5 py-0.5 text-xs font-bold">
                    4.29-Yr Payback
                  </span>
                </div>
              </div>

              {/* Invertis Solar Array & Campus Facade Thumbnails */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-gray-200">
                  <Image
                    src="/images/installations/invertis-900kw-solar.jpg"
                    alt="Invertis 900 kWp Campus Rooftop Solar Array"
                    fill
                    className="object-cover"
                    sizes="250px"
                  />
                  <div className="absolute bottom-1.5 left-1.5 rounded bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                    900 kWp Solar Array
                  </div>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-gray-200">
                  <Image
                    src="/images/installations/invertis-university-facade.jpg"
                    alt="Invertis University Campus Entrance"
                    fill
                    className="object-cover"
                    sizes="250px"
                  />
                  <div className="absolute bottom-1.5 left-1.5 rounded bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                    Bareilly Campus Facade
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY 2: 500-Flat Housing Society (Gurugram NCR) */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 lg:order-2">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white p-3">
                <Image
                  src="/images/case-studies/diesel-vs-bess-comparison.jpg"
                  alt="Diesel Generators vs Lith-On BESS: Sub-10ms UPS, 100% GRAP compliance, Near-Total Silence"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-1">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B3388]">
                <Building className="h-4 w-4" />
                <span>Residential Community Transformation • Gurugram NCR</span>
                <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[11px] text-[#0B3388] font-semibold">
                  CAQM GRAP Compliant
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                500-Flat High-Rise Housing Society
              </h2>
              <div className="text-sm sm:text-base font-semibold text-emerald-700 mt-1">
                Replacing a 3,000 kVA DG Fleet with 7.0 MWh / 2.4 MW Lith-On BESS
              </div>

              <div className="mt-5 space-y-3.5 text-sm sm:text-base leading-relaxed text-gray-600 font-normal">
                <p>
                  <strong className="text-gray-900 font-semibold">The Baseline Problem:</strong> A 14-tower community with 42 elevators and 14 water booster pumps faced recurring outages. Backing up the ~2,000 kW load required <strong className="text-amber-700 font-semibold">four 750 kVA diesel generators (3,000 kVA total)</strong>. Annual diesel fuel expenses reached <strong className="text-lithon-red font-semibold">₹6.49 Crore</strong> plus ₹3.0 Lakhs in maintenance, totaling <strong className="text-lithon-red font-semibold">₹6.52 Crore/year</strong>. Outages caused 10–30s blackout delays that trapped residents in lifts. Crucially, winter CAQM GRAP Stage II–IV rules completely banned diesel generator operation.
                </p>
                <p>
                  <strong className="text-lithon-blue font-semibold">The Engineered Solution:</strong> Lith-On designed a centralized 7,000 kWh (7.0 MWh) BESS with 2,400 kW PCS rating. Operating cost charging from standard low-cost off-peak grid is only ₹1.76 Crore/year—slashing annual expenses by ₹4.76 Crore while delivering instantaneous (&lt;10ms) elevator continuity.
                </p>
              </div>

              {/* Standardized Financial Metric Tiles */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-gray-200/80 pt-6 font-mono">
                <div className="rounded-xl bg-canvas-offwhite p-3.5 border border-gray-200/90">
                  <span className="text-xs text-gray-500 font-sans block">Annual Net Savings</span>
                  <span className="text-xl sm:text-2xl font-bold text-emerald-600 block mt-1">₹4.76 Cr / yr</span>
                  <span className="text-xs text-gray-500 font-sans block mt-0.5">73% OPEX Reduction</span>
                </div>
                <div className="rounded-xl bg-canvas-offwhite p-3.5 border border-gray-200/90">
                  <span className="text-xs text-gray-500 font-sans block">Payback Period</span>
                  <span className="text-xl sm:text-2xl font-bold text-lithon-blue block mt-1">1.6 Years</span>
                  <span className="text-xs text-gray-500 font-sans block mt-0.5">Rapid Amortization</span>
                </div>
                <div className="rounded-xl bg-canvas-offwhite p-3.5 border border-gray-200/90">
                  <span className="text-xs text-gray-500 font-sans block">5-Year ROI</span>
                  <span className="text-xl sm:text-2xl font-bold text-gray-900 block mt-1">204%</span>
                  <span className="text-xs text-gray-500 font-sans block mt-0.5">Audited Cashflow</span>
                </div>
                <div className="rounded-xl bg-canvas-offwhite p-3.5 border border-gray-200/90">
                  <span className="text-xs text-gray-500 font-sans block">10-Year ROI</span>
                  <span className="text-xl sm:text-2xl font-bold text-emerald-700 block mt-1">508%</span>
                  <span className="text-xs text-gray-500 font-sans block mt-0.5">Cumulative Gain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CASE STUDY 3: Hyundai Commercial EV Fast-Charging Hub */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-lithon-blue">
                <Car className="h-4 w-4" />
                <span>Highway Commercial EV Charging Plaza • Infrastructure Buffering</span>
                <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-xs text-lithon-blue font-semibold">
                  Demand Charge Shaving
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                Commercial EV Fast-Charging Hub
              </h2>
              <div className="text-sm sm:text-base font-semibold text-lithon-blue mt-1">
                LT215 / 450 kWh BESS + 75 kWp Canopy Solar PV
              </div>

              <div className="mt-5 space-y-3.5 text-sm sm:text-base leading-relaxed text-gray-600 font-normal">
                <p>
                  <strong className="text-gray-900 font-semibold">The Baseline Problem:</strong> High-power 60 kW to 350 kW DC fast chargers trigger intense 15-minute load spikes. Under DHBVN HT commercial tariffs, Maximum Demand penalties accounted for <strong className="text-lithon-red font-semibold">40% to 60% of total monthly bills</strong>—incurring ₹2.41 Lakhs/month in demand penalties even during low vehicle turnover. Furthermore, the local utility mandated a ₹45+ Lakh transformer enhancement with an 18-month civil delay before permitting station energization.
                </p>
                <p>
                  <strong className="text-lithon-blue font-semibold">The Engineered Solution:</strong> Lith-On deployed an LT215 450 kWh / 150 kW BESS acting as a dynamic electrical buffer. The battery trickle-charges during off-peak hours and instantly discharges during fast-charging sessions to flatten peak utility draw and eliminate demand penalties.
                </p>
              </div>

              {/* Standardized Financial Metric Tiles */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-gray-200/80 pt-6 font-mono">
                <div className="rounded-xl bg-canvas-offwhite p-3.5 border border-gray-200/90">
                  <span className="text-xs text-gray-500 font-sans block">Annual Savings</span>
                  <span className="text-xl sm:text-2xl font-bold text-emerald-600 block mt-1">₹20.26 L / yr</span>
                  <span className="text-xs text-gray-500 font-sans block mt-0.5">Demand Surcharge Cut</span>
                </div>
                <div className="rounded-xl bg-canvas-offwhite p-3.5 border border-gray-200/90">
                  <span className="text-xs text-gray-500 font-sans block">System Payback</span>
                  <span className="text-xl sm:text-2xl font-bold text-lithon-blue block mt-1">3.9 Years</span>
                  <span className="text-xs text-gray-500 font-sans block mt-0.5">Full Amortization</span>
                </div>
                <div className="rounded-xl bg-canvas-offwhite p-3.5 border border-gray-200/90">
                  <span className="text-xs text-gray-500 font-sans block">10-Year Cashflow</span>
                  <span className="text-xl sm:text-2xl font-bold text-gray-900 block mt-1">&gt;₹2.0 Crore</span>
                  <span className="text-xs text-gray-500 font-sans block mt-0.5">153% 10-Yr ROI</span>
                </div>
                <div className="rounded-xl bg-canvas-offwhite p-3.5 border border-gray-200/90">
                  <span className="text-xs text-gray-500 font-sans block">Transformer Capex</span>
                  <span className="text-xl sm:text-2xl font-bold text-emerald-700 block mt-1">₹45 L Saved</span>
                  <span className="text-xs text-gray-500 font-sans block mt-0.5">Zero Civil Delay</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-slate-900">
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
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Institutional Credentials"
            title={
              <>
                Government &amp; Utility <span className="font-semibold text-[#0B3388]">Deployments</span>
              </>
            }
            subtitle="Installed commercial and defense energy storage solutions powering forward bases, state distribution utilities, and industrial groups across India."
          />

          {/* Authentic India Deployment Graphic */}
          <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm p-4 mb-8 min-h-[300px]">
            <Image
              src="/images/case-studies/india-deployment-map.jpg"
              alt="Lith-On Installed Commercial & Defense BESS Solutions across India (Indian Army, NTPC, RVUNL, RSPL)"
              fill
              className="object-contain p-2"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F74530]">
                <ShieldCheck className="h-4 w-4" />
                <span>Indian Army</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mt-2">Srinagar &amp; J&amp;K Forward Posts</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed font-normal">
                Ruggedized high-altitude LFP systems operating reliably between -20°C and +45°C, replacing mountain diesel transport.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-lithon-blue mb-2">
                <Zap className="h-4 w-4" />
                <span>Thermal &amp; Substation Storage</span>
              </div>
              <h3 className="text-base font-bold text-gray-900">NTPC Grid Peaking (Lucknow &amp; Shravasti)</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed font-normal">
                Deployed with certified IEC 61850 substation automation, fast frequency regulation, and automated dispatch.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 mb-2">
                <Landmark className="h-4 w-4" />
                <span>Thermal Extreme Conformance</span>
              </div>
              <h3 className="text-base font-bold text-gray-900">RVUNL Rajasthan (Jaipur 33kV)</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed font-normal">
                Leveraged IceBattery® passive thermal coating to endure summer ambient heat exceeding 48°C without thermal throttling.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-2">
                <Building className="h-4 w-4" />
                <span>Corporate Enterprise Campus</span>
              </div>
              <h3 className="text-base font-bold text-gray-900">PwC India HQ (New Delhi)</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed font-normal">
                Sub-10ms instantaneous UPS battery backup preventing IT server reboots and packet loss during grid feeder trips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Real Installations & Photo Proof Gallery */}
      <InstallationGallery />

      {/* 7. Bottom CTA */}
      <CallToAction
        eyebrow="Custom Financial & Engineering Sizing"
        title="Want an Audited Financial Model for Your Facility?"
        description="Send us your last 6 months of utility electricity bills and diesel generator log sheets. Our engineering team calculates your exact payback period, annual OPEX savings, and single-line diagram (SLD)."
        primaryAction={{
          label: "Request Facility Audit",
          href: "/contact",
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
