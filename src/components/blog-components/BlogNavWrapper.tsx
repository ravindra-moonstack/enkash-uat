"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import BlogNav from '../blog-nav'

const BlogNavWrapper = ({ navData, activeCategory }: { navData: any, activeCategory: string }) => {
  const router = useRouter()
  
  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Redirect to main resources page with search query and Blogs tab selected
      router.push(`/resources?search=${encodeURIComponent(query)}&tab=Blogs`)
    }
  }

  return (
    <BlogNav 
      data={navData} 
      activeCategory={activeCategory} 
      onSearch={handleSearch}
    />
  )
}

export default BlogNavWrapper
