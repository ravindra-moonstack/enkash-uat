"use client"
import React, { memo } from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./supportedElectricityBillers.module.scss"
import DynamicHeading from "../../dynamic-heading"
import { CommanButton } from "../.."

interface SupportedElectricityBillersProps {
  backgroundImage: string | StaticImageData
  className?: string
}

const SupportedElectricityBillers: React.FC<
  SupportedElectricityBillersProps
> = ({ backgroundImage, className = "" }) => {
  return (
    <section className={`${styles.sectionWrapper} ${className}`}>
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Supported Electricity Billers Background"
          fill
          priority={false}
          style={{ objectFit: "fill", zIndex: 0 }}
          sizes="100vw"
          decoding="async"
          quality={85}
          className={styles.bgImage}
        />
      )}

      <div className={styles.container}>
        <div className={styles.card}>
          {/* Top Right Decorative Lines and Box */}
          <div className={styles.decorations}>
            <div className={styles.iconBox}>
              <Image
                src="/svgs/bulb-icon-green.svg"
                alt="Supported Electricity Billers icon"
                width={42}
                height={42}
                priority={false}
                style={{ objectFit: "fill", zIndex: 0 }}
                decoding="async"
                quality={85}
                className={styles.bulbIcon}
              />
            </div>
          </div>
          {/* bottom right with overflow hidden */}
          <div className={styles.bottomRight}>
            <Image
              src={"/svgs/billers-gradient.svg"}
              alt={"Supported Electricity Billers Background"}
              fill
              priority={false}
              style={{ objectFit: "fill", zIndex: 0 }}
              sizes="100vw"
              decoding="async"
              quality={85}
              className={styles.bottomRightBgImage}
            />
          </div>
          <div className={styles.cardContent}>
            {/* Using DynamicHeading component just like throughout the rest of the page */}
            <div className={styles.title}>
              <DynamicHeading
                content={[
                  {
                    title: "Supported Electricity Billers",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className="f-7 mb-0 heading-h3"
              />
            </div>

            <div className={styles.description}>
              <DynamicHeading
                content={[
                  {
                    title:
                      "Pay prepaid and postpaid electricity bills across leading DISCOMs and utility providers from one unified platform.",
                    color: "color-secondry-black",
                  },
                ]}
                headingTag="p"
                className="f-4 mb-2 lh-base"
              />
              <DynamicHeading
                content={[
                  {
                    title:
                      "Access the complete list of supported electricity billers available on EnKash via Bharat Connect.",
                    color: "color-secondry-black",
                  },
                ]}
                headingTag="p"
                className="f-4 mb-0 lh-base"
              />
            </div>

            <div className={styles.btnGroup}>
              <CommanButton
                theme="outline-blue"
                title="Pre-paid Billers"
                url={
                  "/uploads/2026/06/Enkash-BBPS-prepaid-electricity-bill-posters-2.pdf"
                }
                openInNewTab
              />
              <CommanButton
                theme="outline-blue"
                title="Post-paid Billers"
                url={
                  "/uploads/2026/06/Enkash-BBPS-postpaid-electricity-bill-posters-1.pdf"
                }
                openInNewTab
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(SupportedElectricityBillers)
