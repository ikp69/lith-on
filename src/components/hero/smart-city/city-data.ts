/**
 * Smart City Hero — Data Configuration
 *
 * Defines sector metadata, camera waypoints, energy flow paths,
 * and info-card content for the scroll-driven isometric city.
 *
 * All metrics sourced from LITHON_DATA_VAULT.md.
 */

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface SectorConfig {
  id: string;
  label: string;
  shortLabel?: string;
  headline: string;
  description: string;
  metric: string;
  metricLabel: string;
  product: string;
  /** Center point in SVG coords for camera focus */
  focusX: number;
  focusY: number;
  /** Percentage coordinates (0-100%) for HTML overlay positioning */
  pctLeft: number;
  pctTop: number;
  /** Accent color for sector highlight */
  accent: string;
  /** Icon name (Lucide) */
  icon: string;
  ctaText: string;
  ctaHref: string;
}

export interface CameraWaypoint {
  label: string;
  /** viewBox x */
  vx: number;
  /** viewBox y */
  vy: number;
  /** viewBox width */
  vw: number;
  /** viewBox height */
  vh: number;
  /** Which sector is active (null = overview) */
  sectorId: string | null;
}

export interface EnergyPath {
  id: string;
  /** SVG path d attribute */
  d: string;
  /** Flow direction: 'to-bess' = charging, 'from-bess' = discharging */
  direction: 'to-bess' | 'from-bess';
  /** Linked sector ID */
  sectorId: string | null;
}

/* ------------------------------------------------------------------ */
/*  Canvas constants                                                   */
/* ------------------------------------------------------------------ */

export const CANVAS = {
  width: 2752,
  height: 1536,
  viewBox: '0 0 2752 1536',
} as const;

/** Zoom scale when focusing on a sector */
const ZOOM = 1.8;
const ZW = CANVAS.width / ZOOM;
const ZH = CANVAS.height / ZOOM;

function zoomTo(cx: number, cy: number): Pick<CameraWaypoint, 'vx' | 'vy' | 'vw' | 'vh'> {
  return {
    vx: Math.max(0, Math.min(CANVAS.width - ZW, cx - ZW / 2)),
    vy: Math.max(0, Math.min(CANVAS.height - ZH, cy - ZH / 2)),
    vw: ZW,
    vh: ZH,
  };
}

/* ------------------------------------------------------------------ */
/*  Sector definitions (Matched 1:1 to new-bg.png labeled layout)     */
/* ------------------------------------------------------------------ */

export const SECTORS: SectorConfig[] = [
  {
    id: 'ci',
    label: 'Commercial & Industrial Zone',
    shortLabel: 'C&I Zone',
    headline: 'Diesel-Free Factory Power',
    description:
      'Large-scale BESS replaces multi-megawatt diesel generators with silent, zero-emission energy storage. Dynamic demand management cuts peak utility charges by 40–60%.',
    metric: '40–60%',
    metricLabel: 'Peak Demand Reduction',
    product: 'Magna-C&I 260 kWh',
    focusX: 840,
    focusY: 190,
    pctLeft: 30.5,
    pctTop: 12.4,
    accent: '#F74530',
    icon: 'Factory',
    ctaText: 'Explore Industrial BESS',
    ctaHref: '/solutions#ci',
  },
  {
    id: 'cold-storage',
    label: 'Cold Storage & Logistics Hub',
    shortLabel: 'Cold Storage',
    headline: 'Uninterruptible Cold Chain Logistics',
    description:
      'Continuous, clean power for temperature-critical cold storage logistics. Sub-10 ms UPS switchover prevents compressor reboot delays and protects perishable inventory.',
    metric: '<10 ms',
    metricLabel: 'UPS Switchover',
    product: 'LT215 Industrial BESS',
    focusX: 260,
    focusY: 720,
    pctLeft: 9.4,
    pctTop: 46.9,
    accent: '#0284C7',
    icon: 'Snowflake',
    ctaText: 'Explore Cold Chain BESS',
    ctaHref: '/solutions#cold-storage',
  },
  {
    id: 'hospital',
    label: 'Hospital & Medical District',
    shortLabel: 'Hospital & Medical',
    headline: 'Critical Healthcare Life-Safety Power',
    description:
      'SIL-2 rated dual-redundant BESS guarantees zero-flicker power for operating theaters, intensive care units, MRI diagnostics, and temperature-controlled medical storage.',
    metric: '99.999%',
    metricLabel: 'Power Availability',
    product: 'Magna-C&I 260 kWh',
    focusX: 620,
    focusY: 1060,
    pctLeft: 22.5,
    pctTop: 69.0,
    accent: '#DC2626',
    icon: 'HeartPulse',
    ctaText: 'Explore Healthcare BESS',
    ctaHref: '/solutions#healthcare',
  },
  {
    id: 'school',
    label: 'School & Education District',
    shortLabel: 'School & Education',
    headline: 'Zero-Emission School Microgrid',
    description:
      'Modular battery storage paired with rooftop solar powers digital classrooms, laboratories, and sports grounds, eliminating toxic diesel generator exhaust around students.',
    metric: '100%',
    metricLabel: 'Diesel Displacement',
    product: 'Lith-On-50 (48 kWh)',
    focusX: 1580,
    focusY: 680,
    pctLeft: 57.4,
    pctTop: 44.3,
    accent: '#7C3AED',
    icon: 'GraduationCap',
    ctaText: 'Explore Education Microgrids',
    ctaHref: '/solutions#education',
  },
  {
    id: 'residential',
    label: 'Residential & Office Communities',
    shortLabel: 'Residential & Offices',
    headline: 'Solar Storage for Societies & Offices',
    description:
      'Centralized BESS powers elevators, water booster pumps, and common areas in 500+ flat high-rise communities in full compliance with CAQM GRAP diesel ban mandates.',
    metric: '₹4.76 Cr/yr',
    metricLabel: 'Net Annual Savings',
    product: 'Lith-On-50 & LT215',
    focusX: 1340,
    focusY: 1180,
    pctLeft: 48.7,
    pctTop: 76.8,
    accent: '#F59E0B',
    icon: 'Home',
    ctaText: 'Explore Residential BESS',
    ctaHref: '/solutions#residential',
  },
  {
    id: 'university',
    label: 'University & Research Campus',
    shortLabel: 'University Campus',
    headline: 'Campus Microgrid & Grid Independence',
    description:
      'Hybrid solar-plus-storage microgrids power research laboratories, supercomputing centers, and student faculties with 10-year cycle-life warranty.',
    metric: '₹17.76 Cr',
    metricLabel: '10-Yr Cumulative Savings',
    product: 'Max-20HC Container (1 MWh)',
    focusX: 2360,
    focusY: 560,
    pctLeft: 85.8,
    pctTop: 36.5,
    accent: '#0B3388',
    icon: 'Landmark',
    ctaText: 'Explore Campus Microgrids',
    ctaHref: '/solutions#campus',
  },
  {
    id: 'ev-charging',
    label: 'Large EV Charging Plaza',
    shortLabel: 'EV Charging Plaza',
    headline: 'Grid-Buffered Fast Charging Plaza',
    description:
      'Megawatt-scale BESS buffers simultaneous 150–350 kW EV fast charging spikes, drawing from off-peak stored energy and completely eliminating punitive demand charges.',
    metric: '100%',
    metricLabel: 'Demand Charge Elimination',
    product: 'Magna-C&I 260 kWh',
    focusX: 2280,
    focusY: 840,
    pctLeft: 82.8,
    pctTop: 54.7,
    accent: '#10B981',
    icon: 'Zap',
    ctaText: 'Explore EV Charging BESS',
    ctaHref: '/solutions#ev',
  },
];

/* ------------------------------------------------------------------ */
/*  Camera waypoints (scroll-driven)                                   */
/* ------------------------------------------------------------------ */

export const CAMERA_WAYPOINTS: CameraWaypoint[] = [
  // 0: Full overview
  { label: 'overview', vx: 0, vy: 0, vw: CANVAS.width, vh: CANVAS.height, sectorId: null },
  // 1: Commercial & Industrial Zone
  { label: 'ci', ...zoomTo(840, 190), sectorId: 'ci' },
  // 2: Cold Storage & Logistics Hub
  { label: 'cold-storage', ...zoomTo(260, 720), sectorId: 'cold-storage' },
  // 3: Hospital & Medical District
  { label: 'hospital', ...zoomTo(620, 1060), sectorId: 'hospital' },
  // 4: School & Education District
  { label: 'school', ...zoomTo(1580, 680), sectorId: 'school' },
  // 5: Residential & Office Communities
  { label: 'residential', ...zoomTo(1340, 1180), sectorId: 'residential' },
  // 6: University & Research Campus
  { label: 'university', ...zoomTo(2360, 560), sectorId: 'university' },
  // 7: Large EV Charging Plaza
  { label: 'ev-charging', ...zoomTo(2280, 840), sectorId: 'ev-charging' },
  // 8: Final overview
  { label: 'finale', vx: 0, vy: 0, vw: CANVAS.width, vh: CANVAS.height, sectorId: null },
];

/* ------------------------------------------------------------------ */
/*  Energy flow paths (Local Solar-to-BESS-to-Facility Circuits)      */
/* ------------------------------------------------------------------ */

export const ENERGY_PATHS: EnergyPath[] = [
  // 1. Commercial & Industrial: Solar Rooftop → On-Site Magna-BESS → Plant Power
  {
    id: 'flow-ci',
    d: 'M 520 260 L 680 220 L 840 190',
    direction: 'to-bess',
    sectorId: 'ci',
  },
  // 2. Cold Storage: Warehouse Solar Roof → On-Site LT215 BESS → Chillers
  {
    id: 'flow-cold',
    d: 'M 480 640 L 360 680 L 260 720',
    direction: 'to-bess',
    sectorId: 'cold-storage',
  },
  // 3. Hospital: Hospital PV Array → Dual-Redundant BESS Substation → Emergency Wing
  {
    id: 'flow-hospital',
    d: 'M 860 850 L 740 950 L 620 1060',
    direction: 'to-bess',
    sectorId: 'hospital',
  },
  // 4. School: School Rooftop Solar → On-Site Lith-On-50 ESS → Digital Classrooms
  {
    id: 'flow-school',
    d: 'M 1640 560 L 1610 620 L 1580 680',
    direction: 'to-bess',
    sectorId: 'school',
  },
  // 5. Residential: Community Solar → Decentralized Society BESS Hub → Elevators & Lifts
  {
    id: 'flow-res',
    d: 'M 1220 1140 L 1280 1160 L 1340 1180',
    direction: 'to-bess',
    sectorId: 'residential',
  },
  // 6. University: Research Rooftop PV → Max-20HC Campus Container BESS → Science Labs
  {
    id: 'flow-uni',
    d: 'M 2120 420 L 2240 490 L 2360 560',
    direction: 'to-bess',
    sectorId: 'university',
  },
  // 7. EV Plaza: Solar Canopy Glass → Mega-BESS Buffer Containers → Fast-Charging Stalls
  {
    id: 'flow-ev',
    d: 'M 1920 880 L 2100 860 L 2280 840',
    direction: 'to-bess',
    sectorId: 'ev-charging',
  },
];

/* ------------------------------------------------------------------ */
/*  Color palettes                                                     */
/* ------------------------------------------------------------------ */

export const COLORS = {
  day: {
    sky: ['#E8F4FD', '#F0F9FF', '#FFFFFF'],
    ground: '#E8EDE4',
    road: '#D0D5DD',
    buildingLight: '#F5F6F8',
    buildingMid: '#E4E7EC',
    buildingDark: '#D0D5DD',
    buildingAccent: '#C8CDD5',
    window: '#B4C6E0',
    solar: '#1E3A5F',
    solarHighlight: '#3B82F6',
    tree: '#4CAF50',
    treeDark: '#388E3C',
    bessBody: '#475467',
    bessAccent: '#F74530',
    energyFlow: '#0B3388',
    energyGlow: '#3B82F6',
  },
  night: {
    sky: ['#0F172A', '#1E293B', '#334155'],
    ground: '#1E293B',
    road: '#334155',
    buildingLight: '#374151',
    buildingMid: '#2D3748',
    buildingDark: '#1F2937',
    buildingAccent: '#4B5563',
    window: '#FCD34D',
    solar: '#1E293B',
    solarHighlight: '#475467',
    tree: '#2D5A3D',
    treeDark: '#1B3D2A',
    bessBody: '#4B5563',
    bessAccent: '#F74530',
    energyFlow: '#60A5FA',
    energyGlow: '#93C5FD',
  },
} as const;

/* ------------------------------------------------------------------ */
/*  Headline & CTA for the overview states                             */
/* ------------------------------------------------------------------ */

export const OVERVIEW_CONTENT = {
  eyebrow: 'ENERGY STORAGE. CONNECTED.',
  headline: "Powering India's Smart Energy Future.",
  subline: 'One intelligent energy ecosystem. Built for industries, infrastructure and communities.',
  ctaText: 'Explore Solutions',
  ctaHref: '/solutions',
  secondaryCtaText: 'Request Sizing',
  secondaryCtaHref: '/contact',
} as const;

export const FINALE_CONTENT = {
  headline: '500+ MWh Deployed Across 25+ Countries',
  subline: 'From factory floors to residential rooftops — one energy storage platform, engineered in India.',
  ctaText: 'Talk to an Expert',
  ctaHref: '/contact',
} as const;

