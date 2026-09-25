import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import DomeGallery from "@/components/reactbits/DomeGallery";
import { ToolsDirectory } from "@/components/tools/ToolsDirectory";
import { LeaderboardTable } from "@/components/shared/LeaderboardTable";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Input } from "@/components/ui/input";
import { getTopTools, mockTools, toToolLeaderboard } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: {
    absolute: "Top Tools for Freelancers & Businesses — ToolNest",
  },
  description:
    "Discover the best tools for freelancers and businesses in India. Weekly leaderboard, reviews, and rankings.",
};

export default function ToolsPage() {
  const leaderboard = toToolLeaderboard(getTopTools(10));
  const domeImages = mockTools.map((tool) => ({
    src: `https://picsum.photos/seed/${tool.slug}/600/600`,
    alt: tool.name,
  }));

  return (
    <>
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
            🛠️ Tools Directory
          </span>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            Top Tools for Freelancers &amp; Businesses
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover, compare, and pick the best tools. Bid to feature your
            tool.
          </p>
          <div className="relative mx-auto mt-6 max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search tools..."
              className="pl-9"
            />
          </div>
        </div>
      </section>

      <section className="relative h-[500px] bg-[#120F17] md:h-[640px]">
        <DomeGallery
          images={domeImages}
          fit={0.5}
          minRadius={500}
          maxRadius={900}
          overlayBlurColor="#120F17"
          grayscale={false}
          segments={35}
          imageBorderRadius="16px"
          openedImageBorderRadius="16px"
          dragDampening={2}
        />
        <div className="pointer-events-none absolute left-0 right-0 top-8 z-10 w-full text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            Featured Tools
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Explore the Dome
          </h2>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            title="🏆 Tools Leaderboard"
            subtitle="Top 10 tools ranked by weekly bids."
          />
          <div className="mt-6">
            <LeaderboardTable items={leaderboard} type="tool" linkToDetail />
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Rankings reset every Monday at 12 AM IST.{" "}
            <Link
              href="/pricing"
              className="font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-700"
            >
              Bid to rank up →
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <ToolsDirectory tools={mockTools} />
        </div>
      </section>

      <section className="bg-indigo-600 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold md:text-4xl">Built a tool?</h2>
          <p className="mt-3 text-indigo-100">
            Get it in front of thousands of freelancers
          </p>
          <Link
            href="/submit"
            className="mt-6 inline-flex items-center rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 transition-colors duration-200 hover:bg-gray-100"
          >
            Submit Tool
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}