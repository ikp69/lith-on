import { Fragment } from "react";
import type { Comparison } from "@/data/comparisons";
import { cn } from "@/lib/utils";

/**
 * Two-option comparison (design.md §16 spec table). Desktop: a real table with
 * the Lith-On column highlighted by a blue rule. Phones: each parameter
 * becomes a stacked row with both answers labelled. No cards, no icons.
 */
export function CompareTable({ data, className }: { data: Comparison; className?: string }) {
  return (
    <div className={className}>
      {/* md and up: table */}
      <table className="hidden w-full border-collapse text-left md:table">
        <caption className="sr-only">{data.title}</caption>
        <colgroup>
          <col className="w-[22%]" />
          <col className="w-[39%]" />
          <col className="w-[39%]" />
        </colgroup>
        <thead>
          <tr>
            <td />
            <th scope="col" className="border-t-2 border-lithon-blue pt-4 pb-3 pr-6 text-body font-[500] text-lithon-blue">
              {data.oursLabel}
            </th>
            <th scope="col" className="border-t-2 border-line-strong pt-4 pb-3 text-body font-[500] text-ink-2">
              {data.theirsLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.groups.map((g) => (
            <Fragment key={g.title ?? "rows"}>
              {g.title && (
                <tr>
                  <th scope="colgroup" colSpan={3} className="pt-8 pb-2 text-small font-[500] text-ink-3">
                    {g.title}
                  </th>
                </tr>
              )}
              {g.rows.map((r) => (
                <tr key={r.parameter} className="border-t border-line align-top">
                  <th scope="row" className="py-4 pr-6 text-small font-[500] text-ink">
                    {r.parameter}
                  </th>
                  <td className="py-4 pr-6 text-small text-ink">{r.ours}</td>
                  <td className="py-4 text-small text-ink-2">{r.theirs}</td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>

      {/* phones: stacked */}
      <div className="md:hidden">
        {data.groups.map((g) => (
          <div key={g.title ?? "rows"} className={cn(g.title && "mt-8 first:mt-0")}>
            {g.title && <p className="text-small font-[500] text-ink-3">{g.title}</p>}
            <dl>
              {g.rows.map((r) => (
                <div key={r.parameter} className="border-b border-line py-4">
                  <dt className="text-body font-[500] text-ink">{r.parameter}</dt>
                  <dd className="mt-2 grid grid-cols-[6.5rem_1fr] gap-x-3 gap-y-2 text-small">
                    <span className="text-lithon-blue">{data.oursLabel}</span>
                    <span className="text-ink">{r.ours}</span>
                    <span className="text-ink-3">{data.theirsLabel}</span>
                    <span className="text-ink-2">{r.theirs}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <p className="mt-5 max-w-3xl text-small text-ink-3">{data.note}</p>
    </div>
  );
}

/** Section wrapper used on Solutions and Technology. */
export function CompareSection({ data }: { data: Comparison }) {
  return (
    <section id={data.id} aria-labelledby={`${data.id}-title`} className="scroll-mt-24">
      <div className="container-site">
        <div className="mb-8 lg:grid lg:grid-cols-12 lg:items-end lg:gap-6">
          <h2 id={`${data.id}-title`} className="text-heading-1 text-ink lg:col-span-7">
            {data.title}
          </h2>
          <p className="mt-4 text-lead text-ink-2 lg:col-span-5 lg:mt-0">{data.lead}</p>
        </div>
        <CompareTable data={data} />
      </div>
    </section>
  );
}
