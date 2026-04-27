"use client"
import React, { useState, useEffect, useMemo } from "react"
import styles from "./singleBlog.module.scss"
import TableOfContents from "./TableOfContents"
import BlogContent from "./BlogContent"
import SummarizeWithAI from "./SummarizeWithAI"
import SocialShare from "./SocialShare"
import { addPTags } from "@/src/utils/common"

const ReadingProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const updateScrollProgress = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight
          if (scrollHeight > 0) {
            const scrolled = (window.scrollY / scrollHeight) * 100
            setScrollProgress(Math.min(100, Math.max(0, scrolled)))
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", updateScrollProgress, { passive: true })
    updateScrollProgress()

    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

const BlogBody = ({ bodyData, slug, title }: { bodyData: any, slug: string, title: string }) => {
  useEffect(() => {
    document.body.classList.add("blog-body-active")
    return () => {
      document.body.classList.remove("blog-body-active")
    }
  }, [])

  const { headings, processedHtml } = useMemo(() => {
    if (typeof window === "undefined" || !bodyData?.content) {
      return { headings: [], processedHtml: bodyData?.content || "" }
    }

    const htmlWithPTags = addPTags(bodyData.content)
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlWithPTags, "text/html")
    const h2Elements = Array.from(doc.querySelectorAll("h2"))

    const mappedHeadings = h2Elements.map((el) => {
      const text = el.textContent || ""
      const id = text
        .replace(/\s+/g, "-")
        .toLowerCase()
        .replace(/[^\w-]/g, "")
      el.id = id
      return { id, text }
    })

    return {
      headings: mappedHeadings,
      processedHtml: doc.body.innerHTML,
    }
  }, [bodyData?.content])

  return (
    <>
      <ReadingProgressBar />
      <section className={`${styles.blogBody}`}>
        <div className={`max-w-auto`}>
          <div className={`${styles.row}`}>
            <div className={`${styles.colLg3}`}>
              <TableOfContents headings={headings} />
              <SummarizeWithAI slug={slug} />
            </div>
            <div className={`${styles.colLg9}`}>
              <BlogContent htmlContent={processedHtml} />
              <SocialShare slug={slug} title={title} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogBody
