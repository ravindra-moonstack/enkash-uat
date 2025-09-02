import Image, { StaticImageData } from "next/image"
import styles from "./location-card.module.scss"
import { ReactNode } from "react"
import DynamicHeading from "../dynamic-heading/dynamic-heading"

export interface CardProps {
  titleHtml?: ReactNode
  title2?: string
  description: string
  cardImage?: string | StaticImageData | undefined
}

const LocationCard = ({
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
            <DynamicHeading
              content={[
                {
                  title: String(titleHtml),
                  color: "color-white subHeading",
                },
                {
                  title: title2,
                  color: "color-dark-grey italic  subHeading",
                },
              ]}
              headingTag="p"
              className="f-5 min-height-80 mb-0"
            />
          </div>
        </div>
        <DynamicHeading
          content={[
            {
              title: description,
              color: "color-dark-grey",
            },
          ]}
          headingTag="p"
          className="f-4 mb-0"
        />
      </div>
    </div>
  )
}

export default LocationCard
