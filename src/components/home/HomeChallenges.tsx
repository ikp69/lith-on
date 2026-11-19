import { Button } from "@/components/system/Button";
import { ScrollStory, type StoryChapter } from "@/components/system/ScrollStory";
import { SectionIntro } from "@/components/system/SectionIntro";
import { Stat } from "@/components/system/Stat";
import { DieselVisual, OutageVisual, PeakVisual, SolarVisual } from "./ChallengeVisuals";

/**
 * HOME-03 Challenges (audit §5). The homepage's first sophisticated scroll
 * experience (M4): a live diagram per chapter, pinned on desktop, stacked on
 * phones. Every figure comes from a documented project in LITHON_DATA_VAULT.md.
 */
function Outcome({ stat, href, cta }: { stat: React.ComponentProps<typeof Stat>; href: string; cta: string }) {
  return (
    <div className="border-t border-line pt-6">
      <Stat {...stat} />
      <div className="mt-5">
        <Button href={href} variant="tertiary">
          {cta}
        </Button>
      </div>
    </div>
  );
}

const CHAPTERS: StoryChapter[] = [
  {
    id: "challenge-diesel",
    title: "Replace diesel generators",
    body: "Diesel backup is expensive to run and restricted under CAQM GRAP in Delhi-NCR. Storage charges from the grid and takes over silently when it fails.",
    visual: <DieselVisual />,
    aside: (
      <Outcome
        stat={{ value: 73, unit: "%", label: "Lower annual energy cost", note: "500-flat society in Gurugram: ₹6.52 Cr to ₹1.76 Cr a year" }}
        href="/solutions#dg-reduction"
        cta="Diesel replacement"
      />
    ),
  },
  {
    id: "challenge-peak",
    title: "Cut peak demand charges",
    body: "A few short spikes set your maximum demand charge for the month. The battery discharges through each spike, so grid draw stays under the contracted limit.",
    visual: <PeakVisual />,
    aside: (
      <Outcome
        stat={{ value: 100, unit: "%", label: "Of demand charges removed", note: "Highway EV fast-charging hub, storage-only model" }}
        href="/solutions#peak-shaving"
        cta="Peak demand shaving"
      />
    ),
  },
  {
    id: "challenge-outage",
    title: "Stay on when the grid fails",
    body: "The system takes over in under 10 milliseconds. Lifts keep moving, servers keep running, and nothing needs restarting.",
    visual: <OutageVisual />,
    aside: (
      <Outcome
        stat={{ value: 10, prefix: "<", unit: "ms", label: "Grid-to-island cutover", note: "A diesel generator leaves 10–30 seconds without power" }}
        href="/solutions#backup-power"
        cta="Backup power"
      />
    ),
  },
  {
    id: "challenge-solar",
    title: "Use the solar you already generate",
    body: "Midday surplus is stored instead of exported cheaply, then released in the evening when tariffs are highest.",
    visual: <SolarVisual />,
    aside: (
      <Outcome
        stat={{ value: 2.26, decimals: 2, prefix: "₹", unit: "Cr a year", label: "Saved at Invertis University", note: "1 MWh of storage with 900 kWp of rooftop solar" }}
        href="/solutions#solar-shifting"
        cta="Solar shifting"
      />
    ),
  },
];

export function HomeChallenges() {
  return (
    <section aria-labelledby="home-challenges-title" className="section bg-canvas-warm">
      <div className="container-site">
        <SectionIntro
          title={<span id="home-challenges-title">Four problems storage solves on site</span>}
          lead="What changes when a facility replaces diesel backup and grid peaks with Lith-On storage."
          split
        />
        <ScrollStory chapters={CHAPTERS} mediaAspect="5/4" />
      </div>
    </section>
  );
}
