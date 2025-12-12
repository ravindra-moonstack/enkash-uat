import { Container } from "react-bootstrap"
import Link from "next/link"

export async function fetchByLetter(letter: string) {
  const res = await fetch(
    `https://uat.blogs.enkash.com/wp-json/custom/v1/glossary?letter=${letter.toUpperCase()}`,
    { next: { revalidate: 60 } }
  )
  const json = await res.json()
  return json.data || []
}

export default async function LetterPage({ params }: any) {
  const { letter } = params
  const terms = await fetchByLetter(letter)

  return (
    <Container className="pb-5 paddingTopClass">
      <nav className="mb-3">Home &gt; {letter.toUpperCase()}</nav>
      <h2 className="fw-bold mb-4">
        Terms starting with {letter.toUpperCase()}
      </h2>

      {terms.length > 0 ? (
        terms.map((item: any) => (
          <div key={item.id} className="mb-2">
            <Link href={`/glossary/${letter}/${item.slug}`}>{item.title}</Link>
          </div>
        ))
      ) : (
        <p>No glossary items found.</p>
      )}
    </Container>
  )
}
