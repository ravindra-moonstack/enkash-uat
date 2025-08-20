import Image, { StaticImageData } from "next/image"
import styles from "./policies-card.module.scss"
import { ReactNode } from "react"
import DynamicHeading from "../dynamicHeading/dynamic-heading"
import Link from "next/link"

export interface CardProps {
  titleHtml?: ReactNode
  description: string
  cardImage?: string | StaticImageData
  buttonUrl?: string // 👈 link add
}

const PoliciesCard = ({
  titleHtml,
  description,
  cardImage,
  buttonUrl,
}: CardProps) => {
  const CardContent = (
    <div className={`d-flex flex-column text-start ${styles.card_body}`}>
      <div className="d-flex flex-column flex-grow-1">
        <div>
          {cardImage && (
            <div>
              <Image
                src={cardImage}
                alt="card visual"
                className={styles.card_image}
              />
            </div>
          )}
          <div className={`${styles.voucher_card_title}`}>
            {titleHtml && (
              <DynamicHeading
                content={[
                  {
                    title: String(titleHtml),
                    color: "color-black d-block f-6",
                  },
                ]}
                headingTag="h5"
              />
            )}
            <DynamicHeading
              content={[
                {
                  title: description,
                  color: "color-dark-grey",
                },
              ]}
              headingTag="p"
              className="f-4 mb-0 pt-4"
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

export default PoliciesCard
