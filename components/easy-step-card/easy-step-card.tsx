import Image, { StaticImageData } from "next/image"
import styles from "./easy-step-card.module.scss"
import DynamicHeading from "../dynamicHeading/dynamic-heading"

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
          <DynamicHeading
            content={[
              {
                title: steps,
                color: "color-equity-blue",
              },
            ]}
            headingTag="h4"
            className="f-5"
          />
        </div>

        {/* Title */}
        {title ? (
          <div className="pt-1 pb-3">
            <DynamicHeading
              content={[
                {
                  title: title,
                  color: "color-black",
                },
              ]}
              headingTag="h5"
              className="f-5"
            />
          </div>
        ) : null}

        {/* Description */}
        <div className={` ${styles.description}`}>
          <DynamicHeading
            content={[
              {
                title: description,
                color: "color-alternate-grey",
              },
            ]}
            headingTag="p"
            className="mb-0"
          />
         
        </div>
      </div>
    </div>
  )
}

export default EasyStepCard
