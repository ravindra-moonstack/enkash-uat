import React, { memo } from "react"
import styles from "./smartPolicySection.module.scss"
import { DynamicHeading, PolicyCard, CommanButton, ShimmerImage } from ".."

interface SmartPolicySectionProps {
  heading: { title: string; color: string }[]
  subheading: { title: string; color: string }[]
  cardsData: { icon: any; title: string; description?: string }[]
  approvedImage: string
  showScroll?: boolean
  buttonTitle?: string
  buttonUrl?: string
  buttonIcon?: any
}

const SmartPolicySection = ({
  heading,
  subheading,
  cardsData,
  approvedImage,
  showScroll = true,
  buttonTitle = "Explore Policy Controls",
  buttonUrl = "/approval-flows",
}: SmartPolicySectionProps) => {
  return (
    <div className={`${styles.features_section}`}>
      <div className="relative max-w-auto">
        <div className={`${styles.title} text-start`}>
          <DynamicHeading content={heading} headingTag="h2" className="f-6" />
          <DynamicHeading
            content={subheading}
            headingTag="p"
            className="f-4 mt-2 mb-0"
          />
        </div>

        <div
          className={`col-md-6 col-12 mt-4 mt-md-5 ${showScroll ? "overflow-auto scrollbar-thin" : ""
            }`}
          style={{
            maxHeight: "400px",
            direction: showScroll ? "rtl" : "ltr",
          }}
        >
          {cardsData.map(({ icon, title, description }, i) => (
            <div
              key={i}
              style={{
                direction: "ltr",
                marginLeft: "20px",
                marginBottom: "20px",
              }}
            >
              <PolicyCard icon={icon} title={title} description={description} />
            </div>
          ))}
        </div>

        <div className={styles.scrollBtn}>
          <CommanButton
            title={buttonTitle}
            theme="border-gray"
            arrow
            iconSize={15}
            url={buttonUrl}
          />
        </div>
      </div>

      <div className={styles.approvedImage}>
        <ShimmerImage src={approvedImage} alt="approved" />
      </div>
    </div>
  )
}

export default memo(SmartPolicySection)
