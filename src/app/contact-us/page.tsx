import React from "react"
import Image from "next/image"
import {
  DynamicHeading,
  FeatureCard,
  LogoSlider,
  TestimonialSlider,
} from "@/components"
import styles from "./page.module.scss"
import { help, location, login, logo, support } from "."

import { testimonialData } from "./data"

const Sales = () => {
  return (
    <>
      <div className={`${styles.talk_to_sales} `}>
        <div className="max-w-auto">
          <div className={`${styles.logo} `}>
            <Image src={logo} alt="card visual" className={styles.group_logo} />
          </div>
          <div className="row">
            <div className="col-md-5 col-12">
              <div className={styles.contactInfoCard}>
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
                      <div>
                        <DynamicHeading
                          content={[
                            {
                              title: "Need Support",
                              color: "color-black underline",
                            },
                          ]}
                          headingTag="h5"
                          className="f-6"
                        />
                        <DynamicHeading
                          content={[
                            {
                              title:
                                "Reach out to our support team directly for any queries.",
                              color: "color-dark-grey  d-block",
                            },
                          ]}
                          headingTag="p"
                          className="mb-0"
                        />
                        <a
                          href="mailto:support@enkash.com"
                          className="text-decoration-none"
                        >
                          <DynamicHeading
                            content={[
                              {
                                title: "support@enkash.com",
                                color: "color-electric-green d-block",
                              },
                            ]}
                            headingTag="p"
                            className="mb-0"
                          />
                        </a>
                      </div>
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
                      <div>
                        <DynamicHeading
                          content={[
                            {
                              title: "Join Our Team",
                              color: "color-black underline",
                            },
                          ]}
                          headingTag="h5"
                          className="f-6"
                        />
                        <DynamicHeading
                          content={[
                            {
                              title:
                                "Want to join our fast-growing team? Send your resume to",
                              color: "color-dark-grey  d-block",
                            },
                          ]}
                          headingTag="p"
                          className="mb-0"
                        />
                        <a
                          href="mailto:careers@enkash.com"
                          className="text-decoration-none"
                        >
                          <DynamicHeading
                            content={[
                              {
                                title: "careers@enkash.com",
                                color: "color-electric-green d-block",
                              },
                            ]}
                            headingTag="p"
                            className="mb-0"
                          />
                        </a>
                      </div>
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
                      <div>
                        <DynamicHeading
                          content={[
                            {
                              title: "Media Enquiry",
                              color: "color-black underline",
                            },
                          ]}
                          headingTag="h5"
                          className="f-6"
                        />
                        <DynamicHeading
                          content={[
                            {
                              title:
                                "For Media inquiries, kindly drop us an email",
                              color: "color-dark-grey  d-block",
                            },
                          ]}
                          headingTag="p"
                          className="mb-0"
                        />
                        <a
                          href="mailto:marketing@enkash.com"
                          className="text-decoration-none"
                        >
                          <DynamicHeading
                            content={[
                              {
                                title: "marketing@enkash.com",
                                color: "color-electric-green d-block",
                              },
                            ]}
                            headingTag="p"
                            className="mb-0"
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-7 col-12"></div>
          </div>
          <div className={`${styles.logoSlider} `}>
            <LogoSlider />
          </div>
        </div>
      </div>
      <div className={`${styles.location} `}>
        <div className="max-w-auto">
          <div>
            <div className={`${styles.trunstedBrands} text-center`}>
              <DynamicHeading
                content={[
                  {
                    title: "Trusted by ",
                    color: "color-equity-blue ",
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
                <TestimonialSlider testimonials={testimonialData} />
              </div>
            </div>
            <div className={`${styles.officeLocation} text-center`}>
              <DynamicHeading
                content={[
                  {
                    title: "Our Office Locations",
                    color: "color-white",
                  },
                ]}
                headingTag="h3"
                className="pb-4"
              />
              <div className="d-flex">
                <FeatureCard
                  description={
                    "91 Springboard BKC Kalina, 1st Floor & 2nd Floor, Kagalwala House, Plot No. 175, Behind Metro House CST Road, Kalina, Bandra Kurla Complex, Santacruz East, Mumbai, Maharashtra 400098"
                  }
                  titleHtml={"Mumbai (Registered Office)"}
                  cardImage={location}
                />
              </div>
            </div>

            <div>
              <hr className={`${styles.greyLine} `} />
              <div className="d-flex justify-content-between ">
                <div className={`${styles.termsCond} `}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Terms & Condition",
                        color: "color-dark-grey",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0"
                  />
                  <DynamicHeading
                    content={[
                      {
                        title: "Privacy Policy",
                        color: "color-dark-grey",
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
                        color: "color-dark-grey",
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
    </>
  )
}

export default Sales
