import { ArrowRight, ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LineReveal } from "@/components/motion/LineReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ProductAssistantDrawer } from "@/components/products/ProductAssistantDrawer";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductJsonLd } from "@/components/seo/ProductJsonLd";
import { Button } from "@/components/system/Button";
import { HorizontalRail, RailItem } from "@/components/system/HorizontalRail";
import { SectionIntro } from "@/components/system/SectionIntro";
import { PRODUCTS_DATA, type ProductDetail } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

/** Values that mean "not published": rows with these are hidden from the datasheet. */
const UNPUBLISHED = ["Contact us for details", "—", ""];
const known = (v: string) => !UNPUBLISHED.includes(v.trim());

function splitCapacity(capacity: string) {
  const at = capacity.indexOf(" @ ");
  if (at !== -1) {
    return { main: capacity.slice(0, at), note: `Rated at ${capacity.slice(at + 3)}` };
  }
  const i = capacity.indexOf(" (");
  return i === -1 ? { main: capacity, note: "" } : { main: capacity.slice(0, i), note: capacity.slice(i + 2, -1) };
}

export function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({ slug: product.slug }));
}

/** Meta description within 160 characters; long taglines fall back to a shorter form. */
function describe(product: { tagline: string; name: string; capacity: string; powerRating: string }): string {
  const full = `${product.tagline}. Capacity ${product.capacity}, power ${product.powerRating}. Assembled and tested by Lith-On in Noida.`;
  return full.length <= 160 ? full : `${product.name}: ${product.capacity}, ${product.powerRating}. Assembled and tested by Lith-On in Noida.`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  if (!product) {
    return {};
  }
  return {
    title: `${product.name}: Specifications and Datasheet | Lith-On`,
    description: describe(product),
  };
}

function SpecGroups(product: ProductDetail) {
  return [
    {
      title: "Electrical",
      rows: [
        ["Capacity", product.capacity],
        ["Power", product.powerRating],
        ["AC voltage", product.acVoltage],
        ["DC voltage / configuration", product.dcVoltage],
        ["Efficiency", product.efficiency],
        ["Grid-to-battery cutover", product.switchoverTime],
      ],
    },
    {
      title: "Battery",
      rows: [
        ["Chemistry", product.chemistry],
        ["Cycle life", product.cycleLife],
        ["Scalability", product.scalability],
      ],
    },
    {
      title: "Thermal",
      rows: [
        ["Cooling", product.coolingMethod],
        ["Thermal protection", product.thermalTech],
        ["Operating temperature", product.operatingTemp],
      ],
    },
    {
      title: "Mechanical",
      rows: [
        ["Enclosure", product.enclosureRating],
        ["Format", product.formFactor],
        ["Dimensions", product.dimensions],
        ["Weight", product.weight],
      ],
    },
    {
      title: "Standards and warranty",
      rows: [
        ["Standards", product.certifications.join(" · ")],
        ["Warranty", product.warranty],
      ],
    },
  ]
    .map((g) => ({ ...g, rows: g.rows.filter(([, v]) => known(v)) }))
    .filter((g) => g.rows.length > 0);
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  const { main, note } = splitCapacity(product.capacity);
  const groups = SpecGroups(product);
  const hiddenRows = [product.acVoltage, product.efficiency, product.switchoverTime, product.cycleLife, product.thermalTech].some((v) => !known(v));
  const datasheet = product.documents.find((d) => d.type === "datasheet");
  const quoteHref = `/contact?type=assessment&product=${product.slug}`;
  const related = [...PRODUCTS_DATA.filter((p) => p.id !== product.id && p.category === product.category), ...PRODUCTS_DATA.filter((p) => p.id !== product.id && p.category !== product.category)].slice(0, 6);

  return (
    <div className="bg-canvas">
      <ProductJsonLd product={product} />

      {/* PDP-01/02 Buying hero with breadcrumb */}
      <section className="pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="text-small text-ink-3">
            <ol className="flex flex-wrap items-center gap-x-2">
              <li>
                <Link href="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/products" className="hover:text-ink">
                  Products
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink-2">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:items-center lg:gap-6">
            <div className="lg:col-span-6 lg:pr-6">
              <p className="text-small text-ink-3">
                {product.category} · Model {product.modelCode}
              </p>
              <LineReveal as="h1" lines={[product.name]} className="mt-3 text-display-l text-balance text-ink [overflow-wrap:anywhere]" />
              <p className="mt-4 text-lead text-ink-2">{product.tagline}</p>

              <div className="mt-8 border-t border-line pt-6">
                <p className="tabular text-stat-xl leading-none text-ink">{main}</p>
                {note && <p className="mt-2 text-small text-ink-3">{note}</p>}
                <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-small">
                  <dt className="text-ink-3">Power</dt>
                  <dd className="tabular text-ink">{product.powerRating}</dd>
                  <dt className="text-ink-3">Enclosure</dt>
                  <dd className="text-ink">{product.enclosureRating}</dd>
                  <dt className="text-ink-3">Cooling</dt>
                  <dd className="text-ink">{product.coolingMethod}</dd>
                </dl>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button href={quoteHref} arrow>
                  Request a quote
                </Button>
                <Button href={datasheet?.downloadUrl ?? quoteHref} variant="tertiary">
                  {datasheet ? "Get the datasheet" : "Ask for the datasheet"}
                </Button>
              </div>
            </div>

            <div className="order-first lg:order-none lg:col-span-6">
              <Reveal distance={32}>
                <div className="relative isolate flex aspect-[4/3] items-center justify-center overflow-hidden rounded-media bg-surface">
                  <Image
                    src={product.image}
                    alt={`${product.name}`}
                    width={900}
                    height={900}
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="h-[78%] w-auto max-w-[86%] object-contain mix-blend-multiply"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights and applications */}
      <section aria-labelledby="pdp-highlights" className="section-tight bg-canvas-warm">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <h2 id="pdp-highlights" className="text-heading-2 text-ink">
              Highlights
            </h2>
            <p className="mt-4 max-w-2xl text-body text-ink-2">{product.overview}</p>
            <ul className="mt-8 border-t border-line">
              {product.keyFeatures.map((f) => (
                <li key={f} className="border-b border-line py-4 text-body text-ink">
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="text-heading-3 text-ink">Used for</h2>
            <ul className="mt-4 space-y-2 text-body text-ink-2">
              {product.applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <p className="mt-6 text-small text-ink-3">{product.typicalUser}</p>
          </div>
        </div>
      </section>

      {/* PDP-03 Configuration */}
      {product.standardConfigurations.length > 0 && (
        <section aria-labelledby="pdp-config" className="section-tight">
          <div className="container-site">
            <SectionIntro title={<span id="pdp-config">Configuration</span>} className="mb-8 lg:mb-10" />
            <div className="grid gap-10 md:grid-cols-2 md:gap-6">
              <div>
                <h3 className="text-small font-[500] text-ink-3">Included</h3>
                <ul className="mt-3 border-t border-line">
                  {product.standardConfigurations.map((c) => (
                    <li key={c} className="border-b border-line py-3.5 text-body text-ink">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              {product.optionalConfigurations.length > 0 && (
                <div>
                  <h3 className="text-small font-[500] text-ink-3">Optional</h3>
                  <ul className="mt-3 border-t border-line">
                    {product.optionalConfigurations.map((c) => (
                      <li key={c} className="border-b border-line py-3.5 text-body text-ink-2">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* PDP-05 Datasheet */}
      <section id="specifications" aria-labelledby="pdp-specs" className="section-tight scroll-mt-24">
        <div className="container-site">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-10">
            <h2 id="pdp-specs" className="text-heading-1 text-ink">
              Specifications
            </h2>
            <Button href={datasheet?.downloadUrl ?? quoteHref} variant="tertiary">
              {datasheet ? "Get the datasheet" : "Ask for the datasheet"}
            </Button>
          </div>
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Specifications for {product.name}</caption>
            {groups.map((g, gi) => (
              <tbody key={g.title}>
                <tr>
                  <th scope="colgroup" colSpan={2} className={`${gi === 0 ? "pt-0" : "pt-10"} pb-2 text-small font-[500] text-ink-3`}>
                    {g.title}
                  </th>
                </tr>
                {g.rows.map(([label, value]) => (
                  <tr key={label} className="border-t border-line align-top">
                    <th scope="row" className="w-[38%] py-3.5 pr-6 text-small font-[500] text-ink md:w-[30%]">
                      {label}
                    </th>
                    <td className="tabular py-3.5 text-small text-ink-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
          {hiddenRows && <p className="mt-6 text-small text-ink-3">Other specifications are available on request.</p>}
        </div>
      </section>

      {/* PDP-04 Cutaway link */}
      <section aria-label="See inside a Lith-On system" className="pb-16 lg:pb-24">
        <div className="container-site">
          <Link
            href="/technology#cutaway"
            className="group grid items-center gap-6 border-y border-line py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lithon-blue sm:grid-cols-[200px_1fr_auto]"
          >
            <span className="relative block aspect-[16/9] overflow-hidden rounded-control bg-stage-dark">
              <Image src="/images/products/bess-3d-cutaway.jpg" alt="" fill sizes="200px" className="object-cover" />
            </span>
            <span>
              <span className="block text-body font-[500] text-ink group-hover:text-lithon-blue">See inside a Lith-On system</span>
              <span className="mt-1 block text-small text-ink-3">Cells, battery management, power conversion and the IceBattery® shield (illustrative render).</span>
            </span>
            <ArrowRight className="h-5 w-5 text-lithon-blue transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* PDP-06 FAQ */}
      {product.faqs.length > 0 && (
        <section aria-labelledby="pdp-faq" className="section-tight bg-canvas-warm">
          <div className="container-site">
            <SectionIntro title={<span id="pdp-faq">Questions</span>} className="mb-8 lg:mb-10" />
            <div className="grid gap-x-10 md:grid-cols-2">
              {product.faqs.map((f) => (
                <details key={f.question} className="group border-t border-line py-4 last:border-b md:[&:nth-last-child(2)]:border-b">
                  <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-4 text-body font-[500] text-ink [&::-webkit-details-marker]:hidden">
                    {f.question}
                    <ChevronDown className="mt-1 h-4 w-4 shrink-0 text-ink-3 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
                  </summary>
                  <p className="mt-3 text-small text-ink-2">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PDP-07 Closing + related */}
      <section aria-labelledby="pdp-next" className="section">
        <div className="container-site">
          <div className="flex flex-col gap-6 border-y border-line py-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 id="pdp-next" className="text-heading-2 text-ink">
                Talk to an engineer about the {product.name}
              </h2>
              <p className="mt-2 text-body text-ink-2">We size the system to your load profile and send a quotation.</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button href={quoteHref} arrow>
                Request a quote
              </Button>
              <ProductAssistantDrawer preselectedProduct={product.name} triggerLabel="Sizing assistant" />
            </div>
          </div>

          <div className="mt-16 lg:mt-20">
            <h2 className="mb-8 text-heading-2 text-ink">Related products</h2>
            <HorizontalRail label="Related products">
              {related.map((p) => (
                <RailItem key={p.id} className="w-[min(80vw,340px)] lg:w-[340px]">
                  <ProductCard product={p} />
                </RailItem>
              ))}
            </HorizontalRail>
          </div>
        </div>
      </section>
    </div>
  );
}
