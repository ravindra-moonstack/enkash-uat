import React from "react"
import FeaturedLeftBlog from "./FeaturedLeftBlog"
import FeaturedRightBlogs from "./FeaturedRightBlogs"
import RecentBlogs from "./RecentBlogs"
import { BlogNav, ReceivablesSection, SubscribeSection } from "@/src/components"
import styles from "./featured_top.module.scss"

async function getNavData() {
  const res = await fetch("http://localhost:3000/api/resources/blogs/getCategory", {
    cache: "no-store",
  })
  if (!res.ok) return null
  return res.json()
}

async function getCategorySectionData(categoryName: string) {
  const res = await fetch(
    `http://localhost:3000/api/resources/blogs/getCategoryData?category=${encodeURIComponent(
      categoryName
    )}`,
    { cache: "no-store" }
  )
  console.log("res", res);

  if (!res.ok) return null
  return res.json()
}

export default async function BlogPageData() {
  const navData = await getNavData()
  console.log("navData", navData);

  const categories = navData?.categories || []
  console.log("categories", categories);

  const sectionsData = await Promise.all(
    categories.map(async (cat: any) => {
      const data = await getCategorySectionData(cat.slug)
      return data ? { ...data, categoryLabel: cat.label } : null
    })
  )
  console.log("sectionsData", sectionsData);

  return (
    <div className={`${styles.blog_page}`}>
      <div className={`${styles.container} max-w-auto`}>
        <section className={styles.blog_nav_section}>
          {navData && (
            <BlogNav
              data={navData}
              activeCategory="receivables" // Default or from URL
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
          if (!data || data.error) return null;
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
