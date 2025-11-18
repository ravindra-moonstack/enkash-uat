import React, { JSX } from "react"
import styles from "./blog-section.module.scss"
import DynamicHeading from "../../dynamic-heading"
import BlogCard from "../../blog-card"

interface HeadingPart {
  title: string
  color: string
}

interface BlogPost {
  ID: number
  title: string
  link: string
  featured_image: string
}

interface BlogSectionProps {
  heading: HeadingPart[]
  headingTag?: keyof JSX.IntrinsicElements
  cards: number[]
  className?: string
}

function decodeHTML(str: string) {
  return str
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
    .replace(/&amp;/g, "&")
}

async function fetchBlogs(postIds: number[]): Promise<BlogPost[]> {
  const res = await fetch(
    "https://www.enkash.com/resources/wp-json/custom-api/v2/send-post",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post_ids: postIds }),
      next: { revalidate: 3600 },
    }
  )

  const data = await res.json()
  return data.posts || []
}

const BlogSection = async ({
  heading,
  cards,
  className = "",
}: BlogSectionProps) => {
  const posts = await fetchBlogs(cards)

  return (
    <div className={`${styles.other_products} ${className}`}>
      <div className="max-w-auto">
        <div className={`${styles.title} text-center pb-4 pb-md-5`}>
          <DynamicHeading content={heading} headingTag="h2" className="f-6" />
        </div>

        <div className="row g-3 pb-4">
          {posts.map((post) => (
            <div className="col-12 col-md-4 d-flex" key={post.ID}>
              <BlogCard
                description={decodeHTML(post.title)}
                cardImage={post.featured_image}
                buttonUrl={post.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
