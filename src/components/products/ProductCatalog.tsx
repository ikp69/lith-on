"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { startTransition, useState, ViewTransition } from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { PRODUCTS_DATA } from "@/data/products";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Commercial", "Modular", "Industrial", "Utility"] as const;
type Category = (typeof CATEGORIES)[number];

/**
 * PRD-02 catalogue: a segmented category filter over the product cards, with
 * a "See inside" tile (PRD-03 merged). Filtering animates with React View
 * Transitions (cards morph to their new positions); none under reduced motion.
 */
export function ProductCatalog() {
  const [category, setCategory] = useState<Category>("All");
  const products = category === "All" ? PRODUCTS_DATA : PRODUCTS_DATA.filter((p) => p.category === category);
  const count = (c: Category) => (c === "All" ? PRODUCTS_DATA.length : PRODUCTS_DATA.filter((p) => p.category === c).length);

  return (
    <>
      <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
        <fieldset className="inline-flex gap-1 rounded-full bg-surface p-1">
          <legend className="sr-only">Filter products by category</legend>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={category === cat}
              onClick={() => startTransition(() => setCategory(cat))}
              className={cn(
                "min-h-11 whitespace-nowrap rounded-full px-4 text-small font-[500] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue",
                category === cat ? "bg-white text-ink shadow-[0_1px_3px_rgb(15_23_42/0.12)]" : "text-ink-2 hover:text-ink"
              )}
            >
              {cat === "All" ? "All" : cat}
              <span className="tabular ml-1.5 text-ink-3">{count(cat)}</span>
            </button>
          ))}
        </fieldset>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {products.length} {products.length === 1 ? "product" : "products"}
      </p>

      <ul className="mt-10 grid gap-x-6 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ViewTransition key={product.id} name={`product-card-${product.slug}`}>
            <li>
              <ProductCard product={product} />
            </li>
          </ViewTransition>
        ))}
        <ViewTransition name="product-card-inside">
          <li>
            <Link
              href="/technology#cutaway"
              className="group flex h-full flex-col rounded-media focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lithon-blue"
            >
              <span className="relative block aspect-[4/3] overflow-hidden rounded-media bg-stage-dark">
                <Image
                  src="/images/deck/container-cutaway.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 45vw, 90vw"
                  className="object-cover object-center opacity-90 transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[12px] text-ink-2">Illustrative render</span>
              </span>
              <span className="mt-5 block text-heading-3 text-ink group-hover:text-lithon-blue">See inside a Lith-On system</span>
              <span className="mt-1 block text-small text-ink-2">Cells, battery management, power conversion and the IceBattery® shield.</span>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-small font-[500] text-lithon-blue">
                Explore the cutaway
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
              </span>
            </Link>
          </li>
        </ViewTransition>
      </ul>
    </>
  );
}
