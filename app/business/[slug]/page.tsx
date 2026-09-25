import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Share2 } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  getBusinessBySlug,
  getBusinessRank,
  mockBusinesses,
} from "@/lib/mock-data";

export function generateStaticParams() {
  return mockBusinesses.map((business) => ({ slug: business.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/business/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);
  if (!business) return { title: { absolute: "Business Not Found — ToolNest" } };
  return {
    title: { absolute: `${business.name} — ToolNest` },
    description: business.description,
  };
}

export default async function BusinessDetailPage({
  params,
}: PageProps<"/business/[slug]">) {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);
  if (!business) notFound();

  const rank = getBusinessRank(business);
  const others = mockBusinesses.filter((b) => b.id !== business.id).slice(0, 4);

  return (
    <>
      <nav className="bg-white py-4">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-500">
          <Link href="/" className="transition-colors hover:text-gray-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/businesses"
            className="transition-colors hover:text-gray-900"
          >
            Businesses
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{business.name}</span>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-indigo-50 to-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="mx-auto flex size-20 items-center justify-center rounded-2xl bg-white text-5xl shadow">
            {business.logo}
          </span>
          <h1 className="mt-6 text-3xl font-bold text-gray-900 md:text-4xl">
            {business.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <span className="rounded bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
              {business.category}
            </span>
            <span className="rounded bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
              Ranked #{rank} this week
            </span>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {business.description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={business.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-indigo-700"
            >
              Visit Website
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <button
              type="button"
              className="inline-flex items-center rounded-lg border-2 border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors duration-200 hover:border-indigo-600 hover:text-indigo-600"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white py-8">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-600">#{rank}</p>
            <p className="mt-1 text-sm text-gray-600">Weekly Rank</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              ₹{business.amount.toLocaleString("en-IN")}
            </p>
            <p className="mt-1 text-sm text-gray-600">Weekly Bid</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              {business.category}
            </p>
            <p className="mt-1 text-sm text-gray-600">Category</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">2025</p>
            <p className="mt-1 text-sm text-gray-600">Listed</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            About {business.name}
          </h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              {business.name} is a {business.category.toLowerCase()} company
              serving clients across India. With a focus on quality and
              reliability, it has grown a strong reputation within the
              ToolNest community.
            </p>
            <p>
              The team behind {business.name} combines experience with a
              customer-first approach, delivering measurable results for every
              engagement. Thousands of users discover and trust{" "}
              {business.name} every month.
            </p>
            <p>
              Visit the website to learn more about services, pricing, and
              customer stories. Rankings shown reflect the current weekly
              leaderboard position on ToolNest.
            </p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-gray-900 md:text-3xl">
            Why {business.name}?
          </h2>
          <ul className="mt-4 grid list-none gap-3 text-gray-600 sm:grid-cols-2">
            {[
              "Trusted by businesses across India",
              "Strong community reputation and reviews",
              "Competitive weekly leaderboard ranking",
              "Easy to connect and get started",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs text-indigo-700">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader title="Similar Businesses" viewAllHref="/businesses" />
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((b) => (
              <Link
                key={b.id}
                href={`/business/${b.slug}`}
                className="rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-200 hover:border-indigo-300"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-indigo-50 text-xl">
                    {b.logo}
                  </span>
                  <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
                    {b.category}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-gray-900">{b.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                  {b.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold md:text-4xl">
            Is this your business?
          </h2>
          <p className="mt-3 text-indigo-100">
            Claim your listing and climb the leaderboard.
          </p>
          <Link
            href="/submit"
            className="mt-6 inline-flex items-center rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 transition-colors duration-200 hover:bg-gray-100"
          >
            Claim This Listing
          </Link>
        </div>
      </section>
    </>
  );
}