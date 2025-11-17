import React, { ReactNode } from "react"
import Image, { StaticImageData } from "next/image"
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
  buttonUrl,
}: CardProps): React.JSX.Element => {
  return (
    <div className={`d-flex flex-column ${styles.card_body}`}>
      {/* Content wrapper (pushes button to bottom) */}
      <div className="flex-grow-1">
        {/* Image */}
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

        {/* Title / Description */}
        <div className={styles.voucher_card_title}>
          <DynamicHeading
            content={[
              {
                title: description,
                color: "color-main-grey subHeading",
              },
            ]}
            headingTag="p"
            className="f-4 mb-0"
          />
        </div>
      </div>

      {/* CTA Button at bottom */}
      <div className="mt-auto d-flex justify-content-end pt-4">
        <CommanButton
          title="Read More"
          url={buttonUrl}
          arrow
          iconSize={9}
          theme="small-blue"
        />
      </div>
    </div>
  )
}

export default BlogCard
