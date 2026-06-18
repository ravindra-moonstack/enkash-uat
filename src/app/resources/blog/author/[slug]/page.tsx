import React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.scss"
import BlogNavWrapper from "@/src/components/blog-components/BlogNavWrapper"
import AuthorBlogCard from "@/src/components/author-components/AuthorBlogCard"
import RecentBlog from "@/components/category-components/RecentBlog"
import {
  getBlogCategories,
  getAuthorData,
} from "@/src/services/resource-service"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)
  const data = await getAuthorData(decodedSlug)

  if (!data || !data.authorInfo) {
    const fallbackTitle = slug
      ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
      : "Author"
    return {
      title: `${fallbackTitle} - EnKash Blogs`,
      description: `Browse all blog posts by ${fallbackTitle} on EnKash.`,
    }
  }

  const author = data.authorInfo
  const authorName = author.first_name
    ? `${author.first_name} ${author.last_name || ""}`.trim()
    : author.user_login
  const metaTitle = `${authorName} - EnKash Blogs`
  const metaDescription =
    author.description ||
    `Browse all blog posts published by ${authorName} on EnKash.`

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `${process.env.URL || "https://www.enkash.com"}/resources/blog/author/${slug.toLowerCase()}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "profile",
      url: `${process.env.URL || "https://www.enkash.com"}/resources/blog/author/${slug.toLowerCase()}`,
      username: author.user_login,
      firstName: author.first_name,
      lastName: author.last_name,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  }
}

const AuthorPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ q?: string }>
}) => {
  const { slug } = await params
  const { q: searchQuery } = await searchParams
  const decodedSlug = decodeURIComponent(slug)
  const data = await getAuthorData(decodedSlug, searchQuery)
  const navData = await getBlogCategories()

  if (!data || !data.authorInfo) {
    return (
      <div className={styles.author_page}>
        <div style={{ padding: "100px 0", textAlign: "center" }}>
          <p>Author not found.</p>
        </div>
      </div>
    )
  }

  const author = data.authorInfo
  const authorName = author.first_name
    ? `${author.first_name} ${author.last_name || ""}`.trim()
    : author.user_login

  // Format posts for the CategoryCard component
  const cardPosts = (data.posts || []).map((post: any) => ({
    categoryName: post.category_names,
    categorySlug: post.category_slugs,
    title: post.title,
    image: post.featured_image_url || post.image,
    imageAlt: post.image_alt,
    slug: post.slug,
    date: post.created_at || post.updated_at,
  }))

  return (
    <div className={styles.author_page}>
      {/* Premium Author Banner */}
      <section className={styles.author_banner_wrapper}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className={styles.customBreadcrumb}>
            <Link href="/resources" className={styles.breadcrumbLink}>
              Resources
            </Link>
            <svg
              className={styles.breadcrumbChevron}
              width="18"
              height="18"
              viewBox="91 5 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M92.0938 6.66406L98.4252 12.9955L92.0938 19.327"
                stroke="currentColor"
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
              width="18"
              height="18"
              viewBox="91 5 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M92.0938 6.66406L98.4252 12.9955L92.0938 19.327"
                stroke="currentColor"
                strokeWidth="2.11049"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.breadcrumbActive}>{authorName}</span>
          </nav>

          {/* Profile Card */}
          <div className={styles.profile_card}>
            <div className={styles.profile_image_wrapper}>
              <Image
                src={
                  author.profile_image_url
                    ? author.profile_image_url
                    : "/images/default-avatar.svg"
                }
                alt={authorName}
                width={160}
                height={160}
                className={styles.profile_image}
                priority
              />
            </div>
            <div className={styles.profile_details}>
              <h1 className={styles.profile_name}>{authorName}</h1>
              <p className={styles.profile_bio}>
                {author.description ||
                  "Decades of expertise and experience, providing actionable intelligence and real-time monitoring."}
              </p>
              <div className={styles.profile_stats}>
                <span className={styles.stat_badge}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                    <path d="M6 6h10" />
                    <path d="M6 10h10" />
                  </svg>
                  {data.total ?? 0} Blogs
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs List */}
      <div className={styles.section_heading_container}>
        <h2 className={styles.section_title}>Published Articles</h2>
      </div>

      {cardPosts.length > 0 ? (
        <AuthorBlogCard
          data={cardPosts}
          author={decodedSlug}
          searchQuery={searchQuery}
        />
      ) : (
        <div style={{ padding: "60px 0", textAlign: "center" }}>
          <p>No posts published by this author yet.</p>
        </div>
      )}

      <RecentBlog />
    </div>
  )
}

export default AuthorPage
