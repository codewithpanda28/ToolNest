import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db/prisma";
import { StatusBadge } from "@/components/admin/StatusBadge";

export const metadata: Metadata = {
  title: {
    absolute: "Admin Dashboard — ToolNest",
  },
};

export default async function AdminDashboardPage() {
  const [totalSubmissions, pendingSubmissions, totalContacts, totalUsers] =
    await Promise.all([
      prisma.submission.count(),
      prisma.submission.count({ where: { status: "pending" } }),
      prisma.contactMessage.count(),
      prisma.user.count(),
    ]);

  const [recentSubmissions, recentContacts] = await Promise.all([
    prisma.submission.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
    prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ]);

  const stats = [
    { label: "Total Submissions", value: totalSubmissions, color: "text-indigo-600" },
    { label: "Pending", value: pendingSubmissions, color: "text-amber-600" },
    { label: "Contact Messages", value: totalContacts, color: "text-blue-600" },
    { label: "Total Users", value: totalUsers, color: "text-green-600" },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-gray-200 bg-white p-6 text-center"
          >
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="mt-1 text-sm text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>

      {pendingSubmissions > 0 && (
        <Link
          href="/admin/submissions?status=pending"
          className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-700"
        >
          Review {pendingSubmissions} pending submission
          {pendingSubmissions > 1 ? "s" : ""} →
        </Link>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900">
            Recent Submissions
          </h2>
          {recentSubmissions.length === 0 ? (
            <p className="mt-3 text-sm text-gray-500">No submissions yet.</p>
          ) : (
            <ul className="mt-3 space-y-3">
              {recentSubmissions.map((s) => (
                <li key={s.id} className="flex items-center justify-between gap-3">
                  <Link
                    href={`/admin/submissions/${s.id}`}
                    className="min-w-0 truncate text-sm font-medium text-gray-900 hover:text-indigo-600"
                  >
                    {s.name}
                  </Link>
                  <StatusBadge status={s.status} />
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900">Recent Messages</h2>
          {recentContacts.length === 0 ? (
            <p className="mt-3 text-sm text-gray-500">No messages yet.</p>
          ) : (
            <ul className="mt-3 space-y-3">
              {recentContacts.map((c) => (
                <li key={c.id} className="flex items-center justify-between gap-3">
                  <Link
                    href={`/admin/contacts/${c.id}`}
                    className="min-w-0 truncate text-sm font-medium text-gray-900 hover:text-indigo-600"
                  >
                    {c.subject}
                  </Link>
                  <span className="text-xs text-gray-500">
                    {c.createdAt.toLocaleDateString("en-IN")}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}