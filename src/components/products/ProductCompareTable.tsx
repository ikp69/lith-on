import Link from "next/link";
import { PRODUCTS_DATA } from "@/data/products";

/**
 * PRD-02 comparison table. One row per product so it reads on any width;
 * scrolls sideways on phones with the product column kept in view.
 * Values from src/data/products.ts.
 */
export function ProductCompareTable() {
  return (
    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0" data-lenis-prevent="">
      <table className="w-full min-w-[760px] border-collapse text-left text-small">
        <caption className="sr-only">Comparison of Lith-On products by capacity, power, format and enclosure</caption>
        <thead>
          <tr className="border-b border-line-strong text-ink-3">
            <th scope="col" className="sticky left-0 bg-canvas py-3 pr-6 font-[500]">
              Product
            </th>
            <th scope="col" className="py-3 pr-6 font-[500]">
              Capacity
            </th>
            <th scope="col" className="py-3 pr-6 font-[500]">
              Power
            </th>
            <th scope="col" className="py-3 pr-6 font-[500]">
              Format
            </th>
            <th scope="col" className="py-3 font-[500]">
              Enclosure
            </th>
          </tr>
        </thead>
        <tbody>
          {PRODUCTS_DATA.map((p) => (
            <tr key={p.id} className="border-b border-line align-top transition-colors hover:bg-surface/60">
              <th scope="row" className="sticky left-0 bg-canvas py-4 pr-6 font-[500]">
                <Link href={`/products/${p.slug}`} className="text-ink hover:text-lithon-blue focus-visible:outline-2 focus-visible:outline-lithon-blue">
                  {p.name}
                </Link>
              </th>
              <td className="tabular py-4 pr-6 text-ink">{p.capacity}</td>
              <td className="tabular py-4 pr-6 text-ink">{p.powerRating}</td>
              <td className="py-4 pr-6 text-ink-2">{p.formFactor}</td>
              <td className="py-4 text-ink-2">{p.enclosureRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
