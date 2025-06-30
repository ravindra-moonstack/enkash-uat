import Image from "next/image"
import styles from "./feature-card.module.scss"
import Heading from "../heading/heading"
import { ReactNode } from "react"

export interface CardProps {
  whiteTitle?: string
  titleHtml?: ReactNode // or string if it's only HTML
  description: string
  cardImage?: string
}

const FeatureCard = ({
  whiteTitle,
  titleHtml,
  description,
  cardImage,
}: CardProps) => {
  return (
    <div
      className={`d-flex flex-column justify-content-between text-start ${styles.card_body}`}
    >
      {cardImage && (
        <div className={styles.image_wrapper}>
          <Image
            src={cardImage}
            alt="card visual"
            className={styles.card_image}
            width={65}
            height={65}
          />
        </div>
      )}
      <div>
        {titleHtml ? (
          <div className={styles.titleHtml}>{titleHtml}</div>
        ) : (
          whiteTitle && (
            <Heading title={whiteTitle} color="black" size="h3" weight="5" />
          )
        )}

        <div
          className={`my-3 ${styles.description}`}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  )
}

export default FeatureCard
