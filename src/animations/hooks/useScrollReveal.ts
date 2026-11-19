'use client';

import { useEffect, useRef } from 'react';
import { gsap, registerGSAP } from '../gsap-register';
import { prefersReducedMotion } from '../config';
import { GSAP_EASING } from '../easing';

interface ScrollRevealOptions {
  triggerThreshold?: string; // e.g. 'top 80%'
  duration?: number;
  delay?: number;
  stagger?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  distance?: number;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const elementRef = useRef<T>(null);

  const {
    triggerThreshold = 'top 85%',
    duration = 0.8,
    delay = 0,
    stagger = 0.1,
    direction = 'up',
    distance = 32,
    once = true,
  } = options;

  useEffect(() => {
    if (typeof window === 'undefined' || !elementRef.current) return;
    registerGSAP();

    const element = elementRef.current;
    if (prefersReducedMotion()) {
      gsap.set(element, { opacity: 1, x: 0, y: 0 });
      return;
    }

    let x = 0;
    let y = 0;

    if (direction === 'up') y = distance;
    if (direction === 'down') y = -distance;
    if (direction === 'left') x = distance;
    if (direction === 'right') x = -distance;

    const children = element.children.length > 0 ? Array.from(element.children) : [element];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        {
          opacity: 0,
          x,
          y,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          stagger,
          ease: GSAP_EASING.power3Out,
          scrollTrigger: {
            trigger: element,
            start: triggerThreshold,
            once,
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [triggerThreshold, duration, delay, stagger, direction, distance, once]);

  return elementRef;
}

