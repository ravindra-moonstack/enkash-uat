const getBaseUrl = () => {
  if (typeof window === "undefined") {
    return process.env.INTERNAL_API_URL || `http://127.0.0.1:${process.env.PORT || 3000}`
  }
  return process.env.NEXT_PUBLIC_URL || "http://localhost:3000"
}

export const getBlogCategories = async () => {
  try {
    const res = await fetch(`${getBaseUrl()}/api/resources/blogs/getCategory`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error("Error in getBlogCategories:", error)
    return null
  }
}

export const getCategoryData = async (slug: string, search?: string) => {
  const query = new URLSearchParams()
  query.set("category", slug)
  if (search) query.set("search", search)

  try {
    const res = await fetch(
      `${getBaseUrl()}/api/resources/blogs/getCategoryData?${query.toString()}`,
      { next: { revalidate: 60 } }
    )
    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error("Error in getCategoryData:", error)
    return null
  }
}

export const getPostBySlug = async (slug: string, token?: string) => {
  const headers: any = {}
  if (token) {
    headers["Cookie"] = `token=${token}`
  }

  try {
    const res = await fetch(
      `${getBaseUrl()}/api/resources/blogs/getPostBySlug?slug=${slug}`,
      {
        cache: token ? "no-store" : "force-cache",
        next: token ? undefined : { revalidate: 60 },
        headers,
      }
    )
    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error("Error in getPostBySlug:", error)
    return null
  }
}

export const getVideoCategories = async () => {
  try {
    const res = await fetch(`${getBaseUrl()}/api/resources/videos/getCategories`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error("Error in getVideoCategories:", error)
    return null
  }
}

export const getVideos = async (params: {
  page?: number
  limit?: string
  category?: string
  search?: string
}) => {
  const query = new URLSearchParams({
    page: (params.page || 1).toString(),
    limit: params.limit || "6",
  })
  if (params.category && params.category !== "all")
    query.set("category", params.category)
  if (params.search) query.set("search", params.search)

  try {
    const res = await fetch(
      `${getBaseUrl()}/api/resources/videos?${query.toString()}`,
      {
        next: { revalidate: 60 },
      }
    )
    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error("Error in getVideos:", error)
    return null
  }
}

export const getAuthorData = async (
  username: string,
  search?: string,
  limit?: number,
  offset?: number
) => {
  const query = new URLSearchParams()
  query.set("author", username)
  if (search) query.set("search", search)
  if (limit) query.set("limit", limit.toString())
  if (offset) query.set("offset", offset.toString())

  try {
    const res = await fetch(
      `${getBaseUrl()}/api/resources/blogs/getAuthorData?${query.toString()}`,
      { next: { revalidate: 60 } }
    )
    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error("Error in getAuthorData:", error)
    return null
  }
}

