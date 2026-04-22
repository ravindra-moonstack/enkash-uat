import Image, { StaticImageData } from "next/image"
import PartnershipSlider from "."

import "./PartnershipSection.scss"
import DynamicHeading from "../dynamic-heading"
import CommanButton from "../buttons"

interface SlideData {
  id: number
  icon: string
  title: string
  description: string
}

interface ButtonData {
  title: string
  theme: "blue"
  url: string
}

interface HeadingContent {
  title: string
  color?: string
}

export interface PartnershipSectionProps {
  backgroundImage?: string | StaticImageData
  heading: HeadingContent[]
  description?: string
  buttons?: ButtonData[]
  slideData: SlideData[]
  className?: string
  theme?: "white" | "dark"
  headingInLeft?: boolean
  slidesToShow?: number
}

const PartnershipSection: React.FC<PartnershipSectionProps> = ({
  backgroundImage = "",
  heading,
  description,
  buttons = [],
  slideData,
  className = "",
  theme = "dark",
  headingInLeft = false,
  slidesToShow = 4
}) => {
  const isWhiteTheme = theme === "white"
  const renderHeading = (customClass = "") => (
    <div className={`slider-header ${customClass}`}>
      <DynamicHeading
        content={heading.map((h) => ({
          ...h,
          color: isWhiteTheme ? (h.color ? h.color.replace("color-white", "color-grey-200") : "color-grey-200") : h.color,
        }))}
        headingTag="h2"
        className={`f-5 ${headingInLeft ? "mb-2 mb-md-3" : "mb-4 mb-md-5"}`}
      />
    </div>
  )

  return (
    <section
      className={`partnership-section ${className} ${isWhiteTheme ? "white-theme" : ""
        } ${headingInLeft ? "heading-left" : ""}`}
    >
      <div className="background-container">
        {backgroundImage && (
          <>
            <Image
              src={backgroundImage}
              alt="Participants background"
              className="background-image"
              fill
            />
            <div className="background-overlay"></div>
          </>
        )}
      </div>

      <div className="content-container max-w-auto">
        {!headingInLeft && renderHeading()}

        <div className="content-grid">
          <div className="left-content">
            {headingInLeft && renderHeading()}
            {description && <p className="description-text">{description}</p>}

            <div className="button-group">
              {buttons.map((btn, index) => (
                <CommanButton
                  key={index}
                  title={btn.title}
                  theme={btn.theme}
                  url={btn.url}
                />
              ))}
            </div>
          </div>
          <div className="right-slider">
            <PartnershipSlider slides={slideData} theme={theme} slidesToShow={slidesToShow} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnershipSection
