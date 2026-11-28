import { type DeckBlock, SHARED } from "./types";

/** Route `/why-lith-on`. */
export const WHY_BLOCKS: readonly DeckBlock[] = [
  {
    id: "why-moats",
    route: "/why-lith-on",
    placement: "Moat stack and time-to-replicate chart",
    component: "MoatStack, ReplicateChart",
    heading: "What is hard to copy",
    points: [
      { title: "In-house manufacturing", text: "A 20,000 sq ft facility with a proprietary six-step assembly process." },
      { title: "Certification trifecta", text: "IEC 61508, IEC 61850 and BIS held together, which takes a new entrant 24 to 36 months." },
      { title: "Team experience", text: "IIT alumni and engineers with more than 40 years of combined Indian grid experience." },
      { title: "Modular architecture", text: "Application-specific BMS and EMS scaling from 51.2 kWh to megawatt-hours, built for India's unstable grid." },
      { title: "Service network", text: "A skilled team so charging stations and sites stay powered." },
      { title: "Technology tie-ups", text: "Strategic global partnerships that keep the product roadmap current." },
    ],
    figures: [
      { value: "18 months", label: "To replicate the manufacturing" },
      { value: "36 months", label: "To replicate the certifications" },
      { value: "Decades", label: "To replicate the team's experience" },
    ],
    sources: SHARED.moats,
    status: "ready",
    onSite: true,
    note: "Already on the site. The slide's '10-year warranty' moat and the competitor table stay off (see excluded.ts).",
  },
  {
    id: "why-best",
    route: "/why-lith-on",
    alsoOn: ["/technology"],
    placement: "Proof points under the hero",
    component: "Why Lith-On stat strip",
    heading: "What sets the systems apart",
    points: [
      { title: "Built for Indian heat", text: "Designed to work in ambient temperatures up to 60 °C." },
      { title: "IceBattery® coating", text: "Lowers internal temperature by 15–30 °C, cutting HVAC running cost." },
      { title: "Exported to 25+ countries", text: "Systems supplied well beyond India." },
      { title: "Long cycle life", text: "More than 6,000 charge and discharge cycles." },
      { title: "One integrated stack", text: "BMS, PCS, EMS and SCADA developed in-house so every part works together." },
    ],
    sources: SHARED.best,
    status: "ready",
    onSite: true,
    note: "The slide's '7 certification compliance wall' stays off: the owner confirmed three certifications (26 Nov 2026). The 10-year warranty is approved site-wide (26 Nov 2026).",
  },
];
