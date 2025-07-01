import React from "react"
import Image from "next/image"
import Heading from "../heading/heading"
import styles from "./policyCard.module.scss"

interface CardProps {
  icon: string
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
        <Image src={icon} alt="icon" width={68} height={68} />
      </div>

      {/* Title and Description */}
      <div className="d-flex flex-column ">
        <Heading title={title} color="black" size="h5" weight="5" />
        {description && (
          <Heading title={description} color="grey-200" size="h7" weight="4" />
        )}
      </div>
    </div>
  )
}

export default PolicyCard
