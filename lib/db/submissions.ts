"use server";

import type { SubmissionPayload } from "@/types";
import { prisma } from "./prisma";

export async function createSubmission(
  data: SubmissionPayload
): Promise<{ id: string }> {
  const row = await prisma.submission.create({
    data: {
      type: data.type,
      name: data.name,
      slug: data.slug,
      category: data.category,
      description: data.description,
      website: data.website,
      email: data.email,
      contactName: data.contactName,
      plan: data.plan,
      pricing: data.pricing ?? null,
      amount: data.amount ?? null,
      status: "pending",
    },
  });
  return { id: row.id };
}

export async function getSubmissions(status?: string) {
  return prisma.submission.findMany({
    where: status ? { status } : undefined,
    orderBy: { createdAt: "desc" },
  });
}

export async function getSubmissionsByUser(userId: string) {
  return prisma.submission.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}

export async function getAllSubmissions(filters?: {
  status?: string;
  type?: string;
}) {
  return prisma.submission.findMany({
    where: {
      ...(filters?.status && filters.status !== "all"
        ? { status: filters.status }
        : {}),
      ...(filters?.type && filters.type !== "all"
        ? { type: filters.type }
        : {}),
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getSubmissionById(id: string) {
  return prisma.submission.findUnique({ where: { id } });
}

export async function approveSubmission(id: string) {
  const sub = await prisma.submission.findUnique({ where: { id } });
  if (!sub || sub.status !== "pending") {
    return { ok: false, message: "Submission not found or already reviewed" };
  }

  let createdListing: { type: string; slug: string } | null = null;

  const baseSlug = sub.slug;
  let slug = baseSlug;
  let counter = 2;

  if (sub.type === "business") {
    while (await prisma.business.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter++}`;
    }
    await prisma.business.create({
      data: {
        slug,
        name: sub.name,
        logo: "🏢",
        category: sub.category,
        description: sub.description,
        website: sub.website,
        amount: sub.amount ?? 0,
        published: true,
      },
    });
    createdListing = { type: "business", slug };
  } else {
    while (await prisma.tool.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter++}`;
    }
    await prisma.tool.create({
      data: {
        slug,
        name: sub.name,
        logo: "🛠️",
        category: sub.category,
        description: sub.description,
        website: sub.website,
        amount: sub.amount ?? 0,
        pricing: sub.pricing ?? "free",
        published: true,
      },
    });
    createdListing = { type: "tool", slug };
  }

  await prisma.submission.update({
    where: { id },
    data: { status: "approved" },
  });

  return { ok: true, createdListing };
}

export async function rejectSubmission(id: string, reason: string) {
  const sub = await prisma.submission.findUnique({ where: { id } });
  if (!sub || sub.status !== "pending") {
    return { ok: false, message: "Submission not found or already reviewed" };
  }

  await prisma.submission.update({
    where: { id },
    data: { status: "rejected", notes: reason || "No reason provided" },
  });

  return { ok: true };
}