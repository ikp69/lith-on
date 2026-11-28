import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { PhotoNeeded } from "@/components/system/PhotoNeeded";
import Link from "next/link";
import type { ProductDetail } from "@/data/products";

/** Split "48 kWh (Scalable to 192 kWh)" into a headline figure and a note. */
function splitCapacity(capacity: string) {
  const at = capacity.indexOf(" @ ");
  if (at !== -1) {
    return { main: capacity.slice(0, at), note: `Rated at ${capacity.slice(at + 3)}` };
  }
  const i = capacity.indexOf(" (");
  return i === -1 ? { main: capacity, note: "" } : { main: capacity.slice(0, i), note: capacity.slice(i + 2, -1) };
}

/**
 * PRD-02 product card (design.md §16): large image on a light stage, the
 * capacity as the headline figure, two specs and one link. The whole card is
 * the link; hover lifts the product (M8).
 */
export function ProductCard({ product }: { product: ProductDetail }) {
  const { main, note } = splitCapacity(product.capacity);
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col rounded-media focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lithon-blue"
    >
      <span className="relative isolate flex aspect-[4/3] items-center justify-center overflow-hidden rounded-media bg-surface">
        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.name}`}
            width={640}
            height={640}
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 45vw, 90vw"
            className="h-[72%] w-auto max-w-[80%] object-contain mix-blend-multiply transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        ) : (
          <PhotoNeeded fill subject={`${product.name} product cut-out`} size="1600 × 1600 px, white or transparent background" />
        )}
        <span className="absolute top-4 left-4 rounded-full bg-white px-2.5 py-1 text-[12px] text-ink-2">{product.category}</span>
      </span>
      <span className="mt-5 flex flex-1 flex-col">
        <span className="tabular block text-stat-l leading-none text-ink">{main}</span>
        {note && <span className="mt-1 block text-small text-ink-3">{note}</span>}
        <span className="mt-3 block text-heading-3 text-ink group-hover:text-lithon-blue">{product.name}</span>
        <span className="mt-1 block text-small text-ink-2">{product.tagline}</span>
        <span className="mt-4 grid grid-cols-[auto_1fr] gap-x-5 gap-y-1.5 border-t border-line pt-4 text-small">
          <span className="text-ink-3">Power</span>
          <span className="tabular text-ink">{product.powerRating}</span>
          <span className="text-ink-3">Enclosure</span>
          <span className="text-ink">{product.enclosureRating}</span>
        </span>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-small font-[500] text-lithon-blue">
          View product
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
        </span>
      </span>
    </Link>
  );
}
