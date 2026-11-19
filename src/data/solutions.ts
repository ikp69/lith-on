/**
 * Lith-On Central Solutions Data
 *
 * Defines the core business and technical problems Lith-On solves,
 * how the systems resolve them, and verified measurable outcomes.
 */

export interface SolutionTrack {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  iconName: string;
  problem: {
    headline: string;
    description: string;
    financialImpact: string;
    operationalRisk: string;
  };
  solution: {
    headline: string;
    description: string;
    systemArchitecture: string;
    keyTechnologies: string[];
  };
  outcomes: {
    metrics: { label: string; value: string; detail: string }[];
    caseReference?: { title: string; href: string };
  };
  recommendedProducts: string[];
}

export const SOLUTIONS_DATA: SolutionTrack[] = [
  {
    id: "dg-reduction",
    slug: "dg-reduction",
    title: "Diesel Generator Displacement & GRAP Compliance",
    shortTitle: "DG Displacement",
    tagline: "Replace costly, polluting diesel generators with silent, zero-emission BESS",
    iconName: "Fuel",
    problem: {
      headline: "Crippling Fuel Bills and Winter Pollution Mandates (CAQM GRAP)",
      description: "Facilities in urban and industrial zones spend ₹30–₹40 per kWh running diesel generators during power outages. In Delhi-NCR, winter CAQM GRAP Stage II–IV rules completely prohibit mechanical DG operation, threatening high-rises and factories with disconnection and punitive daily fines.",
      financialImpact: "Annual diesel fuel bills frequently exceed ₹4 to ₹6.5 Crore in large commercial complexes.",
      operationalRisk: "15 to 30 second cranking delays cause elevators to stall, precision assembly tools to reboot, and residents to suffer blackouts.",
    },
    solution: {
      headline: "Turnkey Solid-State Energy Storage with Sub-10ms Islanding",
      description: "Lith-On BESS connects directly to facility distribution boards, charging from low-cost off-peak grid electricity and discharging instantly when the grid drops.",
      systemArchitecture: "High-voltage LFP rack clusters coupled with bi-directional PCS inverters and automatic static transfer switches.",
      keyTechnologies: ["Sub-10ms Static Transfer Switch", "100% CAQM GRAP Compliant Zero-Emission Profile", "IceBattery® Passive Cooling", "Aerosol Fire Suppression"],
    },
    outcomes: {
      metrics: [
        { label: "Operating OPEX Slashed", value: "Up to 73%", detail: "Compared to continuous diesel generator operation" },
        { label: "Switchover Delay", value: "<10 ms", detail: "Zero machine stoppage or elevator stall" },
        { label: "Payback Period", value: "1.6 – 4.3 Yrs", detail: "Amortized purely from displaced diesel fuel" },
        { label: "Acoustic Footprint", value: "<55 dB", detail: "Near-silent operation replacing 85+ dB engines" }
      ],
      caseReference: { title: "500-Flat Housing Society Case Study", href: "/case-studies#residential_society_500" }
    },
    recommendedProducts: ["magna-ci", "lt215", "lithon-50"]
  },
  {
    id: "peak-shaving",
    slug: "peak-shaving",
    title: "Peak Demand Limiting & Maximum Demand Shaving",
    shortTitle: "Peak Shaving",
    tagline: "Eliminate punitive utility Maximum Demand penalties and transformer expansion delays",
    iconName: "TrendingDown",
    problem: {
      headline: "Punitive HT Maximum Demand Charges and Transformer Bottlenecks",
      description: "Commercial complexes, manufacturing plants, and high-power EV charging plazas face severe utility demand surcharges (often 40%–60% of monthly electricity bills) triggered by brief 15-minute load spikes. Upgrading utility transformers entails heavy capital expenditure and 12–18 month civil delays.",
      financialImpact: "Maximum demand surcharges of ₹20 to ₹50 Lakh annually per facility.",
      operationalRisk: "Inability to expand plant machinery or energize new EV fast-charging stalls due to fixed transformer limits.",
    },
    solution: {
      headline: "Autonomous Edge Demand Peak Limiting",
      description: "The Lith-On edge EMS monitors 15-minute sliding demand windows. The instant total facility draw approaches the contracted threshold, the BESS discharges dynamically to cap grid draw, flattening the load curve.",
      systemArchitecture: "Millisecond-response digital EMS coordinating PCS inverter discharge with plant revenue meters.",
      keyTechnologies: ["Fast Sliding-Window Peak Truncation", "Time-of-Day Tariff Optimization", "Modbus TCP SCADA Telemetry"],
    },
    outcomes: {
      metrics: [
        { label: "Demand Penalties Cut", value: "Up to 100%", detail: "Completely eliminates HT penalty surcharges" },
        { label: "Avoided Transformer Capex", value: "₹45L+", detail: "Operate high-load equipment on existing grid connection" },
        { label: "Average Payback", value: "3.2 – 3.9 Yrs", detail: "Direct utility surcharge savings" }
      ],
      caseReference: { title: "Highway EV Fast-Charging Hub Case Study", href: "/case-studies#ev_charging_hub" }
    },
    recommendedProducts: ["lt215", "magna-ci"]
  },
  {
    id: "backup-power",
    slug: "backup-power",
    title: "Mission-Critical Online Power & Industrial UPS",
    shortTitle: "Mission-Critical UPS",
    tagline: "True online UPS performance protecting surgical suites, data servers, and robotics",
    iconName: "ShieldCheck",
    problem: {
      headline: "Costly Production Line Recalibration and Healthcare Vulnerability",
      description: "In pharmaceutical fabrication, plastics injection molding, semiconductor testing, and hospital ICUs, a 1-second blackout destroys ongoing chemical batches, requires hours of machinery recalibration, and endangers patient life-support.",
      financialImpact: "Single-outage batch spoilage costs between ₹15 Lakh and ₹1.2 Crore.",
      operationalRisk: "Micro-flickers corrupt industrial robotic arms and crash enterprise cloud server clusters.",
    },
    solution: {
      headline: "Continuous True Online Synthetic Waveform Delivery",
      description: "Dual-conversion power electronics and static transfer topology guarantee zero voltage sag or frequency disruption during utility grid loss.",
      systemArchitecture: "Heavy-duty bi-directional PCS with synchronized solid-state bypass and isolated DC battery buses.",
      keyTechnologies: ["Sub-10ms Phase-Synchronized Transfer", "<3% THD Clean Sine Wave", "Cell-Level BMS Fault Isolation"],
    },
    outcomes: {
      metrics: [
        { label: "Power Interruption", value: "0 ms", detail: "True continuous online protection" },
        { label: "Power Quality", value: "<3% THD", detail: "Clean sine-wave output exceeding ITIC/CBEMA curves" }
      ]
    },
    recommendedProducts: ["magna-ci", "lt215"]
  },
  {
    id: "solar-shifting",
    slug: "solar-shifting",
    title: "Solar PV Self-Consumption & Time-of-Day Arbitrage",
    shortTitle: "Solar Shifting",
    tagline: "Capture 100% of midday rooftop solar surplus and dispatch during peak evening tariff hours",
    iconName: "Sun",
    problem: {
      headline: "Solar Energy Curtailment and Low Feed-in Tariffs",
      description: "Commercial solar plants produce peak power at midday (11:00 AM – 2:00 PM) when facility load may be low. Feeding solar back into the grid earns negligible feed-in tariffs (₹2–₹3/kWh), while buying grid power during evening peak hours costs ₹9–₹12/kWh.",
      financialImpact: "Thousands of units of clean daytime energy wasted or exported at steep losses daily.",
      operationalRisk: "Discom restrictions on grid feed-in and net-metering caps limiting solar ROI.",
    },
    solution: {
      headline: "Solar-Plus-Storage Automated Time-of-Day Dispatch",
      description: "Lith-On BESS absorbs 100% of daytime solar generation surplus and stores it with >95% round-trip efficiency, automatically discharging during the facility's highest tariff window.",
      systemArchitecture: "AC-coupled or DC-coupled solar storage skids with automated scheduling EMS.",
      keyTechnologies: ["Automated ToD Tariff Arbitrage", ">95% Round-Trip Efficiency", "Solar Inverter Sync via Modbus"],
    },
    outcomes: {
      metrics: [
        { label: "Solar Self-Consumption", value: "85% – 95%", detail: "Up from 35% on unbuffered solar plants" },
        { label: "Grid Import Reduction", value: "Up to 60%", detail: "Slashes monthly energy bills" },
        { label: "Campus Microgrid Payback", value: "4.29 Yrs", detail: "Proven at Invertis University Bareilly" }
      ],
      caseReference: { title: "Invertis University Campus Microgrid", href: "/case-studies#invertis_university" }
    },
    recommendedProducts: ["magna-ci", "max-20hc", "lithon-50"]
  },
  {
    id: "microgrids",
    slug: "microgrids",
    title: "Industrial & Remote Islanded Microgrids",
    shortTitle: "Microgrids",
    tagline: "Autonomous grid-tied and islanded renewable power for remote defense and mines",
    iconName: "Cpu",
    problem: {
      headline: "Fragile Mountain Grid Connections and Extreme Mountain Diesel Logistics",
      description: "Remote defense installations, high-altitude border posts, and mining sites rely on hazardous fuel transport over mountain roads. Low temperatures (-20°C to -30°C) cause diesel fuel gelling and generator failure.",
      financialImpact: "Mountain diesel logistics costs up to ₹180 to ₹250 per liter delivered.",
      operationalRisk: "Strategic vulnerability and catastrophic blackout risk in extreme freezing conditions.",
    },
    solution: {
      headline: "Ruggedized High-Altitude BESS with Synthetic Inertia",
      description: "Engineered with IceBattery® thermal ceramic barriers and internal loop heating, Lith-On microgrid containers operate reliably from -30°C to +60°C.",
      systemArchitecture: "Containerized multi-MWh BESS with black-start capabilities, synthetic inertia, and IEC 61850 substation integration.",
      keyTechnologies: ["Black-Start Microgrid Energization", "Sub-Zero Internal Thermal Conditioning", "Synthetic Inertia Frequency Support"],
    },
    outcomes: {
      metrics: [
        { label: "Diesel Consumption Cut", value: "Up to 80%", detail: "In alpine military and mining microgrids" },
        { label: "Operating Temperature", value: "-30°C to +60°C", detail: "Maintains cell equilibrium in arctic snow" },
        { label: "Grid Standard Conformance", value: "IEC 61850", detail: "Substation teleprotection automation" }
      ]
    },
    recommendedProducts: ["max-20hc", "lt215"]
  }
];

