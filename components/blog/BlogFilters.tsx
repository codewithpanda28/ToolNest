"use client";

import { useState } from "react";
import type { BlogCategory, BlogPost } from "@/types";
import { cn } from "@/lib/utils";
import { BlogCard } from "./BlogCard";

const CATEGORIES: (BlogCategory | "All")[] = [
  "All",
  "Freelancing",
  "Business",
  "Tools",
  "Automation",
  "Finance",
];

export function BlogFilters({ posts }: { posts: BlogPost[] }) {
  const [category, setCategory] = useState<BlogCategory | "All">("All");

  const filtered =
    category === "All" ? posts : posts.filter((p) => p.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
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
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}