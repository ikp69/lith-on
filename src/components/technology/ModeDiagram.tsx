"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * TEC-05: the six energy-management modes (LITHON_DATA_VAULT.md §2) as
 * controls for one flow diagram. Selecting a mode changes which paths carry
 * power and in which direction. Flow animation is CSS (`flowDash`), off under
 * reduced motion. Schematic: no power values are implied.
 */

type Edge = "solar" | "grid" | "load" | "dg";
type Flow = { edge: Edge; dir: "in" | "out"; note?: string };

const MODES: { id: string; name: string; text: string; flows: Flow[]; gridState?: "off" | "noexport"; dgState?: "standby" }[] = [
  { id: "peak", name: "Peak shaving", text: "During demand spikes the battery adds power, so grid draw stays under the contracted limit.", flows: [{ edge: "grid", dir: "in", note: "Capped" }, { edge: "load", dir: "out" }] },
  { id: "tod", name: "Time-of-day tariffs", text: "Charges from the grid when tariffs are low and supplies the site when they are high.", flows: [{ edge: "grid", dir: "in", note: "Off-peak" }, { edge: "load", dir: "out", note: "Peak hours" }] },
  { id: "diesel", name: "Diesel minimisation", text: "The battery carries the load so a generator, where kept, runs only for long outages.", flows: [{ edge: "load", dir: "out" }], dgState: "standby" },
  { id: "solar", name: "Solar self-consumption", text: "Midday solar is stored and released in the evening instead of being exported cheaply.", flows: [{ edge: "solar", dir: "in" }, { edge: "load", dir: "out", note: "Evening" }] },
  { id: "ups", name: "Critical backup", text: "When the grid fails the system takes over in under 10 milliseconds.", flows: [{ edge: "load", dir: "out" }], gridState: "off" },
  { id: "zero", name: "Zero feed-in", text: "Solar is used on site and stored, and never exported where export is not allowed.", flows: [{ edge: "solar", dir: "in" }, { edge: "load", dir: "out" }], gridState: "noexport" },
];

// Node centres (viewBox 640 x 400); the hub is the Lith-On system.
const HUB = { x: 320, y: 190 };
const NODES: Record<Edge, { x: number; y: number; label: string; labelSide: "right" | "below" }> = {
  solar: { x: 320, y: 48, label: "Solar", labelSide: "right" },
  grid: { x: 90, y: 190, label: "Grid", labelSide: "below" },
  load: { x: 550, y: 190, label: "Site load", labelSide: "below" },
  dg: { x: 90, y: 320, label: "Diesel", labelSide: "below" },
};

/**
 * Line icons drawn on a 48 x 48 box centred on (0, 0). Stroke colour comes
 * from the parent group, so they mute with their node.
 */
function NodeIcon({ edge }: { edge: Edge }) {
  switch (edge) {
    case "solar":
      return (
        <g>
          {/* sun */}
          <circle cx="12" cy="-14" r="5" />
          <path d="M12 -23v3M12 -8v3M3 -14h3M18 -14h3M5.6 -20.4l2 2M16.4 -9.6l2 2M18.4 -20.4l-2 2M7.6 -9.6l-2 2" />
          {/* tilted panel with cell grid, on a stand */}
          <path d="M-20 14 L-12 -4 L10 -4 L18 14 Z" />
          <path d="M-16 5 L14 5 M-5.3 -4 L-3.3 14 M3.3 -4 L7.3 14" />
          <path d="M-1 14 V22 M-8 22 H8" />
        </g>
      );
    case "grid":
      return (
        <g>
          {/* transmission pylon */}
          <path d="M-6 -22 L6 -22 L14 22 M-6 -22 L-14 22 M-16 -12 H16 M-12 0 H12 M-8 -12 L9 0 M8 -12 L-9 0 M-11 0 L12 22 M11 0 L-12 22" />
          <path d="M-16 -12 V-8 M16 -12 V-8 M-12 0 V4 M12 0 V4" />
        </g>
      );
    case "load":
      return (
        <g>
          {/* factory with saw-tooth roof and a chimney */}
          <path d="M-22 20 V-2 L-11 -10 V-2 L0 -10 V-2 L11 -10 V20 Z" />
          <path d="M11 20 H22 V-20 H15 V-10" />
          <path d="M-15 8 h5 M-4 8 h5 M-15 14 h5 M-4 14 h5" />
        </g>
      );
    case "dg":
      return (
        <g>
          {/* generator set: housing, vent, exhaust, skid */}
          <rect x="-22" y="-10" width="44" height="24" rx="3" />
          <path d="M-16 -4 V8 M-11 -4 V8 M-6 -4 V8" />
          <circle cx="11" cy="2" r="6" />
          <path d="M14 -10 V-20 H19" />
          <path d="M-24 18 H24" />
        </g>
      );
    default:
      return null;
  }
}

function pathFor(edge: Edge, dir: "in" | "out") {
  const n = NODES[edge];
  const a = dir === "in" ? n : HUB;
  const b = dir === "in" ? HUB : n;
  return `M${a.x} ${a.y} L${b.x} ${b.y}`;
}

export function ModeDiagram() {
  const [modeId, setModeId] = useState("peak");
  const mode = MODES.find((m) => m.id === modeId) ?? MODES[0];
  const active = (e: Edge) => mode.flows.find((f) => f.edge === e);

  return (
    <div>
      <fieldset>
        <legend className="sr-only">Energy management mode</legend>
        <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex w-max gap-1 rounded-full bg-surface p-1">
            {MODES.map((m) => (
              <button
                key={m.id}
                type="button"
                aria-pressed={m.id === modeId}
                onClick={() => setModeId(m.id)}
                className={cn(
                  "min-h-11 whitespace-nowrap rounded-full px-4 text-small font-[500] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue",
                  m.id === modeId ? "bg-white text-ink shadow-[0_1px_3px_rgb(15_23_42/0.12)]" : "text-ink-2 hover:text-ink"
                )}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>
      </fieldset>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-6">
        <div className="lg:col-span-8">
          <svg viewBox="0 0 640 400" className="h-auto w-full" role="img" aria-label={`${mode.name}: ${mode.text}`}>
            <title>{`${mode.name}: ${mode.text}`}</title>
            {(Object.keys(NODES) as Edge[]).map((e) => {
              const f = active(e);
              const n = NODES[e];
              const muted = !f;
              return (
                <g key={e}>
                  <line x1={n.x} y1={n.y} x2={HUB.x} y2={HUB.y} className="stroke-line-strong" strokeWidth="1.5" />
                  {f && (
                    <path
                      d={pathFor(e, f.dir)}
                      className="fill-none stroke-lithon-blue motion-safe:animate-[flowDash_1.2s_linear_infinite]"
                      strokeWidth="3"
                      strokeDasharray="10 4"
                      strokeLinecap="round"
                    />
                  )}
                  {f?.note && (
                    <text x={(n.x + HUB.x) / 2} y={(n.y + HUB.y) / 2 - 12} textAnchor="middle" className="fill-lithon-blue text-[13px] max-sm:text-[22px] font-[500]">
                      {f.note}
                    </text>
                  )}
                  <circle cx={n.x} cy={n.y} r="40" className={muted ? "fill-white stroke-line-strong" : "fill-white stroke-lithon-blue"} strokeWidth="2" />
                  <g
                    transform={`translate(${n.x} ${n.y})`}
                    className={cn("fill-none transition-colors duration-300", muted ? "stroke-ink-3" : "stroke-lithon-blue")}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <NodeIcon edge={e} />
                  </g>
                  <text
                    x={n.labelSide === "right" ? n.x + 54 : n.x}
                    y={n.labelSide === "right" ? n.y + 5 : n.y + 64}
                    textAnchor={n.labelSide === "right" ? "start" : "middle"}
                    className={cn("text-[14px] max-sm:text-[22px] font-[500]", muted ? "fill-ink-3" : "fill-ink")}
                  >
                    {n.label}
                  </text>
                </g>
              );
            })}
            {mode.gridState === "off" && (
              <g className="stroke-lithon-red" strokeWidth="3" strokeLinecap="round">
                <line x1="185" y1="176" x2="211" y2="202" />
                <line x1="211" y1="176" x2="185" y2="202" />
              </g>
            )}
            {mode.gridState === "noexport" && (
              <text x="205" y="176" textAnchor="middle" className="fill-ink-2 text-[13px] max-sm:text-[22px] font-[500]">
                No export
              </text>
            )}
            {mode.dgState === "standby" && (
              <text x="205" y="268" textAnchor="middle" className="fill-ink-3 text-[13px] max-sm:text-[22px]">
                Standby
              </text>
            )}
            {/* hub */}
            {/* hub: the real Magna-C&I cabinet (catalogue render) on a card */}
            <rect x={HUB.x - 62} y={HUB.y - 78} width="124" height="156" rx="14" className="fill-white stroke-lithon-blue" strokeWidth="2" />
            <image
              href="/images/products/catalogue/magna-ci-260.webp"
              x={HUB.x - 40}
              y={HUB.y - 68}
              width="80"
              height="118"
              preserveAspectRatio="xMidYMid meet"
            />
            <text x={HUB.x} y={HUB.y + 66} textAnchor="middle" className="fill-lithon-blue text-[13px] max-sm:text-[20px] font-[500]">
              Lith-On BESS
            </text>
          </svg>
        </div>
        <div className="lg:col-span-4" aria-live="polite">
          <p className="text-heading-3 text-ink">{mode.name}</p>
          <p className="mt-3 text-body text-ink-2">{mode.text}</p>
          <p className="mt-6 text-small text-ink-3">Schematic. The energy management system switches between these modes automatically.</p>
        </div>
      </div>
    </div>
  );
}
