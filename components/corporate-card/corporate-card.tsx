import Image, { StaticImageData } from "next/image"
import styles from "./corporate-card.module.scss"
import { ReactNode } from "react"
import DynamicHeading from "../dynamicHeading/dynamic-heading"
import Link from "next/link"

export interface CardProps {
  titleHtml?: ReactNode
  description: string
  cardImage?: string | StaticImageData
  buttonUrl?: string
}

const CorporateCard = ({ description, cardImage, buttonUrl }: CardProps) => {
  const CardContent = (
    <div className={`d-flex flex-column text-start ${styles.card_body}`}>
      <div className="d-flex flex-column flex-grow-1">
        <div>
          {cardImage && (
            <div className="text-center">
              <Image
                src={cardImage}
                alt="card visual"
                className={styles.card_image}
              />
            </div>
          )}
          <hr  className={styles.card_line} />
          <div className={`${styles.voucher_card_title}`}>
            <DynamicHeading
              content={[
                {
                  title: description,
                  color: "color-dark-grey",
                },
              ]}
              headingTag="h5"
              className="f-4 mb-0 text-center"
            />
          </div>
        </div>
      </div>
    </div>
  )

  return buttonUrl ? (
    <Link href={buttonUrl} className={styles.card_link}>
      {CardContent}
    </Link>
  ) : (
    CardContent
  )
}

export default CorporateCard
