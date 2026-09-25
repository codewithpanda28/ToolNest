import type { Metadata } from "next";
import { CTASection } from "@/components/home/CTASection";
import { Hero } from "@/components/home/Hero";
import { LeaderboardPreview } from "@/components/home/LeaderboardPreview";
import { StatsRow } from "@/components/home/StatsRow";
import { BlogCard } from "@/components/blog/BlogCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { getRecentPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: {
    absolute: "ToolNest — Discover Top Businesses & Tools in India",
  },
  description:
    "Find the best businesses and tools trusted by thousands of users across India.",
};

export default function Home() {
  const recentPosts = getRecentPosts(3);

  return (
    <>
      <Hero />
      <StatsRow />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <LeaderboardPreview />
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader title="📚 From the Blog" viewAllHref="/blog" />
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}