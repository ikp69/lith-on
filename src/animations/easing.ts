/**
 * Lith-On Architectural & Engineering Easing Curves
 *
 * Clean, decelerating curves that give heavy industrial machinery
 * an authoritative, high-inertia feel.
 */

export const GSAP_EASING = {
  // Primary decelerating curves
  power2Out: 'power2.out',
  power3Out: 'power3.out',
  power4Out: 'power4.out',
  expoOut: 'expo.out',
  circOut: 'circ.out',

  // S-curves for transitions
  power2InOut: 'power2.inOut',
  power3InOut: 'power3.inOut',

  // Mechanical / linear for continuous loops
  linear: 'none',
} as const;

export const CSS_EASING = {
  power3Out: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  expoOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  springGentle: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

