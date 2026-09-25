import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
};

export function SectionHeader({
  title,
  subtitle,
  viewAllHref,
  viewAllLabel = "View all",
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1 text-gray-600">{subtitle}</p>
        ) : null}
      </div>
      {viewAllHref ? (
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-700"
        >
          {viewAllLabel}
          <ArrowRight className="size-4" />
        </Link>
      ) : null}
    </div>
  );
}