'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowRight,
  GraduationCap,
  Factory,
  Building2,
  HeartPulse,
  Zap,
  Server,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { MagneticButton } from '@/components/animation/MagneticButton';
import { INDUSTRIES_DATA } from '@/data/industries';

const SECTOR_ICONS: { [key: string]: React.ComponentType<{ className?: string; strokeWidth?: number }> } = {
  education: GraduationCap,
  manufacturing: Factory,
  commercial: Building2,
  healthcare: HeartPulse,
  ev_charging: Zap,
  data_centers: Server,
};

export function IndustriesInteractiveShowcase() {
  const [selectedSlug, setSelectedSlug] = useState<string>(INDUSTRIES_DATA[0].slug);

  const activeSector = INDUSTRIES_DATA.find((s) => s.slug === selectedSlug) || INDUSTRIES_DATA[0];
  const Icon = SECTOR_ICONS[activeSector.id] || Building2;

  return (
    <section className="px-4 sm:px-6 relative" id="industries">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1 text-xs font-mono font-semibold text-lithon-blue mb-3">
              <Sparkles className="h-3.5 w-3.5 text-lithon-red" />
              <span>Tailored Blueprints • Sector-Specific Load Profiles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-950 tracking-tight leading-tight text-balance">
              Purpose-Engineered for <br className="hidden sm:block" />
              <span className="font-semibold text-lithon-blue">
                Six Demanding Enterprise Sectors.
              </span>
            </h2>
          </div>

          <p className="text-sm text-gray-600 max-w-lg font-normal leading-relaxed text-pretty">
            Every sector encounters unique electrical dynamics—from hospital surgical ICU continuity to factory high-surge motor startups. Explore our pre-commissioned BESS blueprints.
          </p>
        </div>

        {/* Large Interactive Split Showcase */}
        <div className="rounded-3xl border border-gray-200/90 bg-white shadow-xs overflow-hidden grid lg:grid-cols-12">
          
          {/* Left Column: Interactive Vertical Sector List */}
          <div className="lg:col-span-5 p-4 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-between space-y-2">
            <div className="space-y-1.5" role="tablist" aria-label="Target Enterprise Sectors">
              {INDUSTRIES_DATA.map((sector) => {
                const isSelected = sector.slug === selectedSlug;
                const SectorIcon = SECTOR_ICONS[sector.id] || Building2;

                return (
                  <button
                    key={sector.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedSlug(sector.slug)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl transition-all flex items-start gap-3.5 active:scale-[0.98] ${
                      isSelected
                        ? 'bg-blue-50/80 border border-blue-200 text-lithon-blue shadow-2xs'
                        : 'hover:bg-gray-50 text-gray-700 border border-transparent'
                    }`}
                  >
                    <div
                      className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-lithon-blue text-white shadow-2xs'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <SectorIcon className="h-4 w-4" strokeWidth={1.5} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-gray-950">
                          {sector.shortTitle}
                        </span>
                        <span
                          className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-full tabular-nums ${
                            isSelected
                              ? 'bg-lithon-blue text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {sector.typicalRoi}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {sector.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-gray-100 mt-2">
              <Link
                href="/industries"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gray-100 hover:bg-gray-200/80 active:scale-[0.98] px-4 py-2.5 text-sm font-semibold text-gray-800 transition-all min-h-[44px]"
              >
                <span>View All 6 Industry Blueprints</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Large Dynamic Visual Window */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] bg-slate-950 text-white p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
            
            {/* Background Image with Smooth Crossfade */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={activeSector.image}
                alt={activeSector.title}
                fill
                className="object-cover object-center transform scale-102 motion-safe:transition-all motion-safe:duration-700"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/25" />
            </div>

            {/* Top Tag & Floating Hardware Badge */}
            <div className="relative z-10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 border border-white/20 text-xs font-semibold text-white">
                <Icon className="h-4 w-4 text-blue-300" strokeWidth={1.5} />
                <span>{activeSector.title}</span>
              </div>

              <div className="rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-400/50 px-3 py-1 text-xs font-mono font-bold text-emerald-300 tabular-nums">
                {activeSector.typicalRoi}
              </div>
            </div>

            {/* Bottom Content Card with Motion Reveal */}
            <motion.div
              key={activeSector.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 p-5 sm:p-6 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-white/15 space-y-3"
            >
              <div>
                <span className="text-xs font-mono text-blue-300 font-semibold block mb-1">
                  Target Hardware: {activeSector.recommendedHardware}
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {activeSector.tagline}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {activeSector.solution}
              </p>

              {/* Verified Sector Highlights */}
              <div className="pt-2 border-t border-white/10 space-y-1.5">
                {activeSector.highlights.slice(0, 2).map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <MagneticButton href={`/industries#${activeSector.slug}`} strength={0.25}>
                  <span className="min-h-[40px] inline-flex items-center gap-2 rounded-lg bg-lithon-red-ink hover:bg-lithon-red-ink-hover active:scale-[0.98] px-4 py-2 text-xs font-semibold text-white shadow-2xs transition-all focus-visible:ring-2 focus-visible:ring-lithon-red">
                    <span>Read Sector Blueprint</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </MagneticButton>
                <MagneticButton href={`/contact?type=assessment&sector=${activeSector.slug}`} strength={0.25}>
                  <span className="min-h-[40px] inline-flex items-center gap-2 rounded-lg bg-white/15 hover:bg-white/25 active:scale-[0.98] px-4 py-2 text-xs font-semibold text-white transition-colors focus-visible:ring-2 focus-visible:ring-white">
                    <span>Request Sizing</span>
                  </span>
                </MagneticButton>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
