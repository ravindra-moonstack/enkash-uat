import React, { ReactNode } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import styles from "./blog-card.module.scss"
import DynamicHeading from "../dynamic-heading"
import CommanButton from "../buttons"

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

        <div className="flex-grow-1 justify-between">
          {cardImage && (
            <div className={styles.image_wrapper}>
              <Image
                src={cardImage}
                width={400}
                height={250}
                alt="card visual"
                className={styles.card_image}
                loading="lazy"
                quality={70}
              />
            </div>
          )}

          <div className={styles.voucher_card_title}>
            <DynamicHeading
              content={[
                {
                  title: description,
                  color: "color-main-grey  lh-24",
                },
              ]}
              headingTag="h3"
              className="f-6 mb-0 lh-24"
            />
          </div>
        </div>

        <div className="mt-auto d-flex justify-content-end p-3 pb-0">
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
