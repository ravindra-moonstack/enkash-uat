import Image, { StaticImageData } from "next/image"
import styles from "./support-card.module.scss"
import { ReactNode } from "react"
import DynamicHeading from "../dynamic-heading/dynamic-heading"

export interface CardProps {
  titleHtml?: ReactNode
  title2?: string
  description: string
  cardImage?: string | StaticImageData | undefined
}

const SupportCard = ({
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
                width={40}
                height={40}
              />
            </div>
          )}
          <div className={styles.title_wrapper}>
            <DynamicHeading
              content={[
                {
                  title: String(titleHtml),
                  color: "color-white ",
                },
              ]}
              headingTag="h5"
              className="f-5 "
            />
            <DynamicHeading
              content={[
                {
                  title: title2,
                  color: "color-dark-grey italic",
                },
              ]}
              headingTag="p"
              className="f-7 mb-0"
            />
          </div>
        </div>
        <a href={`mailto:${description}`} className="text-decoration-none">
          <DynamicHeading
            content={[
              {
                title: description,
                color: "color-electric-green italic ",
              },
            ]}
            headingTag="p"
            className="f-4 mb-0 "
          />
        </a>
      </div>
    </div>
  )
}

export default SupportCard
