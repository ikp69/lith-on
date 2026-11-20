"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Immediate feedback when an internal link is clicked (20 Nov 2026: clicks
 * felt unanswered while the next page loaded, worst in `next dev`, which
 * compiles each route on first visit and does not prefetch).
 *
 * On click: a thin Lith-On Blue bar starts across the top of the viewport, the
 * clicked link dims (`data-nav-pending`) and the cursor shows progress. When
 * the pathname changes the bar completes and fades. A 10 s safety timeout
 * clears everything if navigation never happens. Skips modified clicks, new
 * tabs, downloads, external links, same-page hashes and query-only changes.
 * Under reduced motion the bar appears and disappears without animating.
 */

type Phase = "idle" | "loading" | "done";

const SAFETY_MS = 10_000;
const FADE_MS = 400;

function isNavigationClick(e: MouseEvent): HTMLAnchorElement | null {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
    return null;
  }
  const a = (e.target as Element | null)?.closest?.("a[href]");
  if (!(a instanceof HTMLAnchorElement)) {
    return null;
  }
  if ((a.target && a.target !== "_self") || a.hasAttribute("download")) {
    return null;
  }
  const url = new URL(a.href, window.location.href);
  if (url.origin !== window.location.origin || url.pathname === window.location.pathname) {
    return null;
  }
  return a;
}

export function NavigationFeedback() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const link = useRef<HTMLAnchorElement | null>(null);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    for (const t of timers.current) {
      window.clearTimeout(t);
    }
    timers.current = [];
  };

  const settle = () => {
    clearTimers();
    link.current?.removeAttribute("data-nav-pending");
    link.current = null;
    document.documentElement.removeAttribute("data-nav-pending");
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = isNavigationClick(e);
      if (!a) {
        return;
      }
      settle();
      link.current = a;
      a.setAttribute("data-nav-pending", "");
      document.documentElement.setAttribute("data-nav-pending", "");
      setPhase("loading");
      timers.current.push(
        window.setTimeout(() => {
          settle();
          setPhase("idle");
        }, SAFETY_MS)
      );
    };
    // Capture phase: next/link calls preventDefault in React's own listener, which runs before a bubbling document listener.
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      settle();
    };
  }, []);

  // Route changed: finish the bar, then hide it.
  // biome-ignore lint/correctness/useExhaustiveDependencies: runs on every pathname change by design
  useEffect(() => {
    if (!link.current) {
      return;
    }
    settle();
    setPhase("done");
    const t = window.setTimeout(() => setPhase("idle"), FADE_MS);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <div aria-hidden="true" className="nav-progress pointer-events-none fixed inset-x-0 top-0 z-[120] h-[3px]" data-phase={phase}>
      <div className="nav-progress-bar h-full origin-left bg-lithon-blue" />
    </div>
  );
}
