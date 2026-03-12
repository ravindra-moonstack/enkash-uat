import { NextResponse } from 'next/server';
import sequelize from '@/src/lib/dbConnect';
import { QueryTypes } from 'sequelize';

// PUT: Update category
export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { heading, sort_order } = await request.json();

    await sequelize.query(
      'UPDATE glossary_categories SET heading = ?, sort_order = ? WHERE id = ?',
      {
        replacements: [heading, sort_order, id],
        type: QueryTypes.UPDATE
      }
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
    const existing = await sequelize.query('SELECT id FROM glossary_categories WHERE id = ?', {
      replacements: [id],
      type: QueryTypes.SELECT
    });
    if (existing.length === 0) {
       return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    await sequelize.query('DELETE FROM glossary_categories WHERE id = ?', {
      replacements: [id],
      type: QueryTypes.DELETE
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 });
  }
}
