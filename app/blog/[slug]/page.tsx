import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, List } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Badge } from "@/components/marketing/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { FAQSection } from "@/components/marketing/faq-section";
import { generateBlogMetadata, articleSchema, faqSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/lib/mdx";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return generateBlogMetadata({
    title: post.meta.title,
    description: post.meta.description,
    slug: params.slug,
    image: post.meta.image,
    datePublished: post.meta.date,
    dateModified: post.meta.dateModified,
    author: post.meta.author,
    tags: post.meta.tags,
    category: post.meta.category,
  });
}

/** Extract H2 headings from markdown content for table of contents */
function extractHeadings(content: string): { id: string; text: string }[] {
  const headingRegex = /^## (.+)$/gm;
  const headings: { id: string; text: string }[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ id, text });
  }
  return headings;
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(params.slug, 3);
  const headings = extractHeadings(post.content);
  const articleUrl = `${SITE_CONFIG.url}/blog/${params.slug}`;

  // Build enhanced article schema
  const articleJsonLd = articleSchema({
    title: post.meta.title,
    description: post.meta.description,
    url: articleUrl,
    datePublished: post.meta.date,
    dateModified: post.meta.dateModified,
    author: post.meta.author,
    image: post.meta.image,
    keywords: post.meta.tags,
  });

  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* FAQ schema — separate JSON-LD block for FAQPage */}
      {post.meta.faqs && post.meta.faqs.length > 0 && (
        <JsonLd data={faqSchema(post.meta.faqs)} />
      )}

      <div className="pt-28" />
      <Section background="white">
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: post.meta.title, href: `/blog/${params.slug}` },
          ]}
        />

        <article className="mx-auto mt-8 max-w-3xl">
          {/* Header */}
          <div className="mb-8">
            <Badge variant="gray">{post.meta.category}</Badge>
            <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
              {post.meta.title}
            </h1>
            <p className="mt-3 text-lg text-gray-600">{post.meta.description}</p>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.meta.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
              <span>By {post.meta.author}</span>
            </div>
          </div>

          {/* Table of Contents */}
          {headings.length >= 3 && (
            <nav
              aria-label="Table of contents"
              className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5"
            >
              <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-navy">
                <List className="h-4 w-4" />
                In This Article
              </h2>
              <ol className="space-y-1.5">
                {headings.map((h, i) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className="text-sm text-gray-600 transition-colors hover:text-teal"
                    >
                      {i + 1}. {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Content — inject ids on H2s for TOC anchoring */}
          <div className="max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/^## (.*$)/gm, (_match, heading) => {
                    const id = heading
                      .trim()
                      .toLowerCase()
                      .replace(/[^a-z0-9\s-]/g, "")
                      .replace(/\s+/g, "-");
                    return `<h2 id="${id}" class="text-2xl font-bold mt-10 mb-4 scroll-mt-24" style="color:#0A0F2C">${heading}</h2>`;
                  })
                  .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-8 mb-3" style="color:#0A0F2C">$1</h3>')
                  .replace(/^\d+\. \*\*(.*?)\*\*: (.*$)/gm, '<p class="mb-3 leading-relaxed" style="color:#374151"><strong style="color:#0A0F2C">$1</strong>: $2</p>')
                  .replace(/^- (.*$)/gm, '<li class="mb-2 ml-6 list-disc" style="color:#374151">$1</li>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#0A0F2C">$1</strong>')
                  .replace(/\*(.*?)\*/g, "<em>$1</em>")
                  .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" style="color:#00D4AA;text-decoration:underline">$1</a>')
                  .replace(/^(?!<[hl]|<p|<li|<a|<str|<em|---)(.*\S.*)$/gm, '<p class="mb-4 leading-relaxed" style="color:#374151">$1</p>')
                  .replace(/---/g, '<hr class="my-8 border-gray-200" />'),
              }}
            />
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.meta.tags.map((tag) => (
              <Badge key={tag} variant="gray">
                {tag}
              </Badge>
            ))}
          </div>

          {/* FAQ Section from frontmatter */}
          {post.meta.faqs && post.meta.faqs.length > 0 && (
            <div className="mt-12">
              <FAQSection
                title="Frequently Asked Questions"
                faqs={post.meta.faqs}
              />
            </div>
          )}
        </article>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-navy">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="rounded-lg border border-gray-200 p-4 transition-all hover:border-gray-300 hover:shadow-md"
                >
                  <Badge variant="gray">{r.meta.category}</Badge>
                  <h3 className="mt-2 font-semibold text-navy line-clamp-2">{r.meta.title}</h3>
                  <p className="mt-1 text-xs text-gray-500 line-clamp-2">{r.meta.description}</p>
                  <p className="mt-2 text-xs text-gray-400">{r.readingTime}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mx-auto mt-12 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </Section>
    </>
  );
}
