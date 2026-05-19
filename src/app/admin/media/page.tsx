"use client"

import React from "react"
import Image from "next/image"
import styles from "./media.module.scss"
import Link from "next/link"

import { useMedia } from "./useMedia"
import ConfirmationModal from "../blogs/ConfirmationModal"

export default function MediaPage() {
    const {
        showUpload, setShowUpload,
        mediaItems,
        totalItems,
        page, setPage,
        loading,
        uploading,
        urlCopied,
        fileInputRef,
        typeFilter, setTypeFilter,
        dateFilter, setDateFilter,
        search, setSearch,
        availableDates,
        bulkSelectMode,
        selectedItems,
        modalItem,
        modalIndex,
        itemsPerPage,
        fetchMedia,
        handleSearch,
        handleSearchKeyDown,
        loadMore,
        toggleBulkMode,
        handleItemClick,
        handleDeleteSingle,
        handleDeleteSelected,
        handleModalNavigate,
        closeAndResetModal,
        getFileUrl,
        handleFileSelect,
        handleDragOver,
        handleDrop,
        handleUpdateMedia,
        copyToClipboard,
        handleDownload,
        showConfirm,
        setShowConfirm,
        confirmConfig
    } = useMedia()

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Media Library</h1>
                <button className={styles.addBtn} onClick={() => setShowUpload(prev => !prev)}>
                    Add Media File
                </button>
            </div>

            {showUpload && (
                <div
                    className={styles.uploadBox}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <button className={styles.closeUpload} onClick={() => setShowUpload(false)}>×</button>
                    <h2>Drop files to upload</h2>
                    <p>or</p>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileSelect}
                        multiple
                    />
                    <button
                        className={styles.selectFilesBtn}
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                    >
                        {uploading ? "Uploading..." : "Select Files"}
                    </button>
                    <div className={styles.uploadNote}>Maximum upload file size: 2 GB.</div>
                </div>
            )}

            <div className={styles.filterBar}>
                <div className={styles.filterLeft}>

                    <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                        <option value="all">All Media Items</option>
                        <option value="images">Images</option>
                        <option value="audio">Audio</option>
                        <option value="video">Video</option>
                        <option value="documents">Documents</option>
                    </select>

                    <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
                        <option value="all">All dates</option>
                        {availableDates.map(d => {
                            const dateObj = new Date(d + "-01")
                            const formatted = dateObj.toLocaleDateString("en-US", { month: "long", year: "numeric" })
                            return <option key={d} value={d}>{formatted}</option>
                        })}
                    </select>

                    <button className={styles.bulkSelectBtn} onClick={() => { setPage(1); fetchMedia(1, true); }}>Apply</button>

                    {bulkSelectMode ? (
                        <>
                            <button className={styles.cancelBulkBtn} onClick={toggleBulkMode}>Cancel Bulk Select</button>
                            <button className={styles.deleteSelectedBtn} onClick={handleDeleteSelected}>
                                Delete Selected ({selectedItems.size})
                            </button>
                        </>
                    ) : (
                        <button className={styles.bulkSelectBtn} onClick={toggleBulkMode}>Bulk select</button>
                    )}
                </div>

                <div className={styles.filterRight}>
                    <div style={{ display: 'flex', gap: '5px' }}>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={handleSearchKeyDown}
                            placeholder="Press enter to search"
                        />
                        <button className={styles.bulkSelectBtn} onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>

            {loading && mediaItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '50px', color: '#50575e' }}>
                    <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}></div>
                    <p style={{ marginTop: '15px' }}>Loading API...</p>
                </div>
            ) : (
                <div className={styles.mediaGrid}>
                    {mediaItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`${styles.mediaItem} ${selectedItems.has(item.id) ? styles.selected : ''}`}
                            onClick={() => handleItemClick(item, index)}
                        >
                            {bulkSelectMode && selectedItems.has(item.id) && (
                                <div className={styles.checkIndicator}><i className="bi bi-check"></i></div>
                            )}
                            {(() => {
                                const isImg = item.image_url && item.image_url.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i);
                                const isVid = item.image_url && item.image_url.match(/\.(mp4|webm|mov)$/i);
                                const isAudio = item.image_url && item.image_url.match(/\.(mp3|wav|ogg)$/i);

                                return (
                                    <>
                                        {isImg ? (
                                            <img src={getFileUrl(item.image_url)} alt={item.attachment_image_alt || 'Media Item'} />
                                        ) : isVid ? (
                                            <div className={styles.docIcon}>
                                                <i className="bi bi-file-play"></i>
                                            </div>
                                        ) : isAudio ? (
                                            <div className={styles.docIcon}>
                                                <i className="bi bi-file-music"></i>
                                            </div>
                                        ) : (
                                            <div className={styles.docIcon}>
                                                <i className="bi bi-file-earmark-text"></i>
                                            </div>
                                        )}

                                        {!isImg && (
                                            <div className={styles.mediaTitle}>{item.title || item.image_url || "Untitled"}</div>
                                        )}
                                    </>
                                );
                            })()}
                        </div>
                    ))}
                </div>
            )}

            {mediaItems.length > 0 && page * itemsPerPage < totalItems && (
                <div className={styles.loadMoreContainer}>
                    <span className={styles.itemCount}>Showing {mediaItems.length} of {totalItems} media items</span>
                    <button className={styles.loadMoreBtn} onClick={loadMore} disabled={loading}>
                        {loading ? 'Loading...' : 'Load more'}
                    </button>
                </div>
            )}

            {/* Modal */}
            {modalItem && (
                <div className={styles.modalOverlay} onClick={closeAndResetModal}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3>Attachment details</h3>
                            <div className={styles.modalControls}>
                                <button onClick={() => handleModalNavigate('prev')} disabled={modalIndex <= 0}><i className="bi bi-chevron-left"></i></button>
                                <button onClick={() => handleModalNavigate('next')} disabled={modalIndex >= mediaItems.length - 1}><i className="bi bi-chevron-right"></i></button>
                                <button className={styles.closeBtn} onClick={closeAndResetModal}>×</button>
                            </div>
                        </div>
                        <div className={styles.modalBody} key={modalItem.id}>
                            <div className={styles.mediaPreviewContainer}>
                                <div className={styles.mediaPreview}>
                                    {(() => {
                                        const isImg = modalItem.image_url && modalItem.image_url.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i);
                                        const isVid = modalItem.image_url && modalItem.image_url.match(/\.(mp4|webm|mov)$/i);
                                        const isAudio = modalItem.image_url && modalItem.image_url.match(/\.(mp3|wav|ogg)$/i);

                                        if (isImg) return <img src={getFileUrl(modalItem.image_url)} alt={modalItem.attachment_image_alt} />;
                                        if (isVid) return <i className="bi bi-file-play" style={{ fontSize: '100px', color: '#50575e' }}></i>;
                                        if (isAudio) return <i className="bi bi-file-music" style={{ fontSize: '100px', color: '#50575e' }}></i>;
                                        return <i className="bi bi-file-earmark-text" style={{ fontSize: '100px', color: '#50575e' }}></i>;
                                    })()}
                                </div>
                            </div>
                            <div className={styles.mediaDetails}>
                                <div className={styles.infoBlock}>
                                    <strong>Uploaded on:</strong> {new Date(modalItem.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}<br />
                                    <strong>Uploaded by:</strong> <a>{modalItem.author_name || 'Admin'}</a><br />
                                    <strong>File name:</strong> {modalItem.image_url ? modalItem.image_url.split('/').pop() : ''}<br />
                                    <strong>File type:</strong> {modalItem.image_url ? modalItem.image_url.match(/\.([0-9a-z]+)(?:[\?#]|$)/i)?.[0].toLowerCase() || 'unknown' : 'unknown'}<br />
                                    <strong>File size:</strong> {modalItem.file_size || 'Unknown'}<br />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Alternative Text</label>
                                    <input
                                        type="text"
                                        defaultValue={modalItem.attachment_image_alt || ''}
                                        onBlur={(e) => handleUpdateMedia(modalItem.id, 'attachment_image_alt', e.target.value)}
                                    />
                                </div>
                                <div className={styles.inputGroup} style={{ marginBottom: 5 }}>
                                    <label></label>
                                    <span style={{ fontSize: 10, color: '#50575e' }}><a>Learn how to describe the purpose of the image</a>. Leave empty if decorative.</span>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        defaultValue={modalItem.title || ''}
                                        onBlur={(e) => handleUpdateMedia(modalItem.id, 'title', e.target.value)}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>Description</label>
                                    <textarea
                                        defaultValue={modalItem.content || ''}
                                        onBlur={(e) => handleUpdateMedia(modalItem.id, 'content', e.target.value)}
                                    ></textarea>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>File URL</label>
                                    <input type="text" readOnly value={modalItem.image_url ? window.location.origin + getFileUrl(modalItem.image_url) : ''} />
                                </div>

                                <button
                                    className={styles.copyUrlBtn}
                                    onClick={() => copyToClipboard(window.location.origin + getFileUrl(modalItem.image_url))}
                                >
                                    {urlCopied ? "Copied!" : "Copy URL to clipboard"}
                                </button>

                                <div className={styles.attachmentOptions}>
                                    <a style={{ cursor: 'pointer' }} onClick={(e) => {
                                        e.preventDefault();
                                        handleDownload(window.location.origin + getFileUrl(modalItem.image_url), modalItem.image_url.split('/').pop() || 'download')
                                    }}>Download file</a>
                                    {' | '}
                                    <button className={styles.dangerText} onClick={() => handleDeleteSingle(modalItem.id)}>Delete permanently</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
