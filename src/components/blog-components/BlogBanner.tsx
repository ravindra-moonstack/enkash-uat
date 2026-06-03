import React from "react"
import styles from "./singleBlog.module.scss"
import Link from "next/link"
import Image from "next/image"
import { DynamicHeading } from ".."

const BlogBanner = ({ bannerData }: { bannerData: any }) => {
  const data = bannerData[0]

  const showImage = data.show_featured_image === "right"
  const isCentered = !showImage

  return (
    <section className={`${styles.blogBanner}`}>
      <div className={`max-w-auto`}>
        <div
          className={`row align-items-center ${isCentered ? "justify-content-center" : ""}`}
        >
          <div className={isCentered ? `col-12` : `col-lg-6 col-12`}>
            <div
              className={`${styles.blogBannerContent}`}
              style={
                isCentered
                  ? {
                      alignItems: "center",
                      textAlign: "center",
                      padding: "10px 20px",
                      height: "auto",
                      minHeight: "280px",
                      gap: "60px",
                    }
                  : undefined
              }
            >
              {/* <h1 className={`${styles.title}`}>{data.title}</h1> */}
              <DynamicHeading
                content={[{ title: data.title }]}
                className={styles.title}
                headingTag="h1"
                style={
                  isCentered
                    ? {
                        textAlign: "center",
                        width: "100%",
                        margin: "0 auto 30px auto",
                      }
                    : undefined
                }
              />

              <div
                className={styles.meta}
                style={
                  isCentered
                    ? {
                        justifyContent: "space-evenly",
                        width: "100%",
                        maxWidth: "800px",
                        margin: "0 auto",
                      }
                    : undefined
                }
              >
                <span className={styles.author}>
                  By{" "}
                  {data.first_name
                    ? `${data.first_name} ${data.last_name || ""}`
                    : data.author}
                </span>

                <span className={styles.readTime}>16 Min Read</span>
                {data.updated_at && (
                  <span
                    className={styles.date}
                    style={isCentered ? { marginLeft: "0" } : undefined}
                  >
                    Updated on: {new Date(data.updated_at).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          </div>

          {showImage && (
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
