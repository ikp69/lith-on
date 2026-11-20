import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CatalogueDownload } from "@/components/resources/CatalogueDownload";
import { Reveal } from "@/components/motion/Reveal";
import { DatasheetLibrary } from "@/components/resources/DatasheetLibrary";
import { Button } from "@/components/system/Button";
import { SectionIntro } from "@/components/system/SectionIntro";

export const metadata: Metadata = {
  title: "Resources | Product Catalogue and Datasheets | Lith-On",
  description:
    "Request the Lith-On battery energy storage product catalogue and individual datasheets for every commercial, industrial, modular and utility system.",
};

/**
 * /resources (audit §6, RES-01–05). Hero with the catalogue cover and one
 * request button (RES-01/02 merged) → filterable datasheet table (RES-03) →
 * FAQ text link (RES-05). RES-04 articles removed: no articles exist (the four
 * "whitepapers" had no source and only linked to a request form). The
 * catalogue PDF downloads after a short name, email and phone form
 * (CatalogueDownload, owner 20 Nov 2026); datasheets are sent on request.
 */

const link = "text-lithon-blue underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue rounded-sm";

export default function ResourcesPage() {
  return (
    <div className="bg-canvas">
      {/* RES-01/02 */}
      <section className="border-b border-line bg-canvas-warm">
        <div className="container-site grid items-center gap-12 pt-10 pb-14 lg:grid-cols-12 lg:gap-6 lg:pt-16 lg:pb-20">
          <div className="lg:col-span-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-small text-ink-3">
                <li className="flex items-center gap-2">
                  <Link href="/" className="hover:text-ink hover:underline underline-offset-4">
                    Home
                  </Link>
                  <span aria-hidden="true">/</span>
                </li>
                <li>
                  <span aria-current="page" className="text-ink">
                    Resources
                  </span>
                </li>
              </ol>
            </nav>
            <h1 className="text-display-l text-ink">
              <span className="block">The product</span>
              <span className="block font-[500] text-lithon-blue">catalogue</span>
            </h1>
            <p className="mt-6 text-lead text-ink-2 measure text-pretty">
              Every Lith-On system in one document: specifications, configurations and applications, from home batteries to 5 MWh utility containers.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <CatalogueDownload />
              <Button href="#datasheets" variant="tertiary">
                Individual datasheets
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal distance={40}>
              <div className="relative mx-auto aspect-[1000/1361] w-full max-w-[380px] -rotate-2 overflow-hidden rounded-control shadow-[0_24px_60px_-20px_rgb(15_23_42/0.35)] motion-reduce:rotate-0">
                <Image src="/images/resources/catalogue-cover.webp" alt="Cover of the Lith-On battery energy storage products catalogue" fill priority sizes="380px" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RES-03 */}
      <section id="datasheets" aria-labelledby="datasheets-title" className="section scroll-mt-24">
        <div className="container-site">
          <SectionIntro
            title={<span id="datasheets-title">Datasheets</span>}
            lead="One sheet per system, for EPC engineers, consultants and facility teams. We send each on request."
            split
            className="mb-10 lg:mb-12"
          />
          <DatasheetLibrary />
        </div>
      </section>

      {/* RES-05 */}
      <section aria-label="More help" className="pb-20 lg:pb-28">
        <div className="container-site">
          <p className="border-t border-line pt-8 text-lead text-ink-2">
            Looking for an answer rather than a document?{" "}
            <Link href="/faqs" className={link}>
              Read the FAQs
            </Link>{" "}
            or{" "}
            <Link href="/contact" className={link}>
              ask our engineers
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
