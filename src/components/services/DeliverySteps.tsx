import type { CSSProperties } from "react";
import { ActiveOnView } from "@/components/motion/ActiveOnView";

/**
 * SRV-02: project delivery as a five-step stepper. The connecting line draws
 * when the stepper enters view (M7): horizontal on desktop, vertical on
 * phones; final state under reduced motion or without JavaScript. Steps follow
 * the turnkey EPC sequence in content/capabilities.md. No week numbers: no
 * source gives a delivery timeline.
 */

export interface DeliveryStep {
  title: string;
  text: string;
}

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";
const delay = (ms: number): CSSProperties => ({ transitionDelay: `${ms}ms` });

export function DeliverySteps({ steps }: { steps: DeliveryStep[] }) {
  return (
    <ActiveOnView amount={0.3}>
      <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-6">
        {/* line: vertical on phones, horizontal on desktop */}
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-line lg:top-[7px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto" />
        <span
          aria-hidden="true"
          className={`absolute top-2 bottom-2 left-[7px] w-px origin-top scale-y-0 bg-lithon-blue group-data-[active=true]:scale-y-100 lg:top-[7px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto lg:origin-left lg:scale-x-0 lg:scale-y-100 lg:group-data-[active=true]:scale-x-100 motion-safe:transition-transform motion-safe:duration-[1200ms] ${EASE} motion-reduce:scale-100`}
        />
        {steps.map((s, i) => (
          <li key={s.title} className="relative pl-10 lg:pt-10 lg:pl-0">
            <span
              aria-hidden="true"
              className="absolute top-0.5 left-0 size-[15px] rounded-full border-2 border-lithon-blue bg-canvas opacity-0 group-data-[active=true]:opacity-100 lg:top-0 motion-safe:transition-opacity motion-safe:duration-500 motion-reduce:opacity-100"
              style={delay(200 + i * 220)}
            />
            <p className="tabular text-small text-ink-3">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 text-heading-3 text-ink">{s.title}</h3>
            <p className="mt-2 text-small text-ink-2">{s.text}</p>
          </li>
        ))}
      </ol>
    </ActiveOnView>
  );
}
