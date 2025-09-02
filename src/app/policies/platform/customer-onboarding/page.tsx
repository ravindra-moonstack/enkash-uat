import React from "react"
import styles from "./page.module.scss"
import { Metadata } from "next"
import generateMetaData from "@/src/common/utils/metaData"
import { CustomBreadcrumb, DynamicHeading } from "@/src/components"

export const metadata: Metadata = generateMetaData({
  title: "EnKash Platform Customer Onboarding Policy",
  description:
    "Understand our verification steps for a smooth start on the EnKash platform.",
  alternates: {
    canonical: `${process.env.URL}/policies/platform/customer-onboarding`,
  },
})

const CustomerOnboarding = () => {
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
                  name: "Platform",
                  url: "/policies/platform",
                },
                {
                  name: " Customer Onboarding",
                  url: "/policies/platform/customer-onboarding",
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
                            title: "Customer Onboarding (Platform)",
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
                      <h5 className="c15 mt-6">1. Introduction</h5>
                      <p className="c3 c9">
                        <span className="c15">
                          Nehat Business Services Private Limited (the ‘Company’
                          or ‘our’ or ‘we’ or ‘us’) has put in place this
                          Onboarding Policy (the ‘Policy’) to ensure adequate
                          due diligence is performed on the Customers that
                          intend to avail the services of the Company.
                        </span>
                      </p>
                      <p className="c3 c9">
                        <span className="c15">
                          The Policy is to be read in conjunction with the KYC
                          AML CFT Policy adopted by the Company.
                        </span>
                      </p>

                      <h5 className="c15 mt-6">2. Definitions</h5>
                      <div>
                        <ol>
                          <li>
                            <strong>Customer</strong> means individuals or legal
                            entities with whom the Company has entered into a
                            contract for the purpose of providing payment
                            solutions.
                          </li>
                          <li>
                            <strong>Officially Valid Document (OVD)</strong>
                            means the passport, the driving license, proof of
                            possession of Aadhaar number, the Voter&apos;s
                            Identity Card issued by the Election Commission of
                            India, job card issued by NREGA duly signed by an
                            officer of the State Government and letter issued by
                            the National Population Register containing details
                            of name and address.
                          </li>
                          <li>
                            <strong>Equivalent e-document</strong> means an
                            electronic equivalent of a document, issued by the
                            issuing authority of such document with its valid
                            digital signature including documents issued to the
                            digital locker account of the customer as per rule 9
                            of the Information Technology (Preservation and
                            Retention of Information by Intermediaries Providing
                            Digital Locker Facilities) Rules, 2016.
                          </li>
                        </ol>
                      </div>
                      <h5 className="c15 mt-6">
                        3. Customer Onboarding Process
                      </h5>

                      <p className="c3 c9">
                        <span className="c15">
                          The Company will ensure the proposed process flow for
                          facilitating its Services for existing Customers as
                          well as new Customers:
                        </span>
                      </p>

                      <div>
                        <p>
                          <strong>I. Customer Management</strong>
                        </p>

                        <p>
                          Customer Onboarding will entail a three-step process
                          during the life cycle of the Customer and will
                          comprise of the following steps therein:
                        </p>
                        <ol>
                          <li>Onboarding / Registration</li>
                          <li>Continuous Monitoring</li>
                          <li>Exit / Termination</li>
                        </ol>
                        <p>
                          <strong>II. Onboarding / Registration</strong>
                        </p>

                        <ul>
                          <li>
                            Obtaining of the requisite details from the Customer
                            either with self-attested scanned copies of Customer
                            documents via web/mobile interface or digitally
                            verifying/obtaining equivalent e-documents with
                            Aadhar based validation and e-signing by the
                            Customer. (Refer to Annexure 1)
                          </li>
                          <li>
                            Verification and scrutinization of the information
                            received and the requisite documents by the
                            onboarding team. The company will verify the
                            documents and information received from digital
                            sources wherever applicable and verifiable from
                            digital sources.
                          </li>
                          <li>
                            Granting of approval for onboarding of the Customer
                            by the Company upon satisfaction of checks and
                            authenticity of the information / documents provided
                            by the Customer.
                          </li>
                          <li>
                            Agreement of the terms and conditions between both
                            the parties i.e., the Company and the Customer, and
                            finalization of the commercials by way of executing
                            a customer agreement.
                          </li>
                          <li>
                            Registration of the Customer upon successful
                            completion of all the above steps and sharing of the
                            activation details / credentials for login.
                          </li>
                        </ul>

                        <p>
                          <strong>III. Continuous Monitoring</strong>
                        </p>

                        <p>
                          A registered Customer will be continuously monitored
                          and supervised by the Company in order to prevent any
                          unlawful or malicious activity. Such evaluation and
                          ongoing due diligence is typically based on risk
                          categorization assigned to any Customer or its
                          business model, etc. These business rules for
                          monitoring / identification vary depending on the risk
                          category of the Customer.
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        4. Exit / termination process of the Customer agreement
                      </h5>

                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>
                      <p className="c3">
                        <span className="c15">
                          Termination of the agreement with the Customer can be
                          initiated by either of the parties
                        </span>
                      </p>
                      <p>
                        i.e., the Company or the Customer upon giving prior
                        notice to the other party. The exit / termination
                        process of the Customer can occur in two scenarios:
                      </p>
                      <ol type="i">
                        <li>Termination requested by the Customer</li>
                        <li>Company chooses to terminate the Customer</li>
                      </ol>
                      <ol type="i">
                        <li>
                          <strong>Termination requested by the Customer</strong>
                          <p>
                            In case the Customer wishes to culminate his
                            contract with the Company, the same may be done by
                            giving a notice to the Company. The Company assesses
                            the account of the said Customer and checks for any
                            pending / outstanding dues. The Company also
                            verifies any chargebacks / refunds pending on the
                            Customer’s account. Successful verification of the
                            termination notice and the account of the Customer
                            will entail settlements of due with the Customer and
                            subsequent termination of the Customer ID.
                          </p>
                        </li>

                        <li>
                          <strong>
                            The Company chooses to terminate the Customer
                          </strong>
                          <p>
                            The Company at its own discretion can terminate the
                            Customer agreement with immediate effect in certain
                            scenarios (listed below) and as deemed fit:
                          </p>
                          <ul>
                            <li>
                              Customer has indulged in a fraudulent activity; or
                            </li>
                            <li>
                              Customer is involved in criminal or illegal
                              activity; or
                            </li>
                            <li>Customer has misused the platform.</li>
                          </ul>
                        </li>
                      </ol>
                      <h5 className="c15 mt-6">5. Review of Policy</h5>

                      <p className="c3">
                        <span className="c15">
                          The Company will periodically review and assess the
                          Policy in light of any material changes in regulatory
                          framework or for business or operational reasons and
                          recommend changes, if any, to the Board. Any such
                          updates/ changes to this Policy will be approved by
                          the Board and communicated to the relevant Customers/
                          staff/ stakeholders.
                        </span>
                      </p>

                      <h5 className="c15 mt-6">6. Annexure 1</h5>

                      <p className="c3">
                        <strong>General Information & List of KYC</strong>
                      </p>
                      <p className="c3 pb-3">
                        <span className="c15">
                          Below listed are the set of documents or *equivalent
                          e-document and information collected and validated
                          from the Customers.
                        </span>
                      </p>
                      <p className="c3 ">
                        <span className="c15">
                          *For collection of electronic equivalents of documents
                          including ID Proof & Address Proof (PAN Account
                          number, Aadhaar Number or any OVD), the company has
                          opted for non-face-to-face OTP verification process
                          where Customers will receive a unique link via email
                          channel on registered email id to authorize the
                          company or technology partner.
                        </span>
                      </p>
                      <p className="c3 ">
                        <span className="c15">
                          Using the link, Customers will login to digilocker
                          account using registered mobile or username or aadhar
                          number followed by OTP generated on registered number
                          and secret pin.
                        </span>
                      </p>
                      <p className="c3 ">
                        <span className="c15">
                          On successful authorization, valid documents will be
                          collected, issued by the issuing authority of such a
                          document with its valid digital signature as per rule
                          9 of the Information Technology Rules, 2016.
                        </span>
                      </p>
                      <div className="table-responsive">
                        <table className="table table-bordered table-striped w-100">
                          <thead className="bg-dark text-white text-center">
                            <tr>
                              <th scope="col">S No</th>
                              <th scope="col">Document/Info Type</th>
                              <th scope="col">Document/Info Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center">1</td>
                              <td>Business Identifier</td>
                              <td>GSTIN/Company PAN Number</td>
                            </tr>
                            <tr>
                              <td className="text-center">2</td>
                              <td>Admin/User Details</td>
                              <td>Name, Email ID, Mobile</td>
                            </tr>
                            <tr>
                              <td className="text-center">3</td>
                              <td>Bank Details</td>
                              <td>Bank Account Number and IFSC Code</td>
                            </tr>
                            <tr>
                              <td className="text-center">4</td>
                              <td>Agreement</td>
                              <td>Agreement for products/services</td>
                            </tr>
                            <tr>
                              <td className="text-center">5</td>
                              <td>Declarations</td>
                              <td>If Any</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <h5 className="c15 mt-6">7. Annexure 2</h5>

                      <p className="c3">
                        <strong>List of Restricted businesses:</strong>
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
