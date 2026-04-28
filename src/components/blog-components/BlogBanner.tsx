import React from "react"
import styles from "./singleBlog.module.scss"
import Link from "next/link"
import Image from "next/image"

const BlogBanner = ({ bannerData }: { bannerData: any }) => {
  const data = bannerData[0]
  console.log("data", data);

  return (
    <section className={`${styles.blogBanner}`}>
      <div className={`max-w-auto`}>
        <div className={`row align-items-center`}>
          <div className={`col-lg-6 col-12`}>
            <div className={`${styles.blogBannerContent}`}>
              <h1 className={`${styles.title}`}>{data.title}</h1>

              <div className={styles.meta}>
                <span className={styles.author}>By {data.first_name ? `${data.first_name} ${data.last_name || ""}` : data.author}</span>

                <span className={styles.readTime}>
                  16 Min Read
                </span>
                {data.updated_at && (
                  <span className={styles.date}>
                    Updated on: {new Date(data.updated_at).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          </div>

          {data.show_featured_image == "right" && (
            <div className={`col-lg-6 col-12`}>
              <div className={styles.right_box_image}>
                <div className={styles.image_box}>
                  <Link href={`/resources/blog/${data.slug}`}>
                    <Image
                      src={"/uploads/" + data.image}
                      alt={data.imageAlt || data.title}
                      width={600}
                      height={350}
                    />
                  </Link>
                  <div className={styles.overlay}>
                    <span className={styles.category}>{data.category}</span>
                    {/* <span className={styles.date}>
                      {new Date(data.updated_at).toLocaleDateString()}
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BlogBanner
