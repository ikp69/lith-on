# Lith-On website redesign — phase checklist

Living checklist for the experience-first redesign. Updated as each item is built, tested and approved.
Detailed specifications and build records live in [visual-audit/LITHON_VISUAL_UX_MOTION_AUDIT.md](visual-audit/LITHON_VISUAL_UX_MOTION_AUDIT.md) (§5–6 specs, §9.2 build records). Fact questions live in [../CLAIMS_REVIEW.md](../CLAIMS_REVIEW.md).

**Legend:** `[x]` done and approved · `[~]` built, awaiting review · `[ ]` not started · `[!]` blocked (reason given)

**Every page or section is done only when** it follows its spec (or the change is written back to the audit); it uses design-system tokens and components only; it has been checked at 1440 / 1024 / 768 / 375 / 320 plus reduced motion and no JavaScript; it has no overflow and no console errors; `npx eslint src`, `tsc` and `npm run build` pass; and no fact was invented or changed (audit §9.3).

_Last updated: 19 November 2026_

---

## Progress at a glance

| Phase | Status | Done |
|---|---|---|
| 1 Foundation | ✅ Complete | 12 / 12 |
| 2 Homepage and global | ✅ Complete | 14 / 14 |
| 3 Internal pages | 🔶 In progress | 8 / 24 pages built (awaiting review) |
| 4 Interaction polish | 🔶 Mostly done early | 5 / 8 |
| 5 QA and release | ⬜ Not started | 0 / 9 |

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
- [x] HOME-01 Hero (switchable scenes, BESS shelter)
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
- [ ] **Why Lith-On** `/why-lith-on`
  - [ ] WHY-01 Hero · [ ] WHY-02 Seven moats · [ ] WHY-03 Evidence · [ ] WHY-04 Trifecta · [ ] WHY-05 Time to replicate · [ ] WHY-06 Closing
- [ ] **Contact** `/contact`
  - [ ] CON-01 Hero, tabs and form · [ ] CON-02 Offices · [ ] CON-03 Fraud notice

### Mid-size pages
- [ ] **Calculator** `/calculator`: CAL-01 Hero · CAL-02 Calculator · CAL-03 Methodology · CAL-04 Closing
- [ ] **Services** `/services`: SRV-01 Hero · SRV-02 Delivery phases · SRV-03 Support plans · SRV-04 Coverage · SRV-05 Closing
- [ ] **Warranty and support** `/warranty-and-support`: WAR-01 Hero · WAR-02 At a glance · WAR-03 Telemetry · WAR-04 SLAs · WAR-05/06 Contacts and closing
- [ ] **Sustainability** `/sustainability`: SUS-01 Hero · SUS-02 Counters · SUS-03 Cost of diesel · SUS-04 Comparison table · SUS-05/06 GRAP, solar, lifecycle · SUS-07 Closing

### Lighter refreshes
- [ ] **Certifications** `/certifications`: CRT-01 Hero · CRT-02 Standards · CRT-03 Documents · CRT-04 Request
- [ ] **Grid services** `/grid-services`: GRD-01 Hero · GRD-02 Six services · GRD-03 Closing
- [ ] **Financing** `/financing`: FIN-01 Hero · FIN-02 Models · FIN-03 EMI calculator CTA · FIN-04/05 Partners and closing
- [ ] **Resources** `/resources`: RES-01/02 Hero and catalogue · RES-03 Datasheets · RES-04 Articles · RES-05 FAQ link
- [ ] **FAQs** `/faqs`: FAQ-01/02 Hero and filters · FAQ-03 Questions · FAQ-04 Closing
- [ ] **Careers** `/careers`: CAR-01 Hero · CAR-02 Fraud notice · CAR-03 Roles · CAR-04 Spontaneous applications
- [ ] **Distributor** `/distributor`: DIS-01 Hero · DIS-02 Benefits · DIS-03 Who can apply and form
- [ ] **Legal** `/privacy-policy`, `/terms-and-conditions`: LEG-01 Hero and body (retain; typography pass only)

### Blocked or done by decision
- [!] **Capabilities** `/capabilities`: CAP-01 to CAP-06. Blocked on plant photography (A2, A3); an interim version like HOME-06 is possible.
- [x] **Blog** `/blog`: hidden, 307 redirect to `/resources` (decision §11.6)
- [x] **Applications** `/applications`: redirect to `/industries` kept

## Phase 4 — Interaction polish 🔶

- [x] G2 Mega-menus
- [x] G3 Mobile navigation
- [x] G5 WhatsApp button
- [x] G6 Page transitions
- [x] Reduced-motion support in every new component
- [ ] G1 header scroll-state polish (condensed height and shadow on scroll)
- [ ] Hover audit across all redesigned pages (M8 consistency)
- [ ] Motion tuning pass (durations, stagger, two scroll experiences per page at most)

## Phase 5 — QA and release ⬜

- [ ] Facts: resolve or sign off CLAIMS_REVIEW items 1–16 with the client
- [ ] Remove unused legacy components (now also `GlobalExportsShowcase`, `InstallationGallery`, `PanIndiaMap`, `IceBatteryThermal`, `Sub10msWaveform`, `InteractiveBessCutaway`, `EnergyFlowVisualizer`, `DetailsHashOpener`, `ProductComparison`; audit §7: `components/animation/*`, `SectorHeroCarousel`, `IndustriesInteractiveShowcase`, `FactoryVideoReel`, `AttributedTestimonials`, `ProductComparison`, and others)
- [ ] Responsive sweep of every route at 320–1440+
- [ ] Accessibility: keyboard pass, screen-reader pass of headings and landmarks, contrast, focus states
- [ ] Performance: phone LCP ≤ 2.5 s, CLS ≤ 0.1, reduce site-wide JavaScript (TBT 1–2 s noted on phones), image weights
- [ ] SEO: titles and descriptions per page, one h1, JSON-LD (Organization, LocalBusiness), sitemap and robots
- [ ] Favicon 404 fix and manifest check
- [ ] Cross-browser: Safari (macOS and iOS), Firefox; one real low-powered Android phone
- [ ] Release candidate: `npm run build`, `npx eslint src`, Next.js security upgrade (`next upgrade --agent=security`)

---

## Assets wanted (unblock or improve pages)

From [ASSET_BRIEF.md](ASSET_BRIEF.md):
- [ ] A1 High-resolution product cut-outs (catalogue renders are the current stand-in)
- [ ] A2/A3 Plant photography or short video loops (unblocks HOME-06 final and Capabilities)
- [ ] A4 Installed-system photography for Gurugram, the EV hub and an industrial site
- [ ] Layout drawing of a system (subsystem positions) for the TEC-02 scroll-driven exploded view
- [ ] A7 Leadership portraits (optional, About)
- [ ] Official LinkedIn and YouTube profile URLs (footer)

## Change log

- **20 Nov 2026:** About rebuilt (ABT-01–10).
- **20 Nov 2026:** Case studies listing and detail template rebuilt (CS-01–08, CSD-01–04). All 12 catalogue installation photos extracted.
- **19 Nov 2026:** Technology rebuilt (TEC-01–07; TEC-02 interim).
- **19 Nov 2026:** Industries rebuilt (IND-01–05).
- **19 Nov 2026:** Solutions rebuilt (SOL-01–05). Illustrative scene renders from `data-sources` added to `public/images/scenes/`.
- **19 Nov 2026:** Product detail template rebuilt (PDP-01–07) for all 12 products.
- **19 Nov 2026:** Home & small business subsection on `/products` (7 catalogue products, photos from the catalogue); checklist created.
- **18 Nov 2026:** `/products` rebuilt. Four catalogue industrial products added. DG vs BESS and lead-acid vs lithium comparisons added to Solutions and Technology. Phase 2 and the global items completed.
