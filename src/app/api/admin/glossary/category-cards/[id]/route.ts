import { NextResponse } from 'next/server';
import sequelize from '@/src/lib/dbConnect';
import { QueryTypes } from 'sequelize';

// PUT: Update card
export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { heading, description, link, sort_order } = await request.json();

    await sequelize.query(
      'UPDATE glossary_category_cards SET heading = ?, description = ?, link = ?, sort_order = ? WHERE id = ?',
      {
        replacements: [heading, description, link, sort_order, id],
        type: QueryTypes.UPDATE
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating card:', error);
    return NextResponse.json({ error: 'Failed to update card' }, { status: 500 });
  }
}

// DELETE: Delete card
export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await sequelize.query('DELETE FROM glossary_category_cards WHERE id = ?', {
      replacements: [id],
      type: QueryTypes.DELETE
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting card:', error);
    return NextResponse.json({ error: 'Failed to delete card' }, { status: 500 });
  }
}
