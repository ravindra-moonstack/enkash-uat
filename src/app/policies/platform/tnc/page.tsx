import React from "react"
import styles from "./page.module.scss"
import { Metadata } from "next"
import generateMetaData from "@/src/common/utils/metaData"
import { CustomBreadcrumb, DynamicHeading } from "@/src/components"
import Link from "next/link"

export const metadata: Metadata = generateMetaData({
  title: "Terms and Conditions (Platform): EnKash",
  description:
    "Know the usage guidelines for accessing and operating on the EnKash platform.",
  alternates: {
    canonical: `${process.env.URL}/policies/platform/tnc`,
  },
})

const CustomerOnboarding = () => {
  return (
    <>
      <div className={styles.parent_container}>
        <div className="max-w-auto  position-relative no-pointer">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Policies", url: "/#" },
                {
                  name: "Platform",
                  url: "/policies/platform",
                },
                {
                  name: "Terms and Conditions ",
                  url: "/policies/platform/tnc",
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
                            title: "General terms of use",
                            color: "color-equity-blue",
                          },
                        ]}
                        headingTag="h1"
                        className="f-5 text-center"
                      />
                    </div>
                    <div className="word-to-html-null mb-5">
                      <h5 className="c15 mt-6 pb-4">
                        Last Updated On: 25th August 2025
                      </h5>
                      <p>
                        <strong>
                          This document/agreement/understanding is a
                          computer-generated electronic record published in
                          terms of Rule 3 of the Information Technology
                          (Intermediary Guidelines and Digital Media Ethics
                          Code) Rules, 2021 (amended from time to time) read
                          with Information Technology Act, 2000 (amended from
                          time to time) and does not require any physical or
                          digital signatures.
                        </strong>
                      </p>

                      <p>
                        These terms including annexures and links herein, apply
                        to your use of
                        <Link href={`${process.env.URL}/`} target="_blank">
                          www.EnKash.com
                        </Link>
                        , any other linked pages, API keys, features, content or
                        application services (including but without limitation
                        to any mobile application, mobile site services) (
                        <strong>“Website”</strong>) owned and operated by
                        <strong>Nehat Tech Solutions Private Limited</strong>
                        (‘EnKash’) which is the holding company of
                        <strong>
                          Nehat Business Services Private Limited (‘NBSPL’)
                        </strong>
                        , a company incorporated under the provisions of the
                        Companies Act, 2013 and having its registered office at
                        <em>
                          91, Springboard 175, Kagalwala House, 2nd Floor,
                          Kalina, Santacruz (E), Mumbai, Maharashtra, India -
                          400098
                        </em>
                        .
                      </p>
                      <p>
                        “<strong>We</strong>”, “<strong>Us</strong>”, “
                        <strong>Our</strong>” shall refer to EnKash or NBSPL
                        based on the relevant Services as applicable.
                      </p>
                      <p>
                        “<strong>You</strong>”, “<strong>Yours</strong>”, “
                        <strong>Yourself</strong>”, “<strong>Merchant</strong>”
                        refers to any non-registered individual or corporate
                        body, registered user of EnKash/NBSPL including but not
                        limited to EnKash merchants.
                      </p>
                      <div>
                        <p>
                          “<strong>Applicable Laws</strong>” shall mean (i) any
                          law, statute, rule, regulation, order, circular,
                          decree, directive, judgment, decision or other similar
                          mandate of any applicable central, national, state or
                          local governmental/regulatory Authority having
                          competent jurisdiction and force of law over, or
                          applicable to You, us or the subject matter in
                          question, as may be amended from time to time, and
                          (ii) shall without limitation include any
                          notification, circular, directive or other similar
                          instruction issued by the ‘Financial Sector
                          Regulators’ including but not limited to the Reserve
                          Bank of India (RBI) and/or rules, regulations, roles,
                          responsibilities and processes as defined by NPCI on
                          their website
                          <a href="https://www.npci.org.in" target="_blank">
                            www.npci.org.in
                          </a>
                          .
                        </p>

                        <p>
                          Before You may use the Website, You must read all of
                          these General Terms of Use and the Specific Terms of
                          Use (defined below) (hereinafter together referred to
                          as the <strong>“Terms”</strong>) and the Privacy
                          Policy provided on the Website.
                        </p>

                        <p>
                          By using EnKash and its affiliates’ products,
                          software, services, and the Website or by availing any
                          products offered by EnKash’s partner
                          institutions/lending partners, banks, financial
                          institutions, NPCI, and technology service providers,
                          card payment networks, (
                          <strong>“Facility Providers”</strong>) or third
                          parties (<strong>“Services”</strong>), You understand
                          and agree that EnKash will treat Your use of the
                          Services as acceptance of these Terms from such point
                          of usage. You agree that EnKash reserves the right to
                          update the Services from time to time.
                        </p>

                        <p>
                          You acknowledge and agree that all references to
                          <strong>“EnKash”</strong> shall mean the EnKash
                          affiliate for the Specific Terms of Use. You further
                          agree that any claims relating to or arising from the
                          Specific Terms of Use shall be brought solely against
                          such EnKash affiliates providing Services. EnKash
                          shall have no liability in respect of the same.
                        </p>

                        <p>
                          You may not use the Services if you do not accept the
                          Terms. If You do not agree to be bound by these Terms
                          and the Privacy Policy, You may not use the Website in
                          any way.
                        </p>

                        <p>
                          It is strongly recommended for You to return to this
                          page periodically to review the most current version
                          of the Terms in force. EnKash reserves the right at
                          any time, at its sole discretion, to change or
                          otherwise modify the Terms without prior notice, and
                          Your continued access or use of the Website signifies
                          Your assent/ratification of the updated or modified
                          Terms. If You object to these Terms or any subsequent
                          modifications to these Terms in any way, Your only
                          recourse is to immediately terminate use of the
                          Website.
                        </p>

                        <p>
                          We may require You to agree to additional terms (if
                          any) in connection with specific services that you may
                          avail from time to time. The Services provided by
                          EnKash through the Website are available and are
                          appropriate only for use in India.
                        </p>
                      </div>
                      <h5 className="c15 mt-6">1. PROPRIETARY RIGHTS</h5>
                      <div className="container mt-4">
                        <p>
                          <strong>1.1.</strong> You acknowledge and agree that
                          <strong>EnKash</strong> owns all rights, title and
                          interest in and to the Services, including any
                          intellectual property rights which subsist in the
                          Services (whether registered or not). You further
                          acknowledge that the Services may contain information
                          which is designated confidential by EnKash and that
                          You shall not disclose such information without
                          EnKash&apos;s prior written consent.
                        </p>

                        <p>
                          <strong>1.2.</strong> EnKash grants You a personal,
                          non-exclusive, non-transferable, limited privilege to
                          avail the Services and make personal use of the
                          Website and/or the Services. This license does not
                          confer any right to:
                        </p>

                        <ul className="list-unstyled ms-3">
                          <li>
                            - Download, copy, create a derivative work, modify,
                            reverse engineer, reverse assemble or otherwise
                            attempt to discover any source code;
                          </li>
                          <li>
                            - Sell, assign, sub-license, grant a security
                            interest in or otherwise transfer any right in the
                            Services;
                          </li>
                          <li>
                            - Use any of EnKash&apos;s trade names, trademarks,
                            service marks, logos, domain names, and other
                            distinctive brand features;
                          </li>
                          <li>
                            - Remove, obscure, or alter any proprietary rights
                            notices (including trademark and copyright notices)
                            which may be affixed to or contained within the
                            Services;
                          </li>
                          <li>- Copy or transmit any of the Services.</li>
                        </ul>
                      </div>

                      <h5 className="c15 mt-6">
                        2. USAGE OF THE WEBSITE AND USE OF SERVICES BY THE USER
                      </h5>
                      <div className="container my-4">
                        <p>
                          <strong>2.1.</strong> You shall register to become a
                          user of the Website only if You are of the age of 18
                          or above and can enter into binding contracts as per
                          Applicable Laws. You are responsible for maintaining
                          the secrecy of Your passwords, login and account
                          information. You will be responsible for all use of
                          the Website and/ or Services by You and anyone using
                          Your password and login information (with or without
                          our permission). You are responsible for maintaining
                          the confidentiality of any login information and
                          secure access credentials associated with Your EnKash
                          account. Accordingly, You are responsible for all
                          activities that occur under Your account/in using Your
                          secure credentials and EnKash shall not be liable for
                          any such change or action performed.
                        </p>

                        <p>
                          <strong>2.2.</strong> You also agree to provide true,
                          accurate, current and complete information about
                          Yourself as and when prompted by the Website. If You
                          provide any information that is untrue, inaccurate,
                          not updated or incomplete, or EnKash has reasonable
                          grounds to suspect so, EnKash shall have the right to
                          suspend or terminate Your account and/or refuse any
                          and all current or future use of the Website or
                          Services.
                        </p>

                        <p>
                          <strong>2.3.</strong> By making use of the Website,
                          and furnishing Your contact details, You hereby agree
                          that You are interested in knowing more or availing
                          products, services that EnKash or any third party may
                          offer/provide/share with You via telephone, SMS,
                          email, WhatsApp, or other digital/physical modes.
                        </p>

                        <p>
                          <strong>2.4.</strong> You specifically understand and
                          agree that by using the Website You authorize EnKash,
                          its affiliates, partners and third parties to contact
                          You for follow up calls in relation to the Services
                          provided through the Website and/or for offering other
                          products or services. You consent to receive
                          communications even if registered under DND/NCPR list.
                        </p>

                        <p>
                          <strong>2.5.</strong> You agree and authorize EnKash
                          to share Your information and make Your details
                          available to its partner banks, financial
                          institutions, affiliates, vendors, service
                          providers/Facility Providers and third parties, as
                          required for providing Services.
                        </p>

                        <p>
                          <strong>2.6.</strong> For undertaking any payment
                          and/or financial transaction through the Website,
                          EnKash may undertake KYC due diligence measures. You
                          agree that You are obliged to provide such KYC details
                          as per Applicable Laws.
                        </p>

                        <p>
                          <strong>2.7.</strong> You shall provide necessary KYC
                          documents to enable EnKash to conduct due diligence.
                          EnKash reserves the right to share such documents with
                          Facility Providers or government authorities.
                        </p>

                        <p>
                          <strong>2.8.</strong> EnKash may demand additional KYC
                          documents at its discretion. Failure to provide such
                          documents may lead to suspension of Services.
                        </p>

                        <p>
                          <strong>2.9.</strong> EnKash shall not be responsible
                          for payee disputes or third-party claims. You
                          indemnify EnKash for any obligations arising thereof.
                        </p>

                        <p>
                          <strong>2.10.</strong> You declare that You or Your
                          affiliates are not Politically Exposed Persons. If
                          this changes, You must notify EnKash immediately.
                        </p>

                        <p>
                          <strong>2.11.</strong> You may be required to provide
                          consent for collection and processing of Your Personal
                          Information (PI). EnKash shall follow industry
                          practices for data protection but shall not be liable
                          for claims arising from such transactions.
                        </p>

                        <p>
                          <strong>2.12.</strong> You agree not to use the
                          Website for unlawful or forbidden purposes. EnKash may
                          suspend or restrict access at its sole discretion.
                        </p>

                        <p>
                          <strong>2.13.</strong> You are prohibited from
                          posting/transmitting unlawful, obscene, defamatory,
                          pornographic, virus-infected or impersonating content
                          through this Website.
                        </p>

                        <p>
                          <strong>2.14.</strong> You represent and warrant that:
                          <ul className="ms-4">
                            <li>
                              (a) You are duly incorporated under the laws of
                              Your jurisdiction.
                            </li>
                            <li>
                              (b) You have legal capacity to enter into these
                              Terms.
                            </li>
                            <li>
                              (c) Execution of these Terms has been authorized
                              by necessary actions.
                            </li>
                            <li>
                              (d) These Terms are legally valid and binding.
                            </li>
                            <li>
                              (e) You shall not engage in crypto or virtual
                              currency activities.
                            </li>
                          </ul>
                        </p>

                        <p>
                          <strong>2.15.</strong> You further covenant and agree
                          that:
                          <ul className="ms-4">
                            <li>
                              (a) Your use of Services is solely for bona fide
                              business activities.
                            </li>
                            <li>
                              (b) Your use corresponds to registered categories
                              only.
                            </li>
                            <li>
                              (c) You shall not resell or assign Services to
                              third parties.
                            </li>
                            <li>
                              (d) Your use does not facilitate unlawful or
                              fraudulent activities.
                            </li>
                            <li>
                              (e) You shall not deal in prohibited
                              products/services.
                            </li>
                            <li>
                              (f) You hold informed consent of Your payees for
                              data sharing with EnKash.
                            </li>
                          </ul>
                        </p>

                        <p>
                          <strong>2.16.</strong> EnKash shall only be liable for
                          acts or omissions solely and directly attributable to
                          itself.
                        </p>

                        <p>
                          <strong>2.17.</strong> You shall take all necessary
                          steps to facilitate integration of EnKash’s solutions
                          with Your platform.
                        </p>

                        <p>
                          <strong>2.18.</strong> You shall assist EnKash by
                          furnishing KYC, transaction records, invoices or proof
                          of transactions to authorities upon request. Records
                          shall be retained for 10 years.
                        </p>

                        <p>
                          <strong>2.19.</strong> You shall not:
                          <ul className="ms-4">
                            <li>
                              (i) Describe yourself as agent or representative
                              of EnKash/Facility Provider;
                            </li>
                            <li>
                              (ii) Represent that You have rights to offer
                              Services of EnKash/Facility Provider;
                            </li>
                            <li>
                              (iii) Make any representations or warranties
                              binding EnKash/Facility Provider.
                            </li>
                          </ul>
                        </p>
                      </div>

                      <h5 className="c15 mt-6">3. Payment</h5>

                      <div className="container my-4">
                        <p>
                          <strong>3.1.</strong> Applicable fees for the
                          provision of Services shall be levied by EnKash from
                          time to time. You agree that the fees shall be charged
                          according to the manner, rates and frequency
                          determined by EnKash. EnKash reserves the right to
                          update the amount of the fees charged at its sole
                          discretion.
                        </p>

                        <p>
                          <strong>3.2.</strong> Fees are exclusive of applicable
                          taxes and EnKash will charge such applicable taxes on
                          the fees from time to time. You agree that any
                          statutory variations in applicable taxes during the
                          subsistence of these Terms shall be borne by You.
                        </p>

                        <p>
                          <strong>3.3.</strong> We will raise monthly invoices
                          in respect of fees charged for Services provided
                          during such months. Invoices are available on the
                          dashboard on a monthly basis. Any dispute in respect
                          of an invoice must be communicated by You to Us via a
                          notice no later than ten (10) days from the date of
                          the invoice. EnKash shall use good faith efforts to
                          reconcile any reasonably disputed amounts.
                        </p>

                        <p>
                          <strong>3.4.</strong> You shall be responsible to do
                          reconciliation on a daily basis for all the
                          transactions processed. In case of discrepancies, You
                          shall report to EnKash regarding such discrepancy
                          within three (3) working days. However, if any
                          reconciliation issue is highlighted by You to EnKash
                          after three (3) working days from the transaction
                          date, EnKash shall not be responsible or liable in any
                          way whatsoever in case such queries and/or concerns
                          are not resolved.
                        </p>

                        <p>
                          <strong>3.5.</strong> For fees deducted upfront before
                          provision of the specific Service, it is agreed that
                          if You deposit applicable taxes under Section 194H of
                          the Income Tax Act, 1961 (in respect of invoices
                          received by You) and furnish to EnKash Form 16-A in
                          respect of such taxes paid, then EnKash shall
                          reimburse to You, on a quarterly basis, the amount in
                          respect of such taxes paid. In all other cases, with
                          respect to invoices received by You, at the time of
                          payment of the Fees, You will withhold applicable
                          taxes under Section 194H of the Income Tax Act, 1961
                          (in case LTDC is provided as per the LTDC issued). You
                          shall deposit the withheld taxes with the government
                          treasury, file the statutorily mandated returns and
                          furnish the requisite tax deduction certificate (Form
                          16-A) to EnKash within the timelines prescribed so as
                          to enable EnKash to obtain full credit for the taxes
                          deducted at source.
                        </p>

                        <p>
                          <strong>3.6.</strong> You shall be solely responsible
                          for updating Your GST registration number on the
                          EnKash dashboard before EnKash generates the invoice
                          and shall also submit the GST certificate as part of
                          KYC. EnKash will raise a GST tax invoice and report
                          the transactions in the GST returns based on the
                          information provided by You. The GST returns will be
                          filed as per the statutory timelines, to enable You to
                          avail appropriate input tax credit. EnKash shall not
                          be responsible for any mistake and/or
                          misrepresentation by You in updating the GST number
                          and other particulars as per the GST certificate.
                          Further, any liability raised on EnKash by the GST
                          authorities due to incorrect information provided by
                          You or deliberate withholding of any statutory
                          information by You shall be recovered by EnKash from
                          You.
                        </p>
                      </div>

                      <h5 className="c15 mt-6">4. PRIVACY POLICY</h5>

                      <p className="c3 c9">
                        <span className="c15"></span>
                      </p>
                      <p className="c3">
                        <span className="c15">
                          By using the Website, You hereby consent to the use of
                          Your information as we have outlined in our
                          <a href="/policies/privacy-policy" target="_blank">
                            Privacy Policy
                          </a>
                        </span>
                      </p>

                      <h5 className="c15 mt-6">5. THIRD PARTY LINKS/OFFERS</h5>

                      <p className="c3 pb-3">
                        <span className="c15">
                          This Website may provide links to other websites or
                          resources. Since EnKash has no control over such
                          third-party websites and resources, You acknowledge
                          and agree that EnKash is not responsible for the
                          availability of such external sites or resources, and
                          does not endorse and is not responsible or liable for
                          any content, advertising, products or other materials
                          on or available from such sites or resources. You
                          further acknowledge and agree that EnKash shall not be
                          responsible or liable, directly or indirectly, for any
                          damage or loss caused or alleged to be caused by or in
                          connection with use of or reliance on any such
                          content, goods or services available on or through any
                          such site or resource. Your interaction with any third
                          party accessed through the Website is at your own
                          risk, and EnKash will have no liability with respect
                          to the acts, omissions, errors, representations,
                          warranties, breaches or negligence of any such third
                          parties or for any personal injuries, death, property
                          damage, or other damages or expenses resulting from
                          your interactions with the third parties.
                        </span>
                      </p>

                      <h5 className="c15 mt-6">6. OUR PARTNERS</h5>

                      <p className="c3 pb-3">
                        <span className="c15">
                          You agree and authorize EnKash to share Your
                          information and make Your details available to its
                          partner banks/financial institutions, its group
                          companies, affiliates, vendors, service
                          providers/Facility Providers and other third parties
                          (&quot;Partners&quot;), in so far as required for the
                          Partners to provide to You various products and
                          services. You agree to receive communications through
                          emails, telephone and/or SMS, from EnKash or the
                          Partners. If You request not to receive such
                          communication/marketing material any further, it shall
                          be applicable prospectively only and shall not apply
                          in respect to Your data already shared by EnKash in
                          accordance with this clause upon Your prior consent.
                        </span>
                      </p>
                      <h5 className="c15 mt-6">7. DISCLAIMER OF WARRANTY</h5>

                      <p className="c3 pb-3">
                        <span className="c15">
                          EnKash warrants that the Service(s) shall be provided
                          materially in accordance with the services
                          documentation available on the Website. EnKash
                          warrants that the Service(s) will perform in all
                          material respects in accordance with these Terms. To
                          the maximum extent permitted by Applicable Laws and
                          except as stated in these Terms, the Services are
                          provided on an “as is” basis. You acknowledge that
                          EnKash does not warrant that the Service(s)s will be
                          uninterrupted or error free or fit for Your specific
                          business purposes.
                        </span>
                      </p>
                      <h5 className="c15 mt-6">8. LIMITATION OF LIABILITY</h5>

                      <p>
                        <strong>8.1.</strong> EnKash (including its officers,
                        directors, employees, representatives, affiliates, and
                        providers) will not be responsible or liable for (a) any
                        injury, death, loss, claim, act of God, accident, delay,
                        or any direct, special, exemplary, punitive, indirect,
                        incidental or consequential damages of any kind
                        (including without limitation lost profits or lost
                        savings), whether based in contract, tort, strict
                        liability or otherwise, that arise out of or is in any
                        way connected with (i) any failure or delay (including
                        without limitation the use of or inability to use any
                        component of the Website), or (ii) any use of the
                        Website or content, or (iii) the performance or
                        non-performance by Us or any Facility Provider, even if
                        we have been advised of the possibility of damages to
                        such parties or any other party, or (iv) any damages to
                        or viruses that may infect Your computer equipment or
                        other property as the result of Your access to the
                        Website or Your downloading of any content from the
                        Website.
                      </p>

                      <p>
                        The Website may provide links to other third-party
                        websites. However, since EnKash has no control over such
                        third-party websites, You acknowledge and agree that
                        EnKash is not responsible for the availability of such
                        third-party websites and does not endorse and is not
                        responsible or liable for any content, advertising,
                        products or other materials on or available from such
                        third-party websites. You further acknowledge and agree
                        that EnKash shall not be responsible or liable, directly
                        or indirectly, for any damage or loss caused or alleged
                        to be caused by or in connection with use of or reliance
                        on any such content, goods or services available on or
                        through any such third-party websites. Such third-party
                        websites may have separate terms and conditions and
                        privacy policy, which are independent of EnKash, and
                        therefore, we advise You to read the terms of use and
                        conditions available on such websites before You access
                        any such third-party website.
                      </p>

                      <p>
                        <strong>8.2.</strong> Notwithstanding anything under
                        these Terms, EnKash’s aggregate liability and that of
                        its affiliates, officers, employees and agents relating
                        to the Service(s), will not exceed an amount equal to
                        one (1) month fees paid by You for the specific
                        Service(s) giving rise to the liability. EnKash’s
                        liability under or in connection with Terms will be
                        proportionately reduced to the extent any loss or damage
                        is contributed to by You or Your third-party providers.
                      </p>

                      <h5 className="c15 mt-6">9. INDEMNITY</h5>

                      <p className="c3 pb-3">
                        <span className="c15">
                          You agree to indemnify and hold EnKash (and its
                          officers, affiliates, group company, directors, agents
                          and employees) harmless from any and against all
                          claims, whether or not brought by third parties,
                          causes of action, demands, recoveries, losses,
                          damages, fines, penalties or other costs or expenses
                          of any kind or nature, including reasonable attorneys;
                          fees, or arising out of or related to Your breach of
                          these Terms and Conditions, Your violation of any
                          Applicable Laws or the rights of a third party, or
                          Your use of the Website or any disputes between You
                          and any third party.
                        </span>
                      </p>
                      <h5 className="c15 mt-6">10. WAIVER</h5>

                      <p className="c3 pb-3">
                        <span className="c15">
                          Any failure or delay by EnKash to enforce or exercise
                          any provision of these Terms, or any related right,
                          shall not constitute a waiver by EnKash of that
                          provision or right. The exercise of one or more of
                          EnKash’s rights hereunder shall not be a waiver of, or
                          preclude the exercise of, any rights or remedies
                          available to EnKash under these Terms or in law or at
                          equity. Any waiver of any provision shall only be
                          effective if made in writing and executed by a duly
                          authorized officer of EnKash.
                        </span>
                      </p>
                      <h5 className="c15 mt-6">11. FORCE MAJEURE</h5>

                      <p className="c3 pb-3">
                        <span className="c15">
                          Any failure or delay by EnKash to enforce or exercise
                          any provision of these Terms, or any related right,
                          shall not constitute a waiver by EnKash of that
                          provision or right. The exercise of one or more of
                          EnKash’s rights hereunder shall not be a waiver of, or
                          preclude the exercise of, any rights or remedies
                          available to EnKash under these Terms or in law or at
                          equity. Any waiver of any provision shall only be
                          effective if made in writing and executed by a duly
                          authorized officer of EnKash.
                        </span>
                      </p>
                      <h5 className="c15 mt-6">
                        12. ANTI BRIBERY AND SANCTIONS LAWS
                      </h5>

                      <div className="container my-4">
                        <p>
                          You may not assign or otherwise transfer Your rights
                          or obligations under these Terms. EnKash may assign
                          its rights and duties under these Terms without any
                          such assignment being considered a change to the Terms
                          and without any notice to You. If we fail to act on
                          your breach or anyone else&apos;s breach on any
                          occasion, we are not waiving our right to act with
                          respect to future or similar breaches. Additional
                          terms applicable to the Services provided by EnKash or
                          its affiliates are as under:
                        </p>

                        <ol type="a" className="ms-3">
                          <li className="mb-2">
                            <strong>Governing Law & Jurisdiction.</strong> The
                            laws of India, without regard to its conflict of
                            laws rules, will govern these Terms, as well as Your
                            and Our observance of the same. If You take any
                            legal action relating to Your use of the Website or
                            these Terms, You agree to file such action only in
                            the courts located in Mumbai, India. In any such
                            action that We may initiate, the prevailing party
                            will be entitled to recover all legal expenses
                            incurred in connection with the legal action,
                            including but not limited to costs, both taxable and
                            non-taxable, and reasonable attorney fees. You
                            acknowledge that You have read and understood these
                            Terms, and that these Terms have the same force and
                            effect as a signed agreement. This clause shall
                            survive termination of the Terms.
                          </li>

                          <li className="mb-2">
                            <strong>Set-off.</strong> Without prejudice to any
                            other rights or remedies EnKash may have, You agree
                            and confirm that EnKash shall have the right to
                            set-off by whatever means the whole or any part of
                            Your liability to EnKash under these Terms (or any
                            other agreement between You and EnKash or its
                            affiliates) against any funds, sums or other amounts
                            credited to, or owing to, You under these Terms (or
                            any other agreement between You and EnKash or its
                            affiliates). EnKash may exercise the right of
                            set-off at any time, without prior notice to You. If
                            such set-off does not fully reimburse EnKash for the
                            liability owed, You shall pay EnKash a sum equal to
                            any shortfall.
                          </li>

                          <li className="mb-2">
                            <strong>No Agency / No Warranties.</strong> You
                            shall not (whether online or otherwise): (i)
                            describe Yourself as an agent or representative of
                            EnKash or any Facility Provider; (ii) represent that
                            You have any rights to offer any products or
                            services offered by EnKash or the Facility Provider;
                            or (iii) make any representations to Your customer
                            or any third party or give any warranties which may
                            require EnKash or any Facility Provider to undertake
                            to or be liable for, whether directly or indirectly,
                            any obligation and/or responsibility to any customer
                            or third party.
                          </li>

                          <li className="mb-2">
                            <strong>Right to Modify.</strong> EnKash reserves
                            the right to make changes to the Website, related
                            policies and agreements, these Terms and the Privacy
                            Policy at any time as it deems fit and proper,
                            including but not limited to to comply with changes
                            in law or regulation, correct inaccuracies,
                            omissions, errors or ambiguities, reflect changes in
                            the process flow, scope and nature of the Services
                            and ancillary services, company reorganization,
                            market practice or customer requirements. Upon any
                            change, Your continued use of the Services and
                            ancillary services constitutes acceptance of the
                            changes and an agreement to be bound by the Terms,
                            as amended. If You do not agree to the changes,
                            please discontinue Your use of the Services.
                          </li>
                        </ol>
                      </div>
                      <h5 className="c15 mt-6">14. ADVERTISING</h5>

                      <p className="c3 pb-3">
                        <span className="c15">
                          Some of the Services may be supported by advertising
                          revenue and may display advertisements and promotional
                          material. These advertisements may be targeted to the
                          content of information stored on the Services, queries
                          made through the Services or other information. The
                          manner, mode and extent of advertising by EnKash are
                          subject to change without any specific notice to You.
                          In consideration for EnKash granting You access to and
                          use of the Services, You agree that EnKash may place
                          such advertisements on the Services through Website,
                          print media, electronic media, and social media
                          advertising platforms etc.
                        </span>
                      </p>
                      <h5 className="c15 mt-6">
                        15. SUSPENSION AND TERMINATION
                      </h5>
                      <div className="container my-4">
                        {/* 15.1 */}
                        <div className="card mb-3">
                          <div className="card-header fw-semibold">
                            15.1 Immediate Suspension of Services
                          </div>
                          <div className="card-body">
                            <p className="mb-2">
                              Notwithstanding anything to the contrary, EnKash
                              shall have the right to immediately suspend
                              Services and settlement of any monies or payments
                              to You, without any liability to You, in the event
                              of the following:
                            </p>

                            <ol type="a" className="ms-3 mb-0">
                              <li>You breach any clause of these Terms.</li>
                              <li>
                                You facilitate any transaction which is unlawful
                                or in contravention with ‘Prohibited Products
                                and Services’ listed below.
                              </li>
                              <li>
                                EnKash receives instructions from Facility
                                Providers or governmental authorities or law
                                enforcement agencies to either suspend the
                                Services, or part thereof, or directs to suspend
                                the Services or part thereof regardless of
                                whether there is pending investigation/enquiry
                                into any alleged illegal/unlawful activities.
                              </li>
                              <li>
                                You use the Services for any transactions which
                                have a high-risk score as per EnKash’s internal
                                fraud assessment tools and other policies.
                              </li>
                              <li>
                                EnKash is of the opinion that there are
                                suspicious circumstances surrounding Your
                                activities.
                              </li>
                              <li>
                                EnKash is of the opinion that there are pending,
                                anticipated, or excessive disputes, refunds, or
                                reversals relating to Your use of Services.
                              </li>
                              <li>
                                Your products / services infringe, or are
                                suspected of infringing, intellectual property
                                rights, copyrightable works, patented
                                inventions, trademarks and trade secrets, or You
                                are suspected of selling counterfeit and/or
                                knock-off goods.
                              </li>
                              <li>
                                You materially change the type of the products /
                                services provided to end customers and as
                                declared on the onboarding form, without
                                obtaining EnKash’s prior written permission to
                                use the Services for the new or changed types of
                                services / products, or it is discovered by
                                EnKash that You provided substantially
                                misleading and/or false information about Your
                                products / services as part of the onboarding
                                activities.
                              </li>
                              <li>
                                EnKash in its sole discretion determines that
                                Your activities expose EnKash to risks which are
                                unacceptable to EnKash.
                              </li>
                              <li>
                                EnKash in its sole discretion is required to do
                                so due to regulatory changes impacting the
                                Services.
                              </li>
                            </ol>
                          </div>
                        </div>

                        {/* 15.2 */}
                        <div className="card mb-3">
                          <div className="card-header fw-semibold">
                            15.2 Term and Termination
                          </div>
                          <div className="card-body">
                            <p className="mb-0">
                              These Terms are effective upon the date You first
                              access or use the Services and continue until
                              terminated by You or EnKash. We may terminate
                              these Terms or close your EnKash account at any
                              time for any reason (including, without
                              limitation, for any activity that may create harm
                              or loss to the goodwill of EnKash). Where
                              Applicable Laws requires advance notice of
                              termination to be provided, we will, prior to
                              termination, provide You with the required advance
                              notice of termination.
                            </p>
                          </div>
                        </div>

                        {/* 15.3 */}
                        <div className="card">
                          <div className="card-header fw-semibold">
                            15.3 Effect of Termination
                          </div>
                          <div className="card-body">
                            <p>
                              Termination does not immediately relieve You of
                              obligations incurred by You under these Terms.
                              Upon termination, You agree to stop using the
                              Services. Your continued or renewed use of the
                              Services after termination serves to renew Your
                              consent to the Terms.
                            </p>
                            <p className="mb-0">
                              In addition, upon termination You understand and
                              agree that We will not be liable to You for
                              compensation, reimbursement, or damages related to
                              Your use of the Services, or any termination or
                              suspension of the Services or deletion of Your
                              information or account data; and You will still be
                              liable to us for any fees or fines, or other
                              financial obligation incurred by You or through
                              Your use of the Services prior to termination.
                            </p>
                          </div>
                        </div>
                      </div>
                      <h5 className="c15 mt-6">
                        16. SPECIFIC TERMS FOR EXPENSE MANAGEMENT SOLUTION
                      </h5>
                      <div className="container my-4">
                        <div className="card mb-3">
                          <div className="card-body">
                            <p>
                              Expense Management Solutions is a
                              Software-as-a-Service (SaaS) offering that You can
                              avail on the Dashboard which may be used
                              independently or in conjunction with other
                              services offered by NBSPL, and including all
                              upgrades, updates, and patches to the SaaS
                              Offerings that EnKash makes available for general
                              release.
                            </p>
                            <p>
                              EnKash/NBSPL may, in its sole discretion, make any
                              changes to any SaaS Offerings that it deems
                              necessary or useful to:
                            </p>
                            <ol type="a" className="ms-3">
                              <li>
                                Maintain or enhance (i) the quality or delivery
                                of the SaaS Offerings; (ii) the competitive
                                strength of, or market for, the SaaS Offerings;
                                (iii) cost efficiency or performance of the SaaS
                                Offerings.
                              </li>
                              <li>Comply with Applicable Laws.</li>
                            </ol>
                            <p className="mb-0">
                              During your Term of use of Services, You will
                              receive a non-exclusive, non-assignable,
                              non-sublicensable right to access and use the
                              Services solely for Your internal business
                              operations subject to the terms of these Terms.
                            </p>
                          </div>
                        </div>

                        <div className="card mb-3">
                          <div className="card-header fw-semibold">
                            Scope of Work for Expense Management Solutions
                          </div>
                          <div className="card-body">
                            <ol type="a" className="ms-3 mb-0">
                              <li>
                                We would help/guide to create the admin user and
                                any other users specified by You.
                              </li>
                              <li>
                                We would provide necessary training to the
                                users/Admin on know-how and usage of the
                                platform. We would provide support to users on
                                issues faced in using the platform over Voice
                                and Email.
                              </li>
                              <li>
                                We would take up technical changes, as
                                appropriate with or without a fee for changes
                                required by the Customer on the platform.
                              </li>
                            </ol>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header fw-semibold">
                            Your Obligations
                          </div>
                          <div className="card-body">
                            <ol className="ms-3 mb-0">
                              <li>
                                Customer undertakes to comply with and shall
                                ensure compliance by the users with all
                                applicable guidelines including regulations
                                issued by the RBI regarding Anti Money
                                Laundering; Combating the Financing of
                                Terrorism; rules, regulations issued by the
                                regulators and our Acquiring Banks and/or Card
                                Associations.
                              </li>
                              <li>
                                In the event of non-compliance of applicable
                                laws, resulting in any fines, penalties or other
                                amounts being levied on or demanded from Us,
                                then without prejudice to Our other rights
                                hereunder, the Customer shall forthwith
                                reimburse Us in an amount equal to the fines,
                                penalties or other amount so levied or demanded
                                or spent by Us in any manner in relation to such
                                fines, penalties and levies.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                      <h5 className="c15 mt-6">
                        17. SPECIFIC TERMS OF VOUCHERS
                      </h5>

                      <div className="container my-4">
                        <ul className=" list-group-numbered">
                          <li className="list-group-item">
                            All the Gift Vouchers are valid for a minimum of 3
                            months depending upon the Brand. The exact expiry
                            date of the Gift Vouchers will be mentioned in the
                            Voucher E-Mail / SMS / WhatsApp.
                          </li>
                          <li className="list-group-item">
                            Kindly use your Gift Voucher within the due date.
                            Gift Vouchers once expired cannot be revalidated.
                          </li>
                          <li className="list-group-item">
                            Gift Vouchers once purchased cannot be blocked /
                            cancelled and no refund will be issued.
                          </li>
                          <li className="list-group-item">
                            All the respective T&amp;Cs of the brands apply.
                            Please visit the “Terms &amp; Conditions” on each
                            brand page for detailed Brand T&amp;Cs.
                          </li>
                          <li className="list-group-item">
                            Once the Gift Vouchers has been sent to You, then
                            You are bound to protect the Gift Vouchers PIN or
                            Gift Card number. In the event of fraudulent use of
                            Gift vouchers due to loss of any such confidential
                            details due to the fault of the purchaser/customer,
                            We shall not be held responsible for the same and no
                            refund can be issued against such Gift Vouchers.
                          </li>
                        </ul>
                      </div>
                      <h5 className="c15 mt-6">
                        18. SPECIFIC TERMS OF USE: BBPS
                      </h5>
                      <div className="container my-5">
                        <div className="mb-4">
                          <p>
                            NBSPL shall enable You to pay your dues (or
                            additional amounts) to the billers using certain
                            payment instruments. The payment instruments enabled
                            may be changed by NBSPL at its sole discretion from
                            time to time based on success rates or any other
                            relevant consideration. NBSPL does not guarantee the
                            availability of any particular payment instrument
                            for NBSPL Bill Payment.
                          </p>
                          <p>
                            NBSPL shall process the payment to the biller only
                            after NBSPL has received the payment from your
                            credit/debit card or other relevant payment
                            instrument. NBSPL shall not be responsible for any
                            delay occasioned due to any action or inaction on
                            account of any bank or payment gateway involved in
                            your transaction.
                          </p>
                          <p>
                            You agree to not hold NBSPL responsible and/or
                            liable for any issue or claim arising out for any
                            dispute whatsoever between You and the biller, the
                            payment gateway or Your bank.
                          </p>
                          <p>
                            Once a bill payment has been initiated it cannot be
                            reversed. While NBSPL undertakes its best efforts to
                            process the payment as directed by you at the
                            earliest, NBSPL may delay, suspend, or reject a
                            transaction for any payment(s) for any reason,
                            including without limitation if we suspect the
                            transaction poses a financial or security risk, or
                            is unauthorized, or is fraudulent, suspicious,
                            unlawful or in any way in violation of the
                            applicable laws around such transactions or in
                            violation of these Terms.
                          </p>
                          <p>
                            NBSPL may levy service charges for any NBSPL Bill
                            Payment transaction. Such service charges if any
                            shall be displayed on the transaction screen prior
                            to the payment being initiated.
                          </p>
                          <p>
                            You agree to not hold NBSPL liable for delays in
                            bill payment arising from biller&apos;s end. NBSPL
                            recommends You to pay your bills early to avoid late
                            payment fees, if any, being levied by the biller.
                          </p>
                        </div>

                        <h5 className="fw-bold">Indemnification</h5>
                        <p>
                          You agree to not hold NBSPL responsible and/or liable
                          for any issue or claim arising out for any dispute
                          whatsoever between You and the payment gateway or Your
                          bank or the Counterparty (including but not limited to
                          billers and the BBPS system). You shall keep NBSPL
                          indemnified and hold NBSPL harmless in the case of any
                          third-party claims against NBSPL (whether by the
                          Counterparty, payment gateway, bank, any government
                          authority or any other Person) for the payments made
                          or attempted to be made by You (or any other Person
                          through your account) using NBSPL.
                        </p>

                        <h5 className="fw-bold">Information Input</h5>
                        <p>
                          You are responsible for all the information you input
                          during your use of the NBSPL Finance website including
                          the NBSPL Bill Payment features. You are responsible
                          for ensuring that all the payment details provided by
                          you are accurate.
                        </p>
                        <ul className="list-group list-group-numbered mb-4">
                          <li className="list-group-item mb-2">
                            Details of the biller / bill account number.
                          </li>
                          <li className="list-group-item mb-2">
                            Details of the payment instrument (or selection from
                            saved payment instrument).
                          </li>
                          <li className="list-group-item mb-2">
                            The amounts of payment.
                          </li>
                        </ul>
                        <p>
                          In the event you input any of these details
                          incorrectly, You will be responsible for the resultant
                          transaction and all charges that result from the same.
                          NBSPL may at its discretion assist in reversing such
                          transactions if technically feasible and viable.
                        </p>
                        <p>
                          NBSPL may ask for additional information if required
                          from time to time, including but not limited to bill
                          copies etc. Failure to provide requested documentation
                          within 72 hours may result in failed transactions or
                          suspension of your access.
                        </p>

                        <h5 className="fw-bold">Disclaimers</h5>
                        <div>
                          <p>
                            NBSPL Bill Payments feature as an Agent Institution
                            is provided by NBSPL through:
                          </p>
                          <ul>
                            <li>Aggregators with whom NBSPL has a contract</li>
                            <li>
                              Bharat Bill Payment Operating Unit (BBPOU)
                              infrastructure where the Biller is registered with
                              NPCI for bill payments
                            </li>
                          </ul>
                          <p>
                            Accordingly, NBSPL Bill Payments may be unavailable
                            or settlement delayed in the event of any downtime
                            or issues attributable to NBSPL&apos;s partners.
                          </p>

                          <p>
                            Once a payment has been initiated, it cannot be
                            reversed and NBSPL will not be liable in any way for
                            any loss you suffer as a result of a transaction
                            being carried out in accordance with the
                            instructions issued by you.
                          </p>

                          <p>
                            NBSPL shall process the payment only after NBSPL has
                            received:
                          </p>
                          <ul>
                            <li>
                              The payment from your credit card or other
                              relevant payment instrument
                            </li>
                            <li>
                              Any further information requested from you by
                              NBSPL
                            </li>
                          </ul>
                          <p>
                            NBSPL shall not be responsible for any delay
                            occasioned due to any action or inaction on account
                            of any bank, payment gateway, or the counterparty:
                            the biller, or the BBPS payment system involved in
                            your transaction.
                          </p>

                          <p>
                            NBSPL does not guarantee any timelines for payments
                            to the Counterparties. Any timelines mentioned on
                            NBSPL Finance are merely indicative and not to be
                            construed as guarantees.
                          </p>

                          <p>
                            While NBSPL undertakes its best efforts to process
                            the payment as directed by you at the earliest,
                            NBSPL may delay, suspend, or reject a transaction or
                            any payment(s) for any reason, including without
                            limitation, if we suspect the transaction poses a
                            financial or security risk, or is unauthorized,
                            fraudulent, suspicious, unlawful, or in violation of
                            applicable laws or these T&Cs.
                          </p>

                          <p>
                            NBSPL recommends you pay your bills with sufficient
                            gap from the due date, and you agree not to hold
                            NBSPL liable in case of delay of payment of your
                            bill.
                          </p>

                          <p>
                            NBSPL may from time to time make available, either
                            directly or in partnership with its Commercial
                            Partners, certain benefits for using NBSPL Bill
                            Payment. All such offers shall be governed by their
                            terms and conditions as displayed on the NBSPL
                            Finance website in addition to these NBSPL Bill
                            Payment T&Cs. NBSPL&apos;s decision regarding such
                            offers shall be final and binding and not subject to
                            any appeal or dispute resolution process.
                          </p>
                        </div>
                        <hr />
                        <p>
                          <strong>PRIVACY</strong>
                        </p>
                        <p>
                          <strong>
                            YOUR PRIVACY IS EXTREMELY IMPORTANT TO US. UPON
                            ACCEPTANCE OF THESE TERMS OF USE YOU CONFIRM THAT
                            YOU HAVE READ, UNDERSTOOD AND UNEQUIVOCALLY ACCEPTED
                            OUR POLICIES, INCLUDING THE PROVISIONS OF OUR
                            PRIVACY POLICY.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerOnboarding
