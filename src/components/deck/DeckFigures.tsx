import type { Figure } from "@/data/deck-content/types";
import { cn } from "@/lib/utils";

/** A row of figures (value, label, optional note) from deck content. Values are strings, shown as written. */
export function DeckFigures({ figures, className }: { figures: readonly Figure[]; className?: string }) {
  return (
    <dl className={cn("grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {figures.map((f) => (
        <div key={f.label} className="border-t border-line pt-4">
          <dt className="sr-only">{f.label}</dt>
          <dd className="tabular text-heading-2 text-ink">{f.value}</dd>
          <dd className="mt-1 text-small text-ink-2">{f.label}</dd>
          {f.note && <dd className="mt-1 text-small text-ink-3">{f.note}</dd>}
        </div>
      ))}
    </dl>
  );
}
