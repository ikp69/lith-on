import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge needs to know the design-system type scale (design.md §5);
 * otherwise `text-body` is mistaken for a colour and dropped when combined
 * with a colour class such as `text-ink-2`.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["display-xl", "display-l", "heading-1", "heading-2", "heading-3", "lead", "body", "small", "label", "stat-xl", "stat-l"],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
