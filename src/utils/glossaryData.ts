// src/utils/glossaryData.ts

export type GlossaryTerm = {
    keyword: string
    slug: string
    metaTitle: string
    metaDescription: string
    definition: string
    businessContext?: string
    howItWorks?: string
    sectionHeading1?: string
    sectionDescription1?: string
    sectionHeading2?: string
    sectionDescription2?: string
    sectionHeading3?: string
    sectionDescription3?: string
    sectionHeading4?: string
    sectionDescription4?: string
    relatedBlogs?: string
    sheet: string
}

const CSV_URL = process.env.GLOSSARY_CSV_URL!

/**
 * Improved CSV parser that handles quotes and commas properly
 */
function parseCSV(text: string): any[] {
    const lines = text.split('\n').filter(line => line.trim())
    if (lines.length === 0) return []

    // Parse first line to get headers
    const headers = parseCSVLine(lines[0])
    const data: any[] = []

    // Parse each data line
    for (let i = 1; i < lines.length; i++) {
        const values = parseCSVLine(lines[i])
        if (values.length === 0) continue

        const row: any = {}
        headers.forEach((header, index) => {
            row[header] = values[index] || ''
        })
        data.push(row)
    }

    return data
}

/**
 * Parse a single CSV line, handling quoted values with commas
 */
function parseCSVLine(line: string): string[] {
    const result: string[] = []
    let current = ''
    let inQuotes = false

    for (let i = 0; i < line.length; i++) {
        const char = line[i]
        const nextChar = line[i + 1]

        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                // Escaped quote
                current += '"'
                i++
            } else {
                // Toggle quote state
                inQuotes = !inQuotes
            }
        } else if (char === ',' && !inQuotes) {
            // Field separator
            result.push(current.trim())
            current = ''
        } else {
            current += char
        }
    }

    // Add last field
    result.push(current.trim())

    return result
}

/**
 * Fetch all glossary data from Google Sheets CSV
 */
export async function fetchAllGlossaryData(): Promise<GlossaryTerm[]> {
    try {
        const response = await fetch(CSV_URL, {
            cache: 'no-store', // Always get fresh data
        })

        if (!response.ok) {
            throw new Error('Failed to fetch glossary data')
        }

        const text = await response.text()
        const rawData = parseCSV(text)

        // Map CSV columns to GlossaryTerm structure
        return rawData
            .map(row => ({
                keyword: row.Word || row.word || '',
                slug: row.Slug || row.slug || '',
                metaTitle: row['Meta Title'] || row.metaTitle || '',
                metaDescription: row['Meta Description'] || row.metaDescription || '',
                definition: row.sectionDescription1 || row.Definition || row.definition || '',
                businessContext: row.sectionDescription3 || row['Business Context'] || row.businessContext || '',
                howItWorks: row['How It Works'] || row.howItWorks || '',
                sectionHeading1: row.sectionHeading1 || row['Section Heading 1'] || '',
                sectionDescription1: row.sectionDescription1 || row['Section Description 1'] || '',
                sectionHeading2: row.sectionHeading2 || row['Section Heading 2'] || '',
                sectionDescription2: row.sectionDescription2 || row['Section Description 2'] || '',
                sectionHeading3: row.sectionHeading3 || row['Section Heading 3'] || '',
                sectionDescription3: row.sectionDescription3 || row['Section Description 3'] || '',
                sectionHeading4: row.sectionHeading4 || row['Section Heading 4'] || '',
                sectionDescription4: row.sectionDescription4 || row['Section Description 4'] || '',
                relatedBlogs: row['Blog 1'] || row.relatedBlogs || row['Related Blogs'] || '',
                sheet: extractSheetFromSlug(row.Slug || row.slug || ''),
            }))
            .filter(term => term.keyword && term.slug) // Only include valid terms
    } catch (error) {
        console.error('Error fetching glossary data:', error)
        return []
    }
}

/**
 * Extract sheet letter from slug (e.g., "/glossary/asset" -> "A")
 */
function extractSheetFromSlug(slug: string): string {
    const match = slug.match(/\/glossary\/([a-z])/i)
    if (match && match[1]) {
        return match[1].toUpperCase()
    }
    // Fallback: use first letter of slug
    const cleanSlug = slug.replace(/^\/glossary\//, '')
    return cleanSlug.charAt(0).toUpperCase()
}

/**
 * Get all terms for a specific letter
 */
export async function fetchTermsByLetter(letter: string): Promise<GlossaryTerm[]> {
    const allData = await fetchAllGlossaryData()
    const targetLetter = letter.toUpperCase()

    return allData.filter(term =>
        term.sheet.toUpperCase() === targetLetter
    )
}

/**
 * Get a single term by slug (just the slug part, not full path)
 */
export async function fetchTermBySlug(slug: string): Promise<GlossaryTerm | null> {
    const allData = await fetchAllGlossaryData()
    const cleanSlug = slug.replace(/^\/glossary\/[a-z]\//, '').replace(/^\//, '')
    return allData.find(term => {
        const termSlug = term.slug.replace(/^\/glossary\/[a-z]\//, '').replace(/^\//, '')
        return termSlug === cleanSlug || term.slug.includes(cleanSlug)
    }) || null
}

/**
 * Get all unique letters that have terms
 */
export async function fetchAllLetters(): Promise<string[]> {
    const allData = await fetchAllGlossaryData()
    const letters = new Set(allData.map(term => term.sheet.toUpperCase()))
    return Array.from(letters).sort()
}

/**
 * Get all unique keywords across all sheets
 */
export async function fetchAllKeywords(): Promise<string[]> {
    const allData = await fetchAllGlossaryData()
    return allData.map(term => term.keyword).filter(Boolean)
}

/**
 * Search glossary terms by query
 */
export async function searchGlossaryTerms(query: string): Promise<GlossaryTerm[]> {
    const allData = await fetchAllGlossaryData()
    const searchLower = query.toLowerCase()

    return allData.filter(term =>
        term.keyword.toLowerCase().includes(searchLower) ||
        term.definition.toLowerCase().includes(searchLower)
    ).slice(0, 10) // Limit to 10 results for performance
}

/**
 * Group terms by their sheet letter
 */
export async function fetchGroupedTerms(): Promise<Record<string, GlossaryTerm[]>> {
    const allData = await fetchAllGlossaryData()
    const grouped: Record<string, GlossaryTerm[]> = {}
    const res = await fetch(CSV_URL, { cache: 'no-store' })
    const text = await res.text()
    
    console.log("CSV RESPONSE PREVIEW:", text.slice(0, 300))
    
    allData.forEach(term => {
        const letter = term.sheet.toUpperCase()
        if (!grouped[letter]) {
            grouped[letter] = []
        }
        grouped[letter].push(term)
    })

    return grouped
}