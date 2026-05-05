"use client"

import React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import styles from "./add.module.scss"
import { useAddPost } from "./useAddPost"

const Editor = dynamic(() => import("./Editor"), { ssr: false })
import MediaModal from "./MediaModal"

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
        handleSave
    } = useAddPost()

    const [previewMode, setPreviewMode] = React.useState<"desktop" | "mobile">("desktop")
    console.log("API KEY: ", process.env.NEXT_PUBLIC_TINYMCE_API_KEY)
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
                                <input
                                    className={styles.slugInput}
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    onBlur={() => setPermalinkEditable(false)}
                                    autoFocus
                                />
                            ) : (
                                <button className={styles.editBtn} onClick={() => setPermalinkEditable(true)}>Edit</button>
                            )}
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
                                <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Meta description</label>
                                <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.boxHeader}>Slug</div>
                        <div className={styles.boxContent}>
                            <div className={styles.inputGroup} style={{ marginBottom: 0 }}>
                                <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} />
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
                                    <i className="bi bi-key"></i> Status: <strong>{status.charAt(0).toUpperCase() + status.slice(1)}</strong> <a>Edit</a>
                                </div>
                                <div className={styles.statusRow}>
                                    <i className="bi bi-eye"></i> Visibility: <strong>Public</strong> <a>Edit</a>
                                </div>
                            </div>
                            <div className={styles.publishFooter}>
                                <button className={styles.trashBtn}>Move to Trash</button>
                                <button className={styles.primaryBtn} onClick={() => handleSave(true)}>
                                    {status === "published" ? "Update" : "Publish"}
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
                                    <option value="hide">Hide</option>
                                    <option value="right">Right</option>
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
                            <div>
                                <label style={{ display: "block", marginBottom: 5 }}>All Categories</label>
                                <div style={{ maxHeight: 150, overflowY: "auto", border: "1px solid #ddd", padding: 10, background: "#f9f9f9" }}>
                                    {metaOptions.categories.map((c: any) => (
                                        <div className={styles.checkboxGroup} key={c.slug}>
                                            <input
                                                type="checkbox"
                                                id={`cat_${c.slug}`}
                                                checked={categories.includes(c.slug)}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setCategories([...categories, c.slug])
                                                    } else {
                                                        setCategories(categories.filter(cat => cat !== c.slug))
                                                    }
                                                }}
                                            />
                                            <label htmlFor={`cat_${c.slug}`} style={{ margin: 0, fontWeight: 400 }}>{c.name}</label>
                                        </div>
                                    ))}
                                </div>
                                <a className={styles.setFeaturedImage} style={{ display: "inline-block", marginTop: 10 }}>+ Add Category</a>
                            </div>
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
                                        placeholder="Add Tag"
                                        onChange={(e) => {
                                            const val = e.target.value.toLowerCase()
                                            const matches = metaOptions.tags.filter((t: any) => t.name.toLowerCase().includes(val) && !tags.split(',').includes(t.term_id.toString())).slice(0, 5)
                                            // Show matching tags in a dropdown (simplified here, could use a state for results)
                                            // For now, let's use a simpler approach: if the user types a full tag name and it matches, we can suggest it.
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                const val = (e.target as HTMLInputElement).value
                                                const match = metaOptions.tags.find((t: any) => t.name.toLowerCase() === val.toLowerCase())
                                                if (match) {
                                                    const currentTags = tags ? tags.split(',') : []
                                                    if (!currentTags.includes(match.term_id.toString())) {
                                                        setTags([...currentTags, match.term_id.toString()].join(','))
                                                            ; (e.target as HTMLInputElement).value = ""
                                                    }
                                                }
                                            }
                                        }}
                                        list="tagOptions"
                                    />
                                    <datalist id="tagOptions">
                                        {metaOptions.tags.map((t: any) => (
                                            <option key={t.term_id} value={t.name} />
                                        ))}
                                    </datalist>
                                    <button onClick={(e) => {
                                        const input = (e.currentTarget.previousSibling as HTMLInputElement)
                                        const val = input.value
                                        const match = metaOptions.tags.find((t: any) => t.name.toLowerCase() === val.toLowerCase())
                                        if (match) {
                                            const currentTags = tags ? tags.split(',') : []
                                            if (!currentTags.includes(match.term_id.toString())) {
                                                setTags([...currentTags, match.term_id.toString()].join(','))
                                                input.value = ""
                                            }
                                        }
                                    }}>Add</button>
                                </div>
                                <div className={styles.selectedTags}>
                                    {tags && tags.split(',').map(tid => {
                                        const tagObj = metaOptions.tags.find((t: any) => t.term_id.toString() === tid)
                                        if (!tagObj) return null
                                        return (
                                            <span key={tid} className={styles.tagPill}>
                                                <i className="bi bi-x-circle" onClick={() => {
                                                    const newTags = tags.split(',').filter(t => t !== tid).join(',')
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

                </div>
            </div>

            {showMediaModal && (
                <MediaModal
                    onClose={() => setShowMediaModal(false)}
                    onSelect={(media) => {
                        if (mediaTarget === "editor") {
                            setContent(prev => prev + `<p><img src="${media.url}" alt="${media.alt}" /></p>`)
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
        </div>
    )
}
