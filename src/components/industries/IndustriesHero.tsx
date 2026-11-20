"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LineReveal } from "@/components/motion/LineReveal";
import { cn } from "@/lib/utils";

export interface HeroSector {
  id: string;
  name: string;
  image: string;
  alt: string;
  illustrative: boolean;
}

/**
 * IND-01: full-bleed image that crossfades (600 ms) as the visitor hovers or
 * focuses one of the six sector names; each name links to its chapter.
 * Phones: the image sits above the list.
 */
export function IndustriesHero({ sectors }: { sectors: HeroSector[] }) {
  const [active, setActive] = useState(0);
  const current = sectors[active];

  return (
    <section aria-labelledby="industries-title" className="relative overflow-hidden bg-canvas lg:min-h-[calc(100svh-80px)]">
      {/* Image stack */}
      <div className="relative aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[40%] lg:aspect-auto">
        {sectors.map((s, i) => (
          <Image
            key={s.id}
            src={s.image}
            alt={i === active ? s.alt : ""}
            fill
            priority={i === 0}
            sizes="100vw"
            quality={70}
            className={cn("object-cover transition-opacity duration-500 ease-out motion-reduce:transition-none", i === active ? "opacity-100" : "opacity-0")}
          />
        ))}
        <div aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-2/5 bg-gradient-to-r from-canvas to-transparent lg:block" />
        <span className="absolute right-4 bottom-4 rounded-full bg-black/55 px-2.5 py-1 text-[12px] text-white/90">
          {current.illustrative ? "Illustrative scene" : "Installed system"}
        </span>
      </div>

      {/* Copy and sector list */}
      <div className="relative">
        <div className="container-site py-12 lg:flex lg:min-h-[calc(100svh-80px)] lg:flex-col lg:justify-center lg:py-20">
          <nav aria-label="Breadcrumb" className="text-small text-ink-3">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page" className="text-ink-2">
              Industries
            </span>
          </nav>
          <LineReveal as="h1" lines={["Storage for every", "kind of site"]} className="mt-4 text-display-l text-ink lg:max-w-[14ch]" />
          <p className="mt-5 max-w-xl text-lead text-ink-2 lg:max-w-md">Campuses, factories, buildings, hospitals, charging hubs and server rooms each use storage differently.</p>
          <ul className="mt-10 grid max-w-2xl gap-x-8 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-2xl xl:grid-cols-2">
            {sectors.map((s, i) => (
              <li key={s.id} className="border-t border-line">
                <Link
                  href={`#${s.id}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={cn(
                    "flex min-h-14 lg:min-h-12 xl:min-h-14 items-center justify-between gap-4 text-heading-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue",
                    i === active ? "text-lithon-blue" : "text-ink-2 hover:text-ink"
                  )}
                >
                  {s.name}
                  <span aria-hidden="true" className={cn("h-px w-6 bg-current transition-opacity", i === active ? "opacity-100" : "opacity-0")} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
