import { useState, useEffect, useRef } from "react"
import { useToast } from "@/src/context/ToastContext"
import { useRouter } from "next/navigation"

export function useBlogs() {
  const router = useRouter()
  const { showToast } = useToast()
  const [currentUser, setCurrentUser] = useState<any>(null)
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
  
  const [showConfirm, setShowConfirm] = useState(false)
  const [confirmConfig, setConfirmConfig] = useState<{
    onConfirm: () => void;
    message: string;
    title?: string;
    type?: "danger" | "primary";
  } | null>(null)

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
    fetch("/api/admin/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCurrentUser(data.user)
        }
      })
      .catch((err) => console.error("Error fetching current user", err))
  }, [])

  useEffect(() => {
    fetchPosts()
    fetchMeta()
    setPageInput(page.toString())

    const handleRefresh = () => {
      fetchPosts()
    }
    window.addEventListener("pageshow", handleRefresh)
    window.addEventListener("focus", handleRefresh)

    return () => {
      window.removeEventListener("pageshow", handleRefresh)
      window.removeEventListener("focus", handleRefresh)
    }
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
    setConfirmConfig({
      title: "Move to Trash",
      message: "Are you sure you want to move this post to trash?",
      type: "danger",
      onConfirm: async () => {
        try {
          const res = await fetch(`/api/admin/blogs/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: "trash" }),
          })
          if (res.ok) {
            fetchPosts()
            showToast("Post moved to trash", "success")
          } else {
            showToast("Failed to move to trash", "error")
          }
        } catch (error) {
          console.error("Failed to move to trash", error)
          showToast("Failed to move to trash", "error")
        }
      }
    })
    setShowConfirm(true)
  }

  const handleTakeOver = async (postId: number) => {
    if (!currentUser) {
      showToast("User session not loaded yet. Please try again.", "error")
      return
    }

    setConfirmConfig({
      title: "Take Over Editing",
      message: "Are you sure you want to take over editing this post? This will release the lock for the current editor.",
      type: "primary",
      onConfirm: async () => {
        try {
          const sessionId = Math.random().toString(36).substring(2, 12)
          const res = await fetch("/api/admin/active-editors", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              module: "blogs",
              postId: postId,
              editorId: sessionId,
              userId: currentUser.id,
              userName: currentUser.name,
              action: "takeover"
            }),
          })
          const data = await res.json()
          if (res.ok && data.success) {
            showToast("Post taken over successfully!", "success")
            router.push(`/admin/blogs/edit?id=${postId}`)
          } else {
            showToast(data.message || "Failed to take over. Please try again.", "error")
          }
        } catch (error) {
          console.error("Failed to take over", error)
          showToast("Failed to take over editing. Please try again.", "error")
        }
      }
    })
    setShowConfirm(true)
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
    handleTakeOver,
    formatDate,
    showConfirm,
    setShowConfirm,
    confirmConfig,
    currentUser,
  }
}
