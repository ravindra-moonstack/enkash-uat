import React from "react"
import styles from "./page.module.scss"
import Heading from "@/components/heading/heading"
import Header from "@/components/header/header"
import { Footer } from "@/components"
import StructuredData from "@/components/head/structuredData"
import contactUs from "./img/contact.svg"
import Image from "next/image"
import SalesForm from "../sales/sales-form"
import ContactCard from "@/components/contact-card/contact-card"
import location from "./img/location.svg"
import vector from "./img/effect.svg"
import generateMetaData from "@/common/utils/metaData"
import { Metadata } from "next"

export const metadata: Metadata = generateMetaData({
  title: "Contact Us | EnKash",
  description:
    "Have questions or want to know more about EnKash? Talk to us today",
  alternates: {
    canonical: "https://www.enkash.com/contact-us/",
  },
})
const page = () => {
  return (
    <div>
      <Header />
      <div className={`bg-indi-volt color-white ${styles.container} `}>
        <div
          className={` row  align-items-center color-white bg-indi-volt ${styles.contactContainer} `}
        >
          <div
            className={`col-md-6 col-12 d-flex flex-column text-center text-md-start`}
          >
            <Heading title="Let’s " size="h0" />
            <Heading title="Connect" size="h0" />
            <Heading
              title="Have a question or need help? Let’s talk"
              size="h6"
              weight="5"
            />
          </div>

          <div className={`col-6 text-end `}>
            <Image
              src={contactUs}
              alt="contact us"
              className={`desktop-only ${styles.contactImg}`}
              loading="lazy"
            />
          </div>
        </div>{" "}
      </div>

      <div className={` py-0 ${styles.container} ${styles.salesForm}`}>
        <div className={styles.inner_container}>
          <SalesForm />
        </div>

        <div className={styles.bgGradient}>
          <Image src={vector} alt="contact us" />
        </div>
      </div>

      <div className={styles.partner}>
        <div className="col-12 col-xl-8 mx-auto mx-xl-0">
          <div className={styles.grid}>
            <ContactCard
              title="For existing "
              titleSecond="customers"
              description="Reach out to our support team directly for any queries."
              email={["support@enkash.com"]}
              phone="+91 8530490475"
            />
            <ContactCard
              title="Become a "
              titleSecond="Partner"
              description="Want to become a payment gateway partner? Connect with us"
              email={["pgsales@enkash.com"]}
              phone="+91 8923723793"
            />
            <ContactCard
              title="Media ​"
              titleSecond="Enquiries"
              description="For Media inquiries, kindly drop us an email "
              email={["marketing@enkash.com"]}
            />
            <ContactCard
              title="Join "
              titleSecond="Our Team"
              description="Want to join our fast-growing team? Send your resume to"
              email={["careers@enkash.com"]}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.ourOffice}`}>
        <Heading title="Our Offices " size="h2" weight="6" />

        <div className={`${styles.grid}`}>
          <div className={`${styles.address}`}>
            <div className={`${styles.locationIcon}`}>
              <Image
                src={location}
                alt="contact us"
                className={` ${styles.contactImg}`}
                width={40}
                height={40}
              />
            </div>

            <div className="d-flex flex-column">
              {" "}
              <Heading title="Mumbai" size="h2" weight="6" />
              <div className={` ${styles.spaceBox}`}>
                <Heading title="(Registered Office)" size="h4" weight="3" />
              </div>
            </div>
            <div className={` ${styles.addressDetail}`}>
              <Heading
                title="91 Springboard BKC Kalina, 1st Floor & 2nd Floor, Kagalwala House, Plot No. 175, Behind Metro House CST Road, Kalina, Bandra Kurla Complex, Santacruz East, Mumbai, Maharashtra 400098"
                size="h5"
                weight="4"
                useH2TagInHtml={true}
              />
            </div>
          </div>

          <div className={`${styles.address}`}>
            <div className={`${styles.locationIcon}`}>
              <Image
                src={location}
                alt="contact us"
                className={` ${styles.contactImg}`}
                width={40}
                height={40}
              />
            </div>

            <div className="d-flex flex-column">
              {" "}
              <Heading title="Gurugram" size="h2" weight="6" />
              <div className={` ${styles.spaceBox}`}></div>
            </div>
            <div className={` ${styles.addressDetail}`}>
              <Heading
                title="3rd Floor, Beyond Just Work, Plot No. 378-379, Udyog Vihar Phase 4
              Rd, near Nokia Building, Electronic City, Phase IV, Udyog Vihar,
              Sector 19, Gurugram, Haryana 122015"
                size="h5"
                weight="4"
                useH2TagInHtml={true}
              />
            </div>
          </div>

          <div className={`${styles.address}`}>
            <div className={`${styles.locationIcon}`}>
              <Image
                src={location}
                alt="contact us"
                className={` ${styles.contactImg}`}
                width={40}
                height={40}
              />
            </div>

            <div className="d-flex flex-column">
              {" "}
              <Heading title="Pune" size="h2" weight="6" />
              <div className={` ${styles.spaceBox}`}></div>
            </div>
            <div className={` ${styles.addressDetail}`}>
              <Heading
                title="91 Springboard Business Hub Private Limited, Sadanand Business
              Center (SBC), 9th Floor NH 48 Pashan Highway Side Road, Baner,
              Pune, Maharashtra, 411045"
                size="h5"
                weight="4"
                useH2TagInHtml={true}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default page
