import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../constant/common";
import faqData from "./faqData";
import carouselData from "./carouselData";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import FAQ from "@/components/faq/faq";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";

export const metadata: Metadata = {
  title: "GST Payment - GST Bill Payment Online for Businesses | EnKash",
  description:
    "Simplify GST Payment and Bill Payment Online - Seamlessly manage your GST payments and bills with our convenient online platform. Save time, stay compliant, and experience hassle-free transactions.",
};

const taxPayments = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Olympus |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading title="Tax Payments" size="h4" weight="4" />
          </div>

          <div className="">
            <div className="d-flex flex-wrap">
              <Heading
                title={`GST Payments with Complete${space}`}
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title="Visibility and Approvals"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Make GST challan payments on time every time with an optimized process and easy approvals via EnKash"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton title="EnKash Now" theme="theme-blue" />
            </div>
            <div>
              <SecondryButton
                title="Book a Demo"
                actionImage={whiteArrow}
                iconSize={15}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={styles.lottie_container}>
            <LottieClientComponent animationData={bannerLottie} loop={true} />
          </div>
        </div>
        <div className={styles.three_step_container}>
          <ThreeSteps />
        </div>
      </div>

      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Manual", "Intervention"],
              oldWayDescription:
                "Set a reminder for tax payments to make sure it is paid on time",
              newWayDescription:
                "Go to the government portal - Create GST challan",
            },
            {
              itemArray: ["Mode of", "Payment"],
              oldWayDescription:
                "Log in to the portal to get access to the invoice and check it",
              newWayDescription:
                "Choose payment mode like NEFT/RTGS - Remitting bank - Axis bank",
            },
            {
              itemArray: ["Late", "Payment", "Charges"],
              oldWayDescription:
                "Prepare paperwork to get the payment approved from the right person",
              newWayDescription:
                "Upload GST challan to EnKash portal. Challan will be read and verified digitally",
            },
            {
              itemArray: ["Bulk or", "Multiple", "Payments"],
              oldWayDescription:
                "Arrange funds or ensure limits to make the payment",
              newWayDescription:
                "Set unlimited hierarchy approvals and pay using any mode",
            },
            {
              itemArray: ["Chances of", "Loss"],
              oldWayDescription:
                "Make the payment and file the paperwork for future reference",
              newWayDescription:
                "Automatic real-time entry of the payment record",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Leverage EnKash for"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}Automatic and Easy${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title="GST Tax Payments"
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Easy Payments"
              description=" Set and manage a simple and intuitive process to ensure that all aspects are checked and payments are quick and easy."
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Easy Monitoring"
              description="Benefit from centralized view and control over all GST bill payments across your company on a single platform"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Approval Flow"
              description="Ensure checks and approvals are in place for valid spending, the proper audit trail, and close books quickly. This will help you 
              prevent errors, unauthorized payments and reduce the risk of fraud"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Digital Challans"
              description="Auto read the challans and convert them into paper records for audits and other purposes"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Manage Approvals"
              description="Set multi-level hierarchical approvals"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-flex flex-column">
                  <Heading
                    title={`How Tax Payments Help with${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="Expense Monitoring and Audit Trails"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                </div>
              </div>
            </>
          }
          mainTitle="How do Tax Payments Cards work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      <div className="row bg-white row-padding text-center">
        <BlogWrapper
          title="How does Tax Payment Help Your Finance Team Become More Efficient?"
          pageName="tax-payment"
        />
      </div>

      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs Section will Help you Learn about Tax Payments in detail."
            color="black"
            size="h4"
          />
        </div>

        <div>
          {faqData.map((item, index) => (
            <FAQ key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard />
      </div>
      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Seeking Further Understanding of GST Payment Online? Explore the Comprehensive Guide"
          innerHtml={
            <>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="GST or Goods and Services Tax is an indirect tax that was implemented to consolidate many different excise duties, VAT,  and other indirect taxes. GST is applicable at every level the sale occurs"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Making GST Payment Online – A Comprehensive Guide"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="As you know, once you have become a registered GST business, you need to file GST returns regularly. As a business owner, you would prefer an easier way to make GST payments. The good news is that you can make GST payments online and that too with various options. If you are comfortable with online payments as it is safer, quicker, and more secure, that is enabled too. For instance, you can select either the NEFT or RTGS options or opt to make GST payment online using your credit or debit card"
                />
              </div>
              <div>
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Here’s a comprehensive guide to making GST payment online:"
                />

                <ol className="mt-2 mb-5">
                  <li>
                    Go to
                    <a href="https://www.gst.gov.in/">
                      https://www.gst.gov.in/
                    </a>{" "}
                    where the GST portal will be displayed
                  </li>
                  <li>
                    Login to the portal with your username, password, captcha
                    code, and OTP
                  </li>
                  <li>Click on the Services→Payments→Challan History tabs</li>
                  <li>
                    Select the CPIN against which you want to make the payment
                  </li>
                  <li>Select the mode as E-Payment, Net Banking</li>
                  <li>
                    For net banking, select the bank that you want to make the
                    payment through
                  </li>
                  <li>
                    Accept the terms and conditions by clicking on the checkbox
                  </li>
                  <li>Click the ‘Make Payment’ button</li>
                  <li>
                    If you select the mode as E-Payment, Debit or Credit cards
                  </li>
                  <li>Select the payment gateway</li>
                  <li>
                    Accept the terms and conditions by clicking the checkbox
                  </li>
                  <li>
                    Enter your card details and generate OTP to make the payment
                  </li>
                </ol>
              </div>

              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Tailoring GST Payment Methods for Various Taxpayer Categories"
                />
              </div>
              <div className="mb-2 mt-4">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Regular taxpayers"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Regular taxpayers under the GST law, the supply can be either interstate or intrastate and have an annual turnover of INR 40 lacs. The regular taxpayers have to file annual returns, for which Form GSTR - 9 or GSTR -9C needs to be used. For the monthly or quarterly basis Form GSTR -1 needs to be used. For the monthly basis filing of returns, you need Form GSTR - 3B. If your business is already registered under the regular scheme, then another business with the same PAN can register for the composition scheme.  Under this scheme, you have unlimited territory to carry out your business and you can carry out business on e-commerce portals as well."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Quarterly Taxpayers"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="RQuarterly Returns with Monthly Payment (QRMP) scheme is for taxpayers to file their GSTR forms on a quarterly basis but pay their tax amounts due on a monthly basis, using a challan. Taxpayers whose annual turnover is up to INR 5 crores in the current fiscal year and have filed their last due using Form GSTR - 3B will be eligible under this option. You need to be registered under either as a regular taxpayer or selected by the composition scheme with a valid ID and password. You can login to the GST portal with your credentials and go Services→ Returns→ and then select Quarterly Return option"
                />
              </div>

              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Nil GST Return Filers"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="You will be considered a Nil GST Return Filer, if you have filed a ‘Nil’ return for a particular tax period. This happens when you have not made any sales or had any outward transaction or made any purchase or inward transaction and do not have liability to pay taxes for that tax period. Since it is mandatory for you to file nil GSTR-1 if you are a regular GST payer, you need to file a Nil return on a regular basis. There is a late fee for not filing a nil return on time and can attract a penalty of up to Rs. 2000."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Composition Taxable Persons"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="You will become a composition taxable person if you adopt the composition scheme under GST. The composition scheme is an easier option that GST offers for the benefit of taxpayers. Small taxpayers can avoid the painstaking GST formalities and pay GST at a turnover rate that is fixed. This scheme is available for taxpayers whose turnover is less than INR 1.5 crores annually. However there are some restrictions to this scheme. Ice cream, pan masala, or tobacco manufacturers cannot avail this scheme. Or if your business is making inter-state supplies or if you are a casual taxable person or a non-resident taxable person."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title=" Choosing the Optimal Mode for Processing GST Payment"
                />
              </div>
              <div className="mb-2 mt-4">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Exploring Online Payment Options"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="If you are confused about how to choose online payment options, we have some tips for you. The option you choose for your business will have to help you not only make GST payments on time but also help you with resource optimization and audit requirements. 
                  In most businesses, the payment process includes various levels. It starts with somebody going to the portal to create a challan. Then there will be one level, which will include checking the details to ensure that all the details are captured. Once this is done then the approval level comes into place. 
                  You need to ensure that all these steps are followed and documented to ensure that you can face audit queries. 
                  The next step is to make the payment by selecting the optimal mode for processing GST payment. One of the best ways to do this is by using your corporate credit limit that is available on your credit card. This ensures that you have time to repay the amount and enhances your working capital. It is also a secure and quick payment method and when combined with a smart spend management platform like EnKash, it also ensures that your core finance system is updated in real-time "
                />
              </div>
              <div>
                <Heading
                  title="Notable Points about Online GST Payments"
                  size="h6"
                  color="black"
                  weight="6"
                />
                <p className="mt-3">
                  Here are some notable points about online GST payments.
                </p>
                <ul>
                  <li>
                    The process is simple and intuitive to follow despite having
                    several steps to authenticate the user and verify the
                    credibility of the GST taxpayer
                  </li>
                  <li>
                    The challan is generated electronically from the GSTN Common
                    Portal no matter the mode of payment
                  </li>
                  <li>
                    You have plenty of payment options to choose from when
                    making online GST payments. It is possible to save the
                    challan to make changes as required before proceeding with
                    the payment
                  </li>
                  <li>
                    Facilitation for the taxpayer by providing hassle-free,
                    anytime, anywhere mode of payment of tax
                  </li>
                  <li>
                    Convenience of making payment online and there is logical
                    tax collection data in electronic format
                  </li>
                  <li>
                    The remittance of tax revenue to the government account is
                    quick and secure and occurs through paperless transactions
                  </li>
                  <li>
                    It enables quick and thorough accounting and reporting
                    practices with electronic reconciliation of receipts
                  </li>
                </ul>

                <div>
                  <Heading
                    title="Understanding Offline Payment Alternatives"
                    size="h6"
                    color="black"
                    weight="6"
                  />
                </div>
                <div className="mt-4">
                  <Heading
                    size="h6"
                    color="black"
                    weight="4"
                    title="When you finish logging into the official GST portal and check the challan. You can go to the Payment Modes tab to choose Over the Counter as the payment mode."
                  />
                </div>
                <div className="mt-3">
                  <ul>
                    <li>
                      Pick the name of the bank where you plan to deposit cash
                      or cheque for GST tax payment
                    </li>
                    <li>
                      Select whether you want to pay using Cash/Cheque/Demand
                      Draft
                    </li>
                    <li>
                      Generate the challan by clicking the GENERATE CHALLAN
                      button
                    </li>
                    <li>
                      Print out the challan and visit the bank you selected
                    </li>
                    <li>
                      Use cash or cheque or demand draft at the bank within the
                      validity period of the challan
                    </li>
                    <li>
                      Once the payment is confirmed by the bank, the GST portal
                      will update the payment status
                    </li>
                  </ul>
                </div>
                <div>
                  <Heading
                    title="NEFT/RTGS Payment Procedure"
                    size="h6"
                    color="black"
                    weight="4"
                  />
                  <ol className="mt-3">
                    <li>Select NEFT or RTGS as the payment mode</li>
                    <li>
                      In the drop-down list for the remitting bank, select the
                      name of the bank
                    </li>
                    <li>Generate Challan by clicking the button</li>
                    <li>
                      Print the challan out to go to the selected bank with the
                      mandate form that will be generated at the same time
                    </li>
                    <li>
                      You can pay using a cheque from your account with the
                      selected bank or pay using the account debit option
                    </li>
                    <li>
                      The bank and RBI will process the transaction and confirm
                      the same
                    </li>
                    <li>
                      You will get a UTR (Unique Transaction Number) to your
                      registered mobile number and email. Link the UTR with
                      NEFT/RTGS CPIN on the GST online portal
                    </li>
                    <li>
                      As a next step, select Challan History and click on the
                      CPIN link to enter UTR and link it with the NEFT/RTGS
                      payment
                    </li>
                    <li>
                      Once the bank confirms, the status of the payment will be
                      updated on the GST portal
                    </li>
                    <li>
                      Then, the payment will be updated on the Electronic Cash
                      Ledger in the correct minor or major heads
                    </li>
                  </ol>
                </div>
                <div>
                  <Heading
                    title="Important Notes regarding Offline GST Payments"
                    size="h6"
                    color="black"
                    weight="6"
                  />
                </div>
                <div className="mt-4">
                  <Heading
                    size="h6"
                    color="black"
                    weight="4"
                    title="Here are some important notes regarding offline GST payments. First of all, even if you want to make offline payments, the challan for payment will have to be generated online. You can only pay up to INR 10000 using a single OTC challan. In fact, the system itself will not allow you to generate more challans if you have generated challans but not paid them.
                    You can use cheques, including outstation cheques to make GST payments, however, the date the amount is realized is the date that will be considered as the payment date. The cheques or demand drafts paid by you will be updated in the portal only when updated by the bank."
                  />
                </div>

                <div className="mt-4">
                  <Heading
                    title=" Generating a GST Challan on the GST Portal – Illustrated Steps (Refer to Government Portal Screenshot)"
                    size="h6"
                    color="black"
                    weight="6"
                  />
                  <p className="mt-3">
                    Creating a Challan Without Portal Login To create a challan
                    without logging into the GST portal, you have to follow the
                    below-given steps
                  </p>
                  <ol>
                    <li>
                      Go to
                      <a href="https://www.gst.gov.in/" target="_blank">
                        https://www.gst.gov.in/
                      </a>
                    </li>
                    <li>On the site, go to the Services tab</li>
                    <li>Select Payments and click on Create Challan</li>
                    <li>
                      Once on the Create Challan page, enter the GSTIN in the
                      field given there
                    </li>
                    <li>Enter the captcha code and click on proceed</li>
                    <li>
                      Select the reason as either monthly or quarterly payment
                    </li>
                    <li>
                      Then choose the period for which you want to create
                      challan
                    </li>
                    <li>
                      Click on the self-assessment challan or 35% and then
                      Proceed
                    </li>
                    <li>
                      The challan amount details will be self-filled with tax
                      details as paid in the earlier period. You can click on
                      edit reason only if you have logged into the portal
                    </li>
                    <li>
                      As per the payment method, proceed as given above for
                      offline and online payments
                    </li>
                    <li>
                      You will be asked to re-enter the GSTIN number to proceed
                      further
                    </li>
                  </ol>
                </div>
                <div className="mt-4">
                  <Heading
                    title="Generating a GST Challan After Portal Login"
                    size="h6"
                    color="black"
                    weight="6"
                  />
                  <ol className="mt-3">
                    <li>
                      Go to
                      <a href="https://www.gst.gov.in/" target="_blank">
                        https://www.gst.gov.in/
                      </a>{" "}
                      where the GST portal will be displayed
                    </li>
                    <li>
                      Login to the portal with your username, password, captcha
                      code, and OTP
                    </li>
                    <li>
                      Navigate to the Services &rarr; Payments &rarr; Create
                      Challan Option
                    </li>
                    <li>
                      The next step is to select the reason for challan, which
                      can either be Monthly Payment for Quarterly return if you
                      are under the QRMP scheme or Any Other Payment
                    </li>
                    <li>Select the financial period for the return</li>
                    <li>
                      The next step is to select the challan type, which can
                      either be 35% Challan or Challan on Self-Assessment basis
                    </li>
                    <li>
                      The Challan Amount Details will get auto-filled with
                      details of the tax you have paid using Form GSTR 3B
                    </li>
                    <li>
                      You can save the challan for making changes later if you
                      have any doubt, but that is not possible with the 35%
                      scheme
                    </li>
                  </ol>
                  <p>
                    The saving of challan is only possible if you have logged
                    into the official GST portal.
                  </p>
                </div>

                <div className="mb-3">
                  <Heading
                    title="Time Constraints for Completing GST Payment"
                    size="h6"
                    color="black"
                    weight="6"
                  />
                </div>
                <p>
                  The various types of GST Return Forms have different due dates
                  for filing the returns.
                </p>
                <div className="mb-5">
                  <table className="table table-bordered table-responsive">
                    <thead>
                      <tr>
                        <th>Return Form</th>
                        <th>Due Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>GSTR-1</td>
                        <td>11th of the next month</td>
                      </tr>
                      <tr>
                        <td>IFF</td>
                        <td>13th of the next month</td>
                      </tr>
                      <tr>
                        <td>GSTR-3B</td>
                        <td>
                          20th of the next month For QRMP it is 22nd or 24th of
                          the month succeeding the quarter
                        </td>
                      </tr>
                      <tr>
                        <td>CMP-08</td>
                        <td>18th of the month succeeding the quarter</td>
                      </tr>
                      <tr>
                        <td>GSTR-4</td>
                        <td>30th of the month succeeding a financial year</td>
                      </tr>
                      <tr>
                        <td>GSTR-5</td>
                        <td>20th of the next month</td>
                      </tr>
                      <tr>
                        <td>GSTR-5A</td>
                        <td>20th of the next month</td>
                      </tr>
                      <tr>
                        <td>GSTR-6</td>
                        <td>13th of the next month</td>
                      </tr>
                      <tr>
                        <td>GSTR-7</td>
                        <td>10th of the next month</td>
                      </tr>
                      <tr>
                        <td>GSTR-8</td>
                        <td>10th of the next month</td>
                      </tr>
                      <tr>
                        <td>GSTR-9</td>
                        <td>31st December of the next financial year</td>
                      </tr>
                      <tr>
                        <td>GSTR-9C</td>
                        <td>31st December of the next financial year</td>
                      </tr>
                      <tr>
                        <td>GSTR-10</td>
                        <td>Within three months of the date of cancellation</td>
                      </tr>
                      <tr>
                        <td>GSTR-11</td>
                        <td>
                          28th of the month after the month for which statement
                          is filed
                        </td>
                      </tr>
                      <tr>
                        <td>ITC-04</td>
                        <td>
                          25th April where AATO is up to Rs.5 crore 25th October
                          and 25th April where AATO exceeds Rs.5 crore
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mb-3">
                  <Heading
                    title="Timeframe for Net Banking Transactions"
                    size="h6"
                    color="black"
                    weight="6"
                  />
                </div>

                <div className="mb-4">
                  <Heading
                    title="If you are making the payments online, you have access to it around the clock but if you want transaction for the same day, it is better to time your payments between 08:00 AM to 08:00 PM."
                    size="h6"
                    color="black"
                    weight="4"
                  />
                </div>

                <div className="mb-3">
                  <Heading
                    title="Timeframe for Offline Payment Modes"
                    size="h6"
                    color="black"
                    weight="6"
                  />
                </div>

                <div className="mb-4">
                  <Heading
                    title="The timelines for offline payment modes depend on two factors. One is the timing of the bank and branch where you are going to make the payment. The second factor is the CPIN that you will generate for offline payment and the validity of the CPIN is 15 days. The challan will clearly display the date of expiry clearly for your convenience. However, if you have created a challan without logging in, then you need to make the payment immediately."
                    size="h6"
                    color="black"
                    weight="4"
                  />
                </div>

                <div className="mb-3">
                  <Heading
                    title="Deferred GST Payment Steps for a Later Date – A Detailed Guide (reference link: https://cleartax.in/s/gst-payment)"
                    size="h6"
                    color="black"
                    weight="6"
                  />
                </div>
                <div>
                  <Heading
                    title="Step-by-Step Instructions for Deferred GST Payment:
                    Under the GST act, businesses have the option to defer or delay payments and to complete making payments in installments. "
                    size="h6"
                    color="black"
                    weight="4"
                  />
                </div>

                <div></div>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default taxPayments;
