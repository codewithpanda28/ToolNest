import type { Metadata } from "next";
import { CTASection } from "@/components/home/CTASection";
import { Hero } from "@/components/home/Hero";
import { LeaderboardPreview } from "@/components/home/LeaderboardPreview";
import { StatsRow } from "@/components/home/StatsRow";
import { BlogCard } from "@/components/blog/BlogCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AdSlot } from "@/components/ads/AdSlot";
import { getRecentPosts } from "@/content/blog";
import { getTopBusinesses } from "@/lib/db/businesses";
import { getTopTools } from "@/lib/db/tools";

export const revalidate = 60;

export const metadata: Metadata = {
  title: {
    absolute: "ToolNest — Discover Top Businesses & Tools in India",
  },
  description:
    "Find the best businesses and tools trusted by thousands of users across India.",
};

export default async function Home() {
  const recentPosts = getRecentPosts(3);
  const [topBusinesses, topTools] = await Promise.all([
    getTopBusinesses(5),
    getTopTools(5),
  ]);

  return (
    <>
      <Hero />
      <StatsRow />
      <div className="mx-auto max-w-6xl px-4">
        <AdSlot slot="home-top" format="auto" className="my-8" />
      </div>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <LeaderboardPreview
            businesses={topBusinesses}
            tools={topTools}
          />
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