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
          <h3>Related Resources</h3>
        </div>

        <div className={styles.relatedBlogsList}>
          {relatedBlogsData.slice(0, 3).map((blog: any, index: number) => {
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

                <div className={styles.relatedBlogCardBody}>
                  <div className={styles.relatedBlogContentText}>
                    <div className={styles.relatedBlogCategories}>
                      {slugs.map((slug: string, i: number) => {
                        const trimmedSlug = slug.trim()
                        const trimmedName = (names[i] || slug).trim()
                        return (
                          <React.Fragment key={i}>
                            <Link
                              href={`/resources/blog/category/${trimmedSlug}`}
                              className={styles.relatedBlogCategory}
                            >
                              {trimmedName}
                            </Link>
                            {i < slugs.length - 1 && (
                              <span className={styles.categorySeparator}>
                                |
                              </span>
                            )}
                          </React.Fragment>
                        )
                      })}
                    </div>

                    <h4 className={styles.relatedBlogTitle}>
                      <Link
                        href={`/resources/blog/${blog.slug}`}
                        dangerouslySetInnerHTML={{ __html: blog.title }}
                      />
                    </h4>
                  </div>

                  <div className={styles.relatedBlogFooter}>
                    <Link
                      href={`/resources/blog/${blog.slug}`}
                      className={styles.readMoreBtn}
                    >
                      Read more &rsaquo;
                    </Link>
                  </div>
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
