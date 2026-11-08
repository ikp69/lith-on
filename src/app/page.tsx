import { 
  Shield,
  Zap,
  Cpu,
  Layers
} from "lucide-react";
import { SmartCityHero } from "@/components/hero/smart-city/SmartCityHero";
import { IceBatteryThermal } from "@/components/illustrations/IceBatteryThermal";
import { Sub10msWaveform } from "@/components/illustrations/Sub10msWaveform";
import { PanIndiaMap } from "@/components/illustrations/PanIndiaMap";
import { SavingsCalculator } from "@/components/calculator/SavingsCalculator";
import { SevenMoatsStack } from "@/components/illustrations/SevenMoatsStack";
import { FactoryVideoReel } from "@/components/home/FactoryVideoReel";
import { AttributedTestimonials } from "@/components/home/AttributedTestimonials";
import { EnergyFlowVisualizer } from "@/components/technology/EnergyFlowVisualizer";
import { InstallationGallery } from "@/components/gallery/InstallationGallery";
import { PRODUCTS_DATA } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CallToAction } from "@/components/ui/CallToAction";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-28 sm:gap-36 pb-24 bg-white">
      {/* 1. SCROLL-DRIVEN SMART CITY HERO */}
      <SmartCityHero />

      {/* 2. NOIDA PLANT & PRODUCTION SCALE */}
      <section className="space-y-12 sm:space-y-16" id="manufacturing">
        {/* VERIFIED METRICS COUNTER BAR */}
        <div className="px-4 sm:px-6">
          <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-canvas-offwhite p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border-b sm:border-b-0 sm:border-r border-gray-200/80 pb-4 sm:pb-0 sm:pr-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">250 MWh</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">Annual Noida Production Capacity</div>
                <div className="text-xs text-lithon-blue mt-1 font-semibold">BESS &amp; Pack Assembly</div>
              </div>

              <div className="border-b sm:border-b-0 lg:border-r border-gray-200/80 pb-4 sm:pb-0 sm:pl-2 lg:pl-4 sm:pr-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">20,000 sq.ft.</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">Manufacturing &amp; Testing Facility</div>
                <div className="text-xs text-gray-600 mt-1 font-semibold">Sector 136, Noida</div>
              </div>

              <div className="border-b sm:border-b-0 sm:border-r border-gray-200/80 pb-4 sm:pb-0 sm:pl-2 lg:pl-4 sm:pr-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-600">500+ MWh</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">Global Installed Asset Base</div>
                <div className="text-xs text-emerald-700 mt-1 font-semibold">1,000+ Systems</div>
              </div>

              <div className="sm:pl-2 lg:pl-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-lithon-red">25+</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">International Export Countries</div>
                <div className="text-xs text-gray-600 mt-1 font-semibold">Global Deployments</div>
              </div>
            </div>
          </div>
        </div>

        <FactoryVideoReel />
      </section>

      {/* 3. FEATURED PRODUCTS LINEUP */}
      <section className="px-4 sm:px-6" id="products">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Standardized Hardware Systems"
            eyebrowIcon={Cpu}
            title={
              <>
                Engineered <span className="font-semibold text-lithon-blue">BESS Product Line</span>
              </>
            }
            subtitle="Pre-assembled, factory-tested, and pre-commissioned at our Noida plant for immediate commercial and industrial deployment."
            action={{
              label: "Explore All Products & Specs",
              href: "/products",
            }}
          />

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {PRODUCTS_DATA.filter((p) => p.id === "magna-ci" || p.id === "lt215").map((product) => (
              <ProductCard key={product.id} product={product} featured={product.id === "magna-ci"} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE TECHNOLOGY: THERMAL SCIENCE, DYNAMIC DISPATCH & UPS CUTOVER */}
      <section className="px-4 sm:px-6 pt-16 sm:pt-24" id="technology">
        <div className="mx-auto max-w-7xl space-y-24 sm:space-y-32">
          <div>
            <SectionHeader
              eyebrow="Grid Architecture"
              eyebrowIcon={Zap}
              title={
                <>
                  Dynamic Dispatch &amp; <span className="font-semibold text-lithon-blue">Energy Flow</span>
                </>
              }
              subtitle="Simulate dynamic power arbitrage across solar, grid, and factory loads."
              align="center"
            />
            <EnergyFlowVisualizer />
          </div>

          <div>
            <SectionHeader
              eyebrow="Instantaneous UPS Resilience"
              eyebrowIcon={Shield}
              title={
                <>
                  Sub-10ms Cutover: <span className="font-semibold text-lithon-blue">Oscilloscope Waveform Proof</span>
                </>
              }
              subtitle="Empirical grid-loss test proving continuous voltage sine-wave delivery with zero machine tripping."
              align="center"
            />
            <Sub10msWaveform />
          </div>

          <div>
            <SectionHeader
              eyebrow="Proprietary Thermal Science"
              eyebrowIcon={Layers}
              title={
                <>
                  IceBattery® <span className="font-semibold text-lithon-blue">Thermal Management</span>
                </>
              }
              subtitle="300–400µm inorganic ceramic passive coating reflecting >90% Near-Infrared solar radiation to prevent thermal runaway even at 60°C ambient."
              align="center"
            />
            <IceBatteryThermal />
          </div>
        </div>
      </section>

      {/* 5. ON-SITE DEPLOYMENTS & FACTORY ASSEMBLY GALLERY */}
      <InstallationGallery />

      {/* 6. AUDITED CUSTOMER PROOF & DIESEL SAVINGS CALCULATOR */}
      <section className="pt-16 sm:pt-24" id="economics">
        <div className="space-y-24 sm:space-y-32">
          <AttributedTestimonials />

          <div className="px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <SectionHeader
                eyebrow="Economic Feasibility"
                title={
                  <>
                    Diesel Displacement &amp; <span className="font-semibold text-lithon-blue">Payback Calculator</span>
                  </>
                }
                subtitle="Model your facility's diesel displacement savings and project payback timeline."
                align="center"
              />
              <SavingsCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* 7. PAN-INDIA STRATEGIC DEPLOYMENT MAP & THE 7 STRUCTURAL MOATS */}
      <section className="px-4 sm:px-6 pt-16 sm:pt-24" id="credibility">
        <div className="mx-auto max-w-7xl space-y-36 sm:space-y-48">
          <PanIndiaMap />
          <SevenMoatsStack />
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION CTA BAR */}
      <CallToAction
        className="pt-16 sm:pt-24"
        eyebrow="Turnkey Engineering Proposal"
        title="Ready to Replace Diesel & Eliminate Peak Demand Penalties?"
        description="Connect directly with Lith-On engineering leadership at our Noida 20,000 sq. ft. plant. Receive a site-specific BESS sizing analysis, financial payback model, and single-line diagram (SLD)."
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
