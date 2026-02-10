import { NextResponse } from 'next/server';
import pool from '@/src/lib/dbConnect';
import { verifyToken } from '@/src/utils/auth';
 
export async function GET(request: Request) {
  try {
    const user = await verifyToken();
    if (!user) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    // Get total count for pagination
    const [countRows]: any = await pool.execute('SELECT COUNT(*) as total FROM glossary');
    const totalItems = countRows[0].total;
    const totalPages = Math.ceil(totalItems / limit);

    const [rows]: any = await pool.query(
      'SELECT * FROM glossary ORDER BY word ASC LIMIT ? OFFSET ?',
      [limit, offset]
    );

    return NextResponse.json({
      success: true,
      data: rows,
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        limit
      }
    });
  } catch (error: any) {
    console.error('Error fetching glossary:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch glossary items' },
      { status: 500 }
    );
  }
}

// POST: Create a new glossary item
export async function POST(request: Request) {
  try {
    const user = await verifyToken();
    if (!user) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }
    const body = await request.json();
    const { word, slug, content, showRelatedBlogs, blogWord } = body;

    if (!word || !slug || !content) {
      return NextResponse.json(
        { success: false, message: 'Word, slug, and content are required' },
        { status: 400 }
      );
    }

    // Check slug uniqueness
    const [existing]: any = await pool.execute(
      'SELECT id FROM glossary WHERE slug = ? LIMIT 1',
      [slug]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        { success: false, message: 'Slug already exists. Please choose a unique slug.' },
        { status: 400 }
      );
    }

    const [result]: any = await pool.execute(
      'INSERT INTO glossary (word, slug, content, showRelatedBlogs, blogWord) VALUES (?, ?, ?, ?, ?)',
      [word, slug, content, showRelatedBlogs ? 1 : 0, blogWord || '']
    );

    return NextResponse.json({
      success: true,
      message: 'Glossary item created successfully',
      id: result.insertId,
    });
  } catch (error: any) {
    console.error('Error creating glossary item:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
