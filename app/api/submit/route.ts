import { NextResponse } from "next/server";
import { submissionSchema } from "@/lib/validations/submission";
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

  await new Promise((resolve) => setTimeout(resolve, 300));

  const id = crypto.randomUUID();
  console.log("[api/submit] received:", { id, type: parsed.data.type, name: parsed.data.name });

  return NextResponse.json<SubmissionResponse>(
    { success: true, message: "Submission received", id },
    { status: 200 }
  );
}