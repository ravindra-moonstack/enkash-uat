"use client"
import React, { useState } from "react"
import styles from "./category_banner.module.scss"
import CategoryCard from "./CategoryCard"

const CategoryBlogCard = ({ data, slug }: { data: any, slug: string }) => {
  const [posts, setPosts] = useState(data)
  const [offset, setOffset] = useState(10) // initial limit is 10
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(data.length >= 9)

  const loadMore = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/blogs/categoryPageData?category=${slug}&limit=10&offset=${offset}`)
      const resData = await res.json()
      
      if (resData.posts && resData.posts.length > 0) {
        const newPosts = resData.posts.map((post: any) => ({
          categoryName: post.category_names,
          categorySlug: post.category_slugs,
          title: post.title,
          image: post.featured_image_url || post.image,
          imageAlt: post.image_alt,
          slug: post.slug,
          date: post.updated_at,
        }))
        
        setPosts((prev: any) => [...prev, ...newPosts])
        setOffset((prev) => prev + resData.posts.length)
        
        if (resData.posts.length < 10) {
          setHasMore(false)
        }
      } else {
        setHasMore(false)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.category_blog_card}>
      <div className={styles.container}>
        <div className={styles.row}>
          {posts.map((item: any, index: number) => (
            <div className={styles.col_12} key={index}>
              <CategoryCard data={item} />
            </div>
          ))}
        </div>
        
        {hasMore && (
          <div className={styles.load_more_container}>
            <button 
              className={styles.load_more_btn} 
              onClick={loadMore} 
              disabled={loading}
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default CategoryBlogCard
