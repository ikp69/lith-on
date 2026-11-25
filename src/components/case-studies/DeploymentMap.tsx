import Image from "next/image";

/**
 * Deployments across India (deck content: cs-deployment-map). The outline is
 * public/images/maps/india.svg, made from simplemaps.com's free India SVG
 * (data-sources/in.svg), with the states that have installations tinted.
 * Markers are placed from latitude and longitude using the SVG's own Mercator
 * projection, fitted to its calibration points:
 *   x = 27.381 × lon − 1767.12,  y = −1568.64 × ln(tan(45° + lat / 2)) + 1139.91
 * Sites: Corporate Deck p.10 and the installation slide shared by the sales
 * decks; clients from LITHON_DATA_VAULT.md §4D.
 */

const VIEW = { x: 91, y: 37, w: 818, h: 926 };

const project = (lat: number, lon: number) => {
  const x = 27.381_040_5 * lon - 1767.124_78;
  const y = -1568.641 * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)) + 1139.91;
  return { left: ((x - VIEW.x) / VIEW.w) * 100, top: ((y - VIEW.y) / VIEW.h) * 100 };
};

interface Site {
  place: string;
  lat: number;
  lon: number;
  /** Display offset in % of the map, only to keep neighbouring markers from overlapping. */
  nudge?: { x: number; y: number };
  clients: { name: string; what: string }[];
}

const SITES: Site[] = [
  {
    place: "Jammu & Kashmir",
    lat: 34.08,
    lon: 74.8,
    clients: [
      { name: "Indian Army", what: "Power for border forward operational bases, Srinagar and J&K" },
      { name: "NTPC", what: "Installations in Jammu & Kashmir" },
    ],
  },
  { place: "Jaipur, Rajasthan", lat: 26.91, lon: 75.79, clients: [{ name: "RVUNL", what: "Substation buffering" }] },
  {
    place: "Delhi-NCR",
    lat: 28.61,
    lon: 77.21,
    clients: [
      { name: "PwC", what: "Backup for the corporate headquarters, New Delhi" },
      { name: "Fuel retail", what: "Station power, Ghaziabad" },
    ],
  },
  {
    place: "Lucknow, Uttar Pradesh",
    lat: 26.85,
    lon: 80.95,
    nudge: { x: 1.2, y: -1 },
    clients: [
      { name: "NTPC", what: "Installations at NTPC sites" },
      { name: "Fuel retail", what: "Station power stabilisation" },
    ],
  },
  { place: "Kanpur, Uttar Pradesh", lat: 26.45, lon: 80.33, nudge: { x: -1.4, y: 1.2 }, clients: [{ name: "RSPL", what: "Battery storage installation" }] },
  { place: "Shravasti, Uttar Pradesh", lat: 27.51, lon: 82.05, clients: [{ name: "NTPC", what: "Installation at NTPC Shravasti" }] },
  { place: "Patna, Bihar", lat: 25.59, lon: 85.14, clients: [{ name: "Fuel retail", what: "Station power stabilisation" }] },
];

export function DeploymentMap() {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-6">
      <figure className="lg:col-span-6">
        <div className="relative mx-auto aspect-[818/926] w-full max-w-[560px]">
          <Image src="/images/maps/india.svg" alt="" fill unoptimized className="select-none object-contain" />
          <ol aria-hidden="true">
            {SITES.map((s, i) => {
              const pos = project(s.lat, s.lon);
              return (
                <li
                  key={s.place}
                  className="absolute flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-lithon-blue text-[11px] font-[600] text-white ring-2 ring-white sm:size-7 sm:text-[12px]"
                  style={{ left: `${pos.left + (s.nudge?.x ?? 0)}%`, top: `${pos.top + (s.nudge?.y ?? 0)}%` }}
                >
                  {i + 1}
                </li>
              );
            })}
          </ol>
        </div>
        <figcaption className="mt-3 text-center text-small text-ink-3">Shaded states have Lith-On installations. Map: simplemaps.com</figcaption>
      </figure>

      <ol className="border-t border-line lg:col-span-6">
        {SITES.map((s, i) => (
          <li key={s.place} className="grid grid-cols-[2.25rem_1fr] border-b border-line py-4">
            <span className="tabular flex size-6 items-center justify-center rounded-full bg-lithon-blue text-[11px] font-[600] text-white">{i + 1}</span>
            <div>
              <p className="text-body font-[500] text-ink">{s.place}</p>
              <ul className="mt-1 space-y-0.5 text-small text-ink-2">
                {s.clients.map((c) => (
                  <li key={`${c.name}-${c.what}`}>
                    <span className="text-ink">{c.name}:</span> {c.what}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
