import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: {
    absolute: "About Us — ToolNest",
  },
  description:
    "Learn about ToolNest, India's directory for top businesses and tools. Our mission, how it works, and how to get listed.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <LegalLayout
      title="About ToolNest"
      badge="About Us"
      subtitle="India's directory for the best businesses and tools"
    >
      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Our Mission
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          ToolNest was built with a simple but ambitious goal: to make it easy
          for freelancers, startups, and growing businesses in India to
          discover the tools and partners they need to succeed. The internet is
          full of options, but finding the right business or tool is hard.
          Reviews are scattered, rankings are unclear, and most directories
          feel outdated or biased.
        </p>
        <p className="mb-3 leading-relaxed text-gray-700">
          We created ToolNest as a single, transparent place where businesses
          and tools are ranked by the community every single week. Instead of
          static lists that never change, ToolNest rewards quality, momentum,
          and visibility — so the best options naturally rise to the top.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          What We Do
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          ToolNest is a curated directory covering two broad categories:
          businesses and digital tools. Every listing is vetted, categorized,
          and made searchable, so you can compare options side by side.
        </p>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
          <li>
            <strong className="font-semibold text-gray-900">
              Curated directory
            </strong>{" "}
            — hand-reviewed listings across SaaS, design, hosting, fintech, and
            more.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">
              Weekly leaderboards
            </strong>{" "}
            — rankings that reset every Monday, giving new listings a fair
            chance to shine.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">
              Featured placements
            </strong>{" "}
            — affordable options for businesses that want more visibility.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">
              Community discovery
            </strong>{" "}
            — real users, real usage, and real rankings.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Why ToolNest?
        </h2>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
          <li>
            <strong className="font-semibold text-gray-900">Free to use</strong>{" "}
            — browsing the directory and viewing rankings costs nothing.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">
              Community driven
            </strong>{" "}
            — rankings reflect weekly activity and bids, not hidden deals.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">
              Weekly rankings
            </strong>{" "}
            — fresh leaderboards every Monday keep the directory relevant.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">
              Made in India
            </strong>{" "}
            — built for Indian users, with Indian pricing and support.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          How It Works
        </h2>
        <ol className="mb-3 list-decimal space-y-2 pl-6 text-gray-700">
          <li>
            <strong className="font-semibold text-gray-900">Browse</strong> —
            explore businesses and tools by category.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">Compare</strong> —
            check weekly rankings, descriptions, and pricing.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">List</strong> —
            submit your own business or tool in a few minutes.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">Rank</strong> —
            grow your position on the leaderboard week after week.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Our Story
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          ToolNest was founded in 2025 out of frustration. Every time we needed
          a tool or a service partner, we ended up relying on word of mouth or
          stale lists. There was no single, trustworthy, up-to-date place to
          compare options — especially one built with Indian users in mind.
        </p>
        <p className="mb-3 leading-relaxed text-gray-700">
          So we built one. ToolNest combines the best of a directory and a
          leaderboard: businesses and tools get discovered on merit, while
          users get rankings they can actually trust. We&apos;re just getting
          started, and we&apos;d love for you to be part of the journey.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Contact
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          We&apos;d love to hear from you. For support, feedback, or business
          inquiries, reach us at{" "}
          <a
            href="mailto:support@toolnest.in"
            className="text-indigo-600 hover:underline"
          >
            support@toolnest.in
          </a>{" "}
          or visit our{" "}
          <Link
            href="/contact"
            className="text-indigo-600 hover:underline"
          >
            contact page
          </Link>
          .
        </p>
      </section>
    </LegalLayout>
  );
}