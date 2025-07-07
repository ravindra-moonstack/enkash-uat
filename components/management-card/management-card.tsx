import Image from "next/image"
import styles from "./management-card.module.scss"
import { ReactNode } from "react"

export interface CardProps {
  whiteTitle?: string
  titleHtml?: ReactNode
  description: string
  cardImage?: string
  theme?: "light" | "dark"
}

const ManagementCard = ({
  whiteTitle,
  titleHtml,
  description,
  cardImage,
  theme = "light",
}: CardProps) => {
  return (
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
            <div className={styles.whiteTitleHtml}>{whiteTitle}</div>
          )
        )}

        <div
          className={` ${styles.description}`}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
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
}

export default ManagementCard
