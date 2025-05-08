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

const page = () => {
  return (
    <div>
      <Header />
      <div className={`bg-indi-volt color-white ${styles.container} `}>
        <div
          className={` row  align-items-center color-white bg-indi-volt ${styles.contactContainer} `}
        >
          <div className={`col-6 d-flex flex-column`}>
            <Heading title="Let’s " size="h0" />
            <Heading title="Connect" size="h0" />
            <div className="d-flex mt-4 pe-5">
              <Heading
                title="Have a question or need help? Let’s talk"
                size="h6"
                weight="5"
              />
            </div>
          </div>
          <div className={`col-6  `}>
            <Image
              src={contactUs}
              alt="contact us"
              className={`desktop-only ${styles.contactImg}`}
              loading="lazy"
            />
          </div>
        </div>{" "}
      </div>
      <div className={` pt-0 ${styles.container}`}>
        <div className={styles.inner_container}>
          <SalesForm />
        </div>
      </div>
      <div className={styles.partner}>
        <div className="col-8">
          <div className={styles.grid}>
            <ContactCard
              title="Let's Connect"
              description="Reach out to us via email or phone for any inquiries."
              email={["hello@example.com", "support@example.com"]}
              phone="+91 9876543210"
            />
            <ContactCard
              title="Support"
              description="We're here to help with your queries."
              email={["support@example.com"]}
              phone="+91 9123456780"
            />
            <ContactCard
              title="Sales"
              description="Talk to our sales team."
              email={["sales@example.com"]}
            />
            <ContactCard
              title="Partnerships"
              description="Let’s grow together."
              email={["partners@example.com"]}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page
