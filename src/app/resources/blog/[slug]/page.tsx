import React from "react"
import type { Metadata } from "next"
import styles from "./styles.module.scss"
import Link from "next/link"
import { cookies } from "next/headers"
import dynamic from "next/dynamic"
import BlogBanner from "@/src/components/blog-components/BlogBanner"
import BlogBody from "@/src/components/blog-components/BlogBody"

const AuthorSection = dynamic(() => import("@/src/components/blog-components/AuthorSection"), { ssr: true })
const RelatedBlogs = dynamic(() => import("@/src/components/blog-components/RelatedBlogs"), { ssr: true })
const NewsletterSection = dynamic(() => import("@/src/components/blog-components/NewsletterSection"), { ssr: true })
import { notFound, redirect } from "next/navigation"

import {
  getBlogCategories,
  getPostBySlug,
} from "@/src/services/resource-service"
import { generateBreadcrumbSchema } from "@/src/utils/metaData"

const calculateReadTime = (htmlContent: string): string => {
  const wordsPerMinute = 200
  const cleanText = htmlContent ? htmlContent.replace(/<[^>]*>/g, "") : ""
  const words = cleanText.split(/\s+/).filter((word) => word.length > 0).length
  const readTime = Math.ceil(words / wordsPerMinute)
  return `${readTime} Min Read`
}

const cleanSchemaMarkup = (markup: string): string => {
  if (!markup) return ""
  let cleaned = markup

  const startIdx = cleaned.toLowerCase().indexOf('<script')
  const endIdx = cleaned.toLowerCase().lastIndexOf('</script>')
  
  if (startIdx !== -1 && endIdx !== -1 && startIdx < endIdx) {
    const firstCloseBracket = cleaned.indexOf('>', startIdx)
    if (firstCloseBracket !== -1 && firstCloseBracket < endIdx) {
      cleaned = cleaned.substring(firstCloseBracket + 1, endIdx)
    }
  } else {
    cleaned = cleaned.replace(/<[^>]*>/g, "")
  }

  cleaned = cleaned
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '\\"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '\\"')
    .replace(/&rdquo;/g, '\\"')
    .replace(/&nbsp;/g, " ")

  cleaned = cleaned.replace(/</g, "\\u003c")

  return cleaned.trim()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value
  const json = await getPostBySlug(slug, token)

  if (json?.redirect) {
    redirect(`/resources/blog/${json.redirect}`)
  }

  if (json?.error || !json?.posts || json?.posts?.length === 0) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  const post = json.posts[0]

  // Clean up meta title placeholders (%%page%%, %%sep%%, %%sitename%%)
  let metaTitle = post.meta_title || post.title
  metaTitle = metaTitle
    .replace(/%%page%%/g, "")
    .replace(/%%sep%%/g, "|")
    .replace(/%%sitename%%/g, "EnKash")
    .replace(/\s+/g, " ")
    .trim()

  const imageUrl = post.featured_image_url
    ? post.featured_image_url.startsWith("http")
      ? post.featured_image_url
      : `/uploads/${post.featured_image_url}`
    : ""

  return {
    title: metaTitle,
    description: post.meta_description || "",
    keywords: post.focus_keyword
      ? post.focus_keyword.split(",").map((k: string) => k.trim())
      : [],
    alternates: {
      canonical:
        `${process.env.URL || "https://www.enkash.com"}/resources/blog/${slug}`.toLowerCase(),
    },
    openGraph: {
      title: metaTitle,
      description: post.meta_description || "",
      images: imageUrl ? [{ url: imageUrl, alt: post.image_alt || "" }] : [],
      type: "article",
      url: `${process.env.URL || "https://www.enkash.com"}/resources/blog/${slug}`.toLowerCase(),
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: post.meta_description || "",
      images: imageUrl ? [imageUrl] : [],
    },
  }
}
const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value
  const json = await getPostBySlug(slug, token)
  const navData = await getBlogCategories()

  if (json?.redirect) {
    redirect(`/resources/blog/${json.redirect}`)
  }

  if (json?.error || !json?.posts || json?.posts?.length === 0) {
    notFound()
  }
  const result = json.posts
  const readTime = calculateReadTime(result[0].content || "")

  const canonicalUrl =
    `${process.env.URL || "https://www.enkash.com"}/resources/blog/${slug}`.toLowerCase()
  const breadcrumbSchema = generateBreadcrumbSchema(canonicalUrl)

  const bannerData = [
    {
      title: result[0].title,
      image: result[0].featured_image_url,
      imageAlt: result[0].image_alt,
      category: result[0].category_names,
      categorySlug: result[0].category_slugs,
      author: result[0].author,
      user_login: result[0].user_login,
      first_name: result[0].first_name,
      last_name: result[0].last_name,
      date: result[0].created_at,
      created_at: result[0].created_at,
      updated_at: result[0].updated_at,
      show_featured_image: result[0].show_featured_image,
      slug: result[0].slug,
      readTime: readTime,
      remove_author_details: result[0].remove_author_details,
    },
  ]

  const bodyData = [
    {
      title: result[0].title,
      content: result[0].content,
      slug: result[0].slug,
      show_featured_image: result[0].show_featured_image,
      image: result[0].featured_image_url,
      imageAlt: result[0].image_alt,
    },
  ]

  const relatedBlogs = [{ relatedBlogs: json?.relatedBlogs }]

  const schemaMarkup = result[0].post_schema_markup
  const cleanedSchema = typeof schemaMarkup === "string" ? cleanSchemaMarkup(schemaMarkup) : ""
  const isJsonSchema = cleanedSchema.startsWith("{") || cleanedSchema.startsWith("[")
  const hasScriptTag =
    typeof schemaMarkup === "string" && /<script/i.test(schemaMarkup)

  return (
    <>
      {schemaMarkup &&
        (isJsonSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: cleanedSchema }}
          />
        ) : hasScriptTag ? (
          <div
            style={{ display: "none" }}
            dangerouslySetInnerHTML={{ __html: schemaMarkup }}
          />
        ) : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: schemaMarkup }}
          />
        ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className={`${styles.mainPage}`}>
        <section className={styles.blog_nav_section}>
          <div className="max-w-auto">
            <nav aria-label="Breadcrumb" className={styles.customBreadcrumb}>
              <Link href="/resources" className={styles.breadcrumbLink}>
                Resources
              </Link>
              <svg
                className={styles.breadcrumbChevron}
                width="22.51"
                height="22.51"
                viewBox="91 5 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M92.0938 6.66406L98.4252 12.9955L92.0938 19.327"
                  stroke="#C8C8C8"
                  strokeWidth="2.11049"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link href="/resources/blogs" className={styles.breadcrumbLink}>
                Blogs
              </Link>
              <svg
                className={styles.breadcrumbChevron}
                width="22.51"
                height="22.51"
                viewBox="91 5 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M92.0938 6.66406L98.4252 12.9955L92.0938 19.327"
                  stroke="#C8C8C8"
                  strokeWidth="2.11049"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={styles.breadcrumbActive}>{result[0].title}</span>
            </nav>
          </div>
        </section>
        <BlogBanner bannerData={bannerData} />
        <BlogBody
          bodyData={bodyData[0]}
          slug={result[0].slug}
          title={result[0].title}
        />
        {(result[0].remove_author_details === 0 ||
          result[0].remove_author_details === null ||
          result[0].remove_author_details === undefined) && (
          <AuthorSection authorData={result[0]} />
        )}
        <RelatedBlogs relatedBlogs={relatedBlogs} />
        <NewsletterSection />
      </div>
    </>
  )
}

export default BlogPage
