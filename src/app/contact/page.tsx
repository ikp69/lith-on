import { AlertTriangle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContactIntake } from "@/components/contact/ContactIntake";
import { LineReveal } from "@/components/motion/LineReveal";
import { Button } from "@/components/system/Button";
import { SectionIntro } from "@/components/system/SectionIntro";

export const metadata: Metadata = {
  title: "Contact Lith-On | Technical Sizing, Distributor Enquiries and Support",
  description:
    "Contact Lith-On Bharat Energy for battery storage sizing, distributor partnerships or support for an installed system. Noida plant and Foshan international hub.",
};

/**
 * /contact (audit §6.13). Split intake (CON-01): intro, three intents and
 * direct contacts on the left; the form on the right (ContactIntake, client).
 * Then the two offices (CON-02) and the recruitment fraud notice (CON-03,
 * mandatory per AGENTS.md). Facts from content/contact.md,
 * content/warranty-and-support.md (support hours) and LITHON_DATA_VAULT.md §1.
 */

const NOIDA = "Arihant Business Centre, Sector 136, Noida 201304, Uttar Pradesh, India";
const FOSHAN = "C11-6, Foshan Innovation Torchpark, Jihua 2 Road, Chancheng, Foshan, Guangdong, China";
const mapsLink = (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const link = "text-lithon-blue underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue rounded-sm";

const intro = (
  <>
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
            Contact
          </span>
        </li>
      </ol>
    </nav>
    <LineReveal
      as="h1"
      onLoad
      lines={["Talk to our", "engineers"]}
      className="text-display-l text-ink"
      emphasisIndex={1}
      emphasisClassName="font-[500] text-lithon-blue"
    />
    <p className="mt-6 text-lead text-ink-2 measure text-pretty">System sizing, distributor enquiries and support, from our team in Noida.</p>
  </>
);

const contacts = (
  <dl className="grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
    <div>
      <dt className="text-small text-ink-3">Phone</dt>
      <dd className="mt-1 text-body text-ink">
        <a href="tel:+917000013009" className={link}>
          +91 70000 13009
        </a>
        <br />
        <a href="tel:+917000017005" className={link}>
          +91 70000 17005
        </a>
      </dd>
    </div>
    <div>
      <dt className="text-small text-ink-3">Email</dt>
      <dd className="mt-1 text-body text-ink">
        <a href="mailto:tech@lith-onbharat.com" className={link}>
          tech@lith-onbharat.com
        </a>
      </dd>
    </div>
    <div className="sm:col-span-2">
      <dt className="text-small text-ink-3">Support hours</dt>
      <dd className="mt-1 text-small text-ink-2">Monday to Saturday, 9:00 am to 7:00 pm IST. Remote diagnostics for installed systems run 24/7.</dd>
    </div>
  </dl>
);

function IntakeFallback() {
  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        {intro}
        <div className="mt-10">{contacts}</div>
      </div>
      <p className="text-body text-ink-2 lg:col-span-6 lg:col-start-7">The enquiry form needs JavaScript. You can call or email us directly using the details on this page.</p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-canvas">
      {/* CON-01 */}
      <section aria-label="Contact Lith-On" className="pt-14 pb-20 lg:pt-24 lg:pb-28">
        <div className="container-site">
          <Suspense fallback={<IntakeFallback />}>
            <ContactIntake intro={intro} contacts={contacts} />
          </Suspense>
        </div>
      </section>

      {/* CON-02 */}
      <section id="offices" aria-labelledby="offices-title" className="section scroll-mt-24 bg-canvas-warm">
        <div className="container-site">
          <SectionIntro title={<span id="offices-title">Our offices</span>} lead="Our plant and headquarters in Noida, and an international hub in Foshan." split className="mb-8 lg:mb-10" />
          <div className="grid gap-10 md:grid-cols-2 md:gap-6">
            <div className="border-t border-ink pt-6">
              <p className="text-small text-ink-3">India · Headquarters and plant</p>
              <h3 className="mt-2 text-heading-2 text-ink">Noida</h3>
              <address className="mt-4 text-body not-italic text-ink-2">
                Lith-On Bharat Energy Private Limited
                <br />
                {NOIDA}
              </address>
              <p className="mt-4 text-small text-ink-3">20,000 sq. ft. assembly and testing plant, 250 MWh annual capacity.</p>
              <div className="mt-4">
                <Button href={mapsLink(NOIDA)} external variant="tertiary">
                  Get directions
                </Button>
              </div>
            </div>
            <div className="border-t border-ink pt-6">
              <p className="text-small text-ink-3">China · International hub</p>
              <h3 className="mt-2 text-heading-2 text-ink">Foshan</h3>
              <address className="mt-4 text-body not-italic text-ink-2">{FOSHAN}</address>
              <p className="mt-4 text-small text-ink-3">Component procurement, cell technology research and international supply chain coordination.</p>
              <div className="mt-4">
                <Button href={mapsLink(FOSHAN)} external variant="tertiary">
                  View on map
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CON-03 */}
      <section id="fraud-notice" aria-labelledby="fraud-title" className="section-tight scroll-mt-24">
        <div className="container-site">
          <div className="max-w-4xl rounded-media border border-line p-6 sm:p-10">
            <h2 id="fraud-title" className="flex items-center gap-3 text-heading-3 text-ink">
              <AlertTriangle className="h-5 w-5 shrink-0 text-lithon-red-ink" aria-hidden="true" />
              Recruitment fraud warning
            </h2>
            <p className="mt-4 text-body text-ink-2">
              Some individuals and agencies falsely claim to represent Lith-On Bharat Energy Private Limited (formerly Neoclo Energy), offering fictitious jobs and asking
              for money, application fees or security deposits.
            </p>
            <ul className="mt-6 space-y-3 border-l-2 border-lithon-red-ink pl-5 text-body text-ink-2">
              <li>
                <strong className="font-[600] text-ink">We never charge fees.</strong> Lith-On never asks for money, deposits or training charges at any stage of recruitment.
              </li>
              <li>
                <strong className="font-[600] text-ink">Check the sender.</strong> Official messages come only from @lith-onbharat.com or @lith-on.com addresses.
              </li>
              <li>
                <strong className="font-[600] text-ink">Report it.</strong> Send suspicious offers to{" "}
                <a href="mailto:tech@lith-onbharat.com" className={link}>
                  tech@lith-onbharat.com
                </a>{" "}
                or call{" "}
                <a href="tel:+917000013009" className={link}>
                  +91 70000 13009
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
