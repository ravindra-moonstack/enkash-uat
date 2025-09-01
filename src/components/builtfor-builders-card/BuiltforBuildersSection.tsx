import React from "react"
import Image from "next/image" // Next.js optimized Image component
import styles from "./BuiltforBuildersSection.module.scss"
import Link from "next/link"
import DynamicHeading from "../dynamic-heading/dynamic-heading"

interface BuiltforBuildersSectionProps {
  title: string
  subtitle: string
  subtitle2?: string // Optional second subtitle
  icon: string // can be a local import or remote URL
  url: string // Destination URL
}

const BuiltforBuildersSection: React.FC<BuiltforBuildersSectionProps> = ({
  title,
  subtitle,
  subtitle2,
  icon,
  url,
}) => {
  return (
    <>
      <div className={`${styles.coloctPaymentBoxInnerBox}`}>
        <Link href={url} className={`${styles.coloctPaymentBoxInnerLink}`}>
          {/* Title & Subtitle */}
          <div className="">
            <Image
              src={icon}
              alt="Icon"
              className="icon"
              width={40} // required in Next.js
              height={40} // required in Next.js
            />
          </div>
          <DynamicHeading
            content={[
              {
                title: title,
                color: "color-white",
              },
            ]}
            headingTag="h5"
            className="mb-1 f-5 mt-3"
          />
          {subtitle2 && (
            <DynamicHeading
              content={[
                {
                  title: subtitle2,
                  color: "f-3",
                },
              ]}
              headingTag="p"
              className=" f-4"
            />
          )}
          <DynamicHeading
            content={[
              {
                title: subtitle,
                color: "f-3",
              },
            ]}
            headingTag="p"
            className="mb-0 f-4"
          />
        </Link>
      </div>
    </>
  )
}

export default BuiltforBuildersSection
