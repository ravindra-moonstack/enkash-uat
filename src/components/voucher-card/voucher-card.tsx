import Image, { StaticImageData } from "next/image"
import styles from "./voucher-card.module.scss"
import { ReactNode } from "react"
import DynamicHeading from "../dynamic-heading"
import RectangleButton from "../buttons/rectangle-button"
import { whiteArrow } from "."

export interface CardProps {
  titleHtml?: ReactNode
  description: string
  cardImage?: string | StaticImageData
  buttonUrl?: string
  discount?: number | string
  brandName?: string
}

const VoucherCard = ({
  titleHtml,
  description,
  cardImage,
  discount,
  buttonUrl,
}: CardProps) => {
  return (
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
                    color: "color-black d-block subHeading f-6",
                  },
                ]}
                headingTag="h6"
              />
            )}
            <DynamicHeading
              content={[
                {
                  title: description,
                  color: "color-black subHeading",
                },
              ]}
              headingTag="h6"
              className="f-4 mb-0"
            />
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="row">
          <div className="col-6">
            <DynamicHeading
              content={[
                {
                  title: discount,
                  color: "color-electric-green",
                },
              ]}
              headingTag="h5"
              className="f-6"
            />
            <DynamicHeading
              content={[
                {
                  title: "Discount",
                  color: "color-dark-grey",
                },
              ]}
              headingTag="p"
              className="f-4 pb-0"
            />
          </div>
          <div className="col-6 text-end">
            <RectangleButton
              title={"Buy Now"}
              url={buttonUrl}
              actionImage={whiteArrow}
              hoverImage={whiteArrow}
              iconSize={9}
              theme="small-blue"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoucherCard
