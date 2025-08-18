"use client"

import React from "react"
import styles from "./voucherFaqSection.module.scss"
import DynamicHeading from "../dynamicHeading/dynamic-heading"
import { RectangleButton } from ".."
import { blueArrow, whiteArrow } from "../all-in-one-policy"
import { usePathname } from "next/navigation"

interface FaqSectionProps {
  mainTitle?: string
  highlightTitle?: string
  subTitle?: string
  buttonText?: string
  buttonTheme?: string
  buttonIcon?: string
  buttonHoverIcon?: string
  FaqContent: React.ReactNode
}

const VoucherFaqSection: React.FC<FaqSectionProps> = ({
  mainTitle = "Frequently Asked Questions (",
  highlightTitle = "FAQs",
  subTitle = "Have more questions?",
  buttonText = "Get started today",
  FaqContent,
}) => {
  const pathname = usePathname()
  const lastSlug = pathname?.split("/").filter(Boolean).pop() || "default"
  const connectUrl = `/contact-us?source=${lastSlug}`

  return (
    <div className={`${styles.faq_new_row} relative`}>
      <div className={`${styles.faqSection} max-w-auto`}>
        {/* Title */}
        <div className={`${styles.title} pb-md-5 pb-2`}>
          <DynamicHeading
            content={[
              { title: mainTitle, color: "color-black" },
              { title: highlightTitle, color: "color-equity-blue" },
              { title: ")", color: "color-black" },
            ]}
            headingTag="h2"
            className="f-6"
          />
        </div>

        {/* Sub + Button + FAQ content */}
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div>
            {subTitle && (
              <DynamicHeading
                content={[
                  { title: subTitle, color: "color-dark-grey subHeading" },
                ]}
                headingTag="p"
                className="mb-0"
              />
            )}
            {buttonText && (
              <div className="mt-3 d-none d-md-block">
                <RectangleButton
                  title="Get started today"
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  iconSize={15}
                  url={connectUrl}
                />
              </div>
            )}
          </div>

          <div className={styles.faqData}>{FaqContent}</div>
        </div>
      </div>
    </div>
  )
}

export default VoucherFaqSection
