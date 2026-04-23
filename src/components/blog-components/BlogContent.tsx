import React from "react"
import styles from "./singleBlog.module.scss"

const BlogContent = ({ bodyData }: { bodyData: any }) => {
  return (
    <div className={styles.blogContent}>
      <div dangerouslySetInnerHTML={{ __html: bodyData.content }} />
    </div>
  )
}

export default BlogContent
