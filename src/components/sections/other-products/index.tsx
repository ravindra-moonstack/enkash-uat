import React, { JSX } from "react"

import styles from "./other-products.module.scss"
import DynamicHeading from "../../dynamic-heading"
import ManagementCard from "../../management-card"
import { StaticImageData } from "next/image"
import SuspenseLoading from "../../loading"

interface HeadingPart {
  title: string
  color: string
}

interface CardData {
  whiteTitle?: string
  description?: string
  cardImage?: string | StaticImageData
  link?: string
  theme?: "dark" | "light" | "black"
  [key: string]: any
}

interface OtherProductsProps {
  heading: HeadingPart[]
  headingTag?: keyof JSX.IntrinsicElements
  cards: CardData[]
  className?: string
  useOptionalProps?: boolean
}

const OtherProductsContent: React.FC<OtherProductsProps> = ({
  heading,
  headingTag = "h2",
  cards,
  className = "",
  useOptionalProps = false,
}) => {
  return (
    <div className={`${styles.other_products} ${className}`}>
      <div className="max-w-auto">
        <div className={`${styles.title} text-center pb-4 pb-md-5`}>
          <DynamicHeading
            content={heading}
            headingTag={headingTag}
            className="f-6"
          />
        </div>

        <div className="row g-3 pb-4">
          {cards.map((card, index) => (
            <div className="col-12 col-md-4" key={index}>
              {useOptionalProps ? (
                <ManagementCard
                  whiteTitle={card.whiteTitle}
                  description={card.description}
                  cardImage={card.cardImage}
                  theme={card.theme ?? "dark"}
                  linkUrl={card.link}
                />
              ) : (
                <ManagementCard {...card} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const OtherProducts = (props: OtherProductsProps) => {
  return (
    <SuspenseLoading>
      <OtherProductsContent {...props} />
    </SuspenseLoading>
  )
}

export default OtherProducts
