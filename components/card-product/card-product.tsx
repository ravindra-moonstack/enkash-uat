import Image, { StaticImageData } from "next/image"
import styles from "./card-product.module.scss"
import Heading from "../heading/heading"
import { ReactNode } from "react"
import DynamicHeading from "../dynamicHeading/dynamic-heading"

export interface CardProps {
  whiteTitle?: string
  titleHtml?: ReactNode
  description: string
  cardImage?: string | StaticImageData
  linkUrl?: string // ✅
}

const CardProduct = ({
  whiteTitle,
  titleHtml,
  description,
  cardImage,
  linkUrl,
}: CardProps) => {
  const cardContent = (
    <>
      <div>
        {titleHtml ? (
          <div className={styles.titleHtml}>
            <DynamicHeading
              content={[
                {
                  title: String(titleHtml),
                  color: "color-white",
                },
              ]}
              headingTag="h4"
              className="f-5"
            />
          </div>
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
              className="f-5"
            />
          )
        )}

        <div>
          <p className="mb-0 mt-2">{description}</p>
        </div>
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
    </>
  )

  return (
    <div
      className={`d-flex flex-column justify-content-between ${styles.card_body}`}
    >
      {linkUrl ? (
        <a href={linkUrl} className={styles.link} rel="noopener noreferrer">
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </div>
  )
}

export default CardProduct
