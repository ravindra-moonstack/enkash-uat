/* eslint-disable react/no-unescaped-entities */
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
                              "Terms and Conditions for EnKash PPI Products (Wallets and Cards)",
                            color: "color-equity-blue",
                          },
                        ]}
                        headingTag="h1"
                        className="f-5 text-center "
                      />
                    </div>
                    <div className="word-to-html-null mb-5">
                      <h5 className="c15 mt-6 pb-4">
                        Last Updated On: 30th November 2025
                      </h5>
                      <h5 className="c15 mt-6">1. INTRODUCTION</h5>
                      <p>
                        These Terms and Conditions (“Terms and Conditions”,
                        “Terms” or “T&C”) govern the issuance and use of Prepaid
                        Payment Instruments (“PPIs”), including but not limited
                        to Prepaid Cards (physical or virtual) and Digital
                        Wallets (“Wallets”), collectively referred to as “PPI
                        Instruments” or “EnKash PPI Products”, issued by Nehat
                        Tech Solutions Private Limited (doing business as
                        EnKash) (“PPI Issuer”, “EnKash”, “We”, “Us”, “Our” or
                        “Company”).
                      </p>
                      <p>
                        The Company is incorporated under the Companies Act,
                        2013, with its registered office at 91 Springboard, 175,
                        Kagalwala House, 2nd Floor, Kalina, Santacruz (E),
                        Mumbai – 400 098, Maharashtra, India. We are authorised
                        by the Reserve Bank of India (“RBI”) vide Certificate of
                        Authorisation No. 216/2024 under the Payment and
                        Settlement Systems Act, 2007 (“PSSA”) to issue and
                        operate semi-closed PPIs in India, subject to the
                        guidelines and directions issued by RBI from time to
                        time, including the Master Direction on Prepaid Payment
                        Instruments dated August 27, 2021 (as amended). These
                        Terms are in compliance with Section 21 of the PSSA and
                        the RBI’s guidelines on Issuance and Operation of
                        Prepaid Payment Instruments in India.
                      </p>

                      <p>
                        By registering for, completing the sign-up process,
                        accessing, or using any EnKash PPI Products through our
                        website{" "}
                        <a
                          href={`${process.env.NEXT_PUBLIC_URL}`}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-break"
                        >
                          ( https://www.enkash.com/)
                        </a>{" "}
                        , mobile application (“EnKash Platform”), or any other
                        permitted channels, You (“Customer”, “You”, “Your” or
                        “User”) acknowledge that You have read, understood, and
                        agree to be bound by these Terms, together with our{" "}
                      </p>

                      <p>
                        General Terms, Privacy Policy (available at{" "}
                        <a
                          href=" https://www.enkash.com/policies/privacy-policy"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-break"
                        >
                          https://www.enkash.com/policies/privacy-policy
                        </a>{" "}
                      </p>
                      <p>
                        Grievance Redressal Policy (available at {""}
                        <a
                          href="https://www.enkash.com/policies/prepaid-program/grievance-policy"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-break"
                        >
                          https://www.enkash.com/policies/prepaid-program/grievance-policy
                        </a>{" "}
                        ), and any other policies incorporated herein by
                        reference.
                      </p>

                      <p>
                        These Terms constitute a legally binding electronic
                        contract between You and Us under the Information
                        Technology Act, 2000, and do not require any physical,
                        electronic, or digital signature. If You do not agree to
                        these Terms, please do not register for, access, or use
                        the EnKash PPI Products.
                      </p>

                      <p>
                        We reserve the right to amend these Terms at any time by
                        posting the updated version on the EnKash Platform. The
                        updated Terms shall take effect immediately upon
                        posting. It is Your responsibility to review these Terms
                        periodically. Your continued access or use of the EnKash
                        PPI Products after any changes constitutes Your
                        acceptance of the revised Terms. If You do not agree to
                        the changes, You may close Your account as per Section 9
                        below.
                      </p>

                      <p>
                        As long as You comply with these Terms, We grant You a
                        personal, non-exclusive, non-transferable, limited
                        privilege to avail the services offered through the
                        EnKash PPI Products.
                      </p>
                      <h5 className="c15 mt-6">
                        2. DEFINITIONS AND INTERPRETATION
                      </h5>
                      <p>
                        Unless the context otherwise requires, the following
                        terms shall have the meanings ascribed to them:
                      </p>
                      <ul className="list-unstyled ms-3">
                        <li>
                          • “Applicable Laws” means all applicable central,
                          state, and local laws, statutes, regulations, orders,
                          directives, guidelines, circulars, or notifications
                          issued by any governmental, regulatory, or statutory
                          authority, including but not limited to the PSSA,
                          Payment and Settlement Systems Regulations, 2008, RBI
                          Master Directions on PPIs, Prevention of Money
                          Laundering Act, 2002 (&quot;PMLA&quot;), and
                          Information Technology Act, 2000, as amended from time
                          to time.
                        </li>

                        <li>
                          • “Authorised Merchant” means any physical or online
                          merchant establishment in India that accepts payments
                          through the EnKash PPI Products.
                        </li>

                        <li>
                          • “EnKash PPI Products” means the semi-closed prepaid
                          payment instruments, including digital wallets and
                          physical/virtual prepaid cards, issued by Us under RBI
                          authorisation for payments for goods and services,
                          funds transfer, or other permitted activities within
                          India.
                        </li>

                        <li>
                          • “Force Majeure Event” means any event beyond our
                          reasonable control, including but not limited to acts
                          of God, war, riot, strike, lockout, fire, flood,
                          earthquake, pandemic, system failure, network
                          disruption, or regulatory changes.
                        </li>

                        <li>
                          • “Full-KYC PPI” means a PPI where You have completed
                          the full Know Your Customer (&quot;KYC&quot;) process
                          as per RBI guidelines, allowing higher limits and
                          additional features like funds transfer and cash
                          withdrawal.
                        </li>

                        <li>
                          • “KYC” means the Know Your Customer verification
                          process mandated by RBI, which may include
                          Aadhaar-based e-KYC, Video-based Customer
                          Identification Process (&quot;V-CIP&quot;), or
                          physical verification.
                        </li>

                        <li>
                          • “Minimum Details PPI” or “Small PPI” means a PPI
                          issued with minimum details (e.g., self-declaration
                          and OTP verification) and subject to lower transaction
                          limits, without full KYC.
                        </li>

                        <li>
                          • “PPI Balance” means the prepaid amount loaded into
                          Your EnKash PPI Products, available for Transactions.
                          No interest is payable on the PPI Balance.
                        </li>

                        <li>
                          • “PPI Holder” or “User” means the individual to whom
                          the PPI is issued.
                        </li>

                        <li>
                          • “Transaction” means any loading, reloading, payment,
                          funds transfer, withdrawal, refund, or other use of
                          the EnKash PPI Products.
                        </li>

                        <li>
                          • “User Account” means the account created by You on
                          the EnKash Platform to access and manage the EnKash
                          PPI Products.
                        </li>
                      </ul>

                      <p>
                        Unless otherwise specified, the terms used herein shall
                        have the meaning assigned under the RBI Master Direction
                        on Issuance and Operation of Prepaid Payment
                        Instruments, as amended from time to time.
                      </p>
                      <p>
                        <strong> Interpretation: </strong>
                        Headings are for convenience only and do not affect
                        interpretation. Words importing the singular include the
                        plural and vice versa. References to statutes include
                        amendments and re-enactments.
                      </p>

                      <h5 className="c15 mt-6">
                        3. ELIGIBILITY AND REGISTRATION
                      </h5>
                      <div className="container my-4">
                        <p>To be eligible to use the EnKash PPI Products:</p>
                        <ul className="list-unstyled ms-3">
                          <li>
                            • You must be a resident of India (or a foreign
                            national/NRI with valid documentation), at least 18
                            years of age, and competent to contract under the
                            Indian Contract Act, 1872.
                          </li>

                          <li>
                            • You must not be a Politically Exposed Person
                            (&quot;PEP&quot;) as defined by RBI.
                          </li>

                          <li>
                            • You must register on the EnKash Platform by
                            providing accurate personal information, including
                            Your name, mobile number, email address, date of
                            birth, and other details as prompted.
                          </li>

                          <li>
                            • For Small PPI, minimum details such as mobile
                            number verified via OTP and self-declaration of
                            identity are sufficient.
                          </li>

                          <li>
                            • For Full-KYC PPI, You must complete the KYC
                            process by providing valid Officially Valid
                            Documents (&quot;OVD&quot;) such as Aadhaar, PAN,
                            passport, voter ID, or driving license, along with
                            address proof. Verification may be through e-KYC
                            (Aadhaar OTP or biometric), V-CIP, or
                            physical/face-to-face methods. Non-face-to-face
                            onboarded accounts are subject to enhanced
                            monitoring and limits until full verification.
                          </li>

                          <li>
                            • If using Aadhaar OTP-based e-KYC in
                            non-face-to-face mode, You declare that no other
                            account has been or will be opened using this method
                            with Us or any other entity. We will send alerts and
                            OTPs only to the mobile number registered with
                            Aadhaar. If CDD is not completed within one year,
                            the PPI will be closed.
                          </li>

                          <li>
                            • We reserve the right to reject Your registration,
                            limit features, or suspend/terminate Your User
                            Account if the information provided is inaccurate,
                            incomplete, suspicious, or violates Applicable Laws
                            or Our policies.
                          </li>

                          <li>
                            • You represent and warrant that You are not barred
                            from using Our services under any Applicable Laws,
                            that You will not impersonate any person or entity,
                            and that all information provided is true, accurate,
                            and complete.
                          </li>

                          <li>
                            • By registering, You consent to Us sharing Your
                            data with regulatory authorities, such as CERSAI for
                            CKYCR (Central KYC Registry) updation, and
                            third-party service providers for verification and
                            service delivery.
                          </li>

                          <li>
                            • PPIs may be issued to individuals capable of
                            entering into a legally binding contract under
                            Indian law.
                          </li>

                          <li>
                            • All PPIs shall be denominated in Indian Rupees
                            (INR) and used only within India.
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
                          use funds for digital transactions, bill payments and
                          instore purchase.
                        </p>
                        <p>
                          3 {""} <b>Meal and Fuel Cards –</b> Restricted-use
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

                      <h5 className="c15 mt-6">
                        5. ISSUANCE, ACTIVATION AND VALIDITY OF PPI
                      </h5>
                      <div className="container my-4">
                        <ul className="list-unstyled ms-3">
                          <li>
                            i) Upon successful registration and verification
                            (KYC as applicable), We will issue the EnKash PPI
                            Products to You in digital form (wallet) or
                            physical/virtual card form.
                          </li>

                          <li>
                            ii) Physical cards will be delivered to Your
                            registered address upon request, subject to fees and
                            availability. You must activate the card via the
                            EnKash Platform using the procedure explained
                            therein. All transactions will be in Indian Rupees
                            (INR). International usage is not permitted.
                          </li>

                          <li>
                            iii) The PPI is non-transferable under any
                            circumstances and can only be used by You.
                          </li>

                          <li>
                            iv) We may refuse to issue or activate a PPI if We
                            suspect fraud, money laundering, or non-compliance
                            with Applicable Laws.
                          </li>

                          <li>
                            v) All PPIs remain the property of EnKash and are
                            issued to Customers for lawful use only.
                          </li>

                          <li>
                            vi) No interest shall be payable on the balance
                            maintained in the PPI or Wallet.
                          </li>

                          <li>
                            vii) The Customer shall maintain the confidentiality
                            of login credentials, PINs, and passwords and shall
                            be fully responsible for any unauthorized use.
                          </li>

                          <li>
                            {" "}
                            viii) Card Validity for General Purpose Reloadable
                            (GPR) Cards <br />{" "}
                            <ul>
                              <li>
                                GPR Cards issued by EnKash shall remain valid
                                for a minimum period of three (3) years from the
                                date of issuance, unless otherwise specified on
                                the card or communicated at the time of
                                issuance.{" "}
                              </li>
                              <li>
                                {" "}
                                Upon expiry, the Cardholder may request renewal
                                or replacement, subject to applicable policies
                                and KYC requirements.{" "}
                              </li>
                            </ul>
                          </li>
                          <li>
                            ix) Card Validity for Gift Cards <br />
                            <ul>
                              <li>
                                {" "}
                                Gift Cards shall remain valid for a period of
                                one (1) year from the date of issuance, unless a
                                different validity period is mandated by
                                regulations or specified at the time of
                                issuance.{" "}
                              </li>
                              <li>
                                {" "}
                                Any unused balance remaining on the Gift Card
                                after expiry shall be handled in accordance with
                                applicable RBI guidelines and EnKash
                                policies.{" "}
                              </li>
                            </ul>
                          </li>
                          <li>
                            x) EnKash may deactivate PPIs or Wallets that remain
                            inactive for one (1) year, after providing prior
                            intimation to the Customer.
                          </li>
                        </ul>
                      </div>

                      <h5 className="c15 mt-6">6. PPI LIMITS</h5>

                      <div className="container my-4">
                        <p>
                          PPI load and transaction limits shall be as per RBI
                          classification:
                        </p>
                        <div className="w-full overflow-x-auto">
                          <table className="table table-bordered table-striped min-w-max w-full">
                            <thead className=" ">
                              <tr>
                                <th className="text-center bg-secondary text-white">
                                  PPI Type
                                </th>
                                <th className="text-center bg-secondary text-white">
                                  Load Limit
                                </th>
                                <th className="text-center bg-secondary text-white">
                                  Annual Load Limit
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
                        <p>
                          You may perform debit transactions up to your
                          available balance, without a separate monthly debit
                          limit, provided overall usage complies with the
                          applicable credit limits under RBI guidelines.
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        7. LOADING AND RELOADING OF FUNDS
                      </h5>
                      <div className="container my-4">
                        <ol className="">
                          <li>
                            You can load/reload funds into Your EnKash PPI
                            Products using permitted payment methods such as
                            bank transfers (NEFT/IMPS), UPI, debit/credit cards,
                            net banking, or from other Full-KYC PPIs, subject to
                            RBI guidelines and Our limits. (Cash loading not
                            permitted)
                          </li>

                          <li>
                            Loading is non-interest-bearing, and funds are
                            stored electronically.
                          </li>

                          <li>
                            For Small PPI: Reloadable only from permitted
                            payment methods i.e. debit/credit cards, UPI,
                            Netbanking & bank accounts. Monthly loading limit:
                            Not exceeding ₹10,000 as per RBI. No cash loading,
                            funds transfer out, or cash withdrawal allowed.
                            Annual credit limit: Not exceeding ₹1,20,000.
                          </li>

                          <li>
                            For Full-KYC PPI: Higher limits apply. Maximum
                            outstanding balance: Not exceeding ₹2,00,000.
                            Monthly loading: No specific limit beyond overall
                            balance cap, subject to risk assessment. No cash
                            loading allowed.
                          </li>

                          <li>
                            For accounts opened via Aadhaar OTP e-KYC
                            (non-face-to-face): Aggregate balance across all
                            such accounts not to exceed ₹1,00,000; annual
                            credits not to exceed ₹2,00,000. Operations cease if
                            limits are exceeded until full CDD.
                          </li>

                          <li>
                            We may set lower internal limits based on Your risk
                            profile, transaction history, or operational risks.
                          </li>

                          <li>
                            We reserve the right to refuse or reverse any
                            loading if it violates Applicable Laws, appears
                            suspicious, or exceeds limits.
                          </li>

                          <li>
                            Partial or excess loading may not be allowed; You
                            must ensure correct amounts.
                          </li>
                        </ol>
                      </div>

                      <h5 className="c15 mt-6">
                        8. USAGE OF ENKASH PPI PRODUCTS
                      </h5>

                      <div className="container my-4">
                        <ol>
                          <li>
                            Purchasing goods and services at Authorised
                            Merchants (online/offline) accepting Our
                            wallets/cards/UPI.
                          </li>

                          <li>
                            Bill payments, mobile/DTH recharges, utility
                            payments, and other permitted services.
                          </li>

                          <li>
                            Peer-to-peer funds transfers to pre-registered
                            beneficiaries (for Full-KYC PPI only).
                          </li>

                          <li>
                            Cash withdrawal at ATMs/PoS (for Full-KYC PPI only,
                            up to ₹2,000 per transaction and ₹10,000 monthly).
                          </li>

                          <li>
                            Transactions are authorised using security measures
                            such as PIN, OTP, biometrics, CVV, or other
                            authentication factors.
                          </li>

                          <li>
                            For funds transfers (Full-KYC PPI):
                            <ul>
                              <li>
                                Back to source account or Your own verified bank
                                account.
                              </li>
                              <li>
                                To pre-registered beneficiaries: Up to ₹2,00,000
                                per month per beneficiary.
                              </li>
                              <li>
                                To other accounts/PPIs/debit/credit cards: Up to
                                ₹10,000 per month.
                              </li>
                            </ul>
                          </li>

                          <li>
                            There is no additional limit on purchases of goods
                            or services beyond Your available PPI balance.
                          </li>

                          <li>
                            International transactions, cash loading, or use for
                            prohibited activities are not allowed.
                          </li>

                          <li>
                            We may integrate with UPI, NPCI, or other payment
                            systems for seamless Transactions, but You remain
                            responsible for all initiated Transactions.
                          </li>

                          <li>
                            You agree not to use the EnKash PPI Products for any
                            illegal, unlawful, or prohibited activities,
                            including but not limited to money laundering,
                            terrorism financing, gambling, purchase of
                            prohibited goods/services (e.g., drugs, weapons),
                            tax evasion, or any activity violating Applicable
                            Laws.
                          </li>

                          <li>
                            We may block or decline Transactions if suspicious
                            or in violation of these Terms.
                          </li>
                        </ol>
                      </div>

                      <h5 className="c15 mt-6">9. LIMITS AND FEES</h5>
                      <div className="container my-4">
                        <ol>
                          <li>
                            Transaction and balance limits depend on PPI type
                            and KYC status, as per RBI guidelines:
                            <ol>
                              <li>
                                Small PPI: Maximum balance and loading limit of
                                ₹10,000 per month; transfers and withdrawals are
                                not permitted.
                              </li>

                              <li>
                                Full-KYC PPI: Maximum balance ₹2,00,000; funds
                                transfer & cash withdrawal limits as in Section
                                8.
                              </li>
                              <li>
                                We may revise limits based on risk assessment,
                                with notice where required.
                              </li>
                            </ol>
                          </li>
                          <li>
                            We may revise limits based on risk assessment, with
                            notice where required.
                          </li>
                          <li>
                            Fees may apply for issuance, loading, Transactions,
                            cash withdrawal, inactivity, card replacement, or
                            other services.
                          </li>

                          <li>
                            Fees are non-refundable and subject to change with
                            30 days&apos; notice. GST or other taxes may apply
                            as per Applicable Laws.
                          </li>

                          <li>
                            No fees apply for basic services, such as balance
                            inquiries or mini-statements, unless otherwise
                            specified.
                          </li>

                          <li>
                            If Your PPI or Wallet remains expired but holds an
                            unutilized balance, a monthly service fee of INR 500
                            will be charged post-expiry only if the balance
                            exceeds INR 1,000. For balances of INR 1,000 or
                            less, this fee will be waived to prevent small
                            balance erosion.
                          </li>

                          <li>
                            Customers can request:
                            <ol>
                              <li>
                                Refund of the remaining balance to the source
                                account, or
                              </li>
                              <li>Issuance of a new PPI (subject to KYC).</li>
                            </ol>
                          </li>

                          <li>
                            Fee table:
                            <div className="w-full overflow-x-auto">
                              <table className="table table-bordered table-striped min-w-max w-full">
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
                                    <td>
                                      Physical Card Issuance / Re-issuance
                                    </td>
                                    <td>250</td>
                                    <td>Per card issued or replaced</td>
                                  </tr>

                                  <tr>
                                    <td>Gift Card Reactivation</td>
                                    <td>250</td>
                                    <td>Per reactivation</td>
                                  </tr>

                                  <tr>
                                    <td>
                                      ATM – Financial Transaction (Cash
                                      Withdrawal)
                                    </td>
                                    <td>25</td>
                                    <td>Per transaction</td>
                                  </tr>

                                  <tr>
                                    <td>
                                      ATM – Non-Financial Transaction (PIN
                                      Change, Balance Enquiry, Mini Statement)
                                    </td>
                                    <td>15 </td>
                                    <td>Per transaction</td>
                                  </tr>

                                  <tr>
                                    <td>Surcharge – Government Transactions</td>
                                    <td>Up to 2.5% </td>
                                    <td>Per transaction</td>
                                  </tr>

                                  <tr>
                                    <td>Surcharge – Fuel Transactions</td>
                                    <td>Up to 1.5%</td>
                                    <td>Per transaction</td>
                                  </tr>

                                  <tr>
                                    <td>Surcharge – Railway Transactions</td>
                                    <td>Up to ₹10</td>
                                    <td>Per transaction</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </li>
                          <li>
                            <i>
                              All charges are exclusive of applicable taxes
                              unless stated otherwise.
                            </i>
                          </li>
                          <li>
                            Example: For a ₹1,000 government transaction, a
                            surcharge of ₹10 + 18% GST (₹11.80) may apply.
                          </li>
                          <li>
                            Notes:
                            <ul>
                              <li>
                                EnKash may waive any charge(s) wholly or
                                partially at its discretion.
                              </li>
                              <li>
                                All charges are subject to revision based on
                                business or regulatory requirements and shall be
                                communicated via the EnKash website or official
                                notifications.
                              </li>
                              <li>
                                Surcharges may vary by acquiring bank, network
                                partner, or merchant category.
                              </li>
                            </ul>
                          </li>
                        </ol>
                      </div>
                      <h5 className="c15 mt-6">
                        10. USER OBLIGATIONS AND RESPONSIBILITIES
                      </h5>

                      <div className="container my-4">
                        <p>You must:</p>
                        <ul className="">
                          <li>
                            Provide accurate, complete, and updated information
                            for registration, KYC, and Transactions.
                          </li>

                          <li>
                            Keep your login credentials, PIN, OTP, card details,
                            and device secure. Do not share them with anyone.
                          </li>

                          <li>
                            Immediately report any unauthorised access, loss,
                            theft, or compromise of your PPI, card, or device to
                            our customer support at support@enkash.com.
                          </li>

                          <li>
                            Ensure sufficient PPI balance before initiating
                            transactions.
                          </li>

                          <li>
                            Comply with all Applicable Laws, including PMLA and
                            RBI guidelines, and cooperate with us in any audits,
                            investigations, or reporting requirements.
                          </li>

                          <li>
                            Notify us immediately of any changes in your
                            personal details, address, mobile number, email, or
                            PEP status.
                          </li>

                          <li>
                            Not reverse engineer, hack, modify, or misuse the
                            EnKash Platform or PPI Products.
                          </li>

                          <li>
                            Not use the PPI for business/commercial purposes
                            unless explicitly permitted.
                          </li>

                          <li>
                            You are solely responsible for all transactions
                            initiated from your user account, whether authorised
                            by you or not, unless proven to result from our
                            gross negligence or wilful misconduct.
                          </li>

                          <li>
                            You consent to receiving communications (SMS, email,
                            calls, notifications) from us regarding your
                            account, transactions, updates, or promotions.
                          </li>
                        </ul>
                      </div>

                      <h5 className="c15 mt-6">
                        11. SECURITY AND FRAUD PREVENTION
                      </h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            We employ industry-standard security measures,
                            including encryption, firewalls, and fraud detection
                            systems, to protect your data and transactions.
                          </li>

                          <li>
                            You must use secure devices and networks, keep your
                            app/software updated, and avoid public Wi-Fi for
                            sensitive transactions.
                          </li>

                          <li>
                            In case of suspected fraud, unauthorised access, or
                            security breach, we may block transactions, suspend
                            your user account, freeze balances, or report to
                            authorities (e.g., RBI, FIU-IND) without liability.
                          </li>

                          <li>
                            You authorise us to share your information with
                            regulators, law enforcement, banks, payment
                            networks, or third-party partners for verification,
                            fraud prevention, or compliance.
                          </li>

                          <li>
                            For lost/stolen cards or wallets: Report immediately
                            so we can block the PPI. We are not liable for
                            losses due to delay in reporting or your negligence.
                          </li>

                          <li>
                            Once reported, the PPI or wallet will be blocked and
                            cannot be reused even if recovered. You will not be
                            liable for unauthorized transactions after
                            reporting.
                          </li>

                          <li>
                            We may require additional authentication for
                            high-risk transactions.
                          </li>
                        </ul>
                      </div>

                      <h5 className="c15 mt-6">
                        12. REFUNDS, CANCELLATIONS, AND REVERSALS
                      </h5>
                      <div className="container my-4">
                        <ul>
                          {" "}
                          <li>
                            <strong>Failed Transactions:</strong> Refunds will
                            be processed to the original payment source in
                            accordance with applicable regulatory guidelines,
                            network rules, and any other rules as may be
                            prescribed and updated from time to time, subject to
                            investigation.
                          </li>{" "}
                          <li>
                            <strong>Merchant-initiated refunds</strong> (e.g.,
                            returns) will be credited to your PPI Balance upon
                            receipt from the merchant.
                          </li>{" "}
                          <li>
                            No cash refunds; all refunds are processed
                            electronically to the PPI or source account.
                          </li>{" "}
                          <li>
                            Refunds shall be processed within{" "}
                            <strong>5 Business Days</strong> of a valid request,
                            subject to verification.
                          </li>{" "}
                          <li>
                            <strong>For cancellations:</strong> Contact the
                            merchant directly; We act as facilitator and process
                            refunds as per merchant instructions and RBI
                            timelines (T+1 for failed Transactions).
                          </li>{" "}
                          <li>
                            Reversals for erroneous loads may be permitted in
                            accordance with applicable regulatory guidelines,
                            network rules, and any other rules as may be
                            prescribed and updated from time to time, subject to
                            fees and verification.
                          </li>{" "}
                          <li>
                            Unclaimed refunds shall be governed in accordance
                            with the regulatory guidelines or network rules as
                            may be prescribed and updated from time to time. All
                            payments made through Enkash Wallet/Cards for
                            mobile/ DTH recharge, bill pay, or any other payment
                            processed by You on the Enkash Platform or Merchant
                            partners accepting Enkash Wallet as a payment option
                            shall be final and Enkash shall not be responsible
                            for any error and omission by You or Merchant
                            partners. Bill Pay and Recharge transactions cannot
                            be refunded, returned or cancelled once initiated
                            may be treated as per RBI escheatment rules.
                          </li>{" "}
                          <li>
                            If You erroneously processed a payment to an
                            unintended Merchant or processed a payment for the
                            wrong amount (for instance a typographical error at
                            Your end), Your only recourse will be to contact the
                            Merchant directly to whom You have made the payment
                            and ask them to refund the amount. Enkash shall not
                            be liable to handle such disputes, nor can We
                            reimburse You or reverse a payment that You have
                            erroneously made.
                          </li>{" "}
                        </ul>
                      </div>

                      <h5 className="c15 mt-6">
                        13. DORMANT ACCOUNTS AND ESCHEATMENT
                      </h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            If no Transactions occur for 12 consecutive months,
                            your PPI may be classified as dormant/inactive.
                          </li>

                          <li>
                            You can reactivate by contacting us and providing
                            updated details.
                          </li>

                          <li>
                            We may charge inactivity fees or restrict access
                            until reactivation via KYC re-verification.
                          </li>

                          <li>
                            Unused balances in dormant PPIs for two years may be
                            transferred to the Investor Education and Protection
                            Fund or as otherwise directed by RBI, while balances
                            in expired PPIs shall not be forfeited and may be
                            refunded within two years from expiry upon customer
                            request.
                          </li>
                          <li>
                            Transactions will not be permitted on expired cards.
                          </li>
                          <li>
                            Customers may request renewal or replacement of an
                            expired PPI (including Wallets) after verification
                            and payment of applicable fees.
                          </li>

                          <li>
                            EnKash will notify customers 45 days before PPI
                            expiry through SMS, email, or in-app alerts.
                          </li>

                          <li>
                            Upon Customer request, refunds will be credited to
                            the verified source bank account following due
                            diligence, completion of necessary KYC, and in
                            accordance with prevailing regulatory requirements.
                          </li>

                          <li>
                            If the EnKash PPI program is wound up or directed by
                            RBI to cease operations, customers may redeem the
                            outstanding balance to their verified bank account.
                          </li>
                        </ul>
                      </div>

                      <h5 className="c15 mt-6">14. TERMINATION AND CLOSURE</h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            You may request closure of your EnKash PPI Products
                            at any time via the EnKash Platform or by contacting
                            us at support@enkash.com. We will process the
                            request as per the RBI Master Directives.
                          </li>

                          <li>
                            Upon closure, any remaining PPI Balance will be
                            transferred to your verified bank account (for
                            Full-KYC PPI) or refunded as per RBI limits, after
                            deducting applicable fees and charges.
                          </li>

                          <li>
                            We may terminate or suspend your access unilaterally
                            if:
                            <ul>
                              <li>
                                You violate these Terms, Applicable Laws, or Our
                                policies.
                              </li>
                              <li>For inactivity as per Section 13.</li>
                              <li>
                                Due to fraud, money laundering suspicion, or
                                regulatory requirements.
                              </li>
                              <li>
                                In case of Force Majeure or operational issues.
                              </li>
                            </ul>
                          </li>

                          <li>
                            Upon termination, any unused balance may be
                            forfeited if not claimed within the stipulated
                            period, in accordance with applicable regulatory
                            guidelines, network rules, and other prescribed
                            rules. No interest or compensation is payable.
                          </li>

                          <li>
                            PPI validity is 3 years from issuance or last
                            reload/activity, after which it expires, and
                            balances may be handled as unclaimed.
                          </li>

                          <li>
                            You may also note that Enkash reserves the right to
                            terminate Your Enkash Wallet in case of violation of
                            any terms of the Agreement or any rule/policy issued
                            by the RBI or Government of India or any other
                            concerned body or any order/ directive issued by any
                            LEA or other authority, and in such event, any
                            balance in Your Enkash Wallet shall be credited back
                            to Your bank account linked to the Enkash Platform.
                            In such an event, Enkash might report any
                            information/ records (including details relating to
                            Your account, KYC, transaction etc.) to the
                            concerned authorities/ regulators. We may also
                            freeze Your Enkash Wallet balance until given a
                            clearance by the concerned body/authority.
                          </li>
                          <li>
                            In the event that Your Enkash Wallet is due for
                            expiry on the grounds as set out herein, Enkash
                            shall caution You of such impending expiry at
                            reasonable intervals during the 45 (forty-five) days
                            period prior to the date of expiry by sending a
                            communication in this regard via
                            e-mail/phone/notification or any other method of
                            communication which is permissible. In the event
                            that there is an outstanding balance in Your Enkash
                            Wallet subsequent to the expiry, You may at any time
                            request Enkash to initiate a refund of the
                            outstanding Enkash Wallet balance and the aforesaid
                            balance will be transferred to a bank account that
                            You had either linked to Your Enkash Wallet
                            previously or the bank account details You have
                            provided to Enkash at the time of raising the
                            request for refund. Enkash further reserves the
                            right to move your Enkash Wallet to Debit Only mode
                            if You are involved in any suspicious transaction
                            and/or any transaction in gross violation of the
                            rules and regulations issued by the RBI governing
                            the use of Pre Paid Payment Instruments including
                            but not limited to rules and regulations under
                            Prevention of Money Laundering Act, 2002 and any
                            amendments thereto or in case of any discrepancy
                            noted in Your information/ KYC. In such an event,
                            Enkash may report the matter to RBI/ appropriate
                            authorities, and take appropriate account action,
                            until the receipt of findings, and clear report from
                            RBI/ authorities in this regard.
                          </li>

                          <li>
                            In case Your Enkash Wallet has no financial
                            transaction within the last 12 months, Your Enkash
                            Wallet shall be flagged as inactive and You can
                            operate Your Enkash Wallet only after completing
                            appropriate due-diligence process defined by Enkash
                            from time to time. Your Enkash Wallet balance shall
                            be maintained securely with Us and any pending
                            refunds will still be credited to Your Enkash Wallet
                            and You shall continue to receive all communications
                            from us, including promotional communications.
                            However, You would not be able to use Your inactive
                            Enkash Wallet for any transactions including loading
                            of Your Enkash Wallet, without undergoing such
                            due-diligence. In the event that Your Enkash Wallet
                            is flagged as inactive and Your mobile number
                            associated with such Enkash Wallet has changed, You
                            will be required to complete the appropriate
                            due-diligence process defined by Enkash from time to
                            time. Upon completion of such process, Your Enkash
                            Wallet will be closed immediately as per the process
                            set out in these Wallet ToUs after which You may
                            initiate the process to open a new Enkash Wallet.
                          </li>
                        </ul>
                      </div>

                      <h5 className="c15 mt-6">15. LIABILITY AND INDEMNITY</h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            We are not liable for any loss, damage, or
                            inconvenience arising from:
                            <ul>
                              <li>
                                Your negligence, unauthorised use, or failure to
                                report issues promptly.
                              </li>
                              <li>
                                Force Majeure Events, system failures, network
                                issues, or third-party actions (e.g., merchants,
                                banks).
                              </li>
                              <li>
                                Merchant disputes, quality of goods/services, or
                                delays in refunds.
                              </li>
                              <li>
                                Any indirect, consequential, punitive, or
                                special damages.
                              </li>
                            </ul>
                          </li>

                          <li>
                            Our liability, if any, is limited to the PPI Balance
                            amount in cases of proven gross negligence on Our
                            part.
                          </li>

                          <li>
                            You agree to indemnify, defend, and hold Us, Our
                            affiliates, officers, directors, employees, and
                            agents harmless against any claims, losses, damages,
                            liabilities, costs, or expenses arising from Your
                            misuse of the EnKash PPI Products, breach of these
                            Terms, violation of Applicable Laws, or third-party
                            claims.
                          </li>

                          <li>
                            We disclaim all warranties, express or implied,
                            including merchantability, fitness for purpose, or
                            non-infringement regarding the EnKash Platform, PPI
                            Products, or integrated services.
                          </li>
                        </ul>
                      </div>
                      <h5 className="c15 mt-6">
                        16. PRIVACY AND DATA PROTECTION
                      </h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            Your personal data is collected, processed, stored,
                            and shared in accordance with our Privacy Policy at{" "}
                            <a
                              href="https://www.enkash.com/policies/privacy-policy"
                              target="_blank"
                              className="text-break"
                            >
                              https://www.enkash.com/policies/privacy-policy
                            </a>
                            , which complies with the Information Technology
                            (Reasonable Security Practices and Procedures and
                            Sensitive Personal Data or Information) Rules, 2011.
                          </li>

                          <li>
                            We may collect data such as KYC documents,
                            transaction history, device information, and
                            location for service delivery, fraud prevention, and
                            compliance.
                          </li>

                          <li>
                            You authorize EnKash, its group entities,
                            affiliates, and authorized service providers to
                            collect, process, share, and retain your personal
                            and transactional information (including identity,
                            account, and payment details) with third parties
                            solely for operational, regulatory, verification,
                            settlement, compliance, fraud monitoring, or payment
                            processing purposes, in accordance with applicable
                            laws and data retention requirements.
                          </li>

                          <li>
                            Any non-essential data sharing (for marketing,
                            analytics, or promotions) shall occur only with the
                            Customer’s explicit opt-in consent.
                          </li>

                          <li>
                            We implement reasonable security practices to
                            protect data but are not liable for breaches beyond
                            our control. This indemnity shall not extend to
                            losses caused by EnKash’s negligence or system
                            failures.
                          </li>

                          <li>
                            All personal data will be handled in accordance with
                            the Digital Personal Data Protection Act, 2023, RBI
                            data privacy guidelines, and EnKash’s Privacy
                            Policy.
                          </li>

                          <li>
                            For further information and escalations, customers
                            can reach out to the Data Protection Officer,
                            EnKash: Mr Arockiaraj Martin (Contact:{" "}
                            <a
                              href="mailto:dpo@enkash.com"
                              className="text-break"
                            >
                              dpo@enkash.com
                            </a>
                            ).
                          </li>
                        </ul>
                      </div>
                      <h5 className="c15 mt-6">17. INTELLECTUAL PROPERTY</h5>

                      <div className="container my-4">
                        <ul>
                          <li>
                            All rights, title, and interest in the EnKash
                            Platform, trademarks (e.g., &quot;EnKash&quot;),
                            logos, software, and content are owned by Us or Our
                            licensors.
                          </li>

                          <li>
                            You are granted a limited, non-exclusive,
                            non-transferable license to use the Platform for
                            personal use only.
                          </li>

                          <li>
                            You shall not copy, modify, distribute, or create
                            derivative works without Our written consent.
                          </li>
                        </ul>
                      </div>

                      <h5 className="c15 mt-6">
                        18. GRIEVANCE REDRESSAL AND CUSTOMER SUPPORT
                      </h5>

                      <div className="container my-4">
                        <div className="w-full overflow-x-auto">
                          <table className="table table-bordered table-striped min-w-max w-full">
                            <thead>
                              <tr>
                                <th className="text-center bg-secondary text-white">
                                  Level
                                </th>
                                <th className="text-center bg-secondary text-white">
                                  Responsible Person
                                </th>
                                <th className="text-center bg-secondary text-white">
                                  Modes Available
                                </th>
                                <th className="text-center bg-secondary text-white">
                                  Estimated TAT for Resolution
                                </th>
                              </tr>
                            </thead>

                            <tbody>
                              {/* Level 1 */}
                              <tr>
                                <td>Level 1</td>
                                <td>Customer Support Executive</td>
                                <td>
                                  <strong>Contact:</strong> +91 85304 90475{" "}
                                  <br />
                                  <strong>
                                    Email:
                                  </strong> support@enkash.com <br />
                                  <strong>
                                    Registered office address:
                                  </strong>{" "}
                                  91, Springboard 175, Kagalwala House, 2nd
                                  Floor, Kalina, Santacruz (E), Mumbai 400098{" "}
                                  <br />
                                  <strong>Corporate office address:</strong> 91,
                                  Springboard, Gate No 2, Plant No. 6, LBS Marg,
                                  Godrej & Boyce Industry Estate, Opposite
                                  Vikhroli Bus Depot, Vikhroli West, Mumbai,
                                  Maharashtra, 400079
                                </td>
                                <td>
                                  Within 3 business days from the date of
                                  receipt of complaint
                                </td>
                              </tr>

                              {/* Level 2 */}
                              <tr>
                                <td>Level 2</td>
                                <td>Customer Support Team Manager</td>
                                <td>
                                  <strong>Contact:</strong> +91 85304 90475{" "}
                                  <br />
                                  <strong>
                                    Email:
                                  </strong> csmanager@enkash.com <br />
                                  <strong>
                                    Registered office address:
                                  </strong>{" "}
                                  91, Springboard 175, Kagalwala House, 2nd
                                  Floor, Kalina, Santacruz (E), Mumbai 400098{" "}
                                  <br />
                                  <strong>Corporate office address:</strong> 91,
                                  Springboard, Gate No 2, Plant No. 6, LBS Marg,
                                  Godrej & Boyce Industry Estate, Opposite
                                  Vikhroli Bus Depot, Vikhroli West, Mumbai,
                                  Maharashtra, 400079
                                </td>
                                <td>
                                  Within 7 business days from the date of
                                  receipt of the complaint
                                </td>
                              </tr>

                              {/* Level 3 */}
                              <tr>
                                <td>Level 3</td>
                                <td>Grievance Redressal Officer</td>
                                <td>
                                  <strong>Contact:</strong> +91 95132 51477{" "}
                                  <br />
                                  <strong>Email:</strong>{" "}
                                  grievanceofficer@enkash.com <br />
                                  <strong>
                                    Registered office address:
                                  </strong>{" "}
                                  91, Springboard 175, Kagalwala House, 2nd
                                  Floor, Kalina, Santacruz (E), Mumbai 400098{" "}
                                  <br />
                                  <strong>Corporate office address:</strong> 91,
                                  Springboard, Gate No 2, Plant No. 6, LBS Marg,
                                  Godrej & Boyce Industry Estate, Opposite
                                  Vikhroli Bus Depot, Vikhroli West, Mumbai,
                                  Maharashtra, 400079
                                </td>
                                <td>
                                  Within 30 business days from the date of
                                  receipt of the complaint
                                </td>
                              </tr>

                              {/* Level 4 */}
                              <tr>
                                <td>Level 4</td>
                                <td>Nodal Officer</td>
                                <td>
                                  <strong>Contact:</strong> +91 95132 51499{" "}
                                  <br />
                                  <strong>Email:</strong>{" "}
                                  nodalofficer@enkash.com <br />
                                  <strong>
                                    Registered office address:
                                  </strong>{" "}
                                  91, Springboard 175, Kagalwala House, 2nd
                                  Floor, Kalina, Santacruz (E), Mumbai 400098{" "}
                                  <br />
                                  <strong>Corporate office address:</strong> 91,
                                  Springboard, Gate No 2, Plant No. 6, LBS Marg,
                                  Godrej & Boyce Industry Estate, Opposite
                                  Vikhroli Bus Depot, Vikhroli West, Mumbai,
                                  Maharashtra, 400079
                                </td>
                                <td>
                                  Within 15 business days from the date of
                                  receipt of the complaint
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p>
                          Unresolved complaints may be escalated to the Nodal
                          Officer or to the RBI Ombudsman as per the Integrated
                          Ombudsman Scheme, 2021
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        19. GENERAL TERMS AND CONDITIONS
                      </h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            You agree and understand that Enkash, based on its
                            internal policies, regulatory and statutory
                            guidelines, may report information/ transactions to
                            appropriate authorities in case of any suspicious or
                            fraudulent transactions, and We shall not be made
                            liable for any loss caused to You for such
                            obligatory reporting by Us, even if any such
                            transaction is found to be regular and lawful at a
                            later stage.
                          </li>
                          <li>
                            While executing any transaction, You must ensure the
                            availability of sufficient funds on Your Enkash
                            Wallet or other sources of funds that You use to
                            execute any transaction.
                          </li>
                          <li>
                            You understand that the services offered by Enkash
                            on Enkash application uses internet connection,
                            service providers and partners to successfully
                            execute Your transactions, and We shall not be
                            responsible for any liability arising therefrom,
                            including but not limited to any loss or
                            interruption of the Enkash Wallet services or the
                            unavailabiliThese general terms and conditions shall
                            apply to the Enkash Wallet in addition to the terms
                            mentioned above.
                          </li>
                          <li>
                            Your login credentials are personal to You and You
                            should ensure Your login credentials are safe and
                            secure. You are responsible for security of Your
                            Enkash Wallet, and shall take all steps to keep the
                            details secure including the devices that You may
                            use to access Your Enkash account. Further, You
                            shall not disclose Your account access credentials
                            to anyone in any form, whether verbally or in
                            writing, and shall not record it in any other form.
                            In case You divulge such details in error or due to
                            negligence, You shall immediately report the
                            activity to Enkash. However, Enkash shall not be
                            liable for any unauthorised transaction performed by
                            any third party with Your secure account access
                            credentials.
                          </li>
                          <li>
                            We may monitor Your transaction(s) for probable
                            risky/fraudulent/ suspicious transactions. Basis Our
                            continuous transaction monitoring, We may take any
                            action as we deem fit, such as place a hold on
                            transaction(s), block or reject such transaction(s),
                            temporarily block Your Enkash Wallet or account (or
                            access thereto), and ask You for more information
                            regarding You and Your funding source before
                            releasing/reinstating Your account/transaction where
                            applicable. You shall also note that Your account
                            could also be temporarily or permanently blocked
                            basis abuse/ misconduct against any employee,
                            company, or incorrect declaration by You, and We
                            shall not be liable for any loss caused to You due
                            to this.
                          </li>
                          <li>
                            Any unavailability of EnKash Wallet services caused
                            by mobile or internet issues, or by
                            non-responsiveness of merchant websites or
                            applications.
                          </li>
                          <li>
                            You understand that the information that You share
                            for availing Enkash Wallet services might be shared
                            with third parties inter alia, to facilitate the
                            provision of such services and in such case, data
                            policies of service providers shall also apply to
                            such transactions and You are required to update
                            Yourself of their policies and You acknowledge that
                            You understand that Enkash would not have any
                            control on data sharing and use in such case.
                          </li>
                          <li>
                            You further agree and acknowledge that Your
                            bank/financial institution may charge fee(s) or
                            charge(s) against any transaction, and Enkash shall
                            not be liable to acknowledge or refund such fee(s)/
                            charges and the same shall be borne You in all
                            circumstances, or as per the terms agreed between
                            You and Your bank/ financial institution.
                          </li>
                          <li>
                            Funds loaded into Your Enkash Wallet and spent on
                            Enkash application or partner Merchants for services
                            offered by them are conducted over the internet and
                            involve multiple stakeholders including but not
                            limited to Your Bank, service providers, internet
                            services, telecom operator etc. You understand that
                            transaction confirmations and acknowledgements may
                            not always reflect service delivery due to the
                            possibility of failures at multiple points. In such
                            cases, Enkash is not liable for any loss caused due
                            to inefficiencies / process failures at other such
                            stakeholders and Enkash shall credit the funds or
                            recover the funds from You in such cases and shall
                            apply appropriate limits/restrictions on Your Enkash
                            Wallet or account accordingly at its own discretion,
                            and can take appropriate legal actions to collect
                            the amount due (if any), to the extent allowed by
                            applicable law.
                          </li>
                          <li>
                            You can view Your Enkash Wallet transactions in Your
                            Enkash app, and can also review transactions for at
                            least the past 6 (six) months.
                          </li>

                          <li>
                            All categories of Enkash Wallets are
                            non-transferable in nature, except the ones that are
                            unclaimed, and no interest is payable on the
                            outstanding Enkash Wallet balances.
                          </li>
                          <li>
                            Your account is secured, and any transaction that is
                            processed on Your Enkash Wallet shall be authorized
                            by You explicitly or processed via RBI notified
                            debit mandates authorised by You on Your Enkash
                            Wallet and permitted by Enkash.
                          </li>
                          <li>
                            While, the continued availability of the Enkash
                            Wallet shall be subject to the requirements under
                            applicable law and MD-PPIs, 2021, Enkash reserves
                            the right to suspend/discontinue the Enkash Wallet
                            or access thereto, at any time, for any cause,
                            including but not limited to the following-
                            <ul>
                              <li>
                                For any violation or suspected violation of the
                                rules, regulations, orders, directions, or
                                notifications issued by RBI from time to time,
                                or for any violation of any Wallet ToUs and/or
                                the Agreement.
                              </li>
                              <li>
                                Any suspected discrepancy in Your particulars,
                                KYC documentation, or information provided by
                                You.
                              </li>
                              <li>
                                To combat potential fraud, sabotage, wilful
                                destruction, threats to national security, or
                                any other force majeure event.
                              </li>
                              <li>
                                EnKash, in its sole opinion and discretion,
                                believes that cessation, suspension, or
                                restriction of Your Enkash Wallet is necessary
                                for any other legitimate purpose.
                              </li>
                            </ul>
                          </li>
                          <li>
                            In case of any changes in Your information provided
                            Enkash, You will promptly update such changes, in
                            writing, to Enkash by reaching out to Our Customer
                            Support team. If You plan to surrender or deactivate
                            Your mobile number, as Enkash does not support any
                            change of the mobile number that You have registered
                            with Enkash, please reach out to Our Customer
                            Support team in advance to initiate Your account
                            closure process. Once the closure is completed, You
                            may initiate the process for creation of a new
                            account. Do also reach out to us immediately in case
                            You lose Your mobile device, so We can take
                            appropriate action on Your Enkash account, Enkash
                            Wallet.
                          </li>
                          <li>
                            You agree that, upon any closure or winding up of
                            any Prepaid Payment Instrument as notified by the
                            regulator or due to any other circumstances provided
                            under law, the outstanding balance (if any) shall be
                            handled as per any instruction by the regulator/
                            under law or as per Enkash policy.
                          </li>
                        </ul>
                      </div>
                      <h5 className="c15 mt-6">20. COMMUNICATION</h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            Enkash may communicate with You on the contact
                            information that You may have provided to Us during
                            the course of Your engagement, including but not
                            limited to signup, transacting or availing any third
                            party products or services on or through the Enkash
                            Platform.
                          </li>

                          <li>
                            We will send You communication alerts via emails or
                            SMS or push notifications or via any other
                            technology. You also agree that there can be
                            disruption in communications due to factors that are
                            not under Our control, including but not limited to
                            Your phone being switched off, incorrect email
                            address, network interruptions. You agree not to
                            hold Enkash liable for non-delivery of any alert or
                            any loss suffered by You due to delay, distortion or
                            failure of communication.
                          </li>

                          <li>
                            You further acknowledge that You are responsible for
                            the contact details shared with Us and shall
                            immediately update Us on any change of Your contact
                            details. You authorise Us to contact You and
                            communicate with You for any Enkash service or
                            offer(s). We may use third party service providers
                            to send alerts or to communicate with You. You
                            authorise Enkash and Enkash entities to override the
                            DND settings to reach out to You over calls, SMS,
                            emails and any other mode of communication.
                          </li>
                        </ul>
                      </div>
                      <h5 className="c15 mt-6">
                        21. GOVERNING LAW AND DISPUTE RESOLUTION
                      </h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            These Terms are governed by the laws of India,
                            without regard to conflict of laws principles.
                          </li>

                          <li>
                            Any disputes arising out of or in connection with
                            these Terms shall be resolved through arbitration by
                            a sole arbitrator appointed by Us, in accordance
                            with the Arbitration and Conciliation Act, 1996 (as
                            amended). The venue of arbitration shall be Mumbai,
                            and proceedings shall be in English.
                          </li>

                          <li>
                            Subject to arbitration, the courts in Mumbai shall
                            have exclusive jurisdiction.
                          </li>

                          <li>
                            You agree that no injunction or specific performance
                            shall be sought against Us except through
                            arbitration.
                          </li>

                          <li>
                            Disputed transactions must be reported within 30
                            Business Days of the transaction date.
                          </li>

                          <li>
                            For unauthorized or fraudulent transactions,
                            Customers shall raise a dispute within 10 days.
                          </li>

                          <li>
                            EnKash may, at its discretion, review disputes
                            reported after the standard period in cases of
                            delayed discovery or genuine hardship.
                          </li>

                          <li>
                            All disputes shall be investigated and resolved as
                            per RBI timelines and communicated to Customers via
                            their registered channel.
                          </li>

                          <li>
                            Disputes unresolved by EnKash may be escalated under
                            the RBI Integrated Ombudsman Scheme.
                          </li>

                          <li>
                            To report a dispute, chargeback, or fraud, Customers
                            can raise a request at{" "}
                            <a
                              href="https://www.enkash.com/support"
                              className="text-break"
                            >
                              https://www.enkash.com/support
                            </a>
                            , or alternatively contact EnKash support by writing
                            to support@enkash.com or calling +91-85304-90475.
                          </li>
                        </ul>
                      </div>
                      <h5 className="c15 mt-6">22. MISCELLANEOUS</h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            <strong>Entire Agreement:</strong> These Terms,
                            along with referenced policies, constitute the
                            entire agreement between You and Us, superseding any
                            prior agreements.
                          </li>

                          <li>
                            <strong>Severability:</strong> If any provision is
                            held invalid or unenforceable, the remaining
                            provisions shall remain in full force.
                          </li>

                          <li>
                            <strong>Assignment:</strong> We may assign or
                            transfer these Terms or Our rights/obligations
                            without Your consent. You may not assign without Our
                            prior written approval.
                          </li>

                          <li>
                            <strong>Waiver:</strong> No waiver of any breach
                            shall constitute a waiver of any prior, concurrent,
                            or subsequent breach.
                          </li>

                          <li>
                            <strong>Notices:</strong> All notices from Us will
                            be sent via email/SMS to Your registered details or
                            posted on the EnKash Platform. You must notify Us in
                            writing at support@enkash.com.
                          </li>

                          <li>
                            <strong>Survival:</strong> Provisions on liability,
                            indemnity, intellectual property, governing law, and
                            confidentiality shall survive termination.
                          </li>

                          <li>
                            <strong>Force Majeure:</strong> We shall not be
                            liable for delays or failures due to Force Majeure
                            Events.
                          </li>

                          <li>
                            <strong>No Agency:</strong> Nothing herein creates
                            an agency, partnership, or joint venture between You
                            and Us.
                          </li>

                          <li>
                            <strong>Contact:</strong> For any assistance, reach
                            Us at support@enkash.com.
                          </li>
                        </ul>
                      </div>

                      <h5 className="c15 mt-6">
                        23. GOOD SECURITY PRACTICES FOR PPI CARDHOLDERS
                        (ANNEXURE)
                      </h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            <strong>Keep Your Credentials Confidential:</strong>{" "}
                            <ol>
                              <li>
                                Never share OTP, PIN, CVV, password, or any
                                login detail with anyone.
                              </li>
                              <li>
                                Banks, issuers, RBI, or law-enforcement will
                                never ask for these details.
                              </li>
                              <li>
                                Do not write your PIN on the card or store
                                screenshots of credentials.
                              </li>
                            </ol>
                          </li>

                          <li>
                            <strong>Beware of Phishing & Fraud Calls:</strong>{" "}
                            <ol>
                              <li>
                                Avoid clicking random links claiming “KYC
                                update”, “card deactivation”, “refunds”,
                                “offers”.
                              </li>
                              <li>
                                Do not trust unknown callers pretending to be
                                bank agents.
                              </li>
                              <li>
                                Always verify the official customer care number
                                on the issuer’s website/app.
                              </li>
                            </ol>
                          </li>

                          <li>
                            <strong>Protect Your Physical Card:</strong>{" "}
                            <ol>
                              <li>
                                Keep the card in a safe place; avoid giving it
                                to unauthorized persons.
                              </li>
                              <li>
                                Cover the keypad while entering PIN at POS
                                terminals or ATMs.
                              </li>
                              <li>
                                Report immediately if the card is lost, stolen,
                                or misplaced.
                              </li>
                            </ol>
                          </li>

                          <li>
                            <strong>Enable Transaction Alerts:</strong>{" "}
                            <ol>
                              <li>
                                Turn on SMS/email/app notifications for every
                                transaction.
                              </li>
                              <li>
                                Regularly review statements for suspicious
                                transactions.
                              </li>
                              <li>
                                Immediately report unfamiliar or unauthorized
                                charges.
                              </li>
                            </ol>
                          </li>

                          <li>
                            <strong>Use Secure Networks:</strong>{" "}
                            <ol>
                              <li>
                                Avoid using public Wi-Fi when accessing your
                                wallet/card app.
                              </li>
                              <li>
                                Use only the official issuer’s app or website.
                              </li>
                              <li>
                                Keep your phone updated with the latest OS and
                                security patches.
                              </li>
                            </ol>
                          </li>

                          <li>
                            <strong>Practice Safe Online Spending:</strong>{" "}
                            <ol>
                              <li>
                                Shop only on trusted e-commerce platforms.
                              </li>
                              <li>
                                Verify the website begins with https:// and
                                shows a lock icon.
                              </li>
                              <li>
                                Prefer tokenized cards or secure payment
                                gateways when available.
                              </li>
                            </ol>
                          </li>

                          <li>
                            <strong>Set Strong Authentication:</strong>{" "}
                            <ol>
                              <li>
                                Use strong passwords (mix of letters, numbers,
                                symbols).
                              </li>
                              <li>Enable biometric login where possible.</li>
                              <li>
                                Do not use guessable PINs like 0000, 1234, DOB,
                                mobile number, etc.
                              </li>
                            </ol>
                          </li>

                          <li>
                            <strong>
                              Be Cautious of Freebies, Cashback & Reward Scams:
                            </strong>{" "}
                            <ol>
                              <li>
                                Fraudsters often promise free vouchers, gift
                                cards, cashbacks, or limits.
                              </li>
                              <li>
                                If an offer sounds “too good to be true,” it
                                probably is.
                              </li>
                            </ol>
                          </li>

                          <li>
                            <strong>Report Fraud Immediately:</strong>{" "}
                            <ol>
                              <li>
                                If you suspect misuse, contact the issuer within
                                minutes.
                              </li>
                              <li>
                                Block the card using the EnKash mobile app,
                                online portal, or helpline.
                              </li>
                              <li>
                                File a complaint if money is debited without
                                your permission.
                              </li>
                            </ol>
                          </li>
                        </ul>
                        <p>
                          <strong>Awareness Tips for Cardholders:</strong>
                        </p>
                        <ul>
                          <li>
                            Issuers never ask for screen sharing apps (AnyDesk,
                            TeamViewer).
                          </li>
                          <li>
                            Do not allow strangers to &quot;help&quot; you at
                            ATMs or POS machines.
                          </li>
                          <li>
                            Don’t trust QR codes sent over WhatsApp/SMS for
                            receiving money — scanning a QR code is for paying,
                            not receiving.
                          </li>
                          <li>
                            Keep your mobile number and email updated with the
                            issuer.
                          </li>
                          <li>
                            Understand transaction limits and keep only the
                            required funds loaded.
                          </li>
                          <li>
                            Avoid storing your card’s front/back photos on your
                            phone gallery.
                          </li>
                        </ul>
                      </div>
                      <h5 className="c15 mt-6">24. GLOSSARY</h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            Company Policy: Refers to the employer’s or
                            sponsoring organization’s internal guidelines
                            governing reload, usage, and eligibility of PPIs
                            (Cards or Wallets).
                          </li>
                          <li>
                            Renewal / Revalidation: Extending the validity of a
                            PPI (e.g., Gift or Wallet) upon Customer request,
                            including reissuance of a new PPI with transferred
                            balance.
                          </li>
                        </ul>
                        <p>
                          Customers are encouraged to refer to the FAQ section
                          on{" "}
                          <a
                            href={`${process.env.NEXT_PUBLIC_URL}`}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="text-break"
                          >
                            ( https://www.enkash.com/)
                          </a>{" "}
                          for practical guidance on validity, renewal, and
                          refund processes.
                        </p>
                        <p>
                          By using the EnKash PPI Products, You confirm that You
                          have read, understood, and unconditionally agree to
                          these Terms.
                        </p>
                        <p>
                          If you have any questions, please contact us before
                          proceeding.
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
        <div>
          {" "}
          <div className="enkash-banking-maincontainer" lang="hi">
            <div className=" enkash-blog-detail  ">
              <div className={styles.inner_container_hindi}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="enkash-term-condtions">
                      <div className={styles.sectionTitle} lang="hi">
                        <DynamicHeading
                          content={[
                            {
                              title:
                                "एनकैश पीपीआई उत्पादों (वॉलेट और कार्ड्स) के लि एशर्तें एवंनि यम",
                              color: "color-equity-blue",
                            },
                          ]}
                          headingTag="p"
                          className="f-5 text-center fs-1 lh-sm"
                        />
                      </div>{" "}
                      <DynamicHeading
                        content={[
                          {
                            title:
                              "वर्तमान सस्ंकरण अतिं तिम अपडटे : 30 नवबं र 2025",
                            color: "color-black",
                          },
                        ]}
                        headingTag="h6"
                        className="f-5 text-start "
                      />
                      <section id="ppi-hindi">
                        <h5 className="c15 mt-6">1. परिचय</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              <strong>"अनुपालन कानून"</strong> का अर्थ सभी लागू
                              केंद्रीय, राज्य और स्थानीय कानून, विधियां, विनियम,
                              आदेश, निर्देश, दिशानिर्देश, परिपत्र, या किसी
                              सरकारी, नियामक या विधायी प्राधिकारण द्वारा जारी
                              अधिसूचनाएं हैं, जिसमें पीएसएसए, भुगतान एवं निपटान
                              प्रणाली विनियम, 2008, पीपीआई पर आरबीआई मास्टर
                              दिशानिर्देश, धन शोधन निवारण अधिनियम, 2002
                              ("पीएमएलए"), और सूचना प्रौद्योगिकी अधिनियम, 2000,
                              समय-समय पर संशोधित शामिल हैं।
                            </li>

                            <li>
                              <strong>"अधिकृत व्यापारी"</strong> का अर्थ भारत
                              में एनकैश पीपीआई उत्पादों के माध्यम से भुगतान
                              स्वीकार करने वाला कोई भी भौतिक या ऑनलाइन व्यापारी
                              प्रतिष्ठान है।
                            </li>

                            <li>
                              <strong>"एनकैश पीपीआई उत्पाद"</strong> का अर्थ
                              अर्ध-बंधित पूर्व-पूर्वभुगतान साधन हैं, जिसमें
                              डिजिटल वॉलेट और भौतिक/आभासी पूर्व-पूर्वभुगतान
                              कार्ड शामिल हैं, जो आरबीआई प्राधिकरण के तहत भारत
                              में वस्तुओं और सेवाओं के भुगतान, धन हस्तांतरण या
                              अन्य अनुमति प्राप्त गतिविधियों के लिए जारी किए
                              जाते हैं।
                            </li>

                            <li>
                              <strong>"अधिक बल घटना"</strong> का अर्थ हमारी उचित
                              नियंत्रण से परे कोई भी घटना है, जिसमें ईश्वरीय
                              कृत्य, युद्ध, दंगा, हड़ताल, तालाबंदी, आग, बाढ़,
                              भूकंप, महामारी, प्रणाली विफलता, नेटवर्क व्यवधान या
                              नियामक परिवर्तन शामिल हैं।
                            </li>

                            <li>
                              <strong>"पूर्ण-केवाईसी पीपीआई"</strong> का अर्थ वह
                              पीपीआई है जहां आपने आरबीआई दिशानिर्देशों के अनुसार
                              पूर्ण जानें अपने ग्राहक ("केवाईसी") प्रक्रिया पूरी
                              की हो, जो उच्च सीमाओं और अतिरिक्त सुविधाओं जैसे धन
                              हस्तांतरण और नकद निकासी की अनुमति देती है।
                            </li>

                            <li>
                              <strong>"केवाईसी"</strong> का अर्थ आरबीआई द्वारा
                              अनिवार्य जानें अपने ग्राहक सत्यापन प्रक्रिया है,
                              जिसमें आधार-आधारित ई-केवाईसी, वीडियो-आधारित ग्राहक
                              पहचान प्रक्रिया ("वी-सीआईपी"), या भौतिक सत्यापन
                              शामिल हो सकता है।
                            </li>

                            <li>
                              <strong>
                                "न्यूनतम विवरण पीपीआई" या "छोटा पीपीआई"
                              </strong>{" "}
                              का अर्थ न्यूनतम विवरण (जैसे स्व-घोषणा और OTP
                              सत्यापन) के साथ जारी पीपीआई है और निचली लेन-देन
                              सीमाओं के अधीन है, बिना पूर्ण केवाईसी के।
                            </li>

                            <li>
                              <strong>"पीपीआई बैलेंस"</strong> का अर्थ आपके
                              एनकैश पीपीआई उत्पादों में लोड की गई
                              पूर्व-पूर्वभुगतान राशि है, जो लेन-देन के लिए
                              उपलब्ध है। पीपीआई बैलेंस पर कोई ब्याज देय नहीं है।
                            </li>

                            <li>
                              <strong>"पीपीआई धारक" या "उपयोगकर्ता"</strong> का
                              अर्थ वह व्यक्ति है जिसके नाम पीपीआई जारी की गई है।
                            </li>

                            <li>
                              <strong>"लेन-देन"</strong> का अर्थ एनकैश पीपीआई
                              उत्पादों का कोई भी लोडिंग, रीलोडिंग, भुगतान, धन
                              हस्तांतरण, निकासी, रिफंड या अन्य उपयोग है।
                            </li>

                            <li>
                              <strong>"उपयोगकर्ता खाता"</strong> का अर्थ एनकैश
                              प्लेटफॉर्म पर आपके द्वारा बनाया गया खाता है जो
                              एनकैश पीपीआई उत्पादों तक पहुंच और प्रबंधन के लिए
                              है।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">2. परिभाषाएं एवं व्याख्या</h5>
                        <div className="container my-4">
                          <p>
                            संदर्भ के अलावा, निम्नलिखित शब्दों का अर्थ
                            निम्नानुसार होगा:
                          </p>
                          <ul>
                            <li>
                              <strong>"अनुपालन कानून"</strong> का अर्थ सभी लागू
                              केंद्रीय, राज्य और स्थानीय कानून, विधियां, विनियम,
                              आदेश, निर्देश, दिशानिर्देश, परिपत्र, या किसी
                              सरकारी, नियामक या विधायी प्राधिकारण द्वारा जारी
                              अधिसूचनाएं हैं, जिसमें पीएसएसए, भुगतान एवं निपटान
                              प्रणाली विनियम, 2008, पीपीआई पर आरबीआई मास्टर
                              दिशानिर्देश, धन शोधन निवारण अधिनियम, 2002
                              ("पीएमएलए"), और सूचना प्रौद्योगिकी अधिनियम, 2000,
                              समय-समय पर संशोधित शामिल हैं।
                            </li>

                            <li>
                              <strong>"अधिकृत व्यापारी"</strong> का अर्थ भारत
                              में एनकैश पीपीआई उत्पादों के माध्यम से भुगतान
                              स्वीकार करने वाला कोई भी भौतिक या ऑनलाइन व्यापारी
                              प्रतिष्ठान है।
                            </li>

                            <li>
                              <strong>"एनकैश पीपीआई उत्पाद"</strong> का अर्थ
                              अर्ध-बंधित पूर्व-पूर्वभुगतान साधन हैं, जिसमें
                              डिजिटल वॉलेट और भौतिक/आभासी पूर्व-पूर्वभुगतान
                              कार्ड शामिल हैं, जो आरबीआई प्राधिकरण के तहत भारत
                              में वस्तुओं और सेवाओं के भुगतान, धन हस्तांतरण या
                              अन्य अनुमति प्राप्त गतिविधियों के लिए जारी किए
                              जाते हैं।
                            </li>

                            <li>
                              <strong>"अधिक बल घटना"</strong> का अर्थ हमारी उचित
                              नियंत्रण से परे कोई भी घटना है, जिसमें ईश्वरीय
                              कृत्य, युद्ध, दंगा, हड़ताल, तालाबंदी, आग, बाढ़,
                              भूकंप, महामारी, प्रणाली विफलता, नेटवर्क व्यवधान या
                              नियामक परिवर्तन शामिल हैं।
                            </li>

                            <li>
                              <strong>"पूर्ण-केवाईसी पीपीआई"</strong> का अर्थ वह
                              पीपीआई है जहां आपने आरबीआई दिशानिर्देशों के अनुसार
                              पूर्ण जानें अपने ग्राहक ("केवाईसी") प्रक्रिया पूरी
                              की हो, जो उच्च सीमाओं और अतिरिक्त सुविधाओं जैसे धन
                              हस्तांतरण और नकद निकासी की अनुमति देती है।
                            </li>

                            <li>
                              <strong>"केवाईसी"</strong> का अर्थ आरबीआई द्वारा
                              अनिवार्य जानें अपने ग्राहक सत्यापन प्रक्रिया है,
                              जिसमें आधार-आधारित ई-केवाईसी, वीडियो-आधारित ग्राहक
                              पहचान प्रक्रिया ("वी-सीआईपी"), या भौतिक सत्यापन
                              शामिल हो सकता है।
                            </li>

                            <li>
                              <strong>
                                "न्यूनतम विवरण पीपीआई" या "छोटा पीपीआई"
                              </strong>{" "}
                              का अर्थ न्यूनतम विवरण (जैसे स्व-घोषणा और OTP
                              सत्यापन) के साथ जारी पीपीआई है और निचली लेन-देन
                              सीमाओं के अधीन है, बिना पूर्ण केवाईसी के।
                            </li>

                            <li>
                              <strong>"पीपीआई बैलेंस"</strong> का अर्थ आपके
                              एनकैश पीपीआई उत्पादों में लोड की गई
                              पूर्व-पूर्वभुगतान राशि है, जो लेन-देन के लिए
                              उपलब्ध है। पीपीआई बैलेंस पर कोई ब्याज देय नहीं है।
                            </li>

                            <li>
                              <strong>"पीपीआई धारक" या "उपयोगकर्ता"</strong> का
                              अर्थ वह व्यक्ति है जिसके नाम पीपीआई जारी की गई है।
                            </li>

                            <li>
                              <strong>"लेन-देन"</strong> का अर्थ एनकैश पीपीआई
                              उत्पादों का कोई भी लोडिंग, रीलोडिंग, भुगतान, धन
                              हस्तांतरण, निकासी, रिफंड या अन्य उपयोग है।
                            </li>

                            <li>
                              <strong>"उपयोगकर्ता खाता"</strong> का अर्थ एनकैश
                              प्लेटफॉर्म पर आपके द्वारा बनाया गया खाता है जो
                              एनकैश पीपीआई उत्पादों तक पहुंच और प्रबंधन के लिए
                              है।
                            </li>
                          </ul>
                          <p>
                            अन्यथा निर्दिष्ट न होने पर, यहां प्रयुक्त शब्दों का
                            अर्थ पूर्व-पूर्वभुगतान साधनों के जारी करने एवं संचलन
                            पर आरबीआई मास्टर दिशानिर्देश के तहत सौंपा गया अर्थ
                            होगा, समय-समय पर संशोधित। व्याख्या: शीर्षक केवल
                            सुविधाओं के लिए हैं और व्याख्या को प्रभावित नहीं
                            करती। एकवचन आयातित शब्द बहुवचन को शामिल करते हैं और
                            इसके विपरीत। विधियों का संदर्भ संशोधनों और
                            पुनः-अधिनियमन को शामिल करता है।
                          </p>
                        </div>

                        <h5 className="c15 mt-6">3. पात्रता एवं पंजीकरण</h5>
                        <div className="container my-4">
                          <p>
                            एनकैश पीपीआई उत्पादों का उपयोग करने के लिए पात्र
                            होने के लिए:
                          </p>
                          <ul>
                            <li>
                              आपको भारत का निवासी (या वैध दस्तावेजों वाला विदेशी
                              नागरिक/एनआरआई) होना चाहिए, कम से कम 18 वर्ष की आयु
                              का, और भारतीय अनुबंध अधिनियम, 1872 के तहत अनुबंध
                              करने में सक्षम।
                            </li>
                            <li>
                              आपको आरबीआई द्वारा परिभाषित राजनीतिक रूप से
                              प्रभावित व्यक्ति (PEP) नहीं होना चाहिए।
                            </li>
                            <li>
                              आपको एनकैश प्लेटफॉर्म पर सटीक व्यक्तिगत जानकारी
                              प्रदान करके पंजीकरण करना चाहिए, जिसमें आपका नाम,
                              मोबाइल नंबर, ईमेल पता, जन्म तिथि और अन्य विवरण
                              शामिल हैं।
                            </li>
                            <li>
                              छोटे पीपीआई के लिए, मोबाइल नंबर ओटीपी के माध्यम से
                              सत्यापित और पहचान की स्व-घोषणा पर्याप्त है।
                            </li>
                            <li>
                              पूर्ण केवाईसी पीपीआई के लिए, आपको वैध आधिकारिक वैध
                              दस्तावेज (OVD) जैसे आधार, पैन, पासपोर्ट, मतदाता
                              पहचान पत्र या ड्राइविंग लाइसेंस, साथ ही पता प्रमाण
                              प्रदान करके केवाईसी प्रक्रिया पूरी करनी होगी।
                              सत्यापन ई-केवाईसी, वी-सीआईपी या
                              भौतिक/मुख्य-अभिमुखी विधियों से हो सकता है।
                            </li>
                            <li>
                              यदि गैर-मुख्य-अभिमुखी मोड में आधार ओटीपी-आधारित
                              ई-केवाईसी का उपयोग कर रहे हैं, तो आप घोषणा करते
                              हैं कि इस विधि का उपयोग करके हमसे या किसी अन्य
                              इकाई से कोई अन्य खाता खोला गया है या खोला जाएगा।
                              अलर्ट और ओटीपी केवल आधार से पंजीकृत मोबाइल नंबर पर
                              भेजे जाएंगे। यदि एक वर्ष के भीतर CDD पूरी नहीं
                              होती, तो PPI बंद हो जाएगा।
                            </li>
                            <li>
                              हम आपके पंजीकरण को अस्वीकार करने, सुविधाओं को
                              सीमित करने या यदि जानकारी असटीक, अपूर्ण, संदिग्ध
                              या किसी कानून/नीति का उल्लंघन करती है तो आपके
                              उपयोगकर्ता खाते को निलंबित/समाप्त करने का अधिकार
                              रखते हैं।
                            </li>
                            <li>
                              आप प्रतिनिधित्व और वारंटी देते हैं कि आप किसी भी
                              कानून के तहत सेवाओं का उपयोग करने से प्रतिबंधित
                              नहीं हैं, आप किसी व्यक्ति/इकाई का प्रतिरूपण नहीं
                              करेंगे, और प्रदान की गई सभी जानकारी सत्य, सटीक और
                              पूर्ण है।
                            </li>
                            <li>
                              पंजीकरण द्वारा, आप नियामक प्राधिकरणों जैसे CERSAI
                              के साथ CKYCR अपडेट के लिए, और सत्यापन/सेवा वितरण
                              के लिए तृतीय-पक्ष सेवा प्रदाताओं के साथ अपने डेटा
                              साझा करने की सहमति देते हैं।
                            </li>
                            <li>
                              PPI केवल उन व्यक्तियों को जारी किए जा सकते हैं जो
                              भारतीय कानूनों के तहत कानूनी रूप से बाध्यकारी
                              अनुबंध करने में सक्षम हैं।
                            </li>
                            <li>
                              सभी PPI भारतीय रुपये (INR) में नामित होंगे और केवल
                              भारत में उपयोग किए जाएंगे।
                            </li>
                            <li>
                              जारीकर्ता को KYC तथा AML विनियमों के अनुसार ग्राहक
                              पहचान सत्यापित या प्रमाणित करने का अधिकार है।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">4 पीपीआई के प्रकार</h5>
                        <div className="container my-4">
                          <p>
                            {" "}
                            एनकैश निम्नलिखित श्रेणियों के पीपीआई जारी करता है:
                          </p>
                          <ul>
                            <li>
                              पर्वू-भुगतान कार्ड – पीओएस, ई-कॉमर्स या ऑनलाइन
                              व्यापारियों पर लेन-देन के लिए उपयोग किए जाने वाले
                              भौतिक या आभासी कार्ड।
                            </li>
                            <li>
                              डिजिटल वॉलेट – ग्राहकों को डिजिटल लेन-देन, बिल
                              भुगतान और इन-स्टोर खरीदारी के लिए धन संग्रह,
                              प्रबंधन और उपयोग की अनुमति देने वाले रीलोडेबल
                              वॉलेट खाते।
                            </li>
                            <li>
                              मील और ईंधन कार्ड – भोजन और ईंधन जैसे विशिष्ट
                              व्यापारी श्रेणियों के लिए RBI और कर विनियमों के
                              अनुरूप प्रतिबंधित-उपयोग PPI।
                            </li>
                            <li>
                              गिफ्ट PPI – उपहार या प्रचार उद्देश्यों के लिए जारी
                              किए जाने वाले गैर-रीलोडेबल प्रीपेड भुगतान साधन।
                            </li>
                          </ul>
                          <p>
                            पीपीआई के प्रकार: एनकैश निम्नलिखित श्रेणियों के
                            पीपीआई जारी करता है:
                          </p>
                        </div>

                        <h5 className="c15 mt-6">
                          5.पीपीआई का जारीकरण, सक्रियण और वैधता
                        </h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              सफल पंजीकरण और सत्यापन (लागू केवाईसी) पर, हम आपको
                              डिजिटल रूप (वॉलेट) या भौतिक/आभासी कार्ड रूप में
                              एनकैश पीपीआई उत्पाद जारी करेंगे।
                            </li>

                            <li>
                              भौतिक कार्ड आपके पंजीकृत पते पर अनुरोध पर वितरित
                              किए जाएंगे, शुल्क और उपलब्धता के अधीन। आपको एनकैश
                              प्लेटफ़ॉर्म के माध्यम से वर्णित प्रक्रिया का उपयोग
                              करके कार्ड सक्रिय करना होगा। सभी लेन-देन भारतीय
                              रुपये (INR) में होंगे। अंतरराष्ट्रीय उपयोग की
                              अनुमति नहीं है।
                            </li>

                            <li>
                              पीपीआई किसी भी परिस्थिति में गैर-हस्तांतरणीय है और
                              केवल आपके द्वारा उपयोग किया जा सकता है।
                            </li>

                            <li>
                              यदि हम धोखाधड़ी, धन शोधन या लागू कानूनों के
                              गैर-अनुपालन का संदेह करते हैं, तो हम पीपीआई जारी
                              करने या सक्रिय करने से इनकार कर सकते हैं।
                            </li>

                            <li>
                              सभी पीपीआई एनकैश की संपत्ति बने रहते हैं और
                              ग्राहकों को केवल वैध उपयोग के लिए जारी किए जाते
                              हैं।
                            </li>

                            <li>
                              पीपीआई या वॉलेट में बनाए रखे गए बैलेंस पर कोई
                              ब्याज देय नहीं होगा।
                            </li>

                            <li>
                              ग्राहक को लॉगिन क्रेडेंशियल, पिन और पासवर्ड की
                              गोपनीयता बनाए रखनी होगी और किसी भी अनधिकृत उपयोग
                              के लिए पूरी तरह जिम्मेदार होगा।
                            </li>

                            <li>
                              सामान्य प्रयोजन पुनः लोड करने योग्य (जीपीआर)
                              कार्डों के लिए कार्ड वैधता
                              <ul>
                                <li>
                                  एनकैश द्वारा जारी किए गए जीपीआर कार्ड जारी
                                  होने की तिथि से कम से कम तीन (3) वर्षों की
                                  अवधि के लिए वैध रहेंगे, जब तक कि कार्ड पर
                                  अन्यथा निर्दिष्ट न हो या जारी करते समय सूचित न
                                  किया गया हो।
                                </li>
                                <li>
                                  समाप्ति पर, कार्डधारक लागू नीतियों और केवाईसी
                                  आवश्यकताओं के अधीन, नवीनीकरण या प्रतिस्थापन का
                                  अनुरोध कर सकता है।
                                </li>
                              </ul>
                            </li>

                            <li>
                              उपहार कार्डों के लिए कार्ड वैधता
                              <ul>
                                <li>
                                  उपहार कार्ड जारी होने की तिथि से एक (1) वर्ष
                                  की अवधि के लिए वैध रहेंगे, जब तक कि विनियमों
                                  द्वारा कोई भिन्न वैधता अवधि अनिवार्य न हो या
                                  जारी करते समय निर्दिष्ट न हो।
                                </li>
                                <li>
                                  समाप्ति के बाद उपहार कार्ड पर शेष बची किसी भी
                                  अप्रयुक्त राशि का प्रबंधन लागू आरबीआई
                                  दिशानिर्देशों और एनकैश नीतियों के अनुसार किया
                                  जाएगा।
                                </li>
                              </ul>
                              <li>
                                एनकैश ग्राहक को पूर्व सूचना प्रदान करने के बाद
                                एक (1) वर्ष के लिए निष्क्रिय रहने वाले पीपीआई या
                                वॉलेट को निष्क्रिय कर सकता है।
                              </li>
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">6. पीपीआई सीमाए</h5>
                        <div className="container my-4">
                          <p>
                            पीपीआई लोड और लेन-देन सीमाएंआरबीआई वर्गी करण के अनसु
                            ार होंगी:
                          </p>
                          <div className="w-full overflow-x-auto my-3">
                            <table className="table table-bordered table-striped min-w-max w-full">
                              <thead className=" ">
                                <tr>
                                  <th className="text-center bg-secondary text-white">
                                    पीपीआई प्रकार
                                  </th>
                                  <th className="text-center bg-secondary text-white">
                                    लोड सीमा
                                  </th>
                                  <th className="text-center bg-secondary text-white">
                                    वार्षिक लोड सीमा
                                  </th>
                                  <th className="text-center bg-secondary text-white">
                                    केवाईसी आवश्यकता
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>छोटा पीपीआई</td>
                                  <td>₹10,000</td>
                                  <td>₹1,20,000</td>
                                  <td>न्यूनतम केवाईसी</td>
                                </tr>
                                <tr>
                                  <td>पूर्ण-केवाईसी पीपीआई</td>
                                  <td>₹2,00,000</td>
                                  <td>अनुमति अनुसार</td>
                                  <td>पूर्ण केवाईसी</td>
                                </tr>
                                <tr>
                                  <td>गिफ्ट पीपीआई</td>
                                  <td>₹10,000</td>
                                  <td>गैर-रीलोडेबल</td>
                                  <td>न्यूनतम केवाईसी</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="pt-3">
                            आप अपनी उपलब्ध बैलेंस तक डेबिट लेन-देन कर सकते हैं,
                            बिना अलग मासिक डेबिट सीमा के, बशर्ते समग्र उपयोग
                            आरबीआई दिशानिर्देशों के अधीन लागू सीमाओं का अनुपालन
                            करे।
                          </p>
                        </div>

                        <h5 className="c15 mt-6">
                          7. धन का लोडिंग एवं रीलोडिंग
                        </h5>
                        <div className="container my-4">
                          <ol>
                            <li>
                              आप अपने एनकैश पीपीआई उत्पादों में धन लोड/रीलोड कर
                              सकते हैं, जैसे बैंक हस्तांतरण (NEFT/IMPS), UPI,
                              डेबिट/क्रेडिट कार्ड, नेट बैंकिंग या अन्य पूर्ण-KYC
                              PPI से, RBI दिशानिर्देशों और हमारी सीमाओं के अधीन।
                              (नकद लोडिंग की अनुमति नहीं)
                            </li>

                            <li>
                              लोडिंग गैर-ब्याज-धारक है, और धन इलेक्ट्रॉनिक रूप
                              से संग्रहित है।
                            </li>

                            <li>
                              छोटे PPI के लिए: केवल अनुमति प्राप्त भुगतान
                              विधियों से रीलोडेबल — अर्थात डेबिट/क्रेडिट कार्ड,
                              UPI, नेट बैंकिंग एवं बैंक खाते। मासिक लोडिंग सीमा:
                              RBI के अनुसार ₹10,000 से अधिक नहीं। नकद लोडिंग, धन
                              हस्तांतरण बाहर, या नकद निकासी की अनुमति नहीं।
                              वार्षिक क्रेडिट सीमा: ₹1,20,000 से अधिक नहीं।
                            </li>

                            <li>
                              पूर्ण-KYC PPI के लिए: उच्च सीमाएं लागू। अधिकतम
                              बैलेंस: ₹2,00,000 से अधिक नहीं। मासिक लोडिंग:
                              समग्र बैलेंस कैप से परे कोई विशेष सीमा नहीं; जोखिम
                              मूल्यांकन के अधीन। नकद लोडिंग की अनुमति नहीं।
                            </li>

                            <li>
                              आधार OTP ई-KYC (गैर-मुख्य-अभिमुखी) से खोले गए
                              खातों के लिए: समग्र बैलेंस ₹1,00,000 से अधिक नहीं;
                              वार्षिक क्रेडिट ₹2,00,000 से अधिक नहीं। यदि सीमाएं
                              पार होती हैं → पूर्ण CDD तक संचालन बंद होगा।
                            </li>

                            <li>
                              हम आपके जोखिम प्रोफाइल, लेन-देन इतिहास या संचालन
                              जोखिमों के आधार पर आंतरिक सीमाएं निर्धारित कर सकते
                              हैं।
                            </li>

                            <li>
                              यदि लोडिंग लागू कानूनों का उल्लंघन करती है,
                              संदिग्ध प्रतीत होती है या सीमाओं से अधिक है, तो हम
                              किसी भी लोडिंग को अस्वीकार या उलट सकते हैं।
                            </li>

                            <li>
                              आंशिक या अतिरिक्त लोडिंग की अनुमति नहीं हो सकती;
                              आपको सही राशि सुनिश्चित करनी होगी।
                            </li>
                          </ol>
                        </div>

                        <h5 className="c15 mt-6">
                          8. एनकैश पीपीआई उत्पादों का उपयोग
                        </h5>
                        <div className="container my-4">
                          <ol>
                            <li>
                              हमारे वॉलेट/कार्ड/UPI स्वीकार करने वाले अधिकृत
                              व्यापारियों (ऑनलाइन/ऑफलाइन) पर वस्तुओं एवं सेवाओं
                              की खरीद।
                            </li>
                            <li>
                              बिल भुगतान, मोबाइल/DTH रिचार्ज, उपयोगिता भुगतान,
                              और अन्य अनुमति सेवाएं।
                            </li>
                            <li>
                              पूर्व-पंजीकृत लाभार्थियों को पीयर-टू-पीयर धन
                              हस्तांतरण (केवल पूर्ण-KYC PPI के लिए)।
                            </li>
                            <li>
                              ATM/POS पर नकद निकासी (केवल पूर्ण-KYC PPI के लिए,
                              प्रति लेन-देन ₹2,000 तक और मासिक ₹10,000 तक)।
                            </li>
                            <li>
                              लेन-देन PIN, OTP, बायोमेट्रिक, CVV या अन्य
                              प्रमाणीकरण कारकों जैसे सुरक्षा उपायों का उपयोग
                              करके अधिकृत किए जाते हैं।
                            </li>
                            <li>
                              धन हस्तांतरण के लिए (पूर्ण-KYC PPI):
                              <ul>
                                <li>
                                  स्रोत खाते या आपके सत्यापित बैंक खाते में
                                  वापस।
                                </li>
                                <li>
                                  पूर्व-पंजीकृत लाभार्थियों को: प्रति लाभार्थी
                                  प्रति माह ₹2,00,000 तक।
                                </li>
                                <li>
                                  अन्य खातों/PPI/Debit/Credit कार्ड को: प्रति
                                  माह ₹10,000 तक।
                                </li>
                                <li>
                                  आपकी उपलब्ध PPI बैलेंस से परे वस्तुएं या
                                  सेवाओं की खरीद पर कोई अतिरिक्त सीमा नहीं।
                                </li>
                              </ul>
                            </li>
                            <li>
                              अंतरराष्ट्रीय लेन-देन, नकद लोडिंग या प्रतिबंधित
                              गति विधियों के लिए उपयोग की अनुमति नहीं है।
                            </li>
                            <li>
                              हम UPI, NPCI या अन्य भुगतान प्रणालियों के साथ
                              एकीकरण कर सकते हैं, लेकिन आप सभी प्रारंभिक लेन-देन
                              के लिए जिम्मेदार रहेंगे।
                            </li>
                            <li>
                              आप सहमत हैं कि एनकैश PPI उत्पादों का उपयोग किसी भी
                              अवैध, गैरकानूनी या प्रतिबंधित गति विधियों के लिए
                              नहीं करेंगे, जिसमें धन शोधन, आतंकवाद वित्तपोषण,
                              जुआ, प्रतिबंधित वस्तुएं/सेवाएं (जैसे ड्रग्स,
                              हथियार) की खरीद, कर चोरी या लागू कानूनों का
                              उल्लंघन शामिल है।
                            </li>
                            <li>
                              यदि संदिग्ध या इन शर्तों का उल्लंघन होता है, तो हम
                              लेन-देन को ब्लॉक या अस्वीकार कर सकते हैं।
                            </li>
                          </ol>
                        </div>

                        <h5 className="c15 mt-6">9. सीमाएं एवं शुल्क</h5>
                        <div className="container my-4">
                          <ol>
                            <li>
                              लेन-देन एवंबैलेंस सीमाएं PPI प्रकार एवं KYC स्थिति
                              पर निर्भर हैं, RBI दिशानिर्देशों के अनुसार:
                              <ul>
                                <li>
                                  छोटा PPI: अधिकतम बैलेंस एवं लोडिंग सीमा प्रति
                                  माह ₹10,000; हस्तांतरण एवं नकद निकासी की
                                  अनुमति नहीं।
                                </li>
                                <li>
                                  पूर्ण-KYC PPI: अधिकतम बैलेंस ₹2,00,000; धन
                                  हस्तांतरण एवं नकद निकासी सीमाएं अनुभाग 8 के
                                  अनुसार।
                                </li>
                              </ul>
                            </li>
                            <li>
                              हम जोख़िम मूल्यांकन के आधार पर सीमाओं को संशोधित
                              कर सकते हैं, जहां आवश्यक हो वहां सूचना के साथ।
                            </li>
                            <li>
                              जारी करने, लोडिंग, लेन-देन, नकद निकासी,
                              निष्क्रियता, कार्ड प्रतिस्थापन या अन्य सेवाओं के
                              लिए शुल्क लागू हो सकते हैं।
                            </li>
                            <li>
                              शुल्क गैर-वापसी योग्य हैं और 30 दिनों की सूचना के
                              साथ परिवर्तन योग्य हैं। GST या अन्य कर लागू
                              कानूनों के अनुसार लागू हो सकते हैं।
                            </li>
                            <li>
                              बुनियादी सेवाओं जैसे बैलेंस जांच या मिनी-स्टेटमेंट
                              के लिए कोई शुल्क नहीं, जब तक अन्यथा निर्दिष्ट न
                              हो।
                            </li>
                            <li>
                              यदि आपका PPI या वॉलेट समाप्त हो जाता है लेकिन
                              अनुपयोगित बैलेंस रहता है, तो समाप्ति के बाद मासिक
                              सेवा शुल्क ₹500 लगाया जाएगा यदि बैलेंस ₹1,000 से
                              अधिक हो। ₹1,000 या कम बैलेंस के लिए यह शुल्क माफ
                              किया जाएगा ताकि छोटे बैलेंस का क्षरण रोका जा सके।
                            </li>
                            <li>
                              ग्राहक अनुरोध कर सकते हैं:
                              <ul>
                                <li>बचे बैलेंस का स्रोत खाते में रिफंड, या</li>
                                <li>नया PPI जारी करना (KYC के अधीन)</li>
                              </ul>
                            </li>
                            <li>शुल्क तालिका:</li>
                            <div className="w-full overflow-x-auto my-3">
                              <table className="table table-bordered table-striped     overflow-wrap: anywhere;">
                                <thead>
                                  <tr>
                                    <th className="text-center bg-secondary text-white">
                                      सेवा विवरण
                                    </th>
                                    <th className="text-center bg-secondary text-white">
                                      शुल्क (₹)
                                    </th>
                                    <th className="text-center bg-secondary text-white">
                                      लागतू ा
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      भौतिक कार्ड जारी करना / पुनः-जारी करना
                                    </td>
                                    <td>250</td>
                                    <td>प्रति कार्ड जारी या प्रति स्थापित</td>
                                  </tr>
                                  <tr>
                                    <td>गिफ्ट कार्ड पुनः-सक्रियण</td>
                                    <td>250</td>
                                    <td>प्रति पुनः-सक्रियण</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      एटीएम – वित्तीय लेन-देन (नकद निकासी)
                                    </td>
                                    <td>25</td>
                                    <td>प्रति लेन-देन</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      एटीएम – गैर-वित्तीय लेन-देन (PIN परिवर्तन,
                                      बैलेंस जांच, मिनी स्टेटमेंट)
                                    </td>
                                    <td>15</td>
                                    <td>प्रति लेन-देन</td>
                                  </tr>
                                  <tr>
                                    <td>सरचार्ज – सरकारी लेन-देन</td>
                                    <td>2.5%</td>
                                    <td>प्रति लेन-देन</td>
                                  </tr>
                                  <tr>
                                    <td>सरचार्ज – ईंधन लेन-देन</td>
                                    <td>1.5%</td>
                                    <td>प्रति लेन-देन</td>
                                  </tr>
                                  <tr>
                                    <td>सरचार्ज – रेलवे लेन-देन</td>
                                    <td>₹10</td>
                                    <td>प्रति लेन-देन</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <li>
                              सभी शुल्क लागू करों को छोड़कर हैं जब तक अन्यथा कहा
                              न जाए।
                            </li>
                            <li>
                              उदाहरण: ₹1,000 सरकारी लेन-देन के लिए, ₹10 + 18%
                              जीएसटी (₹11.80) का सरचार्ज लागू हो सकता है।
                            </li>
                            <li>
                              नोट्स:
                              <ul>
                                <li>
                                  एनकैश किसी भी शुल्क को पूर्ण या आंशिक रूप से
                                  अपनी विवेकाधीनता से माफ कर सकता है।
                                </li>
                                <li>
                                  सभी शुल्क व्यवसाय या नियामक आवश्यकताओं के आधार
                                  पर संशोधनीय हैं और एनकैश वेबसाइट या आधिकारिक
                                  अधिसूचनाओं के माध्यम से संचारित किए जाएंगे।
                                </li>
                                <li>
                                  सरचार्ज अधिग्रहण बैंक, नेटवर्क भागीदार या
                                  व्यापारी श्रेणी के आधार पर भिन्न हो सकते हैं।
                                </li>
                              </ul>
                            </li>
                          </ol>
                        </div>

                        <h5 className="c15 mt-6">
                          10. उपयोगकर्ता दायित्व एवं जिम्मेदारी
                        </h5>
                        <div className="container my-4">
                          <p>आपको निम्नलिखित करना चाहिए:</p>
                          <ul>
                            <li>
                              पंजीकरण, केवाईसी एवं लेन-देन के लिए सटीक, पूर्ण और
                              अपडेटेड जानकारी प्रदान करें।
                            </li>
                            <li>
                              अपने लॉगिन क्रेडेंशियल, पिन, ओटीपी, कार्ड विवरण
                              एवं उपकरण को सुरक्षित रखें। इन्हें किसी के साथ
                              साझा न करें।
                            </li>
                            <li>
                              किसी भी अनधिकृत पहुंच, हानि, चोरी या आपके पीपीआई,
                              कार्ड या उपकरण के समझौते पर तुरंत हमारी ग्राहक
                              सहायता को{" "}
                              <a
                                href="mailto:support@enkash.com"
                                className="text-break"
                              >
                                support@enkash.com
                              </a>{" "}
                              पर रिपोर्ट करें।
                            </li>
                            <li>
                              लेन-देन प्रारंभ करने से पहले पर्याप्त पीपीआई
                              बैलेंस सुनिश्चित करें।
                            </li>
                            <li>
                              सभी लागू कानूनों का पालन करें, जिसमें पीएमएलए एवं
                              आरबीआई निर्देश शामिल हैं, और किसी भी ऑडिट, जांच या
                              रिपोर्टिंग आवश्यकताओं में हमसे सहयोग करें।
                            </li>
                            <li>
                              अपने व्यक्तिगत विवरण, पता, मोबाइल नंबर, ईमेल या
                              पीईपी स्थिति में किसी भी परिवर्तन पर हमें तुरंत
                              सूचित करें।
                            </li>
                            <li>
                              एनकैश प्लेटफॉर्म या पीपीआई उत्पादों को रिवर्स
                              इंजीनियर, हैक, संशोधित या दुरुपयोग न करें।
                            </li>
                            <li>
                              स्पष्ट रूप से अनुमति न होने पर पीपीआई का
                              व्यावसायिक/वाणिज्यिक उद्देश्यों के लिए उपयोग न
                              करें।
                            </li>
                            <li>
                              आप अपने उपयोगकर्ता खाते से प्रारंभि त सभी लेन-देन
                              के लिए एकमात्र जिम्मेदार हैं, चाहे वे आपके द्वारा
                              अधिकृत हों या न हों, जब तक कि हमारी सकल लापरवाही
                              या जानबूझकर कदाचार से सिद्ध न हो।
                            </li>
                            <li>
                              आप हमें आपके खाते, लेन-देन, अपडेट या प्रचारों के
                              संबंध में संचार (एसएमएस, ईमेल, कॉल, अधिसूचनाएं)
                              प्राप्त करने की सहमति देते हैं।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">
                          11. सुरक्षा एवं धोखाधड़ी निवारण
                        </h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              हम उद्योग-मानक सुरक्षा उपायों का उपयोग करते हैं,
                              जिसमें एन्क्रिप्शन, फायरवॉल एवं धोखाधड़ी पहचान
                              प्रणालियां शामिल हैं, ताकि आपके डेटा एवं लेन-देन
                              की रक्षा हो।
                            </li>
                            <li>
                              आपको सुरक्षित उपकरण एवं नेटवर्क का उपयोग करना
                              चाहिए, अपना ऐप/सॉफ्टवेयर अपडेट रखना चाहिए, और
                              संवेदनशील लेन-देन के लिए सार्वजनिक वाई-फाई से बचना
                              चाहिए।
                            </li>
                            <li>
                              संदिग्ध धोखाधड़ी, अनधिकृत पहुंच या सुरक्षा उल्लंघन
                              के मामले में, हम लेन-देन ब्लॉक कर सकते हैं, आपके
                              उपयोगकर्ता खाते को निलंबित कर सकते हैं, बैलेंस
                              फ्रीज कर सकते हैं, या प्राधिकरणों (जैसे आरबीआई,
                              FIU-IND) को रिपोर्ट कर सकते हैं बिना दायित्व के।
                            </li>
                            <li>
                              आप हमें नियामकों, कानूनी प्रवर्तन, बैंकों, भुगतान
                              नेटवर्क या तृतीय-पक्ष भागीदारों के साथ जानकारी
                              साझा करने की अधिकृत करते हैं सत्यापन, धोखाधड़ी
                              निवारण या अनुपालन के लिए।
                            </li>
                            <li>
                              खोए/चोरी कार्ड/वॉलेट के लिए: तुरंत रिपोर्ट करें;
                              हम पीपीआई ब्लॉक करेंगे। रिपोर्टिंग में देरी या
                              आपकी लापरवाही के कारण हानि के लिए हम दायी नहीं
                              हैं।
                            </li>
                            <li>
                              एक बार रिपोर्ट होने पर, पीपीआई या वॉलेट ब्लॉक हो
                              जाएगा और पुनः प्राप्ति पर भी पुनः उपयोग नहीं किया
                              जा सकेगा। रिपोर्ट के बाद अनधिकृत लेन-देन के लिए आप
                              दायी नहीं होंगे।
                            </li>
                            <li>
                              हम उच्च-जोखिम लेन-देन के लिए अति रिक्रित
                              प्रमाणीकरण की आवश्यकता कर सकते हैं।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">
                          12. रिफंड, रद्दीकरण एवं उलटाव
                        </h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              असफल लेन-देन के लिए: रिफंड मूल स्रोत पर लागू
                              नियामक निर्देशों, नेटवर्क नियमों और समय-समय पर
                              निर्धारित एवं अपडेट अन्य नियमों के अनुसार प्रोसेस
                              किए जाएंगे, जांच के अधीन।
                            </li>
                            <li>
                              व्यापारी-प्रारंभित रिफंड (जैसे रिटर्न के लिए)
                              व्यापारी से प्राप्ति पर आपके पीपीआई बैलेंस में जमा
                              किए जाएंगे।
                            </li>
                            <li>
                              कोई नकद रिफंड नहीं; सभी रिफंड इलेक्ट्रॉनिक रूप से
                              पीपीआई या स्रोत खाते में।
                            </li>
                            <li>
                              रिफंड वैध अनुरोध के 5 व्यावसायिक दिनों के भीतर
                              सत्यापन के अधीन प्रोसेस किए जाएंगे।
                            </li>
                            <li>
                              रद्दीकरण के लिए: व्यापारी से सीधे संपर्क करें; हम
                              सुविधाकर्ता के रूप में कार्य करते हैं और व्यापारी
                              निर्देशों एवं आरबीआई समयसीमाओं (असफल लेन-देन के
                              लिए T+1) के अनुसार रिफंड प्रोसेस करते हैं।
                            </li>
                            <li>
                              त्रुटिपूर्ण लोड के लिए उलटाव लागू नियामक
                              निर्देशों, नेटवर्क नियमों और शुल्क एवं सत्यापन के
                              अधीन अनुमत हो सकते हैं।
                            </li>
                            <li>
                              दावा न किए गए रिफंड नियामक निर्देशों या नेटवर्क
                              नियमों के अनुसार शासित होंगे। एनकैश वॉलेट/कार्ड के
                              माध्यम से मोबाइल/डीटीएच रिचार्ज, बिल पे या अन्य
                              भुगतान अंतिम होंगे और एनकैश आपके या व्यापारी
                              भागीदारों की त्रुटि/चूक के लिए जिम्मेदार नहीं
                              होगा। बिल पे एवं रिचार्ज लेन-देन प्रारंभ होने पर
                              रिफंड, रिटर्न या रद्द नहीं किए जा सकते और आरबीआई
                              एस्चीटमेंट नियमों के अनुसार व्यवहार किए जा सकते
                              हैं।
                            </li>
                            <li>
                              यदि आप अनजाने में गलत व्यापारी को भुगतान प्रोसेस
                              करते हैं या गलत राशि (जैसे टाइपोग्राफिकल त्रुटि)
                              के लिए, तो आपका एकमात्र उपाय भुगतान प्राप्तकर्ता
                              व्यापारी से सीधे संपर्क करना और राशि रिफंड करवाना
                              है। एनकैश ऐसे विवादों को संभालने या आपको
                              प्रतिपूर्ति/रिवर्सल के लिए दायी नहीं है।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">
                          13. निष्क्रिय खाते एवं स्टेटमेंट
                        </h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              यदि 12 लगातार महीनों (जैसे 12 महीने) में कोई
                              लेन-देन न हो, तो आपका पीपीआई निष्क्रिय/अक्रिय के
                              रूप में वर्गीकृत हो सकता है।
                            </li>
                            <li>
                              आप संपर्क करके और अपडेटेड विवरण प्रदान करके पुनः
                              सक्रिय कर सकते हैं।
                            </li>
                            <li>
                              हम निष्क्रियता शुल्क लगा सकते हैं या केवाईसी
                              पुनः-सत्यापन तक पहुंच पर प्रतिबंधित कर सकते हैं।
                            </li>
                            <li>
                              निष्क्रिय पीपीआई में अनुपयोगी बैलेंस दो वर्षों के
                              बाद निवेशक शिक्षा एवं संरक्षण कोष में स्थानांतरित
                              हो सकता है या आरबीआई के निर्देशानुसार, जबकि समाप्त
                              पीपीआई में बैलेंस जब्त नहीं होंगे और समाप्ति से दो
                              वर्षों के भीतर ग्राहक अनुरोध पर रिफंड किए जा सकते
                              हैं।
                            </li>
                            <li>
                              समाप्त हो चुके कार्डों पर लेनदेन की अनुमति नहीं
                              होगी।
                            </li>
                            <li>
                              ग्राहक सत्यापन एवं लागू शुल्क भुगतान के बाद समाप्त
                              पीपीआई (वॉलेट सहित) का नवीनीकरण या प्रतिस्थापन
                              अनुरोध कर सकते हैं।
                            </li>
                            <li>
                              एनकैश पीपीआई समाप्ति से 45 दिन पहले एसएमएस, ईमेल
                              या ऐप-में अलर्ट के माध्यम से ग्राहकों को सूचित
                              करेगा।
                            </li>
                            <li>
                              ग्राहक के अनुरोध पर, उचित जांच, आवश्यक केवाईसी
                              पूरा करने तथा प्रचलित नियामक आवश्यकताओं के अनुसार,
                              रिफंड सत्यापित स्रोत बैंक खाते में जमा कर दिया
                              जाएगा।
                            </li>
                            <li>
                              यदि एनकैश पीपीआई कार्यक्रम समाप्त किया जाता है या
                              आरबीआई द्वारा संचालन बंद करने का निर्देश दिया जाता
                              है, तो ग्राहक सत्यापित बैंक खाते में बकाया बैलेंस
                              को रीडीम कर सकते हैं।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">14. समापन एवं समाप्ति</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              आप किसी भी समय एनकैश प्लेटफॉर्म के माध्यम से या{" "}
                              <a
                                href="mailto:support@enkash.com"
                                className="text-break"
                              >
                                support@enkash.com
                              </a>{" "}
                              पर संपर्क करके अपने एनकैश पीपीआई उत्पादों का समापन
                              अनुरोध कर सकते हैं। हम अनुरोध को आरबीआई मास्टर
                              निर्देशों के अनुसार प्रोसेस करेंगे।
                            </li>
                            <li>
                              समापन पर, कोई शेष पीपीआई बैलेंस आपके सत्यापित बैंक
                              खाते (पूर्ण-केवाईसी पीपीआई के लिए) में स्थानांतरित
                              या आरबीआई सीमाओं के अनुसार रिफंड किया जाएगा, लागू
                              शुल्क एवं कटौती के बाद।
                            </li>
                            <li>
                              हम निम्नलिखित मामलों में एकतरफा रूप से आपकी पहुंच
                              समाप्त या निलंबित कर सकते हैं:
                              <ul>
                                <li>
                                  यदि आप इन शर्तों, लागू कानूनों या हमारी
                                  नीतियों का उल्लंघन करते हैं।
                                </li>
                                <li>अनुभाग 13 के अनुसार निष्क्रियता के लिए।</li>
                                <li>
                                  धोखाधड़ी, धन शोधन संदिग्ध या नियामक आवश्यकताओं
                                  के कारण।
                                </li>
                                <li>अधिक बल या संचालन मद्दों के मामले में।</li>
                              </ul>
                            </li>
                            <li>
                              समाप्ति पर, निर्धारित अवधि में दावा न किए गए
                              अनुपयोगी बैलेंस जब्त हो सकते हैं, लागू नियामक
                              निर्देशों, नेटवर्क नियमों और समय-समय पर निर्धारित
                              अन्य नियमों के अनुसार। कोई ब्याज या मुआवजा देय
                              नहीं।
                            </li>
                            <li>
                              पीपीआई अधिकतम जारी करने या अंतिम रीलोड/गति विधि से
                              3 वर्ष है, उसके बाद समाप्त हो जाता है, और बैलेंस
                              दावा न किए गए के रूप में संभाले जा सकते हैं।
                            </li>
                            <li>
                              एनकैश किसी भी समय अनुबंध की शर्तों या आरबीआई/भारत
                              सरकार या संबंधित किसी अन्य निकाय द्वारा जारी किसी
                              नियम/नीति या किसी LEA या अन्य प्राधिकरण द्वारा
                              जारी किसी आदेश/निर्देश के उल्लंघन के मामले में
                              आपके एनकैश वॉलेट को समाप्त करने का अधिकार रखता है।
                              ऐसे घटना में, आपके एनकैश वॉलेट में बैलेंस एनकैश
                              प्लेटफॉर्म से जुड़े आपके बैंक खाते में जमा किया
                              जाएगा। एनकैश संबंधित प्राधिकरणों/नियामकों को
                              जानकारी/रिकॉर्ड (आपके खाते, केवाईसी, लेन-देन आदि
                              विवरण सहित) रिपोर्ट कर सकता है। हम संबंधित
                              निकाय/प्राधिकरण से मंजूरी मिलने तक आपके एनकैश
                              वॉलेट बैलेंस को फ्रीज कर सकते हैं।
                            </li>
                            <li>
                              यदि आपका एनकैश वॉलेट यहां वर्णित आधारों पर समाप्ति
                              के कारण है, तो एनकैश समाप्ति की तिथि से पूर्व 45
                              दिनों की अवधि के दौरान उचित अंतराल पर आपको
                              ईमेल/फोन/अधिसूचना या किसी अन्य अनमुत संचार विधि के
                              माध्यम से चेतावनी देगा। यदि समाप्ति के बाद आपके
                              एनकैश वॉलेट में बकाया बैलेंस है, तो आप किसी भी समय
                              एनकैश से बकाया एनकैश वॉलेट बैलेंस का रिफंड प्रारंभ
                              करने का अनुरोध कर सकते हैं और उक्त बैलेंस आपके
                              एनकैश वॉलेट से पहले जुड़े बैंक खाते या रिफंड
                              अनुरोध के समय प्रदान किए गए बैंक खाते विवरण में
                              स्थानांतरित किया जाएगा।
                            </li>
                            <li>
                              यदि आप किसी संदिग्ध लेन-देन में शामिल हैं या
                              पूर्व-भुगतान भुगतान साधनों के उपयोग को नियंत्रित
                              करने वाले आरबीआई द्वारा जारी नियमों एवं विनियमों
                              का सकल उल्लंघन करते हैं, या आपकी जानकारी/केवाईसी
                              में किसी विसंगति के मामले में, तो एनकैश आपके एनकैश
                              वॉलेट को डेबिट-ओनली मोड में स्थानांतरित करने का
                              अधिकार रखता है। ऐसे मामले में, एनकैश मामले को
                              आरबीआई/उचित प्राधिकरणों को रिपोर्ट कर सकता है और
                              निष्कर्ष प्राप्ति तक उचित खाता कार्रवाई ले सकता
                              है।
                            </li>
                            <li>
                              यदि आपके एनकैश वॉलेट में पिछले 12 महीनों में कोई
                              वित्तीय लेन-देन नहीं है, तो आपका एनकैश वॉलेट
                              निष्क्रिय चिह्नित किया जाएगा और आपको एनकैश द्वारा
                              समय-समय पर परिभाषित उचित प्रक्रिया पूरी करने के
                              बाद ही अपने एनकैश वॉलेट का संचालन कर सकते हैं।
                            </li>
                            <li>
                              आपका एनकैश वॉलेट बैलेंस सुरक्षित रूप से बनाए रखा
                              जाएगा और कोई लंबित रिफंड अभी भी आपके एनकैश वॉलेट
                              में जमा किया जाएगा, और आप हमसे सभी संचार प्राप्त
                              करना जारी रखेंगे। हालांकि, आप बिना ऐसे प्रक्रिया
                              के अपने निष्क्रिय एनकैश वॉलेट का उपयोग लोडिंग सहित
                              किसी भी लेन-देन के लिए नहीं कर पाएंगे। यदि आपके
                              एनकैश वॉलेट को निष्क्रिय चिह्नित किया गया है और
                              आपका मोबाइल नंबर बदल गया है, तो आपको एनकैश द्वारा
                              समय-समय पर परिभाषित उचित प्रक्रिया पूरी करनी होगी।
                              ऐसी प्रक्रिया की पूर्णता पर, आपका एनकैश वॉलेट
                              तुरंत इन T&C में वर्णित प्रक्रिया के अनुसार बंद हो
                              जाएगा, उसके बाद आप नया एनकैश वॉलेट खोलने की
                              प्रक्रिया प्रारंभ कर सकते हैं।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">
                          15. दायित्व एवं क्षति प्रतिपूर्ति
                        </h5>
                        <div className="container my-4">
                          <ul>
                            {" "}
                            <li>
                              हम निम्नलिखित से उत्पन्न किसी भी हानि, क्षति या
                              असुविधा के लिए दायी नहीं हैं:{" "}
                              <ul>
                                {" "}
                                <li>
                                  आपकी लापरवाही, अनधिकृत उपयोग या मुद्दों की
                                  तत्काल रिपोर्ट न करने से।
                                </li>{" "}
                                <li>
                                  अधि क बल घटनाएं, प्रणाली विफलताएं, नेटवर्क
                                  मुद्दे या तृतीय-पक्ष कार्रवाइयां (जैसे
                                  व्यापारी, बैंक)।
                                </li>{" "}
                                <li>
                                  व्यापारी विवाद, वस्तुओं/सेवाओं की गुणवत्ता या
                                  रिफंड में देरी।
                                </li>{" "}
                                <li>
                                  कोई अप्रत्यक्ष, परिणामी, दंडात्मक या विशेष
                                  क्षति।
                                </li>{" "}
                              </ul>{" "}
                            </li>{" "}
                            <li>
                              हमारा दायित्व, यदि कोई हो, हमारे भाग से सिद्ध सकल
                              लापरवाही के मामलों में पीपीआई बैलेंस राशि तक सीमित
                              है।
                            </li>{" "}
                            <li>
                              आप सहमत हैं कि एनकैश पीपीआई उत्पादों के दुरुपयोग,
                              इन शर्तों के उल्लंघन, लागू कानूनों के उल्लंघन या
                              तृतीय-पक्ष दावों से उत्पन्न किसी भी दावों,
                              हानियों, क्षतियों, दायित्वों, लागतों या खर्चों के
                              विरुद्ध हमें, हमारे संबंधित कंपनियों, अधिकारियों,
                              निदेशकों, कर्मचारियों एवं एजेंटों को हानि रहित
                              रखेंगे, बचाएंगे और क्षति प्रतिपूर्ति करेंगे।
                            </li>{" "}
                            <li>
                              हम एनकैश प्लेटफ़ॉर्म, पीपीआई उत्पादों या एकीकृत
                              सेवाओं के संबंध में सभी वारंटी, स्पष्ट या निहित,
                              को अस्वीकार करते हैं, जिसमें वाणिज्यिकता, उद्देश्य
                              के लिए उपयुक्तता या गैर-अतिक्रमण शामिल है।
                            </li>{" "}
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">
                          16. गोपनीयता एवं डेटा संरक्षण
                        </h5>
                        <div className="container my-4">
                          <ul>
                            {" "}
                            <li>
                              आपका व्यक्तिगत डेटा हमारी गोपनीयता नीति{" "}
                              <a
                                href="https://www.enkash.com/policies/privacy-policy"
                                target="_blank"
                                className="text-break"
                              >
                                https://www.enkash.com/policies/privacy-policy
                              </a>{" "}
                              के अनुसार एकत्र, प्रोसेस, संग्रहित एवं साझा किया
                              जाता है, जो सूचना प्रौद्योगिकी (उचित सुरक्षा
                              प्रथाएं एवं प्रक्रियाएं एवं संवेदनशील व्यक्तिगत
                              डेटा या जानकारी) नियम, 2011 का अनुपालन करती है।
                            </li>{" "}
                            <li>
                              हम सेवा वितरण, धोखाधड़ी निवारण एवं अनुपालन के लिए
                              केवाईसी दस्तावेज़, लेन-देन इतिहास, उपकरण जानकारी
                              एवं स्थान जैसे डेटा एकत्र कर सकते हैं।
                            </li>{" "}
                            <li>
                              आप एनकैश, उसके समूह इकाइयों, संबंधित कंपनियों एवं
                              अधिकृत सेवा प्रदाताओं को आपके व्यक्तिगत एवं
                              लेन-देन जानकारी (पहचान, खाता एवं भुगतान विवरण
                              सहित) एकत्र, प्रोसेस, साझा एवं बनाए रखने की अधिकृत
                              करते हैं, तृतीय-पक्षों के साथ केवल संचालन, नियामक,
                              सत्यापन, निपटान, अनुपालन, धोखाधड़ी निगरानी या
                              भुगतान प्रोसेसिंग उद्देश्यों के लिए, लागू कानूनों
                              एवं डेटा प्रतिधारण आवश्यकताओं के अनुरूप।
                            </li>{" "}
                            <li>
                              कोई गैर-आवश्यक डेटा साझाकरण (मार्केटिंग,
                              एनालिटिक्स या प्रचार के लिए) केवल ग्राहक की स्पष्ट
                              ऑप्ट-इन सहमति पर होगा।
                            </li>{" "}
                            <li>
                              हम डेटा की रक्षा के लिए उचित सुरक्षा प्रथाओं का
                              कार्यान्वयन करते हैं, लेकिन हमारे नियंत्रण से परे
                              उल्लंघनों के लिए दायी नहीं हैं। यह क्षति
                              प्रतिपूर्ति एनकैश की लापरवाही या प्रणाली विफलताओं
                              से उत्पन्न हानियों तक विस्तारित नहीं होगी।
                            </li>{" "}
                            <li>
                              सभी व्यक्तिगत डेटा डिजिटल व्यक्तिगत डेटा संरक्षण
                              अधिनियम, 2023, आरबीआई डेटा गोपनीयता दिशानिर्देशों
                              एवं एनकैश की गोपनीयता नीति के अनुसार संभाला जाएगा।
                            </li>{" "}
                            <li>
                              आगे की जानकारी एवं उन्नयन के लिए ग्राहक डेटा
                              संरक्षण अधिकारी, एनकैश से संपर्क कर सकते हैं।
                              (संपर्क जानकारी: dpo@enkash.com)
                            </li>{" "}
                          </ul>
                        </div>
                        <h5 className="c15 mt-6">17. बौद्धिक संपदा</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              एनकैश प्लेटफॉर्म, ट्रेडमार्क (जैसे "एनकैश"), लोगो,
                              सॉफ्टवेयर एवं सामग्री में सभी अधिकार, शीर्षक एवं
                              हित हमारे या हमारे लाइसेंसधारकों के स्वामित्व में
                              हैं।
                            </li>
                            <li>
                              आपको व्यक्तिगत उपयोग के लिए प्लेटफॉर्म का उपयोग
                              करने के लिए सीमित, गैर-विशिष्ट, गैर-हस्तांतरणीय
                              लाइसेंस प्रदान किया जाता है।
                            </li>
                            <li>
                              आप हमारी लिखित सहमति के बिना कॉपी, संशोधित, वितरित
                              या व्युत्पन्न कार्य नहीं बना सकते।
                            </li>
                          </ul>
                        </div>
                        <h5 className="c15 mt-6">
                          18. शिकायत निवारण एवं ग्राहक सहायता
                        </h5>
                        <div className="container my-4">
                          <p>
                            एनकैश पीपीआई उत्पादों से संबंधित किसी भी प्रश्न या
                            शिकायत के लिए, आप निम्नलिखित उन्नयन स्तरों के माध्यम
                            से हमसे संपर्क कर सकते हैं। शिकायतें तुरंत स्वीकार
                            की जाएंगी और नीचे निर्दिष्ट समय सीमाओं के भीतर हल की
                            जाएंगी।
                          </p>
                          <div className="w-full overflow-x-auto my-3">
                            <table className="table table-bordered table-striped min-w-max w-full">
                              <thead>
                                <tr>
                                  <th className="text-center bg-secondary text-white">
                                    स्तर
                                  </th>
                                  <th className="text-center bg-secondary text-white">
                                    जिम्मेदार व्यक्ति
                                  </th>
                                  <th className="text-center bg-secondary text-white">
                                    उपलब्ध मोड
                                  </th>
                                  <th className="text-center bg-secondary text-white">
                                    अनुमानित टीएटी समाधान के लिए
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>स्तर 1</td>
                                  <td>ग्राहक सहायता कार्यकारी</td>
                                  <td>
                                    फोन: +91 85304 90475
                                    <br />
                                    ईमेल: support@enkash.com
                                    <br />
                                    रजिस्टर्ड ऑफिस: 91, स्प्रिंग बोर्ड 175,
                                    कागलवाला हाउस, दूसरी मंज़िल, कलिना,
                                    सांताक्रूज़ (E), मुंबई 400098
                                    <br />
                                    कॉर्पोरेट ऑफिस: 91, स्प्रिंग बोर्ड, गेट नंबर
                                    2, प्लांट नंबर 6, LBS मार्ग, गोदरेज एंड बॉयस
                                    इंडस्ट्री एस्टेट, विक्रोली वेस्ट, मुंबई,
                                    महाराष्ट्र, 400079
                                  </td>
                                  <td>3 व्यावसायिक दिनों के भीतर</td>
                                </tr>
                                <tr>
                                  <td>स्तर 2</td>
                                  <td>ग्राहक सहायता टीम प्रबंधक</td>
                                  <td>
                                    फोन: +91 85304 90475
                                    <br />
                                    ईमेल: csmanager@enkash.com
                                    <br />
                                    रजिस्टर्ड ऑफिस: 91, स्प्रिंग बोर्ड 175,
                                    कागलवाला हाउस, दूसरी मंज़िल, कलिना,
                                    सांताक्रूज़ (E), मुंबई 400098
                                    <br />
                                    कॉर्पोरेट ऑफिस: 91, स्प्रिंग बोर्ड, गेट नंबर
                                    2, प्लांट नंबर 6, LBS मार्ग, गोदरेज एंड बॉयस
                                    इंडस्ट्री एस्टेट, विक्रोली वेस्ट, मुंबई,
                                    महाराष्ट्र, 400079
                                  </td>
                                  <td>7 व्यावसायिक दिनों के भीतर</td>
                                </tr>
                                <tr>
                                  <td>स्तर 3</td>
                                  <td>शिकायत निवारण अधिकारी</td>
                                  <td>
                                    फोन: +91 95132 51477
                                    <br />
                                    ईमेल: grievanceofficer@enkash.com
                                    <br />
                                    रजिस्टर्ड ऑफिस: 91, स्प्रिंग बोर्ड 175,
                                    कागलवाला हाउस, दूसरी मंज़िल, कलिना,
                                    सांताक्रूज़ (E), मुंबई 400098
                                    <br />
                                    कॉर्पोरेट ऑफिस: 91, स्प्रिंग बोर्ड, गेट नंबर
                                    2, प्लांट नंबर 6, LBS मार्ग, गोदरेज एंड बॉयस
                                    इंडस्ट्री एस्टेट, विक्रोली वेस्ट, मुंबई,
                                    महाराष्ट्र, 400079
                                  </td>
                                  <td>30 व्यावसायिक दिनों के भीतर</td>
                                </tr>
                                <tr>
                                  <td>स्तर 4</td>
                                  <td>नोडल अधिकारी</td>
                                  <td>
                                    फोन: +91 95132 51499
                                    <br />
                                    ईमेल: nodalofficer@enkash.com
                                    <br />
                                    रजिस्टर्ड ऑफिस: 91, स्प्रिंग बोर्ड 175,
                                    कागलवाला हाउस, दूसरी मंज़िल, कलिना,
                                    सांताक्रूज़ (E), मुंबई 400098
                                    <br />
                                    कॉर्पोरेट ऑफिस: 91, स्प्रिंग बोर्ड, गेट नंबर
                                    2, प्लांट नंबर 6, LBS मार्ग, गोदरेज एंड बॉयस
                                    इंडस्ट्री एस्टेट, विक्रोली वेस्ट, मुंबई,
                                    महाराष्ट्र, 400079
                                  </td>
                                  <td>15 व्यावसायिक दिनों के भीतर</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <h5 className="c15 mt-6">
                          19. सामान्य शर्तें एवं नियम
                        </h5>
                        <div className="container my-4">
                          <p>
                            अनहल शिकायतें नोडल अधिकारी या 2021 के एकीकृत लोकपाल
                            योजना के अनुसार आरबीआई लोकपाल को उन्नत की जा सकती
                            हैं।
                          </p>
                          <ul>
                            <li>
                              आप सहमत एवं समझते हैं कि एनकैश अपनी आंतरिक
                              नीतियों, नियामक एवं विधाई निर्देशों के आधार पर
                              संदिग्ध या धोखाधड़ी लेन-देन के मामले में उचित
                              प्राधिकरणों को जानकारी/लेन-देन रिपोर्ट कर सकता है,
                              और हम ऐसी अनिवार्य रिपोर्टिंग के लिए आपको होने
                              वाली किसी भी हानि के लिए दायी नहीं बनाए जाएंगे,
                              भले ही बाद में ऐसा लेन-देन नियमित एवं वैध पाया
                              जाए।
                            </li>
                            <li>
                              किसी भी लेन-देन को निष्पादित करते समय, आपको अपने
                              एनकैश वॉलेट या अन्य धन स्रोतों पर पर्याप्त धन की
                              उपलब्धता सुनिश्चित करनी होगी।
                            </li>
                            <li>
                              आप समझते हैं कि एनकैश द्वारा एनकैश एप्लिकेशन पर
                              पेश की गई सेवाएं इंटरनेट कनेक्शन, सेवा प्रदाताओं
                              एवं भागीदारों का उपयोग करती हैं ताकि आपके लेन-देन
                              सफलतापूर्वक निष्पादित हों, और हम एनकैश वॉलेट
                              सेवाओं की हानि या व्यवधान या अनुपलब्धता सहित इससे
                              उत्पन्न किसी भी दायित्व के लिए जिम्मेदार नहीं
                              होंगे। ये सामान्य शर्तें एवं नियम ऊपर उल्लिखित
                              शर्तों के अतिरिक्त एनकैश वॉलेट पर लागू होंगी।
                            </li>
                            <li>
                              आपके लॉगिन क्रेडेंशियल व्यक्तिगत हैं और आपको अपने
                              लॉगिन क्रेडेंशियल को सुरक्षित रखना चाहिए। आप अपने
                              एनकैश वॉलेट की सुरक्षा के लिए जिम्मेदार हैं, और
                              आपको विवरण सुरक्षित रखने के लिए सभी कदम उठाने
                              चाहिए। आपको किसी भी रूप में, मौखिक या लिखित, अपना
                              खाता पहुंच क्रेडेंशियल किसी को प्रकट नहीं करना
                              चाहिए। यदि आप त्रुटि या लापरवाही से ऐसे विवरण
                              प्रकट करते हैं, तो आपको तुरंत एनकैश को रिपोर्ट
                              करनी होगी।
                            </li>
                            <li>
                              हम आपके लेन-देन की निगरानी संदिग्ध जोखि
                              मपूर्ण/धोखाधड़ी/संदिग्ध लेन-देन के लिए कर सकते
                              हैं। इस आधार पर हम ऐसा उचित समझें जैसे: लेन-देन पर
                              होल्ड लगाना, लेन-देन को ब्लॉक या अस्वीकार करना,
                              आपके एनकैश वॉलेट या खाते को अस्थायी रूप से ब्लॉक
                              करना और रिलीज/पुनर्स्थापित करने से पहले अधिक
                              जानकारी मांगना।
                            </li>
                            <li>
                              आप समझते हैं कि मोबाइल या इंटरनेट माध्यमों या
                              व्यापारी वेबसाइटों/एप्लिकेशनों की
                              गैर-प्रतिक्रियाशीलता से एनकैश वॉलेट सेवाओं की
                              अनुपलब्धता हो सकती है।
                            </li>
                            <li>
                              आप समझते हैं कि एनकैश वॉलेट सेवाओं का लाभ उठाने के
                              लिए साझा की गई जानकारी तृतीय-पक्षों के साथ साझा की
                              जा सकती है ताकि सेवाओं का प्रावधान सुगम हो, और ऐसे
                              मामलों में सेवा प्रदाताओं की डेटा नीतियां भी लागू
                              होंगी।
                            </li>
                            <li>
                              आप सहमत एवं स्वीकार करते हैं कि आपका बैंक/वित्तीय
                              संस्थान किसी भी लेन-देन के विरुद्ध शुल्क/चार्ज लगा
                              सकता है, और एनकैश ऐसे शुल्क/चार्ज को स्वीकार करने
                              या रिफंड करने के लिए दायी नहीं होगा।
                            </li>
                            <li>
                              आपके एनकैश वॉलेट में लोड किए गए धन एवं एनकैश
                              एप्लिकेशन या भागीदार व्यापारियों पर उनके द्वारा
                              पेश सेवाओं पर खर्च इंटरनेट पर किए जाते हैं और कई
                              हितधारकों को शामिल करते हैं। आप समझते हैं कि
                              लेन-देन पुष्टि और स्वीकृतियां हमेशा सेवा वितरण को
                              प्रतिबिंबित नहीं कर सकती।
                            </li>
                            <li>
                              आप अपने एनकैश ऐप में अपने एनकैश वॉलेट लेन-देन देख
                              सकते हैं और कम से कम पिछले 6 महीनों के लेन-देन की
                              समीक्षा कर सकते हैं।
                            </li>
                            <li>
                              एनकैश वॉलेट की सभी श्रेणियां गैर-हस्तांतरणीय
                              प्रकृति की हैं, और बकाया एनकैश वॉलेट बैलेंस पर कोई
                              ब्याज देय नहीं है।
                            </li>
                            <li>
                              आपका खाता सुरक्षित है, और आपके एनकैश वॉलेट पर
                              प्रोसेस किए गए किसी भी लेन-देन आपके द्वारा स्पष्ट
                              रूप से अधिकृत है और एनकैश द्वारा अनुमत है।
                            </li>
                            <li>
                              एनकैश वॉलेट की निरंतर उपलब्धता लागू कानून और
                              MD-PPI, 2021 की आवश्यकताओं के अधीन होगी, और एनकैश
                              को किसी भी समय, किसी भी कारण से, वॉलेट
                              निलंबित/अवरुद्ध करने या अन्य विधाई उद्देश्यों के
                              लिए आवश्यक अधिकार होगा।
                            </li>
                            <li>
                              यदि आपकी प्रदान की गई जानकारी में कोई परिवर्तन हो,
                              तो आप तुरंत लिखित रूप से एनकैश को अपडेट करेंगे।
                            </li>
                            <li>
                              यदि आप अपना मोबाइल नंबर बदल रहे हैं, तो कृपया खाता
                              समापन प्रक्रिया प्रारंभ करने के लिए ग्राहक सहायता
                              टीम से अग्रिम संपर्क करें।
                            </li>
                            <li>
                              नियामक द्वारा अधिसूचित किसी भी पूर्व-भुगतान साधन
                              के समापन या अन्य परिस्थितियों में बकाया बैलेंस
                              नियामक/कानून के तहत संवलित किया जाएगा।
                            </li>
                          </ul>
                        </div>
                        <h5 className="c15 mt-6">20. संचार</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              एनकैश आपके द्वारा हमसे जुड़ाव के दौरान प्रदान की
                              गई संपर्क जानकारी पर आपसे संचार कर सकता है, जिसमें
                              साइन-अप, लेन-देन या एनकैश प्लेटफॉर्म पर या उसके
                              माध्यम से किसी तृतीय-पक्ष उत्पाद या सेवाओं का लाभ
                              उठाना शामिल है।
                            </li>
                            <li>
                              हम आपको ईमेल, एसएमएस या पुष अधिसूचनाओं या किसी
                              अन्य प्रौद्योगिकी के माध्यम से संचार अलर्ट
                              भेजेंगे। आप सहमत हैं कि हमारे नियामक से परे कारणों
                              के कारण संचार में व्यवधान हो सकता है, जिसमें आपका
                              फोन बंद होना, गलत ईमेल पता, नेटवर्क व्यवधान शामिल
                              हैं। आप सहमत हैं कि एनकैश को किसी भी अलर्ट की
                              गैर-वितरण या देरी, विकृति या संचार विफलता के कारण
                              आपको होने वाली हानि के लिए दायी नहीं ठहराया जाएगा।
                            </li>
                            <li>
                              आप स्वीकार करते हैं कि आप हमारे साथ साझा किए गए
                              संपर्क विवरण के लिए जिम्मेदार हैं और अपने संपर्क
                              विवरण में किसी भी परिवर्तन पर हमें तुरंत अपडेट
                              करेंगे। आप हमें किसी भी एनकैश सेवा या ऑफर के लिए
                              आपको संपर्क करने एवं संचार करने की अधिकृत देते
                              हैं। हम अलर्ट भेजने या आपके साथ संचार के लिए
                              तृतीय-पक्ष सेवा प्रदाताओं का उपयोग कर सकते हैं। आप
                              एनकैश एवं एनकैश इकाइयों को डीएनडी सेटिंग्स को
                              ओवरराइड करने की अधिकृत देते हैं ताकि कॉल, एसएमएस,
                              ईमेल एवं किसी अन्य संचार मोड पर आपको पहुंच सकें।
                            </li>
                          </ul>
                        </div>
                        <h5 className="c15 mt-6">
                          21. शासक कानून एवं विवाद निपटान
                        </h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              इन शर्तों से उत्पन्न या संबंधित कोई भी विवाद
                              मध्यस्थता के माध्यम से हल किए जाएंगे, जो हमारे
                              द्वारा नियुक्त एकमात्र मध्यस्थ द्वारा, मध्यस्थता
                              एवं सुलह अधिनियम, 1996 (संशोधित) के अनुसार।
                              मध्यस्थता का स्थान मुंबई होगा, और कार्यवाही
                              अंग्रेजी में होगी।
                            </li>
                            <li>
                              मध्यस्थता के अधीन, मुंबई की अदालतों को विशेष
                              अधिकार क्षेत्र होगा।
                            </li>
                            <li>
                              आप सहमत हैं कि मध्यस्थता के अलावा हमारे विरुद्ध
                              कोई निषेधाज्ञा या विशिष्ट प्रदर्शनर्श नहीं मांगा
                              जाएगा।
                            </li>
                            <li>
                              विवादित लेन-देन को लेन-देन तिथि से 30 व्यावसायिक
                              दिनों के भीतर रिपोर्ट करना होगा।
                            </li>
                            <li>
                              अनधिकृत या धोखाधड़ी लेन-देन के लिए, ग्राहकों को 10
                              दिनों के भीतर विवाद उठाना होगा।
                            </li>
                            <li>
                              एनकैश अपनी विवेकाधीनता से मानक अवधि के बाद रिपोर्ट
                              किए गए विवादों की समीक्षा कर सकता है, देरी की खोज
                              या वास्तविक कठिनाई के मामलों में।
                            </li>
                            <li>
                              सभी विवादों की जांच एवं हल आरबीआई समयसीमाओं के
                              अनुसार किया जाएगा और ग्राहकों को उनके पंजीकृत चैनल
                              के माध्यम से संचारित किया जाएगा।
                            </li>
                            <li>
                              एनकैश द्वारा अनहल विवाद आरबीआई एकीकृत लोकपाल योजना
                              के तहत उन्नत किए जा सकते हैं।
                            </li>
                            <li>
                              विवाद, चार्जबैक या धोखाधड़ी रिपोर्ट करने के लिए,
                              ग्राहक{" "}
                              <a
                                href="https://www.enkash.com/support"
                                target="_blank"
                                className="text-break"
                              >
                                https://www.enkash.com/support
                              </a>{" "}
                              पर अनुरोध उठा सकते हैं, या वैकल्पिक रूप से
                              support@enkash.com पर लिखकर या +91-85304-90475 पर
                              कॉल करके एनकैश सहायता से संपर्क कर सकते हैं।
                            </li>
                          </ul>
                        </div>
                        <h5 className="c15 mt-6">22. विविध</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              पूर्णअनबुधं: ये शर्तें, नीतियों के साथ, आप एवं हम
                              के बीच पूर्णअनबुधं का गठन करती हैं, पूर्व अनुबंधों
                              को रद्द करते हुए।
                            </li>
                            <li>
                              अविभाज्यता: यदि कोई प्रावधान अमान्य या अक्रिय पाया
                              जाता है, तो शेष प्रावधान पूर्णरूप से प्रभावी
                              रहेंगे।
                            </li>
                            <li>
                              हस्तांतरण: हम बिना आपकी सहमति के इन शर्तों या
                              हमारे अधिकारों/दायित्वों को हस्तांतरित या
                              स्थानांतरित कर सकते हैं। आप बिना हमारी पूर्व लिखित
                              अनुमति के हस्तांतरित नहीं कर सकते।
                            </li>
                            <li>
                              माफी: किसी भी उल्लंघन की माफी किसी पूर्व, समवर्ती
                              या बाद के उल्लंघन की माफी का गठन नहीं करेगी।
                            </li>
                            <li>
                              सूचनाएं: हमारी सभी सूचनाएं आपके पंजीकृत विवरण पर
                              ईमेल/एसएमएस के माध्यम से या एनकैश प्लेटफॉर्म पर
                              पोस्ट की जाएंगी। आपको{" "}
                              <a
                                href="mailto:support@enkash.com"
                                className="text-break"
                              >
                                support@enkash.com
                              </a>{" "}
                              पर लिखित रूप से सूचित करना होगा।
                            </li>
                            <li>
                              जीवित रहना: दायित्व, क्षति पूर्ति, बौद्धिक संपदा,
                              शासक कानून एवं गोपनीयता पर प्रावधान समाप्ति के बाद
                              जीवित रहेंगे।
                            </li>
                            <li>
                              अधिक बल: हम अधिक बल घटनाओं के कारण देरी या
                              विफलताओं के लिए दायी नहीं होंगे।
                            </li>
                            <li>
                              कोई एजेंसी: यहां कुछ भी आप एवं हम के बीच एजेंसी,
                              साझेदारी या संयुक्त उद्यम का निर्माण नहीं करता।
                            </li>
                            <li>
                              संपर्क: किसी भी सहायता के लिए,{" "}
                              <a
                                href="mailto:support@enkash.com"
                                className="text-break"
                              >
                                support@enkash.com
                              </a>{" "}
                              पर हमसे संपर्क करें।
                            </li>
                          </ul>
                        </div>
                        <h5 className="c15 mt-6">
                          23. पीपीआई कार्डधारकों के लिए अच्छी सुरक्षा प्रथाएं
                          (परिशिष्ट)
                        </h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              अपने क्रेडेंशियल गोपनीय रखें
                              <ol>
                                <li>
                                  कभी भी OTP, PIN, CVV, पासवर्ड या कोई लॉगिन
                                  विवरण किसी के साथ साझा न करें।
                                </li>
                                <li>
                                  बैंक, जारीकर्ता, RBI या कानून प्रवर्तन कभी
                                  इन्हें नहीं मांगेंगे।
                                </li>
                                <li>
                                  कार्ड पर अपना PIN न लिखें या क्रेडेंशियल के
                                  स्क्रीनशॉट न स्टोर करें।
                                </li>
                              </ol>
                            </li>

                            <li>
                              फिशिंग एवं धोखाधड़ी कॉल्स से सावधान रहें
                              <ol>
                                <li>
                                  "KYC अपडेट", "कार्ड निष्क्रियण", "रिफंड",
                                  "ऑफर" दावा करने वाले यादृच्छिक लिंक पर क्लिक न
                                  करें।
                                </li>
                                <li>
                                  बैंक एजेंट बनने वाले अज्ञात कॉलर्स पर भरोसा न
                                  करें।
                                </li>
                                <li>
                                  जारीकर्ता की वेबसाइट/ऐप पर आधिकारिक ग्राहक
                                  देखभाल नंबर हमेशा सत्यापित करें।
                                </li>
                              </ol>
                            </li>

                            <li>
                              अपने भौतिक कार्ड की रक्षा करें
                              <ol>
                                <li>
                                  कार्ड को सुरक्षित स्थान पर रखें; अनधिकृत
                                  व्यक्तियों को न दें।
                                </li>
                                <li>
                                  POS टर्मिनल या ATM पर PIN दर्ज करते समय कीपैड
                                  को कवर करें।
                                </li>
                                <li>
                                  यदि कार्ड खो जाता है, चोरी हो जाता है या गुम
                                  हो जाता है, तो तुरंत रिपोर्ट करें।
                                </li>
                              </ol>
                            </li>

                            <li>
                              लेन-देन अलर्ट सक्षम करें
                              <ol>
                                <li>
                                  हर लेन-देन के लिए SMS/ईमेल/ऐप अधिसूचनाएं चालू
                                  करें।
                                </li>
                                <li>
                                  संदिग्ध लेन-देन के लिए स्टेटमेंट नियमित रूप से
                                  समीक्षा करें।
                                </li>
                                <li>
                                  अपरिचित या अनधिकृत शुल्कों को तुरंत रिपोर्ट
                                  करें।
                                </li>
                              </ol>
                            </li>

                            <li>
                              सुरक्षित नेटवर्क का उपयोग करें
                              <ol>
                                <li>
                                  अपने वॉलेट/कार्ड ऐप तक पहुंचते समय सार्वजनिक
                                  Wi-Fi का उपयोग न करें।
                                </li>
                                <li>
                                  केवल आधिकारिक जारीकर्ता का ऐप या वेबसाइट उपयोग
                                  करें।
                                </li>
                                <li>
                                  अपने फोन को नवीनतम OS एवं सुरक्षा पैच के साथ
                                  अपडेट रखें।
                                </li>
                              </ol>
                            </li>

                            <li>
                              सुरक्षित ऑनलाइन खर्च की प्रथा करें
                              <ol>
                                <li>
                                  केवल विश्वसनीय ई-कॉमर्स प्लेटफॉर्म पर खरीदारी
                                  करें।
                                </li>
                                <li>
                                  वेबसाइट https:// से शुरू हो और लॉक आइकन दिखाए।
                                </li>
                                <li>
                                  उपलब्ध होने पर टोकनाइज्ड कार्ड या सुरक्षित
                                  भुगतान गेटवे पसंद करें।
                                </li>
                              </ol>
                            </li>

                            <li>
                              मजबूत प्रमाणीकरण सेट करें
                              <ol>
                                <li>
                                  मजबूत पासवर्ड का उपयोग करें (अक्षर, संख्याएं,
                                  प्रतीक का मिश्रण)।
                                </li>
                                <li>
                                  जहां संभव हो, बायोमेट्रिक लॉगिन सक्षम करें।
                                </li>
                                <li>
                                  अनुमानित PIN जैसे 0000, 1234, DOB, मोबाइल नंबर
                                  आदि का उपयोग न करें।
                                </li>
                              </ol>
                            </li>

                            <li>
                              फ्रीबीज, कैशबैक एवं रिवॉर्ड घोटालों से सावधान रहें
                              <ol>
                                <li>
                                  धोखेबाज अक्सर मुफ्त वाउचर, गिफ्ट कार्ड, कैशबैक
                                  या सीमित वादा करते हैं।
                                </li>
                                <li>
                                  यदि कोई ऑफर "बहुत अच्छा लगता है तो सत्य नहीं",
                                  तो संभवतः नहीं है।
                                </li>
                              </ol>
                            </li>

                            <li>
                              धोखाधड़ी तुरंत रिपोर्ट करें
                              <ol>
                                <li>
                                  यदि दुरुपयोग का संदेह हो, तो मिनटों में
                                  जारीकर्ता से संपर्क करें।
                                </li>
                                <li>
                                  एनकैश मोबाइल ऐप, ऑनलाइन पोर्टल या हेल्पलाइन का
                                  उपयोग करके कार्ड ब्लॉक करें।
                                </li>
                                <li>
                                  यदि आपकी अनुमति के बिना धन डेबिट होता है, तो
                                  शिकायत दर्ज करें।
                                </li>
                              </ol>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              जारीकर्ता कभी स्क्रीन शेयरिंग ऐप्स (AnyDesk,
                              TeamViewer) नहीं मांगते।
                            </li>
                            <li>
                              एटीएम या POS मशीनों पर अजनबियों को "सहायता" न दें।
                            </li>
                            <li>
                              प्राप्त धन के लिए WhatsApp/एसएमएस पर भेजे गए क्यूर
                              कोड पर भरोसा न करें – क्यूर कोड भुगतान के लिए
                              स्कैन किया जाता है, प्राप्ति के लिए नहीं।
                            </li>
                            <li>
                              जारीकर्ता के साथ अपना मोबाइल नंबर एवं ईमेल अपडेट
                              रखें।
                            </li>
                            <li>
                              लेन-देन सीमाओं को समझें और केवल आवश्यक धन लोड
                              रखें।
                            </li>
                            <li>
                              अपने फोन गैलरी में कार्ड के सामने/पीछे की फोटो
                              स्टोर न करें।
                            </li>
                          </ul>
                        </div>
                        <h5 className="c15 mt-6">24. शब्दावली</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              कंपनी नीति: नियोकता या प्रायोजक संगठन की आंतरिक
                              दिशानिर्देशों का संदर्भ, जो पीपीआई (कार्ड या
                              वॉलेट) के रीलोड, उपयोग एवं पात्रता को नियंत्रित
                              करती हैं।
                            </li>
                            <li>
                              नवीनीकरण / पुनः-सत्यापन: ग्राहक अनुरोध पर पीपीआई
                              (जैसे गिफ्ट या वॉलेट) की अवधि विस्तार, जिसमें
                              स्थानांतरित बैलेंस के साथ नया पीपीआई पुनः-जारी
                              करना शामिल।
                            </li>
                          </ul>
                          <p>
                            ग्राहकों को अवधि, नवीनीकरण एवं रिफंड प्रक्रियाओं पर
                            व्यावहारिक मार्गदर्शन के लिए{" "}
                            <a
                              href="https://www.enkash.com/"
                              className="text-break"
                            >
                              https://www.enkash.com/
                            </a>{" "}
                            पर FAQ अनुभाग का संदर्भ करने के लिए प्रोत्साहित किया
                            जाता है। एनकैश पीपीआई उत्पादों का उपयोग करके, आप
                            पुष्टि करते हैं कि आपने ये शर्तें पढ़ी, समझी हैं और
                            बिना शर्त सहमत हैं। यदि आपके कोई प्रश्न हैं, तो
                            कृपया आगे बढ़ने से पहले हमसे संपर्क करें।
                          </p>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center">***** नीति का अंत *****</p>
        </div>
      </div>
    </>
  )
}

export default CustomerOnboarding
