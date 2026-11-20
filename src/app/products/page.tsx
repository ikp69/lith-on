import type { Metadata } from "next";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { HomeRange } from "@/components/products/HomeRange";
import { ProductCompareTable } from "@/components/products/ProductCompareTable";
import { ProductsLineup } from "@/components/products/ProductsLineup";
import { PRODUCTS_DATA } from "@/data/products";
import { LineReveal } from "@/components/motion/LineReveal";
import { Button } from "@/components/system/Button";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { SectionIntro } from "@/components/system/SectionIntro";

export const metadata: Metadata = {
  title: "Battery Energy Storage Products | Lith-On Bharat Energy",
  description:
    "Battery storage from 10 kWh rack modules to 10 MWh containers, including Lith-On-50, LT215, Magna-C&I and Max-20HC, assembled and tested in Noida.",
};

/**
 * /products (audit §6.1). Product hero with the catalogue lineup (PRD-01),
 * filterable catalogue with a "See inside" tile (PRD-02/03), comparison
 * table, and a split closing (PRD-04).
 */
export default function ProductsPage() {
  return (
    <div className="bg-canvas">
      {/* PRD-01 Hero */}
      <section className="pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-6">
            <LineReveal
              as="h1"
              lines={["Battery storage from", "10 kWh to 10 MWh"]}
              className="text-display-l text-ink lg:col-span-7"
            />
            <div className="lg:col-span-5">
              <p className="text-lead text-ink-2">
                {PRODUCTS_DATA.length} systems, from rack modules to 40-ft containers, assembled and tested at our 20,000 sq. ft. plant in Noida.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button href="/contact?type=assessment" arrow>
                  Request sizing
                </Button>
                <Button href="/resources" variant="tertiary">
                  Download the catalogue
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-16">
            <ProductsLineup />
          </div>
        </div>
      </section>

      {/* PRD-02 Catalogue */}
      <section id="catalog-grid" aria-labelledby="catalogue-title" className="section-tight scroll-mt-24">
        <div className="container-site">
          <SectionIntro title={<span id="catalogue-title">All products</span>} lead="Commercial, industrial and utility systems. Filter by where the system is used; each card opens full specifications." split className="mb-8 lg:mb-10" />
          <ProductCatalog />
        </div>
      </section>

      {/* Home & small business range (catalogue) */}
      <HomeRange />

      {/* Comparison */}
      <section aria-labelledby="compare-title" className="section">
        <div className="container-site">
          <SectionIntro title={<span id="compare-title">Compare at a glance</span>} lead="Capacity, power and enclosure for every system, side by side." split className="mb-8 lg:mb-10" />
          <ProductCompareTable />
        </div>
      </section>

      {/* PRD-04 Closing */}
      <ClosingCTA
        variant="split"
        title={["Need a custom pack or configuration?"]}
        lead="Our Noida engineers size systems and battery packs to your load profile, from a single cabinet to a multi-container site."
        primary={{ label: "Talk to an engineer", href: "/contact?type=assessment" }}
        secondary={{ label: "Call +91 70000 13009", href: "tel:+917000013009" }}
        image={{ src: "/images/installations/catalogue/indian-army-jk.webp", alt: "Two Lith-On outdoor storage cabinets installed for the Indian Army in Jammu and Kashmir" }}
      />
    </div>
  );
}
