import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

import styles from "./page.module.scss"

// components

import {
  DynamicHeading,
  LogoSlider,
  SupportCard,
  SupportForm,
} from "@/src/components"
import { location, logo } from "."

// helpers
import { locationData } from "./data"
import generateMetaData from "@/src/common/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "EnKash Support Center | Get Help with Products & Services",
  description:
    "Need assistance with EnKash? Access FAQs, user guides, and expert support for payments, cards, expenses, integrations, and more—all in one place.",
  alternates: { canonical: `${process.env.URL}/support/` },
})

const Suppport = (): React.JSX.Element => {
  //

  return (
    <>
      <div className={styles.talk_to_sales}>
        <div className="max-w-auto">
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src={logo}
                alt="card visual"
                className={styles.group_logo}
              />
            </Link>
          </div>

          <div className="row">
            <div className="col-md-5 col-12"></div>
            <div className="col-md-7 col-12">
              <SupportForm />
              <div>
                <div className="row">
                  {locationData.map((loc, idx) => (
                    <div className="col-md-6 col-12 my-3" key={idx}>
                      <SupportCard
                        description={loc.description}
                        titleHtml={loc.titleHtml}
                        title2={loc.title2}
                        cardImage={location}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.trunstedBrands} text-center`}>
            <DynamicHeading
              content={[
                { title: "Trusted by ", color: "color-equity-blue " },
                { title: "5000+ Brands", color: "color-equity-blue f-7" },
              ]}
              headingTag="h2"
              className="pb-4"
            />
          </div>
          <div className={styles.logoSlider}>
            <LogoSlider />
          </div>
          <hr className={styles.greyLine} />
          <div className={`${styles.copyright} `}>
            <div className={`${styles.termsCond} `}>
              <DynamicHeading
                content={[
                  {
                    title: "Terms & Condition",
                    color: "color-grey-100",
                    link: "/policies/tnc",
                  },
                ]}
                headingTag="p"
                className="mb-0"
              />
              <DynamicHeading
                content={[
                  {
                    title: "Privacy Policy",
                    color: "color-grey-100",
                    link: "/policies/privacy-policy",
                  },
                ]}
                headingTag="p"
                className="mb-0"
              />
            </div>
            <div>
              <DynamicHeading
                content={[
                  {
                    title:
                      "Copyright © 2025 | Nehat Tech Solutions Pvt. Ltd. All right reserved.",
                    color: "color-grey-100",
                  },
                ]}
                headingTag="p"
                className="mb-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Suppport
