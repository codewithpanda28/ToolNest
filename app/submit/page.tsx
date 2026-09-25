import type { Metadata } from "next";
import Link from "next/link";
import { SubmitForm } from "@/components/submit/SubmitForm";

export const metadata: Metadata = {
  title: {
    absolute: "Submit Your Business or Tool — ToolNest",
  },
  description:
    "List your business or tool on ToolNest. Free listing available. Featured slots starting ₹499/week.",
  alternates: { canonical: "/submit" },
};

export default function SubmitPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
            ➕ Submit
          </span>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            List Your Business or Tool
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Get discovered by thousands of users. Free listing available.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-2xl px-4">
          <SubmitForm />
          <p className="mt-6 text-center text-sm text-gray-500">
            Have a question?{" "}
            <Link
              href="/contact"
              className="font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-700"
            >
              Contact us →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}