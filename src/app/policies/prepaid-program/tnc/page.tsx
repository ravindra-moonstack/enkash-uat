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
                        5. ISSUANCE AND ACTIVATION OF PPI
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
                            viii) All EnKash PPIs (including Wallets) are valid
                            for at least one (1) year from the date of
                            issuance/last load/reload.
                          </li>

                          <li>
                            ix) EnKash may deactivate PPIs or Wallets that
                            remain inactive for one (1) year, after providing
                            prior intimation to the Customer.
                          </li>
                        </ul>
                      </div>

                      <h5 className="c15 mt-6">6. PPI LIMITS</h5>

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
                        <ol className="ms-3">
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
                            <ul className="ms-4">
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
                        <ol className="ms-3">
                          <li>
                            Transaction and balance limits depend on PPI type
                            and KYC status, as per RBI guidelines:
                            <ol className="ms-4">
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
                            <ol className="ms-4">
                              <li>
                                Refund of the remaining balance to the source
                                account, or
                              </li>
                              <li>Issuance of a new PPI (subject to KYC).</li>
                            </ol>
                          </li>

                          <li>
                            Fee table:
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
                                    ATM – Financial Transaction (Cash
                                    Withdrawal)
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
                          </li>
                          <li>
                            All charges are exclusive of applicable taxes unless
                            stated otherwise.
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
                          <li>
                            For failed Transactions: Refunds will be processed
                            to the original source in accordance with applicable
                            regulatory guidelines, network rules, and other
                            prescribed rules, subject to investigation.
                          </li>

                          <li>
                            Merchant-initiated refunds (e.g., for returns) will
                            be credited to your PPI Balance upon receipt from
                            the merchant.
                          </li>

                          <li>
                            No cash refunds; all refunds are electronic to the
                            PPI or source account.
                          </li>

                          <li>
                            Refunds shall be processed within 5 Business Days of
                            a valid request, subject to verification.
                          </li>

                          <li>
                            For cancellations: Contact the merchant directly; We
                            act as facilitator and process refunds as per
                            merchant instructions and RBI timelines (T+1 for
                            failed Transactions).
                          </li>

                          <li>
                            Reversals for erroneous loads may be allowed per
                            applicable regulatory guidelines, network rules, and
                            prescribed rules, subject to fees and verification.
                          </li>

                          <li>
                            Unclaimed refunds shall be governed as per
                            regulatory guidelines or network rules as prescribed
                            and updated from time to time.
                          </li>

                          <li>
                            All payments made through Enkash Wallet/eGV for
                            mobile/DTH recharge, bill pay, or any other payment
                            processed by you shall be final. Enkash shall not be
                            responsible for any error or omission by you or
                            Merchant partners. Bill Pay and Recharge
                            transactions cannot be refunded, returned, or
                            cancelled once initiated and may be treated as per
                            RBI escheatment rules.
                          </li>

                          <li>
                            If you erroneously processed a payment to an
                            unintended merchant or for the wrong amount, your
                            only recourse is to contact the merchant directly to
                            request a refund. Enkash shall not be liable to
                            handle such disputes, reimburse you, or reverse an
                            erroneous payment.
                          </li>
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
                            Customers may request renewal or replacement of an
                            expired PPI (including Wallets) after verification
                            and payment of applicable fees.
                          </li>

                          <li>
                            EnKash will notify customers 45 days before PPI
                            expiry through SMS, email, or in-app alerts.
                          </li>

                          <li>
                            Upon customer request, refunds will be credited to
                            the verified source bank account following due
                            diligence.
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
                              <li>For inactivity as per Section 10.</li>
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
                            Small PPI validity is 1 year from issuance or last
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
                            <a href="mailto:dpo@enkash.com">dpo@enkash.com</a>).
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
                        <table className="table table-bordered table-striped">
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
                            <tr>
                              <td>Level 1</td>
                              <td>Customer Support Executive</td>
                              <td>
                                Contact: +91 85304 90475
                                <br />
                                Email: support@enkash.com
                                <br />
                                Address: 91 SpringBoard, 175, Kagalwala House,
                                2nd Floor, Kalina, Santacruz (E), Mumbai – 400
                                098, Maharashtra, India
                              </td>
                              <td>
                                Within 3 business days from the date of receipt
                                of complaint
                              </td>
                            </tr>
                            <tr>
                              <td>Level 2</td>
                              <td>Customer Support Team Manager</td>
                              <td>
                                Contact: +91 85304 90475
                                <br />
                                Email: csmanager@enkash.com
                                <br />
                                Address: 91 SpringBoard, 175, Kagalwala House,
                                2nd Floor, Kalina, Santacruz (E), Mumbai – 400
                                098, Maharashtra, India
                              </td>
                              <td>
                                Within 7 business days from the date of receipt
                                of the complaint
                              </td>
                            </tr>
                            <tr>
                              <td>Level 3</td>
                              <td>Grievance Redressal Officer</td>
                              <td>
                                Contact: +91 95132 51477
                                <br />
                                Email: grievanceofficer@enkash.com
                                <br />
                                Address: 91 SpringBoard, 175, Kagalwala House,
                                2nd Floor, Kalina, Santacruz (E), Mumbai – 400
                                098, Maharashtra, India
                              </td>
                              <td>
                                Within 30 business days from the date of receipt
                                of the complaint
                              </td>
                            </tr>
                            <tr>
                              <td>Level 4</td>
                              <td>Nodal Officer</td>
                              <td>
                                Contact: +91 95132 51499
                                <br />
                                Email: nodalofficer@enkash.com
                                <br />
                                Address: 91 SpringBoard, 175, Kagalwala House,
                                2nd Floor, Kalina, Santacruz (E), Mumbai – 400
                                098, Maharashtra, India
                              </td>
                              <td>
                                Within 15 business days from the date of receipt
                                of the complaint
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
                            <a href="https://www.enkash.com/support">
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
                            Never share OTP, PIN, CVV, password, or any login
                            detail with anyone. Banks, issuers, RBI, or
                            law-enforcement will never ask for these. Do not
                            write your PIN on the card or store screenshots of
                            credentials.
                          </li>

                          <li>
                            <strong>Beware of Phishing & Fraud Calls:</strong>{" "}
                            Avoid clicking random links claiming “KYC update”,
                            “card deactivation”, “refunds”, “offers”. Do not
                            trust unknown callers pretending to be bank agents.
                            Always verify the official customer care number on
                            the issuer’s website/app.
                          </li>

                          <li>
                            <strong>Protect Your Physical Card:</strong> Keep
                            the card in a safe place; avoid giving it to
                            unauthorized persons. Cover the keypad while
                            entering PIN at POS terminals or ATMs. Report
                            immediately if the card is lost, stolen, or
                            misplaced.
                          </li>

                          <li>
                            <strong>Enable Transaction Alerts:</strong> Turn on
                            SMS/email/app notifications for every transaction.
                            Regularly review statements for suspicious
                            transactions. Immediately report unfamiliar or
                            unauthorized charges.
                          </li>

                          <li>
                            <strong>Use Secure Networks:</strong> Avoid using
                            public Wi-Fi when accessing your wallet/card app.
                            Use only the official issuer’s app or website. Keep
                            your phone updated with the latest OS and security
                            patches.
                          </li>

                          <li>
                            <strong>Practice Safe Online Spending:</strong> Shop
                            only on trusted e-commerce platforms. Verify the
                            website begins with https:// and shows a lock icon.
                            Prefer tokenized cards or secure payment gateways
                            when available.
                          </li>

                          <li>
                            <strong>Set Strong Authentication:</strong> Use
                            strong passwords (mix of letters, numbers, symbols).
                            Enable biometric login where possible. Do not use
                            guessable PINs like 0000, 1234, DOB, mobile number,
                            etc.
                          </li>

                          <li>
                            <strong>
                              Be Cautious of Freebies, Cashback & Reward Scams:
                            </strong>{" "}
                            Fraudsters often promise free vouchers, gift cards,
                            cashbacks, or limits. If an offer sounds “too good
                            to be true,” it probably is.
                          </li>

                          <li>
                            <strong>Report Fraud Immediately:</strong> If you
                            suspect misuse, contact the issuer within minutes.
                            Block the card using the EnKash mobile app, online
                            portal, or helpline. File a complaint if money is
                            debited without your permission.
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
                      <h5 className="c15 mt-6">25. GLOSSARY</h5>
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
      </div>
    </>
  )
}

export default CustomerOnboarding
