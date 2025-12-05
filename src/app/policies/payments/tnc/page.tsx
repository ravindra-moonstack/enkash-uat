/* eslint-disable react/no-unescaped-entities */
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
    canonical: `${process.env.URL}/policies/payments/tnc`,
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
                { name: "Policies", url: "/policies/" },
                {
                  name: "Payments",
                  url: "/policies/payments",
                },
                {
                  name: "Terms and Conditions ",
                  url: "/policies/payments/tnc",
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
                            title: "Payment Aggregator Terms and Conditions",
                            color: "color-equity-blue",
                          },
                        ]}
                        headingTag="h1"
                        className="f-5 text-center "
                      />
                    </div>
                    <div className="word-to-html-null mb-5">
                      <h5 className="c15 mt-6 pb-4">
                        Last Updated On: 30th November 2025
                      </h5>
                      <p>
                        These Terms and Conditions (“Terms”) constitute a legal
                        agreement between You and Nehat Tech Solutions Private
                        Limited (“Enkash” or “us”, or “we” or “our””).
                      </p>
                      <p>
                        These Terms govern Your access to and use of Enkash
                        Services, including payments, technology, software,
                        analytics or any other services, tools or products
                        offered or made available by Enkash and/or its
                        Affiliates, and/or their Facility Providers,
                        (“Services”). The Services may be offered or made
                        available to You via our website, mobile applications,
                        software, APIs, social media, or other access channels
                        (“Platform”). “You”, “Yours”, “Yourself” or “Merchant”
                        refers to customers, who may be a non-registered
                        individual or corporate body, who register for, use, or
                        access the Platform or Services.
                      </p>
                      <p>
                        The Services provided by Enkash through the Platform are
                        available and are appropriate for use in India only.
                      </p>
                      <p>
                        Please read these Terms carefully before accessing the
                        Platform or using the Services. By accessing the
                        Platform or using the Services, You agree to be bound by
                        these Terms, including our privacy policy and any other
                        policy applicable to the Services received via the
                        Platform. If You do not agree to these Terms or do not
                        wish to be bound by these Terms, You must immediately
                        terminate the use of the Services. Enkash reserves the
                        right to amend or otherwise modify the Terms at any time
                        by posting an updated version on the website. The
                        updated Terms shall take effect immediately upon
                        posting. It is Your responsibility to review these Terms
                        periodically for updates/amendments. Your continued
                        access of the Platform or use of the Services signifies
                        Your assent/ratification of the updated or modified
                        Terms. If You object to these Terms or any subsequent
                        modifications to these Terms in any way, Your only
                        recourse is to immediately terminate the use of the
                        Services.
                      </p>
                      <p>
                        We may require You to agree to additional terms in
                        connection with specific Services, provided either by
                        Enkash or its Affiliates, that You may avail from time
                        to time. You agree to be bound by supplemental terms of
                        any specific Service that You access or use via our
                        Platform and/or are available by hyperlink on our
                        Platform. We may ask You to agree to those supplemental
                        terms by way of ‘acceptance’. Should You choose to avail
                        any specific Service, You may be required to complete
                        forms and provide additional data/information. You
                        hereby give your consent for us to store, and use the
                        data/information You provide on the Platform during (i)
                        the initial sign up/registration process and (ii)
                        registration or onboarding for any specific Service in
                        future. You hereby further give Your consent for us to
                        pre-fill forms for the registration or onboarding
                        process of any specific Service with such
                        data/information provided. You acknowledge and agree
                        that we reserve the right to verify, and re-verify where
                        applicable, the data/information You provide in relation
                        to any specific Service. Your right to access and use
                        any specific Service is subject to successful
                        completion, at our sole discretion, of registration or
                        onboarding process for that specific Service.
                      </p>
                      <p>
                        This document/agreement/understanding is a
                        computer-generated electronic record published in terms
                        of Rule 3 of the Information Technology (Intermediary
                        Guidelines and Digital Media Ethics Code) Rules, 2021
                        (amended from time to time) read with Information
                        Technology Act, 2000 (amended from time to time) and
                        does not require any physical or digital signatures.
                      </p>
                      <h5 className="c15 mt-6">1. Definitions</h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            <strong>“AD-1 Bank”</strong> means a scheduled
                            commercial bank in India which is authorized under
                            the relevant legislation to undertake all current
                            and capital account transactions according to the
                            directions issued by the RBI from time to time.
                          </li>

                          <li>
                            <strong>“Affiliate”</strong> shall mean any entity
                            that directly or indirectly controls, is controlled
                            by, or is under common control with Enkash, whereby
                            “control” (including, with correlative meaning, the
                            terms “controlled by” and “under common control”)
                            means the possession, directly or indirectly, of the
                            power to direct, or cause the direction of the
                            management and policies of such person, whether
                            through the ownership of voting securities, by
                            contract, or otherwise.
                          </li>

                          <li>
                            <strong>“Applicable Laws”</strong> shall mean (i)
                            any law, statute, rule, regulation, order, circular,
                            decree, directive, judgment, decision or other
                            similar mandate of any applicable central, national,
                            state or local governmental/regulatory authority
                            having competent jurisdiction and force of law over,
                            or applicable to You, us or the subject matter in
                            question, as may be amended from time to time, and
                            (ii) shall without limitation include any
                            notification, circular, directive or other similar
                            instruction issued by the ‘Financial Sector
                            Regulators' including but not limited to the Reserve
                            Bank of India (RBI) and/or rules, regulations,
                            roles, responsibilities and processes as defined by
                            NPCI on their website{" "}
                            <a href=" www.npci.org.in." className="text-break">
                              www.npci.org.in.
                            </a>{" "}
                          </li>

                          <li>
                            <strong>“Chargeback”</strong> shall mean the
                            reversal (such reversal being requested by a
                            Facility Provider pursuant to a request from the
                            Facility Provider's customer) of the debit of the
                            Transaction Amount that was charged by You, where
                            the reversal is approved by the Facility Provider
                            following examination of the Transaction related
                            documents and information furnished by You,
                            consequently resulting in Enkash being charged the
                            Transaction Amount and charges, penalties or fines
                            associated with processing the Chargeback.
                          </li>

                          <li>
                            <strong>“Chargeback Amount”</strong> shall mean the
                            aggregate amount that the Facility Provider charges
                            Enkash pursuant to a Chargeback.
                          </li>

                          <li>
                            <strong>“Chargeback Documents”</strong> has the
                            meaning ascribed to the term in clause 2.1 of Part
                            I: Specific Terms for Online Payment Aggregation
                            Services.
                          </li>

                          <li>
                            End consumer raises dispute/fraud with Merchant
                            directly and if the case remains unresolved with
                            merchant, the end user can raise it online at{" "}
                            <a
                              href=" https://www.enkash.com/support "
                              className="text-break"
                            >
                              https://www.enkash.com/support
                            </a>{" "}
                            or write to Enkash Support email or call on support
                            phone to raise disputes on Support@enkash.com and
                            +91-8530490475.
                          </li>

                          <li>
                            <strong>“Chargeback Request”</strong> means a claim
                            for Chargeback by the Facility Provider's customer.
                          </li>

                          <li>
                            <strong>“Claims”</strong> means any claim asserted
                            against the Merchant, that is paid or payable to a
                            third party pursuant to an order of a court of law,
                            judicial and quasi-judicial authorities.
                          </li>

                          <li>
                            <strong>“Customer”</strong> means the Merchant's
                            customer who will be making payments to the Merchant
                            in consideration for goods/services availed of by
                            the customer from the Merchant.
                          </li>

                          <li>
                            <strong>“Device”</strong> means the point of sale
                            (POS) or mobile point of sale (mPOS) devices on
                            which the Enkash POS Software is enabled.
                          </li>

                          <li>
                            <strong>“Escrow Account”</strong> is an account held
                            by Enkash with an Escrow Bank for the purpose of
                            receiving the Transaction Amount and effecting
                            settlements to You.
                          </li>

                          <li>
                            <strong>“Escrow Bank”</strong> means a bank that is
                            authorised by the RBI to operate an Escrow Account
                            under the Payment Aggregation Guidelines.
                          </li>

                          <li>
                            <strong>“Escrow Bank Working Days”</strong> means
                            days on which the Escrow Bank is operational to
                            undertake settlements.
                          </li>

                          <li>
                            <strong>“Facility Providers”</strong> shall mean
                            banks, financial institutions, NPCI, technology
                            service providers, or other third parties
                            facilitating the provision of Services or any part
                            thereof, including but not limited to: (a) acquiring
                            banks, (b) banks issuing credit cards, debit cards,
                            prepaid instruments and accounts, and (c) card
                            payment networks.
                          </li>

                          <li>
                            <strong>“KYC Guidelines”</strong> means KYC norms as
                            notified by the Reserve Bank of India, to the extent
                            applicable to the Services and as may be determined
                            by Enkash or the Facility Providers. KYC means
                            know-your-customer.
                          </li>

                          <li>
                            <strong>“NPCI”</strong> means the National Payments
                            Corporation of India constituted pursuant to the
                            provisions of the Payment and Settlement Systems
                            Act, 2007.
                          </li>

                          <li>
                            <strong>“OFAC”</strong> means the Office of Foreign
                            Assets Control constituted under the law of the
                            United States of America.
                          </li>

                          <li>
                            <strong>“Payment Instrument”</strong> includes
                            credit card, debit card, bank account, prepaid
                            payment instrument or any other instrument issued
                            under Applicable Law, used by a customer to pay the
                            Transaction Amount.
                          </li>

                          <li>
                            <strong>“Permissible Deductions”</strong> means: (a)
                            fees charged by Enkash; (b) Chargeback Amount
                            including fines and penalties; and (c) any other sum
                            due and payable by You to Enkash.
                          </li>

                          <li>
                            <strong>“Refund”</strong> means processing of Your
                            request to Enkash for returning the Transaction
                            Amount (or part thereof) to the Payment Instrument
                            which was used for effecting the payment of the
                            Transaction Amount.
                          </li>

                          <li>
                            <strong>“RBI”</strong> shall mean the Reserve Bank
                            of India.
                          </li>

                          <li>
                            <strong>“Terminal ID (TID)”</strong> shall mean a
                            unique number assigned to a Merchant that is set up
                            in the Enkash system. TIDs may also be associated
                            with any Device at the discretion of Enkash and the
                            Merchant. Any Device can be deactivated at any time
                            at the request of the Merchant.
                          </li>

                          <li>
                            <strong>“Transaction”</strong> means an order or
                            request placed by the customer with You (or a
                            third-party vendor availing Your services) for
                            purchasing goods/services from You, which results in
                            a debit to the customer's Payment Instrument.
                          </li>

                          <li>
                            <strong>“Transaction Amount”</strong> means the
                            amount paid by the Customer in connection with a
                            Transaction.
                          </li>
                        </ul>
                      </div>
                      <h5 className="c15 mt-6">2. Proprietary Rights</h5>
                      <ul className="list-unstyled ms-3">
                        <li>
                          • We (and our licensors, as applicable) remain the
                          sole owner of all right, title and interest in the
                          Services, including the Platform and the website{" "}
                          <a
                            href="https://www.enkash.com/"
                            className="text-break"
                          >
                            https://www.enkash.com/
                          </a>{" "}
                          (“website”), including any intellectual property
                          rights which subsist in the Services (whether
                          registered or not). Enkash grants You a personal,
                          non-exclusive, non-transferable, limited right to
                          access the Platform and make personal use of the
                          website and the Services. You shall not remove,
                          obscure, or alter any proprietary rights notices
                          (including trademark and copyright notices), which may
                          be affixed to or contained within the Services. We
                          reserve all rights not granted under the Terms. We
                          (and our licensors, as applicable) retains its rights
                          in and to trademarks, trade names, service marks,
                          logos, domain names, and other distinctive brand
                          features (“marks”) owned or used by us in the course
                          of our business. You do not have the right to use any
                          of our marks without explicit consent from us. You
                          shall not download, copy, create a derivative work,
                          modify, reverse engineer, reverse assemble, transmit
                          or otherwise attempt to discover any source code,
                          sell, assign, sub-license, grant a security interest
                          in or otherwise transfer any right in the Services or
                          marks. You further acknowledge and agree that the
                          Services may contain information that is designated
                          confidential by us and You shall not disclose such
                          information without our prior written consent.
                        </li>

                        <li>
                          • You grant a royalty-free, non-exclusive,
                          irrevocable, transferable and sub-licensable license
                          to Enkash, its Affiliates and third-party service
                          providers, to use Your data, Your customer’s data,
                          information, content, trademarks, logos and any other
                          materials/information You upload or make available to
                          us or on the Platform (“Your materials”). You agree
                          that Enkash may use Your materials to operate and
                          improve the Platform, provide the Services, and fulfil
                          Enkash’s rights and discharge its obligations under
                          the Terms. You agree that Enkash may use Your
                          materials in its marketing and promotional materials
                          without requiring any incremental consent from You.
                          You further agree that Enkash may conduct analytics on
                          Your materials and that Enkash shall retain ownership
                          of the results or reports derived from such data which
                          shall be in aggregated and anonymised form for its
                          business purposes in accordance with Applicable Laws.
                          You shall indemnify and hold harmless Enkash, its
                          Affiliates and its service providers on demand against
                          all claims and losses arising out of or in connection
                          with our use of Your Materials in accordance with this
                          clause.
                        </li>
                      </ul>
                      <h5 className="c15 mt-6">
                        3.Usage of the website and use of Services by the User
                      </h5>
                      <div className="container my-4">
                        <ul className="list-unstyled ms-3">
                          <li>
                            • You shall register to become a user of the Website
                            only if You are of the age of 18 or above and can
                            enter into binding contracts as per Applicable Laws.
                            You are responsible for maintaining the secrecy of
                            Your passwords, login and account information. You
                            are responsible for maintaining the confidentiality
                            of any login information and secure access
                            credentials associated with Your Enkash account. You
                            will be responsible for all use of the Platform and/
                            or Services by You or anyone using Your password and
                            login information (with or without our permission).
                            You are responsible for all activities that occur
                            under Your account/in using Your secure credentials
                            and Enkash shall not be liable for any such change
                            or action performed by using Your secure credentials
                            on the Website.
                          </li>
                          <li>
                            •You agree to provide true, accurate, current and
                            complete information about Yourself as and when
                            prompted by the Platform. If You provide any
                            information that is untrue, inaccurate, not updated
                            or incomplete (or becomes untrue, inaccurate or
                            incomplete), or Enkash has reasonable grounds to
                            suspect that such information is untrue, inaccurate,
                            not updated or incomplete, Enkash shall have the
                            right to immediately suspend or terminate Your
                            account and/or refuse any and all current or future
                            use of the Platform or Services, or any portion
                            thereof, in connection thereto.
                          </li>
                          <li>
                            • By using the Services and providing your contact
                            information, you consent to receiving information
                            about, and offers for, various products and services
                            from Enkash, its Affiliates or third parties. These
                            communications may occur through various channels,
                            including but not limited to telephone, SMS, email,
                            WhatsApp, other messaging services, or any other
                            physical, electronic, or digital means. You agree
                            that Enkash may contact you electronically or by
                            phone to gauge your interest in specific products
                            and services and to process your requests or
                            applications. Additionally, you authorize Enkash,
                            along with its partners, service providers, vendors,
                            and other third parties, to contact you for purposes
                            such as (i) presenting or soliciting your interest
                            in other products or services from third parties, or
                            (ii) sending marketing materials, offers, or other
                            information through the Website or via other methods
                            including telephone, SMS, email, WhatsApp, or other
                            messaging services or digital means. You consent to
                            receiving these communications on the phone or
                            mobile number you provided on the website and
                            explicitly waive any registration or preferences
                            listed under the Do Not Disturb (DND) or National
                            Customer Preference Register (NCPR) in accordance
                            with Telecom Regulatory Authority of India (TRAI)
                            regulations.
                          </li>
                          •{" "}
                          <li>
                            You agree and authorize Enkash to share your
                            information with its partner banks, financial
                            institutions, group companies, Affiliates, vendors,
                            service providers, and other third parties as
                            necessary to provide the various products and
                            services you select or to offer additional
                            value-added services. You also consent to receiving
                            communications via email, telephone, and/or SMS from
                            Enkash or these third parties. If you request to opt
                            out of receiving such communications or marketing
                            materials in the future, this request will only
                            apply prospectively and will not affect data that
                            has already been shared by Enkash with your prior
                            consent.
                          </li>
                          <li>
                            • By accessing the Platform or using our Services,
                            You acknowledge and agree that we may display
                            offers, promotions, and other content from our
                            partners, Affiliates, and third parties to You or
                            Your end users. These offers and promotions may be
                            tailored based on the information provided,
                            including past information on our Platform or by
                            Your or end users use of our Services. We may
                            leverage the data, including personal data, that You
                            or Your end users submit to personalize and optimize
                            these offers, ensuring that they are relevant and
                            valuable to You, and You explicitly consent to such
                            usage. This may include, but is not limited to, Your
                            or Your end user preferences, interactions, and
                            usage patterns on our Platform. We do not guarantee
                            the accuracy, quality, or suitability of any offers
                            presented, and such offers may be subject to
                            additional terms and conditions. Your, or an end
                            user’s, engagement with these offers is solely at
                            Your discretion.
                          </li>
                          <li>
                            • You acknowledge and agree that for undertaking any
                            payment and/or financial transaction through the
                            Platform, Enkash may undertake due diligence
                            measures and seek information required for KYC
                            purposes, which as a customer/merchant You are
                            obliged to give in accordance with Applicable Laws.
                            You acknowledge and agree that Enkash may undertake
                            enhanced due diligence measures (including any
                            documentation), to satisfy itself relating to due
                            diligence requirements in line with the requirements
                            and obligations under Applicable Laws. You are
                            solely responsible for understanding and complying
                            with all Applicable Laws, including but not limited
                            to the extent RBI Guidelines, Payment and Settlement
                            Systems Act, 2007, Prevention of Money Laundering
                            Act, 2002, KYC Guidelines, etc. issued by the RBI as
                            may be amended from time to time that may be
                            applicable to You in connection with Your business
                            and use of Platform or Services.
                          </li>
                          <li>
                            • You agree and covenant that before the
                            commencement of any Service(s) under these Terms,
                            You shall provide the necessary documents (as
                            determined in Enkash's sole discretion or when
                            required by Facility Providers or governmental
                            authorities or law enforcement agencies) (“KYC
                            Documents”) to enable Enkash to conduct the due
                            diligence in respect of You and Your business /
                            activities. Enkash shall have the right to share the
                            KYC Documents (or the information therein) and other
                            related documents with the Facility Providers or
                            governmental authorities or law enforcement
                            agencies, as required under the Applicable Laws. You
                            expressly consent Enkash to rely on the KYC
                            Documents provided by You for providing Services.
                            You further acknowledge and agree that Enkash
                            reserves the right at all times to monitor, review,
                            retain and/or disclose any information in relation
                            to the Service(s) as necessary pursuant to satisfy
                            any Applicable Laws, legal process or governmental
                            request.
                          </li>
                          <li>
                            • Enkash shall have the right to demand from You,
                            any (i) additional KYC Documents and /or (ii) any
                            KYC related or other documents of Your customers or
                            invoices, in its sole discretion and / or as per the
                            Applicable Laws or pursuant to requests from
                            governmental authorities, law enforcement agencies
                            or Facility Providers. Your failure to submit the
                            KYC Documents when requisitioned shall entitle
                            Enkash to suspend the Services and/or stop
                            settlement of monies (as applicable) until You
                            submit such KYC Documents to the sole satisfaction
                            of Enkash.
                          </li>
                          <li>
                            • You agree that Enkash shall not be responsible for
                            any delivery, after-sales service, payment,
                            invoicing or collection, customer enquiries (not
                            limited to sales enquiries), technical support
                            maintenance services and/or any other obligations or
                            services relating to or in respect of Your products
                            or services. Such obligations shall be Your sole
                            responsibility. You shall indemnify Enkash against
                            any claim arising from such services or obligations
                            and shall bear any and all expenses and/or costs
                            relating thereto.
                          </li>
                          <li>
                            • Throughout Your use of the Services, You declare
                            that You or Your affiliates and/ or its Beneficial
                            Owner are not a Politically Exposed Person. You
                            shall forthwith inform us in writing if this
                            declaration becomes untrue during any period of Your
                            use of the Services. Capitalised terms used here but
                            not defined shall have the meaning ascribed to them
                            in the KYC Guidelines issued by the RBI, as amended
                            from time to time.
                          </li>
                          <li>
                            • The usage of the Platform may also require You to
                            provide consent for providing Your Personal
                            Information (“PI”) (including but not limited to any
                            personal data or sensitive personal data as defined
                            under Applicable Laws) or to authorize Enkash to
                            derive Your data/information from any source or
                            public registry or portal, as may be necessary to
                            complete Your profile or Your application on the
                            Platform, conduct due diligence on You, undertake
                            KYC checks by itself or any other third party and/or
                            to provide You Services through this Platform. You
                            explicitly authorise Enkash to rely on such
                            information and You represent and warrant that such
                            information shall be and shall remain true and
                            accurate. Enkash shall adhere to best industry
                            practices including information security, data
                            protection and privacy law while processing such
                            applications. However, Enkash shall not be liable to
                            You against any liability or claims which may arise
                            out of such transactions as any such PI is being
                            collected, used, processed and shared with Your
                            explicit consent.
                          </li>
                          <li>
                            {" "}
                            • You agree not to use the Platform and/or Services
                            for any purpose that is unlawful, illegal or
                            forbidden by these Terms, or any local laws that
                            might apply to You. We may, at our sole discretion,
                            at any time and without advance notice or liability,
                            suspend, terminate or restrict Your access to all or
                            any component of the Platform and/or Services.
                          </li>
                          <li>
                            {" "}
                            • You are prohibited from posting or transmitting to
                            or through this Platform: (i) any unlawful,
                            threatening, libellous, defamatory, obscene,
                            pornographic or other material or content that would
                            violate rights of publicity and/or privacy or that
                            would violate any law or that harms minors in any
                            way; (ii) any commercial material or content
                            (including, but not limited to, solicitation of
                            funds, advertising, or marketing of any good or
                            services); (iii) any material or content that
                            infringes, misappropriates or violates any
                            copyright, trademark, patent right or other
                            proprietary right of any third party; (iv) contains
                            software viruses or any other computer code, files
                            or programs designed to interrupt, destroy or limit
                            the functionality of any computer resource; (v)
                            threatens the unity, integrity, defense, security or
                            sovereignty of India, friendly relations with
                            foreign states, or public order or causes incitement
                            to the commission of any cognizable offence or
                            prevents investigation of any offence or is
                            insulting to any other nation; (vi) impersonates
                            another person; or (vii) is illegal in any other
                            way. You shall be solely liable for any damages
                            resulting from any violation of the foregoing
                            restrictions, or any other harm resulting from Your
                            posting of content to this Platform.
                          </li>
                          <li>
                            {" "}
                            •You represent and and warrant that:{" "}
                            <ol type="a">
                              <li>
                                You are duly incorporated or established under
                                the laws of Your jurisdiction and have all
                                requisite power and authority to own and operate
                                Your business.
                              </li>

                              <li>
                                You have the full legal capacity and power to
                                enter into, exercise Your rights under, and
                                perform Your obligations under these Terms.
                              </li>

                              <li>
                                The execution, delivery and performance of these
                                Terms has been authorized by all necessary
                                corporate and organizational actions including
                                but not limited to board resolution and/or power
                                of attorney and/or letter of authority to bind
                                Your business and Your
                                company/firm/organization.
                              </li>

                              <li>
                                You have duly accepted these Terms, which form a
                                legal, valid and binding obligation, enforceable
                                in accordance with its clauses.
                              </li>

                              <li>
                                You do not, and shall not, engage in any
                                activity related to virtual currency,
                                cryptocurrency and other crypto products (like
                                non-fungible tokens or NFTs), prohibited
                                investments for commercial gain or credits that
                                can be monetized, re-sold or converted to
                                physical or digital goods or services or
                                otherwise exit the virtual world. Any breach of
                                this provision shall be subject to immediate
                                suspension or termination of Your access to or
                                use of the Platform or any or all Services, at
                                Enkash's sole discretion. You shall indemnify
                                Enkash from any losses arising from Your breach
                                of this provision.
                              </li>
                            </ol>
                          </li>
                          <li>
                            {" "}
                            • You further represent, warrant, and covenant that:
                            <ul>
                              <li>
                                Your use of the Platform and Services and sale
                                of Your products/services are solely for Your
                                own bona fide business activities which are in
                                compliance with the Applicable Laws and also the
                                instructions issued from time to time by Enkash
                                and its Facility Providers.
                              </li>

                              <li>
                                Your use of the Services corresponds to those
                                activities under the categories You have
                                expressly registered for at the time of entering
                                into these Terms and as set out in Your
                                onboarding form on the Enkash dashboard or as
                                otherwise approved in writing by Enkash.
                              </li>

                              <li>
                                You shall not resell or assign the Services, in
                                whole or in part, or otherwise allow the use of
                                the Services by any third parties, including
                                Your affiliates.
                              </li>

                              <li>
                                Your use of Services does not facilitate any
                                activity which is unlawful, illegal,
                                unauthorised, is carried on with the intent to
                                defraud, or is likely to result in Your unjust
                                enrichment and/or unlawful gain.
                              </li>

                              <li>
                                Your use of Services does not facilitate the
                                offer, sale or purchase of prohibited products
                                and/or services specified under these Terms.
                              </li>
                            </ul>
                          </li>
                          <li>
                            • You hold express informed consent of Your
                            customers to share customers’ information, including
                            personal data, with Enkash and its affiliates (i) in
                            connection with provision of Services to You and
                            other users of the Platform or Services, (ii) for
                            the purposes of sharing such information with
                            governmental authorities as and when demanded under
                            Applicable Laws, and (iii) for the purpose of
                            transaction tracking and fraud prevention.
                          </li>
                          <li>
                            • You acknowledge that the Services are of complex
                            nature and require the intervention of the Facility
                            Providers. You acknowledge and agree that Enkash
                            shall only be liable for acts or omissions which are
                            solely and directly attributable to Enkash.
                          </li>
                          <li>
                            • In order to avail the Services, You shall take all
                            necessary steps to facilitate the integration of
                            Enkash's solutions with Your platform. It is
                            clarified that any Server to Server (S2S)
                            integration, if done, shall be solely for the
                            purpose of availing the Services and intended to be
                            used or accessed only by You.
                          </li>
                          <li>
                            • You shall assist Enkash in furnishing to its
                            auditors, Facility Providers, governmental
                            authorities, or law enforcement agencies, upon
                            request, KYC Documents, relevant books, original
                            proofs of transactions, invoices, or other records,
                            including those pertaining to any order placed by
                            Your customers. You shall retain records relating to
                            transactions for a period of 10 (ten) years from the
                            relevant order date. Enkash, Facility Providers,
                            governmental agencies, and/or law enforcement
                            agencies shall be entitled to audit and inspect such
                            records at any time without prior notice. You shall
                            ensure full cooperation for any audit, inspection,
                            or request.
                          </li>
                          <li>
                            • You shall not (whether online or otherwise): (i)
                            describe Yourself as an agent or representative of
                            Enkash or any Facility Provider; (ii) represent that
                            You have any rights to offer any products or
                            services offered by Enkash or any Facility Provider;
                            or (iii) make any representations or warranties to
                            customers or third parties which may require Enkash
                            or a Facility Provider to undertake, directly or
                            indirectly, any obligation or responsibility.
                          </li>
                          <li>
                            • When a customer purchases goods or services from
                            You, You may, at Your discretion, impose a
                            convenience fee on the customer. Any responsibility
                            or losses incurred by Enkash as a result of such
                            convenience fee shall be borne by You, and You shall
                            indemnify Enkash for such liability or losses.
                          </li>
                        </ul>
                        <p>
                          You shall not engage, appoint, or otherwise utilize
                          any third-party service provider in connection with
                          the Services under this Agreement without the prior
                          written consent of Enkash. You further agrees that
                          they shall utilize the Services solely (a) directly
                          from Enkash; (b) through a payment orchestration
                          solution provided or expressly approved by Enkash; or
                          (c) via a proprietary in-house orchestration solution
                          developed by the Merchant, subject to Enkash’s prior
                          written approval. You shall not engage, integrate, or
                          route any payments through a third-party payment
                          orchestrator not explicitly approved by Enkash. Any
                          breach of this clause, including use of an unapproved
                          third-party orchestrator, shall entitle Enkash to
                          immediately suspend and/or terminate the Services
                          without any liability to Enkash.
                        </p>
                      </div>
                      <h5 className="c15 mt-6">4. Payment</h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            Applicable fees for the provision of Services shall
                            be levied by Enkash from time to time. You agree
                            that the fees shall be charged according to the
                            manner, rates and frequency determined by Enkash.
                            Enkash reserves the right to update the amount of
                            the fees at its sole discretion. Enkash fees allow
                            access to the entire suite of payments products,
                            dashboard and custom reports, and include MDR
                            charges, if any, as prescribed under applicable
                            guidelines. For clarity, Enkash fees include zero
                            MDR for Rupay Debit Cards and UPI transactions.
                          </li>

                          <li>
                            Fees are exclusive of applicable taxes and Enkash
                            will charge such taxes from time to time. You agree
                            that any statutory variations in applicable taxes
                            during the subsistence of these Terms shall be borne
                            by You.
                          </li>

                          <li>
                            Enkash will raise monthly invoices for Services
                            provided during each month. Invoices are available
                            on the dashboard. Any dispute regarding an invoice
                            must be communicated by You within ten (10) days
                            from the invoice date. Enkash will use good faith
                            efforts to reconcile any reasonably disputed
                            amounts.
                          </li>

                          <li>
                            You shall perform daily reconciliation for all
                            transactions processed. Any discrepancy must be
                            reported to Enkash within three (3) days of
                            receiving the funds. Enkash shall not be liable for
                            reconciliation issues reported after this period.
                          </li>

                          <li>
                            You shall be solely responsible for updating Your
                            GST registration number on the Enkash dashboard
                            before invoices are generated and must submit the
                            GST certificate as part of KYC. Enkash will issue
                            GST tax invoices and report transactions in GST
                            returns based on the information provided by You.
                            Enkash shall not be responsible for errors or
                            misrepresentation by You. Any liability imposed on
                            Enkash by GST authorities due to incorrect
                            information provided by You shall be recovered from
                            You.
                          </li>

                          <li>
                            To ensure the issuance of a valid B2B tax invoice
                            under GST law and to enable input tax credit, Enkash
                            must record Your correct GSTIN. You must verify Your
                            GSTIN and registered address in Your Enkash account
                            periodically and update them if necessary. If Your
                            correct GSTIN is not updated, You shall be solely
                            responsible, and Enkash shall not entertain any
                            request for invoice revision or GST reporting
                            amendments.
                          </li>
                        </ul>
                      </div>
                      <h5 className="c15 mt-6">5.Privacy policy</h5>
                      <div className="container my-4">
                        <p>
                          By using the website, You hereby consent to the use of
                          Your information as we have outlined in our Privacy
                          Policy.
                        </p>
                      </div>
                      <h5 className="c15 mt-6">
                        6. Third party links / offers{" "}
                      </h5>
                      <div className="container my-4">
                        <p>
                          The Platform contains links to other websites over
                          which we have no control. We encourage You to review
                          the terms and privacy policies of those other websites
                          so You can understand Your use of the websites and how
                          they collect, use and share Your information. Enkash
                          is not responsible for the terms and conditions,
                          privacy policies or practices of other websites to
                          which You choose to link from the Platform. You
                          further acknowledge and agree that Enkash shall not be
                          responsible or liable, directly or indirectly, for any
                          damage or loss caused or alleged to be caused by or in
                          connection with use of or reliance on any such
                          content, goods or services available on or through any
                          such site or resource. Your interaction with any third
                          party accessed through the website is at Your own
                          risk, and Enkash will have no liability with respect
                          to the acts, omissions, errors, representations,
                          warranties, breaches or negligence of any such third
                          parties or for any personal injuries, death, property
                          damage, or other damages or expenses resulting from
                          Your interactions with the third parties.
                        </p>
                      </div>
                      <h5 className="c15 mt-6">7. Disclaimer of Warranty</h5>
                      <div className="container my-4">
                        <p>
                          To the maximum extent permitted by Applicable Laws,
                          the Platform and the Services are provided on an “as
                          is” basis. You acknowledge that Enkash does not
                          warrant that the Service(s) will be uninterrupted or
                          error free or fit for Your specific business purposes.
                        </p>
                      </div>
                      <h5 className="c15 mt-6">8. Limitation of Liability</h5>
                      <div className="container my-4">
                        <ol>
                          <li>
                            Enkash (including its officers, directors,
                            employees, representatives, affiliates, and
                            providers) will not be responsible or liable for (a)
                            any injury, death, loss, claim, act of God,
                            accident, delay, or any direct, special, exemplary,
                            punitive, indirect, incidental or consequential
                            damages of any kind (including without limitation
                            lost profits or lost savings), whether based in
                            contract, tort, strict liability or otherwise, that
                            arise out of or is in any way connected with (i) any
                            failure or delay (including without limitation the
                            use of or inability to use any component of the
                            Platform), or (ii) any use of the Platform or
                            Services or content therein, or (iii) the
                            performance or non-performance by us or any Facility
                            Provider, even if we have been advised of the
                            possibility of damages to such parties or any other
                            party, or (iv) any damages to or viruses that may
                            infect Your computer equipment or other property as
                            the result of Your access to the Platform or
                            Services or Your use of any content therein.
                          </li>

                          <li>
                            Notwithstanding anything under these Terms, Enkash's
                            aggregate liability and that of its affiliates,
                            officers, employees and agents relating to the
                            Service(s), will not exceed an amount equal to one
                            (1) month fees paid by You for the specific
                            Service(s) giving rise to the liability. Enkash's
                            liability under or in connection with Terms will be
                            proportionately reduced to the extent any loss or
                            damage is contributed to by You or Your third-party
                            providers.
                          </li>
                        </ol>
                      </div>
                      <h5 className="c15 mt-6">9. Indemnity</h5>
                      <div className="container my-4">
                        <p>
                          You agree to indemnify and hold Enkash (and its
                          officers, affiliates, group company, directors, agents
                          and employees) harmless from any and against all
                          claims, whether or not brought by third parties,
                          causes of action, demands, recoveries, losses,
                          damages, fines, penalties or other costs or expenses
                          of any kind or nature, including reasonable attorneys'
                          fees, or arising out of or related to Your breach of
                          these Terms, Your violation of any Applicable Laws or
                          the rights of a third party, or Your use of the
                          Platform or any disputes between You and any third
                          party. The covenants of indemnity set forth herein
                          shall survive and continue even after the termination
                          of Your use of the Services.
                        </p>
                      </div>
                      <h5 className="c15 mt-6">10. Card Association Rules</h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            "Card Payment Network Rules" refer to the written
                            rules, regulations, releases, guidelines, processes,
                            interpretations and other requirements (whether
                            contractual or otherwise) imposed and adopted by the
                            card payment networks. These networks have
                            infrastructure and processes to enable transaction
                            authorisation and require You to comply with all
                            applicable guidelines, rules and regulations
                            formulated by them.
                          </li>

                          <li>
                            The card payment networks reserve the right to amend
                            their guidelines, rules and regulations from time to
                            time. We may be required to revise these Terms
                            pursuant to such amendments, and all such changes
                            shall be deemed binding on You with immediate
                            effect.
                          </li>

                          <li>
                            You agree to fully comply with all programs,
                            guidelines, requirements that may be published
                            and/or mandated by the card payment networks.
                            Notwithstanding our assistance in understanding the
                            Card Payment Network Rules, You expressly
                            acknowledge and agree that You are assuming the risk
                            of compliance with all provisions of the Card
                            Payment Network Rules, regardless of whether You are
                            aware of or have access to those provisions. For
                            illustration purposes - MasterCard, Visa, Diners,
                            RuPay and American Express make excerpts of their
                            respective rules available on their internet sites.
                          </li>

                          <li>
                            In the event that Your non-compliance of Card
                            Payment Network Rules, results in any fines,
                            penalties or other amounts being levied on or
                            demanded of us by a card payment network, then
                            without prejudice to our other rights hereunder, You
                            shall forthwith reimburse us in an amount equal to
                            the fines, penalties or other amount so levied or
                            demanded or spent by us in any manner in relation to
                            such fines, penalties and levies. If You fail to
                            comply with Your obligations towards the card
                            payment networks, Enkash may suspend settlement or
                            suspend/terminate the Services forthwith.
                          </li>
                        </ul>
                      </div>
                      <h5 className="c15 mt-6">11. Waiver</h5>
                      <div className="container my-4">
                        <p>
                          Enkash shall not be deemed to have waived any right or
                          provision of this Agreement unless such waiver is made
                          in writing. A waiver of any term or condition of this
                          Agreement shall not be deemed a waiver of any other
                          term or condition, nor shall it be a continuing
                          waiver.
                        </p>
                      </div>
                      <h5 className="c15 mt-6">12.Force Majeure</h5>
                      <div className="container my-4">
                        <p>
                          If performance of Services/Platform by Enkash is
                          prevented, restricted, delayed or interfered with by
                          reason of labour disputes, strikes, acts of God,
                          epidemic, pandemic, floods, lightning, severe weather,
                          shortages of materials, rationing, inducement of any
                          virus, malware, trojan or other disruptive mechanisms,
                          any event of hacking or illegal usage of the Platform,
                          utility or communication failures, earthquakes, war,
                          revolution, acts of terrorism, civil commotion, acts
                          of public enemies, blockade, embargo or any law,
                          order, proclamation, regulation, ordinance, demand or
                          requirement having legal effect of any government,
                          regulatory or any judicial authority or representative
                          of any such government, or any other act whatsoever,
                          whether similar or dissimilar to those referred to in
                          this clause, which are beyond the reasonable control
                          of Enkash, then Enkash shall be excused and discharged
                          from such performance to the extent of and during the
                          period of such force majeure event, and such
                          non-performance shall, in no manner whosoever, amount
                          to a breach by Enkash of its obligations herein or
                          incur any legal liability on Enkash.
                        </p>
                      </div>
                      <h5 className="c15 mt-6">
                        13.Anti Bribery and Sanctions Laws
                      </h5>
                      <div className="container my-4">
                        <p>
                          You agree to comply with all applicable anti-bribery
                          and anti-corruption laws which prohibit officials,
                          representatives, agents or any other person associated
                          with or acting on behalf of You from giving, offering,
                          promising to offer, receiving/ accepting or acting in
                          any other manner so as to induce a payment, gift,
                          hospitality or anything else of value (either directly
                          or indirectly) whether from within the country or from
                          abroad to government officials, public servants,
                          regulatory bodies, judicial authorities, persons in
                          positions of authority, elected or contesting
                          electoral candidates, political parties or office
                          bearers thereof or any other third party or person in
                          order to obtain an improper commercial/ business
                          advantage of any kind. Government officials include
                          any government employee, candidate for public office,
                          an employee of government- owned or
                          government–controlled companies, public international
                          organisations and political parties. You also agree
                          not to give, offer, pay, promise or authorise to give
                          or pay, directly, indirectly or through any other
                          person, of anything of value to anybody for the
                          purpose of inducing or rewarding any favourable action
                          or influencing any decision in Your favour.
                        </p>
                      </div>
                      <h5 className="c15 mt-6">14. Additional Terms </h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            You shall not assign or otherwise transfer Your
                            rights or obligations under these Terms. Enkash may
                            assign its rights and duties under these Terms
                            without any such assignment being considered a
                            change to the Terms and without any notice to You.
                            If we fail to act on Your breach or anyone else's
                            breach on any occasion, we are not waiving our right
                            to act with respect to future or similar breaches.
                          </li>

                          <li>
                            Enkash may, at its reasonable discretion and in
                            compliance with Applicable Laws, blacklist Your end
                            users to manage fraud and risk. Blacklisted users
                            may be restricted from transactions, and removal of
                            blacklisting may occur based on updated risk
                            assessments. You acknowledge and agree that Enkash
                            may take such measures to protect the integrity of
                            the payment ecosystem. Enkash is not obligated to
                            provide prior notice or reasons for these actions.
                            You agree to be solely responsible for providing any
                            notification to Your end users.
                          </li>

                          <li>
                            Additional terms applicable to the Services provided
                            by Enkash or its Affiliates are as under: (a) The
                            laws of India, without regard to its conflict of
                            laws, rules, will govern these Terms, as well as
                            Your and our observance of the same. If You take any
                            legal action relating to Your use of the Platform or
                            these Terms, You agree to file such action only in
                            the courts located in Bangalore, India. In any such
                            action that We may initiate, the prevailing party
                            will be entitled to recover all legal expenses
                            incurred in connection with the legal action,
                            including but not limited to costs, both taxable and
                            non-taxable, and reasonable attorney fees. You
                            acknowledge that You have read and have understood
                            these Terms, and that these Terms have the same
                            force and effect as a signed agreement. This clause
                            shall survive termination of the Terms. (b) Without
                            prejudice to any other rights or remedies Enkash may
                            have, You hereby agree and confirm that Enkash shall
                            have the right to set-off by whatever means the
                            whole or any part of Your liability to Enkash under
                            these Terms (or any other agreement between You and
                            Enkash or its affiliates) against any funds, sums or
                            other amounts credited to, or owing to, You under
                            these Terms (or any other agreement between You and
                            Enkash or its affiliates). You agree that Enkash may
                            exercise the right of set-off at any time, without
                            any prior notice to You. In the event such set-off
                            does not fully reimburse Enkash for the liability
                            owed, You shall pay Enkash a sum equal to any
                            shortfall thereof. (c) You shall not (whether
                            on-line or otherwise): (i) describe Yourself as an
                            agent or representative of Enkash or any Facility
                            Provider; (ii) represent that You have any rights to
                            offer any products or services offered by Enkash or
                            the Facility Provider; and (iii) make any
                            representations to Your customer or any third party
                            or give any warranties which may require Enkash or
                            Facility Provider to undertake to or be liable for,
                            whether directly or indirectly, any obligation
                            and/or responsibility to customer or any third
                            party. (d) Enkash reserves the right to make changes
                            to the website, related policies and agreements,
                            these Terms and the Privacy Policy at the time as it
                            deems fit and proper, including but not limited to
                            comply with changes in law or regulation, correct
                            inaccuracies, omissions, errors or ambiguities,
                            reflect changes in the process flow, scope and
                            nature of the Services and ancillary services,
                            company reorganization, market practice or customer
                            requirements.
                          </li>

                          <li>
                            You agree that the fees for any Services under these
                            Terms shall be charged according to the manner,
                            rates and frequency determined by Enkash. Enkash
                            reserves the right to update the amount of the fees
                            including for Services for which no charge has been
                            levied previously in accordance with this clause.
                            You agree that You shall be liable to pay any
                            additional fees as determined by Enkash in the
                            event: <br />
                            (a) You avail certain value-added services available
                            on the dashboard irrespective of whether they have
                            been available free of charge previously.
                            <br /> (b) You avail any new Services not mentioned
                            in these Terms. You agree that Your use of any
                            Service or a value-added service shall be construed
                            as a consent to any additional fees which may be
                            levied by Enkash on such additional Service or
                            value-added service.
                          </li>
                        </ul>
                      </div>
                      <h5 className="c15 mt-6">15. Advertising </h5>
                      <div className="container my-4">
                        <p>
                          Some of the Services may be supported by advertising
                          revenue and may display advertisements and promotional
                          material. These advertisements may be targeted to the
                          content of information stored on the Services, queries
                          made through the Services or other information. The
                          manner, mode and extent of advertising by Enkash are
                          subject to change without any specific notice to You.
                          In consideration for Enkash granting You access to and
                          use of the Services, You agree that Enkash may place
                          such advertisements on the Services through website,
                          print media, electronic media, social media,
                          advertising platforms, etc.
                        </p>
                      </div>
                      <h5 className="c15 mt-6">
                        16. Suspension and Termination
                      </h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            Notwithstanding anything to the contrary, Enkash
                            shall have the right to immediately suspend Services
                            and settlement of any monies or payments to You,
                            without any liability to You, in the event of the
                            following:
                            <ul className="list-style-type: lower-alpha;">
                              <li>You breach any clause of these Terms.</li>
                              <li>
                                You facilitate any transaction which is unlawful
                                or in contravention with ‘Prohibited Products
                                and Services’.
                              </li>
                              <li>
                                Enkash receives instructions from Facility
                                Providers, governmental authorities, or law
                                enforcement agencies to suspend the Services, in
                                whole or in part, regardless of whether there is
                                a pending investigation or enquiry.
                              </li>
                              <li>
                                You use the Services for any transactions which
                                have a high-risk score as per Enkash's internal
                                fraud assessment tools or policies.
                              </li>
                              <li>
                                Enkash is of the opinion that there are
                                suspicious circumstances surrounding Your
                                activities.
                              </li>
                              <li>
                                Enkash is of the opinion that there are pending,
                                anticipated, or excessive disputes, refunds, or
                                reversals relating to Your use of the Services.
                              </li>
                              <li>
                                Your products/services infringe, or are
                                suspected of infringing, intellectual property
                                rights, copyrighted works, patented inventions,
                                trademarks, or trade secrets, or You are
                                suspected of selling counterfeit/knock-off
                                goods.
                              </li>
                              <li>
                                You materially change the type of
                                products/services provided to end customers as
                                declared in the onboarding form without prior
                                written permission from Enkash, or You provided
                                misleading or false information during
                                onboarding.
                              </li>
                              <li>
                                Enkash, in its sole discretion, determines that
                                Your activities expose Enkash to risks that are
                                unacceptable.
                              </li>
                              <li>
                                Enkash, in its sole discretion, is required to
                                do so due to regulatory changes impacting the
                                Services.
                              </li>
                            </ul>
                          </li>

                          <li>
                            These Terms are effective from the date You first
                            access or use the Platform or Services and continue
                            until terminated by You or Enkash. Unless You have a
                            separate offline agreement for the Services, these
                            Terms apply. Enkash may terminate these Terms or
                            close Your account at any time for any reason,
                            including any activity that may harm Enkash’s
                            goodwill. Where required by law, advance notice of
                            termination will be provided.
                          </li>

                          <li>
                            Termination does not immediately relieve You of
                            obligations incurred by You under these Terms. Upon
                            termination, You agree to stop using the Services.
                            Your continued or renewed use of the Services after
                            termination serves to renew Your consent to the
                            Terms. In addition, upon termination You understand
                            and agree that we will not be liable to You for
                            compensation, reimbursement, or damages related to
                            Your use of the Services, or any termination or
                            suspension of the Services or deletion of Your
                            information or account data; and You will still
                            liable to us for any fees or fines, or other
                            financial obligation incurred by You or through Your
                            use of the Services prior to termination.
                          </li>
                        </ul>
                      </div>
                      <h5 className="c15 mt-6">
                        17. Prohibited Products and Services{" "}
                      </h5>
                      <div className="container my-4">
                        <ul>
                          <li>
                            Gambling including lottery tickets, sports bets,
                            online gambling site enrolments.
                          </li>
                          <li>
                            Games of chance or gaming activities involving
                            betting.
                          </li>
                          <li>
                            Mystery boxes / get-rich schemes / betting models.
                          </li>
                          <li>
                            Gaming lines of business (LOB) operated by
                            individuals or sole proprietors.
                          </li>
                          <li>
                            Adult goods & services: pornography and sexually
                            suggestive materials.
                          </li>
                          <li>Escort/prostitution services, friend finders.</li>
                          <li>
                            Adult/mature content websites, memberships, or
                            services leading to chargebacks.
                          </li>
                          <li>Personal massagers / sex toys.</li>
                          <li>
                            Websites depicting violence or extreme sexual
                            violence.
                          </li>
                          <li>Bestiality.</li>
                          <li>
                            Child pornography or material involving minors.
                          </li>
                          <li>Child abuse content or promotion.</li>
                          <li>
                            Drugs & paraphernalia: hallucinogens, illegal drugs,
                            herbal drugs (e.g., salvia, mushrooms).
                          </li>
                          <li>
                            Prescription/herbal drugs sold online requiring a
                            licensed medical prescription.
                          </li>
                          <li>
                            Drug accessories: pipes, bongs, rolling papers, etc.
                          </li>
                          <li>
                            Drug test circumvention aids (cleansing drinks,
                            additives).
                          </li>
                          <li>
                            Copyright unlocking devices (e.g., mod chips).
                          </li>
                          <li>
                            Unauthorized copies of copyrighted media (books,
                            music, movies).
                          </li>
                          <li>
                            Unauthorized software or games (OEM, bundled, etc.).
                          </li>
                          <li>
                            Hacking/cracking tools: manuals, guides, devices for
                            illegal access.
                          </li>
                          <li>
                            Bulk marketing tools (email/SMS/fax lists,
                            software).
                          </li>
                          <li>
                            Database providers for tele-callers or spamming.
                          </li>
                          <li>
                            Cable descramblers, black boxes, and devices to
                            illegally access satellite/cable.
                          </li>
                          <li>
                            Unregulated/unlicensed Money Service Businesses
                            (MSBs).
                          </li>
                          <li>
                            Unlicensed Money & Value Transfer Services (MVTS).
                          </li>
                          <li>Unauthorized Forex merchants or brokers.</li>
                          <li>
                            Unauthorized money exchange or transfer services
                            (card-to-cash, DMT).
                          </li>
                          <li>
                            Cryptocurrency services (including bitcoin
                            exchanges, crypto wallets).
                          </li>
                          <li>Hawala.</li>
                          <li>Crowdfunding (equity or debt-based).</li>
                          <li>
                            Securities trading without proper licenses (stocks,
                            bonds, mutual funds).
                          </li>
                          <li>
                            Commodities trading without proper authorization.
                          </li>
                          <li>Smuggling-related goods or operations.</li>
                          <li>
                            Counterfeit and unauthorized goods (designer fakes,
                            fake autographs/stamps).
                          </li>
                          <li>
                            Sale of items falsely marked “tester,” “not for
                            resale,” or altered products.
                          </li>
                          <li>Illegal goods and services.</li>
                          <li>Illegal trading of animals or animal parts.</li>
                          <li>
                            Live animals or parts (hides, skins, nails, etc.).
                          </li>

                          <li>Endangered species or their derivatives.</li>
                          <li>
                            Organs/body parts (live, preserved, or cadaver).
                          </li>
                          <li>Organ trading.</li>
                          <li>
                            Weapons (firearms, knives, brass knuckles,
                            ammunition).
                          </li>
                          <li>Illegal arms trading.</li>
                          <li>Weapons of mass destruction (WMDs).</li>
                          <li>
                            Explosives, fireworks, pyrotechnics, toxic or
                            radioactive goods.
                          </li>
                          <li>
                            Regulated substances like Freon, chemical solvents,
                            etc.
                          </li>
                          <li>
                            Regulated goods: car titles, law enforcement gear,
                            recalled items.
                          </li>
                          <li>
                            Offensive or hate-promoting materials (racist,
                            violent, intolerant).
                          </li>
                          <li>
                            Crime-related memorabilia (e.g., items from crime
                            scenes).
                          </li>
                          <li>
                            Literature or products encouraging illegal acts.
                          </li>
                          <li>
                            Miracle cures, unverified medical remedies, health
                            scams.
                          </li>
                          <li>
                            Products violating medical safety specifications or
                            performance.
                          </li>
                          <li>
                            Work-from-home scams or misleading income
                            opportunities.
                          </li>
                          <li>
                            Guaranteed job services or deceptive employment
                            offerings.
                          </li>
                          <li>
                            Multi-level marketing (MLM) schemes or pyramids.
                          </li>
                          <li>
                            MLM collection fees or matrix-style referral sites.
                          </li>
                          <li>Get-rich-quick schemes.</li>
                          <li>
                            Intangible goods/services (e.g., software downloads,
                            digital products).
                          </li>
                          <li>Aggregation/consolidation business models.</li>
                          <li>
                            Drop-shipped merchants or drop-shipping business
                            models.
                          </li>
                          <li>
                            Web-based telephony, calling cards, bandwidth/data
                            transfer services.
                          </li>
                          <li>
                            Voice/knowledge process outsourcing (KPO/BPO).
                          </li>
                          <li>
                            Telemarketing services (unsolicited sales calls,
                            travel packages, etc.).
                          </li>
                          <li>Credit counselling or credit repair services.</li>
                          <li>Bankruptcy advisory or filing services.</li>
                          <li>Chit funds or unregistered credit societies.</li>
                          <li>
                            Pawnshops or services offering secured high-risk
                            loans.
                          </li>
                          <li>Immigration consultancy or services.</li>
                          <li>Adoption agencies or services.</li>
                          <li>
                            Psychic consultations, astrology/esoteric services.
                          </li>
                          <li>
                            Religious products/services that make false claims
                            or hurt sentiments.
                          </li>
                          <li>
                            Offline/online dating services, matchmaking meetups.
                          </li>
                          <li>Alcohol or alcoholic beverages.</li>
                          <li>
                            Tobacco and cigarettes (including chewing tobacco).
                          </li>
                          <li>
                            Electronic cigarettes (e-cigarettes or vapes).
                          </li>
                          <li>
                            Traffic devices (radar jammers, signal changers,
                            plate covers).
                          </li>
                          <li>
                            Fake government IDs, passports, diplomas, or noble
                            titles.
                          </li>
                          <li>Wholesale or discounted currency sales.</li>
                          <li>
                            Loose diamonds or unregulated precious stones.
                          </li>
                          <li>
                            Any service, person, product, place, entity listed
                            as illegal/sanctioned by RBI or regulators.
                          </li>
                          <li>
                            Any act or product described as illegal by law,
                            including by RBI or government regulators.
                          </li>
                          <li>
                            Violation of platform terms (EnKash, banks, etc.).
                          </li>
                          <li>
                            Provision of services that could lead to buyer’s
                            remorse/fraud losses.
                          </li>
                          <li>
                            Products/services casting payment gateways or
                            partners in a negative light.
                          </li>
                          <li>
                            Products not complying with local/international
                            laws.
                          </li>
                          <li>
                            Any other activity prohibited by applicable law.
                          </li>
                        </ul>
                        <p>
                          The above list is subject to updates / changes by
                          Enkash based on instructions received from Facility
                          Providers.
                        </p>
                        <p>
                          <strong>Indemnification: </strong> You agree to not
                          hold Enkash responsible and/or liable for any issue or
                          claim arising out for any dispute whatsoever between
                          You and the payment gateway or Your bank or the
                          Counterparty (including but not limited to billers and
                          the BBPS system) You shall keep Enkash indemnified and
                          hold Enkash harmless in the case of any third-party
                          claims against Enkash (whether by the Counterparty,
                          payment gateway, bank, any government authority or any
                          other Person) for the payments made or attempted to be
                          made by You (or any other Person through your account)
                          using Enkash
                        </p>{" "}
                        <p>
                          <strong>Information Input </strong>
                        </p>
                        <p>
                          You are responsible for all the information you input
                          during your use of the Enkash. You are responsible for
                          ensuring that all the payment details provided by you
                          are accurate.{" "}
                        </p>
                        <p>
                          In particular, you are responsible for ensuring the
                          correctness of: (i) details of the biller / bill
                          account number, (ii) details of the payment instrument
                          (or selection from the saved payment instrument) and
                          (iii) the amounts of payment, In the event you input
                          any of these details incorrectly or as suggested by
                          Enkash. You will be responsible for the resultant
                          transaction and all charges that result from the same.
                          Enkash may at its own discretion, without having any
                          obligation to do so, assist in reversing such
                          transactions if technically feasible and viable for
                          Enkash{" "}
                        </p>
                        <p>
                          Enkash may ask for additional information if required
                          from time to time including but not limited bill
                          copies etc., to verify the underlying transactions and
                          in case you fail to provide such information then you
                          may be unable to use the Enkash’s Payment features.
                          Further, Enkash may ask for additional documents in
                          case a transaction appears to be suspicious. Failure
                          to provide such documentation within 72 hours may
                          result in your transaction failing and at Enkash's
                          sole discretion, Your access to Enkash Payment System
                          being revoked.
                        </p>
                        <p>
                          <strong>
                            Good Practices & Awareness Guidelines for Merchants
                            of a Payment Aggregator
                          </strong>
                        </p>
                        <ul>
                          <li>Never share login, OTP, PIN, API keys.</li>
                          <li>Secure your QR, POS, and payment links.</li>
                          <li>Monitor transactions & refunds daily.</li>
                          <li>Use HTTPS, updated plugins, and secure APIs.</li>
                          <li>Beware of fake support callers and phishing.</li>
                          <li>Report suspicious activity immediately.</li>
                        </ul>
                      </div>

                      <div className="container my-4">
                        <h5 className="c15 mt-6">
                          <strong>PRIVACY</strong>
                        </h5>{" "}
                        <p>
                          <i>
                            {" "}
                            YOUR PRIVACY IS EXTREMELY IMPORTANT TO US. UPON
                            ACCEPTANCE OF THESE TERMS OF USE YOU CONFIRM THAT
                            YOU HAVE READ, UNDERSTOOD AND UNEQUIVOCALLY ACCEPTED
                            OUR POLICIES, INCLUDING THE PROVISIONS OF OUR
                            PRIVACY POLICY.
                          </i>
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center">***** END OF POLICY *****</p>
        </div>
        <div>
          {" "}
          {/* <div className="enkash-banking-maincontainer" lang="hi">
            <div className=" enkash-blog-detail  ">
              <div className={styles.inner_container}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="enkash-term-condtions">
                      <div className={styles.sectionTitle} lang="hi">
                        <DynamicHeading
                          content={[
                            {
                              title: "शर्तें और नियम",
                              color: "color-equity-blue",
                            },
                          ]}
                          headingTag="p"
                          className="f-5 text-center fs-1 lh-sm"
                        />
                      </div>{" "}
                      <DynamicHeading
                        content={[
                          {
                            title:
                              "वर्तमान सस्ंकरण अतिं तिम अपडटे : 30 नवबं र 2025",
                            color: "color-black",
                          },
                        ]}
                        headingTag="h6"
                        className="f-5 text-start "
                      />
                      <section id="ppi-hindi">
                        <div className="container my-4">
                          <p>
                            ये शर्तें और नियम ("शर्तें") आपके और नेहत टेक
                            सॉल्यूशंस प्राइवेट लिमिटेड ("एंकैश" या "हम", या
                            "हमारा" या "हमारे") के बीच एक कानूनी समझौता हैं।
                          </p>
                          <p>
                            एंकैश द्वारा प्लेटफॉर्म के माध्यम से प्रदान की गई
                            सेवाएं केवल भारत में उपलब्ध हैं और उपयोग के लिए
                            उपयुक्त हैं।
                          </p>
                          <p>
                            प्लेटफॉर्म तक पहुंचने या सेवाओं का उपयोग करने से
                            पहले इन शर्तों को ध्यान से पढ़ें। प्लेटफॉर्म तक
                            पहुंचने या सेवाओं का उपयोग करने से, आप इन शर्तों से
                            बंधे होने के लिए सहमत होते हैं, जिसमें हमारी
                            गोपनीयता नीति और प्लेटफॉर्म के माध्यम से प्राप्त
                            सेवाओं पर लागू होने वाली कोई अन्य नीति शामिल है। यदि
                            आप इन शर्तों से सहमत नहीं हैं या इन शर्तों से बंधे
                            होना नहीं चाहते, तो आपको सेवाओं के उपयोग को तुरंत
                            समाप्त करना होगा। एंकैश को वेबसाइट पर अपडेटेड
                            संस्करण पोस्ट करके किसी भी समय इन शर्तों को संशोधित
                            या अन्यथा बदलने का अधिकार सुरक्षित है। अपडेटेड
                            शर्तें पोस्टिंग के तुरंत बाद प्रभावी हो जाएंगी।
                            अपडेट्स/संशोधनों के लिए इन शर्तों की जांच करना आपकी
                            जिम्मेदारी है। प्लेटफॉर्म तक आपकी निरंतर पहुंच या
                            सेवाओं का उपयोग अपडेटेड या संशोधित शर्तों की आपकी
                            सहमति/अनुमोदन का संकेत देता है। यदि आप इन शर्तों या
                            इन शर्तों में किसी भी बाद के संशोधनों का विरोध करते
                            हैं, तो आपका एकमात्र उपाय सेवाओं के उपयोग को तुरंत
                            समाप्त करना है।
                          </p>
                          <p>
                            हम आपको समय-समय पर एंकैश या उसके संबद्ध संगठनों
                            द्वारा प्रदान की गई विशिष्ट सेवाओं के संबंध में
                            अतिरिक्त शर्तों से सहमत होने की आवश्यकता हो सकती है।
                            आप सहमत होते हैं कि आप हमारे प्लेटफॉर्म के माध्यम से
                            पहुंचने या उपयोग करने वाली या हमारे प्लेटफॉर्म पर
                            हाइपरलिंक द्वारा उपलब्ध किसी भी विशिष्ट सेवा की पूरक
                            शर्तों से बंधे होंगे। हम आपको 'स्वीकृति' के माध्यम
                            से उन पूरक शर्तों से सहमत होने के लिए कह सकते हैं।
                            यदि आप किसी विशिष्ट सेवा का लाभ उठाने का चयन करते
                            हैं, तो आपको फॉर्म पूरे करने और अतिरिक्त
                            डेटा/जानकारी प्रदान करने की आवश्यकता हो सकती है। आप
                            यहां एंकैश को सहमति देते हैं कि हम प्लेटफॉर्म पर
                            प्रदान की गई डेटा/जानकारी को स्टोर करें और उपयोग
                            करें (i) प्रारंभिक साइन अप/पंजीकरण प्रक्रिया के
                            दौरान और (ii) भविष्य में किसी विशिष्ट सेवा के लिए
                            पंजीकरण या ऑनबोर्डिंग के दौरान। आप यहां आगे एंकैश को
                            सहमति देते हैं कि हम किसी विशिष्ट सेवा के पंजीकरण या
                            ऑनबोर्डिंग प्रक्रिया के लिए प्रदान की गई ऐसी
                            डेटा/जानकारी से फॉर्म पूर्व-भरें। आप स्वीकार करते
                            हैं और सहमत होते हैं कि हम किसी विशिष्ट सेवा के
                            संबंध में प्रदान की गई डेटा/जानकारी को सत्यापित करने
                            और जहां लागू हो वहां पुनः-सत्यापित करने का अधिकार
                            सुरक्षित रखते हैं। किसी विशिष्ट सेवा तक पहुंचने और
                            उपयोग करने का आपका अधिकार उस विशिष्ट सेवा के पंजीकरण
                            या ऑनबोर्डिंग प्रक्रिया के हमारे एकमात्र विवेक पर
                            सफल समापन के अधीन है।
                          </p>
                          <p>
                            यह दस्तावेज/समझौता/समझ एक कंप्यूटर-जनित इलेक्ट्रॉनिक
                            रिकॉर्ड है जो सूचना प्रौद्योगिकी (मध्यस्थ
                            दिशानिर्देश और डिजिटल मीडिया नैतिकता संहिता) नियम,
                            2021 (समय-समय पर संशोधित) के नियम 3 के अनुसार
                            प्रकाशित है, जो सूचना प्रौद्योगिकी अधिनियम, 2000
                            (समय-समय पर संशोधित) के साथ पढ़ा जाता है और इसमें
                            कोई भौतिक या डिजिटल हस्ताक्षर की आवश्यकता नहीं है।
                          </p>
                        </div>
                        <h5 className="c15 mt-6">1. परिभाषाएं</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              "एडी-1 बैंक" का अर्थ भारत में एक अनुसूचित
                              वाणिज्यिक बैंक है जो आरबीआई द्वारा समय-समय पर जारी
                              निर्देशों के अनुसार सभी वर्तमान और पूंजी खाता
                              लेनदेन करने के लिए प्रासंगिक विधान के तहत अधिकृत
                              है।
                            </li>

                            <li>
                              "संबद्ध संगठन" का अर्थ एंकैश के साथ प्रत्यक्ष या
                              अप्रत्यक्ष रूप से नियंत्रण करने वाला, नियंत्रित
                              होने वाला, या सामान्य नियंत्रण के अधीन कोई भी इकाई
                              है, जहां "नियंत्रण" (सहसंबंधी अर्थ सहित,
                              "नियंत्रित द्वारा" और "सामान्य नियंत्रण के अधीन"
                              शब्दों सहित) का अर्थ उस व्यक्ति के प्रबंधन और
                              नीतियों के दिशा निर्देश देने या कारण बनाने की
                              शक्ति का प्रत्यक्ष या अप्रत्यक्ष कब्जा है, चाहे
                              मतदान प्रतिभूतियों के स्वामित्व, अनुबंध या अन्यथा
                              के माध्यम से।
                            </li>

                            <li>
                              "लागू कानून" का अर्थ (i) आपके, हमारे या प्रश्न में
                              विषय वस्तु पर लागू होने वाले या उसके ऊपर सक्षम
                              क्षेत्राधिकार और कानून की शक्ति रखने वाले किसी भी
                              लागू केंद्रीय, राष्ट्रीय, राज्य या स्थानीय
                              सरकारी/नियामक प्राधिकरण का कोई कानून, विधान, नियम,
                              विनियम, आदेश, परिपत्र, डिक्री, निर्देश, निर्णय,
                              निर्णय या अन्य समान जनादेश है, जैसा कि समय-समय पर
                              संशोधित हो सकता है, और (ii) बिना सीमा के 'वित्तीय
                              क्षेत्र नियामकों' द्वारा जारी कोई अधिसूचना,
                              परिपत्र, निर्देश या अन्य समान निर्देश शामिल करेगा
                              जिसमें लेकिन सीमित नहीं आरबीआई और/या एनपीसीआई की
                              वेबसाइट www.npci.org.in पर परिभाषित नियम, विनियम,
                              भूमिकाएं, जिम्मेदारियां और प्रक्रियाएं शामिल हैं।
                            </li>

                            <li>
                              "चार्जबैक" का अर्थ सुविधा प्रदाता के ग्राहक के
                              अनुरोध पर सुविधा प्रदाता द्वारा अनुरोधित उलटाव
                              (ऐसा उलटाव) का है, जो आपके द्वारा लगाए गए लेनदेन
                              राशि के डेबिट का उलटाव है, जहां उलटाव सुविधा
                              प्रदाता द्वारा आपके द्वारा प्रदान किए गए लेनदेन
                              संबंधी दस्तावेजों और जानकारी की जांच के बाद
                              स्वीकृत है, परिणामस्वरूप एंकैश को लेनदेन राशि और
                              चार्जबैक प्रोसेसिंग से जुड़े शुल्क, दंड या
                              जुर्माने लगाए जाते हैं।
                            </li>

                            <li>
                              "चार्जबैक राशि" का अर्थ सुविधा प्रदाता द्वारा
                              चार्जबैक के तहत एंकैश को लगाई गई कुल राशि है।
                            </li>

                            <li>
                              "चार्जबैक दस्तावेज" का अर्थ भाग I: ऑनलाइन पेमेंट
                              एग्रीगेशन सेवाओं के लिए विशिष्ट शर्तों के खंड 2.1
                              में वर्णित शब्द का अर्थ है।
                            </li>

                            <li>
                              अंतिम उपभोक्ता सीधे व्यापारी के साथ विवाद/धोखाधड़ी
                              उठाता है और यदि मामला व्यापारी के साथ अनसुलझा रहता
                              है तो अंतिम उपयोगकर्ता{" "}
                              <a
                                href="mailto:support@enkash.com"
                                className="text-break"
                              >
                                support@enkash.com
                              </a>{" "}
                              पर ऑनलाइन उठा सकता है या एंकैश सपोर्ट ईमेल को लिख
                              सकता है या सपोर्ट फोन पर कॉल करके विवाद उठा सकता
                              है Support@enkash.com और +91-8530490475 पर।
                            </li>

                            <li>
                              "चार्जबैक अनुरोध" का अर्थ सुविधा प्रदाता के ग्राहक
                              द्वारा चार्जबैक का दावा है।
                            </li>
                            <li>
                              "दावे" का अर्थ व्यापारी के खिलाफ दावा है, जो कानून
                              के न्यायालय, न्यायिक और अर्ध-न्यायिक प्राधिकरणों
                              के आदेश के तहत तीसरे पक्ष को भुगतान किया गया या
                              देय है।
                            </li>
                            <li>
                              "ग्राहक" का अर्थ व्यापारी का ग्राहक है जो व्यापारी
                              से माल/सेवाओं के बदले में भुगतान करेगा।
                            </li>
                            <li>
                              "उपकरण" का अर्थ बिक्री बिंदु (पीओएस) या मोबाइल
                              बिक्री बिंदु (एमपीओएस) उपकरण हैं जिन पर एंकैश
                              पीओएस सॉफ्टवेयर सक्षम है।
                            </li>
                            <li>
                              "एस्क्रो खाता" एंकैश द्वारा एस्क्रो बैंक के साथ
                              लेनदेन राशि प्राप्त करने और आपको निपटान करने के
                              उद्देश्य से रखा गया खाता है।
                            </li>
                            <li>
                              "एस्क्रो बैंक" का अर्थ आरबीआई द्वारा पेमेंट
                              एग्रीगेशन दिशानिर्देशों के तहत एस्क्रो खाता
                              संचालित करने के लिए अधिकृत बैंक है।
                            </li>
                            <li>
                              "एस्क्रो बैंक कार्य दिवस" का अर्थ वे दिन हैं जिन
                              पर एस्क्रो बैंक निपटान करने के लिए संचालित है।
                            </li>
                            <li>
                              "सुविधा प्रदाता" का अर्थ बैंकों, वित्तीय
                              संस्थानों, एनपीसीआई, प्रौद्योगिकी सेवा प्रदाताओं,
                              या सेवाओं या उनके किसी भाग के प्रावधान को
                              सुविधाजनक बनाने वाले अन्य तीसरे पक्षों को संदर्भित
                              करता है, जिसमें लेकिन सीमित नहीं (a) अधिग्रहण
                              बैंक, (b) क्रेडिट कार्ड, डेबिट कार्ड, प्रीपेड
                              उपकरण और खाते जारी करने वाले बैंक, और (c) कार्ड
                              पेमेंट नेटवर्क शामिल हैं।
                            </li>
                            <li>
                              "केवाईसी दिशानिर्देश" का अर्थ आरबीआई द्वारा
                              अधिसूचित केवाईसी मानदंड हैं, सेवाओं पर लागू होने
                              के हद तक और एंकैश या सुविधा प्रदाताओं द्वारा
                              निर्धारित जैसा हो सकता है। केवाईसी का अर्थ
                              जानें-आपके-ग्राहक है।
                            </li>
                            <li>
                              "एनपीसीआई" का अर्थ पेमेंट एंड सेटलमेंट सिस्टम्स
                              एक्ट, 2007 के प्रावधानों के तहत गठित राष्ट्रीय
                              भुगतान निगम ऑफ इंडिया है।
                            </li>
                            <li>
                              "ओएफएसी" का अर्थ संयुक्त राज्य अमेरिका के कानून के
                              तहत गठित विदेशी संपत्ति नियंत्रण कार्यालय है।
                            </li>
                            <li>
                              "पेमेंट उपकरण" में क्रेडिट कार्ड, डेबिट कार्ड,
                              बैंक खाता, प्रीपेड पेमेंट उपकरण या लागू कानून के
                              तहत जारी कोई अन्य उपकरण शामिल है, जो ग्राहक द्वारा
                              लेनदेन राशि का भुगतान करने के लिए उपयोग किया जाता
                              है।
                            </li>
                            <li>
                              "अनुमत कटौतियां" का अर्थ (a) एंकैश द्वारा लगाए गए
                              शुल्क; (b) चार्जबैक राशि जिसमें जुर्माने और दंड
                              शामिल; और (c) आपको एंकैश को देय कोई अन्य राशि है।
                            </li>
                            <li>
                              "रिफंड" का अर्थ एंकैश को आपकी अनुरोध प्रोसेसिंग
                              है, लेनदेन राशि (या उसके भाग) को उस पेमेंट उपकरण
                              को लौटाने के लिए जो लेनदेन राशि के भुगतान को
                              प्रभावित करने के लिए उपयोग किया गया था।
                            </li>
                            <li>"आरबीआई" का अर्थ रिजर्व बैंक ऑफ इंडिया है।</li>
                            <li>
                              "टर्मिनल आईडी (टीआईडी)" का अर्थ व्यापारी को सौंपा
                              गया एक अद्वितीय संख्या है जो एंकैश सिस्टम में सेट
                              अप है। टीआईडी एंकैश और व्यापारी के विवेक पर किसी
                              भी उपकरण से जुड़े हो सकते हैं। किसी भी उपकरण को
                              व्यापारी के अनुरोध पर किसी भी समय निष्क्रिय किया
                              जा सकता है।
                            </li>
                            <li>
                              "लेनदेन" का अर्थ ग्राहक द्वारा आपके (या आपकी
                              सेवाओं का लाभ उठाने वाले तीसरे पक्ष विक्रेता) के
                              साथ माल/सेवाओं की खरीद के लिए रखा गया आदेश या
                              अनुरोध है, जो ग्राहक के पेमेंट उपकरण पर डेबिट का
                              परिणाम देता है।
                            </li>
                            <li>
                              "लेनदेन राशि" का अर्थ ग्राहक द्वारा लेनदेन के
                              संबंध में भुगतान की गई राशि है।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">2. स्वामित्व अधिकार</h5>
                        <div className="container my-4">
                          <p>
                            ● हम (और हमारे लाइसेंसर, जैसा लागू हो) सेवाओं में
                            सभी अधिकार, शीर्षक और हित के एकमात्र मालिक बने रहते
                            हैं, जिसमें प्लेटफॉर्म और वेबसाइट
                            https://www.enkash.com/ ("वेबसाइट") शामिल है, जिसमें
                            सेवाओं में विद्यमान कोई भी बौद्धिक संपदा अधिकार
                            (पंजीकृत या नहीं) शामिल है। एंकैश आपको प्लेटफॉर्म तक
                            पहुंचने और वेबसाइट और सेवाओं का व्यक्तिगत उपयोग करने
                            का व्यक्तिगत, गैर-अनन्य, गैर-हस्तांतरणीय, सीमित
                            अधिकार प्रदान करता है। आप सेवाओं से जुड़े या उनमें
                            निहित किसी भी स्वामित्व अधिकार नोटिस (ट्रेडमार्क और
                            कॉपीराइट नोटिस सहित) को हटाने, अस्पष्ट करने या बदलने
                            नहीं करेंगे। हम शर्तों के तहत प्रदान न किए गए सभी
                            अधिकार सुरक्षित रखते हैं। हम (और हमारे लाइसेंसर,
                            जैसा लागू हो) अपने व्यवसाय के दौरान उपयोग या
                            स्वामित्व वाले ट्रेडमार्क, व्यापार नाम, सेवा चिह्न,
                            लोगो, डोमेन नाम, और अन्य विशिष्ट ब्रांड विशेषताओं
                            ("चिह्न") में और उनमें अपने अधिकार बनाए रखते हैं।
                            आपके पास हमारे किसी भी चिह्न का उपयोग करने का अधिकार
                            नहीं है जब तक कि हमारी स्पष्ट सहमति न हो। हमें। आप
                            सेवाओं या चिह्नों में कोई भी अधिकार डाउनलोड, कॉपी,
                            डेरिवेटिव कार्य बनाना, संशोधित करना, रिवर्स
                            इंजीनियरिंग, रिवर्स असेंबली, प्रसारित करना या अन्यथा
                            स्रोत कोड की खोज करने का प्रयास नहीं करेंगे, बेचना,
                            सौंपना, सब-लाइसेंस, सुरक्षा हित प्रदान करना या
                            अन्यथा हस्तांतरित करना। आप आगे स्वीकार करते हैं और
                            सहमत होते हैं कि सेवाएं ऐसी जानकारी शामिल कर सकती
                            हैं जो हमारी ओर से गोपनीय घोषित है और आप हमारी पूर्व
                            लिखित सहमति के बिना ऐसी जानकारी का प्रकटीकरण नहीं
                            करेंगे।
                          </p>
                          <p>
                            ● आप एंकैश, उसके संबद्ध संगठनों और तीसरे पक्ष सेवा
                            प्रदाताओं को रॉयल्टी-मुक्त, गैर-अनन्य, अमान्य,
                            हस्तांतरणीय और सब-लाइसेंस योग्य लाइसेंस प्रदान करते
                            हैं, आपके डेटा, आपके ग्राहक के डेटा, जानकारी,
                            सामग्री, ट्रेडमार्क, लोगो और आपके द्वारा अपलोड या
                            हमें या प्लेटफॉर्म पर उपलब्ध कराई गई कोई अन्य
                            सामग्री/जानकारी ("आपकी सामग्री") का उपयोग करने के
                            लिए। आप सहमत होते हैं कि एंकैश आपकी सामग्री का उपयोग
                            प्लेटफॉर्म को संचालित और सुधारने, सेवाएं प्रदान
                            करने, और शर्तों के तहत एंकैश के अधिकारों को पूरा
                            करने और उसके दायित्वों को छुट्टी देने के लिए कर सकता
                            है। आप सहमत होते हैं कि एंकैश आपकी सामग्री का उपयोग
                            अपनी मार्केटिंग और प्रचार सामग्री में कर सकता है
                            बिना आपको कोई अतिरिक्त सहमति की आवश्यकता के। आप आगे
                            सहमत होते हैं कि एंकैश आपकी सामग्री पर विश्लेषण कर
                            सकता है और एंकैश ऐसी डेटा से व्युत्पन्न परिणामों या
                            रिपोर्टों का स्वामित्व बनाए रखेगा जो एग्रीगेटेड और
                            अनामीकृत रूप में उसके व्यवसाय उद्देश्यों के लिए लागू
                            कानूनों के अनुरूप होगा। आप इस खंड के अनुसार हमारी
                            आपकी सामग्री के उपयोग से उत्पन्न होने वाले सभी दावों
                            और हानियों के खिलाफ मांग पर एंकैश, उसके संबद्ध
                            संगठनों और उसके सेवा प्रदाताओं को हर्जाना देंगे और
                            निर्दोष रखेंगे।
                          </p>
                        </div>

                        <h5 className="c15 mt-6">
                          3. वेबसाइट का उपयोग और उपयोगकर्ता द्वारा सेवाओं का
                          उपयोग
                        </h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              आप वेबसाइट के उपयोगकर्ता बनने के लिए पंजीकरण
                              करेंगे केवल यदि आप 18 वर्ष या उससे अधिक आयु के हैं
                              और लागू कानूनों के अनुसार बाध्यकारी अनुबंधों में
                              प्रवेश कर सकते हैं। आप अपने पासवर्ड, लॉगिन और खाता
                              जानकारी की गोपनीयता बनाए रखने के लिए जिम्मेदार
                              हैं। आप एंकैश खाते से जुड़ी किसी भी लॉगिन जानकारी
                              और सुरक्षित पहुंच क्रेडेंशियल्स की गोपनीयता बनाए
                              रखने के लिए जिम्मेदार हैं। आप प्लेटफॉर्म और/या
                              सेवाओं के सभी उपयोग के लिए जिम्मेदार होंगे जो आपके
                              या आपके पासवर्ड और लॉगिन जानकारी का उपयोग करने
                              वाले किसी भी व्यक्ति द्वारा किया जाता है (हमारी
                              अनुमति के साथ या बिना)। आप अपने खाते के तहत होने
                              वाली सभी गतिविधियों के लिए जिम्मेदार हैं/अपने
                              सुरक्षित क्रेडेंशियल्स का उपयोग करके और एंकैश
                              वेबसाइट पर आपके सुरक्षित क्रेडेंशियल्स का उपयोग
                              करके किए गए किसी भी परिवर्तन या कार्रवाई के लिए
                              उत्तरदायी नहीं होगा।
                            </li>

                            <li>
                              आप प्लेटफॉर्म द्वारा प्रॉम्प्ट किए जाने पर स्वयं
                              के बारे में सत्य, सटीक, वर्तमान और पूर्ण जानकारी
                              प्रदान करने के लिए सहमत होते हैं। यदि आप कोई
                              जानकारी प्रदान करते हैं जो असत्य, असटीक, अपडेट न
                              की गई या अपूर्ण है (या असत्य, असटीक या अपूर्ण हो
                              जाती है), या एंकैश को संदेह होने का उचित आधार है
                              कि ऐसी जानकारी असत्य, असटीक, अपडेट न की गई या
                              अपूर्ण है, तो एंकैश को आपके खाते को तुरंत निलंबित
                              या समाप्त करने और/या वर्तमान या भविष्य के उपयोग को
                              अस्वीकार करने का अधिकार होगा, प्लेटफॉर्म या सेवाओं
                              का, या उसके किसी भाग का, उसके संबंध में।
                            </li>

                            <li>
                              सेवाओं का उपयोग करके और अपनी संपर्क जानकारी प्रदान
                              करके, आप एंकैश, उसके संबद्ध संगठनों या तीसरे
                              पक्षों से विभिन्न उत्पादों और सेवाओं के बारे में
                              जानकारी और ऑफर प्राप्त करने के लिए सहमति देते हैं।
                              ये संचार विभिन्न चैनलों के माध्यम से हो सकते हैं,
                              जिसमें लेकिन सीमित नहीं टेलीफोन, एसएमएस, ईमेल,
                              व्हाट्सएप, अन्य मैसेजिंग सेवाएं, या कोई अन्य
                              भौतिक, इलेक्ट्रॉनिक, या डिजिटल साधन शामिल हैं। आप
                              सहमत होते हैं कि एंकैश विशिष्ट उत्पादों और सेवाओं
                              में आपकी रुचि का आकलन करने और आपके अनुरोधों या
                              आवेदनों को प्रोसेस करने के लिए इलेक्ट्रॉनिक या फोन
                              द्वारा संपर्क कर सकता है। इसके अतिरिक्त, आप एंकैश
                              को, उसके भागीदारों, सेवा प्रदाताओं, विक्रेताओं, और
                              अन्य तीसरे पक्षों को अधिकृत करते हैं, आपको संपर्क
                              करने के लिए जैसे उद्देश्यों के लिए (i) तीसरे
                              पक्षों से अन्य उत्पादों या सेवाओं में आपकी रुचि
                              प्रस्तुत या आकर्षित करना, या (ii) वेबसाइट के
                              माध्यम से या अन्य विधियों के माध्यम से मार्केटिंग
                              सामग्री, ऑफर, या अन्य जानकारी भेजना जिसमें
                              टेलीफोन, एसएमएस, ईमेल, व्हाट्सएप, या अन्य मैसेजिंग
                              सेवाएं या डिजिटल साधन शामिल हैं। आप सहमत होते हैं
                              कि वेबसाइट पर प्रदान किए गए फोन या मोबाइल नंबर पर
                              ये संचार प्राप्त करने के लिए और टेलीकॉम रेगुलेटरी
                              अथॉरिटी ऑफ इंडिया (ट्राई) विनियमों के अनुसार डू
                              नॉट डिस्टर्ब (डीएनडी) या नेशनल कस्टमर प्रेफरेंस
                              रजिस्टर (एनसीपीआर) के तहत सूचीबद्ध किसी भी पंजीकरण
                              या प्राथमिकताओं को स्पष्ट रूप से माफ करते हैं।
                            </li>

                            <li>
                              आप सहमत होते हैं और एंकैश को अधिकृत करते हैं कि
                              आपकी जानकारी उसके भागीदार बैंकों, वित्तीय
                              संस्थानों, समूह कंपनियों, संबद्ध संगठनों,
                              विक्रेताओं, सेवा प्रदाताओं, और अन्य तीसरे पक्षों
                              के साथ साझा करें जैसा आवश्यक हो आपके चयनित विभिन्न
                              उत्पादों और सेवाओं को प्रदान करने या अतिरिक्त
                              मूल्य-वर्धित सेवाएं प्रदान करने के लिए। आप एंकैश
                              या इन तीसरे पक्षों से ईमेल, टेलीफोन, और/या एसएमएस
                              के माध्यम से संचार प्राप्त करने के लिए भी सहमति
                              देते हैं। यदि आप भविष्य में ऐसे संचारों या
                              मार्केटिंग सामग्री प्राप्त करने से बाहर निकलने का
                              अनुरोध करते हैं, तो यह अनुरोध केवल संभावित रूप से
                              लागू होगा और एंकैश द्वारा आपकी पूर्व सहमति के साथ
                              पहले से साझा किए गए डेटा को प्रभावित नहीं करेगा।
                            </li>

                            <li>
                              प्लेटफॉर्म तक पहुंचने या हमारी सेवाओं का उपयोग
                              करने से, आप स्वीकार करते हैं और सहमत होते हैं कि
                              हम आपके या आपके अंतिम उपयोगकर्ताओं को हमारे
                              भागीदारों, संबद्ध संगठनों, और तीसरे पक्षों से ऑफर,
                              प्रचार, और अन्य सामग्री प्रदर्शित कर सकते हैं। ये
                              ऑफर और प्रचार प्रदान की गई जानकारी के आधार पर
                              अनुकूलित हो सकते हैं, जिसमें हमारे प्लेटफॉर्म पर
                              पिछली जानकारी या आपके या अंतिम उपयोगकर्ताओं द्वारा
                              हमारी सेवाओं के उपयोग शामिल हैं। हम आपके या आपके
                              अंतिम उपयोगकर्ताओं द्वारा जमा किए गए डेटा, जिसमें
                              व्यक्तिगत डेटा शामिल है, का लाभ उठा सकते हैं ताकि
                              ये ऑफर व्यक्तिगत और अनुकूलित हों, यह सुनिश्चित
                              करें कि वे आपके लिए प्रासंगिक और मूल्यवान हों, और
                              आप स्पष्ट रूप से ऐसे उपयोग के लिए सहमति देते हैं।
                              इसमें आपके या आपके अंतिम उपयोगकर्ता की
                              प्राथमिकताएं, इंटरैक्शन, और प्लेटफॉर्म पर उपयोग
                              पैटर्न शामिल हो सकते हैं। हम प्रस्तुत किए गए किसी
                              भी ऑफर की सटीकता, गुणवत्ता, या उपयुक्तता की गारंटी
                              नहीं देते, और ऐसे ऑफर अतिरिक्त शर्तों और स्थितियों
                              के अधीन हो सकते हैं। आपके या किसी अंतिम उपयोगकर्ता
                              का इन ऑफरों के साथ संलग्न होना पूरी तरह से आपके
                              विवेक पर है।
                            </li>

                            <li>
                              आप स्वीकार करते हैं और सहमत होते हैं कि प्लेटफॉर्म
                              के माध्यम से किसी भी भुगतान और/या वित्तीय लेनदेन
                              को करने के लिए, एंकैश केवाईसी उद्देश्यों के लिए
                              आवश्यक जानकारी प्राप्त करने के लिए ड्यू डिलिजेंस
                              उपाय कर सकता है, जिसे ग्राहक/व्यापारी के रूप में
                              आपको लागू कानूनों के अनुसार प्रदान करने का दायित्व
                              है। आप स्वीकार करते हैं और सहमत होते हैं कि एंकैश
                              लागू कानूनों के तहत आवश्यकताओं और दायित्वों के
                              अनुरूप ड्यू डिलिजेंस आवश्यकताओं से संबंधित खुद को
                              संतुष्ट करने के लिए संवर्धित ड्यू डिलिजेंस उपाय
                              (किसी भी दस्तावेजीकरण सहित) कर सकता है। आप सभी
                              लागू कानूनों को समझने और उनका पालन करने के लिए
                              एकमात्र जिम्मेदार हैं, जिसमें लेकिन सीमित नहीं
                              आरबीआई दिशानिर्देश, पेमेंट एंड सेटलमेंट सिस्टम्स
                              एक्ट, 2007, मनी लॉन्डरिंग निवारण एक्ट, 2002,
                              केवाईसी दिशानिर्देश आदि शामिल हैं, जो आरबीआई
                              द्वारा जारी किए गए हैं जैसा कि समय-समय पर संशोधित
                              हो सकता है जो आपके व्यवसाय और प्लेटफॉर्म या सेवाओं
                              के उपयोग के संबंध में आपको लागू हो सकता है।
                            </li>

                            <li>
                              आप सहमत होते हैं और प्रतिज्ञान करते हैं कि इन
                              शर्तों के तहत किसी भी सेवा(ओं) की शुरुआत से पहले,
                              आप आवश्यक दस्तावेज प्रदान करेंगे (एंकैश के एकमात्र
                              विवेक में निर्धारित या सुविधा प्रदाताओं या सरकारी
                              प्राधिकरणों या कानून प्रवर्तन एजेंसियों द्वारा
                              आवश्यक जब) ("केवाईसी दस्तावेज") ताकि एंकैश आपको और
                              आपके व्यवसाय/गतिविधियों के संबंध में ड्यू डिलिजेंस
                              कर सके। एंकैश को केवाईसी दस्तावेज (या उनमें
                              जानकारी) और अन्य संबंधित दस्तावेजों को सुविधा
                              प्रदाताओं या सरकारी प्राधिकरणों या कानून प्रवर्तन
                              एजेंसियों के साथ साझा करने का अधिकार होगा, जैसा
                              लागू कानूनों के तहत आवश्यक हो। आप स्पष्ट रूप से
                              एंकैश को सेवाएं प्रदान करने के लिए आपके द्वारा
                              प्रदान किए गए केवाईसी दस्तावेजों पर भरोसा करने की
                              सहमति देते हैं। आप आगे स्वीकार करते हैं | और सहमत
                              होते हैं कि एंकैश को सभी समय पर सेवा(ओं) के संबंध
                              में किसी भी जानकारी को निगरानी, समीक्षा, बनाए रखने
                              और/या प्रकट करने का अधिकार है जैसा आवश्यक हो किसी
                              भी लागू कानूनों, कानूनी प्रक्रिया या सरकारी अनुरोध
                              को संतुष्ट करने के लिए।
                            </li>

                            <li>
                              एंकैश को आपके से मांगने का अधिकार होगा, किसी भी
                              (i) अतिरिक्त केवाईसी दस्तावेज और/या (ii) आपके
                              ग्राहकों या चालानों के किसी भी केवाईसी संबंधी या
                              अन्य दस्तावेज, उसके एकमात्र विवेक में और/या लागू
                              कानूनों के अनुसार या सरकारी प्राधिकरणों, कानून
                              प्रवर्तन एजेंसियों या सुविधा प्रदाताओं के अनुरोधों
                              के तहत। केवाईसी दस्तावेज जमा न करने पर एंकैश को
                              सेवाओं को निलंबित करने और/या धनराशि के निपटान को
                              रोकने का अधिकार होगा (जैसा लागू हो) जब तक आप ऐसे
                              केवाईसी दस्तावेज एंकैश की एकमात्र संतुष्टि के लिए
                              जमा न करें।
                            </li>

                            <li>
                              आप सहमत होते हैं कि एंकैश किसी भी डिलीवरी,
                              आफ्टर-सेल्स सेवा, भुगतान, इनवॉइसिंग या संग्रह,
                              ग्राहक पूछताछ (बिक्री पूछताछ तक सीमित नहीं),
                              तकनीकी समर्थन रखरखाव सेवाओं और/या आपके उत्पादों या
                              सेवाओं से संबंधित या उनके संबंध में किसी भी अन्य
                              दायित्वों या सेवाओं के लिए जिम्मेदार नहीं होगा।
                              ऐसे दायित्व आपकी एकमात्र जिम्मेदारी होंगे। आप
                              एंकैश को ऐसी सेवाओं या दायित्वों से उत्पन्न होने
                              वाले किसी भी दावे के खिलाफ हर्जाना देंगे और
                              संबंधित सभी खर्चों और/या लागतों को वहन करेंगे।
                            </li>

                            <li>
                              सेवाओं के उपयोग के दौरान, आप घोषणा करते हैं कि आप
                              या आपके संबद्ध संगठन और/या उसके लाभकारी मालिक
                              राजनीतिक रूप से एक्सपोज्ड व्यक्ति नहीं हैं। यदि यह
                              घोषणा सेवाओं के उपयोग की किसी भी अवधि के दौरान
                              असत्य हो जाती है, तो आप हमें तुरंत लिखित रूप से
                              सूचित करेंगे। यहां उपयोग किए गए कैपिटलाइज्ड शब्दों
                              का अर्थ आरबीआई द्वारा जारी केवाईसी दिशानिर्देशों
                              में उन्हें सौंपे गए अर्थ के अनुसार होगा, जैसा कि
                              समय-समय पर संशोधित हो।
                            </li>

                            <li>
                              प्लेटफॉर्म का उपयोग आपको अपनी व्यक्तिगत जानकारी
                              ("पीआई") प्रदान करने की सहमति देने की आवश्यकता हो
                              सकती है (लागू कानूनों के तहत परिभाषित किसी भी
                              व्यक्तिगत डेटा या संवेदनशील व्यक्तिगत डेटा सहित
                              लेकिन सीमित नहीं) या एंकैश को आपके डेटा/जानकारी को
                              किसी भी स्रोत या सार्वजनिक रजिस्ट्री या पोर्टल से
                              व्युत्पन्न करने की अनुमति देने के लिए, जैसा आपके
                              प्रोफाइल या प्लेटफॉर्म पर आपके आवेदन को पूरा करने,
                              आपको ड्यू डिलिजेंस करने, स्वयं या किसी अन्य तीसरे
                              पक्ष द्वारा केवाईसी जांच करने और/या इस प्लेटफॉर्म
                              के माध्यम से आपको सेवाएं प्रदान करने के लिए आवश्यक
                              हो। आप स्पष्ट रूप से एंकैश को ऐसी जानकारी पर भरोसा
                              करने की अनुमति देते हैं और आप प्रतिनिधিত্ব और
                              वारंटी देते हैं कि ऐसी जानकारी सत्य और सटीक रहेगी।
                              एंकैश ऐसे आवेदनों को प्रोसेस करते समय सूचना
                              सुरक्षा, डेटा संरक्षण और गोपनीयता कानून सहित
                              सर्वोत्तम उद्योग प्रथाओं का पालन करेगा। हालांकि,
                              एंकैश आपको ऐसी लेनदेन से उत्पन्न होने वाली किसी भी
                              दायित्व या दावों के खिलाफ उत्तरदायी नहीं होगा
                              क्योंकि कोई भी ऐसी पीआई आपके स्पष्ट सहमति के साथ
                              एकत्र, उपयोग, प्रोसेस और साझा की जा रही है।
                            </li>

                            <li>
                              आप सहमत होते हैं कि प्लेटफॉर्म और/या सेवाओं का
                              उपयोग इन शर्तों द्वारा निषिद्ध किसी भी अवैध,
                              गैरकानूनी उद्देश्य के लिए नहीं करेंगे, या आपको
                              लागू होने वाले किसी भी स्थानीय कानूनों के। हम अपने
                              एकमात्र विवेक पर, किसी भी समय और बिना पूर्व सूचना
                              या दायित्व के, प्लेटफॉर्म और/या सेवाओं के सभी या
                              किसी भी घटक तक आपकी पहुंच को निलंबित, समाप्त या
                              प्रतिबंधित कर सकते हैं।
                            </li>

                            <li>
                              आपको प्लेटफॉर्म पर पोस्टिंग या प्रसारण करने से
                              निषिद्ध है: (i) कोई अवैध, धमकीपूर्ण, मानहानिकारक,
                              अपमानजनक, अश्लील, अश्लील या अन्य सामग्री या
                              सामग्री जो प्रसिद्धि और/या गोपनीयता के अधिकारों का
                              उल्लंघन करेगी या कोई कानून का उल्लंघन करेगी या
                              नाबालिगों को किसी भी तरीके से हानि पहुंचाएगी; (ii)
                              कोई व्यावसायिक सामग्री या सामग्री (धन की
                              solicitation, विज्ञापन, या किसी भी माल या सेवाओं
                              का मार्केटिंग सहित लेकिन सीमित नहीं); (iii) कोई
                              सामग्री या सामग्री जो किसी तीसरे पक्ष के कॉपीराइट,
                              ट्रेडमार्क, पेटेंट अधिकार या अन्य स्वामित्व अधिकार
                              का उल्लंघन, गलत उपयोग या उल्लंघन करे; (iv)
                              सॉफ्टवेयर वायरस या कोई अन्य कंप्यूटर कोड, फाइलें
                              या कार्यक्रम जो किसी भी कंप्यूटर संसाधन की
                              कार्यक्षमता को बाधित, नष्ट या सीमित करने के लिए
                              डिजाइन किए गए हैं; (v) भारत की एकता, अखंडता,
                              रक्षा, सुरक्षा या संप्रभुता को धमकी देता है,
                              विदेशी राज्यों के साथ मैत्रीपूर्ण संबंध, या
                              सार्वजनिक व्यवस्था या किसी भी संज्ञेय अपराध के
                              कमीशन को उकसाता है या किसी अपराध की जांच को रोकता
                              है या किसी अन्य राष्ट्र का अपमान करता है; (vi)
                              किसी अन्य व्यक्ति का प्रतिरूपण करता है; या (vii)
                              किसी अन्य तरीके से अवैध है। आप उपरोक्त प्रतिबंधों
                              के किसी भी उल्लंघन से उत्पन्न होने वाले किसी भी
                              नुकसान के लिए एकमात्र उत्तरदायी होंगे, या इस
                              प्लेटफॉर्म पर सामग्री पोस्ट करने से आपके किसी अन्य
                              हानि के लिए।
                            </li>

                            <li>
                              आप प्रतिनिधित्व और वारंटी देते हैं कि:
                              <br />
                              (a) आप अपने क्षेत्राधिकार के कानूनों के तहत विधिवत
                              शामिल या स्थापित हैं और अपने व्यवसाय को स्वामित्व
                              और संचालित करने के लिए सभी आवश्यक शक्ति और
                              प्राधिकार रखते हैं।
                              <br />
                              (b) आपके पास इन शर्तों में प्रवेश करने, उनके तहत
                              अपने अधिकारों का प्रयोग करने, और अपने दायित्वों का
                              पालन करने की पूर्ण कानूनी क्षमता और शक्ति है।
                              <br />
                              (c) इन शर्तों का निष्पादन, वितरण और पालन सभी
                              आवश्यक कॉर्पोरेट और संगठनात्मक कार्रवाइयों द्वारा
                              अधिकृत किया गया है जिसमें लेकिन सीमित नहीं बोर्ड
                              रेजोल्यूशन और/या पावर ऑफ अटॉर्नी और/या आपके
                              व्यवसाय और आपकी कंपनी/फर्म/संगठन को बाध्य करने के
                              लिए अथॉरिटी लेटर शामिल है।
                              <br />
                              (d) आपने इन शर्तों को विधिवत स्वीकार किया है, जो
                              एक कानूनी, वैध और बाध्यकारी दायित्व बनाते हैं,
                              उसके खंडों के अनुसार प्रवर्तनीय।
                              <br />
                              (e) आप, और न करेंगे, वर्चुअल करेंसी,
                              क्रिप्टोकरेंसी और अन्य क्रिप्टो उत्पादों (जैसे
                              नॉन-फंजिबल टोकन या एनएफटी) से संबंधित किसी भी
                              गतिविधि में संलग्न नहीं होंगे, वाणिज्यिक लाभ के
                              लिए निषिद्ध निवेश या मुद्रीकृत, पुनः-बेचे या भौतिक
                              या डिजिटल माल या सेवाओं में परिवर्तित किए जा सकने
                              वाले क्रेडिट या अन्यथा वर्चुअल दुनिया से बाहर
                              निकलने वाले। इस प्रावधान का कोई उल्लंघन आपके
                              प्लेटफॉर्म या किसी या सभी सेवाओं तक पहुंच या उपयोग
                              के तुरंत निलंबन या समापन के अधीन होगा, एंकैश के
                              एकमात्र विवेक पर। आप इस प्रावधान के उल्लंघन से
                              उत्पन्न होने वाली किसी भी हानि से एंकैश को हर्जाना
                              देंगे।
                            </li>

                            <br />
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">4 पीपीआई के प्रकार</h5>
                        <div className="container my-4">
                          <p>
                            {" "}
                            एनकैश निम्नलिखित श्रेणियों के पीपीआई जारी करता है:
                          </p>
                          <ul>
                            <li>
                              पर्वू-भुगतान कार्ड – पीओएस, ई-कॉमर्स या ऑनलाइन
                              व्यापारियों पर लेन-देन के लिए उपयोग किए जाने वाले
                              भौतिक या आभासी कार्ड।
                            </li>
                            <li>
                              डिजिटल वॉलेट – ग्राहकों को डिजिटल लेन-देन, बिल
                              भुगतान और इन-स्टोर खरीदारी के लिए धन संग्रह,
                              प्रबंधन और उपयोग की अनुमति देने वाले रीलोडेबल
                              वॉलेट खाते।
                            </li>
                            <li>
                              मील और ईंधन कार्ड – भोजन और ईंधन जैसे विशिष्ट
                              व्यापारी श्रेणियों के लिए RBI और कर विनियमों के
                              अनुरूप प्रतिबंधित-उपयोग PPI।
                            </li>
                            <li>
                              गिफ्ट PPI – उपहार या प्रचार उद्देश्यों के लिए जारी
                              किए जाने वाले गैर-रीलोडेबल प्रीपेड भुगतान साधन।
                            </li>
                          </ul>
                          <p>
                            पीपीआई के प्रकार: एनकैश निम्नलिखित श्रेणियों के
                            पीपीआई जारी करता है:
                          </p>
                        </div>

                        <h5 className="c15 mt-6">
                          5. पीपीआई का जारी करना एवं सक्रियण
                        </h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              सफल पंजीकरण और सत्यापन (लागू केवाईसी) पर, हम आपको
                              डिजिटल रूप (वॉलेट) या भौतिक/आभासी कार्ड रूप में
                              एनकैश पीपीआई उत्पाद जारी करेंगे।
                            </li>

                            <li>
                              भौतिक कार्ड आपके पंजीकृत पते पर अनुरोध पर वितरित
                              किए जाएंगे, शुल्क और उपलब्धता के अधीन। आपको एनकैश
                              प्लेटफ़ॉर्म के माध्यम से वर्णित प्रक्रिया का उपयोग
                              करके कार्ड सक्रिय करना होगा। सभी लेन-देन भारतीय
                              रुपये (INR) में होंगे। अंतरराष्ट्रीय उपयोग की
                              अनुमति नहीं है।
                            </li>

                            <li>
                              पीपीआई किसी भी परिस्थिति में गैर-हस्तांतरणीय है और
                              केवल आपके द्वारा उपयोग किया जा सकता है।
                            </li>

                            <li>
                              यदि हम धोखाधड़ी, धन शोधन या लागू कानूनों के
                              गैर-अनुपालन का संदेह करते हैं, तो हम पीपीआई जारी
                              करने या सक्रिय करने से इनकार कर सकते हैं।
                            </li>

                            <li>
                              सभी पीपीआई एनकैश की संपत्ति बने रहते हैं और
                              ग्राहकों को केवल वैध उपयोग के लिए जारी किए जाते
                              हैं।
                            </li>

                            <li>
                              पीपीआई या वॉलेट में बनाए रखे गए बैलेंस पर कोई
                              ब्याज देय नहीं होगा।
                            </li>

                            <li>
                              ग्राहक को लॉगिन क्रेडेंशियल, पिन और पासवर्ड की
                              गोपनीयता बनाए रखनी होगी और किसी भी अनधिकृत उपयोग
                              के लिए पूरी तरह जिम्मेदार होगा।
                            </li>

                            <li>
                              सभी एनकैश पीपीआई (वॉलेट सहित) जारी करने/अंतिम
                              लोड/रीलोड की तिथि से कम से कम एक (1) वर्ष के लिए
                              वैध हैं।
                            </li>

                            <li>
                              एनकैश ग्राहक को पूर्व सूचना प्रदान करने के बाद एक
                              (1) वर्ष के लिए निष्क्रिय रहने वाले पीपीआई या
                              वॉलेट को निष्क्रिय कर सकता है।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">6. पीपीआई सीमाए</h5>
                        <div className="container my-4">
                          <p>
                            पीपीआई लोड और लेन-देन सीमाएंआरबीआई वर्गी करण के अनसु
                            ार होंगी:
                          </p>
                          <div className="w-full overflow-x-auto my-3">
                            <table className="table table-bordered table-striped min-w-max w-full">
                              <thead className=" ">
                                <tr>
                                  <th className="text-center bg-secondary text-white">
                                    पीपीआई प्रकार
                                  </th>
                                  <th className="text-center bg-secondary text-white">
                                    लोड सीमा
                                  </th>
                                  <th className="text-center bg-secondary text-white">
                                    वार्षिक लोड सीमा
                                  </th>
                                  <th className="text-center bg-secondary text-white">
                                    केवाईसी आवश्यकता
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>छोटा पीपीआई</td>
                                  <td>₹10,000</td>
                                  <td>₹1,20,000</td>
                                  <td>न्यूनतम केवाईसी</td>
                                </tr>
                                <tr>
                                  <td>पूर्ण-केवाईसी पीपीआई</td>
                                  <td>₹2,00,000</td>
                                  <td>अनुमति अनुसार</td>
                                  <td>पूर्ण केवाईसी</td>
                                </tr>
                                <tr>
                                  <td>गिफ्ट पीपीआई</td>
                                  <td>₹10,000</td>
                                  <td>गैर-रीलोडेबल</td>
                                  <td>न्यूनतम केवाईसी</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="pt-3">
                            आप अपनी उपलब्ध बैलेंस तक डेबिट लेन-देन कर सकते हैं,
                            बिना अलग मासिक डेबिट सीमा के, बशर्ते समग्र उपयोग
                            आरबीआई दिशानिर्देशों के अधीन लागू सीमाओं का अनुपालन
                            करे।
                          </p>
                        </div>

                        <h5 className="c15 mt-6">
                          7. धन का लोडिंग एवं रीलोडिंग
                        </h5>
                        <div className="container my-4">
                          <ol>
                            <li>
                              आप अपने एनकैश पीपीआई उत्पादों में धन लोड/रीलोड कर
                              सकते हैं, जैसे बैंक हस्तांतरण (NEFT/IMPS), UPI,
                              डेबिट/क्रेडिट कार्ड, नेट बैंकिंग या अन्य पूर्ण-KYC
                              PPI से, RBI दिशानिर्देशों और हमारी सीमाओं के अधीन।
                              (नकद लोडिंग की अनुमति नहीं)
                            </li>

                            <li>
                              लोडिंग गैर-ब्याज-धारक है, और धन इलेक्ट्रॉनिक रूप
                              से संग्रहित है।
                            </li>

                            <li>
                              छोटे PPI के लिए: केवल अनुमति प्राप्त भुगतान
                              विधियों से रीलोडेबल — अर्थात डेबिट/क्रेडिट कार्ड,
                              UPI, नेट बैंकिंग एवं बैंक खाते। मासिक लोडिंग सीमा:
                              RBI के अनुसार ₹10,000 से अधिक नहीं। नकद लोडिंग, धन
                              हस्तांतरण बाहर, या नकद निकासी की अनुमति नहीं।
                              वार्षिक क्रेडिट सीमा: ₹1,20,000 से अधिक नहीं।
                            </li>

                            <li>
                              पूर्ण-KYC PPI के लिए: उच्च सीमाएं लागू। अधिकतम
                              बैलेंस: ₹2,00,000 से अधिक नहीं। मासिक लोडिंग:
                              समग्र बैलेंस कैप से परे कोई विशेष सीमा नहीं; जोखिम
                              मूल्यांकन के अधीन। नकद लोडिंग की अनुमति नहीं।
                            </li>

                            <li>
                              आधार OTP ई-KYC (गैर-मुख्य-अभिमुखी) से खोले गए
                              खातों के लिए: समग्र बैलेंस ₹1,00,000 से अधिक नहीं;
                              वार्षिक क्रेडिट ₹2,00,000 से अधिक नहीं। यदि सीमाएं
                              पार होती हैं → पूर्ण CDD तक संचालन बंद होगा।
                            </li>

                            <li>
                              हम आपके जोखिम प्रोफाइल, लेन-देन इतिहास या संचालन
                              जोखिमों के आधार पर आंतरिक सीमाएं निर्धारित कर सकते
                              हैं।
                            </li>

                            <li>
                              यदि लोडिंग लागू कानूनों का उल्लंघन करती है,
                              संदिग्ध प्रतीत होती है या सीमाओं से अधिक है, तो हम
                              किसी भी लोडिंग को अस्वीकार या उलट सकते हैं।
                            </li>

                            <li>
                              आंशिक या अतिरिक्त लोडिंग की अनुमति नहीं हो सकती;
                              आपको सही राशि सुनिश्चित करनी होगी।
                            </li>
                          </ol>
                        </div>

                        <h5 className="c15 mt-6">
                          8. एनकैश पीपीआई उत्पादों का उपयोग
                        </h5>
                        <div className="container my-4">
                          <ol>
                            <li>
                              हमारे वॉलेट/कार्ड/UPI स्वीकार करने वाले अधिकृत
                              व्यापारियों (ऑनलाइन/ऑफलाइन) पर वस्तुओं एवं सेवाओं
                              की खरीद।
                            </li>
                            <li>
                              बिल भुगतान, मोबाइल/DTH रिचार्ज, उपयोगिता भुगतान,
                              और अन्य अनुमति सेवाएं।
                            </li>
                            <li>
                              पूर्व-पंजीकृत लाभार्थियों को पीयर-टू-पीयर धन
                              हस्तांतरण (केवल पूर्ण-KYC PPI के लिए)।
                            </li>
                            <li>
                              ATM/POS पर नकद निकासी (केवल पूर्ण-KYC PPI के लिए,
                              प्रति लेन-देन ₹2,000 तक और मासिक ₹10,000 तक)।
                            </li>
                            <li>
                              लेन-देन PIN, OTP, बायोमेट्रिक, CVV या अन्य
                              प्रमाणीकरण कारकों जैसे सुरक्षा उपायों का उपयोग
                              करके अधिकृत किए जाते हैं।
                            </li>
                            <li>
                              धन हस्तांतरण के लिए (पूर्ण-KYC PPI):
                              <ul>
                                <li>
                                  स्रोत खाते या आपके सत्यापित बैंक खाते में
                                  वापस।
                                </li>
                                <li>
                                  पूर्व-पंजीकृत लाभार्थियों को: प्रति लाभार्थी
                                  प्रति माह ₹2,00,000 तक।
                                </li>
                                <li>
                                  अन्य खातों/PPI/Debit/Credit कार्ड को: प्रति
                                  माह ₹10,000 तक।
                                </li>
                                <li>
                                  आपकी उपलब्ध PPI बैलेंस से परे वस्तुएं या
                                  सेवाओं की खरीद पर कोई अतिरिक्त सीमा नहीं।
                                </li>
                              </ul>
                            </li>
                            <li>
                              अंतरराष्ट्रीय लेन-देन, नकद लोडिंग या प्रतिबंधित
                              गति विधियों के लिए उपयोग की अनुमति नहीं है।
                            </li>
                            <li>
                              हम UPI, NPCI या अन्य भुगतान प्रणालियों के साथ
                              एकीकरण कर सकते हैं, लेकिन आप सभी प्रारंभिक लेन-देन
                              के लिए जिम्मेदार रहेंगे।
                            </li>
                            <li>
                              आप सहमत हैं कि एनकैश PPI उत्पादों का उपयोग किसी भी
                              अवैध, गैरकानूनी या प्रतिबंधित गति विधियों के लिए
                              नहीं करेंगे, जिसमें धन शोधन, आतंकवाद वित्तपोषण,
                              जुआ, प्रतिबंधित वस्तुएं/सेवाएं (जैसे ड्रग्स,
                              हथियार) की खरीद, कर चोरी या लागू कानूनों का
                              उल्लंघन शामिल है।
                            </li>
                            <li>
                              यदि संदिग्ध या इन शर्तों का उल्लंघन होता है, तो हम
                              लेन-देन को ब्लॉक या अस्वीकार कर सकते हैं।
                            </li>
                          </ol>
                        </div>

                        <h5 className="c15 mt-6">9. सीमाएं एवं शुल्क</h5>
                        <div className="container my-4">
                          <ol>
                            <li>
                              लेन-देन एवंबैलेंस सीमाएं PPI प्रकार एवं KYC स्थिति
                              पर निर्भर हैं, RBI दिशानिर्देशों के अनुसार:
                              <ul>
                                <li>
                                  छोटा PPI: अधिकतम बैलेंस एवं लोडिंग सीमा प्रति
                                  माह ₹10,000; हस्तांतरण एवं नकद निकासी की
                                  अनुमति नहीं।
                                </li>
                                <li>
                                  पूर्ण-KYC PPI: अधिकतम बैलेंस ₹2,00,000; धन
                                  हस्तांतरण एवं नकद निकासी सीमाएं अनुभाग 8 के
                                  अनुसार।
                                </li>
                              </ul>
                            </li>
                            <li>
                              हम जोख़िम मूल्यांकन के आधार पर सीमाओं को संशोधित
                              कर सकते हैं, जहां आवश्यक हो वहां सूचना के साथ।
                            </li>
                            <li>
                              जारी करने, लोडिंग, लेन-देन, नकद निकासी,
                              निष्क्रियता, कार्ड प्रतिस्थापन या अन्य सेवाओं के
                              लिए शुल्क लागू हो सकते हैं।
                            </li>
                            <li>
                              शुल्क गैर-वापसी योग्य हैं और 30 दिनों की सूचना के
                              साथ परिवर्तन योग्य हैं। GST या अन्य कर लागू
                              कानूनों के अनुसार लागू हो सकते हैं।
                            </li>
                            <li>
                              बुनियादी सेवाओं जैसे बैलेंस जांच या मिनी-स्टेटमेंट
                              के लिए कोई शुल्क नहीं, जब तक अन्यथा निर्दिष्ट न
                              हो।
                            </li>
                            <li>
                              यदि आपका PPI या वॉलेट समाप्त हो जाता है लेकिन
                              अनुपयोगित बैलेंस रहता है, तो समाप्ति के बाद मासिक
                              सेवा शुल्क ₹500 लगाया जाएगा यदि बैलेंस ₹1,000 से
                              अधिक हो। ₹1,000 या कम बैलेंस के लिए यह शुल्क माफ
                              किया जाएगा ताकि छोटे बैलेंस का क्षरण रोका जा सके।
                            </li>
                            <li>
                              ग्राहक अनुरोध कर सकते हैं:
                              <ul>
                                <li>बचे बैलेंस का स्रोत खाते में रिफंड, या</li>
                                <li>नया PPI जारी करना (KYC के अधीन)</li>
                              </ul>
                            </li>
                            <li>शुल्क तालिका:</li>
                            <div className="w-full overflow-x-auto my-3">
                              <table className="table table-bordered table-striped     overflow-wrap: anywhere;">
                                <thead>
                                  <tr>
                                    <th className="text-center bg-secondary text-white">
                                      सेवा विवरण
                                    </th>
                                    <th className="text-center bg-secondary text-white">
                                      शुल्क (₹)
                                    </th>
                                    <th className="text-center bg-secondary text-white">
                                      लागतू ा
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      भौतिक कार्ड जारी करना / पुनः-जारी करना
                                    </td>
                                    <td>250</td>
                                    <td>प्रति कार्ड जारी या प्रति स्थापित</td>
                                  </tr>
                                  <tr>
                                    <td>गिफ्ट कार्ड पुनः-सक्रियण</td>
                                    <td>250</td>
                                    <td>प्रति पुनः-सक्रियण</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      एटीएम – वित्तीय लेन-देन (नकद निकासी)
                                    </td>
                                    <td>25</td>
                                    <td>प्रति लेन-देन</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      एटीएम – गैर-वित्तीय लेन-देन (PIN परिवर्तन,
                                      बैलेंस जांच, मिनी स्टेटमेंट)
                                    </td>
                                    <td>15</td>
                                    <td>प्रति लेन-देन</td>
                                  </tr>
                                  <tr>
                                    <td>सरचार्ज – सरकारी लेन-देन</td>
                                    <td>2.5%</td>
                                    <td>प्रति लेन-देन</td>
                                  </tr>
                                  <tr>
                                    <td>सरचार्ज – ईंधन लेन-देन</td>
                                    <td>1.5%</td>
                                    <td>प्रति लेन-देन</td>
                                  </tr>
                                  <tr>
                                    <td>सरचार्ज – रेलवे लेन-देन</td>
                                    <td>₹10</td>
                                    <td>प्रति लेन-देन</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <li>
                              सभी शुल्क लागू करों को छोड़कर हैं जब तक अन्यथा कहा
                              न जाए।
                            </li>
                            <li>
                              उदाहरण: ₹1,000 सरकारी लेन-देन के लिए, ₹10 + 18%
                              जीएसटी (₹11.80) का सरचार्ज लागू हो सकता है।
                            </li>
                            <li>
                              नोट्स:
                              <ul>
                                <li>
                                  एनकैश किसी भी शुल्क को पूर्ण या आंशिक रूप से
                                  अपनी विवेकाधीनता से माफ कर सकता है।
                                </li>
                                <li>
                                  सभी शुल्क व्यवसाय या नियामक आवश्यकताओं के आधार
                                  पर संशोधनीय हैं और एनकैश वेबसाइट या आधिकारिक
                                  अधिसूचनाओं के माध्यम से संचारित किए जाएंगे।
                                </li>
                                <li>
                                  सरचार्ज अधिग्रहण बैंक, नेटवर्क भागीदार या
                                  व्यापारी श्रेणी के आधार पर भिन्न हो सकते हैं।
                                </li>
                              </ul>
                            </li>
                          </ol>
                        </div>

                        <h5 className="c15 mt-6">
                          10. उपयोगकर्ता दायित्व एवं जिम्मेदारी
                        </h5>
                        <div className="container my-4">
                          <p>आपको निम्नलिखित करना चाहिए:</p>
                          <ul>
                            <li>
                              पंजीकरण, केवाईसी एवं लेन-देन के लिए सटीक, पूर्ण और
                              अपडेटेड जानकारी प्रदान करें।
                            </li>
                            <li>
                              अपने लॉगिन क्रेडेंशियल, पिन, ओटीपी, कार्ड विवरण
                              एवं उपकरण को सुरक्षित रखें। इन्हें किसी के साथ
                              साझा न करें।
                            </li>
                            <li>
                              किसी भी अनधिकृत पहुंच, हानि, चोरी या आपके पीपीआई,
                              कार्ड या उपकरण के समझौते पर तुरंत हमारी ग्राहक
                              सहायता को{" "}
                              <a
                                href="mailto:support@enkash.com"
                                className="text-break"
                              >
                                support@enkash.com
                              </a>{" "}
                              पर रिपोर्ट करें।
                            </li>
                            <li>
                              लेन-देन प्रारंभ करने से पहले पर्याप्त पीपीआई
                              बैलेंस सुनिश्चित करें।
                            </li>
                            <li>
                              सभी लागू कानूनों का पालन करें, जिसमें पीएमएलए एवं
                              आरबीआई निर्देश शामिल हैं, और किसी भी ऑडिट, जांच या
                              रिपोर्टिंग आवश्यकताओं में हमसे सहयोग करें।
                            </li>
                            <li>
                              अपने व्यक्तिगत विवरण, पता, मोबाइल नंबर, ईमेल या
                              पीईपी स्थिति में किसी भी परिवर्तन पर हमें तुरंत
                              सूचित करें।
                            </li>
                            <li>
                              एनकैश प्लेटफॉर्म या पीपीआई उत्पादों को रिवर्स
                              इंजीनियर, हैक, संशोधित या दुरुपयोग न करें।
                            </li>
                            <li>
                              स्पष्ट रूप से अनुमति न होने पर पीपीआई का
                              व्यावसायिक/वाणिज्यिक उद्देश्यों के लिए उपयोग न
                              करें।
                            </li>
                            <li>
                              आप अपने उपयोगकर्ता खाते से प्रारंभि त सभी लेन-देन
                              के लिए एकमात्र जिम्मेदार हैं, चाहे वे आपके द्वारा
                              अधिकृत हों या न हों, जब तक कि हमारी सकल लापरवाही
                              या जानबूझकर कदाचार से सिद्ध न हो।
                            </li>
                            <li>
                              आप हमें आपके खाते, लेन-देन, अपडेट या प्रचारों के
                              संबंध में संचार (एसएमएस, ईमेल, कॉल, अधिसूचनाएं)
                              प्राप्त करने की सहमति देते हैं।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">
                          11. सुरक्षा एवं धोखाधड़ी निवारण
                        </h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              हम उद्योग-मानक सुरक्षा उपायों का उपयोग करते हैं,
                              जिसमें एन्क्रिप्शन, फायरवॉल एवं धोखाधड़ी पहचान
                              प्रणालियां शामिल हैं, ताकि आपके डेटा एवं लेन-देन
                              की रक्षा हो।
                            </li>
                            <li>
                              आपको सुरक्षित उपकरण एवं नेटवर्क का उपयोग करना
                              चाहिए, अपना ऐप/सॉफ्टवेयर अपडेट रखना चाहिए, और
                              संवेदनशील लेन-देन के लिए सार्वजनिक वाई-फाई से बचना
                              चाहिए।
                            </li>
                            <li>
                              संदिग्ध धोखाधड़ी, अनधिकृत पहुंच या सुरक्षा उल्लंघन
                              के मामले में, हम लेन-देन ब्लॉक कर सकते हैं, आपके
                              उपयोगकर्ता खाते को निलंबित कर सकते हैं, बैलेंस
                              फ्रीज कर सकते हैं, या प्राधिकरणों (जैसे आरबीआई,
                              FIU-IND) को रिपोर्ट कर सकते हैं बिना दायित्व के।
                            </li>
                            <li>
                              आप हमें नियामकों, कानूनी प्रवर्तन, बैंकों, भुगतान
                              नेटवर्क या तृतीय-पक्ष भागीदारों के साथ जानकारी
                              साझा करने की अधिकृत करते हैं सत्यापन, धोखाधड़ी
                              निवारण या अनुपालन के लिए।
                            </li>
                            <li>
                              खोए/चोरी कार्ड/वॉलेट के लिए: तुरंत रिपोर्ट करें;
                              हम पीपीआई ब्लॉक करेंगे। रिपोर्टिंग में देरी या
                              आपकी लापरवाही के कारण हानि के लिए हम दायी नहीं
                              हैं।
                            </li>
                            <li>
                              एक बार रिपोर्ट होने पर, पीपीआई या वॉलेट ब्लॉक हो
                              जाएगा और पुनः प्राप्ति पर भी पुनः उपयोग नहीं किया
                              जा सकेगा। रिपोर्ट के बाद अनधिकृत लेन-देन के लिए आप
                              दायी नहीं होंगे।
                            </li>
                            <li>
                              हम उच्च-जोखिम लेन-देन के लिए अति रिक्रित
                              प्रमाणीकरण की आवश्यकता कर सकते हैं।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">
                          12. रिफंड, रद्दीकरण एवं उलटाव
                        </h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              असफल लेन-देन के लिए: रिफंड मूल स्रोत पर लागू
                              नियामक निर्देशों, नेटवर्क नियमों और समय-समय पर
                              निर्धारित एवं अपडेट अन्य नियमों के अनुसार प्रोसेस
                              किए जाएंगे, जांच के अधीन।
                            </li>
                            <li>
                              व्यापारी-प्रारंभित रिफंड (जैसे रिटर्न के लिए)
                              व्यापारी से प्राप्ति पर आपके पीपीआई बैलेंस में जमा
                              किए जाएंगे।
                            </li>
                            <li>
                              कोई नकद रिफंड नहीं; सभी रिफंड इलेक्ट्रॉनिक रूप से
                              पीपीआई या स्रोत खाते में।
                            </li>
                            <li>
                              रिफंड वैध अनुरोध के 5 व्यावसायिक दिनों के भीतर
                              सत्यापन के अधीन प्रोसेस किए जाएंगे।
                            </li>
                            <li>
                              रद्दीकरण के लिए: व्यापारी से सीधे संपर्क करें; हम
                              सुविधाकर्ता के रूप में कार्य करते हैं और व्यापारी
                              निर्देशों एवं आरबीआई समयसीमाओं (असफल लेन-देन के
                              लिए T+1) के अनुसार रिफंड प्रोसेस करते हैं।
                            </li>
                            <li>
                              त्रुटिपूर्ण लोड के लिए उलटाव लागू नियामक
                              निर्देशों, नेटवर्क नियमों और शुल्क एवं सत्यापन के
                              अधीन अनुमत हो सकते हैं।
                            </li>
                            <li>
                              दावा न किए गए रिफंड नियामक निर्देशों या नेटवर्क
                              नियमों के अनुसार शासित होंगे। एनकैश वॉलेट/कार्ड के
                              माध्यम से मोबाइल/डीटीएच रिचार्ज, बिल पे या अन्य
                              भुगतान अंतिम होंगे और एनकैश आपके या व्यापारी
                              भागीदारों की त्रुटि/चूक के लिए जिम्मेदार नहीं
                              होगा। बिल पे एवं रिचार्ज लेन-देन प्रारंभ होने पर
                              रिफंड, रिटर्न या रद्द नहीं किए जा सकते और आरबीआई
                              एस्चीटमेंट नियमों के अनुसार व्यवहार किए जा सकते
                              हैं।
                            </li>
                            <li>
                              यदि आप अनजाने में गलत व्यापारी को भुगतान प्रोसेस
                              करते हैं या गलत राशि (जैसे टाइपोग्राफिकल त्रुटि)
                              के लिए, तो आपका एकमात्र उपाय भुगतान प्राप्तकर्ता
                              व्यापारी से सीधे संपर्क करना और राशि रिफंड करवाना
                              है। एनकैश ऐसे विवादों को संभालने या आपको
                              प्रतिपूर्ति/रिवर्सल के लिए दायी नहीं है।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">
                          13. निष्क्रिय खाते एवं स्टेटमेंट
                        </h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              यदि 12 लगातार महीनों (जैसे 12 महीने) में कोई
                              लेन-देन न हो, तो आपका पीपीआई निष्क्रिय/अक्रिय के
                              रूप में वर्गीकृत हो सकता है।
                            </li>
                            <li>
                              आप संपर्क करके और अपडेटेड विवरण प्रदान करके पुनः
                              सक्रिय कर सकते हैं।
                            </li>
                            <li>
                              हम निष्क्रियता शुल्क लगा सकते हैं या केवाईसी
                              पुनः-सत्यापन तक पहुंच पर प्रतिबंधित कर सकते हैं।
                            </li>
                            <li>
                              निष्क्रिय पीपीआई में अनुपयोगी बैलेंस दो वर्षों के
                              बाद निवेशक शिक्षा एवं संरक्षण कोष में स्थानांतरित
                              हो सकता है या आरबीआई के निर्देशानुसार, जबकि समाप्त
                              पीपीआई में बैलेंस जब्त नहीं होंगे और समाप्ति से दो
                              वर्षों के भीतर ग्राहक अनुरोध पर रिफंड किए जा सकते
                              हैं।
                            </li>
                            <li>
                              ग्राहक सत्यापन एवं लागू शुल्क भुगतान के बाद समाप्त
                              पीपीआई (वॉलेट सहित) का नवीनीकरण या प्रतिस्थापन
                              अनुरोध कर सकते हैं।
                            </li>
                            <li>
                              एनकैश पीपीआई समाप्ति से 45 दिन पहले एसएमएस, ईमेल
                              या ऐप-में अलर्ट के माध्यम से ग्राहकों को सूचित
                              करेगा।
                            </li>
                            <li>
                              ग्राहक अनुरोध पर, उचित प्रक्रिया के बाद रिफंड
                              सत्यापित स्रोत बैंक खाते में जमा किए जाएंगे।
                            </li>
                            <li>
                              यदि एनकैश पीपीआई कार्यक्रम समाप्त किया जाता है या
                              आरबीआई द्वारा संचालन बंद करने का निर्देश दिया जाता
                              है, तो ग्राहक सत्यापित बैंक खाते में बकाया बैलेंस
                              को रीडीम कर सकते हैं।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">14. समापन एवं समाप्ति</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              आप किसी भी समय एनकैश प्लेटफॉर्म के माध्यम से या{" "}
                              <a
                                href="mailto:support@enkash.com"
                                className="text-break"
                              >
                                support@enkash.com
                              </a>{" "}
                              पर संपर्क करके अपने एनकैश पीपीआई उत्पादों का समापन
                              अनुरोध कर सकते हैं। हम अनुरोध को आरबीआई मास्टर
                              निर्देशों के अनुसार प्रोसेस करेंगे।
                            </li>
                            <li>
                              समापन पर, कोई शेष पीपीआई बैलेंस आपके सत्यापित बैंक
                              खाते (पूर्ण-केवाईसी पीपीआई के लिए) में स्थानांतरित
                              या आरबीआई सीमाओं के अनुसार रिफंड किया जाएगा, लागू
                              शुल्क एवं कटौती के बाद।
                            </li>
                            <li>
                              हम निम्नलिखित मामलों में एकतरफा रूप से आपकी पहुंच
                              समाप्त या निलंबित कर सकते हैं:
                              <ul>
                                <li>
                                  यदि आप इन शर्तों, लागू कानूनों या हमारी
                                  नीतियों का उल्लंघन करते हैं।
                                </li>
                                <li>अनुभाग 13 के अनुसार निष्क्रियता के लिए।</li>
                                <li>
                                  धोखाधड़ी, धन शोधन संदिग्ध या नियामक आवश्यकताओं
                                  के कारण।
                                </li>
                                <li>अधिक बल या संचालन मद्दों के मामले में।</li>
                              </ul>
                            </li>
                            <li>
                              समाप्ति पर, निर्धारित अवधि में दावा न किए गए
                              अनुपयोगी बैलेंस जब्त हो सकते हैं, लागू नियामक
                              निर्देशों, नेटवर्क नियमों और समय-समय पर निर्धारित
                              अन्य नियमों के अनुसार। कोई ब्याज या मुआवजा देय
                              नहीं।
                            </li>
                            <li>
                              छोटा पीपीआई अधिकतम जारी करने या अंतिम रीलोड/गति
                              विधि से 3 वर्ष है, उसके बाद समाप्त हो जाता है, और
                              बैलेंस दावा न किए गए के रूप में संभाले जा सकते
                              हैं।
                            </li>
                            <li>
                              एनकैश किसी भी समय अनुबंध की शर्तों या आरबीआई/भारत
                              सरकार या संबंधित किसी अन्य निकाय द्वारा जारी किसी
                              नियम/नीति या किसी LEA या अन्य प्राधिकरण द्वारा
                              जारी किसी आदेश/निर्देश के उल्लंघन के मामले में
                              आपके एनकैश वॉलेट को समाप्त करने का अधिकार रखता है।
                              ऐसे घटना में, आपके एनकैश वॉलेट में बैलेंस एनकैश
                              प्लेटफॉर्म से जुड़े आपके बैंक खाते में जमा किया
                              जाएगा। एनकैश संबंधित प्राधिकरणों/नियामकों को
                              जानकारी/रिकॉर्ड (आपके खाते, केवाईसी, लेन-देन आदि
                              विवरण सहित) रिपोर्ट कर सकता है। हम संबंधित
                              निकाय/प्राधिकरण से मंजूरी मिलने तक आपके एनकैश
                              वॉलेट बैलेंस को फ्रीज कर सकते हैं।
                            </li>
                            <li>
                              यदि आपका एनकैश वॉलेट यहां वर्णित आधारों पर समाप्ति
                              के कारण है, तो एनकैश समाप्ति की तिथि से पूर्व 45
                              दिनों की अवधि के दौरान उचित अंतराल पर आपको
                              ईमेल/फोन/अधिसूचना या किसी अन्य अनमुत संचार विधि के
                              माध्यम से चेतावनी देगा। यदि समाप्ति के बाद आपके
                              एनकैश वॉलेट में बकाया बैलेंस है, तो आप किसी भी समय
                              एनकैश से बकाया एनकैश वॉलेट बैलेंस का रिफंड प्रारंभ
                              करने का अनुरोध कर सकते हैं और उक्त बैलेंस आपके
                              एनकैश वॉलेट से पहले जुड़े बैंक खाते या रिफंड
                              अनुरोध के समय प्रदान किए गए बैंक खाते विवरण में
                              स्थानांतरित किया जाएगा।
                            </li>
                            <li>
                              यदि आप किसी संदिग्ध लेन-देन में शामिल हैं या
                              पूर्व-भुगतान भुगतान साधनों के उपयोग को नियंत्रित
                              करने वाले आरबीआई द्वारा जारी नियमों एवं विनियमों
                              का सकल उल्लंघन करते हैं, या आपकी जानकारी/केवाईसी
                              में किसी विसंगति के मामले में, तो एनकैश आपके एनकैश
                              वॉलेट को डेबिट-ओनली मोड में स्थानांतरित करने का
                              अधिकार रखता है। ऐसे मामले में, एनकैश मामले को
                              आरबीआई/उचित प्राधिकरणों को रिपोर्ट कर सकता है और
                              निष्कर्ष प्राप्ति तक उचित खाता कार्रवाई ले सकता
                              है।
                            </li>
                            <li>
                              यदि आपके एनकैश वॉलेट में पिछले 12 महीनों में कोई
                              वित्तीय लेन-देन नहीं है, तो आपका एनकैश वॉलेट
                              निष्क्रिय चिह्नित किया जाएगा और आपको एनकैश द्वारा
                              समय-समय पर परिभाषित उचित प्रक्रिया पूरी करने के
                              बाद ही अपने एनकैश वॉलेट का संचालन कर सकते हैं।
                            </li>
                            <li>
                              आपका एनकैश वॉलेट बैलेंस सुरक्षित रूप से बनाए रखा
                              जाएगा और कोई लंबित रिफंड अभी भी आपके एनकैश वॉलेट
                              में जमा किया जाएगा, और आप हमसे सभी संचार प्राप्त
                              करना जारी रखेंगे। हालांकि, आप बिना ऐसे प्रक्रिया
                              के अपने निष्क्रिय एनकैश वॉलेट का उपयोग लोडिंग सहित
                              किसी भी लेन-देन के लिए नहीं कर पाएंगे। यदि आपके
                              एनकैश वॉलेट को निष्क्रिय चिह्नित किया गया है और
                              आपका मोबाइल नंबर बदल गया है, तो आपको एनकैश द्वारा
                              समय-समय पर परिभाषित उचित प्रक्रिया पूरी करनी होगी।
                              ऐसी प्रक्रिया की पूर्णता पर, आपका एनकैश वॉलेट
                              तुरंत इन T&C में वर्णित प्रक्रिया के अनुसार बंद हो
                              जाएगा, उसके बाद आप नया एनकैश वॉलेट खोलने की
                              प्रक्रिया प्रारंभ कर सकते हैं।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">
                          15. दायित्व एवं क्षति प्रतिपूर्ति
                        </h5>
                        <div className="container my-4">
                          <ul>
                            {" "}
                            <li>
                              हम निम्नलिखित से उत्पन्न किसी भी हानि, क्षति या
                              असुविधा के लिए दायी नहीं हैं:{" "}
                              <ul>
                                {" "}
                                <li>
                                  आपकी लापरवाही, अनधिकृत उपयोग या मुद्दों की
                                  तत्काल रिपोर्ट न करने से।
                                </li>{" "}
                                <li>
                                  अधि क बल घटनाएं, प्रणाली विफलताएं, नेटवर्क
                                  मुद्दे या तृतीय-पक्ष कार्रवाइयां (जैसे
                                  व्यापारी, बैंक)।
                                </li>{" "}
                                <li>
                                  व्यापारी विवाद, वस्तुओं/सेवाओं की गुणवत्ता या
                                  रिफंड में देरी।
                                </li>{" "}
                                <li>
                                  कोई अप्रत्यक्ष, परिणामी, दंडात्मक या विशेष
                                  क्षति।
                                </li>{" "}
                              </ul>{" "}
                            </li>{" "}
                            <li>
                              हमारा दायित्व, यदि कोई हो, हमारे भाग से सिद्ध सकल
                              लापरवाही के मामलों में पीपीआई बैलेंस राशि तक सीमित
                              है।
                            </li>{" "}
                            <li>
                              आप सहमत हैं कि एनकैश पीपीआई उत्पादों के दुरुपयोग,
                              इन शर्तों के उल्लंघन, लागू कानूनों के उल्लंघन या
                              तृतीय-पक्ष दावों से उत्पन्न किसी भी दावों,
                              हानियों, क्षतियों, दायित्वों, लागतों या खर्चों के
                              विरुद्ध हमें, हमारे संबंधित कंपनियों, अधिकारियों,
                              निदेशकों, कर्मचारियों एवं एजेंटों को हानि रहित
                              रखेंगे, बचाएंगे और क्षति प्रतिपूर्ति करेंगे।
                            </li>{" "}
                            <li>
                              हम एनकैश प्लेटफ़ॉर्म, पीपीआई उत्पादों या एकीकृत
                              सेवाओं के संबंध में सभी वारंटी, स्पष्ट या निहित,
                              को अस्वीकार करते हैं, जिसमें वाणिज्यिकता, उद्देश्य
                              के लिए उपयुक्तता या गैर-अतिक्रमण शामिल है।
                            </li>{" "}
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">
                          16. गोपनीयता एवं डेटा संरक्षण
                        </h5>
                        <div className="container my-4">
                          <ul>
                            {" "}
                            <li>
                              आपका व्यक्तिगत डेटा हमारी गोपनीयता नीति{" "}
                              <a
                                href="https://www.enkash.com/policies/privacy-policy"
                                target="_blank"
                                className="text-break"
                              >
                                https://www.enkash.com/policies/privacy-policy
                              </a>{" "}
                              के अनुसार एकत्र, प्रोसेस, संग्रहित एवं साझा किया
                              जाता है, जो सूचना प्रौद्योगिकी (उचित सुरक्षा
                              प्रथाएं एवं प्रक्रियाएं एवं संवेदनशील व्यक्तिगत
                              डेटा या जानकारी) नियम, 2011 का अनुपालन करती है।
                            </li>{" "}
                            <li>
                              हम सेवा वितरण, धोखाधड़ी निवारण एवं अनुपालन के लिए
                              केवाईसी दस्तावेज़, लेन-देन इतिहास, उपकरण जानकारी
                              एवं स्थान जैसे डेटा एकत्र कर सकते हैं।
                            </li>{" "}
                            <li>
                              आप एनकैश, उसके समूह इकाइयों, संबंधित कंपनियों एवं
                              अधिकृत सेवा प्रदाताओं को आपके व्यक्तिगत एवं
                              लेन-देन जानकारी (पहचान, खाता एवं भुगतान विवरण
                              सहित) एकत्र, प्रोसेस, साझा एवं बनाए रखने की अधिकृत
                              करते हैं, तृतीय-पक्षों के साथ केवल संचालन, नियामक,
                              सत्यापन, निपटान, अनुपालन, धोखाधड़ी निगरानी या
                              भुगतान प्रोसेसिंग उद्देश्यों के लिए, लागू कानूनों
                              एवं डेटा प्रतिधारण आवश्यकताओं के अनुरूप।
                            </li>{" "}
                            <li>
                              कोई गैर-आवश्यक डेटा साझाकरण (मार्केटिंग,
                              एनालिटिक्स या प्रचार के लिए) केवल ग्राहक की स्पष्ट
                              ऑप्ट-इन सहमति पर होगा।
                            </li>{" "}
                            <li>
                              हम डेटा की रक्षा के लिए उचित सुरक्षा प्रथाओं का
                              कार्यान्वयन करते हैं, लेकिन हमारे नियंत्रण से परे
                              उल्लंघनों के लिए दायी नहीं हैं। यह क्षति
                              प्रतिपूर्ति एनकैश की लापरवाही या प्रणाली विफलताओं
                              से उत्पन्न हानियों तक विस्तारित नहीं होगी।
                            </li>{" "}
                            <li>
                              सभी व्यक्तिगत डेटा डिजिटल व्यक्तिगत डेटा संरक्षण
                              अधिनियम, 2023, आरबीआई डेटा गोपनीयता दिशानिर्देशों
                              एवं एनकैश की गोपनीयता नीति के अनुसार संभाला जाएगा।
                            </li>{" "}
                            <li>
                              आगे की जानकारी एवं उन्नयन के लिए ग्राहक डेटा
                              संरक्षण अधिकारी, एनकैश से संपर्क कर सकते हैं।
                              (संपर्क जानकारी: dpo@enkash.com)
                            </li>{" "}
                          </ul>
                        </div>
                        <h5 className="c15 mt-6">17. बौद्धिक संपदा</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              एनकैश प्लेटफॉर्म, ट्रेडमार्क (जैसे "एनकैश"), लोगो,
                              सॉफ्टवेयर एवं सामग्री में सभी अधिकार, शीर्षक एवं
                              हित हमारे या हमारे लाइसेंसधारकों के स्वामित्व में
                              हैं।
                            </li>
                            <li>
                              आपको व्यक्तिगत उपयोग के लिए प्लेटफॉर्म का उपयोग
                              करने के लिए सीमित, गैर-विशिष्ट, गैर-हस्तांतरणीय
                              लाइसेंस प्रदान किया जाता है।
                            </li>
                            <li>
                              आप हमारी लिखित सहमति के बिना कॉपी, संशोधित, वितरित
                              या व्युत्पन्न कार्य नहीं बना सकते।
                            </li>
                          </ul>
                        </div>
                        <h5 className="c15 mt-6">
                          18. शिकायत निवारण एवं ग्राहक सहायता
                        </h5>
                        <div className="container my-4">
                          <p>
                            एनकैश पीपीआई उत्पादों से संबंधित किसी भी प्रश्न या
                            शिकायत के लिए, आप निम्नलिखित उन्नयन स्तरों के माध्यम
                            से हमसे संपर्क कर सकते हैं। शिकायतें तुरंत स्वीकार
                            की जाएंगी और नीचे निर्दिष्ट समय सीमाओं के भीतर हल की
                            जाएंगी।
                          </p>
                          <div className="w-full overflow-x-auto my-3">
                            <table className="table table-bordered table-striped min-w-max w-full">
                              <thead>
                                <tr>
                                  <th className="text-center bg-secondary text-white">
                                    स्तर
                                  </th>
                                  <th className="text-center bg-secondary text-white">
                                    जिम्मेदार व्यक्ति
                                  </th>
                                  <th className="text-center bg-secondary text-white">
                                    उपलब्ध मोड
                                  </th>
                                  <th className="text-center bg-secondary text-white">
                                    अनुमानित TAT समाधान
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>स्तर 1</td>
                                  <td>ग्राहक सहायता कार्यकारी</td>
                                  <td>
                                    फोन: +91 85304 90475
                                    <br />
                                    ईमेल: support@enkash.com
                                    <br />
                                    रजिस्टर्ड ऑफिस: 91, स्प्रिंग बोर्ड 175,
                                    कागलवाला हाउस, दूसरी मंज़िल, कलिना,
                                    सांताक्रूज़ (E), मुंबई 400098
                                    <br />
                                    कॉर्पोरेट ऑफिस: 91, स्प्रिंग बोर्ड, गेट नंबर
                                    2, प्लांट नंबर 6, LBS मार्ग, गोदरेज एंड बॉयस
                                    इंडस्ट्री एस्टेट, विक्रोली वेस्ट, मुंबई,
                                    महाराष्ट्र, 400079
                                  </td>
                                  <td>3 व्यावसायिक दिनों के भीतर</td>
                                </tr>
                                <tr>
                                  <td>स्तर 2</td>
                                  <td>ग्राहक सहायता टीम प्रबंधक</td>
                                  <td>
                                    फोन: +91 85304 90475
                                    <br />
                                    ईमेल: csmanager@enkash.com
                                    <br />
                                    रजिस्टर्ड ऑफिस: 91, स्प्रिंग बोर्ड 175,
                                    कागलवाला हाउस, दूसरी मंज़िल, कलिना,
                                    सांताक्रूज़ (E), मुंबई 400098
                                    <br />
                                    कॉर्पोरेट ऑफिस: 91, स्प्रिंग बोर्ड, गेट नंबर
                                    2, प्लांट नंबर 6, LBS मार्ग, गोदरेज एंड बॉयस
                                    इंडस्ट्री एस्टेट, विक्रोली वेस्ट, मुंबई,
                                    महाराष्ट्र, 400079
                                  </td>
                                  <td>7 व्यावसायिक दिनों के भीतर</td>
                                </tr>
                                <tr>
                                  <td>स्तर 3</td>
                                  <td>शिकायत निवारण अधिकारी</td>
                                  <td>
                                    फोन: +91 95132 51477
                                    <br />
                                    ईमेल: grievanceofficer@enkash.com
                                    <br />
                                    रजिस्टर्ड ऑफिस: 91, स्प्रिंग बोर्ड 175,
                                    कागलवाला हाउस, दूसरी मंज़िल, कलिना,
                                    सांताक्रूज़ (E), मुंबई 400098
                                    <br />
                                    कॉर्पोरेट ऑफिस: 91, स्प्रिंग बोर्ड, गेट नंबर
                                    2, प्लांट नंबर 6, LBS मार्ग, गोदरेज एंड बॉयस
                                    इंडस्ट्री एस्टेट, विक्रोली वेस्ट, मुंबई,
                                    महाराष्ट्र, 400079
                                  </td>
                                  <td>30 व्यावसायिक दिनों के भीतर</td>
                                </tr>
                                <tr>
                                  <td>स्तर 4</td>
                                  <td>नोडल अधिकारी</td>
                                  <td>
                                    फोन: +91 95132 51499
                                    <br />
                                    ईमेल: nodalofficer@enkash.com
                                    <br />
                                    रजिस्टर्ड ऑफिस: 91, स्प्रिंग बोर्ड 175,
                                    कागलवाला हाउस, दूसरी मंज़िल, कलिना,
                                    सांताक्रूज़ (E), मुंबई 400098
                                    <br />
                                    कॉर्पोरेट ऑफिस: 91, स्प्रिंग बोर्ड, गेट नंबर
                                    2, प्लांट नंबर 6, LBS मार्ग, गोदरेज एंड बॉयस
                                    इंडस्ट्री एस्टेट, विक्रोली वेस्ट, मुंबई,
                                    महाराष्ट्र, 400079
                                  </td>
                                  <td>15 व्यावसायिक दिनों के भीतर</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <h5 className="c15 mt-6">
                          19. सामान्य शर्तें एवं नियम
                        </h5>
                        <div className="container my-4">
                          <p>
                            अनहल शिकायतें नोडल अधिकारी या 2021 के एकीकृत लोकपाल
                            योजना के अनुसार आरबीआई लोकपाल को उन्नत की जा सकती
                            हैं।
                          </p>
                          <ul>
                            <li>
                              आप सहमत एवं समझते हैं कि एनकैश अपनी आंतरिक
                              नीतियों, नियामक एवं विधाई निर्देशों के आधार पर
                              संदिग्ध या धोखाधड़ी लेन-देन के मामले में उचित
                              प्राधिकरणों को जानकारी/लेन-देन रिपोर्ट कर सकता है,
                              और हम ऐसी अनिवार्य रिपोर्टिंग के लिए आपको होने
                              वाली किसी भी हानि के लिए दायी नहीं बनाए जाएंगे,
                              भले ही बाद में ऐसा लेन-देन नियमित एवं वैध पाया
                              जाए।
                            </li>
                            <li>
                              किसी भी लेन-देन को निष्पादित करते समय, आपको अपने
                              एनकैश वॉलेट या अन्य धन स्रोतों पर पर्याप्त धन की
                              उपलब्धता सुनिश्चित करनी होगी।
                            </li>
                            <li>
                              आप समझते हैं कि एनकैश द्वारा एनकैश एप्लिकेशन पर
                              पेश की गई सेवाएं इंटरनेट कनेक्शन, सेवा प्रदाताओं
                              एवं भागीदारों का उपयोग करती हैं ताकि आपके लेन-देन
                              सफलतापूर्वक निष्पादित हों, और हम एनकैश वॉलेट
                              सेवाओं की हानि या व्यवधान या अनुपलब्धता सहित इससे
                              उत्पन्न किसी भी दायित्व के लिए जिम्मेदार नहीं
                              होंगे। ये सामान्य शर्तें एवं नियम ऊपर उल्लिखित
                              शर्तों के अतिरिक्त एनकैश वॉलेट पर लागू होंगी।
                            </li>
                            <li>
                              आपके लॉगिन क्रेडेंशियल व्यक्तिगत हैं और आपको अपने
                              लॉगिन क्रेडेंशियल को सुरक्षित रखना चाहिए। आप अपने
                              एनकैश वॉलेट की सुरक्षा के लिए जिम्मेदार हैं, और
                              आपको विवरण सुरक्षित रखने के लिए सभी कदम उठाने
                              चाहिए। आपको किसी भी रूप में, मौखिक या लिखित, अपना
                              खाता पहुंच क्रेडेंशियल किसी को प्रकट नहीं करना
                              चाहिए। यदि आप त्रुटि या लापरवाही से ऐसे विवरण
                              प्रकट करते हैं, तो आपको तुरंत एनकैश को रिपोर्ट
                              करनी होगी।
                            </li>
                            <li>
                              हम आपके लेन-देन की निगरानी संदिग्ध जोखि
                              मपूर्ण/धोखाधड़ी/संदिग्ध लेन-देन के लिए कर सकते
                              हैं। इस आधार पर हम ऐसा उचित समझें जैसे: लेन-देन पर
                              होल्ड लगाना, लेन-देन को ब्लॉक या अस्वीकार करना,
                              आपके एनकैश वॉलेट या खाते को अस्थायी रूप से ब्लॉक
                              करना और रिलीज/पुनर्स्थापित करने से पहले अधिक
                              जानकारी मांगना।
                            </li>
                            <li>
                              आप समझते हैं कि मोबाइल या इंटरनेट माध्यमों या
                              व्यापारी वेबसाइटों/एप्लिकेशनों की
                              गैर-प्रतिक्रियाशीलता से एनकैश वॉलेट सेवाओं की
                              अनुपलब्धता हो सकती है।
                            </li>
                            <li>
                              आप समझते हैं कि एनकैश वॉलेट सेवाओं का लाभ उठाने के
                              लिए साझा की गई जानकारी तृतीय-पक्षों के साथ साझा की
                              जा सकती है ताकि सेवाओं का प्रावधान सुगम हो, और ऐसे
                              मामलों में सेवा प्रदाताओं की डेटा नीतियां भी लागू
                              होंगी।
                            </li>
                            <li>
                              आप सहमत एवं स्वीकार करते हैं कि आपका बैंक/वित्तीय
                              संस्थान किसी भी लेन-देन के विरुद्ध शुल्क/चार्ज लगा
                              सकता है, और एनकैश ऐसे शुल्क/चार्ज को स्वीकार करने
                              या रिफंड करने के लिए दायी नहीं होगा।
                            </li>
                            <li>
                              आपके एनकैश वॉलेट में लोड किए गए धन एवं एनकैश
                              एप्लिकेशन या भागीदार व्यापारियों पर उनके द्वारा
                              पेश सेवाओं पर खर्च इंटरनेट पर किए जाते हैं और कई
                              हितधारकों को शामिल करते हैं। आप समझते हैं कि
                              लेन-देन पुष्टि और स्वीकृतियां हमेशा सेवा वितरण को
                              प्रतिबिंबित नहीं कर सकती।
                            </li>
                            <li>
                              आप अपने एनकैश ऐप में अपने एनकैश वॉलेट लेन-देन देख
                              सकते हैं और कम से कम पिछले 6 महीनों के लेन-देन की
                              समीक्षा कर सकते हैं।
                            </li>
                            <li>
                              एनकैश वॉलेट की सभी श्रेणियां गैर-हस्तांतरणीय
                              प्रकृति की हैं, और बकाया एनकैश वॉलेट बैलेंस पर कोई
                              ब्याज देय नहीं है।
                            </li>
                            <li>
                              आपका खाता सुरक्षित है, और आपके एनकैश वॉलेट पर
                              प्रोसेस किए गए किसी भी लेन-देन आपके द्वारा स्पष्ट
                              रूप से अधिकृत है और एनकैश द्वारा अनुमत है।
                            </li>
                            <li>
                              एनकैश वॉलेट की निरंतर उपलब्धता लागू कानून और
                              MD-PPI, 2021 की आवश्यकताओं के अधीन होगी, और एनकैश
                              को किसी भी समय, किसी भी कारण से, वॉलेट
                              निलंबित/अवरुद्ध करने या अन्य विधाई उद्देश्यों के
                              लिए आवश्यक अधिकार होगा।
                            </li>
                            <li>
                              यदि आपकी प्रदान की गई जानकारी में कोई परिवर्तन हो,
                              तो आप तुरंत लिखित रूप से एनकैश को अपडेट करेंगे।
                            </li>
                            <li>
                              यदि आप अपना मोबाइल नंबर बदल रहे हैं, तो कृपया खाता
                              समापन प्रक्रिया प्रारंभ करने के लिए ग्राहक सहायता
                              टीम से अग्रिम संपर्क करें।
                            </li>
                            <li>
                              नियामक द्वारा अधिसूचित किसी भी पूर्व-भुगतान साधन
                              के समापन या अन्य परिस्थितियों में बकाया बैलेंस
                              नियामक/कानून के तहत संवलित किया जाएगा।
                            </li>
                          </ul>
                        </div>
                        <h5 className="c15 mt-6">20. संचार</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              एनकैश आपके द्वारा हमसे जुड़ाव के दौरान प्रदान की
                              गई संपर्क जानकारी पर आपसे संचार कर सकता है, जिसमें
                              साइन-अप, लेन-देन या एनकैश प्लेटफॉर्म पर या उसके
                              माध्यम से किसी तृतीय-पक्ष उत्पाद या सेवाओं का लाभ
                              उठाना शामिल है।
                            </li>
                            <li>
                              हम आपको ईमेल, एसएमएस या पुष अधिसूचनाओं या किसी
                              अन्य प्रौद्योगिकी के माध्यम से संचार अलर्ट
                              भेजेंगे। आप सहमत हैं कि हमारे नियामक से परे कारणों
                              के कारण संचार में व्यवधान हो सकता है, जिसमें आपका
                              फोन बंद होना, गलत ईमेल पता, नेटवर्क व्यवधान शामिल
                              हैं। आप सहमत हैं कि एनकैश को किसी भी अलर्ट की
                              गैर-वितरण या देरी, विकृति या संचार विफलता के कारण
                              आपको होने वाली हानि के लिए दायी नहीं ठहराया जाएगा।
                            </li>
                            <li>
                              आप स्वीकार करते हैं कि आप हमारे साथ साझा किए गए
                              संपर्क विवरण के लिए जिम्मेदार हैं और अपने संपर्क
                              विवरण में किसी भी परिवर्तन पर हमें तुरंत अपडेट
                              करेंगे। आप हमें किसी भी एनकैश सेवा या ऑफर के लिए
                              आपको संपर्क करने एवं संचार करने की अधिकृत देते
                              हैं। हम अलर्ट भेजने या आपके साथ संचार के लिए
                              तृतीय-पक्ष सेवा प्रदाताओं का उपयोग कर सकते हैं। आप
                              एनकैश एवं एनकैश इकाइयों को डीएनडी सेटिंग्स को
                              ओवरराइड करने की अधिकृत देते हैं ताकि कॉल, एसएमएस,
                              ईमेल एवं किसी अन्य संचार मोड पर आपको पहुंच सकें।
                            </li>
                          </ul>
                        </div>
                        <h5 className="c15 mt-6">
                          21. शासक कानून एवं विवाद निपटान
                        </h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              इन शर्तों से उत्पन्न या संबंधित कोई भी विवाद
                              मध्यस्थता के माध्यम से हल किए जाएंगे, जो हमारे
                              द्वारा नियुक्त एकमात्र मध्यस्थ द्वारा, मध्यस्थता
                              एवं सुलह अधिनियम, 1996 (संशोधित) के अनुसार।
                              मध्यस्थता का स्थान मुंबई होगा, और कार्यवाही
                              अंग्रेजी में होगी।
                            </li>
                            <li>
                              मध्यस्थता के अधीन, मुंबई की अदालतों को विशेष
                              अधिकार क्षेत्र होगा।
                            </li>
                            <li>
                              आप सहमत हैं कि मध्यस्थता के अलावा हमारे विरुद्ध
                              कोई निषेधाज्ञा या विशिष्ट प्रदर्शनर्श नहीं मांगा
                              जाएगा।
                            </li>
                            <li>
                              विवादित लेन-देन को लेन-देन तिथि से 30 व्यावसायिक
                              दिनों के भीतर रिपोर्ट करना होगा।
                            </li>
                            <li>
                              अनधिकृत या धोखाधड़ी लेन-देन के लिए, ग्राहकों को 10
                              दिनों के भीतर विवाद उठाना होगा।
                            </li>
                            <li>
                              एनकैश अपनी विवेकाधीनता से मानक अवधि के बाद रिपोर्ट
                              किए गए विवादों की समीक्षा कर सकता है, देरी की खोज
                              या वास्तविक कठिनाई के मामलों में।
                            </li>
                            <li>
                              सभी विवादों की जांच एवं हल आरबीआई समयसीमाओं के
                              अनुसार किया जाएगा और ग्राहकों को उनके पंजीकृत चैनल
                              के माध्यम से संचारित किया जाएगा।
                            </li>
                            <li>
                              एनकैश द्वारा अनहल विवाद आरबीआई एकीकृत लोकपाल योजना
                              के तहत उन्नत किए जा सकते हैं।
                            </li>
                            <li>
                              विवाद, चार्जबैक या धोखाधड़ी रिपोर्ट करने के लिए,
                              ग्राहक{" "}
                              <a
                                href="https://www.enkash.com/support"
                                target="_blank"
                                className="text-break"
                              >
                                https://www.enkash.com/support
                              </a>{" "}
                              पर अनुरोध उठा सकते हैं, या वैकल्पिक रूप से
                              support@enkash.com पर लिखकर या +91-85304-90475 पर
                              कॉल करके एनकैश सहायता से संपर्क कर सकते हैं।
                            </li>
                          </ul>
                        </div>
                        <h5 className="c15 mt-6">22. विविध</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              पूर्णअनबुधं: ये शर्तें, नीतियों के साथ, आप एवं हम
                              के बीच पूर्णअनबुधं का गठन करती हैं, पूर्व अनुबंधों
                              को रद्द करते हुए।
                            </li>
                            <li>
                              अविभाज्यता: यदि कोई प्रावधान अमान्य या अक्रिय पाया
                              जाता है, तो शेष प्रावधान पूर्णरूप से प्रभावी
                              रहेंगे।
                            </li>
                            <li>
                              हस्तांतरण: हम बिना आपकी सहमति के इन शर्तों या
                              हमारे अधिकारों/दायित्वों को हस्तांतरित या
                              स्थानांतरित कर सकते हैं। आप बिना हमारी पूर्व लिखित
                              अनुमति के हस्तांतरित नहीं कर सकते।
                            </li>
                            <li>
                              माफी: किसी भी उल्लंघन की माफी किसी पूर्व, समवर्ती
                              या बाद के उल्लंघन की माफी का गठन नहीं करेगी।
                            </li>
                            <li>
                              सूचनाएं: हमारी सभी सूचनाएं आपके पंजीकृत विवरण पर
                              ईमेल/एसएमएस के माध्यम से या एनकैश प्लेटफॉर्म पर
                              पोस्ट की जाएंगी। आपको{" "}
                              <a
                                href="mailto:support@enkash.com"
                                className="text-break"
                              >
                                support@enkash.com
                              </a>{" "}
                              पर लिखित रूप से सूचित करना होगा।
                            </li>
                            <li>
                              जीवित रहना: दायित्व, क्षति पूर्ति, बौद्धिक संपदा,
                              शासक कानून एवं गोपनीयता पर प्रावधान समाप्ति के बाद
                              जीवित रहेंगे।
                            </li>
                            <li>
                              अधिक बल: हम अधिक बल घटनाओं के कारण देरी या
                              विफलताओं के लिए दायी नहीं होंगे।
                            </li>
                            <li>
                              कोई एजेंसी: यहां कुछ भी आप एवं हम के बीच एजेंसी,
                              साझेदारी या संयुक्त उद्यम का निर्माण नहीं करता।
                            </li>
                            <li>
                              संपर्क: किसी भी सहायता के लिए,{" "}
                              <a
                                href="mailto:support@enkash.com"
                                className="text-break"
                              >
                                support@enkash.com
                              </a>{" "}
                              पर हमसे संपर्क करें।
                            </li>
                          </ul>
                        </div>
                        <h5 className="c15 mt-6">
                          23. पीपीआई कार्डधारकों के लिए अच्छी सुरक्षा प्रथाएं
                          (परिशिष्ट)
                        </h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              अपने क्रेडेंशियल गोपनीय रखें
                              <ol>
                                <li>
                                  कभी भी OTP, PIN, CVV, पासवर्ड या कोई लॉगिन
                                  विवरण किसी के साथ साझा न करें।
                                </li>
                                <li>
                                  बैंक, जारीकर्ता, RBI या कानून प्रवर्तन कभी
                                  इन्हें नहीं मांगेंगे।
                                </li>
                                <li>
                                  कार्ड पर अपना PIN न लिखें या क्रेडेंशियल के
                                  स्क्रीनशॉट न स्टोर करें।
                                </li>
                              </ol>
                            </li>

                            <li>
                              फिशिंग एवं धोखाधड़ी कॉल्स से सावधान रहें
                              <ol>
                                <li>
                                  "KYC अपडेट", "कार्ड निष्क्रियण", "रिफंड",
                                  "ऑफर" दावा करने वाले यादृच्छिक लिंक पर क्लिक न
                                  करें।
                                </li>
                                <li>
                                  बैंक एजेंट बनने वाले अज्ञात कॉलर्स पर भरोसा न
                                  करें।
                                </li>
                                <li>
                                  जारीकर्ता की वेबसाइट/ऐप पर आधिकारिक ग्राहक
                                  देखभाल नंबर हमेशा सत्यापित करें।
                                </li>
                              </ol>
                            </li>

                            <li>
                              अपने भौतिक कार्ड की रक्षा करें
                              <ol>
                                <li>
                                  कार्ड को सुरक्षित स्थान पर रखें; अनधिकृत
                                  व्यक्तियों को न दें।
                                </li>
                                <li>
                                  POS टर्मिनल या ATM पर PIN दर्ज करते समय कीपैड
                                  को कवर करें।
                                </li>
                                <li>
                                  यदि कार्ड खो जाता है, चोरी हो जाता है या गुम
                                  हो जाता है, तो तुरंत रिपोर्ट करें।
                                </li>
                              </ol>
                            </li>

                            <li>
                              लेन-देन अलर्ट सक्षम करें
                              <ol>
                                <li>
                                  हर लेन-देन के लिए SMS/ईमेल/ऐप अधिसूचनाएं चालू
                                  करें।
                                </li>
                                <li>
                                  संदिग्ध लेन-देन के लिए स्टेटमेंट नियमित रूप से
                                  समीक्षा करें।
                                </li>
                                <li>
                                  अपरिचित या अनधिकृत शुल्कों को तुरंत रिपोर्ट
                                  करें।
                                </li>
                              </ol>
                            </li>

                            <li>
                              सुरक्षित नेटवर्क का उपयोग करें
                              <ol>
                                <li>
                                  अपने वॉलेट/कार्ड ऐप तक पहुंचते समय सार्वजनिक
                                  Wi-Fi का उपयोग न करें।
                                </li>
                                <li>
                                  केवल आधिकारिक जारीकर्ता का ऐप या वेबसाइट उपयोग
                                  करें।
                                </li>
                                <li>
                                  अपने फोन को नवीनतम OS एवं सुरक्षा पैच के साथ
                                  अपडेट रखें।
                                </li>
                              </ol>
                            </li>

                            <li>
                              सुरक्षित ऑनलाइन खर्च की प्रथा करें
                              <ol>
                                <li>
                                  केवल विश्वसनीय ई-कॉमर्स प्लेटफॉर्म पर खरीदारी
                                  करें।
                                </li>
                                <li>
                                  वेबसाइट https:// से शुरू हो और लॉक आइकन दिखाए।
                                </li>
                                <li>
                                  उपलब्ध होने पर टोकनाइज्ड कार्ड या सुरक्षित
                                  भुगतान गेटवे पसंद करें।
                                </li>
                              </ol>
                            </li>

                            <li>
                              मजबूत प्रमाणीकरण सेट करें
                              <ol>
                                <li>
                                  मजबूत पासवर्ड का उपयोग करें (अक्षर, संख्याएं,
                                  प्रतीक का मिश्रण)।
                                </li>
                                <li>
                                  जहां संभव हो, बायोमेट्रिक लॉगिन सक्षम करें।
                                </li>
                                <li>
                                  अनुमानित PIN जैसे 0000, 1234, DOB, मोबाइल नंबर
                                  आदि का उपयोग न करें।
                                </li>
                              </ol>
                            </li>

                            <li>
                              फ्रीबीज, कैशबैक एवं रिवॉर्ड घोटालों से सावधान रहें
                              <ol>
                                <li>
                                  धोखेबाज अक्सर मुफ्त वाउचर, गिफ्ट कार्ड, कैशबैक
                                  या सीमित वादा करते हैं।
                                </li>
                                <li>
                                  यदि कोई ऑफर "बहुत अच्छा लगता है तो सत्य नहीं",
                                  तो संभवतः नहीं है।
                                </li>
                              </ol>
                            </li>

                            <li>
                              धोखाधड़ी तुरंत रिपोर्ट करें
                              <ol>
                                <li>
                                  यदि दुरुपयोग का संदेह हो, तो मिनटों में
                                  जारीकर्ता से संपर्क करें।
                                </li>
                                <li>
                                  एनकैश मोबाइल ऐप, ऑनलाइन पोर्टल या हेल्पलाइन का
                                  उपयोग करके कार्ड ब्लॉक करें।
                                </li>
                                <li>
                                  यदि आपकी अनुमति के बिना धन डेबिट होता है, तो
                                  शिकायत दर्ज करें।
                                </li>
                              </ol>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              जारीकर्ता कभी स्क्रीन शेयरिंग ऐप्स (AnyDesk,
                              TeamViewer) नहीं मांगते।
                            </li>
                            <li>
                              एटीएम या POS मशीनों पर अजनबियों को "सहायता" न दें।
                            </li>
                            <li>
                              प्राप्त धन के लिए WhatsApp/एसएमएस पर भेजे गए क्यूर
                              कोड पर भरोसा न करें – क्यूर कोड भुगतान के लिए
                              स्कैन किया जाता है, प्राप्ति के लिए नहीं।
                            </li>
                            <li>
                              जारीकर्ता के साथ अपना मोबाइल नंबर एवं ईमेल अपडेट
                              रखें।
                            </li>
                            <li>
                              लेन-देन सीमाओं को समझें और केवल आवश्यक धन लोड
                              रखें।
                            </li>
                            <li>
                              अपने फोन गैलरी में कार्ड के सामने/पीछे की फोटो
                              स्टोर न करें।
                            </li>
                          </ul>
                        </div>
                        <h5 className="c15 mt-6">24. शब्दावली</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              कंपनी नीति: नियोकता या प्रायोजक संगठन की आंतरिक
                              दिशानिर्देशों का संदर्भ, जो पीपीआई (कार्ड या
                              वॉलेट) के रीलोड, उपयोग एवं पात्रता को नियंत्रित
                              करती हैं।
                            </li>
                            <li>
                              नवीनीकरण / पुनः-सत्यापन: ग्राहक अनुरोध पर पीपीआई
                              (जैसे गिफ्ट या वॉलेट) की अवधि विस्तार, जिसमें
                              स्थानांतरित बैलेंस के साथ नया पीपीआई पुनः-जारी
                              करना शामिल।
                            </li>
                          </ul>
                          <p>
                            ग्राहकों को अवधि, नवीनीकरण एवं रिफंड प्रक्रियाओं पर
                            व्यावहारिक मार्गदर्शन के लिए{" "}
                            <a
                              href="https://www.enkash.com/"
                              className="text-break"
                            >
                              https://www.enkash.com/
                            </a>{" "}
                            पर FAQ अनुभाग का संदर्भ करने के लिए प्रोत्साहित किया
                            जाता है। एनकैश पीपीआई उत्पादों का उपयोग करके, आप
                            पुष्टि करते हैं कि आपने ये शर्तें पढ़ी, समझी हैं और
                            बिना शर्त सहमत हैं। यदि आपके कोई प्रश्न हैं, तो
                            कृपया आगे बढ़ने से पहले हमसे संपर्क करें।
                          </p>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center">***** नीति का अंत *****</p> */}
        </div>
      </div>
    </>
  )
}

export default CustomerOnboarding
