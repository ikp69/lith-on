"use client";

import { inView } from "motion";
import { type ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motionEnabled } from "./motion-env";

/**
 * M7 trigger for CSS-driven diagrams. Renders a `group` with
 * data-active="true" so the server, no-JS and reduced-motion output shows the
 * final state. On the client, if the element starts below the fold, it is
 * reset to "false" and set back to "true" once when it enters view.
 * Children animate with `group-data-[active=true]:` classes.
 */
export function ActiveOnView({ children, className, amount = 0.35 }: { children: ReactNode; className?: string; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!(el && motionEnabled()) || el.getBoundingClientRect().top < window.innerHeight) {
      return;
    }
    el.dataset.active = "false";
    const stop = inView(
      el,
      () => {
        el.dataset.active = "true";
      },
      { amount }
    );
    return () => stop();
  }, [amount]);

  return (
    <div ref={ref} data-active="true" className={cn("group", className)}>
      {children}
    </div>
  );
}
