import React from "react"
import Image from "next/image" // Next.js optimized Image component
import styles from "./HomeReceivablesPayables.module.scss" // Import styles from a CSS/SCSS module
import Link from "next/link"
import DynamicHeading from "../dynamic-heading/dynamic-heading"

interface HomeReceivablesPayablesProps {
  title: string
  subtitle: string
  url: string
  topIcon?: string // Optional icon at the top
  bottomIcon?: string // Optional icon at the bottom
  borderColors?: string // Optional border color, default is #b3b3b3
}

const HomeReceivablesPayables: React.FC<HomeReceivablesPayablesProps> = ({
  title,
  subtitle,
  topIcon,
  bottomIcon,
  url,
}) => {
  return (
    <>
      <div className={`${styles.makePaymentsBoxOuterBox}`}>
        <Link href={url} className={`${styles.makePaymentsBoxLinks} `}>
          <div className={`${styles.makePaymentsBoxInnerBox}`}>
            <div className={`${styles.makePaymentContent}`}>
              {/* Title & Subtitle */}
              {topIcon && (
                <div className={`${styles.makePaymentsBoxIcons}`}>
                  <div className={`${styles.topIcon}`}>
                    <Image
                      src={topIcon}
                      alt="Top Icon"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              )}

              <div className={`${styles.headings}`}>
                <DynamicHeading
                  content={[
                    {
                      title: title,
                      color: "color-black",
                    },
                  ]}
                  headingTag="h5"
                  className="f-5 mb-2 mt-3"
                />
              </div>
              <DynamicHeading
                content={[
                  {
                    title: subtitle,
                    color: "color-black",
                  },
                ]}
                headingTag="p"
                className="mb-0"
              />
            </div>
            {/* Main Section */}
            {bottomIcon && (
              <div className={`${styles.makePaymentsBoxImage}`}>
                <Image
                  src={bottomIcon}
                  alt="Bottom Icon"
                  width={30}
                  height={30}
                />
              </div>
            )}
          </div>
        </Link>
      </div>
    </>
  )
}

export default HomeReceivablesPayables
