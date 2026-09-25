import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

type SuccessStateProps = {
  submissionId: string;
  onSubmitAnother: () => void;
};

export function SuccessState({
  submissionId,
  onSubmitAnother,
}: SuccessStateProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm md:p-12">
      <CheckCircle2 className="mx-auto size-16 text-green-600" />
      <h2 className="mt-6 text-2xl font-bold text-gray-900 md:text-3xl">
        Submission Received!
      </h2>
      <p className="mx-auto mt-3 max-w-md text-gray-600">
        We&apos;ll review your submission and get back to you within 24 hours.
      </p>
      <p className="mt-4 font-mono text-sm text-gray-400">
        Reference: {submissionId}
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onSubmitAnother}
          className="inline-flex h-11 min-w-[140px] items-center justify-center rounded-lg border-2 border-gray-300 px-6 font-medium text-gray-700 transition-colors duration-200 hover:border-indigo-600 hover:text-indigo-600"
        >
          Submit Another
        </button>
        <Link
          href="/"
          className="inline-flex h-11 min-w-[140px] items-center justify-center rounded-lg bg-indigo-600 px-6 font-medium text-white transition-colors duration-200 hover:bg-indigo-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}