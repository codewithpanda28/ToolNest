import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { AdSlot } from "@/components/ads/AdSlot";
import { BlogCard, formatDate } from "@/components/blog/BlogCard";
import { renderContent } from "@/lib/renderContent";
import {
  articleSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import {
  allPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/content/blog";

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: { absolute: "Article Not Found — ToolNest Blog" } };
  return {
    title: { absolute: `${post.title} — ToolNest Blog` },
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      tags: post.tags,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);

  const breadcrumbData = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[articleSchema(post), breadcrumbData]} />
      <nav className="bg-white py-4">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-500">
          <Link href="/" className="transition-colors hover:text-gray-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="transition-colors hover:text-gray-900">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="line-clamp-1 text-gray-900">{post.title}</span>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-indigo-50 to-white py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="rounded bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            By {post.author} • {formatDate(post.publishedAt)} •{" "}
            {post.readingTime} min read
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-8 flex justify-center">
            <span className="flex size-20 items-center justify-center rounded-2xl bg-white text-5xl shadow">
              {post.coverEmoji}
            </span>
          </div>
          <AdSlot slot="article-top" className="mb-8" />
          <article>{renderContent(post.content)}</article>

          <div className="mt-8">
            <AdSlot slot="article-bottom" className="my-8" />
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="font-semibold text-gray-900">
              Written by {post.author}
            </p>
            <p className="mt-1 text-sm text-gray-600">
              ToolNest Contributor
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/blog"
              className="text-sm font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-700"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader title="Related Articles" viewAllHref="/blog" />
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold md:text-4xl">
            Have a tool or business to share?
          </h2>
          <p className="mt-3 text-indigo-100">
            Get discovered by thousands of freelancers and businesses.
          </p>
          <Link
            href="/submit"
            className="mt-6 inline-flex items-center rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 transition-colors duration-200 hover:bg-gray-100"
          >
            Submit Listing
          </Link>
        </div>
      </section>
    </>
  );
}