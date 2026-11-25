/**
 * Regenerates content/deck-content.md from src/data/deck-content/.
 * Usage (from the repo root):
 *   npx tsc src/data/deck-content/index.ts src/data/deck-content/excluded.ts --outDir .deck-tmp --module commonjs --target es2020 --skipLibCheck
 *   node scripts/deck-content-md.cjs .deck-tmp content/deck-content.md
 *   (then delete .deck-tmp)
 */
const path = require("node:path");
const fs = require("node:fs");
const dir = path.resolve(process.argv[2]), out = path.resolve(process.argv[3]);
const { ALL_DECK_BLOCKS } = require(path.join(dir, "index.js"));
const { EXCLUDED } = require(path.join(dir, "excluded.js"));
const { DECKS } = require(path.join(dir, "types.js"));
const cite = (refs) => refs.map((r) => `${DECKS[r.deck].title} p.${r.pages.join(", ")}`).join("; ");
const order = ["/", "/about", "/why-lith-on", "/technology", "/solutions", "/industries", "/case-studies", "/case-studies/invertis-university", "/case-studies/ev-charging-hub", "/case-studies/residential-society-500", "/products", "/products/[slug]", "/services", "/grid-services", "/contact", "/calculator", "/financing", "/distributor", "/sustainability", "/faqs"];
const routes = [...new Set([...order, ...ALL_DECK_BLOCKS.map((b) => b.route)])].filter((r) => ALL_DECK_BLOCKS.some((b) => b.route === r));
let md = `# Deck content for the website (editable copy)

Generated from \`src/data/deck-content/\` on 25 Nov 2026. **Edit the copy here.** When a page is implemented, changes made in this file are synced back into the matching block in \`src/data/deck-content/\` (same block id), and the box in \`docs/DECK_IMPLEMENTATION_PLAN.md\` is ticked.

- **Status "ready"**: supported by the decks. **Status "review"**: going on the site for the initial review, with an open question in \`docs/OWNER_REVIEW.md\`.
- **On site**: the page already shows this content (possibly worded differently).
- Each block keeps its source (deck and page) so facts can be checked against \`data-sources/\`.

`;
md += "## Contents\n\n" + routes.map((r) => `- [\`${r}\`](#${r.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "home"})`).join("\n") + "\n- [Kept off the website](#kept-off-the-website)\n\n";
for (const r of routes) {
  md += `---\n\n## \`${r}\`\n<a id="${r.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "home"}"></a>\n\n`;
  for (const b of ALL_DECK_BLOCKS.filter((x) => x.route === r)) {
    md += `### ${b.heading}\n\n`;
    md += `- **Block id:** \`${b.id}\` · **Status:** ${b.status === "ready" ? "ready" : "review"} · **On site:** ${b.onSite ? "yes" : "no"}\n`;
    md += `- **Where:** ${b.placement}${b.anchor ? ` (\`#${b.anchor}\`)` : ""}${b.alsoOn ? `. Also on: ${b.alsoOn.map((a) => `\`${a}\``).join(", ")}` : ""}\n`;
    md += `- **Component:** ${b.component}\n`;
    md += `- **Source:** ${cite(b.sources)}\n\n`;
    if (b.lead) md += `${b.lead}\n\n`;
    if (b.figures) md += b.figures.map((f) => `- **${f.value}**: ${f.label}${f.note ? ` (${f.note})` : ""}${f.source ? ` _[${cite([f.source])}]_` : ""}`).join("\n") + "\n\n";
    if (b.points) md += b.points.map((p) => `- ${p.title ? `**${p.title}:** ` : ""}${p.text}${p.href ? ` → \`${p.href}\`` : ""}${p.source ? ` _[${cite([p.source])}]_` : ""}`).join("\n") + "\n\n";
    if (b.table) {
      md += `_${b.table.caption}_\n\n| ${b.table.columns.join(" | ")} |\n|${b.table.columns.map(() => "---").join("|")}|\n`;
      md += b.table.rows.map((row) => `| ${row.join(" | ")} |`).join("\n") + "\n\n";
    }
    if (b.note) md += `> **Editor note:** ${b.note}\n\n`;
  }
}
md += `---\n\n## Kept off the website\n<a id="kept-off-the-website"></a>\n\n| Content | Why | Source |\n|---|---|---|\n`;
md += EXCLUDED.map((e) => `| ${e.content.replace(/\|/g, "/")} | ${e.reason} | ${cite(e.sources)} |`).join("\n") + "\n";
fs.writeFileSync(out, md);
console.log("blocks", ALL_DECK_BLOCKS.length, "routes", routes.length);
