import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Badge } from "@/components/marketing/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageMetadata, articleSchema } from "@/lib/seo";
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
  return generatePageMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: `/blog/${params.slug}`,
    ogImage: post.meta.image,
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(params.slug, 3);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.meta.title,
          description: post.meta.description,
          url: `${SITE_CONFIG.url}/blog/${params.slug}`,
          datePublished: post.meta.date,
          author: post.meta.author,
          image: post.meta.image,
        })}
      />

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

          {/* Content - rendered as plain text for now (MDX compilation to be added) */}
          <div className="prose prose-navy prose-lg max-w-none prose-headings:font-bold prose-a:text-teal prose-a:no-underline hover:prose-a:underline">
            {/* MDX content rendering will be enhanced in Phase 4 */}
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/^## (.*$)/gm, '<h2 id="$1">$1</h2>')
                  .replace(/^### (.*$)/gm, "<h3>$1</h3>")
                  .replace(/^\d+\. \*\*(.*?)\*\*: (.*$)/gm, "<p><strong>$1</strong>: $2</p>")
                  .replace(/^- (.*$)/gm, "<li>$1</li>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\*(.*?)\*/g, "<em>$1</em>")
                  .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
                  .replace(/^(?!<[hl]|<p|<li|<a|<str|<em|---)(.*\S.*)$/gm, "<p>$1</p>")
                  .replace(/---/g, "<hr />"),
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
                  <h3 className="font-semibold text-navy line-clamp-2">{r.meta.title}</h3>
                  <p className="mt-1 text-xs text-gray-400">{r.readingTime}</p>
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
