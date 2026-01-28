import { GLOSSARY_DATA, GlossaryTerm } from "../app/glossary/glossaryData"

export async function fetchTermBySlug(slug: string): Promise<GlossaryTerm | null> {
  const term = GLOSSARY_DATA.find(t => t.slug === slug)
  return term || null
}

// Fetch all terms for a specific letter
export async function fetchTermsByLetter(letter: string): Promise<GlossaryTerm[]> {
  const normalizedLetter = letter.toUpperCase()

  return GLOSSARY_DATA.filter(term => {
    const termSheet = term.sheet.toUpperCase()
    return termSheet === normalizedLetter
  })
}

// Search terms by keyword
export async function searchGlossaryTerms(query: string): Promise<GlossaryTerm[]> {
  const lowerQuery = query.toLowerCase()

  return GLOSSARY_DATA.filter(term =>
    term.keyword.toLowerCase().includes(lowerQuery)
  ).slice(0, 10) // Limit to 10 results
}

// Get all unique letters that have terms
export async function fetchAllLetters(): Promise<string[]> {
  const letters = new Set<string>()

  GLOSSARY_DATA.forEach(term => {
    letters.add(term.sheet.toUpperCase())
  })

  return Array.from(letters).sort()
}
 
export async function generateLetterParams() {
  const letters = await fetchAllLetters()
  return letters.map(letter => ({
    letter: letter.toLowerCase()
  }))
}

// Generate static params for all terms
export async function generateTermParams() {
  return GLOSSARY_DATA.map(term => ({
    letter: term.sheet.toLowerCase(),
    slug: term.slug
  }))
}
  