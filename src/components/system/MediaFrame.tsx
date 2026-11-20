import Image from "next/image";
import type { ReactNode } from "react";
import { Parallax } from "@/components/motion/Parallax";
import { cn } from "@/lib/utils";

interface MediaFrameProps {
  src: string;
  /** Required. Use "" only for purely decorative images. */
  alt: string;
  /** CSS aspect ratio, e.g. "16/9", "4/5". Ignored when `fill` is true. */
  ratio?: string;
  /** Fill the parent (parent must be positioned and sized). */
  fill?: boolean;
  /** Product cut-out on the light `surface` stage: shown whole, never cropped. */
  cutout?: boolean;
  /** M6 parallax. Full-bleed photography only. */
  parallax?: boolean;
  /** M8: scale 1.03 on hover of the nearest `group` ancestor (cards, rails). */
  zoomOnHover?: boolean;
  /** Visible label for rendered / generated environments (design.md §8, decision 11.3). */
  illustrative?: boolean;
  caption?: ReactNode;
  rounded?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  /** Overlay content (e.g. hero text) rendered above the image. */
  children?: ReactNode;
}

/** Image presentation for the whole site (design.md §16). */
export function MediaFrame({
  src,
  alt,
  ratio = "16/10",
  fill = false,
  cutout = false,
  parallax = false,
  zoomOnHover = false,
  illustrative = false,
  caption,
  rounded = true,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 60vw",
  className,
  imageClassName,
  children,
}: MediaFrameProps) {
  const img = (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn(
        cutout ? "object-contain p-[8%] mix-blend-multiply" : "object-cover",
        zoomOnHover && "transition-transform duration-[800ms] ease-out group-hover:scale-[1.03] motion-reduce:transition-none",
        imageClassName
      )}
    />
  );

  const frame = (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        fill && "h-full",
        rounded && "rounded-media",
        cutout && "bg-surface",
        className
      )}
      style={fill ? undefined : { aspectRatio: ratio }}
    >
      {parallax && !cutout ? <Parallax>{img}</Parallax> : img}
      {children}
      {illustrative && (
        <span className="absolute right-3 bottom-3 rounded-full bg-black/55 px-2.5 py-1 text-[12px] font-[500] text-white backdrop-blur-sm">
          Illustrative scene
        </span>
      )}
    </div>
  );

  if (!caption) {
    return frame;
  }
  return (
    <figure className={fill ? "h-full" : undefined}>
      {frame}
      <figcaption className="mt-3 text-small text-ink-3">{caption}</figcaption>
    </figure>
  );
}
