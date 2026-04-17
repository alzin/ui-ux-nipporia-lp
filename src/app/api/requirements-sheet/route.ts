import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import * as XLSX from "xlsx";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface SubmissionPayload {
  email?: unknown;
}

interface SubmissionRow {
  timestamp: string;
  email: string;
  ip: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SHEET_NAME = "Submissions";
const HEADERS: (keyof SubmissionRow)[] = ["timestamp", "email", "ip"];

const DATA_DIR = path.join(process.cwd(), "data");
const XLSX_PATH = path.join(
  DATA_DIR,
  "requirements-sheet-submissions.xlsx",
);

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function appendSubmission(row: SubmissionRow) {
  await ensureDataDir();

  let workbook: XLSX.WorkBook;
  let rows: SubmissionRow[] = [];

  try {
    const buffer = await fs.readFile(XLSX_PATH);
    workbook = XLSX.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[SHEET_NAME];
    if (sheet) {
      rows = XLSX.utils.sheet_to_json<SubmissionRow>(sheet, { defval: "" });
    }
  } catch (err) {
    if (
      !(err instanceof Error) ||
      !("code" in err) ||
      (err as NodeJS.ErrnoException).code !== "ENOENT"
    ) {
      throw err;
    }
    workbook = XLSX.utils.book_new();
  }

  rows.push(row);

  const newSheet = XLSX.utils.json_to_sheet(rows, { header: HEADERS });
  newSheet["!cols"] = [{ wch: 22 }, { wch: 30 }, { wch: 16 }];

  if (workbook.Sheets[SHEET_NAME]) {
    workbook.Sheets[SHEET_NAME] = newSheet;
  } else {
    XLSX.utils.book_append_sheet(workbook, newSheet, SHEET_NAME);
  }

  const out = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
  await fs.writeFile(XLSX_PATH, out);
}

function extractIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "";
  return req.headers.get("x-real-ip") ?? "";
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

  const row: SubmissionRow = {
    timestamp: new Date().toISOString(),
    email,
    ip: extractIp(req),
  };

  try {
    await appendSubmission(row);
  } catch (err) {
    console.error("[requirements-sheet] Failed to append submission", err);
    return NextResponse.json(
      { message: "Failed to save submission. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
