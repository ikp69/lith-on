import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Lith-On Bharat Energy",
  description:
    "Lith-On Bharat Energy privacy policy covering data collection, usage, storage, and your rights under Indian law.",
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-light text-gray-900 tracking-tight leading-tight">
            Privacy <span className="font-semibold text-lithon-blue">Policy</span>
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
              1. Who We Are
            </h2>
            <p className="text-sm leading-relaxed">
              Lith-On Bharat Energy Private Limited (&ldquo;Lith-On&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
              is an Indian manufacturer of industrial Battery Energy Storage Systems (BESS) and
              heavy-duty lithium battery packs, headquartered in Noida, Uttar Pradesh, India. This
              Privacy Policy explains how we collect, use, disclose, and safeguard information when you
              visit our website or interact with our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              2. Information We Collect
            </h2>
            <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">
              a) Information You Provide Voluntarily
            </h3>
            <p className="text-sm leading-relaxed">
              When you submit an RFQ, contact form, distributor application, or career inquiry, we
              collect the information you provide, which may include your name, email address, phone
              number, company name, designation, facility details, and project requirements.
            </p>

            <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">
              b) Automatically Collected Information
            </h3>
            <p className="text-sm leading-relaxed">
              When you visit our website, we may automatically collect device information (browser type,
              operating system), IP address, pages visited, time spent on pages, and referring URLs
              through standard web server logs and analytics tools.
            </p>

            <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">
              c) Cookies &amp; Tracking Technologies
            </h3>
            <p className="text-sm leading-relaxed">
              We may use cookies and similar technologies to improve your browsing experience, analyse
              site usage, and assist in our marketing efforts. You can control cookie preferences through
              your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-sm leading-relaxed space-y-1.5">
              <li>Respond to your RFQ, technical sizing, and service inquiries</li>
              <li>Process distributor and channel partner applications</li>
              <li>Send project proposals, datasheets, and relevant technical documentation</li>
              <li>Improve our website, products, and customer experience</li>
              <li>Comply with applicable legal and regulatory obligations</li>
              <li>Communicate important product safety notices and warranty information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              4. Information Sharing &amp; Disclosure
            </h2>
            <p className="text-sm leading-relaxed">
              We do not sell, rent, or trade your personal information to third parties. We may share
              your information with:
            </p>
            <ul className="list-disc list-inside text-sm leading-relaxed space-y-1.5 mt-2">
              <li>
                <strong>Authorized channel partners and distributors</strong> — only when you have
                requested a local site survey or project consultation in a geography served by our
                partners
              </li>
              <li>
                <strong>Service providers</strong> — third-party platforms that help us operate our
                website (hosting, analytics, email delivery) under strict data processing agreements
              </li>
              <li>
                <strong>Legal requirements</strong> — when required by Indian law, court order, or
                governmental regulation
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              5. Data Security
            </h2>
            <p className="text-sm leading-relaxed">
              We implement industry-standard technical and organisational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              6. Data Retention
            </h2>
            <p className="text-sm leading-relaxed">
              We retain your personal information only for as long as necessary to fulfil the purposes
              described in this policy, or as required by applicable Indian laws and regulations. RFQ and
              project inquiry data is retained for a maximum of 3 years from the date of last
              correspondence unless a commercial relationship is established.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              7. Your Rights
            </h2>
            <p className="text-sm leading-relaxed">
              Under applicable Indian data protection laws, you have the right to:
            </p>
            <ul className="list-disc list-inside text-sm leading-relaxed space-y-1.5 mt-2">
              <li>Access, correct, or update the personal data we hold about you</li>
              <li>Request deletion of your personal data (subject to legal retention requirements)</li>
              <li>Withdraw consent for marketing communications at any time</li>
              <li>Lodge a complaint with the relevant data protection authority</li>
            </ul>
            <p className="text-sm leading-relaxed mt-2">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@lith-on.com"
                className="text-lithon-blue hover:underline font-medium"
              >
                privacy@lith-on.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              8. Third-Party Links
            </h2>
            <p className="text-sm leading-relaxed">
              Our website may contain links to external websites, including social media platforms,
              industry bodies, and certification authorities. We are not responsible for the privacy
              practices or content of those external websites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-sm leading-relaxed">
              Our website and services are directed at business professionals and are not intended for
              individuals under the age of 18. We do not knowingly collect personal data from minors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              10. Changes to This Policy
            </h2>
            <p className="text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. The revised version will be posted on
              this page with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this
              page periodically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              11. Contact Us
            </h2>
            <p className="text-sm leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, contact us at:
            </p>
            <div className="mt-3 rounded-2xl border border-gray-200 bg-canvas-offwhite p-5 text-sm space-y-1">
              <p className="font-bold text-gray-900">
                Lith-On Bharat Energy Private Limited
              </p>
              <p>Arihant Business Centre, Sector 136, Noida - 201304, Uttar Pradesh, India</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:privacy@lith-on.com"
                  className="text-lithon-blue hover:underline"
                >
                  privacy@lith-on.com
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
