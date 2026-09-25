import type { Tool } from "@/types";
import { prisma } from "./prisma";

function toTool(row: {
  id: string;
  slug: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  website: string;
  amount: number;
  pricing: string;
}): Tool {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    logo: row.logo,
    category: row.category,
    description: row.description,
    website: row.website,
    amount: row.amount,
    pricing: row.pricing as Tool["pricing"],
  };
}

export async function getTools(): Promise<Tool[]> {
  const rows = await prisma.tool.findMany({
    where: { published: true },
    orderBy: { amount: "desc" },
  });
  return rows.map(toTool);
}

export async function getToolBySlug(slug: string): Promise<Tool | null> {
  const row = await prisma.tool.findUnique({
    where: { slug },
  });
  return row ? toTool(row) : null;
}

export async function getTopTools(limit = 5): Promise<Tool[]> {
  const rows = await prisma.tool.findMany({
    where: { published: true },
    orderBy: { amount: "desc" },
    take: limit,
  });
  return rows.map(toTool);
}

export async function getToolRank(tool: Tool): Promise<number> {
  const higher = await prisma.tool.count({
    where: {
      published: true,
      amount: { gt: tool.amount },
    },
  });
  return higher + 1;
}

export async function getToolsByCategory(
  category: string
): Promise<Tool[]> {
  const rows = await prisma.tool.findMany({
    where: { published: true, category },
    orderBy: { amount: "desc" },
  });
  return rows.map(toTool);
}