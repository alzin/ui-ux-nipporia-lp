import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return new NextResponse("Missing url parameter", { status: 400 });
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
      },
    });

    const contentType = response.headers.get("content-type") || "text/html";
    const body = await response.arrayBuffer();

    const headers = new Headers();
    headers.set("content-type", contentType);
    // Allow embedding in iframe from same origin
    headers.set("X-Frame-Options", "SAMEORIGIN");
    // Strip CSP frame-ancestors restrictions
    headers.delete("content-security-policy");

    return new NextResponse(body, {
      status: response.status,
      headers,
    });
  } catch {
    return new NextResponse("Failed to fetch URL", { status: 502 });
  }
}
