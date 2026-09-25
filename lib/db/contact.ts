import { prisma } from "./prisma";

export async function createContactMessage(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ id: string }> {
  const row = await prisma.contactMessage.create({
    data,
  });
  return { id: row.id };
}

export async function getAllContactMessages() {
  return prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getContactMessageById(id: string) {
  return prisma.contactMessage.findUnique({ where: { id } });
}