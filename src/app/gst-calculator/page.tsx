import React from "react"
import styles from "./page.module.scss"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import GstCalculator from "@/src/components/calculator"
import {
  faqData,
  goodsAndServiceData,
  gstData,
  newGstData,
  oldGstData,
} from "./data"
import { Table } from "react-bootstrap"
import bankIcon from "../../../public/svgs/bank-icon.svg"
import Image from "next/image"
import FaqSection from "@/src/components/faq-section"
import generateMetaData from "@/src/utils/metaData"
import { Metadata } from "next"
import bgImg from "../../../public/images/gstCalculatorBg.webp"
export const metadata: Metadata = generateMetaData({
  title: "Free GST Calculator | Calculate GST Online Free - EnKash",
  description:
    "Free online GST calculator to get accurate CGST, SGST & IGST breakdowns with inclusive and exclusive amounts.",
  alternates: {
    canonical: `${process.env.URL}/gst-calculator`,
  },
})
const Page = (): React.JSX.Element => {
  return (
    <div className={` ${styles.body_container} relative`}>
      <div className={`${styles.bgImg_container} absolute`}>
        <Image src={bgImg} alt={"bgImg"} />
      </div>
      <div className={`color-white ${styles.home_container}`}>
        <div className="max-w-auto">
          <CustomBreadcrumb
            items={[
              { name: "Home", url: "/" },
              { name: "GST Calculator", url: "/gst-calculator" },
            ]}
            linkColor="allWhite"
          />
          <DynamicHeading
            content={[
              {
                title: "Free GST Calculator. ",
                color: "color-white f-7 d-block",
              },
              {
                title: "Calculate GST Online Instantly",
                color: "color-white f-4",
              },
            ]}
            headingTag="h1"
            className="text-center"
          />
          <DynamicHeading
            content={[
              {
                title:
                  "Instantly calculate GST on your invoices, sales, or purchases in seconds.",
                color: "color-white subHeading",
              },
            ]}
            headingTag="p"
            className="mb-0 pt-3 text-center"
          />
          {/* GST Calculator Component */}
          <div className={` ${styles.gst_calclulator}`}>
            <GstCalculator />
          </div>
          <div className={`d-flex ${styles.exclusive}`}>
            <span className={` ${styles.greenLine}`}></span>

            <div className={`${styles.exclusive_container}`}>
              <DynamicHeading
                content={[
                  {
                    title:
                      "Use EnKash’s Free GST Calculator to find out your GST amount. Enter your amount and GST rate, and get instant results for both GST-inclusive and GST-exclusive values.",
                    color: "color-white ",
                  },
                ]}
                headingTag="p"
                className="mb-0 "
              />{" "}
            </div>
          </div>
          <div className={`bg-white rounded-4   ${styles.gst}`}>
            <div className="d-flex">
              <span className={` ${styles.greenLine}`}></span>
              <div className="ps-3">
                <DynamicHeading
                  content={[
                    {
                      title: "What is GST?",
                      color: "color-grey-200 subHeading",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0  f-6 text-start"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "The Goods and Services Tax (GST) is India’s indirect tax on the supply of goods and services. Introduced on 1 July 2017, GST replaced multiple indirect taxes such as VAT, Service Tax, Excise Duty, and Entry Tax.",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0 pt-3 text-start"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "It has streamlined India’s tax structure into “One Nation, One Tax”, ensuring transparency and uniformity across states.",
                      color: "color-grey-200 ",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0 pt-3 text-start"
                />
              </div>
            </div>
            <div className="d-flex mt-5">
              <span className={` ${styles.greenLine}`}></span>
              <div className="ps-3">
                <DynamicHeading
                  content={[
                    {
                      title: "How to Use the EnKash GST Tax Calculator",
                      color: "color-grey-200 subHeading",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0  f-6 text-start"
                />
                <ol>
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Calculating GST with EnKash is fast and simple — just follow these 3 steps:",
                        color: "color-grey-200  ",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0 pt-3 text-start"
                  />
                  <li>
                    <DynamicHeading
                      content={[
                        {
                          title: "Enter the amount of your goods or services.",
                          color: "color-grey-200  ",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 pt-3 text-start"
                    />
                  </li>
                  <li>
                    <DynamicHeading
                      content={[
                        {
                          title:
                            "Select the GST rate applicable to your category.",
                          color: "color-grey-200  ",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 pt-3 text-start"
                    />
                  </li>
                  <li>
                    <DynamicHeading
                      content={[
                        {
                          title:
                            "Choose Inclusive or Exclusive pricing to get the correct breakdown.",
                          color: "color-grey-200  ",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 pt-3 text-start"
                    />
                  </li>
                </ol>

                <ul className="pt-4 list-disc">
                  <DynamicHeading
                    content={[
                      {
                        title: "The calculator will instantly display:",
                        color: "color-grey-200  ",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0 pt-3 text-start"
                  />
                  <li>
                    <DynamicHeading
                      content={[
                        {
                          title: "GST amount",
                          color: "color-grey-200  ",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 pt-3 text-start"
                    />
                  </li>
                  <li>
                    <DynamicHeading
                      content={[
                        {
                          title: "Total invoice value (tax inclusive)",
                          color: "color-grey-200  ",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 pt-3 text-start"
                    />
                  </li>
                  <li>
                    <DynamicHeading
                      content={[
                        {
                          title: "Pre-GST or post-GST price",
                          color: "color-grey-200  ",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 pt-3 text-start"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex mt-5">
              <span className={` ${styles.greenLine}`}></span>
              <div className="ps-3">
                <DynamicHeading
                  content={[
                    {
                      title: "GST Calculation Formula",
                      color: "color-grey-200 subHeading",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0  f-6 text-start"
                />
                <ul>
                  <DynamicHeading
                    content={[
                      {
                        title: "When the amount does NOT include GST:",
                        color: "color-grey-200  ",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0 pt-3 text-start"
                  />
                  <li>
                    <DynamicHeading
                      content={[
                        {
                          title: "GST Amount = (Original Cost × GST Rate) /100",
                          color: "color-grey-200  ",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 pt-3 text-start"
                    />
                  </li>
                  <li>
                    <DynamicHeading
                      content={[
                        {
                          title: "Total Amount = Original Cost + GST Amount",
                          color: "color-grey-200  ",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 pt-3 text-start"
                    />
                  </li>
                </ul>

                <ul className="pt-4 list-disc">
                  <DynamicHeading
                    content={[
                      {
                        title: "When the amount includes GST:",
                        color: "color-grey-200  ",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0 pt-3 text-start"
                  />
                  <li>
                    <DynamicHeading
                      content={[
                        {
                          title:
                            "GST Amount = (Inclusive Price × GST Rate) / (100 + GST Rate)",
                          color: "color-grey-200  ",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 pt-3 text-start"
                    />
                  </li>
                  <li>
                    <DynamicHeading
                      content={[
                        {
                          title: "Base Price = Inclusive Price − GST Amount",
                          color: "color-grey-200  ",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 pt-3 text-start"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="table-responsive mt-5">
              <DynamicHeading
                content={[
                  {
                    title: "Types of GST in India",
                    color: "color-grey-200 f-6 ",
                  },
                ]}
                headingTag="h5"
                className="mb-4  f-6   text-start"
              />
              <Table bordered hover className="align-middle text-start mt-4">
                <thead className="bg-light bg-white-73">
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Levied By</th>
                  </tr>
                </thead>
                <tbody>
                  {gstData.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          {/* <Bank size={20} color="#0d6efd" /> */}
                          <Image src={bankIcon} alt={""} width={20} />
                          <span>{item.type}</span>
                        </div>
                      </td>
                      <td>{item.description}</td>
                      <td>{item.leviedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="pt-5">
              {goodsAndServiceData.map((item, index) => (
                <div key={index} className="mb-4">
                  <DynamicHeading
                    content={[
                      {
                        title: item.title,
                        color: "color-black f-6",
                      },
                    ]}
                    headingTag="h6"
                    className="mb-0 pt-4 f-6 text-start"
                  />
                  <DynamicHeading
                    content={[
                      {
                        title: item.description,
                        color: "color-grey-200",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0 pt-2  text-start "
                  />
                </div>
              ))}

              <DynamicHeading
                content={[
                  {
                    title: " Explore more about GST Reforms (2025)",
                    color: "color-equity-blue underline",
                    link: `${process.env.NEXT_PUBLIC_URL}/resources/blog/types-of-gst-rates-in-india-new-rate-list-and-updates`,
                  },
                ]}
                headingTag="p"
                className="mb-0 pt-2  text-start "
              />
            </div>
            <div className="table-responsive mt-5">
              <DynamicHeading
                content={[
                  {
                    title: "Old Vs New GST Slabs in India (FY 2025-26)",
                    color: "color-grey-200 mb-4  f-6",
                  },
                ]}
                headingTag="h5"
                className="mb-4  f-6 text-start"
              />
              <Table bordered hover className="align-middle text-start mt-4">
                <thead className="bg-light bg-white-73">
                  <tr>
                    <th>New GST Rate</th>
                    <th>Common Items/ Services</th>
                  </tr>
                </thead>
                <tbody>
                  {newGstData.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          {/* <Bank size={20} color="#0d6efd" /> */}

                          <span>{item.type}</span>
                        </div>
                      </td>
                      <td>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="table-responsive mt-5">
              <Table bordered hover className="align-middle text-start">
                <thead className="bg-light bg-white-73">
                  <tr>
                    <th>Old GST Rate</th>
                    <th>Common Items / Services</th>
                  </tr>
                </thead>
                <tbody>
                  {oldGstData.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <span>{item.type}</span>
                        </div>
                      </td>
                      <td>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <DynamicHeading
              content={[
                {
                  title:
                    "(Source: GST Council India – Central Board of Indirect Taxes and Customs as of October 2025)",
                  color: "color-black fs-10",
                },
              ]}
              headingTag="p"
              className="mb-0 pt-4   f-4 text-center fst-italic "
            />
          </div>
          <FaqSection faqData={faqData} />
        </div>
      </div>
    </div>
  )
}

export default Page
