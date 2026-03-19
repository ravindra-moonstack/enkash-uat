import React from "react"
import { Metadata } from "next"

import styles from "./page.module.scss"
import generateMetaData from "@/src/utils/metaData" 

// Dynamic imports
import DynamicHeading from "@/src/components/dynamic-heading"
import CustomBreadcrumb from "@/src/components/breadcrumb"

export const metadata: Metadata = generateMetaData({
  title: "EnKash Platform Customer Onboarding Policy",
  description:
    "Understand our verification steps for a smooth start on the EnKash platform.",
  alternates: {
    canonical: `${process.env.URL}/policies/prepaid-program/customer-onboarding`,
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
                { name: "Policies", url: "/policies" },
                {
                  name: "Prepaid Program",
                  url: "/policies/prepaid-program",
                },
                {
                  name: " Customer Onboarding",
                  url: "/policies/prepaid-program/customer-onboarding",
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
                            title: "Customer Onboarding (Prepaid Program)",
                            color: "color-equity-blue",
                          },
                        ]}
                        headingTag="h1"
                        className="f-5 text-center"
                      />
                    </div>
                    <div className="word-to-html-null mb-5">
                      <h5 className="c15 mt-6 pb-4">
                        Last Updated On: 25th August 2025
                      </h5>
                      <h5 className="c15 mt-6">
                        1. Customer onboarding for EnKash
                      </h5>
                      <p className="c3 c9">
                        <span className="c15">
                          The purpose of EnKash’s customer onboarding guidelines
                          is to outline the KYC procedures that help EnKash
                          understand its customers and their financial
                          activities more effectively, enabling better risk
                          management at Nehat Tech Solutions Private Limited.
                        </span>
                      </p>

                      <h5 className="c15 mt-6">2. Objectives</h5>

                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>
                      <p className="c3">
                        <span className="c15">
                          The objective of the policy is to ensure that:
                        </span>
                      </p>

                      <div className="definitions">
                        <ol>
                          <li>
                            <strong>Issuer</strong> <br />
                            ‘EnKash’ is defined as an issuer, issuing pre-paid
                            payment instruments to individuals/organizations.
                            The money collected is used by customers to make
                            payments.
                          </li>

                          <li>
                            <strong>Customer</strong> <br />
                            Individuals/Organizations who acquire pre-paid
                            payment instruments for purchase of goods and
                            services, including financial services and engaged
                            in a financial transaction or activity with EnKash.
                          </li>

                          <li>
                            <strong>Merchant</strong> <br />A
                            &apos;Merchant&apos; is defined as the
                            establishments who accept the PPIs issued by PPI
                            issuer against the sale of goods and services.
                          </li>

                          <li>
                            <strong>Officially Valid Document (OVD)</strong>
                            <br />
                            Means the passport, the driving license, proof of
                            possession of Aadhaar number, the Voter&apos;s
                            Identity Card issued by the Election Commission of
                            India, job card issued by NREGA duly signed by an
                            officer of the State Government and letter issued by
                            the National Population Register containing details
                            of name and address.
                          </li>

                          <li>
                            <strong>Politically Exposed Persons (PEPs)</strong>
                            <br />
                            Means individuals who are or have been entrusted
                            with prominent public functions in a foreign country
                            e.g., Heads of States / Governments, senior
                            politicians, senior government / judicial / military
                            officers, senior executives of state-owned
                            corporations, important political party officials,
                            etc.
                          </li>

                          <li>
                            <strong>Equivalent e-document</strong> <br />
                            Means an electronic equivalent of a document, issued
                            by the issuing authority of such document with its
                            valid digital signature including documents issued
                            to the digital locker account of the customer as per
                            rule 9 of the Information Technology (Preservation
                            and Retention of Information by Intermediaries
                            Providing Digital Locker Facilities) Rules, 2016.
                          </li>

                          <li>
                            <strong>
                              Video based Customer Identification Process
                              (V-CIP)
                            </strong>
                            <br />A method of customer identification with
                            facial recognition and customer due diligence by an
                            authorised official of the Company by undertaking
                            seamless, secure, live, informed-consent based
                            audio-visual interaction with the customer to obtain
                            identification information required for customer due
                            diligence purpose, and to ascertain the veracity of
                            the information furnished by the customer through
                            independent verification and maintaining audit trail
                            of the process.
                          </li>

                          <li>
                            <strong>Pre-paid Payment Instruments</strong> <br />
                            Pre-paid payment instruments are payment instruments
                            that facilitate purchase of goods and services,
                            including funds transfer, against the value stored
                            on such instruments. The value stored on such
                            instruments represents the value paid for by the
                            holders by cash, by debit to a bank account, or by
                            credit card. The pre-paid instruments can be issued
                            as smart cards, magnetic stripe cards, internet
                            accounts, internet wallets, mobile accounts, mobile
                            wallets, paper vouchers and any such instrument
                            which can be used to access the pre-paid amount
                            (collectively called Prepaid Payment Instruments
                            hereafter). The pre-paid payment instruments that
                            can be issued in the country are classified under
                            three categories viz. (i) Closed system payment
                            instruments (ii) Semi-closed system payment
                            instruments and (iii) Open system payment
                            instruments.
                          </li>

                          <li>
                            <strong>Closed System Payment Instruments</strong>
                            <br />
                            These are payment instruments issued by a person for
                            facilitating the purchase of goods and services from
                            him/it. These instruments do not permit cash
                            withdrawal or redemption. As these instruments do
                            not facilitate payments and settlement for third
                            party services, issue and operation of such
                            instruments are not classified as payment systems.
                          </li>

                          <li>
                            <strong>
                              Semi-Closed System Payment Instruments
                            </strong>
                            <br />
                            These are payment instruments which can be used for
                            purchase of goods and services, including financial
                            services at a group of clearly identified merchant
                            locations/ establishments which have a specific
                            contract with the issuer to accept the payment
                            instruments. These instruments do not permit cash
                            withdrawal or redemption by the holder.
                          </li>

                          <li>
                            <strong>Open System Payment Instruments</strong>
                            <br />
                            These are payment instruments which can be used for
                            purchase of goods and services, including financial
                            services like funds transfer at any card accepting
                            merchant locations (point of sale terminals) and
                            also permit cash withdrawal at ATMs / BCs.
                          </li>

                          <li>
                            <strong>Limits</strong> <br />
                            All ‘limits’ in the value of instruments stated in
                            the guidelines, indicate the maximum value of such
                            instruments that can be issued to any holder.
                          </li>
                        </ol>
                      </div>
                      <h5 className="c15 mt-6">
                        3. KEY ELEMENTS OF KYC POLICY:
                      </h5>

                      <p className="c3 c9">
                        <span className="c15">
                          The KYC Policy includes the following four key
                          elements:
                        </span>
                      </p>

                      <div className="policy-list">
                        <ol type="1">
                          <li>Customer Acceptance Policy</li>
                          <li>Customer Identification Procedures</li>
                          <li>Customer Due Diligence Process</li>
                          <li>Monitoring of Transactions</li>
                          <li>Risk Management (Risk Categorization)</li>
                          <li>Periodic KYC review</li>
                          <li>Maintenance of records</li>
                          <li>Employee Hiring and Training</li>
                          <li>Review of Policy</li>
                        </ol>
                      </div>
                      <div className="policy p-6 leading-7">
                        <ol type="1" className="list-decimal ml-6">
                          <li>
                            <strong>Customer Acceptance Policy (CAP)</strong>
                            <p>
                              Customers availing services from EnKash are
                              required to enter into a contract with EnKash as
                              part of the onboarding process. These agreements
                              are digitally signed, and the Terms and Conditions
                              are accepted by the customer during this process.
                            </p>
                          </li>

                          <li>
                            <strong>
                              Customer Identification Procedures (CIP)
                            </strong>
                            <p>
                              Customer identification means undertaking Client
                              Due Diligence (CDD) measures while commencing an
                              account-based relationship including identifying
                              and verifying the customer...
                            </p>
                          </li>

                          <li>
                            <strong>Customer Due Diligence Process</strong>
                            <ol type="1" className="list-decimal ml-6">
                              <li>
                                <strong>Customer Registration:</strong>
                                Obtaining the requisite organization/individual
                                details as listed in Annexure I...
                              </li>
                              <li>
                                Verification and scrutinization of the
                                information received and documents by the
                                onboarding team...
                              </li>
                              <li>
                                Undertaking of various checks such as
                                background, negative business list, PEP, UN
                                sanctions list, etc.
                              </li>
                              <li>
                                <strong>Customer Exit/Termination</strong>
                                <ol
                                  type="a"
                                  className="list-[lower-alpha] ml-6"
                                >
                                  <li>
                                    <strong>
                                      Termination requested by the customer:
                                    </strong>
                                    In case the customer wishes to culminate his
                                    contract...
                                  </li>
                                  <li>
                                    <strong>
                                      EnKash chooses to terminate:
                                    </strong>
                                    Customer has indulged in fraudulent or
                                    illegal activity...
                                  </li>
                                </ol>
                              </li>
                            </ol>
                          </li>

                          <li>
                            <strong>Monitoring of Transactions</strong>
                            <p>
                              A registered customer will be continuously
                              monitored and supervised by EnKash in order to
                              prevent any unlawful or malicious activity...
                            </p>
                          </li>

                          <li>
                            <strong>Periodic KYC Review</strong>
                            <p>
                              EnKash shall put in place a system of periodical
                              review of risk categorization of accounts and
                              enhanced due diligence...
                            </p>
                          </li>

                          <li>
                            <strong>Maintenance of Records</strong>
                            <p>
                              PML Act and Rules cast certain obligations...
                              EnKash shall maintain proper record of
                              transactions prescribed under Rule 3...
                            </p>
                            <ol type="A" className="list-[upper-alpha] ml-6">
                              <li>
                                Series of all transactions integrally connected
                                to each other...
                              </li>
                              <li>
                                All suspicious transactions whether or not made
                                in cash...
                                <ol
                                  type="a"
                                  className="list-[lower-alpha] ml-6"
                                >
                                  <li>Deposits and credits...</li>
                                  <li>
                                    Credits or debits into or from non-monetary
                                    accounts...
                                  </li>
                                  <li>Money transfer or remittances...</li>
                                  <li>
                                    Loans and advances including credit or loan
                                    substitutes...
                                  </li>
                                  <li>
                                    All cross border wire transfers of value...
                                  </li>
                                </ol>
                              </li>
                            </ol>
                          </li>

                          <li>
                            <strong>Employee Hiring and Training</strong>
                            <p>
                              EnKash has adequate screening procedures in place
                              to ensure high standards when hiring employees...
                            </p>
                          </li>

                          <li>
                            <strong>Review of Policy</strong>
                            <p>
                              The Customer Onboarding policy would be reviewed
                              as and when required by the statute...
                            </p>
                          </li>
                        </ol>
                      </div>

                      <h5 className="c15 mt-6">4. Annexure I</h5>

                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>
                      <p className="c3">
                        <span className="c15">
                          General Information for registration
                        </span>
                      </p>

                      <ul className="list-disc ml-6 leading-7">
                        <li>
                          <strong>Personal details:</strong> Name, email id,
                          phone number;
                        </li>
                        <li>
                          <strong>Business details:</strong> Business Identifier
                          having details of Legal business name, registered
                          address, business address, website address,
                          constitution, etc.;
                        </li>
                        <li>
                          <strong>Banking details:</strong> Bank Name and
                          address, Type of account and account no. etc.
                        </li>
                        <li>Tech related information;</li>
                        <li>Financial information;</li>
                        <li>Declarations; if any.</li>
                      </ul>

                      <h5 className="c15 mt-6">5 Annexure II</h5>

                      <p className="c3">
                        <span className="c15">
                          List of Restricted businesses:
                        </span>
                      </p>
                      <ol
                        type="1"
                        className="list-decimal ml-6 leading-7 space-y-2"
                      >
                        <li>
                          Adult Goods & Services - Pornography, other sexually
                          suggestive materials; Escort/Prostitution services.
                          Personal Massagers/sex toys.
                        </li>
                        <li>Alcohol or Alcoholic beverages.</li>
                        <li>
                          Body Parts, including organs - Live, cultured,
                          preserved or from cadaver. This Prohibited Products
                          And Activities List Is Not Exhaustive And Finite And
                          Enkash May At Any Time Include Other Products Into
                          This List Or Change The List Without Your Consent.
                        </li>
                        <li>
                          Bulk marketing tools - email lists, software or other
                          products enabling unsolicited emails/sms.
                        </li>
                        <li>
                          Cable TV descramblers & black boxes intended to obtain
                          cable & satellite signals for free.
                        </li>
                        <li>Child Pornography in any form.</li>
                        <li>
                          Copyright unlocking devices - Mod chips or other
                          products designed to circumvent copyright protection.
                        </li>
                        <li>
                          Copyrighted Media - unauthorized copies of books,
                          music, movies and other licensed or protected
                          materials.
                        </li>
                        <li>
                          Copyrighted Software which includes unauthorized
                          copies of software, videogames and other licensed or
                          protected materials including OEM or bundled software.
                        </li>
                        <li>
                          Counterfeit and unauthorized goods - replica or
                          imitation of designer goods; fake autographs;
                          counterfeit stamps.
                        </li>
                        <li>
                          Drugs & Drug paraphernalia which includes illegal
                          drugs and drug accessories including herbal drugs.
                        </li>
                        <li>
                          Drug test circumvention aids, includes drug cleansing
                          shakes, urine test additives and related items.
                        </li>
                        <li>
                          Endangered species - includes plants, animals or other
                          organisms.
                        </li>
                        <li>
                          Gambling/Betting - lottery tickets, sports bets,
                          enrolments in online gambling sites.
                        </li>
                        <li>
                          Government ID or documents which includes fake IDs,
                          passports.
                        </li>
                        <li>
                          Hacking & Cracking materials which includes manual,
                          how-to-guides, equipment enabling illegal access to
                          software servers or protected property.
                        </li>
                        <li>
                          Illegal goods and goods/services promoting/enabling
                          illegal acts.
                        </li>
                        <li>
                          Miracle cures, which are marketed as quick health
                          fixes.
                        </li>
                        <li>
                          Offensive goods, which includes literature, products
                          and other materials that defame or slander any person
                          or group of person, encourage violent acts, promote
                          intolerance or hatred.
                        </li>
                        <li>
                          Offensive goods, crime which includes crime scene
                          photos or items, such as personal belongings
                          associated with criminals.
                        </li>
                        <li>
                          Prescription drugs or herbal drugs of any kind of
                          online pharmacies which includes drugs / other
                          products requiring a prescription by a recognised &
                          licensed medical practitioner in India or anywhere
                          else.
                        </li>
                        <li>
                          Pyrothenic devices & hazardous materials which
                          includes firework & other toxic/radioactive goods.
                        </li>
                        <li>
                          Regulated goods, regulated by government agency.
                        </li>
                        <li>
                          Securities, which includes stocks, bonds, mutual funds
                          or related financial products or investments.
                        </li>
                        <li>
                          Tobacco & cigarettes, chewing tobacco and related
                          products.
                        </li>
                        <li>
                          Traffic devices which includes radar detectors /
                          jammers, license plate cover, traffic signal changers
                          and related products.
                        </li>
                        <li>
                          Weapons which include knives, brass knuckles, gun
                          parts and other armaments.
                        </li>
                        <li>
                          Wholesale currency which includes discounted
                          currencies or currency.
                        </li>
                        <li>Live animals or animal parts / products.</li>
                        <li>
                          Multi-level Marketing schemes / Pyramid / matrix
                          scheme sites.
                        </li>
                        <li>
                          Any intangible goods and services or aggregation
                          business.
                        </li>
                        <li>Drop-Shipped Merchant.</li>
                        <li>
                          Web based telephony/e-mail/sms/fax/calling
                          cards/bandwidth/data transfer or allied services.
                        </li>
                        <li>Crypto or Crypto based services.</li>
                        <li>
                          Any act/services/product/people/entity/place/country
                          defined illegal or sanctioned or in negative list by
                          RBI or other regulators.
                        </li>
                        <li>DMT</li>
                        <li>Money Transfer Services / Card To Cash</li>
                        <li>
                          Any other service product activity described as
                          illegal as per RBI or other regulators.
                        </li>
                        <li>Violation of any of the Enkash terms of use.</li>
                        <li>WMD (Weapon of mass destruction)</li>
                        <li>Drop Shipping</li>
                        <li>Illegal arms trading</li>
                        <li>Smuggling</li>
                        <li>Child abuse</li>
                        <li>Human trafficking</li>
                        <li>Pornography</li>
                        <li>Hawala</li>
                        <li>Organs trading</li>
                        <li>Extortion</li>
                        <li>Illegal trading of animals</li>
                        <li>Illegal drugs supply and handling</li>
                        <li>Mystery Boxes / Get Risk Schemes / Betting</li>
                        <li>
                          Gaming LOB where company type is Individual or Sole
                          proprietor.
                        </li>
                      </ol>
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
