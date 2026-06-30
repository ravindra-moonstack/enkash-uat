"use client"
import React, { useEffect, useRef, useState } from "react"
import Image, { StaticImageData } from "next/image"

import styles from "./steps-section.module.scss"
import CommonButton from "../buttons"
import DynamicHeading from "../dynamic-heading"
import StepCard from "../step-card"

import { ButtonTheme } from "../buttons"
import { useSalesUrl } from "@/src/utils/salesUrl"

interface StepItem {
  icon: string | StaticImageData
  title: string
  description?: string
}

interface StepsSectionProps {
  heading: { text: string; colorClass: string }[]
  subHeading?: { text: string; colorClass: string }[]
  steps: StepItem[]
  button: {
    title: string
    theme?: ButtonTheme
  }
  image: {
    src: string | StaticImageData
    alt: string
  }
  backgroundClass?: string
}

const StepsSection = ({
  heading,
  subHeading,
  steps,
  button,
  image,
  backgroundClass = "bg-white",
}: StepsSectionProps): React.JSX.Element => {
  const salesUrl = useSalesUrl()
  const buttonUrl = salesUrl

  // scroll logic
  const stepsRef = useRef<HTMLDivElement>(null)
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    if (stepsRef.current) {
      const height = stepsRef.current.scrollHeight
      if (height > 400) {
        setShowScroll(true)
      }
    }
  }, [steps])

  return (
    <div className={`${styles.action_row} ${backgroundClass}`}>
      <div className="max-w-auto">
        <div className={`${styles.title} text-center pb-3`}>
          <DynamicHeading
            content={heading.map((h) => ({
              title: h.text,
              color: h.colorClass,
            }))}
            headingTag="h2"
            className="f-6"
          />
        </div>
        {subHeading && (
          <div className={` text-center pb-md-5 pb-3`}>
            <DynamicHeading
              content={subHeading.map((h) => ({
                title: h.text,
                color: h.colorClass,
              }))}
              headingTag="p"
              className="f-5"
            />
          </div>
        )}
        <div
          className={`row ${backgroundClass} align-items-center ${styles.section}`}
        >
          {/* Steps */}
          <div className="col-md-6 col-12 pe-md-5">
            <div
              ref={stepsRef}
              className={`${showScroll ? "overflow-auto scrollbar-thin" : ""}`}
              style={{
                maxHeight: "550px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                direction: showScroll ? "rtl" : "ltr",
              }}
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
              <CommonButton
                title={button.title}
                theme={button.theme}
                url={buttonUrl}
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
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepsSection
