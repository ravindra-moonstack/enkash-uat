import { NextRequest, NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

interface BlogPost {
  ID: number
  title: string
  featured_image: string
  link: string
}

function formatPost(p: any): BlogPost {
  const featuredImageUrl = p.featured_image_url
    ? (p.featured_image_url.startsWith("http")
      ? p.featured_image_url
      : p.featured_image_url.startsWith("/")
        ? p.featured_image_url
        : `/uploads/${p.featured_image_url}`)
    : "";

  return {
    ID: p.old_id,
    title: p.title,
    featured_image: featuredImageUrl,
    link: `/resources/blog/${p.slug}`,
  };
}

async function handleGetRelatedBlogs(
  slug?: string | null,
  ids?: number[] | null,
  slugs?: string[] | null
): Promise<BlogPost[]> {
  const statusCondition = "p.status = 'publish'";

  // 1. Fetch by list of IDs if provided
  if (ids && ids.length > 0) {
    const [rows]: any = await pool.query(
      `SELECT p.old_id, p.title, p.slug, p.created_at, att.image_url AS featured_image_url
       FROM posts AS p
       LEFT JOIN attachments AS att ON p.featured_image = att.old_id
       WHERE p.post_type = 'post'
         AND p.status = 'publish'
         AND p.old_id IN (?)`,
      [ids]
    );

    // Map and sort matching the order of passed IDs
    const sorted = ids
      .map((id) => rows.find((r: any) => r.old_id === id))
      .filter(Boolean);

    return sorted.map(formatPost);
  }

  // 2. Fetch by list of exact slugs if provided
  if (slugs && slugs.length > 0) {
    const [rows]: any = await pool.query(
      `SELECT p.old_id, p.title, p.slug, p.created_at, att.image_url AS featured_image_url
       FROM posts AS p
       LEFT JOIN attachments AS att ON p.featured_image = att.old_id
       WHERE p.post_type = 'post'
         AND p.status = 'publish'
         AND p.slug IN (?)`,
      [slugs]
    );

    // Map and sort matching the order of passed slugs
    const sorted = slugs
      .map((s) => rows.find((r: any) => r.slug === s))
      .filter(Boolean);

    return sorted.map(formatPost);
  }

  // 3. Fetch related blogs by a target post's slug if provided
  if (slug) {
    // Get target post category and tags
    const [postData]: any = await pool.query(
      `SELECT old_id, category, tags FROM posts WHERE post_type = 'post' AND status = 'publish' AND slug = ? LIMIT 1`,
      [slug]
    );

    if (!postData || postData.length === 0) {
      return [];
    }

    const currentPost = postData[0];
    const category = currentPost.category?.split(",")[0];
    const tags = currentPost.tags?.split(",").filter((t: string) => t) || [];

    let relatedBlogs: any[] = [];

    // Query by tags first
    if (tags.length > 0) {
      const tagConditions = tags.map(() => `FIND_IN_SET(?, p.tags)`).join(" OR ");
      const relatedQueryByTags = `
        SELECT 
          p.old_id,
          p.title,
          p.slug,
          p.created_at,
          att.image_url AS featured_image_url
        FROM posts AS p
        LEFT JOIN attachments AS att ON p.featured_image = att.old_id
        WHERE p.post_type = 'post'
          AND ${statusCondition}
          AND p.old_id != ?
          AND (${tagConditions})
        GROUP BY p.old_id
        ORDER BY p.created_at DESC
        LIMIT 3
      `;
      const [tagRelated]: any = await pool.query(relatedQueryByTags, [currentPost.old_id, ...tags]);
      relatedBlogs = tagRelated;
    }

    // If less than 3, fallback to category
    if (relatedBlogs.length < 3 && category) {
      const remaining = 3 - relatedBlogs.length;
      const excludeIds = [currentPost.old_id, ...relatedBlogs.map((r: any) => r.old_id)];
      const placeholders = excludeIds.map(() => "?").join(",");

      const relatedQueryByCategories = `
        SELECT 
          p.old_id,
          p.title,
          p.slug,
          p.created_at,
          att.image_url AS featured_image_url
        FROM posts AS p
        LEFT JOIN attachments AS att ON p.featured_image = att.old_id
        WHERE p.post_type = 'post'
          AND ${statusCondition}
          AND p.old_id NOT IN (${placeholders})
          AND FIND_IN_SET(?, p.category)
        GROUP BY p.old_id
        ORDER BY p.created_at DESC
        LIMIT ${remaining}
      `;
      const [categoryRelated]: any = await pool.query(relatedQueryByCategories, [
        ...excludeIds,
        category,
      ]);
      relatedBlogs = [...relatedBlogs, ...categoryRelated];
    }

    // If still less than 3, fallback to recent posts
    if (relatedBlogs.length < 3) {
      const remaining = 3 - relatedBlogs.length;
      const excludeIds = [currentPost.old_id, ...relatedBlogs.map((r: any) => r.old_id)];
      const placeholders = excludeIds.map(() => "?").join(",");

      const recentQuery = `
        SELECT 
          p.old_id,
          p.title,
          p.slug,
          p.created_at,
          att.image_url AS featured_image_url
        FROM posts AS p
        LEFT JOIN attachments AS att ON p.featured_image = att.old_id
        WHERE p.post_type = 'post'
          AND ${statusCondition}
          AND p.old_id NOT IN (${placeholders})
        GROUP BY p.old_id
        ORDER BY p.created_at DESC
        LIMIT ${remaining}
      `;
      const [recentRelated]: any = await pool.query(recentQuery, excludeIds);
      relatedBlogs = [...relatedBlogs, ...recentRelated];
    }

    return relatedBlogs.map(formatPost);
  }

  return [];
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const idsParam = searchParams.get("ids");
    const slugsParam = searchParams.get("slugs");

    let ids: number[] | null = null;
    if (idsParam) {
      ids = idsParam
        .split(",")
        .map((id) => parseInt(id.trim(), 10))
        .filter((id) => !isNaN(id));
    }

    let slugs: string[] | null = null;
    if (slugsParam) {
      slugs = slugsParam
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    }

    const posts = await handleGetRelatedBlogs(slug, ids, slugs);
    return NextResponse.json({ success: true, posts });
  } catch (error: any) {
    console.error("Related Blogs API GET Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const slug = body.slug;
    let ids: number[] | null = null;
    let slugs: string[] | null = null;

    if (body.ids && Array.isArray(body.ids)) {
      ids = body.ids.map((id: any) => parseInt(id, 10)).filter((id: number) => !isNaN(id));
    }

    if (body.slugs && Array.isArray(body.slugs)) {
      slugs = body.slugs.map((s: any) => String(s).trim()).filter(Boolean);
    }

    const posts = await handleGetRelatedBlogs(slug, ids, slugs);
    return NextResponse.json({ success: true, posts });
  } catch (error: any) {
    console.error("Related Blogs API POST Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
