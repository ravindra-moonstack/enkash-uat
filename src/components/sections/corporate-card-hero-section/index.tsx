"use client"
import Image, { StaticImageData } from "next/image"
import styles from "./hero-section.module.scss"
import CustomBreadcrumb from "../../breadcrumb"
import DynamicHeading from "../../dynamic-heading"
import CommanButton from "../../buttons"
import VideoModal from "../../vedio-modal"
import VideoIcon from "../../../../public/svgs/vedio-icon-dark-theme.svg"
import { useState } from "react"
import { BreadcrumbItem } from "@/src/types"
interface TextPart {
  text: string
  color?: string
  underline?: boolean
}

interface HeroSectionProps {
  breadcrumbs: BreadcrumbItem[]
  subtitle?: TextPart
  preHeading?: string
  titleLines: TextPart[]

  buttonUrl: string
  title: string
  url?: string
  apiUrl?: string
  videoUrl?: string
  theme?: "blue" | "black" | "white"

  heroImage: StaticImageData | string
  backgroundImage?: string
  rightImageMaxHeight?: string | number
}
const CorporateHeroSection: React.FC<HeroSectionProps> = ({
  breadcrumbs,
  titleLines,
  subtitle,
  preHeading,
  buttonUrl,
  heroImage,
  videoUrl,
}) => {
  const [open, setOpen] = useState(false)
  //
  return (
    <div className={`${styles.hero_section} overflow-hidden`}>
      <Image
        src="/images/corporate-card-second-bg.webp"
        alt="hero background"
        fill
        priority
        fetchPriority="high"
        className="object-fit-cover z-index-minus-1"
        sizes="100vw"
        quality={75}
      />
      <div className={styles.overlay}></div>
      <div className="max-w-auto position-relative no-pointer ">
        <div className="d-flex">
          <CustomBreadcrumb items={breadcrumbs} linkColor="white" />
        </div>

        <div className="col-12 d-flex flex-column text-center">
          {preHeading && (
            <div className="mt-4">
              <DynamicHeading
                content={[
                  {
                    title: preHeading,
                    color: "color-white d-block text-center subHeading mb-0",
                  },
                ]}
                headingTag="p"
                className="mb-2"
              />
            </div>
          )}

          {/* Main Heading */}
          <div className="text-center mb-3 mt-3 ">
            <DynamicHeading
              content={titleLines}
              headingTag="h1"
              className="f-7"
            />
          </div>

          {/* Subtitle */}
          {subtitle && (
            <DynamicHeading
              content={[
                {
                  title: subtitle.text,
                  color: "color-white d-block text-center subHeading",
                },
              ]}
              headingTag="p"
            />
          )}

          {/* Buttons */}
          <div className="justify-content-center d-flex mt-3 gap-4 pointer-auto">
            <CommanButton title="Talk to Us" theme="blue" url={buttonUrl} />
            {videoUrl && (
              <CommanButton
                title="Watch Video"
                theme="vedio-button-dark"
                iconSize={28}
                url={() => setOpen(true)}
                image={VideoIcon}
              />)}
          </div>
        </div>

        {/* Hero Image */}
        <div className="col-12 d-flex justify-content-center align-items-center no-pointer">
          <div className={styles.bannerImages}>
            <Image
              src={heroImage}
              alt={"hero"}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 80vw"
              quality={75}
              decoding="sync"
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoUrl && (
        <VideoModal
          open={open}
          onClose={() => setOpen(false)}
          videoUrl={videoUrl}
        />
      )}
    </div>
  )
}

export default CorporateHeroSection
