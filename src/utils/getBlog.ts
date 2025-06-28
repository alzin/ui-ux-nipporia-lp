import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const contentDirectory = path.join(process.cwd(), "src/content/blogs/");

export function getAllBlogSlugs() {
  const files = fs.readdirSync(contentDirectory);
  return files.map((file) => ({
    slug: file.replace(/\.md$/, "")
  }));
}

export function getBlogData(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    metadata: data,
    content
  };
}

/**
 * Clean up invalid align attributes from Hashnode images.
 * Example: ![](url align="center")
 */
function cleanImageAlign(content: string) {
  return content.replace(/\s+align="center"\)/g, ")");
}

export async function getBlogDataHtml(slug: string) {
  const { metadata, content: rawContent } = getBlogData(slug);

  const content = cleanImageAlign(rawContent);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkEmoji)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    metadata,
    contentHtml
  };
}

