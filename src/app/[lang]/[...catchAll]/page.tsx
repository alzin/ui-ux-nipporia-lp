import { notFound } from "next/navigation";

// This catches any unknown route inside a valid language segment (e.g., /en/bad-url)
// It forces Next.js to use src/app/[lang]/not-found.tsx inside your [lang] layout!
export default function CatchAllNotFound() {
  notFound();
}