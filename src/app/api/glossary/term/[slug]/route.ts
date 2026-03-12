import { NextRequest, NextResponse } from "next/server";
import sequelize from "@/src/lib/dbConnect";
import { QueryTypes } from "sequelize";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    try {
        const term = await sequelize.query(
            "SELECT * FROM glossary WHERE slug = ? LIMIT 1",
            {
                replacements: [slug],
                type: QueryTypes.SELECT,
                plain: true
            }
        );

        if (!term) {
            return NextResponse.json({ error: "Term not found" }, { status: 404 });
        }

        return NextResponse.json(term);
    } catch (error) {
        console.error("Fetch term error:", error);
        return NextResponse.json({ error: "Failed to fetch term" }, { status: 500 });
    }
}
