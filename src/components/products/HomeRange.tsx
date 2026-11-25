import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionIntro } from "@/components/system/SectionIntro";
import { HOME_PRODUCTS } from "@/data/home-products";

/**
 * /products "Home & small business" subsection: the catalogue's residential
 * and small-commercial range. Photo cards (catalogue lifestyle photography),
 * one headline figure, three specs, an enquiry link. Storage first, then
 * inverters by rating.
 */
export function HomeRange() {
  return (
    <section id="home-small-business" aria-labelledby="home-range-title" className="section-tight scroll-mt-24 bg-canvas-warm">
      <div className="container-site">
        <SectionIntro
          title={<span id="home-range-title">Home &amp; small business</span>}
          lead="Wall-mount and stackable batteries, a lead-acid replacement that works with home inverters, an e-rickshaw battery, and solar inverters with built-in lithium batteries, for homes, shops and offices."
          split
          className="mb-10 lg:mb-12"
        />
        <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {HOME_PRODUCTS.map((p) => (
            <li key={p.id} className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-media bg-surface">
                <Image src={p.image} alt={p.alt} fill sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 90vw" quality={75} className="object-cover" />
              </div>
              <p className="mt-4 text-small text-ink-3">{p.kind}</p>
              <p className="tabular mt-1 flex items-baseline gap-1.5 text-stat-l leading-none text-ink">
                {p.headline}
                <span className="text-[0.32em] font-[500] tracking-normal">{p.headlineUnit}</span>
              </p>
              <h3 className="mt-2 text-body font-[500] text-ink">{p.name}</h3>
              <dl className="mt-3 space-y-1.5 border-t border-line pt-3 text-small">
                {p.specs.map((s) => (
                  <div key={s.label} className="grid grid-cols-[5.5rem_1fr] gap-x-3">
                    <dt className="text-ink-3">{s.label}</dt>
                    <dd className="text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href={`/contact?type=assessment&product=${p.id}`}
                aria-label={`Enquire about the ${p.name}`}
                className="group mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-small font-[500] text-lithon-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
              >
                Enquire
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
