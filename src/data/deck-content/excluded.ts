import { type ExcludedItem, SHARED, src } from "./types";

/** Deck content deliberately kept off the website. Revisit only with new evidence or an owner decision. */
export const EXCLUDED: readonly ExcludedItem[] = [
  {
    id: "competitor-table",
    content: "Competitor table: Tata Power, Adani Energy, JSW Energy, Exide Energy vs Lith-On",
    reason: "Unverified comparative claims (AGENTS.md). The Adani row also contradicts the vault ('<20%' vs '>20%'). Owner decision 26 Nov 2026: the slide (investor 14) is shown on /why-lith-on with the Adani figure corrected to '>20%' (R18); the comparison is not rebuilt as page copy.",
    sources: SHARED.moats,
  },
  // ten-year-warranty: removed 26 Nov 2026; the owner approved a 10-year warranty site-wide (OWNER_REVIEW R17).
  {
    id: "seven-certifications",
    content: "'The 7 Certification Compliance Wall: hold seven international certifications'",
    reason: "Only IEC 61508, IEC 61850 and BIS are named or verified. Owner decision C6. Owner decision 26 Nov 2026: three certifications confirmed (R6); investor slide 5 is shown as-is with its 'seven' wording.",
    sources: SHARED.best,
  },
  {
    id: "unverified-certs",
    content: "ISO (Corporate Deck pp.3, 7), 'IEC, ISO, ROHS, UN38.3' (e-rickshaw page), Make in India badge",
    reason: "Removed earlier as unsupported (CLAIMS_REVIEW §1–2).",
    sources: [src("corporate", 3, 7), src("catalogue", 1, 28)],
  },
  {
    id: "rejected-safety-wording",
    content: "'No thermal runaway, no fire or explosion risks'",
    reason: "Rejected wording in src/data/claims.ts; use 'high thermal stability'.",
    sources: [src("catalogue", 28)],
  },
  {
    id: "absolute-environment-wording",
    content: "'100% green backup', '100% regulatory compliance … zero exhaust and zero carbon emissions', 'Emissions: Zero'",
    reason: "CLAIMS_REVIEW 17: say 'no fuel burned on site' and 'keeps running through every GRAP stage'.",
    sources: [src("housing", 4, 8, 10), src("universities", 8)],
  },
  {
    id: "boilerplate-co2",
    content: "'12.78 tonnes CO₂ emitted monthly'",
    reason: "The identical figure appears in both the housing and EV decks, so it describes neither site.",
    sources: [src("housing", 3), src("hyundai-ev", 8, 9)],
  },
  {
    id: "investor-model",
    content: "Subscription platform, in-app ads and data monetisation; 500 kWh unit economics (12.33 M KES), 3.5-year payback, 189% ROI; refurbishment at year 10 for 30% of capex, 314% ROI; exit options",
    reason: "Investor-only business model and financial projections.",
    sources: [src("investor", 7, 8, 9)],
  },
  {
    id: "ev-market-sizing",
    content: "EV charging TAM ₹73,186 Cr, SAM ₹58,549 Cr, SOM ₹11,709 Cr (20% share in 3 years)",
    reason: "Investor market sizing, not customer content.",
    sources: [src("hyundai-ev", 12)],
  },
  {
    id: "kenya-market",
    content: "Kenya grid facts (6–8 h supply, 2.3% reserve margin, 24.2% losses), KES tariffs, PPA at ~20 KES, irradiance map, clean cooking, SDG 7, World Bank pilot",
    reason: "Kenya proposals, not deployments (CLAIMS_REVIEW §4); no Kenya content on the site.",
    sources: [src("investor", 2, 3, 4, 10, 11), src("business-kenya", 3, 4, 6), src("school-kenya", 3, 4)],
  },
  {
    id: "us-investor-financing",
    content: "'Project financing backed by US investors leveraging ESG mandates, carbon credits and CSR'",
    reason: "Kenya context; India financing is through Japanese partners per the owner. Owner decision C7.",
    sources: [src("business-kenya", 11), src("school-kenya", 9)],
  },
  {
    id: "country-list",
    content: "'India | South Africa | Italy | Indonesia | Vietnam | Spain | Kenya' and the world map",
    reason: "Conflicts with the vault's regions (Asia, Middle East, Africa, North America). Owner decision C2.",
    sources: SHARED.contact,
  },
  {
    id: "client-logos",
    content: "Indian Army crest, NTPC, RVUNL, PwC and RSPL logos",
    reason: "Permission needed; the Indian Army crest is restricted. Use names as text.",
    sources: SHARED.installs,
  },
  {
    id: "renders-and-cartoons",
    content: "Solution renders (containers among wind turbines and mountains), cartoon campus and society scenes, catalogue cover art",
    reason: "Not real Lith-On hardware (AGENTS.md: no fictional renderings presented as products). Owner decision 26 Nov 2026: the container cutaway (investor slide 13) and the catalogue container field (p5) may be used, always with an 'Illustrative render' or 'Illustrative scene' label (design.md §12).",
    sources: [...SHARED.technology, ...SHARED.intro, src("corporate", 5), src("catalogue", 1, 2)],
  },
  {
    id: "ev-after-bill",
    content: "EV station after-storage bill 'Total monthly ₹16,18,380'",
    reason: "The slide's own line items add up to about ₹1,38,865 a month, so the total can't be quoted. Use the demand-charge and savings figures instead.",
    sources: [src("hyundai-ev", 10)],
  },
  {
    id: "corporate-founding",
    content: "'Founded in 2023 … 20+ years of combined industry experience'; '500+ MWh in-house BESS set-up in progress'",
    reason: "Conflicts with the vault and the other decks (2022, 40+ years, 500+ MWh installed). Owner decisions C3 and C4.",
    sources: [src("corporate", 2)],
  },
];
