const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const getBlogCategories = async () => {
  const res = await fetch(`${BASE_URL}/api/resources/blogs/getCategory`, {
    next: { revalidate: 300 },
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
    { next: { revalidate: 60 } }
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
      next: { revalidate: 60 },
      headers,
    }
  )
  if (!res.ok) return null
  return res.json()
}

export const getVideoCategories = async () => {
  const res = await fetch(`${BASE_URL}/api/resources/videos/getCategories`, {
    next: { revalidate: 300 },
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
      next: { revalidate: 60 },
    }
  )
  if (!res.ok) return null
  return res.json()
}
