import { useState, useEffect, useCallback, useRef } from "react"

export function useMediaCoverage() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState("all")
  const [search, setSearch] = useState("") // This will be the actual search term used in fetch
  const [localSearch, setLocalSearch] = useState("") // This will be the value in the input field
  const [page, setPage] = useState(1)
  const [pageInput, setPageInput] = useState("1")
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const [counts, setCounts] = useState({ all: 0, published: 0, draft: 0, trash: 0 })

  const fetchItems = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(
        `/api/admin/media-coverage?status=${statusFilter}&search=${search}&page=${page}&limit=40`
      )
      const data = await res.json()
      setItems(data.items || [])
      setTotalItems(data.totalItems || 0)
      setTotalPages(Math.ceil((data.totalItems || 0) / 40))
      setCounts(data.counts || { all: 0, published: 0, draft: 0, trash: 0 })
      setPageInput(page.toString())
    } catch (error) {
      console.error("Error fetching items:", error)
    } finally {
      setLoading(false)
    }
  }, [statusFilter, search, page])

  useEffect(() => {
    fetchItems()
  }, [fetchItems])


  const handleSearch = () => {
    setSearch(localSearch)
    setPage(1)
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
    if (confirm("Are you sure you want to move this item to trash?")) {
      try {
        const res = await fetch(`/api/admin/media-coverage/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "trash" }),
        })
        if (res.ok) {
          fetchItems()
        }
      } catch (error) {
        console.error("Error trashing item:", error)
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
    items,
    loading,
    statusFilter,
    setStatusFilter,
    search: localSearch,
    setSearch: setLocalSearch,
    page,
    setPage,
    pageInput,
    totalPages,
    totalItems,
    counts,
    fetchItems,
    handleSearch,
    handlePageInputChange,
    handlePageInputSubmit,
    handleTrash,
    formatDate,
  }
}
