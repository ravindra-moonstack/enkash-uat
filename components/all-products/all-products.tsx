import React from "react"
import Image from "next/image"
import Link from "next/link"
import { link } from "fs"

import styles from "./all-products.module.scss"
import Heading from "../heading/heading"
import { space } from "@/common/constant"
import {
  autoCollect,
  instantSettlement,
  invoices,
  paymentButton,
  paymentLink,
  paymentPage,
  qrCode,
  reminderEngine,
} from "."
import QRCodes from "@/app/qr-code/page"
import Marquee from "react-fast-marquee"

const cardData = [
  {
    title: "Payment Link",
    description:
      "Collect payments across WhatsApp, SMS, Facebook, Twitter, and other platforms with no-code payment links.",
    image: paymentLink,
    link: "/payment-links/",
  },
  {
    title: "Payment Page",
    description:
      "Create custom-branded Payment Pages in minutes to accept payments online—no tech effort needed.",
    image: paymentPage,
    link: "/payment-page/",
  },
  {
    title: "Payment Button",
    description:
      "Integrate a pre-designed payment button to your website with a simple plug-and-play solution.",
    image: paymentButton,
    link: "/payment-button/",
  },
  {
    title: "QR Codes",
    description:
      "Secure, contactless payment with QR codes to enable businesses to accept instant transactions.",
    image: qrCode,
    link: "/qr-code/",
  },
  {
    title: "Auto Collect",
    description:
      "Accept NEFT, RTGS, and IMPS transfers using on-demand customer identifiers with automated reconciliation at scale.",
    image: autoCollect,
    link: "/auto-collect/",
  },
  {
    title: "Invoices",
    description:
      "Automate invoicing for recurring transactions, track sales and payments, and create bulk invoices with payment links.",
    image: invoices,
    link: "/digital-invoicing/",
  },
  {
    title: "Instant Settlement",
    description:
      "Access your funds instantly, skip standard settlement cycles, and gain better control over your cash flow.",
    image: instantSettlement,
    link: "/instant-settlement/",
  },
  {
    title: "Reminder Engine",
    description:
      "Eliminate manual reminders and effortlessly automate your business collections for smoother cash flow.",
    image: reminderEngine,
    link: "/collection-reminder/",
  },
]

export type AllProductsDataProp = {
  title: string
  description: string
  image: string
  link: string
}

export type AllProductsProp = {
  title?: string
  subtitle?: string
  data?: Array<AllProductsDataProp>
}

const AllProducts = ({
  title = "Check out our other payment products at",
  subtitle,
  data = cardData,
}: AllProductsProp): React.JSX.Element => {
  //

  return (
    <div>
      <div className={`${styles.integration_row} row   pt-md-5`}>
        <div
          className={`d-inline text-center pt-5 mb-5 mb-md-2 px-3 px-md-5 ${styles.title_container}`}
        >
          <Heading title={title} color="black" size="h1" weight="6" />
          {subtitle && (
            <Heading
              title={`${space}${subtitle}`}
              color="equity-blue"
              size="h1"
              weight="6"
            />
          )}
        </div>

        <div className={`${styles.container}`}>
          <Marquee speed={70} pauseOnClick={true}>
            {data?.map((card, index) => (
              <div
                key={index}
                className={`${styles.card} col-md-4 ${
                  index % 2 !== 0 ? styles.card_white_bg : ""
                }`}
              >
                <div className={styles.iconContainer}>
                  <Image src={card.image} width={50} alt="icon" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className={styles.cta_button}>
                  <Link href={card.link}>Learn More</Link>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default AllProducts
