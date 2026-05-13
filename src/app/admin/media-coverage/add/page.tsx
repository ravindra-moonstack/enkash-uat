"use client"

import React from "react"
import Link from "next/link"
import styles from "../../blogs/add/add.module.scss"
import { useAddMediaCoverage } from "./useAddMediaCoverage"
import MediaModal from "../../blogs/add/MediaModal"
import { useRouter } from "next/navigation"

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
        handleSave,
        currentUser,
        setIsDirty
    } = useAddMediaCoverage()

    const router = useRouter()
    const [activeEditors, setActiveEditors] = React.useState<any[]>([])
    const editorSessionId = React.useRef<string>(Math.random().toString(36).substring(2, 10))

    React.useEffect(() => {
        if (!id || !currentUser) return

        const checkActiveEditors = async () => {
            try {
                const res = await fetch("/api/admin/active-editors", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        module: "media-coverage",
                        postId: id,
                        editorId: editorSessionId.current,
                        userId: currentUser.id,
                        userName: currentUser.name
                    }),
                })
                const data = await res.json()
                if (data.success && data.isLocked) {
                    setActiveEditors([{ user_name: data.lockedBy }])
                } else {
                    setActiveEditors([])
                }
            } catch (err) {
                console.error("Error checking active editors", err)
            }
        }

        const releaseLock = () => {
            if (id) {
                fetch(
                    `/api/admin/active-editors?module=media-coverage&postId=${id}&editorId=${editorSessionId.current}`,
                    {
                        method: "DELETE",
                        keepalive: true,
                    }
                ).catch((e) => console.error("Failed to release lock", e))
            }
        }

        checkActiveEditors()
        const interval = setInterval(checkActiveEditors, 5000)
        window.addEventListener("beforeunload", releaseLock)

        return () => {
            clearInterval(interval)
            window.removeEventListener("beforeunload", releaseLock)
            releaseLock()
        }
    }, [id, currentUser])

    const isLocked = activeEditors.length > 0

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{id ? "Edit Media Coverage" : "Add Media Coverage"}</h1>
            </div>

            {isLocked && (
                <div className={styles.lockModalOverlay}>
                    <div className={styles.lockModal}>
                        <i className="bi bi-lock-fill"></i>
                        <h2>Item Locked</h2>
                        <p>
                            <strong>{activeEditors.map((e: any) => e.user_name).join(", ")}</strong> is currently editing this item.
                            To prevent overwriting changes, editing has been disabled.
                        </p>
                        <div className={styles.modalFooter}>
                            <button className={styles.cancelBtn} onClick={() => {
                                setIsDirty(false);
                                router.push("/admin/media-coverage");
                            }}>OK</button>
                        </div>
                    </div>
                </div>
            )}

            <div className={`${styles.layout} ${isLocked ? styles.locked : ""}`}>
                <fieldset disabled={isLocked} className={styles.leftColumn}>
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
                </fieldset>

                <fieldset disabled={isLocked} className={styles.rightColumn}>
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
                </fieldset>
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
