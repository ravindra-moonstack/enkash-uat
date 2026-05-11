"use client"

import React from "react"
import Link from "next/link"
import styles from "../blogs/blogs.module.scss"
import { useVideos } from "./useVideos"

export default function VideosPage() {
    const {
        videos,
        loading,
        statusFilter, setStatusFilter,
        search, setSearch,
        dateFilter, setDateFilter,
        metaOptions,
        pageInput,
        page, setPage,
        totalPages,
        totalItems,
        counts,
        fetchVideos,
        handleSearch,
        handlePageInputChange,
        handlePageInputSubmit,
        handleTrash,
        formatDate
    } = useVideos()

    const renderPagination = () => (
        totalPages > 0 && (
            <div className={styles.paginationControls}>
                <button disabled={page === 1} onClick={() => setPage(1)}>«</button>
                <button disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))}>‹</button>
                <span className={styles.pageInputWrap}>
                    <input
                        type="text"
                        value={pageInput}
                        onChange={handlePageInputChange}
                        onKeyDown={handlePageInputSubmit}
                        onBlur={handlePageInputSubmit}
                        className={styles.pageInput}
                    /> of {totalPages}
                </span>
                <button disabled={page === totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))}>›</button>
                <button disabled={page === totalPages} onClick={() => setPage(totalPages)}>»</button>
            </div>
        )
    )

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Videos</h1>
                <Link href="/admin/videos/add" className={styles.addBtn}>
                    Add New Video
                </Link>
            </div>

            <div className={styles.statusBar}>
                <div className={styles.statusLinks}>
                    <a className={statusFilter === "all" ? styles.active : ""} onClick={() => setStatusFilter("all")}>All</a> <span className={styles.count}>({counts.all})</span> <span className={styles.separator}>|</span>
                    <a className={statusFilter === "publish" ? styles.active : ""} onClick={() => setStatusFilter("publish")}>Published</a> <span className={styles.count}>({counts.published})</span> <span className={styles.separator}>|</span>
                    <a className={statusFilter === "draft" ? styles.active : ""} onClick={() => setStatusFilter("draft")}>Draft</a> <span className={styles.count}>({counts.draft})</span> <span className={styles.separator}>|</span>
                    <a className={statusFilter === "trash" ? styles.active : ""} onClick={() => setStatusFilter("trash")}>Trash</a> <span className={styles.count}>({counts.trash})</span>
                </div>
                <div className={styles.searchBox}>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    />
                    <button onClick={handleSearch}>Search Videos</button>
                </div>
            </div>

            <div className={styles.filterBar}>
                <div className={styles.filterLeft}>
                    <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
                        <option value="all">All dates</option>
                        {metaOptions.dates.map((d: any) => (
                            <option key={d.date_value} value={d.date_value}>{d.date_label}</option>
                        ))}
                    </select>
                    <button onClick={() => { setPage(1); fetchVideos() }}>Apply</button>
                </div>
                <div className={styles.filterRight}>
                    <span className={styles.itemCount}>{totalItems} items</span>
                    {renderPagination()}
                </div>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.titleCol}>Title</th>
                        <th>Author</th>
                        <th>Categories</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr><td colSpan={4} style={{ textAlign: "center", padding: "20px" }}>Loading...</td></tr>
                    ) : videos.length === 0 ? (
                        <tr><td colSpan={4} style={{ textAlign: "center", padding: "20px" }}>No videos found.</td></tr>
                    ) : (
                        videos.map(video => (
                            <tr key={video.id}>
                                <td className={styles.titleCol}>
                                    <Link href={`/admin/videos/add?id=${video.id}`} className={styles.titleLink}>
                                        {video.title || "(no title)"}
                                    </Link>
                                    {video.status === "draft" && " — Draft"}
                                    <div className={styles.rowActions}>
                                        <Link href={`/admin/videos/add?id=${video.id}`}>Edit</Link> |
                                        <a className={styles.trash} onClick={() => handleTrash(video.id)}>Trash</a>
                                    </div>
                                </td>
                                <td>{video.author_name || video.author}</td>
                                <td>{video.categories_names || "Uncategorized"}</td>
                                <td>
                                    {video.status === "publish" ? "Publish" : "Last Modified"}<br />
                                    {formatDate(video.updated_at || video.created_at)}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <div className={styles.paginationBottom}>
                <span className={styles.itemCount}>{totalItems} items</span>
                {renderPagination()}
            </div>
        </div>
    )
}
