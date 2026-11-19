import { Button } from "@/components/system/Button";
import { StatBand } from "@/components/system/Stat";

/**
 * HOME-02 Proof (audit §5). An open stat band: no card, no icons, no visible
 * heading; the figures are the heading. One motion only: count-up (M3) for
 * figures that start below the fold. All figures from LITHON_DATA_VAULT.md §1–2.
 */
export function HomeProof() {
  return (
    <section aria-labelledby="home-proof-title" className="section-tight bg-canvas">
      <div className="container-site">
        <h2 id="home-proof-title" className="sr-only">
          Lith-On in numbers
        </h2>
        <StatBand
          stats={[
            { value: 250, unit: "MWh", label: "Annual manufacturing capacity", note: "50 MWh BESS and 200 MWh battery packs" },
            { value: 20000, label: "Sq. ft. assembly and testing plant", note: "Sector 136, Noida" },
            { value: 500, unit: "+ MWh", label: "Deployed globally" },
            { value: 25, unit: "+", label: "Countries", note: "Asia, Middle East, Africa, N. America" },
            { value: 10, prefix: "<", unit: "ms", label: "Grid-to-island cutover" },
          ]}
        />
        <div className="mt-12 flex justify-start border-t border-line pt-6 xl:justify-end">
          <Button href="/capabilities" variant="tertiary">
            Inside the Noida plant
          </Button>
        </div>
      </div>
    </section>
  );
}
