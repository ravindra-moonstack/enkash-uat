import { fetchDetail } from "@/src/utils/fetchDetail"
import React from "react"
import { Container } from "react-bootstrap"

interface PageProps {
  params: Promise<{ letter: string; slug: string }>;
}

export default async function GlossaryDetail({ params }: PageProps) {
  const { letter, slug } = await params;
  const term = await fetchDetail(slug);

  if (!term) {
    return (
      <Container className="pb-5 paddingTopClass">
        <nav className="mb-3">Home &gt; {letter.toUpperCase()}</nav>
        <h2>Term not found</h2>
      </Container>
    )
  }

  return (
    <Container className="pb-5 paddingTopClass">
      <nav className="mb-3">
        Home &gt; {letter.toUpperCase()} &gt; {term.title}
      </nav>

      <h1 className="fw-bold mb-4">{term.title}</h1>

      <section className="mb-4">
        <div dangerouslySetInnerHTML={{ __html: term.content || "" }} />
      </section>

      {Array.isArray(term.related_posts) && term.related_posts.length > 0 && (
        <section className="mt-5">
          <h4 className="fw-bold">Related Blogs</h4>
          <ul>
            {term.related_posts.map((b: any) => (
              <li key={b.id}>
                <a
                  href={b.link ?? `https://uat.blogs.enkash.com/blog/${b.slug}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {b.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  )
}
 