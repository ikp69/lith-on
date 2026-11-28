export interface ProductDocument {
  title: string;
  type: "datasheet" | "manual" | "certificate" | "specification";
  format: "PDF";
  downloadUrl: string;
}

export interface ProductDetail {
  id: string;
  slug: string;
  name: string;
  modelCode: string;
  tagline: string;
  category: "Commercial" | "Industrial" | "Utility" | "Modular";
  /** Product cut-out. `null` while no genuine photograph exists: pages show a PhotoNeeded slot. */
  image: string | null;
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
  standardConfigurations: string[];
  optionalConfigurations: string[];
  documents: ProductDocument[];
  overview: string;
  faqs: { question: string; answer: string }[];
}

export const PRODUCTS_DATA: ProductDetail[] = [
  {
    id: "magna-ci",
    slug: "magna-ci",
    name: "Magna-C&I 260 kWh",
    modelCode: "LO-MC-260",
    tagline: "All-in-One Outdoor BESS Cabinet with Integrated Bi-directional PCS",
    category: "Commercial",
    image: "/images/products/catalogue/magna-ci-260.webp",
    diagramImage: "/images/deck/container-cutaway.webp",
    capacity: "260 kWh",
    powerRating: "125 kW",
    chemistry: "Tier-1 LiFePO4 (LFP)",
    cycleLife: ">6,000 Cycles @ 88%–90% DoD",
    enclosureRating: "IP55 Outdoor Weatherproof",
    formFactor: "Integrated All-in-One Outdoor Cabinet",
    typicalUser: "Commercial Complexes, Hospital Wings, Tech Parks & Light Industrial Campuses",
    scalability: "Modular parallel clustering up to 1.04 MWh (4 units)",
    coolingMethod: "Dual Smart HVAC Air / Liquid Hybrid Thermal Loop",
    switchoverTime: "<10 ms Instantaneous Grid Loss Cutover",
    thermalTech: "IceBattery® 300–400µm Ceramic Coating (>90% NIR Solar Rejection)",
    dimensions: "1,400 × 1,300 × 2,250 mm",
    weight: "~2,850 kg",
    acVoltage: "415V AC, 3-Phase 4-Wire (50 Hz)",
    dcVoltage: "672V–864V DC Bus",
    efficiency: ">95% System Round-Trip AC-to-AC",
    operatingTemp: "-10°C to +60°C Ambient",
    warranty: "10-year manufacturer warranty",
    certifications: ["IEC 61508 SIL 2 Conformance", "IEC 61850 SCADA Ready", "BIS Certified"],
    applications: [
      "Commercial Demand Limiting & Peak Shaving",
      "CAQM GRAP Compliant Diesel Generator Replacement",
      "Mission-Critical Healthcare Power Continuity",
      "Rooftop Solar PV Surplus Energy Shifting"
    ],
    keyFeatures: [
      "Pre-assembled, factory-commissioned outdoor enclosure requiring minimal civil foundation",
      "Integrated sub-10ms static transfer switch maintains continuous elevator and server operations",
      "IceBattery® passive ceramic outer shield eliminates summer heat throttling up to 60°C",
      "In-house 3-tier BMS with continuous cell-level millivolt telemetry and aerosol fire safety"
    ],
    standardConfigurations: [
      "IP55 weatherized outdoor cabinet with bi-directional 125 kW PCS",
      "Tier-1 LFP high-voltage battery module string (260 kWh nominal)",
      "IceBattery® passive solar-reflective ceramic coating",
      "Aerosol fire suppression system with multi-gas detection sensors",
      "Integrated static transfer switch (<10ms cutover)"
    ],
    optionalConfigurations: [
      "Integrated isolation transformer skid for high-impedance grids",
      "4G/5G cellular dual-redundant cloud SCADA gateway",
      "Dual HVAC redundancy package for harsh desert/coastal environments"
    ],
    documents: [
      {
        title: "Magna-C&I 260 kWh Technical Datasheet",
        type: "datasheet",
        format: "PDF",
        downloadUrl: "/contact?doc=magna-ci-datasheet"
      },
      {
        title: "Installation & Foundation Guide",
        type: "manual",
        format: "PDF",
        downloadUrl: "/contact?doc=magna-ci-manual"
      }
    ],
    overview: "The Magna-C&I 260 kWh is Lith-On's flagship commercial energy storage solution, purpose-built for Indian facilities facing steep maximum demand surcharges, sudden grid voltage sags, and mandatory CAQM GRAP winter diesel generator bans. Integrating high-voltage Tier-1 LiFePO4 cells, a bi-directional PCS inverter, and autonomous EMS firmware inside a single weatherproof IP55 cabinet, it eliminates the need for expensive dedicated inverter rooms.",
    faqs: [
      {
        question: "Can the Magna-C&I 260 kWh completely replace our commercial facility's diesel generator?",
        answer: "Yes. For essential base loads such as high-rise elevators, emergency fire booster pumps, data server rooms, and staircase lighting, the Magna-C&I provides seamless sub-10ms power switchover, eliminating the 15–30 second blackout delay inherent in mechanical diesel generators."
      },
      {
        question: "How does the IceBattery® coating benefit this cabinet in extreme North Indian heat?",
        answer: "Under direct 45°C+ summer sun, steel cabinets absorb intense solar radiation, heating battery cells towards thermal cutoff limits. Lith-On's 300–400µm inorganic ceramic coating reflects >90% of near-infrared solar rays and radiates heat into the cold atmospheric window, lowering internal cabinet temperatures by 15°C–30°C and reducing HVAC parasitic power draw by over 20%."
      }
    ]
  },
  {
    id: "magna-ci-215",
    slug: "magna-ci-215",
    name: "Magna-C&I 215 kWh",
    modelCode: "Magna-C&I-215",
    tagline: "AC outdoor liquid-cooled battery system",
    category: "Commercial",
    image: "/images/products/catalogue/magna-ci-260.webp",
    capacity: "215 kWh @ 0.5C",
    powerRating: "100 kW",
    chemistry: "LFP, 280 Ah cells",
    cycleLife: "Contact us for details",
    enclosureRating: "IP55",
    formFactor: "AC outdoor liquid-cooled cabinet",
    typicalUser: "Industrial parks, factories, commercial services, data centres",
    scalability: "Multiple units can be interconnected",
    coolingMethod: "Liquid cooling",
    switchoverTime: "Contact us for details",
    thermalTech: "Contact us for details",
    dimensions: "W1300 × D1310 × H2265 mm",
    weight: "≈2,550 kg",
    acVoltage: "380 V AC",
    dcVoltage: "1P 240S configuration",
    efficiency: "Contact us for details",
    operatingTemp: "Charging 0–45 °C; discharging −20–50 °C",
    warranty: "10-year manufacturer warranty",
    certifications: [
      "Functional safety class B"
    ],
    applications: [
      "Industrial parks",
      "Zero-carbon parks",
      "Production factories",
      "Green transportation",
      "Commercial services",
      "Data centres"
    ],
    keyFeatures: [
      "Liquid cooling with low core temperature difference",
      "Multiple units can be interconnected; small footprint",
      "Modular design for on-site maintenance",
      "Shipped after testing, ready for on-site connection"
    ],
    standardConfigurations: [
      "215 kWh LFP battery (1P 240S, 280 Ah)",
      "100 kW AC output at 380 V",
      "CAN and RS485 communication"
    ],
    optionalConfigurations: [],
    documents: [],
    overview: "The Magna-C&I 215 is an AC outdoor liquid-cooled battery system for industrial and commercial sites. It delivers 215 kWh at 0.5C and 100 kW from an IP55 cabinet, and several units can be interconnected as demand grows. Source: Lith-On BESS products catalogue.",
    faqs: [],
  },
  {
    id: "lithon-50",
    slug: "lithon-50",
    name: "Lith-On-50 (48 kWh)",
    modelCode: "LO-50-48",
    tagline: "Modular Commercial & Institutional Battery Storage System",
    category: "Modular",
    image: "/images/products/catalogue/lithon-50.webp",
    diagramImage: "/images/deck/container-cutaway.webp",
    capacity: "48 kWh (Scalable to 192 kWh)",
    powerRating: "48 kW",
    chemistry: "Tier-1 LiFePO4 (LFP)",
    cycleLife: ">6,000 Cycles @ 88%–90% DoD",
    enclosureRating: "IP54 Indoor / Sheltered Outdoor",
    formFactor: "Modular Vertical Rack-Mount Enclosure",
    typicalUser: "Branch Banks, EV Charging Plazas, Diagnostics Centers & Small Educational Institutes",
    scalability: "Parallel expansion up to 4 racks (192 kWh total)",
    coolingMethod: "Smart Forced-Air Multi-Fan Thermal Extraction",
    switchoverTime: "<10 ms Static Transfer",
    thermalTech: "IceBattery® Ceramic Heat Dissipation Shield",
    dimensions: "800 × 900 × 1,950 mm",
    weight: "~620 kg",
    acVoltage: "415V AC / 230V Single-Phase Option",
    dcVoltage: "384V–512V DC",
    efficiency: ">95% Round-Trip Efficiency",
    operatingTemp: "-10°C to +55°C Ambient",
    warranty: "10-year manufacturer warranty",
    certifications: ["BIS Certified"],
    applications: [
      "Branch Banking & Retail Fuel Station Continuity",
      "School & Small Campus Solar Energy Storage",
      "EV Destination Charger Peak Buffering",
      "Diagnostic Lab & Clinic UPS Redundancy"
    ],
    keyFeatures: [
      "Compact footprint fitting into standard service rooms and basement parking bays",
      "Hot-swappable modular battery trays for simplified maintenance and phased capacity expansion",
      "In-house digital BMS with RS485 / CAN / Ethernet network protocols",
      "Ultra-quiet operational acoustic profile (<52 dB) suitable for occupied buildings"
    ],
    standardConfigurations: [
      "Standard indoor/sheltered IP54 vertical rack cabinet",
      "48 kWh LiFePO4 modular battery pack assembly",
      "48 kW bi-directional hybrid power inverter",
      "Smart multi-fan cooling management",
      "BMS controller with LCD touch display"
    ],
    optionalConfigurations: [
      "Outdoor IP55 weather canopy kit",
      "Single-phase 230V conversion module",
      "Integrated smart billing sub-meter"
    ],
    documents: [
      {
        title: "Lith-On-50 Technical Datasheet",
        type: "datasheet",
        format: "PDF",
        downloadUrl: "/contact?doc=lithon-50-datasheet"
      }
    ],
    overview: "The Lith-On-50 is engineered for commercial establishments that require modular, high-reliability lithium power without allocating heavy industrial plant space. Its standard 48 kWh capacity is easily expanded in 48 kWh increments up to 192 kWh, pairing directly with rooftop solar arrays to reduce retail electricity demand charges and provide immediate silent backup.",
    faqs: [
      {
        question: "Can Lith-On-50 be installed indoors?",
        answer: "Yes. Due to non-toxic, non-gassing LiFePO4 chemistry and solid-state construction, it can be safely installed in basements, electrical utility rooms, and ground-floor parking areas without requiring specialized chemical exhaust ventilation."
      }
    ]
  },
  {
    id: "lt215",
    slug: "lt215",
    name: "LT215 Industrial BESS",
    modelCode: "LO-LT-215",
    tagline: "High-Density Liquid-Cooled Industrial Energy Storage Cabinet",
    category: "Industrial",
    image: "/images/products/catalogue/lt215.webp",
    diagramImage: "/images/deck/container-cutaway.webp",
    capacity: "215 kWh",
    powerRating: "110 kW",
    chemistry: "Tier-1 LiFePO4 (LFP)",
    cycleLife: ">6,000 Cycles @ 88%–90% DoD",
    enclosureRating: "IP55 Liquid-Cooled Heavy Duty",
    formFactor: "Heavy Industrial Liquid-Cooled Skid Enclosure",
    typicalUser: "Automotive Component Plants, Textile Mills, Chemical Facilities & EV Charging Plazas",
    scalability: "Multi-cabinet parallel clustering up to 2.15 MWh (Dual-cabinet 430 kWh cluster configuration available upon technical site review)",
    coolingMethod: "Precision Closed-Loop Liquid Thermal Balancing (ΔT < 2.5°C)",
    switchoverTime: "<10 ms Seamless Islanding",
    thermalTech: "IceBattery® Ceramic Barrier + Closed-Loop Glycol Chiller",
    dimensions: "1,350 × 1,300 × 2,300 mm",
    weight: "~2,600 kg",
    acVoltage: "415V AC, 3-Phase 4-Wire (50 Hz)",
    dcVoltage: "768V DC Nominal Bus",
    efficiency: ">95% Round-Trip AC Efficiency",
    operatingTemp: "-20°C to +60°C Heavy Industrial",
    warranty: "10-year manufacturer warranty",
    certifications: ["IEC 61508 SIL 2 Conformance", "IEC 61850", "BIS Certified"],
    applications: [
      "Industrial HT Tariff Maximum Demand Shaving",
      "Factory Power Quality & Voltage Sag Conditioning",
      "Highway EV Fast-Charging Hub Energy Buffering",
      "Cold Chain Storage Compressor Continuity"
    ],
    keyFeatures: [
      "Liquid cooling maintains cell-to-cell temperature deviation under 2.5°C for maximum lifespan",
      "High power density with minimal installation footprint for congested factory plots",
      "Multi-stage aerosol fire extinguishing with automatic combustible gas detection",
      "Direct Modbus TCP and IEC 61850 interface with plant PLC and SCADA control rooms"
    ],
    standardConfigurations: [
      "IP55 heavy-gauge galvanized steel cabinet",
      "215 kWh nominal Tier-1 LiFePO4 battery pack",
      "Integrated closed-loop liquid thermal cooling system",
      "110 kW bi-directional industrial PCS",
      "Integrated automated fire suppression system"
    ],
    optionalConfigurations: [
      "Dual-unit parallel cluster configuration (430 kWh nominal) subject to technical review",
      "Cold-climate internal loop heating for sub-zero alpine deployment",
      "Integrated smart billing revenue-grade energy meter"
    ],
    documents: [
      {
        title: "LT215 Liquid-Cooled BESS Datasheet",
        type: "datasheet",
        format: "PDF",
        downloadUrl: "/contact?doc=lt215-datasheet"
      },
      {
        title: "Industrial Liquid Cooling Whitepaper",
        type: "specification",
        format: "PDF",
        downloadUrl: "/contact?doc=lt215-cooling-spec"
      }
    ],
    overview: "The LT215 delivers heavy-duty industrial storage in a compact, liquid-cooled form factor. Engineered for manufacturing facilities with aggressive thermal cycles and high-draw machinery, its closed-loop glycol thermal system holds cell-to-cell temperature variances below 2.5°C, ensuring uniform cell aging and maximum cycle longevity even in continuous 50°C+ summer environments.",
    faqs: [
      {
        question: "Why is liquid cooling preferred for high-cycle industrial plants?",
        answer: "Liquid cooling maintains cell temperature variations within <2.5°C across the entire battery pack, compared to 5°C–8°C in conventional air-cooled cabinets. This thermal uniformity prevents premature cell degradation, extends system cycle life by >25%, and ensures consistent performance in high-ambient factory environments."
      }
    ]
  },
  {
    id: "magna-utl-373",
    slug: "magna-utl-373",
    name: "Magna-UTL 373 kWh",
    modelCode: "Magna-UTL-373",
    tagline: "DC outdoor liquid-cooled battery system",
    category: "Industrial",
    image: "/images/products/catalogue/magna-utl.webp",
    capacity: "372.7 kWh @ 0.5C",
    powerRating: "180 kW",
    chemistry: "LFP, 280 Ah cells",
    cycleLife: "Contact us for details",
    enclosureRating: "IP55",
    formFactor: "DC outdoor liquid-cooled cabinet",
    typicalUser: "Industrial parks, factories, commercial services, data centres",
    scalability: "Connects in series with PCS; replaces container solutions for flexible layouts",
    coolingMethod: "Liquid cooling",
    switchoverTime: "Contact us for details",
    thermalTech: "Contact us for details",
    dimensions: "W1300 × D1300 × H2365 mm",
    weight: "≈4,000 kg",
    acVoltage: "Contact us for details",
    dcVoltage: "900–1500 V DC",
    efficiency: "Contact us for details",
    operatingTemp: "Charging 0–45 °C; discharging −20–50 °C",
    warranty: "10-year manufacturer warranty",
    certifications: [
      "Functional safety class B",
      "IEC 62619, IEC 62933, IEC 61000, UL 1973, UL 9540A (listed in catalogue)"
    ],
    applications: [
      "Industrial parks",
      "Zero-carbon parks",
      "Production factories",
      "Green transportation",
      "Commercial services",
      "Data centres"
    ],
    keyFeatures: [
      "Unit-level UL 9540A test listed in the catalogue",
      "Liquid cooling keeps core temperature difference low",
      "Each unit weighs under 4 tonnes for on-site hoisting",
      "Modular design for on-site maintenance"
    ],
    standardConfigurations: [
      "372.7 kWh LFP battery (1P 416S, 280 Ah)",
      "900–1500 V DC output",
      "CAN and RS485 communication"
    ],
    optionalConfigurations: [],
    documents: [],
    overview: "The Magna-UTL 373 is a DC outdoor liquid-cooled battery system that connects in series with a PCS. It stores 372.7 kWh at 0.5C in a single IP55 cabinet, offering an alternative to containers where layout flexibility matters. Source: Lith-On BESS products catalogue.",
    faqs: [],
  },
  {
    id: "magna-utl-418",
    slug: "magna-utl-418",
    name: "Magna-UTL 418 kWh",
    modelCode: "Magna-UTL-418",
    tagline: "DC outdoor liquid-cooled battery system",
    category: "Industrial",
    image: "/images/products/catalogue/magna-utl.webp",
    capacity: "418 kWh @ 0.5C",
    powerRating: "Up to 209 kW",
    chemistry: "LFP, 314 Ah cells",
    cycleLife: "Contact us for details",
    enclosureRating: "IP55",
    formFactor: "DC outdoor liquid-cooled cabinet",
    typicalUser: "Industrial parks, factories, commercial services, data centres",
    scalability: "Connects in series with PCS; replaces container solutions for flexible layouts",
    coolingMethod: "Liquid cooling",
    switchoverTime: "Contact us for details",
    thermalTech: "Contact us for details",
    dimensions: "W1300 × D1300 × H2365 mm",
    weight: "≈4,100 kg",
    acVoltage: "Contact us for details",
    dcVoltage: "900–1500 V DC",
    efficiency: "Contact us for details",
    operatingTemp: "Charging 0–45 °C; discharging −20–50 °C",
    warranty: "10-year manufacturer warranty",
    certifications: [
      "Functional safety class B",
      "IEC 62619, IEC 62933, IEC 61000, UL 1973, UL 9540A (listed in catalogue)"
    ],
    applications: [
      "Industrial parks",
      "Zero-carbon parks",
      "Production factories",
      "Green transportation",
      "Commercial services",
      "Data centres"
    ],
    keyFeatures: [
      "Unit-level UL 9540A test listed in the catalogue",
      "Liquid cooling keeps core temperature difference low",
      "Each unit weighs under 4 tonnes for on-site hoisting",
      "Modular design for on-site maintenance"
    ],
    standardConfigurations: [
      "418 kWh LFP battery (1P 416S, 314 Ah)",
      "900–1500 V DC output",
      "CAN and RS485 communication"
    ],
    optionalConfigurations: [],
    documents: [],
    overview: "The Magna-UTL 418 is the higher-capacity DC outdoor liquid-cooled battery system in the UTL family. It stores 418 kWh at 0.5C with 314 Ah cells in a single IP55 cabinet and connects in series with a PCS. Source: Lith-On BESS products catalogue.",
    faqs: [],
  },
  {
    id: "max-20hc-3440",
    slug: "max-20hc-3440",
    name: "Max-20HC-3440 (3.44 MWh)",
    modelCode: "Max-20HC-3440",
    tagline: "20-ft high-cube DC liquid-cooling container",
    category: "Utility",
    image: "/images/products/catalogue/max-20hc-3440.webp",
    capacity: "3,440 kWh (3.44 MWh @ 0.5C)",
    powerRating: "180 kW × 10 (1.7 MW)",
    chemistry: "LFP, 280 Ah cells",
    cycleLife: "Contact us for details",
    enclosureRating: "IP54",
    formFactor: "20-ft high-cube DC liquid-cooling container",
    typicalUser: "Wind and solar generation, sites with large peak-valley price differences",
    scalability: "Integrates with third-party SCADA and cloud EMS",
    coolingMethod: "Liquid cooling",
    switchoverTime: "Contact us for details",
    thermalTech: "Contact us for details",
    dimensions: "W6058 × D2438 × H2896 mm (20HC)",
    weight: "< 36 t",
    acVoltage: "Contact us for details",
    dcVoltage: "900–1500 V DC",
    efficiency: "> 95% DC charge and discharge (catalogue)",
    operatingTemp: "Charging 0–45 °C; discharging −20–50 °C",
    warranty: "10-year manufacturer warranty",
    certifications: [
      "Functional safety class B",
      "IEC 62619, IEC 62933, IEC 61000, UL 1973, UL 9540A (listed in catalogue)"
    ],
    applications: [
      "Wind or solar power generation",
      "Regions with large peak-valley price differences",
      "Sites with large daily load fluctuations"
    ],
    keyFeatures: [
      "Designed for a 15-year service life (catalogue)",
      "High energy density in a standard 20-ft container",
      "Supports third-party SCADA and cloud EMS integration",
      "Highly integrated design for simple scaling and installation"
    ],
    standardConfigurations: [
      "3.44 MWh LFP battery (1P 384S × 10, 280 Ah)",
      "900–1500 V DC output",
      "CAN, RS485 and TCP/IP communication"
    ],
    optionalConfigurations: [],
    documents: [],
    overview: "The Max-20HC-3440 is a 20-ft high-cube DC liquid-cooling container that stores 3.44 MWh at 0.5C. It suits wind and solar plants and sites with large peak-valley price differences, and integrates with third-party SCADA and cloud EMS. Source: Lith-On BESS products catalogue.",
    faqs: [],
  },
  {
    id: "max-20hc",
    slug: "max-20hc",
    name: "Max-20HC-5000 (5.0 MWh)",
    modelCode: "LO-MAX-5000",
    tagline: "20-ft High-Cube Containerized Utility-Scale Battery Energy Storage System",
    category: "Utility",
    image: "/images/products/catalogue/max-20hc-5000.webp",
    diagramImage: "/images/deck/container-cutaway.webp",
    capacity: "5,000 kWh (5.0 MWh)",
    powerRating: "2,500 kW (2 × 1.25 MW or 6 × 417 kW PCS)",
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
    efficiency: ">95% System Round-Trip Efficiency",
    operatingTemp: "-30°C to +60°C Extreme Ambient",
    warranty: "10-year manufacturer warranty",
    certifications: ["IEC 61508 SIL 2 Conformance", "IEC 61850 Grid Protocol", "BIS Certified"],
    applications: [
      "Utility Grid Frequency Regulation & Synthetic Inertia",
      "Large Solar Park Dispatchability & Curtailment Elimination",
      "Transmission & Distribution Substation Upgrade Deferral",
      "Heavy Mining & Metallurgical Site Power Stabilization"
    ],
    keyFeatures: [
      "5.0 MWh high-density storage packed within an ISO standard 20ft high-cube footprint",
      "Full IEC 61850 protocol integration for direct substation SCADA teleprotection",
      "IceBattery® ceramic exterior reduces container HVAC thermal load by over 20%",
      "Complete multi-stage gas & aerosol fire protection with deflagration venting"
    ],
    standardConfigurations: [
      "ISO standard 20ft High-Cube container with structural seismic reinforcement",
      "5.0 MWh Tier-1 LiFePO4 high-voltage utility battery racks (1,500V DC)",
      "Multi-circuit industrial liquid chiller system",
      "Container-level aerosol & gas fire suppression with pressure deflagration panels",
      "Edge SCADA teleprotection controller supporting IEC 61850"
    ],
    optionalConfigurations: [
      "Skid-mounted medium-voltage step-up transformer (690V to 11kV/33kV)",
      "External black-start auxiliary battery bank",
      "Remote SCADA NOC monitoring integration package"
    ],
    documents: [
      {
        title: "Max-20HC-5000 Utility BESS Datasheet",
        type: "datasheet",
        format: "PDF",
        downloadUrl: "/contact?doc=max-20hc-datasheet"
      },
      {
        title: "Utility Substation Interconnection Guide",
        type: "specification",
        format: "PDF",
        downloadUrl: "/contact?doc=max-20hc-grid-guide"
      }
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
  },
  {
    id: "tele-rack-100",
    slug: "tele-rack-100",
    name: "Tele-Rack 100 (10 kWh)",
    modelCode: "LO-TR-100",
    tagline: "48V Telecom & Edge Computing Rack-Mount Lithium Module",
    category: "Modular",
    image: null,
    diagramImage: "/images/deck/container-cutaway.webp",
    capacity: "10 kWh (51.2V / 200Ah)",
    powerRating: "5 kW Continuous / 10 kW Peak",
    chemistry: "Tier-1 LiFePO4 (LFP)",
    cycleLife: ">6,000 Cycles @ 90% DoD",
    enclosureRating: "IP20 Indoor 19\" Rack-Mount",
    formFactor: "Standard 19\" 4U Rack-Mount Module",
    typicalUser: "Telecom Tower Operators, Edge Data Centers, BSNL / Jio / Airtel Sites, Railway Signalling",
    scalability: "Parallel stacking up to 8 modules (80 kWh) per rack",
    coolingMethod: "Passive Natural Convection + Smart Fan Assist",
    switchoverTime: "<5 ms Hot-Standby Takeover",
    thermalTech: "Internal Thermal Pad Conduction with Aluminum Heatsink Rails",
    dimensions: "483 × 560 × 177 mm (4U)",
    weight: "~95 kg",
    acVoltage: "N/A (48V DC Direct)",
    dcVoltage: "48V / 51.2V DC Nominal",
    efficiency: ">97% DC Round-Trip Efficiency",
    operatingTemp: "-10°C to +55°C Ambient",
    warranty: "10-year manufacturer warranty",
    certifications: ["BIS Certified"],
    applications: [
      "Telecom BTS / Macro Cell Site Battery Replacement",
      "Edge Computing & Micro Data Center UPS",
      "Railway Signal & Crossing Power Systems",
      "Remote IoT Gateway & Surveillance Power"
    ],
    keyFeatures: [
      "Direct drop-in replacement for 4× VRLA 12V 200Ah banks in standard 19\" racks",
      "3× energy density in 1/3 weight compared to lead-acid — eliminates floor loading concerns",
      "Integrated smart BMS with RS485/CAN communication for remote NOC monitoring",
      "Hot-swappable design with front-access terminals for zero-downtime maintenance"
    ],
    standardConfigurations: [
      "4U 19\" rack-mount LiFePO4 module (51.2V / 200Ah)",
      "Integrated digital BMS with LCD status display",
      "Front-access DC terminals with over-current protection",
      "RS485 / CAN bus communication interface",
      "Passive + active hybrid thermal management"
    ],
    optionalConfigurations: [
      "Outdoor IP55 telecom cabinet housing (fits 4–8 modules)",
      "SNMP network management card for NOC integration",
      "48V DC-DC charge controller for solar hybrid sites"
    ],
    documents: [
      {
        title: "Tele-Rack 100 Technical Datasheet",
        type: "datasheet",
        format: "PDF",
        downloadUrl: "/contact?doc=tele-rack-100-datasheet"
      }
    ],
    overview: "The Tele-Rack 100 is engineered as a direct drop-in replacement for legacy lead-acid VRLA battery banks in telecom towers, edge data centers, and railway signalling equipment. Delivering 10 kWh in a standard 19\" 4U form factor at one-third the weight of equivalent lead-acid, it eliminates the need for structural floor reinforcement and reduces cooling OPEX at remote, unmanned sites.",
    faqs: [
      {
        question: "Can the Tele-Rack 100 replace existing lead-acid batteries without rewiring?",
        answer: "Yes. The Tele-Rack 100 operates at standard 48V/51.2V DC with industry-standard terminals and mounting rails, making it a direct drop-in replacement for 4× 12V VRLA banks without DC plant rewiring or charger reconfiguration."
      }
    ]
  },
  {
    id: "resi-shield-120",
    slug: "resi-shield-120",
    name: "Resi-Shield 120 (120 kWh)",
    modelCode: "LO-RS-120",
    tagline: "High-Rise Residential Society BESS for Elevator & Common Area Continuity",
    category: "Commercial",
    image: null,
    diagramImage: "/images/deck/container-cutaway.webp",
    capacity: "120 kWh",
    powerRating: "60 kW / 75 kW",
    chemistry: "Tier-1 LiFePO4 (LFP)",
    cycleLife: ">6,000 Cycles @ 88% DoD",
    enclosureRating: "IP55 Outdoor Weatherproof",
    formFactor: "Compact Outdoor BESS Cabinet",
    typicalUser: "Residential Gated Societies, High-Rise Apartments, Builder Floor Complexes, Senior Living Facilities",
    scalability: "Parallel clustering up to 4 units (480 kWh)",
    coolingMethod: "Smart Forced-Air Cooling with IceBattery® Thermal Shield",
    switchoverTime: "<10 ms Instantaneous Transfer",
    thermalTech: "IceBattery® 300–400µm Ceramic Coating",
    dimensions: "1,200 × 1,100 × 2,100 mm",
    weight: "~1,650 kg",
    acVoltage: "415V AC, 3-Phase 4-Wire (50 Hz)",
    dcVoltage: "384V–512V DC Bus",
    efficiency: ">95% System Round-Trip AC-to-AC",
    operatingTemp: "-10°C to +60°C Ambient",
    warranty: "10-year manufacturer warranty",
    certifications: ["BIS Certified", "IP55 Rated"],
    applications: [
      "High-Rise Elevator & Fire Pump Continuity",
      "CAQM GRAP Compliant DG Replacement for Housing Societies",
      "Common Area Lighting & Water Booster Pump Backup",
      "Society EV Charger Load Management"
    ],
    keyFeatures: [
      "Sub-10ms cutover prevents elevator stalling between floors during grid trips",
      "Compact footprint fits into existing DG room or parking basement alcove",
      "Silent operation (<52 dB) suitable for residential proximity — no exhaust, no vibration",
      "IceBattery® ceramic coating enables year-round rooftop or terrace installation"
    ],
    standardConfigurations: [
      "IP55 outdoor cabinet with integrated 75 kW bi-directional PCS",
      "120 kWh LiFePO4 battery pack with 3-tier BMS",
      "IceBattery® passive thermal ceramic coating",
      "Static transfer switch (<10ms cutover)",
      "Fire detection and aerosol suppression system"
    ],
    optionalConfigurations: [
      "Society-level energy metering and billing sub-system",
      "4G cloud SCADA gateway for RWA remote monitoring",
      "Solar PV integration kit for rooftop self-consumption"
    ],
    documents: [
      {
        title: "Resi-Shield 120 Technical Datasheet",
        type: "datasheet",
        format: "PDF",
        downloadUrl: "/contact?doc=resi-shield-120-datasheet"
      }
    ],
    overview: "The Resi-Shield 120 is purpose-built for Indian high-rise residential societies facing frequent grid outages and CAQM GRAP diesel generator bans. Sized to power 6–10 elevators, common corridor lighting, water booster pumps, and fire safety systems during outages, it replaces noisy, polluting DG sets with silent, zero-emission lithium storage.",
    faqs: [
      {
        question: "How many elevators can the Resi-Shield 120 support during a power cut?",
        answer: "A single 120 kWh / 75 kW unit can support 6–10 standard residential elevators (15 HP motors) along with common area lighting and water booster pumps for 2–3 hours. For larger societies, units can be paralleled up to 480 kWh."
      },
      {
        question: "Is the Resi-Shield 120 CAQM GRAP compliant?",
        answer: "Yes. It produces zero emissions, zero exhaust, and zero noise pollution, making it 100% compliant with CAQM GRAP Stage II, III, and IV directives that ban diesel generator operation in Delhi-NCR during winter pollution emergencies."
      }
    ]
  },
  {
    id: "solar-hybrid-500",
    slug: "solar-hybrid-500",
    name: "Solar-Hybrid 500 (500 kWh)",
    modelCode: "LO-SH-500",
    tagline: "Integrated Solar PV + BESS Hybrid System for C&I Self-Consumption",
    category: "Commercial",
    image: null,
    diagramImage: "/images/deck/container-cutaway.webp",
    capacity: "500 kWh",
    powerRating: "250 kW PCS + 300 kWp Solar Inverter",
    chemistry: "Tier-1 LiFePO4 (LFP)",
    cycleLife: ">6,000 Cycles @ 90% DoD",
    enclosureRating: "IP55 Outdoor Heavy Duty",
    formFactor: "Dual-Cabinet Outdoor Hybrid Power Station",
    typicalUser: "Manufacturing Plants with Rooftop Solar, IT Parks, Logistics Warehouses, Cold Storage Facilities",
    scalability: "Multi-unit clustering up to 2.0 MWh + 1.2 MWp Solar",
    coolingMethod: "Liquid-Cooled Battery + Air-Cooled PCS/Inverter",
    switchoverTime: "<10 ms Grid-to-Island Transfer",
    thermalTech: "IceBattery® Ceramic Shield + Closed-Loop Glycol Cooling",
    dimensions: "2× Cabinets: 1,400 × 1,300 × 2,250 mm each",
    weight: "~5,200 kg (combined)",
    acVoltage: "415V AC, 3-Phase 4-Wire (50 Hz)",
    dcVoltage: "672V–864V DC Battery Bus + 580V–850V DC Solar String",
    efficiency: ">95% Battery RTE, >98.5% Solar Inverter Efficiency",
    operatingTemp: "-10°C to +60°C Ambient",
    warranty: "10-year manufacturer warranty",
    certifications: ["IEC 61508 SIL 2", "BIS Certified"],
    applications: [
      "C&I Solar Self-Consumption Maximisation (80%–90% utilisation)",
      "Time-of-Day Tariff Arbitrage with Solar Integration",
      "Factory Peak Demand Shaving + Solar Surplus Storage",
      "Zero-Export Grid Compliance for Open Access Solar"
    ],
    keyFeatures: [
      "Single integrated platform combining BESS and solar PCS — eliminates separate inverter rooms",
      "Autonomous EMS algorithm maximises solar self-consumption and minimises grid import",
      "Liquid-cooled battery ensures thermal stability during aggressive solar charge cycles",
      "Zero-export control mode available for DISCOMs restricting net metering"
    ],
    standardConfigurations: [
      "500 kWh LiFePO4 liquid-cooled battery cabinet",
      "250 kW bi-directional battery PCS",
      "300 kWp multi-MPPT solar string inverter",
      "Integrated EMS with solar forecast algorithm",
      "IceBattery® ceramic thermal shield on both cabinets",
      "Fire suppression system"
    ],
    optionalConfigurations: [
      "Weather station integration for solar irradiance forecasting",
      "Revenue-grade import/export energy meters (DISCOM approved)",
      "Diesel generator synchronisation kit for triple-source microgrid"
    ],
    documents: [
      {
        title: "Solar-Hybrid 500 Technical Datasheet",
        type: "datasheet",
        format: "PDF",
        downloadUrl: "/contact?doc=solar-hybrid-500-datasheet"
      },
      {
        title: "Solar + BESS Integration Guide",
        type: "specification",
        format: "PDF",
        downloadUrl: "/contact?doc=solar-hybrid-integration-guide"
      }
    ],
    overview: "The Solar-Hybrid 500 integrates 500 kWh of LiFePO4 storage with a 300 kWp solar inverter in a single turnkey outdoor platform. Designed for C&I facilities with existing or planned rooftop solar, it stores surplus midday generation and discharges during expensive evening peak tariff windows, achieving 80%–90% solar self-consumption and dramatically reducing grid dependence.",
    faqs: [
      {
        question: "Can the Solar-Hybrid 500 work with my existing rooftop solar installation?",
        answer: "Yes. The system supports both AC-coupled (retrofit alongside existing solar inverters) and DC-coupled (direct solar string connection) configurations, making it compatible with existing installations."
      },
      {
        question: "What happens when solar generation exceeds both facility load and battery capacity?",
        answer: "The EMS automatically manages surplus through configurable modes: net metering export (where allowed), zero-export curtailment (for restricted DISCOMs), or controlled grid injection with revenue-grade metering."
      }
    ]
  },
  {
    id: "mega-40hc-10000",
    slug: "mega-40hc-10000",
    name: "Mega-40HC (10.0 MWh)",
    modelCode: "LO-MEGA-10000",
    tagline: "40-ft High-Cube Containerised Utility-Scale BESS for Grid & Renewable Parks",
    category: "Utility",
    image: null,
    diagramImage: "/images/deck/container-cutaway.webp",
    capacity: "10,000 kWh (10.0 MWh)",
    powerRating: "2,500 kW / 5,000 kW",
    chemistry: "Tier-1 LiFePO4 (LFP)",
    cycleLife: ">6,000 Cycles @ 90% DoD",
    enclosureRating: "IP55 Standard 40ft High-Cube ISO Container",
    formFactor: "ISO 40ft High-Cube Containerised Energy Storage Unit",
    typicalUser: "Utility-Scale Solar Parks, Pumped Hydro Hybrid, Large Industrial Complexes, Smart City Infrastructure",
    scalability: "Multi-container grid scaling (20 MWh, 100 MWh, 500+ MWh farms)",
    coolingMethod: "Multi-Zone Industrial Liquid Chiller with Redundant Loops",
    switchoverTime: "<20 ms Grid Teleprotection & Islanding",
    thermalTech: "IceBattery® Solar Reflective Shell + 4-Zone Industrial Chiller",
    dimensions: "12,192 × 2,438 × 2,896 mm (Standard 40ft HC ISO)",
    weight: "~78,000 kg",
    acVoltage: "690V AC / MV Step-Up to 33kV/66kV",
    dcVoltage: "1,500V DC Utility High-Voltage Bus",
    efficiency: ">95% System Round-Trip Efficiency",
    operatingTemp: "-30°C to +60°C Extreme Ambient",
    warranty: "10-year manufacturer warranty",
    certifications: ["IEC 61508 SIL 2", "IEC 61850 Grid Protocol", "BIS Certified"],
    applications: [
      "Utility-Scale Renewable Energy Firming (Solar + Wind)",
      "Grid-Scale Frequency Regulation & Ancillary Services",
      "Large Substation T&D Upgrade Deferral",
      "Smart City District Energy Storage"
    ],
    keyFeatures: [
      "10.0 MWh in a single 40ft ISO container — highest energy density in class",
      "Dual-redundant liquid cooling loops with N+1 chiller configuration",
      "Full IEC 61850 + IEC 61508 SIL 2 compliance for direct substation interconnection",
      "Pre-wired for multi-container farm configurations with central SCADA controller"
    ],
    standardConfigurations: [
      "ISO 40ft High-Cube container with seismic Zone IV reinforcement",
      "10.0 MWh Tier-1 LiFePO4 high-voltage battery racks (1,500V DC)",
      "4-zone industrial liquid chiller with redundant circulation pumps",
      "Multi-stage fire suppression with deflagration venting and gas detection",
      "Integrated SCADA controller with IEC 61850 and DNP3 protocol support"
    ],
    optionalConfigurations: [
      "Skid-mounted 33kV / 66kV medium-voltage transformer and switchgear",
      "Black-start auxiliary battery bank and diesel generator synchronisation",
      "Remote NOC monitoring with AI-based predictive maintenance",
      "Container farm master SCADA controller (for 5+ container deployments)"
    ],
    documents: [
      {
        title: "Mega-40HC 10 MWh Utility BESS Datasheet",
        type: "datasheet",
        format: "PDF",
        downloadUrl: "/contact?doc=mega-40hc-datasheet"
      },
      {
        title: "Multi-Container Farm Design Guide",
        type: "specification",
        format: "PDF",
        downloadUrl: "/contact?doc=mega-40hc-farm-guide"
      }
    ],
    overview: "The Mega-40HC is Lith-On's highest-capacity single-container BESS, delivering 10.0 MWh of utility-grade lithium iron phosphate storage inside a standard 40ft High-Cube ISO container. Designed for utility solar parks, grid substations, and large smart city energy infrastructure, it supports multi-container farm configurations scaling to hundreds of megawatt-hours.",
    faqs: [
      {
        question: "How does the Mega-40HC compare to the Max-20HC for large projects?",
        answer: "The Mega-40HC delivers 2× the energy capacity (10 MWh vs 5 MWh) in a single container, reducing the number of containers needed for large utility projects by half. This lowers civil foundation, cabling, and interconnection costs for 50+ MWh deployments."
      },
      {
        question: "What is the minimum order for a container farm deployment?",
        answer: "While single containers are available, farm configurations typically start at 2–5 containers (20–50 MWh) for cost-effective shared infrastructure including central SCADA, common transformer skid, and farm-level fire water suppression systems."
      }
    ]
  }
];
