# Deck content for the website (editable copy)

Generated from `src/data/deck-content/` on 25 Nov 2026. **Edit the copy here.** When a page is implemented, changes made in this file are synced back into the matching block in `src/data/deck-content/` (same block id), and the box in `docs/DECK_IMPLEMENTATION_PLAN.md` is ticked.

- **Status "ready"**: supported by the decks. **Status "review"**: going on the site for the initial review, with an open question in `docs/OWNER_REVIEW.md`.
- **On site**: the page already shows this content (possibly worded differently).
- Each block keeps its source (deck and page) so facts can be checked against `data-sources/`.

## Contents

- [`/`](#home)
- [`/about`](#about)
- [`/why-lith-on`](#why-lith-on)
- [`/technology`](#technology)
- [`/solutions`](#solutions)
- [`/industries`](#industries)
- [`/case-studies`](#case-studies)
- [`/case-studies/invertis-university`](#case-studies-invertis-university)
- [`/case-studies/ev-charging-hub`](#case-studies-ev-charging-hub)
- [`/case-studies/residential-society-500`](#case-studies-residential-society-500)
- [`/products`](#products)
- [`/products/[slug]`](#products-slug)
- [`/services`](#services)
- [`/grid-services`](#grid-services)
- [`/contact`](#contact)
- [`/calculator`](#calculator)
- [`/financing`](#financing)
- [`/distributor`](#distributor)
- [`/sustainability`](#sustainability)
- [`/faqs`](#faqs)
- [Kept off the website](#kept-off-the-website)

---

## `/`
<a id="home"></a>

### Where Lith-On systems are installed

- **Block id:** `home-deployments` · **Status:** ready · **On site:** yes
- **Where:** Results section, the list of installed sites beside the three photographs
- **Component:** HomeResults (DeploymentsShowcase)
- **Source:** Lith-On Corporate Deck p.10; BESS presentation for universities p.13; BESS in Housing Society Presentation (500 Flats) p.12; Hyundai Lith-On presentation (EV charging) p.14; Lith-On presentation for business applications (Kenya) p.13; Lith-On presentation for school application in Kenya p.12; Lith-On BESS presentation for Investors (Kenya) p.15; Lith-On BESS Products Catalogue p.31, 32

- **Indian Army:** Forward bases, Jammu & Kashmir
- **Srinagar:** Jammu & Kashmir
- **NTPC:** Lucknow and Shravasti (Uttar Pradesh), Jammu & Kashmir
- **RVUNL:** Jaipur, Rajasthan
- **PwC:** New Delhi
- **Fuel station:** Lucknow, Uttar Pradesh
- **Ghaziabad:** Uttar Pradesh
- **Patna:** Bihar
- **RSPL:** Kanpur, Uttar Pradesh _[Lith-On Corporate Deck p.10]_

> **Editor note:** All names except RSPL Kanpur are already on the site. RSPL appears in the Corporate Deck (p.10, which drops PwC) and the catalogue photos. Show names as text; client logos need permission, and the Indian Army crest must not be used without authorisation.

### Industrial projects delivered

- **Block id:** `home-projects-stat` · **Status:** review · **On site:** yes
- **Where:** Proof stat band, as a fifth figure. Also on: `/about`
- **Component:** HomeProof / StatBand
- **Source:** BESS presentation for universities p.2; BESS in Housing Society Presentation (500 Flats) p.2; Hyundai Lith-On presentation (EV charging) p.2; Lith-On presentation for business applications (Kenya) p.2; Lith-On presentation for school application in Kenya p.2; Lith-On BESS presentation for Investors (Kenya) p.12

- **100+**: Industrial projects delivered (By 2026)

> **Editor note:** From the timeline repeated in six decks (2026: 'Delivered 100+ industrial projects'). The Corporate Deck timeline does not mention it. Owner decision C5.

---

## `/about`
<a id="about"></a>

### Mission and vision

- **Block id:** `about-mission` · **Status:** review · **On site:** yes
- **Where:** Our story section, one line after the opening statement
- **Component:** About page (story block)
- **Source:** Lith-On Corporate Deck p.2; Lith-On BESS Products Catalogue p.5

- **Mission (Corporate Deck):** To empower businesses, utilities and communities with efficient, reliable and eco-friendly energy storage systems, driving the global shift toward renewable energy and sustainability. _[Lith-On Corporate Deck p.2]_
- **Mission (Catalogue):** To empower industries and communities with cutting-edge energy storage solutions that are reliable, sustainable and efficient. _[Lith-On BESS Products Catalogue p.5]_
- **Vision (Catalogue):** To be a global leader in next-generation lithium battery technology, driving the shift towards a greener, smarter energy ecosystem. _[Lith-On BESS Products Catalogue p.5]_

> **Editor note:** Two different mission lines exist. Publish one mission (and optionally the vision); owner decision C8. 'Global leader' is an aspiration, so keep it framed as the vision, never as a claim.

### Lith-On in numbers

- **Block id:** `about-stats` · **Status:** ready · **On site:** yes
- **Where:** Stat band under the hero. Also on: `/`
- **Component:** StatBand
- **Source:** BESS presentation for universities p.2; BESS in Housing Society Presentation (500 Flats) p.2; Hyundai Lith-On presentation (EV charging) p.2; Lith-On presentation for business applications (Kenya) p.2; Lith-On presentation for school application in Kenya p.2; Lith-On BESS presentation for Investors (Kenya) p.12; Lith-On Corporate Deck p.2

- **50 MWh**: In-house BESS production capacity a year _[BESS presentation for universities p.2]_
- **200 MWh**: Battery pack production capacity a year _[BESS presentation for universities p.2]_
- **20,000 sq ft**: Production facility, Noida _[Lith-On Corporate Deck p.2]_
- **500+ MWh**: Installed base _[BESS presentation for universities p.2]_
- **25+**: Countries _[BESS presentation for universities p.5]_

> **Editor note:** Already on the site. The Corporate Deck (p.2) labels 500+ MWh as 'In-house BESS set-up in progress' instead of installed base; owner decision C3.

### Company timeline: milestones not yet shown

- **Block id:** `about-timeline-additions` · **Status:** review · **On site:** yes
- **Where:** Timeline rail: milestones to merge into the existing six entries
- **Component:** HorizontalRail (TIMELINE)
- **Source:** BESS presentation for universities p.2; BESS in Housing Society Presentation (500 Flats) p.2; Hyundai Lith-On presentation (EV charging) p.2; Lith-On presentation for business applications (Kenya) p.2; Lith-On presentation for school application in Kenya p.2; Lith-On BESS presentation for Investors (Kenya) p.12

- **2022:** Founded as Neoclo Energy; BESS production started.
- **2023:** White-label supply for established battery brands began; first industrial BESS of 100 kWh delivered; 200 kWh BESS production started.
- **2024:** Systems delivered to NTPC, the Indian Army, fuel stations and hospitals; products for homes launched.
- **2025:** BESS with liquid cooling and integrated PCS introduced.
- **2026:** More than 100 industrial projects delivered; proprietary thermal management introduced.

> **Editor note:** This is the timeline in six decks. The site shows the Corporate Deck timeline (p.4), which describes 2023 differently ('first lithium battery for the inverter segment'). Merge only after owner decision C5. The Corporate Deck (p.2) also says 'Founded in 2023' and '20+ years' of experience (the site uses 2022 and 40+): C4.

### Why customers choose Lith-On

- **Block id:** `about-values` · **Status:** ready · **On site:** yes
- **Where:** Values grid
- **Component:** About page (VALUES)
- **Source:** Lith-On Corporate Deck p.3

- **LiFePO4 specialists:** Batteries and storage built for long life, reliable performance and safety.
- **Made in India control systems:** Battery and energy management engineered and made in India.
- **Safety and environment:** Products designed to reduce emissions and to be recycled.
- **Support after installation:** Professional installation followed by ongoing maintenance.

> **Editor note:** Covered by the current values. Do not carry over the slide's 'global quality standards including ISO' (ISO was removed, CLAIMS_REVIEW §1).

---

## `/why-lith-on`
<a id="why-lith-on"></a>

### What is hard to copy

- **Block id:** `why-moats` · **Status:** ready · **On site:** yes
- **Where:** Moat stack and time-to-replicate chart
- **Component:** MoatStack, ReplicateChart
- **Source:** BESS presentation for universities p.12; BESS in Housing Society Presentation (500 Flats) p.11; Hyundai Lith-On presentation (EV charging) p.13; Lith-On presentation for business applications (Kenya) p.12; Lith-On presentation for school application in Kenya p.11; Lith-On BESS presentation for Investors (Kenya) p.14

- **18 months**: To replicate the manufacturing
- **36 months**: To replicate the certifications
- **Decades**: To replicate the team's experience

- **In-house manufacturing:** A 20,000 sq ft facility with a proprietary six-step assembly process.
- **Certification trifecta:** IEC 61508, IEC 61850 and BIS held together, which takes a new entrant 24 to 36 months.
- **Team experience:** IIT alumni and engineers with more than 40 years of combined Indian grid experience.
- **Modular architecture:** Application-specific BMS and EMS scaling from 51.2 kWh to megawatt-hours, built for India's unstable grid.
- **Service network:** A skilled team so charging stations and sites stay powered.
- **Technology tie-ups:** Strategic global partnerships that keep the product roadmap current.

> **Editor note:** Already on the site. The slide's '10-year warranty' moat and the competitor table stay off (see excluded.ts).

### What sets the systems apart

- **Block id:** `why-best` · **Status:** ready · **On site:** yes
- **Where:** Proof points under the hero. Also on: `/technology`
- **Component:** Why Lith-On stat strip
- **Source:** BESS presentation for universities p.5; BESS in Housing Society Presentation (500 Flats) p.5; Hyundai Lith-On presentation (EV charging) p.5; Lith-On presentation for business applications (Kenya) p.8; Lith-On presentation for school application in Kenya p.6; Lith-On BESS presentation for Investors (Kenya) p.5

- **Built for Indian heat:** Designed to work in ambient temperatures up to 60 °C.
- **IceBattery® coating:** Lowers internal temperature by 15–30 °C, cutting HVAC running cost.
- **Exported to 25+ countries:** Systems supplied well beyond India.
- **Long cycle life:** More than 6,000 charge and discharge cycles.
- **One integrated stack:** BMS, PCS, EMS and SCADA developed in-house so every part works together.

> **Editor note:** The slide's '7 certification compliance wall' and '10-year warranty' stay off until confirmed (C6; warranty depends on the product).

---

## `/technology`
<a id="technology"></a>

### Battery management system

- **Block id:** `tech-bms` · **Status:** ready · **On site:** yes
- **Where:** Control stack, the battery management (BMS) layer (`#stack`)
- **Component:** Technology stack list
- **Source:** BESS presentation for universities p.6; BESS in Housing Society Presentation (500 Flats) p.6; Hyundai Lith-On presentation (EV charging) p.6; Lith-On presentation for business applications (Kenya) p.9; Lith-On presentation for school application in Kenya p.7; Lith-On BESS presentation for Investors (Kenya) p.13

Made in-house and built for Lith-On's own storage systems.

- **Cell-level monitoring:** Voltage, temperature, current, state of charge (SoC) and state of health (SoH) for every cell.
- **Real-time protection:** Isolates the battery on over-temperature, over-voltage or over-current.

> **Editor note:** The protection list is already on the site; SoC and SoH monitoring are new.

### Monitoring at every level

- **Block id:** `tech-scada` · **Status:** ready · **On site:** yes
- **Where:** Control stack, the SCADA layer; also the monitoring sections of Services and Warranty (`#stack`). Also on: `/services`, `/warranty-and-support`
- **Component:** Technology stack list; TelemetryPanel
- **Source:** BESS presentation for universities p.6; BESS in Housing Society Presentation (500 Flats) p.6; Hyundai Lith-On presentation (EV charging) p.6; Lith-On presentation for business applications (Kenya) p.9; Lith-On presentation for school application in Kenya p.7; Lith-On BESS presentation for Investors (Kenya) p.13

Lith-On's own SCADA system watches each installation in real time.

- **Four levels:** Cell, module, rack and whole system.
- **What it does:** Remote diagnostics, alarm handling and performance analytics.
- **Connected:** Exchanges data with the BMS and EMS.

> **Editor note:** Mock-dashboard candidate (Stageshow): drill from the system down to one cell flagged for over-temperature. Show values as bars or label them illustrative; never invent performance figures.

### Energy management modes

- **Block id:** `tech-ems-modes` · **Status:** ready · **On site:** yes
- **Where:** EMS operating-mode diagram (`#stack`)
- **Component:** ModeDiagram
- **Source:** BESS presentation for universities p.6; BESS in Housing Society Presentation (500 Flats) p.6; Hyundai Lith-On presentation (EV charging) p.6; Lith-On presentation for business applications (Kenya) p.9; Lith-On presentation for school application in Kenya p.7; Lith-On BESS presentation for Investors (Kenya) p.13; Hyundai Lith-On presentation (EV charging) p.4

- **Peak shaving:** Caps the demand drawn from the grid. _[BESS presentation for universities p.6]_
- **Load shifting:** Charges at low-cost hours and supplies the site at high-cost hours. _[BESS presentation for universities p.6]_
- **Backup / UPS:** Takes over the load when the grid fails. _[BESS presentation for universities p.6]_
- **Renewable firming:** Smooths solar output into steady supply. _[BESS presentation for universities p.6]_
- **Off-grid and hybrid operation:** Runs a site alone or alongside the grid and generators. _[BESS presentation for universities p.6]_
- **Zero feed-in control:** Keeps solar from exporting where export is not allowed. _[BESS presentation for universities p.6]_
- **Forecast-based charging:** Charges ahead of predicted demand and time-of-use prices. _[Hyundai Lith-On presentation (EV charging) p.4]_

> **Editor note:** On the site since 25 Nov 2026 as 'The EMS can also run' under the diagram. The diagram shows the vault's six algorithms (peak shaving, time-of-day tariffs, diesel minimisation, solar self-consumption, critical backup, zero feed-in). Merge, don't duplicate: load shifting = time-of-day tariffs, backup = critical backup. New: renewable firming, off-grid/hybrid, forecast-based charging.

### Coating plus active cooling

- **Block id:** `tech-thermal-system` · **Status:** ready · **On site:** yes
- **Where:** IceBattery section, one line under the coating explanation (`#icebattery`)
- **Component:** Technology page (IceBattery block)
- **Source:** BESS presentation for universities p.6; BESS in Housing Society Presentation (500 Flats) p.6; Hyundai Lith-On presentation (EV charging) p.6; Lith-On presentation for business applications (Kenya) p.9; Lith-On presentation for school application in Kenya p.7; Lith-On BESS presentation for Investors (Kenya) p.13

- **Outside:** The IceBattery® coating on the container reduces solar heat gain and heat transfer from hot air.
- **Inside:** Liquid cooling or HVAC-based control removes the heat the batteries make.
- **Result:** Cells are held near 20 °C, their best operating range.

### How the IceBattery® coating works

- **Block id:** `tech-icebattery-modes` · **Status:** ready · **On site:** yes
- **Where:** IceBattery explainer: add the second (cold-weather) state to the step diagram (`#icebattery`). Also on: `/faqs`
- **Component:** ThermalStep
- **Source:** BESS presentation for universities p.7; BESS in Housing Society Presentation (500 Flats) p.7; Hyundai Lith-On presentation (EV charging) p.7; Lith-On presentation for business applications (Kenya) p.10; Lith-On presentation for school application in Kenya p.8; Lith-On BESS presentation for Investors (Kenya) p.6

- **300–400 µm**: Ceramic coating thickness

- **Heat shield:** The coating reflects near-infrared sunlight and radiates heat away as far-infrared rays, so less heat gets inside.
- **Heat retention:** The ceramic surface stays close to the outside air temperature, which reduces heat lost through the walls in cold weather.
- **Inside surfaces too:** Applied inside, the coating cools quickly once air conditioning starts and holds back heat given off by the structure.

> **Editor note:** Heat shield is already shown by ThermalStep. Heat retention is new and matters for the cold J&K sites (Srinagar, Kashmir, Indian Army).

### LFP cells, by the numbers

- **Block id:** `tech-lfp-specs` · **Status:** ready · **On site:** yes
- **Where:** LFP chemistry spec band (`#lifepo4`)
- **Component:** StatBand
- **Source:** BESS presentation for universities p.6; BESS in Housing Society Presentation (500 Flats) p.6; Hyundai Lith-On presentation (EV charging) p.6; Lith-On presentation for business applications (Kenya) p.9; Lith-On presentation for school application in Kenya p.7; Lith-On BESS presentation for Investors (Kenya) p.13; BESS presentation for universities p.5; BESS in Housing Society Presentation (500 Flats) p.5; Hyundai Lith-On presentation (EV charging) p.5; Lith-On presentation for business applications (Kenya) p.8; Lith-On presentation for school application in Kenya p.6; Lith-On BESS presentation for Investors (Kenya) p.5

- **>6,000**: Cycles at 88% depth of discharge
- **90%**: Depth of discharge supported
- **<2.5%**: Self-discharge a month
- **60 °C**: Ambient temperature the system is designed for

> **Editor note:** On the site since 25 Nov 2026: 90% depth of discharge replaced a '10 years standard manufacturer warranty' stat that contradicted the owner's per-product warranty decision. Cycles and self-discharge were already shown. The decks give efficiency as '>98%'; the site uses the vault's '>95–98%', so keep the vault range.

### Charging time

- **Block id:** `tech-lead-acid-charging` · **Status:** review · **On site:** no
- **Where:** Lead-acid vs lithium table, one extra row (`#lead-acid-vs-lithium`)
- **Component:** CompareSection (src/data/comparisons.ts)
- **Source:** Lith-On Corporate Deck p.8

_Charging time, lithium vs lead-acid_

| Parameter | Lith-On lithium (LiFePO4) | Traditional lead-acid |
|---|---|---|
| Charging time | 2–4 hours | 8–12 hours |

> **Editor note:** CONFLICT (owner review R19): the table on the site already has a charging row from catalogue p.30, 'Full charge in 5–6 hours'; the Corporate Deck says 2–4 hours. Not changed until the owner picks one. Take only the charging row. The same slide gives lifespan as '10+ years, 3,000–6,000 cycles', which conflicts with the vault (>6,000 cycles, 15–20 years); don't copy it.

---

## `/solutions`
<a id="solutions"></a>

### What a diesel generator really costs

- **Block id:** `sol-diesel-costs` · **Status:** ready · **On site:** yes
- **Where:** Diesel replacement chapter, the 'what diesel really costs' figures (`#dg-reduction`)
- **Component:** ScrollStory chapter / Stat
- **Source:** BESS presentation for universities p.3; BESS in Housing Society Presentation (500 Flats) p.3

- **105–150 L**: Diesel burned an hour by a 500 kVA generator _[BESS presentation for universities p.3]_
- **₹25–40**: Cost of each kWh made with diesel _[BESS presentation for universities p.3]_
- **75–80%**: Share of generation cost that is fuel _[BESS in Housing Society Presentation (500 Flats) p.3]_
- **30–40%**: Generator efficiency: the rest is lost as heat and friction _[BESS in Housing Society Presentation (500 Flats) p.3]_
- **10–30 s**: Blackout before a generator takes the load _[BESS in Housing Society Presentation (500 Flats) p.3]_

> **Editor note:** The 10–30 s gap is already on the site. The others are new.

### Space

- **Block id:** `sol-footprint` · **Status:** ready · **On site:** yes
- **Where:** DG vs BESS comparison, an extra row or a note under the table (`#dg-vs-bess`). Also on: `/industries`
- **Component:** CompareSection
- **Source:** BESS in Housing Society Presentation (500 Flats) p.3, 4

- A Lith-On system needs up to 50% less space than diesel generators and their fuel tanks.
- The space freed by generator rooms and fuel storage can be used for EV charging or parking. _[BESS in Housing Society Presentation (500 Flats) p.3]_

### How solar shifting works

- **Block id:** `sol-energy-cycle` · **Status:** ready · **On site:** yes
- **Where:** Solar shifting chapter: three steps (`#solar-shifting`)
- **Component:** ScrollStory chapter
- **Source:** Lith-On presentation for business applications (Kenya) p.5; Lith-On presentation for school application in Kenya p.5

- **Daytime generation:** Rooftop solar powers the building directly.
- **Store the surplus:** Solar the building doesn't use charges the battery.
- **Discharge when it pays:** The battery supplies the building at peak-tariff hours and during outages.

> **Editor note:** The idea is already on the page; the three-step structure is from the Kenya decks, which are generic on this slide.

### Microgrids and off-grid systems

- **Block id:** `sol-microgrids-offgrid` · **Status:** ready · **On site:** yes
- **Where:** Microgrids chapter, adding off-grid sites (`#microgrids`)
- **Component:** ScrollStory chapter
- **Source:** Lith-On Corporate Deck p.5

- **Microgrids:** A local system combining solar, wind, batteries and generators that runs alone or alongside the main grid: reliable power for remote and underserved areas, grid support and lower transmission losses.
- **Off-grid systems:** Independent power for sites without a reliable grid, remote locations and critical infrastructure, built for harsh conditions with low running cost.

> **Editor note:** Don't carry over '100% energy independence'. Don't use the slide's renders (containers among wind turbines and mountains) as Lith-On hardware.

### Commercial and industrial storage

- **Block id:** `sol-ci` · **Status:** ready · **On site:** yes
- **Where:** Solutions overview: commercial and industrial uses
- **Component:** Solutions intro
- **Source:** Lith-On Corporate Deck p.5

- Peak shaving and demand-charge management
- Backup power for critical operations
- Energy arbitrage and cost optimisation
- Support for ESG and net-zero commitments

---

## `/industries`
<a id="industries"></a>

### Residential societies

- **Block id:** `ind-residential` · **Status:** ready · **On site:** yes
- **Where:** New sector block, same layout as the other sectors; link to the Gurugram case study (`#residential`)
- **Component:** Industries sector block (new entry)
- **Source:** BESS in Housing Society Presentation (500 Flats) p.3, 4, 8

Diesel generators cost a society more than fuel. Storage removes the generator from daily life.

- **The cost of diesel:** Fuel is 75–80% of the cost of generating power, and generators leave 10–30 seconds of blackout before they start. _[BESS in Housing Society Presentation (500 Flats) p.3]_
- **Noise and space:** Generators run at 75–90 dB, and the sets and fuel tanks take space that could hold EV charging or parking. _[BESS in Housing Society Presentation (500 Flats) p.3]_
- **Lower maintenance bills:** The battery stores grid power at normal rates and supplies it during outages, so the society stops paying for diesel units and monthly common-area bills fall. _[BESS in Housing Society Presentation (500 Flats) p.4]_
- **No flicker:** Switchover in under 10 ms: lifts don't stall, Wi-Fi routers don't drop and computers don't restart. _[BESS in Housing Society Presentation (500 Flats) p.4]_
- **Fits inside the society:** Near-silent, with no exhaust, so it can stand close to the towers; needs up to 50% less space than generators and fuel tanks. _[BESS in Housing Society Presentation (500 Flats) p.4]_
- **Little upkeep:** No moving parts and no fuel deliveries; the BMS runs regular digital health checks. _[BESS in Housing Society Presentation (500 Flats) p.4]_

> **Editor note:** Today Gurugram appears only as a case link inside another sector. Say 'no fuel burned on site' and 'keeps running through every GRAP stage'; avoid the slide's '100% green' and 'total compliance' wording (CLAIMS_REVIEW 17). Mock-UI candidate (Stageshow device-pair): an outage alert ('Grid outage. Running on battery.') with lifts and pumps still on. The case link depends on owner decision C1.

### One campus, four kinds of load

- **Block id:** `ind-education-zones` · **Status:** ready · **On site:** yes
- **Where:** Education sector: a four-row zone map (table or split), not a card grid (`#education`). Also on: `/products`
- **Component:** Industries sector block (education) + new CampusZoneMap
- **Source:** BESS presentation for universities p.4

_Which Lith-On system suits each part of a campus_

| Campus zone | What it needs | System |
|---|---|---|
| Academic blocks and administration | Daytime peak shaving of air-conditioning demand charges | Magna-C&I 260 kWh |
| Student hostels | Silent backup at night, storing daytime solar | Lith-On-50 (48 kWh) |
| Research labs and data centres | Building-scale UPS with sub-10 ms switchover for sensitive instruments | LT215 (215 kWh) |
| Campus substation and microgrid hub | Stabilising the 33/11 kV supply, energy arbitrage, a closed-loop campus microgrid | Max-20HC-5000 (5 MWh) |

> **Editor note:** Slide typos to ignore: Max-20HC-5000 is printed as '5.0 kWh / 1.25 MW' (it is 5 MWh; the site follows the catalogue's 2.5 MW). Hostels list an unclear '2 KVA wall-mounts'. The slide's lab example is electron microscopes.

### Invertis University, Bareilly

- **Block id:** `ind-education-invertis` · **Status:** ready · **On site:** yes
- **Where:** Education sector: the documented project (`#education`). Also on: `/case-studies/invertis-university`
- **Component:** Industries sector block (education) figures
- **Source:** Lith-On Corporate Deck p.9

- **1 MWh**: LFP battery storage
- **900 kW**: Rooftop solar
- **500 kW**: Backup for up to 2 hours
- **700+**: Hostel rooms, with 140 classrooms and 8 offices

- Surplus solar is exported directly to the grid, reducing electricity bills.

> **Editor note:** Added to the Invertis case-study page on 25 Nov 2026. The real project photos (gate, cabinet row, rooftop solar) are in public/images/installations/invertis-*.

### Illustrative campus model

- **Block id:** `ind-education-model` · **Status:** ready · **On site:** yes
- **Where:** Education sector, below the project: a worked example, labelled 'Illustrative campus model' (`#education`). Also on: `/calculator`
- **Component:** New ModelBreakdown (figures + savings table)
- **Source:** BESS presentation for universities p.9, 10

A modelled 2,500 kVA campus, not a client project. It shows how storage earns from arbitrage and peak shaving as well as fuel savings.

- **₹1.22 Cr**: Diesel backup cost a year (2,500 kVA, 40,000 kWh a month, 20 hours of outage, diesel at ₹92/L) _[BESS presentation for universities p.9]_
- **2,500 kW / 5,333 kWh**: Storage modelled (90% round-trip efficiency) _[BESS presentation for universities p.10]_
- **₹6.4 Cr**: Base capex _[BESS presentation for universities p.10]_
- **4.29 years**: Payback _[BESS presentation for universities p.10]_
- **₹17.76 Cr**: Cumulative savings over 10 years (About 178% ROI) _[BESS presentation for universities p.10]_

_Monthly savings in the model_

| Item | ₹ a month |
|---|---|
| Diesel fuel avoided | 9,20,000 |
| Generator maintenance and operator avoided | 97,500 |
| Tariff arbitrage | 2,70,000 |
| Peak shaving | 2,00,000 |
| Grid energy to charge the battery | −2,44,444 |
| Net saving | 12,43,055 |

> **Editor note:** Always label this as a model. It must not be attached to Invertis (CLAIMS_REVIEW 13). 5-year figure on the slide: ₹8.03 Cr (25.6% ROI).

### EV charging

- **Block id:** `ind-ev` · **Status:** ready · **On site:** yes
- **Where:** EV charging sector: the problem and how storage solves it (`#ev-infrastructure`)
- **Component:** Industries sector block (EV)
- **Source:** Hyundai Lith-On presentation (EV charging) p.3, 4, 9

- **Surges:** Fast chargers pull 60–350 kW in an instant, and a single 15-minute peak sets the month's demand charge. _[Hyundai Lith-On presentation (EV charging) p.3, 9]_
- **Throttling:** To stay under their grid limit, operators turn chargers down, so a 30-minute fast charge can stretch to 90 minutes. _[Hyundai Lith-On presentation (EV charging) p.3]_
- **Outages:** In tier-2 and tier-3 towns, stations without storage go dark when the grid fails. _[Hyundai Lith-On presentation (EV charging) p.3]_
- **How storage helps:** Solar charges the battery by day and cheap off-peak grid power by night; the battery feeds the fast chargers at peaks and switches to island mode in an outage. _[Hyundai Lith-On presentation (EV charging) p.4]_
- **Forecast-based charging:** The EMS charges the battery ahead of predicted demand and time-of-use prices. _[Hyundai Lith-On presentation (EV charging) p.4]_

> **Editor note:** Surges and the 40–60% demand-charge share are already on the site. Mock-UI candidate (Stageshow chart): forecast curve, battery fills overnight, afternoon spike, grid line stays flat at its limit.

### Same chargers, a third of the grid connection

- **Block id:** `ind-ev-connection` · **Status:** ready · **On site:** yes
- **Where:** EV charging sector: a small before/after diagram (`#ev-infrastructure`)
- **Component:** New GridConnectionDiagram
- **Source:** Hyundai Lith-On presentation (EV charging) p.8

_Illustrative station with three 150 kW fast chargers_

|  | Grid connection | Battery | Solar |
|---|---|---|---|
| Without storage | 600 kW | — | — |
| With Lith-On storage and solar | 200 kW | 600 kW | 500 kW |

> **Editor note:** An illustration from the slide, not a measured site. It supports the transformer-upgrade-deferral point already in the EV copy.

### Why EV charging is growing

- **Block id:** `ind-ev-policy` · **Status:** review · **On site:** yes
- **Where:** EV charging sector: market context line (`#ev-infrastructure`)
- **Component:** Industries sector block (EV) footnote
- **Source:** Hyundai Lith-On presentation (EV charging) p.3, 12

- India needs about 2.9 million public charging points by 2035 (NITI Aayog).
- Ministry of Power guidelines (2024) call for a charging station every 25 km on national highways.
- Many of India's 80,000+ fuel stations could be retrofitted as solar and storage EV hubs.

> **Editor note:** Third-party figures quoted in the deck. Verify each against its named source (NITI Aayog, Ministry of Power) and link it before publishing. The same slide's TAM/SAM/SOM figures are investor-only (excluded).

### Also suited to

- **Block id:** `ind-other-sectors` · **Status:** review · **On site:** yes
- **Where:** A short 'also suited to' list after the main sectors
- **Component:** Industries page list
- **Source:** Lith-On presentation for business applications (Kenya) p.7

- **Agriculture and processing:** Tea factories, flower farms, maize and food processing
- **Heavy industry:** Steel mills and plastics
- **Strategic sites:** Airports, data centres, special economic zones and off-grid lodges

> **Editor note:** From the Kenya business deck's priority-sector matrix. Confirm these apply to Lith-On's India market before listing.

### India's diesel backup fleet

- **Block id:** `ind-dg-market` · **Status:** review · **On site:** yes
- **Where:** Intro or blog/resources context line
- **Component:** Industries intro
- **Source:** BESS presentation for universities p.11

- **70,000+ MW**: Legacy diesel generator capacity in India

> **Editor note:** Market statistic without a named source on the slide. Find and cite the source first. The same slide's '24.3% CAGR' and 'up to 77% backup cost reduction' need the same treatment.

---

## `/case-studies`
<a id="case-studies"></a>

### Installed across India

- **Block id:** `cs-deployment-map` · **Status:** ready · **On site:** yes
- **Where:** Below the hero: a light-grey India map with labelled points (blue; red only for the selected point). Also on: `/`
- **Component:** New DeploymentMap
- **Source:** Lith-On Corporate Deck p.10; BESS presentation for universities p.13; BESS in Housing Society Presentation (500 Flats) p.12; Hyundai Lith-On presentation (EV charging) p.14; Lith-On presentation for business applications (Kenya) p.13; Lith-On presentation for school application in Kenya p.12; Lith-On BESS presentation for Investors (Kenya) p.15

- **Jammu & Kashmir:** Indian Army forward bases; Srinagar; NTPC
- **Rajasthan:** RVUNL, Jaipur
- **Delhi:** PwC, New Delhi
- **Uttar Pradesh:** NTPC Lucknow; NTPC Shravasti; fuel station, Lucknow; Ghaziabad; RSPL, Kanpur
- **Bihar:** Patna

> **Editor note:** The vault's design direction already asks for this map. Names as text only until logo permission is given. No export-country map until owner decision C2.

### Installation photographs

- **Block id:** `cs-installation-photos` · **Status:** ready · **On site:** yes
- **Where:** Installation photographs rail. Also on: `/`
- **Component:** HorizontalRail (installation photographs)
- **Source:** Lith-On BESS Products Catalogue p.31, 32; Lith-On Corporate Deck p.9

- **NTPC:** public/images/installations/catalogue/ntpc-cabinet.webp, ntpc-office.webp
- **NTPC Shravasti:** public/images/installations/catalogue/ntpc-shravasti.webp
- **Indian Army, J&K:** public/images/installations/catalogue/indian-army-jk.webp
- **Kashmir:** public/images/installations/catalogue/kashmir.webp
- **Srinagar:** public/images/installations/catalogue/srinagar.webp
- **Lucknow:** public/images/installations/catalogue/lucknow-rack.webp
- **Fuel station:** public/images/installations/catalogue/fuel-station.webp
- **Ghaziabad:** public/images/installations/catalogue/ghaziabad.webp
- **RSPL, Kanpur:** public/images/installations/catalogue/rspl-kanpur.webp
- **Uttar Pradesh:** public/images/installations/catalogue/uttar-pradesh.webp
- **Patna:** public/images/installations/catalogue/patna.webp
- **Invertis University:** public/images/installations/invertis-bess-yard.jpg, invertis-900kw-solar.jpg, invertis-university-facade.jpg _[Lith-On Corporate Deck p.9]_

> **Editor note:** Several cabinets carry 'Neoclo Energy' branding, the company's former name (resolved in CLAIMS_REVIEW 12).

---

## `/case-studies/invertis-university`
<a id="case-studies-invertis-university"></a>

### Invertis University: operating facts

- **Block id:** `cs-invertis-facts` · **Status:** ready · **On site:** yes
- **Where:** Facts list
- **Component:** Case study page (facts)
- **Source:** Lith-On Corporate Deck p.9

- **System:** 1 MWh LFP battery storage integrated with a 900 kW rooftop solar plant
- **Backup:** 500 kW of backup for up to 2 hours during power outages
- **Campus served:** More than 700 hostel rooms, 140 classrooms and 8 offices
- **Solar export:** Surplus solar is exported directly to the grid, reducing electricity bills

> **Editor note:** Added 25 Nov 2026. The page's baseline (2,500 kVA, ₹4.14 Cr → ₹1.88 Cr) comes from content/case-studies.md, not from any deck; owner decision C10.

---

## `/case-studies/ev-charging-hub`
<a id="case-studies-ev-charging-hub"></a>

### Where the station's money goes

- **Block id:** `cs-ev-bill` · **Status:** review · **On site:** yes
- **Where:** Economics section: the bill breakdown under the before/after bars. Also on: `/calculator`
- **Component:** BeforeAfter + new BillBreakdown table
- **Source:** Hyundai Lith-On presentation (EV charging) p.9, 10, 11

Modelled station: one 150 kW, one 60 kW and one 30 kW DC fast charger; 240 kW peak; 18,000 kWh a month on the DHBVN HT commercial tariff.

- **₹0**: Demand charge with 450 kWh / 150 kW storage _[Hyundai Lith-On presentation (EV charging) p.10]_
- **₹12.91 lakh**: Saved a year, storage only (Demand ₹11.52 lakh + time-of-use ₹1.30 lakh + tax ₹0.10 lakh) _[Hyundai Lith-On presentation (EV charging) p.10]_
- **₹54 lakh**: Storage capex (₹12,000 per kWh) (Payback about 4 years) _[Hyundai Lith-On presentation (EV charging) p.10]_
- **₹80 lakh**: Capex with 75 kWp solar (₹26 lakh) and storage (₹54 lakh) (₹20.27 lakh a year saved, 3.9-year payback, 153% 10-year ROI) _[Hyundai Lith-On presentation (EV charging) p.11]_

_Monthly bill without storage_

| Item | Basis | ₹ a month |
|---|---|---|
| Energy | 18,000 kWh × ₹7.00 | 1,26,000 |
| Demand charge | 240 kVA × ₹400 | 96,000 |
| Fuel surcharge | 18,000 kWh × ₹0.50 | 9,000 |
| Electricity duty | 8% on energy and surcharge | 10,800 |
| Total | ₹29,01,600 a year | 2,41,800 |

> **Editor note:** The demand-charge correction (₹96,000 → ₹0) is already live on the page. The rest waits on owner decision C1: this is a proposal model, not a recorded deployment. Don't quote the slide's after-storage bill (it prints ₹16,18,380 a year, but its line items add up to about ₹1,38,865 a month). content/case-studies.md says 'four 60 kW chargers' and 'LT215'; the deck says 150 + 60 + 30 kW and names no model, so follow the deck.

---

## `/case-studies/residential-society-500`
<a id="case-studies-residential-society-500"></a>

### Five years of diesel against five years of storage

- **Block id:** `cs-gurugram-five-year` · **Status:** review · **On site:** yes
- **Where:** Economics section: a five-year cost comparison chart next to the annual bars
- **Component:** New CostCompareChart
- **Source:** BESS in Housing Society Presentation (500 Flats) p.10

- **≈ ₹34.4 Cr**: Diesel: ₹1.80 Cr capex + 5 × ₹6.52 Cr running cost
- **≈ ₹17.1 Cr**: Storage: ₹8.28 Cr capex + 5 × ₹1.76 Cr running cost

_Diesel generators vs Lith-On storage_

| Item | Diesel generators | Lith-On storage |
|---|---|---|
| Capex | ₹1.8 Cr | ₹8.3 Cr |
| Running cost a year | ₹6.5 Cr | ₹1.7 Cr |
| Running cost a month | ₹54 lakh | ₹15 lakh |
| Energy | Diesel at ₹98.8/L | Grid at ₹7/kWh |
| Noise | Yes | None |
| Maintenance | High | Low |

> **Editor note:** The slide draws the five-year bars without labels; the two totals here are computed from the slide's own capex and running costs. Leave out the 'Emissions: Zero' row (say 'no fuel burned on site'). Waits on owner decision C1 (proposal vs deployment).

---

## `/products`
<a id="products"></a>

### E-rickshaw battery

- **Block id:** `prod-erickshaw` · **Status:** review · **On site:** yes
- **Where:** Home and small business range: one more card (or a 'Mobility' row) (`#home-small-business`)
- **Component:** HomeRange (src/data/home-products.ts)
- **Source:** Lith-On BESS Products Catalogue p.28

LiFePO4 batteries designed for electric rickshaws.

- **51.2 V**: 86 Ah to 200 Ah
- **>3,500**: Cycles
- **>10 years**: Calendar life
- **−20 to +60 °C**: Operating temperature

- Embedded BMS
- Energy efficiency above 98%, self-discharge below 2.5% a month
- About 50% lighter and 40% smaller than a lead-AGM battery with the same usable energy
- No lead, rare earths or acid

> **Editor note:** Confirm it is still sold. The page credits Neoclo Energy (the former name). Leave out 'no thermal runaway, no fire or explosion risks' (rejected wording) and the certification line 'IEC, ISO, ROHS, UN38.3, BIS' (only BIS is verified).

### Batteries for home inverters

- **Block id:** `prod-home-inverter` · **Status:** review · **On site:** yes
- **Where:** Home range intro line (`#home-small-business`)
- **Component:** HomeRange intro
- **Source:** Lith-On BESS Products Catalogue p.6

- Built for long power cuts, from lead-acid replacements to lithium.
- Long life, recyclable, enhanced safety and low maintenance.
- Compatible with all inverters.

> **Editor note:** Confirm 'compatible with all inverters' before publishing; otherwise drop that line.

### From modules to containers

- **Block id:** `prod-lineup` · **Status:** ready · **On site:** yes
- **Where:** Products intro: the three families
- **Component:** ProductsLineup
- **Source:** Lith-On Corporate Deck p.6; Lith-On BESS Products Catalogue p.27

- **Lithium battery modules:** LiFePO4 modules with built-in BMS, modular and scalable.
- **Battery energy storage systems:** Fully integrated with BMS, EMS, PCS, thermal management and safety systems.
- **Containerised and custom systems:** Rugged, weatherproof systems for harsh sites, from kWh to MWh.

> **Editor note:** Product specifications stay in src/data/products.ts and home-products.ts (catalogue spec pages). Containerised BESS range on catalogue p.27: 500 kW to several MW.

---

## `/products/[slug]`
<a id="products-slug"></a>

### Where it fits

- **Block id:** `prod-where-it-fits` · **Status:** ready · **On site:** yes
- **Where:** Each product page: one 'Where it fits' line under the summary
- **Component:** Product detail page
- **Source:** BESS presentation for universities p.4

- **Magna-C&I 260 kWh:** Academic and office blocks: daytime peak shaving of air-conditioning demand charges. → `/products/magna-ci`
- **Lith-On-50:** Hostels and residential blocks: silent night-time backup, storing daytime solar. → `/products/lithon-50`
- **LT215:** Labs and data centres: building-scale UPS with sub-10 ms switchover for sensitive equipment. → `/products/lt215`
- **Max-20HC-5000:** Campus or site substations: stabilising the 33/11 kV supply, energy arbitrage and microgrid control. → `/products/max-20hc`

> **Editor note:** Same source as the Industries campus zone map (ind-education-zones).

---

## `/services`
<a id="services"></a>

### What we need to size your system

- **Block id:** `svc-sizing-inputs` · **Status:** ready · **On site:** yes
- **Where:** Energy audit step: 'What we need from you'. On /contact?type=assessment, use these as real form fields (`#delivery`). Also on: `/contact`, `/faqs`
- **Component:** DeliverySteps (audit step); ContactIntake fields
- **Source:** Lith-On presentation for school application in Kenya p.10

- **Your load:** Total power used each day or month, which sets the battery capacity.
- **Operating hours:** When the site runs, which shows how much energy is used in daytime.
- **Space for solar:** Roof or ground area available, which sets the solar capacity.
- **Grid tariff:** What you pay per unit, which sets the baseline cost.
- **Power cuts:** Average outage length each day, which sets the backup hours.

> **Editor note:** Generic sizing questions from the school deck, reworded for any site. Build them as real inputs, not as a mock-up.

### Turnkey delivery

- **Block id:** `svc-epc` · **Status:** ready · **On site:** yes
- **Where:** Build and install step
- **Component:** DeliverySteps
- **Source:** Lith-On presentation for business applications (Kenya) p.11; Lith-On presentation for school application in Kenya p.9; Lith-On Corporate Deck p.3

- Engineering, procurement and construction (EPC) delivered by Lith-On, from installation through ongoing maintenance.

---

## `/grid-services`
<a id="grid-services"></a>

### Substation and microgrid hub

- **Block id:** `grid-campus-substation` · **Status:** ready · **On site:** yes
- **Where:** Substation buffering service, with the Max-20HC-5000 product card
- **Component:** Grid services page (service row)
- **Source:** BESS presentation for universities p.4; Lith-On Corporate Deck p.10

- A Max-20HC-5000 at a site substation stabilises the 33/11 kV supply, runs energy arbitrage and anchors a closed-loop microgrid.
- Installed for utilities including RVUNL (Jaipur) and NTPC (Lucknow, Shravasti, Jammu & Kashmir). _[Lith-On Corporate Deck p.10]_

> **Editor note:** RVUNL and NTPC are already named on the page; the substation role is new. Grid-service specifications remain open (CLAIMS_REVIEW 5).

---

## `/contact`
<a id="contact"></a>

### Addresses

- **Block id:** `contact-address` · **Status:** ready · **On site:** yes
- **Where:** Noida address everywhere it appears (SitesSplit, contact, footer, legal pages, JSON-LD). Also on: `/about`, `/privacy-policy`, `/terms-and-conditions`
- **Component:** SitesSplit, Footer, LegalAddress, layout JSON-LD
- **Source:** Lith-On BESS Products Catalogue p.33; Lith-On Corporate Deck p.11

- **Corporate office and plant, India:** A-162, Arihant Business Centre, 7th Floor, Sector 136, Noida, Uttar Pradesh 201304 _[Lith-On BESS Products Catalogue p.33]_
- **International hub, China:** C11-6, Foshan Innovation Torchpark, Jihua 2 Road, Chancheng, Foshan _[Lith-On Corporate Deck p.11]_
- **Phone:** +91 70000 13009, +91 70000 17005 _[Lith-On Corporate Deck p.11]_
- **Email:** tech@lith-onbharat.com _[Lith-On Corporate Deck p.11]_

> **Editor note:** The site has 'Arihant Business Centre, Sector 136'; the catalogue back cover adds the unit and floor: 'A-162 … 7th Floor'.

---

## `/calculator`
<a id="calculator"></a>

### Demand-charge calculator: example tariff

- **Block id:** `calc-demand-mode` · **Status:** ready · **On site:** no
- **Where:** An optional second mode: demand-charge savings for EV stations and commercial sites
- **Component:** Calculator (new mode)
- **Source:** Hyundai Lith-On presentation (EV charging) p.9, 10

_Default inputs from the DHBVN HT commercial example (all editable)_

| Input | Example value |
|---|---|
| Energy rate | ₹7.00 per kWh |
| Off-peak rate for charging the battery | ₹5.50 per kWh |
| Demand charge | ₹400 per kVA a month |
| Fuel surcharge | ₹0.50 per kWh |
| Electricity duty | 8% |
| Storage cost | ₹12,000 per kWh |

> **Editor note:** Inputs only; the visitor enters their own peak and energy. Label the defaults as an example tariff.

---

## `/financing`
<a id="financing"></a>

### Sites that suit the rent model

- **Block id:** `fin-facility-fit` · **Status:** review · **On site:** yes
- **Where:** Rent model: 'Who it suits' list
- **Component:** Financing page
- **Source:** Lith-On presentation for business applications (Kenya) p.7

- More than 70% of the load falls in daytime
- A large, unshaded roof or open area for solar
- The site is owned, or leased for 10 years or more
- A sound balance sheet and payment history

> **Editor note:** Kenya deck criteria (its bill threshold of 'KES 2 million a month' is left out). Use only if the owner confirms the same criteria apply in India. Related: owner decision C7 (Japanese partners in India vs 'US investors' in the Kenya decks).

### Pay per unit (energy as a service)

- **Block id:** `fin-pay-per-unit` · **Status:** review · **On site:** yes
- **Where:** A fourth model, only if offered in India
- **Component:** Financing page (model card)
- **Source:** Lith-On presentation for business applications (Kenya) p.6; Lith-On BESS presentation for Investors (Kenya) p.4

- Lith-On finances, installs, owns and maintains the solar and storage; the customer pays only for the electricity used, at a fixed rate.
- No upfront capital; maintenance, insurance and performance risk stay with Lith-On.

> **Editor note:** The decks describe this for Kenya only (KES tariffs, a 5% yearly escalation). Ask the owner whether it is offered in India; never show the Kenya prices.

---

## `/distributor`
<a id="distributor"></a>

### OEM and white-label supply

- **Block id:** `dist-white-label` · **Status:** review · **On site:** yes
- **Where:** One more point in the four reasons to partner
- **Component:** Distributor page
- **Source:** BESS presentation for universities p.2; BESS in Housing Society Presentation (500 Flats) p.2; Hyundai Lith-On presentation (EV charging) p.2; Lith-On Corporate Deck p.10

- Lith-On has supplied white-label battery storage to established brands since 2023.

> **Editor note:** From the six-deck timeline ('2023: Started white label for reputed brands in BESS') and the installs slide ('Reputed brands in residential BESS'). Confirm before stating it publicly.

---

## `/sustainability`
<a id="sustainability"></a>

### What diesel backup puts into the air

- **Block id:** `sus-diesel-health` · **Status:** ready · **On site:** yes
- **Where:** Diesel impact section
- **Component:** ImpactCompare / Sustainability page
- **Source:** BESS presentation for universities p.3; BESS in Housing Society Presentation (500 Flats) p.3

- Diesel exhaust is classified as a Group 1 carcinogen by the International Agency for Research on Cancer (IARC). _[BESS presentation for universities p.3]_
- Generators release PM2.5, black carbon, sulphur dioxide and nitrogen oxides. _[BESS presentation for universities p.3]_
- Each litre burned emits 2.65–2.70 kg of CO₂. _[BESS in Housing Society Presentation (500 Flats) p.3]_

> **Editor note:** CO₂ per litre is already on the page; IARC is new. Link the IARC classification. Noise differs between sources: the housing deck says 75–90 dB, the universities deck >85 dB, and the page 85–95 dB (from content/sustainability.md). Pick one range.

---

## `/faqs`
<a id="faqs"></a>

### What do you need from us to size a system?

- **Block id:** `faq-sizing` · **Status:** ready · **On site:** yes
- **Where:** Planning and sizing group
- **Component:** FaqBrowser (src/data/faqs.ts)
- **Source:** Lith-On presentation for school application in Kenya p.10

Five things: how much power the site uses each day or month, its operating hours, the roof or ground area free for solar, your grid tariff, and how long power cuts usually last each day.

### Can a battery system be installed inside a housing society?

- **Block id:** `faq-society` · **Status:** ready · **On site:** yes
- **Where:** Applications group
- **Component:** FaqBrowser
- **Source:** BESS in Housing Society Presentation (500 Flats) p.4

Yes. It runs almost silently and burns no fuel on site, so it can stand close to the towers. It needs up to 50% less space than diesel generators and their fuel tanks.

### Does the IceBattery® coating help in cold weather?

- **Block id:** `faq-icebattery-cold` · **Status:** ready · **On site:** yes
- **Where:** Technology group
- **Component:** FaqBrowser
- **Source:** BESS presentation for universities p.7; BESS in Housing Society Presentation (500 Flats) p.7; Hyundai Lith-On presentation (EV charging) p.7; Lith-On presentation for business applications (Kenya) p.10; Lith-On presentation for school application in Kenya p.8; Lith-On BESS presentation for Investors (Kenya) p.6

Yes. In heat it reflects sunlight and radiates heat away. In cold, its ceramic surface stays close to the outside temperature, which reduces heat lost through the enclosure walls.

### Why do EV charging stations slow their chargers down?

- **Block id:** `faq-ev-throttling` · **Status:** ready · **On site:** yes
- **Where:** Applications group
- **Component:** FaqBrowser
- **Source:** Hyundai Lith-On presentation (EV charging) p.3, 8

To keep their grid draw under the contracted limit, operators turn chargers down at busy times, so a 30-minute charge can take 90 minutes. A battery supplies the peaks, so the chargers can run at full power on a smaller grid connection.

### How long does a diesel generator take to restore power?

- **Block id:** `faq-dg-gap` · **Status:** ready · **On site:** yes
- **Where:** Diesel replacement group
- **Component:** FaqBrowser
- **Source:** BESS in Housing Society Presentation (500 Flats) p.3, 4; BESS presentation for universities p.8

Usually 10 to 30 seconds, long enough to stop lifts and restart computers. Lith-On storage takes over in under 10 milliseconds.

> **Editor note:** Already answered in src/data/faqs.ts (residential group: diesel start-up delay of 10–30 seconds and sub-10 ms switchover), so no new entry was added.

---

## Kept off the website
<a id="kept-off-the-website"></a>

| Content | Why | Source |
|---|---|---|
| Competitor table: Tata Power, Adani Energy, JSW Energy, Exide Energy vs Lith-On | Unverified comparative claims (AGENTS.md). The Adani row also contradicts the vault ('<20%' vs '>20%'). | BESS presentation for universities p.12; BESS in Housing Society Presentation (500 Flats) p.11; Hyundai Lith-On presentation (EV charging) p.13; Lith-On presentation for business applications (Kenya) p.12; Lith-On presentation for school application in Kenya p.11; Lith-On BESS presentation for Investors (Kenya) p.14 |
| 'Transparent 10-year warranty' and the '10-year warranty' moat | The owner says the warranty depends on the product (20 Nov 2026); the site shows terms per quotation. | BESS presentation for universities p.5; BESS in Housing Society Presentation (500 Flats) p.5; Hyundai Lith-On presentation (EV charging) p.5; Lith-On presentation for business applications (Kenya) p.8; Lith-On presentation for school application in Kenya p.6; Lith-On BESS presentation for Investors (Kenya) p.5; BESS presentation for universities p.12; BESS in Housing Society Presentation (500 Flats) p.11; Hyundai Lith-On presentation (EV charging) p.13; Lith-On presentation for business applications (Kenya) p.12; Lith-On presentation for school application in Kenya p.11; Lith-On BESS presentation for Investors (Kenya) p.14 |
| 'The 7 Certification Compliance Wall: hold seven international certifications' | Only IEC 61508, IEC 61850 and BIS are named or verified. Owner decision C6. | BESS presentation for universities p.5; BESS in Housing Society Presentation (500 Flats) p.5; Hyundai Lith-On presentation (EV charging) p.5; Lith-On presentation for business applications (Kenya) p.8; Lith-On presentation for school application in Kenya p.6; Lith-On BESS presentation for Investors (Kenya) p.5 |
| ISO (Corporate Deck pp.3, 7), 'IEC, ISO, ROHS, UN38.3' (e-rickshaw page), Make in India badge | Removed earlier as unsupported (CLAIMS_REVIEW §1–2). | Lith-On Corporate Deck p.3, 7; Lith-On BESS Products Catalogue p.1, 28 |
| 'No thermal runaway, no fire or explosion risks' | Rejected wording in src/data/claims.ts; use 'high thermal stability'. | Lith-On BESS Products Catalogue p.28 |
| '100% green backup', '100% regulatory compliance … zero exhaust and zero carbon emissions', 'Emissions: Zero' | CLAIMS_REVIEW 17: say 'no fuel burned on site' and 'keeps running through every GRAP stage'. | BESS in Housing Society Presentation (500 Flats) p.4, 8, 10; BESS presentation for universities p.8 |
| '12.78 tonnes CO₂ emitted monthly' | The identical figure appears in both the housing and EV decks, so it describes neither site. | BESS in Housing Society Presentation (500 Flats) p.3; Hyundai Lith-On presentation (EV charging) p.8, 9 |
| Subscription platform, in-app ads and data monetisation; 500 kWh unit economics (12.33 M KES), 3.5-year payback, 189% ROI; refurbishment at year 10 for 30% of capex, 314% ROI; exit options | Investor-only business model and financial projections. | Lith-On BESS presentation for Investors (Kenya) p.7, 8, 9 |
| EV charging TAM ₹73,186 Cr, SAM ₹58,549 Cr, SOM ₹11,709 Cr (20% share in 3 years) | Investor market sizing, not customer content. | Hyundai Lith-On presentation (EV charging) p.12 |
| Kenya grid facts (6–8 h supply, 2.3% reserve margin, 24.2% losses), KES tariffs, PPA at ~20 KES, irradiance map, clean cooking, SDG 7, World Bank pilot | Kenya proposals, not deployments (CLAIMS_REVIEW §4); no Kenya content on the site. | Lith-On BESS presentation for Investors (Kenya) p.2, 3, 4, 10, 11; Lith-On presentation for business applications (Kenya) p.3, 4, 6; Lith-On presentation for school application in Kenya p.3, 4 |
| 'Project financing backed by US investors leveraging ESG mandates, carbon credits and CSR' | Kenya context; India financing is through Japanese partners per the owner. Owner decision C7. | Lith-On presentation for business applications (Kenya) p.11; Lith-On presentation for school application in Kenya p.9 |
| 'India / South Africa / Italy / Indonesia / Vietnam / Spain / Kenya' and the world map | Conflicts with the vault's regions (Asia, Middle East, Africa, North America). Owner decision C2. | Lith-On Corporate Deck p.11; BESS presentation for universities p.14; Hyundai Lith-On presentation (EV charging) p.15; Lith-On presentation for business applications (Kenya) p.14; Lith-On BESS presentation for Investors (Kenya) p.16 |
| Indian Army crest, NTPC, RVUNL, PwC and RSPL logos | Permission needed; the Indian Army crest is restricted. Use names as text. | Lith-On Corporate Deck p.10; BESS presentation for universities p.13; BESS in Housing Society Presentation (500 Flats) p.12; Hyundai Lith-On presentation (EV charging) p.14; Lith-On presentation for business applications (Kenya) p.13; Lith-On presentation for school application in Kenya p.12; Lith-On BESS presentation for Investors (Kenya) p.15 |
| Container cutaway render, solution renders (containers among wind turbines and mountains), cartoon campus and society scenes, catalogue cover art | Not real Lith-On hardware (AGENTS.md: no fictional renderings presented as products). | BESS presentation for universities p.6; BESS in Housing Society Presentation (500 Flats) p.6; Hyundai Lith-On presentation (EV charging) p.6; Lith-On presentation for business applications (Kenya) p.9; Lith-On presentation for school application in Kenya p.7; Lith-On BESS presentation for Investors (Kenya) p.13; BESS presentation for universities p.2; BESS in Housing Society Presentation (500 Flats) p.2; Hyundai Lith-On presentation (EV charging) p.2; Lith-On presentation for business applications (Kenya) p.2; Lith-On presentation for school application in Kenya p.2; Lith-On BESS presentation for Investors (Kenya) p.12; Lith-On Corporate Deck p.5; Lith-On BESS Products Catalogue p.1, 2 |
| EV station after-storage bill 'Total monthly ₹16,18,380' | The slide's own line items add up to about ₹1,38,865 a month, so the total can't be quoted. Use the demand-charge and savings figures instead. | Hyundai Lith-On presentation (EV charging) p.10 |
| 'Founded in 2023 … 20+ years of combined industry experience'; '500+ MWh in-house BESS set-up in progress' | Conflicts with the vault and the other decks (2022, 40+ years, 500+ MWh installed). Owner decisions C3 and C4. | Lith-On Corporate Deck p.2 |
