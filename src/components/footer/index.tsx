import Image from "next/image"
import React from "react"
import Link from "next/link"

import styles from "./footer-v2.module.scss"

import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6"
import { locationPin, pci, enkashBlueLogo, ppi, ppa, sovSvg } from "./img"

const FooterV2 = (): React.JSX.Element => {
  //

  return (
    <div className={` ${styles.footer}`}>
      <div className={`max-w-auto  ${styles.footer_padding}`}>
        <div
          className={`d-flex flex-column flex-md-row ${styles.footer_section}`}
        >
          {/* 1st col */}
          <div className={`order-2 order-md-1 ${styles.logo_container}`}>
            <Link href="/" className={`${styles.logo_img} d-none d-md-block`}>
              <Image
                src={enkashBlueLogo}
                alt="logo"
                width={120}
                className="me-3"
              />
            </Link>

            <div
              className={`d-flex flex-column  gap-3 gap-md-4 ${styles.logi_bg}`}
            >
              <div>
                <hr className={`${styles.custom_hr}`} />
                <div>
                  <p className={styles.logo_container_info}>
                    EnKash is India’s leading spend management platform,
                    simplifying payments, expenses, cards, and rewards for
                    businesses. Backed by $23M in funding and trusted by 5,000+
                    businesses, it holds key RBI licenses and partners with
                    Visa, Mastercard, and NPCI. Its powerful financial suite
                    empowers CFOs with automation, compliance, and real-time
                    insights across the payment ecosystem.
                  </p>
                  <p className={styles.logo_container_info}>
                    EnKash Payment Gateway, is a licensed online payment
                    aggregator authorised by the RBI
                  </p>
                  <p className={styles.logo_container_info}>
                    EnKash is a commercial trade name owned by the legal entity,
                    Nehat Tech Solutions Pvt. Ltd.
                  </p>
                </div>
              </div>

              {/* col-1 resources */}

              <div className={` ${styles.info_container} d-none d-md-block`}>
                <div className={`{styles.info_div} ${styles.info_div_one}`}>
                  <div className={` ${styles.info_header_one}`}>
                    <h4 className={`${styles.title}`}>
                      Licenses & Certificates
                    </h4>
                  </div>
                  <div className={`d-flex ${styles.info_body}`}>
                    <div
                      className={`d-flex gap-2 flex-wrap ${styles.info_body_one}`}
                    >
                      <div className={styles.soc_logo}>
                        <Image
                          src={sovSvg}
                          alt="soc logo"
                          height={0} // remove fixed height
                          width={0} // remove fixed width
                          sizes="(max-width: 768px) 48px, 86px"
                          style={{
                            maxHeight: "48px",
                            width: "auto",
                            objectFit: "contain",
                          }}
                        />
                      </div>

                      <div className={styles.pci_logo}>
                        <Image
                          src={pci}
                          alt="pci logo"
                          height={48}
                          width={86}
                          objectFit="cover"
                        />
                      </div>

                      <div className={styles.pci_logo}>
                        <Image
                          src={ppi}
                          alt="pci logo"
                          height={48}
                          width={48}
                          objectFit="cover"
                        />
                      </div>
                      <div className={styles.pci_logo}>
                        <Image
                          src={ppa}
                          alt="pci logo"
                          height={48}
                          width={48}
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`col-6 col-md-7 ${styles.info_div} ${styles.info_div_two}`}
                >
                  <div className={`${styles.info_header_two}`}>
                    <h4 className={`${styles.title}`}>Help and Support</h4>
                  </div>
                  <div className={`d-flex mb-md-1 ${styles.info_body}`}>
                    <div className={` ${styles.info_body_two}`}>
                      <ul>
                        <li>
                          <Link
                            href="tel:8530490475"
                            target="_blank"
                            rel="noreferrer noopener"
                            className={` ${styles.support_text}`}
                          >
                            <FaPhone className={`${styles.callIcon}`} />
                            <span className={` ${styles.support_text}`}>
                              +91 8530490475
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            className={`${styles.support_text}`}
                          >
                            <FaEnvelope className={`${styles.callIcon}`} />
                            <span className={`${styles.support_text}`}>
                              {process.env.NEXT_PUBLIC_EMAIL}
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className={`col-6 col-md-2 ${styles.info_div} ${styles.info_div_three}`}
                >
                  <div className={` ${styles.info_header_three}`}>
                    <h4 className={`${styles.title}`}>FIND US ON</h4>
                  </div>
                  <div
                    className={`d-flex  justify-content-start ${styles.info_body}`}
                  >
                    <div className={` ${styles.info_body_three}`}>
                      <div
                        className={`d-flex justify-content-between  ${styles.social_icons_row}`}
                      >
                        <Link
                          href="https://www.linkedin.com/company/enkashbusiness"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Linkedin"
                        >
                          <FaLinkedinIn />
                        </Link>
                        <Link
                          href="https://www.youtube.com/@enkashbusiness"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Youtube"
                        >
                          <FaYoutube />
                        </Link>
                        <Link
                          href="https://www.instagram.com/Enkashbusiness"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Instagram"
                        >
                          <FaInstagram />
                        </Link>
                        <Link
                          href="https://twitter.com/EnkashBusiness"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Twitter"
                        >
                          <FaXTwitter />
                        </Link>
                        <Link
                          href="https://www.facebook.com/Enkashbusiness"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Facebook"
                        >
                          <FaFacebookF />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-wrap flex-md-nowrap d-block d-md-none">
                  <div
                    className={`col-12 col-md-10 text-left ${styles.disclaimer}`}
                  >
                    Corporate cards, payments, and other related services are
                    provided by RBI-licensed banks and/or in accordance with RBI
                    regulations and/or compliance maintained by banks and
                    regulated entities. EnKash is not a bank and does not hold
                    or claim to hold a banking license.
                    <div className="color-alternate-grey">
                      *Powered by Banks/REs.
                    </div>
                  </div>
                </div>

                <p className={`${styles.footer_copy_right} d-block d-md-none`}>
                  Copyright © 2025 | Nehat Tech Solutions Pvt. Ltd. All right
                  reserved.
                </p>
              </div>
              <div className={` ${styles.info_container}  d-block d-md-none`}>
                <div className="row">
                  <div
                    className={`col-6  ${styles.info_div} ${styles.info_div_two}`}
                  >
                    <div className={`${styles.info_header_two}`}>
                      <h4 className={`${styles.title}`}>Help and Support</h4>
                    </div>
                    <div className={`d-flex ${styles.info_body}`}>
                      <div className={` ${styles.info_body_two}`}>
                        <ul>
                          <li>
                            <Link
                              href="tel:8530490475"
                              target="_blank"
                              rel="noreferrer noopener"
                              className={`ms-md-3 ms-2  ${styles.support_text}`}
                            >
                              <FaPhone className={`${styles.callIcon}`} />
                              <span
                                className={`ms-md-3 ms-2 ${styles.support_text}`}
                              >
                                +91 8530490475
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                              target="_blank"
                              rel="noreferrer noopener"
                              className={`ms-md-3 ms-2  ${styles.support_text}`}
                            >
                              <FaEnvelope className={`${styles.callIcon}`} />
                              <span
                                className={`ms-md-3 ms-2 ${styles.support_text}`}
                              >
                                {process.env.NEXT_PUBLIC_EMAIL}
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`col-6  ${styles.info_div} ${styles.info_div_three}`}
                  >
                    <div className={`${styles.info_header_three}`}>
                      <h4 className={`${styles.title}`}>FIND US ON</h4>
                    </div>
                    <div
                      className={`d-flex  justify-content-start ${styles.info_body}`}
                    >
                      <div className={`${styles.info_body_three}`}>
                        <div
                          className={`d-flex justify-content-between  ${styles.social_icons_row}`}
                        >
                          <Link
                            href="https://www.linkedin.com/company/enkashbusiness"
                            target="_blank"
                            rel="noreferrer noopener"
                            title="Linkedin"
                          >
                            <FaLinkedinIn />
                          </Link>
                          <Link
                            href="https://www.youtube.com/@enkashbusiness"
                            target="_blank"
                            rel="noreferrer noopener"
                            title="Youtube"
                          >
                            <FaYoutube />
                          </Link>
                          <Link
                            href="https://www.instagram.com/Enkashbusiness"
                            target="_blank"
                            rel="noreferrer noopener"
                            title="Instagram"
                          >
                            <FaInstagram />
                          </Link>
                          <Link
                            href="https://twitter.com/EnkashBusiness"
                            target="_blank"
                            rel="noreferrer noopener"
                            title="Twitter"
                          >
                            <FaXTwitter />
                          </Link>
                          <Link
                            href="https://www.facebook.com/Enkashbusiness"
                            target="_blank"
                            rel="noreferrer noopener"
                            title="Facebook"
                          >
                            <FaFacebookF />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${styles.info_div} ${styles.info_div_one} `}>
                  <div className={` ${styles.info_header_one}`}>
                    <h4 className={`${styles.title}`}>
                      Licenses & Certification
                    </h4>
                  </div>
                  <div className={`d-flex ${styles.info_body}`}>
                    <div
                      className={`d-flex gap-2 flex-wrap ${styles.info_body_one}`}
                    >
                      <div className={styles.soc_logo}>
                        <Image
                          src={sovSvg}
                          alt="soc logo"
                          height={34}
                          width={30}
                        />
                      </div>

                      <div className={styles.pci_logo}>
                        <Image
                          src={pci}
                          alt="pci logo"
                          height={30}
                          width={55}
                          objectFit="cover"
                        />
                      </div>

                      <div className={styles.pci_logo}>
                        <Image
                          src={ppi}
                          alt="pci logo"
                          height={32}
                          width={38}
                          objectFit="cover"
                        />
                      </div>
                      <div className={styles.pci_logo}>
                        <Image
                          src={ppa}
                          alt="pci logo"
                          height={32}
                          width={38}
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap flex-md-nowrap d-block d-md-none">
                  <div
                    className={`col-12 col-md-10 text-left ${styles.disclaimer}`}
                  >
                    Corporate cards, payments, and other related services are
                    provided by RBI-licensed banks and/or in accordance with RBI
                    regulations and/or compliance maintained by banks and
                    regulated entities. EnKash is not a bank and does not hold
                    or claim to hold a banking license.
                  </div>
                </div>

                <p className={`${styles.footer_copy_right} d-block d-md-none`}>
                  Copyright © 2025 | Nehat Tech Solutions Pvt. Ltd. All right
                  reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="w-100 order-1 order-md-2 position-relative">
            <Link href="/" className={`${styles.logo_img} d-block d-md-none`}>
              <Image
                src={enkashBlueLogo}
                alt="logo"
                width={100}
                className="me-3 mb-3"
              />
            </Link>
            <div className={`row gap-3  ${styles.light_bg}`}>
              {/* 2nd col */}
              <div className={`${styles.footer_links_col} col-md-3 col-6`}>
                <Link href="/products/collect-payments">
                  <h4 className={` ${styles.title}`}>Collect Payments</h4>
                </Link>

                <div className="d-flex flex-column ">
                  <div className={`col-6`}>
                    <ul>
                      <li className="d-flex">
                        <Link href="/payment-gateway">Payment Gateway</Link>
                      </li>
                      <li>
                        <Link href="/payment-links/">Payment Links</Link>
                      </li>
                      <li>
                        <Link href="/payment-button/">Payment Button</Link>
                      </li>
                      <li>
                        <Link href="/payment-page/">Payment Page</Link>
                      </li>

                      <li>
                        <Link href="/upi-payments">UPI Payments</Link>
                      </li>
                      <li>
                        <Link href="/qr-code">QR Code</Link>
                      </li>
                      <li>
                        <Link href="/auto-collect/">Auto Collect</Link>
                      </li>
                      <li>
                        <Link href="/e-nach/">e-NACH</Link>
                      </li>

                      <li>
                        <Link href="/instant-settlement/">
                          Instant Settlements
                        </Link>
                      </li>

                      <li>
                        <Link href="/affordability-suite/">
                          Affordability Suite
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <Link href="/products/expense-management">
                    <h4 className={`col-12 ${styles.title}`}>Expenses</h4>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/budget-and-advances/">
                        Budget & Advances
                      </Link>
                    </li>
                    <li>
                      <Link href="/hierarchy-and-controls/">
                        Hierarchy & Controls
                      </Link>
                    </li>
                    <li>
                      <Link href="/reimbursements/">Reimbursements</Link>
                    </li>
                    <li>
                      <Link href="/receipts/">Scan and Drop Receipts</Link>
                    </li>
                    <li>
                      <Link href="/petty-cash/">Petty Cash</Link>
                    </li>
                    <li>
                      <Link href="/expense-analytics-and-insights/">
                        Insights
                      </Link>
                    </li>
                    <li>
                      <Link href="/approval-flows/" className="text-wrap">
                        Policy and Approval Flows
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3rd col */}
              <div className={`${styles.footer_links_col} col-md-3 col-6`}>
                <div>
                  <div className="">
                    <ul className="mb-0">
                      <li>
                        <Link href="/products/make-payments">
                          <h4 className={` ${styles.title}`}>Make Payments</h4>
                        </Link>
                      </li>
                      <li>
                        <Link href="/utility-bill-payment/">
                          Business Bill Payments
                        </Link>
                      </li>
                      <li>
                        <Link href="/vendor-payment/">Vendor Payment</Link>
                      </li>
                      <li>
                        <Link href="/rent-payment/">Rental Payment</Link>
                      </li>
                      <li>
                        <Link href="/invoice-management/">
                          Invoice Management
                        </Link>
                      </li>
                      <li>
                        <Link href="/payroll/">Payroll Processing</Link>
                      </li>
                      <li>
                        <Link href="/bulk-pay/"> Bulk Pay</Link>
                      </li>

                      <li>
                        <Link href="/vendor-management/">
                          Vendor Management
                        </Link>
                      </li>
                      <li>
                        <Link href="/gst-payment/">GST Payment</Link>
                      </li>

                      <li>
                        <Link href="/payable-analytics/">
                          Payable Analytics
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <ul className="my-3">
                      <li>
                        <Link href="/products/vouchers">
                          <h4 className={` ${styles.title}`}>Vouchers</h4>
                        </Link>
                      </li>
                      <li>
                        <Link href="/e-commerce-vouchers">E-commerce</Link>
                      </li>
                      <li>
                        <Link href="/movie-and-music-vouchers">
                          Movies & Music
                        </Link>
                      </li>
                      <li>
                        <Link href="/apparels-vouchers">Apparels</Link>
                      </li>
                      <li>
                        <Link href="/food-and-beverages-vouchers">
                          Food & Beverages
                        </Link>
                      </li>
                      <li>
                        <Link href="/health-and-wellness-vouchers">
                          Health & Wellness
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <Link href="/products/rewards">
                      <h4 className={`col-12 ${styles.title}`}>Rewards</h4>
                    </Link>
                    <ul>
                      <li>
                        <Link href="/employee-rewards/">Employee Rewards</Link>
                      </li>
                      <li>
                        <Link href="/channel-incentives/">
                          Channel Incentives
                        </Link>
                      </li>

                      <li>
                        <Link href="/offers/">Offers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4th col */}
              <div className={`${styles.footer_links_col} col-md-3 col-6`}>
                <div>
                  <div>
                    <div className={styles.freedom_card_box}>
                      <Link href="/products/corporate-cards">
                        <h4 className={`${styles.title}`}>Corporate Cards</h4>
                      </Link>
                    </div>
                    <ul>
                      <li>
                        <Link href="/prepaid-card/">Prepaid Cards</Link>
                      </li>
                      <li>
                        <Link href="/meal-card/">Meal Cards</Link>
                      </li>
                      <li>
                        <Link href="/fuel-card/">Fuel Cards</Link>
                      </li>
                      <li>
                        <Link href="/digital-marketing-card/">
                          Digital Marketing Cards
                        </Link>
                      </li>
                      <li>
                        <Link href="/saas-card/">SaaS Cards</Link>
                      </li>
                      <li>
                        <Link href="/travel-and-expense-card">T & E Cards</Link>
                      </li>
                      <li>
                        <Link href="/purchase-card/">Purchase Cards</Link>
                      </li>
                      <li>
                        <Link href="/gift-cards/">Gift Cards</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <Link href="https://docs.enkash.com/" target="_blank">
                      <h4 className={`col-12 ${styles.title}`}>
                        For Developers
                      </h4>
                    </Link>
                    <ul>
                      <li>
                        <a
                          href="https://docs.enkash.com/payment-gateway"
                          target="_blank"
                        >
                          Payment Gateway
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://docs.enkash.com/folder-1769242"
                          target="_blank"
                        >
                          Prepaid Cards
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://docs.enkash.com/expense-management"
                          target="_blank"
                        >
                          Expense Management
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://docs.enkash.com/doc-1039810"
                          target="_blank"
                        >
                          Rewards
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`${styles.footer_links_col} col-md-3 col-6`}>
                {/* col-1 resources */}
                <div className="">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_URL}/resources`}
                    rel="noopener noreferrer"
                  >
                    <h4 className={styles.title}>Resources</h4>
                  </Link>

                  <ul>
                    <li>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_URL}/resources/blogs`}
                        rel="noopener noreferrer"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_URL}/resources/customer-stories`}
                        rel="noopener noreferrer"
                      >
                        Case Studies
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_URL}/resources/videos`}
                        rel="noopener noreferrer"
                      >
                        Videos
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-3">
                  <div className={styles.freedom_card_box}>
                    <h4 className={`${styles.title}`}>Company</h4>
                  </div>
                  <ul>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/careers">Careers</Link>
                    </li>
                    <li>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_URL}/resources/media-coverage`}
                        rel="noopener noreferrer"
                      >
                        Media Coverage
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/corporate-information">
                        Corporate Information
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-3">
                  <Link href="/policies">
                    <h4 className={`col-12 ${styles.title} text-wrap`}>
                      Policies and Compliance
                    </h4>
                  </Link>

                  <ul>
                    <li>
                      <Link href="/policies/grievance-policy">
                        Grievance & Redressal
                      </Link>
                    </li>
                    <li>
                      <Link href="/policies/merchant-onboarding">
                        Merchant Onboarding
                      </Link>
                    </li>
                    <li>
                      <Link href="/policies/customer-onboarding">
                        Customer Onboarding
                      </Link>
                    </li>
                    <li>
                      <Link href="/policies/tnc">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link href="/policies/privacy-policy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/policies/prepaid-program/faq">
                        FAQs for PPI
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-3">
                  <div className={styles.freedom_card_box}>
                    <h4 className={`${styles.title}`}>Partnerships</h4>
                  </div>
                  <ul>
                    <li>
                      <Link href="/bank-partnerships">For Banks</Link>
                    </li>
                    <li>
                      <Link href="/affiliate-programs">Affiliate Program</Link>
                    </li>
                    <li>
                      <Link href="/co-branded-card-partners">
                        Co-branded Cards
                      </Link>
                    </li>
                    <li>
                      <Link href="/payment-gateway-partners">
                        Payment Gateway
                      </Link>
                    </li>
                    <li>
                      <Link href="/bharat-connect-partnership">
                        Bharat Connect
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className={`${styles.footer_copy_right} d-none d-md-block`}>
              Copyright © 2025 | Nehat Tech Solutions Pvt. Ltd. All rights
              reserved.
            </p>
          </div>
        </div>

        <div className="d-flex flex-wrap flex-md-nowrap d-none d-md-block">
          <div className={`col-12 col-md-10 text-left ${styles.disclaimer}`}>
            Corporate cards, payments, and other related services are provided
            by RBI-licensed banks and/or in accordance with RBI regulations
            and/or compliance maintained by banks and regulated entities. EnKash
            is not a bank and does not hold or claim to hold a banking license.
          </div>
        </div>
      </div>

      <div className={`d-block d-md-none ${styles.location_mobile} `}>
        <div
          className={`d-flex justify-content-center align-items-center mx-5 mb-3 `}
        >
          <Image
            className={styles.footer_location_pin}
            src={locationPin}
            alt="Enkash Office Location"
            width={10}
          />
          <p>
            {" "}
            <a href="https://maps.app.goo.gl/HJb25CCTqaw8K6LY6" target="_blank">
              Gurgaon
            </a>
          </p>
          <div className={styles.vr}></div>
          <a href="https://maps.app.goo.gl/T6HMae1X11dCCCmx6" target="_blank">
            Mumbai
          </a>
          <div className={styles.vr}></div>

          <p>
            {" "}
            <a href="https://maps.app.goo.gl/T6HMae1X11dCCCmx6">Pune</a>
          </p>
        </div>
        <div className={styles.lineBlue}></div>
      </div>

      <div className={`${styles.locations_row}`}>
        <div className="d-none d-md-flex  max-w-auto justify-content-end align-items-center">
          <Image
            className={styles.footer_location_pin}
            src={locationPin}
            alt="Enkash Office Location"
            width={20}
          />
          <p>
            {" "}
            <a href="https://maps.app.goo.gl/HJb25CCTqaw8K6LY6" target="_blank">
              Gurgaon
            </a>
          </p>
          <div className={`${styles.ar}`}></div>
          <p>
            {" "}
            <a href="https://maps.app.goo.gl/T6HMae1X11dCCCmx6" target="_blank">
              Mumbai
            </a>
          </p>
          <div className={`${styles.ar}`}></div>

          <p>
            {" "}
            <a href="https://maps.app.goo.gl/BoF64LK6f9qSiQ18A" target="_blank">
              Pune
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FooterV2
