import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS_DATA } from "@/data/products";
import { ProductComparison } from "@/components/products/ProductComparison";
import { InteractiveBessCutaway } from "@/components/technology/InteractiveBessCutaway";
import { 
  ArrowRight, 
  Download, 
  Cpu
} from "lucide-react";
import { ProductAssistantDrawer } from "@/components/products/ProductAssistantDrawer";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CallToAction } from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "BESS Products & Technical Specifications | Lith-On Bharat Energy",
  description: "Explore Lith-On's industrial Battery Energy Storage Systems: Magna-C&I 260 kWh, Lith-On-50 48 kWh, LT215 215 kWh liquid-cooled cabinet, and Max-20HC 5.0 MWh containerized BESS.",
};

export default function ProductsPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-white">
      {/* 1. Editorial Header */}
      <section className="border-b border-gray-200 bg-canvas-offwhite px-4 sm:px-6 pt-16 sm:pt-20 pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1 text-xs font-medium text-lithon-blue mb-3">
              <Cpu className="h-3.5 w-3.5 text-lithon-blue" />
              <span>Engineered Hardware Catalog</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
              Industrial BESS &amp; <br className="hidden sm:block" />
              <span className="font-semibold text-lithon-blue">Storage Systems</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Lith-On manufactures Tier-1 LiFePO4 battery storage systems engineered for Indian climatic extremes, steep maximum demand charges, and mandatory CAQM GRAP diesel generator bans. Every system is pre-tested and commissioned at our 20,000 sq. ft. Noida facility.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#catalog-grid"
                className="btn-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue active:scale-[0.98]"
              >
                <span>Browse Systems</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <ProductAssistantDrawer triggerLabel="Interactive Sizing Assistant" />
              <Link
                href="/resources"
                className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue active:scale-[0.98]"
              >
                <Download className="h-4 w-4 text-lithon-blue" />
                <span>Download E-Catalogue</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Product Cards Grid */}
      <section className="px-4 sm:px-6" id="catalog-grid">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Turnkey Enclosure Families"
            eyebrowIcon={Cpu}
            title={
              <>
                Engineered <span className="font-semibold text-lithon-blue">Industrial Systems</span>
              </>
            }
            subtitle="Standardized, pre-commissioned, and factory-tested BESS hardware ready for high-demand commercial and industrial deployment."
          />

          <div className="grid gap-8 md:grid-cols-2">
            {PRODUCTS_DATA.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Subsystem Architecture Section */}
      <section className="border-t border-gray-200 bg-canvas-offwhite py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Architectural Hardware Deep-Dive"
            eyebrowIcon={Cpu}
            title={
              <>
                Internal Anatomy of a <span className="font-semibold text-lithon-blue">Lith-On BESS</span>
              </>
            }
            subtitle="Click through the verified internal subsystems—from high-voltage LFP rack modules and smart PCS inverters to IceBattery® ceramic passive coating and edge SCADA telemetry."
          />
          <InteractiveBessCutaway />
        </div>
      </section>

      {/* 4. Embedded Product Comparison Matrix */}
      <ProductComparison />

      {/* 5. Custom Engineering CTA */}
      <CallToAction
        eyebrow="Technical Sizing & Single Line Diagrams"
        title="Need Custom Battery Pack or Skid Engineering?"
        description="Lith-On provides specialized BESS sizing calculations, Single Line Diagrams (SLDs), and CAQM GRAP financial payback audits for C&I facility directors and solar EPCs."
        primaryAction={{
          label: "Talk to an Expert",
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
