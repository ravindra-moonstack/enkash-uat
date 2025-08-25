import React from "react"
import styles from "./rewards-carousel.module.scss"
import Marquee from "react-fast-marquee"
import CardProduct from "../card-product/card-product"
import { StaticImageData } from "next/image"

export type RewardsCarouselDataProp = {
  title: string
  title2?: string
  description: string
  image: string | StaticImageData
  link?: string
}

export type RewardsCarouselProp = {
  title?: string
  title2?: string
  subtitle?: string
  data?: Array<RewardsCarouselDataProp>
}

const RewardsCarousel = ({
  data = [],
}: RewardsCarouselProp): React.JSX.Element => {
  return (
    <div>
      <div className={styles.container}>
        <Marquee speed={70} pauseOnClick={true} pauseOnHover={true}>
          <div className="d-flex align-items-stretch py-2">
            {data.map((card, index) => (
              <div key={index} className="d-flex ms-3">
                <CardProduct
                  titleHtml={card.title}
                  description={card.description}
                  cardImage={card.image}
                  linkUrl={card.link}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default RewardsCarousel
