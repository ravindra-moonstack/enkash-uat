"use client"

import React, { useState, useEffect, useRef } from "react"
import styles from "./uploads.module.scss"
import { useToast } from "@/src/context/ToastContext"
import ConfirmationModal from "../blogs/ConfirmationModal"

interface FileItem {
  name: string
  path: string
  url: string
  size: number
  mtime: number
  birthtime: number
  dbInfo?: {
    id: number
    title: string
    content: string
    attachment_image_alt: string
    file_size: string
    created_at: string
    updated_at: string
  } | null
  usages: {
    type: string
    id: number
    title: string
  }[]
}

interface Stats {
  totalFiles: number
  totalSize: number
  filesInUse: number
  untrackedFiles: number
}

export default function UploadsManagerPage() {
  const { showToast } = useToast()
  const [files, setFiles] = useState<FileItem[]>([])
  const [totalItems, setTotalItems] = useState(0)
  const [stats, setStats] = useState<Stats>({
    totalFiles: 0,
    totalSize: 0,
    filesInUse: 0,
    untrackedFiles: 0,
  })
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)

  // Filters & Pagination State
  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [usageFilter, setUsageFilter] = useState("all") // all, used, unused
  const [source, setSource] = useState("uploads") // uploads or backup
  const [sortField, setSortField] = useState("mtime")
  const [sortOrder, setSortOrder] = useState("desc")
  const [page, setPage] = useState(1)
  const limit = 32

  // Custom Upload Target folder path
  const [targetFolder, setTargetFolder] = useState("")

  // UI State
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const [urlCopied, setUrlCopied] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Rename & Edit details state
  const [renameValue, setRenameValue] = useState("")
  const [metaTitle, setMetaTitle] = useState("")
  const [metaAlt, setMetaAlt] = useState("")
  const [metaDesc, setMetaDesc] = useState("")
  const [updatingDetails, setUpdatingDetails] = useState(false)

  // Actions loading state
  const [performingAction, setPerformingAction] = useState(false)

  // Delete safety state
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteUsages, setDeleteUsages] = useState<
    { type: string; title: string }[]
  >([])
  const [isDeleting, setIsDeleting] = useState(false)

  // Batch Operations State
  const [selectedPaths, setSelectedPaths] = useState<string[]>([])
  const [batchProcessing, setBatchProcessing] = useState(false)
  const [batchProgress, setBatchProgress] = useState<{
    current: number
    total: number
  } | null>(null)

  // Clear selection when source, filters, sorting, search, or page changes
  useEffect(() => {
    setSelectedPaths([])
  }, [page, typeFilter, usageFilter, source, sortField, sortOrder, search])

  const toggleFileSelection = (filePath: string) => {
    setSelectedPaths((prev) =>
      prev.includes(filePath)
        ? prev.filter((p) => p !== filePath)
        : [...prev, filePath]
    )
  }

  const handleSelectAll = () => {
    const visiblePaths = files.map((f) => f.path)
    const allSelected = visiblePaths.every((p) => selectedPaths.includes(p))
    if (allSelected) {
      setSelectedPaths((prev) => prev.filter((p) => !visiblePaths.includes(p)))
    } else {
      setSelectedPaths((prev) => {
        const next = [...prev]
        visiblePaths.forEach((p) => {
          if (!next.includes(p)) next.push(p)
        })
        return next
      })
    }
  }

  const executeBatchAction = async (action: "batchBackup" | "batchRestore") => {
    if (selectedPaths.length === 0) return
    setBatchProcessing(true)
    setBatchProgress({ current: 0, total: selectedPaths.length })

    const batchSize = 10
    const pathsToProcess = [...selectedPaths]
    let succeededCount = 0
    let failedCount = 0

    try {
      for (let i = 0; i < pathsToProcess.length; i += batchSize) {
        const chunk = pathsToProcess.slice(i, i + batchSize)
        const res = await fetch(`/api/admin/uploads?action=${action}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filePaths: chunk }),
        })
        const data = await res.json()
        if (data.success) {
          succeededCount += chunk.length
        } else {
          failedCount += chunk.length
          showToast(data.error || "Batch operation failed partially", "error")
        }
        setBatchProgress({
          current: Math.min(i + chunk.length, pathsToProcess.length),
          total: pathsToProcess.length,
        })
      }

      showToast(
        `Batch ${action === "batchBackup" ? "backup" : "restore"} completed. Succeeded: ${succeededCount}, Failed: ${failedCount}`,
        failedCount > 0 ? "warning" : "success"
      )

      setSelectedPaths([])
      setSelectedFile(null)
      await fetchFiles()
    } catch (err) {
      console.error(err)
      showToast("Network error during batch operation", "error")
    } finally {
      setBatchProcessing(false)
      setBatchProgress(null)
    }
  }

  // Fetch files
  const fetchFiles = async () => {
    setLoading(true)
    try {
      const url = new URL("/api/admin/uploads", window.location.origin)
      url.searchParams.append("search", search)
      url.searchParams.append("type", typeFilter)
      url.searchParams.append("source", source)
      if (source === "uploads") {
        url.searchParams.append("usageFilter", usageFilter)
      }
      url.searchParams.append("sortField", sortField)
      url.searchParams.append("sortOrder", sortOrder)
      url.searchParams.append("page", page.toString())
      url.searchParams.append("limit", limit.toString())

      const res = await fetch(url.toString())
      const data = await res.json()
      if (data.success) {
        setFiles(data.files)
        setTotalItems(data.totalItems)
        setStats(data.stats)
      } else {
        showToast(data.error || "Failed to load files", "error")
      }
    } catch (err: any) {
      showToast("Error connecting to API", "error")
    } finally {
      setLoading(false)
    }
  }

  const handleExportSheet = async () => {
    try {
      showToast("Generating sheet, please wait...", "info")
      const url = "/api/admin/uploads?action=exportSheet"
      const res = await fetch(url)
      if (res.status === 200) {
        const blob = await res.blob()
        const downloadUrl = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = downloadUrl
        a.download = "uploads_sheet.csv"
        document.body.appendChild(a)
        a.click()
        a.remove()
        window.URL.revokeObjectURL(downloadUrl)
        showToast("Sheet exported successfully!", "success")
      } else {
        const data = await res.json()
        showToast(data.error || "Failed to export sheet", "error")
      }
    } catch (err: any) {
      showToast("Error exporting sheet", "error")
    }
  }

  useEffect(() => {
    fetchFiles()
  }, [page, typeFilter, usageFilter, source, sortField, sortOrder])

  // Trigger search on Enter key or button click
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setPage(1)
    fetchFiles()
  }

  // Handle Drag & Drop
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await handleUpload(Array.from(e.dataTransfer.files))
    }
  }

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      await handleUpload(Array.from(e.target.files))
    }
  }

  // Upload files
  const handleUpload = async (filesToUpload: File[]) => {
    setUploading(true)
    const formData = new FormData()
    filesToUpload.forEach((file) => {
      formData.append("files", file)
    })
    if (targetFolder) {
      formData.append("targetFolder", targetFolder)
    }

    try {
      const res = await fetch("/api/admin/uploads", {
        method: "POST",
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        showToast(
          `${filesToUpload.length} file(s) uploaded successfully`,
          "success"
        )
        setPage(1)
        setSource("uploads")
        fetchFiles()
      } else {
        showToast(data.error || "Upload failed", "error")
      }
    } catch (err) {
      showToast("Network error during upload", "error")
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ""
    }
  }

  // Select a file to inspect
  const handleSelectFile = (file: FileItem) => {
    setSelectedFile(file)
    setRenameValue(file.name)
    setMetaTitle(file.dbInfo?.title || "")
    setMetaAlt(file.dbInfo?.attachment_image_alt || "")
    setMetaDesc(file.dbInfo?.content || "")
  }

  // Update file details / Rename
  const handleUpdateDetails = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile) return
    setUpdatingDetails(true)

    try {
      const res = await fetch("/api/admin/uploads", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filePath: selectedFile.path,
          newFileName:
            renameValue !== selectedFile.name ? renameValue : undefined,
          title: metaTitle,
          attachment_image_alt: metaAlt,
          content: metaDesc,
        }),
      })

      const data = await res.json()
      if (data.success) {
        showToast("File details updated successfully", "success")
        await fetchFiles()
        setSelectedFile(null)
      } else {
        showToast(data.error || "Update failed", "error")
      }
    } catch (err) {
      showToast("Error updating file details", "error")
    } finally {
      setUpdatingDetails(false)
    }
  }

  // Move Unused File to Backup
  const handleMoveToBackup = async (file: FileItem) => {
    setPerformingAction(true)
    try {
      const res = await fetch("/api/admin/uploads?action=backup", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filePath: file.path }),
      })
      const data = await res.json()
      if (data.success) {
        showToast("File moved to backup folder", "success")
        setSelectedFile(null)
        fetchFiles()
      } else {
        showToast(data.error || "Failed to back up file", "error")
      }
    } catch (err) {
      showToast("Network error during backup", "error")
    } finally {
      setPerformingAction(false)
    }
  }

  // Restore File from Backup
  const handleRestoreFile = async (file: FileItem) => {
    setPerformingAction(true)
    try {
      const res = await fetch("/api/admin/uploads?action=restore", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filePath: file.path }),
      })
      const data = await res.json()
      if (data.success) {
        showToast("File restored back to uploads folder", "success")
        setSelectedFile(null)
        setSource("uploads")
        fetchFiles()
      } else {
        showToast(data.error || "Failed to restore file", "error")
      }
    } catch (err) {
      showToast("Network error during restore", "error")
    } finally {
      setPerformingAction(false)
    }
  }

  // Handle Delete Click
  const handleDeleteClick = () => {
    if (!selectedFile) return
    if (source === "backup") {
      setDeleteUsages([])
    } else if (selectedFile.usages && selectedFile.usages.length > 0) {
      setDeleteUsages(selectedFile.usages)
    } else {
      setDeleteUsages([])
    }
    setShowDeleteConfirm(true)
  }

  const handleDeleteConfirm = async () => {
    if (!selectedFile) return
    setIsDeleting(true)
    try {
      const url = `/api/admin/uploads?filePath=${encodeURIComponent(selectedFile.path)}&source=${source}&force=true`
      const res = await fetch(url, { method: "DELETE" })
      const data = await res.json()
      if (data.success) {
        showToast("File deleted permanently", "success")
        setSelectedFile(null)
        fetchFiles()
      } else {
        showToast(data.error || "Delete failed", "error")
      }
    } catch (err) {
      showToast("Error deleting file", "error")
    } finally {
      setIsDeleting(false)
      setShowDeleteConfirm(false)
    }
  }

  // Copy to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setUrlCopied(true)
    showToast("URL copied to clipboard", "success")
    setTimeout(() => setUrlCopied(false), 2000)
  }

  // Download file helper
  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url)
      const blob = await response.blob()
      const link = document.createElement("a")
      link.href = window.URL.createObjectURL(blob)
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(link.href)
    } catch (err) {
      showToast("Failed to download file", "error")
    }
  }

  // Format bytes to readable size
  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  // File Preview Helper
  const renderPreviewIcon = (file: FileItem, styleClass: string) => {
    const ext = "." + file.name.split(".").pop()?.toLowerCase()
    const isImg = [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"].includes(
      ext
    )
    const isVid = [".mp4", ".webm", ".mov"].includes(ext)
    const isAudio = [".mp3", ".wav", ".ogg"].includes(ext)
    const isDoc = [
      ".pdf",
      ".doc",
      ".docx",
      ".xls",
      ".xlsx",
      ".txt",
      ".csv",
      ".ppt",
      ".pptx",
    ].includes(ext)

    if (isImg) {
      return <img src={file.url} alt={file.name} className={styleClass} />
    }

    let icon = "bi-file-earmark"
    let color = "#6c757d"

    if (isVid) {
      icon = "bi-file-earmark-play"
      color = "#dc3545"
    } else if (isAudio) {
      icon = "bi-file-earmark-music"
      color = "#fd7e14"
    } else if (isDoc) {
      if (ext === ".pdf") {
        icon = "bi-file-earmark-pdf"
        color = "#e44d26"
      } else if ([".xls", ".xlsx", ".csv"].includes(ext)) {
        icon = "bi-file-earmark-spreadsheet"
        color = "#1f7244"
      } else {
        icon = "bi-file-earmark-text"
        color = "#007bff"
      }
    }

    return (
      <div className={styles.fileFallbackIcon} style={{ color }}>
        <i className={`bi ${icon}`}></i>
      </div>
    )
  }

  const totalPages = Math.ceil(totalItems / limit)

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1>Uploads Folder Manager</h1>
          <p className={styles.subtitle}>
            Direct filesystem explorer for files inside `/uploads` directory
          </p>
        </div>

        <div className={styles.headerActions}>
          <button
            className={styles.exportSheetBtn}
            onClick={handleExportSheet}
            title="Download CSV Sheet containing all uploads and project root images"
          >
            <i className="bi bi-file-earmark-spreadsheet"></i>
            Export Sheet
          </button>

          {/* Source Toggle Selector */}
          <div className={styles.sourceToggles}>
            <button
              className={`${styles.sourceBtn} ${source === "uploads" ? styles.sourceBtnActive : ""}`}
              onClick={() => {
                setSource("uploads")
                setPage(1)
                setSelectedFile(null)
              }}
            >
              <i className="bi bi-folder-check"></i>
              Active Uploads
            </button>
            <button
              className={`${styles.sourceBtn} ${source === "backup" ? styles.sourceBtnActive : ""}`}
              onClick={() => {
                setSource("backup")
                setPage(1)
                setSelectedFile(null)
              }}
            >
              <i className="bi bi-archive"></i>
              Backup Folder
            </button>
          </div>
        </div>
      </div>

      {/* Stats Board */}
      <div className={styles.statsStrip}>
        <div className={styles.statCard}>
          <div
            className={styles.statIcon}
            style={{ background: "#e8f0fe", color: "#1a73e8" }}
          >
            <i className="bi bi-files"></i>
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Total Files</span>
            <span className={styles.statValue}>{stats.totalFiles}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div
            className={styles.statIcon}
            style={{ background: "#e6f4ea", color: "#137333" }}
          >
            <i className="bi bi-database"></i>
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Space Used</span>
            <span className={styles.statValue}>
              {formatBytes(stats.totalSize)}
            </span>
          </div>
        </div>
        {source === "uploads" ? (
          <>
            <div className={styles.statCard}>
              <div
                className={styles.statIcon}
                style={{ background: "#fef7e0", color: "#b06000" }}
              >
                <i className="bi bi-bookmark-check"></i>
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statLabel}>CMS Referenced</span>
                <span className={styles.statValue}>{stats.filesInUse}</span>
              </div>
            </div>
            <div className={styles.statCard}>
              <div
                className={styles.statIcon}
                style={{ background: "#fce8e6", color: "#c5221f" }}
              >
                <i className="bi bi-question-circle"></i>
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statLabel}>Untracked Files</span>
                <span className={styles.statValue}>{stats.untrackedFiles}</span>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.statCard} style={{ gridColumn: "span 2" }}>
            <div
              className={styles.statIcon}
              style={{ background: "#f3f4f6", color: "#4b5563" }}
            >
              <i className="bi bi-info-square"></i>
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>
                Backup Directory Location
              </span>
              <span
                className={styles.statValue}
                style={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "#4b5563",
                  wordBreak: "break-all",
                }}
              >
                backup (Outside project root)
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Upload Settings / Form */}
      <div className={styles.uploadSettingsArea}>
        <div className={styles.uploadPathSelector}>
          <label htmlFor="uploadSubdir">Upload Folder Path</label>
          <div className={styles.uploadPathInputGroup}>
            <span className={styles.pathPrefix}>/uploads/</span>
            <input
              type="text"
              id="uploadSubdir"
              placeholder="e.g. 2025/08 or templates (Leave empty for root)"
              value={targetFolder}
              onChange={(e) => setTargetFolder(e.target.value)}
            />
          </div>
        </div>

        <button
          className={styles.uploadTriggerBtn}
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
        >
          <i className="bi bi-cloud-arrow-up"></i>
          {uploading ? "Uploading..." : "Upload Files Here"}
        </button>
      </div>

      {/* File Dropzone Area */}
      <div
        className={`${styles.dropzone} ${dragActive ? styles.dragActive : ""}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          className={styles.fileInput}
          onChange={handleFileSelect}
          multiple
        />
        <div className={styles.dropzoneContent}>
          <i className={`bi bi-cloud-arrow-up-fill ${styles.uploadCloud}`}></i>
          <h3>Drag and drop your files here</h3>
          <p>
            Files will be uploaded into:{" "}
            <strong>/uploads/{targetFolder || ""}</strong>
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className={styles.filterBar}>
        <div className={styles.typeTabs}>
          {[
            { id: "all", label: "All Files", icon: "bi-grid-fill" },
            { id: "images", label: "Images", icon: "bi-image" },
            { id: "video", label: "Videos", icon: "bi-film" },
            { id: "audio", label: "Audio", icon: "bi-music-note-beamed" },
            {
              id: "documents",
              label: "Documents",
              icon: "bi-file-earmark-richtext",
            },
            { id: "other", label: "Others", icon: "bi-question-square" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabItem} ${typeFilter === tab.id ? styles.activeTab : ""}`}
              onClick={() => {
                setTypeFilter(tab.id)
                setPage(1)
              }}
            >
              <i className={`bi ${tab.icon}`}></i>
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.searchAndSort}>
          {/* CMS Usage Filter (Active Uploads Only) */}
          {source === "uploads" && (
            <div className={styles.usageFilterSelector}>
              <i className="bi bi-funnel"></i>
              <select
                value={usageFilter}
                onChange={(e) => {
                  setUsageFilter(e.target.value)
                  setPage(1)
                }}
              >
                <option value="all">All References</option>
                <option value="used">In Use (Referenced)</option>
                <option value="unused">Unused (Unreferenced)</option>
              </select>
            </div>
          )}

          <form onSubmit={handleSearch} className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search filename..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          <div className={styles.sortSelector}>
            <i className="bi bi-sort-down"></i>
            <select
              value={`${sortField}-${sortOrder}`}
              onChange={(e) => {
                const [field, order] = e.target.value.split("-")
                setSortField(field)
                setSortOrder(order)
                setPage(1)
              }}
            >
              <option value="mtime-desc">Newest First</option>
              <option value="mtime-asc">Oldest First</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="size-desc">Largest First</option>
              <option value="size-asc">Smallest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Files Grid / List */}
      {loading ? (
        <div className={styles.loaderContainer}>
          <div className="spinner-border text-primary" role="status"></div>
          <p>Scanning files and resolving database references...</p>
        </div>
      ) : files.length === 0 ? (
        <div className={styles.emptyState}>
          <i className="bi bi-folder-x"></i>
          <h3>No files found</h3>
          <p>
            No files matched your search filters or the folder is currently
            empty.
          </p>
        </div>
      ) : (
        <div className={styles.explorerLayout}>
          {/* Selection Control Header */}
          <div className={styles.selectionHeaderBar}>
            <div className={styles.selectionHeaderLeft}>
              <label className={styles.selectAllLabel}>
                <input
                  type="checkbox"
                  checked={
                    files.length > 0 &&
                    files.every((f) => selectedPaths.includes(f.path))
                  }
                  onChange={handleSelectAll}
                />
                <span>Select All ({files.length} files on page)</span>
              </label>
              {selectedPaths.length > 0 && (
                <span className={styles.selectedCountBadge}>
                  {selectedPaths.length} selected
                </span>
              )}
            </div>
            {selectedPaths.length > 0 && (
              <button
                className={styles.clearAllBtn}
                onClick={() => setSelectedPaths([])}
              >
                Clear Selection
              </button>
            )}
          </div>

          <div className={styles.filesGrid}>
            {files.map((file) => {
              const hasUsages = file.usages && file.usages.length > 0
              const isUntracked = !file.dbInfo
              const isSelected = selectedPaths.includes(file.path)

              return (
                <div
                  key={file.path}
                  className={`${styles.fileCard} ${selectedFile?.path === file.path ? styles.activeCard : ""} ${isSelected ? styles.selectedCard : ""}`}
                  onClick={() => handleSelectFile(file)}
                >
                  <div className={styles.cardPreview}>
                    {renderPreviewIcon(file, styles.imagePreview)}

                    {/* Checkbox Overlay */}
                    <div
                      className={`${styles.cardCheckboxWrapper} ${isSelected ? styles.cardCheckboxWrapperSelected : ""}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFileSelection(file.path)
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                        className={styles.cardCheckbox}
                      />
                    </div>

                    {source === "uploads" && hasUsages && (
                      <span
                        className={`${styles.badge} ${styles.badgeInUse}`}
                        title={`In use by ${file.usages.length} item(s)`}
                      >
                        <i className="bi bi-link-45deg"></i>
                        In Use ({file.usages.length})
                      </span>
                    )}
                    {source === "uploads" && isUntracked && (
                      <span
                        className={`${styles.badge} ${styles.badgeUntracked}`}
                        title="Not registered in database (Temp/Local File)"
                      >
                        Untracked
                      </span>
                    )}
                    {source === "backup" && (
                      <span className={`${styles.badge} ${styles.badgeBackup}`}>
                        Backed Up
                      </span>
                    )}
                  </div>
                  <div className={styles.cardMeta}>
                    <span className={styles.fileName} title={file.name}>
                      {file.name}
                    </span>
                    <span className={styles.fileSizeDate}>
                      {formatBytes(file.size)} &bull;{" "}
                      {new Date(file.mtime).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className={styles.pageBtn}
          >
            <i className="bi bi-chevron-left"></i> Previous
          </button>
          <span className={styles.pageIndicator}>
            Page {page} of {totalPages} ({totalItems} files)
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className={styles.pageBtn}
          >
            Next <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      )}

      {/* File Inspector Modal Overlay */}
      {selectedFile && (
        <div
          className={styles.inspectorOverlay}
          onClick={() => setSelectedFile(null)}
        >
          <div
            className={styles.inspectorContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.inspectorHeader}>
              <h3>{source === "backup" ? "Backup Details" : "File Details"}</h3>
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedFile(null)}
              >
                &times;
              </button>
            </div>

            <div className={styles.inspectorBody}>
              {/* File Preview */}
              <div className={styles.inspectorPreviewBox}>
                {renderPreviewIcon(selectedFile, styles.inspectorPreviewImg)}
              </div>

              {/* Action Buttons */}
              <div className={styles.inspectorActions}>
                {source === "uploads" ? (
                  <>
                    <button
                      className={styles.actionBtn}
                      onClick={() =>
                        copyToClipboard(
                          window.location.origin + selectedFile.url
                        )
                      }
                    >
                      <i className="bi bi-clipboard"></i>{" "}
                      {urlCopied ? "Copied!" : "Copy URL"}
                    </button>
                    <button
                      className={styles.actionBtn}
                      onClick={() =>
                        handleDownload(
                          window.location.origin + selectedFile.url,
                          selectedFile.name
                        )
                      }
                    >
                      <i className="bi bi-download"></i> Download
                    </button>
                    {selectedFile.usages.length === 0 && (
                      <button
                        className={`${styles.actionBtn} ${styles.actionBackup}`}
                        onClick={() => handleMoveToBackup(selectedFile)}
                        disabled={performingAction}
                      >
                        <i className="bi bi-archive"></i> Backup
                      </button>
                    )}
                    <button
                      className={`${styles.actionBtn} ${styles.actionDanger}`}
                      onClick={handleDeleteClick}
                    >
                      <i className="bi bi-trash"></i> Delete
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className={`${styles.actionBtn} ${styles.actionRestore}`}
                      onClick={() => handleRestoreFile(selectedFile)}
                      disabled={performingAction}
                    >
                      <i className="bi bi-arrow-counterclockwise"></i> Restore
                      File
                    </button>
                    <button
                      className={`${styles.actionBtn} ${styles.actionDanger}`}
                      onClick={handleDeleteClick}
                      disabled={performingAction}
                    >
                      <i className="bi bi-trash"></i> Delete Permanently
                    </button>
                  </>
                )}
              </div>

              {/* Usage Block (Active Only) */}
              {source === "uploads" &&
                (selectedFile.usages && selectedFile.usages.length > 0 ? (
                  <div className={styles.usageBlock}>
                    <h4>
                      <i className="bi bi-link-45deg"></i> Linked CMS Usage (
                      {selectedFile.usages.length})
                    </h4>
                    <ul className={styles.usageList}>
                      {selectedFile.usages.map((u, i) => (
                        <li key={i}>
                          <span className={styles.usageType}>{u.type}</span>
                          <span className={styles.usageTitle}>{u.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className={`${styles.usageBlock} ${styles.noUsage}`}>
                    <h4>
                      <i className="bi bi-link-45deg"></i> CMS Usage
                    </h4>
                    <p>
                      Not referenced in any blog posts, videos, or media
                      coverages.
                    </p>
                  </div>
                ))}

              {/* Metadata Info */}
              <div className={styles.infoList}>
                <div className={styles.infoRow}>
                  <strong>Relative Path:</strong>
                  <span>{selectedFile.path}</span>
                </div>
                <div className={styles.infoRow}>
                  <strong>File Size:</strong>
                  <span>
                    {formatBytes(selectedFile.size)} ({selectedFile.size} Bytes)
                  </span>
                </div>
                <div className={styles.infoRow}>
                  <strong>Uploaded On:</strong>
                  <span>
                    {new Date(selectedFile.birthtime).toLocaleString()}
                  </span>
                </div>
                <div className={styles.infoRow}>
                  <strong>Last Modified:</strong>
                  <span>{new Date(selectedFile.mtime).toLocaleString()}</span>
                </div>
                {selectedFile.dbInfo && (
                  <div className={styles.infoRow}>
                    <strong>CMS ID:</strong>
                    <span>{selectedFile.dbInfo.id}</span>
                  </div>
                )}
              </div>

              {/* Edit Details Form (Active Uploads Only) */}
              {source === "uploads" ? (
                <form
                  onSubmit={handleUpdateDetails}
                  className={styles.editForm}
                >
                  <h4>Edit Details</h4>
                  <div className={styles.inputGroup}>
                    <label htmlFor="rename">Rename File (On Disk)</label>
                    <input
                      type="text"
                      id="rename"
                      value={renameValue}
                      onChange={(e) => setRenameValue(e.target.value)}
                      required
                    />
                    <small>
                      Renaming updates physical name on disk and syncs CMS
                      references.
                    </small>
                  </div>

                  {selectedFile.dbInfo ? (
                    <>
                      <div className={styles.inputGroup}>
                        <label htmlFor="metaTitle">CMS Title</label>
                        <input
                          type="text"
                          id="metaTitle"
                          value={metaTitle}
                          onChange={(e) => setMetaTitle(e.target.value)}
                        />
                      </div>
                      <div className={styles.inputGroup}>
                        <label htmlFor="metaAlt">Alternative Text (SEO)</label>
                        <input
                          type="text"
                          id="metaAlt"
                          value={metaAlt}
                          onChange={(e) => setMetaAlt(e.target.value)}
                        />
                      </div>
                      <div className={styles.inputGroup}>
                        <label htmlFor="metaDesc">Description</label>
                        <textarea
                          id="metaDesc"
                          rows={3}
                          value={metaDesc}
                          onChange={(e) => setMetaDesc(e.target.value)}
                        ></textarea>
                      </div>
                    </>
                  ) : (
                    <div className={styles.untrackedNote}>
                      <i className="bi bi-info-circle"></i>
                      <span>
                        This file is not registered in the database, so custom
                        CMS metadata (Alt Text, Description) is not available.
                        To register this file in the database so it can be used
                        in blogs or videos, upload it through the standard Media
                        Library.
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className={styles.saveBtn}
                    disabled={updatingDetails}
                  >
                    {updatingDetails
                      ? "Saving Details..."
                      : "Save Details & Sync"}
                  </button>
                </form>
              ) : (
                <div className={styles.backupMetaBlock}>
                  <h4>Original Metadata (Restorable)</h4>
                  {selectedFile.dbInfo ? (
                    <div className={styles.backupMetaList}>
                      <p>
                        <strong>Title:</strong>{" "}
                        {selectedFile.dbInfo.title || "Untitled"}
                      </p>
                      <p>
                        <strong>Alt Text:</strong>{" "}
                        {selectedFile.dbInfo.attachment_image_alt || "None"}
                      </p>
                      <p>
                        <strong>Description:</strong>{" "}
                        {selectedFile.dbInfo.content || "None"}
                      </p>
                    </div>
                  ) : (
                    <p className={styles.noMetaText}>
                      No database metadata is associated with this file.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <ConfirmationModal
          show={showDeleteConfirm}
          onClose={() => setShowDeleteConfirm(false)}
          onConfirm={handleDeleteConfirm}
          title={
            source === "backup"
              ? "Delete File Permanently from Backup"
              : "Delete File Permanently"
          }
          message={
            deleteUsages.length > 0
              ? `WARNING: This file is currently linked to ${deleteUsages.length} CMS items (shown below). Deleting it will result in broken links or missing images on your website. Are you sure you want to permanently delete this file and remove all links?\n\nUsages:\n` +
                deleteUsages.map((u) => `- [${u.type}] ${u.title}`).join("\n")
              : source === "backup"
                ? "Are you sure you want to permanently delete this file from the backup directory? This file and its metadata will be permanently deleted and cannot be restored."
                : "Are you sure you want to permanently delete this file? This will physically remove the file from the disk and cannot be undone."
          }
          type="danger"
          confirmLabel={isDeleting ? "Deleting..." : "Delete Permanently"}
        />
      )}

      {/* Floating Batch Action Bar */}
      {selectedPaths.length > 0 && (
        <div className={styles.batchActionBar}>
          <div className={styles.batchInfo}>
            <span className={styles.selectedCount}>
              <strong>{selectedPaths.length}</strong>{" "}
              {selectedPaths.length === 1 ? "file" : "files"} selected
            </span>
            <button
              className={styles.clearSelectionBtn}
              onClick={() => setSelectedPaths([])}
            >
              Clear Selection
            </button>
          </div>

          <div className={styles.batchActions}>
            <label className={styles.selectAllLabel}>
              <input
                type="checkbox"
                checked={
                  files.length > 0 &&
                  files.every((f) => selectedPaths.includes(f.path))
                }
                onChange={handleSelectAll}
              />
              <span>Select All on Page</span>
            </label>

            {source === "uploads" ? (
              <button
                className={`${styles.batchBtn} ${styles.batchBackupBtn}`}
                onClick={() => executeBatchAction("batchBackup")}
                disabled={batchProcessing}
              >
                <i className="bi bi-archive"></i>
                Move Selected to Backup
              </button>
            ) : (
              <button
                className={`${styles.batchBtn} ${styles.batchRestoreBtn}`}
                onClick={() => executeBatchAction("batchRestore")}
                disabled={batchProcessing}
              >
                <i className="bi bi-folder-check"></i>
                Restore Selected
              </button>
            )}
          </div>
        </div>
      )}

      {/* Batch Progress Overlay */}
      {batchProcessing && batchProgress && (
        <div className={styles.batchOverlay}>
          <div className={styles.batchModal}>
            <div className="spinner-border text-primary" role="status"></div>
            <h3>Processing Batch Operation...</h3>
            <p>Please wait, processing files in performance batches.</p>

            <div className={styles.progressBarWrapper}>
              <div
                className={styles.progressBar}
                style={{
                  width: `${(batchProgress.current / batchProgress.total) * 100}%`,
                }}
              ></div>
            </div>

            <span className={styles.progressStatus}>
              {batchProgress.current} / {batchProgress.total} files completed
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
