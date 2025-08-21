import React from "react"
import Image from "next/image"
import { DynamicHeading, LogoSlider, SupportCard } from "@/components"
import styles from "./page.module.scss"
import { location, logo } from "."
import {  locationData } from "./data"
import generateMetaData from "@/common/utils/metaData"
import { Metadata } from "next"
import SupportForm from "@/components/support-form/supportForm"

export const metadata: Metadata = generateMetaData({
  title: "EnKash Support Center | Get Help with Products & Services",
  description:
    "Need assistance with EnKash? Access FAQs, user guides, and expert support for payments, cards, expenses, integrations, and more—all in one place.",
  alternates: { canonical: "https://www.enkash.com/support/" },
})

const Suppport = () => {
  return (
    <>
      <div className={styles.talk_to_sales}>
        <div className="max-w-auto">
          <div className={styles.logo}>
            <Image src={logo} alt="card visual" className={styles.group_logo} />
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
