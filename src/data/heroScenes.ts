export interface HeroSceneData {
  id: string;
  indexNumber: string;
  tabLabel: string;
  category: string;
  headline: string;
  highlightText: string;
  description: string;
  keyMetric: string;
  metricLabel: string;
  hardwareBadge: string;
  specs: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  backgroundImage: string;
  bessImage: string;
  bessCaption: string;
  alt: string;
}

export const HERO_SCENES: HeroSceneData[] = [
  {
    id: "residential",
    indexNumber: "01",
    tabLabel: "High-Rise Residential",
    category: "CAQM GRAP Compliant Societies",
    headline: "Clean Diesel Replacement for",
    highlightText: "High-Rise Housing Societies",
    description:
      "100% CAQM GRAP winter ban compliance. Eliminates elevator blackout stalls, corridor darkness, and pump trips while slashing annual diesel bills from ₹6.52 Cr to ₹1.76 Cr.",
    keyMetric: "₹4.76 Cr",
    metricLabel: "Annual Direct DG Savings",
    hardwareBadge: "Lith-On Industrial BESS",
    specs: "Sub-10ms UPS • 60°C Heat Rating • 6,000+ Cycles",
    primaryCtaText: "Talk to an Expert",
    primaryCtaHref: "/contact?sector=residential",
    secondaryCtaText: "View Society Model",
    secondaryCtaHref: "/case-studies#residential_society_500",
    backgroundImage: "/images/hero-sec/scene-residential.webp",
    bessImage: "/images/hero-sec/bess-shelter-anchor.webp",
    bessCaption: "Industrial BESS Shelter with LĒTH-ON Cabinets",
    alt: "Modern apartments with solar carport, paved forecourt, and standalone Lith-On BESS installation",
  },
  {
    id: "healthcare",
    indexNumber: "02",
    tabLabel: "Hospitals & Healthcare",
    category: "Mission-Critical Healthcare",
    headline: "Zero-Blackout Energy Storage for",
    highlightText: "Hospitals & Trauma Centers",
    description:
      "Sub-10ms true online UPS switchover safeguarding surgical suites, ICUs, neonatal ventilators, and dialysis centers with 100% silent, fume-free power.",
    keyMetric: "<10 ms",
    metricLabel: "Instant UPS Switchover",
    hardwareBadge: "Lith-On Industrial BESS",
    specs: "Zero Fumes • <55 dB Silent • IEC 61508 Certified",
    primaryCtaText: "Talk to an Expert",
    primaryCtaHref: "/contact?sector=healthcare",
    secondaryCtaText: "Explore Healthcare BESS",
    secondaryCtaHref: "/industries#healthcare",
    backgroundImage: "/images/hero-sec/scene-hospital.webp",
    bessImage: "/images/hero-sec/bess-shelter-anchor.webp",
    bessCaption: "Industrial BESS Shelter with LĒTH-ON Cabinets",
    alt: "Modern hospital campus exterior with standalone Lith-On BESS installation",
  },
  {
    id: "commercial",
    indexNumber: "03",
    tabLabel: "Commercial & Tech Parks",
    category: "Autonomous Peak Arbitrage",
    headline: "Demand Management & Buffering for",
    highlightText: "Tech Parks & EV Fast Chargers",
    description:
      "Autonomous Time-of-Day (ToD) tariff arbitrage and multi-vehicle EV charging spike buffering (60 kW–350 kW), eliminating 40%–60% maximum demand penalty charges.",
    keyMetric: "40%–60%",
    metricLabel: "Demand Charge Reduction",
    hardwareBadge: "Lith-On Industrial BESS",
    specs: "ToD Arbitrage • Dual-Port EV Fast Buffering",
    primaryCtaText: "Talk to an Expert",
    primaryCtaHref: "/contact?sector=commercial",
    secondaryCtaText: "Explore Solutions",
    secondaryCtaHref: "/solutions",
    backgroundImage: "/images/hero-sec/scene-commercial.webp",
    bessImage: "/images/hero-sec/bess-shelter-anchor.webp",
    bessCaption: "Industrial BESS Shelter with LĒTH-ON Cabinets",
    alt: "Modern office and industrial campus with standalone Lith-On BESS installation",
  },
  {
    id: "campus",
    indexNumber: "04",
    tabLabel: "Universities & Campuses",
    category: "Institutional Solar Microgrids",
    headline: "Hybrid Solar & Storage Microgrids for",
    highlightText: "Universities & Campuses",
    description:
      "Demonstrated at Invertis University (1 MWh BESS + 900 kWp solar): powers research labs, compute centers, and residential student hostels 24/7 with ₹2.26 Cr annual savings.",
    keyMetric: "1 MWh",
    metricLabel: "Campus Solar-BESS Microgrid",
    hardwareBadge: "Lith-On Industrial BESS",
    specs: "1 MWh Deployed • ₹2.26 Cr/Yr Saved",
    primaryCtaText: "Talk to an Expert",
    primaryCtaHref: "/contact?sector=education",
    secondaryCtaText: "Read University Case Study",
    secondaryCtaHref: "/case-studies#invertis_university",
    backgroundImage: "/images/hero-sec/scene-university.webp",
    bessImage: "/images/hero-sec/bess-shelter-anchor.webp",
    bessCaption: "Industrial BESS Shelter with LĒTH-ON Cabinets",
    alt: "Modern university courtyard with clock tower and standalone Lith-On BESS installation",
  },
  {
    id: "industrial",
    indexNumber: "05",
    tabLabel: "Manufacturing & Heavy Industry",
    category: "Continuous Industrial Power",
    headline: "Uninterrupted Battery Storage for",
    highlightText: "Heavy Manufacturing & Factories",
    description:
      "Eliminates costly assembly line tripouts, automated machinery resets, and batch spoilage across plastics, food processing, and pharmaceuticals with 1.5–3 year payback.",
    keyMetric: "1.5–3 Yr",
    metricLabel: "Proven Payback Period",
    hardwareBadge: "Lith-On Industrial BESS",
    specs: "250 MWh Noida Capacity • High-Surge Motor Starting",
    primaryCtaText: "Talk to an Expert",
    primaryCtaHref: "/contact?sector=industrial",
    secondaryCtaText: "Calculate Savings",
    secondaryCtaHref: "/calculator",
    backgroundImage: "/images/hero-sec/scene-industrial.webp",
    bessImage: "/images/hero-sec/bess-shelter-anchor.webp",
    bessCaption: "Industrial BESS Shelter with LĒTH-ON Cabinets",
    alt: "Modern industrial complex with landscaped grounds and standalone Lith-On BESS installation",
  },
];
