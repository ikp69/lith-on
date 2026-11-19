import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/system/Button";
import { SectionIntro } from "@/components/system/SectionIntro";
import { cn } from "@/lib/utils";

/**
 * HOME-06 Made in Noida (audit §5). Interim layout while plant photography is
 * outstanding (ASSET_BRIEF priority 1): the documented six-step process beside
 * an overlapping collage of the three genuine factory photographs, each shown
 * near its native size. No scroll-driven motion: the homepage's two scroll
 * experiences are HOME-03 and HOME-04. Steps from content/capabilities.md.
 */

const STEPS = [
  { title: "Cell sorting and grading", line: "Every incoming cell is tested for internal resistance, voltage and capacity, then matched." },
  { title: "Module assembly", line: "Matched cells are built into structural frames with aluminium side plates." },
  { title: "Laser busbar welding", line: "Terminals are laser-welded to busbars for a low-resistance bond." },
  { title: "BMS and sensor wiring", line: "Voltage, temperature and balancing harnesses are routed and locked." },
  { title: "IceBattery® coating", line: "The ceramic thermal shield is applied to the enclosure." },
  { title: "End-of-line validation", line: "Complete systems run on charge and discharge cyclers to verify capacity, insulation and safety trips." },
];

const PHOTOS = [
  {
    src: "/images/factory/battery-pack-assembly-photo.jpg",
    width: 444,
    height: 230,
    alt: "A technician in gloves wiring cell connections inside an open battery pack on the Noida assembly line",
    frame: "col-span-2 lg:absolute lg:top-0 lg:left-0 lg:w-[72%]",
  },
  {
    src: "/images/factory/integrated-bess-assembly-photo.jpg",
    width: 322,
    height: 230,
    alt: "Cabinet enclosure being assembled at a workbench with tools and parts bins",
    frame: "lg:absolute lg:top-[40%] lg:right-0 lg:w-[46%]",
  },
  {
    src: "/images/factory/testing-quality-assurance-photo.jpg",
    width: 200,
    height: 230,
    alt: "An engineer reviewing a system model on a workstation in the testing area",
    frame: "lg:absolute lg:bottom-0 lg:left-[8%] lg:w-[29%]",
  },
];

export function HomeManufacturing() {
  return (
    <section aria-labelledby="home-manufacturing-title" className="section bg-canvas">
      <div className="container-site">
        <SectionIntro
          title={<span id="home-manufacturing-title">Assembled and tested in Noida</span>}
          lead="Every system is built to a documented six-step process at our 20,000 sq. ft. plant in Sector 136."
          split
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          {/* Collage: real photographs, never enlarged far beyond native size */}
          <figure className="max-w-[560px] lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:max-w-none">
            <div className="grid grid-cols-2 items-start gap-3 sm:gap-4 lg:relative lg:block lg:aspect-[760/600] lg:max-w-[760px]">
              {PHOTOS.map((p, i) => (
                <Reveal key={p.src} delay={i * 0.12} className={cn("min-w-0", p.frame)}>
                  <div
                    className="relative overflow-hidden rounded-media bg-surface outline outline-1 -outline-offset-1 outline-black/5 lg:shadow-[0_0_0_6px_#fff]"
                    style={{ aspectRatio: `${p.width} / ${p.height}` }}
                  >
                    {/* Served unoptimised: the originals are already small (200–444 px). */}
                    <Image src={p.src} alt={p.alt} fill unoptimized className="object-cover" />
                  </div>
                </Reveal>
              ))}
            </div>
            <figcaption className="mt-4 text-small text-ink-3">Pack assembly, cabinet integration and testing at the Noida plant.</figcaption>
          </figure>

          {/* Process */}
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <ol className="border-t border-line">
              {STEPS.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-x-2 border-b border-line py-4">
                  <span className="tabular pt-0.5 text-small text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-body font-[500] text-ink">{s.title}</h3>
                    <p className="mt-1 text-small text-ink-2">{s.line}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Button href="/capabilities" variant="tertiary">
                Our manufacturing process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
