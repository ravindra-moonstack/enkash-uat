"use client"
import React, { useState, useEffect, useMemo } from "react"
import styles from "./singleBlog.module.scss"
import TableOfContents from "./TableOfContents"
import BlogContent from "./BlogContent"
import SummarizeWithAI from "./SummarizeWithAI"
import { addPTags, getImageUrl } from "@/src/utils/common"
import Image from "next/image"
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
      link: `https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`,
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
  const imageUrl = bodyData.image ? getImageUrl(bodyData.image) : ""

  return (
    <>
      <ReadingProgressBar />
      <section className={`${styles.blogBody}`}>
        <div className={`max-w-auto`}>
          <div className={styles.layoutGrid}>
            {/* LEFT COLUMN */}
            <div className={styles.colLg3Left}>
              <TableOfContents headings={headings} />
              <div className={styles.desktopAiBox}>
                <SummarizeWithAI slug={slug} />
              </div>
            </div>

            {/* CENTER COLUMN */}
            <div className={styles.colLg9Center}>
              {showFeaturedImage && imageUrl && (
                <div className={styles.featuredImageWrapper}>
                  <Image
                    src={imageUrl}
                    alt={bodyData.imageAlt || title}
                    className={styles.featuredImage}
                    width={777}
                    height={437}
                    priority={true}
                    fetchPriority="high"
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
              <div className={styles.mobileAiBox}>
                <SummarizeWithAI slug={slug} />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className={styles.colLg3Right}>
              <div className={styles.supportCard}>
                <h3 className={styles.supportHeader}>Got Questions?</h3>
                <div className={styles.supportActions}>
                  <a href="/contact-us" className={styles.supportBtn}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="56 128 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M75.95 149C73.8667 149 71.8083 148.546 69.775 147.638C67.7417 146.73 65.8917 145.442 64.225 143.775C62.5583 142.108 61.271 140.258 60.363 138.225C59.455 136.192 59.0007 134.134 59 132.05C59 131.75 59.1 131.5 59.3 131.3C59.5 131.1 59.75 131 60.05 131H64.1C64.3333 131 64.5417 131.079 64.725 131.238C64.9083 131.397 65.0167 131.584 65.05 131.8L65.7 135.3C65.7333 135.567 65.725 135.792 65.675 135.975C65.625 136.158 65.5333 136.317 65.4 136.45L62.975 138.9C63.3083 139.517 63.704 140.112 64.162 140.687C64.62 141.262 65.1243 141.816 65.675 142.35C66.1917 142.867 66.7333 143.346 67.3 143.788C67.8667 144.23 68.4667 144.634 69.1 145L71.45 142.65C71.6 142.5 71.796 142.388 72.038 142.313C72.28 142.238 72.5173 142.217 72.75 142.25L76.2 142.95C76.4333 143.017 76.625 143.138 76.775 143.313C76.925 143.488 77 143.684 77 143.9V147.95C77 148.25 76.9 148.5 76.7 148.7C76.5 148.9 76.25 149 75.95 149Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>Contact Us</span>
                  </a>
                  <a href="/support" className={styles.supportBtn}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="56 187 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.0938 198.887C58.0938 193.757 62.3375 189.656 67.5 189.656C72.6625 189.656 76.9062 193.757 76.9062 198.887V202.601C76.9062 202.681 76.9023 202.76 76.8944 202.839C76.9023 202.891 76.9062 202.945 76.9062 203C76.9062 203.862 76.7999 204.801 76.6963 205.519C76.5335 206.642 75.8689 207.756 74.6523 208.237C73.3428 208.756 71.0691 209.344 67.5 209.344C67.2099 209.344 66.9317 209.229 66.7266 209.023C66.5215 208.818 66.4062 208.54 66.4062 208.25C66.4062 207.96 66.5215 207.682 66.7266 207.477C66.9317 207.271 67.2099 207.156 67.5 207.156C70.8263 207.156 72.8222 206.609 73.8468 206.204C74.1802 206.072 74.4549 205.733 74.5311 205.205C74.5407 205.139 74.5502 205.071 74.5595 205.002C73.9444 205.139 73.2339 205.271 72.5273 205.345C71.5989 205.442 70.6938 204.883 70.5244 203.875C70.4256 203.288 70.3438 202.443 70.3438 201.25C70.3438 200.057 70.4256 199.212 70.5244 198.625C70.6938 197.617 71.5989 197.058 72.5273 197.155C72.9001 197.194 73.2741 197.249 73.6342 197.313C72.9219 194.686 70.4676 192.719 67.5 192.719C64.5324 192.719 62.0785 194.686 61.3658 197.313C61.7328 197.248 62.102 197.195 62.4727 197.155C63.4011 197.058 64.3062 197.617 64.476 198.625C64.5744 199.212 64.6562 200.057 64.6562 201.25C64.6562 202.443 64.5744 203.288 64.476 203.875C64.3062 204.883 63.4011 205.442 62.4727 205.345C61.5111 205.244 60.5433 205.036 59.8171 204.855C58.7671 204.592 58.0938 203.64 58.0938 202.601V198.887Z"
                        fill="currentColor"
                      />
                    </svg>
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
