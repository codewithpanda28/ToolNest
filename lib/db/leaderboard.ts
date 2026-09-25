import type { Business, LeaderboardItem, Tool } from "@/types";

export function toBusinessLeaderboard(
  businesses: Business[]
): LeaderboardItem[] {
  return businesses.map((business, index) => ({
    rank: index + 1,
    id: business.id,
    name: business.name,
    slug: business.slug,
    logo: business.logo,
    category: business.category,
    amount: business.amount,
    type: "business",
    website: business.website,
  }));
}

export function toToolLeaderboard(tools: Tool[]): LeaderboardItem[] {
  return tools.map((tool, index) => ({
    rank: index + 1,
    id: tool.id,
    name: tool.name,
    slug: tool.slug,
    logo: tool.logo,
    category: tool.category,
    amount: tool.amount,
    type: "tool",
    website: tool.website,
  }));
}