import type { DataTable, SourceRef } from "@/data/deck-content/types";
import { DECKS } from "@/data/deck-content/types";
import { cn } from "@/lib/utils";

/** "Source: Housing Society presentation, p.10" for the figcaption. */
export const sourceLine = (sources: readonly SourceRef[]): string => {
  const first = sources[0];
  if (!first) {
    return "";
  }
  return `Source: ${DECKS[first.deck].title}, p.${first.pages.join(", ")}`;
};

/**
 * A plain, ruled data table for deck content (src/data/deck-content). The
 * first column reads as the row label; numeric cells use tabular figures.
 * The last row is emphasised when `totalRow` is set.
 */
export function DeckTable({
  table,
  sources,
  totalRow = false,
  className,
}: {
  table: DataTable;
  sources?: readonly SourceRef[];
  totalRow?: boolean;
  className?: string;
}) {
  const lastIndex = table.rows.length - 1;
  return (
    <figure className={cn("min-w-0", className)}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-left text-small">
          <caption className="pb-3 text-left text-body font-[500] text-ink">{table.caption}</caption>
          <thead>
            <tr className="border-y border-line-strong">
              {table.columns.map((c, i) => (
                <th key={c || `col-${i}`} scope="col" className="py-3 pr-4 font-[500] text-ink-3">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, r) => (
              <tr key={row.join("|")} className={cn("border-b border-line", totalRow && r === lastIndex && "border-b-line-strong")}>
                {row.map((cell, c) =>
                  c === 0 ? (
                    <th key={`${row[0]}-${c}`} scope="row" className={cn("py-3 pr-4 align-top font-[500] text-ink", totalRow && r === lastIndex && "font-[600]")}>
                      {cell}
                    </th>
                  ) : (
                    <td key={`${row[0]}-${c}`} className={cn("tabular py-3 pr-4 align-top text-ink-2", totalRow && r === lastIndex && "font-[600] text-ink")}>
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {sources && sources.length > 0 && <figcaption className="mt-3 text-small text-ink-3">{sourceLine(sources)}</figcaption>}
    </figure>
  );
}
