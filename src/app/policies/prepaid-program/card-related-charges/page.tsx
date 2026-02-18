import React from "react"
import { Metadata } from "next"

import dynamic from "next/dynamic"

import styles from "./page.module.scss"
import generateMetaData from "@/src/utils/metaData"

// components
const DynamicHeading = dynamic(() => import("@/src/components/dynamic-heading"))
const CustomBreadcrumb = dynamic(() => import("@/src/components/breadcrumb"))

export const metadata: Metadata = generateMetaData({
  title: "Card Related Charges: EnKash",
  description:
    "Check details of applicable fees and charges for EnKash-issued cards.",
  alternates: {
    canonical: `${process.env.URL}/policies/prepaid-program/card-related-charges`,
  },
})

const CardRelatedCharges = () => {
  return (
    <>
      <div className={styles.parent_container}>
        <div className="max-w-auto  position-relative ">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Policies", url: "/policies" },
                {
                  name: "Prepaid Program",
                  url: "/policies/prepaid-program",
                },
                {
                  name: "Card Related Charges",
                  url: "/policies/prepaid-program/card-related-charges",
                },
              ]}
            />
          </div>
        </div>
        <div className="enkash-banking-maincontainer">
          <div className=" enkash-blog-detail  ">
            <div className={styles.inner_container}>
              <div className="row">
                <div className="col-md-12">
                  <div className="enkash-term-condtions">
                    <div className={styles.sectionTitle}>
                      <DynamicHeading
                        content={[
                          {
                            title: "Schedule of Card-Related Charges",
                            color: "color-equity-blue",
                          },
                        ]}
                        headingTag="h1"
                        className="f-5 text-center"
                      />
                    </div>
                    <div className="word-to-html-null mb-5">
                      <p className="c15 mt-6 pb-4 h5">
                        <strong>Last Updated On: 25th August 2025</strong>
                      </p>
                      <p className="c3 c9">
                        <span className="c15">
                          The following charges apply to the use of
                          EnKash-issued cards. By availing and using any EnKash
                          card product, the cardholder expressly agrees to the
                          fees, surcharges, and terms outlined below.
                        </span>
                      </p>
                      <div className="container my-4">
                        {/* Card Issuance & Maintenance Charges */}
                        <h2 className="mb-3 h5">
                          Card Issuance & Maintenance Charges
                        </h2>
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th>Particulars</th>
                              <th>Amount (INR)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Physical Card Issuance or Reissuance</td>
                              <td>₹250*</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Gift Card Reactivation</td>
                              <td>₹250*</td>
                            </tr>
                          </tbody>
                        </table>

                        <h2 className="mb-3 mt-4 h5">ATM Transaction Charges</h2>
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th>Particulars</th>
                              <th>Amount (INR)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>3</td>
                              <td>
                                Cash Withdrawal (ATM - Financial Transaction)
                              </td>
                              <td>₹25*</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>
                                PIN Change / Balance Enquiry / Mini Statement
                                (ATM - Non-Financial Transaction)
                              </td>
                              <td>₹15 (Inclusive of tax)</td>
                            </tr>
                          </tbody>
                        </table>

                        <h2 className="mb-3 mt-4 h5">
                          Industry Program Surcharges
                        </h2>
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th>Particulars</th>
                              <th>Charges</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>5</td>
                              <td>Transactions at Government Portals</td>
                              <td>2.5%* or ₹10*, whichever is higher</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>Fuel Transactions</td>
                              <td>1%*</td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>Railway Ticket Booking</td>
                              <td>₹10*</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h2 className="mb-3 mt-4 h5">
                        General Terms Applicable to Charges
                      </h2>

                      <div className="container mt-4">
                        <ul className="">
                          <li className="list-group-item">
                            <strong>A.</strong> All charges mentioned above are
                            subject to applicable taxes unless stated otherwise.
                          </li>
                          <li className="list-group-item">
                            <strong>B.</strong> EnKash reserves the right to
                            waive, modify, or revise any of the above charges at
                            its sole discretion without prior notice.
                          </li>
                          <li className="list-group-item">
                            <strong>C.</strong> Final surcharges and fees may
                            vary depending on the acquiring bank, payment
                            network rules, and merchant category.
                          </li>
                          <li className="list-group-item">
                            <strong>D.</strong> These charges may be revised
                            periodically in line with market dynamics,
                            regulatory changes, or internal pricing policies.
                          </li>
                          <li className="list-group-item">
                            <strong>E.</strong> Use of EnKash cards constitutes
                            acceptance of the latest applicable fee structure.
                          </li>
                        </ul>
                        <p>
                          For the latest version of these terms or any queries
                          regarding applicable charges, cardholders may contact
                          us at:
                          <a
                            className="c17"
                            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                          >
                            {process.env.NEXT_PUBLIC_EMAIL}
                          </a>
                        </p>
                        <p>
                          *Charges marked with an asterisk are exclusive of
                          applicable taxes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center">***** END OF POLICY *****</p>
        </div>
      </div>
    </>
  )
}

export default CardRelatedCharges
