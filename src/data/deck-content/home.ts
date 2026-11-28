import { type DeckBlock, SHARED, src } from "./types";

/** Route `/`. The deployments map itself lives in case-studies.ts (`cs-deployment-map`) and is reused here. */
export const HOME_BLOCKS: readonly DeckBlock[] = [
  {
    id: "home-deployments",
    route: "/",
    placement: "Results section, the list of installed sites beside the three photographs",
    component: "None (DeploymentsShowcase removed from HomeResults on 2026-11-26)",
    heading: "Where Lith-On systems are installed",
    points: [
      { title: "Indian Army", text: "Forward bases, Jammu & Kashmir" },
      { title: "Srinagar", text: "Jammu & Kashmir" },
      { title: "NTPC", text: "Lucknow and Shravasti (Uttar Pradesh), Jammu & Kashmir" },
      { title: "RVUNL", text: "Jaipur, Rajasthan" },
      { title: "PwC", text: "New Delhi" },
      { title: "Fuel station", text: "Lucknow, Uttar Pradesh" },
      { title: "Ghaziabad", text: "Uttar Pradesh" },
      { title: "Patna", text: "Bihar" },
      { title: "RSPL", text: "Kanpur, Uttar Pradesh", source: src("corporate", 10) },
    ],
    sources: [...SHARED.installs, src("catalogue", 31, 32)],
    status: "ready",
    onSite: false,
    note: "All names except RSPL Kanpur are already on the site. RSPL appears in the Corporate Deck (p.10, which drops PwC) and the catalogue photos. Show names as text; client logos need permission, and the Indian Army crest must not be used without authorisation.",
  },
  {
    id: "home-projects-stat",
    route: "/",
    alsoOn: ["/about"],
    placement: "Proof stat band, as a fifth figure",
    component: "HomeProof / StatBand",
    heading: "Industrial projects delivered",
    figures: [{ value: "100+", label: "Industrial projects delivered", note: "By 2026" }],
    sources: SHARED.intro,
    status: "confirm",
    onSite: true,
    note: "From the timeline repeated in six decks (2026: 'Delivered 100+ industrial projects'). The Corporate Deck timeline does not mention it. Owner decision C5.",
  },
];
