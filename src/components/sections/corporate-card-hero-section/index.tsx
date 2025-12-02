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
  titleLines: TextPart[]

  buttonUrl: string
  title: string
  url: string
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
  buttonUrl,
  heroImage,
  videoUrl,
}) => {
  const [open, setOpen] = useState(false)
  //
  return (
    <div className={styles.hero_section}>
      <div className="max-w-auto position-relative no-pointer ">
        <div className="d-flex">
          <CustomBreadcrumb items={breadcrumbs} linkColor="white" />
        </div>

        <div className="col-12 d-flex flex-column text-center">
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

            <CommanButton
              title="Watch Video"
              theme="vedio-button-dark"
              iconSize={28}
              url={() => setOpen(true)}
              image={VideoIcon}
            />
          </div>
        </div>

        {/* Hero Image */}
        <div className="col-12 d-flex justify-content-center align-items-center no-pointer">
          <div className={styles.bannerImages}>
            <Image src={heroImage} alt={"hero"} />
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
