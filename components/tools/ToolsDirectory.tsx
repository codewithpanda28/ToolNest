"use client";

import { useState } from "react";
import Link from "next/link";
import type { Tool } from "@/types";
import { cn } from "@/lib/utils";

const PRICING_STYLES: Record<Tool["pricing"], string> = {
  free: "bg-green-100 text-green-700",
  freemium: "bg-blue-100 text-blue-700",
  paid: "bg-orange-100 text-orange-700",
};

const PRICING_LABELS: Record<Tool["pricing"], string> = {
  free: "Free",
  freemium: "Freemium",
  paid: "Paid",
};

export function ToolsDirectory({ tools }: { tools: Tool[] }) {
  const categories = [
    "All",
    ...Array.from(new Set(tools.map((t) => t.category))),
  ];
  const pricingOptions = ["All", "free", "freemium", "paid"] as const;
  const [category, setCategory] = useState("All");
  const [pricing, setPricing] = useState<"All" | Tool["pricing"]>("All");

  const filtered = tools.filter((t) => {
    const inCategory = category === "All" || t.category === category;
    const inPricing = pricing === "All" || t.pricing === pricing;
    return inCategory && inPricing;
  });

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold text-gray-900">All Tools</h2>
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

      <div className="mt-4 flex flex-wrap gap-2">
        {pricingOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setPricing(option)}
            className={cn(
              "rounded-full border px-4 py-1 text-xs font-medium transition-colors duration-200",
              pricing === option
                ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                : "border-gray-200 bg-white text-gray-600 hover:border-indigo-300 hover:text-indigo-600"
            )}
          >
            {option === "All" ? "All Pricing" : PRICING_LABELS[option]}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tool) => (
          <Link
            key={tool.id}
            href={`/tool/${tool.slug}`}
            className="rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-200 hover:border-indigo-300"
          >
            <div className="flex items-start justify-between">
              <span className="flex size-12 items-center justify-center rounded-lg bg-indigo-50 text-2xl">
                {tool.logo}
              </span>
              <div className="flex flex-col items-end gap-1">
                <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
                  {tool.category}
                </span>
                <span
                  className={cn(
                    "rounded px-2 py-0.5 text-xs font-medium",
                    PRICING_STYLES[tool.pricing]
                  )}
                >
                  {PRICING_LABELS[tool.pricing]}
                </span>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {tool.name}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-gray-600">
              {tool.description}
            </p>
            <div className="mt-4 text-sm font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-700">
              Try Now →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}