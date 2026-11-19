/**
 * Shared environment checks and tokens for the Lith-On motion system.
 * See docs/MOTION_SYSTEM.md and design.md §13.
 */

/** Ease-out used for every entrance (matches --ease-out-expo). */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const DURATION = {
  fast: 0.25,
  standard: 0.5,
  relaxed: 0.8,
  deliberate: 1.2,
} as const;

export const STAGGER = {
  lines: 0.06,
  items: 0.09,
} as const;

/** True when the visitor asked the OS for reduced motion. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") {
    return true;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** True on touch-first devices, where we keep native scrolling and skip scroll-driven pinning. */
export function isCoarsePointer(): boolean {
  if (typeof window === "undefined") {
    return true;
  }
  return window.matchMedia("(pointer: coarse)").matches;
}

/** True at the desktop breakpoint used for pinned scroll stories and rails (lg, 1024px). */
export function isDesktop(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  return window.matchMedia("(min-width: 1024px)").matches;
}

/**
 * True when the boot script in the root layout enabled entrance motion
 * (html.js-motion). Entrance primitives only hide content when this is set,
 * so pages stay fully visible without JavaScript or with reduced motion.
 */
export function motionEnabled(): boolean {
  if (typeof document === "undefined") {
    return false;
  }
  return document.documentElement.classList.contains("js-motion");
}

/**
 * Inline script for the root layout. Runs before first paint: adds
 * html.js-motion unless the visitor prefers reduced motion.
 */
export const MOTION_BOOT_SCRIPT =
  "try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-motion')}}catch(e){}";
