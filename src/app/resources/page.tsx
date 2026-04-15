"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import styles from "./page.module.scss"
import { tabs, staticCaseStudies } from "./data"
import { FiSearch } from "react-icons/fi"
import { DynamicHeading } from "@/src/components"
import ResourceCard, { ShimmerCard } from "./ResourceCard"
import { Reso_Icon } from "./img"


const ResourcesPage = () => {
    const [activeTab, setActiveTab] = useState("Case Studies")
    const [searchQuery, setSearchQuery] = useState("")
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState({ page: 1, totalPages: 1 })

    // Caching references to avoid redundant API calls
    const cache = useRef<{ [key: string]: { data: any[], pagination: any } }>({
        "Videos": { data: [], pagination: { page: 1, totalPages: 1 } },
        "Blogs": { data: [], pagination: { page: 1, totalPages: 1 } }
    })

    const fetchResources = async (tab: string, search: string, page: number) => {
        // Use cache if not searching and data exists
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
            console.log(result)

            if (result.data) {
                setData(result.data)
                const newPagination = {
                    page: result.pagination.page,
                    totalPages: result.pagination.totalPages
                }
                setPagination(newPagination)

                // Store in cache if not searching
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

    // Effect for tab/search changes
    useEffect(() => {
        if (activeTab === "Case Studies") {
            // For Case Studies, we only use search to filter the static 2 cards if needed
            // But the requirement says "i only want to show 2 static/ hardcoded items"
            const filtered = searchQuery
                ? staticCaseStudies.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
                : staticCaseStudies

            setData(filtered)
            setLoading(false)
            setPagination({ page: 1, totalPages: 1 })
            return
        }

        const timer = setTimeout(() => {
            fetchResources(activeTab, searchQuery, 1)
        }, 300)

        return () => clearTimeout(timer)
    }, [activeTab, searchQuery])

    // Effect for pagination
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            fetchResources(activeTab, searchQuery, newPage)
        }
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
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.searchInput}
                            />

                        </div>
                    </div>

                    <div className={styles.resource_grid}>
                        {loading ? (
                            [...Array(6)].map((_, i) => <ShimmerCard key={i} />)
                        ) : data.length > 0 ? (
                            data.map((post) => (
                                <ResourceCard key={post.id} post={post} />
                            ))
                        ) : (
                            <div className="text-center py-5" style={{ gridColumn: '1 / -1' }}>
                                <p className="color-grey-500">No {activeTab.toLowerCase()} found matching your criteria.</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
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
        </div>
    )
}

export default ResourcesPage
