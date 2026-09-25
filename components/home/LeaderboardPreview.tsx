import Link from "next/link";
import { LeaderboardTable } from "@/components/shared/LeaderboardTable";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  getTopBusinesses,
  getTopTools,
  toBusinessLeaderboard,
  toToolLeaderboard,
} from "@/lib/mock-data";

export function LeaderboardPreview() {
  const topBusinesses = toBusinessLeaderboard(getTopBusinesses(5));
  const topTools = toToolLeaderboard(getTopTools(5));

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