import React, { ReactNode } from "react"
import Image, { StaticImageData } from "next/image"

import styles from "./voucher-card.module.scss"
import DynamicHeading from "../dynamic-heading"
import { CommanButton } from ".."

export interface CardProps {
  titleHtml?: ReactNode
  description?: string
  cardImage?: string | StaticImageData
  buttonUrl?: string
  discount?: number | string
  brandName?: string
  priority?: boolean
}

const VoucherCard = ({
  titleHtml,
  description,
  cardImage,
  discount,
  buttonUrl,
  priority = false,
}: CardProps): React.JSX.Element => {
  //

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
                priority={priority}
                fetchPriority={priority ? "high" : "auto"}
                sizes="(max-width: 768px) 100vw, 300px"
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
            <CommanButton
              title={"Buy Now"}
              url={buttonUrl}
              arrow
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
