import React from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./introduction_section.module.scss"
import DynamicHeading from "../../dynamic-heading"

interface TextPart {
  text: string
  color?: string
}

interface CardItem {
  icon: StaticImageData | string
  title: string
}

interface IntroductionSectionProps {
  heading: TextPart[]
  cards: CardItem[]
  backgroundImage?: string
  gradient?: string // optional gradient overlay
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  heading,
  cards,
  backgroundImage,
  gradient = "linear-gradient(90deg, rgba(6, 99, 252, 0) 0%, #0663fc 100%)",
}) => {
  return (
    <div
      className={styles.introduction_section}
      style={{
        background: backgroundImage
          ? `${gradient}, url(${backgroundImage})`
          : undefined,
      }}
    >
      <div className="max-m-auto">
        {/* Heading */}
        <div className="text-center pb-md-4 pb-4">
          <DynamicHeading
            content={heading.map((h) => ({
              title: h.text,
              color: h.color ?? "color-white",
            }))}
            headingTag="h3"
            className="f-5"
          />
        </div>

        {/* Cards */}
        <div className={`d-flex flex-wrap ${styles.section}`}>
          {cards.map((item, index) => (
            <div
              key={index}
              className={`d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <Image
                src={item.icon}
                alt={item.title}
                className={styles.card_image}
              />
              <DynamicHeading
                content={[{ title: item.title, color: "color-main-grey" }]}
                headingTag="p"
                className="mb-0 text-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IntroductionSection
