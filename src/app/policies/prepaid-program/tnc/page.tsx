import React from "react"
import { Metadata } from "next"

import styles from "./page.module.scss"
import generateMetaData from "@/src/utils/metaData"

import DynamicHeading from "@/src/components/dynamic-heading"
import CustomBreadcrumb from "@/src/components/breadcrumb"

export const metadata: Metadata = generateMetaData({
  title: "Terms and Conditions (Prepaid Program): EnKash",
  description:
    "Understand the specific terms for issuing and using EnKash prepaid instruments.",
  alternates: {
    canonical: `${process.env.URL}/policies/prepaid-program/tnc`,
  },
})

const CustomerOnboarding = (): React.JSX.Element => {
  //

  return (
    <>
      <div className={styles.parent_container}>
        <div className="max-w-auto  position-relative ">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Policies", url: "/#" },
                {
                  name: "Prepaid Program",
                  url: "/policies/prepaid-program",
                },
                {
                  name: "Terms and Conditions ",
                  url: "/policies/prepaid-program/tnc",
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
                            title: "Terms and Conditions (Prepaid Program)",
                            color: "color-equity-blue",
                          },
                        ]}
                        headingTag="h1"
                        className="f-5 text-center"
                      />
                    </div>
                    <div className="word-to-html-null mb-5">
                      <h5 className="c15 mt-6 pb-4">
                        Last Updated On: 10th June 2025
                      </h5>
                      <p>
                        These terms and conditions (
                        <strong>&quot;Terms and Conditions&quot;</strong>) apply
                        to and regulate the provisions of prepaid payment
                        instruments/cards which are prepaid instruments issued
                        by <strong>Nehat Tech Solutions Private Limited</strong>
                        (<strong>“PPI Issuer”</strong>).
                      </p>

                      <p>
                        By completing the sign-up process for availing any of
                        the Cards, you are deemed to have expressly read,
                        understood and accepted each and every specific Terms
                        and Conditions for issuance of prepaid instruments
                        mentioned herein, along with the General Terms and
                        Conditions specified on our website{" "}
                        <a
                          href={`${process.env.NEXT_PUBLIC_URL}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          https://www.enkash.com/
                        </a>{" "}
                        and amended from time to time.
                      </p>

                      <p>
                        In this agreement, <strong>“We”</strong>,{" "}
                        <strong>“Us”</strong> or <strong>“Our”</strong> refers
                        to the Nehat Tech Solutions Private Limited,{" "}
                        <strong>“You”</strong> or <strong>“Your”</strong> refers
                        to the individual purchasing or using the Prepaid Card.
                      </p>

                      <h5 className="c15 mt-6">1. DEFINITIONS</h5>
                      <div className="container mt-4">
                        <p>
                          In these Terms and Conditions, unless the contrary
                          intention appears and/or the context otherwise
                          requires, capitalized terms defined by the following
                          terms shall have the meanings assigned to them herein
                          below:
                        </p>
                        <div>
                          <ul className="list-unstyled ms-3">
                            <li>
                              • <strong>“Account”</strong> refers to a prepaid
                              account with an account balance equivalent to
                              amount loaded on the PPIs, for the purpose of
                              monitoring the limits available on such PPIs.
                            </li>
                            <li>
                              • <strong>“Business Day”</strong> means a day
                              other than a Sunday, or Public Holiday as defined
                              under Section 25 of Negotiable Instrument Act,
                              1881 on which banks are open to transact business
                              of banking.
                            </li>
                            <li>
                              • <strong>“Charges”</strong> means such levy,
                              costs and charges levied by us for usage of the
                              PPIs, as amended from time to time.
                            </li>
                            <li>
                              • <strong>“Customer”</strong> or{" "}
                              <strong>“Holder”</strong> or{" "}
                              <strong>“You”</strong> shall mean any individuals
                              / Organizations who obtain / purchase PPIs from
                              the issuers and who is authorized to hold and use
                              the same against the value stored on such PPI.
                            </li>
                            <li>
                              • <strong>“Customer Care Centre”</strong> refers
                              to contact centre provided by us for addressing
                              all queries, complaints raised by the Customer or
                              any details or information sought by the Customer
                              in relation to the PPIs.
                            </li>
                            <li>
                              • <strong>“EDC”</strong> or{" "}
                              <strong>“Electronic Data Capture”</strong> Machine
                              means terminal, printer, other peripheral and
                              accessory and necessary software on which the PPI
                              can be swiped or used to initiate a transaction.
                            </li>
                            <li>
                              • <strong>“Internet Payment Gateway”</strong>{" "}
                              means the protocol stipulated/to be stipulated by
                              us authorizing the payments made using PPI over
                              the internet upon authentication of the Customer.
                            </li>
                            <li>
                              • <strong>“KYC”</strong> shall mean Know Your
                              Customer guidelines adopted by us for the purpose
                              of identification and verification of the
                              customer, pursuant to the Regulations issued by
                              Reserve Bank of India, from time to time.
                            </li>
                            <li>
                              • <strong>“Merchant Establishments”</strong> shall
                              mean such physical establishments (including but
                              not limited to stores, shops, restaurants, hotels,
                              etc.) and Reloadable stores (in any type of
                              electronic form including but not limited to
                              ecommerce platforms, digital marketplaces, etc.)
                              located in India, having a specific contract with
                              us (or a contract through a payment aggregator /
                              payment gateway / Card network) for accepting PPI.
                            </li>
                            <li>
                              • <strong>“Payment Channel”</strong> shall mean
                              various modes of transactions including but not
                              limited to EDC/POS terminals/kiosks/ Internet
                              Payment Gateway/Mobile based payment solutions and
                              various other modes as intimated by us from time
                              to time.
                            </li>
                            <li>
                              •{" "}
                              <strong>
                                “Personal Identification Number (PIN)”
                              </strong>{" "}
                              is a numeric password provided to the Customer
                              while issuing PPI by us.
                            </li>
                            <li>
                              • <strong>“POS”</strong> or{" "}
                              <strong>“Point of Sale”</strong> means electronic
                              terminals maintained by Merchant Establishments in
                              India at which the Customer can use the PPI.
                            </li>
                            <li>
                              • <strong>“Prepaid Instrument (PPI)”</strong>{" "}
                              shall mean a prepaid instrument which includes
                              gift cards and meal cards, general purpose
                              reloadable cards, etc, that facilitates purchases
                              against the value stored on such PPIs as defined
                              in the Regulations.
                            </li>
                            <li>
                              • <strong>“Regulations”</strong> shall mean the
                              master directions, circulars, notifications,
                              rules, guidelines, regulations, etc. issued by
                              Reserve Bank of India or any other competent
                              authority related to issuance and operation of
                              prepaid payment instruments in India, as amended
                              from time to time.
                            </li>
                            <li>
                              • <strong>“Schedule of Charges”</strong> shall
                              mean the details of fees or Charges as may be
                              prescribed by us from time to time and displayed
                              on our website.
                            </li>
                            <li>
                              • <strong>“Transaction”</strong> means any
                              transaction initiated by the Customer using PPI at
                              any Merchant Establishment.
                            </li>
                            <li>
                              •{" "}
                              <strong>
                                “Nehat Tech Solutions Private Limited”
                              </strong>{" "}
                              or <strong>“PPI Issuer”</strong> shall mean Nehat
                              Tech Solutions Private Limited, a company within
                              the meaning of the Companies Act, 2013 having its
                              registered office at 91 Springboard, 175,
                              Kagalwala House, 2nd Floor, Kalina, Santacruz (E),
                              Mumbai- 400 098, Maharashtra, India.
                            </li>
                            <li>
                              • <strong>“Limits”</strong>: All ‘limits’ in the
                              value of instruments stated in the Master
                              Direction, indicate the maximum value of such
                              instruments, denominated in INR, that shall be
                              issued to any holder, unless otherwise specified.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <h5 className="c15 mt-6">ELIGIBILITY CRITERIA</h5>
                      <div className="container my-4">
                        <ul className="list-unstyled ms-3">
                          <li>
                            • Only Individuals/Organizations, suitable to enter
                            into a legal binding agreement, may use Cards for
                            transactions in India in Indian Rupee denominations
                            only.
                          </li>
                          <li>
                            • In order to register, create and use the Card, the
                            PPI Issuer may require the Cardholder to submit
                            certain personal information including but not
                            limited to Cardholder’s name, address, mobile phone
                            number, e-mail address, date of birth, preferred
                            language of communication, etc.
                          </li>
                          <li>
                            • No individual or entity shall misrepresent its
                            identity, age, other demographic, parental,
                            residence, ownership, nature of business information
                            or other such information required to enforce any
                            laws and regulations of India, intentionally or
                            accidentally, and wrongfully use PPIs.
                          </li>
                          <li>
                            • PPI Issuer may make further enquiries to
                            verify/authenticate the identity of the Cardholder.
                            In this regard, the Cardholder is responsible to
                            ensure that the personal information provided is, at
                            all times, true, accurate, correct and complete.
                          </li>
                        </ul>
                      </div>

                      <h5 className="c15 mt-6">ISSUANCE AND USAGE OF PPI</h5>

                      <div className="container my-4">
                        <p>
                          • The PPI shall be the exclusive property of the
                          Issuer
                        </p>
                        <p>
                          • The PPI shall be valid only within the territory of
                          India and for transactions in Indian Rupees only. The
                          PPI cannot be used outside the territory of India or
                          for any transactions denominated in foreign currency
                        </p>
                        <p>
                          • The Customer shall be required sign on the reverse
                          side of the PPI (if the PPI is in the card form)
                          immediately upon its receipt. We reserve the right to
                          reject or cancel any Transaction in absence of the
                          signature or mismatch of the signature, without
                          further notice or intimation to the Customer
                        </p>
                        <p>
                          • The PPI shall not be transferable to other
                          individual or third party under any circumstances
                        </p>
                        <p>
                          • We shall not be liable to pay any interest on any
                          balance maintained in the PPI at any point in time
                        </p>
                        <p>
                          • The Customer agrees and confirms that the PIN shall,
                          under no circumstances be revealed by the Customer to
                          any relative or family members or third party. The
                          Customer shall be solely responsible and liable for
                          the consequences arising out of such unauthorized
                          disclosure of PIN and/or unauthorized usage of the
                          PPI. We disclaim all responsibility and liability
                          arising out of or in connection with the unauthorized
                          usage of the PPI and/or any loss or damage, whether
                          direct or indirect, incurred by the Customer as a
                          result of such misuse. If the Customer forgets or
                          misplaces the PIN, the Customer should visit the
                          website or mobile application or any other mode as may
                          be made available by us for regeneration of PIN
                        </p>
                        <p>
                          • Customer needs to utilize the entire credit balance
                          available on the PPI prior to its expiry. In case the
                          Customer does not utilize the credit balance available
                          on the PPI within the validity period, the Customer
                          can approach us for renewal of the PPI. In case the
                          Customer does not approach us within a specified
                          period, the outstanding credit balance available on
                          the PPI will be transferred to a fund in compliance
                          with the Regulations.
                        </p>
                        <p>
                          • The Customer shall sign and retain all the charge
                          slips generated for each of the Transaction
                          consummated at a Merchant Establishment. We shall not
                          be obliged to provide copies of the charge slips or
                          transaction slips to the Customer. Any such request by
                          the Customer will be at our PREPAID INSTRUMENTS TERMS
                          AND CONDITIONS sole discretion and provided such
                          requests have been made by the Customer within
                          forty-five (45) Business Days from the date of the
                          Transaction. The Customer agrees that we shall be
                          entitled to charge additional cost or charge for
                          providing copies of the charge or transaction slips
                        </p>
                        <p>
                          • Any charge or cost levied by the Merchant
                          Establishment in relation to any Transaction shall be
                          directly settled by the Customer with the Merchant
                          Establishment. We shall not be liable or responsible,
                          either directly or indirectly, for any act or omission
                          on the part of the Merchant Establishment or the
                          charges or cost levied by them in relation to the
                          Transaction
                        </p>
                        <p>
                          • All refunds and adjustments due to any Merchant
                          Establishments on account of device error or
                          communication link will be processed manually and the
                          Account will be credited after due verification by us
                          pursuant to the applicable rules, regulation and our
                          internal policy. The Customer agrees that any
                          subsequent Transactions will be accepted or honored
                          only based on the available credit balance in the
                          Account without taking into account any disputed
                          amount under consideration by us. The Customer shall
                          unconditionally keep us indemnified against any loss
                          or damage caused to us on account of dishonoring the
                          payment instructions as a result of insufficient funds
                          in the Account. The Customer agrees that we shall be
                          entitled to deduct the amount of such loss or damaged
                          caused to us directly from the Account
                        </p>
                        <p>
                          • The Customer undertakes to act in good faith at all
                          times in relation to all dealings of the PPI. The
                          Customer accepts full responsibility for any illegal
                          or wrongful use of the PPI in contravention to the
                          Terms and Conditions contained herein
                        </p>
                        <p>
                          • The Customer hereby agrees not to use the PPI for
                          making payment(s) of any goods and services, which is
                          illegal under the laws. The PPI cannot be used for
                          making purchases of prohibited or contraband products
                          or services like lottery tickets, banned or prohibited
                          magazines, participation in sweepstakes, purchase of
                          bitcoins, payment for callback services, etc
                        </p>
                        <p>
                          • We do not take any responsibility for any loss,
                          damage or injuries suffered or caused to the Customer
                          in connection with the service, quality of goods and
                          services provided by the Merchant Establishment,
                          refusal to accept (conditional acceptance) the PPI by
                          Merchant Establishment and inability (technical
                          issues) to use the PPI at Merchant Establishment
                        </p>
                        <p>
                          • The Customer hereby acknowledges and agrees that if
                          there is no Transaction for a consecutive period of
                          one (1) year on the PPI, subject to validity of the
                          PPI, the same shall be made inactive by us after
                          sending a notice to the Customer. The PPI can only be
                          reactivated by us after validations and requisite due
                          diligence, as stipulated from time to time
                        </p>
                        <p>
                          • The Customer hereby agrees to receive SMS or email
                          alerts from us for all Transactions done using the
                          PPI. The SMS or email alerts from us shall stipulate
                          debit and credit Transactions, balance available or
                          remaining on the PPI or such other information or
                          details as stipulated by us, from time to time
                        </p>
                        <p>
                          • The Customer agrees that we may, at our sole
                          discretion, utilize the services of external service
                          provider(s) or agent(s) on such terms as required or
                          necessary, for provisioning of the services in
                          relation to the PPI
                        </p>
                        <p>
                          • The Customer shall have access to Frequently Asked
                          Questions (“FAQ”) as uploaded by us on our website,
                          from time to time.
                        </p>
                        <p>
                          • The meal Card can be used only for purchasing food
                          and non-alcoholic beverages at eligible merchant
                          locations as defined by regulatory guidelines.
                        </p>
                        <p>
                          • The Meal Card can be reloaded as per the company
                          policy, ensuring it is used for the designated purpose
                          of meal and food purchases.
                        </p>
                        <p>
                          • The Fuel Card can be used exclusively for purchasing
                          fuel and automotive services at designated fuel
                          stations and merchants.
                        </p>
                      </div>

                      <h5 className="c15 mt-6">LOADING LIMITS</h5>

                      <div className="container my-4">
                        <p>
                          <strong>
                            i) Small PPI (with cash loading facility)
                          </strong>
                        </p>
                        <p>
                          • The limit for loading in such Small PPIs will be a
                          maximum of INR 10,000 per month and maximum of INR
                          1,20,000 in a financial year
                        </p>
                        <p>
                          • The Available amount in such PPIs shall not exceed
                          INR 10,000 at any given point of time.
                        </p>
                        <p>
                          • You will be mandatorily required to convert such
                          PPIs into Full-KYC by providing requisite KYC
                          information / documentation as may be prescribed under
                          applicable laws, within a period of 24 months from the
                          date of issue of the PPI. If You fail to complete Your
                          KYC as prescribed, You will not be permitted further
                          credit in Your PPI. However, You will be permitted to
                          use the Available amount in Your PPI.
                        </p>

                        <p>
                          <strong>
                            ii) Small PPI (without cash loading facility)
                          </strong>
                        </p>
                        <p>
                          • The limit for loading in such Small PPIs will be a
                          maximum of INR 10,000 per month and maximum of INR
                          1,20,000 in a financial year
                        </p>
                        <p>
                          • The Available amount in such PPIs shall not exceed
                          INR 10,000 at any given point of time.
                        </p>
                        <p>
                          • You will be allowed to perform debit transactions in
                          such PPIs up to a maximum of INR 10,000 per month.
                        </p>

                        <p>
                          <strong>iii) Full-KYC PPIs</strong>
                        </p>
                        <p>
                          • You will be able to load/ reload such PPIs and the
                          outstanding amount in such PPIs shall not exceed INR
                          2,00,000 at any given time.
                        </p>
                        <p>
                          • You will be able to withdraw cash from such PPIs up
                          to a maximum limit of INR 2,000 per transaction within
                          an overall limit of INR 10,000 per month per PPI
                          across all channels (agents, ATMs, PoS devices, etc.
                          as the case may be).
                        </p>
                        <p>
                          • Within a period of one year, You will be required to
                          undergo KYC either through V-CIP or Biometric.
                        </p>

                        <p>
                          <strong>iv) Gift PPIs</strong>
                        </p>
                        <p>
                          • The maximum value of Your Gift PPI will not exceed
                          INR 10,000
                        </p>
                        <p>• You cannot reload Gift PPIs</p>
                        <p>
                          • You will not be permitted to make cash outs or fund
                          transfers from Your Gift PPIs. However, the funds may
                          be transferred ‘back to source account’ (account from
                          where Gift PPI was loaded) after receiving Your
                          consent.
                        </p>
                        <p>
                          • You can purchase such Gift PPI via debit to their
                          bank accounts and/or credit cards without undertaking
                          a separate KYC process
                        </p>
                        <p>
                          • These PPIs will be revalidated (including through
                          issuance of new PPI) as and when requested by You
                        </p>
                      </div>

                      <h5 className="c15 mt-6">BREACH</h5>

                      <div className="container my-4">
                        <p>
                          • In the event of any breach of these Terms and
                          Conditions by the Customer, we shall have the sole
                          right to forthwith cancel or terminate the PPI without
                          having any liability, claim, demand or dispute against
                          us
                        </p>
                        <p>
                          • The Customer undertakes and agrees to indemnify us
                          against any loss, damage, claim, penalty, cost,
                          charges or expenses (including legal counsel fees)
                          that we may incur and/or suffer, whether directly or
                          indirectly, as a result of any act of omission or
                          commission, fraud, negligence or default or any breach
                          of the Terms and Conditions on the part of the
                          Customer as a holder of PPI
                        </p>
                      </div>

                      <h5 className="c15 mt-6">TERM & TERMINATION</h5>
                      <div className="container my-4">
                        <p>
                          • The PPI shall be valid until the expiry date printed
                          on the face of the PPI
                        </p>
                        <p>
                          • All PPI’s shall have a validity of minimum one (1)
                          year.
                        </p>
                        <p>
                          • The Customer agrees and undertakes to destroy the
                          PPI upon its expiry
                        </p>
                        <p>
                          • The Customer agrees that the PPI shall be defaced by
                          cutting off the top right-hand corner, ensuring that
                          both the hologram and the magnetic strip have been cut
                          and has been destroyed or received by us. The Customer
                          agrees that the Customer shall continue to be liable
                          for any Charges incurred on the PPI prior to its
                          termination, irrespective of the fact whether the
                          Customer has or claims to have destroyed the PPI
                        </p>
                        <p>
                          • We may at our sole discretion terminate the PPI if:
                          <br />➢ The Customer is declared insolvent or in case
                          of death of the Customer
                          <br />➢ The Customer commits breach of any of the
                          terms, conditions, stipulations or its obligations
                          under these Terms and Conditions
                          <br />➢ Any restriction imposed on the Customer by an
                          Order of a competent Court or Order issued by any
                          regulatory or statutory authority in India or any
                          investigating agency
                          <br />➢ The program becomes illegal under the
                          applicable laws, and Regulations. The program is
                          terminated
                        </p>
                        <p>
                          • We, at our sole discretion, reserve the right to,
                          either temporarily or permanently, withdraw the
                          privileges on the PPI and/or terminate the PPI at any
                          time without giving any notice or assigning any reason
                          thereof. In case of a temporary withdrawal, the
                          privileges attached to the PPI shall be reinstated by
                          us at our sole discretion. In case of a permanent
                          withdrawal, we have a right to cancel the PPI
                          permanently. However, it is made distinctly clear that
                          withdrawal (temporary or permanent) shall constitute
                          automatic withdrawal of all benefits, privileges and
                          services attached to the PPI. The Customer agrees that
                          in the event of temporary or permanent withdrawal of
                          the PPI, the Customer shall continue to be fully
                          liable for all Charges incurred on the PPI prior to
                          such withdrawal, together with all other applicable
                          Charges thereon, unless otherwise specified by us
                        </p>
                        <p>
                          • If we temporarily or permanently withdraw the
                          privileges or terminate the PPI, we will, on best
                          effort basis, promptly notify the Customer. We shall
                          not be held liable or responsible for any such delays
                          or laches in receipt of such notification
                        </p>
                        <p>
                          • Upon termination of the PPI as stated above, the
                          balance amount, if any lying in the Account will be
                          refunded back to the source
                        </p>
                      </div>

                      <h5 className="c15 mt-6">CHARGES</h5>

                      <div className="container my-4">
                        <p>
                          ➢ A monthly service fee of INR 500 will be charged
                          after the PPI expiry if the balance remains
                          unutilized. Customers can request a new card by paying
                          the issuance fee.
                        </p>
                        <p>
                          ➢ Fees associated with PPI usage, such as transaction
                          fees or balance inquiry fees, will be communicated at
                          the time of issuance.
                        </p>
                        <p>
                          ➢ List of standard scheduled charges is as follows:
                        </p>
                        <p>
                          • Physical Card issuance and re-issuance - INR 250*
                        </p>
                        <p>• Reactivation of Gift Card – INR 250*</p>
                        <p>
                          • ATM- Financial activity charges (Cash withdrawal) –
                          INR 25
                        </p>
                        <p>
                          • ATM- Non-Financial activity charges (Pin Change,
                          Balance enquiry, Mini Statement etc.) - INR 15
                          inclusive of tax
                        </p>
                        <p>
                          • Surcharge on Industry Program : Government - 2.5%*
                          or INR 10* whichever is higher
                        </p>
                        <p>• Surcharge on Industry Program : Fuel – 1%*</p>
                        <p>
                          • Surcharge on Industry Program : Railways - INR 10*
                        </p>
                        <p>* Excluding taxes</p>
                        <p>
                          EnKash at its sole discretion may waive any charge(s)
                          completely or partially. The above charges are subject
                          to change from time to time based on the discretion of
                          EnKash. The surcharge may differ depending on the
                          acquirer and prevailing rates.
                        </p>
                        <p>
                          ➢ Service Charges on specific types of Transactions.
                          The method of computation of such Charges will be as
                          notified from time to time
                        </p>
                        <p>
                          ➢ Charges shall be non-refundable, non-transferrable
                          and non-assignable in nature.
                        </p>
                        <p>
                          ➢ All Charges, in the absence of manifest error, shall
                          be final and binding on the Customer and shall be
                          conclusive in nature
                        </p>
                        <p>
                          ➢ All statutory taxes including goods and service tax,
                          imposts, duties (of any description whatsoever) as may
                          be levied from time to time by Government of India or
                          other competent authority in respect of or in
                          connection with the PPI, shall be borne by the
                          Customer
                        </p>
                        <p>
                          ➢ All Charges related to the PPI will be debited from
                          the Account, as may be levied from time to time. The
                          Customer shall become liable to pay as soon as a
                          charge has been incurred by use of the PPI
                        </p>
                      </div>

                      <h5 className="c15 mt-6">CONTACT INFORMATION</h5>

                      <p className="c3 pb-3">
                        <span className="c15">
                          For any queries, customers can contact Nehat Tech
                          Solutions Private Limited at:
                          <ul>
                            <li>Phone: +91-85304-90475</li>
                            <li>Email: support@enkash.com</li>
                          </ul>
                        </span>
                      </p>
                      <h5 className="c15 mt-6">LOST, STOLEN OR MISUSED PPI</h5>

                      <div className="container my-4">
                        <p>
                          • If the PPI is lost or stolen, the Customer must
                          immediately report such loss or theft to Customer Care
                          Centre and request for immediate suspension of the PPI
                        </p>
                        <p>
                          • The Customer acknowledges that once the PPI is
                          reported lost, stolen or damaged, such PPI cannot be
                          used again, even if found subsequently
                        </p>
                        <p>
                          • The Customer is responsible for the security of the
                          PPI and shall take all steps towards ensuring that the
                          PPI is not mis-used. In the event we determine or
                          receive any information that the Customer has
                          neglected, refused or failed to take steps as
                          indicated above, in case of loss, theft or destruction
                          of the PPI, we reserve the sole right to cancel or
                          terminate such PPI
                        </p>
                        <p>
                          • No liability shall accrue upon the Customer for any
                          unauthorized transactions done on the PPI, after such
                          PPI has been reported lost, stolen or damaged by the
                          Customer. All liabilities accrued on the PPI, post
                          reporting by the Customer shall be borne by us.
                          However, in case of any dispute relating to the time
                          of reporting and/or transaction(s) made on the PPI
                          post reporting of the PPI being lost, stolen or
                          misused, all our decisions shall be final and binding
                          on the Customer
                        </p>
                      </div>

                      <h5 className="c15 mt-6">EXCLUSION OF LIABILITY</h5>
                      <div className="container my-4">
                        <p>
                          • We shall be under no liability or responsibility to
                          the Customer or any third party, in respect of any
                          special, indirect, incidental, consequential, punitive
                          or exemplary loss or damage including, but not limited
                          to, lost profits in connection with this arrangement
                        </p>
                      </div>

                      <h5 className="c15 mt-6">DISPUTED TRANSACTIONS</h5>
                      <div className="container my-4">
                        <p>
                          • Any charge or Transaction slip or other payment
                          requisition received by us for payment shall be
                          conclusive proof of such charge, unless the PPI is
                          lost, stolen or fraudulently misused and evidenced by
                          the Customer
                        </p>
                        <p>
                          • All disputed Transactions in relation to the PPI
                          shall be required to be raised with our Customer Care
                          Centre, within fifteen (15) Business Days from the
                          date of the disputed Transaction. The Customer
                          acknowledges that any request, after fifteen (15)
                          Business Days from the date of the disputed
                          Transaction shall not be accepted by us
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        QUALITY OF GOODS AND SERVICES
                      </h5>
                      <div className="container my-4">
                        <p>
                          • Any dispute with or complaint against any Merchant
                          Establishment regarding any goods purchased or
                          services availed must be directly resolved by the
                          Customer with the Merchant Establishment.
                        </p>
                      </div>

                      <h5 className="c15 mt-6">DISCLOSURES</h5>
                      <div className="container my-4">
                        <p>
                          • The Customer acknowledges that the information on
                          his/her usage of Prepaid Card is shared with any other
                          Bank or financial or statutory or regulatory
                          authorities or entities that provide corporate
                          facilities to the customer
                        </p>
                        <p>
                          • The Customer acknowledges and agrees that PPI Issuer
                          may report to any other Bank or financial or statutory
                          or regulatory authorities any Customer delinquencies
                          and/or the usage of the Prepaid Card. PPI Issuer shall
                          not be obliged to disclose the details of such Banks
                          or financial or statutory or regulatory authorities to
                          the Customer, including the extent of such disclosure
                        </p>
                        <p>
                          • The Customer hereby authorizes PPI Issuer and its
                          agents to exchange, share or part with all the
                          information relating to the Customer’s details and
                          transaction history with PPI Issuer’s group companies
                          or Affiliates
                        </p>
                        <p>
                          • All disputes arising in relation to these Terms and
                          Conditions shall be governed by and construed in
                          accordance with the laws of India and shall be subject
                          to the exclusive jurisdiction of the Courts or
                          Tribunals at Mumbai in India
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        AMENDMENT OF THE TERMS AND CONDITIONS
                      </h5>
                      <div className="container my-4">
                        <p>
                          • We reserve the sole right to change these Terms and
                          Conditions, features and benefits offered on the PPI,
                          including but not limited to Charges
                        </p>
                        <p>
                          • We shall communicate the amended Terms and
                          Conditions by hosting them on our website{" "}
                          <a href={`${process.env.NEXT_PUBLIC_URL}`}>
                            https://www.enkash.com/
                          </a>{" "}
                          or in any other manner as decided by us
                        </p>
                        <p>
                          • The Customer shall be responsible for regularly
                          reviewing these Terms and Conditions, including
                          amendments thereto as may be posted on our website and
                          shall be deemed to have accepted the amended Terms and
                          Conditions by continuing to use the PPI
                        </p>
                      </div>

                      <h5 className="c15 mt-6">CUSTOMER GRIEVANCE REDRESSAL</h5>
                      <div className="container my-4">
                        <p>
                          • In the event of any dispute or grievance in relation
                          to the PPI and/or these Terms and Conditions, the
                          Customer may contact the Customer Care Centre on
                          details available on the website
                        </p>
                        <p>
                          • In the event the dispute or grievance in relation to
                          the PPI and/or these Terms and Conditions is not
                          adequately addressed or resolved by our Customer Care
                          Centre, the Customer may approach the Nodal Officer,
                          details of which can be found on our website
                        </p>
                        <p>
                          • We agree that all complaints, disputes or grievance
                          raised by the Customer shall be addressed and/or
                          resolved in a time bound manner
                        </p>
                        <p>
                          • The Customer may at any time approach the Banking
                          Ombudsman for the grievance redress. The list of
                          Banking Ombudsman can be found on the RBI website
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center">***** END OF POLICY *****</p>
        </div>

        <div className="enkash-banking-maincontainer" lang="hi">
          <div className=" enkash-blog-detail  ">
            <div className={styles.inner_container}>
              <div className="row">
                <div className="col-md-12">
                  <div className="enkash-term-condtions">
                    <div className={styles.sectionTitle} lang="hi">
                      <DynamicHeading
                        content={[
                          {
                            title: "प्रीपेड इंस्ट्रूमेंट्स नियम और शर्तें",
                            color: "color-equity-blue",
                          },
                        ]}
                        headingTag="h1"
                        className="f-5 text-center"
                      />
                    </div>

                    <section id="ppi-hindi">
                      <div className="container my-4">
                        <p>
                          ये नियम और शर्तें (&quot;नियम और शर्तें&quot;) प्रीपेड
                          पेमेंट इंस्ट्रूमेंट्स/कार्ड्स के प्रावधानों पर लागू
                          होती हैं और उन्हें नियंत्रित करती हैं जो नेहत टेक
                          सॉल्यूशन्स प्राइवेट लिमिटेड (&quot;PPI
                          जारीकर्ता&quot;) द्वारा जारी किए गए प्रीपेड
                          इंस्ट्रूमेंट्स हैं।
                        </p>

                        <p>
                          किसी भी कार्ड का लाभ उठाने के लिए साइन-अप प्रक्रिया
                          पूरी करके, आपको यह माना जाता है कि आपने यहाँ उल्लिखित
                          प्रीपेड इंस्ट्रूमेंट्स जारी करने के लिए हर एक विशिष्ट
                          नियम और शर्त को स्पष्ट रूप से पढ़ा, समझा और स्वीकार
                          किया है, साथ ही हमारी वेबसाइट{" "}
                          <a
                            href={`${process.env.NEXT_PUBLIC_URL}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            https://www.enkash.com/
                          </a>{" "}
                          पर निर्दिष्ट सामान्य नियम और शर्तों को भी जो समय-समय
                          पर संशोधित होती रहती हैं।
                        </p>
                        <p>
                          इस समझौते में, &quot;हम&quot;, &quot;हमारा&quot; या
                          &quot;हमारी&quot; नेहत टेक सॉल्यूशन्स प्राइवेट लिमिटेड
                          को संदर्भित करता है, &quot;आप&quot; या
                          &quot;आपका&quot; प्रीपेड कार्ड खरीदने या उपयोग करने
                          वाले व्यक्ति को संदर्भित करता है।
                        </p>
                      </div>

                      <h5 className="c15 mt-6">परिभाषाएँ</h5>
                      <div className="container my-4">
                        <p>
                          इन नियम और शर्तों में, जब तक कि विपरीत इरादा प्रकट न
                          हो और/या संदर्भ अन्यथा आवश्यक न हो, निम्नलिखित शब्दों
                          द्वारा परिभाषित बड़े अक्षरों वाले शब्दों के वे अर्थ
                          होंगे जो नीचे उन्हें दिए गए हैं:
                        </p>
                        <p>
                          • &quot;खाता&quot; — PPI पर लोड की गई राशि के बराबर
                          खाता शेष के साथ एक प्रीपेड खाते को संदर्भित करता है,
                          ऐसे PPI पर उपलब्ध सीमाओं की निगरानी के उद्देश्य से।
                        </p>
                        <p>
                          • &quot;व्यावसायिक दिन&quot; — रविवार या सार्वजनिक
                          अवकाश के अलावा वह दिन जिस पर बैंक बैंकिंग का व्यवसाय
                          करते हैं (Negotiable Instruments Act, 1881, Section 25
                          के अनुसार)।
                        </p>
                        <p>
                          • &quot;शुल्क&quot; — PPI के उपयोग के लिए हमारे द्वारा
                          लगाई गई लेवी, लागत और शुल्क को दर्शाता है, जो समय-समय
                          पर संशोधित हो सकते हैं।
                        </p>
                        <p>
                          • &quot;ग्राहक&quot; या &quot;धारक&quot; या
                          &quot;आप&quot; — वे व्यक्ति/संस्थाएँ जो PPI
                          प्राप्त/खरीदती हैं और जिन्हें उस PPI पर संग्रहित मूल्य
                          के विरुद्ध उसे रखने और उपयोग करने का अधिकार है।
                        </p>
                        <p>
                          • &quot;ग्राहक सेवा केन्द्र&quot; — ग्राहक के
                          प्रश्न/शिकायतों को संबोधित करने के लिये हमारा संपर्क
                          केन्द्र।
                        </p>
                        <p>
                          • &quot;EDC&quot; / &quot;इलेक्ट्रॉनिक डेटा
                          कैप्चर&quot; मशीन — वह टर्मिनल/प्रिंटर/परिधीय और
                          आवश्यक सॉफ़्टवेयर जिस पर PPI स्वाइप/उपयोग किया जाता
                          है।
                        </p>
                        <p>
                          • &quot;इंटरनेट पेमेंट गेटवे&quot; — इंटरनेट पर PPI
                          उपयोग करके किए गए भुगतानों को ग्राहक प्रमाणीकृत करने
                          पर अधिकृत करने वाला प्रोटोकॉल।
                        </p>
                        <p>
                          • &quot;KYC&quot; — ग्राहक की पहचान और सत्यापन हेतु
                          लागू RBI निर्देशों के अनुरूप अपनायी गई प्रक्रियाएँ।
                        </p>
                        <p>
                          • &quot;मर्चेंट प्रतिष्ठान&quot; — भारत में स्थित
                          भौतिक/ई-कॉमर्स व्यापार जिनके साथ PPI स्वीकार करने का
                          अनुबंध होता है।
                        </p>
                        <p>
                          • &quot;पेमेंट चैनल&quot; — EDC/POS/कियोस्क/इंटरनेट
                          पेमेंट गेटवे/मोबाइल पेमेंट आदि विभिन्न मोड।
                        </p>
                        <p>
                          • &quot;वैयक्ति‍क पहचान संख्या (PIN)&quot; — PPI जारी
                          करते समय ग्राहक को दिया गया संख्यात्मक पासवर्ड।
                        </p>
                        <p>
                          • &quot;POS&quot; — प्वाइंट ऑफ सेल टर्मिनल जहाँ ग्राहक
                          PPI उपयोग कर सकते हैं।
                        </p>
                        <p>
                          • &quot;प्रीपेड इंस्ट्रूमेंट (PPI)&quot; — गिफ्ट
                          कार्ड, मील कार्ड, जनरल पर्पज़ रीलोडेबल कार्ड आदि जैसे
                          प्रीपेड इंस्ट्रूमेंट।
                        </p>
                        <p>
                          • &quot;नियम&quot; — RBI या अन्य सक्षम प्राधिकारियों
                          द्वारा जारी मास्टर निर्देश, सर्कुलर, नियम,
                          दिशा-निर्देश आदि।
                        </p>
                        <p>
                          • &quot;शेड्यूल ऑफ चार्जेस&quot; — हमारी वेबसाइट पर
                          प्रदर्शित फीस/चार्ज का विवरण, जो समय-समय पर बदल सकता
                          है।
                        </p>
                        <p>
                          • &quot;लेनदेन&quot; — किसी भी मर्चेंट प्रतिष्ठान पर
                          PPI का उपयोग कर आरंम्भ किया गया कोई भी भुगतान/लेनदेन।
                        </p>
                        <p>
                          • &quot;Nehat Tech Solutions Private Limited&quot; /
                          &quot;PPI जारीकर्ता&quot; — वह कंपनी जिसका पंजीकृत
                          कार्यालय मुंबई में है और जो PPI जारी करती है।
                        </p>
                        <p>
                          • &quot;सीमाएं&quot; — मास्टर निर्देश में उल्लिखित
                          अधिकतम मान जिन्हें किसी धारक को जारी किया जा सकता है
                          (INR में)।
                        </p>
                      </div>

                      <h5 className="c15 mt-6">पात्रता मानदंड</h5>
                      <div className="container my-4">
                        <p>
                          • केवल वे व्यक्ति/संस्थाएँ जो कानूनी रूप से बाध्यकारी
                          समझौते में प्रवेश करने के योग्य हों, भारत में और केवल
                          भारतीय रुपयों में लेनदेन हेतु कार्ड का उपयोग कर सकती
                          हैं।
                        </p>
                        <p>
                          • कार्ड को पंजीकृत करने/बनाने/उपयोग करने के लिए PPI
                          जारीकर्ता कार्डधारक से नाम, पता, मोबाइल नंबर, ईमेल,
                          जन्मतिथि, पसंदीदा भाषा आदि जैसे व्यक्तिगत विवरण माँग
                          सकता है।
                        </p>
                        <p>
                          • किसी भी प्रकार की जानबूझकर या आकस्मिक पहचान/आय/अन्य
                          जानकारियों का गलत प्रस्तुत करना वर्जित है।
                        </p>
                        <p>
                          • PPI जारीकर्ता कार्डधारक की पहचान सत्यापित करने हेतु
                          आगे की जाँच कर सकता है; कार्डधारक ज़िम्मेदार है कि दी
                          गई जानकारी सत्य, सटीक और पूर्ण हो।
                        </p>
                      </div>

                      <h5 className="c15 mt-6">PPI का जारी करना और उपयोग</h5>
                      <div className="container my-4">
                        <p>• PPI जारीकर्ता का विशेष संपत्ति होगा।</p>
                        <p>
                          • PPI केवल भारत के क्षेत्र में और केवल भारतीय रुपयों
                          में मान्य होगा; विदेशी मुद्रा में या विदेश में उपयोग
                          नहीं किया जा सकेगा।
                        </p>
                        <p>
                          • ग्राहक को PPI मिलने पर तुरंत इसके पिछले हिस्से पर
                          हस्ताक्षर करना होगा (यदि कार्ड फॉर्म में हो)।
                          हस्ताक्षर की अनुपस्थिति या हस्ताक्षर मेल न खाने पर हम
                          किसी भी लेनदेन को अस्वीकार/रद्द कर सकते हैं।
                        </p>
                        <p>
                          • PPI किसी भी परिस्थिति में किसी अन्य व्यक्ति या तृतीय
                          पक्ष को हस्तांतरित नहीं किया जा सकता।
                        </p>
                        <p>
                          • PPI पर रखे किसी भी शेष पर हम ब्याज देने के लिए
                          उत्तरदायी नहीं होंगे।
                        </p>
                        <p>
                          • ग्राहक PIN को किसी से प्रकट नहीं करेगा; PIN के
                          अनाधिकृत प्रकटन/ PPI के अनधिकृत उपयोग के परिणामों के
                          लिए ग्राहक जिम्मेदार रहेगा।
                        </p>
                        <p>
                          • यदि ग्राहक PIN भूल जाता/गई तो PIN रीजनरेट करने के
                          लिये वेबसाइट/मॉबाइल एप या उपलब्ध विकल्प पर जाना होगा।
                        </p>
                        <p>
                          • ग्राहक को PPI की वैधता समाप्ति से पहले उसमें उपलब्ध
                          शेष राशि उपयोग करनी चाहिए; समाप्ति के बाद नवीनीकरण
                          हेतु हमसे संपर्क किया जा सकता है — अन्यथा शेष राशि
                          नियमानुसार किसी निधि में ट्रांसफर कर दी जाएगी।
                        </p>
                        <p>
                          • ग्राहक हर लेनदेन के चार्ज स्लिप्स पर हस्ताक्षर करेगा
                          और उन्हें रखेगा; 45 व्यावसायिक दिनों के भीतर कॉपी की
                          मांग होने पर अतिरिक्त शुल्क लिया जा सकता है।
                        </p>
                        <p>
                          • मर्चेंट द्वारा लगाए गए किसी भी अतिरिक्त चार्ज को
                          ग्राहक मर्चेंट से निपटाएगा; हम मर्चेंट द्वारा लगाए गए
                          शुल्कों के लिये उत्तरदायी नहीं होंगे।
                        </p>
                        <p>
                          • किसी भी रिफंड/समायोजन को मैन्युअल रूप से प्रोसेस
                          किया जाएगा और नियमों व आंतरिक नीति के अनुसार सत्यापन
                          के बाद ही खाते में क्रेडिट किया जाएगा।
                        </p>
                        <p>
                          • ग्राहक PPI का अवैध या गलत उपयोग नहीं करेगा; नियमों
                          के उल्लंघन पर PPI जारीकर्ता द्वारा कार्रवाई की जा सकती
                          है।
                        </p>
                        <p>
                          • PPI का उपयोग कुछ वर्जित चीजों (लॉटरी, प्रतिबंधित
                          पत्रिकाएँ, बिटकॉइन खरीद, कॉल-बैक सेवाएँ आदि) के लिये
                          नहीं किया जा सकता।
                        </p>
                        <p>
                          • मील कार्ड केवल पात्र मर्चेंट स्थानों पर भोजन और
                          गैर-अल्कोहलिक पेय हेतु उपयोग किए जा सकते हैं; फ्यूल
                          कार्ड विशिष्ट ईंधन स्टेशनों पर ईंधन/ऑटोमोटिव सेवाओं के
                          लिए ही उपयोग होंगे।
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        लोडिंग सीमाएँ (Loading Limits)
                      </h5>
                      <div className="container my-4">
                        <p>
                          <strong>
                            i) छोटे PPI (नकद लोडिंग सुविधा के साथ)
                          </strong>
                        </p>
                        <p>
                          • मासिक लोड सीमा: अधिकतम INR 10,000; वार्षिक (वित्तीय)
                          सीमा: अधिकतम INR 1,20,000।
                        </p>
                        <p>
                          • किसी भी समय उपलब्ध राशि INR 10,000 से अधिक नहीं
                          होगी।
                        </p>
                        <p>
                          • जारी करने की तारीख से 24 महीनों के भीतर आवश्यक KYC
                          जानकारी उपलब्ध कराकर इन्हें फुल-KYC में बदलना अनिवार्य
                          है; विफलता पर आगे क्रेडिट की अनुमति नहीं होगी पर
                          मौजूदा शेष का उपयोग किया जा सकेगा।
                        </p>

                        <p>
                          <strong>
                            ii) छोटे PPI (नकद लोडिंग सुविधा के बिना)
                          </strong>
                        </p>
                        <p>
                          • मासिक लोड सीमा: अधिकतम INR 10,000; वार्षिक सीमा: INR
                          1,20,000।
                        </p>
                        <p>
                          • किसी भी समय उपलब्ध राशि INR 10,000 से अधिक नहीं
                          होगी।
                        </p>
                        <p>
                          • ऐसे PPI पर प्रतिमाह अधिकतम INR 10,000 तक डेबिट
                          लेनदेन की अनुमति होगी।
                        </p>

                        <p>
                          <strong>iii) फुल-KYC PPI</strong>
                        </p>
                        <p>
                          • कुल अधिकतम आउटस्टैंडिंग राशि किसी भी समय INR
                          2,00,000 से अधिक नहीं होगी।
                        </p>
                        <p>
                          • नकद निकासी प्रति लेनदेन अधिकतम INR 2,000 तक और कुल
                          मिलाकर प्रति माह INR 10,000 तक (सभी चैनलों पर) मान्य
                          होगी।
                        </p>
                        <p>
                          • एक वर्ष के भीतर V-CIP या बायोमेट्रिक के माध्यम से
                          KYC आवश्यक होगा।
                        </p>

                        <p>
                          <strong>iv) गिफ्ट PPI</strong>
                        </p>
                        <p>• अधिकतम मूल्य INR 10,000 से अधिक नहीं होगा।</p>
                        <p>
                          • गिफ्ट PPI रीलोडेबल नहीं होते; कैश आउट/फंड ट्रांसफर
                          की अनुमति नहीं है (सिर्फ़ &apos;वापस स्रोत खाते&apos;
                          में ट्रांसफर हो सकता है सेवा के नियमों के अनुसार)।
                        </p>
                        <p>
                          • इन्हें बैंक डेबिट/क्रेडिट कार्ड से खरीदने पर अलग KYC
                          की आवश्यकता नहीं होती।
                        </p>
                      </div>

                      <h5 className="c15 mt-6">उल्लंघन (Breach)</h5>
                      <div className="container my-4">
                        <p>
                          • ग्राहक द्वारा इन नियमों/शर्तों के उल्लंघन की स्थिति
                          में, हमें बिना किसी देयता के तुरंत PPI रद्द/समाप्त
                          करने का अधिकार होगा।
                        </p>
                        <p>
                          • ग्राहक हमें किसी भी हानि/दावे/खर्च (कानूनी व्यय
                          सहित) से क्षतिपूर्ति करने हेतु पूर्ण रूप से उत्तरदायी
                          होगा यदि उल्लंघन/धोखाधड़ी/लापरवाही ग्राहक के कारण हुई
                          हो।
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        अवधि और समाप्ति (Term & Termination)
                      </h5>
                      <div className="container my-4">
                        <p>
                          • PPI तब तक वैध होगा जब तक उसके ऊपर मुद्रित समाप्ति
                          तिथि होती है।
                        </p>
                        <p>• सभी PPI की न्यूनतम अवधि एक (1) वर्ष होगी।</p>
                        <p>
                          • समाप्ति पर ग्राहक PPI नष्ट करने के लिये सहमत है;
                          ग्राहक PPI समाप्ति से पहले हुए किसी भी शुल्क के लिये
                          उत्तरदायी रहेगा।
                        </p>
                        <p>
                          • हम अपने विवेक से PPI को समाप्त/निकाल/निष्क्रिय कर
                          सकते हैं (उदाहरण: दिवालिया, मृत्यु, कानूनी प्रतिबंध,
                          कार्यक्रम समाप्ति आदि)।
                        </p>
                        <p>
                          • अस्थायी वापसी या स्थायी रद्दीकरण की स्थिति में हम
                          ग्राहक को सूचित करने का सर्वोत्तम प्रयास करेंगे पर
                          किसी देरी के लिये उत्तरदायी नहीं होंगे।
                        </p>
                        <p>
                          • समाप्ति पर शेष राशि स्रोत खाते को वापस कर दी जाएगी
                          जहां लागू हो।
                        </p>
                      </div>

                      <h5 className="c15 mt-6">शुल्क (Charges)</h5>
                      <div className="container my-4">
                        <p>
                          • यदि बैलेंस उपयोग नहीं किया जाता और PPI की वैधता
                          समाप्त हो जाती है तो माहान्तः INR 500 सेवा शुल्क वसूला
                          जाएगा; नया कार्ड जारी करने के लिये जारीकर्ता शुल्क का
                          भुगतान करना होगा।
                        </p>
                        <p>
                          • PPI उपयोग से सम्बंधित शुल्क (लेनदेन शुल्क, बैलेंस
                          पूछताछ शुल्क आदि) जारी करने के समय सूचित किये जाएंगे।
                        </p>
                        <p>
                          • मानक चार्जेज की सूची (उदाहरण): भौतिक कार्ड
                          जारी/री-इश्यू INR 250*, गिफ्ट कार्ड रिएक्टिवेशन INR
                          250*, ATM कैश विड्रॉल INR 25, ATM नॉन-फाइनेंशियल INR
                          15 (कर सहित), आदि।
                        </p>
                        <p>
                          • उपर्युक्त शुल्क करों को छोड़कर हैं; EnKash अपने
                          विवेक से शुल्क माफ कर सकता है और ये शुल्क समय-समय पर
                          बदल सकते हैं।
                        </p>
                        <p>
                          • सभी शुल्क गैर-रिफंडेबल, गैर-ट्रांसफरेबल और अंतिम
                          होंगे।
                        </p>
                        <p>
                          • सभी लागू टैक्स (GST आदि) ग्राहक द्वारा वहन किये
                          जाएंगे।
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        संपर्क जानकारी (Contact Information)
                      </h5>
                      <div className="container my-4">
                        <p>• फोन: +91-85304-90475</p>
                        <p>
                          • ईमेल:{" "}
                          <a href="mailto:support@enkash.com">
                            support@enkash.com
                          </a>
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        खोया, चोरी या दुरुपयोग किया गया PPI
                      </h5>
                      <div className="container my-4">
                        <p>
                          • PPI खोने/चोरी होने की स्थिति में ग्राहक को तुरंत
                          ग्राहक सेवा केन्द्र को रिपोर्ट कर तत्काल निलंबन का
                          अनुरोध करना चाहिए।
                        </p>
                        <p>
                          • रिपोर्ट करने के बाद वह PPI पुनः उपयोग के लिए उपयुक्त
                          नहीं होगा भले ही वह बाद में मिल जाए।
                        </p>
                        <p>
                          • रिपोर्ट के समय के बाद हुए अनाधिकृत लेनदेन की देयता
                          ग्राहक पर नहीं होगी; पर रिपोर्टिंग के समय/लेनदेन के
                          समय में विवाद होने पर हमारे निर्णय अंतिम और बाध्यकारी
                          होंगे।
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        दायित्व की छूट (Exclusion of Liability)
                      </h5>
                      <div className="container my-4">
                        <p>
                          • हम किसी भी विशेष, अप्रत्यक्ष, आकस्मिक, परिणामी,
                          दंडात्मक या असाधारण हानि (जैसे खोया हुआ लाभ) के लिए
                          उत्तरदायी नहीं होंगे।
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        विवादित लेनदेन (Disputed Transactions)
                      </h5>
                      <div className="container my-4">
                        <p>
                          • भुगतान के लिये प्राप्त कोई भी शुल्क/लेनदेन स्लिप
                          प्रमाण होगी, जब तक ग्राहक यह साबित न कर दे कि PPI खो
                          गया/चोरी हुआ/धोखाधड़ी से उपयोग हुआ।
                        </p>
                        <p>
                          • किसी भी विवादित लेनदेन को 15 व्यावसायिक दिनों के
                          भीतर हमारे ग्राहक सेवा केन्द्र पर उठाना आवश्यक है; 15
                          दिनों के बाद अनुरोध स्वीकार नहीं किया जाएगा।
                        </p>
                      </div>

                      <h5 className="c15 mt-6">माल और सेवाओं की गुणवत्ता</h5>
                      <div className="container my-4">
                        <p>
                          • किसी भी मर्चेंट के साथ होने वाले विवाद/शिकायतों का
                          समाधान ग्राहक को सीधे मर्चेंट के साथ करना होगा; हम
                          मर्चेंट द्वारा प्रदान की गई गुणवत्ता/सेवा के लिए
                          उत्तरदायी नहीं होंगे।
                        </p>
                      </div>

                      <h5 className="c15 mt-6">प्रकटीकरण (Disclosures)</h5>
                      <div className="container my-4">
                        <p>
                          • ग्राहक स्वीकार करता है कि प्रीपेड कार्ड के उपयोग तथा
                          उसकी जानकारी अन्य बैंक/वित्तीय/वैधानिक/नियामक
                          प्राधिकारी या वे संस्थाएँ जिनके साथ कॉर्पोरेट सुविधाएँ
                          साझा की जाती हैं, के साथ साझा की जा सकती है।
                        </p>
                        <p>
                          • ग्राहक सहमत है कि PPI जारीकर्ता किसी भी अन्य
                          बैंक/वित्तीय/नियामक प्राधिकारी को ग्राहक की देनदारियों
                          और/या कार्ड उपयोग की रिपोर्ट कर सकता है; जारीकर्ता को
                          उन संस्थाओं के विवरण प्रकाशित करने का दायित्व नहीं
                          होगा।
                        </p>
                        <p>
                          • ग्राहक PPI जारीकर्ता और उसके एजेंटों को ग्राहक के
                          विवरण और लेनदेन इतिहास से संबंधित जानकारी समूह
                          कंपनियों/संबद्ध कंपनियों के साथ
                          साझा/विनिमय/आदान-प्रदान करने के लिए अधिकृत करता है।
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        शर्तों में संशोधन (Amendment of the Terms and
                        Conditions)
                      </h5>
                      <div className="container my-4">
                        <p>
                          • हम अकेले के विवेक पर इन नियमों/शर्तों, सुविधाओं और
                          लाभों (शुल्क सहित) को बदलने का अधिकार सुरक्षित रखते
                          हैं।
                        </p>
                        <p>
                          • संशोधित नियम हमारी वेबसाइट{" "}
                          <a
                            href={`${process.env.NEXT_PUBLIC_URL}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            https://www.enkash.com/
                          </a>{" "}
                          पर पोस्ट करके या किसी अन्य तरीके से सूचित किए जाएंगे।
                        </p>
                        <p>
                          • ग्राहक नियमित रूप से इन नियमों की समीक्षा करने के
                          लिए उत्तरदायी होगा; वेबसाइट पर पोस्ट किए गए संशोधनों
                          को स्वीकार किए जाने का अर्थ है कि ग्राहक वे संशोधन
                          स्वीकार करता है।
                        </p>
                      </div>

                      <h5 className="c15 mt-6">
                        ग्राहक शिकायत निवारण (Customer Grievance Redressal)
                      </h5>
                      <div className="container my-4">
                        <p>
                          • किसी भी विवाद/शिकायत की स्थिति में ग्राहक ग्राहक
                          सेवा केन्द्र से संपर्क कर सकता है (विवरण वेबसाइट पर
                          उपलब्ध)।
                        </p>
                        <p>
                          • यदि ग्राहक सेवा केन्द्र से समाधान संतोषजनक नहीं होता
                          है तो ग्राहक नोडल अधिकारी से संपर्क कर सकता है (विवरण
                          वेबसाइट पर)।
                        </p>
                        <p>
                          • ग्राहक ग्राहक द्वारा उठाई गई शिकायतों/विवादों को
                          समयबद्ध तरीके से निवारण किये जाने का हकदार है।
                        </p>
                        <p>
                          • ग्राहक किसी भी समय बैंकिंग लोकपाल से संपर्क कर सकता
                          है; बैंकिंग लोकपाल की सूची RBI की वेबसाइट{" "}
                          <a
                            href="http://www.rbi.org.in/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            www.rbi.org.in
                          </a>{" "}
                          पर उपलब्ध है।
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center">***** नीति का अंत *****</p>
      </div>
    </>
  )
}

export default CustomerOnboarding
