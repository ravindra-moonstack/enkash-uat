"use client"

import React, { useState, useEffect, useRef } from "react"
import styles from "./glossary-admin.module.scss"
import { CommanButton } from "@/src/components"
import { nameToUrl } from "@/src/utils/stringUtils"

interface GlossaryItem {
    id?: number
    word: string
    slug: string
    content: string
    showRelatedBlogs: boolean
    blogWord: string
}

type ViewMode = "list" | "form"

const GlossaryAdmin = () => {
    // State management
    const [viewMode, setViewMode] = useState<ViewMode>("list")
    const [items, setItems] = useState<GlossaryItem[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [editingItem, setEditingItem] = useState<GlossaryItem | null>(null)

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [totalItems, setTotalItems] = useState(0)
    const [itemsPerPage] = useState(10)

    // Form fields
    const [word, setWord] = useState("")
    const [slug, setSlug] = useState("")
    const [isSlugModified, setIsSlugModified] = useState(false)
    const [content, setContent] = useState("")
    const [showRelatedBlogs, setShowRelatedBlogs] = useState(false)
    const [blogWord, setBlogWord] = useState("")
    const [showHtmlView, setShowHtmlView] = useState(false)
    const [htmlContent, setHtmlContent] = useState("")
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

    const editorRef = useRef<HTMLDivElement>(null)
    const quillInstance = useRef<any>(null)

    // Fetch items on mount
    useEffect(() => {
        fetchItems(currentPage)
    }, [currentPage])

    const fetchItems = async (page: number = 1) => {
        setIsLoading(true)
        try {
            const response = await fetch(`/api/admin/glossary?page=${page}&limit=${itemsPerPage}`)
            if (response.status === 401) {
                window.location.href = "/admin"
                return
            }
            const data = await response.json()
            if (data.success) {
                setItems(data.data)
                setTotalPages(data.pagination.totalPages)
                setTotalItems(data.pagination.totalItems)
            }
        } catch (error) {
            console.error("Failed to fetch items:", error)
        } finally {
            setIsLoading(false)
        }
    }

    // Quill Initialization
    useEffect(() => {
        if (viewMode === "form" && typeof window !== "undefined" && editorRef.current && !quillInstance.current) {
            import("quill").then((Quill) => {
                const QuillNamespace = Quill.default || Quill

                const showHtmlHandler = function (this: any) {
                    toggleHtmlView()
                }

                //@ts-ignore
                const quill = new QuillNamespace(editorRef.current, {
                    modules: {
                        toolbar: {
                            container: [
                                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                [{ size: ["small", false, "large", "huge"] }],
                                [{ color: [] }, { background: [] }],
                                ["bold", "italic", "underline", "strike"],
                                [{ list: "ordered" }, { list: "bullet" }],
                                [{ indent: "-1" }, { indent: "+1" }],
                                [{ align: [] }],
                                ["blockquote", "code-block"],
                                [{ script: "sub" }, { script: "super" }],
                                ["link", "image"],
                                ["clean"],
                                ["showHtml"],
                            ],
                            handlers: {
                                showHtml: showHtmlHandler,
                            },
                        },
                    },
                    theme: "snow",
                    placeholder: "Write the definition or content here...",
                })

                quillInstance.current = quill

                // Set initial content if editing
                if (content) {
                    quill.root.innerHTML = content
                }

                quill.on("text-change", () => {
                    const html = quill.root.innerHTML
                    setContent(html)
                })
            })
        } else if (viewMode === "list") {
            quillInstance.current = null
        }
    }, [viewMode])

    const toggleHtmlView = () => {
        if (!showHtmlView) {
            setHtmlContent(content)
        } else {
            if (quillInstance.current) {
                quillInstance.current.root.innerHTML = htmlContent
                setContent(htmlContent)
            }
        }
        setShowHtmlView(!showHtmlView)
    }

    const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setHtmlContent(e.target.value)
    }

    const applyHtmlChanges = () => {
        if (quillInstance.current) {
            quillInstance.current.root.innerHTML = htmlContent
            setContent(htmlContent)
        }
        setShowHtmlView(false)
    }

    const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value)
    }

    useEffect(() => {
        if (isSlugModified || editingItem) return

        const handler = setTimeout(() => {
            setSlug(nameToUrl(word))
        }, 300)

        return () => clearTimeout(handler)
    }, [word, isSlugModified, editingItem])

    const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
        // Prevent multiple consecutive hyphens
        val = val.replace(/-{2,}/g, '-')
        // Prevent starting with a hyphen
        val = val.replace(/^-+/, '')
        setSlug(val)
        setIsSlugModified(val !== "")
    }

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault()
        setFieldErrors({})
        setIsSubmitting(true)

        // Trim word and blogWord, and finalize the slug (removes leading/trailing dashes)
        const finalWord = word.trim()
        const finalSlug = nameToUrl(slug) // Ensures no leading/trailing dashes and standardizes format
        const finalBlogWord = blogWord.trim()

        const errors: Record<string, string> = {}
        if (!finalWord) errors.word = "Word is required"
        if (!finalSlug) errors.slug = "Slug cannot be empty after formatting."
        if (!content || content.trim() === "" || content === "<p><br></p>") errors.content = "Content is required"

        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors)
            setIsSubmitting(false)
            return
        }

        const glossaryData: GlossaryItem = {
            word: finalWord,
            slug: finalSlug,
            content,
            showRelatedBlogs,
            blogWord: showRelatedBlogs ? finalBlogWord : "",
        }

        try {
            const url = editingItem ? `/api/admin/glossary/${editingItem.id}` : '/api/admin/glossary'
            const method = editingItem ? 'PUT' : 'POST'

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(glossaryData),
            })

            if (response.status === 401) {
                window.location.href = "/admin"
                return
            }

            const data = await response.json()

            if (data.success) {
                handleReset()
                setViewMode("list")
                if (currentPage === 1) {
                    fetchItems(1)
                } else {
                    setCurrentPage(1) // This will trigger fetchItems through useEffect
                }
            } else {
                if (data.message && data.message.toLowerCase().includes('slug')) {
                    setFieldErrors({ slug: data.message })
                } else if (data.message && data.message.toLowerCase().includes('word')) {
                    setFieldErrors({ word: data.message })
                } else {
                    setFieldErrors({ general: data.message || "Operation failed" })
                }
            }
        } catch (error) {
            setFieldErrors({ general: "Something went wrong. Please try again." })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleEdit = (item: GlossaryItem) => {
        setEditingItem(item)
        setWord(item.word)
        setSlug(item.slug)
        setIsSlugModified(true)
        setContent(item.content)
        setShowRelatedBlogs(item.showRelatedBlogs)
        setBlogWord(item.blogWord || "")
        setViewMode("form")
    }

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this item?")) return

        try {
            const response = await fetch(`/api/admin/glossary/${id}`, {
                method: 'DELETE'
            })

            if (response.status === 401) {
                window.location.href = "/admin"
                return
            }

            const data = await response.json()
            if (data.success) {
                // If we delete the last item on a page (other than first page), go back one page
                if (items.length === 1 && currentPage > 1) {
                    setCurrentPage(prev => prev - 1)
                } else {
                    fetchItems(currentPage)
                }
            } else {
                alert(data.message || "Delete failed")
            }
        } catch (error) {
            alert("Internal server error")
        }
    }

    const handleAddNew = () => {
        handleReset()
        setEditingItem(null)
        setViewMode("form")
    }

    const handleReset = () => {
        setWord("")
        setSlug("")
        setIsSlugModified(false)
        setContent("")
        setHtmlContent("")
        setShowRelatedBlogs(false)
        setShowHtmlView(false)
        setBlogWord("")
        setFieldErrors({})
        setEditingItem(null)

        if (quillInstance.current) {
            quillInstance.current.setText("")
        }
    }

    const handleCancel = () => {
        handleReset()
        setViewMode("list")
    }

    const renderListView = () => (
        <div className={styles.contentWrapper}>
            <div className={styles.listHeader}>
                <div>
                    <h1 className={styles.title}>Glossary Items</h1>
                    <p className={styles.subtitle}>Manage your website glossary terms</p>
                </div>
                <CommanButton title="Add New Item" theme="blue" url={handleAddNew} />
            </div>

            <div className={styles.tableCard}>
                <div className={styles.tableContainer}>
                    {isLoading ? (
                        <div className={styles.emptyState}>Loading items...</div>
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
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
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
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
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

    const renderFormView = () => (
        <div className={styles.contentWrapper}>
            <div className={styles.header}>
                <div className={styles.headerTop}>
                    <button className={styles.backBtn} onClick={handleCancel} title="Go Back">
                        <i className="bi bi-arrow-left"></i>
                    </button>
                    <h1 className={styles.title}>{editingItem ? "Edit Glossary Item" : "Create New Glossary Item"}</h1>
                </div>
                <p className={styles.subtitle}>
                    {editingItem ? `Updating details for "${editingItem.word}"` : "Add a new term and definition to the glossary"}
                </p>
            </div>

            {fieldErrors.general && (
                <div className="alert alert-danger mb-4" role="alert">
                    {fieldErrors.general}
                </div>
            )}

            <form onSubmit={handleSubmit} className={styles.glossaryForm}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="word">
                        Word <span className={styles.required}>*</span>
                    </label>
                    <input
                        id="word"
                        type="text"
                        className={`${styles.input} ${fieldErrors.word ? styles.inputError : ""}`}
                        placeholder="Enter the word or term"
                        value={word}
                        onChange={handleWordChange}
                    />
                    {fieldErrors.word && <div className={styles.errorText}>{fieldErrors.word}</div>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="slug">
                        Slug <span className={styles.required}>*</span>
                    </label>
                    <input
                        id="slug"
                        type="text"
                        className={`${styles.input} ${fieldErrors.slug ? styles.inputError : ""}`}
                        placeholder="url-friendly-slug"
                        value={slug}
                        onChange={handleSlugChange}
                    />
                    {fieldErrors.slug && <div className={styles.errorText}>{fieldErrors.slug}</div>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="content">
                        Definition/Content <span className={styles.required}>*</span>
                    </label>

                    {!showHtmlView ? (
                        <div className={`${styles.editorWrapper} ${fieldErrors.content ? styles.inputError : ""}`}>
                            <div ref={editorRef} className={styles.quillEditor} />
                        </div>
                    ) : (
                        <div className={`${styles.htmlEditorWrapper} ${fieldErrors.content ? styles.inputError : ""}`}>
                            <div className={styles.htmlEditorHeader}>
                                <span className={styles.htmlEditorTitle}>HTML Editor</span>
                                <button
                                    type="button"
                                    onClick={applyHtmlChanges}
                                    className={styles.applyHtmlButton}
                                >
                                    Apply Changes
                                </button>
                            </div>
                            <textarea
                                className={styles.htmlEditor}
                                value={htmlContent}
                                onChange={handleHtmlChange}
                                placeholder="Edit HTML here..."
                            />
                        </div>
                    )}
                    {fieldErrors.content && <div className={styles.errorText}>{fieldErrors.content}</div>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={showRelatedBlogs}
                            onChange={(e) => setShowRelatedBlogs(e.target.checked)}
                            className={styles.checkbox}
                        />
                        <span className={styles.checkboxText}>
                            Show related blogs for this glossary item
                        </span>
                    </label>
                </div>

                {showRelatedBlogs && (
                    <div className={styles.blogLinksSection}>
                        <h3 className={styles.sectionTitle}>Related Blog</h3>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="blogWord">
                                Blog Related Word
                            </label>
                            <input
                                id="blogWord"
                                type="text"
                                className={styles.input}
                                placeholder="Enter one related blog word"
                                value={blogWord}
                                onChange={(e) => setBlogWord(e.target.value)}
                            />
                        </div>
                    </div>
                )}

                <div className={styles.actionButtons}>
                    <CommanButton title="Cancel" theme="outline-blue" url={handleCancel} />
                    <CommanButton
                        title={isSubmitting ? "Saving..." : editingItem ? "Update Item" : "Save Item"}
                        theme="blue"
                        url={() => handleSubmit()}
                        isDisabled={isSubmitting}
                    />
                </div>
            </form>
        </div>
    )

    return (
        <div className={styles.adminContainer}>
            {viewMode === "list" ? renderListView() : renderFormView()}
        </div>
    )
}

export default GlossaryAdmin