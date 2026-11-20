# Lith-On Visual, UX & Motion Audit

**Date:** 17 November 2026
**Scope:** every route in `src/app` (26 pages, 129 captured sections), plus the global header, navigation and footer.
**Method:** each page was rendered at 1440 × 900 (desktop) and 375 × 812 (phone). Each top-level section was captured as its own screenshot in [`screens/`](screens/), and its height, word count, images and controls were measured (Appendix A). Every section was reviewed by eye and traced to the file that builds it.

**What this document is for:** it is the working plan for the redesign. Work through it section by section. A section is finished when it meets its definition of done (§9), not when it merely works.

**What it is not:** a content or fact review. That work continues separately in [`CLAIMS_REVIEW.md`](../../CLAIMS_REVIEW.md) (§10). Nothing here changes a fact, figure or claim.

### How to read the verdicts

| Verdict | Meaning |
|---|---|
| **Retain** | Keep the structure. Apply the new design system only. |
| **Improve** | Keep the content and purpose. Rebuild the composition, components and motion. |
| **Redesign** | Same job, new concept. |
| **Merge** | Fold into another section; it duplicates content. |
| **Remove** | Delete; it adds length without adding anything. |

Priority: **P0** first impression or conversion-critical · **P1** core storytelling · **P2** supporting · **P3** utility and legal.

---

## Contents

1. [Diagnosis: what is wrong across the whole site](#1-diagnosis)
2. [Design system (Phase 1)](#2-design-system)
3. [Motion and interaction system](#3-motion-and-interaction-system)
4. [Global chrome: header, navigation, footer](#4-global-chrome)
5. [Homepage, section by section](#5-homepage)
6. [Internal pages, section by section](#6-internal-pages)
7. [Component library: what to keep, build and delete](#7-component-library)
8. [Asset requirements](#8-asset-requirements)
9. [Master tracker and definition of done](#9-master-tracker)
10. [Parallel workstream: content and facts](#10-parallel-workstream)
11. [Decisions needed before Phase 2](#11-decisions-needed)
- [Appendix A: measured section inventory](#appendix-a)

---

<a id="1-diagnosis"></a>
## 1. Diagnosis: what is wrong across the whole site

The site is clean, consistent and on-brand in colour. Its problem is that it is built from one section template repeated across most of its 129 sections, almost without imagery or motion. The result reads as an assembled document, not a designed product. Nine patterns cause most of this.

### 1.1 One section template, everywhere

Nearly every section is the same five parts in the same order: a small tinted pill ("eyebrow"), a two-line headline with the second line in bold blue, a grey paragraph on the right, a grid of bordered cards, and a link. Examples: [home 02](screens/home/02-d.jpg), [home 04](screens/home/04-d.jpg), [about 05](screens/about/05-d.jpg), [why-lith-on 03](screens/why-lith-on/03-d.jpg), [capabilities 03](screens/capabilities/03-d.jpg), [sustainability 03](screens/sustainability/03-d.jpg). Because every section looks equally important, nothing looks important.

### 1.2 Every inner page opens the same way

22 of 25 inner pages open with a text-only hero on off-white: breadcrumb, two-tone headline, a 40-word paragraph, sometimes pill chips. No image, no product, no visual idea. See [about 01](screens/about/01-d.jpg), [solutions 01](screens/solutions/01-d.jpg), [industries 01](screens/industries/01-d.jpg), [case-studies 01](screens/case-studies/01-d.jpg), [technology 01](screens/technology/01-d.jpg), [products 01](screens/products/01-d.jpg). A visitor cannot tell pages apart at a glance.

### 1.3 Every page closes the same way

About 20 pages end with the same rounded blue band ("Ready to…?", red button, phone button), immediately followed by the footer. On [solutions 05](screens/solutions/05-d.jpg), [industries 05](screens/industries/05-d.jpg), [technology 07](screens/technology/07-d.jpg) and others it is the single strongest element on the page, which makes the ending louder than the content. design.md allows a dark surface only as a deliberate exception; repeated on every page it is the default.

### 1.4 Cards for everything

Content is almost always boxed: rounded-2xl border, icon in a coin, title, small text, grid of 3, 4 or 6. The six firmware modes on [technology 05](screens/technology/05-d.jpg), the six moats on [why-lith-on 03](screens/why-lith-on/03-d.jpg), the six manufacturing steps on [capabilities 03](screens/capabilities/03-d.jpg), the four values on [about 09](screens/about/09-d.jpg), the four partner benefits on [distributor 02](screens/distributor/02-d.jpg). Cards flatten hierarchy and make the site feel like a template.

### 1.5 Typography is small, dense and over-styled

- Body copy is mostly 12–14px (`text-xs` / `text-sm`) at 1440. Section text reads as captions.
- Monospace is used for labels, figures and model codes on nearly every page, which makes numbers look like code.
- The two-tone headline (light + bold blue) appears on almost every heading, so it no longer signals anything.
- Heading sizes are timid: section heads render around 30px under a 60px hero head, so the scale has two steps, not five.

### 1.6 Imagery is thin, small and partly unsuitable

- The asset library is small and reused: the same cabinet render, the same four factory crops and the same container appear on several pages.
- Most product images are tiny source files (e.g. `magna-ci-clean-hd.png` is 295 × 185px, factory crops are 200–444px wide). They cannot be shown large without going soft, which is why they sit in small cards.
- Several "photos" are AI renders or brochure infographics with baked-in text (`bess-3d-cutaway.jpg`, `competitive-moat-tower.jpg`, `diesel-vs-bess-comparison.jpg`, `icebattery-thermodynamics.jpg`). Baked text cannot be read on phones and cannot be translated or edited.
- The LT215 image shows a non-Lith-On logo. (Logged in CLAIMS_REVIEW.)

Imagery is the single biggest constraint on how good the redesign can be. See §8.

### 1.7 Almost no motion

GSAP, `@gsap/react` and `motion` are installed, and `src/animations/` already defines durations, easings, presets and hooks. But only 3 files in pages or components use any of it. Four of the five animation primitives in `src/components/animation/` (`Reveal`, `TextReveal`, `AnimatedCounter`, `ParallaxImage`) are not used anywhere. All existing interactivity is tabs and accordions. There is no scroll storytelling, no reveal rhythm, no meaningful hover, and no page transition.

### 1.8 Text does the work pictures should do

Pages explain rather than show. The Solutions blocks carry 150–250 words each; Grid Services is six 120-word blocks with spec lists; Technology spends paragraphs on what an animated diagram could show in five seconds. Hallmark's density check flags 8 of 8 measured pages at 165–286 words per 900px screen against a target of about 80.

### 1.9 Component sprawl

14 components are not used anywhere (§7), including three earlier hero designs. `SectionHeader` exists but only 6 sections use it; the rest hand-roll the same eyebrow-plus-headline markup with small differences. Buttons come in at least six recipes (`.btn-primary`, inline red pills, blue rectangles, `rounded-xl` blue, outline pills, text links with glued arrows).

### What already works and should stay

- The colour discipline: light canvas, red for action, blue for engineering. Keep it.
- Manrope. Keep it, use it with more range.
- The interactive diagrams on Technology (oscilloscope, energy flow, IceBattery comparison). The ideas are right; they need to be bigger, simpler and animated on scroll.
- The product spec table on the product detail page ([magna-ci 05](screens/products__magna-ci/05-d.jpg)): clear, scannable, honest. Retain.
- The 4-step contact form ([contact full](screens/contact/full-d.jpg)): good structure.
- Accessibility work done so far: focus rings, contrast, sentence-case labels, reduced-motion fallbacks.

---

<a id="2-design-system"></a>
## 2. Design system (Phase 1)

Build this first, as tokens and components, before any section is redesigned. Every section in §5 and §6 is specified in terms of it, so the site ends up with one language, not twenty.

design.md stays the locked brand system (light-first, red and blue as accents, Manrope). This section extends it; where it changes design.md, §11 lists the decision.

### 2.1 Principles

1. **One idea per section.** Each section has one job and one hero element. If two things compete, one moves.
2. **Show, then tell.** Lead with the product, the place, the number or the diagram. Text supports it.
3. **Scale creates hierarchy.** Big type and big imagery, not more boxes.
4. **Rhythm, not repetition.** Consecutive sections use different compositions (§2.6).
5. **Motion explains.** An animation must reveal structure, show a process or confirm an action. Decoration is cut.
6. **Every page is recognisable** from its first screen alone.

### 2.2 Typography

Manrope throughout (already loaded). Use two weights for display (300 light, 500 medium) and two for text (400, 600). Monospace is reserved for model codes and true tabular data inside spec tables.

| Token | Desktop | Phone | Weight | Line height | Use |
|---|---|---|---|---|---|
| `display-xl` | 88px | 44px | 300 | 0.98 | Homepage hero only |
| `display-l` | 64px | 36px | 300 | 1.02 | Inner page heroes |
| `heading-1` | 48px | 30px | 400 | 1.08 | Section heads |
| `heading-2` | 32px | 24px | 500 | 1.15 | Sub-sections, card titles in feature layouts |
| `heading-3` | 22px | 19px | 500 | 1.25 | Item titles |
| `lead` | 20px | 17px | 400 | 1.55 | One-sentence section intros |
| `body` | 17px | 16px | 400 | 1.65 | Running text (replaces most `text-xs`/`text-sm`) |
| `small` | 14px | 14px | 400 | 1.5 | Captions, metadata |
| `label` | 13px | 13px | 600 | 1.3 | Labels, tabs, tags (sentence case) |
| `stat-xl` | 120px | 64px | 300 | 0.9 | Hero statistics, tabular figures |
| `stat-l` | 64px | 40px | 300 | 1 | Inline statistics |

Rules: headlines ≤ 7 words where possible; the blue second line is used at most once per page, for the page's main statement; numbers use Manrope with `font-variant-numeric: tabular-nums`, not monospace.

### 2.3 Colour roles

Keep design.md's palette. Add roles so usage is predictable:

| Role | Value | Use |
|---|---|---|
| `canvas` | #FFFFFF | Default section surface |
| `canvas-warm` | #FAFAF8 | Alternate section surface, inner heroes |
| `surface` | #F3F4F6 | Spec tables, inputs, media frames behind cut-out products |
| `ink` | #111827 | Headlines, primary text |
| `ink-2` | #4B5563 | Body |
| `ink-3` | #6B7280 | Metadata (lightest allowed on light surfaces) |
| `line` | #E5E7EB | Hairlines |
| `accent-red` | #F74530 / ink #C2301E | Primary action, live state, one key figure per section |
| `accent-blue` | #0B3388 | Links, technical highlights, selected states |
| `stage-dark` | #0E1116 | **Proposed** single deep photographic band per page (decision §11.2) |

No gradients except image scrims (black to transparent, ≤ 60%) on photographs carrying text.

### 2.4 Space, grid and containers

- 8px base scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
- Section padding: 128px desktop / 72px phone by default; 160px before and after a statement section; 96px between tightly related sections. Vary it (Principle 4).
- 12-column grid, 24px gutters (16px phone), container capped at 1360px; full-bleed media breaks out of the container on purpose.
- One radius per level: 20px for large media and panels, 12px for controls and small cards, full-round for buttons and tags only.

### 2.5 Core components

Each is built once in `src/components/ui/` (or `system/`) and used everywhere.

| Component | Replaces | Notes |
|---|---|---|
| `PageHero` (4 variants) | 22 hand-built text heroes | **Product** (cut-out product on a stage), **Image** (full-bleed photo, text on scrim), **Editorial** (big statement + supporting visual), **Utility** (compact, for legal/forms). Each page picks one. |
| `SectionIntro` | eyebrow pill + two-tone head + paragraph | Headline + optional one-sentence lead. No pill. Left-aligned by default. |
| `Button` | ~6 recipes | `primary` (red ink), `secondary` (ink outline), `tertiary` (text + arrow icon with spacing). 48px tall, 8 states. |
| `Stat` / `StatBand` | mono metric tiles | Number, unit, label, source line; optional count-up. |
| `MediaFrame` | ad-hoc image boxes | Aspect-ratio frame with caption, optional parallax and reveal; handles cut-outs on `surface`. |
| `BentoGrid` | 3/4/6-card grids | Asymmetric 12-col tiles (one large, several small). |
| `ScrollStory` | tab switchers | Pinned media + scrolling chapters (desktop); stacked on phone. |
| `HorizontalRail` | swipe rows built per page | Drag/scroll rail with snap, progress indicator, keyboard support. |
| `SpecTable` | several tables | Responsive; stacks rows on phones. |
| `ProductCard` | 3 versions | One card: large product image, capacity as headline figure, two specs, link. |
| `CaseCard` | 3 versions | Photo-led, one headline saving, three metrics. |
| `Accordion` | details + Radix mixes | One implementation (Radix) with hash-open support. |
| `ClosingCTA` (3 variants) | identical blue band | **Statement** (large type, light), **Split** (image + form entry), **Inline** (one line + button). Rotate by page; the dark band only where §11.2 allows. |
| `Tag` | assorted pills | 13px, sentence case, used only for real categories. |

### 2.6 Composition palette

To stop consecutive sections looking alike, every section uses one of these. No page may use the same one twice in a row.

Statement (one large line of type) · Split asymmetric (5/7) · Full-bleed image with overlay · Bento · Scroll story (pinned) · Horizontal rail · Stat band · Editorial list (hairline rows, no boxes) · Spec table · Interactive diagram.

### 2.7 Imagery rules

- Every product appears as a high-resolution cut-out on `surface`, or in a real installed setting. Never small.
- One photograph per section at most; never two photo-led sections in a row.
- Infographics with baked-in text are retired; their content is rebuilt as live HTML/SVG diagrams.
- Renders are allowed only where labelled or clearly illustrative (decision §11.3).
- Treatment: natural daylight, no colour grading or tints, gentle 4% scrim only under text.

---

<a id="3-motion-and-interaction-system"></a>
## 3. Motion and interaction system

### 3.1 Libraries

| Library | Status | Use |
|---|---|---|
| **GSAP + ScrollTrigger** (`gsap`, `@gsap/react`) | Installed | Pinned scroll stories, horizontal rails driven by scroll, scrubbed timelines, count-ups. |
| **Motion** (`motion`) | Installed | Component state transitions: tabs, accordions, menus, hover, layout changes, presence. |
| **Lenis** | Not installed; recommended | Smooth scroll that keeps ScrollTrigger in sync. ~4 KB. Decision §11.4. |
| **Three.js / R3F** | Not recommended now | Only if a real product 3D model (CAD/GLB) is supplied. Without it, 3D would mean inventing hardware, which AGENTS.md forbids. |
| **Lottie** | Not recommended | Diagrams are better as live SVG driven by GSAP (editable, crisp, accessible). |
| React Bits / Magic UI | Not recommended | Pattern references only; copying their components adds a second visual language. |

Rule: no new dependency beyond Lenis without a section in this document that needs it.

### 3.2 Motion tokens

The existing tokens in `src/animations/config.ts` and `easing.ts` stay and become the only source:

| Token | Value | Use |
|---|---|---|
| `fast` | 250ms | Hover, press, focus |
| `standard` | 500ms | Tabs, accordions, small reveals |
| `relaxed` | 800ms | Section entrances |
| `deliberate` | 1200ms | Count-ups, hero load sequence |
| Ease out | `expo.out` / `cubic-bezier(0.16,1,0.3,1)` | Entrances |
| Ease in-out | `power3.inOut` | Scrubbed and pinned sequences |
| Stagger | 60ms (text lines), 90ms (items) | |
| Distance | 24px (items), 40px (headlines) | |

### 3.3 Motion patterns (the only ones allowed)

| Pattern | What it does | Where |
|---|---|---|
| **M1 Reveal** | Fade + 24px rise on entering view, once | Default for section intros and items; ≤1 per section |
| **M2 Line reveal** | Headline lines rise from a clipped mask, staggered | Hero and statement headlines only |
| **M3 Count-up** | Numbers count from 0 with tabular figures | Stat bands, case-study savings |
| **M4 Scroll story** | Media pins; chapters scroll past; media crossfades or clip-wipes per chapter | Solutions, homepage challenges, technology explainers |
| **M5 Scroll rail** | Vertical scroll drives a horizontal track (desktop); native swipe on phones | Products, manufacturing stages, case studies |
| **M6 Parallax media** | Image moves 8–15% slower than the page inside its frame | Full-bleed photos only |
| **M7 Diagram draw** | SVG strokes and values animate when in view (waveform, energy flow, thermal) | Technology, homepage bento |
| **M8 Hover** | Image scale 1.03 inside a clipped frame, arrow nudge 4px, underline grow; transform/opacity only | Cards, links, rails |
| **M9 Page transition** | 300ms fade + 12px rise of the main element between routes | Global (decision §11.5) |

### 3.4 Accessibility and performance rules

- `prefers-reduced-motion`: M1/M2 become instant; M4/M5 become normal stacked/swipe layouts; M3 shows final numbers; M6 and M9 are off.
- All content is visible and readable with JavaScript disabled; motion only enhances.
- Animate `transform` and `opacity` only. No layout properties.
- Pinned sections never trap keyboard or screen-reader focus; every chapter is reachable in DOM order.
- Budgets: no long task over 50ms during scroll; CLS 0; LCP under 2.5s on 4G phone; animated sections lazy-initialise when within one viewport.
- Hover-only information must also be reachable by focus and on touch.

---

<a id="4-global-chrome"></a>
## 4. Global chrome

| ID | Element | Screens | Current | Problems | Proposal | Motion | Verdict / Priority |
|---|---|---|---|---|---|---|---|
| G1 | Header (desktop) | [header-d](screens/_global/header-d.jpg) | Logo, 7 menu items with chevrons, phone number, red "Get Quote". | Seven equal items crowd the bar; phone number competes with the CTA; no scroll state. | 5 items (Products, Solutions, Industries, Technology, Company); phone moves into the menu; header becomes compact and translucent after 80px of scroll. | Height and background transition 250ms; hide on scroll down, show on scroll up. | Improve · P0 |
| G2 | Mega-menus | [nav-open-d](screens/_global/nav-open-d.jpg) | Narrow text dropdown: title + one-line description. | Reads like a sitemap; no product imagery; nothing to tempt a click. | Full-width panels: **Products** shows the four families with cut-outs and capacity; **Solutions/Industries** shows a list plus one featured image that changes on hover; **Company** groups About, Manufacturing, Careers. | Panel fade + 8px drop 250ms; image crossfade on item hover. | Redesign · P1 |
| G3 | Mobile navigation | [nav-open-m](screens/_global/nav-open-m.jpg), [header-m](screens/_global/header-m.jpg) | Drawer with expandable groups. | Functional but plain; CTA not anchored. | Full-screen sheet, large type rows, sticky "Request sizing" button at the bottom, phone and WhatsApp as secondary actions. | Sheet slides in 400ms; rows stagger 40ms. | Improve · P1 |
| G4 | Footer | [footer-d](screens/_global/footer-d.jpg), [footer-m](screens/_global/footer-m.jpg) | 5-column link grid (35 links), offices, cert badges, "Ask AI" prompt, legal row, "Autonomous AI Agent & LLM Indexable" line. | Dense directory; weak ending; public-facing internal note; `footer-cityscape.jpg` exists but unused. | Two parts: a closing stage (large statement + primary CTA, light, optionally over the cityscape illustration) then a calm 4-column footer with ~20 links, offices, legal. Drop the internal "LLM indexable" line. | Statement line reveal (M2) as the footer enters. | Redesign · P1 |
| G5 | Floating WhatsApp button | — | Green circle, pulses, appears after one screen. | Pulse draws the eye on every page; green clashes with brand. | Smaller, neutral (ink) button with WhatsApp glyph; no pulse; hides while the footer CTA is visible. | Fade in 250ms. | Improve · P2 |
| G6 | Page transitions | — | None; hard cut. | Feels like separate documents. | M9 on route change. | M9 | New · P2 |
| G7 | Breadcrumbs | (every inner hero) | Small blue text above headline. | Fine; part of the template look. | Keep, move into `PageHero`, 14px `ink-3`. | — | Retain · P3 |

---

<a id="5-homepage"></a>
## 5. Homepage, section by section

File: [src/app/page.tsx](../../src/app/page.tsx). 8 sections; 11,545px on phone (14.2 screens).

Proposed homepage narrative (one composition per section, no repeats):

`Hero (stage)` → `Proof (stat band)` → `Challenges (scroll story)` → `Products (rail)` → `Engineering (bento + live diagrams)` → `Made in Noida (horizontal assembly line)` → `Results (editorial case)` → `Closing stage → footer`

### HOME-01 Hero
- **Screens:** [desktop](screens/home/01-d.jpg) · [phone](screens/home/01-m.jpg) · **Code:** `components/hero/smart-city/SmartCityHero.tsx`
- **Current:** an inset rounded card containing an AI factory scene with the cabinet render; 4-line headline; 45-word paragraph; two buttons; a sector stat card; 6 floating chips (plant, throughput, deployed, GRAP, kWh, cutover, IceBattery); a sector selector row at the bottom.
- **Problems:** framed as a widget inside the page, not a stage; about 12 elements compete; the headline is four lines; the paragraph is three sentences; chips duplicate the stats section below; the sector selector only swaps a small text card; on phones the stat card is cramped and the scene shrinks to a strip.
- **Proposal:** full-bleed stage, edge to edge. The cabinet is the hero object, large and anchored lower-right. Headline ≤ 7 words on 2 lines, one sentence, two buttons. All chips removed (the stats move to HOME-02). The sector selector becomes a real scene switch: choosing Manufacturing / Commercial / Healthcare / Campus crossfades the environment behind the same cabinet (the `scene-*.webp` backgrounds and `bess-shelter-anchor.webp` already exist for exactly this, used by the unused `HeroPinnedSection`). On scroll, the cabinet stays pinned briefly while the stage scales back into the page, handing off to HOME-02.
- **Components:** `PageHero/Product`, `Button`, `SceneSwitch` (new).
- **Motion:** load: background fades in, headline M2, cabinet rises 40px (1.2s); scene switch: 600ms crossfade, cabinet static; scroll: stage scale 1 → 0.94 with rounded corners appearing, scrubbed over 40% of a viewport.
- **Assets:** ideally a real photograph of a Lith-On cabinet on site; until then the existing scene renders (decision §11.3). Cabinet cut-out at ≥ 2400px.
- **Responsive:** phone: headline over the top third, cabinet bottom, scene switch becomes a horizontal chip rail; no pin on phones.
- **Verdict / priority:** Redesign · P0

### HOME-02 Proof (credibility stats)
- **Screens:** [desktop](screens/home/02-d.jpg) · [phone](screens/home/02-m.jpg) · **Code:** `components/home/CredibilityCounterStrip.tsx`
- **Current:** bordered card; eyebrow; "Industrial Scale. Measured Proof."; five mono stat columns with icon coins and "01 / 05" counters; a ticker footer with telemetry text.
- **Problems:** card inside a section; mono numerals; numbering and icons add noise; boilerplate headline; tiny supporting text.
- **Proposal:** open stat band on `canvas-warm`, no card and no heading (the numbers are the heading). Five figures in `stat-xl` light weight with tabular numerals, separated by hairlines; one short label each; source line in `small`. 250 MWh is the lead figure (largest).
- **Components:** `StatBand`.
- **Motion:** M3 count-up on entry, 1.2s, staggered 90ms; hairlines draw left to right.
- **Responsive:** phone: 2 × 2 grid plus the lead figure full width above.
- **Verdict / priority:** Improve · P1

### HOME-03 Challenges (solutions)
- **Screens:** [desktop](screens/home/03-d.jpg) · [phone](screens/home/03-m.jpg) · **Code:** `components/home/AnimatedSolutionsShowcase.tsx`
- **Current:** four tab cards (Diesel replacement, Peak shaving, UPS backup, Solar shifting) above a split card with problem/solution text, checklist, metric and an AI factory image.
- **Problems:** tabs styled as cards; one image for four stories; ~180 words; the outcome metric is styled as mono red text.
- **Proposal:** scroll story. Left: a pinned media frame. Right: four chapters scroll past, each with the challenge in one line, the outcome as a `stat-l` figure, and one link. As each chapter becomes active, the media crossfades to that application (and on Peak shaving, a small live load-curve SVG flattens).
- **Components:** `ScrollStory`, `MediaFrame`, `Stat`.
- **Motion:** M4 (pin for 4 × 70vh, clip-wipe between images), M7 for the load curve.
- **Assets:** four application images (generator yard, factory load, hospital/data room, rooftop solar with storage). See §8.
- **Responsive:** phone: four stacked chapters, each with its own image; no pinning.
- **Verdict / priority:** Redesign · P0

### HOME-04 Products
- **Screens:** [desktop](screens/home/04-d.jpg) · [phone](screens/home/04-m.jpg) · **Code:** `components/home/ProductHorizontalShowcase.tsx`
- **Current:** four selector cards with small product images and "Select to Compare", then a detail panel repeating the selected product with specs and two buttons.
- **Problems:** the same product shown twice; "compare" promises something that doesn't exist; images are small because the files are small; spec text in mono.
- **Proposal:** a product rail on a light stage. Each product: a large cut-out, the capacity as the headline figure (48 kWh … 5 MWh), the family name, two specs and "View product". Signature element: a single capacity axis runs under the rail (48 kWh → 260 kWh → 215 kWh → 5 MWh, log-scaled) so the range of the family reads at a glance.
- **Components:** `HorizontalRail`, `ProductCard`.
- **Motion:** M5 on desktop (vertical scroll drives the rail, pinned for one viewport), M8 hover (product lifts 8px, specs fade up); axis marker follows the active product.
- **Assets:** high-resolution cut-outs of all four products (current files are 295–560px wide); a correct LT215 image.
- **Responsive:** native swipe with snap; axis below as a progress bar.
- **Verdict / priority:** Redesign · P0

### HOME-05 Engineering
- **Screens:** [desktop](screens/home/05-d.jpg) · [phone](screens/home/05-m.jpg) · **Code:** `components/home/BessArchitectureShowcase.tsx`
- **Current:** a banner image (cutaway render with baked text) and four equal feature cards (IceBattery, LFP, sub-10ms, fire safety) with ~280 words.
- **Problems:** four equal cards; long text; render with baked-in labels.
- **Proposal:** bento. One large tile: IceBattery live comparison (two cabinets side by side, internal temperature counting to 38°C vs a hotter bare-steel figure only if sourced; otherwise show the 15–30°C reduction as the animated label). Three smaller tiles: a sub-10ms waveform that draws the cutover; LFP cell stack with cycle figure; fire safety layers. Each tile one figure, one line, a link to Technology.
- **Components:** `BentoGrid`; reuse logic from `IceBatteryThermal` and `Sub10msWaveform` at smaller scale.
- **Motion:** M7 when each tile enters; M8 on hover.
- **Responsive:** phone: one column, the large tile first.
- **Verdict / priority:** Redesign · P1

### HOME-06 Made in Noida (manufacturing)
- **Screens:** [desktop](screens/home/06-d.jpg) · [phone](screens/home/06-m.jpg) · **Code:** `components/home/ManufacturingInteractiveJourney.tsx`
- **Current:** four stage tabs, a cropped factory photo, text and checklist.
- **Problems:** photos are 200–444px wide crops from a brochure; tabs again; text-led.
- **Proposal:** a horizontal "assembly line": four large photographic panels (cell grading → welding → cabinet assembly → testing) move sideways as the page scrolls, with a progress line and stage numbers. One sentence per stage. Ends on a link to Capabilities.
- **Components:** `HorizontalRail`, `MediaFrame`.
- **Motion:** M5, M6 inside each panel.
- **Assets:** **blocked** on real, high-resolution plant photography or short video loops (§8). Interim: keep the current layout with the new system applied.
- **Verdict / priority:** Redesign · P1 (asset-blocked)

### HOME-07 Results (case studies)
- **Screens:** [desktop](screens/home/07-d.jpg) · [phone](screens/home/07-m.jpg) · **Code:** `components/home/CaseStudiesDataStorytelling.tsx`
- **Current:** one featured case card (photo, problem/solution text, 4 metrics, savings footer) beside a list of two more; a chip strip of institutions.
- **Problems:** card styling; text-heavy; low-resolution photo; institutions shown as chips with dots.
- **Proposal:** editorial feature. Full-width photograph of the Invertis installation with the annual saving (₹2.26 Cr) set very large over a scrim, and three metrics beneath. To the right (or below on phones), the other two case studies as hairline rows that show a thumbnail on hover. Institutions set as a quiet typographic row: "Deployed for Indian Army · NTPC · RVUNL · PwC".
- **Components:** `CaseCard/feature`, editorial list.
- **Motion:** M6 on the photo, M3 on the saving, M8 on list rows.
- **Assets:** high-resolution Invertis site photo.
- **Verdict / priority:** Improve · P1

### HOME-08 Closing
- **Screens:** [desktop](screens/home/08-d.jpg) · [phone](screens/home/08-m.jpg) · **Code:** `components/home/CinematicClosingCta.tsx`
- **Current:** 4-line heading, paragraph, three track cards (sizing, schematics, distribution) with buttons, contact line.
- **Problems:** another 3-card grid immediately before a 5-column footer.
- **Proposal:** merge with the new footer closing stage (G4): one statement ("Size your system with our Noida engineers"), the red primary action, and the three tracks as a single row of text links.
- **Components:** `ClosingCTA/statement`.
- **Motion:** M2 on the statement.
- **Verdict / priority:** Merge into G4 · P1

---

<a id="6-internal-pages"></a>
## 6. Internal pages, section by section

Each page lists its hero variant and composition sequence, then every section. Screens: `D` desktop, `M` phone.

### 6.1 Products — `/products` · [src/app/products/page.tsx](../../src/app/products/page.tsx)
Hero: **Product** · Sequence: Product hero → Family rail → Comparison table → Inline CTA

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| PRD-01 | Hero | [D](screens/products/01-d.jpg) [M](screens/products/01-m.jpg) | Text-only; three competing buttons (Browse, Sizing assistant, E-catalogue). | Four family cut-outs arranged as a lineup by size on a stage; headline; one primary action; catalogue as a text link. | Lineup rises in sequence (M1, 90ms stagger). | Redesign · P0 |
| PRD-02 | Catalogue | [D](screens/products/02-d.jpg) [M](screens/products/02-m.jpg) | 3,400px of equal cards with mono specs; filter pills look like tags. | Family-grouped `ProductCard`s with large imagery; segmented filter; add back a compact **comparison table** (desktop) since buyers compare. | M8 hover; filter uses Motion layout animation. | Redesign · P0 |
| PRD-03 | Cutaway link | [D](screens/products/03-d.jpg) | Thin band. | Fold into PRD-02 as a single "See inside" card with a cutaway thumbnail. | — | Merge · P2 |
| PRD-04 | Closing | [D](screens/products/04-d.jpg) | Standard blue band. | `ClosingCTA/split`: custom pack engineering, with a photo of pack assembly. | — | Improve · P2 |

### 6.2 Product detail — `/products/[slug]` (8 pages) · [src/app/products/[slug]/page.tsx](../../src/app/products/%5Bslug%5D/page.tsx)
Hero: **Product** · Sequence: Product stage → Key figures → Configurations → Spec table → FAQ → Related

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| PDP-01 | Breadcrumb | [D](screens/products__magna-ci/01-d.jpg) | Separate strip. | Into `PageHero`. | — | Merge · P3 |
| PDP-02 | Buying hero | [D](screens/products__magna-ci/02-d.jpg) [M](screens/products__magna-ci/02-m.jpg) | Product image small in a card; 4 mono spec tiles; 3 buttons; application chips. | Large product on a stage (60% width), name in `display-l`, capacity as `stat-xl`, 3 key specs, one primary + one secondary action, datasheet link. Optional: 3–4 angle views as a thumbnail rail if photos exist. | M2 headline; product rises; thumbnail swap crossfade. | Redesign · P0 |
| PDP-03 | Standard vs optional | [D](screens/products__magna-ci/03-d.jpg) | Two bullet cards. | Two-column editorial list with hairlines; "Included" vs "Optional". | M1 | Improve · P2 |
| PDP-04 | Cutaway link | [D](screens/products__magna-ci/04-d.jpg) | Thin band. | A labelled exploded view **of this product** if a drawing exists; otherwise a cutaway card linking to Technology. | M7 if a drawing exists | Improve · P1 |
| PDP-05 | Datasheet table | [D](screens/products__magna-ci/05-d.jpg) [M](screens/products__magna-ci/05-m.jpg) | Good; mono values; tiny group headings. | Retain structure via `SpecTable`; Manrope tabular numerals; sticky group headings on scroll; download button pinned to the table header. | — | Retain · P1 |
| PDP-06 | FAQ | [D](screens/products__magna-ci/06-d.jpg) | Centered cards. | Standard `Accordion`, left-aligned, two columns on desktop. | Motion height | Improve · P2 |
| PDP-07 | Closing + related | [D](screens/products__magna-ci/07-d.jpg) | Related products as a 7-item text list in a card. | Related products as a `HorizontalRail` of `ProductCard`s; CTA inline above. | M8 | Improve · P2 |

### 6.3 Solutions — `/solutions` · [src/app/solutions/page.tsx](../../src/app/solutions/page.tsx)
Hero: **Image** · Sequence: Image hero → Five solutions scroll story → DC subsystems bento → Closing

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| SOL-01 | Hero | [D](screens/solutions/01-d.jpg) [M](screens/solutions/01-m.jpg) | Text-only; 50-word paragraph; four chips. | Full-bleed application photo; 6-word headline; one sentence; chips removed. | M2, M6 | Redesign · P0 |
| SOL-02 | Five solutions | [D](screens/solutions/02-d.jpg) [M](screens/solutions/02-m.jpg) | Accordion of very long blocks (problem, architecture, tech tags, 4 metrics each). | Index + scroll story: a sticky left index of the five solutions; each solution is a chapter with one image, the problem in one sentence, the Lith-On answer in one sentence, a stat row, and "Read the full solution" expanding the detail (keeps content, moves it behind a disclosure). | M4 (index highlights active chapter), M3 | Redesign · P0 |
| SOL-03 | DC subsystems | [D](screens/solutions/03-d.jpg) | Two equal cards with icon coins and checklists. | Split: rack product image + two short columns. | M1 | Improve · P2 |
| SOL-04 | Hardware link | [D](screens/solutions/04-d.jpg) | Card with button. | Remove; covered by navigation and SOL-03. | — | Remove · P3 |
| SOL-05 | Closing | [D](screens/solutions/05-d.jpg) | Blue band. | `ClosingCTA/statement`. | M2 | Improve · P2 |

### 6.4 Industries — `/industries` · [src/app/industries/page.tsx](../../src/app/industries/page.tsx)
Hero: **Image (switchable)** · Sequence: Hero with sector switch → Sector chapters → Defence feature → Closing

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| IND-01 | Hero | [D](screens/industries/01-d.jpg) [M](screens/industries/01-m.jpg) | Text-only; six anchor chips. | Full-bleed image that changes as the visitor hovers/taps the six sector names listed large in the hero; each name links to its chapter. | Image crossfade 600ms; M2 | Redesign · P0 |
| IND-02 | Priority framework | [D](screens/industries/02-d.jpg) | Three cards that summarise the six sectors below. | Remove; the hero sector list replaces it. | — | Remove · P2 |
| IND-03 | Sector deep dives | [D](screens/industries/03-d.jpg) [M](screens/industries/03-m.jpg) | Six accordions; thumbnails tiny; text-heavy when open. | Six alternating split chapters (image 7 / text 5), each: sector, challenge one line, payback figure, three outcomes, recommended product as a mini `ProductCard`, CTA. Sticky sector index on desktop. | M4-lite (index), M6 on images | Redesign · P0 |
| IND-04 | Defence feature | [D](screens/industries/04-d.jpg) | Card with a small image carrying baked text. | Full-bleed image band (the one `stage-dark` use on this page), large statement, three facts. | M6, M2 | Improve · P1 |
| IND-05 | Closing | [D](screens/industries/05-d.jpg) | Blue band. | `ClosingCTA/inline`. | — | Improve · P2 |

### 6.5 Technology — `/technology` · [src/app/technology/page.tsx](../../src/app/technology/page.tsx)
Hero: **Editorial** · Sequence: Statement hero → Cutaway explorer → IceBattery story → Sub-10ms story → Stack & modes → LFP → Closing

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| TEC-01 | Hero | [D](screens/technology/01-d.jpg) | Text-only, 55-word paragraph. | Statement hero with four chapter links as a numbered index (IceBattery · Sub-10ms · Full stack · LFP). | M2 | Redesign · P0 |
| TEC-02 | Cutaway explorer | [D](screens/technology/02-d.jpg) [M](screens/technology/02-m.jpg) | AI render with hotspots; tabs above; detail card below; unreadable on phones. | Scroll-driven exploded view: as you scroll, each subsystem highlights on a clean line drawing (SVG, built from real layout info) with its label and one fact. Needs a real layout drawing (§8). Interim: keep tabs, enlarge, restyle. | M4 + M7 | Redesign · P1 (asset-dependent) |
| TEC-03 | IceBattery | [D](screens/technology/03-d.jpg) [M](screens/technology/03-m.jpg) | Three stacked panels: interactive toggle, baked-text infographic, four cards. | One scroll story: chapter 1 sunlight hits bare steel (heat builds), chapter 2 coating reflects NIR, chapter 3 radiates through the 8–13µm window, chapter 4 result figures. Built as one animated SVG; retire the baked infographic. | M4 + M7 | Redesign · P0 |
| TEC-04 | Sub-10ms | [D](screens/technology/04-d.jpg) | Oscilloscope panel is good; header text cramped. | Keep the oscilloscope as the hero of the section, larger, waveform drawn on scroll; Lith-On vs DG as a scrubbed comparison. | M7 | Improve · P1 |
| TEC-05 | Stack & 6 modes | [D](screens/technology/05-d.jpg) [M](screens/technology/05-m.jpg) | Energy-flow diagram with tiny labels; six mode cards. | Diagram enlarged and centred; the six modes become the diagram's controls (selecting a mode reconfigures the flows); cards removed. | M7; Motion for mode changes | Redesign · P1 |
| TEC-06 | LFP | [D](screens/technology/06-d.jpg) | Stat row + safety card. | `StatBand` (cycles, warranty, efficiency, self-discharge) + one line on stability. | M3 | Improve · P2 |
| TEC-07 | Closing | [D](screens/technology/07-d.jpg) | Blue band. | `ClosingCTA/inline` to "Talk to an engineer". | — | Improve · P2 |

### 6.6 Case studies — `/case-studies` · [src/app/case-studies/page.tsx](../../src/app/case-studies/page.tsx)
Hero: **Editorial** · Sequence: Hero with headline savings → Three case features → Map → Institutional deployments → Gallery rail → Closing

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| CS-01 | Hero + methodology | [D](screens/case-studies/01-d.jpg) | Text hero; methodology box looks like an error notice. | Hero headline with three headline savings as `stat-l`; methodology moves to a footnote link. | M3 | Redesign · P1 |
| CS-02–04 | Invertis, Gurugram, EV hub | [D](screens/case-studies/02-d.jpg) [D](screens/case-studies/03-d.jpg) [D](screens/case-studies/04-d.jpg) | Three near-identical text-heavy cards; infographic with baked text on Gurugram. | Three `CaseCard/feature` blocks with alternating layout, large photo, headline saving, three metrics, "Read the case" to the detail page. Long text lives on the detail pages. | M6, M3 | Redesign · P0 |
| CS-05 | Pan-India map | [D](screens/case-studies/05-d.jpg) [M](screens/case-studies/05-m.jpg) | Small low-detail map in a card; location chips. | Large, clean SVG India map; deployment pins animate in; hovering a pin shows the project. | Pins drop + pulse once; M1 | Improve · P1 |
| CS-06 | Government & utility | [D](screens/case-studies/06-d.jpg) | Four cards. | Editorial list (institution, location, one line) with hairlines. | M1 | Improve · P2 |
| CS-07 | Gallery | [D](screens/case-studies/07-d.jpg) | Filter tabs + card grid; some images are renders. | `HorizontalRail` of large photographs with captions; filter retained. Real photos only (§8). | M5, M8 | Improve · P2 |
| CS-08 | Closing | [D](screens/case-studies/08-d.jpg) | Blue band. | `ClosingCTA/split` "Get your own financial model". | — | Improve · P2 |

### 6.7 Case study detail — `/case-studies/[slug]` (3 pages)
Hero: **Image** · Sequence: Photo hero + key figures → Before/after economics → Highlights → Impact → Next case

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| CSD-01 | Hero + metrics | [D](screens/case-studies__invertis-university/01-d.jpg) | Text hero with 4 boxed metrics. | Full-bleed site photo with headline; four figures in a `StatBand` under it. | M3, M6 | Redesign · P1 |
| CSD-02 | Economics | [D](screens/case-studies__invertis-university/02-d.jpg) | Three cards of definition lists. | Before → after comparison: two columns ("Before: diesel" / "After: Lith-On") with a bar showing annual cost falling, then the outcome row. | Bar animates (M7) | Redesign · P1 |
| CSD-03 | Highlights + impact | [D](screens/case-studies__invertis-university/03-d.jpg) | Four boxed bullets + green card. | Editorial list; environmental figures as a small stat pair. | M1 | Improve · P2 |
| CSD-04 | Next + CTA | [D](screens/case-studies__invertis-university/04-d.jpg) | Fine. | Other cases as `CaseCard` thumbnails; inline CTA. | M8 | Improve · P2 |

### 6.8 About — `/about` · [src/app/about/page.tsx](../../src/app/about/page.tsx)
Hero: **Image** · Sequence: Plant hero → Stat band → Story (identity + leadership) → Noida & Foshan split → Facility rail → Timeline → Exports → Values → Closing

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| ABT-01 | Hero | [D](screens/about/01-d.jpg) | Text-only with anchor chips. | Full-bleed Noida plant photograph; statement headline. | M2, M6 | Redesign · P0 |
| ABT-02 | Metrics | [D](screens/about/02-d.jpg) | Boxed row overlapping the hero. | `StatBand`. | M3 | Improve · P1 |
| ABT-03 / 04 | Identity + leadership | [D](screens/about/03-d.jpg) [D](screens/about/04-d.jpg) | Two boxed text panels. | One editorial "Our story" section: large pull statement + two short columns; leadership with portraits if supplied. | M1 | Merge · P1 |
| ABT-05 | Noida & Foshan + facility gallery | [D](screens/about/05-d.jpg) [M](screens/about/05-m.jpg) | Two cards + four small photos. | Split map/photo band for the two sites; facility photos as a large `HorizontalRail`. | M5, M6 | Redesign · P1 |
| ABT-06 | Exports | [D](screens/about/06-d.jpg) | Product image + case switcher (after content fixes). | Remove from About; the two documented projects already live in Case Studies. Keep a single "25+ countries" line in the stat band. | — | Remove · P2 |
| ABT-07 | Timeline | [D](screens/about/07-d.jpg) [M](screens/about/07-m.jpg) | Five stacked cards, 1,900px. | Horizontal timeline rail with year markers; one line per year. | M5; progress line | Redesign · P1 |
| ABT-08 | Certifications summary | [D](screens/about/08-d.jpg) | Fine (just simplified). | Retain, restyled. | — | Retain · P3 |
| ABT-09 | Values | [D](screens/about/09-d.jpg) | Four equal cards. | Editorial numbered list, two columns. | M1 | Improve · P2 |
| ABT-10 | Closing | [D](screens/about/10-d.jpg) | Blue band. | `ClosingCTA/statement` "Visit the Noida plant". | — | Improve · P2 |

### 6.9 Capabilities — `/capabilities` · [src/app/capabilities/page.tsx](../../src/app/capabilities/page.tsx)
Hero: **Image** · Sequence: Plant hero → Two sites → Process (assembly line rail) → Testing lab bento → EPC timeline → Visit CTA

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| CAP-01 | Hero | [D](screens/capabilities/01-d.jpg) | Text-only. | Assembly-floor photograph or video loop. | M6 | Redesign · P1 |
| CAP-02 | Two sites | [D](screens/capabilities/02-d.jpg) | Two cards. | Merge with About pattern (shared `SitesSplit` component). | M1 | Improve · P2 |
| CAP-03 | 6-step process | [D](screens/capabilities/03-d.jpg) | Six numbered cards. | Same horizontal assembly line as HOME-06, six stages (shared component). | M5 | Redesign · P1 |
| CAP-04 | Testing lab | [D](screens/capabilities/04-d.jpg) | Four columns of mono labels. | Bento with lab photos; one figure per test (3,000V DC, −20 to +60°C…). | M1, M8 | Improve · P2 |
| CAP-05 | EPC workflow | [D](screens/capabilities/05-d.jpg) | Five numbered boxes. | Horizontal stepper with connecting line that draws on scroll. | M7 | Improve · P2 |
| CAP-06 | Visit CTA | [D](screens/capabilities/06-d.jpg) | Blue band. | `ClosingCTA/split` with plant photo. | — | Improve · P2 |

### 6.10 Why Lith-On — `/why-lith-on` · [src/app/why-lith-on/page.tsx](../../src/app/why-lith-on/page.tsx)
Hero: **Editorial** · Sequence: Statement → Seven moats scroll story → Evidence list → Trifecta → Time-to-replicate → Closing

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| WHY-01 | Hero | [D](screens/why-lith-on/01-d.jpg) | Text-only. | Large statement; seven moat names listed as an index. | M2 | Redesign · P1 |
| WHY-02 | Seven moats | [D](screens/why-lith-on/02-d.jpg) [M](screens/why-lith-on/02-m.jpg) | Tab list + detail + baked-text "moat tower" infographic. | `ScrollStory`: seven chapters; the moat tower rebuilt as a live SVG stack where each layer lights up as its chapter is active. Retire the JPG. | M4, M7 | Redesign · P1 |
| WHY-03 | Evidence (6 pillars) | [D](screens/why-lith-on/03-d.jpg) | Six dense cards with "supporting verification" boxes. | Merge into WHY-02 chapters (each moat already maps to a pillar); keep evidence as a disclosure. | — | Merge · P1 |
| WHY-04 | Trifecta | [D](screens/why-lith-on/04-d.jpg) | Three cards. | Three large standard marks in a row with one line each. | M1 | Improve · P2 |
| WHY-05 | Time to replicate | [D](screens/why-lith-on/05-d.jpg) | Three cards. | Horizontal bar chart (months to replicate) that grows on scroll. | M7 | Improve · P2 |
| WHY-06 | Closing | [D](screens/why-lith-on/06-d.jpg) | Blue band. | `ClosingCTA/statement`. | — | Improve · P2 |

### 6.11 Certifications — `/certifications`
Hero: **Utility** · Sequence: Compact hero → Standards → Documents → Request

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| CRT-01 | Hero | [D](screens/certifications/01-d.jpg) | Fine, verbose. | `PageHero/Utility`. | — | Improve · P3 |
| CRT-02 | Standards | [D](screens/certifications/02-d.jpg) | Four cards, dense. | Four rows, each with the standard name large and scope in one line; applicable products as tags. | M1 | Improve · P2 |
| CRT-03 | Documents | [D](screens/certifications/03-d.jpg) | Six checklist cards + amber note. | Grouped two-column list; note as a footnote. | — | Improve · P3 |
| CRT-04 | Request | [D](screens/certifications/04-d.jpg) | Card. | `ClosingCTA/inline`. | — | Improve · P3 |

### 6.12 Calculator — `/calculator`
Hero: **Utility** · Sequence: Compact hero → Calculator → Methodology → Closing

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| CAL-01 | Hero + stat bar | [D](screens/calculator/01-d.jpg) | Hero plus four boxed stats. | Compact hero; stats removed (results show them). | — | Improve · P2 |
| CAL-02 | Calculator | [D](screens/calculator/02-d.jpg) [M](screens/calculator/02-m.jpg) | Mode tabs, preset tabs, dense result row. | Two-pane tool: inputs left (sliders with live values), results right as large figures and a payback curve that redraws as inputs change. Sticky results on desktop. | Motion number tweening; curve morph | Redesign · P1 |
| CAL-03 | Methodology | [D](screens/calculator/03-d.jpg) | Card + side CTA. | Disclosure under the results. | — | Merge · P3 |
| CAL-04 | Closing | [D](screens/calculator/04-d.jpg) | Blue band. | Inline "Send me this as a proposal" in the results pane. | — | Merge · P2 |

### 6.13 Contact — `/contact`
Hero: **Utility (split)** · Sequence: Split hero + form → Offices → Fraud notice

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| CON-01 | Hero + tabs + form | [full D](screens/contact/full-d.jpg) [full M](screens/contact/full-m.jpg) | Form sits far below the hero in a narrow card; tabs look like pills. | Split layout: left — headline, three intent options as large selectable rows, direct contacts; right — the form (4-step flow retained), sticky. | Step transitions slide 24px; progress bar fills | Improve · P0 |
| CON-02 | Offices | (in full shot) | Two cards. | Two-column with a small map or plant photo per office. | M1 | Improve · P2 |
| CON-03 | Fraud notice | (in full shot) | Amber box. | Retain (mandatory per AGENTS.md); restyle as a calm bordered notice. | — | Retain · P2 |

### 6.14 Services — `/services`
Hero: **Image** · Sequence: Hero → Delivery timeline → Support plans → Coverage → Closing

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| SRV-01 | Hero | [D](screens/services/01-d.jpg) | Text-only with icon line. | Commissioning photo hero. | M6 | Improve · P2 |
| SRV-02 | Delivery phases | [D](screens/services/02-d.jpg) [M](screens/services/02-m.jpg) | Four long bullet cards. | Horizontal week-by-week timeline (Week 1–11) with phase bars; detail on hover/tap. | Bars draw (M7) | Redesign · P1 |
| SRV-03 | Support plans | [D](screens/services/03-d.jpg) | Three plan cards. | Comparison table with included/not marks (plans are unverified — see CLAIMS_REVIEW item 6). | — | Improve · P2 |
| SRV-04 | Coverage | [D](screens/services/04-d.jpg) | Two checklist cards. | Map of response zones (Delhi-NCR / Tier-1 / pan-India) with dispatch times. | Zones fade in | Improve · P2 |
| SRV-05 | Closing | [D](screens/services/05-d.jpg) | Blue band. | `ClosingCTA/inline`. | — | Improve · P3 |

### 6.15 Grid services — `/grid-services`
Hero: **Image** · Sequence: Hero → Services index → Closing

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| GRD-01 | Hero | [D](screens/grid-services/01-d.jpg) | Text-only. | Substation / container photo. | M6 | Improve · P2 |
| GRD-02 | Six services | [D](screens/grid-services/02-d.jpg) | Six long blocks, ~700 words. | Six-tile bento with an icon diagram each and one line; detail in disclosures. | M1 | Redesign · P2 |
| GRD-03 | Closing | [D](screens/grid-services/03-d.jpg) | Blue band. | `ClosingCTA/inline`. | — | Improve · P3 |

### 6.16 Sustainability — `/sustainability`
Hero: **Image** · Sequence: Hero → Impact stat band → Cost of diesel → Comparison → GRAP + solar → Lifecycle → Closing

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| SUS-01 | Hero | [D](screens/sustainability/01-d.jpg) | Text-only. | Clear-sky city photo (Delhi-NCR context). | M6 | Improve · P2 |
| SUS-02 | Counters | [D](screens/sustainability/02-d.jpg) | Boxed row. | `StatBand` with count-up. | M3 | Improve · P2 |
| SUS-03 | Cost of diesel | [D](screens/sustainability/03-d.jpg) | Four columns of small text. | Four large figures (2.68 kg CO₂/L, PM2.5, NOx, 85–95 dB). | M3 | Improve · P2 |
| SUS-04 | Comparison table | [D](screens/sustainability/04-d.jpg) [M](screens/sustainability/04-m.jpg) | Table with mono values. | Diesel vs Lith-On as two columns with visual bars; `SpecTable` on phones. | Bars grow | Improve · P2 |
| SUS-05 / 06 | GRAP, solar, lifecycle | [D](screens/sustainability/05-d.jpg) [D](screens/sustainability/06-d.jpg) | Text panels with callouts. | One split section each, shorter text. | M1 | Improve · P3 |
| SUS-07 | Closing | [D](screens/sustainability/07-d.jpg) | Blue band. | `ClosingCTA/inline`. | — | Improve · P3 |

### 6.17 Warranty & support — `/warranty-and-support`
Hero: **Editorial** ("10 years" as the visual) · Sequence: Hero → Warranty at a glance → Telemetry → SLAs → Contacts → Closing

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| WAR-01 | Hero | [D](screens/warranty-and-support/01-d.jpg) | Text-only. | "10" as a giant numeral with "year warranty"; one line. | M2, M3 | Redesign · P1 |
| WAR-02 | At a glance | [D](screens/warranty-and-support/02-d.jpg) | Six labelled tiles + conditions block. | Capacity-retention curve (100% → ≥70% at year 10) as the centrepiece, coverage list beside it, conditions in a disclosure. | Curve draws | Redesign · P1 |
| WAR-03 | Telemetry | [D](screens/warranty-and-support/03-d.jpg) | Text + 99.9% card. | Dashboard-style illustration (live-looking cell voltages) built in HTML; 99.9% as `stat-l`. | Values tick | Improve · P2 |
| WAR-04 | SLAs | [D](screens/warranty-and-support/04-d.jpg) | Four small cards. | Response-time scale (4–8 h / 24 h / 48 h) on one axis. | M7 | Improve · P2 |
| WAR-05 / 06 | Contacts, closing | [D](screens/warranty-and-support/05-d.jpg) [D](screens/warranty-and-support/06-d.jpg) | Three columns + blue band. | Merge into one support panel. | — | Merge · P3 |

### 6.18 Financing — `/financing`
Hero: **Editorial** · Sequence: Hero → Three models comparison → EMI tool → Partners → Closing

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| FIN-01 | Hero | [D](screens/financing/01-d.jpg) | Text-only. | Statement + simple visual comparing upfront cost of three models. | M2 | Improve · P2 |
| FIN-02 | Models | [D](screens/financing/02-d.jpg) | Three dense cards. | Comparison table (Rent / EMI / Purchase) with the best-for line on top. | — | Improve · P2 |
| FIN-03 | EMI calculator CTA | [D](screens/financing/03-d.jpg) | Card linking elsewhere. | Embed a small EMI slider in-page (uses existing calculator logic). | Number tween | Redesign · P2 |
| FIN-04 / 05 | Partners, closing | [D](screens/financing/04-d.jpg) [D](screens/financing/05-d.jpg) | List + steps + blue band. | Steps as a numbered horizontal stepper; inline CTA. | M7 | Improve · P3 |

### 6.19 Resources — `/resources`
Hero: **Utility** · Sequence: Hero → Catalogue feature → Datasheet library → Articles → FAQ link

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| RES-01 / 02 | Hero, catalogue | [D](screens/resources/01-d.jpg) [D](screens/resources/02-d.jpg) | Text hero + card. | Hero with a catalogue cover visual and one download button. | M1 | Improve · P2 |
| RES-03 | Datasheets | [D](screens/resources/03-d.jpg) | Eight cards with mono specs. | Compact library table (product, capacity, file, download), filterable. | — | Improve · P2 |
| RES-04 | Articles | [D](screens/resources/04-d.jpg) | Four article cards linking to "request" (no articles exist). | Merge with Blog once articles exist; until then remove (see Blog). | — | Merge · P3 |
| RES-05 | FAQ link | [D](screens/resources/05-d.jpg) | Card. | Text link. | — | Improve · P3 |

### 6.20 FAQs — `/faqs`
Hero: **Utility** · Sequence: Hero with search → Categories + accordion → Closing

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| FAQ-01 / 02 | Hero, filters | [D](screens/faqs/01-d.jpg) [D](screens/faqs/02-d.jpg) | Search under a large hero. | Search as the hero's main element; categories as a left sticky list on desktop. | — | Improve · P2 |
| FAQ-03 | Questions | [D](screens/faqs/03-d.jpg) | 18 boxed accordions with mono category tags. | Hairline accordion rows, grouped under category headings. | Motion height | Improve · P2 |
| FAQ-04 | Closing | [D](screens/faqs/04-d.jpg) | Blue band. | `ClosingCTA/inline`. | — | Improve · P3 |

### 6.21 Careers — `/careers`

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| CAR-01 | Hero | [D](screens/careers/01-d.jpg) | Text-only. | Team or plant photo; statement. | M6 | Improve · P2 |
| CAR-02 | Fraud notice | [D](screens/careers/02-d.jpg) | Amber strip. | Retain (mandatory); calm notice style. | — | Retain · P2 |
| CAR-03 | Roles | [D](screens/careers/03-d.jpg) | Five role cards. | Hairline role list (title, team, location, apply). | M8 | Improve · P2 |
| CAR-04 | Spontaneous | [D](screens/careers/04-d.jpg) | Card. | Inline line + email link. | — | Improve · P3 |

### 6.22 Distributor — `/distributor`

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| DIS-01 | Hero | [D](screens/distributor/01-d.jpg) | Text-only. | Split hero with the application form visible above the fold. | M1 | Improve · P2 |
| DIS-02 | Benefits | [D](screens/distributor/02-d.jpg) | Four icon cards. | Four-item editorial list. | M1 | Improve · P3 |
| DIS-03 | Who can apply + form | [D](screens/distributor/03-d.jpg) | Two columns, form in a card. | Merge into DIS-01. | — | Merge · P2 |

### 6.23 Blog — `/blog`

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| BLG-01 / 02 | Hero, grid, newsletter | [full D](screens/blog/full-d.jpg) | Six "Coming soon" posts over blank placeholder images, dated June–October 2026. Publishes placeholders, which AGENTS.md forbids. | Hide the route (and its nav/footer links) until real articles exist; then an editorial index with one featured article. | — | Remove for now · P1 |

### 6.24 Privacy policy, Terms — `/privacy-policy`, `/terms-and-conditions`

| ID | Section | Screens | Problems | Proposal | Motion | Verdict / P |
|---|---|---|---|---|---|---|
| LEG-01 | Hero + body | [D](screens/privacy-policy/02-d.jpg) [D](screens/terms-and-conditions/02-d.jpg) | Readable. | `PageHero/Utility`; body at 17px with a sticky contents list on desktop. | — | Retain · P3 |

### 6.25 Applications — `/applications`
Redirects to `/industries`. No action beyond keeping the redirect.

---

<a id="7-component-library"></a>
## 7. Component library

### 7.1 Unused components (14)

| File | Recommendation |
|---|---|
| `animation/Reveal.tsx`, `TextReveal.tsx`, `AnimatedCounter.tsx`, `ParallaxImage.tsx` | **Keep and adopt** as M1, M2, M3, M6 implementations after review against §3. |
| `hero/HeroPinnedSection.tsx` | **Review**: closest existing idea to HOME-01's scene switch + pinned cabinet. Harvest, then delete. |
| `hero/HeroArchitectural.tsx`, `HeroArchitectural.v2.tsx`, `smart-city/IsometricCity.tsx`, `smart-city/SectorCard.tsx` | Delete after HOME-01 is built. |
| `home/SectorHeroCarousel.tsx`, `IndustriesInteractiveShowcase.tsx`, `FactoryVideoReel.tsx`, `AttributedTestimonials.tsx` | Delete (testimonials: no approved quotes exist). |
| `products/ProductComparison.tsx` | Harvest its table for PRD-02's comparison view, then delete. |

### 7.2 Components to consolidate

- Every hand-built hero → `PageHero` (4 variants).
- Every eyebrow + headline block → `SectionIntro`; delete `SectionHeader` once migrated.
- `CallToAction` + ~20 hand-built blue bands → `ClosingCTA` (3 variants).
- All button recipes, including `.btn-primary/.btn-secondary/.btn-outline` in `globals.css` → `Button`.
- `ProductCard` (catalogue), home showcase cards, resources datasheet cards → one `ProductCard`.
- Three case-study card styles → `CaseCard`.
- Swipe rows added during the mobile polish → `HorizontalRail`.
- Radix accordion (FAQ) and `<details>` (Solutions, Industries) → one `Accordion` with hash-open.

---

<a id="8-asset-requirements"></a>
## 8. Asset requirements

The redesign's ceiling is set by imagery. Most current product files are under 600px wide and several images are renders or brochure scans.

| # | Asset | Needed for | Spec | Status |
|---|---|---|---|---|
| A1 | Cut-outs of Magna-C&I, Lith-On-50, LT215, Max-20HC (front ¾ view each; side and rear if possible) | HOME-01, HOME-04, PRD-01/02, PDP-02, mega-menu | ≥ 2400px, transparent PNG/WebP, consistent lighting and angle | Current files 295–560px; LT215 image shows a non-Lith-On logo |
| A2 | Noida plant exterior with signage | ABT-01, CAP-01, CON-02 | ≥ 2560px landscape, daylight | Not available (ASSET_MANIFEST lists it as pending) |
| A3 | Assembly floor: cell grading, laser welding, cabinet assembly, testing (4–6 shots or 5–10s silent loops) | HOME-06, CAP-03, CAP-04, ABT-05 | ≥ 2400px or 1080p video | Current: four ~400px brochure crops |
| A4 | Installed systems: Invertis yard, Gurugram society, EV hub, one industrial site | HOME-03, HOME-07, CS-02–04, CSD-01, IND-03 | ≥ 2400px, wide and detail | Invertis available at low resolution; others not available |
| A5 | Application environments: diesel generator yard, factory floor, hospital or data room, rooftop solar | HOME-03, SOL-02, IND-01 | ≥ 2400px | Current scenes are renders (decision §11.3) |
| A6 | Product layout drawing (CAD export or labelled line drawing) of one cabinet | TEC-02, PDP-04 | Vector (SVG/DXF/PDF) | Not available; current cutaway is a render with baked labels |
| A7 | Leadership portraits | ABT-03/04 | Consistent background, ≥ 1600px | Not available (optional) |
| A8 | Real deployment coordinates / city list | CS-05 map | List | Partly in data |
| A9 | 3D model (GLB) of Magna-C&I | Optional 3D hero | Real CAD-derived model | Not available; do not build 3D without it |

Rebuilt as live HTML/SVG (no asset needed): IceBattery explainer, sub-10ms waveform, energy flow, seven-moats stack, diesel-vs-BESS comparison, capacity-retention curve, response-time scale.

---

<a id="9-master-tracker"></a>
## 9. Master tracker and definition of done

### 9.1 Phases

| Phase | Scope | Output |
|---|---|---|
| **1 Foundation** | §2 tokens and components, §3 motion utilities, Lenis decision, `PageHero`, `SectionIntro`, `Button`, `StatBand`, `MediaFrame`, `ClosingCTA`, `HorizontalRail`, `ScrollStory`; component cleanup (§7) | Design system page (internal route or Storybook-style page) showing every component in all states |
| **2 Homepage** | G1, G4/HOME-08, HOME-01 → HOME-07 in order | Homepage fully redesigned and reviewed at 1440 / 1024 / 768 / 375 |
| **3 Internal pages** | Products & PDP → Solutions → Industries → Technology → Case studies (+detail) → About → Capabilities → Why Lith-On → Contact → remaining pages | Each page reviewed before the next starts |
| **4 Interaction polish** | G2 mega-menus, G3 mobile nav, G6 page transitions, G5, hover audit, motion tuning, reduced-motion pass | |
| **5 QA** | Facts (CLAIMS_REVIEW), responsive, accessibility, performance budgets, SEO, `npm run build`, `npx eslint src` | Release candidate |

### 9.2 Tracker

Status values: Not started · Exploring · Designed · Built · Reviewed · Done.

| Page | ID | Section | Verdict | Motion | P | Status |
|---|---|---|---|---|---|---|
| Global | G1 | Header | Improve | Moderate | P0 | Partly done (5 items, phone moved, transition anchor); scroll state polish in Phase 4 |
| Global | G2 | Mega-menus | Redesign | Moderate | P1 | Done (approved 18 Nov 2026; `components/layout/Header.tsx`, `MegaMenu.tsx`, `data/navigation.ts`) |
| Global | G3 | Mobile nav | Improve | Moderate | P1 | Done (approved 18 Nov 2026; `components/layout/MobileNav.tsx`) |
| Global | G4 | Footer + closing stage | Redesign | Moderate | P1 | Done (approved 18 Nov 2026; `components/layout/Footer.tsx`, `FraudAdvisory.tsx`) |
| Global | G5 | WhatsApp button | Improve | Basic | P2 | Done (approved 18 Nov 2026; `components/ui/WhatsAppButton.tsx`) |
| Global | G6 | Page transitions | New | Moderate | P2 | Done (M9) |
| Home | HOME-01 | Hero | Redesign | Advanced | P0 | Done (approved 18 Nov 2026) |
| Home | HOME-02 | Proof stats | Improve | Moderate | P1 | Done (approved 18 Nov 2026) |
| Home | HOME-03 | Challenges | Redesign | Advanced | P0 | Done (approved 18 Nov 2026; `components/home/HomeChallenges.tsx`, `ChallengeVisuals.tsx`; `AnimatedSolutionsShowcase` deleted) |
| Home | HOME-04 | Products | Redesign | Advanced | P0 | Done (approved 18 Nov 2026; `components/home/HomeProducts.tsx`; `ProductHorizontalShowcase` deleted) |
| Home | HOME-05 | Engineering bento | Redesign | Advanced | P1 | Done (approved 18 Nov 2026; `components/home/HomeEngineering.tsx`, `EngineeringVisuals.tsx`; `BessArchitectureShowcase` deleted) |
| Home | HOME-06 | Made in Noida | Redesign | Advanced | P1 | Done, interim layout (approved 18 Nov 2026; `components/home/HomeManufacturing.tsx`; final version still blocked on asset A3) |
| Home | HOME-07 | Results | Improve | Moderate | P1 | Done (approved 18 Nov 2026; `components/home/HomeResults.tsx`; `CaseStudiesDataStorytelling` deleted) |
| Home | HOME-08 | Closing | Merge → G4 | Moderate | P1 | Done (approved 18 Nov 2026; `components/home/HomeClosing.tsx`; `CinematicClosingCta` deleted) |
| Products | PRD-01–04 | Hero, catalogue, cutaway, closing | Redesign / Merge | Moderate | P0 | Built, awaiting review (`app/products/page.tsx`, `components/products/*`; screens in `screens/prd-products/`) |
| Product detail | PDP-01–07 | 7 sections | Redesign / Improve / Retain | Advanced (hero) | P0 | Built, awaiting review (`app/products/[slug]/page.tsx`; screens in `screens/pdp/`) |
| Solutions | SOL-01–05 | 5 sections | Redesign / Remove | Advanced | P0 | Built, awaiting review (`app/solutions/page.tsx`; screens in `screens/sol-solutions/`) |
| Industries | IND-01–05 | 5 sections | Redesign / Remove | Advanced | P0 | Built, awaiting review (`app/industries/page.tsx`, `components/industries/IndustriesHero.tsx`; screens in `screens/ind-industries/`) |
| Technology | TEC-01–07 | 7 sections | Redesign | Advanced | P0–P2 | Built, awaiting review; TEC-02 interim (`app/technology/page.tsx`, `components/technology/*`; screens in `screens/tec-technology/`) |
| Case studies | CS-01–08 | 8 sections | Redesign / Improve | Moderate | P0–P2 | Built, awaiting review (`app/case-studies/page.tsx`; screens in `screens/cs-case-studies/`) |
| Case detail | CSD-01–04 | 4 sections | Redesign / Improve | Moderate | P1 | Built, awaiting review (`app/case-studies/[slug]/page.tsx`, `components/case-studies/BeforeAfter.tsx`) |
| About | ABT-01–10 | 10 sections | Redesign / Merge / Remove | Moderate | P0–P3 | Built, awaiting review (`app/about/page.tsx`; screens in `screens/abt-about/`) |
| Capabilities | CAP-01–06 | 6 sections | Redesign / Improve | Moderate | P1 | Blocked (A2, A3) |
| Why Lith-On | WHY-01–06 | 6 sections | Redesign / Merge | Advanced | P1 | Built, awaiting review (`app/why-lith-on/page.tsx`, `components/why/*`; screens in `screens/why-why-lith-on/`) |
| Contact | CON-01–03 | 3 sections | Improve / Retain | Basic | P0 | Built, awaiting review (`app/contact/page.tsx`, `components/contact/ContactIntake.tsx`, `app/api/contact/route.ts`, `lib/contact.ts`; screens in `screens/con-contact/`) |
| Calculator | CAL-01–04 | 4 sections | Redesign / Merge | Moderate | P1 | Built, awaiting review (`app/calculator/page.tsx`, `components/calculator/Calculator.tsx`, `lib/savings.ts`; screens in `screens/cal-calculator/`) |
| Certifications | CRT-01–04 | 4 sections | Improve | Basic | P2 | Not started |
| Services | SRV-01–05 | 5 sections | Redesign / Improve | Moderate | P1 | Built, awaiting review; SRV-03 interim (`app/services/page.tsx`, `components/services/*`; screens in `screens/srv-services/`) |
| Grid services | GRD-01–03 | 3 sections | Redesign | Basic | P2 | Not started |
| Sustainability | SUS-01–07 | 7 sections | Improve | Moderate | P2 | Built, awaiting review (`app/sustainability/page.tsx`, `components/sustainability/ImpactCompare.tsx`; screens in `screens/sus-sustainability/`) |
| Warranty | WAR-01–06 | 6 sections | Redesign / Merge | Moderate | P1 | Built, awaiting review (`app/warranty-and-support/page.tsx`, `components/warranty/*`; screens in `screens/war-warranty/`) |
| Financing | FIN-01–05 | 5 sections | Improve | Basic | P2 | Not started |
| Resources | RES-01–05 | 5 sections | Improve / Merge | Basic | P2 | Not started |
| FAQs | FAQ-01–04 | 4 sections | Improve | Basic | P2 | Not started |
| Careers | CAR-01–04 | 4 sections | Improve | Basic | P2 | Not started |
| Distributor | DIS-01–03 | 3 sections | Improve / Merge | Basic | P2 | Not started |
| Blog | BLG | Whole page | Remove for now | — | P1 | Done (307 → /resources, §11.6) |
| Legal | LEG | 2 pages | Retain | — | P3 | Not started |

### 9.2a Phase 1 tracker (foundation)

| # | Deliverable | Status | Where |
|---|---|---|---|
| 1 | design.md updated | Done | `design.md` v3.0 |
| 2 | Typography and spacing tokens | Done | `src/app/globals.css` (`@theme` v3 block, `container-site`, `section*`, `grid-site`, `measure`, `tabular`) |
| 3 | Button and navigation system | Done (mega-menus: G2, Phase 4) | `components/system/Button.tsx`, `data/navigation.ts`, `layout/Header.tsx` |
| 4 | PageHero, 4 variants | Done | `components/system/PageHero.tsx` |
| 5 | SectionIntro | Done | `components/system/SectionIntro.tsx` |
| 6 | MediaFrame | Done (video slot: Phase 2 when footage exists) | `components/system/MediaFrame.tsx` |
| 7 | Stat / StatBand | Done | `components/system/Stat.tsx` |
| 8 | BentoGrid, HorizontalRail | Done | `components/system/BentoGrid.tsx`, `HorizontalRail.tsx` |
| 9 | ScrollStory | Done | `components/system/ScrollStory.tsx` |
| 10 | ClosingCTA, 3 variants | Done | `components/system/ClosingCTA.tsx` |
| 11 | Motion integration (GSAP, Motion, Lenis, ViewTransition) | Done (M7 diagrams built per section) | `components/motion/*`, `app/template.tsx`, `docs/MOTION_SYSTEM.md` |
| 12 | Component showcase | Done | `/design-system`; screenshots in [`screens/phase1/`](screens/phase1/) |
| — | Blog unpublish strategy | Done | §11.6 |
| — | Asset brief | Done | `docs/ASSET_BRIEF.md` |

**Next:** Phase 2 begins with HOME-01 after Phase 1 review.

### 9.2b HOME-01 build record (18 November 2026)

- **Built:** `src/components/home/HomeHero.tsx` (replaces `SmartCityHero` on `/`; the old file is kept until review, then deleted per §7) and the `.home-hero` block in `globals.css`.
- **Composition:** one illustrative BESS shelter stays anchored while the scene changes (Manufacturing, Commercial, Healthcare, Campus). The scene dissolves into the warm canvas on the left (mask on the scenes only), so the copy always sits on clean space. Phones and tablets stack copy → scene switch → scene.
- **Copy:** h1 "Battery storage / for Indian heat" (the page's one two-tone line), one sentence naming cabinets, containers and the 20,000 sq. ft. Noida plant; actions "Request sizing" and "Explore products". All facts from the vault.
- **Motion (budget kept):** M2 headline on load; M1 lead, actions and shelter; 600ms crossfade on scene change (120ms hover intent, instant on click/keyboard/tap); desktop-only scrubbed hand-off (scale 1 → 0.94) via `useGSAP` + `gsap.matchMedia`. Nothing loops; no auto-rotation.
- **Tests (dev, headless Chrome):** 1440, 1024, 768, 375, 320: no overflow, no console errors, copy never overlaps the shelter, all targets ≥ 44px, keyboard switch works, reduced motion = no transform and nothing hidden.
- **Performance (production build):** desktop LCP ~0.4–0.6s, CLS 0. Phone with 4× CPU and slow 4G: LCP median 2.6s (2.4–3.2s), CLS 0. Scene now served as AVIF at quality 60 (34–64 KB). Remaining phone cost is site-wide script blocking (~1–2s TBT on every page, including text-only pages) → Phase 5 performance item.
- **Approved 18 Nov 2026.** Old hero files deleted (`components/hero/` incl. `smart-city/`, `HeroArchitectural`, `.v2`, `HeroPinnedSection`, `FloatingApplicationNav`); restorable from git.
- **Site-wide side effects:** `next.config.ts` images now AVIF-first with `qualities: [60, 75]`; `Button` gains press feedback (`scale(0.96)`) and the tertiary variant a 44px minimum height.

### 9.2c HOME-02 build record (18 November 2026)

- **Built:** `src/components/home/HomeProof.tsx` replaces `CredibilityCounterStrip` on `/` (old file kept until review).
- **Design:** open stat band on white, no card, icons, counters or visible heading (screen-reader `h2` "Lith-On in numbers"). Five vault figures; 250 MWh leads at `stat-xl`. One label and at most one short note per figure (was three lines each; the unsourced "4 diagnostic labs" dropped). One tertiary link to the plant.
- **Responsive (`StatBand`, system-wide):** phones = lead full width + 2 columns; tablet to 1279px = lead full width + 4 columns; 1280px+ = one row. Units wrap rather than overflow; prefixes ("<") render at full size.
- **Motion:** count-up only (M3), for figures that start below the fold. No reveal.
- **Page rhythm:** redesigned sections now sit outside the legacy homepage wrapper and set their own spacing; legacy sections keep theirs until redesigned.
- **Tests:** 1440, 1024, 768, 375, 320: every count-up ends on the exact figure, nothing clipped, no overflow, no console errors; reduced motion and JavaScript-off show final values immediately.

### 9.2d HOME-03 build record (18 November 2026)

- **Built:** `src/components/home/HomeChallenges.tsx` + `ChallengeVisuals.tsx`; replaces `AnimatedSolutionsShowcase` on `/` (old file kept until review). `CredibilityCounterStrip` deleted after HOME-02 approval.
- **Deviation from spec, with reason:** the spec suggested one application photograph per chapter. The only available images are renders of the same shelter shown in the hero, so each chapter's media is a live diagram instead: diesel vs Lith-On cost bars (real figures), a load curve shaved under the contracted limit, a grid-failure cutover timeline, and a solar day. Curves without real figures are labelled "Schematic". Red = the problem, Lith-On Blue = the response.
- **Copy:** every figure from a documented project (Gurugram society ₹6.52 Cr → ₹1.76 Cr = 73%; EV hub 100% demand charges removed; < 10 ms vs 10–30 s diesel; Invertis ₹2.26 Cr/yr with 900 kWp solar). The old section's unsourced lines (₹30–40/kWh, "up to 200% penalty tariffs", "store 100% of midday solar") are gone.
- **Motion:** the homepage's first of two scroll experiences (M4). Desktop: sticky media, the active chapter's diagram draws (M7, CSS transitions keyed on `data-active`). Phones/tablets: stacked chapters, each diagram in its final state. One M1 reveal on the intro; count-up on the chapter figures.
- **System change:** `ScrollStory` now accepts a `visual` per chapter and a `mediaAspect`.
- **Tests:** 1440: each chapter activates its own diagram, bars and lines reach their final state, media stays pinned (top 112px); no duplicate ids (diagrams use `useId`), no overflow, no console errors. 1024, 768, 375, 320: no overflow; stacked diagrams fully drawn and legible. Reduced motion: final state immediately.

### 9.2e HOME-04 build record (18 November 2026)

- **Built:** `src/components/home/HomeProducts.tsx`; replaces `ProductHorizontalShowcase` on `/` (old file kept until review) and moves the section out of the legacy spacing wrapper.
- **Content:** the four families in the vault's product table only, ordered by capacity: Lith-On-50 (48 kWh, scalable, 48 kW), LT215 (215 kWh, 110 kW), Magna-C&I (260 kWh, 125 kW), Max-20HC-5000 (5 MWh, 1.25 MW). Each shows capacity, family name, power, format and a link to its product page. The old section's unsourced lines (dual HVAC, ΔT < 2.5 °C, 1.69 m² footprint, "up to 1.04 MWh") are gone. Note: `src/data/products.ts` gives Max-20HC power as "1,250 kW / 2,500 kW"; the vault gives 1,250 kW. The rail uses the vault value (logged for CLAIMS_REVIEW).
- **LT215 has no approved photograph.** The two existing candidates are a cropped screenshot and an image with a non-Lith-On logo. Its media tile is typographic: the vault's "1P240S LFP cell configuration" and "IP67 battery compartments". Replace it when ASSET_BRIEF item A1 is delivered.
- **Signature element:** one capacity axis under the rail, on a log scale from 10 kWh to 10 MWh, with a dot per product. A marker glides along it as the rail moves, and the nearest product's label and dot activate.
- **Motion:** the homepage's second and last scroll experience (M5). From 1024px, fine pointer, motion allowed: cards and axis pin under the header and vertical scroll drives the track, which bleeds to the window edges (new `bleed` prop). The intro scrolls away first, so the pinned block fits 1440×900 and 1024×768. Touch, tablet and reduced motion: native swipe with snap; previous/next buttons on desktop.
- **System changes:** `HorizontalRail` gains `footer` (pinned with the track) and `bleed`; the pin distance now excludes the viewport's inline padding, so the last item stops on the content edge.
- **Tests:** at 1440 and 1024, pinned, the axis moves 48 kWh → 215 → 5 MWh across start/mid/end, the pinned block fits the viewport, and keyboard focus on the last product link scrolls it into view. At 768, 375 and 320, swiping updates the axis. Also checked: reduced motion (no pin, buttons present), no JS (all four items and the heading visible), no overflow, no console errors. `npx eslint src`, `tsc` and `npm run build` pass.

- **HOME-04 update after approval:** the rail now uses product renders extracted from `data-sources/Lith-On Catalogue/` (pages 22–24), with backgrounds removed, saved to `public/images/products/catalogue/` (700–1,400 px). This replaces the LT215 text tile. It also corrects Lith-On-50: the catalogue shows a floor cabinet, not the rack module previously used.

### 9.2f HOME-05 build record (18 November 2026)

- **Built:** `src/components/home/HomeEngineering.tsx` + `EngineeringVisuals.tsx` + `src/components/motion/ActiveOnView.tsx`; replaces `BessArchitectureShowcase` on `/` (old file kept until review).
- **Composition:** bento, not four equal cards. A large IceBattery® tile (the homepage's single dark surface, design.md §11), two light tiles (< 10 ms cutover, > 6,000 LFP cycles) and a full-width in-house control stack strip (BMS, PCS, EMS, SCADA). Each tile has one figure, one line and one link to the matching `/technology` anchor.
- **Deviation from spec, with reason:** the spec's fourth tile was "fire safety layers". The vault has no fire-suppression facts; the old tile's aerosol suppression, gas detection and 270 °C runaway onset are unsourced. The catalogue mentions UL 9540A and NFPA 855, but those certifications are not in the vault. The tile became the in-house control stack, which the vault documents. The IceBattery tile shows the sourced 15–30 °C reduction, not absolute temperatures (the old 68 °C vs 38 °C pair is unsourced). The cutover diagram shows "< 10 ms" against a 20 ms 50 Hz cycle, not the old unsourced "8.2 ms".
- **Motion:** M7. Each tile's diagram draws once on entering view via `ActiveOnView`. That component server-renders the final state, resets it only if the tile starts below the fold, and shows the final state without JavaScript or with reduced motion. M8: hovering a tile grows its link underline.
- **Phones:** one column, IceBattery first. The thermal diagram's labels move to a key below it.
- **Tests:** all four tiles draw at 1440, 1024, 768, 375 and 320. Also checked: reduced motion and no JS (final state), no overflow, no console errors. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2g HOME-06 build record (18 November 2026)

- **Built:** `src/components/home/HomeManufacturing.tsx`; replaces `ManufacturingInteractiveJourney` on `/` (old file kept until review).
- **Interim layout, as the spec allows.** HOME-06 is asset-blocked. The catalogue, corporate deck, investor deck and Hyundai deck hold no plant photography beyond the same three 200–444 px crops already on the site, and there is no video. So the section uses the documented six-step process (`content/capabilities.md`) as an open numbered list. Beside it sits an overlapping collage of the three real photographs, each shown near native size and served unoptimised. The tablet collage is capped at 560 px.
- **Deviation from spec, with reason:** no scroll-driven rail (M5), because the homepage's two scroll experiences are already HOME-03 and HOME-04 (design.md §13). No parallax (M6), because it enlarges media and these photos are already soft. Motion is an M1 reveal on each photo.
- **Copy:** removed the old section's unsourced lines: 72-hour burn-in and "zero infant mortality", < 2% cell variance, 48-hour commissioning, AOI, oscilloscope verification, aerosol suppression, dual-redundant HVAC and the per-stage certification badges. The steps are condensed from `content/capabilities.md`, with no new claims.
- **Replace when assets arrive:** ASSET_BRIEF priority 1 (plant photography or short loops) unlocks the spec's assembly-line panels.
- **Tests:** at 1440, 1024, 768, 375 and 320, photos reveal and stay at or near native resolution. Also checked: reduced motion and no JS (all content visible), no overflow, no console errors. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2h HOME-07 build record (18 November 2026)

- **Built:** `src/components/home/HomeResults.tsx`; replaces `CaseStudiesDataStorytelling` on `/` (old file kept until review). `ManufacturingInteractiveJourney` deleted after HOME-06 approval.
- **Composition:** editorial feature for Invertis University: the yard photograph with "₹2.26 Cr a year saved" set large over a scrim (below the photo on phones), then three figures beneath. To the right (below on phones), the Gurugram and EV-hub case studies as hairline link rows. Then a "Deployed for" band with three genuine installation photographs.
- **New assets:** installation photographs extracted from the client catalogue (pages 31–32) to `public/images/installations/catalogue/` (about 760 × 1200 px): Indian Army (J&K), NTPC, fuel station, and NTPC Shravasti (unused). Each is captioned with the client and the sites listed in vault case study D. RVUNL and PwC, which have no photographs, appear as one line of text.
- **Copy:** vault figures only. Invertis: ₹4.14 Cr → ₹1.88 Cr, ₹2.26 Cr a year, 1 MWh + 900 kWp. Gurugram: ₹6.52 Cr → ₹1.76 Cr. EV hub: 3.9-year payback, 450 kWh + 75 kWp. Not used: the Invertis 4.29-year payback and ₹17.76 Cr 10-year figure, which are not in the vault and match a different system model in the universities deck (CLAIMS_REVIEW item 13). Removed: "audited by third-party energy consultants" (unsourced) and "Hostel coverage 24/7".
- **Deviation from spec, with reason:** no parallax (M6) on the feature photo; it is 1070 × 295 and parallax enlarges it. No thumbnails on list rows: there are no genuine photographs for those two projects. Rows use a background tint and arrow nudge (M8). Motion: count-up on ₹2.26 Cr (M3), reveal on the deployment photos (M1).
- **Tests:** at 1440, 1024, 768, 375 and 320, all four links resolve to existing routes and the figure ends on its final value. Also checked: reduced motion and no JS, no overflow, no console errors. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2i HOME-08 build record (18 November 2026)

- **Built:** `src/components/home/HomeClosing.tsx`; replaces `CinematicClosingCta` on `/` (old file kept until review). The legacy spacing wrapper on `/` is gone: every homepage section is now redesigned.
- **Composition:** `ClosingCTA` statement on white. Statement: "Size your system / with our Noida engineers", revealed line by line (M2). One lead sentence, the single red primary action ("Request technical sizing" → `/contact?type=assessment`), and the three routes as one row of text links rather than cards: Compare products → `/products`, Become a distributor → `/contact?type=distributor`, and a call link to +91 70000 13009 (vault number).
- **System changes:** `ClosingCTA` statement gains an optional `links` row and drops its 16ch cap from 1024 px, so the authored line breaks hold. **Accessibility fix in `LineReveal`:** lines had no word space between them, so headings were announced as "Battery storagefor Indian heat". A visually hidden space now separates lines (affects the hero h1 and every LineReveal heading).
- **Copy removed:** "audited kWh sizing", SLD and 3D footprints, "direct factory equipment margins" and "certified pan-India distribution network" (unsourced).
- **Still to do (G4, Phase 4):** the spec merges this ending with the redesigned footer. The current footer still carries unsourced labels ("Audited Customer Case Studies", "Technical Engineering FAQs (35+)", "Foshan International R&D Hub").
- **Tests:** at 1440, 1024, 768, 375 and 320, all four links are present and the statement lines finish their reveal. The page outline is one h1 and seven h2s in order. No overflow, no console errors. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2j G4 Footer build record (18 November 2026)

- **Built:** `src/components/layout/Footer.tsx`, now a server component, and `src/components/layout/FraudAdvisory.tsx` (client; the dialog only).
- **Decision on "closing stage":** the statement and primary CTA stay page-level (`ClosingCTA`, e.g. HOME-08). The footer does not repeat them, which would put two CTAs on every page that has its own ending. The footer's closing stage is the cityscape illustration (`footer-cityscape.jpg`, previously unused, now with its correct 4474 × 646 size) as a horizon directly under each page's ending, followed by identity, contact and offices.
- **Structure:** logo and one line ("Battery energy storage, engineered and manufactured in Noida."). Then both vault phone numbers, the vault email, the Noida HQ/plant and Foshan hub addresses (vault §1), and a four-column directory of 22 links (Products, Solutions, Resources, Company; was five columns and 35 links). The legal row has copyright, "IEC 61508 · IEC 61850 · BIS" as plain text (vault §5), privacy, terms, and the **recruitment fraud warning** (kept prominent, same wording, restyled to tokens, keyboard-accessible dialog).
- **Removed:** the "Ask AI" prompt and dialog (its prompt repeated unsourced claims), "Autonomous AI Agent & LLM Indexable", the pulsing office dot, the "SIL 2 / SIL 3" badge (CLAIMS_REVIEW item 3), the "CAQM GRAP 100% NCR Diesel Ban" badge, link labels with unsourced claims ("Audited", "35+", "Foshan International R&D Hub", "The 7 Structural Moats") and the LinkedIn/YouTube links (URLs not in any source; CLAIMS_REVIEW item 14). Phones show all links in two columns; accordions removed.
- **Tests:** all 28 footer links resolve (no 4xx). The fraud dialog opens from the keyboard, traps focus and returns it on Escape. No overflow and no console errors at 1440, 1024, 768, 375 and 320. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2k G2 Mega-menus build record (18 November 2026)

- **Built:** `src/components/layout/MegaMenu.tsx` (panels), with the desktop part of `Header.tsx` rebuilt and `src/data/navigation.ts` rewritten. The header row now uses `container-site`, so its edges align with the page sections and the panels.
- **Panels (full width, light):** **Products** shows the four families as catalogue cut-outs, each with capacity and power from the vault and a one-line format, plus a side column (overview, datasheets, calculator, warranty, phone). **Industries** is a two-column list with an illustrative scene that crossfades as you hover (university, industrial, commercial, hospital renders, labelled "Illustrative scene"; EV and data centres keep the last scene shown). **Solutions**, **Technology** and **Company** each pair a list with a side column and one real proof point: the Invertis result (₹2.26 Cr a year), the IceBattery 15–30 °C figure, and the Noida pack-assembly photo.
- **Accessibility:** WAI-ARIA disclosure-navigation pattern. Each top label stays a link (so it works without JS) and has a separate chevron toggle with `aria-expanded` and `aria-controls`. Previously the dropdowns opened on hover only, so keyboard users could not reach them. Enter or Space toggles. Tab goes from the toggle into its panel, and Tab from the panel's last link moves on to the next item and closes the panel. Escape closes and returns focus to the toggle; focus leaving the header closes the panel. Closed panels are `inert`. The active section is marked with a blue underline and `aria-current`.
- **Motion and performance:** hover intent (90 ms before the first open; switching between open panels is instant; 180 ms close delay), panel fade plus 8 px drop over 250 ms, and an image crossfade (500 ms). No transitions under reduced motion. Panel content mounts on first open, so its images do not load with every page.
- **Copy:** every description rewritten. Removed unsourced lines: ΔT < 2.5 °C, "scalable up to 192 kWh", "oscilloscope-proven", "unified single-clock edge firmware", "> 90% NIR", "CNC laser welding and 4 testing laboratories", "7 Structural Moats", "audited savings", "< 3% THD", "zero-CAPEX rental, 10% down EMI", "Flagship" and "Utility" tags.
- **Mobile:** unchanged apart from now listing each group's side-column links (G3 is next).
- **Tests:** all 40 panel links and their `#anchors` exist. At 1440 and 1024 every panel opens on hover, fits the viewport and closes on mouse-out; the Industries scene follows hover. The keyboard flow passes (open, Tab in, Shift+Tab back, Tab out closes, Escape returns focus), closed panels are inert, and there are no console errors. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2l G3 Mobile navigation build record (18 November 2026)

- **Built:** `src/components/layout/MobileNav.tsx`; the old inline drawer in `Header.tsx` is removed. The header's phone and menu buttons now use the token styles (round, `line` border).
- **Sheet:** a full-screen Radix Dialog, which provides the focus trap, Escape to close, scroll lock and hiding the page behind it from assistive technology. The top bar mirrors the header (logo, close). Five large rows (`text-heading-2`): each label links to its overview, and a chevron toggle (`aria-expanded`, `aria-controls`) reveals the group's links, with product capacities shown inline, and an overview link. One group opens at a time; height animates via grid rows, and collapsed groups are `inert`. A quiet contact block (email, plant address) sits below the groups.
- **Fixed bottom bar:** "Request sizing" (red, full width → `/contact?type=assessment`), with Call and WhatsApp (the existing +91 70000 13009 number and message) as secondary actions. Padding respects the iOS safe area.
- **Motion:** the sheet slides in over 400 ms and out over 280 ms, rows stagger 40 ms, and the overlay fades. All of it is off under reduced motion (CSS in `globals.css`, keyed on Radix `data-state`). Focus starts on the close button.
- **Tests:** at 768, 375 and 320 (568 px tall), and 375 with reduced motion: dialog and title present, focus starts on close, body scroll locked, bottom bar in view, no overflow. The Products group expands to 8 links. Focus stays inside the sheet over 40 Tabs, and Escape closes it and returns focus to the menu button. Tapping a link navigates (`/technology#stack`) and closes the sheet. No console errors. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2m G5 WhatsApp button build record (18 November 2026)

- **Built:** `src/components/ui/WhatsAppButton.tsx` rewritten. It is a neutral ink pill (48 px tall) with the WhatsApp glyph, the "WhatsApp" label from 640 px up, and an icon only on phones. Removed: the brand green, the pulse, scale-on-hover and the hover tooltip. The number and pre-filled message are unchanged.
- **Behaviour:** appears after about one screen of scrolling (clear of every hero and its primary action) and **hides while the footer is on screen** (IntersectionObserver), so it never covers the footer's contact details. It fades and rises over 250 ms (none under reduced motion). The hidden state is `inert` (no focus), the accessible name says it opens a new tab, and the focus ring is visible.
- **Related fix (HOME-03):** in the peak-demand diagram, the in-chart "Contracted limit" label was crossed by the load curve. It is now a dashed key in the diagram's legend.
- **Tests:** at 1440, 375 and 375 with reduced motion, the button is hidden and inert at the top, visible mid-page, and hidden and inert with the footer in view, with no console errors. HOME-03 retested: all four diagrams draw, no duplicate ids, no overflow. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2n /products build record (18 November 2026)

- **Built:** `src/app/products/page.tsx` rebuilt, with new `ProductsLineup.tsx` and `ProductCompareTable.tsx`, and rewritten `ProductCatalog.tsx` and `ProductCard.tsx`. Sequence: product hero, then catalogue, then comparison table, then split closing.
- **Owner decision (18 Nov 2026):** keep all **eight** products equally, with specs from `src/data/products.ts`. This includes Tele-Rack 100, Resi-Shield 120, Solar-Hybrid 500 and Mega-40HC, which are not in the vault (CLAIMS_REVIEW item 1). The cards and table therefore show `products.ts` power ratings, which differ from the vault for the four catalogue families (CLAIMS_REVIEW item 11).
- **PRD-01 hero:** h1 "Battery storage from 10 kWh to 10 MWh" (line reveal), one lead sentence, one primary action ("Request sizing"), and the catalogue as a text link. The sizing-assistant drawer and the "Browse" button are removed from the hero. Below sits a lineup of the four catalogue families (background-removed renders) on one floor line, ordered by capacity and rising in sequence (M1, 90 ms stagger), captioned "Not to scale". Phones get their own composition: three cabinets in a row with the container full width beneath.
- **PRD-02 catalogue:** segmented filter (All, Commercial, Modular, Industrial, Utility, with counts and a live result count). Filtering animates with React `<ViewTransition>` (cards morph to their new positions; no new dependency; none under reduced motion). Each card is a whole link with a large image on a light stage, the capacity as the headline figure, the name, the tagline, power and enclosure; hover lifts the product (M8). Grid: 1 / 2 / 3 columns. **PRD-03** is merged in as a "See inside" tile linking `/technology#cutaway` (labelled "Illustrative render").
- **Comparison table:** one row per product (capacity, power, format, enclosure). The product column stays fixed while the table scrolls sideways on phones. Proper `caption`, `scope` and row headers.
- **PRD-04 closing:** `ClosingCTA` split, "Need a custom pack or configuration?", with "Talk to an engineer" and a call link. Photo: the Indian Army installation (catalogue), which is sharper than the 444 px pack-assembly crop the spec suggested.
- **Images:** the four catalogue families in `products.ts` now use the catalogue renders, so detail pages and the contact form use them too. This retires the LT215 image that showed another company's logo. The other four products keep their existing images.
- **Removed copy:** the "Engineered Hardware Catalog" pill, the two-tone headline, "Tier-1", "pre-commissioned", the thin cutaway band (which mentioned unsourced "aerosol safety") and the blue contrast CTA band ("SLDs and CAQM GRAP payback audits").
- **Tests:** at 1440, 1024, 768, 375 and 320, plus reduced motion and no JS: one h1, logical h2s, the lineup visible, no overflow, no console errors. The Utility filter leaves 2 products plus the tile and announces "Showing 2 products". All page links resolve. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2o Catalogue additions (18 November 2026, owner request)

- **Four catalogue products added** to `src/data/products.ts`, with specs from the catalogue spec tables (pages 22–24) only: Magna-C&I 215 kWh, Magna-UTL 373 kWh, Magna-UTL 418 kWh and Max-20HC-3440. They use the catalogue renders (`magna-ci-260.webp` is shared by both Magna-C&I models and `magna-utl.webp` by both UTL models, as in the catalogue). `/products` now lists **12** products, and the hero count reads from the data. Each has a statically generated detail page (46 pages in total). The old detail template no longer shows the switchover badge or the documents heading when that data is missing.
- **Technology comparisons** from the catalogue (pages 29–30), shown with a new `CompareTable` component (`src/components/system/CompareTable.tsx`, data in `src/data/comparisons.ts`). It renders as a table with the Lith-On column marked by a blue rule on desktop, and as stacked labelled rows on phones. **DG vs BESS** is on `/solutions#dg-vs-bess`, **lead-acid vs lithium** on `/technology#lead-acid-vs-lithium`. Each is presented as a general technology comparison, with a note giving Lith-On's vault figures (CLAIMS_REVIEW item 15). Both pages will keep these sections when they are redesigned.
- **Not yet added:** the catalogue's residential and small-commercial range (home battery and inverter series 600 VA–3 kVA, 1 kWh lead-acid replacement, 5 kWh wall-mount NEES-5, stackable NESS-5LV1–LV8), the 480 V telecom system and the e-rickshaw battery. Waiting on an owner decision, because the site is positioned for C&I.

### 9.2p Product detail template build record (19 November 2026)

- **Built:** `src/app/products/[slug]/page.tsx` rebuilt for all 12 products. Sequence: buying hero, highlights, configuration, specifications, cutaway link, FAQ, closing with related products.
- **Hero (PDP-01/02):** breadcrumb (`aria-current`), category and model, h1 (line reveal, balanced), tagline, capacity as `stat-xl` (rating conditions such as "@ 0.5C" become a small "Rated at…" note), power, enclosure and cooling. Actions: "Request a quote" (→ contact form with the product preselected) and a datasheet link ("Get the datasheet" when one exists, otherwise "Ask for the datasheet"). The product is large on a light stage and rises in (M1); on phones it comes first.
- **Highlights:** overview, key features as a hairline list, applications and typical users.
- **Configuration (PDP-03):** "Included" and "Optional" as hairline lists, each hidden when empty.
- **Specifications (PDP-05):** one grouped table (Electrical, Battery, Thermal, Mechanical, Standards and warranty) with row headers and Manrope tabular figures. Rows with no published value ("Contact us for details") are hidden, with a line saying other specifications are available on request. **Removed hard-coded text that the old template added to every product:** "(Intrinsic thermal stability, zero nickel/cobalt)", "(15–20 Year Operational Design Lifespan)", "Compliant with IEC 61508, IEC 61850, and BIS", the pulsing "Factory Commissioned Hardware" badge, and the "LiFePO4 chemistry with sub-10ms switchover" meta description.
- **Cutaway (PDP-04):** a single row linking `/technology#cutaway` (illustrative render). **FAQ (PDP-06):** native `<details>` accordion, two columns, keyboard and no-JS friendly, hidden when there are no questions.
- **Closing (PDP-07):** an inline CTA with "Request a quote" and the sizing assistant (its trigger restyled as a tertiary link), then a related-products rail of `ProductCard`s (same category first, six maximum).
- **Tests:** all 12 product pages return 200 with none of the removed claims. Magna-C&I was checked at 1440, 1024, 768, 375 and 320 plus reduced motion and no JS; Resi-Shield 120 and Magna-UTL 418 at 1440 and 375. One h1, logical h2s, no overflow, no console errors. Magna-UTL 418 correctly hides its FAQ and five unpublished rows. `npx eslint src`, `tsc` and `npm run build` pass (46 pages).

### 9.2q /solutions build record (19 November 2026)

- **Built:** `src/app/solutions/page.tsx` rebuilt. Sequence: image hero, five solutions (scroll story), DG vs BESS comparison, DC systems, statement closing.
- **SOL-01:** `PageHero` image variant with "What storage does / for your site", one sentence, "Request sizing", and "Compare with diesel" (→ `#dg-vs-bess`). The image is `public/images/scenes/solutions-industrial.webp`, from `data-sources/Modern Industrial Energy Facility.png` and mirrored. It shows unbranded cabinets and is labelled "Illustrative scene" (decision §11.3). The other three `data-sources` scene renders were also converted to `public/images/scenes/` for later pages. Chips removed.
- **SOL-02:** `ScrollStory` (M4, the page's only scroll experience) with five chapters. Their ids keep the anchors used by navigation and the homepage (`#dg-reduction`, `#peak-shaving`, `#backup-power`, `#solar-shifting`, `#microgrids`). Each chapter has one sentence of problem and answer, a sourced stat, a "How it works" `<details>` with three sourced points, and a case-study link where one exists. Media reuses the HOME-03 live diagrams for four chapters and the Indian Army installation photo for microgrids. **All copy rewritten from the vault.** Unsourced lines from `src/data/solutions.ts` are not shown: "<55 dB", "₹45L+ avoided transformer capex", "0 ms", "<3% THD", "85–95% self-consumption", "up to 60% grid import reduction", "up to 80% diesel cut", "−30 °C to +60 °C", "₹30–40 per kWh", "1.6–4.3 yr" and "zero voltage sag". The data file is no longer used by this page. Case links fixed from old anchors (`/case-studies#…`) to the case-study pages.
- **Comparison:** `CompareSection` now uses `container-site`, so it aligns with redesigned pages; the change applies to Technology too.
- **SOL-03:** split layout with the Magna-UTL render and two columns. **Telecom** covers the 480 V system (catalogue: over 3,000 cycles at 80% DoD) and links Tele-Rack 100. **DC outdoor cabinets** covers Magna-UTL 373/418 at 900–1500 V DC. Removed the old unsourced "3× energy density, 5× cycle life", "pyro-switch" and "384–1000 V" lines.
- **SOL-04** removed. **SOL-05:** `ClosingCTA` statement with a link row (products, case studies, phone).
- **Tests:** at 1440, 1024, 768, 375 and 320 plus reduced motion and no JS: one h1, logical h2s, all page links and anchors resolve, no hidden reveals, no overflow, no console errors. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2r /industries build record (19 November 2026)

- **Built:** `src/app/industries/page.tsx` and `src/components/industries/IndustriesHero.tsx`. Sequence: hero with sector switch, six sector chapters, defence band, inline closing.
- **IND-01:** light hero. Copy sits on the canvas, with the image filling the right 60% and fading in from the left; this keeps the sector list clear of the cabinets in every scene. "Storage for every / kind of site" (line reveal), one sentence, and the six sectors listed large. Hovering or focusing a name crossfades the image (600 ms; none under reduced motion), and each name links to its chapter. The label switches between "Illustrative scene" and "Installed system". From 1024 to 1279 px the list is one column; from 1280 px it is two. On phones the image sits above the copy.
- **IND-02** removed (the hero list replaces it).
- **IND-03:** six alternating 7/5 split chapters with ids kept (`#education`, `#manufacturing`, `#commercial`, `#healthcare`, `#ev-infrastructure`, `#data-centers`). Each has a one-line challenge, a sourced `Stat`, three outcomes, a "Typical system" product link with a thumbnail, and a case-study link where one exists. Images: the four sector renders (labelled "Illustrative scene"), plus catalogue photos for EV charging ("Installed at a fuel retail station") and data centres ("Indoor installation, NTPC"), captioned as what they are. **Unsourced lines from `src/data/industries.ts` not shown:** "<55 dB", "Stores 100% of daytime surplus", "418,000 litres", "<3% THD", ₹17.76 Cr (CLAIMS item 13), "₹4 to ₹6.5 Crore", "dual-redundant configuration", "high-voltage modular racks". No sticky sector index: the hero list serves as the index (deviation from spec).
- **IND-04:** `stage-dark` band (the page's only dark surface): Indian Army installation photo, "Power for forward bases in J&K", and three vault facts (deployment, 60 °C thermal, in-house control stack).
- **IND-05:** `ClosingCTA` inline.
- **Tests:** at 1440, 1024, 768, 375 and 320 plus reduced motion and no JS: one h1, logical h2s, all links and anchors resolve, no overflow, no console errors. All six chapter images reveal at reading pace (the fast-scroll test leaves some mid-animation, a test artefact). `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2s /technology build record (19 November 2026)

- **Built:** `src/app/technology/page.tsx`, with new `ThermalStep.tsx`, `CutoverCompare.tsx` and `ModeDiagram.tsx` in `src/components/technology/`. All anchors kept (`#cutaway`, `#icebattery`, `#waveform`, `#stack`, `#flow`, `#lifepo4`).
- **TEC-01:** `PageHero` editorial with "How a Lith-On / system works", one sentence, and a four-item numbered index to the chapters.
- **TEC-02 (interim):** "Inside the system": the cutaway render cropped to the interior (`products/cutaway-interior.webp`, labelled "Illustrative render"; two faint baked leader lines remain), with six subsystem rows from the vault (LFP racks, BMS, PCS, EMS, SCADA, IceBattery). It replaces the hotspot explorer, whose specs were unsourced (">270 °C onset", "±1 mV", "±0.2%", "98.8% conversion efficiency", "Kalman filtering"). The spec's scroll-driven exploded view waits for a real layout drawing.
- **TEC-03:** IceBattery as a four-chapter `ScrollStory` (the page's only scroll experience), driven by one SVG in four states: bare steel heats up; the 300–400 µm coating reflects NIR; heat radiates at 8–13 µm (emissivity > 0.92); result 15–30 °C cooler, full power to 60 °C, > 20% less cooling energy. This retires the interactive toggle with unsourced "68 °C / 38 °C", the baked-text infographic and the four cards.
- **TEC-04:** two full-width waveforms drawn on view (`ActiveOnView`, M7). Lith-On continues through the cutover, with a band showing under 10 ms against a 20 ms cycle. The diesel generator drops to zero for "10–30 s (not to scale)". Vault line beneath: lifts, routers and servers keep running. This retires the oscilloscope panel's unsourced "8.2 ms" and "42 lifts halted".
- **TEC-05:** "One control stack, six modes". The six vault EMS modes (peak shaving, time-of-day tariffs, diesel minimisation, solar self-consumption, critical backup, zero feed-in) are a segmented control. It reconfigures a flow diagram (Solar, Grid, Diesel, Load around a Lith-On hub; animated flows, off under reduced motion), with a live description. It is a schematic with no kW values; the old visualiser's invented power figures and six mode cards are gone.
- **TEC-06:** `StatBand`: > 6,000 cycles at 88–90% DoD (15–20 year design life), 10-year warranty, > 95% round-trip efficiency, < 2.5% / month self-discharge. One line on stability (vault). The lead-acid vs lithium comparison follows.
- **TEC-07:** `ClosingCTA` inline.
- **Now unused:** `IceBatteryThermal`, `Sub10msWaveform`, `InteractiveBessCutaway`, `EnergyFlowVisualizer`, `DetailsHashOpener` (added to the Phase 5 cleanup).
- **Tests:** at 1440, 1024, 768, 375 and 320 plus reduced motion and no JS: one h1, logical h2s, the hero index anchors resolve, no overflow, no console errors; all reveals complete at reading pace. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2t Case studies build record (20 November 2026)

- **Listing (`/case-studies`):** editorial hero, "Documented results / from real sites", with three headline results (₹2.26 Cr a year Invertis, 73% Gurugram, 100% demand charges EV hub). Then three alternating case features: Invertis uses the yard photo, while Gurugram and the EV hub use the HOME-03 live diagrams, because their old images were a baked-text infographic and a render. Each feature has a headline stat, three vault metrics and "Read the case". **CS-05/07 merged** into "Installed across India": a pinned, scroll-driven rail (M5, the page's only scroll experience) of all 12 catalogue installation photographs (pages 31–32, now all in `public/images/installations/catalogue/`). Captions use the catalogue label where the client is vault-verified (Indian Army, NTPC, fuel retail) and the location only otherwise (e.g. "Kanpur" for "RSPL – Kanpur"). **Removed:** the schematic outline map, which was not India's actual shape, and the gallery's renders presented as deployments ("Mountain Defense Off-Grid BESS", "C&I Campus BESS Bank"). CS-06 is an editorial list of vault case D (Indian Army, NTPC, RVUNL, PwC, fuel retail networks). The methodology moved to a one-line footnote. The closing is a split CTA ("Get a financial model for your site").
- **Detail (`/case-studies/[slug]`):** all three cases now render from vault-only data defined in the page (`src/data/case-studies.ts` is still used by the calculator). Editorial hero (Invertis photo in the side column near native size; text-only for the other two), place line and a four-figure `StatBand`. "Before and after" draws two bars that grow on view (`BeforeAfter`, M7): Invertis ₹4.14 Cr → ₹1.88 Cr; Gurugram ₹6.52 Cr → ₹1.76 Cr with cost notes; EV hub ₹2.41 lakh a month in demand charges → removed. "The project" is an editorial fact list (site, system, investment, returns, compliance). An inline CTA and links to the other two cases follow.
- **Left out on purpose:** the Invertis 4.29-year payback and ₹17.76 Cr 10-year figure (CLAIMS item 13); derived capex (Invertis ₹9.70 Cr, EV ₹79 lakh); "42 elevators from stalling" phrased as a claimed outcome (kept only as a site fact: 42 lifts); 1,740 t CO2e / 2,800 kg PM2.5 (not in the vault).
- **Tests:** listing and all three detail pages at 1440, 1024, 768, 375 and 320 plus reduced motion and no JS: one h1, links resolve, no overflow, no console errors; reveals complete at reading pace. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2u /about build record (20 November 2026)

- **Built:** `src/app/about/page.tsx` rebuilt. Anchors kept (`#company`, `#manufacturing`, `#timeline`, `#certifications`).
- **ABT-01:** editorial hero, "Battery storage, / built in India", lead "Founded in 2022 as Neoclo Energy…". It uses the real product-display photo beside the copy, because no Noida plant photograph exists yet (asset A2/A3; the spec's full-bleed plant hero waits for it). **ABT-02:** `StatBand` (250 MWh, 20,000 sq. ft., 500+ MWh, 25+ countries).
- **ABT-03/04 merged:** "Our story", with a pull statement and two columns (Neoclo Energy → Lith-On; IIT-alumni leadership with 40+ years of combined grid experience and the in-house stack). Removed unsourced lines: "ambient heat exceeding 48 °C", "floating neutrals", "trading intermediaries…".
- **ABT-05:** Noida and Foshan as a two-column split with vault facts and addresses, plus a link to Capabilities. The facility photo rail is deferred until real plant photos exist (the current four are small brochure crops).
- **ABT-06** removed (`GlobalExportsShowcase` now unused).
- **ABT-07:** native horizontal timeline rail with year markers, worded from the client corporate deck (page 4): 2022 established, 2023 first lithium battery, 2024 first 50 kWh systems (150 kWh capacity), 2025 critical BESS up to 1.5 MWh, Jul 2025 Eco and Premium series, Oct 2025 integrated BESS. **Replaced unsourced timeline claims:** "plant inaugurated 2023", "IceBattery formulated 2023", "IEC 61508 SIL 2/3 attained 2025", "formalised 2026".
- **ABT-08:** three standards (IEC 61508, IEC 61850, BIS) as an editorial list with vault scope text; no SIL level (CLAIMS item 3). **ABT-09:** four values as a numbered two-column list, rewritten to vault facts. **ABT-10:** `ClosingCTA` statement, "Visit the plant / in Noida", with a link row.
- **Tests:** at 1440, 1024, 768, 375 and 320 plus reduced motion and no JS: one h1, links resolve, no overflow, no console errors. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2v /why-lith-on build record (19 November 2026)

- **Built:** `src/app/why-lith-on/page.tsx` rebuilt, with new `MoatStack.tsx` and `ReplicateChart.tsx` in `src/components/why/`. Anchors kept (`#moats`, `#differentiation`, `#certifications`); new `#time-to-replicate` and one anchor per advantage (`#tie-ups`, `#service`, `#warranty`, `#experience`, `#trifecta`, `#manufacturing`, `#architecture`).
- **Source of the seven:** the moat list in `content/why-lith-on.md` (tie-ups, service, warranty, 40+ years, trifecta, Noida plant, modular architecture). The old `SevenMoatsStack` used a different, unsourced list ("72-Hour Rapid On-Site Integration", "50% footprint reduction", "competitors require 30–50% oversized HVAC") and is now unused.
- **WHY-01:** `PageHero` editorial, "Built in-house, / hard to replicate", one sentence, and the seven advantages as a numbered index linking to their chapters.
- **WHY-02 + WHY-03 merged:** a seven-chapter `ScrollStory` (the page's only scroll experience). The visual is one SVG tower of seven layers; the active chapter's layer fills in Lith-On Blue (fade, M7; final state under reduced motion). Each chapter has one or two sentences, a key figure (Foshan; 4–8 h; 10 years; 40+ years; 3 standards; 250 MWh; < 10 ms) and a native "The evidence" disclosure with the supporting facts from `content/about.md`, `capabilities.md`, `warranty-and-support.md` and the vault. The baked-text `competitive-moat-tower.jpg` is retired.
- **WHY-04:** the three standards as large blue marks in a row (stacked below 1024 px so "IEC 61508" never overflows) with one line each, plus a link to Certifications. No SIL level (CLAIMS item 3).
- **WHY-05:** horizontal bars on a 0–36 month axis that grow on view (`ActiveOnView`, M7): plant ~18 months; trifecta 24 months solid with a lighter segment to 36; grid experience "Decades", drawn to the edge and fading out, labelled off scale. Single series, one colour, every value labelled directly; values live in the DOM text.
- **WHY-06:** `ClosingCTA` statement, "Work with an Indian / storage manufacturer", primary "Request technical sizing" → `/contact?type=assessment` (the contact page has no `bankability` type, so the old "Request Bankability Dossier" link fell back to the default tab), with a link row to Products, Case studies and Technology.
- **Left out on purpose:** the competitor matrix (Tata, Adani, JSW, Exide) and "3x faster" (unverified comparative claims); "unbreachable", "unmatched", "world's most advanced", "never go dark"; "3 to 5-year warranties" for other assemblers; ">90% NIR rejection" and "< 2.5 °C cell-to-cell variation" (not in the vault); "−20 to +60 °C chamber cycling"; "SIL 2 / SIL 3"; "NTPC, PGCIL, state discoms" as SCADA counterparts.
- **Tests:** at 1440, 1024, 768, 375 and 320 plus reduced motion (1440, 375) and no JS: one h1, logical h2/h3 order, every in-page anchor resolves, no horizontal overflow, no console errors other than the known favicon 404 (Phase 5). `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2w /contact build record (19 November 2026)

- **Built:** `src/app/contact/page.tsx` is now a server component (it gains page metadata, which the old all-client page lacked) wrapping `src/components/contact/ContactIntake.tsx` in Suspense. The shared schema `src/lib/contact.ts` defines every field and its validation for both the form and the server.
- **CON-01:** split layout. Left: breadcrumb, "Talk to our / engineers" (M2), one sentence, three intents as large radio rows (size a system, become a distributor, support for an installed system), then phone, email and support hours. Right: the form in one bordered panel, sticky on desktop. The project request keeps four steps (your site → power profile, all optional → your details → notes). Each step slides in 24px (`form-step-in`, motion-safe) and the progress bar fills (`scale-x`). Validation is inline: messages under fields, `aria-invalid` and `aria-describedby`, focus moved to the first invalid field, and `alert()` removed. The distributor and support forms are single steps. Choosing "Critical: system offline" shows a call-us notice.
- **Delivery (owner decision, 19 Nov 2026):** `POST /api/contact` keeps only the schema's fields for the chosen intent, validates them again, and checks the origin, a honeypot field and a best-effort per-instance rate limit (5 per 10 minutes per IP). It then emails a plain-text summary through Resend's HTTP API with `fetch` (no new dependency), with `reply_to` set to the visitor. Configuration: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, optional `CONTACT_TO_EMAIL` (default tech@lith-onbharat.com); see `.env.example`. **Until these are set, the route returns 503 and the form shows "We couldn't send your message just now. Please call … or email …".**
- **Links from other pages now work:** `type=assessment|distributor|support` selects the intent; `type=factory-visit`, `type=ecatalogue`, `doc=`, `download=` and `insight=` prefill the notes and show "Your request is in the notes"; `product=` and `sector=` preselect fields (`sector=industrial` previously fell back to the first option); the calculator's `sanctionedLoad` and `dgCapacity` prefill step 2.
- **CON-02:** Noida and Foshan as two open columns with addresses, one vault fact each, and Google Maps links. A small embedded map was left out to avoid a third-party iframe, and the plant photo waits for asset A2.
- **CON-03:** the fraud notice from `content/contact.md` as a calm bordered notice (red icon and rule only).
- **Removed (unsourced or misleading):** the success screen's "single-line sizing schematic and financial model within 24 business hours"; the randomly generated support "ticket number" (no ticket system exists); the "Privacy & Data Safeguard … strict commercial non-disclosure" statement (invented privacy language); "Factory open for client audits" with a pulsing dot; "Channel Development Director", "direct factory margins", "Tier-1 solar EPC"; "4 to 8 hour dispatch across Delhi-NCR and major metros" (the source gives 4–8 h for Delhi-NCR only); Foshan "raw material testing & export logistics" (replaced with content's wording).
- **Open:** Resend account, verified domain and sender (owner); whether the form should link a privacy notice. `/privacy-policy` exists, but its wording is unverified (CLAIMS item 9), so no link was added.
- **Tests:** at 1440, 1024, 768, 375 and 320 plus reduced motion and no JS: one visible h1, logical h2s, no horizontal overflow, no console errors other than the known favicon 404. Without JS the fallback shows the intro, phone, email and a note that the form needs JavaScript. Flow tests: empty-step errors with focus, errors clear on input, Back keeps values, the unconfigured send shows the fallback alert, a mocked 200 shows the success screen and "Send another" resets, the intent switch works, the critical notice appears, and all query parameters prefill. API tests: bad JSON or unknown intent → 400, invalid fields → 422 with messages, honeypot → silent 200, foreign Origin → 403, valid but unconfigured → 503, GET → 405. `npx eslint src`, `tsc` and `npm run build` pass (`/contact` static, `/api/contact` dynamic).

### 9.2x /calculator build record (19 November 2026)

- **Built:** `src/app/calculator/page.tsx`, new `src/components/calculator/Calculator.tsx` and a new engine in `src/lib/savings.ts`.
- **Engine (fact fix):** the old `calculateBessSavings` in `src/data/case-studies.ts` contradicted the approved `content/calculator-data.json`: ₹14,500/kWh capex (content ₹12,000), ₹7.5/kWh grid (content ₹7.0), 0.22 L/h per kVA of generator rating (content 0.27 L per kWh of load), and an unsourced 3% fuel and 2% grid escalation behind its "10-year net gain". The new engine imports the JSON and implements its `calculationFormulas` exactly: diesel = load × hours × 365 × 0.27 L at the diesel price, plus ₹100 per kVA a year; battery = the same energy ÷ 0.95 at the grid tariff, plus ₹50 per kWh a year; capex = kWh × ₹12,000; payback = capex ÷ saving; CO₂ = 2.68 kg/L. **One derived rule:** battery kWh = load × hours ÷ (0.90 DoD × 0.95), the parameters of vault Case Study B (2,000 kW × 3 h → 7,020 kWh vs the vault's 7,000). Check: the mall preset inputs give ₹1.84 Cr / ₹0.52 Cr / ₹1.32 Cr against the content preset's ₹1.82 / ₹0.51 / ₹1.31 Cr. The rule and every assumption are listed in the on-page disclosure.
- **CAL-01:** `PageHero` utility, "Diesel vs battery / savings calculator". The four stat boxes are removed ("1.8–2.4 yrs average payback", "up to 73%", "100% legal") with the hero chip.
- **CAL-02:** inputs on the left. Two example buttons set the site inputs (vault Case Study B: 2,000 kW, 3 h, 3,000 kVA; the content mall preset: 750 kW, 2.5 h, 1,000 kVA). Five native range sliders with live `<output>` values and `aria-valuetext`: load, outage hours, generator kVA, diesel price (default ₹98.8) and grid tariff (default ₹7.0). Results on the right, sticky on desktop: the annual saving (large, tweened with Motion `animate`, M3, instant under reduced motion), payback and battery size, diesel vs battery annual cost bars (scale-x transition), and a 10-year cash line from −capex rising by the saving. It is linear (no escalation), so it is not dressed up as a curve; it redraws with a CSS `d` transition and has a break-even marker. Then system cost, litres and CO₂ avoided. A polite live region announces the new estimate.
- **CAL-03:** "How this is calculated" disclosure under the results, including what is not modelled (fuel price rises, financing, tax, solar, demand charges, generator capex).
- **CAL-04:** "Send me this as a proposal" links to `/contact?type=assessment&from=calculator&load=…&outage=…&dgCapacity=…`. The contact form now reads `outage` and `from=calculator`, prefilling step 2 and the notes.
- **Removed:** case-study presets as "Audited Engineering Project" tabs (the case figures live on Case Studies, linked under the tool); the "Download Summary" text file, which restated unsourced items ("Calculation Engine v2.4", "100% GRAP compliant", "Zero DG fines"); the methodology card's "Tier-1 degradation curves" and "auxiliary cooling loads" (not in the model); and the "power quality analyzers … 15-minute load curves" promise.
- **Behaviour to note for review:** with the content formulas, cost and saving both scale with load × hours, so payback stays near 2.0 years unless prices change. This is the model as written in `calculator-data.json`, not a bug.
- **Tests:** at 1440, 1024, 768, 375 and 320 plus reduced motion and no JS (the server render shows the default estimate): one h1, logical h2/h3, no overflow, no console errors other than the known favicon 404. Interaction: example buttons set inputs and `aria-pressed`, arrow keys move sliders, values tween and settle, and the proposal link prefills the contact form. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2y /services build record (19 November 2026)

- **Built:** `src/app/services/page.tsx`, with new `DeliverySteps.tsx` and `ResponseZones.tsx` in `src/components/services/`. Anchors: `#delivery`, `#support`, `#coverage`.
- **SRV-01 (deviation):** `PageHero` editorial rather than image. Every installation photo available is a 764 × 1216 portrait catalogue crop, too small for a full-bleed hero, so the real Lucknow rack photo sits in the side column, captioned "A Lith-On battery rack installed in Lucknow". Headline "From site survey / to 24/7 monitoring", one sentence, two actions. A landscape commissioning photo is added to the asset list.
- **SRV-02 (deviation):** the spec's "Week 1–11" timeline is not built, because no source gives delivery weeks; the old page's "8–11 week turnkey timeline" was unsourced. Instead, a five-step stepper follows the turnkey EPC sequence in `content/capabilities.md` (energy audit → sizing and payback → build and install → approvals (discom, CEIG, net metering) → commissioning). Its line draws on view (`ActiveOnView`, M7): horizontal on desktop, vertical on phones. Below it, "Getting your site ready" lists the four site-readiness items from `content/warranty-and-support.md`.
- **SRV-03 (interim):** the Standard, Comprehensive AMC and Premium 24/7 plans are **not published** (CLAIMS_REVIEW item 6: no source). In their place, "After commissioning": the four sourced monitoring capabilities (cell telemetry, anomaly detection, alerts and remote diagnosis, customer dashboard) and the 10-year warranty headline, linking to Warranty and support. Build the spec's plan comparison table once the client confirms the plans.
- **SRV-04:** "Field response". A schematic of three nested rings around the Noida hub that fade in from the centre (labelled "Schematic, not to scale"; no outline map of India, as on Case Studies) beside a list: Delhi-NCR 4–8 h, Tier-1 cities 24 h, pan-India 48 h (source wording, without "guaranteed"), spares from Noida, support hours.
- **SRV-05:** `ClosingCTA` inline (sizing and support).
- **Removed (unsourced):** "8–11 week turnkey timeline" and all phase week ranges; the three support plans; "trained partner technicians across North, West and South India"; the "L1 → L2 → L3" escalation path; the Noida warehouse spares list ("PCS IGBT modules, temperature sensors, cooling fans") and "pre-matched hot-swap modules"; "oscilloscope-verified" cutover tests; "Modbus, CAN, Ethernet, 4G gateway" (the source says encrypted cellular and industrial Ethernet); "IceBattery coating application and curing" as a delivery step; "Recommended for hospitals and data centres".
- **Tests:** at 1440, 1024, 768, 375 and 320 plus reduced motion and no JS: one h1, logical h2/h3, no overflow, no console errors other than the known favicon 404; the stepper line and zones reach their final state. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2z /warranty-and-support build record (19 November 2026)

- **Built:** `src/app/warranty-and-support/page.tsx`, with new `RetentionChart.tsx`, `TelemetryPanel.tsx` and `ResponseScale.tsx` in `src/components/warranty/`. Anchors: `#warranty`, `#monitoring`, `#response`, `#contact`.
- **WAR-01:** `PageHero` editorial, "Warranty / and support", one sentence; the visual is a giant "10" (`CountUp`, M3) over "year manufacturer warranty".
- **WAR-02 (adjusted):** the spec's "capacity-retention curve (100% → ≥70%)" would invent a degradation shape, because the source gives only the start and the floor. The chart therefore draws rated capacity at year 0 and the warranted 70% floor across 10 years, as a line that draws on view with a fading band labelled "Warranted range" and the caption "The warranty sets a floor, not a forecast". The chart is capped at 540 px wide so SVG labels stay at body size. Beside it: three coverage items from `content/warranty-and-support.md`. The conditions are a disclosure in the source's own terms (10 years or 6,000 full cycles, whichever is first; within recommended temperature and C-rate limits; > 6,000 cycles at 88–90% DoD), with a link to support for full terms.
- **WAR-03:** "Monitored cell by cell": the source's telemetry facts plus `99.9%` power availability as `stat-l` (from `content/why-lith-on.md`; kept per CLAIMS_REVIEW §3, without "never go dark"). The dashboard illustration is an HTML panel of 16 cell-voltage bars, one drifting low in red, labelled "Illustration" so it is not presented as Lith-On's real dashboard. Bars grow once on view; the spec's ticking values were dropped because design.md §13 forbids continuous animation.
- **WAR-04:** one 0–48 h axis that draws on view, with a 4–8 h range for Delhi-NCR and dots at 24 h (Tier-1) and 48 h (pan-India). The note on 24/7 remote diagnostics and Noida spares follows.
- **WAR-05/06 merged:** one bordered support panel ("Need help with a system?", primary "Open a support request" → `/contact?type=support`, phones, email, hours). The blue band is gone.
- **Removed (unsourced):** the conditions block's "15–35 °C cell core temperature", "must remain registered with SCADA or undergo annual factory audits" and the exclusions list (firmware, impact, flooding, non-isolated inverters); "Critical spare parts: immediate dispatch"; "logged every second" and "redundant" links; "full spare module inventory" in Delhi-NCR; "industry-leading"; "Register your system" (no registration process exists).
- **Tests:** at 1440, 1024, 768, 375 and 320 plus reduced motion and no JS: one h1, logical h2/h3, no overflow, no console errors other than the known favicon 404; all on-view visuals reach their final state. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.2aa /sustainability build record (19 November 2026)

- **Built:** `src/app/sustainability/page.tsx` and `src/components/sustainability/ImpactCompare.tsx`. Anchors: `#cost-of-diesel`, `#comparison`, `#grap`, `#solar`, `#lifecycle`.
- **SUS-01:** `PageHero` image with the campus scene (`scenes/campus.webp`, labelled "Illustrative scene"; no real Delhi-NCR clear-sky photograph exists), "Backup power / without the exhaust", one sentence.
- **SUS-02:** `StatBand` (count-up, equal sizes because the "≈" lead figure wrapped at XL) for the vault Case B society: ≈ 6,50,000 litres of diesel a year, ≈ 1,740 t direct CO₂ a year (at 2.68 kg/L), and < 55 dB against 85–95 dB.
- **SUS-03:** four large figures: 2.68 kg CO₂ per litre (count-up), PM2.5, NOx · SOx, and 75–95 dB, each with one line.
- **SUS-04:** "Diesel or Lith-On" for the same society: a table on wide screens and one block per row on phones. Bars grow on view for the numeric rows (diesel, CO₂, sound); exhaust and GRAP rows are text. A footnote says the figures are direct, on-site emissions and that grid charging carries the grid's emissions.
- **SUS-05/06:** "Running through GRAP" and "Storing solar for the evening" as two open splits (M1), linking to `/solutions#solar-shifting`; "Over the whole lifecycle" as a three-item numbered list (cobalt- and nickel-free LFP; built to be recycled; a second life).
- **SUS-07:** `ClosingCTA` inline, "See what your site would avoid" → savings calculator, secondary to sizing.
- **Fact handling:** emissions are stated as direct and on-site throughout. The old "ZERO emissions", "1,740 tons CO₂e eliminated" (which ignored grid charging) and the unsourced "0.71 kg CO₂/kWh" grid factor are removed. "2,800+ kg PM2.5" is left out, consistent with Case Studies. "100% GRAP compliant" is rephrased as "keeps supplying power through every GRAP stage". The claims only `content/sustainability.md` supports (recycling recovery and partners, second life, 70–90% solar self-sufficiency, < 55 dB) are kept and logged as **CLAIMS_REVIEW item 17**, with the derivation of 1,740 t.
- **Removed:** "audited monthly diesel log sheets", "IPCC standard factor", "Request Carbon Audit" (no such service is sourced), "solid-state", "each 1 MWh prevents thousands of tons", "drastically", "critical missing link".
- **Tests:** at 1440, 1024, 768, 375 and 320 plus reduced motion and no JS: one h1, logical h2/h3, no overflow, no console errors other than the known favicon 404; the bars reach their final state. `npx eslint src`, `tsc` and `npm run build` pass.

### 9.3 Definition of done (per section)

A section moves to **Done** only when all of these hold:

1. It follows its specification here, or the change is written back into this document.
2. It uses only §2 tokens and §2.5 components; no new one-off styles.
3. Its composition differs from the section before it (§2.6).
4. Words on its desktop screen are close to 80 or fewer, unless it is a spec table, form or legal text.
5. Motion uses only §3.3 patterns, has a reduced-motion fallback, and animates transform/opacity only.
6. It has been checked in the browser at 1440, 1024, 768 and 375, with keyboard navigation and a screen-reader pass of its headings and controls.
7. No regressions: `npx eslint src` and `npm run build` pass; LCP and CLS budgets hold on the page.
8. No fact, figure or claim was invented or changed (§10).
9. Before/after screenshots are added to `screens/after/`.

---

<a id="10-parallel-workstream"></a>
## 10. Parallel workstream: content and facts

Factual accuracy is a quality gate, not the driver of this project. It continues in [`CLAIMS_REVIEW.md`](../../CLAIMS_REVIEW.md), which lists every claim removed pending confirmation and the open questions (four products not in the source catalogue, SIL level, 72-hour claims, Grid Services specs, service plans, test-report list, derived capex figures, privacy/legal mailboxes).

Rules for the redesign:

- Copy is shortened and recomposed, never extended with new facts.
- Where a design needs a figure that is not sourced, the slot is left out or marked for the client, not filled.
- New missing-content items found while designing are added to CLAIMS_REVIEW, not fixed silently.

---

<a id="11-decisions-needed"></a>
## 11. Decisions (all approved 17 November 2026)

| # | Decision | Status and implementation |
|---|---|---|
| 11.1 | Design system: 17px body, less monospace, two-tone headline once per page, larger headings, Manrope only | **Approved, done.** design.md v3.0 §5, §6, §16, §17; tokens in `globals.css`. |
| 11.2 | One dark photographic band per page | **Approved, done.** `stage-dark` token; design.md §11: storytelling only, never a CTA background. Closing CTAs are light (`ClosingCTA`). |
| 11.3 | Rendered environments as interim imagery | **Approved, done.** `illustrative` prop on `MediaFrame`, `PageHero` and `ScrollStory` renders a visible "Illustrative scene" label. |
| 11.4 | Lenis | **Approved, done.** `lenis@1.3.27`; synced with ScrollTrigger; off for reduced motion and touch devices (`docs/MOTION_SYSTEM.md` §6). |
| 11.5 | Page transitions | **Approved, done.** Next 16 docs reviewed; React `<ViewTransition>` in `src/app/template.tsx`, subtle fade + 12px rise, header anchored, instant for reduced motion. |
| 11.6 | Unpublish `/blog` | **Approved, done.** Temporary 307 redirect `/blog` and `/blog/*` → `/resources` in `next.config.ts` (keeps inbound links working, signals a temporary move, no redirect chain later). Removed from footer and sitemap. Page source kept in `src/app/blog/` for when real articles exist; restoring = delete the two redirect entries and re-add the sitemap/footer links. |
| 11.7 | Photography and CAD | **Approved in principle.** Brief and shot list: [`docs/ASSET_BRIEF.md`](../ASSET_BRIEF.md). Not blocking. |
| 11.8 | Five-item header | **Approved, done.** Products · Solutions · Industries · Technology · Company in `src/data/navigation.ts`; supporting pages regrouped; phone number moved into the menus. Full mega-menu redesign remains G2 (Phase 4). |

### Guardrails added with the approval
- **A. Intentional motion, not maximal motion:** design.md §13 budget (≤ 2 scroll experiences per page, some sections static).
- **B. Not every component is a card:** design.md §11 order of preference; `BentoTile surface="plain"`; open `StatBand`; editorial lists.
- **C. Desktop and phone as separate experiences:** built into `ScrollStory` (stacked chapters with their own images on phones), `HorizontalRail` (native swipe on phones), and Lenis (desktop only).

---

<a id="appendix-a"></a>
## Appendix A: measured section inventory

Generated from [`screens/sections.json`](screens/sections.json). Heights are rendered heights at 1440 (desktop) and 375 (phone). "Controls" counts buttons, tabs, disclosures and form fields. Screens open the section screenshots. The capture script splits pages at their top-level sections; Contact and Blog also have full-page shots (`screens/contact/full-*.jpg`, `screens/blog/full-*.jpg`). The orange "N" badge visible in some captures is the Next.js development indicator, not part of the site.

| Route | # | Section (first heading) | Desktop | Phone | Words | Images | Controls | Screens |
|---|---|---|---|---|---|---|---|---|
| `/` | 1 | Industrial BESS Engineered for 60°C Indian Heat & Zero Downtime. | 789px | 836px | 118 | 5 | 4 | [D](screens/home/01-d.jpg), [M](screens/home/01-m.jpg) |
| `/` | 2 | Industrial Scale. Measured Proof. | 653px | 1158px | 152 | 0 | 0 | [D](screens/home/02-d.jpg), [M](screens/home/02-m.jpg) |
| `/` | 3 | Engineered to Solve Your Four Biggest Energy Challenges. | 763px | 1537px | 178 | 1 | 4 | [D](screens/home/03-d.jpg), [M](screens/home/03-m.jpg) |
| `/` | 4 | Engineered Battery Storage Systems Built for Every Operational Scale. | 877px | 1481px | 176 | 5 | 4 | [D](screens/home/04-d.jpg), [M](screens/home/04-m.jpg) |
| `/` | 5 | Engineered for Extreme Heat. Certified for Zero Downtime. | 1139px | 947px | 272 | 1 | 0 | [D](screens/home/05-d.jpg), [M](screens/home/05-m.jpg) |
| `/` | 6 | 20,000 Sq. Ft. Clean Assembly Floor. Indian Engineering Precision. | 699px | 1388px | 167 | 1 | 4 | [D](screens/home/06-d.jpg), [M](screens/home/06-m.jpg) |
| `/` | 7 | Proven Financial Returns. Measured in Crores Saved. | 887px | 1562px | 181 | 1 | 0 | [D](screens/home/07-d.jpg), [M](screens/home/07-m.jpg) |
| `/` | 8 | Deploy Proven Industrial Energy Storage. Manufactured in Noida, Verified Worldwide. | 901px | 927px | 164 | 0 | 0 | [D](screens/home/08-d.jpg), [M](screens/home/08-m.jpg) |
| | | **Page total** | 8475px | 11378px (14.0 screens) | | | | |
| `/about` | 1 | Integrated Energy Storage. Engineered for the Real World. | 686px | 620px | 64 | 0 | 0 | [D](screens/about/01-d.jpg), [M](screens/about/01-m.jpg) |
| `/about` | 2 | (no heading) | 150px | 318px | 39 | 0 | 0 | [D](screens/about/02-d.jpg), [M](screens/about/02-m.jpg) |
| `/about` | 3 | Corporate Identity: Lith-On Bharat Energy & Neoclo Energy | 246px | 484px | 81 | 0 | 0 | [D](screens/about/03-d.jpg), [M](screens/about/03-m.jpg) |
| `/about` | 4 | IIT Alumni Leadership & Indian Grid Wisdom | 332px | 742px | 100 | 0 | 0 | [D](screens/about/04-d.jpg), [M](screens/about/04-m.jpg) |
| `/about` | 5 | Dual Geographic Advantage: Noida & Foshan | 1056px | 1414px | 203 | 4 | 0 | [D](screens/about/05-d.jpg), [M](screens/about/05-m.jpg) |
| `/about` | 6 | Engineering Deployed Across 25+ Countries | 792px | 1139px | 105 | 1 | 2 | [D](screens/about/06-d.jpg), [M](screens/about/06-m.jpg) |
| `/about` | 7 | Visual Growth & Technology Timeline | 1435px | 1932px | 203 | 0 | 0 | [D](screens/about/07-d.jpg), [M](screens/about/07-m.jpg) |
| `/about` | 8 | Verified certifications & conformance | 144px | 222px | 16 | 0 | 0 | [D](screens/about/08-d.jpg), [M](screens/about/08-m.jpg) |
| `/about` | 9 | Our Core Engineering Values | 501px | 991px | 142 | 0 | 0 | [D](screens/about/09-d.jpg), [M](screens/about/09-m.jpg) |
| `/about` | 10 | Connect with Lith-On Engineering Founders | 304px | 427px | 35 | 0 | 0 | [D](screens/about/10-d.jpg), [M](screens/about/10-m.jpg) |
| | | **Page total** | 7621px | 9927px (12.2 screens) | | | | |
| `/products` | 1 | Industrial BESS & Storage Systems | 664px | 598px | 51 | 0 | 1 | [D](screens/products/01-d.jpg), [M](screens/products/01-m.jpg) |
| `/products` | 2 | Engineered Industrial Systems | 3431px | 1068px | 401 | 8 | 5 | [D](screens/products/02-d.jpg), [M](screens/products/02-m.jpg) |
| `/products` | 3 | (no heading) | 70px | 146px | 23 | 0 | 0 | [D](screens/products/03-d.jpg), [M](screens/products/03-m.jpg) |
| `/products` | 4 | Need Custom Battery Pack or Skid Engineering? | 304px | 404px | 41 | 0 | 0 | [D](screens/products/04-d.jpg), [M](screens/products/04-m.jpg) |
| | | **Page total** | 5661px | 3439px (4.2 screens) | | | | |
| `/products/magna-ci` | 1 | (no heading) | 49px | 49px | 7 | 0 | 0 | [D](screens/products__magna-ci/01-d.jpg), [M](screens/products__magna-ci/01-m.jpg) |
| `/products/magna-ci` | 2 | Magna-C&I 260 kWh | 916px | 1662px | 133 | 1 | 1 | [D](screens/products__magna-ci/02-d.jpg), [M](screens/products__magna-ci/02-m.jpg) |
| `/products/magna-ci` | 3 | Standard vs. Optional Configurations | 524px | 850px | 91 | 0 | 0 | [D](screens/products__magna-ci/03-d.jpg), [M](screens/products__magna-ci/03-m.jpg) |
| `/products/magna-ci` | 4 | (no heading) | 69px | 145px | 24 | 0 | 0 | [D](screens/products__magna-ci/04-d.jpg), [M](screens/products__magna-ci/04-m.jpg) |
| `/products/magna-ci` | 5 | Full Technical Datasheet | 1421px | 1863px | 206 | 0 | 0 | [D](screens/products__magna-ci/05-d.jpg), [M](screens/products__magna-ci/05-m.jpg) |
| `/products/magna-ci` | 6 | Frequently Asked Questions for Magna-C&I 260 kWh | 634px | 804px | 123 | 0 | 0 | [D](screens/products__magna-ci/06-d.jpg), [M](screens/products__magna-ci/06-m.jpg) |
| `/products/magna-ci` | 7 | Ready to deploy Magna-C&I 260 kWh? | 747px | 1182px | 146 | 0 | 0 | [D](screens/products__magna-ci/07-d.jpg), [M](screens/products__magna-ci/07-m.jpg) |
| | | **Page total** | 4975px | 7426px (9.1 screens) | | | | |
| `/solutions` | 1 | Solving Critical Energy Challenges With Digital Battery Storage | 666px | 654px | 68 | 0 | 0 | [D](screens/solutions/01-d.jpg), [M](screens/solutions/01-m.jpg) |
| `/solutions` | 2 | Five Core Operational Solutions | 1686px | 2323px | 336 | 0 | 5 | [D](screens/solutions/02-d.jpg), [M](screens/solutions/02-m.jpg) |
| `/solutions` | 3 | Modular DC Subsystems & Telecom Power | 615px | 1049px | 145 | 0 | 0 | [D](screens/solutions/03-d.jpg), [M](screens/solutions/03-m.jpg) |
| `/solutions` | 4 | (no heading) | 212px | 332px | 30 | 0 | 0 | [D](screens/solutions/04-d.jpg), [M](screens/solutions/04-m.jpg) |
| `/solutions` | 5 | Need a Site-Specific Engineering Sizing Proposal? | 330px | 457px | 42 | 0 | 0 | [D](screens/solutions/05-d.jpg), [M](screens/solutions/05-m.jpg) |
| | | **Page total** | 4845px | 6119px (7.5 screens) | | | | |
| `/industries` | 1 | Industry-Specific Energy Storage Solutions | 674px | 582px | 56 | 0 | 0 | [D](screens/industries/01-d.jpg), [M](screens/industries/01-m.jpg) |
| `/industries` | 2 | Engineered for Critical Infrastructure | 554px | 1109px | 129 | 0 | 0 | [D](screens/industries/02-d.jpg), [M](screens/industries/02-m.jpg) |
| `/industries` | 3 | Educational Campuses & Universities | 1235px | 1954px | 248 | 12 | 6 | [D](screens/industries/03-d.jpg), [M](screens/industries/03-m.jpg) |
| `/industries` | 4 | High-Altitude Border Bases & Arctic Resiliency | 366px | 716px | 74 | 1 | 0 | [D](screens/industries/04-d.jpg), [M](screens/industries/04-m.jpg) |
| `/industries` | 5 | Ready to Model Your Facility Energy Storage Requirements? | 330px | 457px | 41 | 0 | 0 | [D](screens/industries/05-d.jpg), [M](screens/industries/05-m.jpg) |
| | | **Page total** | 4495px | 6122px (7.5 screens) | | | | |
| `/technology` | 1 | Advanced Engineering & Proprietary Energy Storage Technology | 315px | 436px | 51 | 0 | 0 | [D](screens/technology/01-d.jpg), [M](screens/technology/01-m.jpg) |
| `/technology` | 2 | (no heading) | 967px | 1067px | 107 | 1 | 12 | [D](screens/technology/02-d.jpg), [M](screens/technology/02-m.jpg) |
| `/technology` | 3 | 1. IceBattery® Passive Ceramic Shield | 1466px | 2686px | 291 | 1 | 2 | [D](screens/technology/03-d.jpg), [M](screens/technology/03-m.jpg) |
| `/technology` | 4 | 2. Instantaneous Sub-10ms UPS Cutover | 697px | 1027px | 115 | 0 | 2 | [D](screens/technology/04-d.jpg), [M](screens/technology/04-m.jpg) |
| `/technology` | 5 | 3. In-House BMS + PCS + EMS Unified Stack | 1334px | 1637px | 307 | 0 | 4 | [D](screens/technology/05-d.jpg), [M](screens/technology/05-m.jpg) |
| `/technology` | 6 | 4. Heavy-Duty Tier-1 LiFePO4 (LFP) Architecture | 376px | 841px | 101 | 0 | 0 | [D](screens/technology/06-d.jpg), [M](screens/technology/06-m.jpg) |
| `/technology` | 7 | (no heading) | 180px | 284px | 26 | 0 | 0 | [D](screens/technology/07-d.jpg), [M](screens/technology/07-m.jpg) |
| | | **Page total** | 7103px | 9554px (11.8 screens) | | | | |
| `/case-studies` | 1 | Real-World Case Studies & Audited Financial Models | 788px | 686px | 84 | 0 | 0 | [D](screens/case-studies/01-d.jpg), [M](screens/case-studies/01-m.jpg) |
| `/case-studies` | 2 | Invertis University Campus Microgrid | 547px | 1161px | 189 | 3 | 0 | [D](screens/case-studies/02-d.jpg), [M](screens/case-studies/02-m.jpg) |
| `/case-studies` | 3 | 500-Flat High-Rise Housing Society | 570px | 1053px | 173 | 1 | 0 | [D](screens/case-studies/03-d.jpg), [M](screens/case-studies/03-m.jpg) |
| `/case-studies` | 4 | Highway Commercial EV Fast-Charging Hub | 530px | 999px | 169 | 1 | 0 | [D](screens/case-studies/04-d.jpg), [M](screens/case-studies/04-m.jpg) |
| `/case-studies` | 5 | Pan-India Strategic Deployment Footprint | 1015px | 1118px | 89 | 0 | 6 | [D](screens/case-studies/05-d.jpg), [M](screens/case-studies/05-m.jpg) |
| `/case-studies` | 6 | Government & Utility Deployments | 514px | 1010px | 114 | 0 | 0 | [D](screens/case-studies/06-d.jpg), [M](screens/case-studies/06-m.jpg) |
| `/case-studies` | 7 | Deployments, Factory & Testing Gallery | 814px | 827px | 92 | 3 | 5 | [D](screens/case-studies/07-d.jpg), [M](screens/case-studies/07-m.jpg) |
| `/case-studies` | 8 | Want an Audited Financial Model for Your Facility? | 304px | 457px | 43 | 0 | 0 | [D](screens/case-studies/08-d.jpg), [M](screens/case-studies/08-m.jpg) |
| | | **Page total** | 6850px | 8855px (10.9 screens) | | | | |
| `/case-studies/invertis-university` | 1 | Invertis University Campus Microgrid | 453px | 598px | 39 | 0 | 0 | [D](screens/case-studies__invertis-university/01-d.jpg), [M](screens/case-studies__invertis-university/01-m.jpg) |
| `/case-studies/invertis-university` | 2 | Complete Project Economics | 555px | 1005px | 131 | 0 | 0 | [D](screens/case-studies__invertis-university/02-d.jpg), [M](screens/case-studies__invertis-university/02-m.jpg) |
| `/case-studies/invertis-university` | 3 | Deployment Impact | 541px | 714px | 70 | 0 | 0 | [D](screens/case-studies__invertis-university/03-d.jpg), [M](screens/case-studies__invertis-university/03-m.jpg) |
| `/case-studies/invertis-university` | 4 | Get a Custom Financial Model | 321px | 637px | 61 | 0 | 0 | [D](screens/case-studies__invertis-university/04-d.jpg), [M](screens/case-studies__invertis-university/04-m.jpg) |
| | | **Page total** | 2680px | 4003px (4.9 screens) | | | | |
| `/capabilities` | 1 | In-House Manufacturing, Engineering & Quality Infrastructure | 576px | 637px | 51 | 0 | 0 | [D](screens/capabilities/01-d.jpg), [M](screens/capabilities/01-m.jpg) |
| `/capabilities` | 2 | 20,000 sq. ft. Noida Assembly & Testing Facility | 290px | 821px | 101 | 0 | 0 | [D](screens/capabilities/02-d.jpg), [M](screens/capabilities/02-m.jpg) |
| `/capabilities` | 3 | The 6-Step Manufacturing Process | 713px | 1996px | 210 | 0 | 0 | [D](screens/capabilities/03-d.jpg), [M](screens/capabilities/03-m.jpg) |
| `/capabilities` | 4 | Comprehensive In-House Testing Laboratory | 410px | 1001px | 135 | 0 | 0 | [D](screens/capabilities/04-d.jpg), [M](screens/capabilities/04-m.jpg) |
| `/capabilities` | 5 | Turnkey EPC & Deployment Execution | 365px | 1045px | 115 | 0 | 0 | [D](screens/capabilities/05-d.jpg), [M](screens/capabilities/05-m.jpg) |
| `/capabilities` | 6 | (no heading) | 200px | 304px | 35 | 0 | 0 | [D](screens/capabilities/06-d.jpg), [M](screens/capabilities/06-m.jpg) |
| | | **Page total** | 4033px | 7188px (8.9 screens) | | | | |
| `/why-lith-on` | 1 | Why Choose Lith-On: Defensible Engineering & Native IP | 319px | 373px | 58 | 0 | 0 | [D](screens/why-lith-on/01-d.jpg), [M](screens/why-lith-on/01-m.jpg) |
| `/why-lith-on` | 2 | The Seven Structural Engineering Moats | 1028px | 2005px | 138 | 1 | 7 | [D](screens/why-lith-on/02-d.jpg), [M](screens/why-lith-on/02-m.jpg) |
| `/why-lith-on` | 3 | Evidence-Backed Technical Differentiation | 1055px | 2642px | 374 | 0 | 0 | [D](screens/why-lith-on/03-d.jpg), [M](screens/why-lith-on/03-m.jpg) |
| `/why-lith-on` | 4 | The Certification Trifecta: IEC 61508 + IEC 61850 + BIS | 411px | 952px | 125 | 0 | 0 | [D](screens/why-lith-on/04-d.jpg), [M](screens/why-lith-on/04-m.jpg) |
| `/why-lith-on` | 5 | Time-to-Replicate Analysis | 463px | 877px | 115 | 0 | 0 | [D](screens/why-lith-on/05-d.jpg), [M](screens/why-lith-on/05-m.jpg) |
| `/why-lith-on` | 6 | Partner with a Proven Indian BESS Manufacturer | 304px | 434px | 32 | 0 | 0 | [D](screens/why-lith-on/06-d.jpg), [M](screens/why-lith-on/06-m.jpg) |
| | | **Page total** | 5205px | 8780px (10.8 screens) | | | | |
| `/certifications` | 1 | Certifications & Compliance Standards | 599px | 544px | 52 | 0 | 0 | [D](screens/certifications/01-d.jpg), [M](screens/certifications/01-m.jpg) |
| `/certifications` | 2 | Standards We Test Against | 676px | 1420px | 194 | 0 | 0 | [D](screens/certifications/02-d.jpg), [M](screens/certifications/02-m.jpg) |
| `/certifications` | 3 | Documents Available on Request | 956px | 1994px | 230 | 0 | 0 | [D](screens/certifications/03-d.jpg), [M](screens/certifications/03-m.jpg) |
| `/certifications` | 4 | Request Certification Documents | 314px | 644px | 59 | 0 | 0 | [D](screens/certifications/04-d.jpg), [M](screens/certifications/04-m.jpg) |
| | | **Page total** | 3737px | 5826px (7.2 screens) | | | | |
| `/calculator` | 1 | BESS ROI & Diesel Displacement Calculator | 799px | 847px | 89 | 0 | 0 | [D](screens/calculator/01-d.jpg), [M](screens/calculator/01-m.jpg) |
| `/calculator` | 2 | Interactive System Sizing & Payback Modeler | 511px | 1016px | 122 | 0 | 5 | [D](screens/calculator/02-d.jpg), [M](screens/calculator/02-m.jpg) |
| `/calculator` | 3 | (no heading) | 244px | 568px | 99 | 0 | 0 | [D](screens/calculator/03-d.jpg), [M](screens/calculator/03-m.jpg) |
| `/calculator` | 4 | Ready to Replace Diesel Generation with BESS? | 330px | 447px | 44 | 0 | 0 | [D](screens/calculator/04-d.jpg), [M](screens/calculator/04-m.jpg) |
| | | **Page total** | 3076px | 4103px (5.1 screens) | | | | |
| `/contact` | 1 | (no heading) | 150px | 135px | 6 | 0 | 0 | [D](screens/contact/01-d.jpg), [M](screens/contact/01-m.jpg) |
| `/contact` | 2 | (no heading) | 59px | 130px | 21 | 0 | 0 | [D](screens/contact/02-d.jpg), [M](screens/contact/02-m.jpg) |
| `/contact` | 3 | (no heading) | 44px | 148px | 13 | 0 | 3 | [D](screens/contact/03-d.jpg), [M](screens/contact/03-m.jpg) |
| | | **Page total** | 2914px | 3950px (4.9 screens) | | | | |
| `/services` | 1 | Turnkey Services & After-Sales Support | 581px | 518px | 56 | 0 | 0 | [D](screens/services/01-d.jpg), [M](screens/services/01-m.jpg) |
| `/services` | 2 | From Site Survey to Live Operation | 687px | 1715px | 201 | 0 | 0 | [D](screens/services/02-d.jpg), [M](screens/services/02-m.jpg) |
| `/services` | 3 | Maintenance & Support Plans | 686px | 1350px | 142 | 0 | 0 | [D](screens/services/03-d.jpg), [M](screens/services/03-m.jpg) |
| `/services` | 4 | (no heading) | 271px | 678px | 121 | 0 | 0 | [D](screens/services/04-d.jpg), [M](screens/services/04-m.jpg) |
| `/services` | 5 | (no heading) | 180px | 342px | 31 | 0 | 0 | [D](screens/services/05-d.jpg), [M](screens/services/05-m.jpg) |
| | | **Page total** | 3740px | 5906px (7.3 screens) | | | | |
| `/grid-services` | 1 | Grid Services & Utility Solutions | 603px | 75px | 54 | 0 | 0 | [D](screens/grid-services/01-d.jpg), [M](screens/grid-services/01-m.jpg) |
| `/grid-services` | 2 | Services for the Modern Grid | 1658px | 208px | 501 | 0 | 0 | [D](screens/grid-services/02-d.jpg), [M](screens/grid-services/02-m.jpg) |
| `/grid-services` | 3 | (no heading) | 200px | 86px | 31 | 0 | 0 | [D](screens/grid-services/03-d.jpg), [M](screens/grid-services/03-m.jpg) |
| | | **Page total** | 3510px | 5546px (6.8 screens) | | | | |
| `/sustainability` | 1 | Accelerating Decarbonization Through Solid-State Energy Storage | 572px | 507px | 49 | 0 | 0 | [D](screens/sustainability/01-d.jpg), [M](screens/sustainability/01-m.jpg) |
| `/sustainability` | 2 | (no heading) | 146px | 284px | 36 | 0 | 0 | [D](screens/sustainability/02-d.jpg), [M](screens/sustainability/02-m.jpg) |
| `/sustainability` | 3 | The Real Cost of Diesel Generator Operation | 386px | 945px | 126 | 0 | 0 | [D](screens/sustainability/03-d.jpg), [M](screens/sustainability/03-m.jpg) |
| `/sustainability` | 4 | Annual Emissions Comparison: 500-Flat Community (3,000 kVA DG) | 553px | 1139px | 161 | 0 | 0 | [D](screens/sustainability/04-d.jpg), [M](screens/sustainability/04-m.jpg) |
| `/sustainability` | 5 | (no heading) | 362px | 971px | 167 | 0 | 0 | [D](screens/sustainability/05-d.jpg), [M](screens/sustainability/05-m.jpg) |
| `/sustainability` | 6 | Responsible & Circular Lifecycle Management | 304px | 621px | 84 | 0 | 0 | [D](screens/sustainability/06-d.jpg), [M](screens/sustainability/06-m.jpg) |
| `/sustainability` | 7 | (no heading) | 180px | 284px | 28 | 0 | 0 | [D](screens/sustainability/07-d.jpg), [M](screens/sustainability/07-m.jpg) |
| | | **Page total** | 4063px | 6167px (7.6 screens) | | | | |
| `/warranty-and-support` | 1 | 10-Year Manufacturer Warranty & Factory Engineering Support | 572px | 488px | 53 | 0 | 0 | [D](screens/warranty-and-support/01-d.jpg), [M](screens/warranty-and-support/01-m.jpg) |
| `/warranty-and-support` | 2 | 10-Year Comprehensive Warranty At a Glance | 519px | 1306px | 157 | 0 | 0 | [D](screens/warranty-and-support/02-d.jpg), [M](screens/warranty-and-support/02-m.jpg) |
| `/warranty-and-support` | 3 | 24/7 Cloud SCADA Telemetry & Remote Diagnostics | 326px | 749px | 111 | 0 | 0 | [D](screens/warranty-and-support/03-d.jpg), [M](screens/warranty-and-support/03-m.jpg) |
| `/warranty-and-support` | 4 | Service Level Agreements (SLAs) | 313px | 896px | 92 | 0 | 0 | [D](screens/warranty-and-support/04-d.jpg), [M](screens/warranty-and-support/04-m.jpg) |
| `/warranty-and-support` | 5 | (no heading) | 180px | 358px | 32 | 0 | 0 | [D](screens/warranty-and-support/05-d.jpg), [M](screens/warranty-and-support/05-m.jpg) |
| `/warranty-and-support` | 6 | (no heading) | 180px | 284px | 30 | 0 | 0 | [D](screens/warranty-and-support/06-d.jpg), [M](screens/warranty-and-support/06-m.jpg) |
| | | **Page total** | 3507px | 5417px (6.7 screens) | | | | |
| `/financing` | 1 | Financing & BESS on Rent | 578px | 473px | 53 | 0 | 0 | [D](screens/financing/01-d.jpg), [M](screens/financing/01-m.jpg) |
| `/financing` | 2 | Choose Your Acquisition Model | 557px | 1717px | 272 | 0 | 0 | [D](screens/financing/02-d.jpg), [M](screens/financing/02-m.jpg) |
| `/financing` | 3 | Calculate Your Monthly EMI | 272px | 473px | 55 | 0 | 0 | [D](screens/financing/03-d.jpg), [M](screens/financing/03-m.jpg) |
| `/financing` | 4 | Our Financing Partners | 446px | 901px | 123 | 0 | 0 | [D](screens/financing/04-d.jpg), [M](screens/financing/04-m.jpg) |
| `/financing` | 5 | (no heading) | 180px | 342px | 35 | 0 | 0 | [D](screens/financing/05-d.jpg), [M](screens/financing/05-m.jpg) |
| | | **Page total** | 3369px | 5210px (6.4 screens) | | | | |
| `/resources` | 1 | Engineering Resources & Datasheets | 439px | 407px | 27 | 0 | 0 | [D](screens/resources/01-d.jpg), [M](screens/resources/01-m.jpg) |
| `/resources` | 2 | Lith-On Master BESS Product E-Catalogue | 441px | 506px | 34 | 0 | 0 | [D](screens/resources/02-d.jpg), [M](screens/resources/02-m.jpg) |
| `/resources` | 3 | Downloadable Hardware Specifications | 1627px | 3413px | 318 | 0 | 0 | [D](screens/resources/03-d.jpg), [M](screens/resources/03-m.jpg) |
| `/resources` | 4 | Industry Insights & Technical Analysis | 881px | 1648px | 187 | 0 | 0 | [D](screens/resources/04-d.jpg), [M](screens/resources/04-m.jpg) |
| `/resources` | 5 | (no heading) | 309px | 441px | 25 | 0 | 0 | [D](screens/resources/05-d.jpg), [M](screens/resources/05-m.jpg) |
| | | **Page total** | 4314px | 7287px (9.0 screens) | | | | |
| `/faqs` | 1 | Frequently Asked Questions Technical & Operational Insights | 368px | 444px | 37 | 0 | 1 | [D](screens/faqs/01-d.jpg), [M](screens/faqs/01-m.jpg) |
| `/faqs` | 2 | (no heading) | 70px | 238px | 25 | 0 | 7 | [D](screens/faqs/02-d.jpg), [M](screens/faqs/02-m.jpg) |
| `/faqs` | 3 | (no heading) | 1388px | 2241px | 237 | 0 | 18 | [D](screens/faqs/03-d.jpg), [M](screens/faqs/03-m.jpg) |
| `/faqs` | 4 | (no heading) | 180px | 342px | 23 | 0 | 0 | [D](screens/faqs/04-d.jpg), [M](screens/faqs/04-m.jpg) |
| | | **Page total** | 3342px | 4601px (5.7 screens) | | | | |
| `/careers` | 1 | Build India's Clean Energy Grid | 420px | 393px | 36 | 0 | 0 | [D](screens/careers/01-d.jpg), [M](screens/careers/01-m.jpg) |
| `/careers` | 2 | (no heading) | 81px | 145px | 39 | 0 | 0 | [D](screens/careers/02-d.jpg), [M](screens/careers/02-m.jpg) |
| `/careers` | 3 | Open Positions at Noida Headquarters | 1541px | 2307px | 228 | 0 | 0 | [D](screens/careers/03-d.jpg), [M](screens/careers/03-m.jpg) |
| `/careers` | 4 | (no heading) | 429px | 499px | 36 | 0 | 0 | [D](screens/careers/04-d.jpg), [M](screens/careers/04-m.jpg) |
| | | **Page total** | 3087px | 4215px (5.2 screens) | | | | |
| `/distributor` | 1 | Become a Lith-On Channel Partner | 420px | 393px | 39 | 0 | 0 | [D](screens/distributor/01-d.jpg), [M](screens/distributor/01-m.jpg) |
| `/distributor` | 2 | Empowering Solar EPCs & Industrial Distributors | 701px | 1351px | 121 | 0 | 0 | [D](screens/distributor/02-d.jpg), [M](screens/distributor/02-m.jpg) |
| `/distributor` | 3 | Who Can Apply as a Distributor? | 797px | 1561px | 166 | 0 | 9 | [D](screens/distributor/03-d.jpg), [M](screens/distributor/03-m.jpg) |
| | | **Page total** | 2535px | 4176px (5.1 screens) | | | | |
| `/blog` | 1 | (no heading) | 75px | 75px | 5 | 0 | 0 | [D](screens/blog/01-d.jpg), [M](screens/blog/01-m.jpg) |
| `/blog` | 2 | (no heading) | 59px | 130px | 20 | 0 | 0 | [D](screens/blog/02-d.jpg), [M](screens/blog/02-m.jpg) |
| | | **Page total** | 2439px | 4260px (5.2 screens) | | | | |
| `/privacy-policy` | 1 | Privacy Policy | 385px | 203px | 10 | 0 | 0 | [D](screens/privacy-policy/01-d.jpg), [M](screens/privacy-policy/01-m.jpg) |
| `/privacy-policy` | 2 | 1. Who We Are | 2228px | 3308px | 607 | 0 | 0 | [D](screens/privacy-policy/02-d.jpg), [M](screens/privacy-policy/02-m.jpg) |
| | | **Page total** | 3373px | 4495px (5.5 screens) | | | | |
| `/terms-and-conditions` | 1 | Terms & Conditions | 385px | 203px | 12 | 0 | 0 | [D](screens/terms-and-conditions/01-d.jpg), [M](screens/terms-and-conditions/01-m.jpg) |
| `/terms-and-conditions` | 2 | 1. Acceptance of Terms | 2242px | 3532px | 703 | 0 | 0 | [D](screens/terms-and-conditions/02-d.jpg), [M](screens/terms-and-conditions/02-m.jpg) |
| | | **Page total** | 3387px | 4719px (5.8 screens) | | | | |

