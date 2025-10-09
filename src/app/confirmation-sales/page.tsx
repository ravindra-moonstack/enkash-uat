import React from "react"
import Image from "next/image"
import { Metadata } from "next"

import styles from "./page.module.scss"
import reachOutImg from "@/public/images/SubtractImg.webp"
import needIcon from "./img/need.svg"

import DynamicHeading from "@/components/dynamic-heading"
import generateMetaData from "@/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Thank You for Contact Our Sales Team",
  description:
    "Thanks for connecting! Our sales team will reach out soon to show how EnKash can power your business payments.",
  alternates: { canonical: `${process.env.URL}/confirmation-sales/` },
})

const ConfirmationSales = (): React.JSX.Element => {
  //

  return (
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
                      title: "Thank You for Reaching Out!",
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
                        "Your details have been submitted successfully. One of our experts will review your request and get in touch shortly.",
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
            <div className="d-block d-md-flex gap-3 pt-4">
              <Image
                src={needIcon}
                alt={needIcon}
                className={styles.group_logo}
                width={44}
                height={44}
              />
              <div>
                <DynamicHeading
                  content={[
                    {
                      title: "Need urgent assistance?",
                      color: "color-black underline f-6",
                    },
                  ]}
                  headingTag="p"
                  className="mb-2"
                />
                <div className="d-flex gap-3">
                  <DynamicHeading
                    content={[
                      {
                        title: "Reach us at",
                        color: "color-dark-grey d-block",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0"
                  />

                  <DynamicHeading
                    content={[
                      {
                        title: `${process.env.NEXT_PUBLIC_EMAIL}`,
                        color: "color-electric-green d-block",
                        link: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
                      },
                    ]}
                    headingTag="p"
                    className="mb-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationSales
