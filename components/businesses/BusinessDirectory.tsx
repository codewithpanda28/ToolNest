"use client";

import { useState } from "react";
import Link from "next/link";
import type { Business } from "@/types";
import { cn } from "@/lib/utils";

export function BusinessDirectory({ businesses }: { businesses: Business[] }) {
  const categories = [
    "All",
    ...Array.from(new Set(businesses.map((b) => b.category))),
  ];
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? businesses
      : businesses.filter((b) => b.category === category);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold text-gray-900">All Businesses</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200",
                category === cat
                  ? "border-indigo-600 bg-indigo-600 text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:text-indigo-600"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((business) => (
          <Link
            key={business.id}
            href={`/business/${business.slug}`}
            className="rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-200 hover:border-indigo-300"
          >
            <div className="flex items-start justify-between">
              <span className="flex size-12 items-center justify-center rounded-lg bg-indigo-50 text-2xl">
                {business.logo}
              </span>
              <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
                {business.category}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {business.name}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-gray-600">
              {business.description}
            </p>
            <div className="mt-4 text-sm font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-700">
              View Profile →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}