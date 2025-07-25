import Image from "next/image"
import styles from "./feature-card.module.scss"
import { ReactNode } from "react"
import DynamicHeading from "../dynamicHeading/dynamic-heading"

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
              <DynamicHeading
                content={[
                  {
                    title: String(titleHtml),
                    color: "color-black d-block",
                  },
                  {
                    title: title2,
                    color: "color-black",
                  },
                ]}
                headingTag="h4"
                className="f-5"
              />
            ) : (
              whiteTitle && (
                <DynamicHeading
                  content={[
                    {
                      title: whiteTitle,
                      color: "color-black",
                    },
                  ]}
                  headingTag="h4"
                  className="f-5"
                />
              )
            )}
          </div>
          {/* {title2 && <div className={styles.titleHtml}>{title2}</div>} */}
        </div>
        <DynamicHeading
          content={[
            {
              title: description,
              color: "color-black",
            },
          ]}
          headingTag="p"
          className="f-4 mt-3"
        />
      </div>
    </div>
  )
}

export default FeatureCard
