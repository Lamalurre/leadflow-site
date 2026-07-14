import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCta from "@/components/BlogCta";
import Reveal from "@/components/motion/Reveal";
import { blogPosts, getBlogPost } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blogg — Sylvor" };
  return {
    title: `${post.title} — Sylvor`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <Reveal>
          <article className="mx-auto max-w-3xl px-6 pb-24 pt-16">
            <Link
              href="/blogg"
              className="text-sm font-medium text-ink/50 hover:text-ink"
            >
              ← Tillbaka till bloggen
            </Link>
            <span className="mt-6 block text-xs font-semibold uppercase tracking-wide text-ink/40">
              {new Date(post.date).toLocaleDateString("sv-SE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <h1 className="mt-2 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
              {post.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </article>
        </Reveal>
      </main>
      <Footer />
      <BlogCta />
    </>
  );
}
