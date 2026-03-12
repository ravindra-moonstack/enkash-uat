import { NextResponse } from 'next/server';
import sequelize from '@/src/lib/dbConnect';
import { QueryTypes } from 'sequelize';


// GET: Fetch a single glossary item by ID
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const item = await sequelize.query('SELECT * FROM glossary WHERE id = ? LIMIT 1', {
      replacements: [id],
      type: QueryTypes.SELECT,
      plain: true
    });

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
 
    const existing = await sequelize.query(
      'SELECT id FROM glossary WHERE slug = ? AND id != ? LIMIT 1',
      { replacements: [slug, id], type: QueryTypes.SELECT }
    );

    if (existing.length > 0) {
      return NextResponse.json(
        { success: false, message: 'Slug already exists. Please choose a unique slug.' },
        { status: 400 }
      );
    }

    await sequelize.query(
      'UPDATE glossary SET word = ?, slug = ?, content = ?, showRelatedBlogs = ?, blogWord = ?, meta_title = ?, meta_description = ?, feature_image = ?, feature_image_alt = ? WHERE id = ?',
      {
        replacements: [word, slug, content, showRelatedBlogs ? 1 : 0, blogWord || '', meta_title || null, meta_description || null, feature_image || null, feature_image_alt || null, id],
        type: QueryTypes.UPDATE
      }
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

    await sequelize.query('DELETE FROM glossary WHERE id = ?', {
      replacements: [id],
      type: QueryTypes.DELETE
    });

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
