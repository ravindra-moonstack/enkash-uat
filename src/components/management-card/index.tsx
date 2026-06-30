import Link from "next/link"
import React, { ReactNode } from "react"
import Image, { StaticImageData } from "next/image"

import styles from "./management-card.module.scss"
import DynamicHeading from "../dynamic-heading"

export interface CardProps {
  whiteTitle?: string
  titleHtml?: ReactNode
  description?: string
  subDescription?: string
  cardImage?: string | StaticImageData
  theme?: "light" | "dark" | "black"
  linkUrl?: string
  headingTag?: keyof React.JSX.IntrinsicElements
  headingClassName?: string
}

const ManagementCard = ({
  whiteTitle,
  titleHtml,
  description,
  subDescription,
  cardImage,
  theme = "light",
  linkUrl,
  headingTag,
  headingClassName,
}: CardProps): React.JSX.Element => {
  const cardContent = (
    <div
      className={`d-flex flex-column justify-content-between ${
        styles.card_body
      } ${theme === "dark" ? styles.dark : theme === "black" ? styles.black : styles.light}`}
    >
      <div>
        {titleHtml ? (
          <DynamicHeading
            content={[
              {
                title: String(titleHtml),
                color: styles.titleHtml,
              },
            ]}
            headingTag={headingTag ? headingTag : "h4"}
            className={`${headingClassName} f-5`}
          />
        ) : (
          whiteTitle && (
            <DynamicHeading
              content={[
                {
                  title: String(whiteTitle),
                  color: styles.whiteTitleHtml,
                },
              ]}
              headingTag={headingTag ? headingTag : "h3"}
              className={`${headingClassName} f-5 min-height-80 heading-h4`}
            />
          )
        )}

        <div>
          <DynamicHeading
            content={[
              {
                title: String(description),
                color: styles.description,
              },
            ]}
            headingTag="p"
          />
        </div>

        {subDescription && (
          <div className="mt-2">
            <DynamicHeading
              content={[
                {
                  title: String(subDescription),
                  color: styles.subDescription,
                },
              ]}
              headingTag="p"
              className="mt-2"
            />
          </div>
        )}
      </div>

      {cardImage && (
        <div className={styles.image_wrapper}>
          <Image
            src={cardImage}
            alt="Management card illustration"
            className={styles.card_image}
            width={400}
            height={250}
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={75}
          />
        </div>
      )}
    </div>
  )

  return linkUrl ? (
    <Link href={linkUrl} className={styles.card_link}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  )
}

export default ManagementCard
export type CardData = CardProps
