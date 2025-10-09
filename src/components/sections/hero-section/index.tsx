"use client"

import React from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./hero-section.module.scss"
import CustomBreadcrumb from "../../breadcrumb"
import DynamicHeading from "../../dynamic-heading"
import CommanButton from "../../buttons"
import { BreadcrumbItem } from "@/src/types"
import LogoSlider from "../../logo-slider"

interface TextPart {
  text: string
  color?: string
  underline?: boolean
}

interface HeroSectionProps {
  breadcrumbs: BreadcrumbItem[]
  subtitle?: TextPart
  title: TextPart[]
  description: TextPart
  button?: {
    title: string
    url: string
    apiUrl?: string
    theme?: "blue" | "black" | "white"
  }
  rightImage: StaticImageData | string
  backgroundImage?: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  breadcrumbs,
  subtitle,
  title,
  description,
  button,
  rightImage,
  backgroundImage,
}) => {
  return (
    <div className={`${styles.hero_section} position-relative`}>
    
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          priority={true} 
          style={{ objectFit: "cover", zIndex: -1 }}
        />
      )}

      <div className="max-w-auto position-relative">
        <div className="d-flex flex-column flex-md-row">
          {/* LEFT CONTENT */}
          <div className="col-12 col-md-6 d-flex flex-column">
            <CustomBreadcrumb items={breadcrumbs} />

            {subtitle && (
              <div
                className={`${styles.first_row_title} d-md-flex text-center flex-column flex-md-row`}
              >
                <DynamicHeading
                  content={[
                    {
                      title: subtitle.text,
                      color: `${subtitle.color ?? "color-equity-blue"} ${
                        subtitle.underline ? "underline" : ""
                      }`,
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            )}

            <div
              className={`text-center text-md-start ${styles.first_row_content}`}
            >
              <div className="pt-3 pt-md-0">
                <DynamicHeading
                  content={title.map((t) => ({
                    title: t.text,
                    color: t.color ?? "color-black",
                  }))}
                  headingTag="h1"
                  className="f-7"
                />
              </div>

              <div className="d-flex mt-3 mb-3 text-center text-md-start">
                <DynamicHeading
                  content={[
                    {
                      title: description.text,
                      color: description.color ?? "color-black subHeading",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>

              <div className="d-flex flex-column align-items-center align-items-md-start">
                <Image
                  src="/images/groupIcon.png"
                  alt="logo"
                  width={366}
                  height={62}
                  className={styles.group_logo}
                  priority={true} // prioritize logos if needed
                />

                {button && (
                  <div
                    className={`${styles.first_row_button} d-flex flex-row align-items-center`}
                  >
                    <CommanButton
                      title={button.title}
                      theme={button.theme ?? "blue"}
                      url={button.url}
                    />
                    {button.apiUrl && (
                      <CommanButton
                        title="API Doc"
                        theme="outline-blue"
                        url={button.apiUrl}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="col-12 col-md-6 d-flex justify-content-center d-md-flex">
            <div
              className={`${styles.right_img} position-relative w-100 h-100 d-flex`}
            >
              <Image
                src={rightImage}
                alt="Hero Visual"
                style={{ objectFit: "contain", maxHeight: "672px" }}
                className="w-100 mh-550 object-fit-contain"
                priority={true} // LCP priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Logo Slider */}
      <LogoSlider />
    </div>
  )
}

export default HeroSection
