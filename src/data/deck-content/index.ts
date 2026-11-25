import { ABOUT_BLOCKS } from "./about";
import { CASE_STUDY_BLOCKS } from "./case-studies";
import { FAQ_BLOCKS } from "./faqs";
import { HOME_BLOCKS } from "./home";
import { INDUSTRIES_BLOCKS } from "./industries";
import { OTHER_PAGE_BLOCKS } from "./other-pages";
import { PRODUCTS_BLOCKS } from "./products";
import { SOLUTIONS_BLOCKS } from "./solutions";
import { TECHNOLOGY_BLOCKS } from "./technology";
import type { DeckBlock } from "./types";
import { WHY_BLOCKS } from "./why-lith-on";

/**
 * Every deck-content block, in page order. See docs/DECK_CONTENT_AUDIT.md for
 * the audit behind it and `excluded.ts` for what stays off the site.
 */
export const ALL_DECK_BLOCKS: readonly DeckBlock[] = [
  ...HOME_BLOCKS,
  ...ABOUT_BLOCKS,
  ...WHY_BLOCKS,
  ...TECHNOLOGY_BLOCKS,
  ...SOLUTIONS_BLOCKS,
  ...INDUSTRIES_BLOCKS,
  ...CASE_STUDY_BLOCKS,
  ...PRODUCTS_BLOCKS,
  ...OTHER_PAGE_BLOCKS,
  ...FAQ_BLOCKS,
];

/**
 * Initial-review switch. While true, blocks with status "confirm" are shown so
 * the owner can review them on the site (open questions: docs/OWNER_REVIEW.md).
 * Set to false before publishing unless every confirm block has been answered.
 */
export const SHOW_REVIEW_CONTENT = true;

/**
 * Blocks for one route: those assigned to it plus those that list it in `alsoOn`.
 * Pass `anchor` to narrow to one section.
 */
export const getDeckBlocks = (
  route: string,
  options: { anchor?: string; includeUnconfirmed?: boolean } = {}
): DeckBlock[] => {
  const includeUnconfirmed = options.includeUnconfirmed ?? SHOW_REVIEW_CONTENT;
  return ALL_DECK_BLOCKS.filter(
    (block) =>
      (block.route === route || block.alsoOn?.includes(route)) &&
      (options.anchor === undefined || block.anchor === options.anchor) &&
      (includeUnconfirmed || block.status === "ready")
  );
};

/** One block by id; throws if the id is unknown, so a typo fails the build. */
export const getDeckBlock = (id: string): DeckBlock => {
  const block = ALL_DECK_BLOCKS.find((b) => b.id === id);
  if (!block) {
    throw new Error(`Unknown deck-content block: ${id}`);
  }
  return block;
};
