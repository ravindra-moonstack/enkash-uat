// app/api/glossary/search/route.ts

import { NextRequest, NextResponse } from "next/server"
import { searchGlossaryTerms } from "@/src/utils/glossaryData"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("q") || ""

    if (!query) {
        return NextResponse.json({ results: [] })
    }

    try {
        const results = await searchGlossaryTerms(query)

        const formattedResults = results.map(term => ({
            keyword: term.keyword,
            slug: term.slug,
            sheet: term.sheet,
        }))

        return NextResponse.json({ results: formattedResults })
    } catch (error) {
        console.error("Search API error:", error)
        return NextResponse.json({ results: [] }, { status: 500 })
    }
}