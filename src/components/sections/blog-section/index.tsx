

import React, { JSX } from "react"
import styles from "./blog-section.module.scss"
import DynamicHeading from "../../dynamic-heading"
import BlogCard from "../../blog-card"

interface HeadingPart {
  title: string
  color: string
}

interface BlogSectionProps {
  heading: HeadingPart[]
  headingTag?: keyof JSX.IntrinsicElements
  cards?: number[]
  links?: string[]
  className?: string
}

interface BlogPost {
  ID: number
  title: string
  featured_image: string
  link: string
}

function decodeHTML(str: string) {
  return str
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
    .replace(/&amp;/g, "&")
}

async function fetchBlogs(cards?: number[], links?: string[]): Promise<BlogPost[]> {
  try {
    if (links && links.length > 0) {
      const blogSlugs = links;
      const API_KEY = process.env.NEXT_PUBLIC_ENKASH_API_KEY || "YOUR_X_API_KEY_HERE"
      const res = await fetch(
        `https://www.enkash.com/resources/wp-json/enkash/v1/blogs?posts=${blogSlugs}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
          },
          next: { revalidate: 3600 }
        }
      )
      if (!res.ok) return []
      const data = await res.json()
      return data.data || []
    } else if (cards && cards.length > 0) {
      const res = await fetch(
        "https://www.enkash.com/resources/wp-json/custom-api/v2/send-post",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ post_ids: cards }),
          next: { revalidate: 3600 },
        }
      )

      if (!res.ok) return []
      const data = await res.json()
      return data.posts || []
    }
    return []

  } catch (error) {
    console.error("Error fetching blogs:", error)
    return []
  }
}

const BlogSection = async ({
  heading,
  cards,
  links,
  className = "",
}: BlogSectionProps) => {
  const posts = await fetchBlogs(cards, links)
  if (!posts || posts.length < 3) return null

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

export default BlogSection;