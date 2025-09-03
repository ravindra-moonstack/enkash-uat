"use client"
import React from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./steps-section.module.scss"
import { DynamicHeading, RectangleButton, StepCard } from ".."
import { RectangleButtonTheme } from "../buttons/rectangle-button"
import { useSalesUrl } from "@/src/utils/useSalesUrl"

interface StepItem {
  icon: string
  title: string
  description: string
}

interface StepsSectionProps {
  heading: { text: string; colorClass: string }[]
  steps: StepItem[]
  button: {
    title: string
    theme?: RectangleButtonTheme
    actionImage: string | StaticImageData
    hoverImage: string | StaticImageData
  }
  image: {
    src: string | StaticImageData
    alt: string
  }
  backgroundClass?: string
}

const StepsSection: React.FC<StepsSectionProps> = ({
  heading,
  steps,
  button,
  image,
  backgroundClass = "bg-white",
}) => {
  const salesUrl = useSalesUrl()

  const buttonUrl = salesUrl

  return (
    <div className={`${styles.action_row} ${backgroundClass}`}>
      <div className="max-w-auto">
        <div className={`${styles.title} text-center pb-md-5 pb-3`}>
          <DynamicHeading
            content={heading.map((h) => ({
              title: h.text,
              color: h.colorClass,
            }))}
            headingTag="h2"
            className="f-6"
          />
        </div>

        <div
          className={`row ${backgroundClass} align-items-center ${styles.section}`}
        >
          {/* Steps */}
          <div className="col-md-6 col-12 pe-md-5">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {steps.map((step, i) => (
                <div key={i} style={{ direction: "ltr" }}>
                  <StepCard
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                  />
                </div>
              ))}
            </div>

            {/* Button */}
            <div className={styles.list_button}>
              <RectangleButton
                title={button.title}
                theme={button.theme}
                actionImage={button.actionImage}
                hoverImage={button.hoverImage}
                url={buttonUrl} // ✅ now uses fallback logic
                className="d-flex justify-content-between align-items-center"
              />
            </div>
          </div>

          {/* Image */}
          <div className="col-md-6 col-12">
            <div>
              <Image
                src={image.src}
                alt={image.alt}
                className="w-100 mh-550 object-fit-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepsSection
