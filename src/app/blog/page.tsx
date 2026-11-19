import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — BESS Industry Insights & Engineering Updates | Lith-On",
  description:
    "Insights on Indian BESS market, CAQM GRAP compliance, industrial energy storage engineering, IceBattery® thermal technology, and project deployment updates from Lith-On.",
};

const BLOG_POSTS = [
  {
    slug: "caqm-grap-diesel-replacement-bess-roi",
    title: "Replacing DG Sets Under CAQM GRAP: Financial ROI & Sub-10ms Cutover Physics",
    excerpt:
      "An engineering breakdown of how high-rise commercial facilities in Delhi-NCR achieve 1.6-year financial payback replacing 3,000 kVA diesel generation with Lith-On BESS.",
    category: "Regulatory & Environment",
    date: "October 2026",
    readTime: "6 min read",
  },
  {
    slug: "icebattery-passive-radiative-cooling",
    title: "IceBattery® Passive Radiative Cooling: Eliminating HVAC Thermal Throttling at 60°C",
    excerpt:
      "How our 300–400µm inorganic ceramic coating uses deep space atmospheric windows (8–13 µm) to drop internal cabinet temperatures by 15°C–30°C without active cooling power.",
    category: "Thermal Engineering",
    date: "September 2026",
    readTime: "8 min read",
  },
  {
    slug: "ht-peak-demand-shaving-industrial-tariffs",
    title: "HT Peak Demand Shaving under DHBVN & UPPCL Industrial Time-of-Day Tariffs",
    excerpt:
      "Technical guide for factory plant managers to eliminate maximum demand penalties and slash commercial electricity costs through autonomous edge EMS algorithms.",
    category: "Industrial Power",
    date: "August 2026",
    readTime: "5 min read",
  },
  {
    slug: "trifecta-compliance-moat-iec61508-iec61850-bis",
    title: "The Trifecta Compliance Moat: Achieving IEC 61508, IEC 61850 and BIS Simultaneously",
    excerpt:
      "Why utility-scale energy storage in India requires multi-protocol grid communication and functional SIL 2/3 safety architecture — and how Lith-On achieves it.",
    category: "Grid Certification",
    date: "July 2026",
    readTime: "7 min read",
  },
  {
    slug: "bess-vs-diesel-total-cost-ownership",
    title: "BESS vs Diesel Generator: 10-Year Total Cost of Ownership for Indian C&I Facilities",
    excerpt:
      "A comprehensive cost comparison including fuel, maintenance, regulatory risk, carbon credits, and residual battery value for commercial and industrial decision-makers.",
    category: "Commercial Economics",
    date: "June 2026",
    readTime: "10 min read",
  },
  {
    slug: "lifepo4-vs-nmc-indian-climate",
    title: "LiFePO4 vs NMC Chemistry: Why Indian BESS Projects Should Choose LFP",
    excerpt:
      "Technical comparison of Lithium Iron Phosphate and Nickel Manganese Cobalt chemistries in the context of Indian ambient temperatures, safety regulations, and cycle life requirements.",
    category: "Battery Technology",
    date: "May 2026",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-36 pb-28 lg:pb-36 bg-white">
      {/* Header */}
      <section className="border-b border-gray-200 bg-canvas-offwhite px-4 sm:px-6 pt-10 sm:pt-40 pb-14 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-4"
          >
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900 font-semibold" aria-current="page">
              Blog
            </span>
          </nav>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
            Industry Insights &amp;{" "}
            <span className="font-semibold text-lithon-blue">Engineering Blog</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed font-normal">
            Technical perspectives on Indian energy storage, CAQM GRAP regulatory developments,
            industrial battery engineering, and deployment insights from the Lith-On team.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-gray-200 bg-white shadow-xs hover:border-blue-200 hover:shadow-md transition-all overflow-hidden flex flex-col"
              >
                {/* Placeholder visual */}
                <div className="h-40 bg-gradient-to-br from-blue-50 to-gray-50 border-b border-gray-100 flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-lithon-blue/40">
                    {post.category}
                  </span>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-lithon-blue">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                    <span className="text-[10px] text-gray-500">•</span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-gray-500">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-lithon-blue transition-colors">
                    {post.title}
                  </h2>

                  <p className="mt-2 text-xs text-gray-600 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] text-gray-500 font-medium">{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-lithon-blue group-hover:translate-x-0.5 transition-transform">
                      Coming Soon
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 rounded-2xl border border-gray-200 bg-canvas-offwhite p-6 sm:p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-bold text-gray-900">
              Stay Updated on BESS Industry Developments
            </h3>
            <p className="mt-2 text-xs text-gray-600">
              We publish technical insights on Indian energy storage, regulatory changes, and
              deployment case studies. Subscribe to get notified.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                aria-label="Your work email"
                placeholder="Your work email"
                className="w-full min-w-0 sm:flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue shadow-xs"
              />
              <button
                type="button"
                className="rounded-xl bg-lithon-blue hover:bg-lithon-blue-hover px-5 py-2.5 text-xs font-semibold text-white transition-colors shadow-xs"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
