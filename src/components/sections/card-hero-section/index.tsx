import React from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./styles.module.scss"
import CustomBreadcrumb from "../../breadcrumb"
import DynamicHeading from "../../dynamic-heading"
import { CommanButton } from "../.."

interface TextPart {
  text: string
  color?: string
  underline?: boolean
}

interface ButtonProps {
  title: string
  url: string | (() => void)
  theme?: "blue" | "black" | "white"
}

interface CardHeroSectionProps {
  breadcrumbs?: { name: string; url: string }[]
  subtitle?: TextPart
  title: TextPart[] // multiple parts for highlight etc
  description?: TextPart
  button?: ButtonProps
  heroImage: StaticImageData | string
  backgroundImage?: string
  paddingTop?: string
  paddingBottom?: string
  linkColor?: "black" | "white" | "allWhite"
}

const CardHeroSection: React.FC<CardHeroSectionProps> = ({
  breadcrumbs,
  subtitle,
  title,
  description,
  button,
  heroImage,
  backgroundImage,
  paddingTop,
  paddingBottom,
  linkColor,
}) => {
  return (
    <div
      className={`${styles.hero_section} position-relative`}
      style={{
        paddingTop: paddingTop ?? undefined,
        paddingBottom: paddingBottom ?? undefined,
      }}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          priority={true}
          fetchPriority="high"
          style={{ objectFit: "cover", zIndex: -1 }}
          sizes="100vw"
        />
      )}
      <div className="max-w-auto">
        {breadcrumbs && (
          <div className="d-flex mb-3">
            <CustomBreadcrumb items={breadcrumbs} linkColor={linkColor} />
          </div>
        )}

        <div className={`${styles.title} col-12 text-center`}>
          {subtitle && (
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
              className="mb-2"
            />
          )}

          <DynamicHeading
            content={title.map((t) => ({
              title: t.text,
              color: t.color ?? "color-black",
            }))}
            headingTag="h1"
            className="f-7 mb-2"
          />

          {description && (
            <DynamicHeading
              content={[
                {
                  title: description.text,
                  color: description.color ?? "color-black subHeading",
                },
              ]}
              headingTag="p"
            />
          )}

          {button && (
            <div
              className={`${styles.button_wrapper} d-flex justify-content-center mt-3`}
            >
              <CommanButton
                title={button.title}
                theme={button.theme ?? "blue"}
                url={button.url}
              />
            </div>
          )}
        </div>
      </div>

      <div className="col-12 pt-5 d-flex justify-content-center">
        <div
          className={`${styles.lottie_container} position-relative w-100 h-100`}
        >
          <Image
            src={heroImage}
            alt="hero visual"
            style={{ objectFit: "contain", maxHeight: "672px" }}
            className="w-100 object-fit-contain"
            priority={true}
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  )
}

export default CardHeroSection
