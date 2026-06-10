const BASE_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3000"

export const getBlogCategories = async () => {
  const res = await fetch(`${BASE_URL}/api/resources/blogs/getCategory`, {
    cache: "no-store",
  })
  if (!res.ok) return null
  return res.json()
}

export const getCategoryData = async (slug: string, search?: string) => {
  const query = new URLSearchParams()
  query.set("category", slug)
  if (search) query.set("search", search)

  const res = await fetch(
    `${BASE_URL}/api/resources/blogs/getCategoryData?${query.toString()}`,
    { cache: "no-store" }
  )
  if (!res.ok) return null
  return res.json()
}

export const getPostBySlug = async (slug: string, token?: string) => {
  const headers: any = {}
  if (token) {
    headers["Cookie"] = `token=${token}`
  }

  const res = await fetch(
    `${BASE_URL}/api/resources/blogs/getPostBySlug?slug=${slug}`,
    {
      cache: "no-store",
      headers,
    }
  )
  if (!res.ok) return null
  return res.json()
}

export const getVideoCategories = async () => {
  const res = await fetch(`${BASE_URL}/api/resources/videos/getCategories`, {
    cache: "no-store",
  })
  if (!res.ok) return null
  return res.json()
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

  const res = await fetch(
    `${BASE_URL}/api/resources/videos?${query.toString()}`,
    {
      cache: "no-store",
    }
  )
  if (!res.ok) return null
  return res.json()
}
