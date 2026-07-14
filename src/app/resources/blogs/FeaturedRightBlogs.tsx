import React from "react"
import styles from "./featured_top.module.scss"
import { SubscribeBox } from "@/src/components"

async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/api/resources/blogs/getFeaturedRightBlog`,
      {
        next: { revalidate: 600 },
      }
    )

    if (!res.ok) return { posts: [] }
    return res.json()
  } catch (error) {
    console.error("Failed to fetch featured right blog during prerender:", error)
    return { posts: [] }
  }
}

export default async function FeaturedRightBlogs() {
  const data = await getData()
  const posts = data.posts || []

  if (!posts.length) return null
  return (
    <div className={styles.right_box_inner}>
      <h3 className={styles.heading}>Featured Blogs</h3>
      <div className={styles.content}>
        {posts.map((post: any, index: number) => (
          <div className={styles.content_box} key={post.id || index}>
            <h3 className={styles.title}>
              <a href={`/resources/blog/${post.slug}`}>{post.title}</a>
            </h3>
            <p className={styles.description}>
              {post.excerpt ||
                post.content?.replace(/<[^>]+>/g, "").slice(0, 120)}
            </p>
          </div>
        ))}
      </div>
      <SubscribeBox />
    </div>
  )
}
