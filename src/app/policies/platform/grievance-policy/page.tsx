import React from "react"
import { Metadata } from "next"

import styles from "./page.module.scss"
import generateMetaData from "@/src/utils/metaData"

// Dynamic imports
import DynamicHeading from "@/src/components/dynamic-heading"
import CustomBreadcrumb from "@/src/components/breadcrumb"

export const metadata: Metadata = generateMetaData({
  title: "EnKash Platform Grievance and Redressal Policy",
  description:
    "See how we resolve platform-related queries with efficiency and transparency.",
  alternates: {
    canonical: `${process.env.URL}/policies/platform/grievance-policy`,
  },
})

const GrievancePolicy = (): React.JSX.Element => {
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
                  name: "Platform",
                  url: "/policies/platform",
                },
                {
                  name: " Grievance and Redressal policy",
                  url: "/policies/platform/grievance-policy",
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
                            title: "Grievance and Redressal policy (Platform)",
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
                          In the present scenario of competitive world,
                          excellence in customer service is the most important
                          tool for sustained business growth. Customer
                          complaints are part of the business life of any
                          corporate entity.
                        </span>
                      </p>
                      <p className="c3">
                        <span className="c15">
                          Nehat Tech Solutions Private Limited (”the Company” or
                          “our” or “we” or “us”) as a technology focussed and
                          service-oriented organization considers customer
                          service and customer satisfaction both as prime
                          concern. The Company believes that providing prompt
                          and efficient service is essential not only to attract
                          new customers, but also to retain existing clientele
                          base.
                        </span>
                      </p>

                      <p className="c3">
                        <span className="c15">
                          This Policy document aims to minimize the instances
                          and recurrences of Customer complaints and grievances
                          through proper service delivery and review mechanism
                          and to ensure prompt redressal of Customer’s
                          complaints and grievances. The review mechanism would
                          help in identifying shortcomings in product features
                          and service delivery to satisfy the customer.
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

                      <ol style={{ listStyleType: "lower-roman" }}>
                        <li className="c3">
                          <span className="c15">
                            All customers are treated fairly and without bias at
                            all times
                          </span>
                        </li>
                        <li className="c3">
                          <span className="c15">
                            All issues raised by customers are dealt with
                            courtesy and resolved on time
                          </span>
                        </li>
                        <li className="c3">
                          <span className="c15">
                            Customers are made completely aware of their rights
                            so that they can opt for alternative remedies if
                            they are not fully satisfied with our response or
                            resolution to their complaint
                          </span>
                        </li>
                      </ol>

                      <h5 className="c15 mt-6">3. Key definitions</h5>

                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>

                      <ol style={{ listStyleType: "lower-roman" }}>
                        <li className="c3">
                          <span className="c15">
                            Customers mean and include Merchants and Vendors.
                          </span>
                        </li>
                        <li className="c3">
                          <span className="c15">
                            Complaint / Grievance- A complaint is a
                            communication alleging deficiency in service and
                            seeking relief by the customer for a service
                            deficiency.
                          </span>
                        </li>
                        <li className="c3">
                          <span className="c15">
                            Turn Around Time (TAT) – Timeline to resolve the
                            issue,
                          </span>
                        </li>
                        <li className="c3">
                          <span className="c15">
                            Escalation Levels will mean the three level ( Level
                            1, Level 2 and Level 3) process for redressing
                            Customer grievance
                          </span>
                        </li>
                      </ol>

                      <h5 className="c15 mt-6">
                        4. Grievance filing mechanism
                      </h5>

                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>
                      <p className="c3">
                        <span className="c15">
                          Modes available to the User for registering a
                          complaint with us:
                        </span>
                      </p>

                      <ol style={{ listStyleType: "lower-roman" }}>
                        <li className="c3">
                          <span className="c15">
                            Customer support/ Helpline no.– Customers can reach
                            out to our customer support on our helpline no.+91
                            85304 90475 available 12x6
                          </span>
                        </li>
                        <li className="c3">
                          <span className="c15">
                            Email – Customers can choose to send their complaint
                            via email to
                            <a
                              className="c17"
                              href="mailto:grievanceofficer@enkash.com"
                            >
                              grievanceofficer@enkash.com
                            </a>
                          </span>
                        </li>
                        <li className="c3">
                          <span className="c15">
                            Letter (via courier)– Customers can choose to submit
                            their complaint/ grievance or feedback in writing,
                            in person/ via mail to the office address displayed
                            at the website.
                          </span>
                        </li>
                      </ol>
                      <h5 className="c15 mt-6">
                        5. Registration of Complaints/Grievance
                      </h5>

                      <p className="c3">
                        <span className="c15">
                          All grievance complaints will be registered centrally
                          on the Company’s Ticketing system & complaints would
                          be acknowledged by Email.
                        </span>
                      </p>

                      <h5 className="c15 mt-6">
                        6. Acknowledgement and processing of grievance request
                      </h5>

                      <p className="c3">
                        <span className="c15">
                          Where the customer shares feedback, the customer will
                          be acknowledged via phone/ in writing on the status of
                          feedback. If the customer files a complaint, then each
                          complaint will be assigned a Unique Ticket Number
                          (‘UTN’) which will have the CRM Ticket ID. In case of
                          a complaint, customers will be provided with the UTN
                          along with a tracking facility to check the status of
                          the resolution by using the allotted UTN on any of the
                          aforementioned modes.
                        </span>
                      </p>
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
                          Name of the Grievance Officer: Mr. Vivek Purohit
                        </span>
                      </p>
                      <p className="c3">
                        <span className="c15">
                          Contact information:
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
                          Contact information:
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
                        10. Nehat Business Solution Pvt Ltd Grievance Escalation
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
                                        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                                      >
                                        {process.env.NEXT_PUBLIC_EMAIL}
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
                            Number and type of complaints escalated;
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
                            mechanism, and
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

export default GrievancePolicy
