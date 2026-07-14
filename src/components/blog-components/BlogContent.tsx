import React from "react"
import styles from "./singleBlog.module.scss"

const BlogContent = ({ htmlContent }: { htmlContent: string }) => {
  return (
    <div className={styles.blogContent}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  )
}

export default BlogContent
