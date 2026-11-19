'use client';

import { useEffect, useRef } from 'react';
import { gsap, registerGSAP } from '../gsap-register';
import { prefersReducedMotion } from '../config';

interface PinnedSectionOptions {
  pinDuration?: string; // e.g. '+=150%'
  onUpdate?: (progress: number) => void;
  scrub?: boolean | number;
}

export function usePinnedSection<
  TContainer extends HTMLElement = HTMLDivElement,
  TContent extends HTMLElement = HTMLDivElement,
>(options: PinnedSectionOptions = {}) {
  const containerRef = useRef<TContainer>(null);
  const contentRef = useRef<TContent>(null);

  const { pinDuration = '+=100%', onUpdate, scrub = true } = options;

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current || !contentRef.current) return;
    registerGSAP();

    const container = containerRef.current;
    const content = contentRef.current;

    if (prefersReducedMotion()) {
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: pinDuration,
        pin: content,
        scrub,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (onUpdate) {
            onUpdate(self.progress);
          }
        },
      });
    }, container);

    return () => ctx.revert();
  }, [pinDuration, onUpdate, scrub]);

  return { containerRef, contentRef };
}

