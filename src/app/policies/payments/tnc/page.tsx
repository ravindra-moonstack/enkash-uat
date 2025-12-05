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
                            <li>
                              आप आगे प्रतिनिधित्व, वारंटी, और प्रतिज्ञान करते
                              हैं कि:{" "}
                              <ul>
                                {" "}
                                <li>
                                  आपके प्लेटफॉर्म और सेवाओं का उपयोग और आपके
                                  उत्पादों/सेवाओं की बिक्री पूरी तरह से आपके
                                  स्वयं के वास्तविक व्यवसाय गतिविधियों के लिए है
                                  जो लागू कानूनों का पालन करती हैं और एंकैश और
                                  उसके सुविधा प्रदाताओं द्वारा समय-समय पर जारी
                                  निर्देशों का भी।
                                </li>{" "}
                                <li>
                                  सेवाओं का आपका उपयोग उन श्रेणियों के तहत उन
                                  गतिविधियों से मेल खाता है जिनके लिए आपने इन
                                  शर्तों में प्रवेश करने के समय स्पष्ट रूप से
                                  पंजीकरण किया है और एंकैश डैशबोर्ड पर आपके
                                  ऑनबोर्डिंग फॉर्म में सेट आउट या एंकैश द्वारा
                                  लिखित रूप से अन्यथा अनुमोदित जैसा।
                                </li>{" "}
                                <li>
                                  आप सेवाओं को पूर्ण या आंशिक रूप से पुनः-बेचना
                                  या सौंपना नहीं करेंगे, या अन्यथा किसी भी तीसरे
                                  पक्षों, जिसमें आपके संबद्ध संगठन शामिल हैं,
                                  द्वारा सेवाओं के उपयोग की अनुमति नहीं देंगे।
                                </li>{" "}
                                <li>
                                  सेवाओं का आपका उपयोग किसी भी अवैध, गैरकानूनी,
                                  अनधिकृत गतिविधि को सुविधाजनक नहीं बनाता, जो
                                  धोखाधड़ी के इरादे से किया जाता है, या आपके
                                  अनुचित संवर्धन और/या अवैध लाभ का परिणाम होने
                                  की संभावना है।
                                </li>{" "}
                                <li>
                                  सेवाओं का आपका उपयोग इन शर्तों के तहत
                                  निर्दिष्ट निषिद्ध उत्पादों और/या सेवाओं की
                                  पेशकश, बिक्री या खरीद को सुविधाजनक नहीं बनाता।
                                </li>{" "}
                              </ul>{" "}
                            </li>{" "}
                            <li>
                              आप अपने ग्राहकों की व्यक्तिगत डेटा सहित जानकारी
                              साझा करने के लिए स्पष्ट सूचित सहमति रखते हैं एंकैश
                              और उसके संबद्ध संगठनों के साथ (i) सेवाओं के
                              प्रावधान के संबंध में आपको और प्लेटफॉर्म या सेवाओं
                              के अन्य उपयोगकर्ताओं को, (ii) ऐसी जानकारी साझा
                              करने के उद्देश्यों के लिए सरकारी प्राधिकरणों के
                              साथ जैसा लागू कानूनों के तहत मांगा जाता है, (iii)
                              लेनदेन ट्रैकिंग और धोखाधड़ी निवारण के उद्देश्य के
                              लिए।
                            </li>{" "}
                            <li>
                              आप स्वीकार करते हैं कि सेवाएं जटिल प्रकृति की हैं
                              और सुविधा प्रदाताओं के हस्तक्षेप की आवश्यकता है।
                              आप स्वीकार करते हैं और सहमत होते हैं कि एंकैश केवल
                              एंकैश को एकमात्र और प्रत्यक्ष रूप से जिम्मेदार
                              ठहराने वाले कृत्यों या चूक के लिए उत्तरदायी होगा।
                            </li>{" "}
                            <li>
                              सेवाओं का लाभ उठाने के लिए, आपको एंकैश के समाधानों
                              को आपके प्लेटफॉर्म के साथ एकीकरण सुविधाजनक बनाने
                              के लिए सभी आवश्यक कदम उठाने होंगे। यहां स्पष्ट
                              किया जाता है कि कोई भी सर्वर टू सर्वर (एस2एस)
                              एकीकरण, यदि किया जाता है, तो केवल सेवाओं का लाभ
                              उठाने के उद्देश्य के लिए होगा और केवल आपके द्वारा
                              उपयोग या पहुंच के लिए अभिप्रेत है।
                            </li>{" "}
                            <li>
                              आपको एंकैश को उसके ऑडिटरों, सुविधा प्रदाताओं,
                              सरकारी प्राधिकरणों, या कानून प्रवर्तन एजेंसियों
                              को, समय-समय पर अनुरोध पर तुरंत, केवाईसी दस्तावेज,
                              प्रासंगिक पुस्तकें, लेनदेन के प्रमाण की मूल
                              प्रति/प्रतियां, चालान या अन्य रिकॉर्ड प्रदान करने
                              में सहायता करनी होगी, जिसमें आपके ग्राहकों द्वारा
                              रखे गए किसी भी आदेश से संबंधित शामिल हैं। आपको
                              अपने साइट पर रखे गए आदेश की प्रासंगिक तिथि से 10
                              (दस) वर्ष की अवधि के लिए लेनदेन से संबंधित रिकॉर्ड
                              बनाए रखने होंगे। एंकैश और सुविधा प्रदाता, और/या
                              सरकारी एजेंसियां और/या कानून प्रवर्तन एजेंसियां
                              ग्राहक के आदेशों से संबंधित रिकॉर्ड और अन्य डेटा
                              का किसी भी समय ऑडिट और निरीक्षण करने का हकदार
                              होंगी बिना किसी पूर्व सूचना के। आपको एंकैश, उसके
                              ऑडिटरों, सुविधा प्रदाताओं, सरकारी प्राधिकरणों, या
                              कानून प्रवर्तन एजेंसियों के साथ किसी भी ऑडिट,
                              निरीक्षण या किसी अन्य अनुरोध के तहत सहयोग
                              सुनिश्चित करना होगा।
                            </li>{" "}
                            <li>
                              आप (चाहे ऑनलाइन या अन्यथा): (i) स्वयं को एंकैश या
                              सुविधा प्रदाता का एजेंट या प्रतिनिधि के रूप में
                              वर्णित नहीं करेंगे; (ii) प्रतिनिधित्व नहीं करेंगे
                              कि आपके पास एंकैश या सुविधा प्रदाता द्वारा पेश किए
                              गए किसी भी उत्पाद या सेवाओं को पेश करने के कोई
                              अधिकार हैं; और (iii) अपने ग्राहक या किसी तीसरे
                              पक्ष को कोई प्रतिनिधित्व नहीं करेंगे या कोई वारंटी
                              नहीं देंगे जो एंकैश या सुविधा प्रदाता को प्रत्यक्ष
                              या अप्रत्यक्ष रूप से आपके ग्राहक या किसी तीसरे
                              पक्ष के प्रति कोई दायित्व और/या जिम्मेदारी निभाने
                              के लिए आवश्यक हो।
                            </li>{" "}
                            <li>
                              जब कोई ग्राहक आपके से माल या सेवाएं खरीदता है, तो
                              आप अपने एकमात्र विवेक पर, ग्राहक पर कोई सुविधा
                              शुल्क लगा सकते हैं। एंकैश को आपके ग्राहकों को लगाए
                              गए किसी भी ऐसे सुविधा शुल्क के परिणामस्वरूप होने
                              वाली किसी भी जिम्मेदारी या हानि को आप वहन करेंगे।
                              आप एंकैश को ऐसी दायित्व या हानि के लिए हर्जाना
                              देंगे।
                            </li>{" "}
                            <li>
                              आपको इस समझौते के तहत सेवाओं के संबंध में किसी भी
                              तीसरे पक्ष सेवा प्रदाता को संलग्न, नियुक्त, या
                              अन्यथा उपयोग करने की अनुमति नहीं है बिना एंकैश की
                              पूर्व लिखित सहमति के। आप आगे सहमत होते हैं कि वे
                              सेवाओं का उपयोग पूरी तरह से (a) एंकैश से सीधे; (b)
                              एंकैश द्वारा प्रदान या स्पष्ट रूप से अनुमोदित
                              पेमेंट ऑर्केस्ट्रेशन समाधान के माध्यम से; या (c)
                              व्यापारी द्वारा विकसित स्वामित्वीय इन-हाउस
                              ऑर्केस्ट्रेशन समाधान के माध्यम से करेंगे, एंकैश की
                              पूर्व लिखित अनुमति के अधीन। आपको एंकैश द्वारा
                              स्पष्ट रूप से अनुमोदित किसी तीसरे पक्ष पेमेंट
                              ऑर्केस्ट्रेटर के माध्यम से कोई भुगतान संलग्न,
                              एकीकृत, या रूट नहीं करना होगा। इस खंड का कोई
                              उल्लंघन, जिसमें अनुमोदित तीसरे पक्ष ऑर्केस्ट्रेटर
                              का उपयोग शामिल है, एंकैश को बिना किसी दायित्व के
                              सेवाओं को तुरंत निलंबित और/या समाप्त करने का
                              अधिकार देगा।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">4. भुगतान</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              सेवाओं के प्रावधान के लिए लागू शुल्क एंकैश द्वारा
                              समय-समय पर लगाए जाएंगे। आप सहमत होते हैं कि शुल्क
                              एंकैश द्वारा निर्धारित तरीके, दरों और आवृत्ति के
                              अनुसार लगाए जाएंगे। एंकैश को लगाए गए शुल्क की राशि
                              को अपडेट करने का अधिकार सुरक्षित है उसके एकमात्र
                              विवेक पर। एंकैश शुल्क पूर्ण भुगतान उत्पादों,
                              डैशबोर्ड और कस्टम रिपोर्ट्स तक पहुंच की अनुमति
                              देते हैं, और लागू दिशानिर्देशों के तहत निर्धारित
                              पेमेंट उपकरणों के लिए एमडीआर शुल्क शामिल करते हैं,
                              यदि कोई हो। स्पष्टता के लिए, एंकैश शुल्क में रुपे
                              डेबिट कार्ड्स और यूपीआई लेनदेन के लिए शून्य एमडीआर
                              शामिल है।
                            </li>

                            <li>
                              शुल्क लागू करों को छोड़कर हैं और एंकैश समय-समय पर
                              शुल्क पर ऐसे लागू कर लगाएगा। आप सहमत होते हैं कि
                              इन शर्तों की अवधि के दौरान लागू करों में कोई
                              वैधानिक भिन्नता आप द्वारा वहन की जाएगी।
                            </li>

                            <li>
                              हम ऐसे महीने के दौरान प्रदान की गई सेवाओं के लिए
                              लगाए गए शुल्क के संबंध में मासिक चालान जारी
                              करेंगे। चालान मासिक आधार पर डैशबोर्ड पर उपलब्ध
                              हैं। किसी चालान के संबंध में कोई विवाद आपको चालान
                              की तिथि से दस (10) दिनों से अधिक न होने वाले नोटिस
                              के माध्यम से हमें संवादित करना होगा। एंकैश उचित
                              विवादित राशियों को सुलझाने के लिए सद्भावपूर्ण
                              प्रयास करेगा।
                            </li>

                            <li>
                              आप सभी प्रोसेस्ड लेनदेन के लिए दैनिक आधार पर सुलह
                              करने के लिए जिम्मेदार होंगे। विसंगतियों के मामले
                              में, आपको धनराशि प्राप्ति पर तीन (3) दिनों के भीतर
                              एंकैश को ऐसी विसंगति के संबंध में रिपोर्ट करनी
                              होगी। यदि एक ही समय के बाद आपके द्वारा एंकैश को
                              हाइलाइट किया जाता है तो एंकैश किसी भी सुलह मुद्दे
                              के लिए उत्तरदायी नहीं होगा।
                            </li>

                            <li>
                              एंकैश चालान उत्पन्न करने से पहले एंकैश डैशबोर्ड पर
                              अपनी जीएसटी पंजीकरण संख्या अपडेट करने के लिए आप
                              एकमात्र जिम्मेदार होंगे और केवाईसी के भाग के रूप
                              में जीएसटी प्रमाणपत्र जमा करेंगे। एंकैश द्वारा
                              प्रदान की गई जानकारी के आधार पर जीएसटी टैक्स चालान
                              जारी किया जाएगा और लेनदेन जीएसटी रिटर्न में
                              रिपोर्ट किए जाएंगे। जीएसटी रिटर्न वैधानिक
                              समयसीमाओं के अनुसार दाखिल किए जाएंगे, ताकि आपको
                              उचित इनपुट टैक्स क्रेडिट उपलब्ध हो सके। एंकैश
                              जीएसटी संख्या और अन्य विवरणों को अपडेट करने में
                              आपकी किसी भी गलती और या गलत प्रतिनिधित्व के लिए
                              जिम्मेदार नहीं होगा जैसा जीएसटी प्रमाणपत्र के
                              अनुसार। आगे, जीएसटी प्राधिकरणों द्वारा एंकैश पर
                              लगाई गई किसी भी दायित्व को आपके द्वारा प्रदान की
                              गई गलत जानकारी या आपके द्वारा किसी वैधानिक जानकारी
                              के जानबूझकर रोकने के कारण एंकैश द्वारा आपसे वसूला
                              जाएगा।
                            </li>

                            <li>
                              जीएसटी कानून के तहत उचित बी2बी टैक्स चालान जारी
                              करने और आपको जीएसटी इनपुट क्रेडिट उपलब्ध कराने के
                              लिए, एंकैश आपके सही जीएसटीआईएन को रिकॉर्ड करेगा।
                              इसके लिए, आपको सलाह दी जाती है कि एंकैश के साथ
                              बनाए रखे गए खाते में कैप्चर किए गए अपने जीएसटीआईएन
                              और पंजीकृत पते को आवधिक अंतराल पर सत्यापित करें और
                              आवश्यकतानुसार सुधारें। घटना में, सही जीएसटीआईएन
                              एंकैश के साथ आपके खाते में अपडेट नहीं है, तो आप
                              उसके संबंध में एकमात्र जिम्मेदार होंगे और एंकैश
                              चालान के संशोधन और/या जीएसटी रिपोर्टिंग में संशोधन
                              के लिए किसी भी अनुरोध को समायोजित करने के लिए
                              उत्तरदायी नहीं होगा।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">5. गोपनीयता नीति</h5>
                        <div className="container my-4">
                          <p>
                            लागू कानूनों द्वारा अनुमत अधिकतम हद तक, प्लेटफॉर्म
                            और सेवाएं "जैसी हैं" आधार पर प्रदान की जाती हैं। आप
                            स्वीकार करते हैं कि एंकैश वारंटी नहीं देता कि
                            सेवा(एं) अविरत या त्रुटि मुक्त होंगी या आपके विशिष्ट
                            व्यवसाय उद्देश्यों के लिए उपयुक्त होंगी।
                          </p>
                        </div>

                        <h5 className="c15 mt-6">6. तीसरे पक्ष लिंक/ऑफर</h5>
                        <div className="container my-4">
                          <p>
                            प्लेटफॉर्म में ऐसे अन्य वेबसाइटों के लिंक शामिल हैं
                            जिन पर हमारा कोई नियंत्रण नहीं है। हम आपको उन अन्य
                            वेबसाइटों की शर्तों और गोपनीयता नीतियों की समीक्षा
                            करने के लिए प्रोत्साहित करते हैं ताकि आप वेबसाइटों
                            के उपयोग को समझ सकें और वे आपकी जानकारी कैसे एकत्र,
                            उपयोग और साझा करते हैं। एंकैश आपके द्वारा प्लेटफॉर्म
                            से लिंक करने वाली अन्य वेबसाइटों की शर्तों और
                            स्थितियों, गोपनीयता नीतियों या प्रथाओं के लिए
                            जिम्मेदार नहीं है। आप आगे स्वीकार करते हैं और सहमत
                            होते हैं कि एंकैश प्रत्यक्ष या अप्रत्यक्ष रूप से
                            किसी भी क्षति या हानि के लिए जिम्मेदार या उत्तरदायी
                            नहीं होगा जो या कथित रूप से किसी भी ऐसी साइट या
                            संसाधन पर या उसके माध्यम से उपलब्ध सामग्री, माल या
                            सेवाओं के उपयोग या भरोसे के कारण हुआ हो। वेबसाइट के
                            माध्यम से एक्सेस किए गए किसी भी तीसरे पक्ष के साथ
                            आपकी बातचीत आपके अपने जोखिम पर है, और एंकैश तीसरे
                            पक्षों के कृत्यों, चूक, त्रुटियों, प्रतिनिधित्वों,
                            वारंटी, उल्लंघनों या लापरवाही या व्यक्तिगत चोटों,
                            मृत्यु, संपत्ति क्षति, या अन्य क्षतियों या खर्चों के
                            लिए कोई दायित्व नहीं रखेगा जो आपके तीसरे पक्षों के
                            साथ इंटरैक्शन से उत्पन्न हो।
                          </p>
                        </div>

                        <h5 className="c15 mt-6">7. वारंटी का अस्वीकरण</h5>
                        <div className="container my-4">
                          <p>
                            लागू कानूनों द्वारा अनुमत अधिकतम हद तक, प्लेटफॉर्म
                            और सेवाएं "जैसी हैं" आधार पर प्रदान की जाती हैं। आप
                            स्वीकार करते हैं कि एंकैश वारंटी नहीं देता कि
                            सेवा(एं) अविरत या त्रुटि मुक्त होंगी या आपके विशिष्ट
                            व्यवसाय उद्देश्यों के लिए उपयुक्त होंगी।
                          </p>
                        </div>

                        <h5 className="c15 mt-6">8. दायित्व की सीमा</h5>
                        <div className="container my-4">
                          <p>
                            {" "}
                            एंकैश (इसके अधिकारियों, निदेशकों, कर्मचारियों,
                            प्रतिनिधियों, संबद्ध संगठनों, और प्रदाताओं सहित) (a)
                            किसी भी चोट, मृत्यु, हानि, दावा, ईश्वरीय कृत्य,
                            दुर्घटना, विलंब, या किसी भी प्रकार की प्रत्यक्ष,
                            विशेष, उदाहरणात्मक, दंडात्मक, अप्रत्यक्ष, आकस्मिक या
                            परिणामी क्षतियों (कुशलता से खोए लाभ या बचत सहित
                            लेकिन सीमित नहीं) के लिए जिम्मेदार या उत्तरदायी नहीं
                            होगा, चाहे अनुबंध, टॉर्ट, सख्त दायित्व या अन्यथा पर
                            आधारित हो, जो उत्पन्न हो या किसी भी तरीके से जुड़ा
                            हो (i) प्लेटफॉर्म के किसी भी घटक के उपयोग या अक्षमता
                            के उपयोग सहित किसी भी विफलता या विलंब से, या (ii)
                            प्लेटफॉर्म या सेवाओं या उनमें सामग्री के किसी भी
                            उपयोग से, या (iii) हमारे या किसी सुविधा प्रदाता
                            द्वारा प्रदर्शन या गैर-प्रदर्शन से, भले ही हमें ऐसी
                            पार्टियों या किसी अन्य पार्टी को क्षति की संभावना की
                            सलाह दी गई हो, या (iv) आपके कंप्यूटर उपकरण या अन्य
                            संपत्ति को क्षति या वायरस जो आपके प्लेटफॉर्म तक
                            पहुंच या सेवाओं के उपयोग या उनमें किसी भी सामग्री के
                            उपयोग के परिणामस्वरूप संक्रमित हो सकता है।
                          </p>
                          <p>
                            {" "}
                            इन शर्तों के तहत कुछ भी अस्वीकार किए बिना, एंकैश का
                            कुल दायित्व और उसके संबद्ध संगठनों, अधिकारियों,
                            कर्मचारियों और एजेंटों का सेवा(ओं) से संबंधित, एक
                            (1) महीने के शुल्क के बराबर राशि से अधिक नहीं होगा
                            जो आपने दायित्व उत्पन्न करने वाली विशिष्ट सेवा(ओं)
                            के लिए भुगतान किया है। शर्तों के तहत या संबंध में
                            एंकैश का दायित्व आनुपातिक रूप से कम हो जाएगा हद तक
                            कोई हानि या क्षति आपके या आपके तीसरे पक्ष प्रदाताओं
                            द्वारा योगदानित है।
                          </p>
                        </div>

                        <h5 className="c15 mt-6">9. हर्जाना</h5>
                        <div className="container my-4">
                          <p>
                            आप एंकैश (और उसके अधिकारियों, संबद्ध संगठनों, समूह
                            कंपनी, निदेशकों, एजेंटों और कर्मचारियों) को हर्जाना
                            देने और निर्दोष रखने के लिए सहमत होते हैं किसी भी और
                            सभी दावों से, चाहे तीसरे पक्षों द्वारा लाए गए हों या
                            न हों, कार्रवाई के कारणों, मांगों, वसूलियों,
                            हानियों, क्षतियों, जुर्मानों, दंडों या अन्य प्रकार
                            या प्रकृति के किसी भी अन्य लागतों या खर्चों से,
                            जिसमें उचित वकीलों की फीस शामिल है, या इन शर्तों के
                            उल्लंघन से उत्पन्न या संबंधित, आपके द्वारा लागू
                            कानूनों या तीसरे पक्ष के अधिकारों का उल्लंघन, या
                            प्लेटफॉर्म का आपका उपयोग या आपके और किसी तीसरे पक्ष
                            के बीच कोई विवाद। यहां सेट फॉर्थ हर्जाने के
                            प्रतिज्ञान आपके सेवाओं के उपयोग की समाप्ति के बाद भी
                            जीवित रहेंगे और जारी रहेंगे।
                          </p>
                        </div>

                        <h5 className="c15 mt-6">10. कार्ड एसोसिएशन नियम</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              "कार्ड पेमेंट नेटवर्क नियम" लिखित नियमों,
                              विनियमों, रिलीज, दिशानिर्देशों, प्रक्रियाओं,
                              व्याख्याओं और अन्य आवश्यकताओं (चाहे संविदात्मक या
                              अन्यथा) को संदर्भित करते हैं जो कार्ड पेमेंट
                              नेटवर्क द्वारा लगाए और अपनाए गए हैं। इन कार्ड
                              पेमेंट नेटवर्क में लेनदेन प्राधिकरण सक्षम करने के
                              लिए बुनियादी ढांचा और प्रक्रियाएं हैं। कार्ड
                              पेमेंट नेटवर्क आपको उनके द्वारा तैयार किए गए सभी
                              लागू दिशानिर्देशों, नियमों, और विनियमों का पालन
                              करने की आवश्यकता रखते हैं।
                            </li>

                            <li>
                              कार्ड पेमेंट नेटवर्क अपने दिशानिर्देशों, नियमों और
                              विनियमों को समय-समय पर संशोधित करने का अधिकार
                              सुरक्षित रखते हैं। हमें कार्ड पेमेंट नेटवर्क
                              नियमों में संशोधनों के अनुरूप इन शर्तों को
                              संशोधित, संशोधित या बदलने की आवश्यकता हो सकती है
                              और ऐसे संशोधन, यदि कोई हों, तो तुरंत प्रभाव से
                              आपके लिए बाध्यकारी माने जाएंगे।
                            </li>

                            <li>
                              आप कार्ड पेमेंट नेटवर्क द्वारा प्रकाशित और/या
                              अनिवार्य किए गए सभी कार्यक्रमों, दिशानिर्देशों,
                              आवश्यकताओं का पूर्ण रूप से पालन करने के लिए सहमत
                              होते हैं। कार्ड पेमेंट नेटवर्क नियमों को समझने में
                              हमारी सहायता के باوجود, आप स्पष्ट रूप से स्वीकार
                              करते हैं और सहमत होते हैं कि आप कार्ड पेमेंट
                              नेटवर्क नियमों के सभी प्रावधानों के पालन का जोखिम
                              उठा रहे हैं, भले ही आप उन प्रावधानों से अवगत हों
                              या उन तक पहुंच हो। उदाहरण के उद्देश्य से -
                              मास्टरकार्ड, वीजा, डाइनर्स, रुपे और अमेरिकन
                              एक्सप्रेस अपनी संबंधित वेबसाइटों पर अपनी संबंधित
                              नियमों के अंश उपलब्ध कराते हैं।
                            </li>

                            <li>
                              घटना में, आपके कार्ड पेमेंट नेटवर्क नियमों के
                              गैर-पालन से हमारे ऊपर कार्ड पेमेंट नेटवर्क द्वारा
                              लगाए गए या मांगे गए किसी भी जुर्माने, दंड या अन्य
                              राशि का परिणाम होता है, तो हमारी अन्य अधिकारों के
                              बिना पूर्वाग्रह के, आपको तुरंत हमें ऐसी जुर्माने,
                              दंड या अन्य राशि के बराबर राशि का प्रतिपूर्ति करना
                              होगा जो लगाई गई या मांगी गई या ऐसी जुर्माने, दंड
                              और लगानों के संबंध में किसी भी तरीके से खर्च की
                              गई। यदि आप कार्ड पेमेंट नेटवर्क के प्रति अपने
                              दायित्वों का पालन करने में विफल रहते हैं, तो एंकैश
                              निपटान को निलंबित कर सकता है या सेवाओं को तुरंत
                              निलंबित/समाप्त कर सकता है।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">11. छूट</h5>
                        <div className="container my-4">
                          <p>
                            एंकैश को इस समझौते के किसी भी अधिकार या प्रावधान की
                            छूट मानी नहीं जाएगी जब तक कि ऐसी छूट लिखित रूप में न
                            की गई हो। इस समझौते की किसी भी शर्त या स्थिति की छूट
                            को किसी अन्य शर्त या स्थिति की छूट माना नहीं जाएगा,
                            न ही यह निरंतर छूट होगी।
                          </p>
                        </div>

                        <h5 className="c15 mt-6">12. फोर्स मेज्योर</h5>
                        <div className="container my-4">
                          <p>
                            यदि एंकैश द्वारा सेवाओं/प्लेटफॉर्म का प्रदर्शन श्रम
                            विवादों, हड़तालों, ईश्वरीय कृत्यों, महामारी,
                            महामारी, बाढ़, बिजली, गंभीर मौसम, सामग्री की कमी,
                            राशनिंग, किसी वायरस, मैलवेयर, ट्रोजन या अन्य
                            विघटनकारी तंत्रों का प्रेरण, प्लेटफॉर्म के हैकिंग या
                            अवैध उपयोग की कोई घटना, उपयोगिता या संचार विफलताओं,
                            भूकंपों, युद्ध, क्रांति, आतंकवाद के कृत्यों, नागरिक
                            हलचल, सार्वजनिक शत्रुओं के कृत्यों, नाकाबंदी,
                            प्रतिबंध या किसी भी कानून, आदेश, उद्घोषणा, विनियम,
                            अध्यादेश, मांग या आवश्यकता का कानूनी प्रभाव रखने
                            वाली किसी सरकार, नियामक या किसी न्यायिक प्राधिकरण या
                            ऐसी सरकार के किसी प्रतिनिधि की, या इस खंड में
                            संदर्भित उनसे समान या असमान किसी भी अन्य कृत्य से
                            रोका, प्रतिबंधित, विलंबित या हस्तक्षेपित होता है, जो
                            एंकैश के उचित नियंत्रण से परे हैं, तो एंकैश ऐसे
                            प्रदर्शन से मुक्त और छुट्टी दी जाएगी हद तक और ऐसी
                            फोर्स मेज्योर घटना की अवधि के दौरान, और ऐसा
                            गैर-प्रदर्शन किसी भी तरीके से एंकैश द्वारा यहां उसके
                            दायित्वों का उल्लंघन नहीं मानेगा या एंकैश पर कोई
                            कानूनी दायित्व उत्पन्न नहीं करेगा।
                          </p>
                        </div>

                        <h5 className="c15 mt-6">
                          13. एंटी-ब्राइबरी और सैंक्शंस कानून
                        </h5>
                        <div className="container my-4">
                          <p>
                            आप सभी लागू एंटी-ब्राइबरी और एंटी-करप्शन कानूनों का
                            पालन करने के लिए सहमत होते हैं जो अधिकारियों,
                            प्रतिनिधियों, एजेंटों या आपके पक्ष में कार्य करने
                            वाले या आपके साथ जुड़े किसी अन्य व्यक्ति को भुगतान,
                            उपहार, आतिथ्य या मूल्य की कोई अन्य चीज (प्रत्यक्ष या
                            अप्रत्यक्ष रूप से) देने, पेश करने, पेश करने का वादा
                            करने, प्राप्त/स्वीकार करने या किसी अन्य तरीके से
                            कार्य करने से निषिद्ध करते हैं चाहे देश के अंदर से
                            या विदेश से सरकारी अधिकारियों, सार्वजनिक सेवकों,
                            नियामक निकायों, न्यायिक प्राधिकरणों, प्राधिकार की
                            स्थिति में व्यक्तियों, चुने गए या चुनाव लड़ रहे
                            उम्मीदवारों, राजनीतिक दलों या उनके पदाधिकारियों या
                            किसी अन्य तीसरे पक्ष या व्यक्ति को किसी भी प्रकार के
                            अनुचित वाणिज्यिक/व्यवसाय लाभ प्राप्त करने के लिए।
                            सरकारी अधिकारी किसी भी सरकारी कर्मचारी, सार्वजनिक पद
                            के उम्मीदवार, सरकारी-स्वामित्व वाली या
                            सरकारी-नियंत्रित कंपनियों के कर्मचारी, सार्वजनिक
                            अंतरराष्ट्रीय संगठनों और राजनीतिक दलों को शामिल करते
                            हैं। आप सहमत होते हैं कि किसी को भी मूल्य की कोई चीज
                            सीधे, अप्रत्यक्ष रूप से या किसी अन्य व्यक्ति के
                            माध्यम से न दें, न पेश करें, न भुगतान करें, न वादा
                            करें या देने या भुगतान करने को अधिकृत करें आपके पक्ष
                            में किसी अनुकूल कार्रवाई को प्रेरित या पुरस्कृत करने
                            या किसी निर्णय को प्रभावित करने के उद्देश्य से।
                          </p>
                        </div>

                        <h5 className="c15 mt-6">14. अतिरिक्त शर्तें</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              आप इन शर्तों के तहत अपने अधिकारों या दायित्वों को
                              सौंपना या अन्यथा हस्तांतरित नहीं करेंगे। एंकैश इन
                              शर्तों के तहत अपने अधिकारों और कर्तव्यों को सौंप
                              सकता है बिना ऐसी सौंप को शर्तों में परिवर्तन माने
                              बिना और आपको बिना किसी सूचना के। यदि हम आपके
                              उल्लंघन या किसी अन्य के उल्लंघन पर कार्य करने में
                              विफल रहते हैं, तो हम भविष्य के या समान उल्लंघनों
                              के संबंध में कार्य करने के अधिकार को माफ नहीं कर
                              रहे।
                            </li>

                            <li>
                              एंकैश धोखाधड़ी और जोखिम प्रबंधन के लिए आपके अंतिम
                              उपयोगकर्ताओं को ब्लैकलिस्ट करने के लिए, उचित विवेक
                              पर और लागू कानूनों का पालन करते हुए, ऐसा कर सकता
                              है। ब्लैकलिस्ट उपयोगकर्ता लेनदेन से प्रतिबंधित हो
                              सकते हैं, और ब्लैकलिस्टिंग हटाना अपडेटेड जोखिम
                              मूल्यांकनों के आधार पर हो सकता है। आप स्वीकार करते
                              हैं और सहमत होते हैं कि एंकैश पेमेंट इकोसिस्टम की
                              अखंडता की रक्षा के लिए ऐसे उपाय कर सकता है। एंकैश
                              इन कार्रवाइयों के लिए पूर्व सूचना या कारण प्रदान
                              करने के लिए बाध्य नहीं है। आप सहमत होते हैं कि
                              आपके अंतिम उपयोगकर्ताओं को किसी भी सूचना प्रदान
                              करने के लिए एकमात्र जिम्मेदार होंगे।
                            </li>

                            <li>
                              एंकैश या उसके संबद्ध संगठनों द्वारा प्रदान की गई
                              सेवाओं पर लागू अतिरिक्त शर्तें निम्नलिखित हैं:
                              <ul>
                                <li>
                                  (a) भारत के कानून, उसके कानून संघर्ष नियमों के
                                  बिना, इन शर्तों को नियंत्रित करेंगे, साथ ही
                                  आपके और हमारे द्वारा उनका पालन। यदि आप
                                  प्लेटफॉर्म के उपयोग या इन शर्तों से संबंधित
                                  कोई कानूनी कार्रवाई लेते हैं, तो आप सहमत होते
                                  हैं कि ऐसी कार्रवाई केवल बैंगलोर, भारत में
                                  स्थित न्यायालयों में दाखिल करेंगे। किसी भी ऐसी
                                  कार्रवाई में जो हम आरंभ कर सकते हैं, विजयी
                                  पक्ष कानूनी कार्रवाई से जुड़े सभी कानूनी
                                  खर्चों को वसूलने का हकदार होगा, जिसमें लेकिन
                                  सीमित नहीं लागतें, दोनों कर योग्य और गैर-कर
                                  योग्य, और उचित वकील फीस शामिल हैं। आप स्वीकार
                                  करते हैं कि आपने इन शर्तों को पढ़ा और समझा है,
                                  और इन शर्तों का हस्ताक्षरित समझौते के समान बल
                                  और प्रभाव है। यह खंड शर्तों की समाप्ति के बाद
                                  भी जीवित रहेगा।
                                </li>

                                <li>
                                  (b) एंकैश के किसी भी अन्य अधिकारों या उपचारों
                                  के बिना पूर्वाग्रह के, आप यहां सहमत होते हैं
                                  और पुष्टि करते हैं कि एंकैश को आपके दायित्व के
                                  पूरे या किसी भाग को सेट-ऑफ करने का अधिकार होगा
                                  इन शर्तों के तहत (या आपके और एंकैश या उसके
                                  संबद्ध संगठनों के बीच कोई अन्य समझौता) इन
                                  शर्तों के तहत आपको जमा या देय किसी भी धनराशि,
                                  राशि या अन्य राशि के खिलाफ जो भी साधन से। आप
                                  सहमत होते हैं कि एंकैश बिना किसी पूर्व सूचना
                                  के किसी भी समय सेट-ऑफ का अधिकार行使 कर सकता
                                  है। घटना में, ऐसा सेट-ऑफ एंकैश को देय दायित्व
                                  के लिए पूर्ण प्रतिपूर्ति नहीं करता, तो आप
                                  एंकैश को उसके किसी भी कमी के बराबर राशि का
                                  भुगतान करेंगे।
                                </li>

                                <li>
                                  (c) आप (चाहे ऑनलाइन या अन्यथा): (i) स्वयं को
                                  एंकैश या किसी सुविधा प्रदाता का एजेंट या
                                  प्रतिनिधि के रूप में वर्णित नहीं करेंगे; (ii)
                                  प्रतिनिधित्व नहीं करेंगे कि आपके पास एंकैश या
                                  सुविधा प्रदाता द्वारा पेश किए गए किसी भी
                                  उत्पाद या सेवाओं को पेश करने के कोई अधिकार
                                  हैं; और (iii) अपने ग्राहक या किसी तीसरे पक्ष
                                  को कोई प्रतिनिधित्व नहीं करेंगे या कोई वारंटी
                                  नहीं देंगे जो एंकैश या सुविधा प्रदाता को
                                  प्रत्यक्ष या अप्रत्यक्ष रूप से ग्राहक या किसी
                                  तीसरे पक्ष के प्रति कोई दायित्व और/या
                                  जिम्मेदारी निभाने के लिए आवश्यक हो।
                                </li>

                                <li>
                                  (d) एंकैश को वेबसाइट, संबंधित नीतियों और
                                  समझौतों, इन शर्तों और गोपनीयता नीति में
                                  परिवर्तन करने का अधिकार सुरक्षित है जब वह उचित
                                  और समुचित समझे, जिसमें लेकिन सीमित नहीं कानून
                                  या विनियम में परिवर्तनों का पालन, अशुद्धियों,
                                  चूक, त्रुटियों या अस्पष्टताओं को सुधारना,
                                  प्रक्रिया प्रवाह, सेवाओं और सहायक सेवाओं के
                                  दायरे और प्रकृति में परिवर्तनों को प्रतिबिंबित
                                  करना, कंपनी पुनर्गठन, बाजार प्रथा या ग्राहक
                                  आवश्यकताएं।
                                </li>
                              </ul>
                            </li>

                            <li>
                              आप सहमत होते हैं कि इन शर्तों के तहत किसी भी
                              सेवाओं के लिए शुल्क तरीके, दरों और आवृत्ति के
                              अनुसार लगाए जाएंगे जो एंकैश द्वारा निर्धारित है।
                              एंकैश को इस खंड के अनुरूप शुल्क की राशि को अपडेट
                              करने का अधिकार सुरक्षित है जिसमें पहले कोई शुल्क न
                              लगाई गई सेवाओं के लिए भी। आप सहमत होते हैं कि आप
                              एंकैश द्वारा निर्धारित किसी भी अतिरिक्त शुल्क का
                              भुगतान करने के लिए उत्तरदायी होंगे घटना में:
                              <ul>
                                <li>
                                  (a) आप डैशबोर्ड पर उपलब्ध कुछ मूल्य-वर्धित
                                  सेवाओं का लाभ उठाते हैं भले ही वे पहले मुफ्त
                                  उपलब्ध रही हों।
                                </li>
                                <li>
                                  (b) आप इन शर्तों में उल्लिखित किसी भी नई
                                  सेवाओं का लाभ उठाते हैं।
                                </li>
                              </ul>
                              आप सहमत होते हैं कि किसी भी सेवा या मूल्य-वर्धित
                              सेवा का आपका उपयोग एंकैश द्वारा लगाए गए किसी भी
                              अतिरिक्त शुल्क के लिए सहमति के रूप में माना जाएगा
                              ऐसी अतिरिक्त सेवा या मूल्य-वर्धित सेवा पर।
                            </li>
                          </ul>
                        </div>

                        <h5 className="c15 mt-6">15. विज्ञापन</h5>
                        <div className="container my-4">
                          <p>
                            कुछ सेवाएं विज्ञापन राजस्व द्वारा समर्थित हो सकती
                            हैं और विज्ञापन और प्रचार सामग्री प्रदर्शित कर सकती
                            हैं। ये विज्ञापन सेवाओं पर संग्रहीत जानकारी की
                            सामग्री, सेवाओं के माध्यम से किए गए क्वेरी या अन्य
                            जानकारी पर लक्षित हो सकते हैं। एंकैश द्वारा विज्ञापन
                            का तरीका, मोड और हद बिना आपको किसी विशिष्ट सूचना के
                            परिवर्तन के अधीन है। एंकैश द्वारा आपको सेवाओं तक
                            पहुंच और उपयोग प्रदान करने के बदले में, आप सहमत होते
                            हैं कि एंकैश वेबसाइट, प्रिंट मीडिया, इलेक्ट्रॉनिक
                            मीडिया, सोशल मीडिया, विज्ञापन प्लेटफॉर्म आदि के
                            माध्यम से सेवाओं पर ऐसे विज्ञापन रख सकता है।
                          </p>
                        </div>

                        <h5 className="c15 mt-6">16. निलंबन और समाप्ति</h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              कुछ भी विपरीत अस्वीकार किए बिना, एंकैश को तुरंत
                              सेवाओं और आपको किसी भी धनराशि या भुगतान के निपटान
                              को निलंबित करने का अधिकार होगा, बिना आपको किसी
                              दायित्व के, निम्नलिखित घटना में:
                              <ul>
                                <li>
                                  (a) आप इन शर्तों के किसी भी खंड का उल्लंघन
                                  करते हैं।
                                </li>
                                <li>
                                  (b) आप 'निषिद्ध उत्पाद और सेवाएं' के विपरीत
                                  अवैध या कोई लेनदेन सुविधाजनक बनाते हैं।
                                </li>
                                <li>
                                  (c) एंकैश को सुविधा प्रदाताओं या सरकारी
                                  प्राधिकरणों या कानून प्रवर्तन एजेंसियों से
                                  निर्देश प्राप्त होते हैं तो सेवाओं को निलंबित
                                  करने के लिए, या उसके भाग को, या सेवाओं या उसके
                                  भाग को निलंबित करने का निर्देश देता है भले ही
                                  किसी कथित अवैध/अवैध गतिविधियों की लंबित
                                  जांच/पूछताछ हो।
                                </li>
                                <li>
                                  (d) आप सेवाओं का उपयोग एंकैश के आंतरिक
                                  धोखाधड़ी मूल्यांकन उपकरणों और अन्य नीतियों के
                                  अनुसार उच्च-जोखिम स्कोर वाले किसी भी लेनदेन के
                                  लिए करते हैं।
                                </li>
                                <li>
                                  (e) एंकैश को आपके गतिविधियों के आसपास संदिग्ध
                                  परिस्थितियों का मत है।
                                </li>
                                <li>
                                  (f) एंकैश को आपके सेवाओं के उपयोग से संबंधित
                                  लंबित, अपेक्षित, या अत्यधिक विवाद, रिफंड, या
                                  उलटावों का मत है।
                                </li>
                                <li>
                                  (g) आपके उत्पाद/सेवाएं बौद्धिक संपदा अधिकारों,
                                  कॉपीराइट योग्य कार्यों, पेटेंटेड आविष्कारों,
                                  ट्रेडमार्क और व्यापार रहस्यों का उल्लंघन करती
                                  हैं, या उल्लंघन करने का संदेह है, या आपको नकली
                                  और/या नॉक-ऑफ माल बेचने का संदेह है।
                                </li>
                                <li>
                                  (h) आप अंतिम ग्राहकों को प्रदान किए गए
                                  उत्पादों/सेवाओं के प्रकार को मूलबद्ध रूप से
                                  बदलते हैं और ऑनबोर्डिंग फॉर्म पर घोषित जैसा,
                                  एंकैश की पूर्व लिखित अनुमति प्राप्त किए बिना
                                  नई या बदली गई प्रकार की सेवाओं/उत्पादों के लिए
                                  सेवाओं का उपयोग करने के लिए, या एंकैश द्वारा
                                  खोजा जाता है कि आपने ऑनबोर्डिंग गतिविधियों के
                                  भाग के रूप में अपने उत्पादों/सेवाओं के बारे
                                  में पर्याप्त रूप से भ्रामक और/या झूठी जानकारी
                                  प्रदान की है।
                                </li>
                                <li>
                                  (i) एंकैश अपने एकमात्र विवेक में निर्धारित
                                  करता है कि आपकी गतिविधियां एंकैश को जोखिमों को
                                  उजागर करती हैं जो एंकैश के लिए अस्वीकार्य हैं।
                                </li>
                                <li>
                                  (j) एंकैश अपने एकमात्र विवेक में सेवाओं को
                                  प्रभावित करने वाले नियामक परिवर्तनों के कारण
                                  ऐसा करने के लिए आवश्यक है।
                                </li>
                              </ul>
                            </li>

                            <li>
                              ये शर्तें उस तिथि से प्रभावी हैं जब आप पहली बार
                              प्लेटफॉर्म या सेवाओं तक पहुंच या उपयोग करते हैं और
                              तब तक जारी रहेंगी जब तक ऐसी पहुंच और उपयोग आपके या
                              एंकैश द्वारा समाप्त न हो। जब तक आपके पास सेवाओं के
                              उपयोग या उसके किसी भाग के संबंध में अलग ऑफलाइन
                              समझौता न हो, ये शर्तें लागू होंगी। हम किसी भी कारण
                              के लिए किसी भी समय इन शर्तों को समाप्त कर सकते हैं
                              या आपका एंकैश खाता बंद कर सकते हैं (शामिल लेकिन
                              सीमित नहीं, एंकैश की सद्भावना को हानि या हानि पैदा
                              करने वाली किसी भी गतिविधि के लिए)। जहां लागू कानून
                              समाप्ति की पूर्व सूचना की आवश्यकता रखते हैं, हम
                              समाप्ति से पहले आपको आवश्यक पूर्व सूचना प्रदान
                              करेंगे।
                            </li>

                            <li>
                              समाप्ति आपको इन शर्तों के तहत उत्पन्न दायित्वों से
                              तुरंत मुक्त नहीं करती। समाप्ति पर, आप सेवाओं का
                              उपयोग बंद करने के लिए सहमत होते हैं। समाप्ति के
                              बाद सेवाओं का आपका निरंतर या नवीनीकृत उपयोग शर्तों
                              के लिए आपकी सहमति को नवीनीकृत करता है। इसके
                              अतिरिक्त, समाप्ति पर आप समझते और सहमत होते हैं कि
                              हम आपको सेवाओं के उपयोग से संबंधित मुआवजे,
                              प्रतिपूर्ति, या क्षतियों के लिए उत्तरदायी नहीं
                              होंगे, या सेवाओं के किसी भी समाप्ति या निलंबन या
                              आपकी जानकारी या खाता डेटा की हटाने से; और आप अभी
                              भी हमें शुल्क या जुर्माने, या अन्य वित्तीय दायित्व
                              के लिए उत्तरदायी रहेंगे जो समाप्ति से पहले आपके या
                              सेवाओं के उपयोग के माध्यम से आपके द्वारा उत्पन्न
                              हुआ है।
                            </li>
                          </ul>
                        </div>
                        <h5 className="c15 mt-6">
                          17. निषिद्ध उत्पाद और सेवाएं
                        </h5>
                        <div className="container my-4">
                          <ul>
                            <li>
                              जुआ जिसमें लॉटरी टिकट, स्पोर्ट्स बेट्स, ऑनलाइन जुआ
                              साइट नामांकन शामिल हैं।
                            </li>
                            <li>
                              संयोग या जुआ गतिविधियां जो बेटिंग शामिल करती हैं।
                            </li>
                            <li>
                              मिस्ट्री बॉक्स / अमीर बनने की योजनाएं / बेटिंग
                              मॉडल।
                            </li>
                            <li>
                              व्यक्तियों या एकमात्र मालिकों द्वारा संचालित
                              गेमिंग व्यवसाय लाइन (एलओबी)।
                            </li>
                            <li>
                              वयस्क माल और सेवाएं: अश्लील सामग्री और यौन सुझाव
                              वाली सामग्री।
                            </li>
                            <li>
                              एस्कॉर्ट/वेश्यावृत्ति सेवाएं, फ्रेंड फाइंडर्स।
                            </li>
                            <li>
                              वयस्क/परिपक्व सामग्री वेबसाइटें, सदस्यताएं, या
                              चार्जबैक की ओर ले जाने वाली सेवाएं।
                            </li>
                            <li>व्यक्तिगत मसाजर / सेक्स टॉयज।</li>
                            <li>
                              हिंसा या अत्यधिक यौन हिंसा चित्रित करने वाली
                              वेबसाइटें।
                            </li>
                            <li>बीस्टियलिटी।</li>
                            <li>
                              बाल अश्लील सामग्री या नाबालिगों को शामिल करने वाली
                              सामग्री।
                            </li>
                            <li>बाल शोषण सामग्री या प्रचार।</li>
                            <li>
                              ड्रग्स और पैराफर्नेलिया: हेलुसिनोजेंस, अवैध
                              ड्रग्स, हर्बल ड्रग्स (जैसे सैल्विया, मशरूम)।
                            </li>
                            <li>
                              ऑनलाइन बेचे जाने वाले प्रिस्क्रिप्शन/हर्बल ड्रग्स
                              जिन्हें लाइसेंस प्राप्त चिकित्सा प्रिस्क्रिप्शन की
                              आवश्यकता है।
                            </li>
                            <li>
                              ड्रग एक्सेसरीज: पाइप्स, बॉन्ग्स, रोलिंग पेपर्स,
                              आदि।
                            </li>
                            <li>
                              ड्रग टेस्ट परिस्थिति निवारण सहायक (क्लेंजिंग
                              ड्रिंक्स, एडिटिव्स)।
                            </li>
                            <li>
                              कॉपीराइट अनलॉकिंग डिवाइसेज (जैसे मॉड चिप्स)।
                            </li>
                            <li>
                              कॉपीराइट मीडिया की अनधिकृत प्रतियां (किताबें,
                              संगीत, फिल्में)।
                            </li>
                            <li>
                              अनधिकृत सॉफ्टवेयर या गेम्स (ओईएम, बंडल्ड, आदि)।
                            </li>
                            <li>
                              हैकिंग/क्रैकिंग टूल्स: मैनुअल्स, गाइड्स, अवैध
                              पहुंच के लिए डिवाइसेज।
                            </li>
                            <li>
                              बल्क मार्केटिंग टूल्स (ईमेल/एसएमएस/फैक्स लिस्ट्स,
                              सॉफ्टवेयर)।
                            </li>
                            <li>
                              टेली-कॉलर्स या स्पैमिंग के लिए डेटाबेस प्रदाता।
                            </li>
                            <li>
                              केबल डिस्क्रैम्बलर्स, ब्लैक बॉक्स, और उपग्रह/केबल
                              तक अवैध पहुंच के लिए डिवाइसेज।
                            </li>
                            <li>
                              अनियमित/अनलाइसेंस्ड मनी सर्विस बिजनेस (एमएसबी)।
                            </li>
                            <li>
                              अनलाइसेंस्ड मनी एंड वैल्यू ट्रांसफर सर्विसेज
                              (एमवीटीएस)।
                            </li>
                            <li>अनधिकृत फॉरेक्स व्यापारी या ब्रोकर।</li>
                            <li>
                              अनधिकृत मनी एक्सचेंज या ट्रांसफर सर्विसेज
                              (कार्ड-टू-कैश, डीएमटी)।
                            </li>
                            <li>
                              क्रिप्टोकरेंसी सर्विसेज (बिटकॉइन एक्सचेंज,
                              क्रिप्टो वॉलेट्स सहित)।
                            </li>
                            <li>हवाला।</li>
                            <li>क्राउडफंडिंग (इक्विटी या डेब्ट-बेस्ड)।</li>

                            <li>
                              उचित लाइसेंस के बिना सिक्योरिटीज ट्रेडिंग
                              (स्टॉक्स, बॉन्ड्स, म्यूचुअल फंड्स)।
                            </li>
                            <li>उचित प्राधिकरण के बिना कमोडिटीज ट्रेडिंग।</li>
                            <li>तस्करी-संबंधित माल या संचालन।</li>
                            <li>
                              नकली और अनधिकृत माल (डिजाइनर फेक, फेक
                              ऑटोग्राफ्स/स्टैंप्स)।
                            </li>
                            <li>
                              "टेस्टर", "नॉट फॉर रिसेल", या बदले गए उत्पादों के
                              रूप में गलत चिह्नित वस्तुओं की बिक्री।
                            </li>
                            <li>अवैध माल और सेवाएं।</li>
                            <li>जानवरों या उनके भागों का अवैध व्यापार।</li>
                            <li>
                              जीवित जानवर या भाग (चमड़े, त्वचा, नाखून, आदि)।
                            </li>
                            <li>लुप्तप्राय प्रजातियां या उनके डेरिवेटिव्स।</li>
                            <li>
                              अंग/शरीर के भाग (जीवित, संरक्षित, या कैडावर)।
                            </li>
                            <li>अंग व्यापार।</li>
                            <li>
                              हथियार (फायरआर्म्स, चाकू, ब्रास नकल्स,
                              गोला-बारूद)।
                            </li>
                            <li>अवैध हथियार व्यापार।</li>
                            <li>सामूहिक विनाश के हथियार (डब्ल्यूएमडी)।</li>
                            <li>
                              विस्फोटक, आतिशबाजी, पाइरोटेक्निक्स, विषैले या
                              रेडियोधर्मी माल।
                            </li>
                            <li>
                              विनियमित पदार्थ जैसे फ्रीऑन, रासायनिक विलायक, आदि।
                            </li>
                            <li>
                              विनियमित माल: कार टाइटल्स, कानून प्रवर्तन गियर,
                              रिकॉल्ड आइटम्स।
                            </li>
                            <li>
                              आक्रामक या घृणा-प्रचारित सामग्री (नस्लवादी, हिंसक,
                              असहिष्णु)।
                            </li>
                            <li>
                              अपराध-संबंधित स्मृति चिह्न (जैसे अपराध स्थलों से
                              आइटम्स)।
                            </li>
                            <li>
                              अवैध कृत्यों को प्रोत्साहित करने वाली साहित्य या
                              उत्पाद।
                            </li>
                            <li>
                              चमत्कारी इलाज, अपुष्ट चिकित्सा उपचार, स्वास्थ्य
                              घोटाले।
                            </li>
                            <li>
                              चिकित्सा सुरक्षा विनिर्देशों या प्रदर्शन का
                              उल्लंघन करने वाले उत्पाद।
                            </li>
                            <li>घर से काम घोटाले या भ्रामक आय अवसर।</li>
                            <li>
                              गारंटीड जॉब सर्विसेज या धोखाधड़ीपूर्ण रोजगार
                              ऑफरिंग्स।
                            </li>
                            <li>
                              मल्टी-लेवल मार्केटिंग (एमएलएम) योजनाएं या
                              पिरामिड्स।
                            </li>
                            <li>
                              एमएलएम संग्रह शुल्क या मैट्रिक्स-स्टाइल रेफरल
                              साइट्स।
                            </li>
                            <li>अमीर बनने की त्वरित योजनाएं।</li>
                            <li>
                              अमूर्त माल/सेवाएं (जैसे सॉफ्टवेयर डाउनलोड्स,
                              डिजिटल उत्पाद)।
                            </li>
                            <li>एग्रीगेशन/समेकन व्यवसाय मॉडल।</li>
                            <li>
                              ड्रॉप-शिप्ड व्यापारी या ड्रॉप-शिपिंग व्यवसाय मॉडल।
                            </li>
                            <li>
                              वेब-बेस्ड टेलीफोनी, कॉलिंग कार्ड्स, बैंडविड्थ/डेटा
                              ट्रांसफर सर्विसेज।
                            </li>
                            <li>
                              वॉइस/नॉलेज प्रोसेस आउटसोर्सिंग (केएपीओ/बीपीओ)।
                            </li>
                            <li>
                              टेलीमार्केटिंग सर्विसेज (अनचाही बिक्री कॉल्स,
                              ट्रैवल पैकेजेस, आदि)।
                            </li>
                            <li>
                              क्रेडिट काउंसलिंग या क्रेडिट रिपेयर सर्विसेज।
                            </li>
                            <li>दिवालियापन सलाहकार या फाइलिंग सर्विसेज।</li>
                            <li>चिट फंड्स या अनपंजीकृत क्रेडिट सोसाइटियां।</li>
                            <li>
                              गिरवी दुकानें या सुरक्षित उच्च-जोखिम ऋण प्रदान
                              करने वाली सेवाएं।
                            </li>
                            <li>इमिग्रेशन कंसल्टेंसी या सेवाएं।</li>
                            <li>एडॉप्शन एजेंसियां या सेवाएं।</li>
                            <li>
                              साइकिक कंसल्टेशन्स, ज्योतिष/एसोटेरिक सर्विसेज।
                            </li>
                            <li>
                              धार्मिक उत्पाद/सेवाएं जो झूठे दावे करती हैं या
                              भावनाओं को ठेस पहुंचाती हैं।
                            </li>
                            <li>
                              ऑफलाइन/ऑनलाइन डेटिंग सर्विसेज, मैचमेकिंग मीटअप्स।
                            </li>
                            <li>शराब या मादक पेय।</li>
                            <li>तंबाकू और सिगरेट (चबाने वाला तंबाकू सहित)।</li>
                            <li>इलेक्ट्रॉनिक सिगरेट (ई-सिगरेट या वेप्स)।</li>
                            <li>
                              ट्रैफिक डिवाइसेज (रडार जammers, सिग्नल चेंजर्स,
                              प्लेट कवर्स)।
                            </li>
                            <li>
                              नकली सरकारी आईडी, पासपोर्ट, डिप्लोमा, या नोबल
                              टाइटल्स।
                            </li>
                            <li>थोक या डिस्काउंटेड करेंसी सेल्स।</li>
                            <li>ढीले हीरे या अनियमित कीमती पत्थर।</li>
                            <li>
                              आरबीआई या नियामकों द्वारा अवैध/सैंक्शंड के रूप में
                              सूचीबद्ध कोई भी सेवा, व्यक्ति, उत्पाद, स्थान,
                              इकाई।
                            </li>
                            <li>
                              कानून द्वारा अवैध वर्णित कोई भी कृत्य या उत्पाद,
                              जिसमें आरबीआई या सरकारी नियामकों द्वारा शामिल।
                            </li>
                            <li>
                              प्लेटफॉर्म शर्तों का उल्लंघन (एंकैश, बैंक, आदि)।
                            </li>
                            <li>
                              खरीदार की पछतावे/धोखाधड़ी हानि की ओर ले जाने वाली
                              सेवाओं का प्रावधान।
                            </li>
                            <li>
                              पेमेंट गेटवे या भागीदारों को नकारात्मक रोशनी में
                              डालने वाले उत्पाद/सेवाएं।
                            </li>
                            <li>
                              स्थानीय/अंतरराष्ट्रीय कानूनों का पालन न करने वाले
                              उत्पाद।
                            </li>
                            <li>
                              लागू कानून द्वारा निषिद्ध कोई भी अन्य गतिविधि।
                            </li>
                          </ul>

                          <p>
                            उपरोक्त सूची सुविधा प्रदाताओं से प्राप्त निर्देशों
                            के आधार पर एंकैश द्वारा अपडेट्स/परिवर्तनों के अधीन
                            है।
                          </p>
                          <p>
                            <strong>हर्जाना: </strong>आप सहमत होते हैं कि एंकैश
                            को किसी भी मुद्दे या दावे के लिए जिम्मेदार और/या
                            उत्तरदायी न रखें जो आपके और पेमेंट गेटवे या आपके
                            बैंक या काउंटरपार्टी (बिलर्स और बीबीपीएस सिस्टम सहित
                            लेकिन सीमित नहीं) के बीच किसी भी विवाद से उत्पन्न
                            हो। आप एंकैश को हर्जाना रखेंगे और किसी भी तीसरे पक्ष
                            दावों के मामले में एंकैश को निर्दोष रखेंगे एंकैश के
                            खिलाफ (काउंटरपार्टी, पेमेंट गेटवे, बैंक, कोई सरकारी
                            प्राधिकरण या कोई अन्य व्यक्ति द्वारा) आपके (या आपके
                            खाते के माध्यम से किसी अन्य व्यक्ति द्वारा) द्वारा
                            एंकैश का उपयोग करके किए गए या करने का प्रयास किए गए
                            भुगतानों के लिए।
                          </p>
                          <p>
                            <strong>जानकारी इनपुट: </strong> आप एंकैश के उपयोग
                            के दौरान इनपुट की गई सभी जानकारी के लिए जिम्मेदार
                            हैं। आप सुनिश्चित करने के लिए जिम्मेदार हैं कि आपके
                            द्वारा प्रदान किए गए सभी भुगतान विवरण सटीक हैं।
                            विशेष रूप से, आप निम्नलिखित की सत्यता सुनिश्चित करने
                            के लिए जिम्मेदार हैं: (i) बिलर/बिल खाता संख्या के
                            विवरण, (ii) पेमेंट उपकरण के विवरण (या सहेजे गए
                            पेमेंट उपकरण से चयन) और (iii) भुगतान की राशियां,
                            घटना में आप इन विवरणों में से किसी को गलत इनपुट करते
                            हैं या एंकैश द्वारा सुझाए अनुसार। आप परिणामी लेनदेन
                            और सभी शुल्कों के लिए जिम्मेदार होंगे जो
                            परिणामस्वरूप होते हैं। एंकैश अपने विवेक पर, ऐसा करने
                            का कोई दायित्व न होने पर, तकनीकी रूप से संभव और
                            एंकैश के लिए व्यवहार्य यदि, ऐसे लेनदेन को उलटने में
                            सहायता कर सकता है।
                          </p>
                          <p>
                            एंकैश समय-समय पर आवश्यक यदि अतिरिक्त जानकारी मांग
                            सकता है जिसमें लेकिन सीमित नहीं बिल प्रतियां आदि,
                            अंतर्निहित लेनदेन को सत्यापित करने के लिए और यदि आप
                            ऐसी जानकारी प्रदान करने में विफल रहते हैं तो आप
                            एंकैश के पेमेंट फीचर्स का उपयोग करने में असमर्थ हो
                            सकते हैं। आगे, एंकैश किसी लेनदेन को संदिग्ध प्रतीत
                            होने पर अतिरिक्त दस्तावेज मांग सकता है। 72 घंटों के
                            भीतर ऐसी दस्तावेजीकरण प्रदान न करने से आपका लेनदेन
                            विफल हो सकता है और एंकैश के एकमात्र विवेक पर, एंकैश
                            पेमेंट सिस्टम तक आपकी पहुंच रद्द हो सकती है।
                          </p>
                          <p>
                            <strong>
                              अच्छी प्रथाएं और जागरूकता दिशानिर्देश पेमेंट
                              एग्रीगेटर के व्यापारियों के लिए
                            </strong>
                          </p>
                          <ul>
                            <li>
                              कभी लॉगिन, ओटीपी, पिन, एपीआई कुंजियां साझा न करें।
                            </li>
                            <li>
                              अपने क्यूआर, पीओएस, और पेमेंट लिंक्स को सुरक्षित
                              रखें।
                            </li>
                            <li>लेनदेन और रिफंड की दैनिक निगरानी करें।</li>
                            <li>
                              एचटीटीपीएस, अपडेटेड प्लगइन्स, और सुरक्षित एपीआई का
                              उपयोग करें।
                            </li>
                            <li>
                              नकली सपोर्ट कॉलर्स और फिशिंग से सावधान रहें।
                            </li>
                            <li>संदिग्ध गतिविधि की तुरंत रिपोर्ट करें।</li>
                          </ul>
                          <p>
                            <strong>गोपनीयता</strong>
                          </p>
                          <p>
                            आपकी गोपनीयता हमारी लिए अत्यंत महत्वपूर्ण है। इन
                            उपयोग शर्तों की स्वीकृति पर आप पुष्टि करते हैं कि
                            आपने हमारी नीतियों को पढ़ा, समझा और स्पष्ट रूप से
                            स्वीकार किया है, जिसमें हमारी गोपनीयता नीति के
                            प्रावधान शामिल हैं।
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
      </div>
    </>
  )
}

export default CustomerOnboarding
