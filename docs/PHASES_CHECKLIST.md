# Lith-On website redesign — phase checklist

Living checklist for the experience-first redesign. Updated as each item is built, tested and approved.
Detailed specifications and build records live in [visual-audit/LITHON_VISUAL_UX_MOTION_AUDIT.md](visual-audit/LITHON_VISUAL_UX_MOTION_AUDIT.md) (§5–6 specs, §9.2 build records). Fact questions live in [../CLAIMS_REVIEW.md](../CLAIMS_REVIEW.md).

**Legend:** `[x]` done and approved · `[~]` built, awaiting review · `[ ]` not started · `[!]` blocked (reason given)

**Every page or section is done only when** it follows its spec (or the change is written back to the audit); it uses design-system tokens and components only; it has been checked at 1440 / 1024 / 768 / 375 / 320 plus reduced motion and no JavaScript; it has no overflow and no console errors; `npx eslint src`, `tsc` and `npm run build` pass; and no fact was invented or changed (audit §9.3).

_Last updated: 20 November 2026_

---

## Progress at a glance

| Phase | Status | Done |
|---|---|---|
| 1 Foundation | ✅ Complete | 12 / 12 |
| 2 Homepage and global | ✅ Complete | 14 / 14 |
| 3 Internal pages | 🔶 All built, awaiting review | 24 / 24 pages built (Capabilities interim; TEC-02 and SRV-03 interim) |
| 4 Interaction polish | 🔶 Mostly approved (motion tuning awaiting review) | 8 / 8 |
| 5 QA and release | 🔶 In progress | 5 / 9 (rest need the client, devices or a build) |

---

## Phase 1 — Foundation ✅

- [x] `design.md` v3.0 (type scale, spacing, components, motion budget, anti-patterns)
- [x] Typography and spacing tokens in `globals.css` (`@theme`, `container-site`, `section` rhythm)
- [x] `Button` (primary, secondary, tertiary; light and dark)
- [x] `PageHero` (product, image, editorial, utility)
- [x] `SectionIntro`
- [x] `MediaFrame` (cut-out, illustrative label, parallax, zoom)
- [x] `Stat` and `StatBand`
- [x] `BentoGrid` and `HorizontalRail` (scroll-driven on desktop)
- [x] `ScrollStory`
- [x] `ClosingCTA` (statement, split, inline; optional link row)
- [x] Motion system: GSAP + ScrollTrigger, Motion, Lenis, `Reveal`, `LineReveal`, `CountUp`, `Parallax`, `ActiveOnView`; reduced-motion and no-JS safety
- [x] Internal component showcase at `/design-system` (noindex)

## Phase 2 — Homepage and global ✅

**Homepage**
- [x] HOME-01 Hero: replaced 20 Nov by the city tour from the `/hero-2` prototype (`CityHero`; pinned scroll dive on desktop). Phones, tablets, touch and reduced motion: the six sectors as a swipeable carousel, one complete chapter per slide (scroll-snap), with counter, dots and arrows below; the city overview image is left out there so two images no longer stack. `/hero-2` now redirects to `/`; the previous `HomeHero` is kept in `src/components/home/` in case it is needed again
- [x] HOME-02 Proof stat band
- [x] HOME-03 Challenges scroll story with live diagrams
- [x] HOME-04 Product rail with capacity axis (catalogue renders)
- [x] HOME-05 Engineering bento
- [x] HOME-06 Made in Noida (interim layout; final version needs plant photography, A3)
- [x] HOME-07 Results (Invertis feature, case rows, real installation photos)
- [x] HOME-08 Closing statement

**Global**
- [x] G1 Header: five items, CTA, container alignment (scroll-state polish → Phase 4)
- [x] G2 Mega-menus (full-width panels, disclosure pattern, keyboard routing)
- [x] G3 Mobile navigation sheet
- [x] G4 Footer with closing stage
- [x] G5 Floating WhatsApp button
- [x] G6 Page transitions (View Transitions, M9)

## Phase 3 — Internal pages 🔶

Order follows the audit (§9.1). Each page is reviewed before the next starts.

### Core pages
- [~] **Products** `/products`, built 18–19 Nov, awaiting review
  - [x] PRD-01 Hero with catalogue lineup
  - [x] PRD-02 Catalogue: segmented filter, 12 products, View Transitions
  - [x] PRD-03 "See inside" tile (merged into PRD-02)
  - [x] Comparison table (all products)
  - [x] PRD-04 Split closing
  - [x] Catalogue additions: Magna-C&I 215, Magna-UTL 373/418, Max-20HC-3440
  - [x] Home & small business subsection (7 catalogue products)
- [~] **Product detail template** `/products/[slug]` (12 pages), built 19 Nov, awaiting review
  - [x] PDP-01 Breadcrumb (folded into the hero)
  - [x] PDP-02 Buying hero: large product stage, capacity headline, three key specs, one primary action plus datasheet link
  - [x] Highlights and "Used for" (overview, key features, applications)
  - [x] PDP-03 Included vs optional configuration (hidden when empty)
  - [x] PDP-04 Cutaway link row
  - [x] PDP-05 Grouped specifications table; rows with no published value hidden; hard-coded claims removed
  - [x] PDP-06 FAQ as native accordion, two columns (hidden when empty)
  - [x] PDP-07 Inline CTA with sizing assistant, plus related-products rail
- [~] **Solutions** `/solutions`, built 19 Nov, awaiting review
  - [x] SOL-01 Image hero (illustrative industrial scene, 6-word headline, one sentence, no chips)
  - [x] SOL-02 Five solutions as a scroll story with live diagrams, sourced stats and "How it works" disclosures (anchors kept)
  - [x] DG vs BESS comparison (catalogue)
  - [x] SOL-03 DC systems split (Magna-UTL render, telecom and DC cabinet columns)
  - [x] SOL-04 Hardware link card removed
  - [x] SOL-05 Statement closing with link row
- [~] **Industries** `/industries`, built 19 Nov, awaiting review
  - [x] IND-01 Hero with sector switch (image crossfades on hover or focus; light composition)
  - [x] IND-02 Priority framework removed
  - [x] IND-03 Six alternating split chapters (challenge, sourced stat, outcomes, typical system, case link)
  - [x] IND-04 Defence band (the page's single dark surface)
  - [x] IND-05 Inline closing
- [~] **Technology** `/technology`, built 19 Nov, awaiting review
  - [x] TEC-01 Editorial hero with numbered chapter index
  - [!] TEC-02 Inside the system: interim version (cutaway render, labelled, plus six sourced subsystem rows). The scroll-driven exploded view needs a real layout drawing (asset).
  - [x] TEC-03 IceBattery four-step scroll story (one animated SVG)
  - [x] TEC-04 Lith-On vs diesel cutover waveforms, drawn on view
  - [x] TEC-05 Six EMS modes as controls for one flow diagram
  - [x] TEC-06 LFP stat band, plus lead-acid vs lithium comparison
  - [x] TEC-07 Inline closing
- [~] **Case studies** `/case-studies`, built 20 Nov, awaiting review
  - [x] CS-01 Editorial hero with three headline results; methodology as a footnote
  - [x] CS-02–04 Three alternating case features (Invertis photo; Gurugram and EV hub live diagrams)
  - [x] CS-05/07 Merged: pinned rail of 12 real catalogue installation photos (schematic map and render gallery removed)
  - [x] CS-06 Institutional deployments as an editorial list (vault case D)
  - [x] CS-08 Split closing
- [~] **Case study detail** `/case-studies/[slug]` (3 pages), built 20 Nov, awaiting review
  - [x] CSD-01 Editorial hero (Invertis photo in side column) plus four-figure stat band
  - [x] CSD-02 Before/after annual cost bars, drawn on view
  - [x] CSD-03 Project facts as an editorial list
  - [x] CSD-04 Inline CTA plus links to the other cases
- [~] **About** `/about`, built 20 Nov, awaiting review
  - [x] ABT-01 Editorial hero (real product photo; plant photography still wanted)
  - [x] ABT-02 Stat band
  - [x] ABT-03/04 "Our story": pull statement, identity and leadership columns (portraits if supplied)
  - [x] ABT-05 Noida and Foshan split (facility rail deferred until plant photos exist)
  - [x] ABT-06 Exports removed
  - [x] ABT-07 Timeline rail (client corporate deck wording)
  - [x] ABT-08 Standards list
  - [x] ABT-09 Values as a numbered editorial list
  - [x] ABT-10 Statement closing ("Visit the plant in Noida")
- [~] **Why Lith-On** `/why-lith-on`, built 19 Nov, awaiting review
  - [x] WHY-01 Editorial hero ("Built in-house, / hard to replicate") with the seven advantages as a numbered index
  - [x] WHY-02 Seven-chapter scroll story; the moat tower is now a live SVG whose layer lights up per chapter (JPG retired)
  - [x] WHY-03 Evidence merged into each chapter as a disclosure (key figure plus "The evidence")
  - [x] WHY-04 Trifecta: three large standard marks with one line each
  - [x] WHY-05 Time-to-replicate bar chart that grows on view (18 months; 24–36 months; decades, off scale)
  - [x] WHY-06 Statement closing with link row
- [~] **Contact** `/contact`, built 19 Nov, awaiting review
  - [x] CON-01 Split intake: intro, three intents as selectable rows, direct contacts; sticky form (four-step project flow kept, inline validation)
  - [x] Form delivery: `/api/contact` route emails submissions via Resend (owner decision 19 Nov). [!] Needs `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` on the host (see `.env.example`); until then the form shows the phone and email fallback
  - [x] CON-02 Offices: two columns with addresses and map links (plant photo waits for A2)
  - [x] CON-03 Fraud notice as a calm bordered notice

### Mid-size pages
- [~] **Calculator** `/calculator`, built 19 Nov, awaiting review
  - [x] CAL-01 Compact utility hero (stat boxes removed)
  - [x] CAL-02 Two-pane tool: five sliders with live values; sticky results with tweened figures, cost bars and a 10-year cash line that redraws; engine rebuilt from `content/calculator-data.json`
  - [x] CAL-03 Methodology as a disclosure under the results
  - [x] CAL-04 Inline "Send me this as a proposal" (prefills the contact form)
- [~] **Services** `/services`, built 19 Nov, awaiting review
  - [x] SRV-01 Editorial hero with a real installation photo (Lucknow rack); full-bleed commissioning photo waits for a landscape asset
  - [x] SRV-02 Five-step delivery stepper, line draws on view (no week numbers: none sourced), plus site readiness
  - [!] SRV-03 Support plans withheld (CLAIMS_REVIEW item 6); interim "After commissioning" section from sourced monitoring and warranty facts
  - [x] SRV-04 Response zones schematic (4–8 h / 24 h / 48 h) with the facts as a list
  - [x] SRV-05 Inline closing
- [~] **Warranty and support** `/warranty-and-support`, built 19 Nov, awaiting review
  - [x] WAR-01 Editorial hero with a giant "10" (count-up) as the visual
  - [x] WAR-02 Capacity floor chart (rated capacity → warranted ≥ 70% floor; no invented degradation curve), coverage list, conditions disclosure
  - [x] WAR-03 Labelled telemetry illustration (16 cells, one flagged) and 99.9% power availability
  - [x] WAR-04 Response-time scale (4–8 h / 24 h / 48 h on one axis)
  - [x] WAR-05/06 Merged into one support panel
- [~] **Sustainability** `/sustainability`, built 19 Nov, awaiting review
  - [x] SUS-01 Image hero (illustrative campus scene, labelled)
  - [x] SUS-02 One-site stat band (Gurugram society: ≈ 6,50,000 L, ≈ 1,740 t direct CO₂, < 55 dB)
  - [x] SUS-03 Cost of diesel as four large figures
  - [x] SUS-04 Diesel vs Lith-On comparison with growing bars; stacked on phones
  - [x] SUS-05/06 GRAP and solar splits; lifecycle as a numbered list (content-only claims logged as CLAIMS_REVIEW item 17)
  - [x] SUS-07 Inline closing (savings calculator)

### Lighter refreshes
- [~] **Certifications** `/certifications`, built 20 Nov, awaiting review
  - [x] CRT-01 Utility hero (two actions)
  - [x] CRT-02 Four standard rows: name large, scope in one line, "applies to" tags (SIL level left out: CLAIMS_REVIEW §5 item 3)
  - [x] CRT-03 Grouped two-column list: in-house testing (content/capabilities.md) and project documentation; note as a footnote. The unverified test-report checklist, NDA note and named packages removed (item 7)
  - [x] CRT-04 Inline closing
- [x] **Grid services** `/grid-services`, approved by the owner 20 Nov (services confirmed correct)
  - [x] GRD-01 Product hero with the Max-20HC-5000 catalogue render (no substation photo exists)
  - [x] GRD-02 Bento: five services, each with a line diagram, one line and a "How it works" disclosure, plus a Max-20HC tile. Black-start dropped (no source); unsourced specs removed (item 5)
  - [x] Utility deployments split (RVUNL, NTPC; vault case D) with the NTPC Shravasti photo
  - [x] GRD-03 Inline closing
  - [x] Diagrams animated (owner request, 20 Nov): each line draws in on view, the storage response follows the baseline, tiles stagger, utility integration keeps a slow two-way data flow; final state under reduced motion. Max-20HC footnote now 2.5 MW (catalogue)
- [~] **Financing** `/financing`, reworked 20 Nov after owner review, awaiting review
  - [x] FIN-01 Editorial hero with an upfront-cost visual for the three models
  - [x] FIN-02 Comparison table (Rent / EMI / Purchase) with the best-for line on top
  - [x] FIN-03 Lease-rent estimator replaces the EMI estimator, modelled on Lith-On's own calculator at lith-onbharat.com/calc (PTPQ quarterly rent, deposit, buyout, ex-GST vs GST-inclusive view with GST credit). Formulas checked against the live page's default output; GST fixed at 18% instead of an input; term as quarters; Indian digit grouping for deposit and buyout (the live page prints ₹1,175,689)
  - [x] FIN-04/05 Five-step stepper (line draws on view) and inline closing; partner list removed
  - [x] Owner confirmed (20 Nov): rent and EMI offered in India, financed through Japanese partners without affecting the customer's CIBIL record. Rent row now: security deposit, quarterly rent, financing partner owns with a buyout option
  - [x] EMI mode added to the estimator (owner, 20 Nov): Rent / EMI switch; EMI defaults to a 10% down payment and 5 years, instalment = PTPQ × amount financed ÷ 1,000 ÷ 3 (rate as in /calc), with the equivalent annual rate shown (≈ 8.8% at PTPQ 62). Comparison table EMI row: "A 10% down payment", "Monthly instalments over 5 years". Component renamed `FinanceEstimator`
  - [!] Confirm the EMI rate reading (PTPQ applied to the amount financed); depreciation and subsidy claims stay out
- [~] **Resources** `/resources`, built 20 Nov, awaiting review
  - [x] RES-01/02 Hero with the real catalogue cover and a download button
  - [x] RES-03 Compact datasheet table (product, capacity, category, request), filterable
  - [x] RES-04 Articles removed (none exist)
  - [x] RES-05 FAQ text link
  - [x] Catalogue download (owner decision, 20 Nov): the button opens a dialog asking for name, email and phone, then the PDF downloads (`public/downloads/lith-on-bess-products-catalogue.pdf`, 33 pages, 7.6 MB, built from the catalogue page images). Details post to `/api/contact` (intent `catalogue`) and are emailed once Resend is set up; returning visitors on the same browser skip the form
  - [ ] Store catalogue leads in a database (`saveLead()` hook in `/api/contact`; database work is scheduled last)
  - [ ] Datasheet PDFs per product (still on request)
- [x] **FAQs** `/faqs`, approved by the owner 20 Nov
  - [x] FAQ-01/02 Search as the hero's main element; categories as a sticky list on desktop
  - [x] FAQ-03 Hairline accordion rows under seven category headings (44 questions: content/faqs.md merged with the client's FAQs.docx; content moved to `src/data/faqs.ts`); FAQPage JSON-LD kept
  - [x] FAQ-04 Inline closing
- [x] **Careers** `/careers`, approved by the owner 20 Nov (no openings at present)
  - [x] CAR-01 Editorial hero with a plant photo (full-bleed waits for A2/A3)
  - [x] CAR-02 Fraud notice as a calm bordered notice (content/contact.md wording)
  - [x] CAR-03 Hairline role list, ready to render; [!] the five previous roles had no source, so the page shows "Teams we hire for" until openings are confirmed (CLAIMS_REVIEW item 19)
  - [x] CAR-04 Inline line and email link
- [~] **Distributor** `/distributor`, built 20 Nov, awaiting review
  - [x] DIS-01/03 Split hero: intro and "who can apply" left, the application form right (posts to `/api/contact`, same fields as the Contact page)
  - [x] DIS-02 Four-item editorial list of benefits (protected territories, margins and other unsourced claims removed)
- [~] **Legal** `/privacy-policy`, `/terms-and-conditions`, built 20 Nov, awaiting review
  - [x] LEG-01 Utility hero, 17px body on a reading measure, sticky numbered contents (shared `LegalDocument`); wording unchanged

### Blocked or done by decision
- [~] **Capabilities** `/capabilities`: interim version built 20 Nov, awaiting review
  - [x] CAP-01 Editorial hero with a small genuine factory photo ([!] full-bleed assembly photo needs A2/A3)
  - [x] CAP-02 Shared `SitesSplit` (also now used on About)
  - [x] CAP-03 Six-stage assembly rail (M5), three stages with factory photos and three text-only ([!] one photo per stage needs A3)
  - [x] CAP-04 Testing bento, one figure per test (3,000 V DC, −20 to +60 °C, < 10 ms, < 3% THD)
  - [x] CAP-05 EPC stepper, line draws on view
  - [x] CAP-06 Split closing "Visit the plant in Noida" ([!] plant exterior photo needs A2)
- [x] **Blog** `/blog`: hidden, 307 redirect to `/resources` (decision §11.6)
- [x] **Applications** `/applications`: redirect to `/industries` kept

## Phase 4 — Interaction polish 🔶

- [x] G2 Mega-menus
- [x] G3 Mobile navigation
- [x] G5 WhatsApp button
- [x] G6 Page transitions
- [x] Reduced-motion support in every new component
- [x] G1 header scroll-state polish, approved 20 Nov: after 24px the bar condenses from 80 to 64px by transform only (no layout shift), logo scales to 90%, translucent white with blur and a soft shadow; 8px hysteresis; instant under reduced motion. "Get quote" now uses the shared `Button`
- [x] Hover audit (M8), approved 20 Nov: image hovers set to scale 1.03 in a clipped frame everywhere (product card, lineup, mega-menu product and photo features, case-study links, industries "typical system"); arrow nudge 4px; underline grow on tertiary links; focus rings all Lith-On Blue. The PDP sizing assistant was rebuilt in the system style (see below)
- [~] Motion tuning pass, done 20 Nov, awaiting review: every page has two scroll experiences at most (home: challenges story + product rail; one elsewhere); off-token durations snapped to tokens (draws 1,200 ms, fades 800 ms, 600 → 500 ms) across 16 components; primitives already used the duration and stagger tokens. One continuous animation remains: the flow dashes in the Technology EMS mode diagram, which design.md permits for a diagram the visitor is using
- [x] PDP sizing assistant rebuilt (20 Nov; owner: looks good): side sheet with radio choices, suggestion from `products.ts` (capacity, power, image), links to the product and the calculator. Removed its invented per-product savings, payback and diesel figures, "100% CAQM GRAP Compliant" and "< 20 ms"; fixed a bug where the result lagged one click behind
- [~] Click feedback (20 Nov, owner report: clicks felt unanswered), awaiting review: `NavigationFeedback` in the root layout. Every internal link click immediately starts a 3px Lith-On Blue bar across the top, dims the clicked link and shows a progress cursor; the bar completes and fades when the new page arrives (10 s safety reset; static bar under reduced motion)
- [x] Phone check of the 20 Nov pages at 375px (no horizontal overflow after a fix on Resources); Financing comparison stacks per model on phones

## Phase 5 — QA and release 🔶

- [ ] Facts: resolve or sign off CLAIMS_REVIEW items 1–20 with the client (needs the client)
- [x] Remove unused legacy components (20 Nov): `components/animation/*`, `components/illustrations/*`, `components/gallery`, `animations/hooks/*`, `animations/{config,easing,presets}.ts`, `SavingsCalculator`, `AttributedTestimonials`, `FactoryVideoReel`, `GlobalExportsShowcase`, `IndustriesInteractiveShowcase`, `SectorHeroCarousel`, `ProductComparison`, `EnergyFlowVisualizer`, `InteractiveBessCutaway`, `ui/{CallToAction,DetailsHashOpener,SectionHeader,AmbientLightCanvas}`, `data/{case-studies,heroScenes,solutions,sectorsHero,industries}.ts`. Kept `data/claims.ts` (the register CLAIMS_REVIEW refers to)
  - [!] Unused images kept until the owner is ready to deploy (decision 20 Nov). About 45 MB with no reference in `src/`: `public/images/hero/` (whole folder, a duplicate of `hero-sec/`), `heroes/`, `sectors/`, `hero-sec/new-bg.*`, `hero-sec/smart_energy_city_*`, `hero-sec/scene-residential.webp`, `industries/residential-sector.webp`, `scenes/industrial-storage.webp`, six `case-studies/*.jpg` (incl. `competitive-moat-tower.jpg`), four `technology/*.jpg`, `factory/test_fac_*`, `installations/test_inst_*` and four other installation JPGs, and 13 old product PNGs (`crop_test_*`, `magna-ci-*`, `lt215-*`, `bess-*-clean.png`, `lithon-50-module.png`, `test-middle-row.png`)
  - [x] Unused npm dependencies uninstalled (20 Nov): `@radix-ui/react-accordion`, `@radix-ui/react-tabs`
- [x] Responsive sweep (20 Nov): all 38 sitemap routes at 1440 / 1024 / 768 / 375 / 320 (320 with reduced motion): no horizontal overflow, no console errors
- [x] Accessibility (20 Nov): one h1 per page, no skipped heading levels, no images without alt, no unnamed links or buttons; keyboard tab-through on 7 key pages shows a visible focus ring on every stop; added the missing `<main>` landmark (was absent site-wide) and a "Skip to content" link; contrast scan fixed two grey-on-surface captions (4.39 → AA)
  - [ ] Screen-reader pass with NVDA or VoiceOver (needs a person)
- [~] Performance: image weights checked (largest source in use ≈ 400 KB, all through `next/image`); JS measurement needs a production build (skipped for now at the owner's request)
- [x] SEO (20 Nov): every indexable page has its own title (≤ 70 chars) and description (≤ 160 chars; 20 shortened); product-page descriptions fall back to a short form; one h1 per page; Organization + LocalBusiness JSON-LD site-wide, Product on product pages, FAQPage on /faqs; sitemap lists 38 routes; robots disallows /api, /design-system; /hero-2 and /design-system are noindex
- [x] Favicon (20 Nov): `src/app/favicon.ico` (16/32/48), `icon.png` (512) and `apple-icon.png` (180) from `data-sources/image.png`, transparent background for browser tabs, white for iOS; manifest icons 192 / 512 / maskable 512; manifest theme colour now white to match the header
- [ ] Cross-browser: Safari (macOS and iOS), Firefox; one real low-powered Android phone (needs devices; only Chromium is available here)
- [ ] Release candidate: `npm run build`, `npx eslint src`, Next.js security upgrade (`next upgrade --agent=security`) (deferred at the owner's request)

---

## Assets wanted (unblock or improve pages)

From [ASSET_BRIEF.md](ASSET_BRIEF.md):
- [ ] A1 High-resolution product cut-outs (catalogue renders are the current stand-in)
- [ ] A2/A3 Plant photography or short video loops (unblocks HOME-06 final and Capabilities)
- [ ] A4 Installed-system photography for Gurugram, the EV hub and an industrial site
- [ ] Layout drawing of a system (subsystem positions) for the TEC-02 scroll-driven exploded view
- [ ] A7 Leadership portraits (optional, About)
- [ ] Landscape commissioning or installation photograph (≥ 2000 px wide) for the Services image hero (SRV-01)
- [ ] Official LinkedIn and YouTube profile URLs (footer)
- [ ] Resend account: API key, a verified sending domain and the sender address for contact form email (`.env.example`)

## Change log

- **25 Nov 2026:** Deck content audit (`docs/DECK_CONTENT_AUDIT.md`): all 129 slides across 8 decks mapped to the 28 routes. Found one site error (EV hub ₹2.41 lakh is the total monthly bill, not the demand charge), two CLAIMS_REVIEW corrections, ten conflicts for the owner, and per-page additions (Residential sector, campus zone map, Invertis facts, SCADA/EMS detail, IceBattery heat retention, full Noida address). No code changed.
- **25 Nov 2026:** Audit corrections applied: EV hub page now shows demand charges ₹96,000 → ₹0 with the bill breakdown; Invertis page gains 500 kW / 2 h backup, 700+ hostel rooms, 140 classrooms, 8 offices and solar export (Corporate Deck p.9); vault, `content/case-studies.md` and CLAIMS_REVIEW items 2, 10 and 13 corrected. Deck content distributed into `src/data/deck-content/` (per-page blocks with deck and slide citations, `ready`/`confirm` status, and an excluded list) for later components.
- **25 Nov 2026:** Deck content implemented for the initial review (Steps 1–10 of `docs/DECK_IMPLEMENTATION_PLAN.md`): full Noida address; RSPL; About mission/vision, merged timeline, 100+ projects; Technology BMS/SCADA/EMS/IceBattery additions and the leftover 10-year warranty stat removed; Solutions diesel facts and DG vs BESS "Site" rows; Industries Residential sector, campus zone map and model, EV detail, "Also suited to"; case-study breakdown tables; product "Where it fits" and e-rickshaw card; sizing form fields; Grid, Financing, Distributor, Sustainability and FAQ additions. Open questions: `docs/OWNER_REVIEW.md` (R1–R19).

- **20 Nov 2026:** Owner review applied. Approved: Grid services, FAQs, Careers, sizing assistant, header scroll state, hovers. Grid services diagrams animated. Financing: lease-rent estimator modelled on lith-onbharat.com/calc, Japanese financing partners and CIBIL line. Warranty now "depends on the product" site-wide (Warranty page reworked; 10-year claims removed from 12 files and all product pages). Legal mailboxes now contact@lith-onbharat.com. Power ratings from the catalogue (Magna-C&I 125 kW, Lith-On-50 48 kW, LT215 110 kW, Max-20HC-5000 2.5 MW). All 12 products plus the home range now in the mega menu, mobile menu, footer and homepage. Catalogue download dialog added. Two unused Radix packages uninstalled. Later the same day: homepage hero replaced by the /hero-2 city tour; click feedback added; domain confirmed as lith-on.com; EMI mode added to the financing estimator (10% down, 5 years, PTPQ rate).

- **20 Nov 2026:** Phase 5: favicon set from `data-sources/image.png`; 29 unused legacy files removed; `<main>` landmark and skip link added; 38-route responsive, accessibility, keyboard and contrast sweep; meta titles and descriptions tightened.
- **20 Nov 2026:** Phase 4 polish: header scroll state (G1), hover audit (M8), motion tuning, PDP sizing assistant rebuilt without invented figures.
- **20 Nov 2026:** Lighter refreshes built: Certifications, Grid services, Financing (with EMI estimator), Resources, FAQs (44 questions), Careers, Distributor (form in hero), Legal. Interim Capabilities built; `SitesSplit` shared with About. CLAIMS_REVIEW items 18–20 added.
- **19 Nov 2026:** Sustainability rebuilt (SUS-01–07); CLAIMS_REVIEW item 17 added.
- **19 Nov 2026:** Warranty and support rebuilt (WAR-01–06).
- **19 Nov 2026:** Services rebuilt (SRV-01–05; SRV-03 interim).
- **19 Nov 2026:** Calculator rebuilt (CAL-01–04); savings engine now follows `content/calculator-data.json`.
- **19 Nov 2026:** Contact rebuilt (CON-01–03), with a real submission route (`/api/contact`).
- **19 Nov 2026:** Why Lith-On rebuilt (WHY-01–06).
- **20 Nov 2026:** About rebuilt (ABT-01–10).
- **20 Nov 2026:** Case studies listing and detail template rebuilt (CS-01–08, CSD-01–04). All 12 catalogue installation photos extracted.
- **19 Nov 2026:** Technology rebuilt (TEC-01–07; TEC-02 interim).
- **19 Nov 2026:** Industries rebuilt (IND-01–05).
- **19 Nov 2026:** Solutions rebuilt (SOL-01–05). Illustrative scene renders from `data-sources` added to `public/images/scenes/`.
- **19 Nov 2026:** Product detail template rebuilt (PDP-01–07) for all 12 products.
- **19 Nov 2026:** Home & small business subsection on `/products` (7 catalogue products, photos from the catalogue); checklist created.
- **18 Nov 2026:** `/products` rebuilt. Four catalogue industrial products added. DG vs BESS and lead-acid vs lithium comparisons added to Solutions and Technology. Phase 2 and the global items completed.
