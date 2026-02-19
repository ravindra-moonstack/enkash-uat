
import { NextResponse } from 'next/server';
import pool from '@/src/lib/dbConnect';

// PUT: Update card
export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { heading, description, link, sort_order } = await request.json();

    await pool.execute(
      'UPDATE glossary_category_cards SET heading = ?, description = ?, link = ?, sort_order = ? WHERE id = ?',
      [heading, description, link, sort_order, id]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating card:', error);
    return NextResponse.json({ error: 'Failed to update card' }, { status: 500 });
  }
}

// DELETE: Delete card
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await pool.execute('DELETE FROM glossary_category_cards WHERE id = ?', [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting card:', error);
    return NextResponse.json({ error: 'Failed to delete card' }, { status: 500 });
  }
}
