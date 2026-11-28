"use client";

import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MORE_PRODUCTS, type NavChild, type NavItem } from "@/data/navigation";
import { cn } from "@/lib/utils";

/**
 * G2 mega-menu panels (audit §4). Full-width, light, one composition per
 * group: Products shows the four families as catalogue cut-outs, then every
 * other system as a compact list (MORE_PRODUCTS); Industries
 * crossfades an illustrative scene on hover; Solutions, Technology and
 * Company pair a list with one real proof point.
 */

const itemLink =
  "group/item block rounded-control px-3 py-2.5 -mx-3 transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-lithon-blue";

function ListItem({ child, onEnter }: { child: NavChild; onEnter?: () => void }) {
  return (
    <li>
      <Link href={child.href} className={itemLink} onMouseEnter={onEnter} onFocus={onEnter}>
        <span className="block text-body font-[500] text-ink group-hover/item:text-lithon-blue">{child.label}</span>
        {child.description && <span className="mt-0.5 block text-small text-ink-3">{child.description}</span>}
      </Link>
    </li>
  );
}

function SideColumn({ item }: { item: NavItem }) {
  return (
    <div className="flex h-full flex-col">
      <Link
        href={item.href}
        className="group/ov inline-flex items-center gap-2 text-body font-[500] text-lithon-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
      >
        {item.overview}
        <ArrowRight className="h-4 w-4 transition-transform group-hover/ov:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
      </Link>
      {item.description && <p className="mt-1 text-small text-ink-3">{item.description}</p>}
      {item.more && (
        <ul className="mt-6 space-y-1 border-t border-line pt-4">
          {item.more.map((m) => (
            <li key={m.href}>
              <Link href={m.href} className="inline-flex min-h-9 items-center text-small text-ink-2 hover:text-ink focus-visible:outline-2 focus-visible:outline-lithon-blue">
                {m.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <a href="tel:+917000013009" className="mt-auto inline-flex items-center gap-2 pt-6 text-small text-ink-2 hover:text-lithon-blue">
        <Phone className="h-3.5 w-3.5 text-lithon-blue" aria-hidden="true" />
        Call <span className="tabular whitespace-nowrap">+91 70000 13009</span>
      </a>
    </div>
  );
}

function ProductsPanel({ item }: { item: NavItem }) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-9">
      <ul className="grid grid-cols-4 gap-4">
        {item.children?.map((p) => (
          <li key={p.href}>
            <Link href={p.href} className="group/p block rounded-media focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lithon-blue">
              <span className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-media bg-surface">
                {p.image && (
                  <Image
                    src={p.image}
                    alt=""
                    width={240}
                    height={240}
                    sizes="200px"
                    className="h-[78%] w-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/p:scale-[1.03] motion-reduce:transition-none"
                  />
                )}
              </span>
              <span className="mt-3 block text-body font-[500] text-ink group-hover/p:text-lithon-blue">{p.label}</span>
              <span className="tabular mt-0.5 block text-small text-ink-2">{p.meta}</span>
              <span className="mt-0.5 block text-small text-ink-3">{p.description}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t border-line pt-4">
        <p className="text-label text-ink-3">More systems</p>
        <ul className="mt-2 grid grid-cols-3 gap-x-6">
          {MORE_PRODUCTS.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="group/m flex min-h-9 items-baseline justify-between gap-3 border-b border-line py-1.5 text-small focus-visible:outline-2 focus-visible:outline-lithon-blue"
              >
                <span className="font-[500] text-ink group-hover/m:text-lithon-blue">{p.label}</span>
                <span className="tabular whitespace-nowrap text-ink-3">{p.meta}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
      <div className="col-span-3 border-l border-line pl-6">
        <SideColumn item={item} />
      </div>
    </div>
  );
}

function IndustriesPanel({ item }: { item: NavItem }) {
  const children = item.children ?? [];
  const firstImage = children.find((c) => c.image)?.image;
  const [shown, setShown] = useState(firstImage);
  const images = children.filter((c) => c.image);
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-7">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
          {children.map((c) => (
            <ListItem key={c.href} child={c} onEnter={c.image ? () => setShown(c.image) : undefined} />
          ))}
        </ul>
        <div className="mt-6 border-t border-line pt-4">
          <Link href={item.href} className="group/ov inline-flex items-center gap-2 text-body font-[500] text-lithon-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue">
            {item.overview}
            <ArrowRight className="h-4 w-4 transition-transform group-hover/ov:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="relative col-span-5 aspect-[16/10] overflow-hidden rounded-media bg-surface">
        {images.map((c) => (
          <Image
            key={c.image}
            src={c.image as string}
            alt=""
            fill
            sizes="34vw"
            quality={60}
            className={cn("object-cover transition-opacity duration-500 motion-reduce:transition-none", shown === c.image ? "opacity-100" : "opacity-0")}
          />
        ))}
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[12px] text-ink-2">Illustrative scene</span>
      </div>
    </div>
  );
}

function ListPanel({ item, feature }: { item: NavItem; feature: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <ul className="col-span-6 grid grid-cols-2 content-start gap-x-6 gap-y-1">
        {item.children?.map((c) => (
          <ListItem key={c.href} child={c} />
        ))}
      </ul>
      <div className="col-span-3 border-l border-line pl-6">
        <SideColumn item={item} />
      </div>
      <div className="col-span-3">{feature}</div>
    </div>
  );
}

function PhotoFeature({ href, src, width, height, alt, title, note }: { href: string; src: string; width: number; height: number; alt: string; title: string; note: string }) {
  return (
    <Link href={href} className="group/f block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lithon-blue">
      <span className="relative block aspect-[4/3] overflow-hidden rounded-media bg-surface">
        <Image src={src} alt={alt} width={width} height={height} unoptimized className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/f:scale-[1.03] motion-reduce:transition-none" />
      </span>
      <span className="mt-3 block text-body font-[500] text-ink group-hover/f:text-lithon-blue">{title}</span>
      <span className="mt-0.5 block text-small text-ink-3">{note}</span>
    </Link>
  );
}

function StatFeature() {
  return (
    <Link href="/technology#icebattery" className="group/f block rounded-media bg-surface p-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lithon-blue">
      <span className="tabular flex items-baseline gap-1 text-stat-l text-ink">
        15–30<span className="text-[0.32em] font-[500] tracking-normal">°C</span>
      </span>
      <span className="mt-2 block text-body font-[500] text-ink group-hover/f:text-lithon-blue">Lower internal cabinet temperature</span>
      <span className="mt-0.5 block text-small text-ink-3">With the IceBattery® thermal shield</span>
    </Link>
  );
}

export function MegaPanelContent({ item }: { item: NavItem }) {
  switch (item.label) {
    case "Products":
      return <ProductsPanel item={item} />;
    case "Industries":
      return <IndustriesPanel item={item} />;
    case "Solutions":
      return (
        <ListPanel
          item={item}
          feature={
            <PhotoFeature
              href="/case-studies/invertis-university"
              src="/images/installations/invertis-bess-yard.jpg"
              width={1070}
              height={295}
              alt="Lith-On storage cabinets at Invertis University"
              title="₹2.26 Cr a year saved"
              note="Invertis University, with 1 MWh of storage and 900 kWp of solar"
            />
          }
        />
      );
    case "Technology":
      return <ListPanel item={item} feature={<StatFeature />} />;
    default:
      return (
        <ListPanel
          item={item}
          feature={
            <PhotoFeature
              href="/capabilities"
              src="/images/factory/noida-facility-bench-photo.jpg"
              width={1165}
              height={525}
              alt="Lith-On home and commercial battery units at the Noida facility"
              title="Made in Noida"
              note="Assembled and tested at our Sector 136 plant"
            />
          }
        />
      );
  }
}
