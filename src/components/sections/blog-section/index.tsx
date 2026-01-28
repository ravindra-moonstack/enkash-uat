'use client'

import React, { JSX } from "react"
import styles from "./blog-section.module.scss"
import DynamicHeading from "../../dynamic-heading"
import BlogCard from "../../blog-card"
import { useBlogPosts } from "@/src/hooks/useBlogPosts"

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

function decodeHTML(str: string) {
  return str
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
    .replace(/&amp;/g, "&")
}

const BlogSection = ({
  heading,
  cards,
  links,
  className = "",
}: BlogSectionProps) => {
  const { posts, loading, error } = useBlogPosts({ cards, links })
  console.log("posts", posts);

  if (error) return <div>Error: {error}</div>

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
