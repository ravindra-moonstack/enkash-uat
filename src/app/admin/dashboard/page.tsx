"use client"
import React, { useState, useEffect, useCallback, useRef, useMemo } from "react"
import styles from "./glossary-admin.module.scss"
import { nameToUrl } from "@/src/utils/stringUtils"
import GlossaryListView from "./glossary-list-view"
import GlossaryFormView from "./glossary-form-view"
import ConfirmationModal from "../blogs/ConfirmationModal"
import { useToast } from "@/src/context/ToastContext"

interface GlossaryItem {
  id?: number
  word: string
  slug: string
  content: string
  showRelatedBlogs: boolean
  blogWord: string
  meta_title?: string
  meta_description?: string
  feature_image?: string
  feature_image_alt?: string
}

type ViewMode = "list" | "form"

const GlossaryAdmin = (): React.JSX.Element => {
  // State management
  const [viewMode, setViewMode] = useState<ViewMode>("list")
  const [items, setItems] = useState<GlossaryItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isSubmittingRef = useRef(false)
  const [editingItem, setEditingItem] = useState<GlossaryItem | null>(null)

  const { showToast } = useToast()
  const [showConfirm, setShowConfirm] = useState(false)
  const [confirmConfig, setConfirmConfig] = useState<{
    onConfirm: () => void
    message: string
    title?: string
    type?: "danger" | "primary"
  } | null>(null)

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const [itemsPerPage] = useState(10)

  // Form fields
  const [word, setWord] = useState<string>("")
  const [slug, setSlug] = useState<string>("")
  const [isSlugModified, setIsSlugModified] = useState(false)
  const [content, setContent] = useState<string>("")
  const [showRelatedBlogs, setShowRelatedBlogs] = useState(false)
  const [blogWord, setBlogWord] = useState<string>("")
  const [metaTitle, setMetaTitle] = useState<string>("")
  const [metaDescription, setMetaDescription] = useState<string>("")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [featureImage, setFeatureImage] = useState<string>("")
  const [featureImageAlt, setFeatureImageAlt] = useState<string>("")
  const [hasManuallyEditedBlogWord, setHasManuallyEditedBlogWord] =
    useState(false)

  const isDirty = useMemo(() => {
    if (!editingItem) {
      return word.trim() !== "" || content.trim() !== "" || slug.trim() !== ""
    }
    const hasWordChanged = word !== (editingItem.word || "")
    const hasSlugChanged = slug !== (editingItem.slug || "")
    const hasContentChanged = content !== (editingItem.content || "")
    const hasBlogsChanged = showRelatedBlogs !== !!editingItem.showRelatedBlogs
    const hasBlogWordChanged = blogWord !== (editingItem.blogWord || "")
    const hasMetaTitleChanged = metaTitle !== (editingItem.meta_title || "")
    const hasMetaDescriptionChanged =
      metaDescription !== (editingItem.meta_description || "")
    const hasFeatureImageChanged =
      featureImage !== (editingItem.feature_image || "")
    const hasFeatureImageAltChanged =
      featureImageAlt !== (editingItem.feature_image_alt || "")

    return (
      hasWordChanged ||
      hasSlugChanged ||
      hasContentChanged ||
      hasBlogsChanged ||
      hasBlogWordChanged ||
      hasMetaTitleChanged ||
      hasMetaDescriptionChanged ||
      hasFeatureImageChanged ||
      hasFeatureImageAltChanged
    )
  }, [
    word,
    slug,
    content,
    showRelatedBlogs,
    blogWord,
    metaTitle,
    metaDescription,
    featureImage,
    featureImageAlt,
    editingItem,
  ])

  const fetchItems = useCallback(
    async (page: number = 1, search: string = "") => {
      setIsLoading(true)
      try {
        const response = await fetch(
          `/api/admin/glossary?page=${page}&limit=${itemsPerPage}&search=${search}`
        )
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
    },
    [itemsPerPage]
  )

  // Debounce search and handle fetch
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchItems(currentPage, searchTerm)
    }, 300)

    return () => clearTimeout(handler)
  }, [currentPage, searchTerm, fetchItems])

  const handleSearchChange = (term: string) => {
    setSearchTerm(term)
    if (currentPage !== 1) setCurrentPage(1)
  }

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
    if (showRelatedBlogs && !hasManuallyEditedBlogWord) {
      setBlogWord(e.target.value)
    }
  }

  // Effect to handle blogWord auto-fill when checkbox is toggled
  useEffect(() => {
    if (showRelatedBlogs && !blogWord && !hasManuallyEditedBlogWord) {
      setBlogWord(word)
    }
  }, [showRelatedBlogs, word, blogWord, hasManuallyEditedBlogWord])

  const handleBlogWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogWord(e.target.value)
    setHasManuallyEditedBlogWord(true)
  }

  const handleFeatureImageUpload = async (file: File) => {
    const formData = new FormData()
    formData.append("file", file)

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      })

      if (res.ok) {
        const data = await res.json()
        setFeatureImage(data.url)
      } else {
        const text = await res.text()
        try {
          const errorData = JSON.parse(text)
          console.error("Upload failed:", errorData)
          const errorMessage =
            errorData.details?.message ||
            errorData.details ||
            errorData.message ||
            errorData.error ||
            `Image upload failed: ${res.status}`
          alert(errorMessage)
        } catch {
          console.error("Upload failed (non-JSON):", text)
          alert(`Image upload failed: ${text.substring(0, 500)}`)
        }
      }
    } catch (e: any) {
      console.error("Error uploading image:", e)
      alert(e.message || "Error uploading image")
    }
  }

  const imagesUploadHandler = async (blobInfo: any, progress: (p: number) => void): Promise<string> => {
    const formData = new FormData()
    formData.append("file", blobInfo.blob(), blobInfo.filename())

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      })

      if (res.ok) {
        const data = await res.json()
        return data.url
      } else {
        const text = await res.text()
        let errorMessage = `Image upload failed: ${res.status}`
        try {
          const errorData = JSON.parse(text)
          errorMessage = errorData.details?.message || errorData.details || errorData.message || errorData.error || errorMessage
        } catch {
          errorMessage = `Image upload failed: ${text.substring(0, 500)}`
        }
        return Promise.reject(errorMessage)
      }
    } catch (e: any) {
      return Promise.reject(e.message || "Error uploading image")
    }
  }

  useEffect(() => {
    if (isSlugModified || editingItem) return

    const handler = setTimeout(() => {
      setSlug(nameToUrl(word))
    }, 300)

    return () => clearTimeout(handler)
  }, [word, isSlugModified, editingItem])

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
    val = val.replace(/-{2,}/g, "-")
    val = val.replace(/^-+/, "")
    setSlug(val)
    setIsSlugModified(val !== "")
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (isSubmittingRef.current || !isDirty) return
    isSubmittingRef.current = true
    setIsSubmitting(true)

    const finalWord = word.trim()
    const finalSlug = nameToUrl(slug)
    const finalBlogWord = blogWord.trim()
    const finalMetaTitle = metaTitle.trim()
    const finalMetaDescription = metaDescription.trim()

    const errors: Record<string, string> = {}
    if (!finalWord) errors.word = "Word is required"
    if (!finalSlug) errors.slug = "Slug cannot be empty after formatting."
    if (!content || content.trim() === "" || content === "<p><br></p>")
      errors.content = "Content is required"
    if (!finalMetaTitle) errors.metaTitle = "Meta Title is required"
    if (!finalMetaDescription)
      errors.metaDescription = "Meta Description is required"
    if (showRelatedBlogs && !finalBlogWord)
      errors.blogWord = "Blog Related Word is required"

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
      feature_image: featureImage,
      feature_image_alt: featureImageAlt,
    }

    try {
      const url = editingItem
        ? `/api/admin/glossary/${editingItem.id}`
        : "/api/admin/glossary"
      const method = editingItem ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
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
        if (data.message && data.message.toLowerCase().includes("slug")) {
          setFieldErrors({ slug: data.message })
        } else if (
          data.message &&
          data.message.toLowerCase().includes("word")
        ) {
          setFieldErrors({ word: data.message })
        } else {
          setFieldErrors({ general: data.message || "Operation failed" })
        }
      }
    } catch {
      setFieldErrors({ general: "Something went wrong. Please try again." })
    } finally {
      isSubmittingRef.current = false
      setIsSubmitting(false)
    }
  }

  const handleEdit = async (item: GlossaryItem) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/glossary/${item.id}`)

      if (response.status === 401) {
        window.location.href = "/admin"
        return
      }

      const data = await response.json()

      if (data.success) {
        const fullItem = data.data
        setEditingItem(fullItem)
        setWord(fullItem.word)
        setSlug(fullItem.slug)
        setIsSlugModified(true)
        setContent(fullItem.content || "")
        setShowRelatedBlogs(
          fullItem.showRelatedBlogs === 1 || fullItem.showRelatedBlogs === true
        )
        setBlogWord(fullItem.blogWord || "")
        setMetaTitle(fullItem.meta_title || "")
        setMetaDescription(fullItem.meta_description || "")
        setFeatureImage(fullItem.feature_image || "")
        setFeatureImageAlt(fullItem.feature_image_alt || "")
        setHasManuallyEditedBlogWord(!!fullItem.blogWord) // If it has a value, assume manually edited or previously saved
        setViewMode("form")
      } else {
        setFieldErrors({ general: "Failed to load item details" })
      }
    } catch (error) {
      console.error("Error loading item:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    setConfirmConfig({
      title: "Delete Glossary Item",
      message: "Are you sure you want to delete this item?",
      type: "danger",
      onConfirm: async () => {
        try {
          const response = await fetch(`/api/admin/glossary/${id}`, {
            method: "DELETE",
          })

          if (response.status === 401) {
            window.location.href = "/admin"
            return
          }

          const data = await response.json()
          if (data.success) {
            showToast("Item deleted successfully", "success")
            if (items.length === 1 && currentPage > 1) {
              setCurrentPage((prev) => prev - 1)
            } else {
              fetchItems(currentPage)
            }
          } else {
            showToast(data.message || "Delete failed", "error")
          }
        } catch {
          showToast("Internal server error", "error")
        }
      },
    })
    setShowConfirm(true)
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
    setShowRelatedBlogs(false)
    setBlogWord("")
    setMetaTitle("")
    setMetaDescription("")
    setFeatureImage("")
    setFeatureImageAlt("")
    setHasManuallyEditedBlogWord(false)
    setFieldErrors({})
    setEditingItem(null)
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
          searchTerm={searchTerm}
          setSearchTerm={(term) => handleSearchChange(term)}
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
          content={content}
          handleContentChange={setContent}
          showRelatedBlogs={showRelatedBlogs}
          setShowRelatedBlogs={setShowRelatedBlogs}
          blogWord={blogWord}
          metaTitle={metaTitle}
          setMetaTitle={setMetaTitle}
          metaDescription={metaDescription}
          setMetaDescription={setMetaDescription}
          featureImage={featureImage}
          setFeatureImage={setFeatureImage}
          handleFeatureImageUpload={handleFeatureImageUpload}
          handleBlogWordChange={handleBlogWordChange}
          isSubmitting={isSubmitting}
          isUploading={false}
          isDirty={isDirty}
          featureImageAlt={featureImageAlt}
          setFeatureImageAlt={setFeatureImageAlt}
          imagesUploadHandler={imagesUploadHandler}
        />
      )}

      {confirmConfig && (
        <ConfirmationModal
          show={showConfirm}
          onClose={() => setShowConfirm(false)}
          onConfirm={confirmConfig.onConfirm}
          title={confirmConfig.title}
          message={confirmConfig.message}
          type={confirmConfig.type}
          confirmLabel="Delete"
        />
      )}
    </div>
  )
}

export default GlossaryAdmin
