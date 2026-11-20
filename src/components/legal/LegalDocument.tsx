import type { ReactNode } from "react";
import { PageHero } from "@/components/system/PageHero";

/**
 * LEG-01 (audit §6): legal pages keep their wording; this is the typography
 * pass. Utility hero, body at 17px on a reading measure, and a sticky contents
 * list on desktop. Section ids double as anchor links.
 */

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

export function LegalDocument({ title, updated, sections }: { title: string; updated: string; sections: LegalSection[] }) {
  return (
    <div className="bg-canvas">
      <PageHero variant="utility" breadcrumb={[{ label: "Home", href: "/" }, { label: title }]} title={[title]} lead={`Last updated: ${updated}`} />

      <div className="section-tight">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-6">
          <nav aria-label="Contents" className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="text-small font-[500] text-ink-3">Contents</p>
              <ol className="mt-3 border-t border-line">
                {sections.map((s, i) => (
                  <li key={s.id} className="border-b border-line">
                    <a href={`#${s.id}`} className="flex gap-3 py-2.5 text-small text-ink-2 transition-colors hover:text-lithon-blue">
                      <span className="tabular w-5 shrink-0 text-ink-3">{i + 1}</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="lg:col-span-8 lg:col-start-5">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-28 border-t border-line pt-8 pb-10 first:border-t-0 first:pt-0">
                <h2 id={`${s.id}-title`} className="text-heading-2 text-ink">
                  <span className="tabular mr-3 text-ink-3">{i + 1}</span>
                  {s.title}
                </h2>
                <div className="legal-body mt-4 max-w-[68ch] space-y-4 text-body text-ink-2 [&_a]:text-lithon-blue [&_a]:underline-offset-4 [&_a:hover]:underline [&_h3]:mt-6 [&_h3]:text-heading-3 [&_h3]:text-ink [&_strong]:font-[600] [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:pl-1">
                  {s.content}
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}

export function LegalAddress({ email }: { email: string }) {
  return (
    <address className="border-l-2 border-line pl-4 not-italic">
      <strong>Lith-On Bharat Energy Private Limited</strong>
      <br />
      Arihant Business Centre, Sector 136, Noida - 201304, Uttar Pradesh, India
      <br />
      Email: <a href={`mailto:${email}`}>{email}</a>
      <br />
      Phone: <a href="tel:+917000013009">+91-7000013009</a>
    </address>
  );
}
