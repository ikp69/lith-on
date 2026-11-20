import type { Metadata } from "next";
import { FaqBrowser } from "@/components/faqs/FaqBrowser";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { ALL_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs | Battery Energy Storage Questions Answered | Lith-On",
  description:
    "Answers on battery storage basics, LFP chemistry, safety, savings and payback, GRAP compliance, telecom backup, installation and Lith-On warranties.",
};

/**
 * /faqs (audit §6, FAQ-01–04). Search hero, sticky categories and grouped
 * hairline accordions (FAQ-01–03, src/components/faqs/FaqBrowser.tsx) →
 * inline closing (FAQ-04). Content: src/data/faqs.ts.
 */
export default function FAQsPage() {
  return (
    <div className="bg-canvas">
      <FaqJsonLd faqs={ALL_FAQS.map((f) => ({ question: f.question, answer: f.answer }))} />
      <FaqBrowser />
      {/* FAQ-04 */}
      <ClosingCTA
        variant="inline"
        title={["Question not listed here?"]}
        lead="Our Noida engineering team will answer it directly."
        primary={{ label: "Ask an engineer", href: "/contact" }}
        secondary={{ label: "Call +91 70000 13009", href: "tel:+917000013009" }}
      />
    </div>
  );
}
