"use client";

import { animate, inView } from "motion";
import { useEffect, useRef } from "react";
import { DURATION, EASE_OUT, prefersReducedMotion } from "./motion-env";

interface CountUpProps {
  value: number;
  decimals?: number;
  /** Locale used for grouping separators (en-IN gives 1,00,000). */
  locale?: string;
  className?: string;
}

function format(n: number, decimals: number, locale: string) {
  return n.toLocaleString(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

/**
 * M3 Count-up. The final value is server-rendered (correct for SEO, no-JS and
 * reduced motion). Counting only happens for numbers that start below the
 * fold, so a visible number never jumps back to zero.
 */
export function CountUp({ value, decimals = 0, locale = "en-IN", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) {
      return;
    }
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) {
      return;
    }
    el.textContent = format(0, decimals, locale);
    const stop = inView(el, () => {
      animate(0, value, {
        duration: DURATION.deliberate,
        ease: EASE_OUT,
        onUpdate: (v) => {
          el.textContent = format(v, decimals, locale);
        },
      });
    }, { amount: 0.6 });
    return () => {
      stop();
      el.textContent = format(value, decimals, locale);
    };
  }, [value, decimals, locale]);

  return (
    <span ref={ref} className={className}>
      {format(value, decimals, locale)}
    </span>
  );
}
