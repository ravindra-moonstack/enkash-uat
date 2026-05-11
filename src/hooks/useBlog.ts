"use client"

import { useState, useCallback } from "react"

export interface BlogPost {
  id: number
  title: string
  slug: string
  content?: string
  excerpt?: string
  featured_image_url?: string
  image_alt?: string
  category_names?: string
  category_slugs?: string
  created_at: string
  updated_at: string
  author?: string
  show_featured_image?: string
}

export interface BlogResponse {
  data: BlogPost[]
  pagination: {
    total: number
    page: number
    limit: number
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}

export interface PostBySlugResponse {
  posts: BlogPost[]
  relatedBlogs: BlogPost[]
}

export const useBlog = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchRecentBlogs = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/resources/blogs/getRecentBlogs")
      if (!res.ok) throw new Error(`Error: ${res.status}`)
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      return data.posts as BlogPost[]
    } catch (err: any) {
      setError(err.message)
      return []
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchPostBySlug = useCallback(async (slug: string) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/resources/blogs/getPostBySlug?slug=${slug}`)
      if (!res.ok) throw new Error(`Error: ${res.status}`)
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      return data as PostBySlugResponse
    } catch (err: any) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchAllPosts = useCallback(
    async (params: { page?: number; limit?: number; search?: string } = {}) => {
      setLoading(true)
      setError(null)
      try {
        const queryParams = new URLSearchParams()
        if (params.page) queryParams.append("page", params.page.toString())
        if (params.limit) queryParams.append("limit", params.limit.toString())
        if (params.search) queryParams.append("search", params.search)

        const res = await fetch(
          `/api/resources/blogs?${queryParams.toString()}`
        )
        if (!res.ok) throw new Error(`Error: ${res.status}`)
        const data = await res.json()
        if (data.error) throw new Error(data.error)
        return data as BlogResponse
      } catch (err: any) {
        setError(err.message)
        return { data: [], pagination: null } as any
      } finally {
        setLoading(false)
      }
    },
    []
  )

  const fetchCategoryData = useCallback(async (category: string) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(
        `/api/resources/blogs/getCategoryData?category=${category}`
      )
      if (!res.ok) throw new Error(`Error: ${res.status}`)
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      return data
    } catch (err: any) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    loading,
    error,
    fetchRecentBlogs,
    fetchPostBySlug,
    fetchAllPosts,
    fetchCategoryData,
  }
}
