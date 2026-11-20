import type { Metadata } from "next";
import { LegalAddress, LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy | Lith-On Bharat Energy",
  description: "Lith-On Bharat Energy privacy policy covering data collection, usage, storage, and your rights under Indian law.",
};

/**
 * /privacy-policy (LEG-01): wording retained from the previous page; layout
 * only. contact@lith-onbharat.com per owner, 20 Nov 2026.
 */

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    content: (
      <p>
        Lith-On Bharat Energy Private Limited (&ldquo;Lith-On&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is an Indian manufacturer of industrial Battery Energy Storage Systems (BESS) and
        heavy-duty lithium battery packs, headquartered in Noida, Uttar Pradesh, India. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you
        visit our website or interact with our services.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <>
        <h3>a) Information you provide voluntarily</h3>
        <p>
          When you submit an RFQ, contact form, distributor application, or career inquiry, we collect the information you provide, which may include your name, email address, phone
          number, company name, designation, facility details, and project requirements.
        </p>
        <h3>b) Automatically collected information</h3>
        <p>
          When you visit our website, we may automatically collect device information (browser type, operating system), IP address, pages visited, time spent on pages, and referring
          URLs through standard web server logs and analytics tools.
        </p>
        <h3>c) Cookies and tracking technologies</h3>
        <p>
          We may use cookies and similar technologies to improve your browsing experience, analyse site usage, and assist in our marketing efforts. You can control cookie preferences
          through your browser settings at any time.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    content: (
      <ul>
        <li>Respond to your RFQ, technical sizing, and service inquiries</li>
        <li>Process distributor and channel partner applications</li>
        <li>Send project proposals, datasheets, and relevant technical documentation</li>
        <li>Improve our website, products, and customer experience</li>
        <li>Comply with applicable legal and regulatory obligations</li>
        <li>Communicate important product safety notices and warranty information</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Information sharing and disclosure",
    content: (
      <>
        <p>We do not sell, rent, or trade your personal information to third parties. We may share your information with:</p>
        <ul>
          <li>
            <strong>Authorized channel partners and distributors</strong>: only when you have requested a local site survey or project consultation in a geography served by our partners
          </li>
          <li>
            <strong>Service providers</strong>: third-party platforms that help us operate our website (hosting, analytics, email delivery) under strict data processing agreements
          </li>
          <li>
            <strong>Legal requirements</strong>: when required by Indian law, court order, or governmental regulation
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "Data security",
    content: (
      <p>
        We implement industry-standard technical and organisational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    content: (
      <p>
        We retain your personal information only for as long as necessary to fulfil the purposes described in this policy, or as required by applicable Indian laws and regulations. RFQ
        and project inquiry data is retained for a maximum of 3 years from the date of last correspondence unless a commercial relationship is established.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    content: (
      <>
        <p>Under applicable Indian data protection laws, you have the right to:</p>
        <ul>
          <li>Access, correct, or update the personal data we hold about you</li>
          <li>Request deletion of your personal data (subject to legal retention requirements)</li>
          <li>Withdraw consent for marketing communications at any time</li>
          <li>Lodge a complaint with the relevant data protection authority</li>
        </ul>
        <p>
          To exercise these rights, contact us at <a href="mailto:contact@lith-onbharat.com">contact@lith-onbharat.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    content: (
      <p>
        Our website may contain links to external websites, including social media platforms, industry bodies, and certification authorities. We are not responsible for the privacy
        practices or content of those external websites.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    content: (
      <p>
        Our website and services are directed at business professionals and are not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated &ldquo;Last updated&rdquo; date. We encourage you to review
        this page periodically.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <>
        <p>If you have questions about this Privacy Policy or our data practices, contact us at:</p>
        <LegalAddress email="contact@lith-onbharat.com" />
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return <LegalDocument title="Privacy policy" updated="November 2026" sections={SECTIONS} />;
}
