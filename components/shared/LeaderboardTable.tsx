import Link from "next/link";
import type { LeaderboardItem } from "@/types";
import { cn } from "@/lib/utils";
import { RankBadge } from "./RankBadge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type LeaderboardTableProps = {
  items: LeaderboardItem[];
  type: "business" | "tool";
  compact?: boolean;
  linkToDetail?: boolean;
};

function formatAmount(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function LeaderboardTable({
  items,
  type,
  compact = false,
  linkToDetail = false,
}: LeaderboardTableProps) {
  const actionLabel = type === "business" ? "Visit" : "Try Now";
  const detailHref = (item: LeaderboardItem) =>
    linkToDetail
      ? type === "business"
        ? `/business/${item.slug}`
        : `/tool/${item.slug}`
      : null;

  const renderName = (item: LeaderboardItem) => {
    const href = detailHref(item);
    const content = (
      <>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-2xl">
          {item.logo}
        </span>
        <span className="font-semibold text-gray-900">{item.name}</span>
      </>
    );
    if (href) {
      return (
        <Link href={href} className="flex items-center gap-3">
          {content}
        </Link>
      );
    }
    return <div className="flex items-center gap-3">{content}</div>;
  };

  return (
    <>
      <div className="hidden overflow-hidden rounded-lg border border-gray-200 md:block">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="px-4">Rank</TableHead>
              <TableHead className="px-4">Name</TableHead>
              <TableHead className="px-4">Category</TableHead>
              <TableHead className="px-4">Amount</TableHead>
              <TableHead className="px-4 text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-50">
                <TableCell
                  className={cn("px-4", compact ? "py-2" : "py-4")}
                >
                  <RankBadge rank={item.rank} />
                </TableCell>
                <TableCell
                  className={cn("px-4", compact ? "py-2" : "py-4")}
                >
                  {renderName(item)}
                </TableCell>
                <TableCell
                  className={cn("px-4 text-gray-600", compact ? "py-2" : "py-4")}
                >
                  {item.category}
                </TableCell>
                <TableCell
                  className={cn(
                    "px-4 font-semibold text-gray-900",
                    compact ? "py-2" : "py-4"
                  )}
                >
                  {formatAmount(item.amount)}
                </TableCell>
                <TableCell
                  className={cn("px-4 text-right", compact ? "py-2" : "py-4")}
                >
                  <Link
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-700"
                  >
                    {actionLabel}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="space-y-3 md:hidden">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-gray-200 p-4 transition hover:shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <Link
                href={detailHref(item) ?? "#"}
                className={cn(
                  "flex items-center gap-3",
                  !detailHref(item) && "pointer-events-none"
                )}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-2xl">
                  {item.logo}
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
              </Link>
              <RankBadge rank={item.rank} />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-semibold text-gray-900">
                {formatAmount(item.amount)}
              </span>
              <Link
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-700"
              >
                {actionLabel}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}