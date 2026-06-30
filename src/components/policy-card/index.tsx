import Link from "next/link"
import React from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./policyCard.module.scss"
import DynamicHeading from "../dynamic-heading"

interface CardProps {
  icon: string | StaticImageData
  title: string
  description?: string
  className?: string
  url?: string
  hoverClass?: string
  headingTag?: keyof React.JSX.IntrinsicElements
  headingClassName?: string
}

const PolicyCard: React.FC<CardProps> = ({
  icon,
  title,
  description,
  className,
  url,
  hoverClass,
  headingTag,
  headingClassName,
}) => {
  const cardContent = (
    <>
      {/* Icon */}
      <div className="d-flex justify-content-center align-items-center bg-light rounded-circle">
        {icon && (
          <Image
            className={`${styles.icons}`}
            src={icon}
            alt="Policy feature icon"
            width={55}
            height={55}
            quality={70}
          />
        )}
      </div>

      {/* Title and Description */}
      <div className="d-flex  flex-column text-start">
        <DynamicHeading
          content={[{ title: title, color: "color-black" }]}
          headingTag={headingTag ? headingTag : "h5"}
          className={`${headingClassName} f-5`}
        />

        {description && (
          <DynamicHeading
            content={[{ title: description, color: "color-grey-200" }]}
            headingTag="p"
            className="f-4 mb-0 mt-2"
          />
        )}
      </div>
    </>
  )

  return (
    <div className={`${className} ${styles.policyCard} ${hoverClass}`}>
      {url ? (
        <Link
          href={url}
          className="d-flex gap-3 align-items-start text-decoration-none"
        >
          {cardContent}
        </Link>
      ) : (
        <div className="d-flex gap-3 align-items-start">{cardContent}</div>
      )}
    </div>
  )
}

export default PolicyCard
