"use client"

import type React from "react"
import DynamicHeading from "../dynamic-heading"
import styles from "./style.module.scss"
import CustomBreadcrumb from "../breadcrumb"
import CommanButton, { ButtonTheme } from "../buttons/"
import { StaticImageData } from "next/image"
import { BreadcrumbProps } from "@/src/types/common"

interface HeadingContent {
  title: string
  color: string
}

interface ButtonData {
  title: string
  theme: string
  url: string
}

interface BpHeroSectionProps {
  backgroundImage: string | StaticImageData
  breadcrumbs?: BreadcrumbProps
  mainHeading: HeadingContent[]
  subHeading: HeadingContent[]
  button: ButtonData
  customCSS?: any
}

const BpHeroSection: React.FC<BpHeroSectionProps> = ({
  backgroundImage,
  breadcrumbs,
  mainHeading,
  subHeading,
  button,
  customCSS,
}) => {
  return (
    <div
      className={`${styles.hero_section}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        ...customCSS,
      }}
    >
      <div className={styles.box_white}>
        <div className="max-w-auto">
          {/* Breadcrumb */}
          {breadcrumbs && (
            <div className="d-flex">
              <CustomBreadcrumb
                items={breadcrumbs.items}
                domain={breadcrumbs.domain}
                linkColor={breadcrumbs.linkColor}
              />
            </div>
          )}

          <div className="row">
            <div className={`${styles.title} col-md-7 `}>
              {/* Main heading (not H1) */}
              <DynamicHeading
                content={mainHeading}
                headingTag="p"
                className="color-equity-blue pt-3 text-md-start text-center pt-md-5 pb-md-4 mb-2"
              />

              <h1 className="mb-4 f-7 pt-3 pt-md-0 text-md-start text-center">
                {subHeading.map((item, i) => (
                  <span key={i} className={item.color}>
                    {item.title}
                  </span>
                ))}
              </h1>

              {/* CTA Button */}
              <div
                className={`${styles.button_wrapper} text-md-start text-center`}
              >
                <CommanButton
                  title={button.title}
                  theme={button.theme as ButtonTheme}
                  url={button.url}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BpHeroSection
