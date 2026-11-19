"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Factory, 
  ChevronLeft, 
  ChevronRight,
  ExternalLink 
} from "lucide-react";

interface FactorySlide {
  id: string;
  title: string;
  tag: string;
  facility: string;
  description: string;
  image: string;
  stats: string;
}

const FACTORY_SLIDES: FactorySlide[] = [
  {
    id: "battery-pack-assembly",
    title: "Precision Battery Pack & Busbar Assembly",
    tag: "Robotic & Hand-Crafted QA",
    facility: "Noida 20,000 sq. ft. Plant — Bay 1",
    description: "Precision cell alignment and copper busbar wiring ensuring ultra-low contact resistance (<15 µΩ) across cell interconnections.",
    image: "/images/factory/battery-pack-assembly-photo.jpg",
    stats: "250 MWh Annual Capacity"
  },
  {
    id: "icebattery-chamber",
    title: "IceBattery® Ceramic Coating & Cabinet Shelling",
    tag: "Thermal Physics & Enclosure",
    facility: "Noida Integrated Assembly Bay",
    description: "Application of proprietary 300–400µm inorganic ceramic coating (>0.92 emissivity), reducing internal cabinet temperatures by 15°C–30°C in 60°C peak ambient heat.",
    image: "/images/factory/integrated-bess-assembly-photo.jpg",
    stats: "15°C–30°C Thermal Drop"
  },
  {
    id: "testing-lab",
    title: "High-Voltage Telemetry & QA Testing Rig",
    tag: "Active Conformance Bench",
    facility: "Noida QA & Conformance Lab",
    description: "3,000V DC insulation withstand tests, cell-level telemetry calibration, and multi-tier BMS ground fault trip verification before packaging into turnkey BESS skids.",
    image: "/images/factory/testing-quality-assurance-photo.jpg",
    stats: "IEC 61508 SIL-2 / BIS"
  },
  {
    id: "turnkey-skids",
    title: "Finished BESS Lineup & Pre-Commissioning",
    tag: "Turnkey Skid Integration",
    facility: "Noida Facility Commissioning Bay",
    description: "Full turnkey integration of battery racks, bi-directional PCS inverters, aerosol fire suppression, and sub-10ms automatic transfer switches for rapid plug-and-play hookup.",
    image: "/images/factory/noida-facility-bench-photo.jpg",
    stats: "500+ MWh Deployed"
  }
];

export function FactoryVideoReel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? FACTORY_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === FACTORY_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const current = FACTORY_SLIDES[activeIndex];

  return (
    <div className="py-16 sm:py-20 bg-white border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-3.5 py-1 text-xs font-medium text-lithon-blue">
              <Factory className="h-3.5 w-3.5 text-lithon-blue" />
              <span>Visual Proof of Manufacturing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mt-3 tracking-tight">
              Inside Our <span className="font-semibold text-lithon-blue">20,000 sq. ft. Noida Plant</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w-2xl">
              Robotic cell assembly, IceBattery® ceramic coating, and high-voltage validation.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous factory process slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition-colors shadow-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="text-xs font-mono font-semibold text-gray-500">
              0{activeIndex + 1} / 0{FACTORY_SLIDES.length}
            </div>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next factory process slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition-colors shadow-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Featured Video Showcase Stage */}
        <div className="rounded-3xl border border-gray-200 bg-canvas-offwhite overflow-hidden shadow-sm">
          <div className="grid gap-0 lg:grid-cols-12 items-stretch">
            {/* Visual Media Pane */}
            <div className="relative lg:col-span-7 min-h-[300px] sm:min-h-[420px] bg-slate-900">
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover opacity-85"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />

              {/* Play / Live Inspection Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3.5 py-1.5 text-xs font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified Plant Workflow</span>
                </div>
                <div className="rounded-full bg-lithon-blue px-3.5 py-1 text-xs font-mono font-semibold text-white">
                  {current.stats}
                </div>
              </div>
            </div>

            {/* Content & Details Pane */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-lithon-blue">
                    {current.tag}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">
                    {current.facility}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 tracking-tight text-balance">
                  {current.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {current.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-4">
                {/* Thumbnails Navigator */}
                <div className="grid grid-cols-4 gap-2">
                  {FACTORY_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeIndex === idx ? "bg-lithon-blue w-full" : "bg-gray-200 w-full hover:bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link
                    href="/capabilities"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-lithon-blue hover:text-lithon-red-ink transition-colors"
                  >
                    <span>Tour Noida Facility</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-lithon-blue hover:bg-lithon-blue-hover px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors"
                  >
                    <span>Schedule Plant Visit</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
