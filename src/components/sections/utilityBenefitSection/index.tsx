import React from "react"
import styles from "./core-benifits-section.module.scss"
import DynamicHeading from "../../dynamic-heading"

type CardItem = {
  desc: string
  title: string
}

type UtilityBeefitSectionProps = {
  sectionTitle: string
  cards: CardItem[]
  className?: string
}

const UtilityBeefitSection: React.FC<UtilityBeefitSectionProps> = ({
  sectionTitle,
  cards,
  className,
}) => {
  return (
    <div className={` ${styles.introduction_section} ${className || ""}`}>
      <div className=" max-w-auto">
        <div className="d-flex justify-content-center flex-column gap-3">
          <div className="d-inline justify-content-center align-items-center text-center">
            <DynamicHeading
              content={[{ title: sectionTitle, color: "color-alternate-grey" }]}
              headingTag="h3"
              className="f-5"
            />
          </div>

          <div className={`d-flex ${styles.section}`}>
            {cards.map((card, index) => (
              <div
                key={index}
                className={`d-flex flex-column justify-content-center align-items-center ${styles.card}`}
              >
                <div className={`d-flex ${styles.outerCard}`}>
                  <DynamicHeading
                    content={[{ title: card.title, color: "color-white" }]}
                    headingTag="h3"
                    className="mb-0"
                  />
                </div>
                <div
                  className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
                >
                  <DynamicHeading
                    content={[{ title: card.desc, color: "color-white" }]}
                    headingTag="p"
                    className="mb-0 text-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UtilityBeefitSection
