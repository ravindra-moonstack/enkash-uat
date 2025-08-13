import React from "react"
import Image from "next/image" // Next.js optimized Image component
import styles from "./UtilityBillPayments.module.scss" // Import styles from a CSS/SCSS module
import Link from "next/link"
import DynamicHeading from "../dynamicHeading/dynamic-heading"

interface UtilityBillPaymentsProps {
  title: string
  subtitle: string
  womanImg: string // can be a local import or remote URL
  url: string // Destination URL
}

const UtilityBillPayments: React.FC<UtilityBillPaymentsProps> = ({
  title,
  subtitle,
  womanImg,
  url,
}) => {
  return (
    <>
      <div className={`${styles.makePaymentsBoxOuterBox}`}>
        <Link href={url} className={`${styles.makePaymentsBoxLinks}`}>
          <div className={`${styles.makePaymentsBoxInnerBox}`}>
            <div className={`${styles.makePaymentContent}`}>
              {/* Title & Subtitle */}
              <div className={`${styles.headings}`}>
                <DynamicHeading
                  content={[
                    {
                      title: title,
                      color: "color-black",
                    },
                  ]}
                  headingTag="h5"
                  className="f-5 mb-2"
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
            <div className={`${styles.makePaymentsBoxImage}`}>
              <Image
                src={womanImg}
                alt="Woman"
                className="woman-img"
                width={500} // required in Next.js
                height={400} // required in Next.js
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default UtilityBillPayments
