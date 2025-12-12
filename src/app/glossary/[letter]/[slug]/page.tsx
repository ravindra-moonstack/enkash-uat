import { Container } from "react-bootstrap"
// import Link from "next/link";

export async function fetchDetail(slug: string) {
  const res = await fetch(
    `https://uat.blogs.enkash.com/wp-json/custom/v1/glossary-all`,
    { next: { revalidate: 60 } }
  )
  const json = await res.json()

  return json.data.find((t: any) => t.slug === slug)
}

export default async function GlossaryDetail({ params }: any) {
  const { letter, slug } = params
  const term = await fetchDetail(slug)

  if (!term)
    return (
      <Container className="pb-5 paddingTopClass">
        <h2>Term not found</h2>
      </Container>
    )

  return (
    <Container className="pb-5 paddingTopClass">
      <nav className="mb-3">
        Home &gt; {letter.toUpperCase()} &gt; {term.title}
      </nav>

      {/* Title */}
      <h1 className="fw-bold mb-4">{term.title}</h1>

      {/* Full HTML Content */}
      <section className="mb-4">
        <div dangerouslySetInnerHTML={{ __html: term.content }} />
      </section>

      {/* Related Blogs */}
      {term.related_posts?.length > 0 && (
        <section className="mt-5">
          <h4 className="fw-bold">Related Blogs</h4>
          <ul>
            {term.related_posts.map((b: any) => (
              <li key={b.id}>
                <a
                  href={`https://uat.blogs.enkash.com/blog/${b.slug}`}
                  target="_blank"
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
