import { cn } from "@/lib/utils";

/**
 * WHY-02 scroll story visual: the seven-layer "moat tower" from
 * content/why-lith-on.md, rebuilt as a live SVG (it retires the baked-text
 * competitive-moat-tower.jpg). One drawing per chapter; the chapter's layer is
 * filled in Lith-On Blue and the others stay outlined. Rendered inside a
 * ScrollStory `group`, the active layer fades in with
 * `group-data-[active=true]:`, and shows its final state under reduced motion.
 */

export const MOAT_LAYERS = [
  "Global technology tie-ups",
  "Service and monitoring",
  "Product warranties",
  "40+ years of grid experience",
  "Certification trifecta",
  "Noida manufacturing",
  "Modular, built for India",
] as const;

const ROW_H = 36;
const GAP = 6;
const TOP = 16;
const MIN_W = 300;
const MAX_W = 440;
const CX = 240;

export function MoatStack({ active }: { active: number }) {
  const caption = `Layer ${active + 1} of ${MOAT_LAYERS.length}: ${MOAT_LAYERS[active]}`;
  return (
    <div className="flex h-full flex-col p-5 sm:p-8 lg:absolute lg:inset-0 lg:p-10">
      <div className="flex items-baseline justify-between gap-4 pr-16 lg:pr-24">
        <p className="text-small font-[500] text-ink">Seven structural advantages</p>
      </div>
      <div className="relative mt-4 aspect-[480/330] w-full lg:aspect-auto lg:min-h-0 lg:flex-1">
        <svg viewBox="0 0 480 330" className="absolute inset-0 h-full w-full" role="img" aria-label={caption}>
          <title>{caption}</title>
          {MOAT_LAYERS.map((name, i) => {
            const w = MIN_W + ((MAX_W - MIN_W) * i) / (MOAT_LAYERS.length - 1);
            const x = CX - w / 2;
            const y = TOP + i * (ROW_H + GAP);
            const on = i === active;
            const cy = y + ROW_H / 2;
            const labels = (tone: string) => (
              <>
                <text x={x + 14} y={cy} dominantBaseline="central" className={cn("tabular text-[12px] max-sm:text-[15px]", tone)}>
                  {String(i + 1).padStart(2, "0")}
                </text>
                <text x={x + 44} y={cy} dominantBaseline="central" className={cn("text-[14px] max-sm:text-[17px]", tone, on && "font-[500]")}>
                  {name}
                </text>
              </>
            );
            return (
              <g key={name}>
                <rect x={x} y={y} width={w} height={ROW_H} rx="4" className={on ? "fill-white stroke-lithon-blue" : "fill-white stroke-line-strong"} strokeWidth="1" />
                {labels(on ? "fill-lithon-blue" : "fill-ink-3")}
                {on && (
                  <g className="opacity-0 group-data-[active=true]:opacity-100 motion-safe:transition-opacity motion-safe:delay-150 motion-safe:duration-[800ms] motion-reduce:opacity-100">
                    <rect x={x} y={y} width={w} height={ROW_H} rx="4" className="fill-lithon-blue" />
                    {labels("fill-white")}
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
