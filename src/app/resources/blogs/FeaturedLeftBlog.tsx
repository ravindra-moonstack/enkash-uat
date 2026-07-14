import Link from "next/link"
import Image from "next/image"
import styles from "./featured_top.module.scss"
import { CommanButton, DynamicHeading } from "@/src/components"
import { getImageUrl } from "@/src/utils/common"

async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/api/resources/blogs/getFeaturedLeftBlog`,
      {
        next: { revalidate: 600 },
      }
    )

    if (!res.ok) return { posts: [] }
    return res.json()
  } catch (error) {
    console.error("Failed to fetch featured left blog during prerender:", error)
    return { posts: [] }
  }
}

export default async function FeaturedLeftBlog() {
  const data = await getData()
  const post = data.posts?.[0]

  if (!post) return null

  return (
    <div className={styles.left_box_inner}>
      <div className={styles.left_box_image}>
        <Link href={`/resources/blog/${post.slug}`}>
          <Image
            src={getImageUrl(post.featured_image_url)}
            alt={post.image_alt || post.title}
            width={600}
            height={350}
            priority
          />
        </Link>
        <div className={styles.overlay}>
          <span className={styles.category}>{post.category_names}</span>
          <span className={styles.date}>
            {new Date(post.updated_at).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          <Link href={`/resources/blog/${post.slug}`}>{post.title}</Link>
        </h1>
        <DynamicHeading
          content={[
            {
              title: (post.excerpt || post.content || "")
                .replace(/<[^>]+>/g, "")
                .slice(0, 120),
              color: "color-black",
            },
          ]}
          headingTag="p"
        />
        <CommanButton
          theme="outline-blue"
          title="Read Now"
          arrow
          url={`/resources/blog/${post.slug}`}
        />
      </div>
    </div>
  )
}
