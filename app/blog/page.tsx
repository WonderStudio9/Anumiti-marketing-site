import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Badge } from "@/components/marketing/badge";
import { generatePageMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/mdx";

export const metadata = generatePageMetadata({
  title: "Blog — Anumiti",
  description:
    "Insights on DPDP compliance, Indian document intelligence, AI governance, and building infrastructure for India. Guides, tutorials, and industry analysis.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <div className="pt-28" />
      <Section background="white">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

        <div className="mt-8 mb-12">
          <h1 className="text-4xl font-bold text-navy">Blog</h1>
          <p className="mt-3 text-lg text-gray-600">
            DPDP compliance insights, document intelligence tutorials, and AI governance
            thought leadership.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="mb-3">
                    <Badge variant="gray">{post.meta.category}</Badge>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-lg font-semibold text-navy transition-colors group-hover:text-teal">
                      {post.meta.title}
                    </h2>
                  </Link>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {post.meta.description}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.meta.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal hover:underline"
                  >
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
