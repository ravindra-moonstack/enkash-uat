"use client"
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import BlogNav from '../blog-nav'

const BlogNavWrapper = ({ navData, activeCategory }: { navData: any, activeCategory: string }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentQuery = searchParams.get('q') || ""

  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Stay on the category page but filter by search query
      router.push(`/resources/blog/category/${activeCategory}?q=${encodeURIComponent(query)}`)
    } else {
      // Clear search
      router.push(`/resources/blog/category/${activeCategory}`)
    }
  }

  return (
    <BlogNav
      data={navData}
      activeCategory={activeCategory}
      onSearch={handleSearch}
      initialSearchQuery={currentQuery}
    />
  )
}

export default BlogNavWrapper
