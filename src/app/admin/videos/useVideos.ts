import { useState, useEffect, useCallback, useRef } from "react"
import { useToast } from "@/src/context/ToastContext"

export function useVideos() {
  const { showToast } = useToast()
  const [videos, setVideos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState("all")
  const [search, setSearch] = useState("")
  const [dateFilter, setDateFilter] = useState("all")
  const [metaOptions, setMetaOptions] = useState({ dates: [] })
  const [page, setPage] = useState(1)
  const [pageInput, setPageInput] = useState("1")
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const [showConfirm, setShowConfirm] = useState(false)
  const [confirmConfig, setConfirmConfig] = useState<{
    title: string
    message: string
    onConfirm: () => void
    type: "primary" | "danger"
  } | null>(null)

  const [counts, setCounts] = useState({
    all: 0,
    published: 0,
    draft: 0,
    trash: 0,
  })

  const fetchVideos = useCallback(async (overrides?: { status?: string; search?: string }) => {
    setLoading(true)
    try {
      const query = new URLSearchParams({
        status: overrides?.status ?? statusFilter,
        search: overrides?.search ?? search,
        date: dateFilter,
        page: page.toString(),
        limit: "40",
      }).toString()
      const res = await fetch(`/api/admin/videos?${query}`)

      const data = await res.json()
      setVideos(data.videos || [])
      setTotalItems(data.totalItems || 0)
      setTotalPages(Math.ceil((data.totalItems || 0) / 40))
      setCounts(data.counts || { all: 0, published: 0, draft: 0, trash: 0 })
      setPageInput(page.toString())
    } catch (error) {
      console.error("Error fetching videos:", error)
      showToast("Failed to fetch videos", "error")
    } finally {
      setLoading(false)
    }
  }, [statusFilter, search, dateFilter, page, showToast])

  useEffect(() => {
    fetchVideos()

    const handleRefresh = () => {
      fetchVideos()
    }
    window.addEventListener("pageshow", handleRefresh)
    window.addEventListener("focus", handleRefresh)

    return () => {
      window.removeEventListener("pageshow", handleRefresh)
      window.removeEventListener("focus", handleRefresh)
    }
  }, [fetchVideos])

  useEffect(() => {
    // Fetch meta (dates specifically for videos)
    fetch("/api/admin/videos?action=getDates")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMetaOptions({
            dates: data.dates || [],
          })
        }
      })
  }, [])

  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleSearch = () => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current)
    searchTimeoutRef.current = setTimeout(() => {
      setPage(1)
      fetchVideos()
    }, 300)
  }

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageInput(e.target.value)
  }

  const handlePageInputSubmit = (e: any) => {
    if (e.key === "Enter" || e.type === "blur") {
      const p = parseInt(pageInput)
      if (p >= 1 && p <= totalPages) {
        setPage(p)
      } else {
        setPageInput(page.toString())
      }
    }
  }

  const deleteVideo = (id: number) => {
    setConfirmConfig({
      title: "Delete Video",
      message: "Are you sure you want to delete this video?",
      type: "danger",
      onConfirm: async () => {
        try {
          const res = await fetch(`/api/admin/videos/${id}`, {
            method: "DELETE",
          })
          const data = await res.json()
          if (data.success) {
            fetchVideos()
            showToast("Video deleted successfully", "success")
          } else {
            showToast(data.error || "Failed to delete video", "error")
          }
        } catch (err) {
          console.error(err)
          showToast("An error occurred", "error")
        }
      },
    })
    setShowConfirm(true)
  }
  const formatDate = (dateStr: string) => {
    if (!dateStr) return ""
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return {
    videos,
    loading,
    statusFilter,
    setStatusFilter,
    search,
    setSearch,
    dateFilter,
    setDateFilter,
    metaOptions,
    page,
    setPage,
    pageInput,
    totalPages,
    totalItems,
    counts,
    fetchVideos,
    handleSearch,
    handlePageInputChange,
    handlePageInputSubmit,
    deleteVideo,
    showConfirm,
    setShowConfirm,
    confirmConfig,
    formatDate,
  }
}
