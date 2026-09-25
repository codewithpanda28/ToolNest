"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import {
  approveSubmission,
  rejectSubmission,
} from "@/lib/db/submissions";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export function SubmissionActions({ id }: { id: string }) {
  const router = useRouter();
  const [rejectOpen, setRejectOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleApprove() {
    startTransition(async () => {
      const result = await approveSubmission(id);
      if (!result.ok) {
        setMessage(result.message ?? "Could not approve submission");
        return;
      }
      router.refresh();
    });
  }

  function handleReject() {
    startTransition(async () => {
      const result = await rejectSubmission(id, reason);
      if (!result.ok) {
        setMessage(result.message ?? "Could not reject submission");
        return;
      }
      setRejectOpen(false);
      router.refresh();
    });
  }

  return (
    <div>
      {message && (
        <div
          role="alert"
          className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {message}
        </div>
      )}
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleApprove}
          disabled={isPending}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-green-600 px-6 font-medium text-white transition-colors duration-200 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? (
            <Loader2 className="mr-2 size-4 animate-spin" />
          ) : (
            <CheckCircle2 className="mr-2 size-4" />
          )}
          Approve
        </button>
        <button
          type="button"
          onClick={() => setRejectOpen(true)}
          disabled={isPending}
          className="inline-flex h-11 items-center justify-center rounded-lg border-2 border-red-200 px-6 font-medium text-red-700 transition-colors duration-200 hover:border-red-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <XCircle className="mr-2 size-4" />
          Reject
        </button>
      </div>

      <Dialog open={rejectOpen} onOpenChange={setRejectOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Reject submission</DialogTitle>
          </DialogHeader>
          <Textarea
            rows={4}
            placeholder="Reason for rejection (sent to submitter)"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="mt-2"
          />
          <DialogFooter className="mt-4">
            <button
              type="button"
              onClick={() => setRejectOpen(false)}
              className="inline-flex h-10 items-center justify-center rounded-lg border border-gray-200 px-4 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleReject}
              disabled={isPending}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-red-600 px-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPending && <Loader2 className="mr-2 size-4 animate-spin" />}
              Reject
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}