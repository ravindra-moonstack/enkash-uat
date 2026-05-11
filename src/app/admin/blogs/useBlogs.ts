import { useState, useEffect, useRef } from "react"

export function useBlogs() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState("all")
  const [search, setSearch] = useState("")
  const [dateFilter, setDateFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [metaOptions, setMetaOptions] = useState<{
    categories: any[]
    dates: any[]
    tags: any[]
  }>({
    categories: [],
    dates: [],
    tags: [],
  })
  const [pageInput, setPageInput] = useState("1")
  const [page, setPage] = useState(1)
  const [sortField, setSortField] = useState("date") // 'title' or 'date'
  const [sortOrder, setSortOrder] = useState("desc") // 'asc' or 'desc'
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0)

  // For later: counts
  const [counts, setCounts] = useState({
    all: 0,
    published: 0,
    draft: 0,
    trash: 0,
  })

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const query = new URLSearchParams({
        status: statusFilter,
        search,
        date: dateFilter,
        category: categoryFilter,
        page: page.toString(),
        limit: "40",
        sortField,
        sortOrder,
      })
      const res = await fetch(`/api/admin/blogs?${query}`)
      const data = await res.json()
      if (res.ok) {
        setPosts(data.posts || [])
        setTotalItems(data.totalItems || 0)
        setTotalPages(Math.ceil((data.totalItems || 0) / 40) || 1)
        setCounts(data.counts || { all: 0, published: 0, draft: 0, trash: 0 })
      }
    } catch (error) {
      console.error("Failed to fetch posts", error)
    }
    setLoading(false)
  }

  const fetchMeta = async () => {
    try {
      const res = await fetch("/api/admin/blogs/meta")
      const data = await res.json()
      console.log("data.categories", data.categories)

      if (res.ok) {
        setMetaOptions({
          categories: data.categories || [],
          dates: data.dates || [],
          tags: data.tags || [],
        })
      }
    } catch (error) {
      console.error("Failed to fetch meta", error)
    }
  }

  useEffect(() => {
    fetchPosts()
    fetchMeta()
    setPageInput(page.toString())
  }, [statusFilter, page, sortField, sortOrder])

  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleSearch = () => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current)
    searchTimeoutRef.current = setTimeout(() => {
      setPage(1)
      setPageInput("1")
      fetchPosts()
    }, 300)
  }

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageInput(e.target.value)
  }

  const handlePageInputSubmit = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement>
  ) => {
    if ("key" in e && e.key !== "Enter") return

    let newPage = parseInt(pageInput, 10)
    if (isNaN(newPage) || newPage < 1) {
      newPage = 1
    } else if (newPage > totalPages) {
      newPage = totalPages
    }

    setPage(newPage)
    setPageInput(newPage.toString())
  }

  const handleTrash = async (id: number) => {
    if (!confirm("Are you sure you want to move this post to trash?")) return
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "trash" }),
      })
      if (res.ok) {
        fetchPosts()
      }
    } catch (error) {
      console.error("Failed to move to trash", error)
    }
  }

  const formatDate = (dateString: string) => {
    const d = new Date(dateString)
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return {
    posts,
    loading,
    statusFilter,
    setStatusFilter,
    search,
    setSearch,
    dateFilter,
    setDateFilter,
    categoryFilter,
    setCategoryFilter,
    metaOptions,
    pageInput,
    page,
    setPage,
    sortField,
    setSortField,
    sortOrder,
    setSortOrder,
    totalPages,
    totalItems,
    counts,
    fetchPosts,
    handleSearch,
    handlePageInputChange,
    handlePageInputSubmit,
    handleTrash,
    formatDate,
  }
}
