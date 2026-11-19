"use client";

import { animate, inView, stagger } from "motion";
import { type ElementType, type ReactNode, useEffect, useRef } from "react";
import { DURATION, EASE_OUT, STAGGER, motionEnabled } from "./motion-env";

interface LineRevealProps {
  /** Each entry renders on its own line. */
  lines: ReactNode[];
  /** Heading level or element. Defaults to h2. */
  as?: ElementType;
  className?: string;
  /** Index of a line to emphasise (the page's single two-tone moment). */
  emphasisIndex?: number;
  /** Classes for the emphasised line. Plain data so server components can pass it. */
  emphasisClassName?: string;
  /** Animate immediately on load (heroes) instead of on entering view. */
  onLoad?: boolean;
}

/**
 * M2 Line reveal: each line rises from behind a mask, staggered 60ms.
 * Reserved for hero and statement headlines (design.md §13).
 */
export function LineReveal({ lines, as: Tag = "h2", className, emphasisIndex, emphasisClassName = "", onLoad = false }: LineRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    const inners = el.querySelectorAll<HTMLElement>("[data-line-inner]");
    if (!motionEnabled()) {
      el.setAttribute("data-revealed", "");
      return;
    }
    el.style.animation = "none";
    for (const inner of inners) {
      inner.style.animation = "none";
    }
    const run = () =>
      animate(
        inners,
        { y: ["105%", "0%"] },
        { duration: DURATION.deliberate * 0.8, delay: stagger(STAGGER.lines), ease: EASE_OUT }
      ).then(() => el.setAttribute("data-revealed", ""));

    if (onLoad) {
      run();
      return;
    }
    const stop = inView(el, () => {
      run();
    }, { amount: 0.4 });
    return () => stop();
  }, [onLoad]);

  return (
    <Tag ref={ref} data-line-reveal="" className={className}>
      {lines.map((line, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: lines are static, ordered content
        <span key={i} className={`block overflow-hidden pb-[0.08em] ${i === emphasisIndex ? emphasisClassName : ""}`}>
          <span data-line-inner="" className="block">
            {line}
            {/* Keeps a word space between lines in the accessible name and copied text. */}
            {i < lines.length - 1 && <span className="sr-only"> </span>}
          </span>
        </span>
      ))}
    </Tag>
  );
}
