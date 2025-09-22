"use client"

import type React from "react"
import Image from "next/image"
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
  theme: "blue" // extend if you have more themes
  url: string
}

interface HeadingContent {
  title: string
  color?: string
}

export interface PartnershipSectionProps {
  backgroundImage?: string
  heading: HeadingContent[]
  description: string
  buttons?: ButtonData[] // can be 0, 1, or 2 buttons
  slideData: SlideData[]
}

const PartnershipSection: React.FC<PartnershipSectionProps> = ({
  backgroundImage = "",
  heading,
  description,
  buttons = [],
  slideData,
}) => {
  return (
    <section className="partnership-section">
      {/* Background Image with Overlay */}
      <div className="background-container">
        <Image
          src={backgroundImage}
          alt="Participants background"
          className="background-image"
          fill
        />
        <div className="background-overlay"></div>
      </div>
      {/* Content Container */}
      <div className="content-container max-w-auto">
        <div className="slider-header">
          <DynamicHeading
            content={heading}
            headingTag="h2"
            className="f-5 mb-4 mb-md-5"
          />
        </div>
        <div className="content-grid">
          {/* Left Content */}
          <div className="left-content">
            <p className="description-text">{description}</p>

            <div className="button-group">
              {buttons.map((btn, index) => (
                <CommanButton
                  key={index}
                  title={btn.title}
                  theme={btn.theme}
                  url={btn.url}
                  width={"100%"}
                />
              ))}
            </div>
          </div>
          <div className="right-slider">
            <PartnershipSlider slides={slideData} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnershipSection
