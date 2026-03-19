import React from "react"
import { Metadata } from "next"

import styles from "./page.module.scss"
import generateMetaData from "@/src/utils/metaData"

import DynamicHeading from "@/src/components/dynamic-heading"
import CustomBreadcrumb from "@/src/components/breadcrumb"

export const metadata: Metadata = generateMetaData({
  title: "FAQ for Prepaid Instruments: EnKash",
  description:
    "Find answers to common questions about EnKash prepaid cards and usage.",
  alternates: {
    canonical: `${process.env.URL}/policies/prepaid-program/faq`,
  },
})

const Faq = (): React.JSX.Element => {
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
                  name: "FAQ",
                  url: "/policies/prepaid-program/FAQ",
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
                            title: "EnKash PPI– FAQs",
                            color: "color-equity-blue",
                          },
                        ]}
                        headingTag="h1"
                        className="f-5 text-center"
                      />
                    </div>
                    <div className="word-to-html-null mb-5">
                      <p className="c15 mt-6 pb-4 h5">
                        <strong>Last Updated On: 25th August 2025</strong>
                      </p>
                      <h2 className="c15 mt-6 h5">
                        1. What is a Prepaid Payment Instrument (PPI)?
                      </h2>
                      <p className="c3 c9">
                        <span className="c15">
                          A PPI is a method that facilitates the purchase of
                          goods and services, including financial services,
                          remittance facilities, etc., against the value stored
                          on such instruments.
                        </span>
                      </p>
                      <h2 className="c15 mt-6 h5">
                        2. Is EnKash authorized to operate as a PPI issuer?
                      </h2>
                      <p className="c3 c9">
                        <span className="c15">
                          Yes, EnKash, operated by Nehat Tech Solutions Private
                          Limited, is authorized by the Reserve Bank of India
                          (RBI) as a PPI issuer.
                        </span>
                      </p>
                      <h2 className="c15 mt-6 h5">
                        3. What types of PPIs does EnKash offer?
                      </h2>
                      <p className="c3 c9">
                        <span className="c15">
                          EnKash offers non closed system PPIs such as wallets
                          and cards that can be used across multiple merchants
                          and platforms.
                        </span>
                      </p>
                      <h2 className="c15 mt-6 h5">
                        4. What is meant by interoperability in the context of
                        PPI?
                      </h2>
                      <p className="c3 c9">
                        <span className="c15">
                          Interoperability refers to the ability of PPI
                          instruments to be used across different payment
                          systems and networks,ensuring seamless transactions
                          for users
                        </span>
                      </p>
                      <h2 className="c15 mt-6 h5">
                        5. Are KYC norms applicable to EnKash PPI users?
                      </h2>
                      <p className="c3 c9">
                        <span className="c15">
                          Yes, EnKash follows RBI&apos;s Know Your Customer
                          (KYC) guidelines for onboarding and maintaining
                          customer accounts.
                        </span>
                      </p>
                      <h2 className="c15 mt-6 h5">
                        6. How does EnKash ensure customer data security?
                      </h2>
                      <p className="c3 c9">
                        <span className="c15">
                          EnKash complies with RBI mandated security frameworks,
                          including PCI DSS& SOC2 compliance norms and thorough
                          data encryption is implemented followed by regular
                          security assessmentsto ensure data protection.
                        </span>
                      </p>
                      <h2 className="c15 mt-6 h5">
                        7. What are the limits on PPI balances and transactions?
                      </h2>
                      <p className="c3 c9">
                        <span className="c15">
                          As per RBI guidelines, Full KYC PPIs can hold balances
                          up to ₹2,00,000 and have no transaction limit, while
                          minimum detail PPIs have lower limits.
                        </span>
                      </p>
                      <h2 className="c15 mt-6 h5">
                        8. What happens if there is an unauthorised transaction?
                      </h2>
                      <p className="c3 c9">
                        <span className="c15">
                          Customers must report to EnKash support team for any
                          unauthorized transactions immediately. EnKash will
                          investigate and, as per RBI rules, may offer a refund
                          if the issue is validated.
                        </span>
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

export default Faq
