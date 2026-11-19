'use client';

import { useEffect, useRef } from 'react';
import { gsap, registerGSAP } from '../gsap-register';
import { prefersReducedMotion } from '../config';

interface ParallaxOptions {
  speed?: number; // e.g. -0.2 (slower) or 0.2 (faster)
  direction?: 'vertical' | 'horizontal';
  start?: string;
  end?: string;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options: ParallaxOptions = {}
) {
  const elementRef = useRef<T>(null);
  const {
    speed = 0.2,
    direction = 'vertical',
    start = 'top bottom',
    end = 'bottom top',
  } = options;

  useEffect(() => {
    if (typeof window === 'undefined' || !elementRef.current) return;
    registerGSAP();

    const element = elementRef.current;
    if (prefersReducedMotion()) {
      gsap.set(element, { y: 0, x: 0 });
      return;
    }

    const distance = 100 * speed;

    const ctx = gsap.context(() => {
      if (direction === 'vertical') {
        gsap.fromTo(
          element,
          { y: -distance },
          {
            y: distance,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start,
              end,
              scrub: true,
            },
          }
        );
      } else {
        gsap.fromTo(
          element,
          { x: -distance },
          {
            x: distance,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start,
              end,
              scrub: true,
            },
          }
        );
      }
    }, element);

    return () => ctx.revert();
  }, [speed, direction, start, end]);

  return elementRef;
}

