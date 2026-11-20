/**
 * Districts of the illustrative city used by the /hero-2 prototype.
 *
 * `focus` is the point (fractions of the overview render, 2048 × 1143) the
 * camera dives to. `marker` sits on the building that identifies the district
 * (kept clear of the drawn Lith-On units so they stay visible).
 * Every figure comes from LITHON_DATA_VAULT.md; chapters without a documented
 * project use a verified product capability instead of a site result.
 */
export interface District {
  id: string;
  sector: string;
  title: string;
  body: string;
  stat: { value: string; label: string };
  href: string;
  cta: string;
  src: string;
  alt: string;
  focus: { x: number; y: number };
  marker: { x: number; y: number };
  /** Side of the frame the caption sits on, away from the drawn BESS unit. */
  side: "left" | "right";
}

export const CITY_OVERVIEW = {
  src: "/images/hero-2/city.webp",
  alt: "Illustrative render of a city district with Lith-On BESS units beside a campus, factory, warehouse, apartment block, EV charging station and hospital",
  width: 2048,
  height: 1143,
} as const;

// Ordered as a loop around the central plaza so the camera path stays short.
export const DISTRICTS: District[] = [
  {
    id: "campus",
    sector: "Universities",
    title: "Solar by day, storage after dark",
    body: "At Invertis University, 1 MWh of Lith-On storage works with 900 kWp of rooftop solar, cutting the campus reliance on diesel generators.",
    stat: { value: "₹2.26 Cr", label: "Saved a year: ₹4.14 Cr on diesel to ₹1.88 Cr" },
    href: "/solutions#solar-shifting",
    cta: "Solar shifting",
    src: "/images/hero-2/campus.webp",
    alt: "Illustrative render: a university campus with rooftop solar and a Lith-On BESS container beside the clock-tower building",
    focus: { x: 0.505, y: 0.28 },
    marker: { x: 0.455, y: 0.24 },
    side: "left",
  },
  {
    id: "manufacturing",
    sector: "Manufacturing",
    title: "Full power on the hottest days",
    body: "IceBattery® ceramic coating keeps the cabinet 15–30°C cooler inside, so storage runs at full power in ambient heat without thermal throttling.",
    stat: { value: "60°C", label: "Ambient heat at full power" },
    href: "/technology",
    cta: "IceBattery® technology",
    src: "/images/hero-2/manufacturing.webp",
    alt: "Illustrative render: a factory with solar on its sawtooth roof and Lith-On BESS containers beside the process tanks",
    focus: { x: 0.765, y: 0.47 },
    marker: { x: 0.735, y: 0.43 },
    side: "left",
  },
  {
    id: "logistics",
    sector: "Warehouses",
    title: "Store the roof's midday surplus",
    body: "Solar energy that would be exported cheaply at noon is stored and released in the evening, when tariffs are highest.",
    stat: { value: ">95%", label: "Round-trip efficiency" },
    href: "/solutions#solar-shifting",
    cta: "Solar shifting",
    src: "/images/hero-2/logistics.webp",
    alt: "Illustrative render: a warehouse with a solar-covered roof, loading docks and a Lith-On BESS cabinet inside a fenced yard",
    focus: { x: 0.78, y: 0.75 },
    marker: { x: 0.79, y: 0.7 },
    side: "left",
  },
  {
    id: "residential",
    sector: "Housing societies",
    title: "Lifts and pumps without diesel",
    body: "For a 500-flat society in Gurugram, 7 MWh of storage takes over from diesel generators, which CAQM GRAP restricts in Delhi-NCR.",
    stat: { value: "73%", label: "Lower annual energy cost: ₹6.52 Cr to ₹1.76 Cr" },
    href: "/solutions#dg-reduction",
    cta: "Diesel replacement",
    src: "/images/hero-2/residential.webp",
    alt: "Illustrative render: an apartment block with rooftop solar and a Lith-On BESS container at its corner",
    focus: { x: 0.52, y: 0.84 },
    marker: { x: 0.52, y: 0.84 },
    side: "left",
  },
  {
    id: "ev-charging",
    sector: "EV charging",
    title: "Charging spikes, flattened",
    body: "The battery discharges through simultaneous fast-charging sessions, so they never set the month's maximum demand charge.",
    stat: { value: "100%", label: "Of demand charges removed, storage-only model" },
    href: "/solutions#peak-shaving",
    cta: "Peak demand shaving",
    src: "/images/hero-2/ev-charging.webp",
    alt: "Illustrative render: an EV charging station under a solar canopy with a Lith-On BESS cabinet beside the forecourt",
    focus: { x: 0.295, y: 0.81 },
    marker: { x: 0.235, y: 0.775 },
    side: "right",
  },
  {
    id: "healthcare",
    sector: "Healthcare",
    title: "No gap when the grid fails",
    body: "Storage takes over in under 10 milliseconds. Lifts keep moving and IT systems keep running, with nothing to restart.",
    stat: { value: "<10 ms", label: "Grid-to-island cutover" },
    href: "/solutions#backup-power",
    cta: "Backup power",
    src: "/images/hero-2/healthcare.webp",
    alt: "Illustrative render: a hospital with rooftop solar and two Lith-On BESS containers in its service yard",
    focus: { x: 0.2, y: 0.5 },
    marker: { x: 0.2, y: 0.5 },
    side: "left",
  },
];
