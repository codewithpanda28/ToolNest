import type { BlogPost } from "@/types";
import { post as post1 } from "./top-10-invoice-tools-indian-freelancers";
import { post as post2 } from "./best-automation-tools-small-business-india";
import { post as post3 } from "./how-to-list-business-online-india";
import { post as post4 } from "./seo-tools-for-freelancers-2025";
import { post as post5 } from "./gst-guide-freelancers-india-2025";
import { post as post6 } from "./best-crm-tools-small-business-india-2025";
import { post as post7 } from "./how-to-start-freelancing-india-complete-guide";
import { post as post8 } from "./best-project-management-tools-teams-2025";
import { post as post9 } from "./whatsapp-business-automation-guide-india";
import { post as post10 } from "./payment-gateway-comparison-indian-businesses";
import { post as post11 } from "./how-to-choose-saas-startup";
import { post as post12 } from "./freelance-rate-calculator-guide-india";
import { post as post13 } from "./best-email-marketing-tools-2025";
import { post as post14 } from "./ai-tools-content-creators-india";
import { post as post15 } from "./digital-marketing-guide-small-business-india";

const posts: BlogPost[] = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10,
  post11,
  post12,
  post13,
  post14,
  post15,
];

export const allPosts: BlogPost[] = [...posts].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt)
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return posts.filter((p) => p.category === category);
}

export function getFeaturedPosts(): BlogPost[] {
  return posts.filter((p) => p.featured);
}

export function getRecentPosts(limit = 3): BlogPost[] {
  return allPosts.slice(0, limit);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return getRecentPosts(limit);
  const sameCategory = posts.filter(
    (p) => p.slug !== currentSlug && p.category === current.category
  );
  const others = posts.filter(
    (p) => p.slug !== currentSlug && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}