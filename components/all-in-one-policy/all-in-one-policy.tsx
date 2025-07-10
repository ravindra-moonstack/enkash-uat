// components/policy-section-item/PolicySectionItem.tsx

import React from "react"
import Image, { StaticImageData } from "next/image"
import PolicyCard from "../policyCard/policyCard"
import styles from "./all-in-one-policy.module.scss"
import RectangleButton from "../buttons/rectangle-button/rectangle-button"
import { blueArrow, whiteArrow } from "./index"

interface AllInOnePolicyProps {
  icon: StaticImageData
  title: string
  description: string
  image: StaticImageData
  buttonUrl: string
  reverse?: boolean
}

const AllInOnePolicy: React.FC<AllInOnePolicyProps> = ({
  icon,
  title,
  description,
  image,
  buttonUrl,
  reverse = false,
}) => {
  return (
    <div className={`row  align-items-center ${styles.section}`}>
      {/* Text Block */}
      <div
        className={`col-md-6 col-12 px-5 ${
          reverse ? "order-md-2" : "order-md-1"
        }`}
      >
        <PolicyCard icon={icon} title={title} description={description} />

        <div className={`mt-4 ${styles.list_button}`}>
          <RectangleButton
            title="Try Now"
            theme="border-gray"
            actionImage={blueArrow}
            hoverImage={whiteArrow}
            url={buttonUrl}
          />
        </div>
      </div>

      {/* Image Block */}
      <div
        className={`col-md-6 col-12 d-flex justify-content-end ${
          reverse ? "order-md-1" : "order-md-2"
        } ${styles.third_container}`}
      >
        <Image
          src={image}
          alt="card visual"
          className="position-relative w-100 h-100"
        />
      </div>
    </div>
  )
}

export default AllInOnePolicy
