import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { createContactMessage } from "@/lib/db/contact";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    console.warn("[api/contact] validation failed:", parsed.error.flatten());
    return NextResponse.json(
      { success: false, message: "Validation failed" },
      { status: 400 }
    );
  }

  try {
    await createContactMessage(parsed.data);
    return NextResponse.json(
      { success: true, message: "Message sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[api/contact] db error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}