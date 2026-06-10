import styles from "./category_banner.module.scss"
import CategoryCard from "./CategoryCard"

const getRecentBlogs = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000"
  const res = await fetch(
    `${baseUrl}/api/resources/blogs/getRecentBlogs?limit=4&offset=0`,
    { cache: "no-store" }
  )
  if (!res.ok) return { posts: [] }
  const data = await res.json()
  return data
}
const RecentBlog = async () => {
  const recentBlogs = await getRecentBlogs()

  const postData = []
  for (let i = 0; i < recentBlogs.posts.length; i++) {
    postData.push({
      categoryName: recentBlogs.posts[i].category_names,
      categorySlug: recentBlogs.posts[i].category_slugs,
      title: recentBlogs.posts[i].title,
      image:
        recentBlogs.posts[i].featured_image_url || recentBlogs.posts[i].image,
      imageAlt: recentBlogs.posts[i].image_alt,
      slug: recentBlogs.posts[i].slug,
      date: recentBlogs.posts[i].created_at,
    })
  }

  return (
    <section className={styles.recent_blog_section}>
      <div className="max-w-auto">
        <div className={styles.row}>
          <div className={styles.col_12}>
            <div className={styles.recent_blog_content}>
              <h2 className={styles.recent_blog_title}>Recent Blogs</h2>
              <div className={styles.recent_blog_list}>
                {postData.map((post: any, index: number) => (
                  <div className={styles.recent_blog_item} key={index}>
                    <CategoryCard data={post} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentBlog
