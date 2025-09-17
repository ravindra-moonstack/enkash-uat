import React from "react"
import Image from "next/image"
import { Metadata } from "next"

import styles from "./page.module.scss"

import DynamicHeading from "@/src/components/dynamic-heading"
import reachOutImg from "@/public/images/SubtractImg.webp"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Thank You for Your Support Request",
  description:
    "Your support request is logged! Our team will contact you soon to resolve your issue quickly and efficiently.",
  alternates: { canonical: `${process.env.URL}/confirmation-support/` },
})

const ConfirmationSupport = (): React.JSX.Element => {
  //

  return (
    <div>
      <div className={`${styles.thankyouPage}`}>
        <div className="max-w-auto">
          <div className={`${styles.thankyouContainer}`}>
            <div className={`${styles.reachingOut}`}>
              <Image
                src={reachOutImg}
                alt="card visual"
                className={styles.group_logo}
              />
              <div className={`${styles.reachingOutText}`}>
                <div className="d-flex flex-column text-center">
                  <DynamicHeading
                    content={[
                      {
                        title: "Support Request Received",
                        color: "color-white f-5",
                      },
                    ]}
                    headingTag="h1"
                    className="f-5"
                  />
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Your request has been logged and assigned to our support team. We’ll get back to you shortly with a resolution or next steps.",
                        color: "color-white subHeading",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0 pt-2"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.maintain}`}>
              <DynamicHeading
                content={[
                  {
                    title: "In the Meantime…",
                    color: "color-black-200 subHeading",
                  },
                ]}
                headingTag="p"
                className="mb-0"
              />

              <ul className="pt-2">
                <li>
                  <DynamicHeading
                    content={[
                      {
                        title: "Explore our ",
                        color: "color-black-200",
                      },
                      {
                        title: "Product Suite",
                        color: "color-equity-blue f-7 underline",
                        link: "/products",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0"
                  />
                </li>
                <li>
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Read how businesses like yours scaled with us —  ",
                        color: "color-black-200",
                      },
                      {
                        title: "Success Stories",
                        color: "color-equity-blue f-7 underline",
                        link: "/resources/customer-stories/",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0"
                  />
                </li>
                <li>
                  <DynamicHeading
                    content={[
                      {
                        title: "Browse expert resources in our ",
                        color: "color-black-200",
                      },
                      {
                        title: "Learning Hub",
                        color: "color-equity-blue f-7 underline",
                        link: "/resources/blogs/",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationSupport
