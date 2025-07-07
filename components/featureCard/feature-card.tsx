import Image from "next/image"
import styles from "./feature-card.module.scss"
import Heading from "../heading/heading"
import { ReactNode } from "react"

export interface CardProps {
  whiteTitle?: string
  titleHtml?: ReactNode
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
    <div className={`d-flex flex-column text-start ${styles.card_body} me-2`}>
      <div className="d-flex flex-column flex-grow-1">
        <div className={styles.card_top}>
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
        </div>

        <div
          className={`${styles.description} mt-3`} // add space above description if needed
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
      {/* Extra space at the bottom */}
      <div className="mt-4" /> {/* You can increase mt-4 to mt-5 etc. */}
    </div>
  )
}

export default FeatureCard
