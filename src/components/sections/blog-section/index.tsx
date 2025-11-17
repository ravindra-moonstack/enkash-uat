import React, { JSX } from "react"

import styles from "./blog-section.module.scss"
import DynamicHeading from "../../dynamic-heading"
import { StaticImageData } from "next/image"
import BlogCard from "../../blog-card"

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

interface BlogSectionProps {
  heading: HeadingPart[]
  headingTag?: keyof JSX.IntrinsicElements
  cards: CardData[]
  className?: string
  useOptionalProps?: boolean
}

const BlogSection: React.FC<BlogSectionProps> = ({
  heading,
  headingTag = "h2",
  cards,
  className = "",
}) => {
  return (
    <div className={`${styles.other_products} ${className}`}>
      <div className="max-w-auto">
        <div className={`${styles.title} text-center pb-4 pb-md-4`}>
          <DynamicHeading
            content={heading}
            headingTag={headingTag}
            className="f-6"
          />
        </div>

        <div className="row g-3 pb-4">
          {cards.map((card, index) => (
            <div className="col-12 col-md-4" key={index}>
              <BlogCard
                titleHtml={card.whiteTitle}
                description={card.description}
                cardImage={card.cardImage}
                discount={card.discount}
                buttonUrl={card.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
