# Lith-On Photography, Video & CAD Brief

**Purpose:** commission the imagery the redesign needs (audit §8, decision 11.7).
**Priority order (approved):** 1 Noida facility · 2 cabinet/product photography · 3 installations · 4 testing and assembly processes · 5 CAD drawing of one cabinet.
**Rule:** the redesign does not wait for this. Interim imagery is used and labelled "Illustrative scene" where rendered (decision 11.3); each delivered asset replaces a named slot.

---

## 1. Look and treatment (applies to every shot)

- Natural daylight or clean, even factory light. No dramatic colour grading, filters, lens flare or heavy vignettes.
- Light-first palette: white and grey surfaces, Lith-On red and blue appear naturally through branding and safety markings only.
- Real people where relevant (hands at work, engineers at benches), in proper PPE, faces optional; written consent for any identifiable person.
- Clean frames: remove clutter, cables tidied, no competitor branding, no unrelated logos, no visible screens with confidential data.
- Leave negative space on one side of wide shots (headlines will sit there). Shoot both landscape and portrait versions of hero shots.

## 2. Technical specification

| Item | Requirement |
|---|---|
| Stills | RAW + full-resolution JPEG; long edge ≥ 6000px; sRGB delivery copies at 3000px |
| Product cut-outs | Shot on seamless white/grey, evenly lit; delivered as layered TIFF and transparent PNG/WebP at ≥ 2400px; consistent camera height and ¾ angle across all products |
| Video | 4K/25fps, 8–15 second locked-off or slow dolly loops, no audio needed; also 1080p H.264 web masters |
| Naming | `lithon_<area>_<subject>_<nn>.jpg`, e.g. `lithon_plant_exterior_01.jpg` |
| Rights | Full commercial, perpetual, worldwide usage for web, print and presentations |

## 3. Shot list

### Priority 1 — Noida facility (Sector 136)
| # | Shot | Use (audit ID) |
|---|---|---|
| 1.1 | Plant exterior with signage, wide, daylight, landscape + portrait | ABT-01, CAP-01, CON-02 |
| 1.2 | Assembly floor, wide establishing shot from height | CAP-01, HOME-06 |
| 1.3 | Plant entrance / reception (if presentable) | About, Careers |
| 1.4 | Video loop: activity across the assembly floor | CAP-01 hero background |

### Priority 2 — Products
For **each** of Magna-C&I 260 kWh, Lith-On-50, LT215 and Max-20HC-5000:
| # | Shot | Use |
|---|---|---|
| 2.1 | Front ¾ cut-out (the "hero" angle), doors closed | HOME-01, HOME-04, PRD-01/02, PDP-02, mega-menu |
| 2.2 | Straight front and side cut-outs | Product detail thumbnails |
| 2.3 | Doors open showing racks, BMS, PCS (where safe) | PDP-04, TEC-02 |
| 2.4 | Close details: nameplate, IceBattery® coated surface, vents, connectors | PDP, Technology |
| 2.5 | Family line-up: all four together, to scale | PRD-01 |

Note: the old LT215 image carries a non-Lith-On logo and must not be used.

**Interim (18 Nov 2026):** item 2.1 is partly covered by renders extracted from the client catalogue (`data-sources/Lith-On Catalogue/`, pages 22–24). They have the background removed and are saved to `public/images/products/catalogue/` (Lith-On-50, LT215, Magna-C&I-260, Magna-UTL, Max-20HC-3440, Max-20HC-5000; 700–1,400 px). They are renders, not photographs. Higher-resolution source files would still help.

### Priority 3 — Installations
| # | Site | Shots | Use |
|---|---|---|---|
| 3.1 | Invertis University, Bareilly (1 MWh + 900 kWp) | Wide of the BESS yard with campus context; rooftop solar; detail of cabinets | HOME-07, CS-02, CSD-01 |
| 3.2 | Gurugram 500-flat society (7 MWh) | Installation pad in context of towers; detail | CS-03 |
| 3.3 | EV fast-charging hub (450 kWh + 75 kWp) | Chargers and BESS together, vehicles charging | CS-04, IND (EV) |
| 3.4 | One industrial/commercial site and one hospital or data room (if permitted) | Wide + detail | HOME-03, SOL-02, IND-03 |

Client permission is required for every customer site; record it with the files.

### Priority 4 — Testing and assembly process
| # | Stage | Shots | Use |
|---|---|---|---|
| 4.1 | Cell sorting and grading | Hands, equipment, cells in trays | HOME-06, CAP-03 |
| 4.2 | Laser busbar welding | Close action, sparks optional, safe framing | HOME-06, CAP-03 |
| 4.3 | Module and cabinet assembly | Wide and medium | HOME-06, CAP-03 |
| 4.4 | BMS harness and wiring | Detail | CAP-03 |
| 4.5 | Burn-in / end-of-line testing, dielectric testing, thermal chamber | Wide with equipment readouts (non-confidential) | CAP-04 |
| 4.6 | 5–10s video loop of each stage | HOME-06 horizontal assembly line |

### Priority 5 — CAD
| # | Item | Use |
|---|---|---|
| 5.1 | General arrangement drawing of one cabinet (Magna-C&I preferred): front, side, internal layout with racks, BMS, PCS, HVAC, fire suppression | TEC-02 scroll-driven exploded view, PDP-04 |
| 5.2 | Format: vector (SVG, DXF or PDF), simplified for public use (no confidential dimensions if needed) | |
| 5.3 | Optional: a GLB/STEP model if one exists; only then would a 3D view be considered | |

### Optional
- Leadership portraits on a consistent light background (About).
- Two or three wide "context" shots of Indian C&I sites with real Lith-On systems for sector pages.

## 4. Delivery and review

1. Shoot plan agreed with the plant (safety, access windows, PPE).
2. Contact sheet review → selects → retouched finals.
3. Files delivered to `data-sources/photography/<area>/`; web derivatives are generated into `public/images/` during implementation.
4. Each placement in the site is logged in `ASSET_MANIFEST.md` with source, consent and date.

## 5. Open photo slots on the site (26 Nov 2026)

Each slot shows a dashed "Photo needed" frame (`PhotoNeeded`). `grep -rn "PhotoNeeded" src` lists them in code. Replace the component with the photograph once it arrives, then tick it here.

| Done | Page | Slot | What to shoot | Minimum size |
| :-: | --- | --- | --- | --- |
| [ ] | Home | Made in Noida collage (3) | Pack assembly; cabinet integration; end-of-line testing | 2400 × 1250; 1600 × 1150; 1200 × 1400 portrait |
| [ ] | Home, /case-studies, Invertis case study | Invertis feature and case-study header | Invertis storage yard and solar array, wide landscape | 2400 × 1250 |
| [ ] | /capabilities | Hero | Cabinet assembly on the plant floor | 2400 × 1600 |
| [ ] | /capabilities | Six process steps | One photo per stage: cell grading, module assembly, laser welding, BMS harness, IceBattery coating, end-of-line test | 1600 × 1200 each |
| [ ] | /capabilities | Closing | Plant exterior or assembly floor | 2000 × 1500 |
| [ ] | /careers | Hero | Team at work on the plant floor | 2400 × 1600 |
| [ ] | /case-studies | Closing | Engineer on site with a client at a running system | 2000 × 1500 |
| [ ] | /industries | EV charging sector (hero and section) | Cabinet at a fuel station or EV hub, landscape | 2400 × 1500 |
| [ ] | /industries | Data centres and telecom (hero and section) | Indoor installation in a server or telecom room, landscape | 2400 × 1500 |
| [ ] | Products | Tele-Rack 100, Resi-Shield 120, Solar-Hybrid 500, Mega-40HC | Product cut-out on white or transparent background | 1600 × 1600 |
