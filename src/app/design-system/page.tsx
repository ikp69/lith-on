import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import {
  BentoGrid,
  BentoTile,
  Button,
  ClosingCTA,
  HorizontalRail,
  MediaFrame,
  PageHero,
  RailItem,
  ScrollStory,
  SectionIntro,
  StatBand,
} from "@/components/system";

/**
 * Internal component showcase for Phase 1 review (design.md §16).
 * Not linked, not in the sitemap, not indexed. Sample copy uses only
 * figures from LITHON_DATA_VAULT.md.
 */
export const metadata: Metadata = {
  title: "Design system (internal)",
  robots: { index: false, follow: false },
};

const TYPE = [
  ["display-xl", "text-display-xl", "Storage built for heat", "88 / 44px · 300"],
  ["display-l", "text-display-l", "Engineered in Noida", "64 / 36px · 300"],
  ["heading-1", "text-heading-1", "Four product families", "48 / 30px · 400"],
  ["heading-2", "text-heading-2", "Sub-10ms cutover", "32 / 24px · 500"],
  ["heading-3", "text-heading-3", "Magna-C&I 260 kWh", "22 / 19px · 500"],
  ["lead", "text-lead", "One sentence that sets up the section and stops there.", "20 / 17px · 400"],
  ["body", "text-body", "Running text sits at 17px on desktop and 16px on phones, with a 1.65 line height and a 68-character measure for comfortable reading.", "17 / 16px · 400"],
  ["small", "text-small", "Captions and metadata", "14px · 400"],
  ["label", "text-label", "Label or tab", "13px · 600"],
] as const;

const SWATCHES = [
  ["canvas", "#FFFFFF", "bg-canvas"],
  ["canvas-warm", "#FAFAF8", "bg-canvas-warm"],
  ["surface", "#F3F4F6", "bg-surface"],
  ["line", "#E5E7EB", "bg-line"],
  ["ink", "#111827", "bg-ink"],
  ["ink-2", "#4B5563", "bg-ink-2"],
  ["ink-3", "#6B7280", "bg-ink-3"],
  ["red ink", "#C2301E", "bg-lithon-red-ink"],
  ["red", "#F74530", "bg-lithon-red"],
  ["blue", "#0B3388", "bg-lithon-blue"],
  ["stage-dark", "#0E1116", "bg-stage-dark"],
] as const;

const PRODUCTS = [
  { name: "Lith-On-50", capacity: "48 kWh", note: "Modular compact cabinet, scalable", img: "/images/products/lithon-module-clean.png" },
  { name: "Magna-C&I", capacity: "260 kWh", note: "125 kW outdoor all-in-one cabinet", img: "/images/products/bess-cabinet-clean.png" },
  { name: "Max-20HC-5000", capacity: "5,000 kWh", note: "2.5 MW in a 20-ft high-cube container", img: "/images/products/container-bess-clean.png" },
];

function Block({ id, title, note, children }: { id: string; title: string; note: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line">
      <div className="container-site pt-16 pb-6">
        <p className="text-label text-ink-3">{id}</p>
        <h2 className="mt-2 text-heading-2 text-ink">{title}</h2>
        <p className="mt-2 text-body text-ink-2 measure">{note}</p>
      </div>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="bg-canvas">
      <PageHero
        variant="utility"
        title={["Lith-On design system"]}
        lead="Internal preview of every Phase 1 token, component and motion pattern. Not linked or indexed."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Design system" }]}
        extra={
          <nav aria-label="Showcase sections" className="flex flex-wrap gap-x-5 gap-y-2 text-small">
            {["Type", "Colour", "Buttons", "Intros", "Heroes", "Media", "Stats", "Bento", "Rails", "Story", "Closing", "Motion"].map((s) => (
              <a key={s} href={`#${s}`} className="text-lithon-blue underline-offset-4 hover:underline">
                {s}
              </a>
            ))}
          </nav>
        }
      />

      <Block id="Type" title="Typography" note="Manrope only. Sizes are fluid between 375px and 1440px. Monospace is reserved for model codes inside spec tables.">
        <div className="container-site pb-16">
          <ul className="divide-y divide-line border-y border-line">
            {TYPE.map(([token, cls, sample, spec]) => (
              <li key={token} className="grid grid-cols-1 gap-2 py-6 lg:grid-cols-12 lg:items-baseline lg:gap-6">
                <span className="text-label text-ink-3 lg:col-span-2">{token}</span>
                <span className={`${cls} text-ink lg:col-span-8 [overflow-wrap:break-word] min-w-0`}>{sample}</span>
                <span className="text-small text-ink-3 lg:col-span-2 lg:text-right">{spec}</span>
              </li>
            ))}
            <li className="grid grid-cols-1 gap-2 py-6 lg:grid-cols-12 lg:items-baseline lg:gap-6">
              <span className="text-label text-ink-3 lg:col-span-2">stat-xl / stat-l</span>
              <span className="tabular text-stat-xl text-ink lg:col-span-8">
                250<span className="ml-1 text-[0.32em] font-[500]">MWh</span>
              </span>
              <span className="text-small text-ink-3 lg:col-span-2 lg:text-right">120 / 64px · tabular</span>
            </li>
          </ul>
          <p className="mt-6 text-small text-ink-3">
            The two-tone headline (one line in Lith-On Blue at weight 500) appears once per page, for its main statement.
          </p>
        </div>
      </Block>

      <Block id="Colour" title="Colour roles" note="Light-first. Red ink for the primary action and one key figure; blue for links and technical highlights; stage-dark for at most one photographic band per page.">
        <div className="container-site grid grid-cols-2 gap-4 pb-16 sm:grid-cols-4 lg:grid-cols-6">
          {SWATCHES.map(([name, hex, cls]) => (
            <div key={name}>
              <div className={`h-20 rounded-control border border-line ${cls}`} />
              <p className="mt-2 text-label text-ink">{name}</p>
              <p className="text-small text-ink-3 tabular">{hex}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block id="Buttons" title="Buttons" note="Three variants, 48px (40px small). Never two filled buttons side by side. Focus rings are blue on light and white on dark.">
        <div className="container-site grid gap-6 pb-16 lg:grid-cols-2">
          <div className="rounded-media border border-line p-8">
            <p className="mb-6 text-label text-ink-3">On light</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" arrow>
                Request sizing
              </Button>
              <Button href="/products" variant="secondary">
                View products
              </Button>
              <Button href="/technology" variant="tertiary">
                How IceBattery works
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button size="sm">Small primary</Button>
              <Button variant="secondary" size="sm">
                Small secondary
              </Button>
              <Button disabled>Disabled</Button>
              <Button loading>Sending</Button>
            </div>
          </div>
          <div className="rounded-media bg-stage-dark p-8">
            <p className="mb-6 text-label text-on-dark-2">On dark</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" tone="dark" arrow>
                Request sizing
              </Button>
              <Button href="/products" variant="secondary" tone="dark">
                View products
              </Button>
              <Button href="/technology" variant="tertiary" tone="dark">
                How IceBattery works
              </Button>
            </div>
          </div>
        </div>
      </Block>

      <Block id="Intros" title="SectionIntro" note="Heading plus an optional one-sentence lead. No eyebrow pill, no icon. Stacked, split or centred.">
        <div className="container-site space-y-4 pb-10">
          <SectionIntro title="Four product families, one engineering standard" lead="From a 48 kWh cabinet to a 5 MWh container, every system is assembled and tested in Noida." />
          <SectionIntro split title="Made in a 20,000 sq. ft. plant" lead="250 MWh of annual capacity: 50 MWh of complete BESS and 200 MWh of battery packs." />
          <SectionIntro align="center" title="Proven in the field" lead="500+ MWh deployed across 25+ countries." />
        </div>
      </Block>

      <Block id="Heroes" title="PageHero: four variants" note="Product (homepage, products), Image (solutions, industries, about), Editorial (technology, why Lith-On), Utility (contact, legal). Rendered scenes carry the 'Illustrative scene' label.">
        <div className="space-y-10 pb-16">
          <p className="container-site text-label text-ink-3">1 · Product</p>
          <PageHero
            variant="product"
            display="xl"
            title={["Storage that", "keeps running at 60°C"]}
            emphasisLine={1}
            lead="Industrial battery energy storage, engineered and manufactured in Noida."
            primary={{ label: "Request sizing", href: "/contact" }}
            secondary={{ label: "Explore products", href: "/products" }}
            product={{ src: "/images/products/bess-cabinet-clean.png", alt: "Magna-C&I 260 kWh outdoor BESS cabinet" }}
            scene={{ src: "/images/hero-sec/scene-industrial.webp", alt: "", illustrative: true }}
            footnote="250 MWh annual capacity · 500+ MWh deployed · 25+ countries"
          />
          <p className="container-site text-label text-ink-3">2 · Image</p>
          <PageHero
            variant="image"
            breadcrumb={[{ label: "Home", href: "/" }, { label: "Industries" }]}
            title={["Storage for the sites", "that cannot go dark"]}
            lead="Hospitals, factories, campuses and high-rises across Delhi-NCR and beyond."
            primary={{ label: "Find your sector", href: "/industries" }}
            image={{ src: "/images/industries/hospital-sector.webp", alt: "Hospital entrance with a BESS enclosure", illustrative: true }}
          />
          <p className="container-site text-label text-ink-3">3 · Editorial</p>
          <PageHero
            variant="editorial"
            breadcrumb={[{ label: "Home", href: "/" }, { label: "Technology" }]}
            title={["Engineered in-house,", "from cell to cloud"]}
            lead="Four technologies that let Lith-On systems run hotter, switch faster and last longer."
            index={[
              { label: "IceBattery® ceramic shield", href: "#Story" },
              { label: "Sub-10ms cutover", href: "#Story" },
              { label: "In-house BMS, PCS and EMS", href: "#Story" },
              { label: "Tier-1 LiFePO4 cells", href: "#Story" },
            ]}
          />
          <p className="container-site text-label text-ink-3">4 · Utility</p>
          <PageHero
            variant="utility"
            breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
            title={["Talk to our Noida engineers"]}
            lead="Sizing, distribution or warranty support. We reply from the plant."
          />
        </div>
      </Block>

      <Block id="Media" title="MediaFrame" note="Photographs fill and crop; product cut-outs sit whole on the surface stage. Parallax is for full-bleed photography only. Hover zoom applies inside a group (cards, rails).">
        <div className="container-site grid gap-6 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <MediaFrame src="/images/industries/industrial-sector.webp" alt="Factory with BESS enclosures" ratio="16/10" parallax illustrative caption="Photograph frame with parallax (M6) and the illustrative label." />
          </div>
          <div className="lg:col-span-5">
            <MediaFrame src="/images/products/bess-cabinet-clean.png" alt="Magna-C&I cabinet" ratio="4/5" cutout caption="Cut-out on the surface stage, never cropped." />
          </div>
        </div>
      </Block>

      <Block id="Stats" title="Stat and StatBand" note="Open band with hairlines, Manrope tabular figures, count-up (M3) for numbers that start below the fold. The dark version is this page's single stage-dark band.">
        <div className="container-site pb-14">
          <StatBand
            stats={[
              { value: 250, unit: "MWh", label: "Annual manufacturing capacity", note: "Sector 136, Noida" },
              { value: 20000, unit: "sq. ft.", label: "Assembly and testing plant" },
              { value: 500, unit: "+ MWh", label: "Deployed globally" },
              { value: 25, unit: "+", label: "Countries" },
            ]}
          />
        </div>
        <div className="bg-stage-dark">
          <div className="container-site section-tight">
            <StatBand
              tone="dark"
              stats={[
                { value: 10, prefix: "<", unit: "ms", label: "Grid-to-island cutover" },
                { value: 6000, unit: "+ cycles", label: "At 88–90% depth of discharge" },
                { value: 10, unit: "years", label: "Manufacturer warranty" },
              ]}
            />
          </div>
        </div>
      </Block>

      <Block id="Bento" title="BentoGrid" note="Asymmetric tiles instead of equal card rows. Tiles can be plain (no box), warm, surface, dark or media.">
        <div className="container-site pb-16">
          <BentoGrid>
            <BentoTile cols={7} rows={2} surface="media" wide>
              <MediaFrame src="/images/industries/commercial-sector.webp" alt="Commercial campus with BESS enclosures" fill rounded={false} illustrative />
            </BentoTile>
            <BentoTile cols={5}>
              <p className="text-label text-ink-3">IceBattery®</p>
              <p className="mt-4 tabular text-stat-l text-ink">15–30°C</p>
              <p className="mt-2 text-body text-ink-2">Lower internal cabinet temperature with a 300–400µm ceramic coating.</p>
            </BentoTile>
            <BentoTile cols={5} surface="plain" className="border-t border-line pt-6">
              <p className="text-label text-ink-3">Plain tile, no box</p>
              <p className="mt-4 text-heading-3 text-ink">In-house BMS, PCS and EMS on one controller.</p>
            </BentoTile>
          </BentoGrid>
        </div>
      </Block>

      <Block id="Rails" title="HorizontalRail" note="First rail: native swipe with snap and previous/next buttons. Second rail: scroll-driven on desktop (M5), pinned while vertical scroll moves the track; native swipe on phones and with reduced motion.">
        <div className="container-site space-y-20 pb-20">
          <HorizontalRail label="Product families (native)">
            {PRODUCTS.map((p) => (
              <RailItem key={p.name} className="w-[78vw] sm:w-[360px]">
                <Link href="/products" className="group block rounded-media focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lithon-blue">
                  <MediaFrame src={p.img} alt={`${p.name} product image`} ratio="4/5" cutout zoomOnHover />
                  <p className="mt-5 tabular text-heading-2 text-ink">{p.capacity}</p>
                  <p className="mt-1 text-body font-[500] text-ink">{p.name}</p>
                  <p className="text-small text-ink-3">{p.note}</p>
                </Link>
              </RailItem>
            ))}
          </HorizontalRail>

          <HorizontalRail label="Product families (scroll-driven)" scrollDriven header={<SectionIntro title="Scroll-driven rail" lead="On desktop the section pins and vertical scrolling moves the products sideways." reveal={false} />}>
            {PRODUCTS.map((p) => (
              <RailItem key={`${p.name}-sd`} className="w-[78vw] sm:w-[560px]">
                <Link href="/products" className="group block rounded-media focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lithon-blue">
                  <MediaFrame src={p.img} alt={`${p.name} product image`} ratio="1/1" cutout zoomOnHover />
                  <p className="mt-5 tabular text-heading-2 text-ink">{p.capacity}</p>
                  <p className="mt-1 text-body font-[500] text-ink">{p.name}</p>
                </Link>
              </RailItem>
            ))}
          </HorizontalRail>
        </div>
      </Block>

      <Block id="Story" title="ScrollStory" note="Desktop: media stays while chapters scroll past and crossfades per chapter (M4). Phones: stacked chapters, each with its own image.">
        <div className="container-site pb-20">
          <ScrollStory
            chapters={[
              { id: "story-dg", title: "Replace diesel generators", body: "Zero-tailpipe operation through CAQM GRAP Stage II–IV restrictions in Delhi-NCR.", image: { src: "/images/industries/commercial-sector.webp", alt: "Commercial building with BESS enclosures", illustrative: true } },
              { id: "story-peak", title: "Cut peak demand charges", body: "Discharge during demand spikes so the facility stays under its contracted load.", image: { src: "/images/industries/industrial-sector.webp", alt: "Factory with BESS enclosures", illustrative: true } },
              { id: "story-ups", title: "Switch over in under 10 ms", body: "Elevators keep moving and servers keep running when the grid drops.", image: { src: "/images/industries/hospital-sector.webp", alt: "Hospital with BESS", illustrative: true } },
              { id: "story-solar", title: "Store midday solar", body: "Shift rooftop solar surplus into expensive evening tariff hours.", image: { src: "/images/industries/campus-sector.webp", alt: "Campus with BESS", illustrative: true } },
            ]}
          />
        </div>
      </Block>

      <Block id="Closing" title="ClosingCTA: three variants" note="Light, editorial endings. Never a dark or blue band. Rotate across pages.">
        <ClosingCTA variant="statement" title={["Size your system", "with our Noida engineers"]} lead="Share your load profile and generator hours; we return a sizing and payback model." primary={{ label: "Request sizing", href: "/contact" }} secondary={{ label: "Call +91-7000013009", href: "tel:+917000013009" }} />
        <ClosingCTA variant="split" title={["Visit the plant in Noida"]} lead="See cell grading, assembly and testing on the floor." primary={{ label: "Book a visit", href: "/contact" }} image={{ src: "/images/factory/noida-facility-bench-photo.jpg", alt: "Lith-On products on the Noida facility bench" }} />
        <ClosingCTA variant="inline" title={["Need a custom pack or skid?"]} lead="Our engineers design for your site." primary={{ label: "Talk to an engineer", href: "/contact" }} />
      </Block>

      <Block id="Motion" title="Motion patterns" note="The nine allowed patterns and where this page demonstrates them. Budget: at most two scroll experiences per real page; some sections stay static.">
        <div className="container-site pb-24">
          <Reveal>
            <ul className="divide-y divide-line border-y border-line">
              {[
                ["M1 Reveal", "Section intros on this page", "Motion"],
                ["M2 Line reveal", "Hero headlines and the statement CTA", "Motion"],
                ["M3 Count-up", "StatBand figures below the fold", "Motion"],
                ["M4 Scroll story", "ScrollStory block (desktop)", "ScrollTrigger"],
                ["M5 Scroll rail", "Second HorizontalRail (desktop)", "ScrollTrigger"],
                ["M6 Parallax", "Image hero, MediaFrame demo", "ScrollTrigger"],
                ["M7 Diagram draw", "Built per diagram in Phase 2/3 (IceBattery, waveform, energy flow)", "GSAP / Motion"],
                ["M8 Hover", "Rail cards, tertiary buttons", "CSS"],
                ["M9 Page transition", "Navigate to any page and back", "ViewTransition"],
              ].map(([name, where, lib]) => (
                <li key={name} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-12 sm:gap-6">
                  <span className="text-body font-[500] text-ink sm:col-span-3">{name}</span>
                  <span className="text-body text-ink-2 sm:col-span-6">{where}</span>
                  <span className="text-small text-ink-3 sm:col-span-3 sm:text-right">{lib}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Block>
    </div>
  );
}
