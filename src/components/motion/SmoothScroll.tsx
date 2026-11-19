"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/animations/gsap-register";
import { isCoarsePointer, prefersReducedMotion } from "./motion-env";

/**
 * Lenis smooth scrolling, synchronised with GSAP ScrollTrigger.
 *
 * - Only runs with a fine pointer (mouse / trackpad). Phones and tablets keep
 *   native scrolling, which is faster and more reliable on lower-powered devices.
 * - Never runs when the visitor prefers reduced motion.
 * - A short lerp keeps it close to native: smoothing without perceptible lag.
 */
export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion() || isCoarsePointer()) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.14,
      wheelMultiplier: 1,
      smoothWheel: true,
      anchors: { offset: -96 },
      stopInertiaOnNavigate: true,
      autoRaf: false,
      // Let scrollable widgets (menus, drawers, tables) scroll themselves
      prevent: (node) => node.closest("[data-lenis-prevent], [role='dialog']") !== null,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Route changes: Next.js resets scroll natively; keep Lenis in step and re-measure triggers.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (lenis && !window.location.hash) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
