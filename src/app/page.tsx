import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight,
  Phone,
  CheckCircle2
} from "lucide-react";
import { IceBatteryThermal } from "@/components/illustrations/IceBatteryThermal";
import { Sub10msWaveform } from "@/components/illustrations/Sub10msWaveform";
import { PanIndiaMap } from "@/components/illustrations/PanIndiaMap";
import { SavingsCalculator } from "@/components/calculator/SavingsCalculator";
import { SevenMoatsStack } from "@/components/illustrations/SevenMoatsStack";
import { ProductComparison } from "@/components/products/ProductComparison";
import { FactoryVideoReel } from "@/components/home/FactoryVideoReel";
import { AttributedTestimonials } from "@/components/home/AttributedTestimonials";
import { AmbientLightCanvas } from "@/components/ui/AmbientLightCanvas";
import { EnergyFlowVisualizer } from "@/components/technology/EnergyFlowVisualizer";
import { InstallationGallery } from "@/components/gallery/InstallationGallery";
import { PRODUCTS_DATA } from "@/data/products";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-white">
      {/* 1. CALM & CLEAR EDITORIAL HERO (Section 2 Recommendation) */}
      <section className="relative mx-3 sm:mx-6 mt-2 overflow-hidden rounded-3xl min-h-[88vh] flex flex-col justify-between shadow-2xl border border-gray-200/50">
        {/* Still Background Visual (Architectural C&I Energy Storage & Solar Skid) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroes/hero-commercial.jpg"
            alt="Lith-On Commercial BESS and Solar Microgrid Architecture"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle architectural atmosphere overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-900/40" />
          <AmbientLightCanvas className="z-10 opacity-50" />
        </div>

        {/* Top Spacer for floating capsule header */}
        <div className="pt-24 sm:pt-28" />

        {/* Brand Name & Positioning */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-10">
          <div className="max-w-3xl space-y-5">
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              <span className="h-2 w-2 rounded-full bg-[#F74530] animate-pulse" />
              <span>India&apos;s Premier BESS Manufacturer</span>
            </div>

            {/* Clear Brand Name */}
            <div className="text-white">
              <span className="text-xl sm:text-2xl font-mono tracking-widest uppercase text-blue-200 block">
                Lith-On Bharat Energy
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mt-1 leading-tight">
                Industrial Battery Energy <br className="hidden sm:block" />
                <span className="font-semibold text-white">Storage Systems (BESS)</span>
              </h1>
            </div>

            {/* One Strong Line Explaining Brand Positioning */}
            <p className="text-base sm:text-xl text-slate-100 font-normal leading-relaxed max-w-2xl">
              Turnkey lithium energy storage engineered for Indian grid stability, 60°C ambient extremes with IceBattery®, sub-10ms instantaneous UPS transfer, and 100% CAQM GRAP diesel compliance.
            </p>

            {/* Two Clear Buttons: 'Explore Solutions' and 'Talk to an Expert' */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B3388] hover:bg-[#082666] px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F74530]"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#F74530] hover:bg-[#d83522] px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Talk to an Expert</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Architectural Trust Metrics Strip */}
        <div className="relative z-10 w-full px-4 sm:px-10 pb-6 pt-10">
          <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-4 text-white">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-200">Throughput</div>
              <div className="text-2xl font-bold text-white mt-0.5">250 MWh</div>
              <div className="text-[11px] text-blue-200">Noida 20,000 sq.ft. Plant</div>
            </div>

            <div className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-4 text-white">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-200">UPS Switchover</div>
              <div className="text-2xl font-bold text-emerald-300 mt-0.5">&lt;10 ms</div>
              <div className="text-[11px] text-slate-200">Zero Grid Interruption</div>
            </div>

            <div className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-4 text-white">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-200">Thermal Shield</div>
              <div className="text-2xl font-bold text-[#F74530] mt-0.5">60°C Rating</div>
              <div className="text-[11px] text-slate-200">IceBattery® Passive Ceramic</div>
            </div>

            <div className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-4 text-white">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-200">Global Base</div>
              <div className="text-2xl font-bold text-amber-300 mt-0.5">500+ MWh</div>
              <div className="text-[11px] text-slate-200">Deployed in 25+ Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FACTORY VIDEOS HORIZONTAL SLIDING SECTION (Section 2 Requirement) */}
      <FactoryVideoReel />

      {/* 3. VERIFIED METRICS COUNTER BAR */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            <div className="border-r border-gray-100 pr-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900">250 MWh</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Annual Noida Production Capacity</div>
              <div className="text-[11px] text-[#0B3388] mt-0.5 font-semibold">50 MWh BESS + 200 MWh Pack</div>
            </div>

            <div className="border-r border-gray-100 pr-4 pl-2 lg:pl-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900">20,000 sq.ft.</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Manufacturing &amp; Testing Facility</div>
              <div className="text-[11px] text-gray-600 mt-0.5 font-semibold">Sector 136, Noida, UP</div>
            </div>

            <div className="border-r border-gray-100 pr-4 pl-2 lg:pl-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">500+ MWh</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Global Installed Asset Base</div>
              <div className="text-[11px] text-emerald-700 mt-0.5 font-semibold">1,000+ Operational Systems</div>
            </div>

            <div className="pl-2 lg:pl-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#F74530]">25+</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">International Export Countries</div>
              <div className="text-[11px] text-gray-600 mt-0.5 font-semibold">Kenya, UAE, SE Asia &amp; Europe</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS LINEUP (Section 5 Requirement) */}
      <section className="px-4 sm:px-6" id="products">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 pb-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B3388]">
                Standardized Hardware Systems
              </span>
              <h2 className="text-3xl font-light text-gray-900 mt-1">
                Engineered <span className="font-semibold text-[#0B3388]">BESS Product Line</span>
              </h2>
              <p className="text-sm text-gray-600 mt-1 max-w-xl font-normal">
                Pre-assembled, factory-tested, and pre-commissioned at our Noida plant for immediate commercial and industrial deployment.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B3388] hover:text-[#F74530] transition-colors"
            >
              <span>Explore All Products &amp; Specs</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS_DATA.map((product) => (
              <div
                key={product.id}
                className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="rounded-full bg-blue-50 border border-blue-100 px-2.5 py-0.5 text-[11px] font-semibold text-[#0B3388]">
                      {product.category}
                    </span>
                    <span className="text-xs font-mono text-gray-500">{product.modelCode}</span>
                  </div>

                  {/* Authentic Product Hardware Image */}
                  <div className="relative my-3 aspect-[16/10] w-full rounded-xl bg-gray-50/80 border border-gray-100 flex items-center justify-center overflow-hidden p-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mt-2">{product.name}</h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed line-clamp-2">{product.tagline}</p>

                  <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-gray-50 p-3 border border-gray-100 font-mono">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase block">Energy</span>
                      <strong className="text-sm font-bold text-[#0B3388]">{product.capacity}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase block">Power</span>
                      <strong className="text-sm font-bold text-gray-900">{product.powerRating}</strong>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                    {product.keyFeatures.slice(0, 2).map((h) => (
                      <li key={h} className="flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-[#0B3388] hover:bg-[#082666] px-3 py-2 text-xs font-semibold text-white transition-colors"
                  >
                    <span>View Product</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-700"
                  >
                    RFQ
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE PRODUCT DIFFERENTIATION & COMPARISON (Section 7 Requirement) */}
      <ProductComparison />

      {/* 6. DYNAMIC ENERGY FLOW & MICROGRID DISPATCH SIMULATION */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <EnergyFlowVisualizer />
        </div>
      </section>

      {/* 7. SUB-10MS WAVEFORM OSCILLOSCOPE PROOF */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Sub10msWaveform />
        </div>
      </section>

      {/* 8. ICEBATTERY® THERMAL PHYSICS DIAGRAM */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <IceBatteryThermal />
        </div>
      </section>

      {/* 9. ON-SITE DEPLOYMENTS & FACTORY ASSEMBLY GALLERY */}
      <InstallationGallery />

      {/* 10. AUDITED CUSTOMER FEEDBACK & TESTIMONIALS (Section 12 Requirement) */}
      <AttributedTestimonials />

      {/* 9. FINANCIAL SAVINGS CALCULATOR */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SavingsCalculator />
        </div>
      </section>

      {/* 10. PAN-INDIA STRATEGIC DEPLOYMENT MAP */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <PanIndiaMap />
        </div>
      </section>

      {/* 11. THE 7 STRUCTURAL MOATS */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SevenMoatsStack />
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION CTA BAR */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#0B3388] p-8 sm:p-12 text-white shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                Turnkey Engineering Proposal
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-4 sm:text-4xl">
                Ready to Replace Diesel &amp; Eliminate Peak Demand Penalties?
              </h2>
              <p className="text-sm text-blue-100 mt-3 leading-relaxed">
                Connect directly with Lith-On engineering leadership at our Noida 20,000 sq. ft. plant. 
                Receive a site-specific BESS sizing analysis, financial payback model, and single-line diagram (SLD).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F74530] hover:bg-[#d83522] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+917000013009"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all backdrop-blur-md"
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
