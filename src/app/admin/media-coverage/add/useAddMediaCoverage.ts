import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"

export function useAddMediaCoverage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = searchParams.get("id")

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

  const [metaOptions, setMetaOptions] = useState<{
    users: any[]
    items: any[]
  }>({
    users: [],
    items: [],
  })
  const [showMediaModal, setShowMediaModal] = useState(false)

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
          }
        })
    }
  }, [id])

  const handleSave = async (isPublish: boolean) => {
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
        router.push("/admin/media-coverage")
      }
    } catch (error) {
      console.error("Error saving:", error)
    }
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
    handleSave,
  }
}
