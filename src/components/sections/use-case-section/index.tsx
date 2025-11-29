import React, { JSX } from "react"
import styles from "./use-case-section.module.scss"
import DynamicHeading from "../../dynamic-heading"
import AllInOnePolicy from "../../all-in-one-policy"
import { StaticImageData } from "next/image"

interface HeadingPart {
  title: string
  color: string
}

interface UseCaseItem {
  icon: string | StaticImageData
  title: string
  description: string
  image?: string | StaticImageData
  buttonUrl?: string
  maxImageHeight?: string
  reverse?: boolean
}

interface UseCaseSectionProps {
  heading: HeadingPart[]
  headingTag?: keyof JSX.IntrinsicElements
  items: UseCaseItem[]
  subHeading?:HeadingPart[]
  buttonUrl: string
  className?: string
}

const UseCaseSection: React.FC<UseCaseSectionProps> = ({
  heading,
  headingTag = "h2",
  items,
  buttonUrl,
  subHeading,
  className = "",
}) => {
  return (
    <div className={`${styles.use_case_section} ${className}`}>
      <div className={`${styles.section} max-w-auto`}>
        <div className={`${styles.title} text-center pb-4 pb-md-5`}>
          <DynamicHeading
            content={heading}
            headingTag={headingTag}
            className="f-6"
          />
            <DynamicHeading
            content={subHeading}
            headingTag="p"
            className="mt-2"
          />
        </div>

        {items.map((item, index) => (
          <AllInOnePolicy
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            image={item.image}
            buttonUrl={buttonUrl}
            maxImageHeight={item.maxImageHeight}
            reverse={item.reverse}
          />
        ))}
      </div>
    </div>
  )
}

export default UseCaseSection
