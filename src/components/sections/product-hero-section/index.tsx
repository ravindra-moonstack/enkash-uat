"use client"
import React from "react"
import SuspenseLoading from "../../loading"
import styles from "./styles.module.scss"
import CustomBreadcrumb from "../../breadcrumb"
import DynamicHeading from "../../dynamic-heading"
import CommanButton from "../../buttons"
import LottieDynamicLoadComponent from "../../lottie-client/lottie-dynamic-load-client"
import LogoSlider from "../../logo-slider"

interface ProductHeroSectionProps {
  breadcrumbItems: { name: string; url: string }[]
  title: string
  subtitle: string
  animationName: string
  buttonTitle?: string
  buttonUrl?: string
  buttonTheme?: "blue" | "white" | "black"
  linkColor?: string
}

const ProductHeroSection: React.FC<ProductHeroSectionProps> = ({
  breadcrumbItems,
  title,
  subtitle,
  animationName,
  buttonTitle = "Talk to Us",
  buttonUrl = "#",
  buttonTheme = "blue",
}) => {
  return (
    <section className={styles.hero_section}>
      <div className="max-w-auto">
        <div className="d-flex">
          <CustomBreadcrumb items={breadcrumbItems} linkColor="white" />
        </div>

        <div className="col-12 d-flex flex-column text-center">
          <DynamicHeading
            content={[{ title, color: "color-white" }]}
            headingTag="h1"
            className="f-7 mt-4 mb-2"
          />

          <div className="d-inline">
            <DynamicHeading
              content={[{ title: subtitle, color: "color-white subHeading" }]}
              headingTag="p"
              className="mb-0"
            />
          </div>

          {buttonTitle && (
            <div className="mt-md-5 mt-3 justify-content-center d-flex">
              <CommanButton
                title={buttonTitle}
                theme={buttonTheme}
                url={buttonUrl}
              />
            </div>
          )}
        </div>

        <div className="col-12 d-flex justify-content-center align-items-center">
          <SuspenseLoading fallback={<div className={styles.lottie_container} style={{ height: '300px' }} />}>
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent animationName={animationName} loop priority={true} />
            </div>
          </SuspenseLoading>
        </div>
      </div>

      <SuspenseLoading fallback={<div style={{ height: '100px' }} />}>
        <LogoSlider />
      </SuspenseLoading>
    </section>
  )
}

export default ProductHeroSection
