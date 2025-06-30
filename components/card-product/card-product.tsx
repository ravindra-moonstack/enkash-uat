import Image, { StaticImageData } from "next/image"
import styles from "./card-product.module.scss"
import Heading from "../heading/heading"
import { ReactNode } from "react"

export interface CardProps {
  whiteTitle?: string
  titleHtml?: ReactNode // or string if it's only HTML
  description: string
  cardImage?: string | StaticImageData
}

const CardProduct = ({
  whiteTitle,
  titleHtml,
  description,
  cardImage,
}: CardProps) => {
  return (
    <div
      className={`d-flex flex-column justify-content-between ${styles.card_body}`}
    >
      <div>
        {titleHtml ? (
          <div className={styles.titleHtml}>{titleHtml}</div>
        ) : (
          whiteTitle && (
            <Heading title={whiteTitle} color="black" size="h3" weight="6" />
          )
        )}

        <div
          className={`my-3 ${styles.description}`}
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

export default CardProduct
