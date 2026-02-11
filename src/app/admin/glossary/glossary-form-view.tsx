import React from "react"
import { CommanButton } from "@/src/components"
import styles from "./glossary-admin.module.scss"

interface GlossaryFormViewProps {
    editingItem: any
    handleCancel: () => void
    handleSubmit: (e?: React.FormEvent) => void
    word: string
    handleWordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    slug: string
    handleSlugChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    fieldErrors: Record<string, string>
    showHtmlView: boolean
    editorRef: React.RefObject<HTMLDivElement | null>
    htmlContent: string
    handleHtmlChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    applyHtmlChanges: () => void
    showRelatedBlogs: boolean
    setShowRelatedBlogs: (show: boolean) => void
    blogWord: string
    setBlogWord: (word: string) => void
    isSubmitting: boolean
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
    setBlogWord,
    isSubmitting,
}: GlossaryFormViewProps) => {
    return (
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
}

export default GlossaryFormView
