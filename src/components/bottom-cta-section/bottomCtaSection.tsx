"use client"

import React from "react"
import styles from "./BottomCtaSection.module.scss"
import DynamicHeading from "../dynamic-heading/dynamic-heading"

interface BottomCtaSectionProps {
  headingPart1?: string
  headingPart2?: string
  subText?: string
  buttonText?: string
  buttonHref?: string
}

const BottomCtaSection: React.FC<BottomCtaSectionProps> = ({
  headingPart1 = "Why Use 5 Tools",
  headingPart2 = "When 1 Can Do It All?",
  subText = "Make the Switch Today!",
  buttonText = "Get Started",
  buttonHref = "/sales?source=homepage",
}) => {
  return (
    <div className={`${styles.bottomCtaSection}`}>
      <div className="max-w-auto">
        <div className={`${styles.getStartedBox}`}>
          <div className={`${styles.getStartedBoxInner}`}>
            <div className="row">
              <div className="col-md-12">
                {/* Main heading */}
                <div className={`${styles.headings}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: headingPart1 + " ",
                        color: "color-black f-3 d-block",
                      },
                      {
                        title: headingPart2,
                        color: "color-black",
                      },
                    ]}
                    headingTag="h3"
                    className="f-6 mb-3 "
                  />
                </div>

                {/* Subtext */}
                <div className={`${styles.content}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: subText,
                        color: "color-black",
                      },
                    ]}
                    headingTag="p"
                    className="mb-4 "
                  />
                </div>

                {/* Button */}
                <div className={`${styles.buttons}`}>
                  <a href={buttonHref} className={`${styles.ctaButton}`}>
                    {buttonText}
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3623 4.51073L15.7107 9.53072C15.7918 9.60678 15.8493 9.68918 15.8834 9.77792C15.9168 9.86665 15.9336 9.96173 15.9336 10.0631C15.9336 10.1646 15.9168 10.2596 15.8834 10.3484C15.8493 10.4371 15.7918 10.5195 15.7107 10.5956L10.3623 15.6156C10.2138 15.755 10.0282 15.828 9.80561 15.8346C9.58249 15.8407 9.38989 15.7677 9.22782 15.6156C9.06574 15.4761 8.9812 15.3019 8.97417 15.093C8.96769 14.8836 9.04548 14.7028 9.20756 14.5507L13.1784 10.8237L4.12251 10.8237C3.89291 10.8237 3.70031 10.751 3.54472 10.6055C3.38967 10.4594 3.31215 10.2786 3.31215 10.0631C3.31215 9.84764 3.38967 9.66712 3.54472 9.52159C3.70031 9.37556 3.89291 9.30254 4.12251 9.30254L13.1784 9.30254L9.20756 5.57558C9.05899 5.43613 8.9812 5.25866 8.97417 5.04315C8.96769 4.82765 9.04549 4.65017 9.20756 4.51073C9.35613 4.35861 9.54521 4.28255 9.77481 4.28255C10.0044 4.28255 10.2003 4.35861 10.3623 4.51073Z"
                        fill="#1C5AF4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomCtaSection
