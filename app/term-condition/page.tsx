import Header from "@/components/header/header";
import React from "react";
import styles from "./page.module.scss";
import leftBlueGradient from "./gradient.png";
import Image from "next/image";
import Footer from "@/components/footer/footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Terms And Conditions For Use Of The Enkash Services | EnKash",
  description: " Terms And Conditions For Use Of The Enkash Services",
  alternates: {
    canonical: "https://enkash.com/term-condition/",
  },
};

const termCondition = () => {
  return (
    <>
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
                      <h1 className="term-condition-title mb-5 mt-0 mt-md-12 color-equity-blue">
                        Terms And Conditions For Use Of The Enkash Services
                      </h1>
                      <div className="term-condition-description mb-10">
                        <p className="c22">
                          <span className="c12">
                            Nehat Tech Solutions Private Limited&nbsp;
                          </span>
                          ("<span className="c4">EnKash</span>")
                          <span className="c12">
                            &nbsp;has developed a Software Application (as
                            defined below) and is also hosting EnKash Sites
                            (collectively referred to as{" "}
                          </span>
                          "<span className="c4">Platform</span>"
                          <span className="c12">
                            ) by way of which EnKash provides payment solutions
                            and payments related products &amp; other related
                            product or services to customers and businesses ("
                          </span>
                          <span className="c4">Customer</span>
                          <span className="c12">
                            ") through its platform or with use of its products
                            or services and also facilitates the Customers in
                            providing online/offline/ POS payments using
                            credit/debit cards, net banking, bank transfers and
                            various other acceptable modes of Payment Mechanism
                            options provided by EnKash. Customer agrees to avail
                            EnKash Services and for payment to Customer's
                            Vendors/Partners or Utility bill payments or
                            acceptance of payments from its Vendors/Partners.
                            Your use of the EnKash Services implies that you
                            have read, understood and agreed to abide by
                            following disclaimer and terms &amp;
                            conditions&nbsp;("
                          </span>
                          <span className="c4">Terms &amp; Conditions''</span>
                          <span className="c12">
                            ). These Terms &amp; Conditions together with{" "}
                          </span>
                          <span className="c12">
                            our <a href="/privacy-legal/">privacy policy</a>{" "}
                          </span>
                          <span className="c12">
                            as provided on the EnKash Sites&nbsp;(
                          </span>
                          "<span className="c4">Privacy Policy</span>")
                          <span className="c3">
                            &nbsp;govern your usage of the EnKash Services.
                          </span>
                        </p>
                      </div>
                      <div className="enkash-term-conditions-list">
                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            1. Definitions
                          </div>

                          <ul className="term-condition-description mb-10">
                            <li className="c14 li-bullet-1">
                              <span className="c3">
                                "Acquiring Banks" shall mean various banks,
                                financial institutions, Card Associations,
                                payment system providers who are defined and
                                licensed under the Payment and Settlement
                                Systems Act, 2007 and other software providers
                                who are in the business of providing information
                                technology services, including but not limited
                                to, POS terminals, internet based electronic
                                commerce, internet payment gateway and
                                electronic software distribution services.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Acquiring Bank Services" shall mean the
                                POS/payment gateway system and services provided
                                by the Acquiring Banks such as to (i) route
                                internet/POS terminal based Valid Card
                                transactions; (ii) offer various facilities
                                through the internet/POS terminals, including
                                Net Banking facilities; (iii) provide
                                Authentication and Authorization from Card
                                Associations/Issuing Institutions or other third
                                party clearing houses; and (iv) provide
                                settlement facilities in respect of payment
                                instructions initiated by the customers.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Applicable Law" shall mean all laws,
                                ordinances, judgments of any court or government
                                authority, administrative or regulatory
                                including notifications or guidelines issued by
                                Reserve Bank of India.
                              </span>
                            </li>
                            <li className="c9 li-bullet-2">
                              <span className="c3">
                                "Authentication" shall mean the process by which
                                the Customer's identification is authenticated
                                by the Acquiring/Issuing Banks.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Authorization" shall mean the process by which
                                the Issuing Institution and/or banks and/or the
                                relevant Card Association electronically or
                                otherwise convey the approval of the charge
                                (i.e. if the Customer has a Valid Card and/or
                                the required credit limit/ debit limit to pay
                                the Customer Charge requested) on a Transaction
                                being undertaken by a Customer.
                              </span>
                            </li>
                            <li className="c9 li-bullet-2">
                              <span className="c3">
                                "Business Days" shall mean (i) A day other than
                                Saturday or Sunday or (ii) a day other than on
                                which the Banks in India and/or Reserve Bank of
                                India are closed for business / clearing, or
                                (iii) a day other than on which normal business
                                in India could not be transacted due to storms,
                                floods, bandhs, strikes, or (iv) any days other
                                than declared by EnKash and/or Acquiring/Issuing
                                Bank as a Holidays etc.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Card Association(s)" shall mean any of Visa,
                                MasterCard, Visa Electron, Maestro, Rupay,
                                Diners, American Express or any other card
                                association as may be specified by EnKash from
                                time to time.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Card Association Rules" shall mean the written
                                rules, regulations, releases, guidelines,
                                processes, interpretations and other
                                requirements (whether contractual or otherwise)
                                imposed or adopted by any Card Association.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Chargeback" shall mean the approved and settled
                                card or net banking Transactions which are
                                raised or disputed by the valid cardholder or
                                valid account holder to the Issuing bank or its
                                bank and at any time reversed or debited (shall
                                also include similar debits to EnKash’s bank
                                accounts, if any) by the Acquiring and/or
                                Issuing Bank for any reason whatsoever, together
                                with the bank fees, penalties and other charges
                                incidental thereto if any.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Commercial Payment Schedule" shall mean a
                                separate payment schedule agreed between the
                                Customer and EnKash setting out the Service Fee
                                (defined below), the set-up fee, annual
                                maintenance charges, security deposit and any
                                other charges payable by the Customer for the
                                EnKash Services.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c12">
                                "Confidential Information" shall mean any and
                                all written, oral or other tangible or
                                intangible form of information, discoveries,
                                ideas, concepts, know-how (whether patentable or
                                copyrightable or not), research, development,
                                designs, drawings, blueprints, diagrams, models,
                                samples, flow charts, data, computer programs,
                                disks, diskettes, tapes, algorithms, software
                                programs, marketing plans or techniques,
                                technical, financial, or business information"
                                trade secrets which includes but is not
                                restricted to any portion or scientific or
                                technical or proprietary information, design,
                                process, procedure, formula or improvement which
                                is not generally available to the public as
                                delivered by EnKash ("
                              </span>
                              <span className="c4">Disclosing Party</span>
                              <span className="c12">
                                ") to the other Party ("
                              </span>
                              <span className="c4">Receiving Party</span>
                              <span className="c3">
                                ") within the framework of these Terms and
                                Conditions or resulting therefrom. Confidential
                                Information shall also include the details of
                                Customers, available on the EnKash Platform.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                “Customer Charges” shall have the meaning set
                                out under Paragraph 6 (iii).
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Customer/Corporate/Enterprise" shall mean an
                                individual or legal entity, who/which
                                purchases/utilize or sells Products or Services
                                from or to the Vendors/Partners/EnKash, payment
                                of which gets directed to Payment Mechanism
                                provided by EnKash under EnKash Services.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Customer/Corporate/Enterprise Bank Account"
                                shall mean a bank account or credit/debit/
                                prepaid/ cash card account of the Customer with
                                Issuing Institution.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Customer/Corporate/Enterprise
                                Charge/Transaction Amount" shall mean the sale
                                price of the products purchased or sold by the
                                Customer plus the shipping charge (if any) or in
                                case of utility the actual Bill amount presented
                                by Utility biller for services utilized by the
                                customer/corporate/enterprise and all other
                                taxes, duties, costs, charges and expenses in
                                respect of the Products/payment that are to be
                                paid by the Customer or Vendors, as the case may
                                be.
                              </span>
                            </li>
                            <li className="c9 li-bullet-2">
                              <span className="c3">
                                "Customer Data" shall mean data and information
                                that Customer submits to EnKash or to EnKash
                                Sites or on the Platform in connection with the
                                Services, including information stored in or
                                processed through the EnKash Platform. However,
                                such data or information shall not include the
                                data or information which is/are in public
                                domain;
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Financial Institution" shall mean one or more
                                of 'EnKash' approved banks or financial
                                institutions including NBFC.
                              </span>
                            </li>
                            <li className="c9 li-bullet-2">
                              <span className="c3">
                                "Issuing Institution or Issuing bank" shall mean
                                a bank or financial institution or other legal
                                entity, with which the Customer or Vendor (as
                                the case may be) has a Net Banking account
                                and/or which has issued the Valid Card to the
                                Customers or Vendors.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Customer EnKash Account" shall mean the
                                Customer account maintained with EnKash in order
                                to provide the EnKash Services to the Customer.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Vendor Bank Account" shall mean the bank
                                account maintained by Vendor for payment, which
                                Customer nominates for settlement of Vendor
                                Settlement Amount and the details of which are
                                provided to EnKash.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Net Banking Account" shall mean the facility
                                and internet account provided by the Issuing
                                Institution to Customers or Vendors holding a
                                bank account with the Issuing Institutions
                                specified by EnKash from time to time. Provided
                                that the bank account is not listed in current
                                warning or restricted bank account bulletins or
                                notices.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Nodal Account" shall mean an non-operative
                                account held by EnKash with any of the banks for
                                the purpose of pooling the monies collected from
                                Customers on behalf of the Vendors/ Partners/
                                Customer and facilitating the transfer of these
                                funds in final settlement to the Vendors/
                                Partners/ Customer &nbsp;(after deducting
                                Service Fee or as per arrangement between
                                Customer &amp; its Vendor), pursuant to RBI
                                notification DPSS.CO.PD.No.1102/
                                02.14.08/2009-10, dated 24/11/2009 or any other
                                RBI notifications amended from time to time.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Nodal Bank" shall mean the bank(s) designated
                                by EnKash for the purpose of pooling the funds
                                collected from Customers on behalf of the
                                Vendor/ Partners/ Customer &nbsp;and
                                facilitating the transfer of these funds in
                                final settlement to the Vendor/ Partners/
                                Customer (after deducting Service Fee or as per
                                arrangement with Corporate , pursuant to RBI
                                notification
                                DPSS.CO.PD.No.1102/02.14.08/2009-10, dated
                                24/11/2009 or any other RBI notifications or
                                guidelines amended from time to time.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "One Click Checkout" shall mean the facility
                                provided to the Customers to use its Valid Card
                                details with EnKash designated industry standard
                                compliant third party for payment with a single
                                click.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Outstanding Amount" shall mean the amount
                                payable by the Customer or Vendor to EnKash,
                                Acquiring and/or Issuing Banks towards
                                Chargebacks or any fees, penalty or other
                                payments owed to EnKash by the Customer or
                                Vendor; and any claims, cost or expenses as a
                                result of the proceedings filed against EnKash
                                and/or Acquiring and/or Issuing Banks by the
                                Customers or any third Party.
                              </span>
                            </li>
                            <li className="c9 li-bullet-2">
                              <span className="c3">
                                "Payment Mechanism" shall mean the mechanism of
                                making payment by utilizing the internet/POS
                                terminal/Batch Auth/Batch Upload/any other form
                                of facilities of various Acquiring and/or
                                Issuing Banks, Card Associations, card payment
                                systems and through such other modes and
                                mechanisms of payment and delivery as may be
                                notified by EnKash from time to time.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "EnKash Services" shall have the meaning
                                ascribed to it under "Services" as defined
                                herein and more particularly described in the
                                Scope of Work hereto provided through EnKash
                                Services Products.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "EnKash Services Product" shall mean the EnKash
                                products by means of which EnKash provides
                                EnKash Services. The Customer will be provided
                                with the EnKash Services Product in the manner
                                described in the Terms and Conditions.
                              </span>
                            </li>
                            <li className="c9 li-bullet-2">
                              <span className="c3">
                                "EnKash Sites" shall mean the websites provided
                                by EnKash by means of which EnKash provides
                                EnKash Services to the Customers and Vendors.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Products" shall mean goods and/or services
                                offered for sale by the Customer or Vendor or
                                EnKash on its Sites or through other mediums.
                              </span>
                            </li>
                            <li className="c9 li-bullet-2">
                              <span className="c3">
                                "POS Terminal" shall mean a point of sale device
                                placed in a Vendor/Corporate location which is
                                connected to the acquiring bank system via
                                telephone lines and is designed to authorize,
                                record and settle data by electronic means for
                                all sales transactions with acquiring banks.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "RBI" shall mean the Reserve Bank of India.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Settlement Amount" shall mean final amount to
                                be settled and transferred to the Vendor Bank
                                Account or Customer/Service provider Bank
                                Account (as the case may be) after due
                                collection of charges/fees payable to EnKash
                                under these Terms and Conditions.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c12">
                                "Services" shall mean EnKash facilitating
                                Payments and payments related products &amp;
                                other related products or services to customers
                                and businesses through its platform or with use
                                of its platform or services and also Financial
                                Supply Chain Management through an online
                                platform or anything which uses EnKash Services
                                Product.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Vendor/Partner/Vendors/Partners" shall mean the
                                supplier or purchaser of goods or services to or
                                from Customer.
                              </span>
                            </li>
                            <li className="c9 li-bullet-2">
                              <span className="c3">
                                "Territory" shall mean boundaries within India.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Transaction" shall mean the payment for
                                purchase or sell of goods and services by
                                Customer or EnKash, where the delivery of the
                                goods or services associated with such
                                transactions is immediate or simultaneous to the
                                payment or where the payment is being made after
                                the goods or services have been delivered and
                                consumed. ‘Transactions’ shall not include any
                                transaction where the payment is made in advance
                                while the goods/services are delivered/performed
                                in a deferred manner. &nbsp;
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                "Work Orders" shall mean a request by Customer
                                to EnKash for access of EnKash Platform and
                                provisioning of Services as per the terms and
                                conditions stated in these Terms and Conditions.
                              </span>
                            </li>
                            <li className="c9 li-bullet-2">
                              <span className="c3">
                                "Valid Card" shall mean any unexpired credit
                                card, prepaid or debit card which is issued by
                                an Issuing Institution designated to issue a
                                Visa, MasterCard, RuPay, American Express, Visa
                                Electron or a Maestro or cash card, pre-paid
                                card or other card as may be specified by EnKash
                                from time to time. Provided that the card is not
                                listed in current warning or restricted card
                                bulletins or notices and bears the signature of
                                the person in whose name the card is issued.
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            2. Services
                          </div>
                          <ul className="term-condition-description mb-10">
                            <li className="c14 li-bullet-2">
                              <span className="c3">
                                EnKash facilitates EnKash Services &nbsp;between
                                the Customer and Vendors/ Partners/ Utility
                                Solution providers through the EnKash Platform.
                                It also enables the Customers or Vendors to make
                                payment of Transaction Amount through EnKash
                                Platform for Transactions carried through the
                                Payment Mechanisms using Acquiring and/or
                                Issuing Bank's Services. Once the payment
                                instruction is Authenticated and Authorized by
                                the respective Acquiring and/or Issuing Bank in
                                respect of a Transaction, the Acquiring and/or
                                Issuing Bank will transfer such approved
                                Transaction Amount to the Nodal Account. The
                                Customer hereby directs and authorizes EnKash to
                                receive, hold, disburse and settle the
                                Transaction Amount in accordance with and
                                subject to the Terms and Conditions. EnKash
                                shall provide the initial set-up and integration
                                and deployment of 'EnKash' Platform at the
                                Customer's sites, including training to Customer
                                personnel.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c12">
                                EnKash facilitates the issuance of corporate
                                credit cards and prepaid cards to its corporate
                                Customers where such cards are issued by its
                                partner banks (“
                              </span>
                              <span className="c4">Partner Banks</span>
                              <span className="c3">
                                ”). In its arrangement with the Partner Banks,
                                the Partner Banks issue co-branded cards and
                                EnKash undertakes marketing, promotion and
                                distribution services in relation to these
                                cards, for the purpose of facilitating the
                                issuance of the credit cards and prepaid cards.
                                Notwithstanding anything stated herein, it is
                                hereby clarified that EnKash shall not undertake
                                any KYC verification process or decision in
                                relation to the approval or disapproval of the
                                issuance of the cards to the users and the same
                                shall be undertaken directly by the Partner
                                Bank. Any KYC verification and the decision in
                                relation to the issuance of the cards shall be
                                the sole responsibility of the Partner Bank and
                                EnKash shall not be liable for the same in any
                                manner.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c12">
                                EnKash also facilitates the issuance of credit
                                and prepaid cards to the employees of its
                                corporate Customers, wherein the Customers pay
                                the amount up to the assigned credit limit on
                                each card in advance and EnKash facilitates the
                                issuance of such cards, through its arrangement
                                with the Partner Bank(s). These corporate cards
                                can be customised as per the request of the
                                Customers. The Partner Bank(s) issue the card
                                and process all transactions requested by the
                                Customers. EnKash shall undertake marketing,
                                distribution and promotion of the credit card.
                                Please read the terms and conditions governing
                                the credit cards issued by the Partner Bank,
                                where such issuance is facilitated by EnKash,
                                available at{" "}
                              </span>
                              <a href="/">enkash.com</a> and the terms and
                              conditions governing the prepaid card issued by
                              the Partner Bank and facilitated by EnKash,
                              available at
                              <a href="/">enkash.com</a>
                            </li>
                            <li className="c9 li-bullet-2">
                              <span className="c12">
                                EnKash provides spend management dashboard to
                                its Customers which shall provide for management
                                of all spends, including payables, receivables,
                                and expenses, including employee expenses (“
                              </span>
                              <span className="c4">
                                Spend Management Service
                              </span>
                              <span className="c3">
                                ”). Every Customer on the Platform gets a unique
                                login on sign up and/or on issuance of the card
                                by the Partner Bank through EnKash, which
                                enables the spend management dashboard for all
                                such Customers where any transaction occurring
                                on their card or on Platform is fed in real time
                                onto the spend management dashboard with details
                                such as value, merchant, time, etc.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <span className="c3">
                                EnKash also provides a dashboard which allows
                                the Customers to track the number of days for
                                which payments have been outstanding and other
                                relevant information, thereby allowing them to
                                track their spends. EnKash further provides a
                                dashboard which allows the Customers to track
                                any payment due to the Customers, the number of
                                days for which payments have been outstanding
                                and other relevant information.
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            3. Eligibility and Access
                          </div>
                          <div className="term-condition-description mb-10">
                            <ul>
                              <li className="c22 c30">
                                <span className="c12">
                                  EnKash Services is not available to minors
                                  i.e. persons under the age of 18 (eighteen)
                                  years or to any users suspended or removed
                                  from the EnKash Platform for any reason
                                  whatsoever. Customer represents that he/she is
                                  of legal age to form a binding contract and is
                                  not a person barred from using or accessing
                                  the EnKash Platform under the applicable laws
                                  of India. You may use the EnKash Service only
                                  in compliance with these Terms and all
                                  applicable local, state, national, and
                                  international laws, rules and regulations.{" "}
                                </span>
                              </li>
                              <li className="c22 c30">
                                <span className="c3">
                                  EnKash Services is always evolving and the
                                  form and nature of the EnKash Services may
                                  change from time to time without prior notice
                                  to the Customer. In addition, EnKash may stop
                                  (permanently or temporarily) providing EnKash
                                  Services (or any features within EnKash
                                  Services) to you or the Customers generally
                                  and may not be able to provide you with prior
                                  notice. EnKash also retains the right to
                                  create limits on use, storage and features at
                                  its sole discretion at any time without prior
                                  notice to you.{" "}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            4. User Account, Passwords and Security
                          </div>
                          <ul className="term-condition-description mb-10">
                            <li className="c22 c31 li-bullet-3">
                              <span className="c12">
                                In order to use the EnKash Service, you will
                                have to register on the EnKash Platform by
                                providing certain details about yourself,
                                including your name, mobile number, email
                                address and such other details as may be
                                required and create an account (“
                              </span>
                              <span className="c4">Account</span>
                              <span className="c3">
                                ”). Additionally, Customers are prohibited from
                                selling, trading, or otherwise transferring
                                their Account to another party.
                              </span>
                            </li>
                            <li className="c22 c31 li-bullet-4">
                              <span className="c3">
                                Customer shall ensure and confirm that the
                                Account information provided by them is
                                complete, accurate and up-to-date. If there is
                                any change in the Account information, you shall
                                promptly update your Account information on the
                                EnKash Platform. If you provide any information
                                that is untrue, inaccurate, not current or
                                incomplete (or becomes untrue, inaccurate, not
                                current or incomplete), or if EnKash has
                                reasonable grounds to suspect that such
                                information is untrue, inaccurate, not current
                                or incomplete, EnKash has the right to suspend
                                or terminate your Account and refuse any and all
                                current or future use of the EnKash Service (or
                                any portion thereof) at its discretion, in
                                addition to any right that EnKash may have
                                against you at law or in equity, for any
                                misrepresentation of information provided by
                                you.{" "}
                              </span>
                            </li>
                            <li className="c22 c31 li-bullet-5">
                              <span className="c3">
                                Customer is responsible for maintaining the
                                confidentiality of the Account information,
                                safeguarding the password or credentials that
                                you use to access the Service and for any
                                activities or actions under your Account. You
                                are encouraged to use "strong" passwords
                                (passwords that use a combination of upper and
                                lower-case letters, numbers and symbols) with
                                your Account and with other accounts that you
                                may connect to your Account (such as Facebook,
                                Twitter or your email).{" "}
                              </span>
                            </li>
                            <li className="c22 c31 li-bullet-3">
                              <span className="c12">
                                Customer agrees to (a) immediately notify EnKash
                                of any unauthorized use of your Account
                                information or any other breach of security, and
                                (b) ensure that you exit from your Account at
                                the end of each session.{" "}
                              </span>
                              <span className="c8">EnKash </span>
                              <span className="c12">
                                cannot and will not be liable for any loss or
                                damage arising from your failure to comply with
                                the above requirements. Further,{" "}
                              </span>
                              <span className="c8">EnKash </span>
                              <span className="c3">
                                will not be liable for any loss that you may
                                incur as a consequence of unauthorized use of
                                your Account either with or without your
                                knowledge.
                              </span>
                            </li>
                            <li className="c22 c31 li-bullet-6">
                              <span className="c12">
                                Customer may be held liable for losses incurred
                                by EnKash or any other user of or visitor of the
                                EnKash Platform due to authorized or
                                unauthorized use of your Account as a result of
                                your failure in keeping your Account information
                                secure and confidential
                              </span>
                              <span className="c4 c6">. </span>
                            </li>
                            <li className="c22 c31 li-bullet-4">
                              <span className="c8">
                                Customer may terminate their account at any time
                                by writing to EnKash at{" "}
                              </span>
                              <a href="mailto:support@enkash.com">
                                support@enkash.com
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            5. Customer Representations, Warranties and
                            Covenants:
                          </div>

                          <ul className="term-condition-description c1 lst-kix_list_1-1 start">
                            <li className="c0 li-bullet-1">
                              The Customer agrees that:
                            </li>
                            <ul className="term-condition-description mb-10">
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  Customer shall provide all the information and
                                  details required by EnKash and fill all forms
                                  as may be required by EnKash{" "}
                                </span>
                              </li>
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  Customer shall also provide such declarations
                                  as specified by EnKash and required by the
                                  Bank in the form and manner as may be
                                  specified by EnKash.
                                </span>
                              </li>
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  Customer shall be responsible for accuracy of
                                  information provided by the Customer under the
                                  forms specified above.
                                </span>
                              </li>
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  he/she will provide appropriate infrastructure
                                  for access of the EnKash Platform provided by
                                  EnKash, on its platform.
                                </span>
                              </li>
                              <li className="c9 li-bullet-2">
                                <span className="c3">
                                  Customer will ensure that the EnKash Platform
                                  is operated by authorized identified competent
                                  personnel in accordance with the furnished
                                  operating instructions and are used only for
                                  the purposes contemplated under the Terms and
                                  Conditions;
                                </span>
                              </li>
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  Customer shall be solely responsible for the
                                  authentication of any information and
                                  legitimacy of Customer's Vendors.
                                </span>
                              </li>
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  Customer shall be solely liable for payment
                                  due to the Financial Institutions including
                                  any charges in connection with the same.
                                  EnKash will act purely on the instructions of
                                  the Customer as per the information provided
                                  by the Customer.
                                </span>
                              </li>
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  Customer will be responsible to identify and
                                  clearly articulate the Vendors/ Utility /GST/
                                  Rental service provider who needs to be paid.
                                </span>
                              </li>
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  Customer is responsible and accountable for
                                  all the information and due diligence of its
                                  Vendors/ Utility Service Provider/ Partners.
                                </span>
                              </li>
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  Customer understands and acknowledges that the
                                  Platform permits only transactions where
                                  delivery of the goods or services associated
                                  with such transactions is immediate or
                                  simultaneous to the payment or transactions
                                  where payment is being made after the goods or
                                  services have been delivered and consumed
                                  (“DvP Transaction”). You undertake that you
                                  shall use the EnKash Platform only for
                                  performing DvP Transactions and shall not
                                  perform any transactions where the payment is
                                  made in advance while the goods/services are
                                  delivered/performed in a deferred manner.
                                </span>
                              </li>
                            </ul>
                            <li className="c0 li-bullet-1">
                              Consent from the Customer
                            </li>
                            <ul className="term-condition-description mb-10">
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  The Customer gives its consent to EnKash to
                                  use all the information provided by the the
                                  Customer or otherwise procured by EnKash in
                                  the manner it deems fit including, for the
                                  services to be provided by EnKash or for its
                                  business and understands and agrees that
                                  EnKash may disclose such information to its
                                  contractors, agents and any other third
                                  parties to ensure that the Customer gets the
                                  desired financial products / services at its
                                  disposal that is seeks in its course of
                                  business and also to improvise the services
                                  provided by EnKash to the Customer from time
                                  to time.The Customer gives its consent to
                                  EnKash to use all the information provided by
                                  the the Customer or otherwise procured by
                                  EnKash in the manner it deems fit including,
                                  for the services to be provided by EnKash or
                                  for its business and understands and agrees
                                  that EnKash may disclose such information to
                                  its contractors, agents and any other third
                                  parties to ensure that the Customer gets the
                                  desired financial products / services at its
                                  disposal that is seeks in its course of
                                  business and also to improvise the services
                                  provided by EnKash to the Customer from time
                                  to time.{" "}
                                </span>
                              </li>
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  The Customer acknowledges and authorizes
                                  EnKash to facilitate collection of Customer’s
                                  documents / details  from time to time and to
                                  also generate / obtain Credit bureau or such
                                  other reports of the customers as and when
                                  EnKash may deem fit. The Customer also hereby
                                  gives consent and authorizes EnKash to
                                  facilitate documents verification by such
                                  means as allowed under applicable laws and
                                  undertake all such actions as may be required
                                  on its behalf or otherwise to duly complete
                                  the process of such verification and share
                                  such information with any authority and store
                                  such information in a manner it deems fit.
                                </span>
                              </li>
                            </ul>
                          </ul>
                        </div>

                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            6. Approval And registration To Avail EnKash
                            Services/Acquring AND/OR Issuing Bank Services
                          </div>
                          <ul className="term-condition-description mb-10">
                            <li>
                              The customer shall disclose the exact business
                              category/business sub-category for which the
                              customer will be using the EnKash Services and
                              shall only avail the EnKash Services through
                              approved mechanism by EnKash. In order to use the
                              EnKash Services for any other purpose, the
                              Customer shall notify EnKash in writing of such
                              change and such change will be subject to approval
                              by EnKash. The Customer understands that in order
                              to avail Services, the Customer must be approved
                              by and registered with EnKash, the Acquiring and/
                              or Issuing Banks and/or Nodal Bank. Any
                              undertaking with respect to the EnKash Services
                              under these Terms and Conditions shall be subject
                              to EnKash's, the Acquiring and/or Issuing Bank's
                              and/or Nodal Bank's approval and completion of the
                              registration process. The Customer further
                              understands and acknowledges that EnKash, the
                              Acquiring and/or Issuing Banks and/or Nodal Bank
                              have the right to withdraw their approval/consent
                              at any time prior to or after commencement of the
                              EnKash Services.
                            </li>
                          </ul>
                        </div>

                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            7. Fees And Payment Terms
                          </div>
                          <ul className="term-condition-description mb-10">
                            <li className="c14 li-bullet-1">
                              <span className="c12">
                                In consideration for EnKash Services, the
                                Customer agrees to pay EnKash, service fee as
                                may be agreed between the EnKash and the
                                Customer in writing (“
                              </span>
                              <span className="c4">Service Fee</span>
                              <span className="c3">
                                ”), which can be deducted by EnKash from the
                                Transaction Amount in respect of each completed
                                Transaction. The Customer also agrees to pay
                                EnKash an additional Service Fee as agreed in
                                writing which could be flat, monthly or annual
                                fees. &nbsp;EnKash reserves the right to revise
                                the service fee periodically, and EnKash will
                                intimate the Customer of any such change within
                                reasonable time.
                              </span>
                            </li>

                            <li className="c9 li-bullet-1">
                              <span className="c12">
                                Any other amounts payable by the Customer such
                                as the set-up fee, annual maintenance charges,
                                security deposit and any other charges ("
                              </span>
                              <span className="c4">Customer Charge</span>
                              <span className="c12">
                                ") shall be agreed between the Customer and
                                EnKash in writing
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            8. Payment Arrangement
                          </div>
                          <ul className="term-condition-description mb-10">
                            <li className="c22 c30 c42 li-bullet-1">
                              <span className="c12">
                                EnKash shall endeavour to instruct the Nodal
                                Bank to transmit the Settlement Amount from the
                                Nodal Account to the Vendor's Bank Account or in
                                Customer Bank Account in case the Customer is
                                accepting payments from Vendors within the
                                time-period prescribed by RBI commencing from
                                date of Completion of Transaction as separately
                                mutually agreed. If the Customer opts for EnKash
                                Services using EnKash Services Product, the
                                Customer understand that the Transaction shall
                                be completed only upon receipt of the
                                Transaction Amount in the Nodal Account from the
                                Acquiring and/or Issuing Banks and
                                reconciliation of the same by the Acquiring
                                and/or Issuing Banks, EnKash and the Nodal Bank
                                ("
                              </span>
                              <span className="c4">
                                EnKash Completion of Transaction
                              </span>
                              <span className="c3">").</span>
                            </li>
                            <li className="c22 c30 c42 li-bullet-1">
                              <span className="c3">
                                The transmission of the Settlement Amount to the
                                Vendor Bank/Utility/GST/Rental Service provider
                                bank account shall be subject to reconciliation
                                of the Customer Charge by the Acquiring and/or
                                Issuing Banks, EnKash and the Nodal Bank after
                                actual receipt of Transaction Amount in the
                                Nodal Account. The Customer shall be solely
                                responsible for all payments with respect to
                                refunds and Chargebacks and EnKash shall not be
                                liable for any claims, disputes, penalties which
                                may arise in connection with such refunds or
                                Chargebacks. The Customer agrees to indemnify
                                EnKash in respect of any claims, disputes,
                                penalties, costs and expenses arising directly
                                or indirectly in relation to refunds or
                                Chargebacks for all Transactions initiated and
                                instructed through the EnKash Platform or
                                through other medium.
                                <br />
                                Notwithstanding anything contained herein, the
                                Customer hereby fully confirms and agrees that
                                EnKash, Acquiring and/or Issuing Bank and Nodal
                                Bank reserve the right to reject payments with
                                respect to any Customer Charge for reasons
                                including but not limited to unlawful,
                                unenforceable, doubtful or erroneous
                                Transaction, Chargeback, refund, fraud,
                                suspicious activities, card Authentication and
                                Authorization issues, overpayment made due to
                                mathematical errors or otherwise, penalties
                                incurred, Transaction related issues, issues
                                related to Delivery, Customer Charge or Product,
                                if the Transaction was not made in accordance
                                with the requirements of EnKash and/or the
                                Acquiring and/or Issuing Banks and/or Card
                                Association.
                                <br />
                                In the event of rejection of payment with
                                respect to Customer Charge, Chargeback, refunds
                                or other Outstanding Amounts due to EnKash,
                                Acquiring and/or Issuing Bank, EnKash and/or the
                                Acquiring and/or Issuing Bank reserve the right
                                to reverse the credit given to the Customer or
                                Vendor or Vendors Bank Account or set-off the
                                payment amount rejected, Chargeback or refunded
                                or the Outstanding Amount against Settlement
                                Amount payable to the Vendor or Vendors or
                                Customer or utility service provider. EnKash
                                and/or Acquiring and/or Issuing Banks may also
                                deduct the payment amount due from future
                                Settlement Amounts payable to the Vendor or
                                Vendors or Customer with respect to subsequent
                                Transactions and/or ask to pay before any future
                                transaction processing. All Settlement Amount
                                due to the Vendor(s), Customer or utility
                                service provider may be suspended or delayed
                                till such time as EnKash, the Acquiring and/or
                                Issuing Banks and/or Nodal Bank deems fit, if
                                (a) the Customer or a third party commits any
                                fraud or violates any law or legal requirement;
                                (b) EnKash and/or the Acquiring and/or Issuing
                                Banks have reasons to believe that a fraud has
                                been committed by the Customers, (c) the
                                Customer has excessive pending Chargebacks or
                                poses high Chargeback and/or refund Risk; or (d)
                                for any other reasonable reasons. EnKash
                                reserves the right to reject or de-board any
                                Vendor/service provider found violating
                                Acquiring/Issuing bank norms &amp; guidelines
                                and/or for OFAC/Sanctions/AML purposes.
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            9. Authorization And Authentication Of Transaction
                          </div>
                          <ul className="term-condition-description mb-10">
                            <li>
                              <span className="c3">
                                The EnKash, Acquiring and/or Issuing Banks
                                and/or Card Association has the right to reject
                                authorization of Transaction placed by the
                                Customer for any reason including but not
                                limited to risk management, suspicion of
                                fraudulent, illegal or doubtful Transactions,
                                selling of banned items, use of compromised
                                Valid Cards, use of blacklisted/banned cards or
                                in accordance with the RBI, Acquiring Banks,
                                Issuing Institution and/or Card Association
                                rules, guidelines, regulations, etc and any
                                other Applicable Laws, rules, regulations,
                                guidelines in force in India, etc. EnKash and/or
                                the Acquiring and/or Issuing Banks reserve the
                                right to limit or restrict transaction size,
                                amount and/or monthly volume at any time. For
                                the purpose of clarity such limitations or
                                restrictions may be imposed for the following
                                reasons including but not limited to
                                limits/restrictions on the number of purchases
                                which may be charged on an individual Valid Card
                                or net banking account during any time period,
                                unusual monetary value of Transaction, etc.
                                Further, EnKash may at its sole discretion block
                                any card number, account numbers, group of cards
                                or Transactions from any specific blocked or
                                blacklisted Customer cards, accounts, specific,
                                group of IP addresses, devices, geographic
                                locations and / or any such risk mitigation
                                measures it wishes to undertake.
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            10. Right/Title/Interest & Ownership
                          </div>
                          <ul className="term-condition-description mb-10">
                            <li className="c14 li-bullet-2">
                              <span className="c12">
                                EnKash reserves and retains all of its right,
                                title, and interest in and to the services
                                connected to the EnKash Platform, and all its
                                copyrights, patents, trademarks, service marks,
                                design rights (whether registered or
                                unregistered), trade secrets, know-how,
                                expertise, and all other similar proprietary
                                rights associated therewith, including the
                                trademark ‘EnKash’ ("Intellectual{" "}
                              </span>
                              <span className="c4">Property Rights</span>
                              <span className="c3">
                                ") and/or which are developed in connection with
                                the EnKash Services and EnKash Platform, or
                                already developed. EnKash does not convey any
                                proprietary rights or other interest therein to
                                Customer. Customer has a non-exclusive,
                                revocable and a limited access to use EnKash
                                Platform but cannot reproduce, communicate,
                                modify or reverse engineer the EnKash Platform.
                                Customer must not copy or allow any third party
                                an access to the EnKash Platform without prior
                                written consent from EnKash. Customer
                                understands that EnKash is in no way
                                transferring or assigning its Intellectual
                                Property Rights in EnKash Platform or any of its
                                other products and services to the Customer or
                                any other party as they shall remain the
                                exclusive property of the EnKash. Upon
                                termination of Customer’s engagement with EnKash
                                for whatsoever reasons, the Customer will
                                deliver and return to EnKash all documents,
                                samples, and other materials which may have been
                                provided by EnKash in connection with the EnKash
                                Platform or the Services.
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            11. Privacy
                          </div>
                          <ul className="term-condition-description mb-10">
                            <li>
                              Any information that the Customer provides to
                              EnKash or on the EnKash Platform is subject to the
                              Privacy Policy, which governs the collection and
                              use of Customer information.
                            </li>
                          </ul>
                        </div>

                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            12. Limitation Of Liability
                          </div>
                          <ul className="term-condition-description mb-10">
                            <li className="c14 li-bullet-1">
                              <span className="c3">
                                Notwithstanding anything stated herein, the
                                aggregate liability of EnKash to the Customer
                                from any cause whatsoever shall not in any event
                                exceed the sum equivalent to the Service Fee
                                earned by EnKash from the Transactions
                                undertaken by the Customer on the EnKash
                                Platform, during the month preceding the date of
                                occurrence of such liability. Provided that
                                EnKash shall not be liable to the Customer for
                                any special, incidental, indirect or
                                consequential damages, damages from loss of
                                profits or business opportunities even if EnKash
                                has been advised in advance of the possibility
                                of such loss, cost or damages. In no event shall
                                the Nodal Bank or the Acquiring and/or Issuing
                                Bank be liable to the Customer in any way. In no
                                event will EnKash be liable for any loss of
                                profits, revenues, business opportunities,
                                exemplary, punitive, special, incidental, and
                                indirect or consequential damages. EnKash will
                                not be liable for any loss, expenses or damage
                                whatsoever caused by:
                              </span>
                              <ul>
                                <li className="c0 li-bullet-1">
                                  <span className="c12">
                                    Failure for whatever reason of a card issued
                                    by EnKash or any Equipment or the system to
                                    function properly or at all; or
                                  </span>
                                </li>
                                <li className="c0 li-bullet-2">
                                  <span className="c12">
                                    Unauthorized acquisition of information by
                                    any person through other Customers on the
                                    Platform or other interception of
                                    communication on the system EnKash Platform;
                                  </span>
                                </li>
                                <li className="c0 li-bullet-1">
                                  <span className="c12">
                                    EnKash will not entertain any requests of
                                    Chargeback from the Customer or Issuing
                                    Institution;
                                  </span>
                                </li>
                                <li className="c0 li-bullet-1">
                                  <span className="c12">
                                    Any trade related dispute between Customer
                                    or Customer's Vendors or Customers service
                                    provider; will be settled outside the
                                    purview of these terms.
                                  </span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>

                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            13. Confidential Information
                          </div>
                          <ul className="term-condition-description mb-10">
                            <li className="c14 li-bullet-1">
                              <span className="c3">
                                The Customer will, at all times, maintain
                                confidentiality regarding all Confidential
                                Information received by it through the access to
                                the EnKash Platform or use of EnKash Services.
                                The Customer agrees to protect the proprietary
                                information with the same standard of care and
                                procedures used by themselves to protect their
                                own proprietary information of similar
                                importance but at all times and at least a
                                reasonable degree of care.
                              </span>
                            </li>
                            <li className="c9 li-bullet-1">
                              <div className="c3">
                                The Customer shall not be liable for disclosure
                                or use of any Confidential Information if the
                                same:
                              </div>
                              <div>
                                <ul className="c1 lst-kix_list_1-1 start">
                                  <li className="c0 li-bullet-1">
                                    <span className="c3">
                                      Was at the time received or which
                                      thereafter becomes, through no act or
                                      failure on the part of the Customer,
                                      generally known or available to the
                                      public;
                                    </span>
                                  </li>
                                  <li className="c0 li-bullet-1">
                                    <span className="c3">
                                      Is known to the Customer at the time of
                                      receiving such information as evidenced by
                                      documentation then rightfully in the
                                      possession of the Customer and to which no
                                      confidentiality exists;
                                    </span>
                                  </li>
                                  <li className="c0 li-bullet-1">
                                    <span className="c3">
                                      Is furnished to others by the Customer
                                      without restriction of disclosure;
                                    </span>
                                  </li>
                                  <li className="c0 li-bullet-1">
                                    <span className="c3">
                                      has been disclosed pursuant to the
                                      requirements of law or court order without
                                      restrictions or other protection against
                                      public disclosure; provided, however, that
                                      EnKash shall have been given a reasonable
                                      opportunity to resist disclosure and/or to
                                      obtain a suitable protective order.
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            14. Links
                          </div>
                          <ul className="term-condition-description mb-10">
                            <li>
                              There may be links to third-party websites or
                              resources on the Platform. Customer acknowledges
                              and agrees that EnKash is not responsible or
                              liable for: (i) the availability or accuracy of
                              such websites or resources; or (ii) the content,
                              products, or services on or available from such
                              websites or resources. Links to such websites or
                              resources do not imply any endorsement by the
                              EnKash of such websites or resources or the
                              content, products, or services available from such
                              websites or resources. Customer acknowledges sole
                              responsibility for and assumes all risk arising
                              from your use of any such websites or resources.
                            </li>
                          </ul>
                        </div>

                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            15. Disclaimer
                          </div>
                          <div className="term-condition-description">
                            <ul className="c1 lst-kix_list_2-0 start">
                              <li className="c14 li-bullet-1">
                                <span className="c3">
                                  Customers acknowledge and agree that their use
                                  of the EnKash Platform is at their own risk
                                  and that the EnKash Platform is provided on an
                                  &ldquo;as is&rdquo; and &ldquo;as
                                  available&rdquo; basis.{" "}
                                </span>
                              </li>
                              <li className="c9 li-bullet-2">
                                <span className="c3">
                                  However, notwithstanding anything herein, the
                                  Customer acknowledges that EnKash Platform,
                                  EnKash Services and the Acquiring and/or
                                  Issuing Bank&#39;s Services may not be
                                  uninterrupted or error free or free from any
                                  virus or other malicious, destructive or
                                  corrupting code, program or macro and EnKash
                                  and the Acquiring and/or Issuing Banks
                                  disclaim all warranties, express or implied,
                                  written or oral, including but not limited to
                                  warranties of non-infringement,
                                  merchantability and fitness of the services
                                  for a particular purpose.{" "}
                                </span>
                              </li>
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  The Customer also acknowledges that the
                                  arrangement between one or more Acquiring
                                  and/or Issuing Banks and EnKash may terminate
                                  at any time and services of such Acquiring
                                  and/or Issuing Banks may be withdrawn.{" "}
                                </span>
                              </li>
                              <li className="c9 li-bullet-2">
                                <span className="c3">
                                  EnKash does not warrant or endorse the
                                  effectiveness, quality or safety of the EnKash
                                  Services available on the EnKash Platform.{" "}
                                </span>
                              </li>
                              <li className="c9 li-bullet-2">
                                <span className="c3">
                                  Although EnKash adopts security measures, it
                                  considers appropriate for the offer of the
                                  EnKash Service, it does not assure or
                                  guarantee that no person will overcome or
                                  subvert the security measures and gain
                                  unauthorized access to the EnKash Service or
                                  the Customer data. EnKash shall not be
                                  responsible or liable if any unauthorized
                                  person hacks into or gains access to the
                                  EnKash Service or to the Customer&#39;s EnKash
                                  Account. In event of incorrect settlement in
                                  the Customer&#39;s Account due to error on the
                                  part of EnKash or the Bank, EnKash shall have
                                  the right to reverse the extra funds from the
                                  Customer/Vendor Bank Account. In addition, the
                                  Customer and/or its Vendor/Vendors shall be
                                  fully liable to return the extra funds settled
                                  within 7 (seven) days of intimation by EnKash.{" "}
                                </span>
                              </li>
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  Customer acknowledges and agrees that EnKash
                                  will have no liability for any: (i) errors,
                                  mistakes, or inaccuracies of any content
                                  available on EnKash Platform; (ii) personal
                                  injury, property damage, or other harm
                                  resulting from your access to or use of the
                                  EnKash Platform; (iii) any unauthorized access
                                  to or use of EnKash servers, any personal
                                  information, or user data; (iv) any
                                  interruption of transmission to or from the
                                  EnKash Platform; (v) any bugs, viruses, trojan
                                  horses, or the like that may be transmitted on
                                  or through the EnKash Platform; or (vi) any
                                  damages, losses, costs, expenses, or
                                  liabilities of any kind incurred as a result
                                  of any Transaction performed through the
                                  EnKash Platform.
                                </span>
                              </li>
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  EnKash shall not be responsible for
                                  non-availability of the EnKash Services during
                                  periodic maintenance operations or any
                                  unplanned suspension of access to EnKash
                                  Services that may occur due to technical
                                  reasons or for any reason beyond
                                  EnKash&rsquo;s control.{" "}
                                </span>
                              </li>
                              <li className="c14 li-bullet-1">
                                <span className="c3">
                                  In addition EnKash shall not be liable to the
                                  Customer for any loss or damage whatsoever or
                                  howsoever caused or arising, directly or
                                  indirectly, including without limitation, as a
                                  result of loss of data; interruption or
                                  stoppage to the Customer&#39;s access to
                                  and/or use of the EnKash Platform, EnKash
                                  Services and/or the Payment Mechanism, hacking
                                  or unauthorized access of the EnKash Services,
                                  or EnKash Platform, non-availability of
                                  connectivity between the Customer Systems and
                                  EnKash Platform, etc. Any material/information
                                  downloaded or otherwise obtained through the
                                  use of the EnKash Services is done at the
                                  Customer&#39;s own discretion and risk and the
                                  Customer and its Vendor&#39;s will be solely
                                  responsible for any damage to its computer
                                  system or loss of data that results from the
                                  download of any such material. No advice or
                                  information, whether oral or written, obtained
                                  by the Customer from EnKash or through or from
                                  the use of EnKash Services shall create any
                                  warranty. EnKash shall have no liability in
                                  this respect.
                                </span>
                              </li>

                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  EnKash&#39;s sole obligation and the
                                  Customer&#39;s sole and exclusive remedy in
                                  the event of interruption in EnKash Platform,
                                  or loss of use and/or access to EnKash
                                  Platform, if any, will be to use all
                                  reasonable endeavours to repair and restore
                                  the EnKash Services and/or access to the
                                  Payment Mechanism as soon as reasonably
                                  possible.
                                </span>
                              </li>
                              <li className="c14 li-bullet-1">
                                <span className="c3">
                                  Except as expressly set forth above and to the
                                  extent permitted by applicable law, EnKash
                                  makes no warranty of any kind, express,
                                  implied or statutory, regarding the services
                                  or software, and all such warranties,
                                  including without limitation the implied
                                  warranties of customer&#39;s ability, fitness
                                  for particular purpose and non-infringement
                                  and are hereby expressly disclaimed by EnKash.
                                </span>
                              </li>
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  EnKash will not entertain any requests of
                                  Chargeback from the Customer or Issuing
                                  Institution.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            16. Indemnity
                          </div>
                          <div className="term-condition-description">
                            <ul className="c1 lst-kix_list_7-0 start">
                              <li className="c14 li-bullet-1">
                                <span className="c3">
                                  Customer shall indemnify and keep indemnified
                                  EnKash, and its directors, affiliates,
                                  employees, and agents against any loss or
                                  costs, charges and expenses required to be
                                  incurred or suffered by EnKash (including
                                  attorney&#39;s and expert witnesses&rsquo;
                                  costs and fees) arising out of any obligation
                                  of the Customer due to any act or omission or
                                  breach which is attributable to Customer.
                                </span>
                              </li>
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  The Customer hereby undertakes and agrees to
                                  indemnify, defend and hold harmless EnKash for
                                  violations of Anti Money Laundering
                                  regulations.
                                </span>
                              </li>
                              <li className="c9 li-bullet-2">
                                <div className="c3">
                                  The Customer hereby undertakes and agrees to
                                  indemnify, defend and hold harmless EnKash
                                  and/or the Acquiring and/or Issuing Banks
                                  including their officers, directors and agents
                                  from and against all actions, proceedings,
                                  claims (including third party claims),
                                  liabilities (including statutory liability),
                                  penalties, demands and costs (including
                                  without limitation, legal costs), awards,
                                  damages, losses and/or expenses however
                                  arising directly or indirectly, including but
                                  not limited to, as a result of:
                                </div>
                                <ul className="c1 lst-kix_list_7-1 start">
                                  <li className="c0 li-bullet-1">
                                    <span className="c3">
                                      Breach or non-performance by the Customer
                                      of any of its undertakings, warranties,
                                      covenants, declarations or obligations
                                      under these Terms and Conditions;
                                    </span>
                                  </li>
                                  <li className="c0 li-bullet-2">
                                    <span className="c3">
                                      Breach of confidentiality and intellectual
                                      property rights obligations by the
                                      Customer;
                                    </span>
                                  </li>
                                  <li className="c0 li-bullet-1">
                                    <span className="c3">
                                      Any act, deed, negligence, omission,
                                      misrepresentation, default, misconduct,
                                      non-performance or fraud by the Customer,
                                      its employees, contractors, agents;
                                    </span>
                                  </li>
                                  <li className="c0 li-bullet-1">
                                    <span className="c3">
                                      Chargebacks or refunds relating to the
                                      Transactions contemplated under these
                                      Terms and Conditions;
                                    </span>
                                  </li>
                                  <li className="c0 li-bullet-1">
                                    <span className="c3">
                                      Breach of law, rules regulations, legal
                                      requirements (including RBI regulations,
                                      Card Association Rules, Acquiring and/or
                                      Issuing Bank rules) in force in India
                                      and/or in any place from where the
                                      Customers is making the Transaction and/or
                                      where the Product is or to be Delivered
                                      and/or where the respective Issuing
                                      Institution is
                                      incorporated/registered/established; or
                                    </span>
                                  </li>
                                  <li className="c0 li-bullet-1">
                                    <span className="c3">
                                      Any fines, penalties or interest imposed
                                      directly or indirectly on EnKash on
                                      account of Customer&#39;s or Transactions
                                      conducted through Customer under these
                                      Terms and Conditions.
                                    </span>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            17. Violation of Terms
                          </div>
                          <div className="term-condition-description">
                            <ul>
                              <li>
                                Customer agrees that any violation of these
                                Terms will constitute an unlawful and unfair
                                business practice, and will cause irreparable
                                harm to EnKash for which monetary damages would
                                be inadequate, and you consent to EnKash
                                obtaining any injunctive or equitable relief
                                that they deem necessary or appropriate in such
                                circumstances. These remedies are in addition to
                                any other remedies that EnKash may have at law
                                or in equity. If EnKash takes any legal action
                                against you as a result of your violation of
                                these Terms, they will be entitled to recover
                                from you, and you agree to pay, all reasonable
                                attorneys’ fees and costs of such action, in
                                addition to any other relief that may be
                                granted.
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            18. Suspension and Termination
                          </div>
                          <div className="term-condition-description">
                            <ul className="c1 lst-kix_list_13-0 start">
                              <li className="c37 li-bullet-7">
                                <span className="c8 c6">
                                  The Terms will continue to apply until
                                  terminated by either the Customer or EnKash as
                                  set forth below. If you object to the Terms or
                                  are dissatisfied with the EnKash Services,
                                  your only recourse is to (i) close your
                                  Account; and (ii) stop accessing the EnKash
                                  Services.{" "}
                                </span>
                              </li>
                              <li className="c37 li-bullet-7">
                                <span className="c6 c8">
                                  EnKash reserves the right to terminate,
                                  discontinue, suspend, limit, or restrict your
                                  account or your use of the EnKash Services or
                                  access to EnKash Platform at any time, without
                                  notice or liability, if EnKash so determines
                                  in its sole discretion, for any reason
                                  whatsoever. Additionally, EnKash reserves the
                                  right to delist you or block your future
                                  access to the EnKash Service or suspend or
                                  terminate your Account if it believes, in its
                                  sole discretion that you have infringed,
                                  breached, violated, abused, or unethically
                                  manipulated or exploited any term of these
                                  Terms or anyway otherwise acted
                                  unethically.&nbsp;
                                </span>
                              </li>
                              <li className="c37 li-bullet-8">
                                <span className="c8 c6">
                                  If you or EnKash terminates your use of the
                                  EnKash Services, EnKash may, subject to the
                                  terms of the Privacy Policy, delete any
                                  information relating to your use of the EnKash
                                  Service and EnKash will have no liability to
                                  you or any third party for doing so.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            19. Governing Law, Jurisdiction And Dispute
                            Resolution
                          </div>
                          <div className="term-condition-description">
                            <ul className="c1 lst-kix_list_3-0 start">
                              <li className="c14 li-bullet-1">
                                <span className="c3">
                                  The provisions of these Terms and Conditions
                                  shall be governed by and construed in
                                  accordance with Indian law.
                                </span>
                              </li>
                              <li className="c9 li-bullet-1">
                                <span className="c3">
                                  Any dispute, controversy or claims arising out
                                  of or relating to these Terms and Conditions
                                  or the breach, termination or invalidity
                                  thereof, shall be settled by arbitration at
                                  Mumbai, in accordance with the provisions of
                                  the Indian Arbitration and Conciliation Act,
                                  1996. The arbitral tribunal shall be composed
                                  of a Sole Arbitrator to be appointed by
                                  EnKash.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="term-conditions-list">
                          <div className="term-condition-subtitle mb-3">
                            20. General Terms
                          </div>
                          <div className="term-condition-description">
                            <ul className="c1 lst-kix_list_3-0 start">
                              <li className="c14 li-bullet-1">
                                Waiver and Severability
                                <div>
                                  <span className="c8 c6">
                                    The failure of EnKash to enforce any right
                                    or provision of these Terms will not be
                                    deemed a waiver of such right or provision.
                                    In the event that any provision of these
                                    Terms is held to be invalid or
                                    unenforceable, then that provision will be
                                    limited or eliminated to the minimum extent
                                    necessary, and the remaining provisions of
                                    these Terms will remain in full force and
                                    effect.
                                  </span>
                                </div>
                              </li>
                              <li className="c9 li-bullet-1">
                                Entire Agreement
                                <div>
                                  <ul>
                                    <li>
                                      <span className="c8 c6">
                                        These Terms, the Privacy Policy and
                                        other policies available on the EnKash
                                        Platform are the entire and exclusive
                                        agreement between EnKash and Customer
                                        &nbsp;regarding the EnKash Service
                                        (excluding any services for which you
                                        have a separate agreement with EnKash
                                        that is explicitly in addition or in
                                        place of these Terms), and these Terms
                                        supersede and replace any prior
                                        agreements between EnKash and you
                                        regarding the Services.{" "}
                                      </span>
                                    </li>
                                    <li>
                                      <span className="c8 c6">
                                        EnKash retains the unconditional right
                                        to revise these Terms from time to time,
                                        the most current version will always be
                                        on the Platform. You can determine when
                                        this Terms was last modified by
                                        referring to the “Last Updated” legend
                                        above. It shall be your responsibility
                                        to check this Terms periodically for
                                        changes. Your continued use and access
                                        of the Service shall signify your
                                        acceptance of the amended Terms and your
                                        consent to be legally bound by the same.{" "}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                Grievance Redressal:
                                <ul className="c1 lst-kix_list_17-0 start">
                                  <li className="c40 li-bullet-12">
                                    <span className="c8 c6">
                                      Any complaints arising from the use of the
                                      EnKash Service may be addressed to the
                                      following contact details:
                                    </span>

                                    <div className="table-responsive mt-3">
                                      <table className="table table-bordered">
                                        <tbody>
                                          <tr>
                                            <td>
                                              <span className="c8">
                                                Name of the Grievance Redressal
                                                Officer:
                                              </span>
                                            </td>
                                            <td>
                                              <b>Mr Krishna Kumar </b>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Email ID:</td>
                                            <td>
                                              <a href="mailto:grievanceofficer@enkash.com">
                                                grievanceofficer@enkash.com
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Phone</td>
                                            <td>
                                              <a>+91 9513251477</a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Working Day(s)</td>
                                            <td>Monday to Friday</td>
                                          </tr>
                                          <tr>
                                            <td>Working Hr(s)</td>
                                            <td>10 AM to 5 PM IST</td>
                                          </tr>
                                          <tr></tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </li>
                                  <li className="c40 li-bullet-13">
                                    <span className="c8 c6">
                                      The Grievance Redressal Officer shall,
                                      upon receiving the complaint initiate
                                      inquiry into the same and shall endeavour
                                      to resolve the complaint promptly, in
                                      accordance with the Applicable Laws.
                                    </span>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                Nodal Officer Details:
                                <ul className="c1 lst-kix_list_17-0 start">
                                  <li className="c40 ">
                                    <span className="c8 c6">
                                      In case of no satisfactory response within
                                      24 hours or for any further escalation if
                                      required, please contact our Nodal officer
                                      in the below details for further
                                      assistance as follows:
                                    </span>
                                    <div className="table-responsive mt-3">
                                      <table className="table table-bordered">
                                        <tbody>
                                          <tr>
                                            <td>
                                              <span className="c8">
                                                Name of the Nodal Officer:
                                              </span>
                                            </td>
                                            <td>
                                              <b> Mr Vibhor Chugh</b>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <span className="c8">
                                                Email Id
                                              </span>
                                            </td>
                                            <td>
                                              <a href="mailto:nodalofficer@enkash.com">
                                                nodalofficer@enkash.com
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Phone Number</td>
                                            <td>+91 9513251499</td>
                                          </tr>
                                          <tr>
                                            <td>Working Day(s)</td>
                                            <td>Monday to Friday</td>
                                          </tr>
                                          <tr>
                                            <td>Working Hr(s)</td>
                                            <td>10 AM to 5 PM IST</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
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

export default termCondition;
