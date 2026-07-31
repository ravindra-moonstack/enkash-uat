import React from "react"
import { Metadata } from "next"
import FeaturedLeftBlog from "./FeaturedLeftBlog"
import FeaturedRightBlogs from "./FeaturedRightBlogs"
import RecentBlogs from "./RecentBlogs"
import { BlogNav, ReceivablesSection, SubscribeSection } from "@/src/components"
import styles from "./featured_top.module.scss"

import {
  getBlogCategories,
  getCategoryData,
} from "@/src/services/resource-service"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Finance, Payments & Corporate Card Insights | EnKash Blogs",
  description:
    "Explore expert insights on business payments, utility bills, GST, expense management, and fintech for Indian enterprises. Read the EnKash blog.",
  alternates: {
    canonical: `${process.env.URL || "https://www.enkash.com"}/resources/blogs`,
  },
})

export default async function BlogPageData() {
  const navData = await getBlogCategories()

  const categories = navData?.categories || []

  const sectionsData = await Promise.all(
    categories.map(async (cat: any) => {
      const data = await getCategoryData(cat.slug)
      return data ? { ...data, categoryLabel: cat.label } : null
    })
  )

  return (
    <div className={`${styles.blog_page}`}>
      <div className={`${styles.container} max-w-auto`}>
        <section className={styles.blog_nav_section}>
          {navData && (
            <BlogNav
              data={navData}
              activeCategory="receivables" // Default or from URL
              showSearch={false}
            />
          )}
        </section>
        <section className={styles.blog_page_top_section}>
          <div className={styles.row}>
            <div className={styles.left_box}>
              <FeaturedLeftBlog />
            </div>
            <div className={styles.right_box}>
              <FeaturedRightBlogs />
            </div>
          </div>
        </section>
      </div>

      <section className={styles.blog_page_recent_section}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col_12}>
              <RecentBlogs />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-auto">
        {/* Category Sections with alternating layout */}
        {sectionsData.map((data, index) => {
          if (!data || data.error) return null
          return (
            <div key={index} className={styles.category_section_wrap}>
              <ReceivablesSection
                data={data}
                imagePosition={index % 2 === 0 ? "right" : "left"}
              />
            </div>
          )
        })}
      </div>
      <SubscribeSection />
    </div>
  )
}
