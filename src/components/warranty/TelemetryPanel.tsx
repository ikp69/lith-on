import { ActiveOnView } from "@/components/motion/ActiveOnView";
import { cn } from "@/lib/utils";

/**
 * WAR-03: an illustration of cell-by-cell telemetry, built in HTML and clearly
 * labelled as an illustration (not Lith-On's actual dashboard, and not live
 * data). Sixteen cell voltages, one drifting low and flagged, to explain
 * anomaly detection. Bars grow once on view (M7); nothing loops.
 */

// Illustrative LFP cell voltages (V); index 10 drifts low.
const CELLS = [3.312, 3.314, 3.311, 3.315, 3.313, 3.312, 3.316, 3.314, 3.313, 3.311, 3.284, 3.314, 3.312, 3.315, 3.313, 3.314];
const MIN = 3.26;
const MAX = 3.32;
const FLAGGED = 10;

export function TelemetryPanel() {
  return (
    <ActiveOnView>
      <figure
        className="rounded-media border border-line bg-canvas p-5 shadow-[0_1px_2px_rgba(17,24,39,0.04),0_8px_24px_-12px_rgba(17,24,39,0.12)] sm:p-7"
        aria-label="Illustration of cell-level telemetry: sixteen cell voltages, one of them drifting lower than the rest and flagged for attention."
      >
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-small font-[500] text-ink">Rack 01 · cell voltages</p>
          <p className="rounded-full bg-surface px-2.5 py-0.5 text-[12px] text-ink-2">Illustration</p>
        </div>
        <div className="mt-6 grid h-40 grid-cols-16 items-end gap-1 sm:gap-1.5" aria-hidden="true">
          {CELLS.map((v, i) => (
            <div key={`c${i}-${v}`} className="flex h-full flex-col justify-end">
              <div
                className={cn(
                  "w-full origin-bottom scale-y-0 rounded-t-[3px] group-data-[active=true]:scale-y-100 motion-safe:transition-transform motion-safe:duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:scale-y-100",
                  i === FLAGGED ? "bg-lithon-red" : "bg-lithon-blue/70"
                )}
                style={{ height: `${((v - MIN) / (MAX - MIN)) * 100}%`, transitionDelay: `${i * 35}ms` }}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[12px] text-ink-3 tabular" aria-hidden="true">
          <span>Cell 1</span>
          <span>Cell 16</span>
        </div>
        <figcaption className="mt-5 flex items-start gap-3 border-t border-line pt-4 text-small text-ink-2">
          <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 rounded-full bg-lithon-red" />
          <span>
            Cell 11 is reading lower than its neighbours. A drift like this raises an alert to our Noida operations centre before it affects the system.
          </span>
        </figcaption>
      </figure>
    </ActiveOnView>
  );
}
