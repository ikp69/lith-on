"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play,
  Cpu
} from "lucide-react";
import { AmbientLightCanvas } from "@/components/ui/AmbientLightCanvas";
import { SECTORS_HERO_DATA, HERO_TICKER_ITEMS } from "@/data/sectorsHero";

const SLIDE_DURATION_MS = 6000;

export function SectorHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentSector = SECTORS_HERO_DATA[activeIndex] || SECTORS_HERO_DATA[0];

  const goToSlide = useCallback((index: number) => {
    setActiveIndex((index + SECTORS_HERO_DATA.length) % SECTORS_HERO_DATA.length);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  // Automatic slide advancement timer
  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SECTORS_HERO_DATA.length);
    }, SLIDE_DURATION_MS);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, isHovered]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Lith-On BESS Sector Applications Carousel"
      className="relative mx-3 sm:mx-6 mt-2 overflow-hidden rounded-3xl min-h-[82dvh] lg:min-h-[88dvh] lg:max-h-[920px] flex flex-col justify-between shadow-2xl border border-gray-200/50 bg-slate-950"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* 1. SECTOR BACKGROUND IMAGES CROSSFADE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {SECTORS_HERO_DATA.map((sector, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={sector.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={sector.image}
                alt={sector.alt}
                fill
                priority={index === 0}
                className="object-cover object-center scale-[1.01] transition-transform duration-[6000ms] ease-out"
                sizes="(max-width: 1280px) 100vw, 1920px"
              />
            </div>
          );
        })}

        {/* Architectural Contrast Overlay ensuring 100% WCAG AA text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/40" />
        <div className="absolute inset-0 bg-radial-[ellipse_at_top_left] from-slate-950/40 via-transparent to-transparent" />
        <AmbientLightCanvas className="z-10 opacity-35" />
      </div>

      {/* Top Spacer for floating capsule header */}
      <div className="pt-20 sm:pt-24" />

      {/* 2. MAIN SECTOR CONTENT OVERLAY */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-10">
        <div className="max-w-3xl space-y-4">
          {/* Live Indicator Pill & Sector Badge */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3.5 py-1 text-xs font-medium text-white shadow-sm">
              <span className="h-2 w-2 rounded-full bg-lithon-red motion-safe:animate-pulse" />
              <span>{currentSector.category}</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-mono text-cyan-300">
              <Cpu className="h-3 w-3 text-cyan-400" />
              <span>{currentSector.hardwareBadge}</span>
            </div>
          </div>

          {/* Headline with Dynamic Highlight */}
          <div className="text-white">
            <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-blue-200/90 block mb-1">
              Lith-On Bharat Energy • Sector Sizing
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.15] text-balance">
              {currentSector.headline} <br />
              <span className="font-semibold text-white drop-shadow-sm">
                {currentSector.highlightText}
              </span>
            </h1>
          </div>

          {/* Concise Value Proposition */}
          <p className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-2xl text-pretty drop-shadow-sm">
            {currentSector.description}
          </p>

          {/* Key Metric Snapshot + CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <div className="flex items-center gap-3 pr-2 border-r border-white/25">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-300">
                {currentSector.keyMetric}
              </div>
              <div className="text-xs text-slate-300 leading-tight max-w-[90px]">
                {currentSector.metricLabel}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={currentSector.primaryCtaHref}
                className="btn-primary"
              >
                <span>{currentSector.primaryCtaText}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href={currentSector.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-colors min-h-[44px]"
              >
                <span>{currentSector.secondaryCtaText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CONTINUOUS TEXT MOVING ACROSS SCREEN (HARDWARE-ACCELERATED TICKER) */}
      <div 
        className="relative z-10 w-full mt-6 bg-slate-950/75 backdrop-blur-md border-y border-white/15 py-2.5 overflow-hidden"
        aria-label="Live BESS sector deploy highlights"
      >
        <div className="animate-ticker flex items-center">
          {/* First set of items */}
          {HERO_TICKER_ITEMS.map((item) => (
            <div
              key={`ticker-a-${item.sector}`}
              className="inline-flex items-center gap-2.5 mx-6 text-xs text-slate-200 shrink-0 font-medium tracking-wide"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lithon-red" />
              <span className="font-semibold text-white uppercase tracking-wider">{item.sector}:</span>
              <span className="text-slate-300">{item.highlight}</span>
              <span className="rounded bg-white/15 border border-white/20 px-2 py-0.5 text-[11px] font-mono text-blue-200">
                {item.spec}
              </span>
            </div>
          ))}

          {/* Duplicate set for seamless continuous loop */}
          {HERO_TICKER_ITEMS.map((item) => (
            <div
              key={`ticker-b-${item.sector}`}
              className="inline-flex items-center gap-2.5 mx-6 text-xs text-slate-200 shrink-0 font-medium tracking-wide"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lithon-red" />
              <span className="font-semibold text-white uppercase tracking-wider">{item.sector}:</span>
              <span className="text-slate-300">{item.highlight}</span>
              <span className="rounded bg-white/15 border border-white/20 px-2 py-0.5 text-[11px] font-mono text-blue-200">
                {item.spec}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. INTERACTIVE SECTOR SELECTOR TABS WITH PROGRESS LINE */}
      <div className="relative z-10 w-full px-4 sm:px-10 pt-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-white/15">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                Explore Target Sectors:
              </span>
              <span className="text-xs font-mono text-white">
                {String(activeIndex + 1).padStart(2, "0")} / {String(SECTORS_HERO_DATA.length).padStart(2, "0")}
              </span>
            </div>

            {/* Carousel Navigation & Pause Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                aria-label={isPlaying ? "Pause automatic slide rotation" : "Resume automatic slide rotation"}
              >
                {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              </button>

              <button
                type="button"
                onClick={prevSlide}
                className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                aria-label="Previous sector slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                aria-label="Next sector slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Interactive Sector Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-2.5">
            {SECTORS_HERO_DATA.map((sector, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={sector.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`group relative text-left rounded-xl p-2.5 transition-all ${
                    isActive
                      ? "bg-white/20 border border-white/40 shadow-sm"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-lithon-red" />
                    )}
                  </div>
                  <div className={`text-xs font-semibold mt-1 truncate ${isActive ? "text-white" : "text-slate-200"}`}>
                    {sector.tabLabel}
                  </div>

                  {/* Active Slide Progress Line */}
                  {isActive && isPlaying && !isHovered && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 overflow-hidden rounded-b-xl">
                      <div 
                        className="h-full bg-lithon-red"
                        style={{
                          animation: `progressFill ${SLIDE_DURATION_MS}ms linear infinite`
                        }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. BOTTOM ARCHITECTURAL TRUST METRICS STRIP */}
      <div className="relative z-10 w-full px-4 sm:px-10 pb-5 pt-4">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 p-3.5 sm:p-4 text-white">
            <div className="text-xs font-medium text-slate-300">Throughput</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white mt-0.5">250 MWh</div>
            <div className="text-xs text-blue-200 mt-0.5">Noida 20,000 sq.ft. Plant</div>
          </div>

          <div className="rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 p-3.5 sm:p-4 text-white">
            <div className="text-xs font-medium text-slate-300">UPS Switchover</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-300 mt-0.5">&lt;10 ms</div>
            <div className="text-xs text-slate-200 mt-0.5">Zero Grid Interruption</div>
          </div>

          <div className="rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 p-3.5 sm:p-4 text-white">
            <div className="text-xs font-medium text-slate-300">Thermal Shield</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-lithon-red mt-0.5">60°C Rating</div>
            <div className="text-xs text-slate-200 mt-0.5">IceBattery® Ceramic Barrier</div>
          </div>

          <div className="rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 p-3.5 sm:p-4 text-white">
            <div className="text-xs font-medium text-slate-300">Global Base</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-300 mt-0.5">500+ MWh</div>
            <div className="text-xs text-slate-200 mt-0.5">Deployed in 25+ Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
}
