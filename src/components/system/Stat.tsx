import type { ReactNode } from "react";
import { CountUp } from "@/components/motion/CountUp";
import { cn } from "@/lib/utils";

export interface StatData {
  /** Numeric value (counted up when `countUp` is set). */
  value: number;
  decimals?: number;
  prefix?: string;
  /** Unit set smaller after the number, e.g. "MWh", "+", "ms". */
  unit?: string;
  label: ReactNode;
  /** Source or qualifier, e.g. "Sector 136, Noida". */
  note?: ReactNode;
}

interface StatProps extends StatData {
  size?: "xl" | "l";
  countUp?: boolean;
  tone?: "light" | "dark";
  /** Colour the number with the red accent (one key figure per section at most). */
  accent?: boolean;
  className?: string;
}

/** A single statistic: Manrope tabular figures, never monospace (design.md §5). */
export function Stat({ value, decimals = 0, prefix, unit, label, note, size = "l", countUp = true, tone = "light", accent = false, className }: StatProps) {
  const numberColour = accent ? (tone === "dark" ? "text-lithon-red" : "text-lithon-red-ink") : tone === "dark" ? "text-on-dark" : "text-ink";
  return (
    <div className={cn("min-w-0", className)}>
      <p className={cn("tabular flex flex-wrap items-baseline gap-x-[0.06em]", size === "xl" ? "text-stat-xl" : "text-stat-l", numberColour)}>
        {prefix && <span>{prefix}</span>}
        {countUp ? <CountUp value={value} decimals={decimals} /> : <span>{value.toLocaleString("en-IN", { minimumFractionDigits: decimals })}</span>}
        {unit && <span className="text-[0.32em] font-[500] tracking-normal whitespace-nowrap">{unit}</span>}
      </p>
      <p className={cn("mt-3 text-body font-[500]", tone === "dark" ? "text-on-dark" : "text-ink")}>{label}</p>
      {note && <p className={cn("mt-1 text-small", tone === "dark" ? "text-on-dark-2" : "text-ink-3")}>{note}</p>}
    </div>
  );
}

interface StatBandProps {
  stats: StatData[];
  /** Show the first stat larger, spanning the row on phones. */
  leadFirst?: boolean;
  tone?: "light" | "dark";
  countUp?: boolean;
  className?: string;
}

/**
 * An open row of statistics separated by hairlines (no card, no icons).
 * Phones: lead figure full width, then 2 columns. Tablet to 1279px: lead
 * full width, then up to 4 columns. 1280px+: one row, lead widest.
 */
export function StatBand({ stats, leadFirst = true, tone = "light", countUp = true, className }: StatBandProps) {
  const line = tone === "dark" ? "border-white/15" : "border-line";
  return (
    <ul className={cn("grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 xl:flex xl:gap-0", className)}>
      {stats.map((s, i) => {
        const isLead = leadFirst && i === 0;
        return (
          <li
            key={`${s.value}-${i}`}
            className={cn(
              "min-w-0 border-t pt-6 xl:flex-1 xl:border-t-0 xl:border-l xl:pt-0 xl:pl-8 first:xl:border-l-0 first:xl:pl-0",
              line,
              isLead && "col-span-2 md:col-span-4 xl:flex-[1.5]"
            )}
          >
            <Stat {...s} size={isLead ? "xl" : "l"} countUp={countUp} tone={tone} />
          </li>
        );
      })}
    </ul>
  );
}
