"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import styles from "./page.module.scss"
import { tabs, staticCaseStudies } from "./data"
import { FiSearch, FiX } from "react-icons/fi"
import ResourceCard, { ShimmerCard } from "./ResourceCard"
import { Reso_Icon } from "./img"
import { useResource } from "@/src/hooks/useResource"
import DynamicHeading from "@/src/components/dynamic-heading"

const ResourcesContent = () => {
  const [activeTab, setActiveTab] = useState("Case Studies")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null)
  const [isClient, setIsClient] = useState(false)

  const blogsRes = useResource("Blogs")
  const videosRes = useResource("Videos")

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Determine current resource interface based on activeTab
  const currentRes = activeTab === "Videos" ? videosRes : blogsRes

  useEffect(() => {
    // Pre-fetch in background
    if (activeTab !== "Videos") videosRes.fetchInBg()
    if (activeTab !== "Blogs") blogsRes.fetchInBg()

    if (activeTab === "Case Studies") {
      const filtered = searchQuery
        ? staticCaseStudies.filter((p) =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : staticCaseStudies

      currentRes.setData(filtered)
      currentRes.setLoading(false)
      currentRes.setPagination({ page: 1, totalPages: 1 })
      return
    }

    currentRes.fetchResources({
      page: 1,
      limit: "9",
      search: searchQuery,
    })
  }, [activeTab])

  const handleSearch = () => {
    if (activeTab === "Case Studies") {
      const filtered = searchQuery
        ? staticCaseStudies.filter((p) =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : staticCaseStudies
      currentRes.setData(filtered)
    } else {
      currentRes.fetchResources({
        page: 1,
        limit: "9",
        search: searchQuery,
      })
    }
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= currentRes.pagination.totalPages) {
      currentRes.fetchResources({
        page: newPage,
        limit: "9",
        search: searchQuery,
        useCache: false,
      })
      window.scrollTo({ top: 100, behavior: "smooth" })
    }
  }

  const handleCardClick = (post: any) => {
    if (activeTab === "Videos") {
      setSelectedVideo(post)
    }
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  if (!isClient) return null

  return (
    <div className={styles.resources_container}>
      <div className={`${styles.content_wrapper} max-w-auto`}>
        <div className={`${styles.wrapper}`}>
          <div className={styles.header_section}>
            <div className={styles.library_icon}>
              <Image
                src={Reso_Icon}
                alt="Resource Library"
                className={`${styles.header_image}`}
                style={{ objectFit: "contain" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                }}
              />
            </div>
            <DynamicHeading
              content={[{ title: "Resource Library", color: "color-grey-200" }]}
              headingTag="h1"
              className={`${styles.heading} f-6`}
            />
          </div>
          <div className={styles.tabs_search_row}>
            <div className={styles.tabs}>
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  className={`${styles.tab} ${activeTab === tab.name ? styles.active : ""}`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                </div>
              ))}
            </div>

            <div className={styles.search_bar}>
              <div className={styles.searchIcon}>
                <FiSearch size={14} />
              </div>
              <input
                type="text"
                placeholder={`Search in ${activeTab.toLowerCase()}...`}
                value={searchQuery}
                onChange={(e: any) => setSearchQuery(e.target.value)}
                onKeyDown={(e: any) => {
                  if (e.key === "Enter") {
                    handleSearch()
                  }
                }}
                onBlur={handleSearch}
                className={styles.searchInput}
              />
            </div>
          </div>

          <div className={styles.resource_grid}>
            {currentRes.loading ? (
              [...Array(6)].map((_, i) => <ShimmerCard key={i} />)
            ) : currentRes.data.length > 0 ? (
              currentRes.data.map((post) => (
                <ResourceCard
                  key={post.id}
                  post={post}
                  onClick={activeTab === "Videos" ? handleCardClick : undefined}
                />
              ))
            ) : (
              <div
                className="text-center py-5"
                style={{ gridColumn: "1 / -1" }}
              >
                <p className="color-grey-500">
                  No {activeTab.toLowerCase()} found matching your criteria.
                </p>
              </div>
            )}
          </div>

          <div className={styles.pagination}>
            {currentRes.pagination.totalPages > 1 && (
              <>
                <div
                  className={`${styles.page_item} ${currentRes.pagination.page === 1 ? styles.disabled : ""}`}
                  onClick={() =>
                    handlePageChange(currentRes.pagination.page - 1)
                  }
                  style={{
                    pointerEvents:
                      currentRes.pagination.page === 1 ? "none" : "auto",
                    opacity: currentRes.pagination.page === 1 ? 0.5 : 1,
                  }}
                >
                  &lt;
                </div>

                {[...Array(currentRes.pagination.totalPages)].map((_, i) => {
                  const p = i + 1
                  if (
                    p === 1 ||
                    p === currentRes.pagination.totalPages ||
                    (p >= currentRes.pagination.page - 1 &&
                      p <= currentRes.pagination.page + 1)
                  ) {
                    return (
                      <div
                        key={p}
                        className={`${styles.page_item} ${currentRes.pagination.page === p ? styles.active : ""}`}
                        onClick={() => handlePageChange(p)}
                      >
                        {p}
                      </div>
                    )
                  } else if (
                    p === currentRes.pagination.page - 2 ||
                    p === currentRes.pagination.page + 2
                  ) {
                    return (
                      <div
                        key={p}
                        className={styles.page_item}
                        style={{ pointerEvents: "none" }}
                      >
                        ...
                      </div>
                    )
                  }
                  return null
                })}

                <div
                  className={`${styles.page_item} ${currentRes.pagination.page === currentRes.pagination.totalPages ? styles.disabled : ""}`}
                  onClick={() =>
                    handlePageChange(currentRes.pagination.page + 1)
                  }
                  style={{
                    pointerEvents:
                      currentRes.pagination.page ===
                      currentRes.pagination.totalPages
                        ? "none"
                        : "auto",
                    opacity:
                      currentRes.pagination.page ===
                      currentRes.pagination.totalPages
                        ? 0.5
                        : 1,
                  }}
                >
                  &gt;
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className={styles.video_modal_overlay} onClick={closeVideoModal}>
          <div
            className={styles.modal_content}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.close_btn} onClick={closeVideoModal}>
              <FiX />
            </div>
            <div
              // className={styles.video_wrapper}
              dangerouslySetInnerHTML={{
                __html: selectedVideo.external_embed_frame,
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ResourcesContent
