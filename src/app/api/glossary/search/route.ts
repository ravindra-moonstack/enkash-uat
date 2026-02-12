import { NextRequest, NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect";
import { stripHtml } from "@/src/utils/format";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("q") || ""

    if (!query) {
        return NextResponse.json({ results: [] })
    }

    try {
        const [rows]: any = await pool.execute(
            "SELECT word, slug, LEFT(content, 500) as content FROM glossary WHERE word LIKE ? LIMIT 10",
            [`%${query}%`]
        );

        const formattedResults = rows.map((term: any) => ({
            word: term.word,
            slug: term.slug,
            content: stripHtml(term.content)
        }))

        return NextResponse.json({ results: formattedResults })
    } catch (error) {
        console.error("Search API error:", error)
        return NextResponse.json({ results: [] }, { status: 500 })
    }
}