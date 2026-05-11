import { useState, useCallback, useRef } from "react"

export interface Pagination {
  page: number
  totalPages: number
  totalItems?: number
}

interface CacheData {
  data: any[]
  pagination: Pagination
}

export const useResource = (
  type: "Videos" | "Blogs" | "Media",
  initialData?: any
) => {
  const [data, setData] = useState<any[]>(initialData?.data || [])
  const [loading, setLoading] = useState(!initialData)
  const [pagination, setPagination] = useState<Pagination>(
    initialData?.pagination || {
      page: 1,
      totalPages: 1,
    }
  )

  // Cache for background fetching or switching tabs
  const cache = useRef<{ [key: string]: CacheData }>({})

  const fetchResources = useCallback(
    async (params: {
      page: number
      limit: string
      search?: string
      category?: string
      useCache?: boolean
    }) => {
      const { page, limit, search, category, useCache = true } = params
      const cacheKey = `${category || "all"}-${search || ""}`

      // Check cache if requested and it's the first page
      if (useCache && page === 1 && !search && cache.current[cacheKey]) {
        setData(cache.current[cacheKey].data)
        setPagination(cache.current[cacheKey].pagination)
        setLoading(false)
        return
      }

      setLoading(true)
      try {
        const apiPath =
          type === "Videos"
            ? "/api/resources/videos"
            : type === "Blogs"
              ? "/api/resources/blogs"
              : "/api/resources/media-coverage"

        const query = new URLSearchParams({
          page: page.toString(),
          limit: limit,
        })

        if (search) query.set("search", search)
        if (category && category !== "all") query.set("category", category)

        const res = await fetch(`${apiPath}?${query.toString()}`)
        const result = await res.json()

        if (result.data) {
          setData(result.data)
          const newPagination = {
            page: result.pagination.page,
            totalPages: result.pagination.totalPages,
            totalItems: result.pagination.totalItems,
          }
          setPagination(newPagination)

          // Update cache if it's the first page without search
          if (useCache && page === 1 && !search) {
            cache.current[cacheKey] = {
              data: result.data,
              pagination: newPagination,
            }
          }
        }
      } catch (error) {
        console.error(`${type} fetch error:`, error)
      } finally {
        setLoading(false)
      }
    },
    [type]
  )

  const fetchInBg = useCallback(
    async (category = "all") => {
      if (cache.current[category]) return
      try {
        const apiPath =
          type === "Videos"
            ? "/api/resources/videos"
            : type === "Blogs"
              ? "/api/resources/blogs"
              : "/api/resources/media-coverage"

        const query = new URLSearchParams({ page: "1", limit: "9" })
        if (category !== "all") query.set("category", category)

        const res = await fetch(`${apiPath}?${query.toString()}`)
        const result = await res.json()
        if (result.data) {
          cache.current[category] = {
            data: result.data,
            pagination: {
              page: result.pagination.page,
              totalPages: result.pagination.totalPages,
            },
          }
        }
      } catch (error) {
        console.error(`Background fetch error for ${type}:`, error)
      }
    },
    [type]
  )

  return {
    data,
    setData,
    loading,
    setLoading,
    pagination,
    setPagination,
    fetchResources,
    fetchInBg,
  }
}
