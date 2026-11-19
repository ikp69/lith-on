import type { ElementType, ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface SectionIntroProps {
  title: ReactNode;
  /** One sentence. Keep it short; the section's composition does the rest. */
  lead?: ReactNode;
  as?: ElementType;
  align?: "left" | "center";
  /** Place the lead beside the title on desktop (wide sections). */
  split?: boolean;
  tone?: "light" | "dark";
  /** M1 reveal on entering view (default true). Set false for static sections. */
  reveal?: boolean;
  className?: string;
}

/**
 * Section opener (design.md §16): a heading and an optional one-sentence lead.
 * Replaces the eyebrow pill + two-tone headline pattern. No pill, no icon.
 */
export function SectionIntro({
  title,
  lead,
  as: Tag = "h2",
  align = "left",
  split = false,
  tone = "light",
  reveal = true,
  className,
}: SectionIntroProps) {
  const body = (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "mx-auto max-w-3xl text-center",
        split && "lg:grid lg:grid-cols-12 lg:items-end lg:gap-6",
        className
      )}
    >
      <Tag
        className={cn(
          "text-heading-1 text-balance [overflow-wrap:break-word] min-w-0",
          tone === "dark" ? "text-on-dark" : "text-ink",
          split ? "lg:col-span-7" : "max-w-[18ch]",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </Tag>
      {lead && (
        <p
          className={cn(
            "mt-5 text-lead text-pretty",
            tone === "dark" ? "text-on-dark-2" : "text-ink-2",
            split ? "lg:col-span-5 lg:mt-0" : "measure",
            align === "center" && "mx-auto"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
  return reveal ? <Reveal>{body}</Reveal> : body;
}
