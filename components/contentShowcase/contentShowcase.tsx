import Image, { StaticImageData } from "next/image"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import PolicyCard from "@/components/policyCard/policyCard"
import styles from "./contentShowcase.module.scss"
import { JSX, memo, Suspense } from "react"

interface ContentShowcaseProps {
  mainHeading?: { title: string; color: string }[]
  heading?: string
  subheading?: string
  data: {
    icon: string
    title: string
    description: string
  }[]
  imageSrc: string | StaticImageData
  imageAlt: string
  bgColor?: string
  reverse?: boolean
  buttonTitle?: string
  buttonUrl?: string
}

function ContentShowcase({
  heading,
  subheading,
  data,
  imageSrc,
  imageAlt,
  bgColor = "bg-white",
  reverse = false,
  buttonTitle,
  mainHeading,
  buttonUrl,
}: ContentShowcaseProps): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={`${bgColor} ${styles.ContentShowcase} `}>
        <div className="max-w-auto">
          {mainHeading && (
            <div className={`text-center  ${styles.MaineHeading} `}>
              <DynamicHeading
                content={mainHeading}
                headingTag="h2"
                className="f-6"
              />
            </div>
          )}
          <div className={`${styles.ContentShowcaseContent} `}>
            <div className={`row  ${reverse ? "flex-row-reverse" : ""}`}>
              <div
                className={`col-md-6 col-12 ${
                  reverse ? "order-2 order-md-1" : "order-1 order-md-1"
                }`}
              >
                <div>
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="position-relative w-100 mh-550 object-fit-contain"
                  />
                </div>
              </div>
              <div
                className={`col-md-6 col-12 ${
                  reverse ? "order-1 order-md-2" : "order-2 order-md-2"
                }`}
              >
                <div className={`d-flex flex-column ${styles.subtitle}`}>
                  <DynamicHeading
                    content={[{ title: heading, color: "color-black" }]}
                    headingTag="h4"
                    className="f-5"
                  />
                  <DynamicHeading
                    content={[{ title: subheading, color: "color-main-grey" }]}
                    headingTag="p"
                    className="f-4 mt-2 mb-0"
                  />
                </div>
                <div className="d-flex flex-column gap-32 mt-4">
                  {data.map(({ icon, title, description }, i) => (
                    <PolicyCard
                      key={i}
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  ))}
                </div>
                <div className={styles.list_button}>
                  <RectangleButton
                    title={buttonTitle || "Get Started"}
                    theme="outline-blue"
                    url={buttonUrl || "/sales"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default memo(ContentShowcase)
