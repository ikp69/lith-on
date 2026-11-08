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
  metrics: string;
  description: string;
}

const GLOBAL_PROJECTS: RegionProject[] = [
  {
    id: "kenya",
    country: "Kenya",
    region: "East Africa",
    title: "School & Community Solar-Storage Microgrid",
    capacity: "120 kWh BESS + 40 kWp Solar",
    application: "Off-Grid Educational Resilience",
    image: "/images/heroes/hero-university.jpg",
    metrics: "100% Zero Diesel Dependency",
    description: "Containerized lithium storage providing continuous digital classroom power, water filtration pumping, and computer lab continuity in rural Kenya without grid access."
  },
  {
    id: "uae",
    country: "United Arab Emirates",
    region: "Middle East",
    title: "High-Ambient C&I Energy Storage System",
    capacity: "520 kWh (Dual Magna-C&I Skid)",
    application: "60°C Ambient Peak Shaving",
    image: "/images/heroes/hero-commercial.jpg",
    metrics: "15°C–30°C IceBattery® Thermal Drop",
    description: "Engineered with proprietary IceBattery® inorganic ceramic thermal coating to withstand harsh desert ambient temperatures exceeding 52°C without HVAC thermal throttling."
  },
  {
    id: "india-grap",
    country: "India (Delhi-NCR)",
    region: "South Asia",
    title: "Gurugram 500-Flat Condominium Complex",
    capacity: "7.0 MWh / 2,400 kW BESS",
    application: "CAQM GRAP Diesel Generator Replacement",
    image: "/images/heroes/hero-residential.jpg",
    metrics: "₹4.76 Crore Annual Net Savings",
    description: "Sub-10ms instantaneous UPS switchover supporting 42 elevators and domestic pumps during mandatory winter air quality pollution bans."
  },
  {
    id: "se-asia",
    country: "Southeast Asia",
    region: "ASEAN Island Hubs",
    title: "Telecom BTS Base Station Hybrid Storage",
    capacity: "48V 200Ah High-Density Racks",
    application: "VRLA Lead-Acid Fleet Modernization",
    image: "/images/heroes/hero-hospital.jpg",
    metrics: "3x Usable Energy at 1/3 Footprint",
    description: "Replaced degraded lead-acid banks across 150 remote telecom tower sites, cutting diesel generator runtime by 75% under tropical humidity."
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
              Over 500+ MWh of operational storage engineered in Noida and shipped globally. From rural Kenyan school microgrids to Middle Eastern industrial hubs withstanding 60°C heat.
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
            <div className="relative lg:col-span-7 min-h-[320px] sm:min-h-[440px] bg-slate-900">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover opacity-85 transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div className="rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3.5 py-1.5 text-xs font-mono font-semibold">
                  {activeProject.capacity}
                </div>
                <div className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                  {activeProject.metrics}
                </div>
              </div>
            </div>

            {/* Information & Selector Pane */}
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-xs font-mono font-bold uppercase text-[#0B3388] flex items-center gap-1.5">
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
                  Select Regional Case Study:
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
                      <div className="text-xs text-gray-500 truncate">{proj.region}</div>
                    </button>
                  ))}
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-lithon-blue hover:text-lithon-red transition-colors"
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
