# PRD — Lith-On Website

## 1. Purpose
Define the product requirements for the Lith-On Bharat Energy public-facing website. The website explains the company, its lithium battery and Battery Energy Storage System (BESS) solutions, applications, manufacturing capabilities, proprietary thermal technology (IceBattery®), and commercial enquiry pathways.

## 2. Goals
- Communicate Lith-On's engineering capability clearly to commercial, industrial, and institutional stakeholders.
- Organize information into an intuitive, accessible 12-route structure.
- Help enterprise decision-makers assess energy storage feasibility and submit technical RFQ sizing inquiries.
- Present technical specifications and verified company track records accurately without unsubstantiated claims.
- Deliver an editorial, light-first, highly responsive experience across mobile, tablet, and desktop viewports.

## 3. Intended Audiences
- Commercial & Industrial (C&I) facility directors, factory owners, and operations managers.
- Solar PV developers, EPC contractors, and microgrid integrators.
- High-rise residential society RWA management committees seeking CAQM GRAP diesel generator replacement.
- Institutional campus administrators (universities, hospitals, retail networks).
- Utility planners and substation engineers.

## 4. Scope & Information Architecture
The approved route structure comprises 12 primary pages plus core SEO routes:
1. **Home (`/`)**: High-impact architectural hero, verified metrics bar, value propositions, featured products, deployments, and live financial savings calculator.
2. **Solutions (`/solutions`)**: Technical datasheet matrix for Magna-C&I (260 kWh), Lith-On-50 (48 kWh), LT215 (215 kWh), and Max-20HC-5000 (5.0 MWh).
3. **Applications (`/applications`)**: Priority sector blueprints (Hospitals, C&I, Data Centers, Microgrids, EV Fast Charging).
4. **Case Studies (`/case-studies`)**: Audited financial models (Kashmir Defense 1.2 MWh, Bareilly Univ 400 kWh, NCR 500 kWh, Hyundai Dealership).
5. **Technology (`/technology`)**: IceBattery® 300–400µm ceramic coating physics, sub-10ms UPS cutover, in-house 3-tier BMS/EMS/PCS stack.
6. **Capabilities (`/capabilities`)**: Noida Sector 136 20,000 sq. ft. plant, 250 MWh annual throughput, Foshan R&D hub.
7. **Why Lith-On (`/why-lith-on`)**: The 7 Moats, Trifecta Certifications (`IEC 61508 + IEC 61850 + BIS`), TCO comparison matrix.
8. **About Us (`/about`)**: Entity evolution (est. 2022 as Neoclo Energy), IIT alumni leadership, vision, and mission.
9. **Sustainability (`/sustainability`)**: Scope 1 & 2 carbon abatement, 2,800+ MT CO2 offset, CAQM GRAP diesel compliance, hydrometallurgical recycling.
10. **Warranty & Support (`/warranty-and-support`)**: 10-year warranty, >6,000 cycles guarantee, 24/7 cloud SCADA telemetry.
11. **FAQs (`/faqs`)**: Categorized technical accordion covering chemistry, thermal safety, economics, and delivery.
12. **Contact & Sizing RFQ (`/contact`)**: Interactive sizing RFQ form, Noida HQ & Foshan Hub coordinates, direct dial (`+91-7000013009`), recruitment fraud warning.
13. **SEO Endpoints**: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`.

## 5. Visual & UX Requirements (New Visual Direction)
- **Aesthetic**: Light, premium, minimal, editorial, architectural, and technology-focused.
- **Palette**:
  - Pure white (`#FFFFFF`) and warm off-white (`#FAFAF8`) canvas.
  - Light neutral grey (`#F3F4F6`) for technical panels and tables.
  - **Lith-On Red (`#F74530`)**: High-emphasis accent for primary calls to action (CTAs) and active indicators.
  - **Lith-On Blue (`#0B3388`)**: Technical accent for icons, links, and certification marks.
  - Prohibited: Default dark-blue backgrounds, universal blue sections, alternating red/blue stripes, neon gradients.
- **Typography**: **Manrope** sans-serif font family. Confident, light or regular weight hero headlines (`font-light` / `font-normal`), medium section headings, and readable charcoal body copy.
- **Layout**: Generous spacing (80px–120px section padding), image-led heroes with authentic BESS photography from `data-sources/`, asymmetric editorial compositions, and selective overlapping panels. Open layouts preferred over repetitive three-card grids.
- **Motion**: Subtle, hardware-accelerated transitions. No heavy WebGL 3D scenes or distracting parallax.

## 6. Functional Requirements
- Consistent, minimal navigation with sticky header, quick-dial telephone, and mobile drawer.
- Pre-rendered static pages for fast load times.
- Accessible interactive components built on Radix UI primitives (`@radix-ui/react-accordion`, `@radix-ui/react-dialog`, `@radix-ui/react-tabs`).
- Dynamic DG vs BESS Financial Savings Calculator consuming audited data from `content/calculator-data.json`.
- Working sizing enquiry submission form with client-side state feedback.
- Prominent Public Advisory dialog warning against recruitment fraud.
- Floating WhatsApp button with pre-filled consultation inquiry text.

## 7. Non-Functional Requirements
- **Accessibility**: Semantic HTML5, WCAG 2.1 AA contrast on light backgrounds, full keyboard navigation with visible focus indicators, screen reader labels.
- **Performance**: High Lighthouse score, optimized Next.js `<Image>` usage, sub-second route transitions.
- **SEO**: Unique page titles, meta descriptions, OpenGraph tags, dynamic XML sitemap, and JSON-LD structured data for Organization and LocalBusiness.
- **Security & Privacy**: No exposed secrets or API keys, zero unnecessary third-party cookies or intrusive trackers.

## 8. Content Constraints & Guardrails
- **Authoritative Source**: All copy, specs, and metrics must trace to `data-sources/` and `LITHON_DATA_VAULT.md`.
- **Zero Hallucination**: Do not invent performance figures, product availability, unverified customer testimonials, or fictitious compliance certificates.
- Clearly flag missing or unconfirmed items for human review.

## 9. Success Criteria
- All 12 route pages render with verified visual polish on mobile (320px), tablet (768px), and desktop (1440px+).
- `npm run build` succeeds with 0 TypeScript errors and clean static page generation.
- `npx eslint src` passes with 0 errors and 0 warnings.
- All internal links, CTAs, phone dials (`tel:`), and emails (`mailto:`) lead to active destinations.
