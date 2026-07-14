import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCta from "@/components/BlogCta";
import Reveal from "@/components/motion/Reveal";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blogg — Sylvor",
  description:
    "Tips och insikter för hantverkare, städfirmor, flyttfirmor och andra serviceföretag om förfrågningar, offertarbete och kundkommunikation.",
};

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Reveal>
          <section className="mx-auto max-w-4xl px-6 pb-8 pt-16">
            <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              Blogg
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
              Tips och insikter för hantverkare, städfirmor, flyttfirmor och
              andra serviceföretag om förfrågningar, offertarbete och
              kundkommunikation.
            </p>
          </section>
        </Reveal>

        <RevealGroup className="mx-auto max-w-4xl space-y-6 px-6 pb-24 pt-12">
          {[...blogPosts]
            .sort((a, b) => b.date.localeCompare(a.date))
            .map((post) => (
            <RevealItem key={post.slug}>
              <Link
                href={`/blogg/${post.slug}`}
                className="block rounded-2xl border border-border bg-ivory-card p-8 transition hover:border-navy/40 hover:shadow-sm"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                  {new Date(post.date).toLocaleDateString("sv-SE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <h2 className="mt-2 font-serif text-2xl font-medium">
                  {post.title}
                </h2>
                <p className="mt-3 leading-relaxed text-ink/70">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy">
                  Läs mer →
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </main>
      <Footer />
      <BlogCta />
    </>
  );
}
