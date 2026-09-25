import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Share2 } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import { getToolBySlug, getToolRank, mockTools } from "@/lib/mock-data";

const PRICING_STYLES: Record<string, string> = {
  free: "bg-green-100 text-green-700",
  freemium: "bg-blue-100 text-blue-700",
  paid: "bg-orange-100 text-orange-700",
};

const PRICING_LABELS: Record<string, string> = {
  free: "Free",
  freemium: "Freemium",
  paid: "Paid",
};

export function generateStaticParams() {
  return mockTools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/tool/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: { absolute: "Tool Not Found — ToolNest" } };
  return {
    title: { absolute: `${tool.name} — ToolNest` },
    description: tool.description,
  };
}

export default async function ToolDetailPage({
  params,
}: PageProps<"/tool/[slug]">) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const rank = getToolRank(tool);
  const others = mockTools.filter((t) => t.id !== tool.id).slice(0, 4);

  return (
    <>
      <nav className="bg-white py-4">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-500">
          <Link href="/" className="transition-colors hover:text-gray-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/tools" className="transition-colors hover:text-gray-900">
            Tools
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{tool.name}</span>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-indigo-50 to-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="mx-auto flex size-20 items-center justify-center rounded-2xl bg-white text-5xl shadow">
            {tool.logo}
          </span>
          <h1 className="mt-6 text-3xl font-bold text-gray-900 md:text-4xl">
            {tool.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <span className="rounded bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
              {tool.category}
            </span>
            <span
              className={cn(
                "rounded px-2.5 py-1 text-xs font-medium",
                PRICING_STYLES[tool.pricing]
              )}
            >
              {PRICING_LABELS[tool.pricing]}
            </span>
            <span className="rounded bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
              Ranked #{rank} this week
            </span>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {tool.description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-indigo-700"
            >
              Try Now
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
              ₹{tool.amount.toLocaleString("en-IN")}
            </p>
            <p className="mt-1 text-sm text-gray-600">Weekly Bid</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              {PRICING_LABELS[tool.pricing]}
            </p>
            <p className="mt-1 text-sm text-gray-600">Pricing</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              {tool.category}
            </p>
            <p className="mt-1 text-sm text-gray-600">Category</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            About {tool.name}
          </h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              {tool.name} is a {tool.pricing} tool in the{" "}
              {tool.category.toLowerCase()} space, built to make work faster
              and simpler. It is used by freelancers, startups, and businesses
              across India.
            </p>
            <p>
              The tool ships with an intuitive interface, reliable performance,
              and regular updates. On ToolNest it holds the #{rank} position in
              the weekly tools leaderboard with a bid of ₹
              {tool.amount.toLocaleString("en-IN")}.
            </p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-gray-900 md:text-3xl">
            Key Features
          </h2>
          <ul className="mt-4 grid list-none gap-3 text-gray-600 sm:grid-cols-2">
            {[
              "Fast and easy to set up",
              "Reliable performance at scale",
              "Pricing that fits your budget",
              "Active development and updates",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs text-indigo-700">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900 md:text-3xl">
            Screenshots
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex h-40 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 text-sm text-gray-400"
              >
                Screenshot {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader title="Similar Tools" viewAllHref="/tools" />
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((t) => (
              <Link
                key={t.id}
                href={`/tool/${t.slug}`}
                className="rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-200 hover:border-indigo-300"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-indigo-50 text-xl">
                    {t.logo}
                  </span>
                  <span
                    className={cn(
                      "rounded px-2 py-0.5 text-xs font-medium",
                      PRICING_STYLES[t.pricing]
                    )}
                  >
                    {PRICING_LABELS[t.pricing]}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-gray-900">{t.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                  {t.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold md:text-4xl">
            Is this your tool?
          </h2>
          <p className="mt-3 text-indigo-100">
            Claim your listing and climb the leaderboard.
          </p>
          <Link
            href="/submit"
            className="mt-6 inline-flex items-center rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 transition-colors duration-200 hover:bg-gray-100"
          >
            Submit Your Tool
          </Link>
        </div>
      </section>
    </>
  );
}