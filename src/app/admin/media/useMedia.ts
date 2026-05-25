import { useState, useEffect, useRef } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useToast } from "@/src/context/ToastContext"

export const useMedia = (
  initialItemsPerPage: number = 80,
  defaultType: string = "all"
) => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [showUpload, setShowUpload] = useState(
    searchParams.get("add") === "true"
  )
  const { showToast } = useToast()
  const [mediaItems, setMediaItems] = useState<any[]>([])
  const [totalItems, setTotalItems] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [urlCopied, setUrlCopied] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Filters
  const [typeFilter, setTypeFilter] = useState(defaultType)
  const [dateFilter, setDateFilter] = useState("all")

  // Confirm Modal
  const [showConfirm, setShowConfirm] = useState(false)
  const [confirmConfig, setConfirmConfig] = useState<{
    onConfirm: () => void
    message: string
    title?: string
    type?: "danger" | "primary"
  } | null>(null)
  const [search, setSearch] = useState("")
  const [availableDates, setAvailableDates] = useState<string[]>([])

  useEffect(() => {
    if (searchParams.get("add") === "true") {
      setShowUpload(true)
    }
  }, [searchParams])

  useEffect(() => {
    if (!showUpload && searchParams.get("add") === "true") {
      router.replace("/admin/media")
    }
  }, [showUpload, searchParams, router])

  // Bulk Select
  const [bulkSelectMode, setBulkSelectMode] = useState(false)
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set())

  // Modal
  const [modalItem, setModalItem] = useState<any>(null)
  const [modalIndex, setModalIndex] = useState(-1)

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const res = await fetch("/api/admin/media?action=getDates")
        const data = await res.json()
        if (data.success) {
          setAvailableDates(data.data)
        }
      } catch (err) { }
    }
    fetchDates()
  }, [])

  useEffect(() => {
    if (modalItem) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [modalItem])

  const itemsPerPage = initialItemsPerPage

  const fetchMedia = async (pageNum: number, reset: boolean = false) => {
    setLoading(true)
    try {
      const url = new URL("/api/admin/media", window.location.origin)
      url.searchParams.append("page", pageNum.toString())
      url.searchParams.append("limit", itemsPerPage.toString())
      if (typeFilter !== "all") url.searchParams.append("type", typeFilter)
      if (dateFilter !== "all") url.searchParams.append("date", dateFilter)
      if (search) url.searchParams.append("search", search)

      const res = await fetch(url.toString())
      const data = await res.json()
      if (data.success) {
        if (reset) {
          setMediaItems(data.data)
        } else {
          setMediaItems((prev) => [...prev, ...data.data])
        }
        setTotalItems(data.totalItems)
      }
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    setPage(1)
    fetchMedia(1, true)
  }, [])

  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleSearch = () => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current)
    searchTimeoutRef.current = setTimeout(() => {
      setPage(1)
      fetchMedia(1, true)
    }, 300)
  }

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const loadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    fetchMedia(nextPage, false)
  }

  const toggleBulkMode = () => {
    if (bulkSelectMode) {
      // Cancel bulk Mode
      setSelectedItems(new Set())
      setBulkSelectMode(false)
    } else {
      setBulkSelectMode(true)
    }
  }

  const handleItemClick = (item: any, index: number) => {
    if (bulkSelectMode) {
      const newSelected = new Set(selectedItems)
      if (newSelected.has(item.id)) {
        newSelected.delete(item.id)
      } else {
        newSelected.add(item.id)
      }
      setSelectedItems(newSelected)
    } else {
      setModalItem(item)
      setModalIndex(index)
    }
  }

  const handleDeleteSingle = async (id: number) => {
    setConfirmConfig({
      title: "Delete Item",
      message: "Are you sure you want to permanently delete this item?",
      type: "danger",
      onConfirm: async () => {
        try {
          const res = await fetch(`/api/admin/media?ids=${id}`, {
            method: "DELETE",
          })
          const data = await res.json()
          if (data.success) {
            setModalItem(null)
            setPage(1)
            fetchMedia(1, true)
            showToast("Item deleted successfully", "success")
          } else {
            showToast("Error deleting item", "error")
          }
        } catch (err) {
          showToast("Error deleting item", "error")
        }
      },
    })
    setShowConfirm(true)
  }

  const handleDeleteSelected = async () => {
    if (selectedItems.size === 0) return
    setConfirmConfig({
      title: "Delete Items",
      message: `Are you sure you want to delete ${selectedItems.size} items?`,
      type: "danger",
      onConfirm: async () => {
        try {
          const res = await fetch(
            `/api/admin/media?ids=${Array.from(selectedItems).join(",")}`,
            {
              method: "DELETE",
            }
          )
          const data = await res.json()
          if (data.success) {
            setSelectedItems(new Set())
            setBulkSelectMode(false)
            setPage(1)
            fetchMedia(1, true)
            showToast("Items deleted successfully", "success")
          } else {
            showToast("Error deleting items", "error")
          }
        } catch (err) {
          showToast("Error deleting items", "error")
        }
      },
    })
    setShowConfirm(true)
  }

  const handleModalNavigate = (direction: "next" | "prev") => {
    if (!mediaItems.length) return
    let newIndex = direction === "next" ? modalIndex + 1 : modalIndex - 1
    if (newIndex < 0 || newIndex >= mediaItems.length) return
    setModalIndex(newIndex)
    setModalItem(mediaItems[newIndex])
  }

  const closeAndResetModal = () => {
    setModalItem(null)
  }

  const getFileUrl = (filePath: string) => {

    if (!filePath) return "/images/placeholder.png"
    if (filePath.startsWith("http://") || filePath.startsWith("https://")) {
      return filePath
    }
    if (filePath.startsWith("../uploads/")) {
      return filePath.replace("../uploads/", "/uploads/")
    }
    if (filePath.startsWith("uploads/")) {
      return `/uploads/${filePath.substring("uploads/".length)}`
    }
    if (filePath.startsWith("/uploads/")) {
      return filePath
    }

    return `/uploads/${filePath}`
  }

  const handleFileUpload = async (files: File[]) => {
    setUploading(true)
    let successCount = 0

    for (const file of files) {
      const formData = new FormData()
      formData.append("file", file)

      try {
        const res = await fetch("/api/admin/media", {
          method: "POST",
          body: formData,
        })
        if (res.ok) {
          successCount++
        }
      } catch (err) {
        console.error("Upload failed", err)
      }
    }

    setUploading(false)
    setShowUpload(false)
    if (fileInputRef.current) fileInputRef.current.value = ""

    if (successCount > 0) {
      showToast(`${successCount} file(s) uploaded successfully!`, "success")
    } else {
      showToast("File upload failed", "error")
    }

    // Refresh media collection
    setPage(1)
    fetchMedia(1, true)
  }

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return
    handleFileUpload(Array.from(e.target.files))
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(Array.from(e.dataTransfer.files))
    }
  }

  const handleUpdateMedia = async (
    id: number,
    field: string,
    value: string
  ) => {
    const itemToUpdate = modalItem || mediaItems.find((item) => item.id === id)
    if (!itemToUpdate || itemToUpdate[field] === value) return // skip if untouched

    const updatedItem = { ...itemToUpdate, [field]: value }
    if (modalItem) {
      setModalItem(updatedItem)
    }
    setMediaItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    )

    try {
      await fetch("/api/admin/media", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          title: updatedItem.title || "",
          attachment_image_alt: updatedItem.attachment_image_alt || "",
          content: updatedItem.content || "",
        }),
      })
    } catch (err) {
      console.error("Update failed", err)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setUrlCopied(true)
    setTimeout(() => setUrlCopied(false), 2000)
  }

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
      console.error(err)
    }
  }

  return {
    showUpload,
    setShowUpload,
    mediaItems,
    setMediaItems,
    totalItems,
    setTotalItems,
    page,
    setPage,
    loading,
    setLoading,
    uploading,
    setUploading,
    urlCopied,
    setUrlCopied,
    fileInputRef,
    typeFilter,
    setTypeFilter,
    dateFilter,
    setDateFilter,
    search,
    setSearch,
    availableDates,
    setAvailableDates,
    bulkSelectMode,
    setBulkSelectMode,
    selectedItems,
    setSelectedItems,
    modalItem,
    setModalItem,
    modalIndex,
    setModalIndex,
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
    handleFileUpload,
    handleFileSelect,
    handleDragOver,
    handleDrop,
    handleUpdateMedia,
    copyToClipboard,
    handleDownload,
    showConfirm,
    setShowConfirm,
    confirmConfig,
  }
}
