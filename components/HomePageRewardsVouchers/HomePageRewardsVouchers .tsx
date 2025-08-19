import React from "react"
import Image from "next/image" // Next.js optimized Image component
import styles from "./HomePageRewardsVouchers .module.scss"
import Link from "next/link"
import DynamicHeading from "../dynamicHeading/dynamic-heading"

interface HomePageRewardsVouchersProps {
  title: string
  title2?: string // Optional title
  subtitle: string
  icon?: string // can be a local import or remote URL
  url?: string // Destination URL
  image?: string // Optional image prop, not used in this component
  overlayColorClass?: string // Optional overlay color, not used in this component
}

const HomePageRewardsVouchers: React.FC<HomePageRewardsVouchersProps> = ({
  title,
  title2,
  subtitle,
  icon,
  url,
  image,
  overlayColorClass,
}) => {
  return (
    <>
      <div
        className={`${styles.rewardsVauchersBoxInnerBox} ${overlayColorClass || ""
        }`}
        style={{ backgroundImage: image ? `url(${image})` : undefined }}
      >
        <div className="icon-wrapper">
          {icon && (
            <Image
              src={icon}
              alt="Icon"
              className="icon"
              width={30} // required in Next.js
              height={30} // required in Next.js
            />
          )}
        </div>
        <div className={`${styles.content}`}>
          <div className={`${styles.title_wrapper}`}>
            <DynamicHeading
              content={[
                {
                  title: title,
                  color: "color-white f-3 d-block",
                },
                {
                  title: title2 || "", // Use title2 if provided, otherwise an empty string
                  color: "color-white ",
                },
              ]}
              headingTag="h5"
              className="f-5 mb-2"
            />
          </div>
          <div className={`${styles.button_wrapper}`}>
            <DynamicHeading
              content={[
                {
                  title: subtitle,
                  color: "color-white",
                },
              ]}
              headingTag="p"
              className="mb-0 f-4"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePageRewardsVouchers
