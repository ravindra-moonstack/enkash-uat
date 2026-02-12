import { NextRequest, NextResponse } from "next/server"
import { getGlossaryJson } from "@/src/lib/glossaryUtils";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = (searchParams.get("q") || "").toLowerCase();

    if (!query) {
        return NextResponse.json({ results: [] })
    }

    try {
        const allTerms = getGlossaryJson();

        // Filter results based on the query
        const results = allTerms.filter((term: any) =>
            term.word.toLowerCase().includes(query)
        ).slice(0, 10);

        const formattedResults = results.map((term: any) => ({
            word: term.word,
            slug: term.slug,
            content: "" // Content is not available in the manual JSON
        }))

        return NextResponse.json({ results: formattedResults })
    } catch (error) {
        console.error("Search API error:", error)
        return NextResponse.json({ results: [] }, { status: 500 })
    }
}