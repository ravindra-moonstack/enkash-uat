"use client"

import React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import styles from "./add.module.scss"
import { useAddPost } from "./useAddPost"

const Editor = dynamic(() => import("./Editor"), { ssr: false })
import MediaModal from "./MediaModal"
import SuccessModal from "../SuccessModal"

export default function AddPostPage() {
    const {
        id,
        title, setTitle,
        slug, setSlug,
        content, setContent,
        status, setStatus,
        featuredImageId, setFeaturedImageId,
        featuredImageUrl, setFeaturedImageUrl,
        featuredImageAlt, setFeaturedImageAlt,
        featuredRight, setFeaturedRight,
        featuredLeftSide, setFeaturedLeftSide,
        categoryFeaturedBlog, setCategoryFeaturedBlog,
        showFeaturedImage, setShowFeaturedImage,
        schemaMarkup, setSchemaMarkup,
        removeAuthorDetails, setRemoveAuthorDetails,
        seoTitle, setSeoTitle,
        metaDescription, setMetaDescription,
        metaOptions,
        author, setAuthor,
        categories, setCategories,
        excerpt, setExcerpt,
        tags, setTags,
        permalinkEditable, setPermalinkEditable,
        showMediaModal, setShowMediaModal,
        mediaTarget, setMediaTarget,
        permalinkBase,
        focusKeyword, setFocusKeyword,
        categorySearch, setCategorySearch,
        showAddCategoryForm, setShowAddCategoryForm,
        newCategoryName, setNewCategoryName,
        newCategoryParent, setNewCategoryParent,
        slugError, setSlugError,
        isCheckingSlug, setIsCheckingSlug,
        handleApplySlug,
        handleAddTag,
        handleAddCategory,
        handleSave,
        showSuccessModal,
        setShowSuccessModal,
        status: postStatus,
        customDate,
        setCustomDate,
        lastEditedBy,
        updatedAt
    } = useAddPost()

    const [previewMode, setPreviewMode] = React.useState<"desktop" | "mobile">("desktop")
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{id ? "Edit Post" : "Add Post"}</h1>
            </div>

            <div className={styles.layout}>
                <div className={styles.leftColumn}>
                    <div className={styles.titleInput}>
                        <input
                            type="text"
                            placeholder="Add Title"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                                if (!permalinkEditable) {
                                    setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''))
                                }
                            }}
                        />
                    </div>

                    {title && (
                        <div className={styles.permalink}>
                            <span>Permalink:</span>
                            <a href={permalinkBase + slug} target="_blank">{permalinkBase}{slug}</a>
                            {permalinkEditable ? (
                                <div className={styles.slugEditGroup}>
                                    <input
                                        className={styles.slugInput}
                                        defaultValue={slug}
                                        id="tempSlugInput"
                                        autoFocus
                                    />
                                    <button
                                        className={styles.applyBtn}
                                        onClick={async () => {
                                            const input = document.getElementById('tempSlugInput') as HTMLInputElement
                                            const newSlug = input.value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
                                            if (!newSlug || newSlug === slug) {
                                                setPermalinkEditable(false)
                                                setSlugError("")
                                                return
                                            }
                                            const success = await handleApplySlug(newSlug)
                                            if (success) setPermalinkEditable(false)
                                        }}
                                        disabled={isCheckingSlug}
                                    >
                                        {isCheckingSlug ? "..." : "Apply"}
                                    </button>
                                    <button className={styles.cancelBtn} onClick={() => {
                                        setPermalinkEditable(false)
                                        setSlugError("")
                                    }}>Cancel</button>
                                </div>
                            ) : (
                                <button className={styles.editBtn} onClick={() => setPermalinkEditable(true)}>Edit</button>
                            )}
                            {slugError && <div className={styles.errorText}>{slugError}</div>}
                        </div>
                    )}

                    <div>
                        <button className={styles.addMediaBtn} onClick={() => {
                            setMediaTarget("editor")
                            setShowMediaModal(true)
                        }}>
                            <i className="bi bi-camera"></i> Add Media
                        </button>
                    </div>

                    <div className={styles.editorContainer}>
                        <Editor value={content} onChange={setContent} />
                    </div>

                    <div className={styles.box}>
                        <div className={styles.boxHeader}>
                            SEO
                            <div className={styles.previewToggles}>
                                <button className={previewMode === "desktop" ? styles.active : ""} onClick={() => setPreviewMode("desktop")} title="Desktop Preview">
                                    <i className="bi bi-display"></i>
                                </button>
                                <button className={previewMode === "mobile" ? styles.active : ""} onClick={() => setPreviewMode("mobile")} title="Mobile Preview">
                                    <i className="bi bi-phone"></i>
                                </button>
                            </div>
                        </div>

                        <div className={styles.boxContent}>

                            <div className={styles.inputGroup}>
                                <label>Focus keyphrase</label>
                                <input type="text" value={focusKeyword} onChange={(e) => setFocusKeyword(e.target.value)} placeholder="Separate with commas" />
                            </div>
                            <div className={`${styles.seoPreview} ${previewMode === "mobile" ? styles.mobile : ""}`}>
                                {previewMode === "mobile" && featuredImageUrl && (
                                    <div className={styles.mobileFeatured}>
                                        <img src={featuredImageUrl} alt={featuredImageAlt || "Featured"} />
                                    </div>
                                )}
                                <div className={styles.previewUrl}>{permalinkBase}{slug}</div>
                                <div className={styles.previewTitle}>{seoTitle || title || "SEO Title Preview"}</div>
                                <div className={styles.previewDesc}>{metaDescription || "This is how the meta description will appear in search results."}</div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>SEO title</label>
                                <input type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} />
                            </div>


                            <div className={styles.inputGroup}>
                                <label>Slug</label>
                                <input
                                    type="text"
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''))}
                                />
                            </div>



                            <div className={styles.inputGroup}>
                                <label>Meta description</label>
                                <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>



                    <div className={styles.box}>
                        <div className={styles.boxHeader}>Author</div>
                        <div className={styles.boxContent}>
                            <div className={styles.inputGroup} style={{ marginBottom: 0 }}>
                                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                                    {metaOptions.users.map((u: any) => (
                                        <option key={u.ID} value={u.ID}>{u.display_name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.box}>
                        <div className={styles.boxHeader}>Publish</div>
                        <div className={styles.boxContent}>
                            <div className={styles.publishActions}>
                                <button className={styles.actionBtn} onClick={() => handleSave(false)}>Save Draft</button>
                                <a href={`${permalinkBase}${slug}`} target="_blank" className={styles.actionBtn} style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>Preview</a>
                            </div>
                            <div className={styles.publishStatus}>
                                <div className={styles.statusRow}>
                                    <i className="bi bi-key"></i> Status: <strong>{status.charAt(0).toUpperCase() + status.slice(1)}</strong>
                                </div>
                                <div className={styles.statusRow}>
                                    <i className="bi bi-eye"></i> Visibility: <strong>Public</strong>
                                </div>
                                <div className={styles.statusRow}>
                                    <i className="bi bi-calendar"></i> Publish Date:
                                    <div className={styles.datePickerWrapper}>
                                        <input
                                            type="datetime-local"
                                            value={customDate}
                                            onChange={(e) => setCustomDate(e.target.value)}
                                            className={styles.datePickerInput}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.publishFooter}>
                                <button className={styles.trashBtn}>Move to Trash</button>
                                <button className={styles.primaryBtn} onClick={() => handleSave(true)}>
                                    {status === "publish" ? "Update" : "Publish"}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.boxHeader}>Featured Image</div>
                        <div className={styles.boxContent}>
                            {featuredImageUrl ? (
                                <div style={{ marginBottom: 10 }}>
                                    <img src={featuredImageUrl} alt={featuredImageAlt || "Featured"} style={{ width: '100%', height: 'auto', border: '1px solid #ddd' }} />
                                </div>
                            ) : null}
                            <a className={styles.setFeaturedImage} onClick={() => {
                                setMediaTarget("featured")
                                setShowMediaModal(true)
                            }}>
                                {featuredImageId ? "Replace featured image" : "Set featured image"}
                            </a>
                            {featuredImageId && (
                                <div style={{ marginTop: 10 }}>
                                    <a className={styles.setFeaturedImage} style={{ color: '#b32d2e' }} onClick={() => {
                                        setFeaturedImageId("")
                                        setFeaturedImageUrl("")
                                        setFeaturedImageAlt("")
                                    }}>Remove featured image</a>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.boxHeader}>Post Data</div>
                        <div className={styles.boxContent}>
                            <div className={styles.inputGroup}>
                                <label>Featured<br /><span className={styles.description}>Is it a featured blog?</span></label>
                                <select value={featuredRight} onChange={(e) => setFeaturedRight(e.target.value)}>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Featured Left Side</label>
                                <select value={featuredLeftSide} onChange={(e) => setFeaturedLeftSide(e.target.value)}>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Category Featured Blog</label>
                                <select value={categoryFeaturedBlog} onChange={(e) => setCategoryFeaturedBlog(e.target.value)}>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Show Featured Image</label>
                                <select value={showFeaturedImage} onChange={(e) => setShowFeaturedImage(e.target.value)}>
                                    <option value="right">Right</option>
                                    <option value="hide">Hide</option>
                                    <option value="bottom">Bottom</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Post Schema Markup</label>
                                <textarea value={schemaMarkup} onChange={(e) => setSchemaMarkup(e.target.value)}></textarea>
                            </div>
                            <div className={styles.checkboxGroup}>
                                <input type="checkbox" id="removeAuthor" checked={removeAuthorDetails} onChange={(e) => setRemoveAuthorDetails(e.target.checked)} />
                                <label htmlFor="removeAuthor" style={{ margin: 0, fontWeight: 400 }}>Remove Author Details</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.boxHeader}>Categories</div>
                        <div className={styles.boxContent}>
                            <div className={styles.categorySearch}>
                                <input
                                    type="text"
                                    placeholder="Search categories"
                                    value={categorySearch}
                                    onChange={(e) => setCategorySearch(e.target.value)}
                                    className={styles.searchBar}
                                />
                            </div>
                            <div className={styles.categoryList}>
                                {(() => {
                                    const filtered = metaOptions.categories.filter((c: any) =>
                                        c.name.toLowerCase().includes(categorySearch.toLowerCase())
                                    )

                                    const renderCategory = (cat: any, depth = 0) => {
                                        const children = metaOptions.categories.filter((c: any) => c.parent === cat.term_id)
                                        return (
                                            <React.Fragment key={cat.term_id}>
                                                <div className={styles.checkboxGroup} style={{ marginLeft: depth * 20 }}>
                                                    <input
                                                        type="checkbox"
                                                        id={`cat_${cat.term_id}`}
                                                        checked={categories.includes(cat.term_id.toString()) || categories.includes(cat.slug)}
                                                        onChange={(e) => {
                                                            const val = cat.term_id.toString()
                                                            if (e.target.checked) {
                                                                setCategories([...categories, val])
                                                            } else {
                                                                setCategories(categories.filter(c => c !== val && c !== cat.slug))
                                                            }
                                                        }}
                                                    />
                                                    <label htmlFor={`cat_${cat.term_id}`} style={{ margin: 0, fontWeight: 400 }}>{cat.name}</label>
                                                </div>
                                                {children.map(child => renderCategory(child, depth + 1))}
                                            </React.Fragment>
                                        )
                                    }

                                    const rootCategories = filtered.filter((c: any) => {
                                        if (!categorySearch) return c.parent === 0 || !c.parent
                                        return true // If searching, show all matches at flat level or maintain structure? Usually WordPress shows search results flat.
                                    })

                                    return rootCategories.map((c: any) => {
                                        if (categorySearch) {
                                            // Simple flat list for search
                                            return (
                                                <div className={styles.checkboxGroup} key={c.term_id}>
                                                    <input
                                                        type="checkbox"
                                                        id={`cat_${c.term_id}`}
                                                        checked={categories.includes(c.term_id.toString()) || categories.includes(c.slug)}
                                                        onChange={(e) => {
                                                            const val = c.term_id.toString()
                                                            if (e.target.checked) {
                                                                setCategories([...categories, val])
                                                            } else {
                                                                setCategories(categories.filter(cat => cat !== val && cat !== c.slug))
                                                            }
                                                        }}
                                                    />
                                                    <label htmlFor={`cat_${c.term_id}`} style={{ margin: 0, fontWeight: 400 }}>{c.name}</label>
                                                </div>
                                            )
                                        }
                                        return renderCategory(c)
                                    })
                                })()}
                            </div>
                            <div className={styles.addCategoryLink}>
                                <a onClick={() => setShowAddCategoryForm(!showAddCategoryForm)}>+ Add New Category</a>
                            </div>
                            {showAddCategoryForm && (
                                <div className={styles.addCategoryForm}>
                                    <input
                                        type="text"
                                        placeholder="Category Name"
                                        value={newCategoryName}
                                        className={styles.searchBar}
                                        onChange={(e) => setNewCategoryName(e.target.value)}
                                    />
                                    <select
                                        value={newCategoryParent}
                                        onChange={(e) => setNewCategoryParent(e.target.value)}
                                    >
                                        <option value="0">Parent Category</option>
                                        {metaOptions.categories.map((c: any) => (
                                            <option key={c.term_id} value={c.term_id}>{c.name}</option>
                                        ))}
                                    </select>
                                    <button onClick={handleAddCategory}>Add New Category</button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.boxHeader}>Excerpt</div>
                        <div className={styles.boxContent}>
                            <div className={styles.inputGroup} style={{ marginBottom: 0 }}>
                                <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)}></textarea>
                                <div className={styles.description}>Excerpts are optional hand-crafted summaries of your content.</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.boxHeader}>Tags</div>
                        <div className={styles.boxContent}>
                            <div className={styles.tagsContainer}>
                                <div className={styles.tagSearch}>
                                    <input
                                        type="text"
                                        className={styles.searchBar}
                                        placeholder="Add Tag"
                                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault()
                                                const val = e.currentTarget.value.trim()
                                                if (val) {
                                                    handleAddTag(val)
                                                    e.currentTarget.value = ""
                                                }
                                            }
                                        }}
                                        list="tagOptions"
                                    />
                                    <datalist id="tagOptions">
                                        {(metaOptions.tags || []).map((t: any) => (
                                            <option key={t.term_id} value={t.name} />
                                        ))}
                                    </datalist>
                                    <button onClick={(e) => {
                                        const input = e.currentTarget.parentElement?.querySelector('input')
                                        if (input && input.value.trim()) {
                                            handleAddTag(input.value.trim())
                                            input.value = ""
                                        }
                                    }}>Add</button>
                                </div>
                                <div className={styles.selectedTags}>
                                    {tags && tags.split(',').filter(t => t).map(tid => {
                                        const tagObj = (metaOptions.tags || []).find((t: any) => t.term_id.toString() === tid)
                                        if (!tagObj) return null
                                        return (
                                            <span key={tid} className={styles.tagPill}>
                                                <i className="bi bi-x-circle" onClick={() => {
                                                    const newTags = tags.split(',').filter(t => t !== tid && t).join(',')
                                                    setTags(newTags)
                                                }}></i> {tagObj.name}
                                            </span>
                                        )
                                    })}
                                </div>
                                <div className={styles.description}>Select tags from the list</div>
                            </div>
                        </div>
                    </div>

                    {id && (
                        <div className={styles.box} style={{ background: '#f9f9f9', borderTop: '2px solid #e2e4e7' }}>
                            <div className={styles.boxContent} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <div className={styles.statusRow} style={{ fontSize: '12px', color: '#666', }}>
                                    <i className="bi bi-info-circle me-1"></i> Last Updated By: <strong>{lastEditedBy}</strong>
                                </div>
                                <div className={styles.statusRow} style={{ fontSize: '12px', color: '#666', }}>
                                    <i className="bi bi-clock me-1"></i> Last Updated At: {updatedAt ? new Date(updatedAt).toLocaleString() : "Never"}
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {showMediaModal && (
                <MediaModal
                    onClose={() => setShowMediaModal(false)}
                    onSelect={(media) => {
                        if (mediaTarget === "editor") {
                            if ((window as any).tinymce && (window as any).tinymce.activeEditor) {
                                (window as any).tinymce.activeEditor.insertContent(`<img src="${media.url}" alt="${media.alt}" />`)
                            } else {
                                setContent(prev => prev + `<p><img src="${media.url}" alt="${media.alt}" /></p>`)
                            }
                        } else {
                            setFeaturedImageId(media.id)
                            setFeaturedImageUrl(media.url)
                            setFeaturedImageAlt(media.alt)
                        }
                        setShowMediaModal(false)
                    }}
                    title={mediaTarget === "editor" ? "Insert Media" : "Featured Image"}
                />
            )}

            <SuccessModal
                show={showSuccessModal}
                onClose={() => {
                    setShowSuccessModal(false)
                }}
                message={`Your post has been ${postStatus === 'publish' ? 'published' : 'saved'} successfully!`}
            />
        </div>
    )
}
