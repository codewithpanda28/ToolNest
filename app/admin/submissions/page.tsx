import type { Metadata } from "next";
import Link from "next/link";
import { getAllSubmissions } from "@/lib/db/submissions";
import { StatusBadge } from "@/components/admin/StatusBadge";

export const metadata: Metadata = {
  title: {
    absolute: "Submissions — Admin — ToolNest",
  },
};

const STATUS_FILTERS = ["all", "pending", "approved", "rejected"];
const TYPE_FILTERS = ["all", "business", "tool"];

export default async function AdminSubmissionsPage({
  searchParams,
}: PageProps<"/admin/submissions">) {
  const params = await searchParams;
  const status =
    typeof params.status === "string" ? params.status : "all";
  const type = typeof params.type === "string" ? params.type : "all";

  const submissions = await getAllSubmissions({ status, type });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Submissions</h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {STATUS_FILTERS.map((s) => (
          <FilterLink
            key={s}
            label={s === "all" ? "All" : s}
            value={s}
            current={status}
            param="status"
            otherParam="type"
            otherValue={type}
          />
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {TYPE_FILTERS.map((t) => (
          <FilterLink
            key={t}
            label={t === "all" ? "All types" : t}
            value={t}
            current={type}
            param="type"
            otherParam="status"
            otherValue={status}
          />
        ))}
      </div>

      <div className="mt-6">
        {submissions.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-600">
            No submissions match these filters.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="border-b">
                  <th className="px-4 py-3 text-left font-medium text-gray-700">Name</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">Type</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">Email</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">Plan</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">Amount</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">Status</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">Date</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s) => (
                  <tr key={s.id} className="border-b last:border-0">
                    <td className="px-4 py-3">
                      <p className="font-medium text-gray-900">{s.name}</p>
                      <p className="text-xs text-gray-500">{s.slug}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-600 capitalize">{s.type}</td>
                    <td className="px-4 py-3 text-gray-600">{s.email}</td>
                    <td className="px-4 py-3 text-gray-600 capitalize">{s.plan}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {s.amount != null ? `₹${s.amount.toLocaleString("en-IN")}` : "—"}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={s.status} />
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {s.createdAt.toLocaleDateString("en-IN")}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={`/admin/submissions/${s.id}`}
                        className="font-medium text-indigo-600 hover:text-indigo-700"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterLink({
  label,
  value,
  current,
  param,
  otherParam,
  otherValue,
}: {
  label: string;
  value: string;
  current: string;
  param: string;
  otherParam: string;
  otherValue: string;
}) {
  const qs = new URLSearchParams({
    [param]: value,
    [otherParam]: otherValue,
  });
  const active = current === value;
  return (
    <Link
      href={`/admin/submissions?${qs.toString()}`}
      className={
        active
          ? "rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white"
          : "rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-indigo-300 hover:text-indigo-600"
      }
    >
      {label}
    </Link>
  );
}