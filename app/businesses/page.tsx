import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import DriftWall from "@/components/reactbits/DriftWall";
import { BusinessDirectory } from "@/components/businesses/BusinessDirectory";
import { LeaderboardTable } from "@/components/shared/LeaderboardTable";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Input } from "@/components/ui/input";
import { AdSlot } from "@/components/ads/AdSlot";
import { getBusinesses } from "@/lib/db/businesses";
import { toBusinessLeaderboard } from "@/lib/db/leaderboard";

export const revalidate = 60;

export const metadata: Metadata = {
  title: {
    absolute: "Top Businesses in India — ToolNest",
  },
  description:
    "Discover and rank top businesses across India. Weekly leaderboard resets every Monday.",
  alternates: { canonical: "/businesses" },
};

export default async function BusinessesPage() {
  const businesses = await getBusinesses();
  const leaderboard = toBusinessLeaderboard(businesses);
  const driftItems = businesses.map((business) => ({
    image: `https://picsum.photos/seed/${business.slug}/600/400`,
    title: business.name,
    href: `/business/${business.slug}`,
  }));

  return (
    <>
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
            🏢 Business Directory
          </span>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            Top Businesses in India
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover companies ranked by the community. Bid to climb the
            leaderboard.
          </p>
          <div className="relative mx-auto mt-6 max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search businesses..."
              className="pl-9"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <AdSlot slot="businesses-top" format="auto" className="my-8" />
      </div>

      <section className="relative h-[420px] overflow-hidden bg-slate-950 md:h-[520px]">
        <DriftWall
          items={driftItems}
          columns={5}
          tileWidth={200}
          tileHeight={132}
          gap={18}
          radius={14}
          tilt={16}
          turn={-14}
          perspective={1200}
          depth={120}
          speed={42}
          direction="up"
          variance={0.45}
          parallax={0.6}
          lift={64}
          fade={0.6}
          dim={0.55}
          overlayColor="#0f172a"
          grayscale={false}
        />
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            Featured This Week
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            India&apos;s Fastest Growing Businesses
          </h2>
          <p className="mt-3 max-w-xl text-slate-300">
            Hover a tile to lift it, or click through to explore.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            title="🏆 Business Leaderboard"
            subtitle="Top 10 businesses ranked by weekly bids. Resets every Monday."
          />
          <div className="mt-6">
            <LeaderboardTable
              items={leaderboard}
              type="business"
              linkToDetail
            />
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
          <BusinessDirectory businesses={businesses} />
        </div>
      </section>

      <section className="bg-indigo-600 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold md:text-4xl">Own a business?</h2>
          <p className="mt-3 text-indigo-100">
            Get listed and claim your leaderboard spot
          </p>
          <Link
            href="/submit"
            className="mt-6 inline-flex items-center rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 transition-colors duration-200 hover:bg-gray-100"
          >
            Submit Business
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}