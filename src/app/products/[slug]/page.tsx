import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_DATA } from "@/data/products";
import { InteractiveBessCutaway } from "@/components/technology/InteractiveBessCutaway";
import { 
  ArrowRight, 
  Download, 
  Check, 
  Clock, 
  FileText,
  Phone,
  MessageSquare
} from "lucide-react";
import { ProductAssistantDrawer } from "@/components/products/ProductAssistantDrawer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} | Technical Specifications & Datasheet | Lith-On`,
    description: `${product.tagline}. Storage capacity: ${product.capacity}, Rated Power: ${product.powerRating}, LiFePO4 chemistry with sub-10ms switchover.`,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-gray-100 bg-[#FAFAF8] py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0B3388] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#0B3388] transition-colors">Products</Link>
            <span>/</span>
            <span className="font-semibold text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative border-b border-gray-200 py-12 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: Product Information */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-[#0B3388]">
                  {product.category} Energy Storage
                </span>
                <span className="font-mono text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Model: {product.modelCode}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <Clock className="h-3.5 w-3.5" />
                  {product.switchoverTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-gray-900">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                {product.tagline}
              </p>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-2xl bg-[#FAFAF8] p-5 border border-gray-200 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Storage Capacity</span>
                  <span className="text-xl font-bold text-[#0B3388] mt-1 block">{product.capacity}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Rated Power</span>
                  <span className="text-xl font-bold text-gray-900 mt-1 block">{product.powerRating}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Chemistry</span>
                  <span className="text-xs font-bold text-gray-800 mt-1 block">Tier-1 LiFePO4</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Cycle Life</span>
                  <span className="text-xs font-bold text-gray-800 mt-1 block">&gt;6,000 Cycles</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0B3388] hover:bg-[#082666] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:shadow-lg transition-all"
                >
                  <span>Talk to an Expert / Request RFQ</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={`#technical-datasheet`}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-700 transition-colors"
                >
                  <Download className="h-4 w-4 text-[#0B3388]" />
                  <span>Download Datasheet</span>
                </a>

                <ProductAssistantDrawer preselectedProduct={product.name} triggerLabel="Instant Sizing Assistant" />
              </div>
            </div>

            {/* Right Column: Authentic Product Photography & Highlights */}
            <div className="lg:col-span-5 rounded-3xl border border-gray-200 bg-[#FAFAF8] p-7 sm:p-8 space-y-6">
              {/* Authentic Product Photography Frame */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-white p-4 border border-gray-200 flex items-center justify-center overflow-hidden shadow-inner">
                <Image
                  src={product.image}
                  alt={`${product.name} Hardware Enclosure`}
                  fill
                  priority
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute bottom-3 left-3 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 px-3 py-1 text-[11px] font-mono text-gray-700 shadow-sm flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Verified Hardware
                </div>
              </div>

              <div className="border-b border-gray-200 pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
                  System Engineering Highlights
                </span>
                <h2 className="text-lg font-bold text-gray-900 mt-1">Noida Plant Built Architecture</h2>
              </div>

              <ul className="space-y-3 text-xs text-gray-700">
                {product.keyFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl bg-white p-4 border border-gray-200 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500">Nominal AC Voltage</span>
                  <span className="font-mono font-medium text-gray-900">{product.acVoltage}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500">DC Bus Architecture</span>
                  <span className="font-mono font-medium text-gray-900">{product.dcVoltage}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500">Round-Trip Efficiency</span>
                  <span className="font-mono font-medium text-emerald-700">{product.efficiency}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500">Enclosure Protection</span>
                  <span className="font-mono font-medium text-gray-900">{product.enclosureRating}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Factory Warranty</span>
                  <span className="font-mono font-medium text-[#0B3388]">{product.warranty}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Subsystem Architecture Section */}
      <section className="py-16 sm:py-20 bg-[#FAFAF8] border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
              <span>Hardware Cross-Section</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight mt-3">
              Internal Architecture of <span className="font-semibold text-[#0B3388]">{product.name}</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed font-normal">
              Inspect the core internal subsystems engineered into Lith-On energy storage platforms—including high-voltage LFP rack modules, in-house digital BMS, bi-directional PCS inverters, and IceBattery® passive thermal coating.
            </p>
          </div>
          <InteractiveBessCutaway />
        </div>
      </section>

      {/* Comprehensive Technical Specifications Table */}
      <section className="py-16 sm:py-20 bg-white" id="technical-datasheet">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
              <FileText className="h-3.5 w-3.5 text-[#0B3388]" />
              <span>Verified Engineering Parameters</span>
            </div>
            <h2 className="text-3xl font-light text-gray-900 tracking-tight mt-3">
              Full Technical <span className="font-semibold text-[#0B3388]">Datasheet</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Verified test parameters for model {product.modelCode}. Compliant with IEC 61508, IEC 61850, and BIS domestic requirements.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-left text-xs">
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50/80">
                  <th scope="col" colSpan={2} className="p-4 font-bold text-gray-900 uppercase tracking-wider text-[11px]">
                    1. Electrical &amp; Battery Characteristics
                  </th>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600 w-1/3">Storage Capacity (Nominal)</td>
                  <td className="p-4 font-mono font-bold text-[#0B3388]">{product.capacity}</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">Continuous Rated Power</td>
                  <td className="p-4 font-mono font-medium text-gray-900">{product.powerRating}</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">Cell Chemistry</td>
                  <td className="p-4 text-gray-900">{product.chemistry} (Intrinsic thermal stability, zero nickel/cobalt)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">AC Output Voltage</td>
                  <td className="p-4 font-mono text-gray-900">{product.acVoltage}</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">DC Bus Voltage</td>
                  <td className="p-4 font-mono text-gray-900">{product.dcVoltage}</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">Round-Trip Efficiency</td>
                  <td className="p-4 font-mono text-emerald-700 font-semibold">{product.efficiency}</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">Cycle Life</td>
                  <td className="p-4 text-gray-900">{product.cycleLife} (15–20 Year Design Lifespan)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">Grid Cutover Speed</td>
                  <td className="p-4 font-mono font-bold text-[#F74530]">{product.switchoverTime}</td>
                </tr>

                <tr className="bg-gray-50/80">
                  <th scope="col" colSpan={2} className="p-4 font-bold text-gray-900 uppercase tracking-wider text-[11px]">
                    2. Thermal Architecture &amp; Environmental
                  </th>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">Cooling Technology</td>
                  <td className="p-4 text-gray-900">{product.coolingMethod}</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">Proprietary Thermal Shield</td>
                  <td className="p-4 text-gray-900">{product.thermalTech}</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">Ambient Operating Temperature</td>
                  <td className="p-4 font-mono text-blue-700">{product.operatingTemp}</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">Enclosure Protection Rating</td>
                  <td className="p-4 font-mono text-gray-900">{product.enclosureRating}</td>
                </tr>

                <tr className="bg-gray-50/80">
                  <th scope="col" colSpan={2} className="p-4 font-bold text-gray-900 uppercase tracking-wider text-[11px]">
                    3. Mechanical Dimensions &amp; Scaling
                  </th>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">External Dimensions (W × D × H)</td>
                  <td className="p-4 font-mono text-gray-900">{product.dimensions}</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">Approximate Weight</td>
                  <td className="p-4 font-mono text-gray-900">{product.weight}</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">System Scalability</td>
                  <td className="p-4 text-gray-900">{product.scalability}</td>
                </tr>

                <tr className="bg-gray-50/80">
                  <th scope="col" colSpan={2} className="p-4 font-bold text-gray-900 uppercase tracking-wider text-[11px]">
                    4. Standards, Testing &amp; Warranty
                  </th>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">Compliance &amp; Certifications</td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1.5">
                      {product.certifications.map((c) => (
                        <span key={c} className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-800">
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-600">Manufacturer Performance Warranty</td>
                  <td className="p-4 font-bold text-[#0B3388]">{product.warranty}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product-Specific FAQs (as required by Section 5) */}
      <section className="border-t border-gray-200 bg-[#FAFAF8] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
              Product FAQs
            </span>
            <h2 className="text-3xl font-light text-gray-900 mt-2">
              Frequently Asked Questions for <span className="font-semibold">{product.name}</span>
            </h2>
          </div>

          <div className="space-y-4">
            {product.faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed font-normal">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Inquiry & Chatbot Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-200 bg-[#FAFAF8] p-8 sm:p-14">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
                  <MessageSquare className="h-4 w-4" />
                  <span>Technical Sizing &amp; RFQ</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-light text-gray-900">
                  Ready to deploy <span className="font-semibold text-[#0B3388]">{product.name}</span>?
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                  Connect directly with Lith-On&apos;s BESS engineering team in Noida. We will calculate your exact peak shaving potential, CAQM GRAP compliance payback, and furnish complete SLD drawings within 24 hours.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0B3388] hover:bg-[#082666] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow"
                  >
                    <span>Request Technical Sizing</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="tel:+917000013009"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-700 hover:bg-gray-50"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#0B3388]" />
                    <span>Call +91-7000013009</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl bg-white border border-gray-200 p-6 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-gray-900">Related BESS Models</h3>
                <div className="space-y-3">
                  {PRODUCTS_DATA.filter((p) => p.id !== product.id).slice(0, 3).map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/products/${rel.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all text-xs"
                    >
                      <div>
                        <div className="font-bold text-gray-900">{rel.name}</div>
                        <div className="text-[11px] text-gray-500 font-mono">{rel.capacity} • {rel.powerRating}</div>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-gray-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
