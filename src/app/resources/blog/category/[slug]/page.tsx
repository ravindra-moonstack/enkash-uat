import React from "react"
import CategoryBanner from "@/components/category-components/CategoryBanner"
import CategoryBlogCard from "@/components/category-components/CategoryBlogCard"
import RecentBlog from "@/components/category-components/RecentBlog"
import { BlogNav } from "@/src/components"

// Trigger recompile
const Category = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const getData = async () => {
        const res = await fetch(
            `http://localhost:3000/api/resources/blogs/getCategoryData?category=${slug}`,
            { cache: "no-store" }
        )
        return res.json()
    }
    const data = await getData()

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
        <div className="blog_page">
            {/* <BlogNav /> */}
            <CategoryBanner data={BannerData} />
            <CategoryBlogCard data={loadAllPosts} slug={slug} />
            <RecentBlog />
        </div>
    )
}

export default Category
