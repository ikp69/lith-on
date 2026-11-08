import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock } from "lucide-react";

export interface UnifiedProduct {
  id: string;
  slug?: string;
  name: string;
  modelCode: string;
  tagline: string;
  category: "Commercial" | "Industrial" | "Utility" | "Modular" | string;
  image?: string;
  capacity: string;
  powerRating: string;
  switchoverTime?: string;
  coolingMethod?: string;
  highlights?: string[];
  keyFeatures?: string[];
  specs?: { label: string; value: string }[];
}

interface ProductCardProps {
  product: UnifiedProduct;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  const productSlug = product.slug || product.id;
  const features = product.keyFeatures || product.highlights || [];
  const productImage =
    product.image ||
    (product.id === "magna-ci"
      ? "/images/products/magna-ci-cabinet.png"
      : product.id === "lithon-50"
      ? "/images/products/lithon-50-module.png"
      : "/images/products/lt215-container.png");

  return (
    <div
      className={`group flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-blue-200/80 transition-all duration-200 ${
        featured ? "ring-1 ring-lithon-blue/30" : ""
      }`}
    >
      <div>
        {/* Header: Category Badge & Model Code */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-3.5">
          <span className="rounded-full bg-blue-50/80 border border-blue-100 px-3 py-0.5 text-xs font-semibold text-lithon-blue">
            {product.category}
          </span>
          <div className="flex items-center gap-2">
            {product.switchoverTime && (
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-emerald-700">
                <Clock className="h-3 w-3" />
                {product.switchoverTime.replace(" Instantaneous UPS Transition", "").replace(" Seamless Transfer", "").replace(" Instantaneous Cutover", "").replace(" Industrial UPS Transfer", "")}
              </span>
            )}
            <span className="text-xs font-mono font-medium text-gray-500">
              {product.modelCode}
            </span>
          </div>
        </div>

        {/* Product Packshot */}
        <div className="relative my-4 aspect-[16/10] w-full rounded-xl bg-canvas-offwhite border border-gray-100 flex items-center justify-center overflow-hidden p-3">
          <Image
            src={productImage}
            alt={product.name}
            fill
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 360px"
          />
        </div>

        {/* Product Title & One-Line Value */}
        <h3 className="text-xl font-bold text-gray-900 tracking-tight mt-1 text-balance">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
          {product.tagline}
        </p>

        {/* Capacity & Power Metrics Shelf */}
        <div className="mt-4 grid grid-cols-2 gap-2.5 rounded-xl bg-gray-50/90 p-3 border border-gray-100 font-mono">
          <div>
            <span className="text-xs text-gray-500 block font-sans">
              Energy Capacity
            </span>
            <strong className="text-base sm:text-lg font-bold text-lithon-blue mt-0.5 block">
              {product.capacity}
            </strong>
          </div>
          <div>
            <span className="text-xs text-gray-500 block font-sans">
              Rated Power
            </span>
            <strong className="text-base sm:text-lg font-bold text-gray-900 mt-0.5 block">
              {product.powerRating}
            </strong>
          </div>
        </div>

        {/* Differentiating Key Feature (1 primary) */}
        <ul className="mt-4 space-y-2 text-xs text-gray-700">
          {features.slice(0, 1).map((feat) => (
            <li key={feat} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed m-0 text-gray-700">{feat}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2.5">
        <Link
          href={`/products/${productSlug}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-lithon-blue hover:bg-lithon-blue-hover px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue min-h-[44px]"
        >
          <span>View Specs</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
        <Link
          href={`/contact?product=${encodeURIComponent(product.name)}`}
          className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2.5 text-xs font-semibold text-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 min-h-[44px]"
        >
          RFQ
        </Link>
      </div>
    </div>
  );
}

// Retain BESSProduct type export for backwards compatibility
export type BESSProduct = UnifiedProduct;
