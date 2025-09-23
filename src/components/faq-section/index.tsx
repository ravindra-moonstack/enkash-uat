"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import styles from "./faq-section.module.scss"
import { FAQHtml } from "../faq-new"
import DynamicHeading from "../dynamic-heading"
import FAQSchema from "../faq-schema"

interface FaqSectionProps {
  faqData: any
  connectText?: string
}

const FaqSection = ({
  faqData,
  connectText = "Connect with us",
}: FaqSectionProps): React.JSX.Element => {
  const pathname = usePathname()
  const lastSlug = pathname?.split("/").filter(Boolean).pop() || "default"
  const connectUrl = `/contact-us?source=${lastSlug}`

  return (
    <div className={`${styles.faq_new_row} relative`}>
      {/* Inject FAQ JSON-LD for SEO */}
      <FAQSchema faqData={faqData} />

      <div className={`${styles.faqSection} text-start max-w-auto`}>
        <div className={`${styles.title} text-start pb-3 pb-md-5`}>
          <DynamicHeading
            content={[
              { title: "Frequently Asked Questions (", color: "color-black" },
              { title: "FAQs", color: "color-equity-blue" },
              { title: ")", color: "color-black" },
            ]}
            headingTag="h2"
            className="f-6"
          />
        </div>

        <div>
          <DynamicHeading
            content={[
              {
                title: "Have more questions?",
                color: "color-grey-200 subHeading",
              },
            ]}
            headingTag="p"
            className="mb-3"
          />
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div>
            <div className="mt-3 d-none d-md-block">
              <div className="connectWithUs">
                <Link href={connectUrl}>
                  <DynamicHeading
                    content={[{ title: connectText, color: "color-equity-blue" }]}
                    headingTag="p"
                    className="mb-0 f-5"
                  />
                  <Image
                    src="/images/blue-arrow.svg"
                    alt="blue Arrow"
                    width={15}
                    height={15}
                    className="ms-2"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className={`${styles.faqData}`}>
            <FAQHtml faqData={faqData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqSection
