import React from "react"
import styles from "./featured_top.module.scss"
import { CommanButton } from "@/src/components"

async function getData() {
  const res = await fetch(
    "http://localhost:3000/api/resources/blogs/getFeaturedRightBlog",
    {
      cache: "no-store",
    }
  )

  if (!res.ok) throw new Error("Failed to fetch")

  return res.json()
}

const BellIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C13.1046 22 14 21.1046 14 20H10C10 21.1046 10.8954 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
      fill="currentColor"
    />
  </svg>
)

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
      <div className={styles.subscribe_box}>
        <input
          type="email"
          placeholder="Enter your work email"
          className={styles.input}
        />

        <CommanButton
          title="Subscribe"
          theme="blue"
          iconSize={19}
          icon={<BellIcon />}
          iconPosition="end"
          className={styles.subscribe_btn}
        />
      </div>
    </div>
  )
}
