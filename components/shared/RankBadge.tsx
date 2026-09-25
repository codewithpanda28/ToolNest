import { cn } from "@/lib/utils";

type RankBadgeProps = {
  rank: number;
};

const TOP_THREE_STYLES = [
  "bg-yellow-100 text-yellow-800 border-yellow-300",
  "bg-gray-100 text-gray-800 border-gray-300",
  "bg-orange-100 text-orange-800 border-orange-300",
];

export function RankBadge({ rank }: RankBadgeProps) {
  const style =
    rank <= 3
      ? TOP_THREE_STYLES[rank - 1]
      : "bg-gray-50 text-gray-700 border-gray-200";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        style
      )}
    >
      #{rank}
    </span>
  );
}