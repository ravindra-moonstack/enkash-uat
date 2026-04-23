"use client"

import Link from "next/link"
import styles from "./singleBlog.module.scss"
import React, { useEffect, useState } from "react"

const TableOfContents = ({ bodyData }: { bodyData: any }) => {
  const [headings, setHeadings] = useState<any[]>([])

  useEffect(() => {
    if (!bodyData?.content) return

    const parser = new DOMParser()
    const doc = parser.parseFromString(bodyData.content, "text/html")

    const h2Elements = Array.from(doc.querySelectorAll("h2"))

    const mapped = h2Elements.map((el: any) => {
      const text = el.textContent

      const id = text
        ?.replace(/\s+/g, "-")
        .toLowerCase()
        .replace(/[^\w-]/g, "")

      return {
        id,
        text,
      }
    })

    setHeadings(mapped)
  }, [bodyData])

  return (
    <div className={styles.toc}>
      <h3 className={styles.tocTitle}>Table of Contents</h3>

      <ul className={styles.tocList}>
        {headings.map((item, index) => (
          <li key={index} className={styles.tocItem}>
            <Link href={`#${item.id}`} className={styles.tocLink}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TableOfContents
