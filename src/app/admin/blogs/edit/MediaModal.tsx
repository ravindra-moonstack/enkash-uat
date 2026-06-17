import React, { useState, useEffect } from "react"
import { useMedia } from "@/src/app/admin/media/useMedia"
import styles from "@/src/app/admin/media/media.module.scss"
import ConfirmationModal from "../ConfirmationModal"

interface MediaModalProps {
  onClose: () => void
  onSelect: (data: { url: string; id: string; alt: string }) => void
  title?: string
  defaultType?: string
  selectedId?: string
}

export default function MediaModal({
  onClose,
  onSelect,
  title = "Media Library",
  defaultType = "all",
  selectedId,
}: MediaModalProps) {
  console.log("selectedId", selectedId)

  const {
    mediaItems,
    setMediaItems,
    loading,
    getFileUrl,
    typeFilter,
    setTypeFilter,
    dateFilter,
    setDateFilter,
    search,
    setSearch,
    availableDates,
    handleSearchKeyDown,
    loadMore,
    page,
    itemsPerPage,
    totalItems,
    handleFileUpload,
    handleFileSelect,
    handleUpdateMedia,
    fileInputRef,
    uploading,
    handleDeleteSingle,
    showConfirm,
    setShowConfirm,
    confirmConfig,
  } = useMedia(40, defaultType)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedMedia, setSelectedMedia] = useState<any>(null)
  const [activeTab, setActiveTab] = useState<"upload" | "library">("library")
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    if (selectedId && mediaItems.length > 0 && !selectedMedia) {
      const found = mediaItems.find(
        (item) => item.id.toString() === selectedId.toString()
      )
      if (found) {
        setSelectedMedia(found)
      } else {
        fetch(`/api/admin/media?id=${selectedId}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.success && data.data) {
              setSelectedMedia(data.data)
              setMediaItems((prev) => {
                if (prev.some((item) => item.id.toString() === selectedId.toString())) {
                  return prev
                }
                return [data.data, ...prev]
              })
            }
          })
          .catch((err) => console.error("Failed to fetch selected media:", err))
      }
    }
  }, [selectedId, mediaItems, selectedMedia, setMediaItems])

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      await handleFileUpload(Array.from(e.dataTransfer.files))
      setActiveTab("library")
    }
  }

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      style={{ zIndex: 9999 }}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "95%",
          maxWidth: "1400px",
          height: "94vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className={styles.modalHeader}>
          <h3>{title}</h3>
          <div className={styles.modalControls}>
            <button className={styles.closeBtn} onClick={onClose}>
              ×
            </button>
          </div>
        </div>

        <div
          className={styles.tabBar}
          style={{
            padding: "0 20px",
            borderBottom: "1px solid #ddd",
            display: "flex",
            gap: "20px",
          }}
        >
          <button
            className={`${styles.tab} ${activeTab === "upload" ? styles.active : ""}`}
            onClick={() => setActiveTab("upload")}
            style={{
              padding: "15px 5px",
              background: "none",
              border: "none",
              borderBottom:
                activeTab === "upload"
                  ? "3px solid #2271b1"
                  : "3px solid transparent",
              cursor: "pointer",
              fontWeight: 600,
              color: activeTab === "upload" ? "#2271b1" : "#646970",
            }}
          >
            Upload files
          </button>
          <button
            className={`${styles.tab} ${activeTab === "library" ? styles.active : ""}`}
            onClick={() => setActiveTab("library")}
            style={{
              padding: "15px 5px",
              background: "none",
              border: "none",
              borderBottom:
                activeTab === "library"
                  ? "3px solid #2271b1"
                  : "3px solid transparent",
              cursor: "pointer",
              fontWeight: 600,
              color: activeTab === "library" ? "#2271b1" : "#646970",
            }}
          >
            Media Library
          </button>
        </div>

        {activeTab === "upload" ? (
          <div
            className={styles.modalBody}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fff",
            }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div
              className={styles.uploadBox}
              style={{
                border: isDragging
                  ? "2px dashed #2271b1"
                  : "2px dashed #c3c4c7",
                padding: "60px",
                textAlign: "center",
                background: isDragging ? "#e5f5fa" : "#f0f0f1",
                transition: "all 0.2s ease-in-out",
                borderRadius: "8px",
              }}
            >
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 400,
                  marginBottom: "20px",
                  color: isDragging ? "#2271b1" : "inherit",
                }}
              >
                {isDragging ? "Drop files now!" : "Drop files to upload"}
              </h2>
              <p style={{ marginBottom: "20px", color: "#50575e" }}>or</p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => {
                  handleFileSelect(e)
                  setActiveTab("library")
                }}
                multiple
                style={{ display: "none" }}
              />
              <button
                className={styles.selectFilesBtn}
                onClick={handleUploadClick}
                disabled={uploading}
                style={{
                  padding: "8px 16px",
                  border: "1px solid #2271b1",
                  color: "#2271b1",
                  background: "#f6f7f7",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {uploading ? "Uploading..." : "Select Files"}
              </button>
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "12px",
                  color: "#50575e",
                }}
              >
                Maximum upload file size: 512 MB.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div
              className={styles.filterBar}
              style={{
                padding: "10px 20px",
                background: "#fff",
                borderBottom: "1px solid #ddd",
              }}
            >
              <div className={styles.filterLeft}>
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  style={{
                    padding: "4px 8px",
                    borderRadius: "4px",
                    border: "1px solid #8c8f94",
                    marginRight: "10px",
                  }}
                >
                  <option value="all">All Media Items</option>
                  <option value="images">Images</option>
                  <option value="video">Video</option>
                  <option value="documents">Documents</option>
                </select>

                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  style={{
                    padding: "4px 8px",
                    borderRadius: "4px",
                    border: "1px solid #8c8f94",
                  }}
                >
                  <option value="all">All dates</option>
                  {availableDates.map((d) => {
                    const dateObj = new Date(d + "-01")
                    const formatted = dateObj.toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })
                    return (
                      <option key={d} value={d}>
                        {formatted}
                      </option>
                    )
                  })}
                </select>
              </div>

              <div className={styles.filterRight}>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Search media..."
                  style={{
                    padding: "4px 8px",
                    borderRadius: "4px",
                    border: "1px solid #8c8f94",
                  }}
                />
              </div>
            </div>

            <div
              className={styles.modalBody}
              style={{ flex: 1, overflow: "hidden", display: "flex", gap: 0 }}
            >
              <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
                <div
                  className={styles.mediaGrid}
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(130px, 1fr))",
                    gap: "10px",
                    marginBottom: "20px",
                  }}
                >
                  {loading && mediaItems.length === 0 ? (
                    <div
                      style={{
                        textAlign: "center",
                        padding: "50px",
                        gridColumn: "1 / -1",
                      }}
                    >
                      Loading...
                    </div>
                  ) : (
                    mediaItems.map((item) => (
                      <div
                        key={item.id}
                        className={`${styles.mediaItem} ${selectedMedia?.id === item.id ? styles.selected : ""}`}
                        onClick={() => setSelectedMedia(item)}
                        style={{
                          aspectRatio: "1",
                          border:
                            selectedMedia?.id === item.id
                              ? "4px solid #2271b1"
                              : "1px solid #ddd",
                          position: "relative",
                          cursor: "pointer",
                          overflow: "hidden",
                        }}
                      >
                        {selectedMedia?.id === item.id && (
                          <div
                            className={styles.checkIndicator}
                            style={{
                              position: "absolute",
                              top: 5,
                              right: 5,
                              background: "#2271b1",
                              color: "#fff",
                              borderRadius: "2px",
                              padding: "2px",
                              zIndex: 1,
                            }}
                          >
                            <i className="bi bi-check"></i>
                          </div>
                        )}
                        {(() => {
                          const isImg =
                            item.image_url &&
                            item.image_url.match(
                              /\.(jpeg|jpg|gif|png|webp|svg)$/i
                            )
                          return isImg ? (
                            <img
                              src={getFileUrl(item.image_url)}
                              alt={item.attachment_image_alt || "Media Item"}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          ) : (
                            <div
                              className={styles.docIcon}
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "#fff",
                              }}
                            >
                              <i
                                className="bi bi-file-earmark-text"
                                style={{ fontSize: "32px" }}
                              ></i>
                              <div
                                style={{
                                  fontSize: "10px",
                                  marginTop: "5px",
                                  wordBreak: "break-all",
                                  textAlign: "center",
                                  padding: "0 5px",
                                }}
                              >
                                {item.image_url.split("/").pop()}
                              </div>
                            </div>
                          )
                        })()}
                      </div>
                    ))
                  )}
                </div>
                {mediaItems.length > 0 && page * itemsPerPage < totalItems && (
                  <div style={{ textAlign: "center", padding: "20px 0" }}>
                    <button
                      onClick={loadMore}
                      disabled={loading}
                      style={{
                        padding: "8px 16px",
                        background: "#2271b1",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      {loading ? "Loading..." : "Load more"}
                    </button>
                  </div>
                )}
              </div>

              {selectedMedia && (
                <div
                  className={styles.mediaDetails}
                  style={{
                    width: "350px",
                    background: "#f6f7f7",
                    padding: "20px",
                    borderLeft: "1px solid #ddd",
                    overflowY: "auto",
                  }}
                >
                  <h4 style={{ margin: "0 0 15px 0" }}>ATTACHMENT DETAILS</h4>
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      marginBottom: "20px",
                    }}
                  >
                    <div style={{ width: "80px", height: "80px" }}>
                      {(() => {
                        const isImg =
                          selectedMedia.image_url &&
                          selectedMedia.image_url.match(
                            /\.(jpeg|jpg|gif|png|webp|svg)$/i
                          )
                        return isImg ? (
                          <img
                            src={getFileUrl(selectedMedia.image_url)}
                            alt="Preview"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <i
                            className="bi bi-file-earmark-text"
                            style={{ fontSize: "40px" }}
                          ></i>
                        )
                      })()}
                    </div>
                    <div style={{ fontSize: "12px", flex: 1 }}>
                      <div style={{ fontWeight: 700, wordBreak: "break-all" }}>
                        {selectedMedia.image_url.split("/").pop()}
                      </div>
                      <div>
                        {new Date(selectedMedia.created_at).toLocaleDateString(
                          "en-US",
                          { month: "long", day: "numeric", year: "numeric" }
                        )}
                      </div>
                      <a
                        onClick={() => {
                          handleDeleteSingle(selectedMedia.id)
                          setSelectedMedia(null)
                        }}
                        style={{
                          color: "#d63638",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        Delete Permanently
                      </a>
                    </div>
                  </div>

                  <hr
                    style={{
                      border: "none",
                      borderTop: "1px solid #ddd",
                      margin: "20px 0",
                    }}
                  />

                  <div
                    className={styles.inputGroup}
                    style={{
                      marginBottom: "10px",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        color: "#646970",
                        textAlign: "left",
                      }}
                    >
                      Alt Text
                    </label>
                    <textarea
                      value={selectedMedia.attachment_image_alt || ""}
                      onChange={(e) =>
                        setSelectedMedia({
                          ...selectedMedia,
                          attachment_image_alt: e.target.value,
                        })
                      }
                      onBlur={(e) =>
                        handleUpdateMedia(
                          selectedMedia.id,
                          "attachment_image_alt",
                          e.target.value
                        )
                      }
                      style={{
                        width: "100%",
                        minHeight: "50px",
                        padding: "5px",
                        border: "1px solid #8c8f94",
                        borderRadius: "3px",
                        color: "#2b2b2b",
                      }}
                    />
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#646970",
                        marginTop: "3px",
                      }}
                    >
                      <a
                        href="https://www.w3.org/WAI/tutorials/images/decision-tree/"
                        target="_blank"
                        style={{ color: "#2271b1" }}
                      >
                        Learn how to describe the purpose of the image
                      </a>
                      . Leave empty if the image is purely decorative.
                    </div>
                  </div>
                  <div
                    className={styles.inputGroup}
                    style={{ marginBottom: "10px" }}
                  >
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        color: "#646970",
                        marginBottom: "5px",
                      }}
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      value={selectedMedia.title || ""}
                      onChange={(e) =>
                        setSelectedMedia({
                          ...selectedMedia,
                          title: e.target.value,
                        })
                      }
                      onBlur={(e) =>
                        handleUpdateMedia(
                          selectedMedia.id,
                          "title",
                          e.target.value
                        )
                      }
                      style={{
                        width: "100%",
                        padding: "5px",
                        border: "1px solid #8c8f94",
                        borderRadius: "3px",
                      }}
                    />
                  </div>

                  <div
                    className={styles.inputGroup}
                    style={{ marginBottom: "20px" }}
                  >
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        color: "#646970",
                        marginBottom: "5px",
                      }}
                    >
                      Description
                    </label>
                    <textarea
                      value={selectedMedia.content || ""}
                      onChange={(e) =>
                        setSelectedMedia({
                          ...selectedMedia,
                          content: e.target.value,
                        })
                      }
                      onBlur={(e) =>
                        handleUpdateMedia(
                          selectedMedia.id,
                          "content",
                          e.target.value
                        )
                      }
                      style={{
                        width: "100%",
                        minHeight: "80px",
                        padding: "5px",
                        border: "1px solid #8c8f94",
                        borderRadius: "3px",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      background: "#fff",
                      borderTop: "1px solid #ddd",
                      padding: "15px",
                      margin: "0 -20px -20px -20px",
                      position: "sticky",
                      bottom: 0,
                    }}
                  >
                    <button
                      onClick={() =>
                        onSelect({
                          url: getFileUrl(selectedMedia.image_url),
                          id: selectedMedia.id.toString(),
                          alt: selectedMedia.attachment_image_alt || "",
                        })
                      }
                      style={{
                        width: "100%",
                        padding: "10px",
                        background: "#2271b1",
                        color: "#fff",
                        border: "none",
                        borderRadius: "3px",
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {confirmConfig && (
        <ConfirmationModal
          show={showConfirm}
          onClose={() => setShowConfirm(false)}
          onConfirm={confirmConfig.onConfirm}
          title={confirmConfig.title}
          message={confirmConfig.message}
          type={confirmConfig.type}
          confirmLabel="Confirm"
        />
      )}
    </div>
  )
}
