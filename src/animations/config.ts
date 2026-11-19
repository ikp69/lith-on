'use client';

/**
 * Lith-On Motion Configuration & Standards
 */

export const ANIMATION_DURATIONS = {
  instant: 0.1,
  fast: 0.25,
  standard: 0.5,
  relaxed: 0.8,
  deliberate: 1.2,
  epic: 1.8,
} as const;

export const SCROLL_THRESHOLDS = {
  early: 'top 90%',
  standard: 'top 80%',
  center: 'top 60%',
  strict: 'top 40%',
} as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

