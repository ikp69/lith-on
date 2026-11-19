import { ActiveOnView } from "@/components/motion/ActiveOnView";

/**
 * CSD-02: annual cost before and after Lith-On storage as two horizontal bars
 * that grow when they enter view (M7; final state under reduced motion or
 * without JavaScript). Bar length is proportional to the values given.
 */
export function BeforeAfter({
  before,
  after,
  caption,
}: {
  before: { label: string; value: number; display: string; note?: string };
  after: { label: string; value: number; display: string; note?: string };
  caption: string;
}) {
  const max = Math.max(before.value, after.value, 1);
  const grow =
    "origin-left scale-x-0 group-data-[active=true]:scale-x-100 motion-safe:transition-transform motion-safe:duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:scale-x-100";
  const row = (r: typeof before, colour: string, delay: number) => (
    <div className="border-t border-line py-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <p className="text-body font-[500] text-ink">{r.label}</p>
        <p className="tabular text-heading-2 text-ink">{r.display}</p>
      </div>
      <div className="mt-4 h-3 rounded-full bg-surface" aria-hidden="true">
        <div className={`h-3 rounded-full ${colour} ${grow}`} style={{ width: `${Math.max(1.5, (r.value / max) * 100)}%`, transitionDelay: `${delay}ms` }} />
      </div>
      {r.note && <p className="mt-2 text-small text-ink-3">{r.note}</p>}
    </div>
  );
  return (
    <ActiveOnView>
      <figure>
        {row(before, "bg-lithon-red", 0)}
        {row(after, "bg-lithon-blue", 250)}
        <figcaption className="border-t border-line pt-3 text-small text-ink-3">{caption}</figcaption>
      </figure>
    </ActiveOnView>
  );
}
