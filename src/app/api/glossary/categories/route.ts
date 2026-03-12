import { NextResponse } from 'next/server';
import sequelize from '@/src/lib/dbConnect';
import { QueryTypes } from 'sequelize';

export async function GET() {
  try {
    // Fetch categories
    const categories: any = await sequelize.query('SELECT * FROM glossary_categories ORDER BY sort_order ASC', {
      type: QueryTypes.SELECT
    });
    
    // Fetch cards
    const cards: any = await sequelize.query('SELECT * FROM glossary_category_cards ORDER BY sort_order ASC', {
      type: QueryTypes.SELECT
    });

    // Nest cards into categories
    const result = categories.map((cat: any) => {
      return {
        ...cat,
        cards: cards.filter((card: any) => card.category_id === cat.id)
      };
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching glossary categories:', error);
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}
