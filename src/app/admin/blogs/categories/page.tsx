"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./categories.module.scss"

export default function CategoriesPage() {
    const [terms, setTerms] = useState<any[]>([])
    const [allCategories, setAllCategories] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [searchInput, setSearchInput] = useState("")
    const [page, setPage] = useState(1)
    const [pageInput, setPageInput] = useState("1")
    const [totalItems, setTotalItems] = useState(0)
    const [sortBy, setSortBy] = useState("name")
    const [sortOrder, setSortOrder] = useState("asc")

    // Form states
    const [editId, setEditId] = useState<number | null>(null)
    const [name, setName] = useState("")
    const [slug, setSlug] = useState("")
    const [parent, setParent] = useState(0)
    const [description, setDescription] = useState("")

    const itemsPerPage = 20

    const fetchTerms = async () => {
        setLoading(true)
        try {
            const res = await fetch(`/api/admin/terms?taxonomy=category&page=${page}&limit=${itemsPerPage}&search=${search}&sortBy=${sortBy}&sortOrder=${sortOrder}`)
            const data = await res.json()
            if (data.success) {
                setTerms(data.data)
                setAllCategories(data.allTerms)
                setTotalItems(data.totalItems)
            }
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchTerms()
    }, [page, search, sortBy, sortOrder])

    useEffect(() => {
        setPageInput(page.toString())
    }, [page])

    const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPageInput(e.target.value)
    }

    const handlePageInputSubmit = () => {
        let p = parseInt(pageInput, 10)
        if (isNaN(p) || p < 1) p = 1
        const totalPages = Math.ceil(totalItems / itemsPerPage)
        if (p > totalPages && totalPages > 0) p = totalPages
        setPage(p)
        setPageInput(p.toString())
    }

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setSearch(searchInput)
            setPage(1)
        }
    }

    const handleSort = (column: string) => {
        if (sortBy === column) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
        } else {
            setSortBy(column)
            setSortOrder("asc")
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const payload = { name, slug, description, parent, taxonomy: "category" }

        try {
            if (editId) {
                const res = await fetch(`/api/admin/terms/${editId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                })
                const data = await res.json()
                if (data.success) {
                    resetForm()
                    fetchTerms()
                }
            } else {
                const res = await fetch("/api/admin/terms", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                })
                const data = await res.json()
                if (data.success) {
                    resetForm()
                    fetchTerms()
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    const resetForm = () => {
        setEditId(null)
        setName("")
        setSlug("")
        setParent(0)
        setDescription("")
    }

    const handleEdit = (term: any) => {
        setEditId(term.term_id)
        setName(term.name)
        setSlug(term.slug)
        setParent(term.parent || 0)
        setDescription(term.description || "")
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this category?")) {
            try {
                const res = await fetch(`/api/admin/terms/${id}`, { method: "DELETE" })
                const data = await res.json()
                if (data.success) {
                    fetchTerms()
                }
            } catch (error) {
                console.error(error)
            }
        }
    }

    // Build hierarchy for table
    const buildHierarchy = (items: any[]) => {
        const parents = items.filter(i => !i.parent || i.parent === 0)
        const children = items.filter(i => i.parent && i.parent !== 0)

        let result: any[] = []

        // Only do hierarchy if no search or sorting by name
        if (search || sortBy !== 'name') {
            return items
        }

        parents.forEach(p => {
            result.push(p)
            children.filter(c => c.parent === p.term_id).forEach(c => {
                result.push({ ...c, isChild: true })
            })
        })

        // Add any orphans
        const addedIds = new Set(result.map(r => r.term_id))
        items.forEach(i => {
            if (!addedIds.has(i.term_id)) {
                result.push(i)
            }
        })

        return result
    }

    const displayTerms = buildHierarchy(terms)
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    return (
        <div className={styles.container}>
            <h1>Categories</h1>
            <div className={styles.layout}>
                <div className={styles.leftColumn}>
                    <h2>{editId ? "Edit Category" : "Add New Category"}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label>Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                    if (!editId && !slug) {
                                        setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''))
                                    }
                                }}
                                required
                            />
                            <div className={styles.description}>The name is how it appears on your site.</div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Slug</label>
                            <input
                                type="text"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                required
                            />
                            <div className={styles.description}>The "slug" is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.</div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Parent Category</label>
                            <select value={parent} onChange={(e) => setParent(Number(e.target.value))}>
                                <option value={0}>None</option>
                                {allCategories.map(c => (
                                    <option key={c.term_id} value={c.term_id}>{c.name}</option>
                                ))}
                            </select>
                            <div className={styles.description}>Categories, unlike tags, can have a hierarchy. You might have a Jazz category, and under that have children categories for Bebop and Big Band. Totally optional.</div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                            <div className={styles.description}>The description is not prominent by default; however, some themes may show it.</div>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            {editId ? "Update Category" : "Add New Category"}
                        </button>
                        {editId && (
                            <button type="button" className={styles.submitBtn} style={{ marginLeft: 10, background: '#f6f7f7', color: '#2271b1', borderColor: '#2271b1' }} onClick={resetForm}>
                                Cancel Edit
                            </button>
                        )}
                    </form>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.filterBar}>
                        <div className={styles.searchBox}>
                            <input
                                type="text"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                onKeyDown={handleSearch}
                                placeholder="Search Categories..."
                            />
                        </div>
                        <div className={styles.pagination}>
                            <span className={styles.itemCount}>{totalItems} items</span>
                            {totalPages > 0 && (
                                <div className={styles.paginationControls}>
                                    <button onClick={() => setPage(1)} disabled={page === 1}>«</button>
                                    <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>‹</button>
                                    <span className={styles.pageInputWrap}>
                                        <input
                                            type="text"
                                            value={pageInput}
                                            onChange={handlePageInputChange}
                                            onBlur={handlePageInputSubmit}
                                            onKeyDown={(e) => e.key === 'Enter' && handlePageInputSubmit()}
                                        /> of {totalPages}
                                    </span>
                                    <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>›</button>
                                    <button onClick={() => setPage(totalPages)} disabled={page === totalPages}>»</button>
                                </div>
                            )}
                        </div>
                    </div>

                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th onClick={() => handleSort("name")}>
                                    Name {sortBy === "name" && <i className={`bi bi-caret-${sortOrder === 'asc' ? 'up' : 'down'}-fill`}></i>}
                                </th>
                                <th onClick={() => handleSort("description")}>
                                    Description {sortBy === "description" && <i className={`bi bi-caret-${sortOrder === 'asc' ? 'up' : 'down'}-fill`}></i>}
                                </th>
                                <th onClick={() => handleSort("slug")}>
                                    Slug {sortBy === "slug" && <i className={`bi bi-caret-${sortOrder === 'asc' ? 'up' : 'down'}-fill`}></i>}
                                </th>
                                <th onClick={() => handleSort("count")}>
                                    Count {sortBy === "count" && <i className={`bi bi-caret-${sortOrder === 'asc' ? 'up' : 'down'}-fill`}></i>}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={4} style={{ textAlign: 'center', padding: '20px' }}>Loading...</td>
                                </tr>
                            ) : displayTerms.length === 0 ? (
                                <tr>
                                    <td colSpan={4} style={{ textAlign: 'center', padding: '20px' }}>No categories found.</td>
                                </tr>
                            ) : (
                                displayTerms.map(term => (
                                    <tr key={term.term_id}>
                                        <td>
                                            <strong>{term.isChild ? "— " : ""}{term.name}</strong>
                                            <div className={styles.rowActions}>
                                                <a onClick={() => handleEdit(term)}>Edit</a> |
                                                <a className={styles.deleteAction} onClick={() => handleDelete(term.term_id)}>Delete</a> |
                                                <Link href={`/category/${term.slug}`} target="_blank">View</Link>
                                            </div>
                                        </td>
                                        <td>{term.description || "—"}</td>
                                        <td>{term.slug}</td>
                                        <td>{term.count || 0}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th onClick={() => handleSort("name")}>Name</th>
                                <th onClick={() => handleSort("description")}>Description</th>
                                <th onClick={() => handleSort("slug")}>Slug</th>
                                <th onClick={() => handleSort("count")}>Count</th>
                            </tr>
                        </tfoot>
                    </table>

                    <div className={styles.filterBar} style={{ marginTop: 10, justifyContent: 'flex-end' }}>
                        <div className={styles.pagination}>
                            <span className={styles.itemCount}>{totalItems} items</span>
                            {totalPages > 0 && (
                                <div className={styles.paginationControls}>
                                    <button onClick={() => setPage(1)} disabled={page === 1}>«</button>
                                    <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>‹</button>
                                    <span className={styles.pageInputWrap}>
                                        <input
                                            type="text"
                                            value={pageInput}
                                            onChange={handlePageInputChange}
                                            onBlur={handlePageInputSubmit}
                                            onKeyDown={(e) => e.key === 'Enter' && handlePageInputSubmit()}
                                        /> of {totalPages}
                                    </span>
                                    <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>›</button>
                                    <button onClick={() => setPage(totalPages)} disabled={page === totalPages}>»</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
