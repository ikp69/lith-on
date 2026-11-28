import { ImagePlus } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhotoNeededProps {
  /** What the real photograph should show, e.g. "Noida assembly line, wide shot". */
  subject: string;
  /** Minimum size the supplied file should have, e.g. "2400 × 1500 px, landscape". */
  size?: string;
  /** CSS aspect ratio such as "16/9". Omit it to size the slot with `className` (e.g. responsive `aspect-*` classes) or `fill`. */
  ratio?: string;
  /** Fill a positioned parent instead of setting its own aspect ratio. */
  fill?: boolean;
  /** Hide the text and keep only the icon, for very small slots. */
  compact?: boolean;
  className?: string;
}

/**
 * Visible reminder where a photograph is still owed (design.md §12).
 *
 * Used instead of an image that is too small, cropped badly or not genuine.
 * Every instance carries `data-photo-needed`, so the full list of open slots is
 * `grep -rn "PhotoNeeded" src`. Replace with `<Image>` or `MediaFrame` once the
 * file arrives.
 */
export function PhotoNeeded({ subject, size, ratio, fill = false, compact = false, className }: PhotoNeededProps) {
  return (
    <div
      data-photo-needed={subject}
      role="img"
      aria-label={`Photograph to be supplied: ${subject}`}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-media border border-dashed border-line-strong bg-surface p-5 text-center",
        fill && "absolute inset-0 h-full",
        className
      )}
      style={fill || !ratio ? undefined : { aspectRatio: ratio }}
    >
      <ImagePlus aria-hidden="true" className="h-6 w-6 shrink-0 text-lithon-blue" strokeWidth={1.5} />
      {!compact && (
        <>
          <span className="text-small font-[500] text-ink">Photo needed</span>
          <span className="max-w-[32ch] text-small text-ink-2">{subject}</span>
          {size && <span className="text-[12px] text-ink-3">{size}</span>}
        </>
      )}
    </div>
  );
}
