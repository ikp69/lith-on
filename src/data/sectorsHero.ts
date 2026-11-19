export type SectorHeroSlide = {
  id: string;
  tabLabel: string;
  category: string;
  headline: string;
  highlightText: string;
  description: string;
  keyMetric: string;
  metricLabel: string;
  hardwareBadge: string;
  image: string;
  alt: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
};

export const SECTORS_HERO_DATA: SectorHeroSlide[] = [
  {
    id: "healthcare",
    tabLabel: "Hospitals & Healthcare",
    category: "Mission-Critical Healthcare",
    headline: "Zero-Blackout Energy Storage for",
    highlightText: "Hospitals & Trauma Centers",
    description:
      "Sub-10ms true online UPS switchover safeguarding surgical suites, ICUs, neonatal ventilators, and dialysis centers with 100% silent, fume-free power.",
    keyMetric: "<10 ms",
    metricLabel: "Instant UPS Switchover",
    hardwareBadge: "Magna-C&I 260 kWh",
    image: "/images/sectors/hospital-sector.webp",
    alt: "Modern hospital facility powered by Lith-On clean battery energy storage system",
    primaryCtaText: "Talk to an Expert",
    primaryCtaHref: "/contact?sector=healthcare",
    secondaryCtaText: "Explore Healthcare BESS",
    secondaryCtaHref: "/industries#healthcare",
  },
  {
    id: "industrial",
    tabLabel: "Manufacturing & Heavy Industry",
    category: "Continuous Industrial Power",
    headline: "Uninterrupted Battery Storage for",
    highlightText: "Heavy Manufacturing & Factories",
    description:
      "Eliminates costly assembly line tripouts, automated machinery resets, and batch spoilage across plastics, food processing, and pharmaceuticals with 1.5–3 year payback.",
    keyMetric: "1.5–3 Yr",
    metricLabel: "Proven Payback Period",
    hardwareBadge: "LT215 & Magna-C&I",
    image: "/images/sectors/industrial-sector.webp",
    alt: "Industrial manufacturing plant with integrated Lith-On battery energy storage architecture",
    primaryCtaText: "Talk to an Expert",
    primaryCtaHref: "/contact?sector=industrial",
    secondaryCtaText: "Calculate Savings",
    secondaryCtaHref: "/calculator",
  },
  {
    id: "residential",
    tabLabel: "High-Rise Housing Societies",
    category: "CAQM GRAP Compliant Societies",
    headline: "Clean Diesel Replacement for",
    highlightText: "High-Rise Housing Societies",
    description:
      "100% CAQM GRAP winter ban compliance. Eliminates elevator blackout stalls, corridor darkness, and pump trips while slashing annual diesel bills from ₹6.52 Cr to ₹1.76 Cr.",
    keyMetric: "₹4.76 Cr",
    metricLabel: "Annual Direct DG Savings",
    hardwareBadge: "Lith-On-50 & Magna-C&I",
    image: "/images/sectors/residential-sector.webp",
    alt: "Modern high-rise residential community with rooftop solar and Lith-On battery energy storage",
    primaryCtaText: "Talk to an Expert",
    primaryCtaHref: "/contact?sector=residential",
    secondaryCtaText: "View Society Model",
    secondaryCtaHref: "/case-studies#residential_society_500",
  },
  {
    id: "campus",
    tabLabel: "Universities & Campuses",
    category: "Institutional Solar Microgrids",
    headline: "Hybrid Solar & Storage Microgrids for",
    highlightText: "Universities & Campuses",
    description:
      "Demonstrated at Invertis University (1 MWh BESS + 900 kWp solar): powers research labs, compute centers, and residential student hostels 24/7 with ₹2.26 Cr annual savings.",
    keyMetric: "1 MWh",
    metricLabel: "Campus Solar-BESS Microgrid",
    hardwareBadge: "Magna-C&I Microgrid",
    image: "/images/sectors/campus-sector.webp",
    alt: "University engineering campus powered by solar panels and Lith-On battery storage systems",
    primaryCtaText: "Talk to an Expert",
    primaryCtaHref: "/contact?sector=education",
    secondaryCtaText: "Read University Case Study",
    secondaryCtaHref: "/case-studies#invertis_university",
  },
  {
    id: "commercial",
    tabLabel: "Commercial Parks & EV Hubs",
    category: "Autonomous Peak Arbitrage",
    headline: "Demand Management & Buffering for",
    highlightText: "Tech Parks & EV Fast Chargers",
    description:
      "Autonomous Time-of-Day (ToD) tariff arbitrage and multi-vehicle EV charging spike buffering (60 kW–350 kW), eliminating 40%–60% maximum demand penalty charges.",
    keyMetric: "40%–60%",
    metricLabel: "Demand Charge Reduction",
    hardwareBadge: "Max-20HC 5.0 MWh & LT215",
    image: "/images/sectors/commercial-sector.webp",
    alt: "Modern commercial technology park and EV charging hub with containerized Lith-On energy storage",
    primaryCtaText: "Talk to an Expert",
    primaryCtaHref: "/contact?sector=commercial",
    secondaryCtaText: "Explore Solutions",
    secondaryCtaHref: "/solutions",
  },
];

export const HERO_TICKER_ITEMS: { sector: string; highlight: string; spec: string }[] = [
  {
    sector: "Hospitals & healthcare",
    highlight: "Sub-10ms cutover for ICUs, neonatal & surgical suites",
    spec: "Zero Fumes • <55 dB Silent",
  },
  {
    sector: "Heavy manufacturing",
    highlight: "Zero production line tripouts & batch spoilage protection",
    spec: "1.5–3 Year ROI • High Surge Support",
  },
  {
    sector: "High-rise residential",
    highlight: "100% CAQM GRAP winter compliant silent elevator backup",
    spec: "Saves ₹4.76 Cr/Year • 1.6-Yr Payback",
  },
  {
    sector: "Universities & campuses",
    highlight: "Solar-hybrid microgrids for research labs & student hostels",
    spec: "1 MWh Deployed • ₹2.26 Cr/Year Saved",
  },
  {
    sector: "EV fast-charging hubs",
    highlight: "Buffers 60 kW–350 kW simultaneous vehicle charging spikes",
    spec: "Clips Max Demand Penalties",
  },
  {
    sector: "Defense & border posts",
    highlight: "Ruggedized containerized microgrids for Indian Army in J&K",
    spec: "IceBattery® -20°C to +60°C Extreme",
  },
];
