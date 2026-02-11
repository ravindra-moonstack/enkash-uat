"use client"

import React, { useState, useEffect, useCallback } from "react"
import styles from "./glossary-admin.module.scss"
import { nameToUrl } from "@/src/utils/stringUtils"
import { useQuillEditor } from "./use-quill-editor"
import GlossaryListView from "./glossary-list-view"
import GlossaryFormView from "./glossary-form-view"

interface GlossaryItem {
    id?: number
    word: string
    slug: string
    content: string
    showRelatedBlogs: boolean
    blogWord: string
    meta_title?: string
    meta_description?: string
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
    const [metaTitle, setMetaTitle] = useState("")
    const [metaDescription, setMetaDescription] = useState("")
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

    const {
        editorRef,
        quillInstance,
        showHtmlView,
        htmlContent,
        handleHtmlChange,
        applyHtmlChanges,
        setHtmlContent,
        setShowHtmlView
    } = useQuillEditor({ content, setContent, viewMode })

    const fetchItems = useCallback(async (page: number = 1) => {
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
    }, [itemsPerPage])

    // Fetch items on mount and when page changes
    useEffect(() => {
        fetchItems(currentPage)
    }, [currentPage, fetchItems])

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
        val = val.replace(/-{2,}/g, '-')
        val = val.replace(/^-+/, '')
        setSlug(val)
        setIsSlugModified(val !== "")
    }

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault()
        setFieldErrors({})
        setIsSubmitting(true)

        const finalWord = word.trim()
        const finalSlug = nameToUrl(slug)
        const finalBlogWord = blogWord.trim()
        const finalMetaTitle = metaTitle.trim()
        const finalMetaDescription = metaDescription.trim()

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
            meta_title: finalMetaTitle,
            meta_description: finalMetaDescription,
        }

        try {
            console.log("glossaryData", glossaryData)
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
                    setCurrentPage(1)
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
        setMetaTitle(item.meta_title || "")
        setMetaDescription(item.meta_description || "")
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
        setMetaTitle("")
        setMetaDescription("")
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

    return (
        <div className={styles.adminContainer}>
            {viewMode === "list" ? (
                <GlossaryListView
                    items={items}
                    isLoading={isLoading}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    handleAddNew={handleAddNew}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    setCurrentPage={setCurrentPage}
                />
            ) : (
                <GlossaryFormView
                    editingItem={editingItem}
                    handleCancel={handleCancel}
                    handleSubmit={handleSubmit}
                    word={word}
                    handleWordChange={handleWordChange}
                    slug={slug}
                    handleSlugChange={handleSlugChange}
                    fieldErrors={fieldErrors}
                    showHtmlView={showHtmlView}
                    editorRef={editorRef}
                    htmlContent={htmlContent}
                    handleHtmlChange={handleHtmlChange}
                    applyHtmlChanges={applyHtmlChanges}
                    showRelatedBlogs={showRelatedBlogs}
                    setShowRelatedBlogs={setShowRelatedBlogs}
                    blogWord={blogWord}
                    setBlogWord={setBlogWord}
                    metaTitle={metaTitle}
                    setMetaTitle={setMetaTitle}
                    metaDescription={metaDescription}
                    setMetaDescription={setMetaDescription}
                    isSubmitting={isSubmitting}
                />
            )}
        </div>
    )
}

export default GlossaryAdmin