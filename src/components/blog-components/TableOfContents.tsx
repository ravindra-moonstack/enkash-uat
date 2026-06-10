"use client"

import Link from "next/link"
import styles from "./singleBlog.module.scss"
import React, { useEffect, useState, useMemo } from "react"

interface HeadingNode {
  id: string
  text: string
  tagName: string
  children: HeadingNode[]
}

const TableOfContents = ({ headings }: { headings: any[] }) => {
  const [activeId, setActiveId] = useState<string>("")
  const [expandedState, setExpandedState] = useState<Record<string, boolean>>(
    {}
  )

  useEffect(() => {
    setExpandedState({})
  }, [headings])

  useEffect(() => {
    if (headings.length === 0) return

    let ticking = false

    const handleScrollActive = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const threshold = 170
          let currentActiveId = ""

          for (const heading of headings) {
            const element = document.getElementById(heading.id)
            if (element) {
              const rect = element.getBoundingClientRect()
              if (rect.top <= threshold) {
                currentActiveId = heading.id
              } else {
                break
              }
            }
          }

          if (currentActiveId) {
            setActiveId(currentActiveId)
          } else if (headings.length > 0) {
            setActiveId(headings[0].id)
          }
          ticking = false
        })
        ticking = true
      }
    }

    // Run initially
    handleScrollActive()

    window.addEventListener("scroll", handleScrollActive, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScrollActive)
    }
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

  const headingTree = useMemo(() => {
    const tree: HeadingNode[] = []
    let currentH2: HeadingNode | null = null

    headings.forEach((h) => {
      const node: HeadingNode = {
        id: h.id,
        text: h.text,
        tagName: h.tagName,
        children: [],
      }

      if (h.tagName === "h2") {
        currentH2 = node
        tree.push(node)
      } else if (h.tagName === "h3") {
        if (currentH2) {
          currentH2.children.push(node)
        } else {
          tree.push(node)
        }
      }
    })
    return tree
  }, [headings])

  return (
    <div className={styles.toc}>
      <h3 className={styles.tocTitle}>Table of Contents</h3>

      <ul className={styles.tocList}>
        {headingTree.map((item, index) => {
          const isParentActive = activeId === item.id
          const hasActiveChild = item.children.some(
            (child) => child.id === activeId
          )
          const defaultExpanded = isParentActive || hasActiveChild
          const isExpanded =
            expandedState[item.id] !== undefined
              ? expandedState[item.id]
              : defaultExpanded

          return (
            <li key={index} className={styles.tocItem}>
              <div
                className={`${styles.tocHeaderRow} ${isParentActive ? styles.active : ""}`}
                onClick={() => {
                  if (item.children.length > 0) {
                    setExpandedState((prev) => ({
                      ...prev,
                      [item.id]: !isExpanded,
                    }))
                  }
                }}
              >
                <Link
                  href={`#${item.id}`}
                  className={styles.tocLink}
                  onClick={(e) => handleScroll(e, item.id)}
                >
                  {item.text}
                </Link>
                {item.children.length > 0 && (
                  <span
                    className={`${styles.tocCaret} ${isExpanded ? styles.expanded : ""}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </span>
                )}
              </div>

              {item.children.length > 0 && isExpanded && (
                <ul className={styles.tocSubList}>
                  {item.children.map((child, cIdx) => (
                    <li
                      key={cIdx}
                      className={`${styles.tocSubItem} ${activeId === child.id ? styles.subActive : ""}`}
                    >
                      <Link
                        href={`#${child.id}`}
                        className={styles.tocSubLink}
                        onClick={(e) => handleScroll(e, child.id)}
                      >
                        {child.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TableOfContents
