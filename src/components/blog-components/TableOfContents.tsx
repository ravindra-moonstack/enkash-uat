"use client"

import Link from "next/link"
import styles from "./singleBlog.module.scss"
import React, { useEffect, useState } from "react"

const TableOfContents = ({ headings }: { headings: any[] }) => {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    if (headings.length === 0) return

    // Small delay to ensure BlogContent has rendered the HTML with IDs
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          // Find all intersecting headers
          const intersectingHeader = entries.find(
            (entry) => entry.isIntersecting
          )
          if (intersectingHeader) {
            setActiveId(intersectingHeader.target.id)
          }
        },
        {
          // More inclusive margin for better response
          rootMargin: "-100px 0px -80% 0px",
          threshold: 0,
        }
      )

      headings.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          observer.observe(element)
        }
      })

      return () => {
        observer.disconnect()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [headings])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 150
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      window.history.pushState(null, "", `#${id}`)
      setActiveId(id)
    }
  }

  return (
    <div className={styles.toc}>
      <h3 className={styles.tocTitle}>Table of Contents</h3>

      <ul className={styles.tocList}>
        {headings.map((item, index) => (
          <li
            key={index}
            className={`${activeId === item.id ? styles.active : ""}`}
          >
            <Link
              href={`#${item.id}`}
              className={styles.tocLink}
              onClick={(e) => handleScroll(e, item.id)}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TableOfContents
