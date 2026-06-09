"use client"
import React, { useState, useEffect, useMemo } from "react"
import styles from "./singleBlog.module.scss"
import TableOfContents from "./TableOfContents"
import BlogContent from "./BlogContent"
import SummarizeWithAI from "./SummarizeWithAI"
import { addPTags } from "@/src/utils/common"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FiPhoneCall, FiHeadphones } from "react-icons/fi"

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

const BlogBody = ({
  bodyData,
  slug,
  title,
}: {
  bodyData: any
  slug: string
  title: string
}) => {
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
    const headingElements = Array.from(doc.querySelectorAll("h2, h3"))

    const usedIds = new Set<string>()
    const mappedHeadings = headingElements.map((el) => {
      const text = el.textContent || ""
      const baseId = text
        .replace(/\s+/g, "-")
        .toLowerCase()
        .replace(/[^\w-]/g, "")

      let id = baseId || "heading"
      let counter = 1
      while (usedIds.has(id)) {
        id = `${baseId}-${counter}`
        counter++
      }
      usedIds.add(id)
      el.id = id
      return {
        id,
        text,
        tagName: el.tagName.toLowerCase(),
      }
    })

    return {
      headings: mappedHeadings,
      processedHtml: doc.body.innerHTML,
    }
  }, [bodyData?.content])

  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://www.enkash.com/resources/blog/${slug}`

  const shareLinks = [
    {
      icon: <FaLinkedinIn />,
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      link: `https://www.instagram.com`,
      label: "Instagram",
    },
    {
      icon: <FaFacebookF />,
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      label: "Facebook",
    },
    {
      icon: <FaXTwitter />,
      link: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      label: "X",
    },
  ]

  const showFeaturedImage =
    bodyData.show_featured_image !== "hide" &&
    bodyData.show_featured_image !== null &&
    bodyData.show_featured_image !== undefined
  const imageUrl = bodyData.image
    ? bodyData.image.startsWith("http")
      ? bodyData.image
      : `/uploads/${bodyData.image}`
    : ""

  return (
    <>
      <ReadingProgressBar />
      <section className={`${styles.blogBody}`}>
        <div className={`max-w-auto`}>
          <div className={styles.layoutGrid}>
            {/* LEFT COLUMN */}
            <div className={styles.colLg3Left}>
              <TableOfContents headings={headings} />
              <SummarizeWithAI slug={slug} />
            </div>

            {/* CENTER COLUMN */}
            <div className={styles.colLg9Center}>
              {showFeaturedImage && imageUrl && (
                <div className={styles.featuredImageWrapper}>
                  <img
                    src={imageUrl}
                    alt={bodyData.imageAlt || title}
                    className={styles.featuredImage}
                  />
                </div>
              )}

              {/* Social sharing inline bar and divider line */}
              <div className={styles.socialShareDividerWrapper}>
                <div className={styles.socialShareIconsInline}>
                  {shareLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIconLink}
                      aria-label={item.label}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
                <hr className={styles.shareDivider} />
              </div>

              <BlogContent htmlContent={processedHtml} />
            </div>

            {/* RIGHT COLUMN */}
            <div className={styles.colLg3Right}>
              <div className={styles.supportCard}>
                <h3 className={styles.supportHeader}>Got Questions?</h3>
                <p className={styles.supportSubheader}>Start here</p>
                <div className={styles.supportActions}>
                  <a href="/contact-us" className={styles.supportBtn}>
                    <FiPhoneCall className={styles.supportIcon} />
                    <span>Contact Us</span>
                  </a>
                  <a href="/support" className={styles.supportBtn}>
                    <FiHeadphones className={styles.supportIcon} />
                    <span>Support</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogBody
