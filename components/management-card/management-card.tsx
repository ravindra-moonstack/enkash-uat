import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import styles from "./management-card.module.scss"
import { ReactNode } from "react"
import DynamicHeading from "../dynamicHeading/dynamic-heading"

export interface CardProps {
  whiteTitle?: string
  titleHtml?: ReactNode
  description: string
 cardImage?: string | StaticImageData
  theme?: "light" | "dark"
  linkUrl?: string // ✅ Add this
}

const ManagementCard = ({
  whiteTitle,
  titleHtml,
  description,
  cardImage,
  theme = "light",
  linkUrl, // ✅ Add this
}: CardProps) => {
  const cardContent = (
    <div
      className={`d-flex flex-column justify-content-between ${
        styles.card_body
      } ${theme === "dark" ? styles.dark : styles.light}`}
    >
      <div>
        {titleHtml ? (
          <div className={styles.titleHtml}>{titleHtml}</div>
        ) : (
          whiteTitle && (
            <DynamicHeading
              content={[
                {
                  title: whiteTitle,
                  color: "color-white",
                },
              ]}
              headingTag="h4"
              className="f-5 min-height-80"
            />
          )
        )}
        <DynamicHeading
          content={[
            {
              title: description,
              color: "color-white",
            },
          ]}
          headingTag="p"
          className="f-4 mt-3 mb-0"
        />
      
      </div>

      {cardImage && (
        <div className={styles.image_wrapper}>
          <Image
            src={cardImage}
            alt="card visual"
            className={styles.card_image}
            width={400}
            height={250}
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
