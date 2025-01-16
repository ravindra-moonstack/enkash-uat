import React from "react";
import styles from "./all-products.module.scss";
import Heading from "../heading/heading";
import { space } from "@/common/constant";
import Image from "next/image";
import {
  autoCollect,
  instantSettlement,
  invoices,
  paymentButton,
  paymentLink,
  paymentPage,
  qrCode,
  reminderEngine,
} from ".";
import Link from "next/link";
import { link } from "fs";
import QRCodes from "@/app/olympus/receivables/qr-codes/page";
import Marquee from "react-fast-marquee";

const cardData = [
  {
    title: "Payment Link",
    description:
      "Collect payments across WhatsApp, SMS, Facebook, Twitter, and other platforms with no-code payment links.",
    image: paymentLink,
    link: "/olympus/receivables/payment-links/",
  },
  {
    title: "Payment Page",
    description:
      "Create custom-branded Payment Pages in minutes to accept payments online—no tech effort needed.",
    image: paymentPage,
    link: "/olympus/receivables/payment-page/",
  },
  {
    title: "Payment Button",
    description:
      "Integrate a pre-designed payment button to your website with a simple plug-and-play solution.",
    image: paymentButton,
    link: "/olympus/receivables/payment-button/",
  },
  {
    title: "QR Codes",
    description:
      "Secure, contactless payment with QR codes to enable businesses to accept instant transactions.",
    image: qrCode,
    link: "/olympus/receivables/qr-codes/",
  },
  {
    title: "Auto Collect",
    description:
      "Accept NEFT, RTGS, and IMPS transfers using on-demand customer identifiers with automated reconciliation at scale.",
    image: autoCollect,
    link: "/olympus/receivables/auto-collect/",
  },
  {
    title: "Invoices",
    description:
      "Automate invoicing for recurring transactions, track sales and payments, and create bulk invoices with payment links.",
    image: invoices,
    link: "/olympus/receivables/invoices/",
  },
  {
    title: "Instant Settlement",
    description:
      "Access your funds instantly, skip standard settlement cycles, and gain better control over your cash flow.",
    image: instantSettlement,
    link: "/olympus/receivables/instant-settlement/",
  },
  {
    title: "Reminder Engine",
    description:
      "Eliminate manual reminders and effortlessly automate your business collections for smoother cash flow.",
    image: reminderEngine,
    link: "/olympus/receivables/reminder-engine/",
  },
];

const AllProducts = () => {
  return (
    <div>
      <div className={`${styles.integration_row} row mt-5 pt-5`}>
        <div
          className={`d-inline text-center pt-5 mb-5 ${styles.title_container}`}
        >
          <Heading
            title="Check out our other payment products at"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}EnKash`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`${styles.container}`}>
          <Marquee speed={100} pauseOnClick={true}>
            {cardData.map((card, index) => (
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
  );
};

export default AllProducts;
