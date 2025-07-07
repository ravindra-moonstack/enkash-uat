import styles from "./footer-v2.module.scss"
import Image from "next/image"
import {
  twitterLogo,
  linkedinLogo,
  fbLogo,
  instLogo,
  call,
  locationPin,
  pci,
  soc,
  email,
  enkashBlueLogo,
  ppi,
  youtubeLogo,
  ppa,
} from "."
import Link from "next/link"

const FooterV2 = () => {
  return (
    <div className={` ${styles.footer}`}>
      <div className={`max-w-auto  ${styles.footer_padding}`}>
        <div
          className={`d-flex flex-column flex-md-row ${styles.footer_section}`}
        >
          {/* 1st col */}
          <div className={`order-2 order-md-1 ${styles.logo_container}`}>
            <Link href="/" className={styles.logo_img}>
              <Image
                src={enkashBlueLogo}
                alt="logo"
                width={120}
                className="me-3"
              />
            </Link>

            <div className={`d-flex flex-column  gap-4 ${styles.logi_bg}`}>
              <div>
                {" "}
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
                    EnKash** Payment Gateway, is a licensed online payment
                    aggregator authorised by the RBI
                  </p>
                  <p className={styles.logo_container_info}>
                    **EnKash is a commercial trade name owned by the legal
                    entity, Nehat Tech Solutions Pvt. Ltd.
                  </p>
                </div>
              </div>

              {/* col-1 resources */}

              <div className={` ${styles.info_container}`}>
                <div className={`{styles.info_div} ${styles.info_div_one}`}>
                  <div className={` ${styles.info_header_one}`}>
                    <h4 className={`${styles.title}`}>Certification</h4>
                  </div>
                  <div className={`d-flex ${styles.info_body}`}>
                    <div
                      className={`d-flex gap-2 flex-wrap ${styles.info_body_one}`}
                    >
                      <div className={styles.soc_logo}>
                        <Image
                          src={soc}
                          alt="soc logo"
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
                  <div className={`d-flex ${styles.info_body}`}>
                    <div className={` ${styles.info_body_two}`}>
                      <ul>
                        <li>
                          <Image
                            src={call}
                            alt="Contact Enkash"
                            className={styles.help_icons}
                          />
                          <span
                            className={`ms-md-3 ms-2 ${styles.support_text}`}
                          >
                            +91 8530490475
                          </span>
                        </li>
                        <li>
                          <Image
                            src={email}
                            alt="Contact Enkash"
                            className={styles.help_icons}
                          />
                          <span
                            className={`ms-md-3 ms-2 ${styles.support_text}`}
                          >
                            support@enkash.com
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className={`col-12 col-md-2 ${styles.info_div} ${styles.info_div_three}`}
                >
                  <div className={` ${styles.info_header_three}`}>
                    <h4 className={`${styles.title}`}>CONNECT US ON</h4>
                  </div>
                  <div
                    className={`d-flex  justify-content-start ${styles.info_body}`}
                  >
                    <div className={` ${styles.info_body_three}`}>
                      <div
                        className={`d-flex justify-content-between pt-3 ${styles.social_icons_row}`}
                      >
                        <Link
                          href="https://www.facebook.com/Enkashbusiness"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Image
                            src={fbLogo}
                            alt="EnKash Facebook"
                            height={25}
                            width={25}
                          />
                        </Link>
                        <Link
                          href="https://twitter.com/EnkashBusiness"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Image
                            src={twitterLogo}
                            alt="EnKash Twitter"
                            height={25}
                            width={25}
                          />
                        </Link>
                        <Link
                          href="https://www.linkedin.com/company/enkashbusiness"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Image
                            src={linkedinLogo}
                            alt="EnKash LinkedIn"
                            height={25}
                            width={25}
                          />
                        </Link>
                        <Link
                          href="https://www.instagram.com/Enkashbusiness"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Image
                            src={instLogo}
                            alt="EnKash Instagram"
                            height={25}
                            width={25}
                          />
                        </Link>
                        <Link
                          href="https://www.instagram.com/Enkashbusiness"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Image
                            src={youtubeLogo}
                            alt="EnKash Instagram"
                            height={25}
                            width={25}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 order-1 order-md-2">
            <div className={`d-flex flex-wrap gap-4 w-100 ${styles.light_bg}`}>
              {/* 2nd col */}
              <div className={`${styles.footer_links_col}`}>
                <Link href="/collect-payments">
                  <h4 className={` ${styles.title}`}>Collect Payments</h4>
                </Link>

                <div className="d-flex flex-column ">
                  <div className={`col-6`}>
                    {" "}
                    <ul>
                      <li className="d-flex">
                        <Link href="/payment-gateway">Payment Gateway</Link>
                      </li>
                      <li>
                        <Link href="/payment-link/">Payment Links</Link>
                      </li>
                      <li>
                        <Link href="/payment-button/">Payment Button</Link>
                      </li>
                      <li>
                        <Link href="/payment-page/">Payment Page</Link>
                      </li>

                      <li className="d-flex">
                        <Link href="/upi-payments">UPI Payments</Link>
                      </li>
                      <li className="d-flex">
                        <Link href="/qr-codes">QR Code</Link>
                      </li>
                      <li>
                        <Link href="/auto-collect/">Auto Collect</Link>
                      </li>
                      <li>
                        <Link href="/virtual-account/">Virtual Accounts</Link>
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
                        <Link href="/affordability/">Affordability</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <Link href="/expense-management">
                    <h4 className={`col-12 ${styles.title}`}>Expenses</h4>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/budget-and-advances/">
                        Budgets and Advances
                      </Link>
                    </li>
                    <li>
                      <Link href="/hierarchy-and-controls/">
                        Hierarchy and Controls
                      </Link>
                    </li>
                    <li>
                      <Link href="/reimbursements/">Reimbursement</Link>
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
                      <Link href="/approval-flows/">
                        Policy and Approval Flows
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3rd col */}
              <div className={``}>
                <div className={`${styles.footer_links_col}`}>
                  <div className="">
                    <ul className="mb-0">
                      <li>
                        <Link href="/collect-payments">
                          <h4 className={` ${styles.title}`}>Make Payments</h4>
                        </Link>
                      </li>
                      <li>
                        <Link href="/business-bill-payment/">
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
                        <Link href="/payroll-processing/">
                          Payroll Processing
                        </Link>
                      </li>
                      <li>
                        <Link href="/express-pay/">Express Pay/Bulk</Link>
                      </li>

                      <li>
                        <Link href="/payout/">Payout</Link>
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
                        <Link href="/vouchers">
                          <h4 className={` ${styles.title}`}>Vouchers</h4>
                        </Link>
                      </li>
                      <li>
                        <Link href="/e-commerce/">E-commerce</Link>
                      </li>
                      <li>
                        <Link href="/movies-music/">Movies & Music</Link>
                      </li>
                      <li>
                        <Link href="/apparels/">Apparels</Link>
                      </li>
                      <li>
                        <Link href="/food-beverges/">Food & Beverages</Link>
                      </li>
                      <li>
                        <Link href="/health-wellness/">Health & Wellness</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <Link href="https://docs.enkash.com/" target="_blank">
                      <h4 className={`col-12 ${styles.title}`}>
                        Developer Docs
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
                          href="https://docs.enkash.com/corporate-cards"
                          target="_blank"
                        >
                          Corporate Cards
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
                          href="https://docs.enkash.com/loyalty"
                          target="_blank"
                        >
                          Employee Rewards
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://docs.enkash.com/loyalty"
                          target="_blank"
                        >
                          Channel Incentives
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://docs.enkash.com/loyalty"
                          target="_blank"
                        >
                          Vouchers
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4th col */}
              <div className={``}>
                <div className={`${styles.footer_links_col}`}>
                  <div>
                    <div className={styles.freedom_card_box}>
                      <Link href="/corporate-cards">
                        <h4 className={`${styles.title}`}>Corporate Cards</h4>
                      </Link>
                    </div>
                    <ul>
                      <li>
                        <Link href="/prepaid-card/">Prepaid Card</Link>
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
                        <Link href="/virtual-cards/">SaaS Cards</Link>
                      </li>

                      <li>
                        <Link href="/virtual-card/">Payroll Cards</Link>
                      </li>

                      <li>
                        <Link href="/diy-card-module">Multi Wallet Card</Link>
                      </li>
                      <li>
                        <Link href="/purchase-card/">Fleet Card</Link>
                      </li>
                      <li>
                        <Link href="/purchase-card/">Forex Card</Link>
                      </li>

                      <li>
                        <Link href="/travel-and-expense-card">T&E Cards</Link>
                      </li>
                      <li>
                        <Link href="/purchase-card/">Purchase Cards</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <Link href="/loyalty-lounge">
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
                        <Link href="/gift-cards/">Gift Cards</Link>
                      </li>
                      <li>
                        <Link href="/offers/">Offers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`${styles.footer_links_col}`}>
                {/* col-1 resources */}{" "}
                <div className="">
                  <h4 className={`${styles.title}`}>Resources</h4>
                  <ul>
                    <li>
                      <Link
                        target="_blank"
                        href="https://www.enkash.com/resources/"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        href="https://www.enkash.com/resources/case-studies/"
                      >
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        href="https://www.enkash.com/resources/whitepapers/"
                      >
                        White-papers
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        href="https://www.enkash.com/resources/videos/"
                      >
                        Videos
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-3">
                  <div className={styles.freedom_card_box}>
                    <Link href="/corporate-cards">
                      <h4 className={`${styles.title}`}>Company</h4>
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/careers">Careers</Link>
                    </li>
                    <li>
                      <Link href="/media-coverage">Media Coverage</Link>
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
                  <h4 className={`col-12 ${styles.title}`}>
                    Policies and Compliance
                  </h4>
                  <ul>
                    <li>
                      <Link href="/solutions/payments">Payments</Link>
                    </li>
                    <li>
                      <Link href="/solutions/prepaid-program">
                        Prepaid Program
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/platform">Platform</Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-3">
                  <div className={styles.freedom_card_box}>
                    <Link href="/corporate-cards">
                      <h4 className={`${styles.title}`}>Parthnership</h4>
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <Link href="/solutions/for-banks">For Banks</Link>
                    </li>
                    <li>
                      <Link href="/solutions/affiliate-program">
                        Affiliate Program
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className={`${styles.footer_copy_right}`}>
              Copyright © 2025 | Nehat Tech Solutions Pvt. Ltd. All right
              reserved.
            </p>
          </div>
        </div>
        <div className="d-flex flex-wrap flex-md-nowrap">
          <div className={`col-12 col-md-10 text-left ${styles.disclaimer}`}>
            Corporate cards, payments, and other related services are provided
            by RBI-licensed banks and/or in accordance with RBI regulations
            and/or compliance maintained by banks and regulated entities. EnKash
            is not a bank and does not hold or claim to hold a banking license.{" "}
            <div className="color-alternate-grey">
              *Powered by Banks/REs. # Launching soon as per RBI&rsquo;s PA
              (Online) authorization.
            </div>
          </div>
        </div>
      </div>

      <div className="d-block d-md-none">
        <div
          className={`d-flex justify-content-between mx-5 mb-4 ${styles.location_mobile} `}
        >
          {" "}
          <Image
            className={styles.footer_location_pin}
            src={locationPin}
            alt="Enkash Office Location"
            width={20}
          />
          <p>Gurgaon</p>
          <div className="vr"></div>
          <p>Mumbai</p>
          <div className="vr"></div>
          <p> Pune</p>
          <div className="vr"></div>
          <p>Bengaluru</p>
        </div>
      </div>

      <div className={`${styles.locations_row}`}>
        <div className="d-none d-md-flex  max-w-auto justify-content-end align-items-center">
          {" "}
          <Image
            className={styles.footer_location_pin}
            src={locationPin}
            alt="Enkash Office Location"
            width={20}
          />
          <p>Gurgaon</p>
          <div className={`${styles.ar}`}></div>
          <p>Mumbai</p>
          <div className={`${styles.ar}`}></div>
          <p> Pune</p>
          <div className={`${styles.ar}`}></div>
          <p>Bengaluru</p>
        </div>
      </div>
    </div>
  )
}

export default FooterV2
