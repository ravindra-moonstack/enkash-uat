import React from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./style.module.scss"
import DynamicHeading from "../../dynamic-heading"

type CardItem = {
  icon: string | StaticImageData
  title: string
}

type CoreBenefitsSectionProps = {
  sectionTitle: string
  cards: CardItem[]
}

const CoreBenefitsSection: React.FC<CoreBenefitsSectionProps> = ({
  sectionTitle,
  cards,
}) => {
  return (
    <div className={`row ${styles.introduction_section}`}>
      <div className="d-flex justify-content-center flex-column gap-32 max-w-auto">
        {/* Section Title */}
        <div className="d-inline justify-content-center align-items-center text-center">
          <DynamicHeading
            content={[{ title: sectionTitle, color: "color-white" }]}
            headingTag="h3"
            className="f-5"
          />
        </div>

        {/* Cards */}
        <div className={`d-flex ${styles.section}`}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className={`d-flex ${styles.outerCard}`}>
                <Image src={card.icon} alt={card.title} />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                <DynamicHeading
                  content={[{ title: card.title, color: "color-white" }]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoreBenefitsSection
