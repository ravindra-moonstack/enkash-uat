import { NextRequest, NextResponse } from "next/server"
import sequelize from "@/src/lib/dbConnect";
import { QueryTypes } from "sequelize";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = (searchParams.get("q") || "").toLowerCase();

    if (!query) {
        return NextResponse.json({ results: [] })
    }

    try {
        // Database filtering
        const rows: any = await sequelize.query(
            "SELECT word, slug FROM glossary WHERE word LIKE ? LIMIT 10",
            {
                replacements: [`%${query}%`],
                type: QueryTypes.SELECT
            }
        )

        const formattedResults = rows.map((term: any) => ({
            word: term.word,
            slug: term.slug,
            content: "" 
        }))

        // const allTerms = await getGlossaryJson();
        // console.log("allTerms", allTerms);
        // const filteredTerms = allTerms.filter((term: any) =>
        //     term.word.toLowerCase().includes(query)
        // ).slice(0, 10);

        // const formattedResults = filteredTerms.map((term: any) => ({
        //     word: term.word,
        //     slug: term.slug,
        //     content: "" // Content is not available in the manual JSON
        // }))

        return NextResponse.json({ results: formattedResults }, {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        })
    } catch (error) {
        console.error("Search API error:", error)
        return NextResponse.json({ results: [] }, { status: 500 })
    }
}