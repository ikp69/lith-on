import type { Metadata } from "next";
import Link from "next/link";
import { LegalAddress, LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Terms & Conditions | Lith-On Bharat Energy",
  description: "Terms and conditions governing the use of Lith-On Bharat Energy website, product information, and service inquiries.",
};

/**
 * /terms-and-conditions (LEG-01): wording retained from the previous page;
 * layout only. contact@lith-onbharat.com per owner, 20 Nov 2026.
 */

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    content: (
      <p>
        By accessing and using the Lith-On Bharat Energy Private Limited (&ldquo;Lith-On&rdquo;) website at lith-on.com (the &ldquo;Website&rdquo;), you agree to be bound by these Terms
        and Conditions. If you do not agree with any part of these terms, you should not use this Website.
      </p>
    ),
  },
  {
    id: "use",
    title: "Use of website",
    content: (
      <>
        <p>
          This Website is provided for informational purposes about Lith-On&apos;s industrial Battery Energy Storage Systems (BESS), lithium battery products, and related engineering
          services. You agree to use the Website only for lawful purposes and in accordance with these Terms.
        </p>
        <p>You may not:</p>
        <ul>
          <li>Use the Website in any way that violates applicable Indian or international law</li>
          <li>Reproduce, distribute, or commercially exploit Website content without prior written permission from Lith-On</li>
          <li>Attempt to gain unauthorized access to any portion of the Website or its systems</li>
          <li>Use automated tools to scrape, harvest, or extract data from the Website without authorization</li>
        </ul>
      </>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    content: (
      <>
        <p>
          All content on this Website, including but not limited to text, graphics, logos, photographs, product images, technical datasheets, engineering diagrams, and software, is the
          property of Lith-On Bharat Energy Private Limited or its licensors and is protected by Indian and international intellectual property laws.
        </p>
        <p>
          &ldquo;Lith-On&rdquo;, &ldquo;IceBattery&rdquo;, the Lith-On logo, and associated product names (Magna-C&amp;I, LT215, Max-20HC) are trademarks of Lith-On Bharat Energy Private
          Limited. Use of these marks without prior written consent is prohibited.
        </p>
      </>
    ),
  },
  {
    id: "product-information",
    title: "Product information and specifications",
    content: (
      <>
        <p>
          Technical specifications, performance data, and product descriptions on this Website are provided for general informational and preliminary assessment purposes. While Lith-On
          strives for accuracy, actual product performance may vary based on site conditions, installation parameters, and operational profiles. Binding specifications and commercial
          terms are provided exclusively through official quotations and purchase agreements issued by Lith-On&apos;s engineering team.
        </p>
        <p>Lith-On reserves the right to modify product specifications, designs, and availability without prior notice.</p>
      </>
    ),
  },
  {
    id: "inquiries",
    title: "RFQ, contact forms and inquiries",
    content: (
      <p>
        Submission of an RFQ (Request for Quotation), contact form, or any inquiry through this Website does not constitute a binding contract, purchase order, or commitment by either
        party. All commercial engagements are subject to formal quotation acceptance, credit approval, and execution of a written purchase agreement or service contract.
      </p>
    ),
  },
  {
    id: "pricing",
    title: "Pricing and payment",
    content: (
      <p>
        Prices displayed on this Website, if any, are indicative and do not constitute a binding offer. Final pricing is determined through formal quotation based on project scope,
        configuration, delivery terms, and applicable taxes. All commercial transactions are governed by the specific terms of the executed purchase agreement.
      </p>
    ),
  },
  {
    id: "warranty",
    title: "Warranty and liability",
    content: (
      <>
        <p>
          Product warranty terms are as specified in Lith-On&apos;s official warranty documentation provided with each product. For warranty details, refer to our{" "}
          <Link href="/warranty-and-support">Warranty &amp; Support</Link> page.
        </p>
        <p>
          To the fullest extent permitted by Indian law, Lith-On shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of
          this Website or reliance on information provided herein.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    content: (
      <p>
        This Website may contain links to third-party websites for your convenience. Lith-On does not endorse, control, or assume responsibility for the content, privacy policies, or
        practices of any third-party websites.
      </p>
    ),
  },
  {
    id: "limitation",
    title: "Limitation of liability",
    content: (
      <p>
        This Website and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, express or implied. Lith-On does not warrant that the
        Website will be uninterrupted, error-free, or free of harmful components.
      </p>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: (
      <p>
        You agree to indemnify and hold harmless Lith-On, its directors, employees, and agents from and against any claims, damages, losses, or expenses arising from your violation of
        these Terms or misuse of the Website.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law and jurisdiction",
    content: (
      <p>
        These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or the use of this Website shall be subject to the exclusive
        jurisdiction of the courts in Gautam Buddh Nagar (Noida), Uttar Pradesh, India.
      </p>
    ),
  },
  {
    id: "modifications",
    title: "Modifications",
    content: (
      <p>
        Lith-On reserves the right to revise these Terms at any time without prior notice. The updated Terms will be posted on this page with a revised date. Your continued use of the
        Website after such changes constitutes acceptance of the updated Terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <>
        <p>For questions about these Terms, contact us at:</p>
        <LegalAddress email="contact@lith-onbharat.com" />
      </>
    ),
  },
];

export default function TermsPage() {
  return <LegalDocument title="Terms and conditions" updated="November 2026" sections={SECTIONS} />;
}
