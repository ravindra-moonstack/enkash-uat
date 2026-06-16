"use client"

import React from "react"
import styles from "./singleBlog.module.scss"

const BlogContent = ({ htmlContent }: { htmlContent: string }) => {
  let html = htmlContent

  // Convert:
  // <span><strong>Title</strong>: Content</span>
  // ->
  // <p><strong>Title:</strong> Content</p>
  html = html.replace(
    /<span[^>]*>\s*<strong>([\s\S]*?)<\/strong>\s*:\s*([\s\S]*?)<\/span>/gi,
    "<p><strong>$1:</strong> $2</p>"
  )

  // Convert standalone FAQ questions
  html = html.replace(
    /<strong>([^<]+\?)<\/strong>/gi,
    "<h4 class='faq-question'>$1</h4>"
  )

  return (
    <div className={styles.blogContent}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default BlogContent
