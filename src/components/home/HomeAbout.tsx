import { WhyBento } from "./WhyBento";

/**
 * HOME-02b Why Lith-On: the company introduction and the reasons buyers
 * choose it, as one bento grid (WhyBento). Sits after the stat band, so it
 * repeats none of its figures. Copy from content/about.md,
 * content/why-lith-on.md and LITHON_DATA_VAULT.md §1–2.
 */
export function HomeAbout() {
  return (
    <section aria-labelledby="why-lithon-title" className="section bg-canvas">
      <div className="container-site">
        <WhyBento />
      </div>
    </section>
  );
}
