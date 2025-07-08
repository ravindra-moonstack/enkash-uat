import Image from "next/image"
import styles from "./feature-card.module.scss"
import Heading from "../heading/heading"
import { ReactNode } from "react"

export interface CardProps {
  whiteTitle?: string
  titleHtml?: ReactNode
  title2?: string
  description: string
  cardImage?: string
}

const FeatureCard = ({
  whiteTitle,
  titleHtml,
  description,
  cardImage,
  title2,
}: CardProps) => {
  return (
    <div className={`d-flex flex-column text-start ${styles.card_body} `}>
      <div className="d-flex flex-column flex-grow-1">
        <div className={styles.card_top}>
          {cardImage && (
            <div className={`pb-2 ${styles.image_wrapper} `}>
              <Image
                src={cardImage}
                alt="card visual"
                className={styles.card_image}
                width={65}
                height={65}
              />
            </div>
          )}
          <div className={styles.title_wrapper}>
            {titleHtml ? (
              <div className={styles.titleHtml}>{titleHtml}</div>
            ) : (
              whiteTitle && (
                <Heading
                  title={whiteTitle}
                  color="black"
                  size="h3"
                  weight="5"
                />
              )
            )}
          </div>
          {title2 && <div className={styles.titleHtml}>{title2}</div>}
        </div>

        <div
          className={`${styles.description} mt-3`} // add space above description if needed
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  )
}

export default FeatureCard
