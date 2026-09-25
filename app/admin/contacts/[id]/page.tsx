import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContactMessageById } from "@/lib/db/contact";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Detail — Admin — ToolNest",
  },
};

export default async function AdminContactDetailPage({
  params,
}: PageProps<"/admin/contacts/[id]">) {
  const { id } = await params;
  const message = await getContactMessageById(id);
  if (!message) notFound();

  return (
    <div>
      <Link
        href="/admin/contacts"
        className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
      >
        ← Back to contacts
      </Link>

      <h1 className="mt-4 text-2xl font-bold text-gray-900">{message.subject}</h1>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex flex-wrap gap-6 border-b border-gray-100 pb-4">
          <p className="text-sm text-gray-600">
            From: <span className="font-medium text-gray-900">{message.name}</span>
          </p>
          <p className="text-sm text-gray-600">
            Email:{" "}
            <a
              href={`mailto:${message.email}`}
              className="font-medium text-indigo-600 hover:text-indigo-700"
            >
              {message.email}
            </a>
          </p>
          <p className="text-sm text-gray-600">
            Date:{" "}
            <span className="font-medium text-gray-900">
              {message.createdAt.toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </p>
        </div>
        <p className="mt-4 whitespace-pre-wrap leading-relaxed text-gray-700">
          {message.message}
        </p>
      </div>
    </div>
  );
}