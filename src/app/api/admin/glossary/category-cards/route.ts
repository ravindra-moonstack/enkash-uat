import { NextResponse } from 'next/server';
import sequelize from '@/src/lib/dbConnect';
import { QueryTypes } from 'sequelize';

// POST: Create a new card
export async function POST(request: Request) {
  try {
    const { category_id, heading, description, link, sort_order } = await request.json();

    if (!category_id || !heading) {
      return NextResponse.json({ error: 'Category ID and Heading are required' }, { status: 400 });
    }

    const [result]: any = await sequelize.query(
      'INSERT INTO glossary_category_cards (category_id, heading, description, link, sort_order) VALUES (?, ?, ?, ?, ?)',
      {
        replacements: [category_id, heading, description, link, sort_order || 0],
        type: QueryTypes.INSERT
      }
    );

    return NextResponse.json({ success: true, id: result });
  } catch (error) {
    console.error('Error creating card:', error);
    return NextResponse.json({ error: 'Failed to create card' }, { status: 500 });
  }
}
