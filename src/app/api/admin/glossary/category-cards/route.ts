
import { NextResponse } from 'next/server';
import pool from '@/src/lib/dbConnect';

// POST: Create a new card
export async function POST(request: Request) {
  try {
    const { category_id, heading, description, link, sort_order } = await request.json();

    if (!category_id || !heading) {
      return NextResponse.json({ error: 'Category ID and Heading are required' }, { status: 400 });
    }

    const [result]: any = await pool.execute(
      'INSERT INTO glossary_category_cards (category_id, heading, description, link, sort_order) VALUES (?, ?, ?, ?, ?)',
      [category_id, heading, description, link, sort_order || 0]
    );

    return NextResponse.json({ success: true, id: result.insertId });
  } catch (error) {
    console.error('Error creating card:', error);
    return NextResponse.json({ error: 'Failed to create card' }, { status: 500 });
  }
}
