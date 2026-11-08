"use client";

import { useState } from "react";
import Link from "next/link";
import { PRODUCTS_DATA } from "@/data/products";
import { ArrowUpRight, Check, Layers } from "lucide-react";

export function ProductComparison() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Commercial");

  const categories = ["Commercial", "Modular", "Industrial", "Utility", "All"];

  const filteredProducts = selectedCategory === "All"
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section className="pt-36 sm:pt-48 pb-36 sm:pb-44 bg-surface-light border-y border-gray-100" id="product-comparison">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-3.5 py-1 text-xs font-medium text-lithon-blue">
            <Layers className="h-3.5 w-3.5 text-lithon-blue" />
            <span>Interactive System Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 mt-4 text-balance">
            Compare Lith-On BESS <span className="font-semibold text-lithon-blue">Architectures</span>
          </h2>
          <p className="mt-3 text-sm text-gray-600 font-normal">
            Select a system category below to evaluate storage capacity, power conversion, cooling method, and industrial deployment targets.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Product Category Filter">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[44px] whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue ${
                  selectedCategory === cat
                    ? "bg-lithon-blue text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat === "All" ? "All Systems" : `${cat} Systems`}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden lg:block overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/80">
                <th scope="col" className="p-4 font-semibold text-gray-700 w-1/5">Product Model</th>
                <th scope="col" className="p-4 font-semibold text-gray-700 w-1/6">Application & Target User</th>
                <th scope="col" className="p-4 font-semibold text-gray-700 w-1/6">Capacity & Power</th>
                <th scope="col" className="p-4 font-semibold text-gray-700 w-1/6">Thermal & Cooling</th>
                <th scope="col" className="p-4 font-semibold text-gray-700 w-1/6">Form Factor & Scalability</th>
                <th scope="col" className="p-4 font-semibold text-gray-700 text-right w-1/6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-4 align-top">
                    <span className="inline-block rounded-md bg-blue-100/60 px-2 py-0.5 text-xs font-mono font-semibold text-lithon-blue">
                      {p.modelCode}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 mt-1">{p.name}</h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-emerald-700">
                      <Check className="h-3 w-3" />
                      {p.switchoverTime}
                    </span>
                  </td>
                  <td className="p-4 align-top">
                    <strong className="text-gray-900 block font-medium mb-1">Target Facilities:</strong>
                    <p className="text-gray-600 leading-relaxed text-xs">{p.typicalUser}</p>
                  </td>
                  <td className="p-4 align-top">
                    <div className="font-mono text-sm font-bold text-lithon-blue">{p.capacity}</div>
                    <div className="text-gray-700 font-mono text-xs mt-0.5">{p.powerRating}</div>
                    <div className="text-xs text-gray-500 mt-1">{p.chemistry}</div>
                    <div className="text-xs text-gray-500">{p.cycleLife}</div>
                  </td>
                  <td className="p-4 align-top">
                    <span className="font-medium text-gray-900 block">{p.coolingMethod}</span>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{p.thermalTech}</p>
                    <span className="text-xs text-lithon-blue font-mono mt-1 block">{p.operatingTemp}</span>
                  </td>
                  <td className="p-4 align-top">
                    <span className="font-medium text-gray-900 block">{p.formFactor}</span>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{p.scalability}</p>
                    <span className="text-xs text-gray-500 font-mono mt-1 block">Rating: {p.enclosureRating}</span>
                  </td>
                  <td className="p-4 align-top text-right space-y-2">
                    <Link
                      href={`/products/${p.slug}`}
                      className="inline-flex w-full items-center justify-center gap-1 rounded-lg bg-lithon-blue hover:bg-blue-900 px-3 py-2 text-xs font-semibold text-white transition-colors shadow-sm min-h-[44px]"
                    >
                      <span>View Specs</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                    <Link
                      href={`/contact?product=${encodeURIComponent(p.name)}`}
                      className="inline-flex w-full items-center justify-center gap-1 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-700 transition-colors min-h-[44px]"
                    >
                      <span>Get Sizing</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / Card Comparison View */}
        <div className="lg:hidden grid gap-6 sm:grid-cols-2">
          {filteredProducts.map((p) => (
            <div key={p.id} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-xs font-mono font-semibold text-lithon-blue">
                  {p.modelCode}
                </span>
                <span className="text-xs font-medium text-emerald-700">{p.switchoverTime}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 text-balance">{p.name}</h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">{p.typicalUser}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 rounded-xl bg-gray-50 p-3 border border-gray-100 font-mono text-xs">
                <div>
                  <span className="text-xs text-gray-500 block">Capacity</span>
                  <strong className="text-sm font-bold text-lithon-blue">{p.capacity}</strong>
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Power</span>
                  <strong className="text-sm font-bold text-gray-900">{p.powerRating}</strong>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-gray-700">
                <div><strong className="text-gray-900">Cooling:</strong> {p.coolingMethod}</div>
                <div><strong className="text-gray-900">Thermal:</strong> {p.thermalTech}</div>
                <div><strong className="text-gray-900">Scalability:</strong> {p.scalability}</div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <Link
                  href={`/products/${p.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-lithon-blue hover:bg-blue-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm min-h-[44px]"
                >
                  <span>View Product</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link
                  href={`/contact?product=${encodeURIComponent(p.name)}`}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 px-4 py-2.5 text-xs font-semibold text-gray-700 min-h-[44px]"
                >
                  RFQ
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
