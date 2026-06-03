import { useState, useEffect, useRef } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { getImageUrl } from "@/src/utils/common"
import { useToast } from "@/src/context/ToastContext"

export function useAddPost() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = searchParams.get("id")
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [content, setContent] = useState("")
  const [status, setStatus] = useState("draft")
  const [featuredImageId, setFeaturedImageId] = useState("")
  const [featuredImageUrl, setFeaturedImageUrl] = useState("")
  const [featuredImageAlt, setFeaturedImageAlt] = useState("")
  const [featuredRight, setFeaturedRight] = useState("no")
  const [featuredLeftSide, setFeaturedLeftSide] = useState("no")
  const [categoryFeaturedBlog, setCategoryFeaturedBlog] = useState("no")
  const [showFeaturedImage, setShowFeaturedImage] = useState("right")
  const [schemaMarkup, setSchemaMarkup] = useState("")
  const [removeAuthorDetails, setRemoveAuthorDetails] = useState(false)
  const [seoTitle, setSeoTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [seoRobots, setSeoRobots] = useState("follow")
  const [metaOptions, setMetaOptions] = useState<{
    categories: any[]
    users: any[]
    tags: any[]
  }>({
    categories: [],
    users: [],
    tags: [],
  })
  const [author, setAuthor] = useState("")
  const [categories, setCategories] = useState<string[]>([])
  const [excerpt, setExcerpt] = useState("")
  const [tags, setTags] = useState("")
  const [permalinkBase, setPermalinkBase] = useState("")
  const [permalinkEditable, setPermalinkEditable] = useState(false)
  const [showMediaModal, setShowMediaModal] = useState(false)
  const [mediaTarget, setMediaTarget] = useState<"editor" | "featured">(
    "editor"
  )

  const [focusKeyword, setFocusKeyword] = useState("")
  const [categorySearch, setCategorySearch] = useState("")
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false)
  const [newCategoryName, setNewCategoryName] = useState("")
  const [newCategoryParent, setNewCategoryParent] = useState("0")
  const [slugError, setSlugError] = useState("")
  const [isCheckingSlug, setIsCheckingSlug] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [isDirty, setIsDirty] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isSavingDraft, setIsSavingDraft] = useState(false)
  const [isPublishing, setIsPublishing] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const [customDate, setCustomDate] = useState("")

  const [lastEditedBy, setLastEditedBy] = useState("System")
  const [updatedAt, setUpdatedAt] = useState("")

  // Confirmation Modal State
  const [showConfirm, setShowConfirm] = useState(false)
  const [confirmConfig, setConfirmConfig] = useState<{
    title: string
    message: string
    onConfirm: () => void
    type: "primary" | "danger"
  } | null>(null)

  const { showToast } = useToast()

  const isSaving = isSavingDraft || isPublishing
  const isInitialLoad = useRef(true)
  const isSavingRef = useRef(false)

  useEffect(() => {
    if (id) {
      fetch(`/api/admin/blogs/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.post) {
            setTitle(data.post.title || "")
            setSlug(data.post.slug || "")
            setContent(data.post.content || "")
            setStatus(data.post.status || "draft")
            setFeaturedImageId(data.post.featured_image || "")
            setFeaturedImageUrl(getImageUrl(data.post.featured_image_url) || "")
            setFeaturedImageAlt(data.post.featured_image_alt || "")
            setFeaturedRight(data.post.featured_right || "no")
            setFeaturedLeftSide(data.post.featured_left_side || "no")
            setCategoryFeaturedBlog(data.post.category_featured_blog || "no")
            setAuthor(data.post.author ? data.post.author.toString() : "1")
            setCategories(
              data.post.category ? data.post.category.split(",") : []
            )
            setExcerpt(data.post.excerpt || "")
            setTags(data.post.tags || "")
            setLastEditedBy(data.post.last_edited_by || "System")
            setUpdatedAt(data.post.updated_at || "")
            if (data.post.created_at) {
              const dateObj = new Date(data.post.created_at)
              if (!isNaN(dateObj.getTime())) {
                const offset = dateObj.getTimezoneOffset() * 60000
                const localISOTime = new Date(dateObj.getTime() - offset)
                  .toISOString()
                  .slice(0, 16)
                setCustomDate(localISOTime)
              }
            }
          }
          if (data.meta) {
            setShowFeaturedImage(data.meta.show_featured_image || "hide")
            setSchemaMarkup(data.meta.post_schema_markup || "")
            setRemoveAuthorDetails(!!data.meta.remove_author_details)
            setSeoTitle(data.meta.meta_title || "")
            setMetaDescription(data.meta.meta_description || "")
            setFocusKeyword(data.meta.focus_keyword || "")
            setSeoRobots(data.meta.seo_robots || "follow")
          }
        })
        .catch((err) => console.error("Error fetching post data", err))
    }

    fetch("/api/admin/blogs/meta")
      .then((res) => res.json())
      .then((data) => {
        setMetaOptions({
          categories: data.categories || [],
          users: data.users || [],
          tags: data.tags || [],
        })
        // if (!id && data.users && data.users.length > 0) {
        //   setAuthor(data.users[0].ID.toString())
        // }
      })
      .catch((err) => console.error("Error fetching meta", err))

    if (typeof window !== "undefined") {
      setPermalinkBase(`${window.location.origin}/resources/blog/`)
    }

    // Fetch current user
    fetch("/api/admin/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCurrentUser(data.user)
          if (!id && data.user?.id) {
            setAuthor(data.user.id.toString())
          }
        }
      })
      .catch((err) => console.error("Error fetching current user", err))

    // After initial load (and fetch if id exists), we start tracking changes
    const timer = setTimeout(() => {
      isInitialLoad.current = false
    }, 1000)
    return () => clearTimeout(timer)
  }, [id])

  useEffect(() => {
    if (!isInitialLoad.current) {
      setIsDirty(true)
    }
  }, [
    title,
    slug,
    content,
    featuredImageId,
    featuredRight,
    featuredLeftSide,
    categoryFeaturedBlog,
    showFeaturedImage,
    schemaMarkup,
    removeAuthorDetails,
    seoTitle,
    metaDescription,
    focusKeyword,
    author,
    categories,
    excerpt,
    tags,
  ])

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault()
        e.returnValue = ""
      }
    }
    window.addEventListener("beforeunload", handleBeforeUnload)

    // Handle internal navigation (Link clicks)
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")
      if (link && isDirty) {
        const href = link.getAttribute("href")
        // If it's an internal link and not a target="_blank"
        if (href && !href.startsWith("#") && link.target !== "_blank") {
          if (
            !window.confirm(
              "You have unsaved changes. Your changes will be lost if you leave this page. Are you sure?"
            )
          ) {
            e.preventDefault()
            e.stopImmediatePropagation()
          }
        }
      }
    }

    document.addEventListener("click", handleLinkClick, true)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
      document.removeEventListener("click", handleLinkClick, true)
    }
  }, [isDirty])

  const handleAddCategory = async () => {
    if (!newCategoryName) return
    const slug = newCategoryName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")
    try {
      const res = await fetch("/api/admin/terms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newCategoryName,
          slug,
          taxonomy: "category",
          parent: parseInt(newCategoryParent),
          description: "",
        }),
      })
      if (res.ok) {
        const data = await res.json()
        setMetaOptions((prev) => ({
          ...prev,
          categories: [
            ...prev.categories,
            {
              term_id: data.id,
              name: newCategoryName,
              slug,
              parent: parseInt(newCategoryParent),
            },
          ] as any,
        }))
        setNewCategoryName("")
        setNewCategoryParent("0")
        setShowAddCategoryForm(false)
        showToast("Category added successfully", "success")
      } else {
        showToast("Failed to add category", "error")
      }
    } catch (error) {
      console.error("Error adding category:", error)
    }
  }

  const handleApplySlug = async (newSlug: string) => {
    if (!newSlug) {
      setSlugError("")
      return false
    }

    setIsCheckingSlug(true)
    setSlugError("")

    try {
      const res = await fetch(
        `/api/admin/blogs/check-slug?slug=${newSlug}${id ? `&excludeId=${id}` : ""}`
      )
      const data = await res.json()

      if (data.exists) {
        setSlugError("This slug already exists. Please use a unique slug.")
        setIsCheckingSlug(false)
        return false
      }

      setSlug(newSlug)
      setIsCheckingSlug(false)
      return true
    } catch (err) {
      console.error("Error checking slug:", err)
      setIsCheckingSlug(false)
      return false
    }
  }

  const handleAddTag = async (tagName: string) => {
    if (!tagName) return

    // Check if tag already exists in metaOptions
    let tag = metaOptions.tags.find(
      (t) => t.name.toLowerCase() === tagName.toLowerCase()
    )

    if (!tag) {
      // Create new tag
      const slug = tagName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "")
      try {
        const res = await fetch("/api/admin/terms", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: tagName,
            slug,
            taxonomy: "post_tag",
          }),
        })
        if (res.ok) {
          const data = await res.json()
          tag = { term_id: data.id, name: tagName, slug }
          setMetaOptions((prev) => ({
            ...prev,
            tags: [...prev.tags, tag],
          }))
        } else {
          showToast("Failed to create tag", "error")
          return
        }
      } catch (err) {
        console.error("Error creating tag:", err)
        return
      }
    }

    const currentTags = tags ? tags.split(",").filter((t) => t) : []
    if (!currentTags.includes(tag.term_id.toString())) {
      setTags([...currentTags, tag.term_id.toString()].join(","))
    }
  }

  const handleSave = async (isPublish: boolean) => {
    if (isSavingRef.current) return
    isSavingRef.current = true

    if (!slug) {
      showToast("Slug is required", "error")
      isSavingRef.current = false
      return
    }

    // Double check slug duplicate before saving
    setIsCheckingSlug(true)
    try {
      const checkRes = await fetch(
        `/api/admin/blogs/check-slug?slug=${slug}${id ? `&excludeId=${id}` : ""}`
      )
      const checkData = await checkRes.json()
      if (checkData.exists) {
        setSlugError("This slug already exists. Please use a unique slug.")
        setIsCheckingSlug(false)
        showToast("Cannot save: Slug already exists.", "error")
        isSavingRef.current = false
        return
      }
    } catch (err) {
      console.error("Error checking slug during save:", err)
    }
    setIsCheckingSlug(false)

    if (isPublish) setIsPublishing(true)
    else setIsSavingDraft(true)

    const payload = {
      title,
      slug,
      content,
      status: isPublish ? "publish" : "draft",
      featured_image: featuredImageId,
      featured_right: featuredRight,
      featured_left_side: featuredLeftSide,
      category_featured_blog: categoryFeaturedBlog,
      show_featured_image: showFeaturedImage,
      post_schema_markup: schemaMarkup,
      remove_author_details: removeAuthorDetails,
      meta_title: seoTitle,
      meta_description: metaDescription,
      focus_keyword: focusKeyword,
      seo_robots: seoRobots,
      author,
      categories: categories.join(","),
      excerpt,
      tags,
      created_at: customDate
        ? customDate.replace("T", " ") + (customDate.length === 16 ? ":00" : "")
        : undefined,
    }

    try {
      let res
      if (id) {
        res = await fetch(`/api/admin/blogs/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } else {
        res = await fetch("/api/admin/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      }
      if (res.ok) {
        const data = await res.json()
        setIsDirty(false)
        if (isPublish) {
          setSuccessMessage("Your post has been published successfully!")
          setStatus("publish")
        } else {
          setSuccessMessage("Your post has been saved as draft successfully!")
          setStatus("draft")
        }
        setShowSuccessModal(true)
        setUpdatedAt(new Date().toISOString())
        if (currentUser?.name) {
          setLastEditedBy(currentUser.name)
        }
        if (data.id) {
          router.push(`/admin/blogs/edit?id=${data.id}`)
        }
      } else {
        showToast("Failed to save post", "error")
      }
    } catch (error) {
      console.error("Error saving post:", error)
      showToast("Error saving post", "error")
    } finally {
      setIsPublishing(false)
      setIsSavingDraft(false)
      isSavingRef.current = false
    }
  }

  return {
    id,
    title,
    setTitle,
    slug,
    setSlug,
    content,
    setContent,
    status,
    setStatus,
    featuredImageId,
    setFeaturedImageId,
    featuredImageUrl,
    setFeaturedImageUrl,
    featuredImageAlt,
    setFeaturedImageAlt,
    featuredRight,
    setFeaturedRight,
    featuredLeftSide,
    setFeaturedLeftSide,
    categoryFeaturedBlog,
    setCategoryFeaturedBlog,
    showFeaturedImage,
    setShowFeaturedImage,
    schemaMarkup,
    setSchemaMarkup,
    removeAuthorDetails,
    setRemoveAuthorDetails,
    seoTitle,
    setSeoTitle,
    metaDescription,
    setMetaDescription,
    seoRobots,
    setSeoRobots,
    focusKeyword,
    setFocusKeyword,
    metaOptions,
    author,
    setAuthor,
    categories,
    setCategories,
    excerpt,
    setExcerpt,
    tags,
    setTags,
    permalinkEditable,
    setPermalinkEditable,
    showMediaModal,
    setShowMediaModal,
    mediaTarget,
    setMediaTarget,
    permalinkBase,
    categorySearch,
    setCategorySearch,
    showAddCategoryForm,
    setShowAddCategoryForm,
    newCategoryName,
    setNewCategoryName,
    newCategoryParent,
    setNewCategoryParent,
    slugError,
    setSlugError,
    isCheckingSlug,
    setIsCheckingSlug,
    isSaving,
    isSavingDraft,
    isPublishing,
    successMessage,
    customDate,
    setCustomDate,
    showConfirm,
    setShowConfirm,
    confirmConfig,
    currentUser,
    isDirty,
    setIsDirty,
    showSuccessModal,
    setShowSuccessModal,
    handleAddCategory,
    handleApplySlug,
    handleAddTag,
    handleSave,
    lastEditedBy,
    updatedAt,
  }
}
