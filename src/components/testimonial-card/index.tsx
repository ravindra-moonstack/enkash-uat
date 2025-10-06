import React from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./testimonialCard.module.scss"
import DynamicHeading from "../dynamic-heading"

interface CardProps {
  icon: string | StaticImageData

  description?: string
  className?: string
  name?: string
  position?: string
  testimonialImg?: string | StaticImageData
}

const TestimonialCard: React.FC<CardProps> = ({
  icon,
  description,
  className,
  testimonialImg,
  position,
  name,
}) => {
  return (
    <div
      className={`d-flex align-items-start  justify-content-between flex-column  ${className}  ${styles.policyCard}`}
    >
      <div>
        <div className="">
          {icon && (
            <div
              style={{ position: "relative", width: "auto", height: "100%" }}
            >
              <Image src={icon} alt="icon" style={{ objectFit: "contain" }} />
            </div>
          )}
        </div>

        <div className="d-flex flex-column text-start pt-4">
          {description && (
            <DynamicHeading
              content={[
                {
                  title: String(description),
                  color: "color-white",
                },
              ]}
              headingTag="p"
              className="mb-0 "
            />
          )}
        </div>
      </div>

      <div className="d-flex text-start gap-3 ">
        <div>
          {testimonialImg && (
            <Image
              src={testimonialImg}
              alt="icon"
              width={42}
              height={42}
              objectFit="contain"
            />
          )}
        </div>
        <div className="d-flex flex-column text-start ">
          <DynamicHeading
            content={[
              {
                title: String(name),
                color: "color-white",
              },
            ]}
            headingTag="p"
            className="mb-0 f-7"
          />

          {position && (
            <DynamicHeading
              content={[
                {
                  title: String(position),
                  color: "color-dark-grey",
                },
              ]}
              headingTag="p"
              className="mb-0"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
