import React from "react"
import Image from "next/image"
import styles from "./category_banner.module.scss"
import Link from "next/link"

const CategoryBanner = ({ data }: { data: any }) => {
  return (
    <div className={styles.category_banner_wrapper}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_12}>
            <div className={styles.category_banner}>
              <div className={styles.category_banner_content}>
                <div className={styles.category_name}>
                  {data[0].categoryName}
                </div>
                <h1 className={styles.category_banner_title}>
                  {data[0].title}
                </h1>
                <div className={styles.btn_wrapper}>
                  <Link
                    href={`/resources/blog/${data[0].slug}`}
                    className={styles.btn_primary}
                  >
                    Read Now
                  </Link>
                  <Link href="/contact" className={styles.btn_secondary}>
                    Contact Us &rarr;
                  </Link>
                </div>
              </div>
              <div className={styles.category_banner_image}>
                <Image
                  src={`/uploads/${data[0].image}`}
                  alt={data[0].title}
                  width={600}
                  height={350}
                  className={styles.banner_img}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryBanner
