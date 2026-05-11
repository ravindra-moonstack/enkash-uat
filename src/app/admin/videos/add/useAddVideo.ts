import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"

export function useAddVideo() {
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
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isDirty, setIsDirty] = useState(false)
  
  const [metaOptions, setMetaOptions] = useState({ categories: [], videoCategories: [], users: [], videos: [] })
  const [showMediaModal, setShowMediaModal] = useState(false)
  const [mediaTarget, setMediaTarget] = useState<"self_hosted" | "thumbnail">("thumbnail")
  const [categorySearch, setCategorySearch] = useState("")
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false)
  const [newCategoryName, setNewCategoryName] = useState("")
  const [newCategoryParent, setNewCategoryParent] = useState("0")

  useEffect(() => {
    // Fetch meta data
    const fetchMeta = async () => {
        const [metaRes, videosRes] = await Promise.all([
            fetch("/api/admin/blogs/meta"),
            fetch("/api/admin/videos?limit=1000") // To get all videos for parent selection
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
            setAuthor(metaData.users[0].ID.toString())
        }
    }
    fetchMeta()

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
          }
        })
        .catch((err) => console.error("Error fetching video data", err))
    }
  }, [id])

  const handleSave = async (isPublish: boolean) => {
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
      category: selectedCategories.join(",")
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
    }
  }

  const handleAddCategory = async () => {
    if (!newCategoryName) return
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
        setShowAddCategoryForm(false)
      } else {
        const data = await res.json()
        alert(data.error || "Failed to add category")
      }
    } catch (error) {
      console.error("Error adding category:", error)
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
    handleAddCategory,
    handleSave
  }
}
