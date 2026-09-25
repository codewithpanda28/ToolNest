import Link from "next/link";
import type { BlogPost } from "@/types";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-[2px] hover:border-indigo-300 hover:shadow-md",
        featured ? "p-6" : "p-5"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "flex items-center justify-center rounded-lg bg-indigo-50",
            featured ? "size-14 text-3xl" : "size-10 text-2xl"
          )}
        >
          {post.coverEmoji}
        </span>
        <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
          {post.category}
        </span>
      </div>
      <h3
        className={cn(
          "mt-4 font-bold text-gray-900 transition-colors duration-200 group-hover:text-indigo-600",
          featured ? "text-xl line-clamp-2" : "text-base line-clamp-2"
        )}
      >
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-gray-600">
        {post.excerpt}
      </p>
      <p className="mt-4 text-xs text-gray-500">
        {formatDate(post.publishedAt)} • {post.readingTime} min read
      </p>
    </Link>
  );
}