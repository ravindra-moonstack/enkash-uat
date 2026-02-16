import pool from '@/src/lib/dbConnect';

const S3_BASE_URL = 'https://glossary.enkash.com';
const JSON_FILE_NAME = 'glossary-data.json';

export const getGlossaryJson = async () => {
    try {
        const response = await fetch(`${S3_BASE_URL}/${JSON_FILE_NAME}`, { 
            next: { revalidate: 0 } // Revalidate on every request to ensure freshness, change to higher value for caching
        });
        
        if (!response.ok) {
            if (response.status === 404) return [];
            console.error(`Failed to fetch glossary JSON: ${response.status} ${response.statusText}`);
            return [];
        }
        
        return await response.json();
    } catch (error) {
        console.error("Error reading glossary JSON from S3:", error);
        return [];
    }
}

export const saveGlossaryJson = async (data: any[]) => {
    try {
        // Sort by word alphabetically
        data.sort((a, b) => a.word.localeCompare(b.word));
        console.log(`Saving ${data.length} items to S3...`);
        
        const response = await fetch(`${S3_BASE_URL}/${JSON_FILE_NAME}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Failed to save to S3: ${response.status}`);
        }
        console.log("Successfully saved to S3");
        return true;
    } catch (error) {
        console.error("Error saving glossary JSON to S3:", error);
        return false;
    }
}
 
export const syncGlossaryToS3 = async () => {
    try { 
        const [rows]: any = await pool.query('SELECT id, word, slug FROM glossary ORDER BY word ASC');
        if (!Array.isArray(rows)) {
            throw new Error("Invalid data retrieved from database");
        }
        return await saveGlossaryJson(rows);
    } catch (error) {
        console.error("Error syncing glossary to S3:", error);
        return false;
    }
}

export const addToGlossaryJson = async (_item: { id: number, word: string, slug: string }) => {
    return await syncGlossaryToS3();
}

export const updateInGlossaryJson = async (_item: { id: number, word: string, slug: string }) => {
    return await syncGlossaryToS3();
}

export const deleteFromGlossaryJson = async (_id: number) => {
    return await syncGlossaryToS3();
}
