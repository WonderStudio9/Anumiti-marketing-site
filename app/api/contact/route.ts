import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  inquiryType: string;
  message: string;
}

const VALID_INQUIRY_TYPES = ["sales", "partnership", "support", "press", "other"];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // --- Validation ---
    const errors: string[] = [];

    if (!body.name || typeof body.name !== "string" || !body.name.trim()) {
      errors.push("Name is required.");
    }

    if (!body.email || typeof body.email !== "string" || !body.email.trim()) {
      errors.push("Email is required.");
    } else if (!isValidEmail(body.email)) {
      errors.push("A valid email address is required.");
    }

    if (
      !body.inquiryType ||
      typeof body.inquiryType !== "string" ||
      !VALID_INQUIRY_TYPES.includes(body.inquiryType)
    ) {
      errors.push("A valid inquiry type is required.");
    }

    if (!body.message || typeof body.message !== "string" || body.message.trim().length < 10) {
      errors.push("Message must be at least 10 characters.");
    }

    if (errors.length > 0) {
      return NextResponse.json({ success: false, error: errors.join(" ") }, { status: 400 });
    }

    // --- Placeholder: will integrate with Resend / email service later ---
    // For now, log the submission and return success.
    console.log("[Contact Form Submission]", {
      name: body.name.trim(),
      email: body.email.trim(),
      company: body.company?.trim() ?? "",
      phone: body.phone?.trim() ?? "",
      inquiryType: body.inquiryType,
      message: body.message.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. We will get back to you within 1 business day.",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 },
    );
  }
}
