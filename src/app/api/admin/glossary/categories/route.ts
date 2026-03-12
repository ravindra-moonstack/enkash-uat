import { NextResponse } from 'next/server';
import sequelize from '@/src/lib/dbConnect';
import { QueryTypes } from 'sequelize';

// POST: Create a new category
export async function POST(request: Request) {
  try {
    const { heading, sort_order } = await request.json();
    
    if (!heading) {
      return NextResponse.json({ error: 'Heading is required' }, { status: 400 });
    }

    const [result]: any = await sequelize.query(
      'INSERT INTO glossary_categories (heading, sort_order) VALUES (?, ?)',
      {
        replacements: [heading, sort_order || 0],
        type: QueryTypes.INSERT
      }
    );

    return NextResponse.json({ success: true, id: result });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
  }
}
