import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  FormEvent,
  ChangeEvent,
} from "react"
import Image from "next/image"
import { CommanButton } from "@/src/components"
import styles from "./glossary-admin.module.scss"


interface GlossaryFormViewProps {
  editingItem: any
  handleCancel: () => void
  handleSubmit: (e?: FormEvent) => void
  word: string
  handleWordChange: (e: ChangeEvent<HTMLInputElement>) => void
  slug: string
  handleSlugChange: (e: ChangeEvent<HTMLInputElement>) => void
  fieldErrors: Record<string, string>
  showHtmlView: boolean
  editorRef: RefObject<HTMLDivElement | null>
  htmlContent: string
  handleHtmlChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  applyHtmlChanges: () => void
  showRelatedBlogs: boolean
  setShowRelatedBlogs: (show: boolean) => void
  blogWord: string
  handleBlogWordChange: (e: ChangeEvent<HTMLInputElement>) => void
  featureImage: string
  setFeatureImage: (url: string) => void
  featureImageAlt: string
  setFeatureImageAlt: (alt: string) => void
  handleFeatureImageUpload: (file: File) => Promise<void>
  isSubmitting: boolean
  isUploading: boolean
  isDirty: boolean
  metaTitle: string
  setMetaTitle: (title: string) => void
  metaDescription: string
  setMetaDescription: (description: string) => void
  showAltModal: boolean
  pendingImage: File | null
  handleAltSubmit: (altText: string) => void
  handleAltCancel: () => void
}

const GlossaryFormView = ({
  editingItem,
  handleCancel,
  handleSubmit,
  word,
  handleWordChange,
  slug,
  handleSlugChange,
  fieldErrors,
  showHtmlView,
  editorRef,
  htmlContent,
  handleHtmlChange,
  applyHtmlChanges,
  showRelatedBlogs,
  setShowRelatedBlogs,
  blogWord,
  handleBlogWordChange,
  featureImage,
  setFeatureImage,
  featureImageAlt,
  setFeatureImageAlt,
  handleFeatureImageUpload,
  isSubmitting,
  isUploading,
  isDirty,
  metaTitle,
  setMetaTitle,
  metaDescription,
  setMetaDescription,
  showAltModal,
  pendingImage,
  handleAltSubmit,
  handleAltCancel,
}: GlossaryFormViewProps) => {
  // Presence / Locking Logic
  const [activeEditors, setActiveEditors] = useState<string[]>([])
  const editorIdCurrent = useRef<string>("")

  useEffect(() => {
    if (!editingItem || !editingItem.id) return

    // Generate a simplified unique ID for this specific session instance
    // This ensures even duplicated tabs are treated as separate editors
    const eId = Math.random().toString(36).substring(2, 10)
    editorIdCurrent.current = eId

    const checkActiveEditors = async () => {
      if (!editingItem?.id) return
      try {
        const res = await fetch("/api/admin/glossary/active-editors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            glossaryId: editingItem.id,
            editorId: eId,
          }),
        })
        const data = await res.json()
        if (data.success) {
          setActiveEditors(data.activeEditors || [])
        }
      } catch (err) {
        console.error("Error checking active editors", err)
      }
    }

    // Cleanup function to release lock
    const releaseLock = () => {
      if (eId && editingItem?.id) {
        // Use fetch with keepalive to ensure request sends even during page unload
        fetch(
          `/api/admin/glossary/active-editors?glossaryId=${editingItem.id}&editorId=${eId}`,
          {
            method: "DELETE",
            keepalive: true,
          }
        ).catch((e) => console.error("Failed to release lock", e))
      }
    }

    // Initial check
    checkActiveEditors()

    // Poll every 5 seconds
    const interval = setInterval(checkActiveEditors, 5000)

    // Add beforeunload listener for browser close/refresh
    window.addEventListener("beforeunload", releaseLock)

    return () => {
      clearInterval(interval)
      window.removeEventListener("beforeunload", releaseLock)
      releaseLock()
    }
  }, [editingItem?.id])

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <button
            className={styles.backBtn}
            onClick={handleCancel}
            title="Go Back"
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <h1 className={styles.title}>
            {editingItem ? "Edit Glossary Item" : "Create New Glossary Item"}
          </h1>
        </div>
        <p className={styles.subtitle}>
          {editingItem
            ? `Updating details for "${editingItem.word}"`
            : "Add a new term and definition to the glossary"}
        </p>

        {activeEditors.length > 0 && (
          <div
            className="alert alert-warning mt-3"
            role="alert"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <i
              className="bi bi-exclamation-triangle-fill"
              style={{ fontSize: "1.2rem" }}
            ></i>
            <div>
              <strong>Warning:</strong> Another user is currently editing this
              item. Please coordinate to avoid overwriting changes.
            </div>
          </div>
        )}
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
          {fieldErrors.word && (
            <div className={styles.errorText}>{fieldErrors.word}</div>
          )}
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
          {fieldErrors.slug && (
            <div className={styles.errorText}>{fieldErrors.slug}</div>
          )}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="metaTitle">
            Meta Title <span className={styles.required}>*</span>
          </label>
          <input
            id="metaTitle"
            type="text"
            className={`${styles.input} ${fieldErrors.metaTitle ? styles.inputError : ""}`}
            placeholder="Enter SEO Meta Title"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
          />
          {fieldErrors.metaTitle && (
            <div className={styles.errorText}>{fieldErrors.metaTitle}</div>
          )}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="metaDescription">
            Meta Description <span className={styles.required}>*</span>
          </label>
          <textarea
            id="metaDescription"
            className={`${styles.input} ${fieldErrors.metaDescription ? styles.inputError : ""}`}
            placeholder="Enter SEO Meta Description"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            rows={3}
            style={{ height: "auto" }}
          />
          {fieldErrors.metaDescription && (
            <div className={styles.errorText}>
              {fieldErrors.metaDescription}
            </div>
          )}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Feature Image</label>
          <div className={styles.imageUploadWrapper}>
            {featureImage && (
              <div className={styles.imagePreviewContainer}>
                <img src={featureImage} alt="Feature" />
                <button
                  type="button"
                  onClick={() => setFeatureImage("")}
                  style={{
                    position: "absolute",
                    top: "4px",
                    right: "4px",
                    background: "rgba(255, 0, 0, 0.8)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  title="Remove Image"
                >
                  &times;
                </button>
              </div>
            )}
            <div className={styles.uploadControls}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    handleFeatureImageUpload(e.target.files[0])
                  }
                }}
                className={styles.fileInput}
              />
              <p className={styles.helperText}>Recommended size: 1200x630px</p>
            </div>
          </div>
        </div>

        {featureImage && (
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="featureImageAlt">
              Feature Image Alt Text
            </label>
            <input
              id="featureImageAlt"
              type="text"
              className={styles.input}
              placeholder="Describe the feature image for SEO..."
              value={featureImageAlt}
              onChange={(e) => setFeatureImageAlt(e.target.value)}
            />
          </div>
        )}

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="content">
            Definition/Content <span className={styles.required}>*</span>
          </label>

          <div
            className={`${styles.editorWrapper} ${fieldErrors.content ? styles.inputError : ""}`}
            style={{ display: showHtmlView ? "none" : "block" }}
          >
            <div ref={editorRef} className={styles.quillEditor} />
          </div>

          <div
            className={`${styles.htmlEditorWrapper} ${fieldErrors.content ? styles.inputError : ""}`}
            style={{ display: showHtmlView ? "block" : "none" }}
          >
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

          {fieldErrors.content && (
            <div className={styles.errorText}>{fieldErrors.content}</div>
          )}
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
                Blog Related Word <span className={styles.required}>*</span>
              </label>
              <input
                id="blogWord"
                type="text"
                className={`${styles.input} ${fieldErrors.blogWord ? styles.inputError : ""}`}
                placeholder="Enter one related blog word"
                value={blogWord}
                onChange={handleBlogWordChange}
              />
              {fieldErrors.blogWord && (
                <div className={styles.errorText}>{fieldErrors.blogWord}</div>
              )}
            </div>
          </div>
        )}

        <div className={styles.actionButtons}>
          <CommanButton
            title="Cancel"
            theme="outline-blue"
            url={handleCancel}
            isDisabled={isSubmitting}
          />
          <CommanButton
            title={
              isSubmitting
                ? "Saving..."
                : editingItem
                  ? "Update Item"
                  : "Save Item"
            }
            theme="blue"
            url={() => handleSubmit()}
            isDisabled={isSubmitting || !isDirty}
          />
        </div>
      </form>

      {showAltModal && (
        <div key={pendingImage?.name} className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Image Description (Alt Text)</h3>
            <p className={styles.modalDescription}>
              Add a description for this image to improve accessibility and SEO.
            </p>
            <input
              autoFocus
              type="text"
              placeholder="e.g. Credit Card Terminal"
              defaultValue={
                pendingImage
                  ? pendingImage.name
                    .replace(/\.[^/.]+$/, "")
                    .replace(/[-_]/g, " ")
                  : ""
              }
              id="alt-text-input"
              className={styles.input}
              style={{ marginBottom: "24px" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  const input = document.getElementById(
                    "alt-text-input"
                  ) as HTMLInputElement
                  handleAltSubmit(input.value)
                }
              }}
            />
            <div className={styles.modalActions}>
              <CommanButton
                title="Cancel"
                theme="outline-blue"
                url={handleAltCancel}
                isDisabled={isUploading}
              />
              <CommanButton
                title={isUploading ? "Inserting..." : "Insert Image"}
                theme="blue"
                url={() => {
                  const input = document.getElementById(
                    "alt-text-input"
                  ) as HTMLInputElement
                  handleAltSubmit(input.value)
                }}
                isDisabled={isUploading}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GlossaryFormView
