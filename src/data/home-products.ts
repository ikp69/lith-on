/**
 * Home & small business range, from the Lith-On BESS products catalogue
 * (data-sources/Lith-On Catalogue, pages 8–21). Figures copied from the
 * catalogue spec tables; photos cropped from the catalogue product pages.
 * Shown on /products#home-small-business. See CLAIMS_REVIEW item 16.
 */

export interface HomeProduct {
  id: string;
  name: string;
  kind: string;
  headline: string;
  headlineUnit: string;
  specs: { label: string; value: string }[];
  image: string;
  alt: string;
}

export const HOME_PRODUCTS: HomeProduct[] = [
  {
    id: "wall-5kwh",
    name: "NEES-5 wall-mount battery",
    kind: "Energy storage system",
    headline: "5",
    headlineUnit: "kWh",
    specs: [
      { label: "Energy", value: "4.8 kWh / 5.12 kWh (48 V / 51.2 V, 100 Ah)" },
      { label: "Cycle life", value: "≥ 4,800 cycles at 80% DoD, 25 °C" },
      { label: "Expansion", value: "Up to 16 modules in parallel" },
    ],
    image: "/images/products/home/wall-5kwh.webp",
    alt: "Lith-On wall-mount battery with display in a living room",
  },
  {
    id: "stackable",
    name: "NESS-5LV stackable battery",
    kind: "Energy storage system",
    headline: "4.8–38.4",
    headlineUnit: "kWh",
    specs: [
      { label: "Modules", value: "1 to 8 (NESS-5LV1 to NESS-5LV8), 48–384 V" },
      { label: "Cycle life", value: "6,000 cycles, LFP" },
      { label: "Protection", value: "IP65, floor installation" },
    ],
    image: "/images/products/home/stackable.webp",
    alt: "Lith-On stackable battery tower of five modules in a living room",
  },
  {
    id: "lithium-1kwh",
    name: "1 kWh lithium battery",
    kind: "Lead-acid replacement",
    headline: "1.28",
    headlineUnit: "kWh",
    specs: [
      { label: "Rating", value: "12.8 V, 100 Ah LiFePO4" },
      { label: "Cycle life", value: "> 6,000 cycles at 100% DoD" },
      { label: "Use", value: "Works with existing home inverters" },
    ],
    image: "/images/products/home/lithium-1kwh.webp",
    alt: "Lith-On lithium battery unit beside a bed",
  },
  {
    /* Catalogue p.28 (src/data/deck-content: prod-erickshaw). Availability under owner review (docs/OWNER_REVIEW.md R11). */
    id: "erickshaw",
    name: "E-rickshaw battery",
    kind: "Mobility battery",
    headline: "51.2",
    headlineUnit: "V",
    specs: [
      { label: "Capacity", value: "86 Ah to 200 Ah LiFePO4, with embedded BMS" },
      { label: "Life", value: "> 3,500 cycles; calendar life over 10 years" },
      { label: "Weight", value: "About 50% lighter and 40% smaller than lead-AGM" },
    ],
    image: "/images/products/home/erickshaw-battery.webp",
    alt: "Two Lith-On e-rickshaw battery packs, one upright and one flat",
  },
  {
    id: "inverter-600va",
    name: "600 VA solar inverter",
    kind: "Off-grid inverter with built-in lithium battery",
    headline: "600",
    headlineUnit: "VA",
    specs: [
      { label: "Output", value: "480 W, 220 V single phase" },
      { label: "Battery", value: "12.8 V LiFePO4, 50 / 86 / 100 Ah" },
      { label: "Solar input", value: "Up to 660 Wp" },
    ],
    image: "/images/products/home/inverter-600va.webp",
    alt: "Lith-On wall-mounted inverter with round display",
  },
  {
    id: "inverter-1kva",
    name: "1 kVA solar inverter",
    kind: "Off-grid inverter with built-in lithium battery",
    headline: "1",
    headlineUnit: "kVA",
    specs: [
      { label: "Output", value: "800 W, 220 V single phase" },
      { label: "Battery", value: "12.8 V LiFePO4, 50 / 86 / 100 Ah" },
      { label: "Solar input", value: "Up to 660 Wp" },
    ],
    image: "/images/products/home/inverter-1kva.webp",
    alt: "Lith-On floor-standing inverter with round display in a bedroom",
  },
  {
    id: "inverter-2kva",
    name: "2 kVA solar inverter",
    kind: "Off-grid inverter with built-in lithium battery",
    headline: "2",
    headlineUnit: "kVA",
    specs: [
      { label: "Output", value: "1,600 W, 220 V single phase" },
      { label: "Battery", value: "25.6 V LiFePO4, 50 / 86 / 100 Ah" },
      { label: "Solar input", value: "Up to 1,500 Wp" },
    ],
    image: "/images/products/home/inverter-2kva.webp",
    alt: "Lith-On wall-mounted inverter with digital display",
  },
  {
    id: "inverter-3kva",
    name: "3 kVA solar inverter",
    kind: "Off-grid inverter with built-in lithium battery",
    headline: "3",
    headlineUnit: "kVA",
    specs: [
      { label: "Output", value: "2,400 W, 220 V single phase" },
      { label: "Battery", value: "25.6 V LiFePO4, 86 / 100 Ah" },
      { label: "Solar input", value: "Up to 2,000 Wp" },
    ],
    image: "/images/products/home/inverter-3kva.webp",
    alt: "Lith-On inverter with round display beside a wood-panelled wall",
  },
];
