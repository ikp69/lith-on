'use client';

import { useEffect, useRef } from 'react';
import { gsap, registerGSAP } from '../gsap-register';
import { prefersReducedMotion } from '../config';
import { GSAP_EASING } from '../easing';

interface TextRevealOptions {
  triggerThreshold?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
}

export function useTextReveal<T extends HTMLElement = HTMLHeadingElement>(
  options: TextRevealOptions = {}
) {
  const textRef = useRef<T>(null);
  const {
    triggerThreshold = 'top 85%',
    duration = 0.9,
    delay = 0,
    stagger = 0.08,
  } = options;

  useEffect(() => {
    if (typeof window === 'undefined' || !textRef.current) return;
    registerGSAP();

    const element = textRef.current;
    if (prefersReducedMotion()) {
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: GSAP_EASING.expoOut,
          scrollTrigger: {
            trigger: element,
            start: triggerThreshold,
            once: true,
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [triggerThreshold, duration, delay, stagger]);

  return textRef;
}

