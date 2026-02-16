import { NextResponse } from 'next/server';
import pool from '@/src/lib/dbConnect';
import { updateInGlossaryJson, deleteFromGlossaryJson } from '@/src/lib/glossaryUtils';

// GET: Fetch a single glossary item by ID
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const [rows]: any = await pool.execute('SELECT * FROM glossary WHERE id = ? LIMIT 1', [id]);
    const item = rows[0] || null;

    if (!item) {
        return NextResponse.json({ success: false, message: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: item });
  } catch (error: any) {
    console.error('Error fetching glossary item:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
 
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { word, slug, content, showRelatedBlogs, blogWord, meta_title, meta_description, feature_image, feature_image_alt } = body;

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

    // Check if we need to update the JSON file (only if word or slug changed)
    const [currentItemRows]: any = await pool.execute('SELECT word, slug FROM glossary WHERE id = ?', [id]);
    const currentItem = currentItemRows[0];

    await pool.execute(
      'UPDATE glossary SET word = ?, slug = ?, content = ?, showRelatedBlogs = ?, blogWord = ?, meta_title = ?, meta_description = ?, feature_image = ?, feature_image_alt = ? WHERE id = ?',
      [word, slug, content, showRelatedBlogs ? 1 : 0, blogWord || '', meta_title || null, meta_description || null, feature_image || null, feature_image_alt || null, id]
    );

    // Update the local JSON file only if critical fields changed
    if (currentItem && (currentItem.word !== word || currentItem.slug !== slug)) {
        await updateInGlossaryJson({
          id: Number(id),
          word: word,
          slug: slug
        });
    }

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

    // Update the local JSON file
    await deleteFromGlossaryJson(Number(id));

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
