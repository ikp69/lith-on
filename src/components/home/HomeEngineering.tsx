import type { ReactNode } from "react";
import { ActiveOnView } from "@/components/motion/ActiveOnView";
import { BentoGrid, BentoTile } from "@/components/system/BentoGrid";
import { Button } from "@/components/system/Button";
import { SectionIntro } from "@/components/system/SectionIntro";
import { cn } from "@/lib/utils";
import { CutoverVisual, CyclesVisual, StackVisual, ThermalVisual } from "./EngineeringVisuals";

/**
 * HOME-05 Engineering (audit §5). A bento of four tiles, each with one figure,
 * one line and one link to the matching Technology section. Diagrams draw
 * once on entering view (M7). The IceBattery tile is the homepage's single
 * dark surface (design.md §11). Every figure from LITHON_DATA_VAULT.md §2.
 */

function TileHead({ label, schematic, dark }: { label: string; schematic?: boolean; dark?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <h3 className={cn("text-body font-[500]", dark ? "text-on-dark" : "text-ink")}>{label}</h3>
      {schematic && <p className={cn("text-[13px]", dark ? "text-on-dark-2" : "text-ink-3")}>Schematic</p>}
    </div>
  );
}

function Figure({ value, unit, caption, dark }: { value: string; unit?: string; caption: ReactNode; dark?: boolean }) {
  return (
    <div className="mt-6">
      <p className={cn("tabular flex flex-wrap items-baseline gap-x-[0.08em] text-stat-l", dark ? "text-on-dark" : "text-ink")}>
        <span>{value}</span>
        {unit && <span className="text-[0.32em] font-[500] tracking-normal whitespace-nowrap">{unit}</span>}
      </p>
      <p className={cn("mt-2 text-body", dark ? "text-on-dark-2" : "text-ink-2")}>{caption}</p>
    </div>
  );
}

export function HomeEngineering() {
  return (
    <section aria-labelledby="home-engineering-title" className="section bg-canvas-warm">
      <div className="container-site">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-10">
          <SectionIntro
            title={<span id="home-engineering-title">The engineering inside each cabinet</span>}
            lead="How Lith-On systems stay cool, switch over instantly and keep working for years."
            className="mb-6 lg:mb-12"
          />
          <div className="mb-10 lg:mb-12 lg:shrink-0">
            <Button href="/technology" variant="tertiary">
              Our technology
            </Button>
          </div>
        </div>

        <BentoGrid className="lg:auto-rows-auto">
          {/* IceBattery: the large tile */}
          <BentoTile cols={7} rows={2} wide surface="dark">
            <ActiveOnView className="flex h-full flex-col">
              <TileHead label="IceBattery® thermal shield" schematic dark />
              <Figure value="15–30" unit="°C" caption="Lower internal cabinet temperature" dark />
              <div className="relative mt-8 aspect-[480/300] w-full lg:aspect-auto lg:min-h-[260px] lg:flex-1">
                <div className="absolute inset-0">
                  <ThermalVisual />
                </div>
              </div>
              <ul className="mt-4 grid gap-1.5 text-small text-on-dark-2 sm:hidden">
                <li className="flex items-center gap-2.5"><span aria-hidden="true" className="h-0.5 w-4 bg-lithon-red" />Sunlight in</li>
                <li className="flex items-center gap-2.5"><span aria-hidden="true" className="h-px w-4 bg-on-dark-2" />Sunlight reflected</li>
                <li className="flex items-center gap-2.5"><span aria-hidden="true" className="h-0.5 w-4 bg-[#8FB0FF]" />Heat radiated at 8–13 µm</li>
                <li className="flex items-center gap-2.5"><span aria-hidden="true" className="size-3 rounded-[3px] border-2 border-[#8FB0FF]" />Ceramic coating, 300–400 µm</li>
              </ul>
              <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-small sm:grid-cols-2">
                <div>
                  <dt className="text-on-dark-2">Ambient limit at full power</dt>
                  <dd className="tabular mt-0.5 text-on-dark">60 °C</dd>
                </div>
                <div>
                  <dt className="text-on-dark-2">Cooling energy</dt>
                  <dd className="tabular mt-0.5 text-on-dark">More than 20% lower</dd>
                </div>
              </dl>
              <div className="mt-6">
                <Button href="/technology#icebattery" variant="tertiary" tone="dark">
                  How IceBattery works
                </Button>
              </div>
            </ActiveOnView>
          </BentoTile>

          {/* Cutover */}
          <BentoTile cols={5} surface="plain" className="rounded-media bg-white p-6 lg:p-8">
            <ActiveOnView className="flex h-full flex-col">
              <TileHead label="Grid-to-battery cutover" schematic />
              <Figure value="<10" unit="ms" caption="Lifts, servers and pumps keep running." />
              <div className="mt-6 aspect-[400/150] w-full">
                <CutoverVisual />
              </div>
              <div className="mt-auto pt-6">
                <Button href="/technology#waveform" variant="tertiary">
                  Cutover explained
                </Button>
              </div>
            </ActiveOnView>
          </BentoTile>

          {/* LFP cycles */}
          <BentoTile cols={5} surface="plain" className="rounded-media bg-white p-6 lg:p-8">
            <ActiveOnView className="flex h-full flex-col">
              <TileHead label="Lithium iron phosphate cells" />
              <Figure value=">6,000" unit="cycles" caption="At 88–90% depth of discharge, for a 15–20 year design life." />
              <div className="mt-6">
                <CyclesVisual />
                <p className="mt-2 text-[13px] text-ink-3">Each mark is 100 cycles</p>
              </div>
              <div className="mt-auto pt-6">
                <Button href="/technology#lifepo4" variant="tertiary">
                  About LFP chemistry
                </Button>
              </div>
            </ActiveOnView>
          </BentoTile>

          {/* In-house stack */}
          <BentoTile cols={12} wide surface="plain" className="rounded-media bg-white p-6 lg:p-8">
            <ActiveOnView className="flex flex-col gap-8 xl:flex-row xl:gap-12">
              <div className="max-w-xl xl:w-[28%] xl:shrink-0">
                <h3 className="text-body font-[500] text-ink">Control and safety, built in</h3>
                <p className="mt-2 text-small text-ink-2">Lith-On develops all four control layers itself, so they are designed to work together. Fire suppression is integrated into the system.</p>
                <div className="mt-5">
                  <Button href="/technology#stack" variant="tertiary">
                    The control stack
                  </Button>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <StackVisual />
              </div>
            </ActiveOnView>
          </BentoTile>
        </BentoGrid>
      </div>
    </section>
  );
}
