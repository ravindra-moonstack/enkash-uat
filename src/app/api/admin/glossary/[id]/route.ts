import { NextResponse } from 'next/server';
import pool from '@/src/lib/dbConnect';

// PUT: Update an existing glossary item
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { word, slug, content, showRelatedBlogs, blogWord, meta_title, meta_description } = body;

    if (!word || !slug || !content) {
      return NextResponse.json(
        { success: false, message: 'Word, slug, and content are required' },
        { status: 400 }
      );
    }
 
    const [existing]: any = await pool.execute(
      'SELECT id FROM glossary WHERE slug = ? AND id != ? LIMIT 1',
      [slug, id]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        { success: false, message: 'Slug already exists. Please choose a unique slug.' },
        { status: 400 }
      );
    }

    await pool.execute(
      'UPDATE glossary SET word = ?, slug = ?, content = ?, showRelatedBlogs = ?, blogWord = ?, meta_title = ?, meta_description = ? WHERE id = ?',
      [word, slug, content, showRelatedBlogs ? 1 : 0, blogWord || '', meta_title || null, meta_description || null, id]
    );

    return NextResponse.json({
      success: true,
      message: 'Glossary item updated successfully',
    });
  } catch (error: any) {
    console.error('Error updating glossary item:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE: Remove a glossary item
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await pool.execute('DELETE FROM glossary WHERE id = ?', [id]);

    return NextResponse.json({
      success: true,
      message: 'Glossary item deleted successfully',
    });
  } catch (error: any) {
    console.error('Error deleting glossary item:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
