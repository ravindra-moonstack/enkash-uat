import styles from './footer.module.scss';

const Footer=() => {
    return (
        <div className={styles.footer}>
            <div className={`${styles.footernew} lg:pt-16 pt-4 bg-red`}>
                <div className={styles.section_padding}>
                    <div className="row">
                        <div className="col-12 color-white mb-4">
                            <h2>
                                Spend Smart, Collect Fast, <br /> <span className="grow-more">Grow More</span>
                            </h2>
                            <div className="mt-2 sm:mt-6 flex">
                                <a id="footer-signup-1" className="button-primary no-shadow"
                                    target="_blank" rel="noopener"
                                    href="https://home.enkash.com/signup?utm_source=getstarted_footer">
                                    Get Started
                                </a>
                            </div>
                        </div>


                        <div className="footer-left-section col-12 col-md-3">
                            <div className="row">
                                <div className="col-12 footer-links-col">
                                    <div className="row">
                                        <h4 className="col-12">Olympus</h4>
                                        <div className="col-6 col-md-12">
                                            <ul>
                                                <li><div className="sub-title" rel="noopener noreferrer">Payables</div></li>
                                                <li><a rel="noopener noreferrer" href="/vendor-payments/">Vendor Payments</a></li>
                                                <li><a rel="noopener noreferrer" href="/rental-payments/">Rental Payments</a></li>
                                                <li><a rel="noopener noreferrer" href="/bulk-payout/">Bulk Payout</a></li>
                                                <li><a rel="noopener noreferrer" href="/bill-payments/">Bill Payments</a></li>
                                                <li><a rel="noopener noreferrer" href="/tax-payments/">Tax Payments</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-6 col-md-12">
                                            <ul>
                                                <li className="md:mt-2"><div className="sub-title" rel="noopener noreferrer">Receivables</div></li>
                                                <li><a rel="noopener noreferrer" href="/virtual-accounts/">Virtual Accounts</a></li>
                                                <li><a rel="noopener noreferrer" href="/payment-links/"> Payment Links</a></li>
                                                <li><a rel="noopener noreferrer" href="/bulk-collect/">Bulk Collect</a></li>
                                                <li><a rel="noopener noreferrer" href="/quick-collect/">Quick Collect</a></li>
                                                <li><a rel="noopener noreferrer" href="/invoices/">Invoices</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-right-section col-12 col-md-9">
                            <div className="row">
                                <div className="col-6 col-md-4 col-lg-4 footer-links-col">
                                    <div>
                                        <div className="freedom-card-box">
                                            <h4>Freedom</h4>
                                        </div>
                                        <ul>
                                            <li><a rel="noopener noreferrer" href="/purpose-based-cards/">Purpose based Cards*</a></li>
                                            <li><a rel="noopener noreferrer" href="/integrated-cards/">Integrated Cards*</a></li>
                                            <li><a rel="noopener noreferrer" href="/virtual-cards/">Virtual Cards*</a></li>
                                            <li><a rel="noopener noreferrer" href="/diy-card/">DIY Card Module</a></li>
                                            <li><a rel="noopener noreferrer" href="/spend-control/">Spends Control</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-4 footer-links-col">
                                    <div>
                                        <h4>Xpenz</h4>
                                        <ul>
                                            <li><a rel="noopener noreferrer" href="/budget-and-advances/">Budgets and Advances</a></li>
                                            <li><a rel="noopener noreferrer" href="/hierarchy-and-controls/">Hierarchy and Controls</a></li>
                                            <li><a rel="noopener noreferrer" href="/reimbursement/">Reimbursement</a></li>
                                            <li><a rel="noopener noreferrer" href="/policy-and-approval-flow/">Policy and Approval Flows</a></li>
                                            <li><a rel="noopener noreferrer" href="/scan-and-drop-receipts/">Scan and Drop Receipts</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-6 col-md-4 col-lg-4 footer-links-col">
                                    <div>
                                        <h4>Loyalty Lounge</h4>
                                        <ul>
                                            <li><a rel="noopener noreferrer" href="/employee-reward/">Employee Rewards</a></li>
                                            <li><a rel="noopener noreferrer" href="/brand-gift-vouchers/">Brand Voucher</a></li>
                                            <li><a rel="noopener noreferrer" href="/channel-incentive/">Channel Incentives</a></li>
                                            <li><a rel="noopener noreferrer" href="/brand-gift-vouchers/">Gift Cards</a></li>
                                            <li><a rel="noopener noreferrer" href="/offers/">Offers</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-6 col-md-4 col-lg-4 footer-links-col">

                                    <div className="md:mt-2">
                                        <h4>Resources</h4>
                                        <ul>
                                            <li><a rel="noopener noreferrer" href="https://www.enkash.com/resources/">Blogs</a></li>
                                            <li><a rel="noopener noreferrer" href="https://www.enkash.com/resources/videos/">Videos</a>
                                            </li>
                                            <li><a rel="noopener noreferrer" href="https://www.enkash.com/resources/press-release/">Press
                                                Release</a></li>
                                            <li><a rel="noopener noreferrer" href="https://www.enkash.com/resources/media-coverage/">Media
                                                Coverage</a></li>


                                        </ul>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-4 footer-links-col">
                                    <div className="mt-2">
                                        <h4>Company</h4>
                                        <ul>
                                            <li><a rel="noopener noreferrer" href="/about/">About Us</a></li>
                                            <li><a rel="noopener noreferrer" href="/sales?source=getstarted_footer">Sales</a></li>
                                            <li><a rel="noopener noreferrer" href="/career-team-and-openings/">Career</a></li>
                                            <li><a rel="noopener noreferrer" href="/support/">Support</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-4 footer-links-col">
                                    <div className="mt-2">
                                        <h4>Policies</h4>
                                        <ul>
                                            <li><a rel="noopener noreferrer" href="/grievance-policy/">Grievances and Redressal</a></li>
                                            <li><a rel="noopener noreferrer" href="/chargeback-dispute-management-policy/">Dispute
                                                Management</a></li>
                                            <li><a rel="noopener noreferrer" href="/privacy-legal/">Privacy & Legal</a></li>
                                            <li><a rel="noopener noreferrer" href="/term-condition/">Terms & Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-6 col-md-4 col-lg-3 footer-links-col offset-0 offset-lg-9">
                            <div className="contact-list">
                                <ul>
                                    <li><a id="ftr-phone-link"
                                        rel="noopener noreferrer"
                                        target="_top"
                                        href="tel:+91 8530490475"
                                    >
                                        <img src="/img/Call.png" alt="Contact Us" />
                                        +91 8530490475
                                    </a></li>

                                    <li>
                                        <div className="flex justify-between pt-4 w-3/4">
                                            <a id="ftr-fb-link"
                                                href="https://www.facebook.com/Enkashbusiness"
                                                target="_blank" rel="noreferrer noopener"
                                                className="mp-trigger"
                                                data-mp="fb"
                                            >
                                                <img src="/img/FB.png" alt="EnKash Facebook"
                                                /></a>
                                            <a id="ftr-tw-link"
                                                href="https://twitter.com/EnkashBusiness"
                                                target="_blank" rel="noreferrer noopener"
                                                className="mp-trigger"
                                                data-mp="twitter"
                                            ><img src="/img/Twitter.png" alt="EnKash Twitter"
                                                /></a>
                                            <a id="ftr-lnkd-link"
                                                href="https://www.linkedin.com/company/enkashbusiness"
                                                target="_blank" rel="noreferrer noopener"
                                                className="mp-trigger"
                                                data-mp="linkedin"
                                            ><img src="/img/linked_in.png" alt="EnKash LinkedIn"
                                                /></a>
                                            <a id="ftr-insta-link"
                                                href="https://www.instagram.com/Enkashbusiness"
                                                target="_blank" rel="noreferrer noopener"
                                                className="mp-trigger"
                                                data-mp="insta"
                                            ><img src="/img/Insta.png" alt="Instagram"
                                                /></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 enkash-fair-declaration text-left">
                            Corporate cards, payments, or other related services are provided by RBI-licensed banks and/ or in
                            accordance with RBI regulations and/ or RBI compliance maintained by banks & regulated entities.
                            EnKash is not a bank and doesn’t hold or claim to hold a banking license. *Powered by Banks
                        </div>

                        <div className="col-12 copyright"> Copyright © 2023 | EnKash. All right reserved.</div>
                    </div>
                </div>

                <div className="locations-row">
                    <img className="footer-location-pin" src="/img/location-pin.png" />
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
