import { NextResponse } from "next/server";
import sequelize from "@/src/lib/dbConnect";
import { QueryTypes } from "sequelize";

export async function GET() {
    try {
        const rows: any = await sequelize.query(
            "SELECT * FROM glossary ORDER BY word ASC",
            { type: QueryTypes.SELECT }
        );
        
        const groups: Record<string, any[]> = {};
        rows.forEach((row: any) => {
            const firstLetter = row.word.charAt(0).toUpperCase();
            const letter = /^[A-Z]$/.test(firstLetter) ? firstLetter : "#";
            if (!groups[letter]) groups[letter] = [];
            groups[letter].push(row);
        });

        const result = Object.keys(groups).sort().map(letter => ({
            heading: letter,
            cards: groups[letter]
        }));
        
        return NextResponse.json(result);
    } catch (error) {
        console.error("Fetch all grouped terms error:", error);
        return NextResponse.json({ error: "Failed to fetch all terms" }, { status: 500 });
    }
}
