import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

/**
 * PRD-01 lineup: the four catalogue families on one floor line, ordered by
 * capacity, rising in sequence (M1, 90 ms stagger). Catalogue renders with
 * backgrounds removed. Captioned "not to scale".
 */
const LINEUP = [
  { slug: "lithon-50", name: "Lith-On-50", capacity: "48 kWh", src: "/images/products/catalogue/lithon-50.webp", w: 845, h: 1126, height: "62%", grow: "flex-1" },
  { slug: "lt215", name: "LT215", capacity: "215 kWh", src: "/images/products/catalogue/lt215.webp", w: 845, h: 1413, height: "84%", grow: "flex-1" },
  { slug: "magna-ci", name: "Magna-C&I", capacity: "260 kWh", src: "/images/products/catalogue/magna-ci-260.webp", w: 709, h: 1044, height: "86%", grow: "flex-1" },
  { slug: "max-20hc", name: "Max-20HC-5000", capacity: "5 MWh", src: "/images/products/catalogue/max-20hc-5000.webp", w: 1048, h: 672, height: "74%", grow: "flex-[2.2]" },
];

export function ProductsLineup() {
  return (
    <figure>
      <div className="overflow-hidden rounded-media bg-surface">
        <ul className="mx-auto grid max-w-[1180px] grid-cols-3 gap-x-3 gap-y-6 px-4 pt-6 pb-4 sm:flex sm:aspect-[21/9] sm:gap-[3%] sm:px-[4%] sm:pt-[3%] sm:pb-[3%]">
          {LINEUP.map((p, i) => (
            <li key={p.slug} className={`min-w-0 sm:h-auto ${p.slug === "max-20hc" ? "col-span-3 h-36" : "h-44"} ${p.grow}`}>
              <Reveal delay={0.15 + i * 0.09} distance={32} className="h-full">
                <Link
                  href={`/products/${p.slug}`}
                  className="group flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
                >
                  {/* Image area: every product stands on the same floor line */}
                  <span className="relative min-h-0 flex-1 border-b border-line-strong">
                    <Image
                      src={p.src}
                      alt=""
                      width={p.w}
                      height={p.h}
                      priority={i < 2}
                      sizes="(min-width: 1024px) 30vw, 40vw"
                      style={{ height: p.height }}
                      className="absolute bottom-0 left-1/2 w-auto max-w-full -translate-x-1/2 object-contain object-bottom drop-shadow-[0_14px_14px_rgb(15_23_42/0.12)] transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none"
                    />
                  </span>
                  <span className="mt-3 block min-h-10 text-center text-[12px] leading-tight font-[500] text-ink sm:mt-4 sm:text-small">
                    {p.name}
                    <span className="tabular mt-0.5 block font-normal text-ink-3">{p.capacity}</span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-small text-ink-3">The four catalogue families, ordered by capacity. Not to scale.</figcaption>
    </figure>
  );
}
