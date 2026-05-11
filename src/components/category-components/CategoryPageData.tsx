import React from "react"
import CategoryBanner from "./CategoryBanner"
import CategoryBlogCard from "./CategoryBlogCard"
import RecentBlog from "./RecentBlog"

// Trigger recompile
const CategoryPageData = async ({ slug }: { slug: string }) => {
  const getData = async () => {
    const data = await fetch(
      `http://localhost:3000/api/blogs/categoryPageData?category=${slug}`
    )
    return data.json()
  }
  const data = await getData()
  const BannerData = [
    {
      categoryName: slug.replace("-", " "),
      title: data.posts[0].title,
      image: data.posts[0].featured_image_url || data.posts[0].image,
      slug: data.posts[0].slug,
    },
  ]
  const loadAllPosts = []
  for (let i = 1; i < data.posts.length; i++) {
    loadAllPosts.push({
      categoryName: data.posts[i].category_names,
      categorySlug: data.posts[i].category_slugs,
      title: data.posts[i].title,
      image: data.posts[i].featured_image_url || data.posts[i].image,
      imageAlt: data.posts[i].image_alt,
      slug: data.posts[i].slug,
      date: data.posts[i].updated_at,
    })
  }
  return (
    <>
      <CategoryBanner data={BannerData} />
      <CategoryBlogCard data={loadAllPosts} slug={slug} />
      <RecentBlog />
    </>
  )
}

export default CategoryPageData
