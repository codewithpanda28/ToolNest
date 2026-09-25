import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";

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

  await new Promise((resolve) => setTimeout(resolve, 300));

  console.log("[api/contact] received:", {
    name: parsed.data.name,
    email: parsed.data.email,
    subject: parsed.data.subject,
  });

  return NextResponse.json(
    { success: true, message: "Message sent" },
    { status: 200 }
  );
}