"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { gsap } from "@/animations/gsap-register";
import { prefersReducedMotion } from "./motion-env";

interface ParallaxProps {
  children: ReactNode;
  /** Total drift as a percentage of the frame height (default 12, allowed 8–15). */
  amount?: number;
  className?: string;
}

/**
 * M6 Parallax media. Wraps an image that fills its frame; the image is scaled
 * up slightly so the drift never reveals an edge. Full-bleed media only.
 * Off for reduced motion.
 */
export function Parallax({ children, amount = 12, className }: ParallaxProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const inner = innerRef.current;
    if (!frame || !inner || prefersReducedMotion()) {
      return;
    }
    const drift = Math.min(15, Math.max(8, amount));
    const tween = gsap.fromTo(
      inner,
      { yPercent: -drift / 2 },
      {
        yPercent: drift / 2,
        ease: "none",
        scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [amount]);

  return (
    <div ref={frameRef} className={`relative h-full w-full overflow-hidden ${className ?? ""}`}>
      <div ref={innerRef} className="absolute inset-x-0 -top-[8%] -bottom-[8%] will-change-transform">
        {children}
      </div>
    </div>
  );
}
