import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useToast } from "@/src/context/ToastContext"

export function useAddVideo() {
  const { showToast } = useToast()
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = searchParams.get("id")

  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [status, setStatus] = useState("draft")
  const [author, setAuthor] = useState("1")
  const [postParent, setPostParent] = useState("0")
  const [externalEmbedFrame, setExternalEmbedFrame] = useState("")
  const [selfHostedId, setSelfHostedId] = useState<string | null>(null)
  const [thumbnailId, setThumbnailId] = useState<string | null>(null)
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const [featured, setFeatured] = useState("no")
  const [trending, setTrending] = useState("no")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false)
  const [customDate, setCustomDate] = useState("")
  const [lastEditedBy, setLastEditedBy] = useState<string>("")
  const [updatedAt, setUpdatedAt] = useState<string>("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isDirty, setIsDirty] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>(null)
  
  const [showConfirm, setShowConfirm] = useState(false)
  const [confirmConfig, setConfirmConfig] = useState<{
    onConfirm: () => void;
    message: string;
    title?: string;
    type?: "danger" | "primary";
  } | null>(null)
  
  // Progress state
  const [isSaving, setIsSaving] = useState(false)
  
  const [metaOptions, setMetaOptions] = useState({ categories: [], videoCategories: [], users: [], videos: [] })
  const [showMediaModal, setShowMediaModal] = useState(false)
  const [mediaTarget, setMediaTarget] = useState<"self_hosted" | "thumbnail">("thumbnail")
  const [categorySearch, setCategorySearch] = useState("")
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false)
  const [newCategoryName, setNewCategoryName] = useState("")
  const [newCategoryParent, setNewCategoryParent] = useState("0")
  const [categoryError, setCategoryError] = useState("")

  useEffect(() => {
    const fetchMeta = async () => {
        const [metaRes, videosRes] = await Promise.all([
            fetch("/api/admin/blogs/meta"),
            fetch("/api/admin/videos?limit=1000")
        ])
        const metaData = await metaRes.json()
        const videosData = await videosRes.json()
        
        setMetaOptions({
            categories: metaData.categories || [],
            videoCategories: metaData.videoCategories || [],
            users: metaData.users || [],
            videos: videosData.videos || []
        })
        if (!id && metaData.users && metaData.users.length > 0) {
            // Default handled below
        }
    }
    fetchMeta()
    
    fetch("/api/admin/auth/me")
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setCurrentUser(data.user)
          if (!id) {
            setAuthor(data.user.id.toString())
          }
        }
      })
      .catch(console.error)

    if (id) {
       fetch(`/api/admin/videos/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.video) {
            setTitle(data.video.title || "")
            setSlug(data.video.slug || "")
            setStatus(data.video.status || "draft")
            setAuthor(data.video.author ? data.video.author.toString() : "1")
            setPostParent(data.video.post_parent ? data.video.post_parent.toString() : "0")
            setExternalEmbedFrame(data.video.external_embed_frame || "")
            setSelfHostedId(data.video.self_hosted_id || null)
            setThumbnailId(data.video.thumbnail_id || null)
            setThumbnailUrl(data.video.thumbnail_url || "")
            setFeatured(data.video.featured || "no")
            setTrending(data.video.trending || "no")
            setSelectedCategories(data.video.category ? data.video.category.split(",") : [])
            setSlugManuallyEdited(true)
            
            if (data.video.updated_at || data.video.created_at) {
              const dateStr = data.video.updated_at || data.video.created_at;
              const dateObj = new Date(dateStr);
              if (!isNaN(dateObj.getTime())) {
                  const offset = dateObj.getTimezoneOffset() * 60000;
                  const localISOTime = (new Date(dateObj.getTime() - offset)).toISOString().slice(0, 16);
                  setCustomDate(localISOTime);
              }
            }
            if (data.video.last_edited_by) {
                setLastEditedBy(data.video.last_edited_by)
            }
            if (data.video.updated_at) {
                setUpdatedAt(data.video.updated_at)
            }
          }
        })
        .catch((err) => console.error("Error fetching video data", err))
    }

    fetch("/api/admin/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCurrentUser(data.user)
          if (!id) {
            setAuthor(data.user.id.toString())
          }
        }
      })
      .catch((err) => console.error("Error fetching current user", err))
  }, [id])

  const handleSave = async (isPublish: boolean) => {
    setIsSaving(true)
    const payload = {
      title,
      slug,
      status: isPublish ? "publish" : (status === "publish" ? "publish" : "draft"),
      author,
      post_parent: postParent,
      external_embed_frame: externalEmbedFrame,
      self_hosted_id: selfHostedId,
      thumbnail_id: thumbnailId,
      featured,
      trending,
      category: selectedCategories.join(","),
      created_at: customDate || undefined,
      updated_at: customDate || undefined
    }

    try {
      let res
      if (id) {
        res = await fetch(`/api/admin/videos/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } else {
        res = await fetch("/api/admin/videos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      }
      if (res.ok) {
        setIsDirty(false)
        setShowSuccessModal(true)
      } else {
        const data = await res.json()
        alert(data.error || "Failed to save video")
      }
    } catch (error) {
      console.error("Error saving video:", error)
      alert("Error saving video")
    } finally {
      setIsSaving(false)
    }
  }

  const handleTrash = async () => {
    if (!id) return
    setConfirmConfig({
      title: "Move to Trash",
      message: "Are you sure you want to move this video to trash?",
      type: "danger",
      onConfirm: async () => {
        setIsSaving(true)
        try {
          const res = await fetch(`/api/admin/videos/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: "trash" }),
          })
          if (res.ok) {
            setIsDirty(false)
            showToast("Video moved to trash", "success")
            router.push("/admin/videos")
          } else {
            showToast("Failed to move to trash", "error")
          }
        } catch (error) {
          console.error("Error trashing video:", error)
          showToast("Error moving to trash", "error")
        } finally {
          setIsSaving(false)
        }
      }
    })
    setShowConfirm(true)
  }

  const handleAddCategory = async () => {
    if (!newCategoryName) return
    setIsSaving(true)
    const categorySlug = newCategoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    try {
      const res = await fetch("/api/admin/terms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newCategoryName,
          slug: categorySlug,
          taxonomy: "video_category",
          parent: parseInt(newCategoryParent),
          description: ""
        }),
      })
      if (res.ok) {
        const data = await res.json()
        setMetaOptions(prev => ({
          ...prev,
          videoCategories: [...prev.videoCategories, { term_id: data.id, name: newCategoryName, slug: categorySlug, parent: parseInt(newCategoryParent) }] as any
        }))
        setNewCategoryName("")
        setNewCategoryParent("0")
        setCategoryError("")
        setShowAddCategoryForm(false)
      } else {
        const data = await res.json()
        setCategoryError(data.error || "Failed to add category")
      }
    } catch (error) {
      console.error("Error adding category:", error)
      setCategoryError("An unexpected error occurred")
    } finally {
      setIsSaving(false)
    }
  }

  return {
    id,
    title, setTitle,
    slug, setSlug,
    status, setStatus,
    author, setAuthor,
    postParent, setPostParent,
    externalEmbedFrame, setExternalEmbedFrame,
    selfHostedId, setSelfHostedId,
    thumbnailId, setThumbnailId,
    thumbnailUrl, setThumbnailUrl,
    featured, setFeatured,
    trending, setTrending,
    selectedCategories, setSelectedCategories,
    metaOptions,
    showMediaModal, setShowMediaModal,
    mediaTarget, setMediaTarget,
    categorySearch, setCategorySearch,
    showAddCategoryForm, setShowAddCategoryForm,
    newCategoryName, setNewCategoryName,
    newCategoryParent, setNewCategoryParent,
    slugManuallyEdited, setSlugManuallyEdited,
    showSuccessModal, setShowSuccessModal,
    isDirty, setIsDirty,
    categoryError, setCategoryError,
    isSaving,
    handleAddCategory,
    handleSave,
    handleTrash,
    currentUser,
    showConfirm,
    setShowConfirm,
    confirmConfig,
    customDate,
    setCustomDate,
    lastEditedBy,
    updatedAt
  }
}
