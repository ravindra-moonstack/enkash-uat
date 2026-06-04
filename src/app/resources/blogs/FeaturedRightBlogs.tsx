import React from "react"
import styles from "./featured_top.module.scss"
import { SubscribeBox } from "@/src/components"

async function getData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  const res = await fetch(
    `${baseUrl}/api/resources/blogs/getFeaturedRightBlog`,
    { next: { revalidate: 300 } }
  )

  if (!res.ok) throw new Error("Failed to fetch")

  return res.json()
}

interface Post {
  id?: string | number
  slug: string
  title: string
  excerpt?: string
  content?: string
}

export default async function FeaturedRightBlogs() {
  const data = await getData()
  const posts: Post[] = data.posts || []

  if (!posts.length) return null
  return (
    <div className={styles.right_box_inner}>
      <h3 className={styles.heading}>Featured Blogs</h3>
      <div className={styles.content}>
        {posts.map((post, index) => (
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
