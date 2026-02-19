import React from "react"
import Link from "next/link"
import { CommanButton } from "@/src/components"
import styles from "./glossary-admin.module.scss"

interface GlossaryItem {
    id?: number
    word: string
    slug: string
    content: string
    showRelatedBlogs: boolean
    blogWord: string
}

interface GlossaryListViewProps {
    items: GlossaryItem[]
    isLoading: boolean
    currentPage: number
    totalPages: number
    totalItems: number
    itemsPerPage: number
    handleAddNew: () => void
    handleEdit: (item: GlossaryItem) => void
    handleDelete: (id: number) => void
    setCurrentPage: (page: number) => void
    searchTerm: string
    setSearchTerm: (term: string) => void
}

const GlossaryListView = ({
    items,
    isLoading,
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    handleAddNew,
    handleEdit,
    handleDelete,
    setCurrentPage,
    searchTerm,
    setSearchTerm,
}: GlossaryListViewProps) => {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.listHeader}>
                <div>
                    <h1 className={styles.title}>Glossary Items</h1>
                    <p className={styles.subtitle}>Manage your website glossary terms</p>
                </div>
                <div className={styles.searchContainer}>
                    <i className={`bi bi-search ${styles.searchIcon}`}></i>
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
                <CommanButton title="Add New Item" theme="blue" url={handleAddNew} />
            </div>



            <div className={styles.tableCard}>
                <div className={styles.tableContainer}>
                    {isLoading ? (
                        <div className={styles.emptyState}>
                            <div className={styles.spinner}></div>
                            <p>Loading items...</p>
                        </div>
                    ) : items.length === 0 ? (
                        <div className={styles.emptyState}>
                            <i className="bi bi-journal-text"></i>
                            <p>No glossary items found. Create your first one!</p>
                        </div>
                    ) : (
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Word</th>
                                    <th>Slug</th>
                                    <th>Related Blog</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td className={styles.wordCell}>{item.word}</td>
                                        <td><span className={styles.slugCell}>{item.slug}</span></td>
                                        <td>
                                            {item.showRelatedBlogs ? (
                                                <span className="badge bg-info">{item.blogWord || "Enabled"}</span>
                                            ) : (
                                                <span className="text-muted">Disabled</span>
                                            )}
                                        </td>
                                        <td className={styles.actionsCell}>
                                            <button
                                                className={`${styles.iconBtn} ${styles.edit}`}
                                                onClick={() => handleEdit(item)}
                                                title="Edit Item"
                                            >
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button
                                                className={`${styles.iconBtn} ${styles.delete}`}
                                                onClick={() => item.id && handleDelete(item.id)}
                                                title="Delete Item"
                                            >
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {items.length > 0 && !isLoading && (
                    <div className={styles.pagination}>
                        <div className={styles.paginationInfo}>
                            Showing {Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)} to{" "}
                            {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} items
                        </div>
                        <div className={styles.paginationControls}>
                            <button
                                className={styles.pageBtn}
                                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                <i className="bi bi-chevron-left"></i>
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    className={`${styles.pageBtn} ${currentPage === page ? styles.active : ""}`}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                className={styles.pageBtn}
                                onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            >
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default GlossaryListView
