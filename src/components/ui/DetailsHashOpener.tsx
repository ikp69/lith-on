"use client";

import { useEffect } from "react";

/**
 * Opens a collapsed <details> section when the URL hash points at it
 * (e.g. /industries#healthcare from the footer), then scrolls to it.
 */
export function DetailsHashOpener() {
  useEffect(() => {
    const openFromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      const details = target?.closest("details");
      if (details && !details.open) {
        details.open = true;
        target?.scrollIntoView({ block: "start" });
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return null;
}
