import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_DATA } from "@/data/products";
import { ProductComparison } from "@/components/products/ProductComparison";
import { InteractiveBessCutaway } from "@/components/technology/InteractiveBessCutaway";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Download, 
  Check, 
  Cpu, 
  Clock 
} from "lucide-react";
import { ProductAssistantDrawer } from "@/components/products/ProductAssistantDrawer";

export const metadata: Metadata = {
  title: "BESS Products & Technical Specifications | Lith-On Bharat Energy",
  description: "Explore Lith-On's industrial Battery Energy Storage Systems: Magna-C&I 260 kWh, Lith-On-50 48 kWh, LT215 215 kWh liquid-cooled cabinet, and Max-20HC 5.0 MWh containerized BESS.",
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Editorial Header */}
      <section className="relative border-b border-gray-200 bg-[#FAFAF8] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
              <Cpu className="h-3.5 w-3.5 text-[#0B3388]" />
              <span>Engineered Hardware Catalog</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-light tracking-tight text-gray-900">
              Industrial BESS &amp; <span className="font-semibold text-[#0B3388]">Storage Systems</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Lith-On manufactures Tier-1 LiFePO4 battery storage systems engineered for Indian climatic extremes, steep maximum demand charges, and mandatory CAQM GRAP diesel generator bans. Every system is pre-tested and commissioned at our 20,000 sq. ft. Noida facility.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#catalog-grid"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B3388] hover:bg-[#082666] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-sm hover:shadow transition-all"
              >
                <span>Browse Systems</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <ProductAssistantDrawer triggerLabel="Interactive Sizing Assistant" />
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-700 transition-colors"
              >
                <Download className="h-4 w-4 text-[#0B3388]" />
                <span>Download E-Catalogue</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Product Cards Grid */}
      <section className="py-16 sm:py-20" id="catalog-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {PRODUCTS_DATA.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-7 sm:p-9 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div>
                  {/* Category, Model, and Live Transfer Badge */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-[#0B3388]">
                        {product.category}
                      </span>
                      <span className="font-mono text-xs font-semibold text-gray-500">
                        {product.modelCode}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-xs font-semibold text-emerald-700">
                      <Clock className="h-3 w-3" />
                      {product.switchoverTime}
                    </span>
                  </div>

                  {/* Authentic Product Photography Frame */}
                  <div className="mt-5 relative h-56 sm:h-64 w-full rounded-2xl bg-gradient-to-b from-[#FAFAF8] to-gray-100/60 p-4 border border-gray-100 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={`${product.name} - Lith-On Energy Storage`}
                      fill
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                    <div className="absolute bottom-3 right-3 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 px-2.5 py-0.5 text-[10px] font-mono font-medium text-gray-600 shadow-sm">
                      Noida Tested
                    </div>
                  </div>
                  {/* Title & One-Line Positioning */}
                  <div className="mt-5">
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Key Metric Callouts */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 rounded-2xl bg-[#FAFAF8] p-4 border border-gray-100 font-mono">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Storage Energy</span>
                      <span className="text-xl font-bold text-[#0B3388] mt-0.5 block">{product.capacity}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Power Rating</span>
                      <span className="text-xl font-bold text-gray-900 mt-0.5 block">{product.powerRating}</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Cooling Method</span>
                      <span className="text-xs font-bold text-gray-800 mt-1 block truncate">{product.coolingMethod.split('/')[0]}</span>
                    </div>
                  </div>

                  {/* Target Facility & Chemistry */}
                  <div className="mt-5 space-y-2 text-xs text-gray-600">
                    <div>
                      <strong className="text-gray-900 font-medium">Target Facility: </strong>
                      <span>{product.typicalUser}</span>
                    </div>
                    <div>
                      <strong className="text-gray-900 font-medium">Thermal Tech: </strong>
                      <span>{product.thermalTech}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="mt-5 space-y-2 text-xs text-gray-700">
                    {product.keyFeatures.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-8 border-t border-gray-100 pt-5 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B3388] hover:bg-[#082666] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-sm hover:shadow transition-all"
                  >
                    <span>View Specifications &amp; Datasheet</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white hover:bg-gray-50 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-700 transition-colors"
                  >
                    Request Sizing
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Subsystem Architecture Section */}
      <section className="border-t border-gray-200 bg-[#FAFAF8] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
              <Cpu className="h-3.5 w-3.5 text-[#0B3388]" />
              <span>Architectural Hardware Deep-Dive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight mt-3">
              Internal Anatomy of a <span className="font-semibold text-[#0B3388]">Lith-On BESS</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed font-normal">
              Click through the verified internal subsystems—from high-voltage LFP rack modules and smart PCS inverters to IceBattery® ceramic passive coating and edge SCADA telemetry.
            </p>
          </div>
          <InteractiveBessCutaway />
        </div>
      </section>

      {/* Embedded Product Comparison Matrix */}
      <ProductComparison />

      {/* Engineering Resource Strip */}
      <section className="border-t border-gray-200 bg-[#FAFAF8] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-200 bg-blue-50/50 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
                Technical Sizing &amp; SLDs
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                Need Custom Battery Pack or Skid Engineering?
              </h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Lith-On provides specialized BESS sizing calculations, Single Line Diagrams (SLDs), and CAQM GRAP financial payback audits for C&amp;I facility directors and solar EPCs.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B3388] hover:bg-[#082666] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+917000013009"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-700 hover:bg-gray-50"
              >
                <span>+91-7000013009</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
