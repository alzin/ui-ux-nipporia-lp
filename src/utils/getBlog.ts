import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "/src/content/blogs");

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

export async function getBlogDataHtml(slug: string) {
  const { metadata, content } = getBlogData(slug);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    metadata,
    contentHtml
  };
}
