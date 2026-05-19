import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useToast } from "@/src/context/ToastContext"

export function useAddMediaCoverage() {
  const { showToast } = useToast()
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = searchParams.get("id")

  const [isDirty, setIsDirty] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [status, setStatus] = useState("draft")
  const [author, setAuthor] = useState("1")
  const [postParent, setPostParent] = useState("0")

  const [mediaCoverageImage, setMediaCoverageImage] = useState<string | null>(
    null
  )
  const [imageUrl, setImageUrl] = useState("")
  const [mediaCoverageDate, setMediaCoverageDate] = useState("")
  const [mediaCoverageHeading, setMediaCoverageHeading] = useState("")
  const [mediaCoverageDescription, setMediaCoverageDescription] = useState("")
  const [mediaCoverageMediaLink, setMediaCoverageMediaLink] = useState("")
  const [customDate, setCustomDate] = useState("")
  const [lastEditedBy, setLastEditedBy] = useState<string>("")
  const [updatedAt, setUpdatedAt] = useState<string>("")

  const [metaOptions, setMetaOptions] = useState<{
    users: any[]
    items: any[]
  }>({
    users: [],
    items: [],
  })
  const [showMediaModal, setShowMediaModal] = useState(false)
  
  const [showConfirm, setShowConfirm] = useState(false)
  const [confirmConfig, setConfirmConfig] = useState<{
    onConfirm: () => void;
    message: string;
    title?: string;
    type?: "danger" | "primary";
  } | null>(null)

  // Progress state
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    const fetchMeta = async () => {
      const [metaRes, itemsRes] = await Promise.all([
        fetch("/api/admin/blogs/meta"),
        fetch("/api/admin/media-coverage?limit=1000"),
      ])
      const metaData = await metaRes.json()
      const itemsData = await itemsRes.json()

      setMetaOptions({
        users: metaData.users || [],
        items: itemsData.items || [],
      })
      if (!id && metaData.users && metaData.users.length > 0) {
        setAuthor(metaData.users[0].ID.toString())
      }
    }
    fetchMeta()

    if (id) {
      fetch(`/api/admin/media-coverage/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.item) {
            setTitle(data.item.title || "")
            setSlug(data.item.slug || "")
            setStatus(data.item.status || "draft")
            setAuthor(data.item.author ? data.item.author.toString() : "1")
            setPostParent(
              data.item.post_parent ? data.item.post_parent.toString() : "0"
            )
            setMediaCoverageImage(data.item.media_coverage_image || null)
            setImageUrl(data.item.image_url || "")
            setMediaCoverageDate(
              data.item.media_coverage_date
                ? data.item.media_coverage_date.split("T")[0]
                : ""
            )
            setMediaCoverageHeading(data.item.media_coverage_heading || "")
            setMediaCoverageDescription(
              data.item.media_coverage_description || ""
            )
            setMediaCoverageMediaLink(data.item.media_coverage_media_link || "")
            
            if (data.item.updated_at || data.item.created_at) {
              const dateStr = data.item.updated_at || data.item.created_at;
              const dateObj = new Date(dateStr);
              if (!isNaN(dateObj.getTime())) {
                  const offset = dateObj.getTimezoneOffset() * 60000;
                  const localISOTime = (new Date(dateObj.getTime() - offset)).toISOString().slice(0, 16);
                  setCustomDate(localISOTime);
              }
            }
            if (data.item.last_edited_by) {
                setLastEditedBy(data.item.last_edited_by)
            }
            if (data.item.updated_at) {
                setUpdatedAt(data.item.updated_at)
            }
          }
        })
        .catch((err) => console.error("Error fetching media coverage data", err))
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
      status: isPublish
        ? "publish"
        : status === "publish"
          ? "publish"
          : "draft",
      author,
      post_parent: postParent,
      media_coverage_image: mediaCoverageImage,
      media_coverage_date: mediaCoverageDate,
      media_coverage_heading: mediaCoverageHeading,
      media_coverage_description: mediaCoverageDescription,
      media_coverage_media_link: mediaCoverageMediaLink,
      created_at: customDate || undefined,
      updated_at: customDate || undefined,
    }

    try {
      let res
      if (id) {
        res = await fetch(`/api/admin/media-coverage/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } else {
        res = await fetch("/api/admin/media-coverage", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      }
      if (res.ok) {
        alert("Media coverage saved successfully!")
        setIsDirty(false)
        router.push("/admin/media-coverage")
      }
    } catch (error) {
      console.error("Error saving:", error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleTrash = async () => {
    if (!id) return
    setConfirmConfig({
      title: "Move to Trash",
      message: "Are you sure you want to move this item to trash?",
      type: "danger",
      onConfirm: async () => {
        setIsSaving(true)
        try {
          const res = await fetch(`/api/admin/media-coverage/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: "trash" }),
          })
          if (res.ok) {
            setIsDirty(false)
            showToast("Item moved to trash", "success")
            router.push("/admin/media-coverage")
          } else {
            showToast("Failed to move to trash", "error")
          }
        } catch (error) {
          console.error("Error trashing item:", error)
          showToast("Error moving item to trash", "error")
        } finally {
          setIsSaving(false)
        }
      }
    })
    setShowConfirm(true)
  }

  return {
    id,
    title,
    setTitle,
    slug,
    setSlug,
    status,
    setStatus,
    author,
    setAuthor,
    postParent,
    setPostParent,
    mediaCoverageImage,
    setMediaCoverageImage,
    imageUrl,
    setImageUrl,
    mediaCoverageDate,
    setMediaCoverageDate,
    mediaCoverageHeading,
    setMediaCoverageHeading,
    mediaCoverageDescription,
    setMediaCoverageDescription,
    mediaCoverageMediaLink,
    setMediaCoverageMediaLink,
    metaOptions,
    showMediaModal,
    setShowMediaModal,
    isDirty,
    setIsDirty,
    isSaving,
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
