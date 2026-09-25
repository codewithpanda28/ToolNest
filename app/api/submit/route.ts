import { NextResponse } from "next/server";
import { submissionSchema } from "@/lib/validations/submission";
import { createSubmission } from "@/lib/db/submissions";
import type { SubmissionResponse } from "@/types";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json<SubmissionResponse>(
      { success: false, message: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = submissionSchema.safeParse(body);
  if (!parsed.success) {
    const details = parsed.error.flatten().fieldErrors;
    console.warn("[api/submit] validation failed:", details);
    return NextResponse.json(
      { success: false, message: "Validation failed", details },
      { status: 400 }
    );
  }

  try {
    const submission = await createSubmission(parsed.data);
    return NextResponse.json<SubmissionResponse>(
      {
        success: true,
        message: "Submission received",
        id: submission.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[api/submit] db error:", error);
    return NextResponse.json<SubmissionResponse>(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}