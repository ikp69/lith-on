# Claims removed pending confirmation

**Date:** 17 November 2026
**Why:** AGENTS.md says the site must not publish technical, certification, performance or service claims that `LITHON_DATA_VAULT.md` or `content/` do not support. Each claim below was on the live site with no supporting source, so it has been taken off the public pages.

**How to restore one:** confirm it with evidence, add it to `LITHON_DATA_VAULT.md` (and to `src/data/claims.ts` with status `verified`), then put the original wording back in the file listed.

---

## 1. Certifications and standards

None of these standards appears anywhere in the vault or in `content/`. The vault's certification list is IEC 61508, IEC 61850 and BIS. IP55, IP54 and IP67 enclosure ratings are supported by the vault and `content/solutions.md`, and stay on the site.

| Claim removed | Where it appeared | What replaced it |
|---|---|---|
| CE marking / "European Conformity" | `src/app/certifications/page.tsx` (card, hero chip, document list, shipping package), `src/app/about/page.tsx` (certification list), `src/data/products.ts` (all 8 product lists) | Removed |
| UL 9540A | Certifications page (card, hero chip, document list), `src/data/products.ts`, `src/components/home/BessArchitectureShowcase.tsx`, `src/components/technology/InteractiveBessCutaway.tsx`, `src/data/navigation.ts` | Removed |
| IEC 62619 | Certifications page (card, document list), `src/data/products.ts`, `BessArchitectureShowcase.tsx`, `ManufacturingInteractiveJourney.tsx`, `InteractiveBessCutaway.tsx` | Removed. Where it was "IEC 62619 / BIS Certified", it now reads "BIS Certified" |
| UN 38.3 | Certifications page (card, document list, shipping package), `src/data/products.ts`, `InteractiveBessCutaway.tsx` | Removed |
| ISO 9001 / ISO 14001 | About (certification list; "under strict ISO 9001 and IEC 61508 protocols"), Certifications document list, `CredibilityCounterStrip.tsx` ("ISO 9001 / 14001 Clean Facility"), `ManufacturingInteractiveJourney.tsx` ("ISO 9001:2015 Certified Assembly"), `InteractiveBessCutaway.tsx`, footer badge | Removed. The facility label now reads "Assembly & Testing Plant"; the stage label reads "In-House Noida Assembly" |
| ISO 45001, RoHS | Certifications document list | Removed |
| NFPA 855 | `BessArchitectureShowcase.tsx` (subtitle and badge), `ManufacturingInteractiveJourney.tsx`, `ProductHorizontalShowcase.tsx`, `src/app/calculator/page.tsx`, `src/data/solutions.ts`, `InteractiveBessCutaway.tsx` | The standard's name is removed. The feature stays, because aerosol or clean-agent fire suppression with multi-gas detection is in `content/` |
| EN 15276, ETSI EN 300 132-2, IEC 62109-1/2 | `InteractiveBessCutaway.tsx`, `src/data/products.ts` | Removed |
| BIS IS 16046 (Part 2):2018 / IEC 62133-2 | About, Certifications, Why Lith-On, `src/data/products.ts`, `InteractiveBessCutaway.tsx` | Now reads "BIS" or "BIS Certified". The vault confirms BIS but not the specific standard number |
| TÜV as the IEC 61508 auditor | About (certification list) | Removed, together with all the other unsourced "audited by" lines |
| Hospital NABH safety standards | `src/data/industries.ts` (healthcare outcomes) | Now reads "100% fume-free and vibration-free installation" |

## 2. Metrics and performance claims

| Claim removed | Where it appeared | What replaced it |
|---|---|---|
| "1,000+ operational systems" | About (stats strip), `CredibilityCounterStrip.tsx` | Removed on About. The home stat now reads "Deployed globally across 25+ countries" |
| "99.999%" reliability guarantee / power availability | `src/data/solutions.ts` (UPS metrics), `src/components/hero/smart-city/city-data.ts` (hospital hotspot) | The solutions metric is removed. The hospital hotspot now shows "<10 ms grid-to-island cutover" |
| "Zero Thermal Runaway" | `src/app/technology/page.tsx` | "High Thermal Stability", using the approved wording from `src/data/claims.ts`. That register marks "zero thermal runaway" as **rejected** |
| "Inherently non-combustible" | `InteractiveBessCutaway.tsx` | "High thermal stability (>270°C onset)" |
| LFP "does not suffer from thermal runaway under nail puncture, crushing, or overcharging" | `src/app/faqs/page.tsx` | Now says only "non-combustion under puncture testing", which is what the vault supports |
| "Patented" IceBattery® (11 places) | Calculator, site metadata in `layout.tsx`, home hero, home showcases, IceBattery illustration, moats stack, footer AI prompt, cutaway | "Proprietary". The vault never says patented |
| "Make in India incentives" | `src/components/illustrations/SevenMoatsStack.tsx` | Removed |

## 3. Service commitments

The warranty SLAs in `content/warranty-and-support.md` stay: 4 to 8 hours in Delhi-NCR, 24 hours in Tier-1 cities, 48 hours pan-India, and 99.9% availability. The commitments below go beyond that source.

| Claim removed | Where it appeared | What replaced it |
|---|---|---|
| "2-hour response SLA" (Premium plan), "4-hour response SLA" (Comprehensive AMC), "4-hour remote diagnosis" | `src/app/services/page.tsx` | Removed. Field coverage now states content's own dispatch times |
| "80% of issues resolved without site visit" | Services | Removed |
| "48–72 hour delivery to major metros" | Services | "Pan-India logistics network serving major metros and industrial clusters" |
| "10-year guaranteed spare parts availability" | Services | Content's own wording: replacement modules, BMS boards and contactors are available from the Noida hub |
| "Proposal within 5 working days" / "within 3 working days" | Services CTA, Financing CTA | The timeframe is removed |
| "Partner discussion within 24 hours" | `src/app/distributor/page.tsx` | The timeframe is removed |
| "Response guaranteed within 2 business hours" (email) | `src/app/warranty-and-support/page.tsx` | Removed |
| "Responds in <200ms" | `src/app/grid-services/page.tsx` (frequency regulation) | Now reads "responds far faster than conventional spinning reserve" |
| "Pre-qualified for CERC ancillary services" (including AGC pre-qualification) | Grid Services | Now states IEC 61850 grid communication support |

## 4. Export projects

The vault gives the export footprint as **Asia, the Middle East, Africa and North America**. It names no country-level projects outside India.

| Claim removed | Where it appeared | What replaced it |
|---|---|---|
| Kenya school microgrid (120 kWh + 40 kWp) | `src/components/home/GlobalExportsShowcase.tsx` (About page) | Removed. `data-sources/` has a Kenya *proposal* deck, not a deployment record |
| UAE 520 kWh dual Magna skid | Same | Removed |
| Southeast Asia: 150 telecom tower sites | Same | Removed |
| "From rural Kenyan school microgrids to Middle Eastern industrial hubs" | Same (intro) | Now reads "exports spanning Asia, the Middle East, Africa, and North America" |
| "Asia, Africa, UAE & Europe" / "Pan-Asia, Africa, UAE, and European customers" | About stats, `CredibilityCounterStrip.tsx` | Now uses the vault's regions. Europe was replaced with North America |

The export panel now shows the two documented projects: Gurugram (vault Case Study B) and Invertis University (Case Study A).

---

## 5. Found but not changed: needs a decision

These items are unsupported or conflict with a source, but they were outside the claims approved for removal in this pass.

### Owner answers, 20 Nov 2026

| Item | Answer | What changed on the site |
|---|---|---|
| 1, 12, 16 Extra products | Show all products everywhere | All 12 systems and the home range are now in the mega menu, mobile menu, footer and homepage ("Also in the range"), as well as `/products`. Specs still come from `products.ts` and the catalogue |
| 3 SIL level | Unknown for now | Still open; the site says only "SIL-rated" |
| 5 Grid-service specs | Unknown for now | Still open; the specs stay off `/grid-services`. Owner confirmed the five services themselves are correct |
| 6 Service plan tiers | They do not exist | Nothing to change: the tiers were already removed |
| 7 Certification test reports | Unknown for now | Still open; the document checklist stays off |
| 9 Legal mailboxes | Use contact@lith-onbharat.com | Privacy policy and terms now use contact@lith-onbharat.com. **Resolved** |
| 11 Power ratings | Follow the catalogue | Magna-C&I 125 kW, Lith-On-50 48 kW, LT215 110 kW (single values, no more "x / y"). Max-20HC-5000 is now **2.5 MW** (catalogue: 2 × 1.25 MW or 6 × ≤ 417 kW PCS), replacing the vault's 1,250 kW, on the product page, homepage rail, mega menu and Grid services. **Resolved**, but the vault still says 1,250 kW and should be updated |
| 13 Invertis payback | Follow the data-sources | `data-sources/uses.md` gives Invertis as 1.0 MWh + 900 kWp only, and the universities deck ties 4.29 years / ₹17.76 Cr to a 2,500 kW / 5,333 kWh system. So the payback and 10-year figures stay off the Invertis page. **Resolved** |
| 17 Sustainability claims | Correct as written | No change. **Resolved** |
| 18 Financing | Rent and EMI are offered in India, financed through Japanese partners without affecting the customer's CIBIL record | `/financing` says so. The rent model (PTPQ quarterly rent, security deposit, end-of-term buyout) and its estimator follow Lith-On's own calculator at lith-onbharat.com/calc. EMI: 10% down payment and 5 years, rate from the /calc PTPQ (see below). Wording "without affecting your CIBIL record" to be confirmed |
| 19 Careers | No openings at present | No change; the page shows "Teams we hire for". **Resolved** |
| 20 Warranty | "Depends on the product" | All "10-year warranty" claims removed site-wide: Warranty page reworked (no single term, no 70% capacity floor, retention chart removed), FAQ answer, About, Why Lith-On, Services, Distributor, Financing, comparisons note, and every product's warranty field ("term and coverage set out in your quotation"). `claims.ts` entry set to under review. **Resolved** |

**Domain (resolved 20 Nov 2026):** the new site runs on **lith-on.com**, which the canonical URLs, sitemap, robots and JSON-LD already use. lith-onbharat.com stays only as the email domain and the home of the existing /calc page.

**EMI terms (owner, 20 Nov 2026):** 10% down payment, 5-year tenure, interest "as in /calc". /calc gives its rate only as PTPQ, so the EMI estimator applies the same PTPQ to the amount financed, paid monthly, and shows the equivalent annual rate (PTPQ 62 ≈ 8.8%, 67 ≈ 12.2%, compounded monthly). Confirm this reading of "as in /calc".

1. **Four products are missing from the vault's catalogue.** It lists Magna-C&I, Lith-On-50, LT215 and Max-20HC. The site also sells **Tele-Rack 100, Resi-Shield 120, Solar-Hybrid 500 and Mega-40HC 10 MWh**, with full specifications, in `src/data/products.ts`.
   - **Owner decision, 18 Nov 2026:** show all eight equally on `/products`, with specs from `products.ts`. The item stays open until the four extra products' specifications are confirmed against a source.
2. ~~**The EV hub capacity conflicts with the vault.**~~ **Resolved 17 Nov 2026.** The site now matches vault Case Study C and `content/case-studies.md`: a 450 kWh / 150 kW BESS with 75 kWp of solar, and a baseline of ₹28.92 Lakh a year in fixed demand penalties (₹2.41 Lakh a month). The ₹48 Lakh baseline, the 110 kW rating, the 185 t CO₂ figure, the operating-cost split and the "liquid-cooled up to 55°C" line had no source and were removed. The pages now hide the CO₂ and annual OPEX rows when no figure is published. The ₹79 Lakh capex is **derived** (3.9-year payback × ₹20.26 Lakh a year) and labelled as such; see item 10.
3. **The SIL level is not in the vault.** "SIL 2" / "SIL 3" appears across the site (footer, certifications, products, timeline). The vault says only "SIL-rated", and `claims.ts` says the level depends on configuration.
4. **The "72-hour" claims have no source.** One is the 72-hour full-load burn-in that will "guarantee zero infant mortality", in `ManufacturingInteractiveJourney.tsx`. The other is "72-Hour Rapid On-Site Integration", in `SevenMoatsStack.tsx`.
5. **Grid Services specifications have no source.** These are droop deadband ±0.03 Hz, AGC <1 second latency, CEA connectivity compliance, ±5% voltage regulation and 8–12 week deployment.
6. **The service plan tiers have no source.** The Standard, Comprehensive AMC and Premium 24/7 plans and their inclusions appear in no source.
7. **The Certifications document checklist is unverified.** The test reports offered "on request" (vibration, hi-pot, thermal cycling, ΔT verification and others) are not evidenced in any source.
8. **The claims register conflicts with AGENTS.md.** `src/data/claims.ts` marks 500+ MWh and 25+ countries as "under review" and gives the regions as including Europe. AGENTS.md and the vault treat 500+ MWh and 25+ countries as verified, and the vault says North America, not Europe. The site follows AGENTS.md and the vault.
9. **The privacy and legal mailboxes are unverified.** `privacy@lith-on.com` and `legal@lith-on.com` are not in the vault; the only listed mailbox is `tech@lith-onbharat.com`.
10. ~~**Other case-study figures don't match the vault.**~~ **Resolved 17 Nov 2026.** All three case studies now follow `content/case-studies.md`, the vault and `content/calculator-data.json`:
    - **Invertis.** The ₹17.76 Cr figure is now labelled "10-year cumulative cash savings", as in the source; it was previously shown as net gain after capex. The source's ₹34.5 Lakh *monthly diesel bill* had been misread as "34,500 L/month"; that is corrected. The 500 kW rating, the DG fleet breakdown (3 × 750 + 1 × 250 kVA), the ₹95/L diesel price, the charging/maintenance split, the 5-year figures, the 183% 10-year ROI and the escalation and efficiency assumptions had no source and were removed.
    - **Gurugram.** Capex is now the source's ₹8.28 Cr (₹7.84 Cr incremental over DG), not ₹7.62 Cr. The ₹38.7 Cr 10-year net gain and ₹25.1 Cr 5-year gross savings had no source and were removed; the source's 204% (5-year) and 508% (10-year) ROI stay. Diesel is now ₹98.8/L (was ₹98) and round-trip efficiency 95% (was 96%), per the source. The unsourced 3.5% diesel escalation was removed.
    - **EV hub.** The derived ₹1.21 Cr net gain is replaced by the source's 10-year cumulative savings, ₹2.03 Cr (20,260,000 INR in `calculator-data.json`).
    - **Still derived.** Two capex figures are derived, not stated: Invertis ₹9.70 Cr and EV ₹79 Lakh (payback × annual savings). The pages label them "Derived capex" and "Derived from payback × savings". Replace them with the actual project capex once the client confirms it.
11. **Product power ratings differ between the vault and `src/data/products.ts`.** The vault lists Max-20HC-5000 at 1,250 kW; `products.ts` says "1,250 kW / 2,500 kW". The vault gives Magna-C&I 125 kW, Lith-On-50 48 kW and LT215 110 kW, while `products.ts` gives "100 kW / 125 kW", "25 kW / 48 kW" and "100 kW / 110 kW". The homepage product rail (HOME-04, 18 Nov 2026) uses the vault values only. The product pages still show the `products.ts` values. Confirm the continuous and peak ratings for each product.
    - **Catalogue (added 18 Nov 2026):** `data-sources/Lith-On Catalogue/` confirms 48 kW (Lith-On-50), 110 kW (LT215) and 125 kW (Magna-C&I-260). It gives Max-20HC-5000 as "≤417 kW×6 / 1.25 MW×2", which is probably the source of the "2,500 kW" in `products.ts`. Confirm how to state it.
12. **The catalogue adds facts and products that are not in the vault.** Nothing below is on the site yet. Each needs a decision before use:
    - **Products:** Magna-C&I-215 (215 kWh / 100 kW), Magna-UTL-373 and Magna-UTL-418 (DC outdoor, liquid-cooled), and Max-20HC-3440 (3.44 MWh). **Added to the site 18 Nov 2026 at the owner's request**, with specs from the catalogue spec tables only. Fields the catalogue does not give say "Contact us for details". Their certification lines say "listed in catalogue". Lith-On-50 is shown as a floor cabinet with 150S1P 100 Ah cells, IP55 and forced-air cooling. The LT215 is listed as an "All-in-One ESS", liquid-cooled, IP67, 1040 × 1500 × 2200 mm. The vault calls it a "Modular Weatherproof Container"; the site follows the vault.
    - **Certifications:** UL 9540A, UL 1973, NFPA 855, IEC 62619, IEC 62933 and ISO 26262 logos or mentions on product pages. None is in the vault's certification list.
    - **Performance claims:** "liquid cooling core temperature difference < 2 °C", "30% cycle improvement", "> 95% DC efficiency", "RTE 96% @ 0.25P", and "15-year service life" for Max-20HC-3440.
    - **Installations:** pages 31–32 show photographs labelled NTPC, Indian Army, RSPL Kanpur, Lucknow, Kashmir, Srinagar, Patna, Ghaziabad, Uttar Pradesh and a fuel station. They may suit HOME-06/07 and case studies, subject to permission to name these clients.
    - **E-rickshaw page:** page 28 credits "Neoclo Energy Private Limited". Confirm the relationship.
    - ~~**Neoclo branding in photographs:**~~ **Resolved 18 Nov 2026:** the vault (§1) states Lith-On was founded in 2022 as Neoclo Energy Private Limited, so "Powered by Neoclo Energy" is the company's former name. This also explains the catalogue's e-rickshaw credit. Original note: several installation photographs show "Powered by Neoclo Energy" on the cabinet. This includes the fuel-station photograph used on the homepage (HOME-07) and the existing Invertis yard photograph. Confirm this branding is acceptable on the site, or supply alternative photographs.
13. **The Invertis payback and 10-year figures may belong to a different system model.** `content/case-studies.md` and `src/data/case-studies.ts` give Invertis a 4.29-year payback and ₹17.76 Cr in 10-year cumulative savings. The vault gives only ₹4.14 Cr → ₹1.88 Cr and ₹2.26 Cr a year. The universities deck (`data-sources/BESS presentation for universities`, cost analysis slide) shows the same 4.29 years and ₹17.76 Cr for a **2,500 kW / 5,333 kWh** system with ₹14.6 Cr capex, not the 1 MWh + 900 kWp Invertis installation. The homepage (HOME-07) uses only the vault figures. Confirm the Invertis payback before the case-study page keeps showing it.
14. **Social media links have no source.** The old footer linked to `linkedin.com/company/lith-on-bharat-energy` and `youtube.com/@Lith-OnBharatEnergy`. Neither URL appears in the vault or content files, so the new footer (G4, 18 Nov 2026) leaves them out. Supply the official profile URLs to restore them.
15. **The catalogue's technology comparisons differ from Lith-On's own figures.** At the owner's request, the DG vs BESS table (catalogue page 29) is on `/solutions#dg-vs-bess` and the lead-acid vs lithium table (page 30) is on `/technology#lead-acid-vs-lithium` (`src/data/comparisons.ts`). They are presented as general technology comparisons, and each carries a note with Lith-On's vault figures. Differences to confirm: lithium lifespan "10–15 years (5,000+ cycles)" vs vault 15–20 years and > 6,000 cycles; efficiency "90–95%" vs vault > 95–98%; "4,500–6,000 cycles, 5–10 year warranty" vs vault > 6,000 cycles and 10 years; DoD "up to 99%" vs vault 88–90%; operating range "−20 to +75 °C". The catalogue also contradicts itself on weight (lead-acid "5× heavier" vs lithium "a quarter the weight"), so only the kg/kWh figures are shown.
16. **The Home & small business range comes from the catalogue only.** Seven products on `/products#home-small-business` (`src/data/home-products.ts`): NEES-5 wall-mount battery, NESS-5LV stackable battery, 1 kWh lead-acid replacement, and 600 VA, 1 kVA, 2 kVA and 3 kVA off-grid solar inverters with built-in lithium batteries. They were added at the owner's request (19 Nov 2026), with figures from the catalogue spec tables only. To confirm: current availability, and the catalogue's own variations (e.g. "> 6,000 cycles at 100% DoD" for the 1 kWh battery vs "≥ 4,800 cycles at 80% DoD" for NEES-5, and stackable "Warranty: 5 years / 10 years, optional"). The range has no detail pages; each card links to the contact form.
17. **Sustainability claims come from `content/sustainability.md` only (added 19 Nov 2026).** The rebuilt `/sustainability` page uses these content-file claims, which the vault does not confirm. Confirm each one, or remove it:
    - Recycling: "government-authorised recyclers" and "over 95% of lithium carbonate and iron phosphate can be recovered" (the content file says "through partnerships"; the page does not name a partnership).
    - Second life: "cells retired after 6,000 cycles still hold about 70–75%" and "Lith-On supports reusing them" (repurposing programmes).
    - Solar: "70–90% clean-energy self-sufficiency" (the page adds "depending on solar capacity and load").
    - Sound: "below 55 dB" for a Lith-On system, and the generator ranges (75–95 dB in general; 85–95 dB for the Gurugram sets).
    - **Derived, not stated in the vault:** "≈ 1,740 t CO₂ a year" and "≈ 6,50,000 litres" for the Gurugram society. They are consistent with the vault (₹6.49 Cr fuel ÷ ₹98.8/L ≈ 6.57 lakh litres × 2.68 kg/L ≈ 1,760 t). The page states them as direct, on-site emissions.
    - **Left out:** "2,800+ kg PM2.5 a year" (not in the vault, consistent with the Case Studies decision), the old page's "0.71 kg CO₂/kWh" grid factor (no source), and "ZERO emissions" or "100% GRAP compliant" wording. The page says "no fuel burned on site" and "keeps supplying power through every GRAP stage".
18. **Financing terms have no source (added 20 Nov 2026).** The old `/financing` page offered "BESS on Rent" (zero capex, 3- and 5-year terms, ownership transfer, insurance included), EMI with a 10% down payment over 5 years "through institutional financing partners", "cash-flow positive from month 1", accelerated depreciation, MNRE/state subsidies and "up to 500%+ ROI". None of these appears in the vault, `content/` or any deck in `data-sources/` (the only financing material is the Kenya decks' Energy-as-a-Service / PPA model). The rebuilt page keeps the three model names with generic descriptions (rent: no upfront capital, Lith-On owns and maintains; EMI: down payment plus instalments to a lender; purchase) and an EMI estimator whose inputs are the visitor's own. Confirm: whether rental is offered in India and on what terms; whether Lith-On has financing partners; standard down payment and tenure. The external `lith-onbharat.com/calc` link was removed (domain not in the vault).
19. **Careers vacancies have no source (added 20 Nov 2026).** The five roles on the old `/careers` page (Lead BESS Systems Engineer, Thermal & Mechanical Design Engineer, Embedded Firmware Engineer, Field Commissioning Manager, C&I Sales Director, with experience ranges and locations) appear in no source. Because the page carries the recruitment-fraud warning, unconfirmed vacancies were taken down; `OPEN_ROLES` in `src/app/careers/page.tsx` renders a role list as soon as confirmed openings are added. A careers mailbox would also help (applications currently go to `tech@lith-onbharat.com`).
20. **FAQs now include the client's general FAQ document (added 20 Nov 2026).** `/faqs` merges `content/faqs.md` with `data-sources/FAQs.docx` (`src/data/faqs.ts`). Where they overlap the Lith-On-specific answer is used. One conflict to confirm: the docx says warranty "depends on the specific product", while the vault says a standard 10-year warranty; the page follows the vault. Two content-file details were left out as unsupported elsewhere: "3x greater usable energy in one-third the weight, 4x faster charging" (telecom) and "reflects > 90% of solar radiation" (IceBattery). The Gurugram answer now says "no fuel burned on site … through every GRAP stage" instead of "zero emissions … 100% legal compliance", matching item 17.
