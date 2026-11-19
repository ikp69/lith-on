import Image from "next/image";
import Link from "next/link";
import { FraudAdvisory } from "./FraudAdvisory";

/**
 * G4 Footer (audit §4). Two parts:
 * 1. Closing stage: the cityscape illustration as a horizon under every page's
 *    own ending (ClosingCTA), then identity, contact and offices.
 * 2. A calm four-column directory and a legal row with the fraud warning.
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

const linkCls =
  "inline-flex min-h-8 items-center text-small text-ink-2 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue";

export function Footer() {
  return (
    <footer className="bg-canvas text-ink" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">
        Site footer
      </h2>

      {/* Closing stage: horizon illustration */}
      <div aria-hidden="true" className="relative overflow-hidden">
        <Image
          src="/images/footer-cityscape.jpg"
          alt=""
          width={4474}
          height={646}
          sizes="100vw"
          quality={60}
          className="h-[88px] w-full object-cover object-bottom sm:h-[140px] lg:h-[200px]"
        />
      </div>

      <div className="border-t border-line-strong">
        <div className="container-site py-14 lg:py-20">
          {/* Identity, contact and offices */}
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-4">
              <Link href="/" aria-label="Lith-On Bharat Energy home" className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lithon-blue">
                <Image src="/images/logo/logo-dark.png" alt="" width={532} height={133} className="h-8 w-auto" />
              </Link>
              <p className="mt-5 max-w-[34ch] text-body text-ink-2">Battery energy storage, engineered and manufactured in Noida.</p>
            </div>
            <dl className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
              <div>
                <dt className="text-small text-ink-3">Talk to an engineer</dt>
                <dd className="mt-2 space-y-1">
                  <a href="tel:+917000013009" className="tabular block text-body font-[500] text-ink hover:text-lithon-blue">
                    +91 70000 13009
                  </a>
                  <a href="tel:+917000017005" className="tabular block text-body font-[500] text-ink hover:text-lithon-blue">
                    +91 70000 17005
                  </a>
                  <a href="mailto:tech@lith-onbharat.com" className="block text-body text-lithon-blue hover:underline">
                    tech@lith-onbharat.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-small text-ink-3">Headquarters and plant</dt>
                <dd className="mt-2 text-small text-ink-2">
                  <address className="not-italic">
                    Arihant Business Centre, Sector 136
                    <br />
                    Noida 201304, Uttar Pradesh, India
                  </address>
                </dd>
              </div>
              <div>
                <dt className="text-small text-ink-3">International hub</dt>
                <dd className="mt-2 text-small text-ink-2">
                  <address className="not-italic">
                    C11-6, Foshan Innovation Torchpark
                    <br />
                    Jihua 2 Road, Chancheng, Foshan, China
                  </address>
                </dd>
              </div>
            </dl>
          </div>

          {/* Directory */}
          <nav aria-label="Footer" className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10 md:grid-cols-4 lg:mt-16">
            {COLUMNS.map((c) => (
              <div key={c.title}>
                <h3 className="text-small font-[500] text-ink">{c.title}</h3>
                <ul className="mt-3 space-y-1">
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

          {/* Legal row */}
          <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-small text-ink-3 lg:flex-row lg:items-center lg:justify-between">
            <p>© {new Date().getFullYear()} Lith-On Bharat Energy Private Limited</p>
            <p className="tabular">IEC 61508 · IEC 61850 · BIS</p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
              <li>
                <Link href="/privacy-policy" className="inline-flex min-h-11 items-center hover:text-ink">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="inline-flex min-h-11 items-center hover:text-ink">
                  Terms and conditions
                </Link>
              </li>
              <li>
                <FraudAdvisory />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
