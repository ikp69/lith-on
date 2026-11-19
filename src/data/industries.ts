/**
 * Lith-On Central Industries Data
 *
 * Defines the priority customer sectors Lith-On serves,
 * their unique operational challenges, applicable system configurations,
 * and verified outcomes.
 */

export interface IndustrySector {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  image: string;
  challenge: string;
  solution: string;
  typicalRoi: string;
  recommendedHardware: string;
  highlights: string[];
}

export const INDUSTRIES_DATA: IndustrySector[] = [
  {
    id: "education",
    slug: "education",
    title: "Educational Campuses & Universities",
    shortTitle: "Education",
    tagline: "Solar-Hybrid Microgrids for 24/7 Silent Academic & Hostel Operations",
    image: "/images/installations/invertis-bess-yard.jpg",
    challenge: "Modern universities house computing centers, research laboratories, and student hostels requiring 24/7 continuous electricity. Running multi-megawatt diesel generators generates disruptive engine noise near lecture halls, high fuel transport bills, and blackouts during sudden grid outages.",
    solution: "Turnkey 1.0 MWh BESS paired with campus rooftop solar arrays (proven at Invertis University Bareilly campus). The system stores surplus midday solar energy for evening hostel study hours and switches over in sub-10ms during grid faults.",
    typicalRoi: "4.29-Year Payback",
    recommendedHardware: "Magna-C&I 260 kWh / Max-20HC (1 MWh Skids)",
    highlights: [
      "Annual net savings of ₹2.26 Crore and ₹17.76 Crore in 10-year cumulative savings (Invertis model)",
      "Stores 100% of daytime surplus rooftop solar generation for evening peak hostel hours",
      "Eliminates 418,000 liters of diesel fuel transport and tanker deliveries inside campus grounds",
      "Near-silent (<55 dB) operation provides pristine acoustic conditions for academic lectures and exams"
    ]
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    title: "Heavy Manufacturing & Industrial Plants",
    shortTitle: "Manufacturing",
    tagline: "Sub-10ms Islanding to Eliminate Machinery Stoppage & Maximum Demand Penalties",
    image: "/images/industries/industrial-sector.webp",
    challenge: "Plastics injection molding, automotive component lines, chemical reactors, and CNC machine shops cannot endure even a 1-second power interruption without tool recalibration and batch spoilage. Simultaneous motor startups trigger heavy 15-minute HT maximum demand penalties.",
    solution: "Liquid-cooled LT215 and Magna-C&I BESS providing true online power conditioning and millisecond-response peak shaving. The BESS discharges dynamically to clamp utility demand spikes within contracted limits.",
    typicalRoi: "3.2 – 3.9 Year Payback",
    recommendedHardware: "LT215 Liquid-Cooled (215 kWh) & Magna-C&I (260 kWh)",
    highlights: [
      "Sub-10ms cutover prevents robot rebooting, PLC resets, and expensive industrial batch destruction",
      "Liquid-cooling loop holds cell temperature delta under 2.5°C in continuous 50°C+ factory ambient heat",
      "Completely eliminates utility Maximum Demand surcharges (saving ₹20–₹50 Lakh annually per plant)",
      "Direct Modbus TCP / IEC 61850 communication integrates into plant central DCS control rooms"
    ]
  },
  {
    id: "commercial",
    slug: "commercial",
    title: "High-Rise Residential & Commercial Tech Parks",
    shortTitle: "Commercial & Residential",
    tagline: "100% CAQM GRAP Compliant Diesel Generator Replacement",
    image: "/images/industries/commercial-sector.webp",
    challenge: "Traditional diesel generators require 10–30s to crank and synchronize, stranding residents in elevators and resetting office IT networks. In Delhi-NCR, winter CAQM GRAP mandates ban diesel generators outright, while annual diesel expenses exceed ₹4 to ₹6.5 Crore in large gated societies.",
    solution: "Centralized BESS arrays tied to common area distribution boards, charging on off-peak tariffs and instantly powering elevators, booster pumps, and common lighting upon grid failure.",
    typicalRoi: "1.6 – 2.4 Year Payback",
    recommendedHardware: "Magna-C&I 260 kWh / Lith-On-50 (48–192 kWh)",
    highlights: [
      "Sub-10ms static transfer switch keeps dozens of elevators and water booster pumps running without a flicker",
      "100% compliant with CAQM GRAP Stage II–IV winter air pollution directives (zero smoke, zero PM2.5)",
      "Reduces common-area power OPEX from ₹6.52 Crore to ₹1.76 Crore annually (73% savings)",
      "Replaces deafening 85+ dB mechanical diesel engine roar with whisper-quiet solid-state operation"
    ]
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Critical Care Hospitals & Medical Districts",
    shortTitle: "Healthcare",
    tagline: "Mission-Critical Online Power for Surgical Suites, ICUs & Diagnostics",
    image: "/images/industries/hospital-sector.webp",
    challenge: "Operating rooms, ICUs, neonatal incubators, dialysis equipment, and MRI suites cannot endure even a millisecond voltage drop. Traditional diesel generators have dangerous 10–30s startup delays, emit noxious exhaust incompatible with patient wards, and create severe acoustic vibration.",
    solution: "Hospital-grade Magna-C&I BESS providing true online UPS power quality with zero transfer delay, zero emissions, and silent operation installed directly adjacent to clinical wards.",
    typicalRoi: "Life-Safety Critical",
    recommendedHardware: "Magna-C&I 260 kWh (Dual-Redundant Configuration)",
    highlights: [
      "Zero millisecond power interruption for surgical robotic arms, ventilators, and dialysis systems",
      "100% fume-free and vibration-free installation",
      "IceBattery® thermal passive barrier ensures continuous backup during extreme summer heat waves",
      "Integrated aerosol fire protection with multi-gas early thermal runaway detectors"
    ]
  },
  {
    id: "ev-infrastructure",
    slug: "ev-infrastructure",
    title: "High-Power EV Fast-Charging Plazas",
    shortTitle: "EV Infrastructure",
    tagline: "Grid-Buffered Fast Charging Plazas Eliminating Demand Charges",
    image: "/images/industries/commercial-sector.webp",
    challenge: "Simultaneous 60 kW to 350 kW DC fast chargers trigger immense instantaneous power draws, causing utility Maximum Demand surcharges (40%–60% of total bills) or exceeding existing substation transformer ratings.",
    solution: "LT215 (215 kWh) and Magna-C&I (260 kWh) acting as high-rate battery energy buffers, trickle-charging during off-peak hours and discharging instantly during fast-charging sessions.",
    typicalRoi: "3.9-Year Payback",
    recommendedHardware: "LT215 Liquid-Cooled (215 kWh) & Magna-C&I",
    highlights: [
      "Hybrid solar + BESS model saves ₹20.26 Lakh a year at a highway fast-charging hub",
      "Enables ultra-fast DC charging on existing connections without waiting 12–18 months for utility transformer upgrades",
      "Pairs directly with canopy solar PV arrays to deliver 100% green electric vehicle charging",
      "Liquid-cooling loop handles continuous rapid charge-discharge cycling in high ambient temperatures"
    ]
  },
  {
    id: "data-centers",
    slug: "data-centers",
    title: "Edge Computing & Data Centers",
    shortTitle: "Data Centers",
    tagline: "Sub-10ms Line Conditioning & Megawatt Battery Backup",
    image: "/images/products/lithon-module-clean.png",
    challenge: "Edge data nodes and telecommunications exchanges require pristine voltage sine waves with zero harmonic distortion (<3% THD) and instantaneous backup to avoid server reboots and packet loss.",
    solution: "Lith-On high-voltage lithium battery racks and bi-directional PCS inverters delivering instant synthetic inertia and clean line conditioning.",
    typicalRoi: "High Uptime SLA",
    recommendedHardware: "Magna-C&I 260 kWh & High-Voltage Modular Racks",
    highlights: [
      "Clean sinusoidal AC output with <3% THD protecting high-density computing servers",
      "Integrated 24/7 cloud SCADA telemetry with predictive cell health algorithms",
      "Replaces heavy lead-acid / VRLA battery banks with 3x higher energy density LFP racks",
      "Modular parallel expansion supporting multi-megawatt server hall growth"
    ]
  }
];

