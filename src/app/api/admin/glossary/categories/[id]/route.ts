
import { NextResponse } from 'next/server';
import pool from '@/src/lib/dbConnect';

// PUT: Update category
export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { heading, sort_order } = await request.json();

    await pool.execute(
      'UPDATE glossary_categories SET heading = ?, sort_order = ? WHERE id = ?',
      [heading, sort_order, id]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json({ error: 'Failed to update category' }, { status: 500 });
  }
}

// DELETE: Delete category
export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    
    // Check if category exists
    const [existing]: any = await pool.execute('SELECT id FROM glossary_categories WHERE id = ?', [id]);
    if (existing.length === 0) {
       return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    await pool.execute('DELETE FROM glossary_categories WHERE id = ?', [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 });
  }
}
