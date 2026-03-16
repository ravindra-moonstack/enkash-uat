import { NextResponse } from "next/server";
import pool from "@/src/lib/dbConnect";

export async function GET() {
    try {
        const [rows]: any = await pool.execute(
            "SELECT DISTINCT UPPER(LEFT(word, 1)) as letter FROM glossary ORDER BY letter ASC"
        );
        const letters = rows.map((r: any) => /^[A-Z]$/.test(r.letter) ? r.letter : "#");
        
        // Remove duplicates and sort
        const uniqueLetters = Array.from(new Set(letters)).sort();
        
        return NextResponse.json(uniqueLetters);
    } catch (error) {
        console.error("Fetch all letters error:", error);
        return NextResponse.json({ error: "Failed to fetch letters" }, { status: 500 });
    }
}
