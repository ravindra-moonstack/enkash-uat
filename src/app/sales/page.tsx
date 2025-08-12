import React from "react"
import Image from "next/image"
import { DynamicHeading, LogoSlider, TestimonialSlider } from "@/components"
import styles from "./page.module.scss"
import { help, login, logo, support } from "."

import { testimonialData } from "./data"

const Sales = () => {
  return (
    <>
      <div className={`${styles.talk_to_sales} `}>
        <div className="max-w-auto">
          <div className="row">
            <div className="col-md-5 col-12">
              <div className={`${styles.logo} `}>
                <Image
                  src={logo}
                  alt="card visual"
                  className={styles.group_logo}
                />
              </div>
              <div>
                <ul>
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
                            link: "/support",
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
                            link: "https://home.enkash.com/login",
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
            <div className="col-md-7 col-12"></div>

            <div>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Sales
