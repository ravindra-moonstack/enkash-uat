import React from "react"
import styles from "./singleBlog.module.scss"
import { DynamicHeading } from ".."
import Link from "next/link"

const formatDate = (dateStr: string) => {
  if (!dateStr) return ""
  const d = new Date(dateStr)
  const day = String(d.getDate()).padStart(2, "0")
  const month = String(d.getMonth() + 1).padStart(2, "0")
  const year = d.getFullYear()
  return `${day}-${month}-${year}`
}

const BlogBanner = ({ bannerData }: { bannerData: any }) => {
  const data = bannerData[0]

  return (
    <section className={styles.blogBanner}>
      <div className="max-w-auto">
        <div className={styles.blogBannerContent}>
          <DynamicHeading
            content={[{ title: data.title }]}
            className={styles.title}
            headingTag="h1"
          />

          <div className={styles.meta}>
            {(data.remove_author_details === 0 ||
              data.remove_author_details === null ||
              data.remove_author_details === undefined) && (
              <span className={styles.author}>
                By{" "}
                {data.first_name
                  ? `${data.first_name} ${data.last_name || ""}`
                  : data.author}
              </span>
            )}

            <div className={styles.readTimeContainer}>
              <span className={styles.readTime}>{data.readTime}</span>
            </div>

            {data.updated_at && (
              <span className={styles.date}>
                Updated On {formatDate(data.updated_at)}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogBanner
