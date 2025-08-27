// components/policy-section-item/PolicySectionItem.tsx

import React from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./all-in-one-policy.module.scss"
import RectangleButton, {
  RectangleButtonTheme,
} from "../buttons/rectangle-button"
import { blueArrow, whiteArrow } from "./index"
import DynamicHeading from "../dynamicHeading/dynamic-heading"

interface AllInOnePolicyProps {
  icon: StaticImageData
  title: string
  description: string
  image: StaticImageData
  buttonUrl: string
  reverse?: boolean
  maxImageHeight?: string
  buttonTheme?: RectangleButtonTheme
  buttonText?: string
  buttonActionIcon?: StaticImageData
  buttonHoverIcon?: StaticImageData
}

const AllInOnePolicy: React.FC<AllInOnePolicyProps> = ({
  icon,
  title,
  description,
  image,
  buttonUrl,
  reverse = false,
  maxImageHeight,
  buttonTheme = "outline-blue",
  buttonText = "Get Started",
  buttonActionIcon = blueArrow,
  buttonHoverIcon = whiteArrow,
}) => {
  return (
    <div className={`row align-items-center mb-3 ${styles.section}`}>
      {/* Text Block */}
      <div
        className={`col-md-8 col-12 ${reverse ? "order-md-2" : "order-md-1"}`}
      >
        <div className={`d-flex align-items-start ${styles.policyCard}`}>
          {/* Icon */}
          <div className="d-flex justify-content-center align-items-center bg-light rounded-circle">
            <Image src={icon} alt="icon" width={55} height={55} />
          </div>

          {/* Title and Description */}
          <div className="d-flex flex-column text-start gap-2 gap-md-3">
            <DynamicHeading
              content={[
                {
                  title: title,
                  color: "color-black",
                },
              ]}
              headingTag="h5"
              className="f-5"
            />
            {description && (
              <DynamicHeading
                content={[
                  {
                    title: description,
                    color: "color-grey-200",
                  },
                ]}
                headingTag="p"
                className="mb-0"
              />
            )}
          </div>
        </div>

        <div className={styles.list_button}>
          <RectangleButton
            title={buttonText}
            theme={buttonTheme}
            actionImage={buttonActionIcon}
            hoverImage={buttonHoverIcon}
            url={buttonUrl}
          />
        </div>
      </div>

      {/* Image Block */}
      <div
        className={`col-md-4 col-12 d-flex justify-content-end ${
          reverse ? "order-md-1" : "order-md-2"
        } ${styles.third_container}`}
      >
        <Image
          src={image}
          alt="card visual"
          className="w-100"
          style={{
            maxHeight: maxImageHeight || "auto",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  )
}

export default AllInOnePolicy
