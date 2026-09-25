import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSubmissionById } from "@/lib/db/submissions";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { SubmissionActions } from "@/components/admin/SubmissionActions";

export const metadata: Metadata = {
  title: {
    absolute: "Submission Detail — Admin — ToolNest",
  },
};

export default async function AdminSubmissionDetailPage({
  params,
}: PageProps<"/admin/submissions/[id]">) {
  const { id } = await params;
  const submission = await getSubmissionById(id);
  if (!submission) notFound();

  return (
    <div>
      <Link
        href="/admin/submissions"
        className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
      >
        ← Back to submissions
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-bold text-gray-900">{submission.name}</h1>
        <StatusBadge status={submission.status} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">Details</h2>
            <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-gray-500">Type</dt>
                <dd className="mt-1 font-medium text-gray-900 capitalize">
                  {submission.type}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Category</dt>
                <dd className="mt-1 font-medium text-gray-900">
                  {submission.category}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Plan</dt>
                <dd className="mt-1 font-medium text-gray-900 capitalize">
                  {submission.plan}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Amount</dt>
                <dd className="mt-1 font-medium text-gray-900">
                  {submission.amount != null
                    ? `₹${submission.amount.toLocaleString("en-IN")}`
                    : "—"}
                </dd>
              </div>
              {submission.pricing ? (
                <div>
                  <dt className="text-sm text-gray-500">Pricing</dt>
                  <dd className="mt-1 font-medium text-gray-900 capitalize">
                    {submission.pricing}
                  </dd>
                </div>
              ) : null}
              <div>
                <dt className="text-sm text-gray-500">Submitted</dt>
                <dd className="mt-1 font-medium text-gray-900">
                  {submission.createdAt.toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </dd>
              </div>
            </dl>
            <div className="mt-5">
              <dt className="text-sm text-gray-500">Description</dt>
              <dd className="mt-1 leading-relaxed text-gray-700">
                {submission.description}
              </dd>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">Contact</h2>
            <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-gray-500">Contact Name</dt>
                <dd className="mt-1 font-medium text-gray-900">
                  {submission.contactName}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Email</dt>
                <dd className="mt-1 font-medium text-gray-900">
                  {submission.email}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Website</dt>
                <dd className="mt-1">
                  <a
                    href={submission.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    {submission.website}
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          {submission.notes && (
            <section className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="text-lg font-bold text-gray-900">Notes</h2>
              <p className="mt-2 text-gray-700">{submission.notes}</p>
            </section>
          )}
        </div>

        <div className="space-y-6">
          <section className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">Actions</h2>
            <div className="mt-4">
              {submission.status === "pending" ? (
                <SubmissionActions id={submission.id} />
              ) : (
                <p className="text-sm text-gray-600">
                  This submission has already been{" "}
                  <span className="font-medium text-gray-900 capitalize">
                    {submission.status}
                  </span>
                  .
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}