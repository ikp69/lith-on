# Lith-On Motion System

**Status:** Phase 1, implemented 18 November 2026
**Rules:** design.md §13 (what is allowed). This document covers how it is built and how to use it.
**Preview:** `/design-system` (internal, not indexed).

---

## 1. Principles

1. **Intentional, not maximal.** A page has at most two sophisticated scroll experiences (a pinned story or a scroll-driven rail), a few interactive components, subtle entrances elsewhere, and some sections with no motion at all.
2. **Motion explains.** It reveals structure, shows a process or confirms an action. Decoration is cut.
3. **Content never depends on motion.** Everything is server-rendered visible. Motion only hides content when JavaScript is running and the visitor has not asked for reduced motion, and a CSS failsafe reveals it after 3 seconds regardless.
4. **Desktop and phone are separate experiences.** Pinned stories become stacked chapters; scroll-driven rails become native swipe; hover becomes tap. Phones keep native scrolling.

## 2. Libraries

| Library | Version | Used for |
|---|---|---|
| `motion` | 12.x (installed) | Entrance reveals (M1), line reveals (M2), count-ups (M3), component state |
| `gsap` + `ScrollTrigger` | 3.15 (installed) | Scroll story activation (M4), scroll-driven rails (M5), parallax (M6), diagram timelines (M7) |
| `lenis` | 1.3.27 (added, approved 11.4) | Smooth wheel scrolling on desktop, synchronised with ScrollTrigger |
| React `<ViewTransition>` | React 19.3 (built in) | Page transitions (M9). Chosen over Motion after reviewing `node_modules/next/dist/docs/01-app/02-guides/view-transitions.md`: native, no extra code, degrades to an instant swap |

## 3. Tokens

Defined in `src/components/motion/motion-env.ts` (JS) and `src/app/globals.css` (CSS: `--ease-out-expo`, `--ease-in-out-power3`).

| Token | Value |
|---|---|
| `DURATION.fast` / `standard` / `relaxed` / `deliberate` | 0.25s / 0.5s / 0.8s / 1.2s |
| `EASE_OUT` | `[0.16, 1, 0.3, 1]` (expo out) |
| `STAGGER.lines` / `STAGGER.items` | 0.06s / 0.09s |
| Reveal distance | 24px (items), 40px (heroes) |

## 4. The nine patterns

| # | Pattern | Component | Desktop | Phone | Reduced motion |
|---|---|---|---|---|---|
| M1 | Reveal | `components/motion/Reveal` | Fade + 24px rise, once, at 20% visible | Same | Instant |
| M2 | Line reveal | `components/motion/LineReveal` | Lines rise from a mask, 60ms stagger; `onLoad` for heroes | Same | Instant |
| M3 | Count-up | `components/motion/CountUp` | Counts from 0 over 1.2s, only for numbers that start below the fold | Same | Final value shown |
| M4 | Scroll story | `components/system/ScrollStory` | Media is CSS-sticky; ScrollTrigger marks the active chapter; media crossfades 700ms | Stacked chapters, each with its own image | Same layout, instant swap (`motion-safe:`) |
| M5 | Scroll rail | `components/system/HorizontalRail` (`scrollDriven`) | Section pins; vertical scroll translates the track (scrub 0.6) | Native swipe with snap | Native swipe with buttons |
| M6 | Parallax | `components/motion/Parallax`, `MediaFrame parallax` | Image drifts 8–15% inside its frame | Same (transform only) | Off |
| M7 | Diagram draw | Built per diagram in Phase 2/3 | GSAP timeline triggered in view | Same, simplified | Final state shown |
| M8 | Hover | CSS in `Button`, `MediaFrame zoomOnHover` | Image scale 1.03 in a clipped frame; arrow nudge 4px; underline grow | Not applicable (tap) | No transitions |
| M9 | Page transition | `src/app/template.tsx` | Old page fades out 160ms; new page fades + rises 12px over 300ms; header anchored | Same | Instant |

## 5. How entrance motion stays safe

1. `src/app/layout.tsx` runs an inline boot script before first paint (`MOTION_BOOT_SCRIPT`). It adds `html.js-motion` **only** when reduced motion is not requested.
2. CSS hides `[data-reveal]` and `[data-line-reveal]` content only under `.js-motion`, with a `motion-failsafe` animation that reveals it after 3s if JavaScript never hydrates.
3. On hydration, each primitive cancels the failsafe, animates with Motion when in view, and sets `data-revealed`.
4. With JavaScript disabled or reduced motion on, nothing is ever hidden.

Verified in the browser (see §8).

## 6. Lenis and ScrollTrigger

`src/components/motion/SmoothScroll.tsx`, mounted once in the root layout:

- Runs only with a fine pointer (mouse or trackpad) and without reduced motion. Phones and tablets keep native scrolling, which is the most responsive option on lower-powered devices.
- `lerp: 0.14`: light smoothing, close to native, without the floaty lag of the default.
- Driven by GSAP's ticker (`autoRaf: false`, `lagSmoothing(0)`); every Lenis scroll calls `ScrollTrigger.update`, so pins and scrubs stay in sync.
- `anchors` with a 96px offset (header height) for in-page links; `prevent` skips elements with `data-lenis-prevent` or `role="dialog"` so menus, drawers and horizontal rails scroll themselves.
- On route change: jump to top (unless there is a hash) and refresh ScrollTrigger.

## 7. Usage rules for page work (Phase 2+)

- Pick motion per section from the audit spec; most sections get M1 at most.
- At most one M1 per section. Do not wrap every child in `Reveal`.
- At most two of M4/M5 per page. Homepage plan: HOME-03 (M4) and HOME-04 (M5); everything else lighter.
- Use `LineReveal` only for hero and statement headlines.
- Use `CountUp` only in stat bands; never on figures the visitor needs to read immediately above the fold.
- Never animate `width`, `height`, `top`, `left` or `transition: all`. Transform and opacity only.
- Nothing loops or pulses unless the visitor is interacting with it.
- Every new animated component must work with reduced motion and with JavaScript disabled, and pass the checks in §8.

## 8. Test results (Phase 1)

Run in headless Chrome against the dev server, 18 November 2026:

| Check | Result |
|---|---|
| Desktop (1440, mouse): `js-motion` set, Lenis active | Yes / yes |
| Phone (375, touch): Lenis active | No (native scrolling, as intended) |
| Scroll-driven rail pins on desktop and progresses | 1 pin; track 0 → −184 → −368px across the pinned range |
| Scroll-driven rail on phone | Not pinned; native swipe |
| Scroll story activates each chapter's media in turn | Chapters 1–4 activated in order |
| Scroll story on phone | 4 chapters, each with its own image |
| All reveals visible after scrolling at reading speed | 0 hidden |
| Reduced motion: `js-motion`, Lenis, pins | None of them; 0 hidden reveals, 0 masked lines |
| JavaScript disabled | 0 hidden reveals; statistics show final values |
| Horizontal overflow at 375 and 1440 | None |
| Console or hydration errors on `/design-system` | None (one pre-existing `/favicon.ico` 404 site-wide) |
| Regression sweep: 26 existing routes at 375 and 1440 | All 200, no errors, no overflow; content heights unchanged |

**Not yet tested:** physical low-powered Android hardware (only emulated touch/viewport in headless Chrome) and Safari's View Transitions behaviour. Both are on the Phase 4 checklist.
