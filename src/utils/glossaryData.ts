import pool from "@/src/lib/dbConnect";

export const stripHtml = (html: string) => {
    return html ? html.replace(/<[^>]*>?/gm, '') : '';
};

export async function fetchTermBySlug(slug: string) {
    const [rows]: any = await pool.execute(
        "SELECT * FROM glossary WHERE slug = ? LIMIT 1",
        [slug]
    );
    return rows[0] || null;
}

export async function fetchTermsByLetter(letter: string) {
    const queryLetter = letter.toUpperCase();
    let rows: any[] = [];
    
    if (queryLetter === "#") {
        const [result]: any = await pool.execute(
            "SELECT * FROM glossary WHERE word NOT REGEXP '^[A-Za-z]' ORDER BY word ASC"
        );
        rows = result;
    } else {
        const [result]: any = await pool.execute(
            "SELECT * FROM glossary WHERE word LIKE ? ORDER BY word ASC",
            [`${queryLetter}%`]
        );
        rows = result;
    }
    
    return rows;
}

export async function searchGlossaryTerms(query: string) {
    if (!query) return [];
    const [rows]: any = await pool.execute(
        "SELECT * FROM glossary WHERE word LIKE ? LIMIT 10",
        [`%${query}%`]
    );
    return rows;
}

export async function fetchAllLetters(): Promise<string[]> {
    const [rows]: any = await pool.execute(
        "SELECT DISTINCT UPPER(LEFT(word, 1)) as letter FROM glossary ORDER BY letter ASC"
    );
    return rows.map((r: any) => /^[A-Z]$/.test(r.letter) ? r.letter : "#");
}

export async function fetchAllTermsGrouped() {
    const [rows]: any = await pool.execute(
        "SELECT * FROM glossary ORDER BY word ASC"
    );
    
    const groups: Record<string, any[]> = {};
    rows.forEach((row: any) => {
        const firstLetter = row.word.charAt(0).toUpperCase();
        const letter = /^[A-Z]$/.test(firstLetter) ? firstLetter : "#";
        if (!groups[letter]) groups[letter] = [];
        groups[letter].push(row);
    });

    return Object.keys(groups).sort().map(letter => ({
        heading: letter,
        cards: groups[letter]
    }));
}