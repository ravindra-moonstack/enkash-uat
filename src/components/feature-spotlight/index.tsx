import React, { memo } from "react"
import { StaticImageData } from "next/image"
import styles from "./featureSpotlight.module.scss"
import { DynamicHeading, ManagementCard, CommanButton } from ".."

interface HeadingPart {
  title: string
  color: string
}

interface Card {
  whiteTitle: string
  description: string
  cardImage: string | StaticImageData
}

interface FeatureSpotlightProps {
  heading: HeadingPart[]
  description?: {
    text: string
    color?: string
  }
  cardData: Card[]
  showButtons?: boolean
  primaryButtonTitle?: string
  primaryButtonUrl?: string
  secondaryButtonTitle?: string
  secondaryButtonUrl?: string
}

const FeatureSpotlight: React.FC<FeatureSpotlightProps> = ({
  heading,
  description,
  cardData,
  showButtons = false,
  primaryButtonTitle = "",
  primaryButtonUrl = "#",
  secondaryButtonTitle = "",
  secondaryButtonUrl = "#",
}) => {
  return (

    <div className={`${styles.section} `}>
      <div className="max-w-auto">
        <div className={` text-center pb-4 pb-md-5`}>
          <DynamicHeading content={heading} headingTag="h2" className="f-6" />
          {description && (
            <DynamicHeading
              content={[{ title: description.text, color: description.color || "color-black" }]}
              headingTag="p"
              className="mb-0"
            />
          )}
        </div>

        <div className="row g-3">
          {cardData.map((card, index) => (
            <div className="col-12 col-md-4" key={index}>
              <ManagementCard
                whiteTitle={card.whiteTitle}
                description={card.description}
                cardImage={card.cardImage}
                theme="dark"
              />
            </div>
          ))}
        </div>

        {showButtons && (
          <div className="mt-5 d-flex flex-column flex-md-row gap-3">
            {primaryButtonTitle && (
              <CommanButton
                title={primaryButtonTitle}
                theme="blue"
                url={primaryButtonUrl}
                width="auto"
              />
            )}
            {secondaryButtonTitle && (
              <CommanButton
                title={secondaryButtonTitle}
                theme="outline-blue"
                url={secondaryButtonUrl}
                width="auto"
              />
            )}
          </div>
        )}
      </div>
    </div>

  )
}

export default memo(FeatureSpotlight)
