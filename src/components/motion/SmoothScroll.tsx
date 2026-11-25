"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/animations/gsap-register";
import { isCoarsePointer, prefersReducedMotion } from "./motion-env";

let activeLenis: Lenis | null = null;

/** The running Lenis instance, or null when native scrolling is in use. */
export function getLenis(): Lenis | null {
  return activeLenis;
}

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
    activeLenis = lenis;

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
      activeLenis = null;
    };
  }, []);

  // Content above a pinned section can change height after its trigger was
  // measured (images loading, ScrollStory inserting its spacer). Stale start
  // positions made the product rail pin on top of the city hero, so re-measure
  // whenever the page height actually changes.
  useEffect(() => {
    let lastHeight = document.body.scrollHeight;
    let id = 0;
    const ro = new ResizeObserver(() => {
      const h = document.body.scrollHeight;
      if (Math.abs(h - lastHeight) < 2) {
        return;
      }
      lastHeight = h;
      window.clearTimeout(id);
      id = window.setTimeout(() => {
        ScrollTrigger.refresh();
        lastHeight = document.body.scrollHeight;
      }, 150);
    });
    ro.observe(document.body);
    return () => {
      ro.disconnect();
      window.clearTimeout(id);
    };
  }, []);

  // Route changes: Next.js resets scroll natively; keep Lenis in step and re-measure triggers.
  // Skipped on first load, so a reload keeps its position and scrolling
  // during load is never yanked back to the top.
  const firstPath = useRef(true);
  useEffect(() => {
    const lenis = lenisRef.current;
    if (firstPath.current) {
      firstPath.current = false;
    } else if (lenis && !window.location.hash) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
