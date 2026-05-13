import { useState, useEffect, useRef } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { getImageUrl } from "@/src/utils/common"

export function useEditPost() {
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
  const [showFeaturedImage, setShowFeaturedImage] = useState("hide")
  const [schemaMarkup, setSchemaMarkup] = useState("")
  const [removeAuthorDetails, setRemoveAuthorDetails] = useState(false)
  const [seoTitle, setSeoTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
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
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [isDirty, setIsDirty] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // New states for error and progress
  const [slugError, setSlugError] = useState("")
  const [isCheckingSlug, setIsCheckingSlug] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const isInitialLoad = useRef(true)

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
          }
          if (data.meta) {
            setShowFeaturedImage(data.meta.show_featured_image || "hide")
            setSchemaMarkup(data.meta.post_schema_markup || "")
            setRemoveAuthorDetails(!!data.meta.remove_author_details)
            setSeoTitle(data.meta.meta_title || "")
            setMetaDescription(data.meta.meta_description || "")
            setFocusKeyword(data.meta.focus_keyword || "")
          }
        })
        .catch((err) => console.error("Error fetching post data", err))
    } else {
      router.push("/admin/blogs")
    }

    fetch("/api/admin/blogs/meta")
      .then((res) => res.json())
      .then((data) => {
        setMetaOptions({
          categories: data.categories || [],
          users: data.users || [],
          tags: data.tags || [],
        })
        if (!id && data.users && data.users.length > 0) {
          setAuthor(data.users[0].ID.toString())
        }
      })
      .catch((err) => console.error("Error fetching meta", err))

    if (typeof window !== "undefined") {
      setPermalinkBase(`${window.location.origin}/resources/blog/`)
    }

    fetch("/api/admin/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCurrentUser(data.user)
        }
      })
      .catch((err) => console.error("Error fetching current user", err))

    const timer = setTimeout(() => {
      isInitialLoad.current = false
    }, 1000)
    return () => clearTimeout(timer)
  }, [id, router])

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

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")
      if (link && isDirty) {
        const href = link.getAttribute("href")
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
    setIsSaving(true)
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
      } else {
        alert("Failed to add category")
      }
    } catch (error) {
      console.error("Error adding category:", error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleApplySlug = async (newSlug: string) => {
    if (!newSlug) return false
    setSlug(newSlug)
    return true
  }

  const handleAddTag = async (tagName: string) => {
    if (!tagName) return

    setIsSaving(true)
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
          alert("Failed to create tag")
          setIsSaving(false)
          return
        }
      } catch (err) {
        console.error("Error creating tag:", err)
        setIsSaving(false)
        return
      }
    }

    const currentTags = tags ? tags.split(",").filter((t) => t) : []
    if (!currentTags.includes(tag.term_id.toString())) {
      setTags([...currentTags, tag.term_id.toString()].join(","))
    }
    setIsSaving(false)
  }

  const handleSave = async (isPublish: boolean) => {
    if (!slug) {
      alert("Slug is required")
      return
    }

    setIsSaving(true)
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
      author,
      categories: categories.join(","),
      excerpt,
      tags,
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
        setIsDirty(false)
        setShowSuccessModal(true)
      } else {
        alert("Failed to save post")
      }
    } catch (error) {
      console.error("Error saving post:", error)
      alert("Error saving post")
    } finally {
      setIsSaving(false)
    }
  }

  const handleTrash = async () => {
    if (!id) return
    if (!confirm("Are you sure you want to move this post to trash?")) return

    setIsSaving(true)
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "trash" }),
      })
      if (res.ok) {
        setIsDirty(false)
        router.push("/admin/blogs")
      } else {
        alert("Failed to move to trash")
      }
    } catch (error) {
      console.error("Error moving to trash:", error)
      alert("Error moving to trash")
    } finally {
      setIsSaving(false)
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
    currentUser,
    isDirty,
    setIsDirty,
    showSuccessModal,
    setShowSuccessModal,
    slugError,
    setSlugError,
    isCheckingSlug,
    setIsCheckingSlug,
    isSaving,
    handleAddCategory,
    handleApplySlug,
    handleAddTag,
    handleSave,
    handleTrash,
    router,
  }
}
