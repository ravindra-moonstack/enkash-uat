import React from "react"
import type { Metadata } from "next"
import styles from "./styles.module.scss"
import Link from "next/link"
import { cookies } from "next/headers"
import BlogBanner from "@/src/components/blog-components/BlogBanner"
import BlogBody from "@/src/components/blog-components/BlogBody"
import AuthorSection from "@/src/components/blog-components/AuthorSection"
import RelatedBlogs from "@/src/components/blog-components/RelatedBlogs"
import { BlogNav } from "@/src/components"
import { notFound, redirect } from "next/navigation"

import {
  getBlogCategories,
  getPostBySlug,
} from "@/src/services/resource-service"
import { generateBreadcrumbSchema } from "@/src/utils/metaData"

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
      canonical: `${process.env.URL || "https://www.enkash.com"}/resources/blog/${slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: post.meta_description || "",
      images: imageUrl ? [{ url: imageUrl, alt: post.image_alt || "" }] : [],
      type: "article",
      url: `${process.env.URL || "https://www.enkash.com"}/resources/blog/${slug}`,
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

  const canonicalUrl = `${process.env.URL || "https://www.enkash.com"}/resources/blog/${slug}`
  const breadcrumbSchema = generateBreadcrumbSchema(canonicalUrl)

  const bannerData = [
    {
      title: result[0].title,
      image: result[0].featured_image_url,
      imageAlt: result[0].image_alt,
      category: result[0].category_names,
      categorySlug: result[0].category_slugs,
      author: result[0].author,
      first_name: result[0].first_name,
      last_name: result[0].last_name,
      date: result[0].created_at,
      created_at: result[0].created_at,
      updated_at: result[0].updated_at,
      show_featured_image: result[0].show_featured_image,
      slug: result[0].slug,
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

  const activeCategory = result[0].category_slugs?.split(",")[0] || ""

  // Prepare breadcrumbs for BlogNav
  const breadcrumbs = [
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/resources/blogs" },
    { label: result[0].title },
  ]

  const extendedNavData = navData ? { ...navData, breadcrumbs } : null

  return (
    <>
      {result[0].post_schema_markup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: result[0].post_schema_markup }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className={`${styles.mainPage}`}>
        <section className={styles.blog_nav_section}>
          <div className="max-w-auto">
            {extendedNavData && (
              <BlogNav
                data={extendedNavData}
                activeCategory={activeCategory}
                showCategories={false}
                showDivider={false}
              />
            )}
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
      </div>
    </>
  )
}

export default BlogPage
