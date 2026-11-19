import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Asymmetric 12-column composition (design.md §16). Stacks to one column on
 * phones and two on tablets. Use instead of rows of equal cards.
 */
export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[minmax(220px,auto)] lg:gap-5", className)}>{children}</div>;
}

const COL: Record<number, string> = {
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  12: "lg:col-span-12",
};
const ROW: Record<number, string> = { 1: "lg:row-span-1", 2: "lg:row-span-2" };

interface BentoTileProps {
  children: ReactNode;
  /** Columns out of 12 at desktop. */
  cols?: 3 | 4 | 5 | 6 | 7 | 8 | 12;
  rows?: 1 | 2;
  /** Span both columns on tablet. */
  wide?: boolean;
  /** Visual surface. "plain" has no box at all; prefer it where grouping is clear. */
  surface?: "plain" | "warm" | "surface" | "dark" | "media";
  className?: string;
}

export function BentoTile({ children, cols = 4, rows = 1, wide = false, surface = "warm", className }: BentoTileProps) {
  return (
    <div
      className={cn(
        "relative min-w-0 overflow-hidden",
        COL[cols],
        ROW[rows],
        wide && "sm:col-span-2",
        surface !== "plain" && "rounded-media p-6 lg:p-8",
        surface === "warm" && "bg-canvas-warm",
        surface === "surface" && "bg-surface",
        surface === "dark" && "bg-stage-dark text-on-dark",
        surface === "media" && "p-0",
        className
      )}
    >
      {children}
    </div>
  );
}
