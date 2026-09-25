import type { MetadataRoute } from "next";
import { mockBusinesses, mockTools } from "@/lib/mock-data";
import { allPosts } from "@/content/blog";

const BASE_URL = "https://toolnest.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/businesses",
    "/tools",
    "/submit",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/refund",
    "/faq",
    "/disclaimer",
    "/blog",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const businessRoutes = mockBusinesses.map((b) => ({
    url: `${BASE_URL}/business/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const toolRoutes = mockTools.map((t) => ({
    url: `${BASE_URL}/tool/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const blogRoutes = allPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...businessRoutes,
    ...toolRoutes,
    ...blogRoutes,
  ];
}