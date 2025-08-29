import React from "react"
import styles from "./page.module.scss"
import { Metadata } from "next"
import generateMetaData from "@/common/utils/metaData"
import { CustomBreadcrumb, DynamicHeading } from "@/components"

export const metadata: Metadata = generateMetaData({
  title: "Merchant Onboarding Policy for Payments: EnKash",
  description:
    "Discover our transparent process for verifying and onboarding payment merchants.",
  alternates: {
    canonical: `${process.env.URL}/policies/payments/merchant-onboarding`,
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
                            </b>
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
                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>
                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>
                      <div className="table-responsive mt-4">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th
                                colSpan={2}
                                className="text-center bg-secondary text-white"
                              >
                                SOLE PROPRIETORSHIP
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <b>ID Proof & Address Proof</b>
                              </td>
                              <td>
                                <p>
                                  <b>ID PROOF – PAN Account Number</b>
                                </p>
                                <p>
                                  Certified copy of the Proof of possession of
                                  Aadhaar number or any OVD or the equivalent
                                  e-document thereof containing the details of
                                  identity and address
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Business Proof</b>
                              </td>
                              <td>
                                <p>Any one document from the below list</p>
                                <ul>
                                  <li>
                                    Self-attested copy of GST certificate or
                                    letter of registration document issued by
                                    GST authorities / Declaration of non-GST in
                                    case not applicable or GST Tax duly
                                    acknowledged
                                  </li>
                                  <li>
                                    Last and complete income tax return (not
                                    acknowledgment) in the name of the sole
                                    proprietor where the inform income is
                                    reflected duly authenticated / acknowledge
                                    by income tax authorities.
                                  </li>
                                  <li>
                                    Valid business license of certificate of
                                    registration issued by state / Central
                                    government authority.
                                  </li>
                                  <li>
                                    Letter issued by Registering authority like
                                    certificate of practice issued by instate of
                                    Charted Accountants of India, Cost
                                    accountants of India, Company secretaries of
                                    India, Indian medical council and food a
                                    Drug Control Authorities.
                                  </li>
                                  <li>
                                    Trade License (Provisional is not accepted)
                                  </li>
                                  <li>Small Scale Industrial Certificate</li>
                                  <li>
                                    Certificate issued by Tourism Department.
                                  </li>
                                  <li>
                                    Liquor/License/Certificate in the name of
                                    Firm.
                                  </li>
                                  <li>IRDA license for Insurance business.</li>
                                  <li>
                                    SEBI registration for Stock market broking.
                                  </li>
                                  <li>
                                    Permission from local government authority
                                    to run Nursing home/Clinic.
                                  </li>
                                </ul>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <b>Bank Details</b>
                              </td>
                              <td>
                                <p>Bank Account Number and IFSC code</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Other documents</b>
                              </td>
                              <td>
                                <p>
                                  Any other documents including in respect of
                                  the nature of work/business/profession,
                                  financial status of the Merchant, or the
                                  equivalent e-documents thereof as may be
                                  required by the Company
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="table-responsive mt-4">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th
                                colSpan={2}
                                className="text-center bg-secondary text-white"
                              >
                                PARTNERSHIP / LLP
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <b>ID Proof & Address Proof</b>
                              </td>
                              <td>
                                <p>
                                  <b>ID PROOF – PAN Account Number</b>
                                </p>
                                <p>
                                  Certified copy of the Proof of possession of
                                  Aadhaar number or any OVD or the equivalent
                                  e-document thereof containing the details of
                                  identity and address
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <b>Business Proof</b>
                              </td>
                              <td>
                                <p>Partnership / LLP Agreement Deed</p>
                                <p>Registration or LLP Certificate</p>
                                <p>GSTIN Number AND Company PAN Number</p>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <b>Bank Details</b>
                              </td>
                              <td>
                                <p>Bank Account Number and IFSC code</p>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <b>Other documents</b>
                              </td>
                              <td>
                                <p>
                                  Any other documents including in respect of
                                  the nature of work/business/profession,
                                  financial status of the Merchant, or the
                                  equivalent e-documents thereof as may be
                                  required by the Company
                                </p>
                                <p>
                                  Board Resolution (should not be older than 5
                                  months, Should be signed by at least 2
                                  Partners / CS can certify true copy (LLP))
                                </p>
                                <p>
                                  List of Partners, UBO and Shareholding (LLP)
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="table-responsive mt-4">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th
                                colSpan={2}
                                className="text-center bg-secondary text-white"
                              >
                                PUBLIC LIMITED / PRIVATE LIMITED
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <b>ID Proof & Address Proof</b>
                              </td>
                              <td>
                                <p>
                                  <b>ID PROOF – PAN Account Number</b>
                                </p>
                                <p>
                                  Certified copy of the Proof of possession of
                                  Aadhaar number or any OVD or the equivalent
                                  e-document thereof containing the details of
                                  identity and address
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <b>Business Proof</b>
                              </td>
                              <td>
                                <p>Certificate of Incorporation</p>
                                <p>
                                  Certificate of Commencement of Business (in
                                  case of Public ltd co.)
                                </p>
                                <p>
                                  MOA & AOA (attested with first 8, last pages)
                                </p>
                                <p>
                                  Board Resolution (should not be older than 5
                                  months, should be signed by at least 2
                                  directors / CS can certify true copy)
                                </p>
                                <p>List of Directors, UBO and Shareholding</p>
                                <p>GSTIN and Company PAN Number</p>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <b>Bank Details</b>
                              </td>
                              <td>
                                <p>Bank Account Number and IFSC code</p>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <b>Other documents</b>
                              </td>
                              <td>
                                <p>
                                  Any other documents including in respect of
                                  the nature of work/business/profession,
                                  financial status of the Merchant, or the
                                  equivalent e-documents thereof as may be
                                  required by the Company
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <table className="table table-bordered text-start">
                        <thead>
                          <tr>
                            <th
                              colSpan={2}
                              className="text-center bg-secondary text-white"
                            >
                              SOCIETY / TRUST / NGO
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="fw-bold">
                              ID Proof & Address Proof
                            </td>
                            <td>
                              ID PROOF – PAN Account Number <br />
                              Certified copy of the Proof of possession of
                              Aadhaar number or any OVD or the equivalent
                              e-document thereof containing the details of
                              identity and address
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Business Proof</td>
                            <td>
                              Any one document from the below list:
                              <ul className="mb-0">
                                <li>Registration Certificate</li>
                                <li>Trust Deed</li>
                                <li>Bye Laws</li>
                                <li>
                                  Affiliation of Entity in case of Health &
                                  Education sector
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Bank Details</td>
                            <td>Bank Account Number and IFSC code</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Other Documents</td>
                            <td>
                              Any other documents including in respect of the
                              nature of work/business/profession, financial
                              status of the Merchant, or the equivalent
                              e-documents thereof as may be required by the
                              Company
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <td>
                        Where the OVD furnished by the merchant does not have
                        updated address, the following documents or the
                        equivalent e-documents thereof will be deemed to be OVDs
                        for the limited purpose of proof of address:
                        <ul className="mb-0">
                          <li>
                            Utility bill which is not more than two months old
                            of any service provider (electricity, telephone,
                            post-paid mobile phone, piped gas, water bill)
                          </li>
                          <li>Property or Municipal tax receipt</li>
                          <li>
                            Pension or family pension payment orders (PPOs)
                            issued to retired employees by Government
                            Departments or Public Sector Undertakings, if they
                            contain the address
                          </li>
                          <li>
                            Letter of allotment of accommodation from employer
                            issued by State Government or Central Government
                            Departments, statutory or regulatory bodies, public
                            sector undertakings, scheduled commercial banks,
                            financial institutions and listed companies and
                            leave and license agreements with such employers
                            allotting official accommodation
                          </li>
                        </ul>
                        <p className="mb-0 fw-bold">
                          Note – The Company will ensure to obtain the OVD with
                          current address updated within a period of three
                          months of receiving the above documents.
                        </p>
                      </td>

                      <h5 className="c15 mt-6">7. Annexure 2</h5>

                      <p className="c3">
                        <span className="c15">
                          List of documents including in respect of the nature
                          of work/business/profession of the merchant
                        </span>
                      </p>

                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Industry Type</th>
                            <th>Regulated Bodies</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>International Travel & Hotel</td>
                            <td>
                              IATA (International Air Transport Association)
                            </td>
                          </tr>
                          <tr>
                            <td>Education institutes</td>
                            <td>Board Grant Certificates</td>
                          </tr>
                          <tr>
                            <td>University / Education Sector</td>
                            <td>UGC Certificate / ICSC / CBSC / AICTE</td>
                          </tr>
                          <tr>
                            <td>Pharmacy</td>
                            <td>Drug License</td>
                          </tr>
                          <tr>
                            <td>Herbal/Ayurvedic medicines</td>
                            <td>Drug Comptroller of India</td>
                          </tr>
                          <tr>
                            <td>OTC Products (Ayurveda, Health Supplements)</td>
                            <td>FSSAI License</td>
                          </tr>
                          <tr>
                            <td>International delivery</td>
                            <td>
                              Merchant should have a valid regulatory license
                              for international deliveries
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Advisory Firm (Stock Market)
                              <br />
                              Venture Capital Fund Co
                              <br />
                              Merchant Banking Co
                            </td>
                            <td>SEBI Certificate</td>
                          </tr>
                          <tr>
                            <td>Food & Beverages Industry</td>
                            <td>
                              FDA (Food and Drug Administration) / FSSAI
                              Certificate
                            </td>
                          </tr>
                          <tr>
                            <td>University / Education Sector</td>
                            <td>UGC Certificate / ICSC / CBSC / AICTE</td>
                          </tr>
                          <tr>
                            <td>
                              Airlines & Aircraft Maintenance related services
                            </td>
                            <td>
                              DGCA Certification (Directorate General of Civil
                              Aviation)
                            </td>
                          </tr>
                          <tr>
                            <td>Internet Service Provider</td>
                            <td>DOT (Department of Telecommunications)</td>
                          </tr>
                          <tr>
                            <td>Web Host / Domain Seller</td>
                            <td>PCI-DSS</td>
                          </tr>
                          <tr>
                            <td>
                              Paper / Gift Vouchers
                              <br />
                              Bank / NBFCs or Money Lending
                              <br />
                              Prepaid / e-wallet, Cash / Smart card
                            </td>
                            <td>RBI Certification</td>
                          </tr>
                          <tr>
                            <td>FOREX</td>
                            <td>FEMA Registration, FFMC Certificate</td>
                          </tr>
                          <tr>
                            <td>NGO</td>
                            <td>12A, 80G Certificate</td>
                          </tr>
                          <tr>
                            <td>12A, 80G Certificate</td>
                            <td>Finance Support for Society</td>
                          </tr>
                          <tr>
                            <td>Gold, Silver Merchants</td>
                            <td>Finance Support for Society</td>
                          </tr>
                          <tr>
                            <td>Insurance</td>
                            <td>IRDA</td>
                          </tr>
                          <tr>
                            <td>Mutual Fund Broker</td>
                            <td>AMFI</td>
                          </tr>
                          <tr>
                            <td>Internet Service Provider</td>
                            <td>FDOT</td>
                          </tr>
                          <tr>
                            <td>SMS/Email/Telemarketing</td>
                            <td>TRAI</td>
                          </tr>
                          <tr>
                            <td>Utility Services</td>
                            <td>BBPS License</td>
                          </tr>
                          <tr>
                            <td>
                              Builders/Construction/Contractor/ Brokers (Real
                              Estate)
                            </td>
                            <td>RERA Registration certificate</td>
                          </tr>
                        </tbody>
                      </table>

                      <h5 className="c15 mt-6">8. Annexure 3</h5>

                      <p className="c3">
                        <span className="c15">
                          List of Restricted businesses:
                        </span>
                      </p>
                      <ol>
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
                          Multi-level Marketing schemes / Pyramid / sites using
                          matrix scheme approach.
                        </li>
                        <li>
                          Any intangible goods and services or
                          aggregation/consolidation business.
                        </li>
                        <li>Drop-Shipped Merchant.</li>
                        <li>
                          Web based telephony/e-mail/sms/fax/calling
                          cards/bandwidth/data transfer or allied services.
                        </li>
                        <li>Crypto or Crypto based services.</li>
                        <li>
                          Any act services product people entity place country
                          defined illegal/Sanctioned or in negative list by RBI
                          or other regulators.
                        </li>
                        <li>DMT</li>
                        <li>Money Transfer Services/Card To Cash</li>
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
                        <li>Mystery Boxes/Get Risk Schemes/Betting</li>
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
        </div>
      </div>
    </>
  )
}

export default MerchantOnboarding
