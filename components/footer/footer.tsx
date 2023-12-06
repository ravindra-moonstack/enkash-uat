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
} from ".";

const signupUrl = "";

const Footer = () => {
  return (
    <div className={` ${styles.footer}`}>
      <div className={`row ${styles.footer_padding}`}>
        <div className="col-12 mb-4">
          <h2 className="color-white mb-4">
            Spend Smart, Collect Fast, <br />
            <span className="color-equity-blue">Grow More</span>
          </h2>
          <PrimaryButton
            title="Get Started"
            url={signupUrl}
            theme="theme-blue"
          />
        </div>
        <div className={`col-md-3 col-6 ${styles.footer_links_col}`}>
          <h4 className={` ${styles.title}`}>Olympus</h4>
          <div className="">
            <ul className="mb-0">
              <li>
                <div className={`color-white ${styles.sub_title}`}>
                  Payables
                </div>
              </li>
              <li>
                <a href="/bill-payment/">Bill Payment</a>
              </li>
              <li>
                <a href="/bulk-payout/">Bulk Payout</a>
              </li>
              <li>
                <a href="/tax-payments/">GST Payment</a>
              </li>
              <li>
                <a href="/vendor-payments/">Vendor Payment</a>
              </li>
              <li>
                <a href="/rental-payment/">Rental Payment</a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="mt-2">
                <div className={`color-white ${styles.sub_title}`}>
                  Receivables
                </div>
              </li>
              <li>
                <a href="/virtual-accounts/">Virtual Accounts</a>
              </li>
              <li>
                <a href="/payment-links/"> Payment Links</a>
              </li>
              <li>
                <a href="/bulk-collect/">Bulk Collect</a>
              </li>
              <li>
                <a href="/invoices/">Invoices</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className={` ${styles.footer_links_col}`}>
            <div>
              <div className={styles.freedom_card_box}>
                <h4 className={`${styles.title}`}>Slash</h4>
              </div>
              <ul>
                <li>
                  <div className={`color-white ${styles.sub_title}`}>
                    Prepaid Cards
                  </div>
                </li>
                <li>
                  <a href="/virtual-cards/">Virtual Cards*</a>
                </li>
                <li>
                  <a href="/digital-marketing-cards/">
                    Digital Marketing Cards*
                  </a>
                </li>
                <li>
                  <a href="/fuel-cards/">Fuel Cards*</a>
                </li>
                <li>
                  <a href="/meal-card/">Meal Cards*</a>
                </li>
                <li>
                  <a href="/saas-cards/">SaaS Cards*</a>
                </li>
                {/* <li>
                    <a href="/multi-currency-forex-cards/">
                      Multi-Currency Forex Cards*
                    </a>
                  </li> */}
                <li className="mt-2 ">
                  <div className={`color-white ${styles.sub_title}`}>
                    Corporate Credit Cards
                  </div>
                </li>
                <li>
                  <a href="/business-cards/">Business Cards*</a>
                </li>
                <li>
                  <a href="/purchase-cards/">Purchase Cards*</a>
                </li>

                <li>
                  <a href="/travel-and-expense-cards">T&E Cards*</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className={`${styles.footer_links_col}`}>
            <div>
              <h4 className={`col-12 ${styles.title}`}>OfEx</h4>

              <ul>
                <li>
                  <a href="/budget-and-advances/">Budgets and Advances</a>
                </li>
                <li>
                  <a href="/hierarchy-and-controls/">Hierarchy and Controls</a>
                </li>
                <li>
                  <a href="/policy-and-approval-flow/">
                    Policy and Approval Flows
                  </a>
                </li>
                <li>
                  <a href="/reimbursement/">Reimbursement</a>
                </li>

                <li>
                  <a href="/scan-and-drop-receipts/">Scan and Drop Receipts</a>
                </li>
                {/* <li>
                    <a href="/spend-control/">Spend Control</a>
                  </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className={`col-6 col-md-4 ${styles.footer_links_col}`}>
            <div>
              <h4 className={`col-12 ${styles.title}`}>Loyalty Lounge</h4>
              <ul>
                <li>
                  <a href="/brand-gift-vouchers/">Brand Voucher</a>
                </li>
                <li>
                  <a href="/channel-incentive/">Channel Incentives</a>
                </li>
                <li>
                  <a href="/employee-reward/">Employee Rewards</a>
                </li>

                <li>
                  <a href="/brand-gift-vouchers/">Gift Cards</a>
                </li>
                <li>
                  <a href="/offers/">Offers</a>
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
                  <a href="https://www.enkash.com/resources/">Blogs</a>
                </li>
                <li>
                  <a href="https://www.enkash.com/resources/videos/">Videos</a>
                </li>
                <li>
                  <a href="https://www.enkash.com/resources/press-release/">
                    Press Release
                  </a>
                </li>
                <li>
                  <a href="https://www.enkash.com/resources/media-coverage/">
                    Media Coverage
                  </a>
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
                  <a href="/about/">About Us</a>
                </li>
                <li>
                  <a href="/sales?source=getstarted_footer">Sales</a>
                </li>
                <li>
                  <a href="/career-team-and-openings/">Career</a>
                </li>
                <li>
                  <a href="/support/">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          {" "}
          <div className={`col-6 col-md-4 ${styles.footer_links_col}`}>
            <div className="mt-2">
              <h4 className={`col-12 ${styles.title}`}>Policies</h4>
              <ul>
                <li>
                  <a href="/grievance-policy/">Grievances and Redressal</a>
                </li>
                <li>
                  <a href="/chargeback-dispute-management-policy/">
                    Dispute Management
                  </a>
                </li>
                <li>
                  <a href="/privacy-legal/">Privacy & Legal</a>
                </li>
                <li>
                  <a href="/term-condition/">Terms & Conditions</a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.sbmbank.co.in/aboutus/grievance-redressal-mechanism.php"
                  >
                    SBM Grievances
                    <div className={styles.grievance_text}>
                      <span>Grievance Redressal Mechanism</span>
                      <span>- SBM Bank India</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`col-6 col-md-3 ${styles.footer_links_col}`}>
          <div className={styles.contact_list}>
            <ul>
              <li>
                <a
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
                </a>
              </li>
              <li>
                <div
                  className={`d-flex justify-content-between pt-3 ${styles.social_icons_row}`}
                >
                  <a
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
                  </a>
                  <a
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
                  </a>
                  <a
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
                  </a>
                  <a
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
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={`col-12 text-left color-white ${styles.disclaimer}`}>
          Corporate cards, payments, or other related services are provided by
          RBI-licensed banks and/ or in accordance with RBI regulations and/ or
          RBI compliance maintained by banks & regulated entities. EnKash is not
          a bank and doesn’t hold or claim to hold a banking license. *Powered
          by Banks
        </div>
        <div className={`col-12 color-white ${styles.copyright}`}>
          Copyright © 2023 | EnKash. All right reserved.
        </div>
      </div>

      <div className={styles.locations_row}>
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
  );
};

export default Footer;
