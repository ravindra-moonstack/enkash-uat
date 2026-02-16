import { NextResponse } from 'next/server';
import pool from '@/src/lib/dbConnect';
import { saveGlossaryJson } from '@/src/lib/glossaryUtils';

export async function GET() {
  try {
    const [rows]: any = await pool.query('SELECT id, word, slug FROM glossary ORDER BY word ASC');
     
    const success = await saveGlossaryJson(rows);

    if (success) {
      return NextResponse.json({ message: 'Glossary JSON regenerated successfully' });
    } else {
      return NextResponse.json({ message: 'Failed to write glossary JSON' }, { status: 500 });
    }
  } catch (error) {
    console.error("Error regenerating glossary JSON:", error);
    return NextResponse.json({ message: 'Failed to regenerate glossary JSON' }, { status: 500 });
  }
}
