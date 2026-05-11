import React from "react"
import Image from "next/image"
import styles from "./category_banner.module.scss"
import Link from "next/link"

const CategoryCard = ({ data }: { data: any }) => {
  const categoryNames = data.categoryName?.split(",") || []
  const categorySlugs = data.categorySlug?.split(",") || []

  return (
    <div className={styles.category_card}>
      <div className={styles.category_card_image}>
        <Image
          src={"/uploads/" + data.image}
          alt={data.imageAlt}
          width={600}
          height={350}
          className={styles.category_card_image_img}
        />
      </div>

      <div className={styles.category_card_content}>
        <div className={styles.category_card_content_top}>
          <span className={styles.category_card_category}>
            {categoryNames.map((name: string, index: number) => (
              <React.Fragment key={index}>
                <Link
                  href={`/resources/blog/category/${categorySlugs[index]}`}
                  className={styles.category_card_category_link}
                >
                  {name.trim()}
                </Link>
                {index !== categoryNames.length - 1 && ", "}
              </React.Fragment>
            ))}
          </span>
        </div>

        <h3 className={styles.category_card_title}>
          <a
            href={`/resources/blog/${data.slug}`}
            className={styles.category_card_title_link}
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
        </h3>

        <span className={styles.category_card_date}>
          {new Date(data.date).toLocaleDateString('en-GB')}
        </span>
      </div>
    </div>
  )
}

export default CategoryCard
