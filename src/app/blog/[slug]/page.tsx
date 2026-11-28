import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/system/Button";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { BLOG_POSTS, type BlogSection, getPost } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return {};
  }
  return { title: `${post.title} | Lith-On`, description: post.description };
}

function SectionTable({ table }: { table: NonNullable<BlogSection["table"]> }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[28rem] border-collapse text-left text-small">
        <caption className="mb-3 text-left text-small text-ink-3">{table.caption}</caption>
        <thead>
          <tr className="border-b border-line-strong">
            {table.columns.map((c, i) => (
              <th key={c || `col-${i}`} scope="col" className="py-3 pr-4 font-[500] text-ink-3">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row[0]} className="border-b border-line">
              {row.map((cell, i) =>
                i === 0 ? (
                  <th key={`${row[0]}-h`} scope="row" className="py-3 pr-4 font-[500] text-ink">
                    {cell}
                  </th>
                ) : (
                  <td key={`${row[0]}-${table.columns[i]}`} className="tabular py-3 pr-4 text-ink-2">
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** /blog/[slug]: one Insights article, set as a single readable column. */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    notFound();
  }
  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <div className="bg-canvas">
      <article aria-labelledby="post-title">
        <header className="border-b border-line bg-canvas-warm">
          <div className="container-site pt-10 pb-12 lg:pt-16 lg:pb-16">
            <nav aria-label="Breadcrumb" className="mb-6 text-small text-ink-3">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span aria-hidden="true"> / </span>
              <Link href="/blog" className="hover:underline">
                Insights
              </Link>
            </nav>
            <p className="text-small text-ink-3">
              {post.topic}, {post.readMinutes} min read
            </p>
            <h1 id="post-title" className="mt-3 max-w-[22ch] min-w-0 text-heading-1 text-ink [overflow-wrap:break-word]">
              {post.title}
            </h1>
            <p className="mt-5 max-w-[60ch] text-lead text-ink-2">{post.lead}</p>
          </div>
        </header>

        <div className="container-site section-tight">
          <div className="max-w-[68ch]">
            {post.sections.map((s) => (
              <section key={s.heading} className="mt-12 first:mt-0">
                <h2 className="text-heading-2 text-ink">{s.heading}</h2>
                {s.paragraphs.map((para) => (
                  <p key={para.slice(0, 40)} className="mt-4 text-body text-ink-2">
                    {para}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-body text-ink-2 marker:text-ink-3">
                    {s.list.map((item) => (
                      <li key={item.slice(0, 40)}>{item}</li>
                    ))}
                  </ul>
                )}
                {s.table && <SectionTable table={s.table} />}
              </section>
            ))}

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6">
              {post.related.map((r) => (
                <Button key={r.href} href={r.href} variant="tertiary">
                  {r.label}
                </Button>
              ))}
            </div>
            <p className="mt-6 text-small text-ink-3">Sources: {post.sources.join("; ")}.</p>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section aria-labelledby="more-title" className="pb-16 lg:pb-24">
          <div className="container-site">
            <h2 id="more-title" className="text-heading-3 text-ink">
              More insights
            </h2>
            <ul className="mt-4 border-t border-line">
              {others.map((p) => (
                <li key={p.slug} className="border-b border-line">
                  <Link href={`/blog/${p.slug}`} className="block py-5 text-body text-ink hover:text-lithon-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <ClosingCTA
        variant="inline"
        title={["Get a model for your site"]}
        lead="Share your diesel, demand or solar figures and we will estimate savings and payback."
        primary={{ label: "Request a model", href: "/contact?type=assessment" }}
        secondary={{ label: "Call +91 70000 13009", href: "tel:+917000013009" }}
      />
    </div>
  );
}
