"use client"

import React, { useState, useEffect } from "react"
import styles from "./videos.module.scss"
import { BlogNav, LogoSlider } from "@/src/components"
import VideoModal from "@/src/components/vedio-modal"
import VideoCard from "./VideoCard"
import { IoSearchOutline } from "react-icons/io5"
import CtaSection from "@/src/components/sections/cta-section"

import { useResource } from "@/src/hooks/useResource"

const VideosContent = ({ initialVideos, initialCategories }: { initialVideos?: any, initialCategories?: any }) => {
    const {
        data: videos,
        loading,
        pagination,
        fetchResources: fetchVideos
    } = useResource("Videos", initialVideos)

    const [categories, setCategories] = useState<any[]>(initialCategories?.categories || [])
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [videoModal, setVideoModal] = useState({ open: false, url: "" })

    const fetchCategories = async () => {
        try {
            const res = await fetch("/api/resources/videos/getCategories")
            const data = await res.json()
            if (data.categories) {
                setCategories(data.categories)
            }
        } catch (error) {
            console.error("Video Category Fetch Error:", error)
        }
    }

    useEffect(() => {
        if (!initialCategories) fetchCategories()
        if (!initialVideos) fetchVideos({ page: 1, limit: "6" })
    }, [])

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value
        setSelectedCategory(val)
        fetchVideos({ page: 1, limit: "6", category: val, search: searchQuery })
    }

    const handleSearch = (e?: React.FormEvent) => {
        if (e) e.preventDefault()
        fetchVideos({ page: 1, limit: "6", category: selectedCategory, search: searchQuery })
    }

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            fetchVideos({ page: newPage, limit: "6", category: selectedCategory, search: searchQuery })
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }


    return (
        <div className={styles.video_page}>
            {/* Nav */}
            <div className={styles.nav_wrapper}>
                <div className="max-w-auto">
                    <BlogNav
                        data={{
                            breadcrumbs: [
                                { label: "Resources", href: "/resources" },
                                { label: "Videos" }
                            ]
                        }}
                        showCategories={false}
                        showDivider={false}
                    />
                </div>
            </div>
            <section className={styles.media_banner}>
                <div className="max-w-auto">
                    <div className={styles.banner_content}>
                        <h1>Watch. Learn. Build.</h1>
                        <div className={styles.banner_cta}>
                            <a href="https://www.enkash.com/contact-us" className={styles.talk_to_us_btn}>Talk to Us</a>
                        </div>
                    </div>
                </div>
                <div className={styles.logo_slider_wrapper}>
                    <LogoSlider />
                </div>
            </section>

            <section className={styles.filter_section}>
                <div className="max-w-auto">
                    <form className={styles.filter_bar} onSubmit={handleSearch}>
                        <div className={styles.select_wrapper}>
                            <select value={selectedCategory} onChange={handleCategoryChange}>
                                <option value="all">All Categories</option>
                                {categories.map((cat: any) => (
                                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                                ))}
                            </select>
                            <div className={styles.custom_arrow}></div>
                        </div>
                        <div className={styles.search_wrapper}>
                            <IoSearchOutline className={styles.search_icon} />
                            <input
                                type="text"
                                placeholder="Search videos..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onBlur={() => handleSearch()}
                            />
                        </div>
                    </form>
                </div>
            </section>

            {/* Video Grid Section */}
            <section className={styles.video_grid_section}>
                <div className="max-w-auto">
                    {videos.length === 0 && !loading ? (
                        <div className="text-center py-5">
                            <h3>No videos found matching your criteria.</h3>
                        </div>
                    ) : (
                        <div className={styles.video_grid}>
                            {loading ? (
                                [...Array(6)].map((_, i) => (
                                    <div key={i} className={`${styles.video_card} ${styles.skeleton}`} style={{ height: '380px', border: 'none' }}></div>
                                ))
                            ) : (
                                videos.map((video: any) => (
                                    <VideoCard
                                        key={video.id}
                                        data={{
                                            ...video,
                                            category_name: categories.find(c => String(c.id) === String(video.category))?.label
                                        }}
                                        onPlay={(url) => setVideoModal({ open: true, url })}
                                    />
                                ))
                            )}
                        </div>
                    )}

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
                                const p = i + 1;
                                if (p === 1 || p === pagination.totalPages || (p >= pagination.page - 1 && p <= pagination.page + 1)) {
                                    return (
                                        <button
                                            key={p}
                                            className={`${styles.page_btn} ${pagination.page === p ? styles.active : ""}`}
                                            onClick={() => handlePageChange(p)}
                                        >
                                            {p}
                                        </button>
                                    )
                                } else if (p === pagination.page - 2 || p === pagination.page + 2) {
                                    return <span key={p} className={styles.page_btn} style={{ cursor: 'default' }}>...</span>
                                }
                                return null;
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
            </section>

            <CtaSection
                title={"Find the Right Solution for Your Use Case"}
                buttonText={"Talk to Us"}
                background="linear-gradient(180deg, #2e2e2e 0%, #010205 100%)"
            />

            <VideoModal
                open={videoModal.open}
                videoUrl={videoModal.url}
                onClose={() => setVideoModal({ open: false, url: "" })}
            />
        </div>
    )
}

export default VideosContent
