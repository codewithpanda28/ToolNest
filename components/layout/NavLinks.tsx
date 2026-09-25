"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

export function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label="Main navigation">
      {NAV_LINKS.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors duration-200",
              isActive
                ? "text-indigo-600"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}