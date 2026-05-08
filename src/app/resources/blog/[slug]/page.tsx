import React from "react"
import type { Metadata } from "next"
import styles from "./styles.module.scss"
import Link from "next/link"
import BlogBanner from "@/src/components/blog-components/BlogBanner"
import BlogBody from "@/src/components/blog-components/BlogBody"
import AuthorSection from "@/src/components/blog-components/AuthorSection"
import RelatedBlogs from "@/src/components/blog-components/RelatedBlogs"
import { BlogNav } from "@/src/components"

import { getBlogCategories, getPostBySlug } from "@/src/services/resource-service"

export async function generateMetaData({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const json = await getPostBySlug(slug)

  if (json?.error || !json?.posts || json?.posts?.length === 0) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  const post = json.posts[0]

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || "",
    keywords: post.focus_keyword ? post.focus_keyword.split(",").map((k: string) => k.trim()) : [],
  }
}
const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const json = await getPostBySlug(slug)
  const navData = await getBlogCategories()

  if (json?.error || !json?.posts || json?.posts?.length === 0) {
    return (
      <div className={styles.noData}>
        <p>No Data Found</p>
      </div>
    )
  }
  const result = json.posts
  console.log("result", result);

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
    },
  ]

  //   const authorData = [
  //     {
  //       author: result[0].author,
  //       author_image: result[0].author_image,
  //       author_description: result[0].author_description,
  //     },
  //   ]

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
        <AuthorSection authorData={result[0]} />
        <RelatedBlogs relatedBlogs={relatedBlogs} />
      </div>
    </>
  )
}

export default BlogPage;