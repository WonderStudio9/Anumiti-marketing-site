import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  dateModified?: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  draft?: boolean;
  faqs?: { question: string; answer: string }[];
}

export interface Post {
  slug: string;
  meta: PostMeta;
  content: string;
  readingTime: string;
}

export interface GuideMeta {
  title: string;
  description: string;
  lastUpdated: string;
  category: string;
  keywords: string[];
  faqs?: { question: string; answer: string }[];
}

export interface Guide {
  slug: string;
  meta: GuideMeta;
  content: string;
  readingTime: string;
}

export interface CaseStudyMeta {
  title: string;
  description: string;
  company: string;
  industry: string;
  product: "kavach" | "netra" | "both";
  results: string[];
  date: string;
}

export interface CaseStudy {
  slug: string;
  meta: CaseStudyMeta;
  content: string;
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function getFilesFromDir(dir: string): string[] {
  const fullPath = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs
    .readdirSync(fullPath)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

// --- Blog Posts ---

export function getAllPosts(): Post[] {
  const files = getFilesFromDir("blog");
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, "blog", file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        meta: data as PostMeta,
        content,
        readingTime: calculateReadingTime(content),
      };
    })
    .filter((post) => !post.meta.draft)
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  const files = getFilesFromDir("blog");
  const file = files.find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return undefined;
  const raw = fs.readFileSync(path.join(CONTENT_DIR, "blog", file), "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    meta: data as PostMeta,
    content,
    readingTime: calculateReadingTime(content),
  };
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .filter(
      (p) =>
        p.meta.category === current.meta.category ||
        p.meta.tags.some((t) => current.meta.tags.includes(t))
    )
    .slice(0, limit);
}

// --- Guides ---

export function getAllGuides(): Guide[] {
  const files = getFilesFromDir("guides");
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, "guides", file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        meta: data as GuideMeta,
        content,
        readingTime: calculateReadingTime(content),
      };
    })
    .sort(
      (a, b) =>
        new Date(b.meta.lastUpdated).getTime() - new Date(a.meta.lastUpdated).getTime()
    );
}

export function getGuideBySlug(slug: string): Guide | undefined {
  const files = getFilesFromDir("guides");
  const file = files.find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return undefined;
  const raw = fs.readFileSync(path.join(CONTENT_DIR, "guides", file), "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    meta: data as GuideMeta,
    content,
    readingTime: calculateReadingTime(content),
  };
}

export function getGuideSlugs(): string[] {
  return getAllGuides().map((g) => g.slug);
}

// --- Case Studies ---

export function getAllCaseStudies(): CaseStudy[] {
  const files = getFilesFromDir("case-studies");
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, "case-studies", file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        meta: data as CaseStudyMeta,
        content,
      };
    })
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  const files = getFilesFromDir("case-studies");
  const file = files.find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return undefined;
  const raw = fs.readFileSync(path.join(CONTENT_DIR, "case-studies", file), "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    meta: data as CaseStudyMeta,
    content,
  };
}
