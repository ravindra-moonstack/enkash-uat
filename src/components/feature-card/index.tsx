import React, { ReactNode } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import styles from "./feature-card.module.scss"
import DynamicHeading from "../dynamic-heading"

export interface CardProps {
  whiteTitle?: string
  url?: string
  titleHtml?: ReactNode
  title2?: string
  description?: string
  cardImage?: string | StaticImageData | undefined
  padding?: string
  hoverClass?: string
  iconWidth?: number
}

const FeatureCard = ({
  whiteTitle,
  titleHtml,
  url,
  description,
  cardImage,
  title2 = "",
  padding = "40px 29px",
  hoverClass = "",
  iconWidth = 65,
}: CardProps): React.JSX.Element => {
  //

  const CardContent = (
    <div
      className={`d-flex flex-column text-start ${styles.card_body} ${hoverClass}`}
      style={{ padding: padding }}
    >
      <div className="d-flex flex-column flex-grow-1">
        <div className={styles.card_top}>
          {cardImage && (
            <div className={`pb-2 ${styles.image_wrapper}`}>
              <Image
                src={cardImage}
                alt="card visual"
                className={styles.card_image}
                width={iconWidth}
                height={iconWidth}
                loading="lazy"
                quality={70}
                sizes={`${iconWidth}px`}
              />
            </div>
          )}
          <div className={styles.title_wrapper}>
            {titleHtml ? (
              <DynamicHeading
                content={[
                  {
                    title: String(titleHtml),
                    color: "color-black d-block",
                  },
                  {
                    title: title2,
                    color: "color-black",
                  },
                ]}
                headingTag="h5"
                className="f-5"
              />
            ) : (
              whiteTitle && (
                <DynamicHeading
                  content={[
                    {
                      title: whiteTitle,
                      color: "color-black",
                    },
                  ]}
                  headingTag="h5"
                  className="f-5"
                />
              )
            )}
          </div>
        </div>

        <DynamicHeading
          content={[
            {
              title: description,
              color: "color-black",
            },
          ]}
          headingTag="p"
          className="f-4 mt-3"
        />
      </div>
    </div>
  )

  return url ? (
    <Link href={url} className="text-decoration-none d-block h-100">
      {CardContent}
    </Link>
  ) : (
    CardContent
  )
}

export default FeatureCard
