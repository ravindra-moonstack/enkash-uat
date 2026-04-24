import React from "react"
import styles from "./singleBlog.module.scss"
import Link from "next/link"

const RelatedBlogs = ({ relatedBlogs }: { relatedBlogs: any }) => {
  const relatedBlogsData = relatedBlogs?.[0]?.relatedBlogs || []

  if (!relatedBlogsData.length) return null

  return (
    <section className={styles.relatedBlogs}>
      <div className="max-w-auto">
        <div className={styles.relatedBlogsContent}>
          <h3>Related Blogs</h3>
        </div>

        <div className={styles.relatedBlogsList}>
          {relatedBlogsData.map((blog: any, index: number) => {
            const slugs = blog.category_slugs?.split(",") || []
            const names = blog.category_names?.split(",") || []

            return (
              <div key={index} className={styles.relatedBlog}>
                <div className={styles.relatedBlogImage}>
                  <img
                    src={"/uploads/" + blog.featured_image_url}
                    alt={blog.image_alt || blog.title}
                  />
                </div>

                <div className={styles.relatedBlogContent}>
                  <div className={styles.relatedBlogCategories}>
                    {slugs.map((slug: string, i: number) => (
                      <Link key={i} href={`/resources/blogs/${slug}`}>
                        <span className={styles.relatedBlogCategory}>
                          {names[i] || slug}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <h3>
                    <Link
                      href={`/resources/blog/${blog.slug}`}
                      className={styles.relatedBlogTitle}
                      dangerouslySetInnerHTML={{ __html: blog.title }}
                    />
                  </h3>

                  <p className={styles.relatedBlogDate}>
                    {new Date(blog.created_at).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }).replace(/\//g, "/")}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RelatedBlogs
