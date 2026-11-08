"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Cpu,
  ShieldCheck,
  Zap,
  ChevronLeft,
  ChevronRight,
  Layers,
  Home,
  Hospital,
  Building2,
  GraduationCap,
  Factory,
} from "lucide-react";
import { HERO_SCENES } from "@/data/heroScenes";

/* ─── Reduced-motion helpers ──────────────────────────────────── */
function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => { };
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function getServerReducedMotionSnapshot() {
  return false;
}

/* ─── Scene environment tints (subtle colour-grading per scene) ─ */
const SCENE_TINTS = [
  "from-emerald-950/30 via-slate-950/20 to-sky-950/20",   // residential — lush green
  "from-slate-950/30 via-blue-950/20 to-slate-950/20",     // hospital — cool clinical
  "from-blue-950/30 via-slate-950/20 to-indigo-950/20",    // commercial — corporate
  "from-amber-950/20 via-slate-950/20 to-emerald-950/20",  // university — warm academic
  "from-slate-950/30 via-orange-950/15 to-slate-950/20",   // industrial — amber/steel
];

const SECTOR_LABELS = [
  "01 — Residential",
  "02 — Healthcare",
  "03 — Commercial",
  "04 — Campus",
  "05 — Industrial",
];

const SECTOR_ICONS = [
  Home,
  Hospital,
  Building2,
  GraduationCap,
  Factory,
];

/* ─── Curved arc horizontal shift offsets (aligns with background curve) ─ */
const CURVE_OFFSETS = [
  "clamp(12px, 1.5vw, 22px)",
  "clamp(55px, 6.2vw, 92px)",
  "clamp(75px, 8.2vw, 118px)",
  "clamp(55px, 6.2vw, 92px)",
  "clamp(12px, 1.5vw, 22px)",
];

export function HeroPinnedSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Default to Commercial (03) as shown in reference design

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  const durationClass = reducedMotion ? "duration-0" : "duration-700";
  const textDurationClass = reducedMotion ? "duration-0" : "duration-500";

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % HERO_SCENES.length);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveIndex(
        (prev) => (prev - 1 + HERO_SCENES.length) % HERO_SCENES.length
      );
    }
  };

  return (
    <section
      className="relative w-full h-[100dvh] p-2 sm:p-2 lg:p-2 xl:p-2 select-none"
      aria-label="Lith-On BESS Sector Applications — Interactive Showcase"
      onKeyDown={handleKeyDown}
    >
      {/* ═══ ROUNDED FLOATING ARCHITECTURAL HERO CARD ═══ */}
      <div className="relative w-full h-full rounded-2xl sm:rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-2xl border border-white/15 bg-slate-950">
        {/* ── LAYER 0: Full-bleed background environments (smooth hover-crossfade) ── */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          {HERO_SCENES.map((s, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={s.id}
                className={`scene-bg absolute inset-0 transition-all ${durationClass} ease-out will-change-[opacity,transform] ${isActive
                    ? "opacity-100 scale-100 z-[1]"
                    : "opacity-0 scale-[1.04] pointer-events-none z-0"
                  }`}
              >
                <Image
                  src={s.backgroundImage}
                  alt={s.alt}
                  fill
                  priority={i === 0 || i === 2}
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
            );
          })}
        </div>

        {/* ── LAYER 1: Scene-specific colour tint ── */}
        <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
          {SCENE_TINTS.map((tint, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={`tint-${tint}`}
                className={`scene-tint absolute inset-0 bg-gradient-to-br ${tint} transition-opacity ${durationClass} ease-out will-change-[opacity] ${isActive ? "opacity-100" : "opacity-0"
                  }`}
              />
            );
          })}
        </div>

        {/* ── LAYER 2: Architectural gradient overlays for text readability ── */}
        <div className="absolute inset-0 z-[2] pointer-events-none" aria-hidden="true">
          {/* Left: strong gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
          {/* Bottom: ground fade into BESS plinth */}
          <div className="absolute bottom-0 inset-x-0 h-[45%] bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
          {/* Top: subtle header fade */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />
        </div>

        {/* ── LAYER 3: BESS product — composited on the background plinth ── */}
        <div className="absolute bottom-0 inset-x-0 z-[5] pointer-events-none flex justify-end pr-[8%] sm:pr-[10%] lg:pr-[12%]">
          {/* Ground-contact shadow for depth */}
          <div
            className="bess-shadow absolute bottom-0 w-[45%] max-w-[450px] h-8 bg-black/50 rounded-[50%] blur-2xl will-change-transform"
            style={{ opacity: 0.7, transform: "translateX(2%)" }}
          />

          {/* BESS shelter — sized proportionally to match natural scale in environment */}
          <div
            className="bess-anchor relative will-change-transform"
            style={{
              width: "clamp(280px, 40vw, 640px)",
            }}
          >
            <div className="relative w-full aspect-[1225/808]">
              <Image
                src="/images/hero-sec/bess-shelter-anchor.webp"
                alt="Lith-On Industrial BESS Shelter with LĒTH-ON Battery Cabinets composited onto on-site concrete plinth"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 920px"
              />
            </div>
          </div>
        </div>

        {/* ── LAYER 4: Left editorial content stack ── */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto max-w-7xl w-full px-6 sm:px-10 flex flex-col justify-center h-full pt-28 sm:pt-32 pb-14 sm:pb-16">
            <div className="relative w-full lg:max-w-[520px] xl:max-w-[580px] min-h-[300px]">
              {HERO_SCENES.map((s, i) => {
                const isActive = i === activeIndex;
                return (
                  <div
                    key={`text-${s.id}`}
                    className={`scene-text absolute inset-0 flex flex-col justify-center space-y-4 xl:space-y-5 transition-all ${textDurationClass} ease-out will-change-[opacity,transform] ${isActive
                        ? "opacity-100 translate-y-0 pointer-events-auto z-10"
                        : "opacity-0 -translate-y-4 pointer-events-none z-0"
                      }`}
                    aria-hidden={!isActive}
                  >
                    {/* Category + Hardware tags */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 px-3.5 py-1.5 text-xs font-medium text-white/90 shadow-lg">
                        <span className="h-2 w-2 rounded-full bg-lithon-red motion-safe:animate-pulse" />
                        <span className="tracking-wide">{s.category}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-black/30 backdrop-blur-xl border border-white/10 px-3 py-1.5 text-xs font-mono text-cyan-300/90">
                        <Cpu className="h-3 w-3 text-cyan-400/80" aria-hidden="true" />
                        <span>{s.hardwareBadge}</span>
                      </div>
                    </div>

                    {/* Hero headline */}
                    <div>
                      <span className="text-[11px] sm:text-xs font-medium tracking-[0.15em] uppercase text-white/50 block mb-2">
                        Lith-On Bharat Energy
                      </span>
                      <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.5rem] font-light tracking-tight text-white leading-[1.1] text-balance">
                        {s.headline}
                        <br />
                        <span className="font-semibold">{s.highlightText}</span>
                      </h1>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-[15px] text-white/80 font-normal leading-relaxed max-w-md text-pretty">
                      {s.description}
                    </p>

                    {/* Metric + CTAs */}
                    <div className="flex flex-wrap items-center gap-5 pt-1">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl sm:text-3xl font-semibold font-mono text-white">
                          {s.keyMetric}
                        </div>
                        <div className="text-[11px] text-white/60 leading-tight max-w-[100px] border-l border-white/20 pl-3">
                          {s.metricLabel}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <Link href={s.primaryCtaHref} className="btn-primary">
                          <span>{s.primaryCtaText}</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                        <Link
                          href={s.secondaryCtaHref}
                          className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-colors min-h-[44px]"
                        >
                          <span>{s.secondaryCtaText}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── LAYER 5: Floating telemetry badge (upper-right) ── */}
        <div className="absolute top-28 sm:top-32 right-6 sm:right-8 lg:right-10 z-10 w-[260px] sm:w-[300px] hidden lg:block">
          <div className="relative min-h-[80px]">
            {HERO_SCENES.map((s, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={`telemetry-${s.id}`}
                  className={`scene-telemetry absolute inset-x-0 top-0 rounded-2xl bg-black/45 backdrop-blur-2xl border border-white/15 p-4 text-white shadow-2xl transition-all ${textDurationClass} ease-out will-change-[opacity,transform] ${isActive
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                    }`}
                  aria-hidden={!isActive}
                >
                  <div className="flex items-center justify-between text-[11px] border-b border-white/15 pb-2.5 mb-2.5">
                    <span className="font-mono text-cyan-300/90 flex items-center gap-1.5 font-medium">
                      <Zap
                        className="h-3.5 w-3.5 text-cyan-400/80"
                        aria-hidden="true"
                      />
                      {s.hardwareBadge}
                    </span>
                    <span className="text-emerald-400/80 font-mono text-[10px] flex items-center gap-1">
                      <ShieldCheck
                        className="h-3 w-3 text-emerald-400/70"
                        aria-hidden="true"
                      />
                      Active
                    </span>
                  </div>
                  <div className="text-[11px] text-white/70 leading-snug font-medium">
                    {s.specs}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── LAYER 6: Right curved badges (desktop hover-based navigation) ── */}
        <nav
          aria-label="Sector quick navigation"
          className="absolute top-[53%] -translate-y-1/2 right-4 sm:right-6 lg:right-8 xl:right-10 z-20 hidden lg:flex flex-col items-end gap-3 xl:gap-3.5 pointer-events-auto"
        >
          {HERO_SCENES.map((s, i) => {
            const isActive = i === activeIndex;
            const Icon = SECTOR_ICONS[i];
            const offset = CURVE_OFFSETS[i];

            return (
              <button
                key={`badge-${s.id}`}
                type="button"
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                aria-label={`Switch to sector ${s.indexNumber} — ${s.tabLabel}`}
                aria-pressed={isActive}
                className={`group relative flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-medium transition-all ${reducedMotion ? "duration-0" : "duration-300"
                  } ease-out cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-red ${isActive
                    ? "bg-white text-slate-950 font-bold shadow-2xl shadow-black/40 scale-105 border-white"
                    : "bg-black/50 hover:bg-black/75 text-white/80 hover:text-white border-white/20 hover:border-white/40 backdrop-blur-xl shadow-lg hover:scale-102"
                  } border`}
                style={{
                  transform: `translateX(calc(-1 * (${offset}))) ${isActive ? "scale(1.05)" : "scale(1)"}`,
                }}
              >
                {/* Status indicator dot */}
                <span
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${isActive
                      ? "bg-lithon-red motion-safe:animate-pulse"
                      : "bg-white/40 group-hover:bg-cyan-400"
                    }`}
                />
                <Icon
                  className={`h-3.5 w-3.5 transition-colors duration-300 shrink-0 ${isActive
                      ? "text-lithon-blue"
                      : "text-white/70 group-hover:text-cyan-300"
                    }`}
                  aria-hidden="true"
                />
                <span className="whitespace-nowrap tracking-wide">
                  {SECTOR_LABELS[i]}
                </span>
              </button>
            );
          })}
        </nav>

        {/* ── LAYER 7: Bottom navigation bar & mobile pills ── */}
        <div className="absolute bottom-0 inset-x-0 z-20">
          <div className="bg-black/50 backdrop-blur-2xl border-t border-white/10 px-6 sm:px-10 py-3 sm:py-3.5">
            <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Scene indicator */}
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-semibold flex items-center gap-1.5">
                  <Layers
                    className="h-3.5 w-3.5 text-lithon-red"
                    aria-hidden="true"
                  />
                  Sector:
                </span>
                <span className="text-sm font-mono text-white font-bold tabular-nums">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(HERO_SCENES.length).padStart(2, "0")}
                </span>
                <span className="text-[11px] text-white/50 hidden xl:inline-block ml-1">
                  Hover buttons on right to explore environments
                </span>
              </div>

              {/* Mobile/Tablet pills (< lg screens) */}
              <div className="flex lg:hidden flex-wrap items-center justify-center gap-1.5">
                {HERO_SCENES.map((_s, i) => {
                  const isActive = i === activeIndex;
                  const Icon = SECTOR_ICONS[i];
                  return (
                    <button
                      key={`mobile-pill-${_s.id}`}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${isActive
                          ? "bg-white text-slate-950 font-bold shadow-lg shadow-white/10 scale-105"
                          : "bg-white/10 hover:bg-white/20 text-white/75 border border-white/10"
                        }`}
                      aria-pressed={isActive}
                      aria-label={`Switch to sector ${SECTOR_LABELS[i]}`}
                    >
                      <Icon className="h-3 w-3" aria-hidden="true" />
                      <span>{SECTOR_LABELS[i]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Prev/Next arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      (prev) => (prev - 1 + HERO_SCENES.length) % HERO_SCENES.length
                    )
                  }
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-red"
                  aria-label="Previous sector scene"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) => (prev + 1) % HERO_SCENES.length)
                  }
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-red"
                  aria-label="Next sector scene"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
