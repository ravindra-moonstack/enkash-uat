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
          <a href="/olympus">
            <h4 className={` ${styles.title}`}>Olympus</h4>
          </a>
          <div className="">
            <ul className="mb-0">
              <li>
                <div className={`color-white ${styles.sub_title}`}>
                  <a href="/olympus/payables">Payables</a>
                </div>
              </li>
              <li>
                <a href="/olympus/payables/bill-payment/">Bill Payment</a>
              </li>
              <li>
                <a href="/olympus/payables/bulk-payout/">Bulk Payout</a>
              </li>
              <li>
                <a href="/olympus/payables/tax-payments/">GST Payment</a>
              </li>
              <li>
                <a href="/olympus/payables/vendor-payment/">Vendor Payment</a>
              </li>
              <li>
                <a href="/olympus/payables/rental-payment/">Rental Payment</a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="mt-2">
                <div className={`color-white ${styles.sub_title}`}>
                  <a href="/olympus/receivables">Receivables</a>
                </div>
              </li>
              <li>
                <a href="/olympus/receivables/virtual-accounts/">
                  Virtual Accounts
                </a>
              </li>
              <li>
                <a href="/olympus/receivables/payment-links/"> Payment Links</a>
              </li>
              <li>
                <a href="/olympus/receivables/bulk-collect/">Bulk Collect</a>
              </li>
              <li>
                <a href="/olympus/receivables/invoices/">Invoices</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className={` ${styles.footer_links_col}`}>
            <div>
              <div className={styles.freedom_card_box}>
                <a href="/slash">
                  <h4 className={`${styles.title}`}>Slash</h4>
                </a>
              </div>
              <ul>
                <li>
                  <a href="/slash/virtual-cards/">Virtual Cards*</a>
                </li>
                <li>
                  <a href="/slash/digital-marketing-cards/">
                    Digital Marketing Cards*
                  </a>
                </li>
                <li>
                  <a href="/slash/fuel-cards/">Fuel Cards*</a>
                </li>
                <li>
                  <a href="/slash/meal-cards/">Meal Cards*</a>
                </li>
                <li>
                  <a href="/slash/saas-cards/">SaaS Cards*</a>
                </li>
                <li>
                  <a href="/slash/purchase-cards/">Purchase Cards*</a>
                </li>

                <li>
                  <a href="/slash/travel-and-expense-cards">T&E Cards*</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className={`${styles.footer_links_col}`}>
            <div>
              <a href="/ofex">
                <h4 className={`col-12 ${styles.title}`}>OfEx</h4>
              </a>
              <ul>
                <li>
                  <a href="ofex/budget-and-advances/">Budgets and Advances</a>
                </li>
                <li>
                  <a href="ofex/hierarchy-and-controls/">
                    Hierarchy and Controls
                  </a>
                </li>
                <li>
                  <a href="ofex/policy-and-approval-flows/">
                    Policy and Approval Flows
                  </a>
                </li>
                <li>
                  <a href="ofex/reimbursement/">Reimbursement</a>
                </li>

                <li>
                  <a href="ofex/scan-and-drop-receipts/">
                    Scan and Drop Receipts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className={`col-6 col-md-4 ${styles.footer_links_col}`}>
            <div>
              <a href="/loyalty-lounge">
                <h4 className={`col-12 ${styles.title}`}>Loyalty Lounge</h4>
              </a>
              <ul>
                <li>
                  <a href="loyalty-lounge/brand-voucher/">Brand Voucher</a>
                </li>
                <li>
                  <a href="loyalty-lounge/channel-incentive/">
                    Channel Incentives
                  </a>
                </li>
                <li>
                  <a href="loyalty-lounge/employee-rewards/">
                    Employee Rewards
                  </a>
                </li>

                <li>
                  <a href="loyalty-lounge/gift-cards/">Gift Cards</a>
                </li>
                <li>
                  <a href="loyalty-lounge/offers/">Offers</a>
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
                  <a href="https://www.enkash.com/resources/videos/">
                    Product Videos
                  </a>
                </li>
                <li>
                  <a href="https://www.enkash.com/resources/press-release/">
                    Press Release
                  </a>
                </li>
                <li>
                  <a href="https://www.enkash.com/resources/media-coverage/">
                    News & Media
                  </a>
                </li>
                <li>
                  <a href="https://www.enkash.com/resources/customer-stories/">
                    Customer Stories
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
                {/* <li>
                  <a href="/career-team-and-openings/">Career</a>
                </li>
                <li>
                  <a href="/support/">Support</a>
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
                    Partner Bank Grievances
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
          *Corporate cards, payments, or other related services are provided by
          RBI-licensed banks and/ or in accordance with RBI regulations and/ or
          RBI compliance maintained by banks & regulated entities. EnKash is not
          a bank and doesn’t hold or claim to hold a banking license.
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
