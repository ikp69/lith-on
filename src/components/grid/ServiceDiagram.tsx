import type { CSSProperties, ReactNode } from "react";
import { ActiveOnView } from "@/components/motion/ActiveOnView";

/**
 * Line diagrams for the grid services bento (GRD-02), animated with the M7
 * diagram draw (20 Nov 2026, owner request). Each diagram sits in an
 * ActiveOnView group: lines draw in, the storage response follows the
 * baseline, and the server, no-JS and reduced-motion output is the final
 * state. Utility integration keeps a slow data flow running between the
 * system and the control room (paused under reduced motion).
 * One idea per diagram, ink with a single blue or red accent. Decorative:
 * each tile's heading and text carry the meaning.
 */

export type GridDiagram = "frequency" | "firming" | "deferral" | "reactive" | "integration";

const stroke = { fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } as const;

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";
/** Path draws from start to end; the path needs pathLength="1". */
const draw = `[stroke-dasharray:1] [stroke-dashoffset:1] group-data-[active=true]:[stroke-dashoffset:0] motion-safe:transition-[stroke-dashoffset] motion-safe:duration-[1200ms] ${EASE} motion-reduce:[stroke-dashoffset:0]`;
const fade = "opacity-0 group-data-[active=true]:opacity-100 motion-safe:transition-opacity motion-safe:duration-500 motion-reduce:opacity-100";
const growY = `[transform-box:fill-box] origin-bottom scale-y-0 group-data-[active=true]:scale-y-100 motion-safe:transition-transform motion-safe:duration-[800ms] ${EASE} motion-reduce:scale-y-100`;
const pop = `[transform-box:fill-box] origin-center scale-0 group-data-[active=true]:scale-100 motion-safe:transition-transform motion-safe:duration-500 ${EASE} motion-reduce:scale-100`;

const delay = (ms: number): CSSProperties => ({ transitionDelay: `${ms}ms` });

function Frame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <ActiveOnView className="w-full max-w-[280px]" amount={0.6}>
      <svg viewBox="0 0 240 120" className="h-auto w-full" aria-hidden="true" focusable="false">
        <title>{label}</title>
        <line x1="12" y1="104" x2="228" y2="104" stroke="#E5E7EB" strokeWidth="1" />
        {children}
      </svg>
    </ActiveOnView>
  );
}

export function ServiceDiagram({ type }: { type: GridDiagram }) {
  switch (type) {
    case "frequency":
      // Frequency dips after a trip; with storage the dip is shallow and recovers fast.
      return (
        <Frame label="Frequency recovering quickly after a dip">
          <line x1="12" y1="40" x2="228" y2="40" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="3 4" />
          <path pathLength={1} className={draw} d="M12 40 H80 C100 40 104 96 128 96 C150 96 170 54 228 48" stroke="#9CA3AF" strokeWidth="1.5" {...stroke} />
          <path pathLength={1} className={draw} style={delay(500)} d="M12 40 H80 C92 40 96 58 108 58 C120 58 128 42 228 40" stroke="#0B3388" strokeWidth="2.5" {...stroke} />
          <circle className={pop} style={delay(300)} cx="80" cy="40" r="3.5" fill="#F74530" />
        </Frame>
      );
    case "firming":
      // Solar peak at midday is stored and shifted into the evening.
      return (
        <Frame label="Solar output stored at midday and shifted to the evening">
          <path pathLength={1} className={draw} d="M20 104 C60 104 70 24 110 24 C150 24 160 104 200 104" stroke="#9CA3AF" strokeWidth="1.5" {...stroke} />
          <path pathLength={1} className={draw} style={delay(450)} d="M84 52 C96 30 124 30 136 52" stroke="#0B3388" strokeWidth="2.5" {...stroke} />
          <path className={fade} style={delay(900)} d="M136 52 C146 60 148 66 150 72" stroke="#0B3388" strokeWidth="1.5" strokeDasharray="3 3" {...stroke} />
          <path className={growY} style={delay(1100)} d="M150 72 H214 V104 H150 Z" fill="#0B3388" fillOpacity="0.12" stroke="#0B3388" strokeWidth="2" />
        </Frame>
      );
    case "deferral":
      // Substation load stays under its thermal limit when storage shaves the peak.
      return (
        <Frame label="Substation load kept below its limit">
          <line className={fade} x1="12" y1="44" x2="228" y2="44" stroke="#F74530" strokeWidth="1.5" strokeDasharray="4 4" />
          <path pathLength={1} className={draw} style={delay(200)} d="M12 84 C50 80 70 70 96 50 C110 38 118 18 132 18 C146 18 152 40 170 56 C190 72 210 78 228 80" stroke="#9CA3AF" strokeWidth="1.5" {...stroke} />
          <path pathLength={1} className={draw} style={delay(700)} d="M12 84 C50 80 70 70 96 50 L108 46 H156 L170 56 C190 72 210 78 228 80" stroke="#0B3388" strokeWidth="2.5" {...stroke} />
        </Frame>
      );
    case "reactive":
      // Four-quadrant operation: the power vector sweeps round to show it can point any way.
      return (
        <Frame label="Four-quadrant power: active and reactive in any direction">
          <line x1="120" y1="12" x2="120" y2="104" stroke="#E5E7EB" strokeWidth="1" />
          <line x1="40" y1="58" x2="200" y2="58" stroke="#E5E7EB" strokeWidth="1" />
          <circle pathLength={1} className={draw} cx="120" cy="58" r="40" stroke="#D1D5DB" strokeWidth="1" fill="none" transform="rotate(-90 120 58)" />
          <path className={fade} style={delay(400)} d="M120 58 L94 86" stroke="#9CA3AF" strokeWidth="1.5" {...stroke} />
          <g
            className={`origin-[120px_58px] -rotate-[135deg] group-data-[active=true]:rotate-0 motion-safe:transition-transform motion-safe:duration-[1200ms] ${EASE} motion-reduce:rotate-0`}
            style={delay(300)}
          >
            <path d="M120 58 L148 30" stroke="#0B3388" strokeWidth="2.5" {...stroke} />
            <path d="M140 30 H148 V38" stroke="#0B3388" strokeWidth="2.5" {...stroke} />
          </g>
        </Frame>
      );
    default:
      // integration: storage system linked to a utility control room, data flowing both ways.
      return (
        <Frame label="Storage system linked to utility control">
          <rect className={fade} x="28" y="52" width="64" height="40" rx="4" stroke="#111827" strokeWidth="1.5" fill="none" />
          <rect className={fade} style={delay(200)} x="152" y="40" width="60" height="52" rx="4" stroke="#111827" strokeWidth="1.5" fill="none" />
          <line className={fade} style={delay(400)} x1="164" y1="56" x2="200" y2="56" stroke="#9CA3AF" strokeWidth="1.5" />
          <line className={fade} style={delay(450)} x1="164" y1="66" x2="192" y2="66" stroke="#9CA3AF" strokeWidth="1.5" />
          <g className={fade} style={delay(600)}>
            <path className="animate-flow-dash" d="M92 66 H152" stroke="#0B3388" strokeWidth="2.5" strokeDasharray="7 7" {...stroke} />
            <path className="animate-flow-dash [animation-direction:reverse]" d="M92 78 H152" stroke="#0B3388" strokeWidth="1.5" strokeDasharray="7 7" {...stroke} />
          </g>
          <circle cx="44" cy="64" r="3.5" fill="#F74530" className="motion-safe:animate-pulse" />
        </Frame>
      );
  }
}
