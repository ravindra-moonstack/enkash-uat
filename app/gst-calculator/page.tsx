import Image from "next/image";
import { Metadata } from "next";
import { space } from "@/common/constant";
import styles from "./page.module.scss";
import Heading from "@/components/heading/heading";
import Header from "@/components/header/header";

import Footer from "@/components/footer/footer";
import { gstCalculatorBG, gstIconOne, gstIconWhite } from ".";
import GSTCalculator from "@/components/gst-calculator/gst-calculator";
import faqData from "../bolt/faq-data";
import generateMetaData from "@/common/utils/metaData";

export const metadata: Metadata = generateMetaData({
  title: "Buy Exclusive e Gift Cards & Brand Gift Vouchers Online | EnKash",
  description:
    "Buy e-Gifts cards online with our exclusively curated 400+ brand E-gift cards & vouchers available across various categories. Customize the Corporate gift vouchers without any Hassle with EnKash.",
  alternates: {
    canonical: "https://www.enkash.com/bolt/",
  },
  faqData: faqData,
});

const page = () => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <Header utmSource="gst_calculator" />
      <div className={`${styles.first_row} row color-white`}>
        <GSTCalculator />
      </div>

      <div className={styles.second_row}>
        <div className={` mx-auto ${styles.second_container}`}>
          <div className={styles.text_container}>
            <div className={`${styles.title_container} d-flex`}>
              <div className={styles.icon_div}>
                <Image src={gstIconOne} alt="" />
              </div>
              <div className={styles.title}>What is GST?</div>
            </div>
            <div className={styles.text}>
              The Goods and Services Tax (GST) is a comprehensive indirect tax
              levy on the supply of goods and services in India. It replaced
              many indirect taxes that were earlier levied by the central and
              state governments. GST aims to create a unified tax system for the
              entire country, promoting seamless trade and economic integration.
            </div>
          </div>

          <div className={styles.text_container}>
            <div className={`${styles.title_container} d-flex`}>
              <div className={styles.icon_div}>
                <Image src={gstIconOne} alt="" />
              </div>
              <div className={styles.title}>Types of GST</div>
            </div>
            <div className={styles.text}>
              <ul>
                <li>
                  <strong>Central Goods and Services Tax (CGST):</strong> This
                  applies to sales of goods and services within the same state.
                  The central government collects this tax.
                </li>
                <li>
                  <strong>State Goods and Services Tax (SGST):</strong> This
                  applies to sales of goods and services within the same state.
                  The state government where the sale happens collects this tax.
                </li>
                <li>
                  <strong>Integrated Goods and Services Tax (IGST):</strong>{" "}
                  Levied on interstate supplies of goods and services.
                </li>
                <li>
                  <strong>
                    Union Territory Goods and Services Tax (UTGST):
                  </strong>{" "}
                  Levied on the supply of goods and services within certain
                  Union Territories of India. UTGST is levied in addition to
                  CGST and is similar to SGST levied by state governments.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.white_container}>
            <div className={`${styles.blue_strip} d-flex`}>
              <div className={`${styles.blue_icon}`}>
                <Image src={gstIconWhite} alt="" />
              </div>
              <div className={styles.blue_title}>How is GST Calculated?</div>
            </div>
            <div className={styles.text_container_white}>
              <div>
                <p>
                  <strong>GST</strong> is a destination-based tax levied on the
                  final consumption of goods and services. The basic formula for
                  calculating <strong>GST</strong> is:
                </p>
                <p>
                  <strong>GST</strong> Amount = Taxable Value (Base Price) x{" "}
                  <strong>GST</strong> Rate (%)
                </p>
                <p>
                  However, depending on the transaction type (intrastate or
                  interstate) and whether the price is inclusive or exclusive of{" "}
                  <strong>GST</strong>, the calculation might involve additional
                  steps. Our <strong>GST</strong> calculator handles these
                  complexities for you, providing the final <strong>GST</strong>{" "}
                  amount and breakdown.
                </p>
              </div>

              <div>
                <p>
                  <strong>GST Calculation Formula:</strong>
                </p>
                <p>
                  For a clearer understanding, here's a breakdown of the{" "}
                  <strong>GST</strong> calculation formula based on the
                  scenario:
                </p>
                <ul>
                  <li>
                    <strong>
                      Calculating GST on the base price (exclusive of GST):
                    </strong>
                  </li>
                  <ul>
                    <li>
                      <strong>GST</strong> Amount = (Taxable Value x{" "}
                      <strong>GST Rate %</strong>)
                    </li>
                    <li>
                      Total Price = Taxable Value + <strong>GST</strong> Amount
                    </li>
                  </ul>
                  <li>
                    <strong>
                      Calculating the base price from a price inclusive of GST:
                    </strong>
                  </li>
                  <ul>
                    <li>
                      <strong>GST</strong> Amount = Taxable Value – [Taxable
                      Value x (100/(100+<strong>GST</strong>%))]
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.text_container}>
            <div className={`${styles.title_container} d-flex`}>
              <div className={styles.icon_div}>
                <Image src={gstIconOne} alt="" />
              </div>
              <div className={styles.title}>
                How to Use Our GST Calculation Tool?
              </div>
            </div>
            <div className={styles.text}>
              Using our GST calculator is simple and straightforward. Here's a
              quick guide:
              <ul className="mt-3">
                <li>
                  If you are a Proprietor/Business, in the designated field,
                  enter the base price of your good or service
                </li>
                <li>
                  Choose the applicable GST rate from the dropdown menu (e.g.,
                  5%, 12%, 18%, 28%)
                </li>
                <li>
                  Indicate whether the price you entered is inclusive or
                  exclusive of GST
                </li>
                <li>
                  Add the profit ratio if you want to see the profit amount.
                </li>
              </ul>
              Our GST calculator will instantly display the total GST payable on
              the transaction along with CGST, SGST (or IGST for interstate
              transactions). Businesses can also see their profit margin (if
              entered).
            </div>
          </div>

          <div className={styles.text_container}>
            <div className={`${styles.title_container} d-flex`}>
              <div className={styles.icon_div}>
                <Image src={gstIconOne} alt="" />
              </div>
              <div className={styles.title}>Why Choose Our GST Calculator?</div>
            </div>
            <div className={styles.text}>
              <ul>
                <li>
                  <strong>Free & Easy-to-Use:</strong> No fees or registration
                  required. Simply enter your details and get instant results.
                </li>
                <li>
                  <strong>Accurate Calculations:</strong> Our calculator
                  utilizes reliable algorithms to ensure accurate GST
                  calculations.
                </li>
                <li>
                  <strong>Detailed Breakdown:</strong> See the breakdown of
                  CGST, SGST, or IGST applicable to your transaction.
                </li>
                <li>
                  <strong>User-Friendly Interface:</strong> Our calculator is
                  designed for ease of use with clear instructions and a simple
                  interface.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer utmSource="Bolt" />
    </div>
  );
};

export default page;
