import React from "react"
import Image from "next/image"
import Heading from "../heading/heading"

interface CardProps {
  icon: string
  title: string
  description?: string // 🔹 Made optional
  className?: string
}

const PolicyCard: React.FC<CardProps> = ({
  icon,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`d-flex align-items-start gap-3 py-3 ${className}`}>
      {/* Icon */}
      <div
        className="d-flex justify-content-center align-items-center bg-light rounded-circle"
        style={{ width: "55px", height: "55px" }}
      >
        <Image src={icon} alt="icon" />
      </div>

      {/* Title and Description */}
      <div className="d-flex flex-column gap-3">
        <Heading title={title} color="black" size="h4" weight="5" />
        {description && (
          <Heading title={description} color="black" size="h5" weight="4" />
        )}
      </div>
    </div>
  )
}

export default PolicyCard
