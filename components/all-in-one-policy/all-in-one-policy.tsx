// components/policy-section-item/PolicySectionItem.tsx

import React from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./all-in-one-policy.module.scss"
import RectangleButton from "../buttons/rectangle-button/rectangle-button"
import { blueArrow, whiteArrow } from "./index"
import Heading from "../heading/heading"

interface AllInOnePolicyProps {
  icon: StaticImageData
  title: string
  description: string
  image: StaticImageData
  buttonUrl: string
  reverse?: boolean
  maxImageHeight?: string
}

const AllInOnePolicy: React.FC<AllInOnePolicyProps> = ({
  icon,
  title,
  description,
  image,
  buttonUrl,
  reverse = false,
  maxImageHeight,
}) => {
  return (
    <div className={`row  align-items-center ${styles.section}`}>
      {/* Text Block */}
      <div
        className={`col-md-8 col-12 px-md-5 ${
          reverse ? "order-md-2" : "order-md-1"
        }`}
      >
        <div className={`d-flex align-items-start    ${styles.policyCard}`}>
          {/* Icon */}
          <div className="d-flex justify-content-center align-items-center bg-light rounded-circle">
            {icon && <Image src={icon} alt="icon" width={55} height={55} />}
          </div>

          {/* Title and Description */}
          <div className="d-flex flex-column text-start gap-3">
            <Heading title={title} color="black" size="h4" weight="5" />
            {description && (
              <Heading
                title={description}
                color="grey-200"
                size="h7"
                weight="4"
              />
            )}
          </div>
        </div>

        <div className={` ${styles.list_button}`}>
          <RectangleButton
            title="Try Now"
            theme="outline-blue"
            actionImage={blueArrow}
            hoverImage={whiteArrow}
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
          className=" w-100 "
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
