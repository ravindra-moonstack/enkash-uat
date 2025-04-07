import Header from "@/components/header/header";
import React from "react";
import styles from "./page.module.scss";
import leftBlueGradient from "./gradient.png";
import chart from "./chart.png";
import Image from "next/image";
import Footer from "@/components/footer/footer";

import { Metadata } from "next";
import generateMetaData from "@/common/utils/metaData";

export const metadata: Metadata = generateMetaData({
  title: "Chargeback or Dispute Management Policy | EnKash",
  description:
    "The purpose of this policy is to provide guidelines on how settlements would be done to Merchants by Nehat Tech Solutions Private Ltd.",
  alternates: {
    canonical: "https://www.enkash.com/chargeback-dispute-management-policy/",
  },
});

const disputeManagement = () => {
  return (
    <>
      <Header />
      <div className={styles.parent_container}>
        <Image
          src={leftBlueGradient}
          alt="gradient image"
          className={styles.gradient}
        />
        <div className="enkash-banking-maincontainer">
          <div className="enkash-blog-detail">
            <div className={styles.inner_container}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="enkash-term-condtions">
                      <h1 className="term-condition-title mb-5 mt-0 mt-md-12 color-equity-blue">
                        Chargeback or Dispute Management Policy
                      </h1>

                      <div className="word-to-html-null">
                        <h5 className="c10">1. Introduction:</h5>
                        <p className="c5">
                          <span className="c1">
                            The purpose of this policy is to provide guidelines
                            on how settlements would be done to Merchants by
                            Nehat Tech Solutions Private Ltd.
                          </span>
                        </p>
                        <p className="c5 c8">
                          <span className="c1"></span>
                        </p>
                        <p className="c5">
                          <span className="c13">
                            The policy would provide the overview on the
                            transaction flow and factors that would be
                            considered while settlement is done.
                          </span>
                        </p>
                        <h5 className="c6">2. Dispute Management Cycle :</h5>
                        <p className="c12">
                          <span className="c13">
                            Nehat Tech Solutions Private Limited will follow a
                            fair and transparent policy to manage and process
                            disputes by forcing that both parties of the
                            transaction (Customer and Merchant ) hold up to
                            their obligation of the transaction.&nbsp;
                          </span>
                        </p>
                        <p className="c12">
                          <span className="c13">
                            Given below the flow of the Dispute Cycle:&nbsp;
                          </span>
                        </p>
                        <p className="c12">
                          <span>
                            <Image
                              alt="Diagram Description automatically generated"
                              src={chart}
                              className={styles.chart}
                            />
                          </span>
                        </p>
                        <p className="c12">
                          <span className="c13">
                            Disputes follow a strict timeline by when the
                            acceptance or rejection need to be sent across to
                            the Issuer via the network &amp; Acquirer.&nbsp;
                            Given the same, the merchant is also expected to
                            update the same to the Nehat Tech Solutions Private
                            Limited with the timelines.&nbsp;
                          </span>
                        </p>
                        <p className="c12">
                          <span className="c13">
                            Some of the type of disputes but not limited to are
                            as below&nbsp;
                          </span>
                        </p>
                        <ol className="c15 lst-kix_list_2-0 start">
                          <li className="c12 c23 li-bullet-0">
                            <span className="c1">
                              Delay in service/delivery of goods
                            </span>
                          </li>
                          <li className="c12 c23 li-bullet-0">
                            <span className="c1">
                              Non delivery of goods/service
                            </span>
                          </li>
                        </ol>
                        <h5 className="c6">
                          3. Dispute Timelines &amp; Communication
                        </h5>
                        <p className="c5">
                          <span className="c1">
                            As per network &amp; Payment association and
                            regulatory guidelines, Disputes need to be addressed
                            in a time effective manner.
                          </span>
                        </p>
                        <p className="c5 c8">
                          <span className="c1"></span>
                        </p>
                        <p className="c5">
                          <span className="c1">
                            Accordingly Nehat Tech Solutions Private Limited has
                            prescribed the timelines for the merchants to
                            respond with documents/details of the transactions
                            and delivery details of service/product.&nbsp;{" "}
                          </span>
                        </p>
                        <p className="c5 c8">
                          <span className="c1"></span>
                        </p>
                        <p className="c5">
                          <span className="c13">
                            Nehat Tech Solutions Private Limited would require
                            merchants to share documents pertaining to the
                            dispute within 5 business days in-case the merchant
                            wants to defend the Dispute. Communication of the
                            dispute would be sent through Email to the merchant
                            pertaining to the dispute. In case of non-receipt of
                            documents, Nehat Tech Solutions Private Limited
                            would send across reminders to the Merchant on the 3
                          </span>
                          <span className="c25">rd</span>
                          <span className="c13">
                            &nbsp;Business day. If no proper documents are
                            received from the merchant then the dispute would be
                            deemed to have accepted by the merchant. The dispute
                            amount would be adjusted in the settlements payable
                            to the merchant.&nbsp;
                          </span>
                        </p>
                        <p className="c5 c8">
                          <span className="c0"></span>
                        </p>
                        <p className="c12 c8">
                          <span className="c1"></span>
                        </p>
                        <p className="c12">
                          <span className="c1">
                            Documents/evidences to be shared by Merchants on
                            disputes received:
                          </span>
                        </p>
                        <p className="c12 c8">
                          <span className="c0"></span>
                        </p>
                        <a id="t.7d8469e607daf20915a01a801efe9b30d9abaabc"></a>
                        <a id="t.0"></a>
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <tbody>
                              <tr className="c7">
                                <td className="c24">
                                  <p className="c5">
                                    <span className="c11">Sl</span>
                                  </p>
                                </td>
                                <td className="c14">
                                  <p className="c5">
                                    <span className="c11">
                                      Nature/Type of Dispute
                                    </span>
                                  </p>
                                </td>
                                <td className="c17">
                                  <p className="c5">
                                    <span className="c11">
                                      Merchant responsibility ( not limited to)
                                    </span>
                                  </p>
                                </td>
                                <td className="c18">
                                  <p className="c5">
                                    <span className="c11">Timelines</span>
                                  </p>
                                </td>
                              </tr>
                              <tr className="c7">
                                <td className="c24">
                                  <p className="c5">
                                    <span className="c11">1</span>
                                  </p>
                                </td>
                                <td className="c14">
                                  <p className="c5">
                                    <span className="c11">
                                      Delay in service/delivery of goods
                                    </span>
                                  </p>
                                </td>
                                <td className="c17">
                                  <ol className="c15 lst-kix_list_3-0">
                                    <li className="c2 li-bullet-0">
                                      <span className="c11">
                                        Merchant terms and conditions and/or
                                        customer confirmation to accept delay in
                                        service&nbsp;
                                      </span>
                                    </li>
                                    <li className="c2 li-bullet-0">
                                      <span className="c11">
                                        Proof of delivery within committed
                                        timelines
                                      </span>
                                    </li>
                                  </ol>
                                </td>
                                <td className="c18">
                                  <p className="c5">
                                    <span className="c11">Within 3</span>
                                    <span className="c22">rd</span>
                                    <span className="c11">
                                      &nbsp;business day of receipt of business
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr className="c7">
                                <td className="c24">
                                  <p className="c5">
                                    <span className="c11">2</span>
                                  </p>
                                </td>
                                <td className="c14">
                                  <p className="c12">
                                    <span className="c13">
                                      Non delivery of goods/service
                                    </span>
                                  </p>
                                </td>
                                <td className="c17">
                                  <p className="c5">
                                    <span className="c11">
                                      Proof of delivery of goods/service within
                                      the committed timelines
                                    </span>
                                  </p>
                                </td>
                                <td className="c18">
                                  <p className="c5">
                                    <span className="c11">Within 3</span>
                                    <span className="c22">rd</span>
                                    <span className="c11">
                                      &nbsp;business day of receipt of business
                                    </span>
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <h5 className="c6">4. Disputes review:</h5>
                        <p className="c12">
                          <span className="c1">
                            As part of the review, disputes received against the
                            merchants would also be included. In case of a
                            dispute ratio is more than the network/banks
                            permissible limits, such merchants would need to
                            present an explanation and steps to control
                            disputes.&nbsp; Such merchants could also be given a
                            notice to exit and further settlements would be kept
                            on hold.{" "}
                          </span>
                        </p>

                        <h5 className="c6">5. Dispute Charges</h5>
                        <p className="c12">
                          <span className="c1">
                            Any charges levied by the network/association
                            pertaining to disputes would be passed on
                            appropriately to the merchant who has received the
                            disputes.{" "}
                          </span>
                        </p>
                        <p className="c12">
                          <span className="c13">
                            Further to the above, Nehat Tech Solutions Private
                            Limited may levy an administrative charge for
                            managing disputes on behalf of the merchant.&nbsp;
                          </span>
                        </p>
                        <p className="c5 c8">
                          <span className="c0"></span>
                        </p>
                        <h5 className="c6">6. Review of the Policy</h5>
                        <p className="c27">
                          <span className="c13">
                            This policy would be reviewed on a periodic basis
                            for any update or change in regulatory
                            guidelines.&nbsp;
                          </span>
                        </p>
                        <p className="c5 c8">
                          <span className="c0"></span>
                        </p>
                        <p className="c5 c8">
                          <span className="c10"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default disputeManagement;
