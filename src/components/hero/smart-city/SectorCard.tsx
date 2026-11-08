'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Factory,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Snowflake,
  X,
  Zap,
} from 'lucide-react';
import type { SectorConfig } from './city-data';

export interface SectorCardProps {
  sector: SectorConfig | null;
  visible: boolean;
  onClose?: () => void;
}

const ICON_MAP = {
  Factory,
  Snowflake,
  Zap,
  GraduationCap,
  Home,
  HeartPulse,
  Landmark,
} as const;

export function SectorCard({ sector, visible, onClose }: SectorCardProps) {
  if (!sector) {
    return null;
  }

  const IconComponent =
    ICON_MAP[sector.icon as keyof typeof ICON_MAP] ?? Factory;

  return (
    <div
      role="region"
      aria-live="polite"
      aria-label={`${sector.label} details`}
      className={`sector-card pointer-events-auto relative w-full max-w-[380px] sm:max-w-[420px] rounded-2xl p-5 sm:p-6 bg-white border border-gray-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out ${
        visible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
      }`}
    >
      {/* Top Header: Badge with Icon & Label, and Close button */}
      <div className="flex items-center justify-between gap-3 mb-3.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-xs font-semibold text-lithon-blue">
          <IconComponent className="h-3.5 w-3.5 text-lithon-blue" />
          <span className="uppercase tracking-wider text-[11px] font-bold">
            {sector.label}
          </span>
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
            aria-label="Close sector info"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Headline */}
      <h3 className="text-xl font-medium tracking-tight text-gray-950 mb-2 leading-snug">
        {sector.headline}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
        {sector.description}
      </p>

      {/* Metric Callout + Verified Hardware pill */}
      <div className="flex items-end justify-between gap-4 py-3.5 px-4 mb-4 rounded-xl bg-canvas-offwhite border border-gray-200/80">
        <div>
          <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-950 leading-none">
            {sector.metric}
          </span>
          <span className="block text-[11px] sm:text-xs text-gray-600 mt-1 font-medium">
            {sector.metricLabel}
          </span>
        </div>
        <div className="text-right">
          <span className="block text-[10px] uppercase font-semibold text-gray-500 tracking-wider">
            Verified Hardware
          </span>
          <span className="inline-block mt-1 text-xs font-semibold text-lithon-blue bg-white px-2.5 py-1 rounded-full border border-gray-200 shadow-2xs">
            {sector.product}
          </span>
        </div>
      </div>

      {/* Primary Brand CTA Button */}
      <Link
        href={sector.ctaHref}
        className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-transform hover:scale-[1.01] active:scale-[0.99]"
      >
        <span>{sector.ctaText}</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

