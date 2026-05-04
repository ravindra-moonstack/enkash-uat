/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Metadata } from "next"

import styles from "./page.module.scss"
import generateMetaData from "@/src/utils/metaData"

// components
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"

export const metadata: Metadata = generateMetaData({
  title: "Privacy Policy: EnKash",
  description:
    "See how EnKash collects, protects, and uses your personal information.",
  alternates: {
    canonical: `${process.env.URL}/policies/privacy-policy`,
  },
})

const PrivacyPolicy = (): React.JSX.Element => {
  //

  return (
    <>
      <div className={styles.parent_container}>
        <div className="max-w-auto  position-relative">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Policies", url: "/policies" },
                {
                  name: "Privacy Policy",
                  url: "/policies/privacy-policy",
                },
              ]}
            />
          </div>
        </div>
        <div className="enkash-banking-maincontainer">
          <div className="enkash-blog-detail">
            <div className={styles.inner_container}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="enkash-term-condtions">
                      <div className={styles.sectionTitle}>
                        <DynamicHeading
                          content={[
                            {
                              title: "Privacy Policy",
                              color: "color-equity-blue",
                            },
                          ]}
                          headingTag="h1"
                          className="f-5 text-center"
                        />
                      </div>

                      <div className="word-to-html-null">
                        <h5 className="c15 mt-6 pb-4">
                          Last Updated on 24<sup>th</sup> April, 2026
                        </h5>
                        <p className="c5">
                          <span className="c1"></span>
                        </p>
                        <p className="c28 c22">
                          <span className="c1"></span>
                        </p>
                        <h5 className="c43">
                          <span className="c0 c3">
                            Acceptance of Privacy Policy
                          </span>
                        </h5>
                        <p className="c15">
                          <span className="c1"></span>
                        </p>
                        <p className="c17">
                          <span className="c0">
                            This website available at{" "}
                            <a href="https://www.enkash.com">enkash.com</a> and
                            the mobile application{" "}
                          </span>
                          <span className="c13">
                            {" "}
                            (collectively referred to as "
                          </span>
                          <span className="c52 c94">Platform</span>
                          <span className="c13">")</span>{" "}
                          <span className="c0">
                            is owned and operated by Nehat Tech Solutions Pvt.
                            Ltd. (referred to as &quot;EnKash&quot; or
                            &quot;Nehat&quot; or &quot;us&quot; or
                            &quot;we&quot; or "Company").
                          </span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c17">
                          <span className="c0">
                            Please read this privacy policy ("
                          </span>
                          <span className="c21">Privacy Policy</span>
                          <span className="c0">
                            ") before using Platform . By visiting the Platform
                            or setting up/creating an account on the Platform
                            for availing the Services and clicking on the "I
                            accept EnKash Terms and Conditions and Privacy
                            Policy" button provided on the Platform, you ("you",
                            "your", &quot;yourself&quot; as applicable) accept
                            and agree to be bound by the terms and conditions of
                            this Privacy Policy and consent to the Company
                            collecting, storing, processing, transferring, and
                            sharing information including Your Personal
                            Information in accordance with this Privacy Policy.
                            This Privacy Policy is incorporated into and subject
                            to our{" "}
                          </span>
                          <span className="c0">terms of service (&quot;</span>
                          <span className="c21">Terms</span>
                          <span className="c0">
                            &quot;) and shall be read harmoniously and in
                            conjunction with them. All capitalised terms used
                            herein however not defined under this Privacy Policy
                            shall have the meaning ascribed to them under the
                            Terms.
                          </span>
                        </p>
                        <p className="c22 c28">
                          <span className="c2"></span>
                        </p>
                        <p className="c17">
                          <span className="c6 c0 c3">
                            From time to time, we may modify these Privacy
                            Policy by posting modi&#64257;ed Privacy Policy on
                            the Platform. Any amendment is effective from the
                            date it is posted on the Platform. Any terms and
                            conditions proposed by you are expressly rejected by
                            us and are of no force and effect. You should review
                            this Privacy Policy regularly for changes. You can
                            determine if changes have been made by checking the
                            &quot;Last Updated&quot; legend above. Your
                            acceptance of the amended Privacy Policy shall
                            signify Your consent to such changes and agreement
                            to be legally bound by the same.
                          </span>
                        </p>
                        <p className="c17 c22">
                          <span className="c2"></span>
                        </p>
                        <p className="c17">
                          <span className="c2">
                            This Privacy Policy (i) will be considered to be an
                            electronic record under the Indian data privacy laws
                            including the Information Technology Act, 2000 read
                            with rules and regulations made thereunder; and (ii)
                            will not require any physical, electronic, or
                            digital signature by the Company.{" "}
                          </span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c28 c22">
                          <span className="c2"></span>
                        </p>
                        <h5 className="c43">
                          <span className="c0 c3">
                            Our commitment to privacy
                          </span>
                        </h5>
                        <p className="c15">
                          <span className="c1"></span>
                        </p>
                        <p className="c51">
                          <span className="c0">
                            Protecting consumer privacy is very important to us.
                            This Privacy Policy informs you about our use and
                            disclosure of personal information collected through
                            this Platform.
                          </span>
                        </p>
                        <p className="c18">
                          <span className="c2"></span>
                        </p>
                        <p className="c17">
                          <span className="c0">
                            We believe that information used responsibly
                            bene&#64257;ts consumers and the economy, whether it
                            is information we house on behalf of consumers
                            conducting transactions or information we collect on
                            behalf of our business clients. In addition, we
                            strive to better serve our customers by offering
                            goods and services that we believe &#64257;t their
                            needs and interests. When identifying an
                            opportunity, we may use aggregated consumer
                            information in an effort to identify customers who
                            may be interested in that opportunity.
                          </span>
                        </p>
                        <p className="c28 c22">
                          <span className="c2"></span>
                        </p>
                        <p className="c51">
                          <span className="c0">
                            We are also committed to ensuring the highest
                            standards of security to ensure data privacy is
                            maintained. We protect personal information against
                            unauthorized access (both physical and logical).
                            Access rights best practices are implemented for
                            ensuring the safety and security of personally
                            identifiable information (PII). It means only
                            authorized personnel can access PII, with the
                            minimum rights necessary for performing one&#39;s
                            responsibilities. We never share or sell any
                            information (including user data) to third parties.
                          </span>
                        </p>
                        <p className="c18">
                          <span className="c2"></span>
                        </p>
                        <p className="c17">
                          <span className="c0">
                            These policies guide us in the collection and use of
                            information as well as setting our employee&#39;s
                            responsibilities in protecting your privacy. We use
                            personal information about consumers, customers and
                            users only in a manner consistent with these
                            policies.
                          </span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c28 c22">
                          <span className="c2"></span>
                        </p>
                        <h5 className="c43">
                          <span className="c0 c3">Cookies</span>
                        </h5>
                        <p className="c15">
                          <span className="c1"></span>
                        </p>
                        <p className="c17">
                          <span className="c0">
                            A &quot;cookie&quot; is an identi&#64257;er that we
                            transfer to user&#39;s computer hard drive through
                            user&#39;s web browsers to enable our systems to
                            recognise user&#39;s browsers and interact more
                            ef&#64257;ciently with customer&#39;s and user&#39;s
                            computers.
                          </span>
                        </p>
                        <p className="c18">
                          <span className="c2"></span>
                        </p>
                        <p className="c40">
                          <span className="c0">
                            The Platform uses cookies only to aggregate
                            information about the pages that users visit so that
                            we can update and redesign the Platform, as
                            necessary, in order to provide you with the most
                            useful information.
                          </span>
                        </p>
                        <p className="c18">
                          <span className="c2"></span>
                        </p>
                        <p className="c77">
                          <span className="c0">
                            We do not disclose domain name or aggregate
                            information to third parties other than related
                            bodies corporate and vendors who assist us with the
                            Platform and Services provided through the Platform
                            and who are under strict con&#64257;dentiality
                            requirements. You can generally con&#64257;gure your
                            browser to accept or reject all cookies or notify
                            you when a cookie is used. We suggest that you refer
                            to your browser instructions or help screens to
                            learn more about these functions, bearing in mind
                            that if you con&#64257;gure your browser so as to
                            not receive any cookies the functionality of the
                            Platform will be lost and may affect the
                            functionality of other web sites.
                          </span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c22 c38">
                          <span className="c2"></span>
                        </p>
                        <h5 className="c43">
                          <span className="c0 c3">
                            Collection of information
                          </span>
                        </h5>
                        <p className="c15">
                          <span className="c1"></span>
                        </p>
                        <p className="c15">
                          <span className="c1"></span>
                        </p>
                        <ol className="c14 lst-kix_list_3-0 start">
                          <li className="c24 li-bullet-0">
                            <span className="c0">
                              The nature of the personal information we collect
                              about you online generally consists of your name,
                              mailing address, e-mail address, mobile
                            </span>
                            <span> </span>
                            <span className="c0">
                              number, passwords and the financial information
                              such as bank account information, PAN, GSTIN, card
                              details etc and the company you represent. All
                              information disclosed by You on the Platform shall
                              be deemed to be shared willingly by You and
                              without any coercion. No liability pertaining to
                              the authenticity, genuineness, misrepresentation,
                              fraud, negligence, etc. of the information
                              disclosed by You shall lie on the Company. If you
                              provide information about another person to us,
                              you warrant that you are authorised to do so and
                              that you will inform that person of who we are and
                              that we will use and disclose their information as
                              set out in this Privacy Statement. If you provide
                              incomplete or inaccurate information to us, we may
                              not be able to provide you with the services you
                              are seeking.
                            </span>
                          </li>
                        </ol>
                        <p className="c17 c22">
                          <span className="c6 c0 c3"></span>
                        </p>
                        <p className="c17 c22">
                          <span className="c6 c0 c3"></span>
                        </p>
                        <p className="c17">
                          <span className="c6 c0 c3">
                            The Company may collect non-personal information
                            relating to Your activities while accessing the
                            Service or other information from and about the
                            devices through which the Platform is used including
                            SDK/API/JS code version, browser, internet service
                            provider, IP Address, operating system, browser
                            type, cookie information, timestamp, application
                            identifier, application version, application
                            distribution channel, independent device identifier,
                            Android ad master identifier, network card (MAC)
                            address, and international mobile device
                            identification code (IMEI), the equipment model, the
                            terminal manufacturer, the terminal device operating
                            system version, the session start / stop time,
                            location, language, the time zone and the network
                            state (WiFi and so on).
                          </span>
                        </p>
                        <p className="c17 c22">
                          <span className="c6 c0 c3"></span>
                        </p>
                        <p className="c17">
                          <span className="c6 c0 c3">
                            In addition to the profile information, You may also
                            tell us Your exact location if You choose to enable
                            Your computer or mobile device to send us location
                            information. The Company may use and store
                            information about Your location to provide features
                            of the Service to You and to improve and customize
                            the Service and provide location based Services to
                            You. .{" "}
                          </span>
                        </p>
                        <p className="c17">
                          <span className="c0">
                            We use the information that we collect on the
                            Platform, as mentioned above, to:
                          </span>
                        </p>
                        <p className="c28 c22">
                          <span className="c2"></span>
                        </p>
                        <ol className="c14 lst-kix_list_1-0 start">
                          <li className="c45 li-bullet-1">
                            <span className="c6 c0 c3">
                              Contact you so that we can provide you with the
                              information you have requested), assess and
                              process any application you make for services,
                              provide services to you and administer services
                              provided to you;{" "}
                            </span>
                          </li>
                          <li className="c91 li-bullet-2">
                            <span className="c6 c0 c3">
                              Facilitate login, registration and management of
                              your account on the Platform;
                            </span>
                          </li>
                          <li className="c45 li-bullet-1">
                            <span className="c6 c0 c3">
                              Provide You Services and improve the Services;
                            </span>
                          </li>
                          <li className="c45 li-bullet-2">
                            <span className="c6 c0 c3">
                              Remember Your Personal Information so that You are
                              not required to re-enter it the next time You
                              visit the Platform;
                            </span>
                          </li>
                          <li className="c45 li-bullet-1">
                            <span className="c6 c0 c3">
                              Perform our administrative operations, including
                              accounting, risk management, record keeping,
                              archiving, systems development and testing, credit
                              scoring and staff training;
                            </span>
                          </li>
                          <li className="c45 li-bullet-1">
                            <span className="c6 c0 c3">
                              Validate the user&#39;s rights to view the
                              information provided and confirm Your identity
                              directly and/or through third parties. This
                              information is also used by us as an audit of
                              activity against your entity&#39;s information and
                              records. We also may use and hold personal
                              information, which is provided to us in connection
                              with services that you request, for the purposes
                              (as relevant) of:
                            </span>
                          </li>
                          <li className="c45 li-bullet-2">
                            <span className="c6 c0 c3">
                              Complying with legislative and regulatory
                              requirements or as otherwise permitted or
                              authorised by law;
                            </span>
                          </li>
                          <li className="c45 li-bullet-2">
                            <span className="c6 c0 c3">
                              Communicating with You through mail, e-mail, and
                              telephone or through any other mode of
                              communication, in connection with the Service, or
                              other products or services of the Company;
                            </span>
                          </li>
                          <li className="c45 li-bullet-2">
                            <span className="c6 c0 c3">
                              Use such infrmation for internal purposes such as
                              auditing, data analysis, research and improvement
                              relating to the Platform or the Service;
                            </span>
                          </li>
                          <li className="c45 li-bullet-2">
                            <span className="c6 c0 c3">
                              Use such information for promotion and marketing
                              purposes;
                            </span>
                          </li>
                          <li className="c45 li-bullet-2">
                            <span className="c6 c0 c3">
                              Considering any other application, you may make to
                              us;
                            </span>
                          </li>
                          <li className="c45 li-bullet-1">
                            <span className="c6 c0 c3">
                              Managing our rights and obligations in relation to
                              external payment systems
                            </span>
                          </li>
                          <li className="c45 li-bullet-1">
                            <span className="c6 c0 c3">
                              e.g. acquiring banks, issuing bank, credit card
                              schemes and debit payment schemes;
                            </span>
                          </li>
                          <li className="c45 li-bullet-2">
                            <span className="c6 c0 c3">
                              Conducting market and customers satisfaction
                              research;
                            </span>
                          </li>
                          <li className="c45 li-bullet-1">
                            <span className="c6 c0 c3">
                              Developing, establishing and administering
                              alliances and other arrangements (including
                              rewards programs) with other organisations in
                              relation to the promotion, administration and use
                              of our respective products and services; and
                            </span>
                          </li>
                          <li className="c45 li-bullet-2">
                            <span className="c6 c0 c3">
                              Developing and identifying products and services
                              that may interest you.{" "}
                            </span>
                          </li>
                        </ol>
                        <p className="c23">
                          <span className="c0">
                            We do not seek to collect nor store information
                            about anyone&#39;s ethnic origins, political or
                            religious beliefs, trade union membership, sexual
                            preferences or criminal record. If you provide these
                            and other types of sensitive information to us, then
                            by doing so, you consent to our collection of that
                            information and to the use and disclosure of that
                            information as set out in this privacy policy.
                          </span>
                        </p>
                        <p className="c15">
                          <span className="c2"></span>
                        </p>
                        <h5 className="c43">
                          <span className="c0 c3">
                            Use and disclosure of information
                          </span>
                        </h5>
                        <p className="c15">
                          <span className="c1"></span>
                        </p>
                        <p className="c93">
                          <span className="c0">
                            Information collected by us in relation to
                            electronic transactions is used to process those
                            transactions and so will be disclosed to the parties
                            to the transaction, their respective &#64257;nancial
                            institutions and third parties involved in the
                            transaction chain. Other information is used to
                            provide and administer the provision of services to
                            you, managing our rights and obligations under
                            contracts and at law, systems development and
                            testing, in connection with alliance arrangements
                            and identifying and marketing the products or
                            services provided by us, our related bodies
                            corporate or alliance partners that we think may be
                            of interest to you and telling you about them. If
                            you do not want to receive this information, please
                            let us know.In common with many other businesses, we
                            use agents and other third parties to conduct
                            certain activities on our behalf and provide certain
                            services to us. For this purpose, we may need to
                            provide these third parties with your information,
                            including personal information. The types of
                            organisations to which we may disclose
                            customer&#39;s, consumer&#39;s or users personal
                            information includes:
                          </span>
                        </p>
                        <p className="c28 c22">
                          <span className="c2"></span>
                        </p>
                        <ol className="c14 lst-kix_list_2-0 start">
                          <li className="c67 li-bullet-0">
                            <span className="c0">
                              Our agents, contractors and external advisers whom
                              we engage from time to time to carry out, or
                              advise on, our functions and activities and you
                              authorise them to seek disclosure of your
                              information including credit information for this
                              purpose;
                            </span>
                          </li>
                          <li className="c67 li-bullet-0">
                            <span className="c0">
                              Your agents and contractors, including your
                              referees and your legal or &#64257;nancial
                              advisor, executor, administrator, trustee,
                              guardian or attorney if you authorise them in
                              writing to seek disclosure of this information;
                            </span>
                          </li>
                          <li className="c39 li-bullet-0">
                            <span> </span>
                            <span className="c0">
                              Your franchisor (if applicable) and any person or
                              organisation that introduces you to us;
                            </span>
                          </li>
                          <li className="c39 li-bullet-0">
                            <span> </span>
                            <span className="c0">
                              Any other &#64257;nancial institution with whom
                              you have a current account, to the extent required
                              to render the Services;
                            </span>
                          </li>
                          <li className="c12 li-bullet-0">
                            <span className="c0">
                              Regulatory bodies, government agencies,
                              multi-jurisdictional agencies, law enforcement
                              bodies and courts, to the extent required by any
                              applicable law;
                            </span>
                          </li>
                          <li className="c68 li-bullet-3">
                            <span className="c0">
                              Debt collecting agencies, to the extent required
                              for rendering the Services or otherwise in
                              relation to the Services;
                            </span>
                          </li>

                          <li className="c62 li-bullet-0">
                            <span className="c0">
                              Other organisations with whom we have alliances or
                              arrangements, (including reward programs) for the
                              purpose of promoting our respective products and
                              services;
                            </span>
                          </li>

                          <li className="c84 li-bullet-0">
                            <span className="c0">
                              Anyone supplying goods and services to you in
                              connection with a rewards program or other
                              alliance associated with the Services;
                            </span>
                          </li>
                          <li className="c41 li-bullet-0">
                            <span className="c0">
                              External payment systems operators and
                              participants (eg. credit card payment systems (eg.
                              Visa or MasterCard) or debit payment systems);
                            </span>
                          </li>
                          <li className="c41 li-bullet-0">
                            <span className="c6 c0 c3">
                              Your and our insurers or prospective insurers and
                              their underwriters;
                            </span>
                          </li>
                          <li className="c41 li-bullet-0">
                            <span className="c6 c0 c3">
                              Your co-applicants (being directors or any other
                              person authorised by your employer), sureties,
                              guarantors and prospective co-applicants,
                              sureties, guarantors and co-guarantors for the
                              purposes of considering whether to provide a
                              guarantee and indemnity or security;
                            </span>
                          </li>
                          <li className="c9 li-bullet-4">
                            <span className="c6 c0 c3">
                              Any person considering purchasing a contract
                              entered into by you from us and that person&#39;s
                              advisers, persons involved in assessing the risks
                              and funding of the purchase and, after purchase,
                              the purchaser and any manager on an ongoing basis;
                            </span>
                          </li>
                          <li className="c9 li-bullet-5">
                            <span className="c6 c0 c3">
                              Any person to the extent necessary, in our view,
                              in order to carry out any instruction you give to
                              us; (Unless you tell us not to) other
                              organisations including our related bodies
                              corporate (and our agents and their agents) for
                              the marketing of their products and services.{" "}
                            </span>
                          </li>
                        </ol>

                        <p className="c22 c66">
                          <span className="c6 c0 c3"></span>
                        </p>
                        <p className="c55">
                          <span className="c6 c0 c3">
                            We may need to disclose your information, if such
                            action is necessary to: (a) comply with a legal
                            obligation; (b) protect and defend the rights or
                            property of Nehat, including to enforce agreements,
                            policies, and Terms of Use; (c) protect the personal
                            safety of Nehat, the users of the Platform, or any
                            person, in an emergency; (d) protect Nehat from
                            incurring any legal liability; (e) firms
                            representing Nehat in judicial proceedings and/or
                            any legal, accounting and auditing firms providing
                            services to Nehat; and (f) for reasons incidental to
                            the above. In such an event the Company shall be
                            under no obligation to inform you or seek your
                            approval or consent.{" "}
                          </span>
                        </p>
                        <p className="c55">
                          <span className="c6 c0 c3">
                            The Company shall be at liberty to disclose your
                            information to: (i) any third parties who provide
                            services, such as auditing, data analysis, platform
                            improvement and assistance with delivery of content,
                            relevant marketing messages and advertisements.{" "}
                          </span>
                        </p>
                        <p className="c49">
                          <span className="c0">
                            Where such disclosure occurs, we will require these
                            third parties to keep your information
                            con&#64257;dential and use it only for the purposes
                            for which we are permitted to use it. In addition,
                            we may be required or permitted by law to use and
                            disclose your personal information, (such as
                            disclosures to law enforcement bodies and government
                            agencies to prevent fraud or other malicious
                            activities).There may also be circumstances in which
                            we consider a customer or user has, by their
                            actions, released us from our duty of
                            con&#64257;dentiality or has consented to the
                            disclosure of personal information about them
                            without actually stating that this is the case.
                          </span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c22 c86">
                          <span className="c2"></span>
                        </p>
                        <h5 className="c43">
                          <span className="c0 c3">
                            Commercial Electronic Messages
                          </span>
                        </h5>
                        <p className="c15">
                          <span className="c1"></span>
                        </p>
                        <p className="c59">
                          <span className="c0">
                            By giving us your electronic address/contact
                            details, you consent to us sending to you commercial
                            electronic messages in order to provide you with
                            information and tell you about products and
                            services, including those of third parties, which we
                            consider may be of interest to you. You warrant that
                            you have authority either as or on behalf of the
                            relevant electronic account holder to provide this
                            consent and that we may continue to send commercial
                            electronic messages to your addresses until you
                            withdraw your consent.
                          </span>
                        </p>
                        <p className="c28 c22">
                          <span className="c2"></span>
                        </p>
                        <p className="c16">
                          <span className="c0">
                            We are committed to protecting the
                            con&#64257;dentiality of personal consumer
                            information We limit access to your personal
                            information to those of our employees and employees
                            of our related bodies corporate and our alliance
                            partners who need your personal information to
                            ful&#64257;l their business responsibilities, except
                            as otherwise provided herein. Such employees must
                            adhere to our privacy policies. Employees violating
                            these policies may be subject to disciplinary
                            action, up to and including dismissal. Our service
                            providers and other outside contractors are subject
                            to contractual requirements to ensure that your
                            personal information is safeguarded.
                          </span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <h5 className="c43">
                          <span className="c0 c3">
                            We use appropriate security safeguards
                          </span>
                        </h5>
                        <p className="c15">
                          <span className="c1"></span>
                        </p>
                        <p className="c17">
                          <span className="c0">
                            At Nehat, security is a priority. We employ
                            appropriate measures to protect personal information
                            against unauthorised access, disclosure, alteration
                            or destruction. These may include, among others,
                            encryption, physical access security and other
                            appropriate technologies. We continually review and
                            enhance our security systems as necessary. As such,
                            we may ask you to identify and authenticate yourself
                            when accessing this website or when dealing with you
                            through other media. We are not responsible for any
                            information that may be lost if we terminate your
                            browser session during prolonged periods of
                            inactivity whilst accessing this website.
                          </span>
                        </p>
                        <h5 className="c29">
                          <span className="c0 c3">Requests for access</span>
                        </h5>
                        <p className="c38 c22">
                          <span className="c1"></span>
                        </p>
                        <p className="c48">
                          <span className="c0">
                            If you require access to your personal information
                            maintained by us, please contact us at{" "}
                          </span>
                          <span className="c0">
                            <a className="c25" href="mailto:sales@enkash.com">
                              sales@enkash.com.{" "}
                            </a>
                          </span>
                          <span className="c0">
                            If we cannot give you access to your personal
                            information, we will give you reasons. Cardholders
                            requesting information may also wish to contact
                            their issuer institution with their access request
                            as their card issuer would hold more complete
                            information about them. The card issuer institution
                            may also seek cardholder personal information from
                            us and forward it to the cardholder.
                          </span>
                        </p>
                        <p className="c28 c22">
                          <span className="c2"></span>
                        </p>
                        <p className="c17">
                          <span className="c0">
                            Where information is collected by us directly from
                            consumers or sources other than our business
                            customers, we will permit such sources, if possible,
                            to dispute or correct any erroneous, incomplete or
                            out-of-date personally identi&#64257;able
                            information. Of course, this correction is not
                            possible if the information is proprietary to one of
                            our business customers, re&#64258;ects historical
                            transaction information or if correction would
                            violate the privacy or legal rights of a third
                            party. Where applicable, we abide by laws related to
                            such information. You can also correct factual
                            errors in your personally identi&#64257;able
                            information by login in your account (if such access
                            is provided to you) or sending us a written request
                            that credibly shows error. We reserve the right to
                            independently verify any such claims made. To
                            protect your privacy and security, we will also take
                            reasonable steps to verify your identity before
                            making corrections. In the event that we are
                            unwilling to correct personal information, we will
                            provide you with the reasons for our decision. In
                            the event there is any change in your personal
                            information, you should update the same to us by
                            writing to us at{" "}
                          </span>
                          <a href="mailto: support@enkash.com">
                            support@enkash.com
                          </a>
                        </p>
                        <p className="c38 c22">
                          <span className="c2"></span>
                        </p>
                        <p className="c17">
                          <span className="c0">
                            We reserve the right to charge for providing you any
                            information in connection with your request
                            (although such a fee will not apply to the lodging
                            of a request for access).
                          </span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <h5 className="c43">
                          <span className="c0 c3">Consent</span>
                        </h5>
                        <p className="c15">
                          <span className="c1"></span>
                        </p>
                        <p className="c40">
                          <span className="c0">
                            We may use and disclose personal information
                            provided to us about users, customers and
                            cardholders to third parties as described earlier in
                            this Privacy Statement. Where we collect information
                            through this website, you will be asked whether you
                            consent to the use and disclosure of your personal
                            information as described earlier in this Privacy
                            Statement. To change your selection, update your
                            contact details or retrieve and change your
                            registration information, or withdraw your consent,
                            please contact us using the contact details shown on
                            the Platform. We hold ourselves accountable to our
                            privacy principles. We may alter this Privacy Policy
                            as needed for certain products and services and to
                            abide by local laws or regulations.{" "}
                          </span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <h5 className="c43">
                          <span className="c0 c3">Intellectual Property</span>
                        </h5>
                        <p className="c15">
                          <span className="c1"></span>
                        </p>
                        <p className="c69">
                          <span className="c0">
                            All present and future rights in and to trade
                            secrets, patents, copyright, trademarks, service
                            marks, know-how and other proprietary rights of any
                            type arising at law, including rights in and to all
                            applications and registrations relating to this
                            website (including but not limited to all data
                            contained on this website relating to you and your
                            associated customer (&quot;Data&quot;), information,
                            text, look and feel, material, graphics, software
                            and advertisements) (the &quot;Intellectual Property
                            Rights&quot;) shall, as between you and us, at all
                            times be and remain the sole and exclusive property
                            of Nehat Tech Solutions Pvt. Ltd. You assign upon
                            creation all Intellectual Property Rights to us.
                          </span>
                        </p>
                        <p className="c18">
                          <span className="c2"></span>
                        </p>
                        <p className="c88">
                          <span className="c0">
                            You do not acquire any rights or licences in or to
                            the Intellectual Property Rights, the Platorm and
                            materials contained within the Platform other than
                            the limited right to use the Platform in accordance
                            with the Terms. You agree to protect the
                            Intellectual Property Rights of Nehat Tech Solutions
                            Pvt. Ltd. and all others having rights in the
                            Platform during and after the term of this Agreement
                            and to comply with all reasonable written requests
                            made by Nehat Tech Solutions Pvt. Ltd. or its
                            suppliers of content (including Data) (&quot;
                          </span>
                          <span className="c21">Content</span>
                          <span className="c0">
                            &quot;), equipment or otherwise to protect their and
                            other&#39;s contractual, statutory and common law
                            rights in this website.
                          </span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <h5 className="c43">
                          <span className="c0 c3">Revisions of Data</span>
                        </h5>
                        <p className="c38 c22">
                          <span className="c1"></span>
                        </p>
                        <p className="c11">
                          <span className="c6 c0 c3">
                            You and Your associated customer are responsible for
                            all revisions to the information provided by you.
                            You accept responsibility as a representative of
                            your associated customer and represent your
                            associated customer in all access and use of this
                            website. You acknowledge and agree that Nehat Tech
                            Solutions Pvt. Ltd. relies in good faith on any
                            revisions to the information provided by you and
                            does not take any steps to verify the accuracy of
                            any revisions to the information provided by you.
                          </span>
                        </p>
                        <p className="c38 c22">
                          <span className="c2"></span>
                        </p>
                        <h5 className="c30 c60">
                          <span className="c0 c3">Disclaimer</span>
                        </h5>
                        <p className="c38 c22">
                          <span className="c1"></span>
                        </p>
                        <p className="c44">
                          <span className="c0">
                            Whilst we have and will continue to make great
                            efforts to include accurate and up to date content
                            on the Platform, we make no warranties or
                            representations, express or implied, as to the
                            accuracy or completeness of the content contained or
                            referenced therein and all content is provided to
                            you &quot;as is&quot;. Any warranties regarding the
                            content or other services provided, which may be
                            implied by law, statute or otherwise are excluded to
                            the fullest extent permitted by law. You agree that
                            your use of the Platform is at your sole risk and
                            acknowledge that the Platform and anything contained
                            within the Platform, including but not limited to,
                            content, services, goods or advertisements are
                            provided in their then state and condition, subject
                            to all latent and patent defects. We exclude all
                            warranties except for all non-excludable statutory
                            warranties. We do not warrant that this website is
                            compatible with your equipment or that this website
                            is free from errors or viruses, worms or
                            &quot;Trojan horses&quot; and is not liable for any
                            damage you may suffer as a result of such
                            destructive features. You agree that security risk
                            cannot be completely eliminated while using the
                            internet. Nehat assumes no liability or
                            responsibility for disclosure of your information
                            due to errors in transmission, unauthorized
                            third-party access, or other causes beyond its
                            control. You agree that Nehat Tech Solutions Pvt.
                            Ltd, its suppliers and its third-party agents shall
                            have no responsibility or liability for:
                          </span>
                        </p>
                        <p className="c86 c22">
                          <span className="c2"></span>
                        </p>
                        <ol className="c14 lst-kix_list_2-0 start">
                          <li className="c67 li-bullet-0">
                            Any injury or damages, whether caused by the
                            negligence of Nehat Tech Solutions Pvt. Ltd, its
                            employees, subcontractors, agents, suppliers or
                            otherwise arising in connection with this website
                            and shall not be liable for any lost pro&#64257;ts,
                            losses, punitive, incidental or consequential
                            damages or any claim against Nehat Tech Solutions
                            Pvt. Ltd by any other party; or
                          </li>
                          <li>
                            Any fault, inaccuracy, omission, delay or any other
                            failure in this website caused by
                          </li>
                        </ol>

                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <h5 className="c43">
                          <span className="c0 c3">
                            Your Computer Equipment.
                          </span>
                        </h5>
                        <p className="c15">
                          <span className="c1"></span>
                        </p>
                        <p className="c40">
                          <span className="c0">
                            Links to Third Party Websites The content of other
                            websites, services, goods or advertisements that may
                            be linked to this website is not maintained or
                            controlled by us. We are therefore not responsible
                            for the availability, content or accuracy or privacy
                            practices of other websites, services or goods that
                            may be linked to, or advertised on, this website.
                            Where the Platform contains hyperlinks to websites
                            operated by third parties these linked websites are
                            not under the control of us and we are not
                            responsible for the contents of any linked website.
                            We provide these hyperlinks to you for convenience
                            only and the inclusion of any link does not imply
                            any endorsement of the linked website by us. You
                            link to any such website entirely at your own risk.
                            We do not:
                          </span>
                        </p>
                        <p className="c15">
                          <span className="c2"></span>
                        </p>
                        <ol className="c14 lst-kix_list_9-0 start">
                          <li className="c92 li-bullet-0">
                            Make any warranty, express or implied, with respect
                            to the use of the links provided on, or to, this
                            website;
                          </li>
                          <li className="c92 li-bullet-0">
                            <span className="c0">
                              Guarantee the accuracy, completeness, usefulness
                              or adequacy of any other website, services, goods
                              or advertisements that may be linked to this
                              website; or
                            </span>
                          </li>
                          <li className="c73 li-bullet-0">
                            <span className="c0">
                              Make any endorsement, express or implied, of any
                              other websites, services, goods or advertisements
                              that may be linked to this website.
                            </span>
                          </li>
                        </ol>

                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="">
                          <span className="c6 c0 c3">
                            This website may also contain third party
                            advertisements which contain embedded hyperlinks to
                            websites operated by third parties. All third-party
                            advertising is paid for by the relevant third-party
                            advertiser, which you can accept by linking to the
                            third- party advertisers and are not recommendations
                            or endorsements by us. The third- party advertiser
                            is solely responsible for any representations or
                            offers made by it and for the delivery of goods or
                            services you agree to purchase from the third-party
                            website. We are also not responsible for the
                            reliability or continued availability of the
                            telephone lines, wireless services, communications
                            media and equipment you use to access this website.
                            This Privacy Policy is not applicable to such third
                            party links or websites and the data collected by
                            them. We suggest that you should read the privacy
                            policy of such third party websites/links, before
                            sharing your information with them.
                          </span>
                        </p>
                        <p className="">
                          <span className="c6 c0 c3">
                            Limitation of Liability - As the Internet relies on
                            telecommunications services, we cannot guarantee
                            that this website will always be available or free
                            from fault, errors or viruses. The Terms of Use
                            govern our provision and your use of this website.
                            Our liability for the provision of this website and
                            the goods and services via this website is limited
                            to supplying the services again or reinstating the
                            availability of the website or paying the cost of
                            having the services supplied again or in the case of
                            goods, re-supplying the goods or replacement goods
                            or paying the cost of having the goods supplied
                            again. You agree that you use This Platform at your
                            sole risk. You agree that any content downloaded by
                            you is done so entirely at your own risk and you
                            shall be solely responsible for the consequences of
                            downloading any such content. Under no
                            circumstances, including but not limited to
                            negligence, shall we, our suppliers and our third
                            party agents be liable to you for indirect,
                            incidental, consequential, special, punitive or
                            exemplary damages even if our authorised
                            representative has been advised speci&#64257;cally
                            of the possibility of such damages, arising from use
                            of or liability to use the service or any links or
                            items on the service or any provision of the Terms
                            of Use, such as but not limited to, loss of revenue
                            or anticipated pro&#64257;ts or lost business. Under
                            no circumstances, including but not limited to
                            negligence, shall we, our suppliers and our
                            third-party agents be liable to you for any damage,
                            cost, loss or expense incurred by you arising out of
                            or in connection with any revision of Data executed
                            by you. Under no circumstances shall we be liable to
                            you for any amount (if any) in excess of any fee
                            payable by you for the right to use this website,
                            during a period of 30(thirty) days, immediately
                            preceeding the date of the claim.{" "}
                          </span>
                        </p>
                        <p className="c64">
                          <span className="c0">
                            Indemni&#64257;cation - You shall at your expense
                            indemnify, defend and hold harmless Nehat Tech
                            Solutions Pvt. Ltd. and its employees,
                            representatives, Suppliers and agents, against any
                            claim, suit, action or other proceeding, brought
                            against Nehat Tech Solutions Pvt. Ltd., its
                            employees, representatives, Suppliers and agents, by
                            a third party, to the extent that such claim, suit,
                            action or other proceeding brought against Nehat
                            Tech Solutions Pvt. Ltd. , its employees,
                            representatives, suppliers and agents is based on or
                            arises in connection with this website, or any links
                            on this website, including, but not limited to:
                          </span>
                        </p>
                        <p className="c30 c22">
                          <span className="c2"></span>
                        </p>
                        <ol className="c30 c37">
                          <li className="c0">
                            Your use of or someone using your computer to use
                            this website
                          </li>
                          <li className="c68 li-bullet-6">
                            <span className="c0">
                              Your use of or someone using your account, where
                              applicable
                            </span>
                          </li>
                          <li className="c65 li-bullet-0">
                            <span className="c0">
                              A breach of these Privacy Policy by you or someone
                              using your computer or account
                            </span>
                          </li>
                          <li className="c65 li-bullet-0">
                            <span className="c0">
                              A claim that any use of this website by you or
                              someone using your computer or account infringes
                              any Intellectual Property Rights of any third
                              party or any right of personality or publicity, is
                              libellous or defamatory or otherwise results in
                              injury or damage to any third party
                            </span>
                          </li>
                          <li className="c27 li-bullet-0">
                            <span className="c0">
                              Any revisions, deletions, additions, insertions or
                              alterations to, or any unauthorised use of, this
                              website or the content (including the Data) by you
                              or someone using your computer or account; or
                            </span>
                          </li>
                          <li className="c27 li-bullet-0">
                            <span className="c0">
                              Use the website or information in a manner that
                              breaches any applicable law, including any privacy
                              law or Nehat Tech Solutions Pvt. Ltd.&#39;s
                              Privacy Statement without the prior written
                              consent of Nehat Tech Solutions Pvt. Ltd.
                            </span>
                          </li>
                        </ol>

                        <p className="c42 c22">
                          <span className="c2"></span>
                        </p>
                        <p className="c42">
                          <span className="c21">Responsibilities of User</span>
                        </p>
                        <p className="c15">
                          <span className="c1"></span>
                        </p>
                        <p className="c53">
                          <span className="c0">
                            You acknowledge and agree that you are responsible
                            for:
                          </span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c28 c22">
                          <span className="c2"></span>
                        </p>
                        <ol className="c89">
                          <li className="c0">
                            At the request of Nehat Tech Solutions Pvt. Ltd. ,
                            providing such information and assistance as are
                            reasonably required by Nehat Tech Solutions Pvt.
                            Ltd. in order for Nehat Tech Solutions Pvt. Ltd. to
                            meet its obligations under these Privacy Policy
                          </li>
                          <li className="c35 li-bullet-0">
                            <span className="c0">
                              Complying with all reasonable directions and
                              instructions of Nehat Tech Solutions Pvt. Ltd. in
                              relation to your use of the Platform provided
                              prior reasonable notice is given to you of any of
                              the same
                            </span>
                          </li>
                          <li className="c56 li-bullet-0">
                            <span className="c0">
                              Taking every reasonable precaution in the use of
                              the Platform to prevent contamination and
                              diffusion of any software or hardware
                              contamination including viruses, worms or
                              &quot;Trojan horses&quot;
                            </span>
                          </li>
                          <li className="c56 li-bullet-0">
                            <span className="c0">
                              The accuracy of revisions to the information
                              provided by you on the Platform (and for the
                              avoidance of doubt such responsibility shall be
                              solely your responsibility)
                            </span>
                          </li>
                          <li className="c82 li-bullet-0">
                            <span className="c0">
                              Taking every reasonable precaution to ensure that
                              access to the Platform and the information is
                              restricted to those persons (including
                              subcontractors and agents) who are authorised
                              users of the Platform
                            </span>
                          </li>
                          <li className="c34 li-bullet-0">
                            <span className="c0">
                              Not sharing your customer id number and password
                              (if applicable) with any third party
                            </span>
                          </li>
                          <li className="c68 li-bullet-7">
                            <span className="c0">
                              Changing your password (if applicable) on a
                              regular basis; and
                            </span>
                          </li>
                          <li className="c32 li-bullet-3">
                            <span className="c0">
                              Using this website in accordance with all
                              applicable laws and regulations.
                            </span>
                          </li>
                        </ol>
                        <p className="c28 c22">
                          <span className="c2"></span>
                        </p>
                        <ol className="c14 lst-kix_list_7-0 start"></ol>
                        <p className="c18">
                          <span className="c2"></span>
                        </p>
                        <ol className="c14 lst-kix_list_7-0"></ol>
                        <p className="c19">
                          <span className="c6 c0 c3"></span>
                        </p>
                        <ol className="c14 lst-kix_list_7-0"></ol>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <ol className="c14 lst-kix_list_6-0 start"></ol>
                        <p className="c18">
                          <span className="c2"></span>
                        </p>
                        <ol className="c14 lst-kix_list_6-0"></ol>
                        <p className="c18">
                          <span className="c2"></span>
                        </p>
                        <ol className="c14 lst-kix_list_6-0"></ol>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c28 c22">
                          <span className="c2"></span>
                        </p>
                        <ol className="c14 lst-kix_list_6-0"></ol>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <h5 className="c60 c75">
                          <span className="c0 c3">
                            Suspension or Discontinuation
                          </span>
                        </h5>
                        <p className="c38 c22">
                          <span className="c1"></span>
                        </p>
                        <p className="c11">
                          <span className="c6 c0 c3">
                            Nehat Tech Solutions Pvt. Ltd. may at any time,
                            without liability, suspend or discontinue the
                            operation of this website generally or your access
                            to or operation of this website.
                          </span>
                        </p>
                        <p className="c11 c22">
                          <span className="c2"></span>
                        </p>
                        <h5 className="c11">
                          <span className="c1">Retention of Information</span>
                        </h5>
                        <p className="c28">
                          <span className="c13">
                            We shall retain your personal information such
                            duration as may be required for providing the
                            Services or for any other purposes specified herein,
                            or as
                          </span>
                          <span className="c36"></span>
                          <span className="c13">
                            may be required or permitted by the applicable laws.
                            In the event You desire to withdraw Your consent or
                            delete Your Personal Information collected by the
                            Company, You can do so by contacting us at{" "}
                          </span>
                          <a href="mailto: support@enkash.com">
                            support@enkash.com
                          </a>
                          <span></span>
                        </p>
                        <h5 className="c43">
                          <span className="c0 c3">Governing Law</span>
                        </h5>
                        <p className="c38 c22">
                          <span className="c1"></span>
                        </p>
                        <p className="c40">
                          <span className="c0">
                            The Privacy Policy shall be governed and construed
                            in accordance with the laws of India and the Courts
                            of Mumbai, India shall have the exclusive
                            jurisdicition.{" "}
                          </span>
                        </p>
                        <h5 className="c43">
                          <span className="c1 c0 c3">
                            Grievances & Nodal Officer Details
                          </span>
                        </h5>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c53">
                          <span className="c2">
                            1. In the event, You have any grievances relating to
                            the Privacy Policy, please inform the Company within
                            24 hours of occurrence of the instance from which
                            the grievance has arisen, by contacting the
                            Grievance Redressal Officer through the below
                            contact information:
                          </span>
                        </p>
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <tbody>
                              <tr>
                                <td>
                                  <span className="c8">
                                    Name of the Grievance Redressal Officer:
                                  </span>
                                </td>
                                <td>
                                  <b>Mr Nagesh Shet </b>
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
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c53">
                          <span className="c2">
                            2. In case of no satisfactory response within 24
                            hours or for any further escalation if required,
                            please contact our Nodal officer in the below
                            details for further assistance as follows;
                          </span>
                        </p>
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <tbody>
                              <tr>
                                <td>
                                  <span className="c8">
                                    Name of the Nodal Officer:
                                  </span>
                                </td>
                                <td>
                                  <b> Mr Nagesh Shet</b>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="c8">Email Id</span>
                                </td>
                                <td>
                                  <a href="mailto:nodalofficer@enkash.com">
                                    nodalofficer@enkash.com
                                  </a>
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
                            </tbody>
                          </table>
                        </div>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <h5 className="c43">
                          <span className="c1 c0 c3">
                            Details of the Data Protection Officer:
                          </span>
                        </h5>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>

                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <tbody>
                              <tr>
                                <td>
                                  <span className="c8">
                                    Name of the Data Protection Officer (DPO):
                                  </span>
                                </td>
                                <td>
                                  <b>Mr. Arockiaraj Martin Gracis</b>
                                </td>
                              </tr>
                              <tr>
                                <td>Email ID:</td>
                                <td>
                                  <a href="mailto:dpo@enkash.com">
                                    dpo@enkash.com
                                  </a>
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
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c28 c22">
                          <span className="c2"></span>
                        </p>
                        <br />
                        <h5 className="c30 c60">
                          <span className="c0 c3">Miscellaneous</span>
                        </h5>
                        <p className="c58">
                          <span className="c0">
                            You accept that Nehat Tech Solutions Pvt. Ltd. has
                            the right to change the content or technical
                            speci&#64257;cations of any aspects of this website
                            at any time at Nehat Tech Solutions Pvt. Ltd. &#39;
                            sole discretion. You further accept that such
                            changes may result in your being unable to access
                            the Platform. If any provision of these Privacy
                            Policy is found invalid or unenforceable, that
                            provision will be enforced to the maximum extent
                            permissible and the other provisions of the Privacy
                            Policy will remain in force. At the request of Nehat
                            Tech Solutions Pvt. Ltd., you will execute and
                            deliver to Nehat Tech Solutions Pvt. Ltd. any
                            documents necessary to effect this
                          </span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c38 c22">
                          <span className="c2"></span>
                        </p>
                        <h5 className="c43">
                          <span className="c0 c3">Agreement</span>
                        </h5>
                        <p className="c38 c22">
                          <span className="c1"></span>
                        </p>
                        <p className="c11">
                          <span className="c0">
                            The Platform is for use by residents of India only.
                            Our website is not directed at children under the
                            age of 18 and we do not collect or maintain
                            information at our website from those we actually
                            know are under the age of 18.
                          </span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c5">
                          <span className="c2"></span>
                        </p>
                        <p className="c38 c22">
                          <span className="c2"></span>
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
      </div>
    </>
  )
}

export default PrivacyPolicy
