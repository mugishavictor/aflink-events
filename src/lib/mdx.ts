import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type MdxFrontmatter = {
  title: string;
  description: string;
  date?: string; // ISO
  category?: string;
  tags?: string[];
  cover?: string; // optional path for image later
  client?: string; // for work
  location?: string; // for work
  eventType?: string; // for work
  featured?: boolean;
};

export type MdxDoc = {
  slug: string;
  frontmatter: MdxFrontmatter;
  content: string;
  readingTime?: string;
};

function getDir(collection: "insights" | "work" | "services") {
  return path.join(process.cwd(), "src", "content", "mdx", collection);
}

export function getAllSlugs(collection: "insights" | "work" | "services") {
  const dir = getDir(collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getDocBySlug(
  collection: "insights" | "work" | "services",
  slug: string
): MdxDoc {
  const fullPath = path.join(getDir(collection), `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const fm = data as MdxFrontmatter;

  return {
    slug,
    frontmatter: fm,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllDocs(collection: "insights" | "work" | "services") {
  const slugs = getAllSlugs(collection);
  const docs = slugs.map((slug) => getDocBySlug(collection, slug));

  // Sort: by featured then date (if available)
  return docs.sort((a, b) => {
    const fa = a.frontmatter.featured ? 1 : 0;
    const fb = b.frontmatter.featured ? 1 : 0;
    if (fa !== fb) return fb - fa;

    const da = a.frontmatter.date ? new Date(a.frontmatter.date).getTime() : 0;
    const db = b.frontmatter.date ? new Date(b.frontmatter.date).getTime() : 0;
    return db - da;
  });
}
