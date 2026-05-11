"use client"

import React from "react"
import Link from "next/link"
import styles from "../../blogs/add/add.module.scss"
import { useAddMediaCoverage } from "./useAddMediaCoverage"
import MediaModal from "../../blogs/add/MediaModal"

export default function AddMediaCoveragePage() {
    const {
        id,
        title, setTitle,
        slug, setSlug,
        status, setStatus,
        author, setAuthor,
        postParent, setPostParent,
        imageUrl, setImageUrl,
        setMediaCoverageImage,
        mediaCoverageDate, setMediaCoverageDate,
        mediaCoverageHeading, setMediaCoverageHeading,
        mediaCoverageDescription, setMediaCoverageDescription,
        mediaCoverageMediaLink, setMediaCoverageMediaLink,
        metaOptions,
        showMediaModal, setShowMediaModal,
        handleSave
    } = useAddMediaCoverage()

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{id ? "Edit Media Coverage" : "Add Media Coverage"}</h1>
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
                                if (!id) {
                                    setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''))
                                }
                            }}
                        />
                    </div>

                    <div className={styles.box}>
                        <div className={styles.boxHeader}>Media Coverage Data</div>
                        <div className={styles.boxContent}>
                            <div className={styles.inputGroup}>
                                <label>Date</label>
                                <input
                                    type="date"
                                    value={mediaCoverageDate}
                                    onChange={(e) => setMediaCoverageDate(e.target.value)}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Heading</label>
                                <input
                                    type="text"
                                    value={mediaCoverageHeading}
                                    onChange={(e) => setMediaCoverageHeading(e.target.value)}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Description</label>
                                <textarea
                                    value={mediaCoverageDescription}
                                    onChange={(e) => setMediaCoverageDescription(e.target.value)}
                                ></textarea>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Media Link</label>
                                <input
                                    type="text"
                                    value={mediaCoverageMediaLink}
                                    onChange={(e) => setMediaCoverageMediaLink(e.target.value)}
                                />
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
                                    <i className="bi bi-key"></i> Status: <strong>{status.charAt(0).toUpperCase() + status.slice(1)}</strong>
                                </div>
                            </div>
                            <div className={styles.publishFooter}>
                                <button className={styles.primaryBtn} onClick={() => handleSave(true)}>
                                    {status === "publish" ? "Update" : "Publish"}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.boxHeader}>Coverage Image</div>
                        <div className={styles.boxContent}>
                            {imageUrl ? (
                                <div style={{ marginBottom: 10 }}>
                                    <img src={`${imageUrl}`} alt="Featured" style={{ width: '100%', height: 'auto', border: '1px solid #ddd', cursor: 'pointer' }} onClick={() => setShowMediaModal(true)} />
                                </div>
                            ) : null}
                            <a className={styles.setFeaturedImage} onClick={() => setShowMediaModal(true)}>
                                {imageUrl ? "Replace image" : "Set coverage image"}
                            </a>
                        </div>
                    </div>


                    <div className={styles.box}>
                        <div className={styles.boxHeader}>Parent</div>
                        <div className={styles.boxContent}>
                            <select value={postParent} onChange={(e) => setPostParent(e.target.value)} style={{ width: '100%', padding: '5px' }}>
                                <option value="0">(no parent)</option>
                                {metaOptions.items?.filter((v: any) => v.id.toString() !== id).map((v: any) => (
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
                        setMediaCoverageImage(media.id)
                        setImageUrl(media.url)
                        setShowMediaModal(false)
                    }}
                    title="Set Coverage Image"
                />
            )}
        </div>
    )
}
