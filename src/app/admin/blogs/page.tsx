"use client"

import React from "react"
import Link from "next/link"
import styles from "./blogs.module.scss"
import { useBlogs } from "./useBlogs"
import ConfirmationModal from "./ConfirmationModal"

export default function BlogsPage() {
    const {
        posts,
        loading,
        statusFilter, setStatusFilter,
        search, setSearch,
        dateFilter, setDateFilter,
        categoryFilter, setCategoryFilter,
        metaOptions,
        pageInput,
        page, setPage,
        sortField, setSortField,
        sortOrder, setSortOrder,
        totalPages,
        totalItems,
        counts,
        fetchPosts,
        handleSearch,
        handlePageInputChange,
        handlePageInputSubmit,
        handleTrash,
        formatDate,
        showConfirm,
        setShowConfirm,
        confirmConfig
    } = useBlogs()

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Posts</h1>
                <Link href="/admin/blogs/add" className={styles.addBtn}>
                    Add Post
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
                    <button onClick={handleSearch}>Search Posts</button>
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
                    <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                        <option value="all">All Categories</option>
                        {metaOptions.categories.map((c: any) => (
                            <option key={c.slug} value={c.slug}>{c.name}</option>
                        ))}
                    </select>
                    <button onClick={() => { setPage(1); fetchPosts() }}>Apply</button>
                </div>
                <div className={styles.filterRight}>
                    <span className={styles.itemCount}>{totalItems} items</span>
                    {totalPages > 0 && (
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
                    )}
                </div>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.titleCol}>
                            Title
                            <button className={styles.sortBtn} onClick={() => {
                                setSortField("title")
                                setSortOrder(sortField === "title" && sortOrder === "asc" ? "desc" : "asc")
                            }}>
                                {sortField === "title" ? (sortOrder === "asc" ? "↑" : "↓") : "↕"}
                            </button>
                        </th>
                        <th>Author</th>
                        <th>Categories</th>
                        <th>Tags</th>
                        <th>
                            Date
                            <button className={styles.sortBtn} onClick={() => {
                                setSortField("date")
                                setSortOrder(sortField === "date" && sortOrder === "asc" ? "desc" : "asc")
                            }}>
                                {sortField === "date" ? (sortOrder === "asc" ? "↑" : "↓") : "↕"}
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr><td colSpan={6} style={{ textAlign: "center", padding: "20px" }}>Loading...</td></tr>
                    ) : posts.length === 0 ? (
                        <tr><td colSpan={6} style={{ textAlign: "center", padding: "20px" }}>No posts found.</td></tr>
                    ) : (
                        posts.map(post => (
                            <tr key={post.id}>
                                <td className={`${styles.titleCol} ${post.locked_by ? styles.itemLocked : ""}`}>
                                    {post.locked_by ? (
                                        <span className={styles.titleLinkDisabled}>
                                            {post.title || "(no title)"}
                                            <span className={styles.lockInfo}>
                                                <i className="bi bi-lock-fill"></i> Locked by: {post.locked_by}
                                            </span>
                                        </span>
                                    ) : (
                                        <Link href={`/admin/blogs/edit?id=${post.id}`} className={styles.titleLink}>
                                            {post.title || "(no title)"}
                                        </Link>
                                    )}
                                    {post.status === "draft" && " — Draft"}
                                    <div className={styles.rowActions}>
                                        {post.locked_by ? (
                                            <span className={styles.disabledAction}>Edit</span>
                                        ) : (
                                            <Link href={`/admin/blogs/edit?id=${post.id}`}>Edit</Link>
                                        )} |
                                        <a className={post.locked_by ? styles.disabledAction : styles.trash} onClick={() => !post.locked_by && handleTrash(post.id)}>Trash</a> |
                                        <Link href={`/resources/blog/${post.slug || post.id}`} target="_blank">{post.status === 'publish' ? 'View' : 'Preview'}</Link>
                                    </div>
                                </td>
                                <td>{post.author_name || post.author}</td>
                                <td>{post.categories || "Uncategorized"}</td>
                                <td>
                                    {post.tags ? post.tags.split(',').map((tid: string) => {
                                        const tag = (metaOptions as any).tags?.find((t: any) => t.term_id.toString() === tid.trim());
                                        return tag ? tag.name : tid;
                                    }).join(', ') : "—"}
                                </td>
                                <td>
                                    {post.status === "publish" ? "Publish" : "Last Modified"}<br />
                                    {formatDate(post.updated_at || post.created_at)}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>

            </table>

            <div className={styles.paginationBottom}>
                <span className={styles.itemCount}>{totalItems} items</span>
                {totalPages > 0 && (
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
                )}
            </div>

            {confirmConfig && (
                <ConfirmationModal
                    show={showConfirm}
                    onClose={() => setShowConfirm(false)}
                    onConfirm={confirmConfig.onConfirm}
                    title={confirmConfig.title}
                    message={confirmConfig.message}
                    type={confirmConfig.type}
                    confirmLabel="Confirm"
                />
            )}
        </div>
    )
}
