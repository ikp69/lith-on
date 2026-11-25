/**
 * Deck content distribution: shared types and the source-deck registry.
 *
 * Every block in this folder is content taken from a client presentation in
 * `data-sources/`, assigned to the page (and section) where it should be shown.
 * Components read these blocks later; nothing here renders on its own.
 *
 * Rules for components:
 * - Render only `status: "ready"` blocks by default. `confirm` blocks wait for
 *   the owner decision named in their `note` (see docs/DECK_CONTENT_AUDIT.md §7).
 * - `onSite: true` means the page already shows this content (possibly with
 *   different wording); the block is the reference source for it.
 * - Keep the `sources` citation with the block when copy is edited.
 */

export type DeckId =
  | "corporate"
  | "investor"
  | "housing"
  | "universities"
  | "hyundai-ev"
  | "business-kenya"
  | "school-kenya"
  | "catalogue";

export interface DeckSource {
  title: string;
  /** Folder inside `data-sources/`. */
  folder: string;
  pages: number;
  /** What the deck is: a company profile, a sales proposal with modelled numbers, an investor pitch, or the catalogue. */
  kind: "company" | "proposal" | "investor" | "catalogue";
}

export const DECKS: Record<DeckId, DeckSource> = {
  corporate: { title: "Lith-On Corporate Deck", folder: "Lith-On Corporate Deck", pages: 11, kind: "company" },
  investor: { title: "Lith-On BESS presentation for Investors (Kenya)", folder: "Lith-On BESS presentation for Investors", pages: 16, kind: "investor" },
  housing: { title: "BESS in Housing Society Presentation (500 Flats)", folder: "BESS in housing society presentation", pages: 13, kind: "proposal" },
  universities: { title: "BESS presentation for universities", folder: "BESS presentation for universities", pages: 14, kind: "proposal" },
  "hyundai-ev": { title: "Hyundai Lith-On presentation (EV charging)", folder: "Hyundai Lith-On presentation", pages: 15, kind: "proposal" },
  "business-kenya": { title: "Lith-On presentation for business applications (Kenya)", folder: "Lith-On BESS presentation for business applications", pages: 14, kind: "proposal" },
  "school-kenya": { title: "Lith-On presentation for school application in Kenya", folder: "Lith-On presentation for school application in Kenya", pages: 13, kind: "proposal" },
  catalogue: { title: "Lith-On BESS Products Catalogue", folder: "Lith-On Catalogue", pages: 33, kind: "catalogue" },
};

/** Path of one slide image, relative to the repository root (for editors, not for rendering). */
export const slideFile = (deck: DeckId, page: number): string => {
  const dir = `data-sources/${DECKS[deck].folder}`;
  switch (deck) {
    case "corporate":
      return `${dir}/LITHON Corporate Deck_page-${String(page).padStart(4, "0")}.jpg`;
    case "catalogue":
      return `${dir}/LITH-ON-BESS-PRODUCTS-CATALOGUE_page_${String(page).padStart(2, "0")}.jpg`;
    case "investor":
      return `${dir}/Lith-on BESS Investor Presentation(1)-${page}.jpg`;
    case "housing":
      return `${dir}/BESS in Housing Society Presentation (500 Flats)-${page}.jpg`;
    case "universities":
      return `${dir}/BESS presentation for universities-${page}.jpg`;
    case "hyundai-ev":
      return `${dir}/Hyundai Lith-on Presentation-${page}.jpg`;
    case "business-kenya":
      return `${dir}/Lith-on Presentation for BUISNESS application in Kenya 1-${page}.jpg`;
    case "school-kenya":
      return `${dir}/Lith-on Presentation for School application in Kenya-${page}.jpg`;
    default:
      return dir;
  }
};

export interface SourceRef {
  deck: DeckId;
  pages: readonly number[];
}

/** Shorthand: `src("housing", 3, 4)`. */
export const src = (deck: DeckId, ...pages: number[]): SourceRef => ({ deck, pages });

/**
 * Slides repeated word for word across several decks. Cite these when a fact
 * comes from the shared material rather than one deck.
 */
export const SHARED = {
  intro: [src("universities", 2), src("housing", 2), src("hyundai-ev", 2), src("business-kenya", 2), src("school-kenya", 2), src("investor", 12)],
  best: [src("universities", 5), src("housing", 5), src("hyundai-ev", 5), src("business-kenya", 8), src("school-kenya", 6), src("investor", 5)],
  technology: [src("universities", 6), src("housing", 6), src("hyundai-ev", 6), src("business-kenya", 9), src("school-kenya", 7), src("investor", 13)],
  iceBattery: [src("universities", 7), src("housing", 7), src("hyundai-ev", 7), src("business-kenya", 10), src("school-kenya", 8), src("investor", 6)],
  moats: [src("universities", 12), src("housing", 11), src("hyundai-ev", 13), src("business-kenya", 12), src("school-kenya", 11), src("investor", 14)],
  installs: [src("corporate", 10), src("universities", 13), src("housing", 12), src("hyundai-ev", 14), src("business-kenya", 13), src("school-kenya", 12), src("investor", 15)],
  contact: [src("corporate", 11), src("universities", 14), src("hyundai-ev", 15), src("business-kenya", 14), src("investor", 16)],
} as const;

export type BlockStatus = "ready" | "confirm";

export interface Point {
  title?: string;
  text: string;
  href?: string;
  source?: SourceRef;
}

export interface Figure {
  value: string;
  label: string;
  note?: string;
  source?: SourceRef;
}

export interface DataTable {
  caption: string;
  columns: readonly string[];
  rows: readonly (readonly string[])[];
}

export interface DeckBlock {
  /** Stable id, prefixed by page. */
  id: string;
  /** Primary route the block belongs to. */
  route: string;
  /** Section anchor on that route, when the page has one. */
  anchor?: string;
  /** Other routes that should reuse the same block. */
  alsoOn?: readonly string[];
  /** Where on the page it goes, in plain words. */
  placement: string;
  /** Existing component to extend, or the suggested new one. */
  component: string;
  heading: string;
  lead?: string;
  points?: readonly Point[];
  figures?: readonly Figure[];
  table?: DataTable;
  sources: readonly SourceRef[];
  status: BlockStatus;
  onSite: boolean;
  /** Editor note: caveats, conflicts, wording rules. */
  note?: string;
}

/** Deck content deliberately kept off the website, with the reason. */
export interface ExcludedItem {
  id: string;
  content: string;
  reason: string;
  sources: readonly SourceRef[];
}
