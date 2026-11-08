"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Zap, Thermometer, RotateCcw, Home, Building2, GraduationCap, Factory, Hospital } from "lucide-react";
import { useState } from "react";

interface IndustryBadge {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  backgroundImage: string;
  href: string;
}

const industries: IndustryBadge[] = [
  {
    id: "residential",
    label: "Residential",
    icon: Home,
    backgroundImage: "/images/sectors/residential-sector.webp",
    href: "/applications/residential",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: Hospital,
    backgroundImage: "/images/sectors/hospital-sector.webp",
    href: "/applications/healthcare",
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: Building2,
    backgroundImage: "/images/sectors/commercial-sector.webp",
    href: "/applications/commercial",
  },
  {
    id: "campus",
    label: "Campus",
    icon: GraduationCap,
    backgroundImage: "/images/sectors/campus-sector.webp",
    href: "/applications/campus",
  },
  {
    id: "industrial",
    label: "Industrial",
    icon: Factory,
    backgroundImage: "/images/sectors/industrial-sector.webp",
    href: "/applications/industrial",
  },
];

/**
 * HeroArchitectural v2
 * 
 * Inspired by premium architectural BESS installations with:
 * - Floating glassmorphic navigation pill at top
 * - Hover-animated industry badges with dynamic background changes
 * - Split hero composition: left text + right BESS product
 * - Bottom translucent specification cards
 * - Light, premium, minimal aesthetic aligned with design.md
 */
export function HeroArchitecturalV2() {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
  return (
    <section className="relative w-full h-screen min-h-[700px] max-h-[1080px] overflow-hidden bg-gradient-to-br from-sky-50/50 via-white to-blue-50/30">
      {/* Background: Dynamic industry images with smooth transitions */}
      <div className="absolute inset-0 z-0">
        {/* Default soft background when no industry is hovered */}
        <div 
          className={`absolute inset-0 transition-opacity duration-700 ${
            hoveredIndustry ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Subtle architectural grid pattern */}
          <div className="absolute inset-0 bg-architectural-grid opacity-30" />
          
          {/* Radial gradient for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-100/30 via-transparent to-transparent" />
        </div>

        {/* Industry-specific backgrounds */}
        {industries.map((industry) => (
          <div
            key={industry.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              hoveredIndustry === industry.id ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={industry.backgroundImage}
              alt={`${industry.label} sector background`}
              fill
              className="object-cover"
              priority={industry.id === "industrial"}
              sizes="100vw"
            />
            {/* Overlay gradient to ensure text readability and blend */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-white/50 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/40" />
          </div>
        ))}
      </div>

      {/* Floating Pill Navigation Header */}
      <header className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 z-30 w-[95%] max-w-7xl">
        <nav
          className="mx-auto flex items-center justify-between gap-8 
                     px-6 sm:px-8 py-3.5 
                     rounded-full 
                     bg-white/70 backdrop-blur-xl 
                     border border-white/80 
                     shadow-lg shadow-black/5"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-xl font-bold text-slate-900">
              LITH<span className="text-lithon-red">-</span>ON
            </span>
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link
              href="/about"
              className="text-slate-700 hover:text-lithon-blue transition-colors"
            >
              About
            </Link>
            <Link
              href="/solutions"
              className="text-slate-700 hover:text-lithon-blue transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/products"
              className="text-slate-700 hover:text-lithon-blue transition-colors"
            >
              Products
            </Link>
            <Link
              href="/applications"
              className="text-slate-700 hover:text-lithon-blue transition-colors"
            >
              Applications
            </Link>
            <Link
              href="/resources"
              className="text-slate-700 hover:text-lithon-blue transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-lithon-blue transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="tel:+917000013009"
              className="text-sm font-semibold text-slate-700 hover:text-lithon-blue transition-colors"
            >
              +91-7000013009
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 
                         px-5 py-2.5 rounded-full 
                         bg-lithon-blue hover:bg-lithon-blue/90 
                         text-white text-sm font-semibold 
                         transition-colors shadow-md"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Hero Copy */}
            <div className="space-y-8 pt-24 lg:pt-0">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-lithon-red animate-pulse" />
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Lith-On Bharat Energy
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-slate-900 leading-[1.05]">
                Industrial BESS
                <br />
                <span className="font-normal text-slate-900">for a Cleaner,</span>
                <br />
                <span className="font-semibold text-lithon-blue">Resilient India</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl">
                Advanced Battery Energy Storage Systems that ensure reliable power, lower energy costs, and a low-carbon future for industries, campuses, and critical infrastructure.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 
                             px-6 py-3.5 rounded-full 
                             bg-lithon-blue hover:bg-lithon-blue/90 
                             text-white text-sm font-semibold 
                             transition-all shadow-lg hover:shadow-xl
                             min-h-[50px]"
                >
                  Talk to an Expert
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 
                             px-6 py-3.5 rounded-full 
                             bg-white/90 hover:bg-white backdrop-blur-md 
                             border border-slate-200/60 
                             text-slate-900 text-sm font-semibold 
                             transition-all
                             min-h-[50px]"
                >
                  <Play className="h-4 w-4" />
                  Watch Overview
                </button>
              </div>
            </div>

            {/* Right Column: BESS Product Visual */}
            <div className="hidden lg:flex items-end justify-center relative h-[500px]">
              {/* Ground shadow for product */}
              <div className="absolute bottom-0 w-[80%] h-8 bg-slate-900/20 rounded-full blur-2xl" />
              
              {/* BESS Product Image */}
              <div className="relative w-full h-full flex items-end justify-center">
                <div className="relative w-full max-w-[480px] aspect-[1225/808]">
                  <Image
                    src="/images/hero-sec/bess-shelter-anchor.webp"
                    alt="Lith-On Industrial BESS Cabinet System"
                    fill
                    priority
                    className="object-contain object-bottom drop-shadow-2xl"
                    sizes="(max-width: 1024px) 50vw, 600px"
                  />
                </div>
              </div>

              {/* Floating Technical Badge */}
              <div className="absolute top-12 right-0 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/60 p-5 shadow-xl max-w-[240px]">
                <div className="flex items-center gap-2 text-xs font-semibold text-lithon-blue border-b border-slate-200/60 pb-2.5 mb-2.5">
                  <Zap className="h-4 w-4" aria-hidden="true" />
                  <span>MAGNA-C&I 260 kWh</span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Sub-10ms UPS switchover • 60°C ambient tolerance • IEC 61508 certified
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section: Spec Cards (Left) + Industry Badges (Right) */}
          <div className="absolute bottom-8 left-0 right-0 px-6 sm:px-10 flex items-end justify-between gap-12 max-w-7xl mx-auto">
            {/* Left: Spec Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {/* Card 1: UPS Switching */}
              <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/60 p-5 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-lithon-blue/10">
                    <Zap className="h-5 w-5 text-lithon-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">Sub-10ms</div>
                    <div className="text-xs text-slate-600 font-medium mt-0.5">
                      UPS Switching
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Heat Rating */}
              <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/60 p-5 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-lithon-red/10">
                    <Thermometer className="h-5 w-5 text-lithon-red" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">60°C</div>
                    <div className="text-xs text-slate-600 font-medium mt-0.5">
                      Heat Rating
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Cycles */}
              <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/60 p-5 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-600/10">
                    <RotateCcw className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">6,000+</div>
                    <div className="text-xs text-slate-600 font-medium mt-0.5">
                      Cycles
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Industry Badges with hover effect */}
            <div className="hidden lg:flex items-center gap-3">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                const isHovered = hoveredIndustry === industry.id;
                
                return (
                  <a
                    key={industry.id}
                    href={industry.href}
                    className={`
                      group relative flex flex-col items-center justify-center
                      w-16 h-16 rounded-2xl
                      backdrop-blur-xl border
                      transition-all duration-300 ease-out
                      ${
                        isHovered
                          ? "bg-white/95 border-lithon-blue/40 shadow-2xl shadow-lithon-blue/20 scale-110 -translate-y-2"
                          : "bg-white/60 border-white/40 shadow-lg hover:bg-white/70 hover:scale-105"
                      }
                    `}
                    onMouseEnter={() => setHoveredIndustry(industry.id)}
                    onMouseLeave={() => setHoveredIndustry(null)}
                    aria-label={`View ${industry.label} applications`}
                    style={{
                      transitionDelay: isHovered ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    <Icon
                      className={`
                        h-6 w-6 transition-all duration-300
                        ${isHovered ? "text-lithon-blue scale-110" : "text-slate-700"}
                      `}
                      aria-hidden="true"
                    />
                    
                    {/* Label on hover - appears below the badge */}
                    <div
                      className={`
                        absolute top-full mt-3 whitespace-nowrap
                        px-3 py-1.5 rounded-lg
                        bg-white/95 backdrop-blur-xl border border-white/60
                        text-xs font-semibold text-slate-900
                        shadow-xl
                        transition-all duration-300 origin-top
                        ${
                          isHovered
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                        }
                      `}
                    >
                      {industry.label}
                      
                      {/* Arrow pointer */}
                      <div
                        className="absolute bottom-full left-1/2 -translate-x-1/2
                                   w-0 h-0 
                                   border-l-[6px] border-l-transparent
                                   border-b-[8px] border-b-white/95
                                   border-r-[6px] border-r-transparent"
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
