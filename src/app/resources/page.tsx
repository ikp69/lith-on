import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS_DATA } from "@/data/products";
import { 
  Download, 
  BookOpen, 
  HelpCircle, 
  ArrowRight, 
  ArrowUpRight, 
  Layers
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources, Datasheets & BESS E-Catalogue | Lith-On Bharat Energy",
  description: "Download verified BESS technical datasheets, full product e-catalogue, engineering whitepapers, and explore industry insights on Indian grid energy storage.",
};

const INDUSTRY_INSIGHTS = [
  {
    title: "Replacing DG Sets Under CAQM GRAP: Financial ROI & Sub-10ms Cutover Physics",
    category: "Regulatory & Environmental",
    date: "October 2026",
    summary: "An engineering breakdown of how high-rise commercial facilities in Delhi-NCR achieve 1.6-year financial payback replacing 3,000 kVA diesel generation with Lith-On BESS.",
    readTime: "6 min read"
  },
  {
    title: "IceBattery® Passive Radiative Cooling: Eliminating HVAC Thermal Throttling at 60°C",
    category: "Thermal Engineering",
    date: "September 2026",
    summary: "How our 300–400µm inorganic ceramic coating uses deep space atmospheric windows (8–13 µm) to drop internal cabinet temperatures by 15°C–30°C.",
    readTime: "8 min read"
  },
  {
    title: "HT Peak Demand Shaving under DHBVN & UPPCL Industrial Time-of-Day Tariffs",
    category: "Industrial Power",
    date: "August 2026",
    summary: "Technical guide for factory plant managers to eliminate maximum demand penalties and slash commercial electricity costs through autonomous edge EMS algorithms.",
    readTime: "5 min read"
  },
  {
    title: "The Trifecta Compliance Moat: Achieving IEC 61508, IEC 61850 and BIS Simultaneously",
    category: "Grid Certification",
    date: "July 2026",
    summary: "Why utility-scale energy storage in India requires multi-protocol grid communication and functional SIL 2/3 safety architecture.",
    readTime: "7 min read"
  }
];

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      {/* Editorial Header */}
      <section className="relative border-b border-gray-200 bg-[#FAFAF8] pt-10 sm:pt-36 pb-14 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold text-[#0B3388]">
              <BookOpen className="h-3.5 w-3.5 text-[#0B3388]" />
              <span>Technical Knowledge Center</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-light tracking-tight text-gray-900">
              Engineering <span className="font-semibold text-[#0B3388]">Resources</span> &amp; Datasheets
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Access authentic technical specifications, verified product datasheets, the full Lith-On BESS e-catalogue, and authoritative engineering whitepapers on lithium energy storage.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Official E-Catalogue Download Banner */}
      <section className="py-16 sm:py-20 border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50/70 via-white to-blue-50/40 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#0B3388]">
                <Layers className="h-3.5 w-3.5" />
                <span>Complete 2026 Edition</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                Lith-On Master BESS Product E-Catalogue
              </h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Comprehensive 32-page guide containing full dimensional blueprints, electrical wiring diagrams, thermal performance curves, and compliance certificates for all C&amp;I and utility models.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact?type=ecatalogue"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B3388] hover:bg-[#082666] px-7 py-3.5 text-xs font-semibold text-white shadow-md hover:shadow-lg transition-all"
              >
                <Download className="h-4 w-4" />
                <span>Request Master E-Catalogue (PDF)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Technical Datasheets Grid */}
      <section className="py-16 sm:py-20 bg-white" id="datasheets">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-[#0B3388]">
              Product Datasheets
            </span>
            <h2 className="text-3xl font-light text-gray-900 mt-2">
              Downloadable <span className="font-semibold text-[#0B3388]">Hardware Specifications</span>
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Individual technical documentation for EPC engineers, facility directors, and electrical consultants.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PRODUCTS_DATA.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border border-gray-200 bg-[#FAFAF8] p-6 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <span className="font-mono text-xs font-bold text-[#0B3388]">{product.modelCode}</span>
                    <span className="rounded-full bg-white border border-gray-200 px-2.5 py-0.5 text-[11px] text-gray-600 font-mono">
                      {product.capacity}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mt-3">{product.name}</h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{product.tagline}</p>

                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-gray-700 border-y border-gray-200 py-3 font-mono">
                    <div>
                      <span className="text-[10px] text-gray-500 block">Rated Power:</span>
                      <strong className="text-gray-900">{product.powerRating}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 block">Cooling:</span>
                      <strong className="text-gray-900">{product.coolingMethod.split('/')[0]}</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between gap-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-xs font-semibold text-[#0B3388] hover:underline"
                  >
                    View Interactive Page →
                  </Link>

                  <Link
                    href={`/contact?download=${encodeURIComponent(product.modelCode)}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 px-3.5 py-2 text-xs font-semibold text-gray-800 transition-colors shadow-sm"
                  >
                    <Download className="h-3.5 w-3.5 text-[#0B3388]" />
                    <span>Download Spec Sheet</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Industry Thought Leadership & Technical Whitepapers */}
      <section className="py-16 sm:py-20 border-t border-gray-200 bg-[#FAFAF8]" id="insights">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-[#0B3388]">
              Thought Leadership &amp; Engineering Papers
            </span>
            <h2 className="text-3xl font-light text-gray-900 mt-2">
              Industry Insights &amp; <span className="font-semibold text-[#0B3388]">Technical Analysis</span>
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Analysis of Indian regulatory frameworks, thermal physics innovations, and commercial microgrid economics.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {INDUSTRY_INSIGHTS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="font-semibold text-[#0B3388] bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <span>{item.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono">{item.date}</span>
                  <Link
                    href={`/contact?insight=${encodeURIComponent(item.title)}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B3388] hover:underline"
                  >
                    <span>Request Full Whitepaper</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Quick FAQs Link */}
      <section className="py-20 sm:py-24 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-blue-50/70 border border-blue-200 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B3388] text-white shrink-0">
                <HelpCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Have Questions Regarding Battery Safety &amp; Payback?</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Explore our comprehensive library of 35+ verified technical answers covering cell chemistry, warranties, and CAQM compliance.</p>
              </div>
            </div>
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B3388] px-6 py-3 text-xs font-semibold text-white shadow hover:bg-[#082666] transition-colors shrink-0"
            >
              <span>Explore FAQs</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
