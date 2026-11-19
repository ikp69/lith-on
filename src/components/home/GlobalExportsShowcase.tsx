"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Globe2, 
  MapPin, 
  Ship, 
  ArrowRight
} from "lucide-react";

interface RegionProject {
  id: string;
  country: string;
  region: string;
  title: string;
  capacity: string;
  application: string;
  image: string;
  /** What the product image shows. These are product shots, not site photos. */
  hardware: string;
  metrics: string;
  description: string;
}

// Only projects documented in LITHON_DATA_VAULT.md (Case Studies A and B).
const GLOBAL_PROJECTS: RegionProject[] = [
  {
    id: "india-grap",
    country: "India (Delhi-NCR)",
    region: "Gurugram",
    title: "500-Flat High-Rise Housing Society",
    capacity: "7.0 MWh / 2,400 kW BESS",
    application: "CAQM GRAP Diesel Generator Replacement",
    image: "/images/products/container-bess-clean.png",
    hardware: "Containerised Lith-On BESS",
    metrics: "₹4.76 Crore Annual Net Savings",
    description: "Replaced four 750 kVA diesel generators (₹6.52 Cr/yr) with 7.0 MWh of storage, backing up 42 lifts and 14 water pumps through winter GRAP diesel bans. Simple payback of about 1.6 years."
  },
  {
    id: "invertis",
    country: "India (Uttar Pradesh)",
    region: "Bareilly",
    title: "Invertis University Solar + BESS Microgrid",
    capacity: "1.0 MWh BESS + 900 kWp Solar",
    application: "Diesel Generator Displacement",
    image: "/images/products/bess-cabinet-clean.png",
    hardware: "Lith-On BESS",
    metrics: "₹2.26 Crore Annual Net Savings",
    description: "Coupled 1 MWh of Lith-On storage with 900 kWp of rooftop solar to replace a 2,500 kVA diesel generator infrastructure, cutting annual energy spend from ₹4.14 Cr to ₹1.88 Cr. Payback of 4.29 years."
  }
];

export function GlobalExportsShowcase() {
  const [activeProject, setActiveProject] = useState(GLOBAL_PROJECTS[0]);

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-gray-200" id="global-footprint">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-medium text-lithon-blue">
              <Globe2 className="h-3.5 w-3.5 text-lithon-blue" />
              <span>International Deployment Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mt-3 tracking-tight">
              Engineering Deployed Across <span className="font-semibold text-lithon-blue">25+ Countries</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w-2xl font-normal">
              500+ MWh deployed globally, with exports spanning Asia, the Middle East, Africa, and North America.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-gray-500">
            <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-800">
              <Ship className="h-3.5 w-3.5 text-lithon-blue" />
              Nhava Sheva &amp; Mundra Export Skids
            </span>
          </div>
        </div>

        {/* Global Showcase Interactive Grid */}
        <div className="rounded-3xl border border-gray-200 bg-[#FAFAF8] overflow-hidden shadow-sm">
          <div className="grid gap-0 lg:grid-cols-12 items-stretch">
            {/* Visual Media Pane */}
            <div className="relative lg:col-span-7 min-h-[260px] sm:min-h-[440px] bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
              <Image
                src={activeProject.image}
                alt={`${activeProject.hardware} (product image)`}
                fill
                className="object-contain p-10 sm:p-16"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <p className="absolute top-4 left-4 text-xs text-gray-500">
                Product image: {activeProject.hardware}
              </p>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2">
                <div className="rounded-full bg-white border border-gray-200 px-3.5 py-1.5 text-xs font-mono font-semibold text-gray-900">
                  {activeProject.capacity}
                </div>
                <div className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
                  {activeProject.metrics}
                </div>
              </div>
            </div>

            {/* Information & Selector Pane */}
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-xs font-mono font-bold text-[#0B3388] flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {activeProject.country} ({activeProject.region})
                  </span>
                  <span className="text-xs font-semibold text-gray-500">{activeProject.application}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                  {activeProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {activeProject.description}
                </p>
              </div>

              {/* Country Selection Pills */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <span className="text-xs font-medium text-gray-500 block">
                  Select a documented project:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {GLOBAL_PROJECTS.map((proj) => (
                    <button
                      key={proj.id}
                      type="button"
                      onClick={() => setActiveProject(proj)}
                      className={`p-3 rounded-xl border text-left font-medium transition-all ${
                        activeProject.id === proj.id
                          ? "border-lithon-blue bg-blue-50/70 text-lithon-blue font-bold shadow-sm"
                          : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="font-bold">{proj.country}</div>
                      <div className="text-xs text-gray-500">{proj.region}</div>
                    </button>
                  ))}
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-lithon-blue hover:text-lithon-red-ink transition-colors"
                  >
                    <span>View Audited Deployments</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <Link
                    href="/distributor"
                    className="inline-flex items-center gap-1 rounded-full bg-lithon-blue hover:bg-lithon-blue-hover px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors"
                  >
                    <span>Export Inquiries</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
