# Deck content audit: what the presentations hold, what the site uses, and where the rest goes

**Date:** 25 Nov 2026
**Scope:** every slide in the 8 decks in `data-sources/` (129 pages): Corporate Deck (11), Investor (16), Housing Society (13), Universities (14), Hyundai EV (15), Business/Kenya (14), School/Kenya (13), Product Catalogue (33). All 28 routes in `src/app/` were checked against them.
**Component-ready content:** every block recommended here is in `src/data/deck-content/` (one file per page, each block citing its deck and slide; `excluded.ts` lists what stays off). Use `getDeckBlocks(route)` from `src/data/deck-content/index.ts`.
**Method:** each slide was read in full. The site source (`src/app`, `src/components`, `src/data`) was searched for every fact. The results were cross-checked against `LITHON_DATA_VAULT.md`, `content/` and `CLAIMS_REVIEW.md`.

Status keys used below:
- **On site:** already published.
- **Add:** supported by the deck and safe to publish. The target page is given.
- **Check first:** in the deck, but it conflicts with another source or needs permission.
- **Keep off:** investor-only, Kenya-only, a rejected claim, or an unverified comparison.

---

## 1. Fixed: the site contradicted its own source

All three were corrected on 25 Nov 2026: F1 on the EV case-study page, `content/case-studies.md` and the vault; F2 in CLAIMS_REVIEW; F3 on the Invertis case-study page, the vault and CLAIMS_REVIEW.

| # | Where | Problem | What the deck says | Fix |
|---|---|---|---|---|
| F1 | `src/app/case-studies/[slug]/page.tsx:100` (EV hub "economics") | Shows **"Fixed demand charges ₹2.41 lakh a month"**, cut to **"Removed"** | Hyundai deck, slide 9: ₹2,41,800 is the **whole monthly bill** (energy ₹1,26,000, demand ₹96,000, fuel surcharge ₹9,000, duty ₹10,800). The demand charge is **₹96,000 a month** (240 kVA × ₹400). Slide 10: with storage only, the demand charge goes to ₹0 (₹11.52 lakh a year). *(Correction to this report: an earlier version said the bill falls to about ₹1.35 lakh a month. The slide's after-storage total doesn't match its own line items, so no after-storage bill should be quoted.)* | **Done:** the page now shows demand charges ₹96,000 → ₹0 and a baseline-bill breakdown. The vault, `content/case-studies.md` and CLAIMS_REVIEW item 2 are corrected. |
| F2 | `CLAIMS_REVIEW.md` item 13 | Says the universities model has "**₹14.6 Cr capex**" | Universities deck, slide 10: **₹6.4 Cr base capex** for 2,500 kW / 5,333 kWh. That figure checks out: (₹17.76 Cr − ₹6.4 Cr) ÷ ₹6.4 Cr = 177.5%, the ROI the slide gives. | **Done.** The conclusion stands: the 4.29-year and ₹17.76 Cr figures belong to a **model campus**, not Invertis. |
| F3 | `CLAIMS_REVIEW.md` item 10 / Invertis page | The "500 kW rating" was removed as unsourced | Corporate deck, slide 9: "**500 kW backup support for up to 2 hours**", "powers **700+ hostel rooms, 140 classrooms & 8 offices**", "**direct green energy export to grid**". Real photos are included. | **Done:** added to the Invertis case-study facts and vault Case Study A; noted in CLAIMS_REVIEW item 10. |

---

## 2. Conflicts to flag for human review (do not pick a side silently)

| # | Topic | Source A | Source B | Site today |
|---|---|---|---|---|
| C1 | **Are Gurugram and the EV hub real deployments?** | Vault and `content/case-studies.md` call them case studies | The decks are sales **proposals**: "BESS in Housing Society Presentation", "Hyundai Lith-On presentation". Every number is a modelled analysis ("Cost & Financial Viability Analysis"). No installation photo exists for either. | `/case-studies` is titled "Documented Savings", and the EV lead reads as fact ("removing the hub's demand charges"). Kenya was removed for exactly this reason (CLAIMS_REVIEW §4). **Ask the owner.** If they are not built, label them "Modelled scenario". |
| C2 | **Export countries** | Vault: "Asia, the Middle East, Africa and North America" | Every deck's closing slide names **India, South Africa, Italy, Indonesia, Vietnam, Spain, Kenya**, and its map has no pin in the Middle East or North America. Two of the named countries are in **Europe**. | About and home say "Asia, Middle East, Africa, N. America". CLAIMS_REVIEW §4 replaced Europe with North America. The decks say the opposite. |
| C3 | **What "500+ MWh" means** | Six decks: "500+ MWh **Installed Base**" | Corporate deck, slide 2: "500+ MWh **In-house BESS set-up in progress**" | Site: "500+ MWh deployed globally". If the corporate deck is right, this is a capacity build-out, not deployments. |
| C4 | **Founding year and experience** | Vault and timelines: 2022 (Neoclo Energy) | Corporate deck, slide 2: "**Founded in 2023** … **20+ years** of combined industry experience" (the vault says 40+) | Site uses 2022 and 40+. Ask which is current. |
| C5 | **Two different company timelines** | Corporate deck, slide 4 (on `/about`): 2023 first inverter battery; 2024 first 50 kWh, scaled to 150 kWh; 2025 up to 1.5 MWh; Jul 2025 Eco/Premium series; Oct 2025 integrated BESS | The intro slide in the other six decks: 2023 **white label for reputed brands**, **first 100 kWh industrial BESS**, 200 kWh production; 2024 NTPC/Army/fuel/hospitals, **B2C launched**; 2025 **liquid-cooled BESS with integrated PCS**; 2026 **100+ industrial projects**, **proprietary thermal management** | About shows version A only. The two can be merged, but they disagree on what happened in 2023. |
| C6 | **"The 7 Certification Compliance Wall"** | Five decks claim **seven** international certifications | Only IEC 61508, IEC 61850 (and BIS) are named. The badge icons are unreadable. | Site lists three, which is correct. **Ask for the list of seven** with certificates before using the phrase. |
| C7 | **Financing partner** | Owner, 20 Nov: India financing through **Japanese partners** | Business/School decks, slide 11: "Project financing backed by **US investors** leveraging ESG mandates, carbon credits, CSR" | These are probably Kenya-specific. Confirm before mixing them. |
| C8 | **Mission statement wording** | Corporate deck: "empower businesses, utilities, and communities with efficient, reliable, and eco-friendly energy storage systems" | Catalogue, page 5: "empower industries and communities with cutting-edge energy storage solutions that are reliable, sustainable, and efficient", plus a **Vision** line | Neither is on the site. Pick one. |
| C9 | Cycle life in the lead-acid table | Vault: >6,000 cycles, 15–20 years | Corporate deck, slide 8: "10+ years, 3,000–6,000 cycles" | `/technology` uses catalogue page 30 with a vault note. That is fine; just don't copy the corporate deck's range. |
| C10 | Invertis baseline | Site: replaced "2,500 kVA of diesel", ₹4.14 Cr → ₹1.88 Cr | No deck contains the ₹4.14/₹1.88/₹2.26 Cr figures. "2,500 kVA" appears only in the **model** campus (universities, slide 9, where the diesel cost is ₹1.22 Cr a year). The source is `content/case-studies.md` alone. | Confirm the Invertis baseline with the client. The two may have been merged by mistake. |

---

## 3. Slide by slide: what has been added and what can be added

### 3a. Shared slides (repeated in the Universities, Hyundai, Business, School, Investor and Housing decks)

| Slide | Content | Status | Where |
|---|---|---|---|
| Intro "India's Integrated Energy Storage Powerhouse" | 50 MWh BESS / 200 MWh packs / 20,000 sq ft / 500+ MWh | **On site** | About stat band, home proof |
| | "Indian assembler of LFP BESS … from BMS-controlled wall-mounted packs to containerised MWh-scale BESS" | **On site** (paraphrased) | About |
| | Timeline B (white label, first 100 kWh industrial BESS, B2C, liquid-cooled + integrated PCS, **100+ industrial projects**) | **Check first** (C5) | About timeline; "100+ industrial projects" could be a home or About stat once confirmed |
| | "Started white label for reputed brands" | **Add** after confirmation | `/distributor`: an "OEM and white-label supply" point |
| "What makes Lith-On's BESS best" | 60 °C ambient, IceBattery 15–30 °C, 25+ countries, in-house BMS/PCS/EMS/SCADA | **On site** | Technology, Why Lith-On |
| | Cycle life >6,000 / efficiency >98% / self-discharge **<2.5% a month** | Partly. Self-discharge appears only in FAQs | **Add** to the `/technology` LFP spec band |
| | "7 Certification Compliance Wall" | **Check first** (C6) | — |
| | "Transparent 10-year warranty" | **Keep off.** The owner says the warranty depends on the product | — |
| "Our proprietary technologies" (container cutaway) | BMS cell-level monitoring of **voltage, temperature, current, SoC, SoH**; protection against over-temperature, over-voltage, over-current | Protection is on site; **SoC/SoH is not** | **Add** to `/technology#stack` (BMS row) |
| | SCADA monitoring at **cell, module, rack and system** level; remote diagnostics, alarm handling, performance analytics | **Not on site** | **Add** to `/technology#stack` and `/services#monitoring` (good material for a mock dashboard, §6) |
| | EMS modes: peak shaving, **load shifting**, backup/UPS, **renewable firming**, **off-grid & hybrid**, zero feed-in | The site's ModeDiagram has the vault's six. Load shifting, renewable firming and off-grid/hybrid are missing | **Add** to the `/technology` ModeDiagram, or fold them into existing modes |
| | Thermal: IceBattery coating **plus active cooling (liquid + HVAC)**, holding cells **near 20 °C** | **Not on `/technology`** | **Add** one line under IceBattery: "coating plus liquid or HVAC cooling, holding cells near 20 °C" |
| | Container cutaway render | **Keep off** as hardware imagery. It is a render, not a photo (AGENTS rule) | — |
| "How the IB insulation coating works" | 1. Heat shield (NIR reflection, FIR radiation) | **On site** | `/technology` ThermalStep |
| | 2. **Heat retention**: the ceramic surface reaches thermal equilibrium with ambient, so less heat escapes in cold weather | **Not on site** | **Add** a second ThermalStep state or a short paragraph. It matters for the J&K installations (Kashmir, Srinagar, Army) |
| | "Interior coating also works" | Not on site | Optional, `/technology` |
| "Competitive landscape & moats" | Moat stack, 18 / 36 months / decades time-to-replicate, IIT + 40 years, six-step assembly | **On site** | `/why-lith-on` (MoatStack, ReplicateChart) |
| | Competitor table (Tata, Adani, JSW, Exide) | **Keep off.** These are unverified comparative claims (AGENTS.md); the Adani row even reads "<20%" where the vault says ">20%" | — |
| "Already installed commercial solutions" | Army J&K, Srinagar, NTPC J&K/Lucknow/Shravasti, RVUNL Jaipur, fuel station Lucknow, PwC New Delhi, Ghaziabad, Patna, **RSPL Kanpur** (corporate deck) | **On site** (home HomeResults, case studies). RSPL appears only as a photo | **Add** RSPL Kanpur to the text list |
| | **India map** with labelled sites | **Not on site** | **Add** a light-grey map with labelled points to `/case-studies` (and optionally home). The vault's design direction already asks for it |
| | Partner logos (Indian Army, NTPC, RVUNL, PwC, RSPL) | **Check first.** Permission is needed. **Do not use the Indian Army crest** without authorisation (its use is restricted) | Names as text are fine |
| Closing slide | Phones, email, Noida and Foshan addresses | **On site** | Contact, footer |
| | Country list | **Check first** (C2) | — |

### 3b. Corporate Deck (11 pages, with real photos)

| Page | Content | Status | Where |
|---|---|---|---|
| 1 | Cover, building drawing | — | — |
| 2 | Who we are, mission, showroom photo, 250+ / 20,000+ / 500+ | Photo **on site** (About hero). Mission **not on site** | **Add** a one-line mission on About (C8). Founding year and 500+ wording: C3, C4 |
| 3 | Why choose Lith-On (6 points) | Covered by About values and Why Lith-On | "ISO" stays off (removed in CLAIMS_REVIEW §1) |
| 4 | Growth timeline | **On site** (About) | — |
| 5 | Solutions: microgrids / C&I / **off-grid systems** | Microgrids and C&I are on `/solutions` | **Add** off-grid as a sub-point of `/solutions#microgrids` ("remote sites without a reliable grid"). Avoid "100% energy independence". The renders are AI-style, so don't use them |
| 6 | Products: **lithium battery modules**, integrated BESS, containerised/custom BESS | BESS and containers are on site | Lithium modules are covered by Tele-Rack and the home range. Optional "Custom builds" line on `/products` |
| 7 | Capabilities: pack production, integrated assembly, testing & QA (3 photos) | **On site** (`/capabilities`, home manufacturing) | — |
| 8 | Lithium vs lead-acid | Mostly on site (catalogue table) | **Add** the **charging-time row (2–4 h vs 8–12 h)** to `/technology#lead-acid-vs-lithium`. Keep the vault note (C9) |
| 9 | **Invertis project highlight** | Photos **on site**; facts partly | **Add** 500 kW / 2 h backup, 700+ hostel rooms, 140 classrooms, 8 offices, and grid export to `/case-studies/invertis-university` and the Industries Education block (F3) |
| 10 | Installation map | See 3a | — |
| 11 | Contact, world map | See 3a | — |

### 3c. Housing Society deck (13 pages): the strongest unused material

| Page | Content | Status | Where |
|---|---|---|---|
| 3 | "Diesel dead weight": fuel = **75–80%** of generation cost; DG efficiency **30–40%**; 2.65–2.70 kg CO₂/L; **75–90 dB**; 10–30 s gap; **DG sets and fuel tanks occupy space that could hold EV charging or parking** | CO₂/L and 10–30 s are on site; the rest is not | **Add** to a new **Residential societies** block on `/industries` and to `/solutions#dg-reduction`. The site's sustainability page says 85–95 dB; the deck says 75–90 dB, so align one way |
| 4 | Replace diesel: lower **monthly CAM (common-area maintenance) bills**; sub-10 ms (Wi-Fi, lifts, PCs); no moving parts with **BMS digital health checks**; silent enough to install **inside residential areas**; **up to 50% less space** than DG plus fuel tanks | Sub-10 ms is on site; CAM, footprint and in-society siting are not | **Add** to Industries Residential and an FAQ ("Can storage sit inside a housing society?") |
| 8 | DG vs BESS (3 vs 3) | Covered by `/solutions#dg-vs-bess` | Avoid "100% regulatory compliance … zero carbon" (CLAIMS_REVIEW 17) |
| 9 | Load build-up: 5 kW/flat, 60% diversity, common areas (lifts, pumps, lighting, CCTV) = 440 kW; 3 h backup | **On site** (case study facts) | Small inconsistency in the deck: the itemised loads sum to 734 kW, not 440 kW. Keep the site at 440 kW |
| 10 | Capex ₹8.28 Cr, payback 1.6 years, ROI 204% / 508%, 5-year cost bar chart | **On site** | The 5-year cost comparison (DG ≈ ₹34 Cr vs BESS ≈ ₹17 Cr) is a good chart for the case-study page, subject to C1 |
| — | "12.78 t CO₂ a month" | **Keep off.** The identical figure appears in the EV deck, so it is boilerplate, not a society figure | — |

**Gap:** `/industries` has seven sectors (education, manufacturing, commercial, healthcare, EV, data centres, defence) but no Residential societies sector. Gurugram appears only as a case link inside another block. This deck can fill one section.

### 3d. Universities deck (14 pages)

| Page | Content | Status | Where |
|---|---|---|---|
| 3 | "Diesel breaking point": **105–150 L/hour for a 500 kVA unit**; **₹25–40/kWh** diesel cost; diesel exhaust is an **IARC Group 1** carcinogen; >85 dB; GRAP Stage I (AQI 201–300) advises against diesel, Stages II–III ban it | IARC is in `content/` only; L/h and ₹/kWh are not on site | **Add** to `/solutions#dg-reduction` and `/sustainability` (IARC, with its source named) |
| 4 | **Campus zone map**: academic blocks → Magna-C&I (HVAC peak shaving); **hostels → Lith-On-50** (silent night backup); **labs and data centres → LT215** (sub-10 ms UPS for sensitive instruments); **campus substation → Max-20HC-5000** (33/11 kV stabilisation, arbitrage, microgrid hub) | Not on site (the Industries Education text is generic) | **Add** to `/industries#education` as a four-zone product map, and a "Where it fits" line on each of those product pages. Ignore deck typos: "5.0 kWh" means 5.0 MWh, and "2 KVA wall-mounts" is unclear |
| 8 | DG vs BESS on campus | Covered | — |
| 9–10 | **Model campus**: 2,500 kVA, 40,000 kWh/month backup, 20 h/month outages, diesel ₹1.22 Cr/yr → BESS 2,500 kW / 5,333 kWh, ₹6.4 Cr, saving ₹12.43 lakh/month (fuel, O&M, **arbitrage ₹2.7 L**, **peak shaving ₹2 L**, less grid charging), payback 4.29 years | Not on site (correctly kept off Invertis) | **Add** as a clearly labelled **"Illustrative campus model"** on `/industries#education` or a worked example on `/calculator`. Its savings breakdown shows arbitrage and peak shaving earning on top of fuel savings, which the site never explains |
| 11 | India market: **70,000+ MW** of legacy DG; 24.3% CAGR to 2035; ~90% fall in Li-ion prices; up to 77% backup cost reduction | Not on site | Third-party stats: use only with a named source (blog/resources). **Keep off** product pages |

### 3e. Hyundai EV deck (15 pages)

| Page | Content | Status | Where |
|---|---|---|---|
| 3 | EV charging problem: 60–350 kW surges; demand charges 40–60%; **operators throttle chargers, so a 30-minute charge becomes 90 minutes**; tier-2/3 stations go dark in outages | Surges and 40–60% are on site; **throttling is not** | **Add** to `/industries#ev-infrastructure` |
| 4 | Hybrid EV station: solar by day, off-peak grid at night, **island mode on outage**, **forecast-based charging** (the EMS pre-charges on predicted demand and time-of-use) | Forecast charging appears only in `products.ts` | **Add** to EV industry block and `/technology` EMS modes (a mock-UI candidate, §6) |
| 8 | Without vs with: **600 kW grid connection vs 200 kW grid + BESS + solar** feeding 150 kW chargers | Not on site | **Add** as a small diagram on `/industries#ev-infrastructure` ("smaller grid connection, same chargers"). This supports transformer-upgrade deferral |
| 9 | Bill breakdown (DHBVN HT): energy ₹7/kWh, **demand ₹400/kVA**, fuel surcharge ₹0.50, duty 8% | Misread on site (F1) | **Fix** F1. The breakdown could also drive an EV/demand-charge mode in `/calculator` |
| 10 | BESS-only: capex **₹54 lakh** (₹12,000/kWh), saving ₹12.91 lakh/yr, ~4-year payback, 10-year ROI ~140% | Savings are on site; capex is not | Capex is a **stated** figure, so it can replace the removed "derived ₹79 lakh" (subject to C1) |
| 11 | Solar + BESS: 75 kWp (**₹26 lakh**) + 450 kWh (₹54 lakh) = **₹80 lakh**; ₹20.27 lakh/yr; 3.9 years; 153% | Savings are on site | As above: stated capex ₹80 lakh |
| 12 | EV market: TAM/SAM/SOM, 27–35% CAGR, 2.9 M charging points by 2035 (NITI Aayog), a charger every 25 km on highways (MoP 2024), **retrofit of 80,000+ fuel stations** | Not on site | TAM/SAM/SOM: **keep off** (investor). The policy points can go on the EV industry block, with sources. Fuel-station retrofit links naturally to the fuel-station installations |

### 3f. Business deck (Kenya, 14 pages) and School deck (Kenya, 13 pages)

| Page | Content | Status | Where |
|---|---|---|---|
| Biz 3–4 / School 3–4 | Kenya grid problems, Kenya solar irradiance | **Keep off** (Kenya-specific proposal; CLAIMS_REVIEW §4) | — |
| Biz 5 / School 5 | 3-step "energy cycle": daytime solar → store surplus → discharge at peak tariff or outage | `/solutions#solar-shifting` covers the idea | Optional: reuse the three steps as the section's structure |
| Biz 6 | Fixed-rate PPA (KES 20 vs 25–30), zero capex, turnkey O&M | **Keep off** for India unless the owner confirms a pay-per-unit (PPA) model in India | If confirmed: a fourth model on `/financing` |
| Biz 7 | **Facility fit**: >70% of load in daytime; large unobstructed roof; ownership or a 10+ year lease; payment history. **Priority sectors**: tea factories, flower farms, hospitals, malls, universities, steel, food processing, plastics, airports, data centres, SEZs, off-grid lodges | Not on site | Criteria: `/financing` ("Who suits the rent model") **only if** they apply in India. Sectors: agriculture and processing could join `/industries` |
| Biz 11 / School 9 | Investment model: asset-light; **turnkey EPC delivered by Lith-On**; US-investor financing; grid export of surplus | EPC is **on site** | Financing: C7 |
| School 10 | **Sizing questions**: daily/monthly load, operating hours, area for solar, grid tariff, average daily outage duration | Partly in FAQs/products | **Add** as real fields on `/contact?type=assessment` and a "What we need from you" list on `/services` (Energy audit step). Use real controls, not a mock-up |

### 3g. Investor deck (16 pages)

| Page | Content | Status |
|---|---|---|
| 2–4, 11 | Kenya market, EaaS PPA at ~20 KES, 5% annual escalation | **Keep off** (investor / Kenya) |
| 7 | Subscription platform, in-app ads, data monetisation | **Keep off** (investor-only business model) |
| 8–9 | 500 kWh unit economics (12.33 M KES), 3.5-year payback, 189% ROI, refurbishment at year 10 for 30% of capex, 314% ROI on reinvestment | **Keep off** (financial projections). The idea that storage can be refurbished around year 10 could inform `/sustainability` "second life", but only with owner confirmation |
| 10 | Clean cooking, SDG 7, carbon finance | **Keep off** (Kenya) |
| 5, 6, 12–16 | Shared slides | See 3a |

### 3h. Product Catalogue (33 pages): mostly mined already

Already used: product spec tables (12 systems in `products.ts`), the home range (`home-products.ts`), DG vs ESS (p29, on `/solutions`), lead-acid vs lithium (p30, on `/technology`), 12 installation photos (p31–32, in `public/images/installations/catalogue/`) and the catalogue PDF download.

| Page | Content | Status | Where |
|---|---|---|---|
| 1 | Cover, Make in India | — | "Make in India" was removed earlier (CLAIMS_REVIEW §2) |
| 5 | **Vision and mission** | Not on site | About (C8) |
| 6 | Home inverter batteries "compatible with all inverters" | Not on site | Optional on `/products#home-small-business`. Confirm the compatibility claim |
| 27 | Containerised BESS intro (500 kW to multi-MW, stackable, minimal civil work) | Covered | — |
| 28 | **E-rickshaw battery**: 51.2 V, 86–200 Ah, >3,500 cycles, −20 to +60 °C, ~50% lighter / 40% smaller than lead-AGM, credited to Neoclo Energy | **Not on site** | **Add** a card in `/products#home-small-business` (or a "Mobility" row) **after confirming it is still sold**. Strip "no thermal runaway" (rejected wording) and the unverified "IEC, ISO, ROHS, UN38.3" certifications |
| 31–32 | 12 installation photos | 3 on home; the rest on case studies | — |
| 33 | **Full address: A-162, Arihant Business Centre, 7th Floor, Sector 136, Noida 201304** | The site has "Arihant Business Centre, Sector 136" only | **Add** "A-162, 7th Floor" to `SitesSplit`, contact, footer and the JSON-LD address |

---

## 4. Page by page: what to add

| Page | Add (supported) | Check first | Already strong |
|---|---|---|---|
| **Home** | RSPL Kanpur in the deployments list; an India map of sites | "100+ industrial projects" stat (C5); partner logos (permission) | Proof stats, installations, results |
| **About** | One mission line (C8); merge timeline B's milestones | Founding year / 20+ vs 40+ (C4); 500+ meaning (C3); countries (C2) | Timeline, Noida/Foshan, standards |
| **Why Lith-On** | — | "7 certifications" (C6) | Moats, replicate chart. Keep the competitor table off |
| **Capabilities** | — | — | Six-step assembly, photos |
| **Technology** | BMS SoC/SoH; SCADA cell→module→rack→system; EMS load shifting, renewable firming, off-grid/hybrid and forecast charging; IceBattery + active cooling near 20 °C; **heat retention in cold weather**; self-discharge <2.5%/month; charging-time row | — | Stack, ThermalStep, cutover, LFP |
| **Solutions** | Diesel cost facts (105–150 L/h, ₹25–40/kWh, fuel 75–80% of cost, 30–40% efficiency); footprint (up to 50% less space); off-grid sub-point under microgrids | PPA model (India?) | DG vs BESS table, five solutions |
| **Industries** | **New Residential societies sector** (housing deck 3–4); **Education zone map** + Invertis facts + illustrative campus model; **EV block**: throttling, forecast charging, island mode, 600 kW → 200 kW diagram, policy points with sources | Agriculture/processing sectors; market stats need sources | Seven sectors, including defence |
| **Case studies** | Invertis facts (**added**); EV stated capex ₹54 L / ₹80 L; India map | **C1: proposals vs deployments**; Invertis baseline (C10) | Photos, three studies |
| **Case study: EV hub** | F1 **fixed**; bill-breakdown table (`cs-ev-bill`) | C1 | — |
| **Grid services** | Max-20HC-5000 as a campus substation hub (33/11 kV stabilisation, arbitrage) from the universities deck | Grid specs still open (CLAIMS_REVIEW 5) | Five services |
| **Calculator** | Optional EV/demand-charge mode using the DHBVN bill structure; a labelled campus worked example | — | Diesel mode |
| **Financing** | — | Facility-fit criteria and the PPA model, if offered in India; US vs Japanese partners (C7) | Rent/EMI estimator |
| **Services** | "What we need from you" (the 5 sizing inputs) under Energy audit; SCADA levels under Monitoring | — | Delivery steps, response zones |
| **Contact** | Address A-162, 7th Floor; sizing fields on the assessment form | — | Forms |
| **Products** | "Where it fits" campus-zone line on Magna-C&I, Lith-On-50, LT215 and Max-20HC-5000; e-rickshaw battery card | E-rickshaw availability; "compatible with all inverters" | 12 systems, home range |
| **Sustainability** | IARC Group 1 (named source); DG 75–80% fuel-cost share | dB range (75–90 vs 85–95); refurbishment at year 10 | Current page |
| **Distributor** | "OEM and white-label supply" point | Confirm white-label history | Form, four points |
| **FAQs** | "What do you need to size a system?"; "Can storage sit inside a housing society?"; "Does IceBattery help in winter?"; "How much space does storage need compared with a generator?" | — | 44 questions |
| Certifications, Warranty, Careers, Resources, Legal | Nothing new in the decks | Seven-cert list; warranty stays per product | — |

---

## 5. Design notes (Hallmark review, applied within `design.md`)

`design.md` is a locked system, so Hallmark here informs only how new content is composed, not the theme.

- **About 80 words per screen.** The decks pack 6–10 bullets a slide. Carry one idea per section: the Residential sector is "diesel's hidden costs → what changes", not all 12 deck points.
- **Show real things.** Use the 12 installation photos, the Invertis photos and the factory photos. Do **not** use the deck renders (containers among wind turbines and mountains, cartoon campus scenes, the cutaway) as Lith-On hardware.
- **Never a logo wall without permission.** Use client names as text until permission is given. Never use the Army crest.
- **Figures that compare.** The housing 5-year cost (₹34 Cr vs ₹17 Cr), the EV bill split (demand ₹96k of ₹2.42 L) and the campus savings breakdown are honest comparison charts. Label modelled numbers "Modelled", in plain sentence case, not as a tracked-caps tag.
- **New sections fit existing patterns.** The Residential and Education blocks reuse the `/industries` sector layout. The campus zone map is a four-row table or split, not a third three-card grid. The India map should be light grey with blue points, with red only for a selected point.

## 6. Where a mock product screen helps (Stageshow plan, not built)

Three spots tell something the decks claim that a photo can't show. Each is a cropped panel (no browser chrome, per Hallmark) on the white page, in standard fidelity: real words only on the story, grey bars for the rest, and **no invented performance numbers** (values shown as bars, or clearly illustrative).

| Spot | Story (3–5 beats) | Closest gold example | Still frame people see |
|---|---|---|---|
| `/technology#stack` (or `/services#monitoring`) | SCADA view: system → rack → module → one cell flagged for over-temperature → alarm raised and acknowledged | `close-up` + `choreography` | Rack grid with one module highlighted and its alarm card (red = critical data, allowed by `design.md`) |
| `/industries#ev-infrastructure` | EMS forecast charging: the forecast curve is drawn, the battery fills overnight, the afternoon spike arrives, the grid line stays flat at its 200 kW limit and the battery covers the rest | `chart-scrub` (no cursor, like `payout-flow`) | The flat grid line under the spike |
| `/industries` Residential (new) | Grid outage: facility panel plus a phone notification reading "Grid outage. Running on battery."; lifts and pumps stay green; outage logged | `device-pair` | Panel and lock screen after the switch, nothing dropped |

The existing `TelemetryPanel` (warranty) and `ModeDiagram` (technology) already do part of this. Extend them before adding new components. The sizing intake should be the **real** contact form with the five deck questions, not a mock-up.

---

## 6b. Slides now shown as images (26 Nov 2026, owner decision)

The owner approved showing deck slides as-is, text included (visual audit §11.10). Each sits in a `SlideFigure` with caption, source slide and a full-size link; files in `public/images/deck/`.

| Slide | File | Page |
|---|---|---|
| Investor 13, system architecture (annotated cutaway) | `system-architecture.webp` | `/technology#cutaway`, labelled "Illustrative render" |
| Investor 13, cutaway only | `container-cutaway.webp` | Product catalogue card and product diagram images |
| Catalogue p5, container field | `container-field.webp` | `/products` closing, labelled "Illustrative scene" |
| Investor 5, "What makes Lith-On best" | `what-makes-lithon-best.webp` | `/why-lith-on#at-a-glance` |
| Investor 14, competitive landscape and moats | `competitive-landscape.webp` | `/why-lith-on#competitors` |
| Business 5, solar + storage energy cycle | `solar-energy-cycle.webp` | `/solutions#solar-cycle` |
| Hyundai 4, hybrid solution for EV charging | `ev-hybrid-solution.webp` | `/industries#ev-infrastructure` (detail) |
| Housing 10, cost and financial viability | `housing-cost-analysis.webp` | `/case-studies/residential-society-500` |
| Hyundai 11, solar + storage cost analysis | `ev-solar-bess-cost-analysis.webp` | `/case-studies/ev-charging-hub` |

Conflicts these slides raised, answered by the owner on 26 Nov 2026 (OWNER_REVIEW R6, R17, R18):
- Warranty: 10 years site-wide (was "depends on the product"). All pages updated.
- Certifications: three (IEC 61508, IEC 61850, BIS). Investor 5 stays as-is with its "seven" wording.
- Adani row: the vault's ">20%" is right; the site's copy of Investor 14 was corrected from "<20%".
- Business 5: "power classrooms" corrected to "power the business" in the site's copy (the deck text came from the school deck).

## 7. Needs a decision from the owner

1. C1: are Gurugram and the EV hub built projects or modelled proposals?
2. C2: export countries (the named list includes Europe; the site says North America).
3. C3: does 500+ MWh mean installed, or a build-out in progress?
4. C4/C5: founding year (2022 or 2023), 20+ or 40+ years, and which timeline.
5. C6: the list of seven certifications, with certificates. **Answered 26 Nov 2026: three (IEC 61508, IEC 61850, BIS).**
6. C7: India financing partners, and whether a PPA / pay-per-unit model is offered in India.
7. C8: which mission (and vision) line to publish.
8. C10: the Invertis baseline (2,500 kVA and ₹4.14 Cr appear in no deck).
9. Permission to show client names and logos (Army, NTPC, RVUNL, PwC, RSPL).
10. Is the e-rickshaw battery still sold? Is "compatible with all inverters" accurate?
11. Is "white label for reputed brands" OK to state on `/distributor`?
12. Warranty (R17). **Answered 26 Nov 2026: 10 years site-wide.**
13. Adani row (R18). **Answered 26 Nov 2026: >20%; slide corrected.**
