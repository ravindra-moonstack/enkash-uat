import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

// components
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import TestimonialSlider from "@/src/components/testimonial-slider"

import styles from "./page.module.scss"
import { help, login, logo, support } from "./img"
import { testimonialData } from "./data"
import generateMetaData from "@/src/utils/metaData"
import { getLoginUrl, getSupportUrl } from "@/src/utils/getSalesUrl"
import SalesFormWrapper from "@/src/components/form-wrapper/SalesFormWrapper"

export const metadata: Metadata = generateMetaData({
  title: "Contact EnKash Sales Get our Payment & Spend Solutions",
  description:
    "Connect with EnKash’s sales team to explore tailored payment, expense, and card management solutions. Get expert guidance to streamline your business finance operations.",
  alternates: {
    canonical: `${process.env.URL}/sales`,
  },
})

const loginUrl = getLoginUrl("/sales")
const supportUrl = getSupportUrl("/sales")

function Sales(): React.JSX.Element {
  //

  return (
    <>
      <div className={`${styles.talk_to_sales} `}>
        <div className="max-w-auto">
          <div className={`${styles.logo} `}>
            <Link href="/">
              <Image
                src={logo}
                alt="card visual"
                className={styles.group_logo}
              />
            </Link>
          </div>
          <div className="row">
            <div className="col-md-5 col-12 order-2 order-md-1">
              <div>
                <ul className='pt-4 pt-md-0'>
                  <li>
                    <div className="d-flex gap-3">
                      <Image
                        src={help}
                        alt="card visual"
                        className={styles.group_logo}
                        width={44}
                        height={44}
                      />
                      <DynamicHeading
                        content={[
                          {
                            title: "Need Help?",
                            color: "color-white",
                          },
                        ]}
                        headingTag="h5"
                        className="f-6"
                      />
                    </div>
                  </li>

                  <li>
                    <div className="d-flex gap-3">
                      <Image
                        src={support}
                        alt="card visual"
                        className={styles.group_logo}
                        width={44}
                        height={44}
                      />
                      <DynamicHeading
                        content={[
                          {
                            title: "I am an existing customer. ",
                            color: "color-white  d-block",
                          },
                          {
                            title: "Need Support",
                            color: "color-white underline f-7",
                            link: supportUrl,
                          },
                        ]}
                        headingTag="p"
                        className="mb-0"
                      />
                    </div>
                  </li>

                  <li>
                    <div className="d-flex gap-3">
                      <Image
                        src={login}
                        alt="card visual"
                        className={styles.group_logo}
                        width={44}
                        height={44}
                      />
                      <DynamicHeading
                        content={[
                          {
                            title: "I want to access my account.",
                            color: "color-white  d-block",
                          },
                          {
                            title: "Login",
                            color: "color-white underline f-7",
                            link: loginUrl,
                          },
                        ]}
                        headingTag="p"
                        className="mb-0"
                      />
                    </div>
                  </li>
                </ul>
              </div>

              <div className={`${styles.trunstedBrands} `}>
                <DynamicHeading
                  content={[
                    {
                      title: "Trusted by ",
                      color: "color-equity-blue d-block",
                    },
                    {
                      title: "5000+ Brands",
                      color: "color-equity-blue f-7",
                    },
                  ]}
                  headingTag="h2"
                  className="pb-4"
                />
                <div>
                  <TestimonialSlider
                    testimonials={testimonialData}
                    slidesToShow={1}
                  />
                </div>
              </div>
            </div>

            <div className={`${styles.salesForm} col-md-7 col-12 order-1 order-md-2 `}>
              <div className="contactFormWrapper flex flex-col gap-4">
                <DynamicHeading
                  content={[
                    { title: "New to EnKash? ", color: "color-dark-grey " },
                  ]}
                  headingTag="h5"
                  className="text-center "
                />

                <DynamicHeading
                  content={[
                    { title: "Talk", color: "color-black " },
                    { title: " to Sales", color: "color-dark-grey " },
                  ]}
                  headingTag="h1"
                  className="text-center py-3"
                />

                <p className="subtitle mb-4">
                  We just need a few quick details
                </p>
                <SalesFormWrapper />
              </div>
            </div>

            <div className="order-3">
              <div className={`${styles.logoSlider} `}>
                <LogoSlider />
              </div>
              <div>
                <hr className={`${styles.greyLine} `} />
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
          </div>
        </div>
      </div >
    </>
  )
}

export default Sales
