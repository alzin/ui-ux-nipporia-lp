import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FILE_NAME = "要件整理シート.docx";
const FILE_PATH = path.join(process.cwd(), "public", "files", FILE_NAME);

export async function GET() {
  try {
    const buffer = await fs.readFile(FILE_PATH);
    const body = new Uint8Array(buffer);

    const encodedName = encodeURIComponent(FILE_NAME);

    return new NextResponse(body, {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="requirements-sheet.docx"; filename*=UTF-8''${encodedName}`,
        "Content-Length": String(body.byteLength),
        "Cache-Control": "private, no-store",
      },
    });
  } catch (err) {
    console.error("[requirements-sheet/download] Failed to read file", err);
    return NextResponse.json(
      { message: "File not available" },
      { status: 404 },
    );
  }
}
