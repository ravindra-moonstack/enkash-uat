import pool from '@/src/lib/dbConnect';

export async function fetchAllLetters(): Promise<string[]> {
  try {
    const [rows]: any = await pool.execute(
      'SELECT DISTINCT LOWER(LEFT(word, 1)) AS letter FROM glossary ORDER BY letter ASC'
    );
    return rows.map((row: any) => row.letter as string);
  } catch (error) {
    console.error('Error fetching glossary letters from DB:', error);
    return [];
  }
}

export async function generateTermParams(): Promise<{ letter: string; slug: string }[]> {
  try {
    const [rows]: any = await pool.execute(
      'SELECT word, slug FROM glossary ORDER BY word ASC'
    );
    return rows.map((row: any) => ({
      letter: row.word.charAt(0).toLowerCase(),
      slug: row.slug,
    }));
  } catch (error) {
    console.error('Error fetching glossary terms from DB:', error);
    return [];
  }
}
