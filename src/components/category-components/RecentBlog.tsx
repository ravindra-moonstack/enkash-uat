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
const RecentBlog = async ({ posts }: { posts?: any[] } = {}) => {
  const postsList = posts || (await getRecentBlogs()).posts || []

  const postData = []
  const limit = Math.min(postsList.length, 4)
  for (let i = 0; i < limit; i++) {
    const post = postsList[i]
    postData.push({
      categoryName: post.category_names || post.categoryName,
      categorySlug: post.category_slugs || post.categorySlug,
      title: post.title,
      image: post.featured_image_url || post.image,
      imageAlt: post.image_alt || post.imageAlt,
      slug: post.slug,
      date: post.created_at || post.date,
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
