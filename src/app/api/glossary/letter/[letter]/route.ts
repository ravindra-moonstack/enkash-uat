import { NextRequest, NextResponse } from "next/server";
import pool from "@/src/lib/dbConnect";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ letter: string }> }) {
    const { letter } = await params;
    const queryLetter = letter.toUpperCase();
    let rows: any[] = [];
    
    try {
        if (queryLetter === "#") {
            const [result]: any = await pool.execute(
                "SELECT word, slug FROM glossary WHERE word NOT REGEXP '^[A-Za-z]' ORDER BY word ASC"
            );
            rows = result;
        } else {
            const [result]: any = await pool.execute(
                "SELECT word, slug FROM glossary WHERE word LIKE ? ORDER BY word ASC",
                [`${queryLetter}%`]
            );
            rows = result;
        }
        
        return NextResponse.json(rows);
    } catch (error) {
        console.error("Fetch terms by letter error:", error);
        return NextResponse.json({ error: "Failed to fetch terms" }, { status: 500 });
    }
}
