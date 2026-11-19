import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Lith-On Bharat Energy",
  description:
    "Terms and conditions governing the use of Lith-On Bharat Energy website, product information, and service inquiries.",
};

export default function TermsPage() {
  return (
    <div className="bg-white pb-28 lg:pb-36">
      <section className="border-b border-gray-200 bg-canvas-offwhite px-4 sm:px-6 pt-10 sm:pt-40 pb-14 sm:pb-24">
        <div className="mx-auto max-w-4xl">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-4"
          >
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900 font-semibold" aria-current="page">
              Terms &amp; Conditions
            </span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-light text-gray-900 tracking-tight leading-tight">
            Terms &amp;{" "}
            <span className="font-semibold text-lithon-blue">Conditions</span>
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: November 2026
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl prose-sm text-gray-700 leading-relaxed space-y-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm leading-relaxed">
              By accessing and using the Lith-On Bharat Energy Private Limited (&ldquo;Lith-On&rdquo;)
              website at lith-on.com (the &ldquo;Website&rdquo;), you agree to be bound by these Terms
              and Conditions. If you do not agree with any part of these terms, you should not use this
              Website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              2. Use of Website
            </h2>
            <p className="text-sm leading-relaxed">
              This Website is provided for informational purposes about Lith-On&apos;s industrial Battery
              Energy Storage Systems (BESS), lithium battery products, and related engineering services.
              You agree to use the Website only for lawful purposes and in accordance with these Terms.
            </p>
            <p className="text-sm leading-relaxed mt-2">You may not:</p>
            <ul className="list-disc list-inside text-sm leading-relaxed space-y-1.5 mt-2">
              <li>
                Use the Website in any way that violates applicable Indian or international law
              </li>
              <li>
                Reproduce, distribute, or commercially exploit Website content without prior written
                permission from Lith-On
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the Website or its systems
              </li>
              <li>
                Use automated tools to scrape, harvest, or extract data from the Website without
                authorization
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              3. Intellectual Property
            </h2>
            <p className="text-sm leading-relaxed">
              All content on this Website — including but not limited to text, graphics, logos,
              photographs, product images, technical datasheets, engineering diagrams, and software — is
              the property of Lith-On Bharat Energy Private Limited or its licensors and is protected
              by Indian and international intellectual property laws.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              &ldquo;Lith-On&rdquo;, &ldquo;IceBattery&rdquo;, the Lith-On logo, and associated product
              names (Magna-C&amp;I, LT215, Max-20HC) are trademarks of Lith-On Bharat Energy Private
              Limited. Use of these marks without prior written consent is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              4. Product Information &amp; Specifications
            </h2>
            <p className="text-sm leading-relaxed">
              Technical specifications, performance data, and product descriptions on this Website are
              provided for general informational and preliminary assessment purposes. While Lith-On
              strives for accuracy, actual product performance may vary based on site conditions,
              installation parameters, and operational profiles. Binding specifications and commercial
              terms are provided exclusively through official quotations and purchase agreements issued
              by Lith-On&apos;s engineering team.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Lith-On reserves the right to modify product specifications, designs, and availability
              without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              5. RFQ, Contact Forms &amp; Inquiries
            </h2>
            <p className="text-sm leading-relaxed">
              Submission of an RFQ (Request for Quotation), contact form, or any inquiry through this
              Website does not constitute a binding contract, purchase order, or commitment by either
              party. All commercial engagements are subject to formal quotation acceptance, credit
              approval, and execution of a written purchase agreement or service contract.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              6. Pricing &amp; Payment
            </h2>
            <p className="text-sm leading-relaxed">
              Prices displayed on this Website, if any, are indicative and do not constitute a binding
              offer. Final pricing is determined through formal quotation based on project scope,
              configuration, delivery terms, and applicable taxes. All commercial transactions are
              governed by the specific terms of the executed purchase agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              7. Warranty &amp; Liability
            </h2>
            <p className="text-sm leading-relaxed">
              Product warranty terms are as specified in Lith-On&apos;s official warranty documentation
              provided with each product. For warranty details, refer to our{" "}
              <Link
                href="/warranty-and-support"
                className="text-lithon-blue hover:underline font-medium"
              >
                Warranty &amp; Support
              </Link>{" "}
              page.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              To the fullest extent permitted by Indian law, Lith-On shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from the use of
              this Website or reliance on information provided herein.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              8. Third-Party Links
            </h2>
            <p className="text-sm leading-relaxed">
              This Website may contain links to third-party websites for your convenience. Lith-On does
              not endorse, control, or assume responsibility for the content, privacy policies, or
              practices of any third-party websites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              9. Limitation of Liability
            </h2>
            <p className="text-sm leading-relaxed">
              This Website and its content are provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind, express or implied. Lith-On does not
              warrant that the Website will be uninterrupted, error-free, or free of harmful components.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              10. Indemnification
            </h2>
            <p className="text-sm leading-relaxed">
              You agree to indemnify and hold harmless Lith-On, its directors, employees, and agents
              from and against any claims, damages, losses, or expenses arising from your violation of
              these Terms or misuse of the Website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              11. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-sm leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of India. Any
              disputes arising from these Terms or the use of this Website shall be subject to the
              exclusive jurisdiction of the courts in Gautam Buddh Nagar (Noida), Uttar Pradesh, India.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              12. Modifications
            </h2>
            <p className="text-sm leading-relaxed">
              Lith-On reserves the right to revise these Terms at any time without prior notice. The
              updated Terms will be posted on this page with a revised date. Your continued use of the
              Website after such changes constitutes acceptance of the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              13. Contact
            </h2>
            <p className="text-sm leading-relaxed">
              For questions about these Terms, contact us at:
            </p>
            <div className="mt-3 rounded-2xl border border-gray-200 bg-canvas-offwhite p-5 text-sm space-y-1">
              <p className="font-bold text-gray-900">
                Lith-On Bharat Energy Private Limited
              </p>
              <p>Arihant Business Centre, Sector 136, Noida - 201304, Uttar Pradesh, India</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:legal@lith-on.com"
                  className="text-lithon-blue hover:underline"
                >
                  legal@lith-on.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+917000013009" className="text-lithon-blue hover:underline">
                  +91-7000013009
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
