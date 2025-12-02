import React from "react"
import { Metadata } from "next"

import styles from "./page.module.scss"
import generateMetaData from "@/src/utils/metaData"

import DynamicHeading from "@/src/components/dynamic-heading"
import CustomBreadcrumb from "@/src/components/breadcrumb"

export const metadata: Metadata = generateMetaData({
  title: "Terms and Conditions (Prepaid Program): EnKash",
  description:
    "Understand the specific terms for issuing and using EnKash prepaid instruments.",
  alternates: {
    canonical: `${process.env.URL}/policies/prepaid-program/tnc`,
  },
})

const CustomerOnboarding = (): React.JSX.Element => {
  //

  return (
    <>
      <div className={styles.parent_container}>
        <div className="max-w-auto  position-relative ">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Policies", url: "/#" },
                {
                  name: "Prepaid Program",
                  url: "/policies/prepaid-program",
                },
                {
                  name: "Terms and Conditions ",
                  url: "/policies/prepaid-program/tnc",
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
                            title:
                              "Prepaid Payment Instruments (PPI) Terms and Conditions",
                            color: "color-equity-blue",
                          },
                        ]}
                        headingTag="h1"
                        className="f-5 text-center "
                      />
                    </div>
                    <div className="word-to-html-null mb-5">
                      <h5 className="c15 mt-6 pb-4">
                        Last Updated On: 30th October 2025
                      </h5>
                      <h5 className="c15 mt-6">1. INTRODUCTION</h5>
                      <p>
                        These Terms and Conditions (“Terms and Conditions” or
                        “T&C”) govern the issuance and use of Prepaid Payment
                        Instruments (“PPIs”), including but not limited to
                        Prepaid Cards (physical or virtual) and Digital Wallets
                        (“Wallets”), collectively referred to as “PPI
                        Instruments,” issued by Nehat Tech Solutions Private
                        Limited (“PPI Issuer” or “EnKash”)..
                      </p>

                      <p>
                        By completing the sign-up process or using any PPI
                        issued by EnKash, You (“Customer,” “You,” or “Your”)
                        acknowledge that You have read, understood, and agreed
                        to these Terms and Conditions, together with the General
                        Terms and Privacy Policy available at{" "}
                        <a
                          href={`${process.env.NEXT_PUBLIC_URL}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          https://www.enkash.com/
                        </a>{" "}
                      </p>

                      <p>
                        In this document, “We,” “Us,” or “Our” refers to Nehat
                        Tech Solutions Private Limited.
                      </p>

                      <h5 className="c15 mt-6">2. DEFINITIONS</h5>

                      <p>
                        Unless otherwise specified, the terms used herein shall
                        have the meaning assigned under the RBI Master Direction
                        on Issuance and Operation of Prepaid Payment
                        Instruments, as amended from time to time.
                      </p>

                      <h5 className="c15 mt-6">3. ELIGIBILITY CRITERIA</h5>
                      <div className="container my-4">
                        <ul className="list-unstyled ms-3">
                          <li>
                            • PPIs may be issued to individuals or organizations
                            capable of entering into a legally binding contract
                            under Indian law.
                          </li>
                          <li>
                            • All PPIs shall be denominated in Indian Rupees
                            (INR) and used only within India.
                          </li>
                          <li>
                            • The Customer shall provide accurate and complete
                            personal information, including name, address, date
                            of birth, mobile number, and email ID.
                          </li>
                          <li>
                            • The Issuer reserves the right to verify or
                            authenticate Customer identity as per Know Your
                            Customer (KYC) and Anti-Money Laundering (AML)
                            regulations.
                          </li>
                        </ul>
                      </div>

                      <h5 className="c15 mt-6">4. TYPES OF PPIs</h5>

                      <div className="container my-4">
                        <h6>EnKash issues the following categories of PPIs:</h6>
                        <p>
                          1 {""}
                          <b>Prepaid Cards –</b> Physical or virtual cards used
                          for transactions at POS, e-commerce, or online
                          merchants.
                        </p>
                        <p>
                          2 {""} <b>Digital Wallets –</b> Reloadable wallet
                          accounts that allow Customers to store, manage, and
                          use funds for digital transactions, bill payments, or
                          linked card spending.
                        </p>
                        <p>
                          3 {""} <b>Meal and Fuel Cards –</b> Restricted - use
                          PPIs issued for specific merchant categories such as
                          food and fuel, in accordance with RBI and tax
                          regulations.
                        </p>
                        <p>
                          4 {""} <b>Gift PPIs – </b>Non-reloadable prepaid
                          instruments issued for gifting or promotional
                          purposes.
                        </p>
                        <p>
                          All PPIs are subject to the respective RBI transaction
                          and balance limits.
                        </p>
                      </div>

                      <h5 className="c15 mt-6">5. ISSUANCE AND USAGE OF PPI</h5>
                      <div className="container my-4">
                        <p>
                          i)All PPIs remain the{" "}
                          <strong>property of EnKash</strong> and are issued to
                          Customers for lawful use only.
                        </p>

                        <p>
                          ii)PPIs shall <strong>not be transferable</strong>{" "}
                          under any circumstances.
                        </p>

                        <p>
                          iii) No <strong> interest</strong> shall be payable on
                          the balance maintained in the PPI or Wallet.
                        </p>

                        <p>
                          iv)The Customer shall maintain the{" "}
                          <strong>confidentiality</strong> of login credentials,
                          PINs, and passwords and shall be fully responsible for
                          unauthorized use.
                        </p>

                        <p>
                          v) The Customer agrees to use the PPI strictly for
                          permissible purposes in accordance with RBI and
                          applicable law.
                        </p>

                        <p>
                          vi) EnKash may deactivate PPIs or Wallets that remain
                          inactive for <strong>one (1) year,</strong> following
                          prior intimation to the Customer.
                        </p>

                        <p>
                          <strong>vii) Meal Card</strong>
                        </p>
                        <p>
                          Reloadable only per the Company Policy (as defined in
                          the Glossary), and usable strictly for meal and food
                          purchases.
                        </p>

                        <p>
                          <strong>viii) Fuel Card</strong>
                        </p>
                        <p>
                          Restricted to fuel and automobile-related merchant
                          categories.
                        </p>

                        <p>
                          <strong>ix) Wallets</strong>
                        </p>
                        <p>
                          • Funds in Wallets may be used for digital purchases,
                          bill payments, or transfers to linked bank accounts,
                          subject to regulatory limits.
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        6. LOADING AND TRANSACTION LIMITS
                      </h5>

                      <div className="container my-4">
                        <p>
                          PPI load and transaction limits shall be as per RBI
                          classification:
                        </p>
                        <table className="table table-bordered table-striped">
                          <thead className=" ">
                            <tr>
                              <th className="text-center bg-secondary text-white">
                                PPI Type
                              </th>
                              <th className="text-center bg-secondary text-white">
                                Monthly Credit Limit
                              </th>
                              <th className="text-center bg-secondary text-white">
                                Annual Credit Limit
                              </th>
                              <th className="text-center bg-secondary text-white">
                                KYC Requirement
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Small PPI</td>
                              <td>₹10,000</td>
                              <td>₹1,20,000</td>
                              <td>Minimum KYC</td>
                            </tr>
                            <tr>
                              <td>Full-KYC PPI</td>
                              <td>₹2,00,000</td>
                              <td>As permitted</td>
                              <td>Full KYC</td>
                            </tr>
                            <tr>
                              <td>Gift PPI</td>
                              <td>₹10,000</td>
                              <td>Non-reloadable</td>
                              <td>Minimum KYC</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <h5 className="c15 mt-6">7. VALIDITY AND REDEMPTION</h5>
                      <div className="container my-4">
                        <p>
                          • All EnKash PPIs (including Wallets) are valid for at
                          least one (1) year from the date of last load/reload.
                        </p>

                        <p>
                          • Customers may request renewal or replacement of an
                          expired PPI (including Wallets) after verification and
                          payment of applicable fees.
                        </p>

                        <p>
                          • EnKash will notify Customers 45 days before PPI
                          expiry through SMS, email, or in-app alerts.
                        </p>

                        <p>
                          • Balances in expired PPIs shall not be forfeited and
                          may be refunded within three (3) years after expiry
                          upon Customer request.
                        </p>

                        <p>
                          • Refunds will be credited to the verified source bank
                          account following due diligence.
                        </p>

                        <p>
                          • Inactive PPIs may be reactivated post-verification
                          and KYC update.
                        </p>

                        <p>
                          • If the EnKash PPI program is wound up or directed by
                          RBI to cease operations, Customers may redeem the
                          outstanding balance to their verified bank account.
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        8. UNUTILIZED BALANCE AND REFUNDS AFTER EXPIRY
                      </h5>

                      <div className="container my-4">
                        <p>
                          • If your PPI or Wallet remains expired but holds an
                          unutilized balance, a monthly service fee of INR 500
                          will be charged post-expiry only if the balance
                          exceeds INR 1,000.
                        </p>

                        <p>
                          • For balances of INR 1,000 or less, this fee will be
                          waived to prevent small balance erosion.
                        </p>

                        <p>
                          • Customers can request a refund of the remaining
                          balance to the source account, or issuance of a new
                          PPI (subject to KYC).
                        </p>

                        <p>
                          • A reissuance fee of INR 250 will apply for a new
                          PPI.
                        </p>

                        <p>
                          • Refunds shall be processed within 15 Business Days
                          of a valid request, subject to verification.
                        </p>

                        <p>
                          • No extra fees apply beyond applicable taxes or
                          statutory levies.
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        9. LOST, STOLEN, OR MISUSED PPI/WALLET
                      </h5>
                      <div className="container my-4">
                        <p className="c3 pb-3">
                          If your Card or Wallet is lost, stolen, or
                          compromised:
                        </p>
                        <p>
                          • You must immediately report it to EnKash Customer
                          Care.
                        </p>

                        <p>
                          • Once reported, the PPI or Wallet will be blocked and
                          cannot be reused even if recovered.
                        </p>

                        <p>
                          • You will not be liable for unauthorized transactions
                          after reporting.
                        </p>
                      </div>
                      <h5 className="c15 mt-6">
                        10. DISPUTE RESOLUTION AND TRANSACTION ERRORS
                      </h5>

                      <div className="container my-4">
                        <p>
                          • Disputed transactions must be reported within 30
                          Business Days of the transaction date.
                        </p>

                        <p>
                          • For unauthorized or fraudulent transactions,
                          Customers may raise the dispute within 90 days.
                        </p>

                        <p>
                          • EnKash may, at its discretion, review disputes
                          reported after the standard period in cases of delayed
                          discovery or genuine hardship.
                        </p>

                        <p>
                          • All disputes shall be investigated and resolved as
                          per RBI timelines and communicated to Customers via
                          their registered channel.
                        </p>

                        <p>
                          • Disputes unresolved by EnKash may be escalated under
                          the RBI Integrated Ombudsman Scheme.
                        </p>
                      </div>

                      <h5 className="c15 mt-6">11. CHARGES AND FEES</h5>
                      <div className="container my-4">
                        <h6>Schedule of Standard Charges</h6>
                        <table className="table table-bordered table-striped">
                          <thead>
                            <tr>
                              <th className="text-center bg-secondary text-white">
                                Service Description
                              </th>
                              <th className="text-center bg-secondary text-white">
                                Charge (INR)
                              </th>
                              <th className="text-center bg-secondary text-white">
                                Applicability
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>Physical Card Issuance / Re-issuance</td>
                              <td>250*</td>
                              <td>Per card issued or replaced</td>
                            </tr>

                            <tr>
                              <td>Gift Card Reactivation</td>
                              <td>250*</td>
                              <td>Per reactivation</td>
                            </tr>

                            <tr>
                              <td>
                                ATM – Financial Transaction (Cash Withdrawal)
                              </td>
                              <td>25</td>
                              <td>Per transaction</td>
                            </tr>

                            <tr>
                              <td>
                                ATM – Non-Financial Transaction (PIN Change,
                                Balance Enquiry, Mini Statement)
                              </td>
                              <td>15 (inclusive of taxes)</td>
                              <td>Per transaction</td>
                            </tr>

                            <tr>
                              <td>Surcharge – Government Transactions</td>
                              <td>Up to 1% (capped at ₹10)*</td>
                              <td>As per RBI MDR cap</td>
                            </tr>

                            <tr>
                              <td>Surcharge – Fuel Transactions</td>
                              <td>Up to 1%*</td>
                              <td>As per acquirer rates</td>
                            </tr>

                            <tr>
                              <td>Surcharge – Railway Transactions</td>
                              <td>Up to ₹10*</td>
                              <td>As per merchant/acquirer policy</td>
                            </tr>
                          </tbody>
                        </table>
                        <p>
                          *All charges are exclusive of applicable taxes unless
                          stated otherwise. Example: For a ₹1,000 government
                          transaction, a surcharge of ₹10 + 18% GST (₹11.80) may
                          apply.
                        </p>
                        <strong>Notes:</strong>
                        <p>
                          • EnKash may waive any charge(s) wholly or partially
                          at its discretion.
                        </p>

                        <p>
                          • All charges are subject to revision based on
                          business or regulatory requirements and shall be
                          communicated via the EnKash website or official
                          notifications.
                        </p>

                        <p>
                          • Surcharges may vary by acquiring bank, network
                          partner, or merchant category.
                        </p>
                      </div>

                      <h5 className="c15 mt-6">12. BREACH</h5>
                      <div className="container my-4">
                        <p>
                          The Customer agrees to indemnify and hold EnKash
                          harmless against any loss, damage, penalty, cost, or
                          expense (including legal fees) arising from the
                          Customer’s fraud, negligence, misuse, or willful
                          default under these Terms or applicable law. This
                          indemnity shall not extend to losses caused by
                          EnKash’s negligence or system failures.
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        13. DISCLOSURES AND DATA PRIVACY
                      </h5>
                      <div className="container my-4">
                        <p>
                          • The Customer authorizes EnKash and its agents to
                          share essential information (identity, account, and
                          transaction details) with EnKash group companies,
                          affiliates, or service providers strictly for
                          operational purposes (e.g., settlement, compliance,
                          fraud monitoring).
                        </p>

                        <p>
                          • Any non-essential data sharing (for marketing,
                          analytics, or promotions) shall occur only with the
                          Customer’s explicit opt-in consent.
                        </p>

                        <p>
                          • All personal data will be handled in accordance with
                          the Digital Personal Data Protection Act, 2023, RBI
                          data privacy guidelines, and EnKash’s Privacy Policy.
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        14. CUSTOMER GRIEVANCE REDRESSAL
                      </h5>
                      <div className="container my-4">
                        <p>
                          <strong> Customer Support:</strong> 📞 +91-85304-90475
                          | 📧 support@enkash.com
                        </p>

                        <p>
                          Unresolved complaints may be escalated to the Nodal
                          Officer or to the RBI Ombudsman as per the Integrated
                          Ombudsman Scheme, 2021.
                        </p>
                      </div>

                      <h5 className="c15 mt-6">15. GLOSSARY</h5>
                      <div className="container my-4">
                        <p>
                          • Company Policy: Refers to the employer’s or
                          sponsoring organization’s internal guidelines
                          governing reload, usage, and eligibility of PPIs
                          (Cards or Wallets).
                        </p>

                        <p>
                          • Renewal / Revalidation: Extending the validity of a
                          PPI (e.g., Gift or Wallet) upon Customer request,
                          including reissuance of a new PPI with transferred
                          balance.
                        </p>
                        <p>
                          Customers are encouraged to refer to the{" "}
                          <a
                            href="/policies/prepaid-program/faq"
                            target="_blank"
                            rel="noreferrer"
                          >
                            FAQ
                          </a>{" "}
                          section on{" "}
                          <a
                            href={`${process.env.NEXT_PUBLIC_URL}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            https://www.enkash.com/
                          </a>{" "}
                          for practical guidance on validity, renewal, and
                          refund processes.
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

export default CustomerOnboarding
