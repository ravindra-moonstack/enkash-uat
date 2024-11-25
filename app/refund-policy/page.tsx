import Header from "@/components/header/header";
import React from "react";
import styles from "./page.module.scss";
import leftBlueGradient from "./gradient.png";
import Image from "next/image";
import Footer from "@/components/footer/footer";

import { Metadata } from "next";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";

export const metadata: Metadata = generateMetaData({
  title: " Terms & Conditions for Usage of Platform | EnKash",
  description: " Terms & Conditions for Usage of Platform",
  alternates: {
    canonical: "https://www.enkash.com/terms-condition-platform/",
  },
});

const termConditionPlatform = () => {
  return (
    <>
      <StructuredData
        url={`https://www.enkash.com/terms-condition-platform/`}
      />
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
                    <div className="enkash-term-condtions word-to-html-null">
                      <div>
                        <h1 className="term-condition-title mb-5 mt-0 mt-md-12 color-equity-blue">
                          Refund and Return Policy for Brand Vouchers
                        </h1>

                        <p className="mt-5">
                          Thank you for shopping with Bolt. We are committed to
                          providing you with a seamless and satisfactory
                          experience. Please read our Refund and Return Policy
                          carefully for brand vouchers purchased through our
                          platform.
                        </p>
                        <p className="mb-3 mt-4">
                          <strong>1. General Policy</strong>
                        </p>
                        <p>
                          Brand vouchers purchased on Bolt are issued and
                          governed by the respective issuing brands. As such,
                          the terms and conditions of use, including refund and
                          return policies, are determined by the issuing brands.
                          We will only be processing refunds to you in cases
                          where the transaction is failed and our account has
                          been credited.
                        </p>
                        <p className="mb-3 mt-4">
                          <strong>
                            2. Eligibility for Refunds and Returns
                          </strong>
                        </p>
                        <p>
                          Non-Refundable Vouchers: Most brand vouchers are
                          non-refundable once purchased. Please verify the terms
                          and conditions of the voucher before completing your
                          purchase.
                        </p>
                        <p>
                          Faulty or Inactive Vouchers: If you encounter any
                          issues with a voucher (e.g., it is not accepted by the
                          issuing brand, or it is inactive), please contact
                          issuing brand’s customer support team immediately.
                        </p>

                        <p className="mb-3 mt-4">
                          <strong>3. Exchange Policy</strong>
                        </p>
                        <p>
                          Exchanges for brand vouchers are subject to the
                          issuing brand’s policy. If exchanges are permitted,
                          please contact the issuing brand’s customer support
                          team for assistance.
                        </p>

                        <p className="mb-3 mt-4">
                          <strong>4. Customer Support</strong>
                        </p>
                        <p>
                          For any questions or assistance with refunds and
                          returns, please contact our customer support team:
                          <ul className="mt-2">
                            <li>Email: support@enkash.com</li>
                            <li>Phone: +91 8530490475</li>
                          </ul>
                          Business Hours: Monday to Saturday 10 am to 9 pm.
                        </p>
                        <p className="mb-3 mt-4">
                          <strong>5. Changes to This Policy</strong>
                        </p>
                        <p>
                          We reserve the right to modify this policy at any
                          time. Any changes will be effective immediately upon
                          posting the updated policy on our platform. We
                          encourage you to review this policy periodically to
                          stay informed about our practices.
                        </p>
                        <p>
                          By purchasing brand vouchers on Bolt, you agree to
                          this Refund and Return Policy.
                        </p>

                        <h5>Thank you for choosing Bolt.</h5>
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

export default termConditionPlatform;
