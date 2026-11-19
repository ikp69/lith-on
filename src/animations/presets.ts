import { GSAP_EASING } from './easing';
import { ANIMATION_DURATIONS } from './config';

export interface MotionPreset {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
}

export const ANIMATION_PRESETS = {
  fadeUp: {
    from: { opacity: 0, y: 36 },
    to: {
      opacity: 1,
      y: 0,
      duration: ANIMATION_DURATIONS.relaxed,
      ease: GSAP_EASING.power3Out,
    },
  },
  fadeDown: {
    from: { opacity: 0, y: -36 },
    to: {
      opacity: 1,
      y: 0,
      duration: ANIMATION_DURATIONS.relaxed,
      ease: GSAP_EASING.power3Out,
    },
  },
  fadeIn: {
    from: { opacity: 0 },
    to: {
      opacity: 1,
      duration: ANIMATION_DURATIONS.standard,
      ease: GSAP_EASING.power2Out,
    },
  },
  scaleUp: {
    from: { opacity: 0, scale: 0.94 },
    to: {
      opacity: 1,
      scale: 1,
      duration: ANIMATION_DURATIONS.relaxed,
      ease: GSAP_EASING.power3Out,
    },
  },
  slideInLeft: {
    from: { opacity: 0, x: -48 },
    to: {
      opacity: 1,
      x: 0,
      duration: ANIMATION_DURATIONS.relaxed,
      ease: GSAP_EASING.power3Out,
    },
  },
  slideInRight: {
    from: { opacity: 0, x: 48 },
    to: {
      opacity: 1,
      x: 0,
      duration: ANIMATION_DURATIONS.relaxed,
      ease: GSAP_EASING.power3Out,
    },
  },
} as const;

/**
 * Standard Motion (motion/react) variant dictionaries
 */
export const MOTION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  },
} as const;

