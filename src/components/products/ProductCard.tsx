import Link from "next/link";
import { ArrowRight, Download, Check } from "lucide-react";

export interface BESSProduct {
  id: string;
  name: string;
  modelCode: string;
  tagline: string;
  category: "Commercial" | "Industrial" | "Utility" | "Modular";
  capacity: string;
  powerRating: string;
  chemistry: string;
  cycleLife: string;
  enclosureRating: string;
  highlights: string[];
  specs: { label: string; value: string }[];
}

export function ProductCard({ product }: { product: BESSProduct }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300">
      <div>
        {/* Category & Badge */}
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-[11px] font-semibold text-[#0B3388]">
            {product.category}
          </span>
          <span className="text-xs font-mono text-gray-500">{product.modelCode}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mt-4">{product.name}</h3>
        <p className="text-xs text-gray-600 mt-1 leading-relaxed">{product.tagline}</p>

        {/* Primary Specs Highlight */}
        <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3.5 border border-gray-100">
          <div>
            <span className="text-[10px] text-gray-500 block uppercase font-mono tracking-wider">Storage Energy</span>
            <span className="text-lg font-extrabold text-[#0B3388] mt-0.5 block">{product.capacity}</span>
          </div>
          <div>
            <span className="text-[10px] text-gray-500 block uppercase font-mono tracking-wider">Rated Power</span>
            <span className="text-lg font-extrabold text-gray-900 mt-0.5 block">{product.powerRating}</span>
          </div>
        </div>

        {/* Technical Highlights list */}
        <ul className="mt-5 space-y-2 text-xs text-gray-700">
          {product.highlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Detailed Specs Matrix */}
        <div className="mt-6 border-t border-gray-100 pt-4 space-y-2 text-xs">
          {product.specs.map((s) => (
            <div key={s.label} className="flex items-center justify-between py-1 border-b border-gray-50">
              <span className="text-gray-500">{s.label}</span>
              <span className="font-medium text-gray-800 font-mono text-[11px]">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-3">
        <Link
          href={`/contact?product=${encodeURIComponent(product.name)}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#0B3388] hover:bg-[#082666] px-4 py-2.5 text-xs font-semibold text-white transition-all shadow-sm"
        >
          <span>Request Quote</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link
          href="/solutions"
          className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 p-2.5 text-gray-600 hover:text-gray-900 transition-colors"
          title="View Technical Datasheet"
        >
          <Download className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
