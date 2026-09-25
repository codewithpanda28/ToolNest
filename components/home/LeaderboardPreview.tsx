import Link from "next/link";
import type { Business, Tool } from "@/types";
import { LeaderboardTable } from "@/components/shared/LeaderboardTable";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  toBusinessLeaderboard,
  toToolLeaderboard,
} from "@/lib/db/leaderboard";

type LeaderboardPreviewProps = {
  businesses: Business[];
  tools: Tool[];
};

export function LeaderboardPreview({
  businesses,
  tools,
}: LeaderboardPreviewProps) {
  const topBusinesses = toBusinessLeaderboard(businesses);
  const topTools = toToolLeaderboard(tools);

  return (
    <div className="space-y-16">
      <section>
        <SectionHeader
          title="🏆 Top Businesses This Week"
          subtitle="Ranked by weekly leaderboard position"
          viewAllHref="/businesses"
        />
        <div className="mt-6">
          <LeaderboardTable items={topBusinesses} type="business" compact />
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Rankings reset every Monday.{" "}
          <Link
            href="/pricing"
            className="font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-700"
          >
            Bid to rank up →
          </Link>
        </p>
      </section>

      <section>
        <SectionHeader
          title="🛠️ Top Tools This Week"
          subtitle="Ranked by weekly leaderboard position"
          viewAllHref="/tools"
        />
        <div className="mt-6">
          <LeaderboardTable items={topTools} type="tool" compact />
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Rankings reset every Monday.{" "}
          <Link
            href="/pricing"
            className="font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-700"
          >
            Bid to rank up →
          </Link>
        </p>
      </section>
    </div>
  );
}