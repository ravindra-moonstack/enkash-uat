"use client"
import React, { useState } from "react"
import styles from "../category-components/category_banner.module.scss"
import CategoryCard from "../category-components/CategoryCard"

const AuthorBlogCard = ({
  data,
  author,
  searchQuery,
}: {
  data: any
  author: string
  searchQuery?: string
}) => {
  const [posts, setPosts] = useState(data)
  const [offset, setOffset] = useState(10) // initial limit is 9-10
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(data.length >= 9)

  React.useEffect(() => {
    setPosts(data)
    setOffset(data.length + 1)
    setHasMore(data.length >= 9)
  }, [data])

  const loadMore = React.useCallback(async () => {
    if (loading || !hasMore) return
    setLoading(true)
    try {
      const query = new URLSearchParams({
        author: author,
        limit: "9",
        offset: offset.toString(),
      })
      if (searchQuery) query.set("search", searchQuery)

      const res = await fetch(
        `/api/resources/blogs/getAuthorData?${query.toString()}`
      )
      const resData = await res.json()

      if (resData.posts && resData.posts.length > 0) {
        const newPosts = resData.posts.map((post: any) => ({
          categoryName: post.category_names,
          categorySlug: post.category_slugs,
          title: post.title,
          image: post.featured_image_url || post.image,
          imageAlt: post.image_alt,
          slug: post.slug,
          date: post.created_at || post.updated_at,
        }))

        setPosts((prev: any) => [...prev, ...newPosts])
        setOffset((prev) => prev + resData.posts.length)

        if (resData.posts.length < 9) {
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
  }, [loading, hasMore, author, offset, searchQuery])

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

export default AuthorBlogCard
