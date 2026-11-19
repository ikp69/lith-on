"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";

interface GalleryItem {
  id: string;
  category: "Deployments" | "Microgrids" | "Factory" | "Testing" | "Products";
  title: string;
  location: string;
  capacity: string;
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    category: "Deployments",
    title: "1 MWh Invertis BESS Yard",
    location: "Bareilly, UP",
    capacity: "1.0 MWh / 4 Cabinets + PCS",
    image: "/images/installations/invertis-bess-yard.jpg",
    description: "Four BESS outdoor skids delivering sub-10ms campus cutover across 700+ rooms."
  },
  {
    id: "g2",
    category: "Microgrids",
    title: "900 kW Campus Rooftop Solar PV",
    location: "Bareilly Campus, Uttar Pradesh",
    capacity: "900 kWp Solar Generation",
    image: "/images/installations/invertis-900kw-solar.jpg",
    description: "Rooftop solar generation feeding directly into the Lith-On BESS for daytime storage and zero-emission evening campus power."
  },
  {
    id: "g3",
    category: "Deployments",
    title: "C&I Campus BESS Bank",
    location: "Industrial Campus",
    capacity: "Multi-MW Turnkey Containers",
    image: "/images/installations/commercial-campus-bess-photo.jpg",
    description: "Containerized BESS skids for continuous ToD peak demand arbitrage."
  },
  {
    id: "g4",
    category: "Microgrids",
    title: "Wind + Solar Hybrid Microgrid Skid",
    location: "Renewable Generation Substation",
    capacity: "Utility-Scale Hybrid Firming",
    image: "/images/installations/microgrid-solar-wind.jpg",
    description: "Lith-On containerized BESS stabilizing intermittent wind turbines and solar generation for uninterrupted rural grid feeder dispatch."
  },
  {
    id: "g5",
    category: "Deployments",
    title: "Mountain Defense Off-Grid BESS",
    location: "Ladakh Outpost",
    capacity: "Extreme Cold -30°C Tolerant",
    image: "/images/installations/mountain-defense-offgrid.jpg",
    description: "Ruggedized -30°C skid with IceBattery® ceramic thermal protection."
  },
  {
    id: "g6",
    category: "Factory",
    title: "Cleanroom Battery Pack & Harness Assembly",
    location: "Noida 20,000 sq. ft. Facility — Bay 1",
    capacity: "250 MWh Annual Pack Throughput",
    image: "/images/factory/battery-pack-assembly-photo.jpg",
    description: "Skilled technicians assembling high-reliability LFP cell packs with laser-welded busbars and automotive-grade BMS wire looms."
  },
  {
    id: "g7",
    category: "Factory",
    title: "Integrated Outdoor Cabinet Assembly Bay",
    location: "Noida Integrated Manufacturing Line",
    capacity: "IP55 / NEMA 3R Outdoor Rated",
    image: "/images/factory/integrated-bess-assembly-photo.jpg",
    description: "Heavy mechanical assembly integrating rack structural steel, aerosol fire suppression manifolds, and IceBattery® exterior coating."
  },
  {
    id: "g8",
    category: "Testing",
    title: "High-Voltage Telemetry & QA Rig",
    location: "Noida Conformance Testing Lab",
    capacity: "IEC 61508 SIL-2 & BIS Verification",
    image: "/images/factory/testing-quality-assurance-photo.jpg",
    description: "Full active load cycling, insulation dielectric breakdown testing, and sub-10ms automatic transfer switch certification."
  },
  {
    id: "g9",
    category: "Products",
    title: "Magna-C&I 260 kWh Outdoor Cabinet",
    location: "Lith-On Standard Product Line",
    capacity: "260 kWh / 100 kW",
    image: "/images/products/magna-ci-cabinet.png",
    description: "Turnkey outdoor battery energy storage cabinet featuring integrated HVAC, Aerosol fire suppression, and in-house digital BMS."
  },
  {
    id: "g10",
    category: "Products",
    title: "Containerized BESS 3D Subsystem Architecture",
    location: "Turnkey 20ft / 40ft High-Cube",
    capacity: "Up to 5.0 MWh Utility BESS",
    image: "/images/products/bess-3d-cutaway.jpg",
    description: "Complete engineered cutaway showing LFP cell racks, PCS inverter, HVAC thermal ducting, and localized SCADA telemetry desk."
  }
];

export function InstallationGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("Deployments");

  const categories = ["Deployments", "Microgrids", "Factory", "Testing", "All"];

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-gray-200" id="photo-gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-medium text-lithon-blue">
            <Camera className="h-3.5 w-3.5 text-lithon-blue" />
            <span>Visual Evidence of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mt-3 tracking-tight text-balance">
            Deployments, Factory &amp; <span className="font-semibold text-lithon-blue">Testing Gallery</span>
          </h2>
          <p className="mt-3 text-sm text-gray-600 font-normal">
            Verified photographic proof of Lith-On BESS manufacturing, conformance testing labs, and field deployments.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`min-h-[44px] whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue ${
                  activeCategory === cat
                    ? "bg-lithon-blue text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat === "All" ? "All Proof" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="-mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="w-[85%] shrink-0 snap-start sm:w-auto rounded-3xl border border-gray-200 bg-canvas-offwhite overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-200 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-slate-950/30 pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="rounded-full bg-black/60 px-3 py-1 font-mono text-xs backdrop-blur-md border border-white/20">
                    {item.capacity}
                  </span>
                  <span className="rounded-full bg-lithon-blue px-2.5 py-0.5 text-xs font-semibold text-white">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <div className="text-xs font-mono text-gray-500">
                  {item.location}
                </div>
                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
