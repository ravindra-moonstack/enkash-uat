import React from "react"
import CategoryBanner from "@/components/category-components/CategoryBanner"
import CategoryBlogCard from "@/components/category-components/CategoryBlogCard"
import RecentBlog from "@/components/category-components/RecentBlog"
import BlogNavWrapper from "@/src/components/blog-components/BlogNavWrapper"
import styles from "./style.module.scss"

import { getBlogCategories, getCategoryData } from "@/src/services/resource-service"

// Trigger recompile
const Category = async ({
    params,
    searchParams
}: {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ q?: string }>
}) => {
    const { slug } = await params
    const { q: searchQuery } = await searchParams
    const data = await getCategoryData(slug, searchQuery)
    const navData = await getBlogCategories()

    if (!data?.posts || data.posts.length === 0) {
        return (
            <div className="blog_page">
                <div className="container">
                    <p style={{ padding: "100px 0", textAlign: "center" }}>
                        No posts found in this category.
                    </p>
                </div>
            </div>
        )
    }

    const BannerData = [
        {
            categoryName: slug?.replace("-", " "),
            title: data.posts[0]?.title,
            image: data.posts[0]?.featured_image_url || data.posts[0]?.image,
            slug: data.posts[0]?.slug,
        },
    ]
    const loadAllPosts = []
    for (let i = 1; i < data?.posts.length; i++) {
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
        <div className={styles.category_page}>
            <div className="max-w-auto">
                {navData && (
                    <div className={styles.blog_nav_wrapper}>
                        <BlogNavWrapper
                            navData={navData}
                            activeCategory={slug}
                        />
                    </div>
                )}
            </div>
            <CategoryBanner data={BannerData} />
            <CategoryBlogCard data={loadAllPosts} slug={slug} searchQuery={searchQuery} />
            <RecentBlog />
        </div>
    )
}

export default Category