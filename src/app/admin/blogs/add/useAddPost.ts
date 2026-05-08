import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { getImageUrl } from "@/src/utils/common"

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
  const [showFeaturedImage, setShowFeaturedImage] = useState("hide")
  const [schemaMarkup, setSchemaMarkup] = useState("")
  const [removeAuthorDetails, setRemoveAuthorDetails] = useState(false)
  const [seoTitle, setSeoTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [metaOptions, setMetaOptions] = useState({
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
    }

    // Fetch meta (users, categories)
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
  }, [id])

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
      } else {
        alert("Failed to add category")
      }
    } catch (error) {
      console.error("Error adding category:", error)
    }
  }

  const handleSave = async (isPublish: boolean) => {
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
        alert("Post saved successfully!")
        router.push("/admin/blogs")
      } else {
        alert("Failed to save post")
      }
    } catch (error) {
      console.error("Error saving post:", error)
      alert("Error saving post")
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
    handleAddCategory,
    handleSave,
  }
}
