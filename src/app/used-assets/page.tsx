"use client"

import React, { useState, useEffect } from "react"
import styles from "./used-assets.module.css"
import { 
  FaSearch, 
  FaFileImage, 
  FaVideo, 
  FaMusic, 
  FaFileAlt, 
  FaQuestion, 
  FaDatabase, 
  FaCode, 
  FaBookOpen,
  FaFile,
  FaFileExcel
} from "react-icons/fa"

interface UsedFile {
  path: string
  name: string
  url: string
  type: string
  sources: string[]
}

export default function UsedAssetsPage() {
  const [files, setFiles] = useState<UsedFile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Search and Filters
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedSources, setSelectedSources] = useState<Record<string, boolean>>({
    attachments_table: true,
    posts_content: true,
    frontend_code: true,
    admin_code: true
  })

  const exportToExcel = () => {
    if (filteredFiles.length === 0) return

    // Header row
    const headers = ["File Name", "File Path", "URL", "Type", "Sources"]
    
    // Data rows
    const csvRows = filteredFiles.map(file => [
      file.name,
      file.path,
      file.url,
      file.type,
      file.sources.join("; ")
    ])

    // Convert rows to CSV string
    const csvContent = [
      headers.join(","),
      ...csvRows.map(row => 
        row.map(val => {
          // Escape quotes and wrap in quotes
          const escaped = String(val).replace(/"/g, '""')
          return `"${escaped}"`
        }).join(",")
      )
    ].join("\r\n")

    // Create a Blob with BOM for Excel to open it correctly as UTF-8
    const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", `used_assets_export_${new Date().toISOString().split('T')[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const res = await fetch("/api/used-assets")
        const data = await res.json()
        if (data.success) {
          setFiles(data.files)
        } else {
          setError(data.error || "Failed to fetch used assets list")
        }
      } catch (err) {
        setError("Network error fetching used assets")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const toggleSource = (source: string) => {
    setSelectedSources(prev => ({
      ...prev,
      [source]: !prev[source]
    }))
  }

  // Filtered files calculation
  const filteredFiles = files.filter(file => {
    // 1. Search term match
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          file.path.toLowerCase().includes(searchTerm.toLowerCase())
    
    // 2. Type match
    const matchesType = selectedType === "all" || file.type === selectedType

    // 3. Source match
    const matchesSource = file.sources.some(source => selectedSources[source])

    return matchesSearch && matchesType && matchesSource
  })

  // Stats calculation
  const stats = {
    total: files.length,
    images: files.filter(f => f.type === "image").length,
    videos: files.filter(f => f.type === "video").length,
    documents: files.filter(f => f.type === "document").length,
    others: files.filter(f => f.type !== "image" && f.type !== "video" && f.type !== "document").length
  }

  const renderFileIcon = (type: string) => {
    switch (type) {
      case "image": return <FaFileImage className={styles.fallbackIcon} />
      case "video": return <FaVideo className={styles.fallbackIcon} />
      case "audio": return <FaMusic className={styles.fallbackIcon} />
      case "document": return <FaFileAlt className={styles.fallbackIcon} />
      default: return <FaQuestion className={styles.fallbackIcon} />
    }
  }

  const getSourceLabel = (source: string) => {
    switch (source) {
      case "attachments_table": return "Attachments Table"
      case "posts_content": return "Posts Content"
      case "frontend_code": return "Frontend Code"
      case "admin_code": return "Admin Code"
      default: return source
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Used Assets Directory</h1>
        <p className={styles.subtitle}>
          A complete list of files used from the <code>/uploads</code> folder across codebase and database tables.
        </p>
      </div>

      {/* Stats Board */}
      <div className={styles.statsStrip}>
        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ background: "#e8f0fe", color: "#1c5af4" }}>
            <FaFile />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Total Used Files</span>
            <span className={styles.statValue}>{stats.total}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ background: "#e6f4ea", color: "#137333" }}>
            <FaFileImage />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Images</span>
            <span className={styles.statValue}>{stats.images}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ background: "#fce8e6", color: "#c5221f" }}>
            <FaVideo />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Videos</span>
            <span className={styles.statValue}>{stats.videos}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ background: "#fef7e0", color: "#b06000" }}>
            <FaFileAlt />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Documents & Others</span>
            <span className={styles.statValue}>{stats.documents + stats.others}</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className={styles.filterBar}>
        <div className={styles.searchAndType}>
          {/* Search Box */}
          <div className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search used files by path or name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          {/* Type Tabs */}
          <div className={styles.typeTabs}>
            {[
              { id: "all", label: "All Files", icon: <FaFile /> },
              { id: "image", label: "Images", icon: <FaFileImage /> },
              { id: "video", label: "Videos", icon: <FaVideo /> },
              { id: "document", label: "Documents", icon: <FaFileAlt /> },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabItem} ${selectedType === tab.id ? styles.activeTab : ""}`}
                onClick={() => setSelectedType(tab.id)}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Export Button */}
          <button 
            className={styles.exportButton}
            onClick={exportToExcel}
            title="Export filtered assets to Excel (CSV)"
          >
            <FaFileExcel />
            Export to Excel
          </button>
        </div>

        {/* Source Checkboxes */}
        <div className={styles.sourceFilters}>
          <span className={styles.sourceLabel}>Filter by Reference Source:</span>
          <div className={styles.checkboxGroup}>
            {Object.keys(selectedSources).map((source) => (
              <label key={source} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedSources[source]}
                  onChange={() => toggleSource(source)}
                  className={styles.checkboxInput}
                />
                {getSourceLabel(source)}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      {loading ? (
        <div className={styles.loaderContainer}>
          <div className={styles.spinner}></div>
          <p>Analyzing codebase and database image usage references...</p>
        </div>
      ) : error ? (
        <div className={styles.emptyState}>
          <span style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}>⚠️</span>
          <h3>Error Loading Data</h3>
          <p>{error}</p>
        </div>
      ) : filteredFiles.length === 0 ? (
        <div className={styles.emptyState}>
          <span style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}>🔍</span>
          <h3>No files found</h3>
          <p>No used files matched your active search queries or filters.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredFiles.map((file, idx) => {
            const hasPreview = file.type === "image"
            return (
              <div key={idx} className={styles.card}>
                <div className={styles.previewContainer}>
                  {hasPreview ? (
                    <img
                      src={file.url}
                      alt={file.name}
                      className={styles.previewImage}
                      onError={(e) => {
                        // fallback to standard icon if file missing physically on disk
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        const parent = target.parentElement
                        if (parent) {
                          const fallback = parent.querySelector(".fallback-svg-icon") as HTMLElement
                          if (fallback) fallback.style.display = "flex"
                        }
                      }}
                    />
                  ) : null}
                  <div 
                    className="fallback-svg-icon"
                    style={{ 
                      display: hasPreview ? "none" : "flex",
                      height: "100%",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {renderFileIcon(file.type)}
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.fileName} title={file.name}>
                    {file.name}
                  </h3>
                  <div className={styles.filePath} title={file.path}>
                    {file.path}
                  </div>

                  <div className={styles.sourceBadges}>
                    {file.sources.map((src, sidx) => (
                      <span
                        key={sidx}
                        className={`${styles.badge} ${styles[`badge_${src}`] || ""}`}
                        title={getSourceLabel(src)}
                      >
                        {getSourceLabel(src)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
