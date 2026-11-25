# Deck content: implementation plan

**Started:** 25 Nov 2026
**Goal:** put every block in `src/data/deck-content/` (editable copy: `content/deck-content.md`) on the website for the initial review. Review-status blocks are shown too. Their open questions are in `docs/OWNER_REVIEW.md` and are fixed after the owner answers.
**Rules:** follow `design.md` and AGENTS.md. Read copy from `src/data/deck-content` with `getDeckBlock(id)` where a component can, so later edits happen in one place. Don't add anything from `excluded.ts`. Build and lint are skipped for now (owner instruction); run them in step 12.

**How to update this file:** tick a box when its task is done and add the date. If a task changes scope, write one line under it. Keep the change log at the bottom current.

Legend: `[ ]` to do · `[x]` done · `[~]` partly done (say what is left)

---

## Step 0: Groundwork
- [x] Audit all 8 decks against all routes (`docs/DECK_CONTENT_AUDIT.md`), 25 Nov
- [x] Fix the site errors F1–F3 (EV demand charge, Invertis facts, CLAIMS_REVIEW notes), 25 Nov
- [x] Distribute content into `src/data/deck-content/` (52 blocks, sources cited), 25 Nov
- [x] Editable copy `content/deck-content.md`; owner questions `docs/OWNER_REVIEW.md`, 25 Nov
- [x] Data layer shows review blocks during the initial review (`SHOW_REVIEW_CONTENT` in `src/data/deck-content/index.ts`), 25 Nov

## Step 1: Global facts (quick edits)
- [x] `contact-address`: Noida address becomes "A-162, Arihant Business Centre, 7th Floor, Sector 136, Noida, Uttar Pradesh 201304" in `SitesSplit`, `/contact`, `Footer`, `LegalAddress` (privacy, terms) and the JSON-LD in `src/app/layout.tsx` (also MobileNav), 25 Nov
- [x] `home-deployments`: add RSPL Kanpur to the home deployments list (`HomeResults`), 25 Nov

## Step 2: About (`/about`)
- [x] `about-mission`: mission (Corporate Deck) and vision (catalogue) in the story section
- [x] `about-timeline-additions`: merge the six-deck milestones into `TIMELINE`
- [~] `home-projects-stat`: added to the About stat band and timeline, 25 Nov. Home proof band not changed (left for review)

## Step 3: Technology (`/technology`)
- [x] `tech-bms`: SoC and SoH in the BMS layer of the stack
- [x] `tech-scada`: cell, module, rack and system monitoring in the SCADA layer
- [x] `tech-ems-modes`: add renewable firming, off-grid/hybrid and forecast-based charging to `ModeDiagram` (merge load shifting and backup with the existing modes)
- [x] `tech-thermal-system`: coating plus liquid/HVAC cooling, cells near 20 °C, in the IceBattery section
- [x] `tech-icebattery-modes`: heat retention (cold weather) and interior coating, after the heat-shield steps
- [x] `tech-lfp-specs`: 90% DoD in the LFP band (self-discharge was already there). Also removed the leftover "10 years standard manufacturer warranty" stat, 25 Nov
- [~] `tech-lead-acid-charging`: charging-time row in `src/data/comparisons.ts`. Not changed: the table already says 5–6 hours (catalogue), the Corporate Deck says 2–4 hours; owner review R19

## Step 4: Solutions (`/solutions`)
- [x] `sol-diesel-costs`: diesel cost figures in the diesel replacement chapter ("How it works" points), 25 Nov
- [x] `sol-footprint`: new "Site" group (space, noise) in `DG_VS_BESS`, 25 Nov
- [x] `sol-energy-cycle`: three-step solar shifting, 25 Nov
- [x] `sol-microgrids-offgrid`: off-grid sites in the microgrids chapter, 25 Nov
- [x] `sol-ci`: check the commercial and industrial points are covered (already on site), 25 Nov

## Step 5: Industries (`/industries`)
- [x] `ind-residential`: new Residential societies sector (anchor `#residential`), linked to the Gurugram case; add it to the navigation and the industries hero sector list. Also moved the Gurugram figures out of Commercial buildings (Commercial now shows cutover, AC peak shaving and PwC); image hero-2/residential.webp (illustrative), 25 Nov
- [x] `ind-education-zones`: campus zone table in the education sector, 25 Nov
- [x] `ind-education-invertis`: Invertis figures in the education sector, 25 Nov
- [x] `ind-education-model`: illustrative campus model (figures + monthly savings table), clearly labelled as a model, 25 Nov
- [x] `ind-ev`: throttling, outages, how storage helps, forecast charging, 25 Nov
- [x] `ind-ev-connection`: 600 kW vs 200 kW grid-connection comparison, 25 Nov
- [x] `ind-ev-policy`: market context line with named sources, 25 Nov
- [x] `ind-other-sectors`: "Also suited to" list, 25 Nov
- [x] `ind-dg-market`: 70,000+ MW context line (intro), 25 Nov

## Step 6: Case studies
- [x] `cs-deployment-map`: `DeploymentMap` on `/case-studies` ("Deployed for"): India outline from `data-sources/in.svg` (simplemaps, free for commercial use, credited in the caption) styled into `public/images/maps/india.svg`, states with installations tinted, seven numbered markers placed by latitude/longitude with the SVG's Mercator projection, and a matching legend, 25 Nov
- [x] `cs-ev-bill`: bill-breakdown table and capex figures on `/case-studies/ev-charging-hub`, 25 Nov
- [x] `cs-gurugram-five-year`: five-year cost comparison and DG vs storage table on `/case-studies/residential-society-500`, 25 Nov
- [x] `cs-invertis-facts`: backup, campus served and solar export, 25 Nov
- [x] `cs-installation-photos`: check the rail shows all 12 catalogue photos with the right captions, 25 Nov

## Step 7: Products
- [x] `prod-where-it-fits`: "Where it fits on a campus" under "Used for" on the four product pages, read from deck-content, 25 Nov
- [x] `prod-erickshaw`: card added to `home-products.ts`; photo cropped from catalogue p.28 to `public/images/products/home/erickshaw-battery.webp`, 25 Nov
- [~] `prod-home-inverter`: HomeRange lead now mentions the inverter-compatible lead-acid replacement and the e-rickshaw battery, 25 Nov. "Compatible with all inverters" left out until owner review R12
- [x] `prod-lineup`: already covered by ProductsLineup, 25 Nov

## Step 8: Services, contact, grid services
- [x] `svc-sizing-inputs`: Energy audit step on `/services` lists the five inputs, 25 Nov
- [x] `svc-sizing-inputs`: optional fields "Monthly consumption", "Operating hours a day", "Grid tariff" and "Roof or ground area free for solar" in the assessment form power profile (`src/lib/contact.ts`; the API and email pick them up through `fieldsFor`), 25 Nov
- [x] `svc-epc`: already covered, 25 Nov
- [x] `grid-campus-substation`: added to the Substation buffering detail on `/grid-services`, 25 Nov

## Step 9: Commercial and company pages
- [x] `fin-facility-fit`: new section after the model comparison on `/financing`, 25 Nov
- [x] `fin-pay-per-unit`: in the same section, as text (no fourth model card, to keep the estimator and table unchanged), 25 Nov
- [x] `dist-white-label`: fifth reason on `/distributor`, 25 Nov
- [x] `sus-diesel-health`: IARC Group 1 added to the diesel costs band on `/sustainability` (pollutants were already there), 25 Nov
- [x] `why-moats`, `why-best`: already on the page, 25 Nov

## Step 10: FAQs
- [x] `faq-sizing`, `faq-society`, `faq-icebattery-cold`, `faq-ev-throttling`: added to `src/data/faqs.ts` (basics, residential, safety and economics groups). `faq-dg-gap` already answered, so not duplicated, 25 Nov

## Step 11: Calculator and mock product screens (larger pieces)
- [ ] `calc-demand-mode`: demand-charge mode in the calculator with the example tariff as editable defaults
- [ ] Stageshow: SCADA drill-down (system → rack → module → cell alarm) for `/technology#stack`
- [ ] Stageshow: EMS forecast-charging chart for `/industries#ev-infrastructure`
- [ ] Stageshow: outage alert (panel + phone notification) for `/industries#residential`

## Assets needed
- [x] India outline SVG: supplied as `data-sources/in.svg`, 25 Nov

## Step 12: QA and handover
- [ ] Sync any edits made in `content/deck-content.md` back into `src/data/deck-content/`, then regenerate the markdown with `scripts/deck-content-md.cjs` (usage in its header)
- [~] Update `docs/SITE_LINKS.md`: `/industries#residential` added and the mega menu links to it, 25 Nov. Left: check the sitemap needs nothing (anchors only)
- [ ] Responsive check at 320, 768, 1280 and 1440 px for every changed page; headings in order; alt text on new images
- [ ] `npm run build` and `npx eslint src` (when the owner re-enables them)
- [ ] Update `docs/PHASES_CHECKLIST.md`, `CLAIMS_REVIEW.md` and `LITHON_DATA_VAULT.md` with anything that changed
- [ ] After owner answers in `docs/OWNER_REVIEW.md`: apply each answer, set the block to `ready` or remove it, and set `SHOW_REVIEW_CONTENT` to `false` before publishing

---

## Change log
- **25 Nov 2026:** Plan created. Step 0 done.
- **25 Nov 2026:** Steps 1–3 done (address, RSPL, About mission/vision/timeline/stat, Technology additions). Found and removed a leftover 10-year warranty stat on /technology. Charging-time conflict sent to owner review (R19).
- **25 Nov 2026:** Steps 4–6 done: Solutions copy and DG vs BESS "Site" rows; Industries gains Residential societies (sector 07, nav link), campus zone table, illustrative campus model, EV connection table and policy line, "Also suited to"; case-study detail pages gain deck breakdowns (EV bill, Gurugram five-year cost); RSPL added to case studies. New shared components `src/components/deck/DeckTable.tsx` and `DeckFigures.tsx`.
- **25 Nov 2026:** Steps 7–10 done: product "Where it fits", e-rickshaw card, assessment-form sizing fields, Services audit inputs, grid substation role, Financing pay-per-unit and site criteria, Distributor white-label, Sustainability IARC, four new FAQs. `npx tsc --noEmit` clean for `src/`. Next: Step 11 (calculator demand mode, three Stageshow mock screens), then Step 12 QA.
- **25 Nov 2026:** Deployment map built. Production build served on port 3100 and shared for review through a Cloudflare quick tunnel (temporary URL, changes each time the tunnel restarts). The build stopped on a Next.js security notice: 16.4.3 has four moderate advisories (npm audit), fixed in 16.4.6; upgrade pending the owner's go-ahead.
