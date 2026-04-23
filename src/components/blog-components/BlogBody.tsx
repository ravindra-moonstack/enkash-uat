import React from "react"
import styles from "./singleBlog.module.scss"
import TableOfContents from "./TableOfContents"
import BlogContent from "./BlogContent"

const BlogBody = ({ bodyData }: { bodyData: any }) => {
  return (
    <section className={`${styles.blogBody}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.row}`}>
          <div className={`${styles.colLg3}`}>
            <TableOfContents bodyData={bodyData} />
          </div>

          <div className={`${styles.colLg9}`}>
            <BlogContent bodyData={bodyData} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogBody
