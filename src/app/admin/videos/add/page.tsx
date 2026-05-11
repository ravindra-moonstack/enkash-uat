"use client"

import React from "react"
import Link from "next/link"
import styles from "../../blogs/add/add.module.scss"
import { useAddVideo } from "./useAddVideo"
import MediaModal from "../../blogs/add/MediaModal"
import SuccessModal from "../../blogs/SuccessModal"

export default function AddVideoPage() {
    const {
        id,
        title, setTitle,
        slug, setSlug,
        status, setStatus,
        author, setAuthor,
        postParent, setPostParent,
        externalEmbedFrame, setExternalEmbedFrame,
        selfHostedId, setSelfHostedId,
        thumbnailId, setThumbnailId,
        thumbnailUrl, setThumbnailUrl,
        featured, setFeatured,
        trending, setTrending,
        selectedCategories, setSelectedCategories,
        metaOptions,
        showMediaModal, setShowMediaModal,
        mediaTarget, setMediaTarget,
        categorySearch, setCategorySearch,
        showAddCategoryForm, setShowAddCategoryForm,
        newCategoryName, setNewCategoryName,
        newCategoryParent, setNewCategoryParent,
        slugManuallyEdited, setSlugManuallyEdited,
        showSuccessModal, setShowSuccessModal,
        handleAddCategory,
        handleSave
    } = useAddVideo()

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{id ? "Edit Video" : "Add Video"}</h1>
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
                                if (!slugManuallyEdited) {
                                    setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''))
                                }
                            }}
                        />
                    </div>

                    <div className={styles.inputGroup} style={{ marginTop: '10px' }}>
                        <label style={{ fontSize: '12px', color: '#646970' }}>Slug</label>
                        <input
                            type="text"
                            value={slug}
                            onChange={(e) => {
                                setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''))
                                setSlugManuallyEdited(true)
                            }}
                            className={styles.slugInput}
                            style={{ 
                                width: '100%', 
                                padding: '3px 8px', 
                                border: '1px solid #8c8f94', 
                                borderRadius: '4px',
                                fontSize: '13px'
                            }}
                        />
                    </div>

                    <div className={styles.box}>
                        <div className={styles.boxHeader}>Video Data</div>
                        <div className={styles.boxContent}>
                            <div className={styles.inputGroup}>
                                <label>External Embed Frame</label>
                                <div className={styles.description}>Please paste YouTube view iframe in the textarea</div>
                                <textarea
                                    value={externalEmbedFrame}
                                    onChange={(e) => setExternalEmbedFrame(e.target.value)}
                                    placeholder="<iframe ...></iframe>"
                                ></textarea>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Self Hosted</label>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span>{selfHostedId ? `File ID: ${selfHostedId}` : "No file selected"}</span>
                                    <button className={styles.actionBtn} onClick={() => {
                                        setMediaTarget("self_hosted")
                                        setShowMediaModal(true)
                                    }}>Add File</button>
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Featured</label>
                                <div className={styles.description}>Is this a featured video?</div>
                                <select value={featured} onChange={(e) => setFeatured(e.target.value)}>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Trending</label>
                                <div className={styles.description}>Is it a trending video?</div>
                                <select value={trending} onChange={(e) => setTrending(e.target.value)}>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Author</label>
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
                            </div>
                            <div className={styles.publishStatus}>
                                <div className={styles.statusRow}>
                                    <i className="bi bi-key"></i> Status: <strong>{status.charAt(0).toUpperCase() + status.slice(1)}</strong> <a>Edit</a>
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
                            {thumbnailUrl ? (
                                <div style={{ marginBottom: 10 }}>
                                    <img src={`/uploads/${thumbnailUrl}`} alt="Featured" style={{ width: '100%', height: 'auto', border: '1px solid #ddd', cursor: 'pointer' }} onClick={() => {
                                        setMediaTarget("thumbnail")
                                        setShowMediaModal(true)
                                    }} />
                                </div>
                            ) : null}
                            <a className={styles.setFeaturedImage} onClick={() => {
                                setMediaTarget("thumbnail")
                                setShowMediaModal(true)
                            }}>
                                {thumbnailId ? "Replace featured image" : "Set featured image"}
                            </a>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.boxHeader}>Video Categories</div>
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
                                {metaOptions.videoCategories.filter((c: any) => c.name.toLowerCase().includes(categorySearch.toLowerCase())).map((cat: any) => (
                                    <div className={styles.checkboxGroup} key={cat.term_id}>
                                        <input
                                            type="checkbox"
                                            id={`vcat_${cat.term_id}`}
                                            checked={selectedCategories.includes(cat.term_id.toString())}
                                            onChange={(e) => {
                                                const val = cat.term_id.toString()
                                                if (e.target.checked) {
                                                    setSelectedCategories([...selectedCategories, val])
                                                } else {
                                                    setSelectedCategories(selectedCategories.filter(c => c !== val))
                                                }
                                            }}
                                        />
                                        <label htmlFor={`vcat_${cat.term_id}`}>{cat.name}</label>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.addCategoryLink}>
                                <a onClick={() => setShowAddCategoryForm(!showAddCategoryForm)}>+ Add New Video Category</a>
                            </div>
                            {showAddCategoryForm && (
                                <div className={styles.addCategoryForm}>
                                    <input
                                        type="text"
                                        placeholder="Category Name"
                                        value={newCategoryName}
                                        onChange={(e) => setNewCategoryName(e.target.value)}
                                    />
                                    <select
                                        value={newCategoryParent}
                                        onChange={(e) => setNewCategoryParent(e.target.value)}
                                    >
                                        <option value="0">Parent Category</option>
                                        {metaOptions.videoCategories.map((c: any) => (
                                            <option key={c.term_id} value={c.term_id}>{c.name}</option>
                                        ))}
                                    </select>
                                    <button onClick={handleAddCategory}>Add New Category</button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.boxHeader}>Video Parent</div>
                        <div className={styles.boxContent}>
                            <select value={postParent} onChange={(e) => setPostParent(e.target.value)} style={{ width: '100%', padding: '5px' }}>
                                <option value="0">(no parent)</option>
                                {metaOptions.videos.filter((v: any) => v.id.toString() !== id).map((v: any) => (
                                    <option key={v.id} value={v.id}>{v.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {showMediaModal && (
                <MediaModal
                    onClose={() => setShowMediaModal(false)}
                    onSelect={(media) => {
                        if (mediaTarget === "thumbnail") {
                            setThumbnailId(media.id)
                            setThumbnailUrl(media.url)
                        } else {
                            setSelfHostedId(media.id)
                        }
                        setShowMediaModal(false)
                    }}
                    title={mediaTarget === "thumbnail" ? "Set Featured Image" : "Select Video File"}
                    defaultType={mediaTarget === "self_hosted" ? "video" : "all"}
                />
            )}

            <SuccessModal
                show={showSuccessModal}
                onClose={() => {
                    setShowSuccessModal(false)
                    window.location.href = "/admin/videos"
                }}
                message={`Your video has been ${status === 'publish' ? 'published' : 'saved'} successfully!`}
            />
        </div>
    )
}
