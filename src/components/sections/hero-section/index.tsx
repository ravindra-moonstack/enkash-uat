"use client"

import React, { useState } from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./hero-section.module.scss"
import CustomBreadcrumb from "../../breadcrumb"
import DynamicHeading from "../../dynamic-heading"
import CommanButton from "../../buttons"
import { BreadcrumbItem } from "@/src/types"
import LogoSlider from "../../logo-slider"
import VideoModal from "../../vedio-modal"
import VideoIcon from "../../../../public/svgs/vedio-icon.svg"
import HoverVideoIcon from "../../../../public/svgs/vedio-icon-dark-theme.svg"

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
    vedioLink?: string
    theme?: "blue" | "black" | "white"
  }
  rightImage: StaticImageData | string
  backgroundImage?: string
  rightImageMaxHeight?: string | number
}

const HeroSection: React.FC<HeroSectionProps> = ({
  breadcrumbs,
  subtitle,
  title,
  description,
  button,
  rightImage,
  backgroundImage,
  rightImageMaxHeight = "550px",
}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.hero_section} position-relative`}>
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          priority={true}
          fetchPriority="high"
          style={{ objectFit: "cover", zIndex: -1 }}
          sizes="100vw"
          decoding="async"
          quality={80}
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
                      color: `${subtitle.color ?? "color-equity-blue"} ${subtitle.underline ? "underline" : ""
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
                  width={180}
                  height={30}
                  className={styles.group_logo}
                  priority={true}
                  sizes="180px"
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

                    {button.vedioLink && (
                      <>
                        {button.vedioLink && (
                          <>
                            <CommanButton
                              title="Watch Video"
                              theme="vedio-button"
                              iconSize={28}
                              url={() => setOpen(true)}
                              image={VideoIcon}
                              hoverImage={HoverVideoIcon}
                              changeImageOnHover={true}
                            />
                          </>
                        )}
                      </>
                    )}
                    {button.apiUrl && (
                      <CommanButton
                        title="API Doc"
                        theme="grey-text"
                        arrow
                        arrowType="ios"
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
                style={{
                  objectFit: "contain",
                  maxHeight: rightImageMaxHeight,
                }}
                className="w-100 object-fit-contain"
                priority={true}
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                quality={80}
                decoding="sync"
              />
            </div>
          </div>
        </div>
      </div>
      {button && (
        <>
          {button.vedioLink && (
            <VideoModal
              open={open}
              onClose={() => setOpen(false)}
              videoUrl={button.vedioLink}
            />
          )}
        </>
      )}
      {/* Logo Slider */}
      <LogoSlider />
    </div>
  )
}

export default HeroSection
