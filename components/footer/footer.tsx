import styles from "./footer.module.scss";
import Image from "next/image";
import PrimaryButton from "../buttons/primary-button/primary-button";
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
} from ".";
import Heading from "../heading/heading";
import Link from "next/link";

const Footer = ({ utmSource = "" }: any) => {
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
        <div className="col-12 mb-4">
          <h2 className="color-white mb-4">
            Spend Smart. Collect Fast. <br />
            <span className="color-equity-blue">Grow More.</span>
          </h2>
          <Link
            href={"https://home.enkash.com/signup?utm_source=" + utmSource}
            target="_blank"
          >
            <PrimaryButton title="Get Started" theme="theme-blue" />
          </Link>
        </div>
        <div className={`col-md-3 col-6 ${styles.footer_links_col}`}>
          <Link href="/olympus">
            <h4 className={` ${styles.title}`}>Olympus</h4>
          </Link>
          <div className="">
            <ul className="mb-0">
              <li>
                <div className={`color-white ${styles.sub_title}`}>
                  <Link href="/olympus/payables">Payables</Link>
                </div>
              </li>
              <li>
                <Link href="/olympus/payables/bill-payment/">Bill Payment</Link>
              </li>
              <li>
                <Link href="/olympus/payables/bulk-payout/">Express Pay</Link>
              </li>
              <li>
                <Link href="/olympus/payables/gst-payments/">GST Payment</Link>
              </li>
              <li>
                <Link href="/olympus/payables/vendor-payment/">
                  Vendor Payment
                </Link>
              </li>
              <li>
                <Link href="/olympus/payables/rental-payment/">
                  Rental Payment
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="mt-2">
                <div className={`color-white ${styles.sub_title}`}>
                  <Link href="/olympus/receivables">
                    Receivables<sup>#</sup>
                  </Link>
                </div>
              </li>
              <li>
                <Link href="/olympus/receivables/virtual-accounts/">
                  Virtual Accounts
                </Link>
              </li>
              <li>
                <Link href="/olympus/receivables/payment-links/">
                  {" "}
                  Payment Links
                </Link>
              </li>
              <li>
                <Link href="/olympus/receivables/bulk-collect/">
                  Bulk Collect
                </Link>
              </li>
              <li>
                <Link href="/olympus/receivables/invoices/">Invoices</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className={` ${styles.footer_links_col}`}>
            <div>
              <div className={styles.freedom_card_box}>
                <Link href="/slash">
                  <h4 className={`${styles.title}`}>Slash</h4>
                </Link>
              </div>
              <ul>
                <li>
                  <Link href="/slash/virtual-cards/">Virtual Cards*</Link>
                </li>
                <li>
                  <Link href="/slash/digital-marketing-cards/">
                    Digital Marketing Cards*
                  </Link>
                </li>
                <li>
                  <Link href="/slash/fuel-cards/">Fuel Cards*</Link>
                </li>
                <li>
                  <Link href="/slash/meal-cards/">Meal Cards*</Link>
                </li>
                <li>
                  <Link href="/slash/saas-cards/">SaaS Cards*</Link>
                </li>
                <li>
                  <Link href="/slash/purchase-cards/">Purchase Cards*</Link>
                </li>

                <li>
                  <Link href="/slash/travel-and-expense-cards">T&E Cards*</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className={`${styles.footer_links_col}`}>
            <div>
              <Link href="/ofex">
                <h4 className={`col-12 ${styles.title}`}>OfEx</h4>
              </Link>
              <ul>
                <li>
                  <Link href="ofex/budget-and-advances/">
                    Budgets and Advances
                  </Link>
                </li>
                <li>
                  <Link href="ofex/hierarchy-and-controls/">
                    Hierarchy and Controls
                  </Link>
                </li>
                <li>
                  <Link href="ofex/policy-and-approval-flows/">
                    Policy and Approval Flows
                  </Link>
                </li>
                <li>
                  <Link href="ofex/reimbursement/">Reimbursement</Link>
                </li>

                <li>
                  <Link href="ofex/scan-and-drop-receipts/">
                    Scan and Drop Receipts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className={`col-6 col-md-4 ${styles.footer_links_col}`}>
            <div>
              <Link href="/loyalty-lounge">
                <h4 className={`col-12 ${styles.title}`}>Loyalty Lounge</h4>
              </Link>
              <ul>
                <li>
                  <Link href="loyalty-lounge/brand-voucher/">
                    Brand Voucher
                  </Link>
                </li>
                <li>
                  <Link href="loyalty-lounge/channel-incentive/">
                    Channel Incentives
                  </Link>
                </li>
                <li>
                  <Link href="loyalty-lounge/employee-rewards/">
                    Employee Rewards
                  </Link>
                </li>

                <li>
                  <Link href="loyalty-lounge/gift-cards/">Gift Cards</Link>
                </li>
                <li>
                  <Link href="loyalty-lounge/offers/">Offers</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className={`${styles.footer_links_col}`}>
            <div>
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
        <div className="col-6 col-md-3">
          <div className={`${styles.footer_links_col}`}>
            <div className="mt-2">
              <h4 className={`${styles.title}`}>Company</h4>
              <ul>
                <li>
                  <Link href="/about">About Us</Link>
                </li>

                <li>
                  <Link href="/sales?source=getstarted_footer">Sales</Link>
                </li>
                {/* <li>
                  <Link href="/career-team-and-openings/">Career</Link>
                </li>
                <li>
                  <Link href="/support/">Support</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className={`col-6 col-md-4 ${styles.footer_links_col}`}>
            <div className="mt-2">
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
              </ul>
            </div>
          </div>
        </div>

        <div className={`col-6 col-md-3 ${styles.footer_links_col}`}>
          <div className={styles.contact_list}>
            <ul>
              <li>
                <Link
                  rel="noopener noreferrer"
                  target="_top"
                  href="tel:+91 8530490475"
                >
                  <Image
                    src={call}
                    alt="Contact Enkash"
                    height={25}
                    width={25}
                  />
                  +91 8530490475
                </Link>
              </li>
              <li>
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
                <div className="mt-4 d-flex flex-column">
                  <Heading title="Certifications" color="white" size="h6" />
                  <div className={styles.certifications}>
                    <Image src={soc} alt="soc logo" />
                    {/* <Image src={rbi} alt="security1" /> */}
                    <Image src={pci} alt="pci logo" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={`col-12 text-left color-white ${styles.disclaimer}`}>
          Corporate cards, payments, or other related services are provided by
          RBI-licensed banks and/ or in accordance with RBI regulations and/ or
          RBI compliance maintained by banks & regulated entities. EnKash is not
          a bank and doesn’t hold or claim to hold a banking license.{" "}
          <span className="color-electric-green">
            *Powered by Banks. <sup># </sup> Launching soon as per RBI's PA
            (Online) authorization
          </span>
        </div>
        <div className={`col-12 color-white ${styles.copyright}`}>
          Copyright © 2023 | Nehat Tech Solutions Pvt. Ltd. All right reserved.
        </div>
      </div>

      <div className={styles.locations_row}>
        <div className="d-flex flex-column me-5 color-white">
          <div className={styles.main_title}>
            Olympus™, an EnKash** product, is a licensed online payment
            aggregator authorized by the RBI.
          </div>
          <div className={styles.sub_title}>
            **EnKash is a commercial trade name owned by the legal entity, Nehat
            Tech Solutions Pvt. Ltd.
          </div>
        </div>

        <div className="d-flex me-5">
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
  );
};

export default Footer;
