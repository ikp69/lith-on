/**
 * FAQ content for /faqs (FAQ-03). Two sources, merged and grouped:
 * - Lith-On-specific answers: content/faqs.md (as already published, with the
 *   CLAIMS_REVIEW §2 wording for LFP safety).
 * - General answers: the client's FAQ document, data-sources/FAQs.docx
 *   (also docs-data/faqs.md). Questions that duplicate a Lith-On-specific one
 *   are left out; where the two disagree (warranty: "depends on the product" vs
 *   10 years), the owner chose "depends on the product" (20 Nov 2026).
 */

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface FaqGroup {
  id: string;
  title: string;
  faqs: Faq[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "basics",
    title: "Battery storage basics",
    faqs: [
      {
        id: "what-is-bess",
        question: "What is a battery energy storage system (BESS), and how does it work?",
        answer:
          "A battery energy storage system stores electricity for use when it is needed. It can charge from grid power or renewable energy and supply electricity during periods of high demand or power interruptions. The right configuration depends on your energy requirements.",
      },
      {
        id: "lithium-vs-lead",
        question: "What is the difference between lithium-ion and lead-acid batteries?",
        answer:
          "Lithium-ion batteries generally offer faster charging, lower weight and longer cycle life than lead-acid batteries. The best option depends on your application, operating conditions and long-term cost requirements.",
      },
      {
        id: "inverter-battery",
        question: "What is the difference between a lithium-ion battery and a lithium inverter battery?",
        answer:
          "Lithium-ion refers to the battery technology, while a lithium inverter battery is designed to work with an inverter for backup power. Compatibility with your inverter's voltage and charging requirements is essential.",
      },
      {
        id: "chemistries",
        question: "What are the different types of lithium-ion battery technology?",
        answer:
          "Common lithium-ion chemistries include lithium iron phosphate (LFP) and nickel manganese cobalt (NMC). Each offers different characteristics in safety, energy density and cycle life, so the right choice depends on the application.",
      },
      {
        id: "kwh-vs-kw",
        question: "What is the difference between battery capacity (kWh) and power (kW)?",
        answer:
          "Capacity (kWh) measures how much energy a battery stores, while power (kW) is how much energy it can deliver at a given moment. Both matter when working out how much equipment a battery can support and for how long.",
      },
      {
        id: "choose-capacity",
        question: "How do I choose the right battery capacity for my application?",
        answer:
          "Start with your power consumption, required backup duration and connected equipment. For commercial and industrial sites, peak demand, charging sources and future expansion also matter. A technical assessment can identify the right configuration.",
      },
    ],
  },
  {
    id: "technology",
    title: "Lith-On technology",
    faqs: [
      {
        id: "chemistry",
        question: "What battery chemistry does Lith-On use, and why?",
        answer:
          "Lith-On uses Tier-1 lithium iron phosphate (LiFePO4 / LFP) exclusively. LFP is chosen for its intrinsic thermal stability, stable olivine crystal structure, freedom from cobalt and nickel, and long cycle life, and is recognised for non-combustion under puncture testing.",
      },
      {
        id: "lifespan",
        question: "How long do Lith-On battery systems last?",
        answer:
          "Lith-On systems deliver more than 6,000 full charge-discharge cycles at 88–90% depth of discharge under 25 °C standard conditions. Cycling once a day, that is a design life of 15 to 20 years, with over 70% residual capacity at end of life.",
      },
      {
        id: "efficiency",
        question: "What is the round-trip efficiency of a Lith-On BESS?",
        answer:
          "Round-trip AC-to-AC efficiency is above 95% to 98%, depending on C-rate and temperature. Self-discharge is below 2.5% a month, compared with 10–15% for traditional lead-acid batteries.",
      },
      {
        id: "dod",
        question: "What is the difference between depth of discharge (DoD) and usable capacity?",
        answer:
          "Depth of discharge is the share of a battery's total capacity that can be safely discharged. Lith-On batteries support 90% DoD, so you can use almost the entire nominal capacity on every cycle without accelerating cell degradation.",
      },
      {
        id: "different",
        question: "What makes Lith-On systems different from standard imported battery packs?",
        answer:
          "Many low-cost assemblers import pre-packaged battery cabinets with third-party software that is not tuned for Indian conditions. Lith-On designs and builds its own cell-level BMS, bi-directional PCS and EMS in its 20,000 sq. ft. Noida facility, and coats its enclosures with proprietary IceBattery® ceramic insulation to withstand 60 °C ambient heat.",
      },
    ],
  },
  {
    id: "safety",
    title: "Safety, climate and maintenance",
    faqs: [
      {
        id: "fires",
        question: "How does Lith-On prevent battery fires and overheating?",
        answer:
          "Safety is built in layers: LFP chemistry with a thermal runaway threshold above 270 °C; the IceBattery® ceramic coating, which reflects solar radiation and emits far-infrared heat to lower internal cabinet temperatures by 15 to 30 °C; a cell-level BMS with continuous millivolt and dual-point temperature monitoring; and integrated aerosol or clean-agent fire suppression with multi-gas detection.",
      },
      {
        id: "heat",
        question: "Can Lith-On systems operate in 50 °C+ summer heat?",
        answer:
          "Yes. With the IceBattery® thermal shield, Lith-On enclosures maintain internal thermal equilibrium and are rated for continuous operation in ambient temperatures up to 60 °C without thermal curtailment or HVAC overload.",
      },
      {
        id: "cell-fault",
        question: "What happens if a cell develops an internal fault?",
        answer:
          "The three-tier BMS detects impedance deviations, rate-of-rise temperature anomalies and voltage imbalances. It isolates the affected module through solid-state contactors within milliseconds, raises local and cloud SCADA alarms, and keeps the system running on redundant strings where configured.",
      },
      {
        id: "safe-ci",
        question: "Are lithium-ion batteries safe for industrial and commercial use?",
        answer:
          "Lithium-ion batteries can be used safely when designed, installed and operated correctly. Battery chemistry, thermal management, electrical protection and a reliable battery management system all contribute to safe operation.",
      },
      {
        id: "safety-features",
        question: "What safety features should I look for in a battery energy storage system?",
        answer:
          "Look for a battery management system, temperature monitoring, overcharge and overcurrent protection, and appropriate electrical isolation. Larger installations may need additional fire protection and emergency shutdown measures.",
      },
      {
        id: "cycle-life-factors",
        question: "What factors affect battery performance and cycle life?",
        answer:
          "Temperature, depth of discharge, charging rates and operating conditions all influence performance. Following the manufacturer's recommended operating limits helps preserve capacity over time.",
      },
      {
        id: "maintenance",
        question: "Do lithium-ion batteries need regular maintenance?",
        answer:
          "They generally need less routine maintenance than lead-acid batteries, but periodic checks remain important. Monitoring alarms, operating temperatures, connections and system performance helps identify issues early.",
      },
      {
        id: "overheat",
        question: "What happens if a battery overheats or develops a fault?",
        answer:
          "Protection systems may raise alarms or restrict operation when a fault is detected. Follow the manufacturer's safety procedures and contact qualified technical support rather than opening or repairing the battery yourself.",
      },
      {
        id: "standards",
        question: "What certifications and safety standards should I look for?",
        answer:
          "The relevant standards depend on the battery type, system configuration and application. Ask for the product's applicable certifications, test reports and technical documentation before deciding. Lith-On's standards are listed on the certifications page.",
      },
    ],
  },
  {
    id: "economics",
    title: "Costs and savings",
    faqs: [
      {
        id: "reduce-bills",
        question: "How does a BESS reduce commercial electricity bills?",
        answer:
          "Mainly in two ways. Peak demand shaving: the battery discharges during load spikes, such as chillers or motors starting, to keep registered peak demand below contracted thresholds and avoid maximum demand charges. Time-of-day arbitrage: it charges from the grid in low-cost off-peak hours and discharges in peak tariff windows.",
      },
      {
        id: "solar",
        question: "Can a BESS be integrated with an existing rooftop solar plant?",
        answer:
          "Yes. Lith-On systems work with AC-coupled and DC-coupled architectures, storing daytime solar surplus that would otherwise be curtailed or exported at unfavourable feed-in tariffs, so a facility can reach up to 80–90% clean-energy self-consumption.",
      },
      {
        id: "payback",
        question: "What is the typical payback period for an industrial BESS?",
        answer:
          "Across Lith-On's documented deployments, commercial and industrial payback has ranged from 1.6 to 4.29 years, depending on tariff structure, diesel generator savings and daily operating hours.",
      },
      {
        id: "ci-benefit",
        question: "How can a BESS benefit commercial and industrial facilities?",
        answer:
          "A BESS can help businesses manage peak demand, improve power availability and make better use of renewable energy. The benefits depend on the facility's consumption and operating requirements.",
      },
      {
        id: "peak-demand",
        question: "How does battery storage help manage peak electricity demand?",
        answer:
          "It supplies electricity during periods of high demand, reducing the power drawn from the grid. This helps manage demand-related charges when the system is sized to the facility's load profile.",
      },
      {
        id: "factory-capacity",
        question: "How do I determine the right BESS capacity for my factory or commercial facility?",
        answer:
          "It depends on electricity demand, peak load, required backup duration and available charging sources. A review of your load profile determines the appropriate capacity and power rating.",
      },
      {
        id: "backup",
        question: "Can a battery energy storage system provide backup power during an outage?",
        answer:
          "Yes, if it is designed with backup functionality and the necessary switching equipment. Backup duration depends on the usable battery capacity and the connected load.",
      },
      {
        id: "bess-vs-dg",
        question: "What is the difference between a BESS and a diesel generator?",
        answer:
          "A BESS stores and releases electrical energy, while a diesel generator produces electricity from fuel. Battery storage responds rapidly and works alongside solar power; generators can supply longer-duration power while fuel is available. The two can also complement each other.",
      },
    ],
  },
  {
    id: "residential",
    title: "Housing societies and GRAP",
    faqs: [
      {
        id: "dg-problems",
        question: "What are the key problems with diesel generators in housing societies?",
        answer:
          "Fuel cost: diesel power costs ₹30 to ₹40 per kWh, over ₹6.5 crore a year in a large 500-flat society. Start-up delay: generators leave a 10–30 second blackout that stalls lifts between floors and resets Wi-Fi routers. Regulatory bans: the CAQM enforces GRAP Stage II, III and IV directives that ban diesel generator operation across Delhi-NCR during winter pollution emergencies.",
      },
      {
        id: "residential-cuts",
        question: "How does a Lith-On BESS solve high-rise residential power cuts?",
        answer:
          "Sub-10 ms switchover means lift motors never lose drive power, corridor lights stay on and residents see no interruption. The system runs quietly (below 55 dB) with no fuel burned on site, so it can keep operating through every GRAP stage.",
      },
      {
        id: "space",
        question: "How much space does a residential BESS need compared with a DG set?",
        answer:
          "A Lith-On BESS needs up to 50% less floor space than an equivalent diesel generator set, with no bulk diesel storage tanks or exhaust chimney piping.",
      },
    ],
  },
  {
    id: "telecom",
    title: "Telecom and defence",
    faqs: [
      {
        id: "telecom-replace",
        question: "Can Lith-On lithium batteries replace lead-acid banks at telecom towers?",
        answer:
          "Yes. Lith-On's 48 V / 51.2 V 100 Ah and 200 Ah modules are 19-inch rack-mount drop-in replacements for VRLA batteries. Voltage, charging settings, communication protocols and existing equipment should be checked before replacement.",
      },
      {
        id: "telecom-how",
        question: "What are lithium-ion telecom batteries, and how do they work?",
        answer:
          "They store electricity to support telecom equipment when the primary supply is unavailable. Their battery management systems monitor operation and protect the battery within specified limits.",
      },
      {
        id: "telecom-uptime",
        question: "How do telecom backup batteries help maintain network uptime?",
        answer:
          "They supply power during electricity interruptions, keeping supported network equipment running. The right capacity and charging arrangement are essential for reliable connectivity.",
      },
      {
        id: "telecom-choose",
        question: "How do I choose the right backup battery for a telecom tower?",
        answer:
          "Consider the tower's power consumption, required backup duration, system voltage and available charging infrastructure. These determine the capacity and configuration needed.",
      },
      {
        id: "telecom-duration",
        question: "How long can a telecom battery provide backup power?",
        answer:
          "It depends on usable capacity and the equipment's consumption. A 48 kWh battery supplying an 8 kW load could in theory provide six hours of power, before losses and operating limits.",
      },
      {
        id: "defence",
        question: "Has Lith-On technology been deployed in defence or harsh alpine environments?",
        answer:
          "Yes. Lith-On LFP systems are deployed with the Indian Army at forward high-altitude border locations in Srinagar and Jammu and Kashmir, performing reliably down to −20 °C.",
      },
    ],
  },
  {
    id: "support",
    title: "Installation, warranty and support",
    faqs: [
      {
        id: "inverters",
        question: "Can Lith-On battery storage work with my existing inverters?",
        answer:
          "Yes. Lith-On systems support open industrial protocols including Modbus TCP/RTU, CAN and IEC 61850, for communication with commercial bi-directional inverters, solar charge controllers and SCADA networks. Voltage and charging profiles should be confirmed for your equipment.",
      },
      {
        id: "warranty",
        question: "What warranty do Lith-On batteries carry?",
        answer:
          "It depends on the product. Each system has its own warranty term and coverage, which we set out in your quotation. Warranties apply when the system is operated within factory guidelines for temperature and charge rate.",
      },
      {
        id: "monitoring",
        question: "Does Lith-On provide 24/7 remote monitoring and after-sales service?",
        answer:
          "Yes. Systems connect to Lith-On's cloud SCADA monitoring centre, where the Noida engineering team monitors cell voltages, temperatures and state of health 24/7, with field engineers available for on-site service across India.",
      },
      {
        id: "select-info",
        question: "What information is needed to select the right battery storage system?",
        answer:
          "Your application, power demand, required backup duration, charging source and installation conditions. Sharing these details helps identify a suitable configuration.",
      },
      {
        id: "install-time",
        question: "How long does it take to install a battery energy storage system?",
        answer:
          "It depends on system size, site readiness and electrical integration. A site assessment establishes a realistic timeline for installation and commissioning.",
      },
      {
        id: "site",
        question: "What space and site requirements does a BESS installation need?",
        answer:
          "Requirements depend on capacity, equipment layout, ventilation, electrical connections and safety clearances. Larger systems may also need civil works and additional fire safety provisions.",
      },
      {
        id: "custom",
        question: "Can Lith-On provide customised battery storage for a specific application?",
        answer:
          "Requirements vary across telecom, commercial and industrial applications. Share your capacity, voltage, load and operating requirements with Lith-On to discuss a suitable configuration and confirm the options.",
      },
    ],
  },
];

export const ALL_FAQS: Faq[] = FAQ_GROUPS.flatMap((g) => g.faqs);
