import Image, { StaticImageData } from "next/image"

import styles from "./easy-step-card.module.scss"
import Heading from "../heading/heading"

export interface CardProps {
  title?: string // ✅ Optional plain title fallback
  description: string
  ctaColor?: string
  source: string
  cardImage?: string | StaticImageData
  steps: string
}

const EasyStepCard = ({
  title,

  description,
  cardImage,
  steps,
}: CardProps) => {
  return (
    <div className={`d-flex flex-column ${styles.card_body}`}>
      {/* Image */}
      {cardImage && (
        <div className={styles.image_wrapper}>
          <Image
            src={cardImage}
            alt="card visual"
            className={styles.card_image}
          />
        </div>
      )}

      {/* Content */}
      <div className={`my-3 ${styles.steps}`}>
        <div>
          <Heading title={steps} color="equity-blue" size="h3" weight="5" />
        </div>

        {/* Title */}
        {title ? (
          <div className="pt-1 pb-3">
            <Heading title={title} color="black" size="h4" weight="5" />
          </div>
        ) : null}

        {/* Description */}
        <div className={` ${styles.description}`}>
          <Heading
            title={description}
            color="alternate-grey"
            size="h5"
            weight="5"
          />
        </div>
      </div>
    </div>
  )
}

export default EasyStepCard
