"use client";

import { ChevronDown, Search, X } from "lucide-react";
import Link from "next/link";
import { useDeferredValue, useId, useState } from "react";
import { ALL_FAQS, FAQ_GROUPS } from "@/data/faqs";

/**
 * FAQ-01/02/03 (audit §6). Search is the hero's main element; categories are a
 * sticky list on the left on desktop (anchor links); questions are hairline
 * accordion rows grouped under category headings (native <details>, so all
 * answers are in the HTML without JavaScript). Searching filters every group.
 */

function matches(q: string, text: string) {
  return text.toLowerCase().includes(q);
}

export function FaqBrowser() {
  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query);
  const q = deferred.trim().toLowerCase();
  const searchId = useId();

  const groups = FAQ_GROUPS.map((g) => ({ ...g, faqs: q ? g.faqs.filter((f) => matches(q, f.question) || matches(q, f.answer)) : g.faqs })).filter((g) => g.faqs.length > 0);
  const count = groups.reduce((n, g) => n + g.faqs.length, 0);

  return (
    <>
      {/* FAQ-01: utility hero with search as the main element */}
      <section className="border-b border-line bg-canvas-warm">
        <div className="container-site pt-10 pb-12 lg:pt-16 lg:pb-16">
          <div className="max-w-3xl">
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
                    FAQs
                  </span>
                </li>
              </ol>
            </nav>
            <h1 className="text-heading-1 text-ink">
              <span className="block">Questions,</span>
              <span className="block font-[500] text-lithon-blue">answered</span>
            </h1>
            <p className="mt-5 text-lead text-ink-2 measure text-pretty">
              Battery technology, safety, savings, installation and warranty, in {ALL_FAQS.length} answers.
            </p>
            <div className="relative mt-8" role="search">
              <label htmlFor={searchId} className="sr-only">
                Search the FAQs
              </label>
              <Search className="pointer-events-none absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 text-ink-3" aria-hidden="true" />
              <input
                id={searchId}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search, for example GRAP, payback or warranty"
                autoComplete="off"
                className="h-14 w-full rounded-full border border-line-strong bg-white pr-14 pl-13 text-body text-ink placeholder:text-ink-3 focus-visible:border-lithon-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute top-1/2 right-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full text-ink-3 hover:text-ink focus-visible:outline-2 focus-visible:outline-lithon-blue"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Clear search</span>
                </button>
              )}
            </div>
            <p className="mt-3 min-h-6 text-small text-ink-3" aria-live="polite">
              {q ? `${count} ${count === 1 ? "answer" : "answers"} for “${deferred.trim()}”` : ""}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ-02/03 */}
      <section aria-label="Questions" className="section">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-6">
          <nav aria-label="FAQ categories" className="hidden lg:col-span-3 lg:block">
            <ul className="sticky top-28 border-t border-line">
              {groups.map((g) => (
                <li key={g.id} className="border-b border-line">
                  <a href={`#faq-${g.id}`} className="flex items-baseline justify-between gap-3 py-3 text-small text-ink-2 transition-colors hover:text-lithon-blue">
                    <span>{g.title}</span>
                    <span className="tabular text-ink-3">{g.faqs.length}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-8 lg:col-start-5">
            {groups.length === 0 && (
              <div className="border-t border-line pt-8">
                <p className="text-lead text-ink">No answers match that search.</p>
                <p className="mt-2 text-body text-ink-2">
                  Try another word, or{" "}
                  <Link href="/contact" className="text-lithon-blue underline-offset-4 hover:underline">
                    ask our engineers directly
                  </Link>
                  .
                </p>
              </div>
            )}
            {groups.map((g) => (
              <div key={g.id} id={`faq-${g.id}`} className="scroll-mt-28 not-first:mt-14">
                <h2 className="text-heading-2 text-ink">{g.title}</h2>
                <div className="mt-5 border-t border-ink">
                  {g.faqs.map((f) => (
                    <details key={f.id} id={f.id} className="group border-b border-line" open={q.length > 1 && g.faqs.length <= 3}>
                      <summary className="flex min-h-14 cursor-pointer list-none items-start justify-between gap-6 py-5 text-body font-[500] text-ink transition-colors hover:text-lithon-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue [&::-webkit-details-marker]:hidden">
                        <span>{f.question}</span>
                        <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-ink-3 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
                      </summary>
                      <p className="pb-6 text-body text-ink-2 measure">{f.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
