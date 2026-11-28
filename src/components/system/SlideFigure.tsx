import Image from "next/image";
import { cn } from "@/lib/utils";

interface SlideFigureProps {
  src: string;
  /** Summarise what the slide says; screen readers cannot read the baked-in text. */
  alt: string;
  width: number;
  height: number;
  /** One line under the figure: what it shows. */
  caption: string;
  /** Which deck or catalogue page it came from. */
  source: string;
  sizes?: string;
  /** Show the "Illustrative render" label (design.md §8) when the slide pictures rendered hardware. */
  illustrative?: boolean;
  className?: string;
}

/**
 * A slide, infographic or catalogue crop shown as-is (design.md §12).
 *
 * Slides carry their own text, which gets small on phones, so the figure always
 * links to the full-size file.
 */
export function SlideFigure({ src, alt, width, height, caption, source, sizes = "(min-width: 1360px) 1200px, 100vw", illustrative = false, className }: SlideFigureProps) {
  return (
    <figure className={cn("min-w-0", className)}>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden rounded-media bg-white outline outline-1 -outline-offset-1 outline-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
      >
        <Image src={src} alt={alt} width={width} height={height} sizes={sizes} quality={80} className="h-auto w-full" />
        {illustrative && (
          <span className="absolute right-3 bottom-3 rounded-full bg-black/55 px-2.5 py-1 text-[12px] font-[500] text-white">Illustrative render</span>
        )}
        <span className="sr-only"> (opens the full-size image in a new tab)</span>
      </a>
      <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-small">
        <span className="text-ink-2">{caption}</span>
        <span className="text-ink-3">
          {source}.{" "}
          <a href={src} target="_blank" rel="noopener noreferrer" className="text-lithon-blue underline-offset-2 hover:underline">
            Open full size
          </a>
        </span>
      </figcaption>
    </figure>
  );
}
