import React from "react"
import DynamicHeading from "@/components/dynamic-heading"
import AllProducts from "@/components/all-products"
import styles from "./slider-section.module.scss"

type TSliderSectionProps = {
  headingContent: { title: string; color: string }[]
  descriptionContent?: { title: string; color: string }[]
  headingTag?: "h1" | "h2" | "h3"
  headingClassName?: string
  productsData: any[]
  productsTitle?: string
  productsSubtitle?: string
  wrapperClassName?: string
}

const SliderSection: React.FC<TSliderSectionProps> = ({
  headingContent,
  descriptionContent,
  headingTag = "h2",
  headingClassName = "f-6",
  productsData,
  productsTitle = "All Features",
  productsSubtitle = "Combine all use cases",
  wrapperClassName = "",
}) => {
  return (
    <div className={`${styles.slider_row} relative ${wrapperClassName}`}>
      <div className={`${styles.title} text-center max-w-auto`}>
        <DynamicHeading
          content={headingContent}
          headingTag={headingTag}
          className={headingClassName}
        />
        <DynamicHeading
          content={descriptionContent}
          headingTag="p"
          className={`${styles.description} mb-0`}
        />
      </div>
      <AllProducts
        title={productsTitle}
        subtitle={productsSubtitle}
        data={productsData}
      />
    </div>
  )
}

export default SliderSection
