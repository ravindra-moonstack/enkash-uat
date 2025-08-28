import React from "react"
import Image from "next/image"
import {
  DynamicHeading,
  LocationCard,
  LogoSlider,
  TestimonialSlider,
} from "@/components"
import styles from "./page.module.scss"
import { location, logo } from "."
import { contactData, locationData, testimonialData } from "./data"
import generateMetaData from "@/common/utils/metaData"
import { Metadata } from "next"
import ContactForm from "@/components/contact-form/contactForm"
import Link from "next/link"

export const metadata: Metadata = generateMetaData({
  title: "Contact EnKash | Get Support or Speak to Our Team",
  description:
    "Have questions about EnKash products or services? Reach out to our team for sales inquiries, support, or partnership opportunities. We’re here to help your business grow.",
  alternates: {
    canonical: `${process.env.URL}/contact-us/`,
  },
})

const ContactUs = () => {
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
            <div className="col-md-5 col-12">
              <div className={styles.contactInfoCard}>
                <ul>
                  {contactData.map((item, idx) => (
                    <li key={idx}>
                      <div className="d-flex gap-3">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          className={styles.group_logo}
                          width={44}
                          height={44}
                        />
                        <div>
                          <DynamicHeading
                            content={[
                              {
                                title: item.title,
                                color: "color-black underline",
                              },
                            ]}
                            headingTag="h5"
                            className="f-6"
                          />
                          <DynamicHeading
                            content={[
                              {
                                title: item.subtitle,
                                color: "color-dark-grey d-block",
                              },
                            ]}
                            headingTag="p"
                            className="mb-0"
                          />
                          <a
                            href={`mailto:${item.email}`}
                            className="text-decoration-none"
                          >
                            <DynamicHeading
                              content={[
                                {
                                  title: item.email,
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
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-7 col-12">
              {" "}
              <ContactForm />
            </div>
          </div>

          <div className={styles.logoSlider}>
            <LogoSlider />
          </div>
        </div>
      </div>

      <div className={styles.location}>
        <div className="max-w-auto">
          <div className={`${styles.trunstedBrands} text-center`}>
            <DynamicHeading
              content={[
                { title: "Trusted by ", color: "color-equity-blue " },
                { title: "5000+ Brands", color: "color-equity-blue f-7" },
              ]}
              headingTag="h2"
              className="pb-4"
            />
            <TestimonialSlider
              testimonials={testimonialData}
              slidesToShow={3}
            />
          </div>

          <div className={`${styles.officeLocation} text-center`}>
            <DynamicHeading
              content={[
                { title: "Our Office Locations", color: "color-white" },
              ]}
              headingTag="h3"
              className="pb-4"
            />
            <div className="row">
              {locationData.map((loc, idx) => (
                <div className="col-md-4 col-12 my-3" key={idx}>
                  <LocationCard
                    description={loc.description}
                    titleHtml={loc.titleHtml}
                    title2={loc.title2}
                    cardImage={location}
                  />
                </div>
              ))}
            </div>
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

export default ContactUs
