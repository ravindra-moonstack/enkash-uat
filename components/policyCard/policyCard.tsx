import React from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./policyCard.module.scss"
import DynamicHeading from "../dynamicHeading/dynamic-heading"

interface CardProps {
  icon: string | StaticImageData
  title: string
  description?: string
  className?: string
}

const PolicyCard: React.FC<CardProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`d-flex align-items-start   ${className}  ${styles.policyCard}`}
    >
      {/* Icon */}
      <div className="d-flex justify-content-center align-items-center bg-light rounded-circle">
        {icon && <Image src={icon} alt="icon" width={55} height={55} />}
      </div>

      {/* Title and Description */}
      <div className="d-flex flex-column text-start ">
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
              className="f-4 mb-0 mt-2"
            />
        )}
      </div>
    </div>
  )
}

export default PolicyCard
