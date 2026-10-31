export interface ProductDetail {
  id: string;
  slug: string;
  name: string;
  modelCode: string;
  tagline: string;
  category: "Commercial" | "Industrial" | "Utility" | "Modular";
  image: string;
  diagramImage?: string;
  capacity: string;
  powerRating: string;
  chemistry: string;
  cycleLife: string;
  enclosureRating: string;
  formFactor: string;
  typicalUser: string;
  scalability: string;
  coolingMethod: string;
  switchoverTime: string;
  thermalTech: string;
  dimensions: string;
  weight: string;
  acVoltage: string;
  dcVoltage: string;
  efficiency: string;
  operatingTemp: string;
  warranty: string;
  certifications: string[];
  applications: string[];
  keyFeatures: string[];
  overview: string;
  faqs: { question: string; answer: string }[];
}

export const PRODUCTS_DATA: ProductDetail[] = [
  {
    id: "magna-ci",
    slug: "magna-ci",
    name: "Magna-C&I 260 kWh",
    modelCode: "LO-MC-260",
    tagline: "All-in-One Outdoor Energy Storage Cabinet with Integrated PCS for C&I Facilities",
    category: "Commercial",
    image: "/images/products/magna-ci-cabinet.png",
    diagramImage: "/images/products/bess-3d-cutaway.jpg",
    capacity: "260 kWh",
    powerRating: "100 kW / 125 kW",
    chemistry: "Tier-1 LiFePO4 (LFP)",
    cycleLife: ">6,000 Cycles @ 88% DoD",
    enclosureRating: "IP55 Outdoor Weatherproof",
    formFactor: "Integrated All-in-One Outdoor Cabinet",
    typicalUser: "Commercial Malls, IT Parks, Multi-Story Commercial Complexes & Mid-Sized Manufacturing",
    scalability: "Parallel connection up to 10 units (2.6 MWh capacity)",
    coolingMethod: "Smart Liquid / Dual-Chamber HVAC Hybrid",
    switchoverTime: "<10 ms Instantaneous UPS Transition",
    thermalTech: "IceBattery® Ceramic Passive Thermal Shield (300–400µm coating)",
    dimensions: "1,450 × 1,300 × 2,250 mm",
    weight: "~2,850 kg",
    acVoltage: "415V AC, 3-Phase 50 Hz",
    dcVoltage: "768V DC Nominal (High-Voltage Architecture)",
    efficiency: ">95% Round-Trip System Efficiency",
    operatingTemp: "-20°C to +60°C Full-Power Ambient",
    warranty: "10-Year Performance Manufacturer Warranty",
    certifications: ["IEC 61508 (SIL 2/3)", "IEC 61850", "BIS Certified", "CE", "ISO 9001:2015"],
    applications: [
      "Commercial Building Peak Demand Shaving",
      "CAQM GRAP Stage II–IV Diesel Generator Replacement",
      "Rooftop Solar PV Smoothing & Self-Consumption",
      "Critical Facility Instantaneous UPS Cutover"
    ],
    keyFeatures: [
      "IceBattery® ceramic coating reduces internal cabinet temperature by 15°C–30°C",
      "Sub-10ms automatic cutover keeps elevators, data servers, and medical equipment running",
      "Integrated aerosol + multi-sensor fire suppression system",
      "Pre-assembled, factory-tested, and pre-commissioned at Noida plant for rapid deployment"
    ],
    overview: "The Magna-C&I 260 kWh is Lith-On's flagship commercial energy storage system. Engineered specifically for Indian climatic extremes and demanding industrial tariffs, it packages Tier-1 LFP cell modules, an intelligent Power Conversion System (PCS), proprietary IceBattery® passive thermal coating, and an edge Energy Management System (EMS) into a single compact, IP55-rated weatherproof footprint. It is 100% compliant with CAQM GRAP diesel generator replacement mandates.",
    faqs: [
      {
        question: "Can Magna-C&I 260 replace a diesel generator during NCR GRAP pollution bans?",
        answer: "Yes, 100%. Magna-C&I is zero-emission, eliminates diesel fuel logistics, produces zero particulate matter, and switches over in under 10ms—preventing the power interruptions common to diesel gensets."
      },
      {
        question: "How does IceBattery® technology protect the system in peak Indian summers?",
        answer: "IceBattery® uses a 300–400µm inorganic ceramic coating with high Near-Infrared solar reflectance and Far-Infrared atmospheric emissivity (>0.92). It radiates internal heat directly into deep space, dropping internal cabinet temperatures by 15°C–30°C and cutting cooling power consumption by >20%."
      },
      {
        question: "What is the expected lifespan and warranty?",
        answer: "The Magna-C&I delivers over 6,000 cycles at 88% Depth of Discharge, corresponding to a 15–20 year operational lifespan. Lith-On provides a comprehensive 10-year manufacturer performance warranty backed by our Noida factory service network."
      }
    ]
  },
  {
    id: "lithon-50",
    slug: "lithon-50",
    name: "Lith-On-50 (48 kWh)",
    modelCode: "LO-50-48",
    tagline: "Modular Commercial BESS for Fuel Stations, Telecom Towers & Institutional Hubs",
    category: "Modular",
    image: "/images/products/lithon-50-module.png",
    capacity: "48 kWh (Scalable to 192 kWh)",
    powerRating: "30 kW / 50 kW",
    chemistry: "Tier-1 LiFePO4 (LFP)",
    cycleLife: ">6,000 Cycles @ 90% DoD",
    enclosureRating: "IP54 Compact Weather-Resistant",
    formFactor: "Ultra-Compact Modular Cabinet",
    typicalUser: "Highway Fuel Outlets, Telecom Base Stations, Bank Branches & Retail Chains",
    scalability: "Modular rack expansion up to 4 units in parallel",
    coolingMethod: "Dual-Chamber Smart Forced Air with Thermal Partitioning",
    switchoverTime: "<10 ms Seamless Transfer",
    thermalTech: "Ceramic Thermal Barriers + Module-Level Temperature Sensors",
    dimensions: "950 × 850 × 1,850 mm",
    weight: "~680 kg",
    acVoltage: "415V AC, 3-Phase 50 Hz",
    dcVoltage: "512V DC Nominal",
    efficiency: ">96% Round-Trip System Efficiency",
    operatingTemp: "-10°C to +55°C Ambient",
    warranty: "10-Year Performance Manufacturer Warranty",
    certifications: ["BIS Certified", "IEC 62619", "CE", "ISO 9001:2015"],
    applications: [
      "Highway Fuel Dispenser & Retail Canopy UPS",
      "Telecom Base Transceiver Station (BTS) Hybrid Power",
      "School & Small Healthcare Microgrids",
      "Bank Branch & ATM Cluster Energy Resilience"
    ],
    keyFeatures: [
      "Direct drop-in replacement for 62.5–125 kVA diesel generators",
      "Zero noise (<65 dB), zero emissions, zero fuel theft risk",
      "Integrated Cloud IoT SCADA with real-time mobile app telemetry",
      "Flexible Capex or Opex leasing options"
    ],
    overview: "The Lith-On-50 is engineered for decentralized critical applications where physical space is constrained and continuous power availability is mandatory. With a compact 0.8 sq. meter footprint, it directly replaces 62.5 to 125 kVA diesel generators at highway petrol retail pumps, telecom towers, and bank branches, eliminating fuel maintenance headaches and diesel expense.",
    faqs: [
      {
        question: "How long does Lith-On-50 run fuel dispensers during a grid blackout?",
        answer: "At a typical 4-dispenser retail fuel station with POS billing and canopy lights (consuming ~10-12 kW average), a single 48 kWh unit delivers 4 to 5 hours of continuous runtime without any diesel generator."
      },
      {
        question: "Can it be monitored remotely across multiple branch sites?",
        answer: "Yes. Every Lith-On-50 includes integrated 4G/LTE cloud SCADA telemetry. Fleet managers can monitor battery state-of-charge, grid availability, temperature, and health metrics across hundreds of locations from a single web dashboard."
      }
    ]
  },
  {
    id: "lt215",
    slug: "lt215",
    name: "LT215 Industrial BESS",
    modelCode: "LO-LT-215",
    tagline: "High-Density Liquid-Cooled Energy Storage Cabinet for Heavy Manufacturing",
    category: "Industrial",
    image: "/images/products/lt215-container.png",
    diagramImage: "/images/installations/commercial-campus-bess.jpg",
    capacity: "215 kWh",
    powerRating: "100 kW / 110 kW",
    chemistry: "Tier-1 LiFePO4 (LFP)",
    cycleLife: ">6,000 Cycles @ 88% DoD",
    enclosureRating: "IP55 Liquid-Cooled Heavy Duty",
    formFactor: "Heavy Industrial Liquid-Cooled Skid Enclosure",
    typicalUser: "Automotive Component Plants, Textile Mills, Chemical Facilities & Plastic Injection Centers",
    scalability: "Multi-cabinet parallel clustering up to 2.15 MWh",
    coolingMethod: "Precision Closed-Loop Liquid Thermal Balancing (ΔT < 2.5°C)",
    switchoverTime: "<10 ms Industrial UPS Transfer",
    thermalTech: "IceBattery® Heavy-Duty Exterior Coating + Liquid Cold Plate Distribution",
    dimensions: "1,350 × 1,200 × 2,200 mm",
    weight: "~2,650 kg",
    acVoltage: "415V AC, 3-Phase 50 Hz",
    dcVoltage: "768V DC Nominal (1P240S Cell Configuration)",
    efficiency: ">95.5% Round-Trip System Efficiency",
    operatingTemp: "-25°C to +60°C Ambient",
    warranty: "10-Year Performance Manufacturer Warranty",
    certifications: ["IEC 61508", "IEC 61850", "BIS Certified", "CE", "ISO 14001:2015"],
    applications: [
      "Industrial HT Demand Peak Shaving (DHBVN / UPPCL Tariffs)",
      "Continuous Machinery Voltage Dip & Sag Protection",
      "Captive Solar PV Smoothing & Maximum Demand Control",
      "Full CAQM GRAP Regulatory Diesel Compliance"
    ],
    keyFeatures: [
      "Closed-loop liquid cooling keeps cell-to-cell thermal difference under 2.5°C for maximum cycle life",
      "Eliminates monthly contract demand penalties by shaving factory peak load spikes",
      "Sub-10ms transfer stops expensive CNC machine reboots and injection mold spoilage",
      "Built-in multi-level electrical safety with DC rapid disconnect"
    ],
    overview: "The LT215 Industrial BESS delivers ultra-dense, liquid-cooled energy storage specifically for manufacturing enterprises penalised by steep Maximum Demand charges and frequent grid voltage dips. Engineered with a 1P240S cell string and closed-loop liquid thermal distribution, it maintains uniform cell temperatures even under continuous high-rate industrial cycling in harsh factory surroundings.",
    faqs: [
      {
        question: "How does the LT215 reduce HT electricity bills?",
        answer: "By actively monitoring factory load at the HT incomer. When machines spike power usage, the LT215 discharges in milliseconds to cap peak consumption below the contracted maximum demand threshold, directly eliminating costly grid surcharges."
      },
      {
        question: "Why is liquid cooling superior to air cooling for industrial plants?",
        answer: "Liquid cooling maintains cell temperature variations within <2.5°C across the entire battery pack, compared to 5°C–8°C in conventional air-cooled cabinets. This thermal uniformity prevents premature cell degradation, extends system cycle life by >25%, and ensures consistent performance in high-ambient factory environments."
      }
    ]
  },
  {
    id: "max-20hc",
    slug: "max-20hc",
    name: "Max-20HC-5000 (5.0 MWh)",
    modelCode: "LO-MAX-5000",
    tagline: "20-ft High-Cube Containerized Utility-Scale Battery Energy Storage System",
    category: "Utility",
    image: "/images/products/lt215-container.png",
    diagramImage: "/images/products/bess-3d-cutaway.jpg",
    capacity: "5,000 kWh (5.0 MWh)",
    powerRating: "1,250 kW / 2,500 kW",
    chemistry: "Tier-1 LiFePO4 (LFP)",
    cycleLife: ">6,000 Cycles @ 90% DoD",
    enclosureRating: "IP55 Standard 20ft High-Cube Shipping Container",
    formFactor: "ISO 20ft High-Cube Containerized Energy Storage Unit",
    typicalUser: "Utility Transmission Substations, Independent Power Producers (IPPs), Large Solar Parks & Mining Complexes",
    scalability: "Multi-container grid scaling (10 MWh, 50 MWh, 100+ MWh farms)",
    coolingMethod: "Industrial Dual-Circuit Liquid Chiller System",
    switchoverTime: "<20 ms Grid Teleprotection & Autonomous Islanding",
    thermalTech: "IceBattery® Solar Reflective Ceramic Shell + Multi-Zone Industrial Chiller",
    dimensions: "6,058 × 2,438 × 2,896 mm (Standard 20ft HC ISO)",
    weight: "~42,000 kg",
    acVoltage: "690V AC / MV Step-Up to 11kV/33kV via integrated transformer skid",
    dcVoltage: "1,152V–1,500V DC Utility High-Voltage",
    efficiency: ">96% System Round-Trip Efficiency",
    operatingTemp: "-30°C to +60°C Extreme Ambient",
    warranty: "10-Year Comprehensive Performance Warranty",
    certifications: ["IEC 61508 SIL 2", "IEC 61850 Grid Protocol", "UL 9540A Compliant", "BIS Certified", "CE"],
    applications: [
      "Utility Grid Frequency Regulation & Spinning Reserve",
      "Large Solar Park Dispatchability & Curtailment Elimination",
      "Transmission & Distribution Substation Deferral",
      "Heavy Mining & Metallurgical Site Power Stabilization"
    ],
    keyFeatures: [
      "5.0 MWh high-density storage packed within a standard 20ft high-cube footprint",
      "Full IEC 61850 protocol integration for substation SCADA automation",
      "IceBattery® ceramic exterior reduces container HVAC thermal load by over 20%",
      "Complete multi-stage gas & aerosol fire protection with deflagration venting"
    ],
    overview: "The Max-20HC-5000 represents the pinnacle of Lith-On's utility grid engineering. Built inside an ISO standard 20ft High-Cube container, it delivers 5.0 MWh of lithium iron phosphate energy storage with multi-megawatt bi-directional conversion. Designed for utility substations and large solar farms, it supports frequency containment, voltage support, renewable energy firming, and rapid black-start capability.",
    faqs: [
      {
        question: "How does the Max-20HC connect to high-voltage utility grids?",
        answer: "The Max-20HC connects through a dedicated skid-mounted step-up transformer and switchgear, converting 690V AC from the internal inverters directly to 11kV, 22kV, or 33kV utility distribution levels. Its integrated controller supports IEC 61850 substation communications."
      },
      {
        question: "What fire safety systems are integrated into the 5.0 MWh container?",
        answer: "The container features multi-tier safety: cell-level early off-gas detection, certified aerosol fire suppression, active ventilation, pressure relief deflagration panels, and automated DC circuit disconnection."
      }
    ]
  }
];
