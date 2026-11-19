"use client";

import { animate, inView } from "motion";
import { type ElementType, type ReactNode, useEffect, useRef } from "react";
import { DURATION, EASE_OUT, motionEnabled } from "./motion-env";

interface RevealProps {
  children: ReactNode;
  /** Element to render. Defaults to div. */
  as?: ElementType;
  className?: string;
  /** Seconds to wait after entering view. Use for small, deliberate offsets only. */
  delay?: number;
  /** Rise distance in px (default 24). */
  distance?: number;
}

/**
 * M1 Reveal: fade + rise once when the element enters the viewport.
 *
 * Content is server-rendered visible. It is only hidden (via CSS on
 * html.js-motion [data-reveal]) when JavaScript and motion are available,
 * and a CSS failsafe reveals it after 3s if hydration never happens.
 */
export function Reveal({ children, as: Tag = "div", className, delay = 0, distance = 24 }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    if (!motionEnabled()) {
      el.setAttribute("data-revealed", "");
      return;
    }
    el.style.animation = "none"; // cancel the CSS failsafe; we drive it now
    const stop = inView(
      el,
      () => {
        animate(
          el,
          { opacity: [0, 1], y: [distance, 0] },
          { duration: DURATION.relaxed, delay, ease: EASE_OUT }
        ).then(() => el.setAttribute("data-revealed", ""));
      },
      { amount: 0.2 }
    );
    return () => stop();
  }, [delay, distance]);

  return (
    <Tag ref={ref} data-reveal="" className={className}>
      {children}
    </Tag>
  );
}
