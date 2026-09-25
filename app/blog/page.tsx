import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogFilters } from "@/components/blog/BlogFilters";
import { allPosts, getFeaturedPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: {
    absolute: "Blog — ToolNest",
  },
  description:
    "Guides, tutorials, and tool reviews for Indian freelancers and small businesses. Learn about invoicing, GST, automation, and SEO.",
};

export default function BlogPage() {
  const featured = getFeaturedPosts();

  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
            📝 Blog
          </span>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            ToolNest Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Guides, tools, and insights for Indian freelancers and businesses
          </p>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeader title="⭐ Featured" />
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {featured.map((post) => (
                <BlogCard key={post.slug} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader title="All Articles" />
          <div className="mt-6">
            <BlogFilters posts={allPosts} />
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