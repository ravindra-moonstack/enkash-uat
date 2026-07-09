import React from "react"
import type { Metadata } from "next"
import CategoryBanner from "@/components/category-components/CategoryBanner"
import CategoryBlogCard from "@/components/category-components/CategoryBlogCard"
import RecentBlog from "@/components/category-components/RecentBlog"
import BlogNavWrapper from "@/src/components/blog-components/BlogNavWrapper"
import styles from "./style.module.scss"

import {
  getBlogCategories,
  getCategoryData,
} from "@/src/services/resource-service"

const formatCategoryName = (slug: string): string => {
  if (!slug) return ""
  const lower = slug.toLowerCase()
  if (lower === "ilearn") return "iLearn"
  if (lower === "rewards-recognition") return "Rewards & Recognition"
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const data = await getCategoryData(slug)

  if (!data || !data.categoryInfo) {
    const fallbackTitle = slug ? formatCategoryName(slug) : "Category"
    return {
      title: `${fallbackTitle} - EnKash Blogs`,
      description: `Browse all blog posts under ${fallbackTitle} category on EnKash.`,
    }
  }

  const category = data.categoryInfo
  let metaTitle = category.meta_title || `${category.name} - EnKash Blogs`
  metaTitle = metaTitle
    .replace(/%%page%%/g, "")
    .replace(/%%sep%%/g, "|")
    .replace(/%%sitename%%/g, "EnKash")
    .replace(/\s+/g, " ")
    .trim()

  const metaDescription =
    category.meta_description ||
    category.description ||
    `Browse all blog posts under ${category.name} category on EnKash.`

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical:
        `${process.env.URL || "https://www.enkash.com"}/resources/blog/category/${slug}`.toLowerCase(),
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "website",
      url: `${process.env.URL || "https://www.enkash.com"}/resources/blog/category/${slug}`.toLowerCase(),
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  }
}

// Trigger recompile
const Category = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ q?: string }>
}) => {
  const { slug } = await params
  const { q: searchQuery } = await searchParams
  const data = await getCategoryData(slug, searchQuery)
  const navData = await getBlogCategories()

  if (!data?.posts || data.posts.length === 0) {
    return (
      <div className={styles.category_not}>
        <div className="container">
          <p style={{ padding: "100px 0", textAlign: "center" }}>
            No posts found in this category.
          </p>
        </div>
      </div>
    )
  }

  const BannerData = [
    {
      categoryName: formatCategoryName(slug),
      title: data.posts[0]?.title,
      image: data.posts[0]?.featured_image_url || data.posts[0]?.image,
      slug: data.posts[0]?.slug,
    },
  ]
  const loadAllPosts = []
  for (let i = 1; i < data?.posts.length; i++) {
    loadAllPosts.push({
      categoryName: data.posts[i].category_names,
      categorySlug: data.posts[i].category_slugs,
      title: data.posts[i].title,
      image: data.posts[i].featured_image_url || data.posts[i].image,
      imageAlt: data.posts[i].image_alt,
      slug: data.posts[i].slug,
      date: data.posts[i].updated_at,
    })
  }
  return (
    <div className={styles.category_page}>
      <div className="max-w-auto">
        {navData && (
          <div className={styles.blog_nav_wrapper}>
            <BlogNavWrapper navData={navData} activeCategory={slug} />
          </div>
        )}
      </div>
      <CategoryBanner data={BannerData} />
      <CategoryBlogCard
        data={loadAllPosts}
        slug={slug}
        searchQuery={searchQuery}
      />
      <RecentBlog />
    </div>
  )
}

export default Category
