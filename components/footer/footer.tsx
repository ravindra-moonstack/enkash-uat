import styles from "./footer-v2.module.scss"
import Image from "next/image"
import PrimaryButton from "../buttons/primary-button/primary-button"
import {
  twitterLogo,
  linkedinLogo,
  fbLogo,
  instLogo,
  call,
  locationPin,
  pci,
  soc,
  rbi,
  email,
  onlineDispute,
} from "."
import Heading from "../heading/heading"
import Link from "next/link"

const FooterV2 = ({ utmSource = "" }: any) => {
  return (
    <div className={`${styles.footer}`}>
      {/* <div className={styles.security_section}>
        <div className="color-white mb-5 d-flex justify-content-center">
          <Heading
            title="Your data security is our priority"
            size="h1"
            color="equity-blue"
          />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <Image className="me-5" src={securityOne} alt="security1" />
          <Image className="me-5" src={securityTwo} alt="security1" />

          <Image src={securityThree} alt="security3" />
        </div>
      </div> */}

      <div className={`row ${styles.footer_padding}`}>
        <div className="col-12 mb-4 d-flex flex-column align-items-center align-items-md-start">
          <h2 className="color-white mb-4 text-center text-md-start">
            Spend Smart. Collect Fast. <br />
            <span className="color-equity-blue">Grow More.</span>
          </h2>
          <Link href={"/sales/?source=" + utmSource} target="_blank">
            <PrimaryButton title="Get Started" theme="blue" />
          </Link>
        </div>

        <div className={`d-flex flex-wrap flex-md-row mt-3 ${styles.light_bg}`}>
          {/* 1st col */}
          <div className={`col-6 col-md-3 ${styles.footer_links_col}`}>
            <Link href="/collect-payments">
              <h4 className={` ${styles.title}`}>
                Collect Payments<sup>#</sup>
              </h4>
            </Link>

            <div className="d-flex flex-column ">
              <div className={`col-6`}>
                {" "}
                <ul>
                  {/* <li className="">
                      <div className={`color-white ${styles.sub_title}`}>
                        <Link href="/collect-payments">
                          Receivables<sup>#</sup>
                        </Link>
                      </div>
                    </li> */}
                  <li className="d-flex">
                    <Link href="/payment-gateway">Payment Gateway</Link>
                    {/* <div className={'my-auto '}> NEW</div> */}
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
                    <Link href="/bulk-collect/">Bulk Collect</Link>
                  </li>
                  <li className="d-flex">
                    <Link href="/upi-payments">UPI Payments</Link>
                    {/* <div className={`my-auto ${styles.new_badge}`}>
                        {" "}
                        Coming Soon
                      </div> */}
                  </li>
                  <li className="d-flex">
                    <Link href="/qr-codes">QR Codes</Link>
                    {/* <div className={`my-auto ${styles.new_badge}`}>
                        {" "}
                        Coming Soon
                      </div> */}
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
                    <Link href="/subscriptions/">Subscriptions</Link>
                  </li>
                  <li>
                    <Link href="/collection-reminder/">Reminder Engine</Link>
                  </li>
                  <li>
                    <Link href="/instant-settlement/">Instant Settlements</Link>
                  </li>
                  <li>
                    <Link href="/digital-invoicing/">Invoices</Link>
                  </li>
                  <li>
                    <Link href="/collection-analytics/">
                      Collection Analytics
                    </Link>
                  </li>
                  <li>
                    <Link href="/auto-reconciliation/">
                      Auto Reconciliation
                    </Link>
                  </li>
                </ul>
              </div>

              {/* col-1 resources */}
              <div className="mt-3">
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
                      href="https://www.enkash.com/resources/videos/"
                    >
                      Product Videos
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.enkash.com/resources/press-release/"
                    >
                      Press Release
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.enkash.com/resources/media-coverage/"
                    >
                      News & Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.enkash.com/resources/customer-stories/"
                    >
                      Customer Stories
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2nd col */}
          <div className={`col-6 col-md-3`}>
            <div className={`col-6 col-md-3 ${styles.footer_links_col}`}>
              <div className="">
                <ul className="mb-0">
                  <li>
                    <Link href="/collect-payments">
                      <h4 className={` ${styles.title}`}>Make Payments</h4>
                    </Link>
                  </li>
                  <li>
                    <Link href="/business-bill-payment/">Bill Payment</Link>
                  </li>
                  <li>
                    <Link href="express-pay/">Express Pay</Link>
                  </li>
                  <li>
                    <Link href="/gst-payment/">GST Payment</Link>
                  </li>
                  <li>
                    <Link href="/vendor-payment/">Vendor Payment</Link>
                  </li>
                  <li>
                    <Link href="/rent-payment/">Rental Payment</Link>
                  </li>
                  <li>
                    <Link href="/invoice-management/">Invoice Management</Link>
                  </li>
                  <li>
                    <Link href="/vendor-management/">Vendor Management</Link>
                  </li>
                  <li>
                    <Link href="/seamless-banking/">Seamless Banking</Link>
                  </li>
                  <li>
                    <Link href="/payroll/">Payroll Processing</Link>
                  </li>
                  <li>
                    <Link href="/payable-analytics/">Payable Analytics</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <Link href="https://docs.enkash.com/" target="_blank">
                  <h4 className={`col-12 ${styles.title}`}>Developer Docs</h4>
                </Link>
                <ul>
                  <li>
                    <a href="https://docs.enkash.com/payouts" target="_blank">
                      Payout
                    </a>
                  </li>
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
                    <a href="https://docs.enkash.com/loyalty" target="_blank">
                      Employee Rewards
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.enkash.com/loyalty" target="_blank">
                      Channel Incentives
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.enkash.com/loyalty" target="_blank">
                      Vouchers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3rd col */}
          <div className={`col-6 col-md-3`}>
            <div className={`col-6 col-md-3 ${styles.footer_links_col}`}>
              <div>
                <div className={styles.freedom_card_box}>
                  <Link href="/corporate-cards">
                    <h4 className={`${styles.title}`}>Cards</h4>
                  </Link>
                </div>
                <ul>
                  <li>
                    <Link href="/virtual-card/">Virtual Cards*</Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing-card/">
                      Digital Marketing Cards*
                    </Link>
                  </li>
                  <li>
                    <Link href="/fuel-card/">Fuel Cards*</Link>
                  </li>
                  <li>
                    <Link href="/meal-card/">Meal Cards*</Link>
                  </li>
                  <li>
                    <Link href="/saas-cards/">SaaS Cards*</Link>
                  </li>
                  <li>
                    <Link href="/purchase-card/">Purchase Cards*</Link>
                  </li>

                  <li>
                    <Link href="/travel-and-expense-cards">T&E Cards*</Link>
                  </li>
                  <li>
                    <Link href="/diy-card-module">DIY Card Module*</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <div className={styles.freedom_card_box}>
                  <Link href="/corporate-cards">
                    <h4 className={`${styles.title}`}>Solutions</h4>
                  </Link>
                </div>
                <ul>
                  <li>
                    <Link href="/solutions/customized-reporting">
                      Customized Reporting
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/workflow-management">
                      Workflow Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/cashflow-analytics/">
                      Cash Flow Analytics
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/apis-modules/">APIs & Modules</Link>
                  </li>
                  <li>
                    <Link href="/solutions/integrations/">Integrations</Link>
                  </li>
                  <li>
                    <Link href="/solutions/cfo-insights/">CFO Insights</Link>
                  </li>
                  <li>
                    <Link href="/solutions/instant-card-management/">
                      Instant Card Management
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
                    <Link href="/sales?source=getstarted_footer">Sales</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4th col */}
          <div className={`col-6 col-md-3`}>
            <div className={`col-6 col-md-3 ${styles.footer_links_col}`}>
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
                    <Link href="/approval-flows/">
                      Policy and Approval Flows
                    </Link>
                  </li>
                  <li>
                    <Link href="/reimbursements/">Reimbursement</Link>
                  </li>

                  <li>
                    <Link href="/receipts/">Scan and Drop Receipts</Link>
                  </li>
                  <li>
                    <Link href="/expense-analytics-and-insights/">
                      Insights
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <Link href="/loyalty-lounge">
                  <h4 className={`col-12 ${styles.title}`}>Rewards</h4>
                </Link>
                <ul>
                  <li>
                    <Link href="/channel-incentives/">Channel Incentives</Link>
                  </li>
                  <li>
                    <Link href="/employee-rewards/">Employee Rewards</Link>
                  </li>

                  <li>
                    <Link href="/gift-cards/">Gift Cards</Link>
                  </li>
                  <li>
                    <Link href="/offers/">Offers</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <h4 className={`col-12 ${styles.title}`}>Policies</h4>
                <ul>
                  <li>
                    <Link href="/grievance-policy/">
                      Grievances and Redressal
                    </Link>
                  </li>
                  <li>
                    <Link href="/chargeback-dispute-management-policy/">
                      Dispute Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-legal/">Privacy & Legal</Link>
                  </li>
                  <li>
                    <Link href="/term-condition/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.sbmbank.co.in/aboutus/grievance-redressal-mechanism.php"
                    >
                      Partner Bank Grievances
                    </Link>
                  </li>
                  <li>
                    <Link href="/refund-policy/">Refund Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`d-flex flex-wrap flex-md-nowrap ${styles.info_container}`}
        >
          <div
            className={`col-6 col-md-3 ${styles.info_div} ${styles.info_div_one}`}
          >
            <div className={` ${styles.info_header_one}`}>
              <h4 className={`${styles.title}`}>Certification</h4>
            </div>
            <div className={`d-flex ${styles.info_body}`}>
              <div className={`d-flex ${styles.info_body_one}`}>
                <div className={styles.soc_logo}>
                  <Image src={soc} alt="soc logo" />
                </div>

                <div className={styles.pci_logo}>
                  <Image src={pci} alt="pci logo" />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`col-6 col-md-7 ${styles.info_div} ${styles.info_div_two}`}
          >
            <div className={`col-6 col-md-3 ${styles.info_header_two}`}>
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
                    <span className={`ms-md-3 ms-2 ${styles.support_text}`}>
                      +91 8530490475
                    </span>
                  </li>
                  <li>
                    <div>
                      <Image
                        src={email}
                        alt="Contact Enkash"
                        className={styles.help_icons}
                      />
                      <span className={`ms-md-3 ms-2 ${styles.support_text}`}>
                        support@enkash.com
                      </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Link
                        href="https://forms.zohopublic.in/Enkash/form/CustomerSupport/formperma/pjPz5nSAEeSmWhIuHW2VOCiTgm8b6uHeYQyU1XhkW8E "
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Image
                          src={onlineDispute}
                          alt="Online Dispute Resolution"
                          className={styles.help_icons}
                        />
                        <span className={`ms-md-3 ms-2 ${styles.support_text}`}>
                          Online Dispute Resolution
                        </span>
                      </Link>
                    </div>
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
              className={`d-flex justify-content-center justify-content-md-start ${styles.info_body}`}
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap flex-md-nowrap">
          <div
            className={`col-12 col-md-8 text-left color-white ${styles.disclaimer}`}
          >
            Corporate cards, payments, or other related services are provided by
            RBI-licensed banks and/ or in accordance with RBI regulations and/
            or RBI compliance maintained by banks & regulated entities. EnKash
            is not a bank and doesn’t hold or claim to hold a banking license.{" "}
            <span className="color-electric-green">*Powered by Banks/REs.</span>
          </div>
          <div className={`col-12 col-md-4 color-white ${styles.copyright}`}>
            Copyright © 2025 | Nehat Tech Solutions Pvt. Ltd. All right
            reserved.
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

      <div className={styles.locations_row}>
        <div className="d-none d-md-flex mx-0 me-md-5">
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
    </div>
  )
}

export default FooterV2
