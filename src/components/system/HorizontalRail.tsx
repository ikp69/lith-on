"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { type ReactNode, type RefObject, useCallback, useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/animations/gsap-register";
import { isCoarsePointer, isDesktop, prefersReducedMotion } from "@/components/motion/motion-env";
import { getLenis } from "@/components/motion/SmoothScroll";
import { cn } from "@/lib/utils";

/**
 * Moves the rail to a progress value (0 = start, 1 = end). `smooth: false`
 * jumps immediately (for dragging); `smooth: true` animates (for release / keys).
 */
export type RailSeek = (progress: number, smooth?: boolean) => void;

/** Minimum pinned tail, in px of page scroll, when `tailRatio` is set. */
const MIN_TAIL_PX = 480;

interface HorizontalRailProps {
  /** Receives a seek function so external controls (e.g. a slider) can drive the rail. */
  controlRef?: RefObject<RailSeek | null>;
  children: ReactNode;
  /** Accessible name for the rail region. */
  label: string;
  /**
   * M5: on desktop (fine pointer, ≥1024px, motion allowed) pin the rail and
   * drive it with vertical scroll. Otherwise it is a native swipe rail.
   * Use for at most one or two rails per page (design.md §13).
   */
  scrollDriven?: boolean;
  /** Item width class applied by the caller on each child; this sets the gap. */
  className?: string;
  /** Optional content shown above the track (e.g. SectionIntro). Pinned with the rail. */
  header?: ReactNode;
  /** Optional content shown below the track (e.g. a progress axis). Pinned with the rail. */
  footer?: ReactNode;
  /**
   * From 1024px the track runs to the window edges instead of clipping at the
   * container, while its first and last items still align with the container.
   */
  bleed?: boolean;
  /**
   * Pinned mode only: extra pinned scroll after the track has finished
   * moving, as a fraction of the track's travel distance. Lets a footer
   * (e.g. an axis marker) finish its own motion before the section unpins.
   */
  tailRatio?: number;
  /**
   * Reports rail progress (0–1, scrubbed). `trackEnd` is the progress at which
   * the track stops moving (1 unless `tailRatio` adds a pinned tail).
   */
  onProgress?: (progress: number, trackEnd: number) => void;
}

/**
 * Horizontal rail (design.md §16).
 * - Phones / reduced motion / scrollDriven=false: native horizontal scroll
 *   with snap, plus previous/next buttons on desktop.
 * - scrollDriven on desktop: the section pins and vertical scroll moves the
 *   track. Keyboard focus on an off-screen item scrolls the page so it comes
 *   into view.
 */
export function HorizontalRail({
  children,
  label,
  scrollDriven = false,
  className,
  header,
  footer,
  bleed = false,
  controlRef,
  tailRatio = 0,
  onProgress,
}: HorizontalRailProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<ReturnType<typeof gsap.timeline> | null>(null);
  const onProgressRef = useRef(onProgress);
  const [pinned, setPinned] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    onProgressRef.current = onProgress;
  }, [onProgress]);

  // Scroll-driven mode (desktop only)
  useEffect(() => {
    if (!scrollDriven || prefersReducedMotion() || isCoarsePointer() || !isDesktop()) {
      return;
    }
    const section = sectionRef.current;
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!section || !track || !viewport) {
      return;
    }
    // Visible width excludes the viewport's inline padding, so the last item
    // stops aligned with the content edge rather than the window edge.
    const distance = () => {
      const cs = getComputedStyle(viewport);
      const inner = viewport.clientWidth - Number.parseFloat(cs.paddingLeft) - Number.parseFloat(cs.paddingRight);
      return Math.max(0, track.scrollWidth - inner);
    };
    if (distance() < 40) {
      return;
    }
    setPinned(true);
    // Tail is at least MIN_TAIL_PX of scroll so it is noticeable on short tracks.
    const travel = distance();
    const tail = tailRatio > 0 ? Math.max(tailRatio, MIN_TAIL_PX / travel) : 0;
    const trackEnd = 1 / (1 + tail);
    // Track moves over the first 1 unit of the timeline; the optional tail
    // holds the pin while the footer finishes.
    const tween = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top+=96",
        end: () => `+=${distance() * (1 + tail)}`,
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
      onUpdate: () => onProgressRef.current?.(tween.progress(), trackEnd),
    });
    tween.to(track, { x: () => -distance(), ease: "none", duration: 1 });
    if (tail > 0) {
      tween.to({}, { duration: tail });
    }
    tweenRef.current = tween;
    onProgressRef.current?.(tween.progress(), trackEnd);

    // Keyboard: bring focused items into view by scrolling the page.
    const onFocus = (e: FocusEvent) => {
      const st = tween.scrollTrigger;
      const item = (e.target as HTMLElement).closest<HTMLElement>("[data-rail-item]");
      if (!st || !item) {
        return;
      }
      const ratio = Math.min(1, Math.max(0, (item.offsetLeft - 24) / distance())) * trackEnd;
      window.scrollTo({ top: st.start + ratio * (st.end - st.start), behavior: "auto" });
    };
    track.addEventListener("focusin", onFocus);

    return () => {
      track.removeEventListener("focusin", onFocus);
      tweenRef.current = null;
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(track, { clearProps: "transform" });
      setPinned(false);
      ScrollTrigger.refresh();
    };
  }, [scrollDriven, tailRatio]);

  // External seek: pinned mode scrolls the page within the pin range; native
  // mode scrolls the viewport (snap is paused while dragging).
  useEffect(() => {
    if (!controlRef) {
      return;
    }
    controlRef.current = (progress, smooth = false) => {
      const p = Math.min(1, Math.max(0, progress));
      const animate = smooth && !prefersReducedMotion();
      const st = tweenRef.current?.scrollTrigger;
      if (st) {
        const top = st.start + p * (st.end - st.start);
        const lenis = getLenis();
        if (lenis) {
          lenis.scrollTo(top, { immediate: !animate, force: true });
        } else {
          window.scrollTo({ top, behavior: animate ? "smooth" : "auto" });
        }
        return;
      }
      const vp = viewportRef.current;
      if (!vp) {
        return;
      }
      vp.style.scrollSnapType = smooth ? "" : "none";
      vp.scrollTo({ left: p * (vp.scrollWidth - vp.clientWidth), behavior: animate ? "smooth" : "auto" });
    };
    return () => {
      controlRef.current = null;
    };
  }, [controlRef]);

  // Native mode: track edges for the prev/next buttons, and report progress
  const updateEdges = useCallback(() => {
    const vp = viewportRef.current;
    if (!vp || tweenRef.current) {
      return;
    }
    setAtStart(vp.scrollLeft < 8);
    setAtEnd(vp.scrollLeft + vp.clientWidth >= vp.scrollWidth - 8);
    const max = vp.scrollWidth - vp.clientWidth;
    onProgressRef.current?.(max < 1 ? 0 : Math.min(1, Math.max(0, vp.scrollLeft / max)), 1);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  // Back in native mode (e.g. resized below desktop): re-report from the viewport.
  useEffect(() => {
    if (!pinned) {
      updateEdges();
    }
  }, [pinned, updateEdges]);

  const page = (dir: 1 | -1) => {
    const vp = viewportRef.current;
    if (!vp) {
      return;
    }
    vp.scrollBy({ left: dir * vp.clientWidth * 0.8, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  return (
    <section ref={sectionRef} aria-label={label} className="relative">
      {header}
      <div
        ref={viewportRef}
        onScroll={pinned ? undefined : updateEdges}
        data-lenis-prevent=""
        className={cn(
          "-mx-4 px-4 sm:-mx-6 sm:px-6",
          bleed && "lg:mx-[calc(50%-50vw)] lg:px-[calc(50vw-50%)] lg:scroll-px-[calc(50vw-50%)]",
          pinned ? "overflow-hidden" : "snap-x snap-mandatory overflow-x-auto scroll-px-4 sm:scroll-px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        )}
      >
        <div ref={trackRef} className={cn("flex w-max gap-4 lg:gap-6", className)}>
          {children}
        </div>
      </div>
      {footer}
      {!pinned && (
        <div className="mt-6 hidden items-center justify-end gap-2 lg:flex">
          <button
            type="button"
            onClick={() => page(-1)}
            disabled={atStart}
            aria-label={`Previous in ${label}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-ink disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => page(1)}
            disabled={atEnd}
            aria-label={`Next in ${label}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-ink disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}

/** Wrap each rail child so snap and keyboard handling work. Set width with className. */
export function RailItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div data-rail-item="" className={cn("shrink-0 snap-start", className)}>
      {children}
    </div>
  );
}
