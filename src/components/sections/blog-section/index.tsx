import React, { JSX } from "react"
import styles from "./blog-section.module.scss"
import DynamicHeading from "../../dynamic-heading"
import BlogCard from "../../blog-card"
import SuspenseLoading from "../../loading"

interface HeadingPart {
  title: string
  color: string
}

interface BlogSectionProps {
  heading: HeadingPart[]
  headingTag?: keyof JSX.IntrinsicElements
  cards?: number[]
  links?: string[]
  slug?: string
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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

async function fetchBlogs(
  cards?: number[],
  links?: string[],
  slug?: string
): Promise<BlogPost[]> {
  try {
    const query = new URLSearchParams()

    if (slug) {
      query.set("slug", slug)
    } else if (links && links.length === 1) {
      query.set("slug", links[0])
    } else if (links && links.length > 1) {
      query.set("slugs", links.join(","))
    } else if (cards && cards.length > 0) {
      query.set("ids", cards.join(","))
    } else {
      return []
    }

    const res = await fetch(
      `${BASE_URL}/api/related-blogs?${query.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 3600 },
      }
    )

    if (!res.ok) return []
    const data = await res.json()
    return data.posts || []
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return []
  }
}

const BlogSectionContent = async ({
  heading,
  cards,
  links,
  slug,
  className = "",
}: BlogSectionProps) => {
  const posts = await fetchBlogs(cards, links, slug)
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

const BlogSection = (props: BlogSectionProps) => {
  return (
    <SuspenseLoading>
      <BlogSectionContent {...props} />
    </SuspenseLoading>
  )
}

export default BlogSection
