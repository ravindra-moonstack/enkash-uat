import React from "react"
import Image from "next/image"
import styles from "./HomePageRewardsVouchers .module.scss"
import Link from "next/link"
import DynamicHeading from "../dynamic-heading"

interface HomePageRewardsVouchersProps {
  title: string
  title2?: string
  subtitle: string
  icon?: string
  url?: string
  image?: string
  overlayColorClass?: string
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
  const content = (
    <div
      className={`${styles.rewardsVauchersBoxInnerBox} ${overlayColorClass || ""}`}
      style={{ backgroundImage: image ? `url(${image})` : undefined }}
    >
      <div className="icon-wrapper">
        {icon && (
          <Image
            src={icon}
            alt="Icon"
            className="icon"
            width={30}
            height={30}
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
                title: title2 || "",
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
  )

  return url ? (
    <Link href={url} className="text-decoration-none">
      {content}
    </Link>
  ) : (
    content
  )
}

export default HomePageRewardsVouchers
