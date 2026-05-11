import { useState, useEffect, useCallback, useRef } from "react"

export function useVideos() {
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
  const [counts, setCounts] = useState({
    all: 0,
    published: 0,
    draft: 0,
    trash: 0,
  })

  const fetchVideos = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(
        `/api/admin/videos?status=${statusFilter}&search=${search}&date=${dateFilter}&page=${page}&limit=40`
      )
      const data = await res.json()
      setVideos(data.videos || [])
      setTotalItems(data.totalItems || 0)
      setTotalPages(Math.ceil((data.totalItems || 0) / 40))
      setCounts(data.counts || { all: 0, published: 0, draft: 0, trash: 0 })
      setPageInput(page.toString())
    } catch (error) {
      console.error("Error fetching videos:", error)
    } finally {
      setLoading(false)
    }
  }, [statusFilter, search, dateFilter, page])

  useEffect(() => {
    fetchVideos()
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

  const handleTrash = async (id: number) => {
    if (confirm("Are you sure you want to move this video to trash?")) {
      try {
        const res = await fetch(`/api/admin/videos/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "trash" }),
        })
        if (res.ok) {
          fetchVideos()
        }
      } catch (error) {
        console.error("Error trashing video:", error)
      }
    }
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
    handleTrash,
    formatDate,
  }
}
