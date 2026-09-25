import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/auth";
import { getUserById } from "@/lib/db/users";
import { getSubmissionsByUser } from "@/lib/db/submissions";
import { SignOutButton } from "@/components/auth/SignOutButton";

export const metadata: Metadata = {
  title: {
    absolute: "Dashboard — ToolNest",
  },
  description: "Manage your ToolNest listings.",
};

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const user = await getUserById(session.user.id);
  const submissions = await getSubmissionsByUser(session.user.id);
  const approved = submissions.filter((s) => s.status === "approved").length;
  const pending = submissions.filter((s) => s.status === "pending").length;
  const memberSince = new Date(
    user?.createdAt ?? Date.now()
  ).toLocaleDateString("en-IN", { year: "numeric", month: "short" });

  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Welcome, {session.user.name}
          </h1>
          <p className="mt-2 text-gray-600">
            Manage your listings and track your leaderboard performance.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-3xl font-bold text-indigo-600">
                {submissions.length}
              </p>
              <p className="mt-1 text-sm text-gray-600">Total Submissions</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-3xl font-bold text-green-600">{approved}</p>
              <p className="mt-1 text-sm text-gray-600">Approved</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-3xl font-bold text-amber-600">{pending}</p>
              <p className="mt-1 text-sm text-gray-600">Pending</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-gray-900">Your Submissions</h2>
          <div className="mt-4">
            {submissions.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center">
                <p className="text-gray-600">
                  You haven&apos;t submitted anything yet.
                </p>
                <Link
                  href="/submit"
                  className="mt-4 inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-indigo-700"
                >
                  Submit your first listing
                </Link>
              </div>
            ) : (
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left font-medium text-gray-700">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-gray-700">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-gray-700">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-gray-700">
                        Date
                      </th>
                      <th className="px-4 py-3 text-right font-medium text-gray-700">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((s) => (
                      <tr key={s.id} className="border-b last:border-0">
                        <td className="px-4 py-3 font-medium text-gray-900">
                          {s.name}
                        </td>
                        <td className="px-4 py-3 text-gray-600 capitalize">
                          {s.type}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                              s.status === "approved"
                                ? "bg-green-100 text-green-700"
                                : s.status === "rejected"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {s.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {s.createdAt.toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </td>
                        <td className="px-4 py-3 text-right">
                          {s.type === "business" ? (
                            <Link
                              href={`/business/${s.slug}`}
                              className="text-indigo-600 hover:text-indigo-700"
                            >
                              View
                            </Link>
                          ) : (
                            <Link
                              href={`/tool/${s.slug}`}
                              className="text-indigo-600 hover:text-indigo-700"
                            >
                              View
                            </Link>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-8 pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-gray-900">Account</h2>
          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  Email:{" "}
                  <span className="font-medium text-gray-900">
                    {session.user.email}
                  </span>
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Member since:{" "}
                  <span className="font-medium text-gray-900">
                    {memberSince}
                  </span>
                </p>
              </div>
              <SignOutButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}