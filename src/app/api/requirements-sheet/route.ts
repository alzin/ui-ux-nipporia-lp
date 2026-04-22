import { NextResponse } from "next/server";
import { appendToGoogleSheet } from "./googleSheetsService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface SubmissionPayload {
  email?: unknown;
  country?: unknown;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function detectCountry(req: Request): Promise<string> {
  // Try platform headers first (Vercel / Cloudflare)
  const fromHeader =
    req.headers.get("x-vercel-ip-country") ??
    req.headers.get("cf-ipcountry");
  if (fromHeader) return fromHeader;

  return "";
}

export async function POST(req: Request) {
  let body: SubmissionPayload;
  try {
    body = (await req.json()) as SubmissionPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 },
    );
  }

  const country = typeof body.country === "string"
    ? body.country
    : await detectCountry(req);

  console.log("[requirements-sheet] body.country:", body.country, "| resolved:", country);

  const row = {
    timestamp: new Date().toISOString(),
    email,
    country,
  };

  try {
    await appendToGoogleSheet(row);
  } catch (err) {
    console.error("[requirements-sheet] Failed to append to Google Sheets", err);
    return NextResponse.json(
      { message: "Failed to save submission. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
