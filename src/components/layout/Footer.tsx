import Image from "next/image";
import Link from "next/link";
import { MORE_PRODUCTS } from "@/data/navigation";
import { FraudAdvisory } from "./FraudAdvisory";

/**
 * G4 Footer (audit §4). Compact, three bands on one white canvas:
 * 1. Identity + direct contact beside a four-column directory.
 * 2. Offices and certifications, then the legal row with the fraud warning.
 * 3. The cityscape illustration as the page's ground line; its white sky
 *    blends into the canvas, so the content reads as standing above it.
 * Contact details and certifications from LITHON_DATA_VAULT.md §1 and §5.
 */

const COLUMNS = [
  {
    title: "Products",
    links: [
      { label: "Magna-C&I", href: "/products/magna-ci" },
      { label: "Lith-On-50", href: "/products/lithon-50" },
      { label: "LT215", href: "/products/lt215" },
      { label: "Max-20HC-5000", href: "/products/max-20hc" },
      { label: "All products", href: "/products" },
      { label: "Savings calculator", href: "/calculator" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Solutions", href: "/solutions" },
      { label: "Industries", href: "/industries" },
      { label: "Grid services", href: "/grid-services" },
      { label: "Financing", href: "/financing" },
      { label: "Case studies", href: "/case-studies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Technology", href: "/technology" },
      { label: "Datasheets and downloads", href: "/resources" },
      { label: "FAQs", href: "/faqs" },
      { label: "Warranty and support", href: "/warranty-and-support" },
      { label: "Sustainability", href: "/sustainability" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Manufacturing", href: "/capabilities" },
      { label: "Certifications", href: "/certifications" },
      { label: "Distributors", href: "/distributor" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const OFFICES = [
  { title: "Headquarters and plant", lines: ["Arihant Business Centre, Sector 136", "Noida 201304, Uttar Pradesh, India"] },
  { title: "International hub", lines: ["C11-6, Foshan Innovation Torchpark", "Jihua 2 Road, Chancheng, Foshan, China"] },
];

const focusCls = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue";
const linkCls = `inline-flex min-h-8 items-center py-1 text-small leading-snug text-ink-2 transition-colors hover:text-ink ${focusCls}`;
const contactCls = `tabular inline-flex min-h-8 items-center text-body font-[500] text-ink transition-colors hover:text-lithon-blue ${focusCls}`;

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas text-ink" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">
        Site footer
      </h2>

      <div className="container-site pt-12 lg:pt-16">
        {/* Band 1: identity and contact | directory */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="sm:grid sm:grid-cols-2 sm:gap-x-8 lg:col-span-4 lg:block">
            <div>
              <Link href="/" aria-label="Lith-On Bharat Energy home" className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lithon-blue">
                <Image src="/images/logo/logo-dark.png" alt="" width={532} height={133} className="h-8 w-auto" />
              </Link>
              <p className="mt-4 max-w-[32ch] text-small text-ink-2">Battery energy storage, engineered and manufactured in Noida.</p>
            </div>

            <div className="mt-6 sm:mt-0 lg:mt-6">
            <p className="text-small text-ink-3">Talk to an engineer</p>
            <ul className="mt-1 flex flex-wrap gap-x-5 sm:flex-col sm:gap-x-0">
              <li>
                <a href="tel:+917000013009" className={contactCls}>
                  +91 70000 13009
                </a>
              </li>
              <li>
                <a href="tel:+917000017005" className={contactCls}>
                  +91 70000 17005
                </a>
              </li>
            </ul>
            <a href="mailto:tech@lith-onbharat.com" className={`inline-flex min-h-8 items-center text-body text-lithon-blue hover:underline ${focusCls}`}>
              tech@lith-onbharat.com
            </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:col-span-8">
            {COLUMNS.map((c) => (
              <div key={c.title}>
                <h3 className="text-small font-[500] text-ink">{c.title}</h3>
                <ul className="mt-2">
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={linkCls}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Every other product (owner, 20 Nov 2026: show all products everywhere) */}
        <nav aria-label="More products" className="mt-10 border-t border-line pt-6 lg:mt-12">
          <h3 className="text-label text-ink-3">More systems</h3>
          <ul className="mt-1 flex flex-wrap gap-x-5">
            {MORE_PRODUCTS.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className={linkCls}>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Band 2: offices and certifications */}
        <dl className="mt-6 grid gap-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {OFFICES.map((o) => (
            <div key={o.title} className="lg:col-span-4">
              <dt className="text-label text-ink-3">{o.title}</dt>
              <dd className="mt-1 text-small text-ink-2">
                <address className="not-italic">
                  {o.lines[0]}
                  <br />
                  {o.lines[1]}
                </address>
              </dd>
            </div>
          ))}
          <div className="sm:col-span-2 lg:col-span-4">
            <dt className="text-label text-ink-3">Standards</dt>
            <dd className="tabular mt-1 text-small text-ink-2">IEC 61508 · IEC 61850 · BIS</dd>
          </div>
        </dl>

        {/* Legal row */}
        <div className="mt-6 flex flex-col gap-1 border-t border-line pt-3 text-small text-ink-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <p className="pt-2 lg:py-2">© {new Date().getFullYear()} Lith-On Bharat Energy Private Limited</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-0">
            <li>
              <Link href="/privacy-policy" className={`inline-flex min-h-11 items-center hover:text-ink ${focusCls}`}>
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className={`inline-flex min-h-11 items-center hover:text-ink ${focusCls}`}>
                Terms and conditions
              </Link>
            </li>
            <li>
              <FraudAdvisory />
            </li>
          </ul>
        </div>
      </div>

      {/* Band 3: cityscape ground line. Sky is white like the canvas, so it
          blends in; minimum heights crop the sides on narrow screens. */}
      <div aria-hidden="true" className="mt-2 overflow-hidden lg:mt-4">
        <Image
          src="/images/footer-cityscape.jpg"
          alt=""
          width={4474}
          height={646}
          sizes="100vw"
          quality={60}
          className="h-auto min-h-[112px] w-full object-cover object-bottom sm:min-h-[140px]"
        />
      </div>
    </footer>
  );
}
