# Project Memory — Lith-On Website

## Purpose
Keep durable, verified project context that helps future AI coding sessions continue work without re-discovering basic decisions. This file is not a substitute for source code, current user instructions, or project documentation.

## Project Context
- Project: Lith-On public-facing website.
- Main content topics: company overview, lithium battery solutions, BESS, applications, capabilities, differentiators, FAQs, sustainability, warranty, and support.
- A set of Markdown content files is available alongside this document.
- `AGENTS.md` defines broad repository-level guidance.
- `PRD.md` describes website goals and requirements.
- `architecture.md` documents verified technical structure and decisions.
- `rules.md` lists coding-agent rules.
- `design.md` guides visual implementation.

## Content Files
- `home.md`
- `about.md`
- `solutions.md`
- `applications.md`
- `capabilities.md`
- `why-lith-on.md`
- `faqs.md`
- `sustainability.md`
- `warranty-and-support.md`

## Important Content Guardrails
Do not invent technical specifications, pricing, warranty periods, certifications, compliance claims, performance guarantees, customer names, case studies, or service commitments. Ask for approval or leave the information out if it is not supported by source material.

## Verified Technical Details & Corporate Facts
All verified facts extracted from authentic project presentations and data files are cataloged in `LITHON_DATA_VAULT.md`:
- Legal Entity: LITH-ON BHARAT ENERGY PRIVATE LIMITED (est. 2022 as Neoclo Energy).
- Manufacturing Facility: 20,000 sq. ft. in Sector 136, Noida (UP) with 250 MWh annual production capacity (50 MWh BESS + 200 MWh Battery pack).
- Global Hub: C11-6, Foshan Innovation Torchpark, Chancheng, Foshan, China.
- Deployment Scale: 500+ MWh deployed globally across 25+ countries.
- Core Products: Magna-C&I (260 kWh / 125 kW), Lith-On-50 (48 kWh / 48 kW), LT215 Container (215 kWh / 110 kW), Max-20HC-5000 (5.0 MWh / 1.25 MW).
- Technology: LFP chemistry (>6,000 cycles at 88-90% DoD, 10-year warranty, >98% efficiency), IceBattery® ceramic coating (reduces internal temp by 15-30°C, operates up to 60°C ambient), Sub-10ms UPS switchover, In-House BMS/EMS/PCS/SCADA stack.
- Certification Trifecta: IEC 61508 + IEC 61850 + BIS.
- Verified Deployments: Indian Army (Srinagar & J&K), NTPC (Lucknow, Shravasti, J&K), RVUNL (Jaipur), PwC (New Delhi), Invertis University (1 MWh BESS + 900 kW Solar), Fuel retail networks (Lucknow, Ghaziabad, Patna).
- Official Contacts: Phones: +91-7000013009, +91-7000017005; Email: tech@lith-onbharat.com; Web: www.lith-on.com.
- Authoritative Design Direction (v2.0): Light-first, premium, minimal, editorial, architectural, and technology-focused. Documented authoritatively in `design.md`.
  - Brand Accent Colours: Lith-On Red (`#F74530`) and Lith-On Blue (`#0B3388`).
  - Background Canvas: Pure white (`#FFFFFF`) and warm off-white (`#FAFAF8`). Light neutral grey (`#F3F4F6`) for technical panels.
  - Typography: **Manrope** sans-serif font family.
  - Explicit Prohibitions: No universal dark-blue (`#0B132B`) backgrounds as default; no whole-page blue flood fills; no alternating red/blue stripes; no repetitive 3-card grids; no cybernetic neon gradients.
  - Authentic logos: `public/images/logo/logo-dark.png` (for light canvas) and `public/images/logo/logo-light.png` (for dark exceptions).

## Decisions Log
- Date: 2026-10-30 (v2.0 Update)
- Decision: Transition website visual direction to light-first architectural & editorial aesthetic with Manrope typography, Lith-On Red (`#F74530`), and Lith-On Blue (`#0B3388`).
- Reason: User-specified visual direction modeled on modern architectural clean-tech benchmarks. Conveys high engineering credibility without generic SaaS or heavy dark-blue corporate cliches.
- Files or areas affected: All documentation (`design.md`, `rules.md`, `AGENTS.md`, `PRD.md`, `architecture.md`, `README.md`, `memory.md`, `LITHON_DATA_VAULT.md`, `VISUAL_ASSETS_AND_GRAPHICS_PLAN.md`).

- Date: 2026-10-30 (Initial Architecture)
- Decision: Stack selection: Next.js 16 (App Router with Turbopack), TypeScript, Tailwind CSS v4, Lucide React, and Radix UI primitives.
- Reason: Strong foundation for performance, type safety, accessible components, and rapid styling aligned with Ultracite rules.
- Files or areas affected: Workspace root, package.json, src/

## Implementation Milestones (Completed 2026-10-30)
- **Phase 1 (Setup & Tooling)**: Next.js 16 (Turbopack) App Router + React 19 + TypeScript + Tailwind CSS v4 environment initialized in root. Dependencies: `@radix-ui/react-accordion`, `@radix-ui/react-dialog`, `motion`, `lucide-react`, `clsx`, `tailwind-merge`.
- **Phase 2 (Layout & Interactive Graphics)**: Built Header, Footer (with Trifecta badges & fraud modal), floating WhatsApp button, and rich technical graphics: `IceBatteryThermal`, `Sub10msWaveform`, `PanIndiaMap`, `SavingsCalculator`, `SevenMoatsStack`, and `ProductCard`.
- **Phase 3 (Dedicated Route Pages)**: All 12 primary routes built and pre-rendered:
  - `/` — Homepage assembling all sections and live metrics
  - `/solutions` — Technical specs table and BESS product line
  - `/applications` — Priority sector matrix and deep-dive blueprints
  - `/case-studies` — Audited financial models (Invertis, 500-Flat, Hyundai, Army, NTPC)
  - `/technology` — IceBattery® physics, sub-10ms switchover, 6-mode in-house stack
  - `/capabilities` — Noida 20,000 sq. ft. plant, 250 MWh throughput, 6-step stepper
  - `/why-lith-on` — The 7 Moats, Trifecta Certifications, and competitor matrix
  - `/about` — Entity evolution, IIT leadership, Noida and Foshan hubs
  - `/sustainability` — Emissions comparison table, GRAP compliance, cobalt-free recycling
  - `/warranty-and-support` — 10-year warranty terms, cloud SCADA, and SLAs
  - `/faqs` — 35+ searchable categorized accordion questions
  - `/contact` — Interactive sizing RFQ form, global coordinates, and fraud warning
- **Phase 4 (Production Verification & Quality Audit)**:
  - `npm run build`: 14/14 static pages generated with 0 errors. All routes pre-rendered.
  - `npx eslint src`: 0 errors, 0 warnings across entire codebase.
  - Live server (`http://localhost:3000`): All routes (`/`, `/solutions`, `/applications`, `/case-studies`, `/technology`, `/capabilities`, `/why-lith-on`, `/about`, `/sustainability`, `/warranty-and-support`, `/faqs`, `/contact`) responding with 200 OK.
  - Audited and documented in `PHASE_4_VERIFICATION_REPORT.md`.
- **Phase 5 (SEO Automation, Deployment Configuration & Operations Handoff)**:
  - Dynamic `sitemap.xml` (`src/app/sitemap.ts`) for all 12 routes with weekly/monthly priorities.
  - Standard `robots.txt` (`src/app/robots.ts`) with sitemap linkage.
  - Web App Manifest (`src/app/manifest.ts`) for PWA installability.
  - Structured JSON-LD schema (Organization, ContactPoint, LocalBusiness) in `src/app/layout.tsx`.
  - Production deployment configuration: `vercel.json` (security headers, caching) and multi-stage `Dockerfile`.
  - Operations guide created: `PRODUCTION_HANDOFF_GUIDE.md`.
  - Production build re-verified: 17/17 static pages generated with 0 errors and 0 ESLint warnings.

Update this file only when the information is durable and useful for future work. Keep it short, factual, and current.
