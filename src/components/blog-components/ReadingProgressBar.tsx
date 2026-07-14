"use client"
import React, { useState, useEffect } from "react"
import styles from "./singleBlog.module.scss"

const ReadingProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    document.body.classList.add("blog-body-active")

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

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
      document.body.classList.remove("blog-body-active")
    }
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

export default ReadingProgressBar
