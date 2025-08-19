import React from "react"
import Image from "next/image" // Next.js optimized Image component
import styles from "./PaymentGatewayCard.module.scss"
import Link from "next/link"
import DynamicHeading from "../dynamicHeading/dynamic-heading"

interface PaymentGatewayCareProps {
  title: string
  subtitle: string
  icon: string // can be a local import or remote URL
  url: string // Destination URL
}

const PaymentGatewayCare: React.FC<PaymentGatewayCareProps> = ({
  title,
  subtitle,
  icon,
  url,
}) => {
  return (
    <>
      <div className={`${styles.coloctPaymentBoxInnerBox}`}>
        <Link href={url} className={`${styles.coloctPaymentBoxInnerLink}`}>
          {/* Title & Subtitle */}
          <div className="">
            <Image
              src={icon}
              alt="Icon"
              className="icon"
              width={40} // required in Next.js
              height={40} // required in Next.js
            />
          </div>
          <DynamicHeading
            content={[
              {
                title: title,
                color: "color-black",
              },
            ]}
            headingTag="h5"
            className="mb-1 f-5 mt-3"
          />
          <DynamicHeading
            content={[
              {
                title: subtitle,
                color: "color-black",
              },
            ]}
            headingTag="p"
            className="mb-0 f-4"
          />
        </Link>
      </div>
    </>
  )
}

export default PaymentGatewayCare
