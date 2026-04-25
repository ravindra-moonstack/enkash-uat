"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import styles from "./page.module.scss"
import { tabs, staticCaseStudies } from "./data"
import { FiSearch, FiX } from "react-icons/fi"
import { DynamicHeading } from "@/src/components"
import ResourceCard, { ShimmerCard } from "./ResourceCard"
import { Reso_Icon } from "./img"


const ResourcesPage = () => {
    const [activeTab, setActiveTab] = useState("Case Studies")
    const [searchQuery, setSearchQuery] = useState("")
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState({ page: 1, totalPages: 1 })
    const [selectedVideo, setSelectedVideo] = useState<any | null>(null)

    const cache = useRef<{ [key: string]: { data: any[], pagination: any } }>({
        "Videos": { data: [], pagination: { page: 1, totalPages: 1 } },
        "Blogs": { data: [], pagination: { page: 1, totalPages: 1 } }
    })

    const fetchResources = async (tab: string, search: string, page: number) => {
        if (!search && cache.current[tab]?.data.length > 0 && page === 1) {
            setData(cache.current[tab].data)
            setPagination(cache.current[tab].pagination)
            setLoading(false)
            return
        }

        setLoading(true)
        try {
            const apiPath = tab === "Videos" ? "/api/resources/videos" : "/api/resources/blogs"
            const query = new URLSearchParams({
                page: page.toString(),
                limit: "9"
            })
            if (search.length > 0) {
                query.set("search", search)
            }
            const res = await fetch(`${apiPath}?${query.toString()}`)
            const result = await res.json()

            if (result.data) {
                setData(result.data)
                const newPagination = {
                    page: result.pagination.page,
                    totalPages: result.pagination.totalPages
                }
                setPagination(newPagination)

                if (!search && page === 1) {
                    cache.current[tab] = { data: result.data, pagination: newPagination }
                }
            }
        } catch (error) {
            console.error("Fetch error:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (activeTab === "Case Studies") {
            const filtered = searchQuery
                ? staticCaseStudies.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
                : staticCaseStudies

            setData(filtered)
            setLoading(false)
            setPagination({ page: 1, totalPages: 1 })
            return
        }

        fetchResources(activeTab, searchQuery, 1)
    }, [activeTab])

    const handleSearch = () => {
        if (activeTab === "Case Studies") {
            const filtered = searchQuery
                ? staticCaseStudies.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
                : staticCaseStudies
            setData(filtered)
        } else {
            fetchResources(activeTab, searchQuery, 1)
        }
    }

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            fetchResources(activeTab, searchQuery, newPage)
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
                                style={{ objectFit: 'contain' }}
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none'
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
                                    if (e.key === 'Enter') {
                                        handleSearch()
                                    }
                                }}
                                className={styles.searchInput}
                            />

                        </div>
                    </div>

                    <div className={styles.resource_grid}>
                        {loading ? (
                            [...Array(6)].map((_, i) => <ShimmerCard key={i} />)
                        ) : data.length > 0 ? (
                            data.map((post) => (
                                <ResourceCard
                                    key={post.id}
                                    post={post}
                                    onClick={activeTab === "Videos" ? handleCardClick : handleCardClick}
                                />
                            ))
                        ) : (
                            <div className="text-center py-5" style={{ gridColumn: '1 / -1' }}>
                                <p className="color-grey-500">No {activeTab.toLowerCase()} found matching your criteria.</p>
                            </div>
                        )}
                    </div>

                    <div className={styles.pagination}>
                        {pagination.totalPages > 1 && (
                            <>
                                <div
                                    className={`${styles.page_item} ${pagination.page === 1 ? styles.disabled : ""}`}
                                    onClick={() => handlePageChange(pagination.page - 1)}
                                    style={{ pointerEvents: pagination.page === 1 ? 'none' : 'auto', opacity: pagination.page === 1 ? 0.5 : 1 }}
                                >
                                    &lt;
                                </div>

                                {[...Array(pagination.totalPages)].map((_, i) => {
                                    const p = i + 1
                                    if (p === 1 || p === pagination.totalPages || (p >= pagination.page - 1 && p <= pagination.page + 1)) {
                                        return (
                                            <div
                                                key={p}
                                                className={`${styles.page_item} ${pagination.page === p ? styles.active : ""}`}
                                                onClick={() => handlePageChange(p)}
                                            >
                                                {p}
                                            </div>
                                        )
                                    } else if (p === pagination.page - 2 || p === pagination.page + 2) {
                                        return <div key={p} className={styles.page_item} style={{ pointerEvents: 'none' }}>...</div>
                                    }
                                    return null
                                })}

                                <div
                                    className={`${styles.page_item} ${pagination.page === pagination.totalPages ? styles.disabled : ""}`}
                                    onClick={() => handlePageChange(pagination.page + 1)}
                                    style={{ pointerEvents: pagination.page === pagination.totalPages ? 'none' : 'auto', opacity: pagination.page === pagination.totalPages ? 0.5 : 1 }}
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
                    <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.close_btn} onClick={closeVideoModal}>
                            <FiX />
                        </div>
                        <div
                            // className={styles.video_wrapper}
                            dangerouslySetInnerHTML={{ __html: selectedVideo.external_embed_frame }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ResourcesPage
