import type { Business } from "@/types";
import { prisma } from "./prisma";

function toBusiness(row: {
  id: string;
  slug: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  website: string;
  amount: number;
}): Business {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    logo: row.logo,
    category: row.category,
    description: row.description,
    website: row.website,
    amount: row.amount,
  };
}

export async function getBusinesses(): Promise<Business[]> {
  const rows = await prisma.business.findMany({
    where: { published: true },
    orderBy: { amount: "desc" },
  });
  return rows.map(toBusiness);
}

export async function getBusinessBySlug(
  slug: string
): Promise<Business | null> {
  const row = await prisma.business.findUnique({
    where: { slug },
  });
  return row ? toBusiness(row) : null;
}

export async function getTopBusinesses(limit = 5): Promise<Business[]> {
  const rows = await prisma.business.findMany({
    where: { published: true },
    orderBy: { amount: "desc" },
    take: limit,
  });
  return rows.map(toBusiness);
}

export async function getBusinessRank(business: Business): Promise<number> {
  const higher = await prisma.business.count({
    where: {
      published: true,
      amount: { gt: business.amount },
    },
  });
  return higher + 1;
}

export async function getBusinessesByCategory(
  category: string
): Promise<Business[]> {
  const rows = await prisma.business.findMany({
    where: { published: true, category },
    orderBy: { amount: "desc" },
  });
  return rows.map(toBusiness);
}