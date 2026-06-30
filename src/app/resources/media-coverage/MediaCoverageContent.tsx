"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./media-coverage.module.scss"
import { BlogNav, DynamicHeading } from "@/src/components"
import CommonButton from "@/src/components/buttons"
import CtaSection from "@/src/components/sections/cta-section"
import { getImageUrl } from "@/src/utils/common"

import { useResource } from "@/src/hooks/useResource"

const MediaCoverageContent = () => {
  const {
    data,
    loading,
    pagination,
    fetchResources: fetchMedia,
  } = useResource("Media")

  const [categoriesData, setCategoriesData] = useState<any>(null)

  const fetchNavData = async () => {
    try {
      const res = await fetch("/api/resources/blogs/getCategory")
      const result = await res.json()
      setCategoriesData(result)
    } catch (error) {
      console.error("Nav data fetch error:", error)
    }
  }

  useEffect(() => {
    fetchMedia({ page: 1, limit: "6" })
    fetchNavData()
  }, [])

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchMedia({ page: newPage, limit: "6" })
      window.scrollTo({ top: 500, behavior: "smooth" })
    }
  }

  const extractHref = (html: string) => {
    if (!html) return "#"
    const match = html.match(/href="([^"]+)"/)
    return match ? match[1] : "#"
  }

  return (
    <div className={styles.media_coverage_page}>
      {/* Breadcrumb / Nav */}
      <div className="max-w-auto" style={{ paddingTop: "100px" }}>
        {/* {categoriesData && (
                    <BlogNav
                        data={{
                            ...categoriesData,
                            breadcrumbs: [
                                { label: "Resources", href: "/resources" },
                                { label: "Media Coverage" }
                            ]
                        }}
                        showCategories={false}
                        showDivider={false}
                    />
                )} */}
      </div>

      {/* Banner */}
      <section className={styles.media_banner}>
        <div className="max-w-auto">
          <div className={styles.banner_row}>
            <div className={styles.banner_content}>
              <DynamicHeading
                content={[
                  {
                    title:
                      "EnKash secures PPI license; aims to lead in Corporate Cards and Spend Management",
                    className: styles.banner_title,
                    color: "color-white f-7",
                  },
                ]}
              />
              <CommonButton
                title="Read More"
                width={"fit-content"}
                url={
                  "https://www.business-standard.com/content/press-releases-ani/enkash-secures-prestigious-ppi-license-strengthening-its-leadership-in-corporate-cards-and-spend-management-125040900400_1.html"
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.latest_news_section}>
        <div className="max-w-auto">
          <div className={styles.latest_news_wrapper}>
            <h2 className={styles.section_title}>The Latest News</h2>

            <div className={styles.news_grid}>
              {loading
                ? // Shimmer / Loading State
                  [...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={styles.news_card}
                      style={{
                        height: "450px",
                        backgroundColor: "#eee",
                        opacity: 0.5,
                      }}
                    ></div>
                  ))
                : data.map((item) => (
                    <div key={item.id} className={styles.news_card}>
                      <div className={styles.card_image}>
                        <Image
                          src={getImageUrl(item.media_coverage_image)}
                          alt={item.title}
                          width={400}
                          height={250}
                        />
                      </div>
                      <div className={styles.card_content}>
                        <Link
                          href={extractHref(item.media_coverage_media_link)}
                          target="_blank"
                        >
                          <div className={styles.title_wrapper}>
                            <h3>{item.media_coverage_heading || item.title}</h3>
                          </div>
                        </Link>
                        <div className={styles.card_footer}>
                          <span className={styles.date}>
                            {item.media_coverage_date}
                          </span>
                          <CommonButton
                            title="Read More"
                            theme="blue"
                            className={styles.read_more_btn}
                            url={extractHref(item.media_coverage_media_link)}
                            arrowType="ios"
                            arrow
                          />
                        </div>
                      </div>
                    </div>
                  ))}
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  className={`${styles.page_btn} ${pagination.page === 1 ? styles.disabled : ""}`}
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1}
                >
                  &lt;
                </button>

                {[...Array(pagination.totalPages)].map((_, i) => {
                  const p = i + 1
                  // Basic pagination logic to show current, first, last, and neighbors
                  if (
                    p === 1 ||
                    p === pagination.totalPages ||
                    (p >= pagination.page - 1 && p <= pagination.page + 1)
                  ) {
                    return (
                      <button
                        key={p}
                        className={`${styles.page_btn} ${pagination.page === p ? styles.active : ""}`}
                        onClick={() => handlePageChange(p)}
                      >
                        {p}
                      </button>
                    )
                  } else if (
                    p === pagination.page - 2 ||
                    p === pagination.page + 2
                  ) {
                    return (
                      <span
                        key={p}
                        className={`${styles.page_btn} styles.dots`}
                      >
                        ...
                      </span>
                    )
                  }
                  return null
                })}

                <button
                  className={`${styles.page_btn} ${pagination.page === pagination.totalPages ? styles.disabled : ""}`}
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page === pagination.totalPages}
                >
                  &gt;
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <CtaSection
        title={"Find the Right Solution for Your Use Case"}
        buttonText={"Talk to Us"}
        background="linear-gradient(180deg, #2e2e2e 0%, #010205 100%)"
      />
    </div>
  )
}

export default MediaCoverageContent
