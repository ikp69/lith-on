'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { IsometricCity } from './IsometricCity';
import { SectorCard } from './SectorCard';
import {
  CAMERA_WAYPOINTS,
  CANVAS,
  OVERVIEW_CONTENT,
  SECTORS,
} from './city-data';
import './smart-city.css';

export function SmartCityHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const cameraRef = useRef<SVGGElement>(null);

  const [activeSectorId, setActiveSectorId] = useState<string | null>(null);
  const [hoveredSectorId, setHoveredSectorId] = useState<string | null>(null);

  const currentVbRef = useRef({
    vx: 0,
    vy: 0,
    vw: CANVAS.width,
    vh: CANVAS.height,
  });

  // Active sector metadata
  const activeSectorConfig =
    SECTORS.find((s) => s.id === activeSectorId) ?? null;

  // The effective sector illuminated in the 3D scene (hover preview or scroll focus)
  const effectiveSectorId = hoveredSectorId ?? activeSectorId;

  // Manual waypoint click handler
  const handleSelectSector = (sectorId: string | null) => {
    setActiveSectorId(sectorId);
    const targetIndex = sectorId
      ? CAMERA_WAYPOINTS.findIndex((w) => w.sectorId === sectorId)
      : 0;

    if (targetIndex >= 0) {
      const wp = CAMERA_WAYPOINTS[targetIndex];
      if (svgRef.current && wp) {
        gsap.killTweensOf(currentVbRef.current);
        gsap.to(currentVbRef.current, {
          vx: wp.vx,
          vy: wp.vy,
          vw: wp.vw,
          vh: wp.vh,
          duration: 1.2,
          ease: 'power2.out',
          onUpdate: () => {
            if (svgRef.current) {
              svgRef.current.setAttribute(
                'viewBox',
                `${currentVbRef.current.vx.toFixed(1)} ${currentVbRef.current.vy.toFixed(1)} ${currentVbRef.current.vw.toFixed(1)} ${currentVbRef.current.vh.toFixed(1)}`,
              );
            }
          },
        });
      }
    }
  };

  // GSAP ScrollTrigger setup
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Initial viewBox
    if (svgRef.current) {
      const initialWp = CAMERA_WAYPOINTS[0];
      if (initialWp) {
        svgRef.current.setAttribute(
          'viewBox',
          `${initialWp.vx} ${initialWp.vy} ${initialWp.vw} ${initialWp.vh}`,
        );
      }
    }

    // Waypoint segments map to scroll progress
    // 0 -> 0.08: Overview
    // 0.08 -> 0.22: C&I
    // 0.22 -> 0.38: Cold Storage
    // 0.38 -> 0.54: EV Charging
    // 0.54 -> 0.70: University
    // 0.70 -> 0.86: Residential
    // 0.86 -> 1.0: Finale Overview
    const waypoints = CAMERA_WAYPOINTS;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=3500', // Scroll distance for 5 sectors
      pin: pinnedRef.current,
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;

        // Dynamic segment mapping based on waypoints length
        const totalSegments = waypoints.length - 1;
        const rawIdx = Math.min(
          Math.floor(p * totalSegments),
          totalSegments - 1,
        );
        const segProgress = p * totalSegments - rawIdx;

        const fromWp = waypoints[rawIdx] ?? waypoints[0]!;
        const nextIdx = Math.min(rawIdx + 1, waypoints.length - 1);
        const toWp = waypoints[nextIdx] ?? fromWp;

        // Smooth ease progress inside transition zone (first 40% transitions, 60% holds focus)
        let interp = 0;
        if (segProgress < 0.4) {
          interp = segProgress / 0.4;
          interp = interp * interp * (3 - 2 * interp);
        } else {
          interp = 1;
        }

        // Interpolate camera viewBox
        const targetWp = interp >= 0.5 ? toWp : fromWp;
        const currentSector = targetWp.sectorId;

        setActiveSectorId((prev) =>
          prev !== currentSector ? currentSector : prev,
        );

        const targetVx = fromWp.vx + (toWp.vx - fromWp.vx) * interp;
        const targetVy = fromWp.vy + (toWp.vy - fromWp.vy) * interp;
        const targetVw = fromWp.vw + (toWp.vw - fromWp.vw) * interp;
        const targetVh = fromWp.vh + (toWp.vh - fromWp.vh) * interp;

        currentVbRef.current.vx += (targetVx - currentVbRef.current.vx) * 0.2;
        currentVbRef.current.vy += (targetVy - currentVbRef.current.vy) * 0.2;
        currentVbRef.current.vw += (targetVw - currentVbRef.current.vw) * 0.2;
        currentVbRef.current.vh += (targetVh - currentVbRef.current.vh) * 0.2;

        if (svgRef.current) {
          svgRef.current.setAttribute(
            'viewBox',
            `${currentVbRef.current.vx.toFixed(1)} ${currentVbRef.current.vy.toFixed(1)} ${currentVbRef.current.vw.toFixed(1)} ${currentVbRef.current.vh.toFixed(1)}`,
          );
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-canvas-offwhite"
      id="smart-city-experience"
    >
      {/* Pinned Screen Viewport with uniform perimeter margins */}
      <div
        ref={pinnedRef}
        className="relative h-screen w-full p-2 sm:p-3 md:p-3.5 bg-canvas-offwhite select-none flex flex-col justify-center overflow-hidden"
      >
        {/* Framed Interactive Smart City Window (unobstructed rounded viewport) */}
        <div className="relative h-full w-full rounded-2xl sm:rounded-[24px] overflow-hidden border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-slate-900 ring-1 ring-black/5">
          {/* Isometric SVG Canvas */}
          <div className="absolute inset-0 w-full h-full">
            <IsometricCity
              theme="day"
              activeSector={effectiveSectorId}
              onSelectSector={(id) => handleSelectSector(id)}
              onHoverSector={(id) => setHoveredSectorId(id)}
              svgRef={svgRef}
              cameraRef={cameraRef}
            />
          </div>

          {/* Ambient Top Shadow / Vignette for header contrast (subtle, keeps sun radiant) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-900/15 via-slate-900/5 to-transparent" />

          {/* ============================================================= */}
          {/* TOP-RIGHT CERTIFICATION BADGE (Subtle & understated)          */}
          {/* ============================================================= */}
          <div className="absolute top-16 sm:top-20 right-4 sm:right-6 pointer-events-none z-20 hidden md:flex">
            <div className="pointer-events-auto flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-2xs text-[10px] font-medium text-gray-500">
              <span className="h-1.5 w-1.5 rounded-full bg-lithon-blue" />
              <span>IEC 61508 • IEC 61850 • BIS</span>
            </div>
          </div>

          {/* ============================================================= */}
          {/* EDITORIAL HERO SECTION (Apple-like whitespace & typography)    */}
          {/* ============================================================= */}
          <div
            className={`absolute top-16 sm:top-24 md:top-28 left-4 sm:left-8 md:left-12 max-w-sm sm:max-w-md lg:max-w-lg transition-all duration-700 pointer-events-none z-20 ${
              activeSectorId === null
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            <div className="pointer-events-auto p-6 sm:p-8 md:p-9 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xl border border-gray-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              {/* Eyebrow */}
              <div className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-lithon-blue uppercase mb-3">
                {OVERVIEW_CONTENT.eyebrow}
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-gray-950 leading-[1.18] mb-3 sm:mb-4">
                Powering India&apos;s{' '}
                <span className="font-semibold block text-gray-950 sm:inline">
                  Smart Energy Future.
                </span>
              </h1>

              {/* Subline */}
              <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-6 max-w-sm sm:max-w-md">
                {OVERVIEW_CONTENT.subline}
              </p>

              {/* Editorial CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={OVERVIEW_CONTENT.ctaHref}
                  className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full shadow-sm hover:shadow transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>{OVERVIEW_CONTENT.ctaText}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href={OVERVIEW_CONTENT.secondaryCtaHref}
                  className="btn-outline inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 transition-colors shadow-2xs"
                >
                  <span>{OVERVIEW_CONTENT.secondaryCtaText}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ============================================================= */}
          {/* SECTOR ARCHITECTURAL CARD (Focused Mode)                       */}
          {/* ============================================================= */}
          <div className="sector-card-layer absolute bottom-24 sm:bottom-20 right-4 sm:right-6 pointer-events-none z-20">
            <SectorCard
              sector={activeSectorConfig}
              visible={activeSectorConfig !== null}
              onClose={() => handleSelectSector(null)}
            />
          </div>

          {/* ============================================================= */}
          {/* REDESIGNED BOTTOM SECTOR SELECTOR                              */}
          {/* ============================================================= */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-7 inset-x-3 sm:inset-x-0 flex flex-col items-center gap-2 pointer-events-none z-20">
            {/* Scroll Hint */}
            <div className="scroll-hint-arrow hidden sm:flex items-center gap-1.5 text-[10px] font-medium text-gray-500 tracking-wider uppercase bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-gray-200/60 shadow-2xs">
              <Sparkles className="h-2.5 w-2.5 text-lithon-red" />
              <span>Scroll wheel navigates smart grid sectors</span>
            </div>

            {/* Interactive Ecosystem Selector */}
            <div className="pointer-events-auto flex flex-col items-center bg-white/95 backdrop-blur-xl border border-gray-200/80 shadow-[0_12px_36px_rgba(0,0,0,0.08)] rounded-2xl sm:rounded-full px-3 sm:px-5 py-2 max-w-full overflow-hidden transition-all duration-300">
              {/* Header Micro-title */}
              <div className="hidden sm:flex items-center gap-2 text-[10px] tracking-wider uppercase text-gray-500 font-medium mb-1">
                <span className="font-semibold text-gray-900">
                  THE LITH-ON ENERGY ECOSYSTEM
                </span>
                <span className="text-gray-300">•</span>
                <span>Distributed On-Site BESS Across Every Sector.</span>
              </div>

              {/* Category Pills Strip */}
              <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar max-w-full py-0.5">
                {/* Overview / All Button */}
                <button
                  type="button"
                  onClick={() => handleSelectSector(null)}
                  className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                    activeSectorId === null && hoveredSectorId === null
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-gray-600 hover:text-gray-950 hover:bg-gray-100/70'
                  }`}
                >
                  <span>Overview</span>
                </button>

                {/* Sector Category Pills */}
                {SECTORS.map((sec) => {
                  const isSelected = activeSectorId === sec.id;
                  const isHovered = hoveredSectorId === sec.id;
                  const isActive = isSelected || isHovered;

                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onMouseEnter={() => setHoveredSectorId(sec.id)}
                      onMouseLeave={() => setHoveredSectorId(null)}
                      onClick={() =>
                        handleSelectSector(isSelected ? null : sec.id)
                      }
                      className={`group relative flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'text-gray-600 hover:text-gray-950 hover:bg-gray-100/70'
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-transform duration-200 ${
                          isActive ? 'scale-125' : 'group-hover:scale-110'
                        }`}
                        style={{
                          backgroundColor: isActive ? '#FFFFFF' : sec.accent,
                        }}
                      />
                      <span>{sec.shortLabel ?? sec.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

