# Owner review: open questions from the deck audit

**Created:** 25 Nov 2026 · **How to use:** write the answer under each item ("Answer:"), then tell the developer. Nothing here blocks the build. Content marked *review* goes on the site for the initial review exactly as described in "What the site shows", and is corrected after your answer.

Related files: `docs/DECK_CONTENT_AUDIT.md` (the audit), `content/deck-content.md` (editable copy of every block), `docs/DECK_IMPLEMENTATION_PLAN.md` (build steps).

---

## Facts to confirm

### R1. Gurugram society and the EV hub: built projects, or modelled proposals?
- **Why it matters:** both come from sales decks ("BESS in Housing Society Presentation", "Hyundai Lith-On presentation") whose numbers are modelled. `/case-studies` calls them "Documented Savings". Kenya was removed for the same reason.
- **What the site shows for review:** both case studies stay live with their figures; new tables (EV bill breakdown, Gurugram five-year cost) are added. Blocks: `cs-ev-bill`, `cs-gurugram-five-year`, `ind-residential` (case link).
- **If they are proposals:** relabel as "Modelled scenario" and drop past-tense results.
- **Answer:**

### R2. Export countries
- **Decks say:** India, South Africa, Italy, Indonesia, Vietnam, Spain, Kenya (every closing slide).
- **Vault and site say:** "Asia, Middle East, Africa, North America".
- **What the site shows for review:** unchanged (vault regions). No country list or world map.
- **Answer (which list, and may we name countries?):**

### R3. What does "500+ MWh" mean?
- Six decks: "500+ MWh installed base". Corporate Deck p.2: "500+ MWh in-house BESS set-up in progress".
- **What the site shows for review:** "500+ MWh deployed globally" (unchanged).
- **Answer:**

### R4. Founding year and team experience
- Vault, About page, timelines: founded **2022** as Neoclo Energy; **40+** years combined experience.
- Corporate Deck p.2: "Founded in **2023**", "**20+** years of combined industry experience".
- **What the site shows for review:** 2022 and 40+ (unchanged).
- **Answer:**

### R5. Company timeline
- The About page uses the Corporate Deck timeline. Six other decks give different milestones (white label 2023, first 100 kWh industrial BESS, B2C launch 2024, liquid-cooled BESS with integrated PCS 2025, 100+ industrial projects and proprietary thermal management 2026).
- **What the site shows for review:** both merged into one timeline (block `about-timeline-additions`), and "100+ industrial projects" added as a stat (`home-projects-stat`).
- **Answer (keep merged / which to drop):**

### R6. "Seven certifications"
- Five decks say "hold seven international certifications" but name only IEC 61508, IEC 61850 and BIS.
- **What the site shows for review:** the three named standards only.
- **Answer (list the seven, with certificates):**

### R7. Invertis baseline
- The case-study page says Invertis replaced **2,500 kVA** of diesel costing **₹4.14 Cr → ₹1.88 Cr** a year. These figures come from `content/case-studies.md`; no deck contains them. "2,500 kVA" appears only in the universities deck's *model* campus.
- **What the site shows for review:** unchanged, plus the confirmed Corporate Deck facts (500 kW backup for 2 hours, 700+ hostel rooms, 140 classrooms, 8 offices, solar export).
- **Answer:**

## Wording and permissions

### R8. Mission and vision
- Corporate Deck: "To empower businesses, utilities and communities with efficient, reliable and eco-friendly energy storage systems, driving the global shift toward renewable energy and sustainability."
- Catalogue: "To empower industries and communities with cutting-edge energy storage solutions that are reliable, sustainable and efficient." Vision: "To be a global leader in next-generation lithium battery technology, driving the shift towards a greener, smarter energy ecosystem."
- **What the site shows for review:** the Corporate Deck mission and the catalogue vision on About.
- **Answer:**

### R9. Client names and logos
- Names (Indian Army, NTPC, RVUNL, PwC, RSPL, fuel stations) are already shown as text. Logos are in the decks.
- **What the site shows for review:** names as text only; RSPL Kanpur added. No logos; the Indian Army crest needs authorisation.
- **Answer (may we use logos? which?):**

### R10. White-label supply
- Six decks: "2023: started white label for reputed brands in BESS".
- **What the site shows for review:** `/distributor` gains "OEM and white-label supply" (`dist-white-label`).
- **Answer:**

## Products and commercial terms

### R11. E-rickshaw battery
- Catalogue p.28 (credited to Neoclo Energy): 51.2 V, 86–200 Ah, >3,500 cycles.
- **What the site shows for review:** a card in the home and small business range (`prod-erickshaw`), without the unverified certifications.
- **Answer (still sold?):**

### R12. "Compatible with all inverters"
- Catalogue p.6, for home inverter batteries.
- **What the site shows for review:** the line is included (`prod-home-inverter`).
- **Answer:**

### R13. Pay-per-unit (energy as a service) in India
- Kenya decks only: Lith-On owns the system and bills per unit at a fixed rate.
- **What the site shows for review:** a fourth model card on `/financing` (`fin-pay-per-unit`), no prices.
- **Answer (offered in India?):**

### R14. Rent-model site criteria
- Kenya business deck: >70% daytime load, roof area for solar, owned or 10+ year lease, payment history.
- **What the site shows for review:** "Sites that suit the rent model" on `/financing` (`fin-facility-fit`).
- **Answer:**

### R15. Financing partners
- Owner (20 Nov): India financing through Japanese partners. Kenya decks: "US investors leveraging ESG mandates, carbon credits and CSR".
- **What the site shows for review:** Japanese partners (unchanged).
- **Answer:**

## Data to source

### R16. Market statistics need a named source
- EV: 2.9 million public charging points by 2035 (NITI Aayog); a charger every 25 km on highways (Ministry of Power, 2024); 80,000+ fuel stations. Diesel: 70,000+ MW legacy generator capacity in India.
- **What the site shows for review:** the figures with the source name in the text (`ind-ev-policy`, `ind-dg-market`). Add links once verified.
- **Answer / links:**

### R17. Agriculture and other sectors
- Kenya deck priority list: tea factories, flower farms, food processing, steel, plastics, airports, data centres, SEZs, off-grid lodges.
- **What the site shows for review:** an "Also suited to" list on `/industries` (`ind-other-sectors`).
- **Answer:**

### R18. Generator noise range
- Housing deck 75–90 dB; universities deck >85 dB; Sustainability page 85–95 dB (from `content/sustainability.md`).
- **What the site shows for review:** unchanged on Sustainability; the Residential sector uses the housing deck's 75–90 dB.
- **Answer (one range):**

### R19. Lithium charging time
- Catalogue p.30 (on `/technology` now): lithium "full charge in 5–6 hours". Corporate Deck p.8: "2–4 hours, fast and efficient charging".
- **What the site shows for review:** 5–6 hours (unchanged).
- **Answer:**

---

## Already decided (for the record)
- Kept off: competitor table, 10-year warranty, investor revenue model and returns, Kenya market data, rejected safety wording, unverified certifications, renders presented as hardware. Full list: `src/data/deck-content/excluded.ts`.
