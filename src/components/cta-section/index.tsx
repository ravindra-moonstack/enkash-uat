"use client"
import React, { memo } from "react"
import { StaticImageData } from "next/image"
import { usePathname } from "next/navigation"

import styles from "./CTASection.module.scss"
import { DynamicHeading, RectangleButton } from ".."

interface CTASectionProps {
  title: string
  buttonText: string
  buttonUrl?: string
  actionImage?: string | StaticImageData
  hoverImage?: string | StaticImageData
  background?: string
  className?: string
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  buttonText,
  buttonUrl = "/sales", // default path
  actionImage,
  hoverImage,
  background = "linear-gradient(180deg, #1c5af4 0%, #10348e 100%)",
  className = "",
}) => {
  const pathname = usePathname()

  // Extract the last slug
  const lastSlug = pathname?.split("/").filter(Boolean).pop() || "default"

  // Build final URL: /sales?source=last-slug
  const finalUrl = `${buttonUrl}?source=${lastSlug}`

  return (
    <div
      className={`${styles.blueBackGroundSection} bg_white_index ${className}`}
      style={{ background }}
    >
      <div className="d-flex justify-content-center flex-column gap-32 align-items-center max-w-auto">
        <div className="d-flex justify-content-center align-items-center text-center">
          <DynamicHeading
            content={[{ title, color: "color-white" }]}
            headingTag="h3"
            className="f-5 pb-3 pb-md-0"
          />
        </div>
        <div className={styles.get_started_button}>
          <RectangleButton
            title={buttonText}
            theme="outline-blue"
            actionImage={actionImage}
            hoverImage={hoverImage}
            url={finalUrl}
          />
        </div>
      </div>
    </div>
  )
}

export default memo(CTASection)
