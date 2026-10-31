# Visual Assets, Illustrations & Technical Graphics Plan — Lith-On Website

*Authoritative architectural blueprint for photography, engineering diagrams, technical illustrations, and interactive SVG components aligned with the light-first, editorial, and technology-focused visual direction.*

---

## 1. Visual Art Direction & Brand Identity System (v2.0)

### Color System & Lighting Aesthetic
The visual language is **light, architectural, minimal, editorial, and technology-focused**:
- **Lith-On Red (`#F74530`)**: Primary high-emphasis accent for calls to action, active indicators, and critical data points. Used sparingly for maximum visual impact.
- **Lith-On Blue (`#0B3388`)**: Secondary brand accent for engineering authority, technical highlights, icons, and certification badges.
- **Pure White (`#FFFFFF`)**: Primary page canvas and card surfaces for maximum clarity, readability, and modern minimalism.
- **Warm Off-White (`#FAFAF8`)**: Secondary background surface providing gentle architectural contrast between page sections.
- **Light Neutral Grey (`#F3F4F6`) & Blue-Grey (`#F0F4F8`)**: Technical surfaces for specification tables, engineering comparison panels, and interactive controls.
- **Dark Charcoal (`#111827`) & Neutral Grey (`#4B5563`)**: High-contrast, elegant typography in **Manrope**.
- **Explicit Prohibitions**: Universal dark-blue (`#0B132B`) or dark-slate backgrounds, wall-to-wall blue sections, alternating red/blue stripes, cybernetic neon gradients, and heavy glassmorphic glowing effects.

### Authentic Source Assets in Repository
- `public/images/logo/logo-dark.png`: Official Lith-On logo for pure white and light-neutral surfaces.
- `public/images/logo/logo-light.png`: Official Lith-On logo for selective dark exception surfaces (e.g. deep footer).
- `public/images/heroes/`: High-resolution authentic installation photography:
  - `hero-commercial.jpg`: Commercial rooftop solar array + Lith-On BESS yard.
  - `hero-university.jpg`: Institutional university campus microgrid.
  - `hero-residential.jpg`: High-rise residential society installation.
  - `hero-hospital.jpg`: Critical healthcare facility emergency power system.
- Authentic presentation decks in `data-sources/` providing single-line schematics, financial waterfall charts, and 3D enclosure cutaways.

---

## 2. Page-by-Page Visual & Graphic Blueprint

---

### PAGE 1: HOMEPAGE (`/`)

#### A. Hero Section: "Architectural Clean Energy & Industrial BESS" (Reference Structure)
- **Visual Composition**: Architectural split layout mirroring the approved reference design:
  - *Floating Capsule Navigation*: Suspended pill-shaped navbar (`rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm px-6 py-2.5`) with dark logo on left, clean navigation links in center, and high-contrast pill CTA on right (`REQUEST RFQ →`).
  - *Main Architectural Background*: Clean daylight shot of a modern commercial solar-powered campus with Lith-On BESS outdoor enclosure.
  - *Split Oversized Typography*: Massive, elegant Manrope light/regular typography framing the central architecture:
    - Left: `Power ⚡` (with red/gold lightning accent).
    - Right: `Future` or `Storage`.
  - *Floating Asymmetric Feature Card (Mid-Left)*: Frosted translucent card (`rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 p-5 text-white`) highlighting:
    - Label: `MAGNA-C&I 260 kWh` (in Lith-On Red `#F74530` or gold accent).
    - Description: "Sub-10ms instantaneous UPS switchover with 60°C IceBattery® thermal management."
    - Action: `VIEW SPECS ↗` circular link.
  - *Bottom Tri-Panel Architectural Shelf (Anchored to Viewport Base)*:
    1. **Panel 1 (Left — Institutional Scale)**: `500+ MWh Deployed Across 25+ Countries` with verified deployment metrics.
    2. **Panel 2 (Center — Arched Hardware Showcase)**: Prominent elevated/arched card showcasing authentic Lith-On Magna-C&I / LT215 BESS enclosures.
    3. **Panel 3 (Right — Severe Climate Shield)**: `All-Weather Protection` badge highlighting `IceBattery® 300–400µm Ceramic Shield`, `60°C Ambient Heat Tolerance`, and `IP55 Outdoor Enclosure`.

#### B. Proven Metrics Bar
- Clean horizontal strip on off-white (`#FAFAF8`) with subtle 1px dividers:
  - `250 MWh` (Annual Noida Assembly & Testing Capacity)
  - `20,000 sq. ft.` (Sector 136, Noida Advanced Facility)
  - `500+ MWh` (Proven Global Deployment Base)
  - `25+ Countries` (Export Footprint Across Asia, Middle East & Global Markets)
- *Typography*: Large, confident Manrope regular numbers (`text-4xl font-normal text-gray-900`) paired with muted uppercase labels (`text-xs tracking-wider text-gray-500`).

#### C. Interactive DG vs. BESS Financial Savings Calculator
- **Visual Layout**: Two-column architectural panel on pure white with light grey inputs (`#F3F4F6`):
  - *Left*: Clean sliders for Generator Capacity (100 kVA to 3,000 kVA), Daily Outage Hours (1 to 8h), and Facility Presets (500-Flat Society, Invertis Campus, EV Plaza).
  - *Right*: Direct comparative financial card:
    - Side-by-side comparison between mechanical diesel generator and Lith-On solid-state BESS.
    - Dynamic financial counter: **"Net Annual Cash Savings: ₹4.76 Crore / Year"** and **"Payback: 1.6 Years"**.

#### D. Core Product Matrix Showcase
- Restrained architectural presentation of verified hardware models:
  1. **Magna-C&I Series (260 kWh / 125 kW)**: All-in-one IP55 outdoor cabinet.
  2. **Lith-On-50 Compact ESS (48 kWh / 48 kW)**: Modular cabinet for residential common areas.
  3. **LT215 Container (215 kWh / 110 kW)**: Weatherproof compact container.
  4. **Max-20HC-5000 Container (5.0 MWh / 1.25 MW)**: 20-ft High-Cube utility-scale container.
- Clean white cards with light grey specification tables and subtle blue technical badges (`#0B3388`).

#### E. Pan-India & Global Deployment Map
- **Visual Concept**: Clean light-mode vector map of India with crisp geographic coordinates:
  - Verified nodes: Srinagar (Defense), Bareilly (University), Jaipur (Substation), Gurugram (Residential Society), Noida (Manufacturing HQ).
  - Clean hover tooltips revealing installed capacity and operating metrics.

#### F. The 7 Structural Moats Stack
- Architectural layered visual detailing Lith-On's 7 defensible engineering moats on a clean light background, with subtle blue accents highlighting functional safety and localized firmware.

---

### PAGE 2: ABOUT US (`/about`)

#### A. Corporate Facility Showcase
- Wide-angle daylight photography of the **20,000 sq. ft. Noida Assembly Plant** showing cleanroom-grade assembly lines, laser welding cells, and battery cycling racks.
- Secondary feature on the **Foshan Innovation Hub** in Guangdong, China, illustrating direct access to global supply chains.

#### B. 6-Step Manufacturing Process (Sequential Stepper)
- Six clean editorial steps on light grey surfaces:
  1. *Cell Sorting & Grading* (OCV and IR tolerance testing).
  2. *Structural Module Assembly* (Cell clamping and flame-retardant barriers).
  3. *Automated Laser Micro-Welding* (Copper busbar bonding).
  4. *BMS & Telemetry Harness Integration* (Automotive-grade locking plugs).
  5. *IceBattery® Ceramic Coating Application* (300µm–400µm protective film).
  6. *Full-Load Burn-In & Grid Testing* (End-of-line verification).

---

### PAGE 3: SOLUTIONS & PRODUCTS (`/solutions`)

#### A. Comprehensive Technical Datasheet Matrix
- Clean, open tabular layout comparing nominal capacity, usable energy, inverter rating, dimensions, enclosure IP rating, and cycle life across all 4 BESS lines.
- No heavy dark backgrounds; pure white and light grey alternating rows for optimal scanning.

#### B. System Component Schematics
- Clean engineering cutaway illustrations highlighting internal liquid/air cooling passages, aerosol fire suppression, and DC/AC disconnect switchgear.

---

### PAGE 4: APPLICATIONS (`/applications`)

- Sector-specific architectural case layouts:
  1. **High-Rise Residential Societies**: Diesel replacement, 100% CAQM GRAP Stage II–IV compliance, zero emissions, and continuous lift operation.
  2. **Healthcare & Hospitals**: Sub-10ms uninterrupted power protecting operating rooms, ICUs, and diagnostics.
  3. **Commercial Parks & Offices**: Peak demand shaving and Time-of-Day (ToD) tariff optimization.
  4. **EV Fast Charging Plazas**: Buffering high-power 350 kW charger spikes to avoid heavy grid demand penalties.
  5. **Remote Defense & Microgrids**: High-altitude alpine temperature tolerance in Jammu & Kashmir.

---

### PAGE 5: PROPRIETARY TECHNOLOGY (`/technology`)

#### A. IceBattery® Thermodynamic Physics Diagram
- Clean interactive visual demonstrating:
  - Solar reflectance (>90% Near-Infrared NIR reflection).
  - Deep-space thermal radiation (Far-Infrared FIR 8–13µm emission).
  - 15°C–30°C internal operating temperature reduction with >20% HVAC savings.

#### B. Sub-10ms UPS Switchover Oscilloscope
- Interactive sine wave comparison illustrating seamless transfer in <10ms vs 10–30s blackout delay from conventional diesel generators.

#### C. In-House Technology Stack
- Clean flowchart showing cell-level BMS active balancing, bi-directional PCS inverters, autonomous EMS dispatch algorithms, and 24/7 cloud SCADA telemetry.

---

### PAGE 6: CASE STUDIES & FINANCIAL MODELS (`/case-studies`)

- Audited financial models presented as clean comparative tables and waterfall charts:
  - **Invertis University**: 1 MWh BESS + 900 kWp Solar saving ₹2.26 Cr/year.
  - **500-Flat Society**: ₹4.76 Cr/year savings, 1.6-year capital payback.
  - **Hyundai EV Charging Hub**: 72% demand penalty reduction.
  - **Kashmir Defense Alpine Station**: Diesel freeze mitigation at high altitude.

---

### PAGE 7: SUSTAINABILITY (`/sustainability`)

- Decarbonization calculator and circular hydrometallurgical battery recycling flowchart on clean light surfaces.

---

### PAGE 8: WARRANTY & SUPPORT (`/warranty-and-support`)

- 10-year / 6,000-cycle performance guarantee terms and 24/7 cloud SCADA monitoring SLAs.

---

### PAGE 9: CONTACT & RFQ CONSULTATION (`/contact`)

- Clean technical sizing RFQ form, Noida HQ & Foshan Hub coordinates, direct dial telephone, and anti-fraud recruitment warning banner.
