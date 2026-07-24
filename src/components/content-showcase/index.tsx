import { JSX, memo, ReactNode } from "react"
import Image, { StaticImageData } from "next/image"

import styles from "./contentShowcase.module.scss"

import DynamicHeading from "@/src/components/dynamic-heading"
import CommanButton from "@/src/components/buttons"
import PolicyCard from "@/src/components/policy-card"

interface ContentShowcaseProps {
  mainHeading?: { title: string; color: string }[]
  mainDescription?: { title: string; color: string }[]
  heading?: string
  subheading?: string | string[]
  data: {
    icon: string
    title: string
    description: string | ReactNode
    headingTag?: keyof JSX.IntrinsicElements
    headingClassName?: string
  }[]
  imageSrc: string | StaticImageData
  imageAlt: string
  bgColor?: string
  reverse?: boolean
  buttonTitle?: string
  buttonUrl?: string
  imgStyle?: string
  imgHeightStyle?: string
  buttonArrow?: boolean
  contentContainerStyle?: string
  headingTag?: keyof JSX.IntrinsicElements
  headingClassName?: string
}

function ContentShowcase({
  heading,
  mainDescription,
  subheading,
  data,
  imageSrc,
  imageAlt,
  bgColor = "bg-white",
  reverse = false,
  buttonTitle,
  mainHeading,
  buttonUrl,
  imgStyle,
  imgHeightStyle = "mh-550",
  buttonArrow,
  contentContainerStyle,
  headingTag,
  headingClassName,
}: ContentShowcaseProps): JSX.Element {
  return (
    <div className={`${bgColor} ${styles.ContentShowcase}`}>
      <div className="max-w-auto">
        {mainHeading && (
          <div className={`text-center ${styles.MaineHeading}`}>
            <DynamicHeading
              content={mainHeading}
              headingTag="h2"
              className="f-6"
            />
          </div>
        )}
        {mainDescription && (
          <DynamicHeading
            content={mainDescription}
            headingTag="p"
            className="f-4 mb-0 text-center"
          />
        )}

        <div
          className={`${styles.ContentShowcaseContent} ${contentContainerStyle}`}
        >
          <div className={`row`}>
            {/* IMAGE COLUMN — Mobile second, Desktop based on reverse */}
            <div
              className={`
                col-md-6 col-12
                ${reverse ? "order-md-2" : "order-md-1"}
                order-2
              `}
            >
              <div className={`${imgStyle}`}>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  className={`position-relative w-100 object-fit-contain ${imgHeightStyle}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* CONTENT COLUMN — Mobile first, Desktop based on reverse */}
            <div
              className={`
                col-md-6 col-12
                ${reverse ? "order-md-1" : "order-md-2"}
                order-1
              `}
            >
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <DynamicHeading
                  content={[{ title: heading, color: "color-black" }]}
                  headingTag={headingTag ? headingTag : "h3"}
                  className={`${headingClassName ? headingClassName : "heading-h4"} f-5`}
                />

                {subheading &&
                  (Array.isArray(subheading) ? (
                    subheading.map((sub, idx) => (
                      <DynamicHeading
                        key={idx}
                        content={[{ title: sub, color: "color-main-grey" }]}
                        headingTag="p"
                        className="f-4 mt-2 mb-0"
                      />
                    ))
                  ) : (
                    <DynamicHeading
                      content={[
                        { title: subheading, color: "color-main-grey" },
                      ]}
                      headingTag="p"
                      className="f-4 mt-2 mb-0"
                    />
                  ))}
              </div>

              <div className="d-flex flex-column gap-32 mt-4">
                {data.map(
                  (
                    {
                      icon,
                      title,
                      description,
                      headingClassName: itemClassName,
                      headingTag: itemTag,
                    },
                    i
                  ) => (
                    <PolicyCard
                      key={i}
                      icon={icon}
                      title={title}
                      description={description}
                      headingClassName={
                        itemClassName ? itemClassName : "heading-h5"
                      }
                      headingTag={itemTag ? itemTag : "h4"}
                    />
                  )
                )}
              </div>

              <div className={styles.list_button}>
                <CommanButton
                  title={buttonTitle || "Get Started"}
                  theme="outline-blue"
                  url={buttonUrl || "/sales"}
                  arrow={buttonArrow}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(ContentShowcase)
