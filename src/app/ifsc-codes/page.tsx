import React from "react"
import styles from "./page.module.scss"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import { bankCodesData, faqData, ifscData } from "./data"
import { Table } from "react-bootstrap"
import Image from "next/image"
import FaqSection from "@/src/components/faq-section"
import { Metadata } from "next"
import bgImg from "../../../public/images/ifscBg.webp"
import ChequeLeaf from "../../../public/images/ChequeLeaf.webp"
import InfographicIFSC from "../../../public/images/InfographicIFSC.webp"
import InfographicMICR from "../../../public/images/InfographicMICR.webp"
import IfscCode from "@/src/components/ifsc-code-list"
import IfscDetailCard from "@/src/components/ifsc-detail-card"

export const metadata: Metadata = {
  title: " IFSC Code: Search IFSC & MICR Code of Top Banks in India.",
  description:
    "Find IFSC and MICR codes of all Indian banks. Search by bank, state, district or branch to get accurate IFSC, branch address and transfer details instantly.",
  openGraph: {
    title: "  Search IFSC & MICR Code of Top Banks in India.",
    description:
      "Meta Description: Find IFSC and MICR codes of all Indian banks. Search by bank, state, district or branch to get accurate IFSC, branch address and transfer details instantly.",
    url: `${process.env.NEXT_PUBLIC_URL}/ifsc-codes`,
    type: "website",
    images: [`${process.env.NEXT_PUBLIC_URL}/images/GST_PREVIEW.webp`],
  },
}
const Ifsc = (): React.JSX.Element => {
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
              { name: " IFSC Codes", url: "/ifsc-codes" },
            ]}
            linkColor="allWhite"
          />
          <DynamicHeading
            content={[
              {
                title: "IFSC Codes ",
                color: "color-white f-7 d-block",
              },
              {
                title:
                  "List of IFSC Codes and MICR Codes of All Banks in India",
                color: "color-white f-2",
              },
            ]}
            headingTag="h1"
            className="text-center mt-3"
          />

          <IfscCode />
          <DynamicHeading
            content={[
              {
                title: "IFSC Codes of ",
                color: "color-white f-7 ",
              },
              {
                title: "Top Indian Banks",
                color: "color-white f-4",
              },
            ]}
            headingTag="h2"
            className="text-center mt-5"
          />
          <div className="container row g-3 my-4">
            {ifscData.map((bank, index) => (
              <div key={index} className="col-12 col-md-4 d-flex">
                <IfscDetailCard
                  bankLogo={bank.bankLogo}
                  bankName={bank.bankName}
                  ifsc={bank.ifsc}
                  micr={bank.micr}
                  state={bank.state}
                  district={bank.district}
                  branch={bank.branch}
                  address={bank.address}
                />
              </div>
            ))}
          </div>

          <div className={`bg-white   ${styles.gst}`}>
            <div className="d-flex">
              <span className={` ${styles.greenLine}`}></span>
              <div className="ps-3">
                <DynamicHeading
                  content={[
                    {
                      title: "What is an IFSC Code?",
                      color: "color-grey-200  text-decoration-none",
                      link: "https://www.enkash.com/resources/blog/what-is-ifsc-code",
                    },
                  ]}
                  headingTag="h5"
                  className={`mb-0  f-6 text-start text-decoration-none ${styles.ifscCode}`}
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "IFSC stands for Indian Financial System Code. It is an 11-character alphanumeric code o identify bank branches participating in NEFT, RTGS, and IMPS. Every bank branch has a unique IFSC code that helps the ",
                      color: "color-grey-200  ",
                    },
                    {
                      link: "https://www.rbi.org.in/",
                      title: "RBI ",
                    },
                    {
                      title: "ensure secure transactions.",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0 pt-3 text-start"
                />
              </div>
            </div>
            <div className="d-flex mt-5">
              <span
                className={` ${styles.greenLine} ${styles.greenLineHeight}`}
              ></span>
              <div className="ps-3">
                <DynamicHeading
                  content={[
                    {
                      title: "How to Find the IFSC Code of Any Bank",
                      color: "color-grey-200 ",
                    },
                  ]}
                  headingTag="h5"
                  className="mb-0  f-6 text-start"
                />
                <ul>
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Looking for your bank’s IFSC code? You can easily find it using multiple sources.",
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
                            "Cheque Book / Passbook: The IFSC code is printed near your account number and branch details, and you can find it on the Cheque Leaf.",
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
                            "Net Banking or Mobile App: Log in and check the Account Details.",
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
                            "RBI Official Directory: The Reserve Bank of India provides a verified list of IFSC codes for all banks and branches in India.",
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
                            "IFSC Code Finder Tool: Use our online IFSC Code Search to instantly get the correct IFSC and MICR code by entering your bank name, state, district, or branch",
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
          </div>

          <div className="table-responsive mt-5 max-w-auto">
            <DynamicHeading
              content={[
                {
                  title: "Locate the IFSC Code on the Cheque Leaf",
                  color: "color-grey-200 f-6 ",
                },
              ]}
              headingTag="h5"
              className="mb-4  f-6   text-start"
            />
            <div>
              <Image
                src={ChequeLeaf}
                alt="Cheque Leaf"
                className="object-fit-contain w-100 h-auto"
              />
            </div>
          </div>
          <div className={`bg-white mt-5 ${styles.gst}`}>
            <div className="d-flex">
              <span className={` ${styles.greenLine}`}></span>
              <div className="ps-3">
                <DynamicHeading
                  content={[
                    {
                      title: "IFSC Code Format",
                      color: "color-grey-200 ",
                    },
                  ]}
                  headingTag="h5"
                  className="mb-0  f-6 text-start"
                />

                <ul>
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Every bank branch in India has its unique IFSC code, which is used for secure online transactions. The IFSC code is an 11-character alphanumeric code that follows a fixed pattern:",
                        color: "color-grey-200  ",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0 pt-3 text-start"
                  />
                  <DynamicHeading
                    content={[
                      {
                        title: "AAAA0BBBBBB",
                        color: "color-electric-green",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0 pt-3 text-start"
                  />
                  <li>
                    <DynamicHeading
                      content={[
                        {
                          title: "AAAA ",
                          color: "color-grey-200  ",
                          className: "f-6",
                        },
                        {
                          title: "– Represents the ",
                          color: "color-grey-200  ",
                        },
                        {
                          title: "bank name ",
                          color: "color-grey-200  ",
                          className: "f-6",
                        },
                        {
                          title: "(first four letters)",
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
                          title: "0 ",
                          color: "color-grey-200  ",
                          className: "f-6",
                        },
                        {
                          title: "The ",
                          color: "color-grey-200  ",
                        },
                        {
                          title: "fifth character is always zero",
                          color: "color-grey-200  ",
                          className: "f-6",
                        },
                        {
                          title: ", reserved by the RBI",
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
                          title: "BBBBBB ",
                          color: "color-grey-200  ",
                          className: "f-6",
                        },
                        {
                          title: "– Indicates the ",
                          color: "color-grey-200  ",
                        },
                        {
                          title: "specific branch code",
                          color: "color-grey-200  ",
                          className: "f-6",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 pt-3 text-start"
                    />
                  </li>
                </ul>
                <DynamicHeading
                  content={[
                    {
                      title: "Example: ",
                      color: "color-grey-200  ",
                      className: "f-6",
                    },
                    {
                      title: "SBIN0000454 ",
                      color: "color-electric-green",
                    },
                    {
                      title: "— here, ",
                      color: "color-grey-200  ",
                    },
                    {
                      title: "SBIN ",
                      color: "color-grey-200  ",
                      className: "f-6",
                    },
                    {
                      title: "identifies State Bank of India, and ",
                      color: "color-grey-200  ",
                    },
                    {
                      title: "000454 ",
                      color: "color-grey-200  ",
                      className: "f-6",
                    },
                    {
                      title: "represents the branch code.",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0 pt-3 text-start"
                />

                <div className="w-100 py-3">
                  <Image
                    src={InfographicIFSC}
                    alt="Infographic showing ifsc"
                    className="object-fit-contain w-100 h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="d-flex pt-3">
              <span className={` ${styles.greenLine}`}></span>
              <div className="ps-3">
                <DynamicHeading
                  content={[
                    {
                      title:
                        "Electronic Funds Transfer in India using IFSC Code:",
                      color: "color-grey-200 ",
                    },
                  ]}
                  headingTag="h5"
                  className="mb-0  f-6 text-start"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "The IFSC code is used in three electronic fund transfer methods—NEFT, RTGS, and IMPS. Customers may simply move money across accounts with these kinds of electronic fund transfers.",
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
                        "Because fund transfers are only permitted if precise information, such as the payee's bank account number and IFSC code, is supplied, using electronic transfer systems reduces the chances of a transaction going wrong.",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0 pt-3 text-start"
                />
                <DynamicHeading
                  content={[
                    {
                      title: "NEFT",
                      link: "https://www.enkash.com/resources/blog/neft-timings",
                    },
                    {
                      title:
                        "- NEFT stands for National Electronic Fund Transfer. It deals with moving money from one bank account to another. In India, this method of transferring money is widely used. In order to guarantee the safe transfer of funds between bank accounts, IFSC codes must be appropriately used. The beneficiary name, account number, and account type must be provided in addition to the IFSC code. NEFT transactions are processed in half-hourly batches throughout the day.",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0 pt-3 text-start"
                />
                <DynamicHeading
                  content={[
                    {
                      title: "RTGS",
                      link: "https://www.enkash.com/resources/blog/what-is-rtgs-in-banking-full-form-meaning-process-and-key-features-in-india",
                    },
                    {
                      title:
                        "- The full form of RTGS is Real Time Gross Settlement. It is a well-liked method for transferring money quickly between banks without having to wait. Similar to NEFT, IFSC codes aid in accurately identifying the participating bank branches. High-value transactions often employ RTGS fund transfers, which are instantly cleared. The payee's name, the account number, the IFSC code, and the transaction amount are all important for the RTGS transaction.",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0 pt-3 text-start"
                />
                <DynamicHeading
                  content={[
                    {
                      title: "IMPS",
                      link: "https://www.enkash.com/resources/blog/imps-meaning-and-full-form-a-comprehensive-guide-to-imps-neft-and-rtgs",
                    },
                    {
                      title:
                        "- The most widely used is IMPS, which stands for Immediate Payment Service. Started in November 2010, it is a new alternative in India. Money may be moved immediately and across all major Indian banks using this service, which can be accessed online, through an ATM, or on a mobile device. This technique is known for being safe, quick, affordable, and unrestricted in terms of the maximum amount that may be moved. Banks typically allow ₹2 lakh, though each bank defines its own limit. An IFSC code is required to start an IMPS transfer.",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0 pt-3 text-start"
                />
              </div>
            </div>
            <div className="d-flex pt-3">
              <span className={` ${styles.greenLine}`}></span>
              <div className="ps-3">
                <DynamicHeading
                  content={[
                    {
                      title: "What is MICR Code and How It Differs from IFSC",
                      color: "color-grey-200 ",
                    },
                  ]}
                  headingTag="h5"
                  className="mb-0 f-6  text-start"
                />
                <DynamicHeading
                  content={[
                    {
                      title: "The",
                      color: "color-grey-200  ",
                    },
                    {
                      title: " MICR Code ",
                      color: "color-grey-200  ",
                      link: "https://www.enkash.com/resources/blog/what-is-micr-full-form-meaning-micr-code-in-banking-and-cheque-explained",
                    },
                    {
                      title:
                        "(Magnetic Ink Character Recognition Code) is a 9-digit numeric code printed on cheques to speed up and authenticate the processing of cheques. It uniquely identifies a bank branch, similar to the IFSC code, but serves a different purpose.",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="p"
                  className="mb-2 pt-3 text-start"
                />

                <DynamicHeading
                  content={[
                    {
                      title: "Structure of a MICR Code",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="h5"
                  className="mb-0 pt-3 text-start"
                />
                <DynamicHeading
                  content={[
                    {
                      title: "Example MICR: ",
                      color: "color-grey-200  ",
                    },
                    {
                      title: "400002103",
                      color: "color-electric-green  ",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0 pt-3 text-start"
                />

                <div className="w-100  py-3">
                  <Image
                    src={InfographicMICR}
                    alt="Cheque Leaf"
                    className="object-fit-contain w-100 h-auto"
                  />
                </div>
                <DynamicHeading
                  content={[
                    {
                      title: "Find a bank check's MICR code:",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="h5"
                  className="mb-0 pt-3 text-start"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "This appears beside the check number. A magnetic character ink reader is the only device that can read the MICR code, which is presented in a different font and ink than the check number.",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="p"
                  className="mb-2 pt-3 text-start"
                />
                <DynamicHeading
                  content={[
                    {
                      title: "Benefits of MICR Code",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="h5"
                  className="mb-0 pt-3 text-start"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "The use of unique magnetic ink and character recognition(MICR) technology assists banks in processing checks swiftly and safely. This enables automated cheque clearing, reducing manual intervention and errors.",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0 pt-3 text-start"
                />
                <ul>
                  <li>
                    <DynamicHeading
                      content={[
                        {
                          title:
                            "Faster Cheque Clearance: Enables quick and automated cheque processing.",
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
                            "High Accuracy: Reduces manual errors during cheque verification.",
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
                            "Enhanced Security: Helps identify fake or tampered cheques.",
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
                            "Nationwide Standardization: Ensures uniform banking operations across all branches.",
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
                            "Reliable Fund Settlement: Speeds up interbank cheque transfers and payments.",
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
            <div className="d-flex pt-3">
              <span className={` ${styles.greenLine}`}></span>
              <div className="ps-3">
                <DynamicHeading
                  content={[
                    {
                      title:
                        "How to Transfer Money Using the IFSC Code of a Bank Account",
                      color: "color-grey-200 ",
                    },
                  ]}
                  headingTag="h5"
                  className="mb-0  f-6 text-start"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "You can easily transfer money online using the IFSC (Indian Financial System Code) through NEFT, RTGS, or IMPS.",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="p"
                  className="mb-2 pt-3 text-start"
                />
                <DynamicHeading
                  content={[
                    {
                      title: "Steps to Transfer Money Using IFSC Code:",
                      color: "color-grey-200 ",
                    },
                  ]}
                  headingTag="h6"
                  className="mb-0 pt-3 text-start"
                />
                <ol>
                  <li>
                    <DynamicHeading
                      content={[
                        {
                          title:
                            "Log in to your internet or mobile banking account.",
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
                            "Add a beneficiary by submitting their name, account number, and the IFSC code.",
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
                            "Choose the transfer mode – NEFT, RTGS, or IMPS.",
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
                            "Enter the amount and confirm the transaction.",
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
                            "The money is securely transferred to the recipient's account based on the selected mode.",
                          color: "color-grey-200  ",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 pt-3 text-start"
                    />
                  </li>
                </ol>
              </div>
            </div>
            <div className="table-responsive mt-5 max-w-auto">
              <DynamicHeading
                content={[
                  {
                    title: "Top Bank IFSC, MICR & SWIFT Codes List",
                    color: "color-grey-200 f-6 ",
                  },
                ]}
                headingTag="h5"
                className="mb-4  f-6   text-start"
              />
              <Table bordered  className="align-middle text-start">
                <thead className="bg-light bg-white-73">
                  <tr>
                    <th>Bank Name</th>
                    <th>IFSC Code</th>
                    <th>MICR Code</th>
                    <th>SWIFT Code</th>
                  </tr>
                </thead>
                <tbody>
                  {bankCodesData.map((bank, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <span>{bank.bankName}</span>
                        </div>
                      </td>
                      <td>{bank.ifsc}</td>
                      <td>{bank.micr}</td>
                      <td>{bank.swift}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="d-flex pt-3">
              <span className={` ${styles.greenLine}`}></span>
              <div className="ps-3">
                <DynamicHeading
                  content={[
                    {
                      title: "How to Register the Beneficiary Account?",
                      color: "color-grey-200 ",
                    },
                  ]}
                  headingTag="h5"
                  className="mb-0  f-6 text-start"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "You must register the beneficiary's account in your online or mobile banking site before making any online transaction. This guarantees that your money is safely sent to the right person and the transaction can be tapped easily.",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0 pt-3 text-start"
                />
                <ol className="ms-2">
                  <li>
                    <DynamicHeading
                      content={[
                        {
                          title:
                            "Log in to your internet or mobile banking account.",
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
                            "Go to the 'Funds Transfer' or 'Manage Beneficiary' section.",
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
                          title: "Click on 'Add New Beneficiary'.",
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
                            "Enter the beneficiary's name, account number, and IFSC code.",
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
                            "Verify details carefully and submit the request.",
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
                          title: "Your bank sends an OTP for confirmation.",
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
                            "Once verified, the beneficiary is activated (usually within 30 minutes to 4 hours, depending on the bank).",
                          color: "color-grey-200  ",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 pt-3 text-start"
                    />
                  </li>
                </ol>
                <DynamicHeading
                  content={[
                    {
                      title: "Note:",
                      color: "color-grey-200 f-6 ",
                    },
                    {
                      title:
                        " After activation, you can securely transfer money using NEFT, RTGS, or IMPS.",
                      color: "color-grey-200  ",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0 pt-3 text-start"
                />
              </div>
            </div>
            <div className="table-responsive mt-5 max-w-auto">
              <DynamicHeading
                content={[
                  {
                    title: "Difference Between MICR and IFSC Code",
                    color: "color-grey-200 f-6 ",
                  },
                ]}
                headingTag="h5"
                className="mb-4  f-6   text-start"
              />
              <Table bordered  className="align-middle text-start">
                <thead className="bg-light bg-white-73">
                  <tr>
                    <th>MICR Code</th>
                    <th>IFSC Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Magnetic Ink Character Recognition Code</td>
                    <td>Indian Financial System Code</td>
                  </tr>
                  <tr>
                    <td>9-digit numeric code</td>
                    <td>11-character alphanumeric code</td>
                  </tr>
                  <tr>
                    <td>Used for cheque clearing</td>
                    <td>Used for online fund transfers (NEFT, RTGS, IMPS)</td>
                  </tr>
                  <tr>
                    <td>Use for Offline transactions</td>
                    <td>Use for Online transactions</td>
                  </tr>
                  <tr>
                    <td>Cheques and bank documents</td>
                    <td>Cheques, passbooks, and online banking portals</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          <div className="mt-5">
            <FaqSection faqData={faqData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ifsc
