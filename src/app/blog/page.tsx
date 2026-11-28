import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ClosingCTA } from "@/components/system/ClosingCTA";
import { PageHero } from "@/components/system/PageHero";
import { BLOG_POSTS } from "@/data/blog";

export const metadata: Metadata = {
  title: "Insights | Battery Storage Explained | Lith-On",
  description: "Plain-English articles on battery storage in India: replacing diesel generators, IceBattery® thermal protection and EV charging demand charges.",
};

/**
 * /blog: Insights index. Articles live in src/data/blog.ts and are written only
 * from approved figures (LITHON_DATA_VAULT.md and the case studies). Listed as
 * hairline rows rather than a card grid (design.md §11).
 */
export default function BlogPage() {
  return (
    <div className="bg-canvas">
      <PageHero
        variant="utility"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Insights" }]}
        title={["Insights"]}
        lead="How battery storage works on real sites, explained with figures from our own projects."
      />

      <section aria-labelledby="articles-title" className="section">
        <div className="container-site">
          <h2 id="articles-title" className="sr-only">
            Articles
          </h2>
          <ul className="border-t border-line">
            {BLOG_POSTS.map((post) => (
              <li key={post.slug} className="border-b border-line">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group/row -mx-3 grid gap-3 rounded-control px-3 py-8 transition-colors hover:bg-canvas-warm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue lg:grid-cols-12 lg:gap-6"
                >
                  <span className="text-small text-ink-3 lg:col-span-3">
                    {post.topic}
                    <span className="block">{post.readMinutes} min read</span>
                  </span>
                  <span className="min-w-0 lg:col-span-8">
                    <span className="block text-heading-3 text-ink group-hover/row:text-lithon-blue">{post.title}</span>
                    <span className="mt-2 block max-w-[62ch] text-body text-ink-2">{post.description}</span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="hidden h-5 w-5 justify-self-end text-lithon-blue transition-transform duration-200 group-hover/row:translate-x-1 motion-reduce:transition-none lg:col-span-1 lg:block"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCTA
        variant="inline"
        title={["Want these numbers for your site?"]}
        lead="Share your diesel, demand or solar figures and we will model savings and payback."
        primary={{ label: "Request a model", href: "/contact?type=assessment" }}
        secondary={{ label: "Case studies", href: "/case-studies" }}
      />
    </div>
  );
}
