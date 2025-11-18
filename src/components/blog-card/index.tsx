import React, { ReactNode } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import styles from "./blog-card.module.scss"
import DynamicHeading from "../dynamic-heading"
import { CommanButton } from ".."

export interface CardProps {
  titleHtml?: ReactNode
  description?: string
  cardImage?: string | StaticImageData
  buttonUrl?: string
  discount?: number | string
  brandName?: string
}

const BlogCard = ({
  description,
  cardImage,
  buttonUrl = "#",
}: CardProps): React.JSX.Element => {
  return (
    <Link href={buttonUrl} className={styles.full_card_link}>
      <div className={`d-flex flex-column ${styles.card_body}`}>
        {/* Whole card clickable */}

        <div className="flex-grow-1">
          {cardImage && (
            <div className={styles.image_wrapper}>
              <Image
                src={cardImage}
                width={400}
                height={250}
                alt="card visual"
                className={styles.card_image}
              />
            </div>
          )}

          <div className={styles.voucher_card_title}>
            <DynamicHeading
              content={[
                {
                  title: description,
                  color: "color-main-grey fs-6 lh-20",
                },
              ]}
              headingTag="h3"
              className="f-4 mb-0 lh-20"
            />
          </div>
        </div>

        <div className="mt-auto d-flex justify-content-end p-4 pb-0">
          <CommanButton
            title="Read More"
            url={buttonUrl}
            arrow
            iconSize={9}
            theme="small-blue"
          />
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
