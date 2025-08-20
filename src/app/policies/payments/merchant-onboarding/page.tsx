import React from "react"
import styles from "./page.module.scss"
import { Metadata } from "next"
import generateMetaData from "@/common/utils/metaData"
import { CustomBreadcrumb, DynamicHeading } from "@/components"

export const metadata: Metadata = generateMetaData({
  title: "Payments Grievance and Redressal Policy: EnKash",
  description:
    "Explore our structured approach to resolving payment-related concerns quickly and compliantly.",
  alternates: {
    canonical: "https://www.enkash.com/policies/payments/grievance-policy",
  },
})

const MerchantOnboarding = () => {
  return (
    <>
      <div className={styles.parent_container}>
        <div className="max-w-auto  position-relative no-pointer">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Policies", url: "/policies" },
                {
                  name: "Payments",
                  url: "/policies/payments",
                },
                {
                  name: " Merchant Onboarding Policy",
                  url: "/policies/payments/merchant-onboarding",
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
                            title: "Merchant Onboarding Policy (Payments)",
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
                          Nehat Tech Solutions Private Limited (the ‘Company’ or
                          ‘our’ or ‘we’ or ‘us’) has put in place this Merchant
                          onboarding Policy (the ‘Policy’) to ensure adequate
                          due diligence is performed on the Merchants that
                          intend to avail the services of the Company.
                        </span>
                      </p>
                      <p className="c3">
                        <span className="c15">
                          The Policy is to be read in conjunction with the KYC
                          AML CFT Policy adopted by the Company.
                        </span>
                      </p>

                      <h5 className="c15 mt-6">2. Definitions</h5>

                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>

                      <ol style={{ listStyleType: "lower-roman" }}>
                        <li className="c3">
                          <span className="c15">
                            <b> Merchant</b> means individuals or legal entities
                            with whom the Company has entered into a contract
                            for the purpose of providing payment solutions.
                          </span>
                        </li>
                        <li className="c3">
                          <span className="c15">
                            <b> Officially Valid Document (OVD)</b> means the
                            passport, the driving license, proof of possession
                            of Aadhaar number, the Voter&apos;s Identity Card
                            issued by the Election Commission of India, job card
                            issued by NREGA duly signed by an officer of the
                            State Government and letter issued by the National
                            Population Register containing details of name and
                            address.
                          </span>
                        </li>
                        <li className="c3">
                          <span className="c15">
                            <b>Politically Exposed Persons (PEPs)</b>means
                            individuals who are or have been entrusted with
                            prominent public functions in a foreign country
                            e.g., Heads of States / Governments, senior
                            politicians, senior government / judicial / military
                            officers, senior executives of state-owned
                            corporations, important political party officials,
                            etc.
                          </span>
                        </li>
                        <li className="c3">
                          <span className="c15">
                            <b> Equivalent e-document</b> means an electronic
                            equivalent of a document, issued by the issuing
                            authority of such document with its valid digital
                            signature including documents issued to the digital
                            locker account of the customer as per rule 9 of the
                            Information Technology (Preservation and Retention
                            of Information by Intermediaries Providing Digital
                            Locker Facilities) Rules, 2016.
                          </span>
                        </li>
                        <li className="c3">
                          <span className="c15">
                            <b>
                              Video based Customer Identification Process
                              (V-CIP)”:
                            </b>{" "}
                            A method of customer identification with facial
                            recognition and customer due diligence by an
                            authorised official of the Company by undertaking
                            seamless, secure, live, informed-consent based
                            audio-visual interaction with the customer to obtain
                            identification information required for customer due
                            diligence purpose, and to ascertain the veracity of
                            the information furnished by the customer through
                            independent verification and maintaining audit trail
                            of the process
                          </span>
                        </li>
                      </ol>

                      <h5 className="c15 mt-6">
                        3. Merchant Onboarding Process
                      </h5>

                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>
                      <p className="c3 c9">
                        <span className="c15">
                          The Company will ensure the proposed process flow for
                          facilitating its Receivable/ Payment Collection
                          Services for existing Merchants as well as new
                          Merchants:
                        </span>
                      </p>

                      <ol style={{ listStyleType: "lower-roman" }}>
                        <li className="c3">
                          <span className="c15">
                            <b>Merchant management</b>Merchant Onboarding will
                            entail a three-step process during the life cycle of
                            the Merchant and will comprise of the following
                            steps therein:
                          </span>
                        </li>
                        <li className="c3">
                          <span className="c15">
                            <b>Onboarding / registration</b>
                          </span>
                          <ul className="c25 lst-kix_list_1-0 start">
                            <li className="c3 c12 li-bullet-0">
                              <span className="">
                                Obtaining of the requisite business and website
                                details from the Merchant either with self
                                attested scanned copies of merchant documents
                                via web/mobile interface or digitally
                                verifying/obtaining equivalent e-documents with
                                Aadhar based validation and e-signing by the
                                merchant. (Refer to Annexure 1)
                              </span>
                            </li>
                            <li className="c2 li-bullet-0">
                              <span className="c27">
                                Verification and scrutinization of the
                                information received and the requisite documents
                                by the onboarding team and validation of
                                authorized person(s) as prescribed standards and
                                procedures including non face-to-face or V-CIP
                                verifications.
                              </span>
                            </li>
                            <li className="c30 li-bullet-0">
                              <span className="">
                                Undertaking of various checks such as
                                background, negative business list, PEP,
                                restricted business list (Refer to Annexure 3),
                                UN sanctions list, etc. using the information
                                and documents provided
                              </span>
                            </li>
                            <li className="c30 li-bullet-0">
                              <span className="">
                                Granting of approval for onboarding of the
                                Merchant by the Company upon satisfaction of
                                checks and authenticity of the information /
                                documents provided by the Merchant.
                              </span>
                            </li>
                            <li className="c30 li-bullet-0">
                              <span className="">
                                Agreement of the terms and conditions between
                                both the parties i.e., the Company and the
                                Merchant, and finalization of the commercials by
                                way of executing a Merchant agreement.
                              </span>
                            </li>
                            <li className="c30 li-bullet-0">
                              <span className="">
                                Undertaking of the risk categorization of the
                                Merchant onboarded (either low / medium / high
                                category depending upon the type of business,
                                any adverse / discouraging feedback etc.) post
                                signing of the agreement
                              </span>
                            </li>
                            <li className="c30 li-bullet-0">
                              <span className="">
                                Registration of the Merchant upon successful
                                completion of all the above steps and sharing of
                                the activation details / credentials for login.
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li className="c3">
                          <span className="c15">
                            <b>Continuous monitoring</b>
                          </span>
                          <p className="c3 c9">
                            <span className="c15">
                              A registered Merchant will be continuously
                              monitored and supervised by the Company in order
                              to prevent any unlawful or malicious activity.
                              Such evaluation and ongoing due diligence is
                              typically based on risk categorization assigned to
                              any Merchant or its business model, etc. and
                              include checking the transaction history, refunds
                              initiated, transaction volumes in line of
                              business, transaction amount of the Merchant,
                              scrutinizing the Merchant’s disputes, verifying
                              Merchant URL from where the transactions are
                              undertaken, detecting any spike in transactions,
                              total chargebacks, monitoring the Merchant website
                              for any unwarranted business, checking social
                              media for any adverse comments on the Merchants,
                              etc. These business rules for monitoring /
                              identification vary depending on the risk category
                              of the Merchant.
                            </span>
                          </p>
                          <p className="c3 c9">
                            <span className="c15">
                              Based on the indications/ alerts received as part
                              of the monitoring activity, risk categorisation of
                              the Merchant may be changed from low to medium or
                              medium to high as the case may be if there is a
                              need. This will also follow up with obtaining
                              additional documents/ information from the
                              Merchant. In some cases, the Company may also
                              decide to terminate the agreement with the
                              Merchant.
                            </span>
                          </p>
                        </li>
                      </ol>

                      <h5 className="c15 mt-6">
                        4. Exit / termination process of the Merchant agreement
                      </h5>

                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>
                      <p className="c3">
                        <span className="c15">
                          Termination of the agreement with the Merchant can be
                          initiated by either of the parties i.e., the Company
                          or the Merchant upon giving prior notice to the other
                          party. The exit / termination process of the Merchant
                          can occur in two scenarios:
                        </span>
                      </p>

                      <ol style={{ listStyleType: "lower-roman" }}>
                        <li className="c3">
                          <span className="c15">
                            Termination requested by the Merchant
                          </span>
                        </li>
                        <li className="c3">
                          <span className="c15">
                            Company chooses to terminate the Merchant
                          </span>
                        </li>
                      </ol>

                      <ol style={{ listStyleType: "lower-roman" }}>
                        <li className="c3">
                          <span className="c15">
                            <b>Termination requested by the Merchant</b>
                          </span>
                          <p className="c3">
                            <span className="c15">
                              In case the Merchant wishes to culminate his
                              contract with the Company, the same may be done by
                              giving a notice to the Company. The Company
                              assesses the account of the said Merchant and
                              checks for any pending / outstanding dues. The
                              Company also verifies any chargebacks / refunds
                              pending on the Merchant’s account. Successful
                              verification of the termination notice and the
                              account of the Merchant will entail settlements of
                              due with the Merchant and subsequent termination
                              of the Merchant id.
                            </span>
                          </p>
                        </li>
                        <li className="c3">
                          <span className="c15">
                            <b>The Company chooses to terminate the Merchant</b>
                          </span>
                          <p className="c3">
                            <span className="c15">
                              The Company at its own discretion can terminate
                              the Merchant agreement with immediate effect in
                              certain scenarios (listed below) and as deemed
                              fit.
                            </span>
                          </p>
                          <ul className="c25 lst-kix_list_1-0 start">
                            <li className="c3 c12 li-bullet-0">
                              <span className="">
                                Merchant has indulged in a fraudulent activity;
                                or
                              </span>
                            </li>
                            <li className="c2 li-bullet-0">
                              <span className="c27">
                                Merchant is involved in criminal or illegal
                                activity; or
                              </span>
                            </li>
                            <li className="c30 li-bullet-0">
                              <span className="">
                                Merchant has misused the platform for collecting
                                payments for any illegal / prohibited goods.
                              </span>
                            </li>
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
                          the Board and communicated to the relevant Merchants/
                          staff/ stakeholders.
                        </span>
                      </p>

                      <h5 className="c15 mt-6">6. Annexure 1</h5>

                      <p className="c3">
                        <span className="c15">
                          <b>General Information:</b>
                        </span>
                      </p>
                      <ul className="c25 lst-kix_list_1-0 start">
                        <li className="c3 c12 li-bullet-0">
                          <span className="">
                            Personal details: Name, email id, phone number,
                            address;
                          </span>
                        </li>
                        <li className="c2 li-bullet-0">
                          <span className="c27">
                            Business details: Legal business name, registered
                            address, business address, website address,
                            constitution, etc.;
                          </span>
                        </li>
                        <li className="c30 li-bullet-0">
                          <span className="">
                            Banking details: Bank Name and address, Type of
                            account and account no. etc.
                          </span>
                        </li>
                        <li className="c30 li-bullet-0">
                          <span className="">Tech related information;</span>
                        </li>
                        <li className="c30 li-bullet-0">
                          <span className="">Financial information; and</span>
                        </li>
                        <li className="c30 li-bullet-0">
                          <span className="">Declarations; if any.</span>
                        </li>
                      </ul>
                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>
                      <p className="c3">
                        <span className="c15">
                          <b>List of KYC documents:</b>
                        </span>
                      </p>
                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>
                      <p className="c3">
                        <span className="c15">
                          Below listed are the set of documents or *equivalent
                          e-document and information collected and validated
                          from the merchants.
                        </span>
                      </p>
                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>
                      <p className="c3">
                        <span className="c15">
                          *For collection of electronic equivalent of documents
                          including ID Proof & Address Proof (PAN Account
                          number, Aadhaar Number or any OVD), the company has
                          opted for non-face-to-face OTP verification process
                          where Merchants will receive a unique link via email
                          channel on registered email id to authorize the
                          company or technology partner.
                        </span>
                      </p>

                      <p className="c3">
                        <span className="c15">
                          Using the link, merchants will login to digilocker
                          account using registered mobile or username or aadhar
                          number followed by OTP generated on registered number
                          and secret pin. On successful authorization, valid
                          documents will be collected, issued by the issuing
                          authority of such a document with its valid digital
                          signature as per rule 9 of the Information Technology
                          Rules, 2016. Alternatively customers will opt for
                          V-CIP procedures for verification wherever applicable.
                        </span>
                      </p>

                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <tbody>
                            <tr className="c11">
                              <td className="" style={{ width: "80px" }}>
                                <p className="c23">
                                  <span className="c8 c24">
                                    <b>Level</b>
                                  </span>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c36">
                                  <span className="c1 c24">
                                    <b>Responsible Person</b>
                                  </span>
                                </p>
                              </td>
                              <td className="c22">
                                <p className="c3 c37">
                                  <span className="c1 c24">
                                    <b>Modes Available</b>
                                  </span>
                                </p>
                              </td>
                              <td className="">
                                <p className="c43">
                                  <span className="c1 c24">
                                    <b>Estimated TAT for Resolution</b>
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr className="c19">
                              <td className="">
                                <p className="c23">
                                  <span className="c8">Level 1&nbsp;</span>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c36">
                                  <span className="c1">
                                    Customer Support Executive&nbsp;
                                  </span>
                                </p>
                              </td>
                              <td className="c22">
                                <ul className="c25 lst-kix_list_1-0 start">
                                  <li className="c3 c12 li-bullet-0">
                                    <span className="">
                                      +91 85304 90475&nbsp;
                                    </span>
                                  </li>
                                  <li className="c2 li-bullet-0">
                                    <span className="c27">
                                      <a
                                        className="c17"
                                        href="mailto:support@enkash.com"
                                      >
                                        support@enkash.com
                                      </a>
                                    </span>
                                  </li>
                                  <li className="c30 li-bullet-0">
                                    <span className="">
                                      91 SpringBoard, 175, Kagalwala House,
                                      2nd&nbsp; Floor, Kalina, Santacruz (E),
                                      Mumbai- 400 098, Maharashtra , India
                                    </span>
                                  </li>
                                </ul>
                              </td>
                              <td className="">
                                <p className="c43">
                                  <span className="c5">Within </span>
                                  <span className="c1">3 business days </span>
                                  <span className="c5">
                                    from the date of receipt of complaint
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr className="c46">
                              <td className="">
                                <p className="c23">
                                  <span className="c8">Level 2&nbsp;</span>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c48">
                                  <span className="c1">
                                    Customer Support Team Manager&nbsp;
                                  </span>
                                </p>
                              </td>
                              <td className="c22">
                                <ul className="c25 lst-kix_list_4-0 start">
                                  <li className="c3 c12 li-bullet-0">
                                    <span className="">
                                      +91 85304 90475&nbsp;
                                    </span>
                                  </li>
                                  <li className="c3 c44 li-bullet-0">
                                    <a
                                      href="mailto:csmanager@enkash.com"
                                      className="c18"
                                    >
                                      csmanager@enkash.com
                                    </a>
                                  </li>
                                  <li className="c30 li-bullet-0">
                                    <span className="">
                                      91 SpringBoard, 175, Kagalwala House,
                                      2nd&nbsp; Floor, Kalina, Santacruz (E),
                                      Mumbai- 400 098, Maharashtra , India
                                    </span>
                                  </li>
                                </ul>
                              </td>
                              <td className="">
                                <p className="c43">
                                  <span className="c5">Within </span>
                                  <span className="c1">7 business days </span>
                                  <span className="c5">
                                    from the date of receipt of complaint
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr className="c29">
                              <td className="">
                                <p className="c23">
                                  <span className="c8">Level 3&nbsp;</span>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c16">
                                  <span className="c0">
                                    Grievance Redressal Officer
                                  </span>
                                </p>
                              </td>
                              <td className="c22">
                                <ul className="c25 lst-kix_list_6-0 start">
                                  <li className="c3 c12 li-bullet-0">
                                    <span className="">+91 9513251477</span>
                                  </li>
                                  <li className="c3 c12 li-bullet-0">
                                    <a href="mailto:grievanceofficer@enkash.com">
                                      grievanceofficer@enkash.com
                                    </a>
                                  </li>
                                  <li className="c3 c12 li-bullet-0">
                                    <span className="">
                                      91 SpringBoard, 175, Kagalwala House,
                                      2nd&nbsp; Floor, Kalina, Santacruz (E),
                                      Mumbai- 400 098, Maharashtra , India
                                    </span>
                                  </li>
                                </ul>
                              </td>
                              <td className="">
                                <p className="c42">
                                  <span className="c5">Within </span>
                                  <span className="c1">30 business days </span>
                                  <span className="c5">
                                    from the date of receipt of&nbsp;
                                  </span>
                                  <span className="c5">complaint</span>
                                </p>
                                <p className="c28"></p>
                              </td>
                            </tr>
                            <tr className="c29">
                              <td className="">
                                <p className="c23">
                                  <span className="c8">Level 4&nbsp;</span>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c16">
                                  <span className="c0">Nodal Officer</span>
                                </p>
                              </td>
                              <td className="c22">
                                <ul className="c25 lst-kix_list_8-0 start">
                                  <li className="c3 c12 li-bullet-0">
                                    <span className="">+91 9513251499</span>
                                  </li>
                                  <li className="c3 c12 li-bullet-0">
                                    <span className="c27">
                                      <a
                                        className="c17"
                                        href="mailto:nodalofficer@enkash.com"
                                      >
                                        nodalofficer@enkash.com
                                      </a>
                                    </span>
                                  </li>
                                  <li className="c3 c12 li-bullet-0">
                                    <span className="">
                                      91 SpringBoard, 175, Kagalwala House,
                                      2nd&nbsp; Floor, Kalina, Santacruz (E),
                                      Mumbai- 400 098, Maharashtra , India
                                    </span>
                                  </li>
                                </ul>
                              </td>
                              <td className="">
                                <p className="c42">
                                  <span className="c5">Within </span>
                                  <span className="c1">15 business days </span>
                                  <span className="c5">
                                    from the date of receipt of&nbsp;
                                  </span>
                                  <span className="c5">complaint</span>
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h5 className="c15 mt-6">
                        7. Turn around time (TAT) for redressal of grievance
                      </h5>

                      <p className="c3">
                        <span className="c15">
                          Team would acknowledge within four (4) hours from the
                          time of receiving the complaint, however resolution
                          would depend on various factors both internal &
                          external. The customer would be kept informed at all
                          intervals; the case/complaint would be escalated to
                          the next level in case of non-resolution within 7
                          business days.
                        </span>
                      </p>

                      <h5 className="c15 mt-6">
                        8. Details of Grievance & Nodal officer Details:
                      </h5>

                      <p className="c3">
                        <span className="c15">
                          Name of the Grievance Officer: Mr. Nagesh Shet
                        </span>
                      </p>
                      <p className="c3">
                        <span className="c15">
                          Contact information:{" "}
                          <a
                            className="c17"
                            href="mailto:grievanceofficer@enkash.com"
                          >
                            grievanceofficer@enkash.com
                          </a>
                        </span>
                      </p>
                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>

                      <p className="c3">
                        <span className="c15">
                          Name of the Nodal Officer: Mr. Nagesh Shet
                        </span>
                      </p>
                      <p className="c3">
                        <span className="c15">
                          Contact information:{" "}
                          <a
                            className="c17"
                            href="mailto:nodalofficer@enkash.com"
                          >
                            nodalofficer@enkash.com
                          </a>
                        </span>
                      </p>

                      <h5 className="c15 mt-6">
                        9. Resolution & Closure of grievances
                      </h5>

                      <p className="c3">
                        <span className="c15">
                          Where grievances pertain to transactions / operations
                          primarily responsible for the resolution of
                          complaints/grievances. It is the foremost duty of the
                          customer support team to see that the complaint is
                          resolved to the customer’s satisfaction and if
                          customer is not satisfied, then to provide alternate
                          avenues to escalate the issue.
                        </span>
                      </p>

                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>
                      <h5 className="c15">
                        10. Nehat Tech Solution Pvt Ltd Grievance Escalation
                        Matrix
                      </h5>

                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>
                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <tbody>
                            <tr className="c11">
                              <td className="" style={{ width: "80px" }}>
                                <p className="c23">
                                  <span className="c8 c24">
                                    <b>Level</b>
                                  </span>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c36">
                                  <span className="c1 c24">
                                    <b>Responsible Person</b>
                                  </span>
                                </p>
                              </td>
                              <td className="c22">
                                <p className="c3 c37">
                                  <span className="c1 c24">
                                    <b>Modes Available</b>
                                  </span>
                                </p>
                              </td>
                              <td className="">
                                <p className="c43">
                                  <span className="c1 c24">
                                    <b>Estimated TAT for Resolution</b>
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr className="c19">
                              <td className="">
                                <p className="c23">
                                  <span className="c8">Level 1&nbsp;</span>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c36">
                                  <span className="c1">
                                    Customer Support Executive&nbsp;
                                  </span>
                                </p>
                              </td>
                              <td className="c22">
                                <ul className="c25 lst-kix_list_1-0 start">
                                  <li className="c3 c12 li-bullet-0">
                                    <span className="">
                                      +91 85304 90475&nbsp;
                                    </span>
                                  </li>
                                  <li className="c2 li-bullet-0">
                                    <span className="c27">
                                      <a
                                        className="c17"
                                        href="mailto:support@enkash.com"
                                      >
                                        support@enkash.com
                                      </a>
                                    </span>
                                  </li>
                                  <li className="c30 li-bullet-0">
                                    <span className="">
                                      91 SpringBoard, 175, Kagalwala House,
                                      2nd&nbsp; Floor, Kalina, Santacruz (E),
                                      Mumbai- 400 098, Maharashtra , India
                                    </span>
                                  </li>
                                </ul>
                              </td>
                              <td className="">
                                <p className="c43">
                                  <span className="c5">Within </span>
                                  <span className="c1">3 business days </span>
                                  <span className="c5">
                                    from the date of receipt of complaint
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr className="c46">
                              <td className="">
                                <p className="c23">
                                  <span className="c8">Level 2&nbsp;</span>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c48">
                                  <span className="c1">
                                    Customer Support Team Manager&nbsp;
                                  </span>
                                </p>
                              </td>
                              <td className="c22">
                                <ul className="c25 lst-kix_list_4-0 start">
                                  <li className="c3 c12 li-bullet-0">
                                    <span className="">
                                      +91 85304 90475&nbsp;
                                    </span>
                                  </li>
                                  <li className="c3 c44 li-bullet-0">
                                    <a
                                      href="mailto:csmanager@enkash.com"
                                      className="c18"
                                    >
                                      csmanager@enkash.com
                                    </a>
                                  </li>
                                  <li className="c30 li-bullet-0">
                                    <span className="">
                                      91 SpringBoard, 175, Kagalwala House,
                                      2nd&nbsp; Floor, Kalina, Santacruz (E),
                                      Mumbai- 400 098, Maharashtra , India
                                    </span>
                                  </li>
                                </ul>
                              </td>
                              <td className="">
                                <p className="c43">
                                  <span className="c5">Within </span>
                                  <span className="c1">7 business days </span>
                                  <span className="c5">
                                    from the date of receipt of complaint
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr className="c29">
                              <td className="">
                                <p className="c23">
                                  <span className="c8">Level 3&nbsp;</span>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c16">
                                  <span className="c0">
                                    Grievance Redressal Officer
                                  </span>
                                </p>
                              </td>
                              <td className="c22">
                                <ul className="c25 lst-kix_list_6-0 start">
                                  <li className="c3 c12 li-bullet-0">
                                    <span className="">+91 9513251477</span>
                                  </li>
                                  <li className="c3 c12 li-bullet-0">
                                    <a href="mailto:grievanceofficer@enkash.com">
                                      grievanceofficer@enkash.com
                                    </a>
                                  </li>
                                  <li className="c3 c12 li-bullet-0">
                                    <span className="">
                                      91 SpringBoard, 175, Kagalwala House,
                                      2nd&nbsp; Floor, Kalina, Santacruz (E),
                                      Mumbai- 400 098, Maharashtra , India
                                    </span>
                                  </li>
                                </ul>
                              </td>
                              <td className="">
                                <p className="c42">
                                  <span className="c5">Within </span>
                                  <span className="c1">30 business days </span>
                                  <span className="c5">
                                    from the date of receipt of&nbsp;
                                  </span>
                                  <span className="c5">complaint</span>
                                </p>
                                <p className="c28"></p>
                              </td>
                            </tr>
                            <tr className="c29">
                              <td className="">
                                <p className="c23">
                                  <span className="c8">Level 4&nbsp;</span>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c16">
                                  <span className="c0">Nodal Officer</span>
                                </p>
                              </td>
                              <td className="c22">
                                <ul className="c25 lst-kix_list_8-0 start">
                                  <li className="c3 c12 li-bullet-0">
                                    <span className="">+91 9513251499</span>
                                  </li>
                                  <li className="c3 c12 li-bullet-0">
                                    <span className="c27">
                                      <a
                                        className="c17"
                                        href="mailto:nodalofficer@enkash.com"
                                      >
                                        nodalofficer@enkash.com
                                      </a>
                                    </span>
                                  </li>
                                  <li className="c3 c12 li-bullet-0">
                                    <span className="">
                                      91 SpringBoard, 175, Kagalwala House,
                                      2nd&nbsp; Floor, Kalina, Santacruz (E),
                                      Mumbai- 400 098, Maharashtra , India
                                    </span>
                                  </li>
                                </ul>
                              </td>
                              <td className="">
                                <p className="c42">
                                  <span className="c5">Within </span>
                                  <span className="c1">15 business days </span>
                                  <span className="c5">
                                    from the date of receipt of&nbsp;
                                  </span>
                                  <span className="c5">complaint</span>
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="c39 c9">
                        <span className="c14"></span>
                      </p>
                      <p className="c9 c39">
                        <span className="c14"></span>
                      </p>
                      <p className="c3">
                        <span className="c0 c24">
                          We will ensure that complaints are disposed of within
                          a period of thirty (30) business days of its receipt.
                          We will share the details of resolution or rejection
                          of the complaint, with reasons thereof in writing.
                        </span>
                      </p>

                      <p className="c3 c9">
                        <span className="c0 c24"></span>
                      </p>
                      <p className="c3 c9">
                        <span className="c0 c24"></span>
                      </p>

                      <h5 className="c32">11. Maintenance of records</h5>

                      <p className="c41">
                        <span className="c0">
                          The record of complaints including the below will be
                          preserved and maintained as required under the
                          applicable regulations:.&nbsp;
                        </span>
                      </p>

                      <ol style={{ listStyleType: "lower-roman" }}>
                        <li className="c26">
                          <span className="c0">
                            Nature of grievances/ complaints received;&nbsp;
                          </span>
                        </li>
                        <li className="c26">
                          <span className="c0">Current status; </span>
                        </li>
                        <li className="c6">
                          <span className="c0 c24">
                            Resolution provided; and&nbsp;
                          </span>
                        </li>
                        <li className="c6">
                          <span className="c0 c24">
                            Closure of the grievance.&nbsp;
                          </span>
                        </li>
                      </ol>

                      <p className="c3 c9">
                        <span className="c7"></span>
                      </p>
                      <p className="c3 c9">
                        <span className="c7"></span>
                      </p>

                      <h5 className="c32">
                        12. Complaints Review and Analysis
                      </h5>

                      <p className="c41">
                        <span className="c0">
                          The Senior Management Team of the Company will
                          periodically review major areas of customer grievances
                          / feedback received. The team would also examine all
                          issues that have a bearing on the quality of customer
                          service. The review and analysis will include:.&nbsp;
                        </span>
                      </p>

                      <ol style={{ listStyleType: "lower-roman" }}>
                        <li className="c26">
                          <span className="c0">
                            Complaints received and resolved beyond the
                            prescribed TAT;&nbsp;
                          </span>
                        </li>
                        <li className="c26">
                          <span className="c0">
                            Number and type of complaints escalated;{" "}
                          </span>
                        </li>
                        <li className="c6">
                          <span className="c0 c24">
                            Reason for spike in a particular type of complaint;
                            and&nbsp;
                          </span>
                        </li>
                        <li className="c6">
                          <span className="c0 c24">
                            Any deficiency in the manner the complaints are
                            handled etc.&nbsp;
                          </span>
                        </li>
                      </ol>
                      <p className="c41">
                        <span className="c0">
                          The Company will make necessary changes to ensure
                          similar issues do not occur again based on such review
                          and analysis.&nbsp;
                        </span>
                      </p>
                      <p className="c3 c9">
                        <span className="c7"></span>
                      </p>
                      <p className="c3 c9">
                        <span className="c7"></span>
                      </p>

                      <h5 className="c32">13. Review of Policy</h5>

                      <p className="c41">
                        <span className="c0">
                          The Company will periodically review and assess the
                          Policy in light of any material changes in regulatory
                          framework or for business or operational reasons and
                          recommend changes, if any, to the Board.&nbsp;
                        </span>
                      </p>
                      <p className="c41">
                        <span className="c0">
                          The reviews will consider the following:&nbsp;
                        </span>
                      </p>

                      <ol style={{ listStyleType: "lower-roman" }}>
                        <li className="c26">
                          <span className="c0">
                            Internal factors (changes in organizational
                            structure or products /services offered)&nbsp;
                          </span>
                        </li>
                        <li className="c26">
                          <span className="c0">
                            The overall performance of the grievance redressal
                            mechanism, and{" "}
                          </span>
                        </li>
                        <li className="c6">
                          <span className="c0 c24">
                            The results of the audit/ review, if any conducted
                            during the year.&nbsp;
                          </span>
                        </li>
                      </ol>
                      <p className="c41">
                        <span className="c0">
                          Any such updates/ changes to this Policy will be
                          approved by the Board and communicated to the relevant
                          customers/ staff/ stakeholders.&nbsp;
                        </span>
                      </p>
                      <p className="c3 c9">
                        <span className="c7"></span>
                      </p>
                      <p className="c3 c9">
                        <span className="c7"></span>
                      </p>

                      <h5 className="c32">14. Roles and Responsibilities:</h5>

                      <p className="c41">
                        <span className="c0">
                          The Customer Grievance team shall ensure timely and
                          accurate communication with customers regarding
                          grievance complaint, queries and escalation, based on
                          the agreed procedure between Nehat Tech Solutions Pvt
                          Ltd and the Bank.&nbsp;
                        </span>
                      </p>
                      <p className="c41">
                        <span className="c0">
                          The Customer Grievance team is also responsible for
                          coordinating with internal stakeholders and ensuring
                          that any required reports or data are submitted to
                          regulatory bodies as per the specified
                          timelines.&nbsp;
                        </span>
                      </p>
                      <p className="c41">
                        <span className="c0">
                          The following personnel’s would be involved in
                          preparation and review of the below-mentioned reports.
                          Either of the individual will be sharing the same to
                          RBI per the provided timeline.&nbsp;
                        </span>
                      </p>
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <tbody>
                            <tr className="c11">
                              <td className="" style={{ width: "80px" }}>
                                <p className="c23">
                                  <span className="c8 c24">
                                    <b>Position</b>
                                  </span>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c36">
                                  <span className="c1 c24">
                                    <b>Employee Name</b>
                                  </span>
                                </p>
                              </td>
                              <td className="c22">
                                <p className="c3 c37">
                                  <span className="c1 c24">
                                    <b>Employee Id</b>
                                  </span>
                                </p>
                              </td>
                              <td className="">
                                <p className="c43">
                                  <span className="c1 c24">
                                    <b>Email Id</b>
                                  </span>
                                </p>
                              </td>
                              <td className="">
                                <p className="c43">
                                  <span className="c1 c24">
                                    <b>Contact no.</b>
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr className="c19">
                              <td className="">
                                <p className="c23">
                                  <span className="c8">Preparer&nbsp;</span>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c36">
                                  <span className="c1">
                                    Pramod Dhuriya&nbsp;
                                  </span>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c36">
                                  <span className="c1">009&nbsp;</span>
                                </p>
                              </td>

                              <td className="">
                                <p className="c43">
                                  <p className="c3 c36">
                                    <span className="c1">
                                      <a
                                        className="c17"
                                        href="mailto:pramod.dhuriya@enkash.com"
                                      >
                                        pramod.dhuriya@enkash.com
                                      </a>
                                    </span>
                                  </p>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c36">
                                  <span className="c1">+91-8805789200</span>
                                </p>
                              </td>
                            </tr>
                            <tr className="c19">
                              <td className="">
                                <p className="c23">
                                  <span className="c8">Reviewer&nbsp;</span>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c36">
                                  <span className="c1">Nagesh Shet&nbsp;</span>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c36">
                                  <span className="c1">030&nbsp;</span>
                                </p>
                              </td>

                              <td className="">
                                <p className="c43">
                                  <p className="c3 c36">
                                    <span className="c1">
                                      <a
                                        className="c17"
                                        href="mailto:nagesh@enkash.com"
                                      >
                                        nagesh@enkash.com
                                      </a>
                                    </span>
                                  </p>
                                </p>
                              </td>
                              <td className="c13">
                                <p className="c3 c36">
                                  <span className="c1">+91-98338 75021</span>
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MerchantOnboarding
