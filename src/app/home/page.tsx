"use client"
import Image from "next/image"
import styles from "./page.module.scss"
import {
  Header,
  Footer,
  DynamicHeading,
  RectangleButton,
  LogoSlider,
  AllProducts,
  FeatureCard,
  LottieDynamicLoadComponent,
} from "@/components"
import {
  autoCollect,
  realTimeIcon,
  taskIconFour,
  collectPaymentboxIcon,
  makePayment1,
  makePayment2,
  makePayment3,
  makePayment4,
  prepaidTop1,
  prepaidTop2,
  prepaidTop3,
  prepaidTop4,
  prepaidTop5,
  prepaidBottom1,
  rewardIcon,
  rewardImg1,
  rewardImg2,
  rewardImg3,
  rewardSliderIcon1,
  rewardSliderIcon2,
  rewardSliderIcon3,
  rewardSliderIcon4,
  rewardSliderIcon5,
  receivableBottomIcon,
  bankIcons,
  AdiadsBg,
  AdiadsProfile,
  Adiadslogo,
  delMonteBg,
  delMonteProfile,
  delMontelogo,
  bigBg,
  bigProfile,
  biglogo,
  vianetBg,
  vianetProfile,
  vianetBackLogo,
  vianetlogo,
  honeycombBg,
  honeycombProfile,
  honeycomblogo,
  securityIcon1,
  securityIcon2,
  securityIcon3,
  securityIcon4,
  securityIcon5,
  prepaidBottom2,
  BuiltforBuildersCardIcon,
} from "."

import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import UtilityBillPayments from "@/components/UtilityBillPayments/UtilityBillPayments"
import PartnerSection from "@/components/partnerSectionData/partnerSectionData"
import PaymentGatewayCare from "@/components/homePagePaymentBox/PaymentGatewayCard"
import AdidasCard from "@/components/AdidasCard/AdidasCard"
import { RectangleButtonTheme } from "@/components/buttons/rectangle-button/rectangle-button"
import ScrollableCardsSection from "@/components/scrollable-cards-section/scrollableCardsSection"
import { link } from "fs"
import PrepaidCardHome from "@/components/prepaidCardHome/PrepaidCardHome"
import { url } from "inspector"
import HomePageRewardsVouchers from "@/components/HomePageRewardsVouchers/HomePageRewardsVouchers "
import HomeReceivablesPayables from "@/components/HomeReceivablesPayables/HomeReceivablesPayables"
import Counter from "@/components/HomeCounter/HomeCounter"
import HomePageSlider from "@/components/homePageSlider/HomePAgeSlider"
import BuiltforBuildersSection from "@/components/BuiltforBuildersCard/BuiltforBuildersSection"
import Link from "next/link"
import BottomCtaSection from "@/components/bottomCtaSection/bottomCtaSection"
import Spline from "@splinetool/react-spline"

const HomePageRewardsVouchersSlide = [
  {
    titleHtml: "E-commerce Vouchers",
    title2: "",
    description:
      "Distribute vouchers usable on top online platforms - instantly.",
    cardImage: rewardSliderIcon1,
    padding: "30px 20px",
  },
  {
    titleHtml: "Food & Beverages Vouchers",
    title2: "",
    description:
      "Offer employees or partners vouchers for cafes, restaurants, and delivery apps.",
    cardImage: rewardSliderIcon2,
    padding: "30px 20px",
  },

  {
    titleHtml: "Health & Wellness Vouchers",
    title2: "",
    description:
      "Promote wellbeing with rewards redeemable for fitness, health, and self-care.",
    cardImage: rewardSliderIcon3,
    padding: "30px 20px",
  },
  {
    titleHtml: "Music & Movies Vouchers",
    title2: "",
    description:
      "Enjoy blockbuster movies, trending shows, and music with versatile vouchers.",
    cardImage: rewardSliderIcon4,
    padding: "30px 20px",
  },
  {
    titleHtml: "Apparel Vouchers",
    title2: "",
    description:
      "Reward with fashion – vouchers redeemable at leading clothing and lifestyle brands.",
    cardImage: rewardSliderIcon5,
    padding: "30px 20px",
  },
]
export const adidasData = [
  {
    image: AdiadsBg,
    title1: "Read, how Adidas Unlocked",
    title2: "Smarter Gifting with EnKash Vouchers",
    description:
      "“This platform has redefined employee engagement by allowing employees to choose from a wide range of rewards, including shopping vouchers, food, electronics, travel, and experiences. This flexibility has boosted engagement, performance, and retention.”",
    name: "Anisha Chandran",
    role: "HR Head",
    profileImg: AdiadsProfile,
    rightTopIcon: "",
    backLogo: Adiadslogo,
    ourlayClass: "AdiadslogoClass",
  },
  {
    image: delMonteBg,
    title1: "Read, how Del Monte Unlocked",
    title2: "Smarter Gifting with EnKash Vouchers",
    description:
      "“The EnKash Reward automation has significantly enhanced our R&R program. The flexibility in reward redemption options, combined with the automated process, has streamlined our operations. We've noticed a rise in team engagement, and it's helping foster stronger relationships within the organization.”",
    name: "Swati Rawat",
    role: "HR Head",
    profileImg: delMonteProfile,
    rightTopIcon: delMontelogo,
    backLogo: delMontelogo,
    ourlayClass: "delMontelogoClass",
  },
  {
    image: bigBg,
    title1: "Read, how Big FM Unlocked",
    title2: "Smarter Gifting with EnKash Vouchers",
    description:
      "“EnKash has been a fantastic partner for our gifting needs at BIG FM. What truly sets them apart is their quick TATs, prompt response & unwavering support, ensuring a seamless experience from start to finish. Their commitment to service excellence truly stands out, making Enkash our go-to choice for hassle-free gifting solutions.”",
    name: "Roopa Mahesh Kumar",
    role: "HR Head",
    profileImg: bigProfile,
    rightTopIcon: biglogo,
    backLogo: biglogo,
    ourlayClass: "biglogoClass",
  },
  {
    image: vianetBg,
    title1: "Read, how vianet Unlocked",
    title2: "Smarter Gifting with EnKash Vouchers",
    description:
      "“One of the key benefits of EnKash was gaining real-time visibility of our Daily Sales Outstanding (DSOs), which became an interactive feature. This real-time insight into our receivables greatly improved our decision-making capabilities. We have unlocked a new efficiency level in our receivables processes, streamlining operations and ensuring smoother financial management.”",
    name: "Deep Sehgal",
    role: "Founder and CEO",
    profileImg: vianetProfile,
    rightTopIcon: vianetlogo,
    backLogo: vianetBackLogo,
    ourlayClass: "vianetlogoClass",
  },
  {
    image: honeycombBg,
    title1: "Read, how Honeycomb Unlocked",
    title2: "Smarter Gifting with EnKash Vouchers",
    description:
      "“In integrated marketing communications, agencies need to allocate budgets for different verticals. Through EnKash’s virtual cards, we were able to manage our budget allocation for various departments, streamline approvals seamlessly, and gain real-time visibility of all our department-wise expenses to our finance department”",
    name: "Noufel Anamala",
    role: "Transformative Leader",
    profileImg: honeycombProfile,
    rightTopIcon: honeycomblogo,
    backLogo: honeycomblogo,
    ourlayClass: "honeycomblogoClass",
  },
]
const scrollCardsData = [
  {
    title: "Digital Petty Cash",
    description:
      "Track and manage small-ticket expenses across branches in real time.",
    icon: "",
    link: "/digital-petty-cash",
  },
  {
    title: "Budget & Advances",
    description:
      "Set budgets, issue advances, and monitor usage against spending limits.",
    icon: "",
    link: "/budget-and-advances",
  },
  {
    title: "Reimbursements",
    description:
      "Enable fast, policy-aligned reimbursements with built-in approvals.",
    icon: "",
    link: "/reimbursements",
  },
  {
    title: "Scan & Drop Receipts",
    description:
      "Snap receipts and auto-extract data for quick claim submissions.",
    icon: "",
    link: "/receipts",
  },
  {
    title: "Spend Analytics",
    description:
      "Get deep insights into spends with smart, real-time analytics.",
    icon: "",
    link: "/#",
  },
]

const makePaymentData = [
  {
    title: "Utility Bill Payments",
    subtitle:
      "Automate and manage all business utility bills from one unified dashboard.",
    womanImg: makePayment1,
    url: "/utility-bill-payments",
  },
  {
    title: "Vendor Payments",
    subtitle:
      "Pay suppliers and vendors on time with complete visibility and control.",
    womanImg: makePayment2,
    url: "/vendor-payments",
  },
  {
    title: "Rental Payments",
    subtitle:
      "Schedule recurring rent and lease payments with auto-reminders and logs.",
    womanImg: makePayment3,
    url: "/rental-payments",
  },
  {
    title: "Bulk Pay",
    subtitle:
      "Send high-volume payouts with role-based, multi-level approval flows.",
    womanImg: makePayment4,
    url: "/bulk-payments",
  },
]
const BuiltforBuildersCardData = [
  {
    title: "APIs & Modules",
    subtitle:
      "Unlock powerful automation and customized payment flows with our flexible APIs and plug-and-play modules.",

    icon: BuiltforBuildersCardIcon,
    url: "",
  },
  {
    title: "Seamless Integrations",
    subtitle:
      "Effortlessly sync with ERPs, accounting platforms, and business tools to centralize your financial operations.",

    icon: BuiltforBuildersCardIcon,
    url: "",
  },
  {
    title: "Workflow Management",
    subtitle:
      "Simplify approvals and process flows to eliminate bottlenecks and boost team productivity.",

    icon: BuiltforBuildersCardIcon,
    url: "",
  },
]
const cardsData = [
  {
    title: "Payment Gateway",
    subtitle:
      "Developer-first, no-code gateway for seamless payment collections across channels.",

    icon: collectPaymentboxIcon,
    url: "/products/utility-bill-payments",
  },
  {
    title: "Payment Links",
    subtitle:
      "Shareable links via WhatsApp, SMS, or social - get paid instantly without friction.",

    icon: collectPaymentboxIcon,
    url: "/products/utility-bill-payments",
  },
  {
    title: "Payment Button",
    subtitle:
      "Plug-and-play buttons for your website. Quick setup, no coding needed.",

    icon: collectPaymentboxIcon,
    url: "/products/utility-bill-payments",
  },
  {
    title: "UPI Payments",
    subtitle:
      "Accept UPI payments via BHIM, PhonePe, WhatsApp & more, no VPA, no SMS fatigue.",

    icon: collectPaymentboxIcon,
    url: "/products/utility-bill-payments",
  },
  {
    title: "QR Code",
    subtitle:
      "Accept secure, contactless payments with instant-scannable QR codes.",

    icon: collectPaymentboxIcon,
    url: "/products/utility-bill-payments",
  },
  {
    title: "Affordability Suite",
    subtitle:
      "Offer customers EMIs, BNPL & credit options to boost conversions and cash flow.",

    icon: collectPaymentboxIcon,
    url: "/products/utility-bill-payments",
  },
]
const PayablesData = [
  {
    title: "Invoice Management ",
    subtitle:
      "Digitize approvals and settle invoices faster with audit-ready records.",
    url: "/invoice-management",
    bottomIcon: receivableBottomIcon,
  },
  {
    title: "Payable Analytics",
    subtitle: "Track, plan, and manage payables with a live dashboard view.",
    url: "/payable-analytics",
    bottomIcon: receivableBottomIcon,
  },
  {
    title: "Approval Flows",
    subtitle: "Enforce spending rules automatically to ensure full compliance.",
    url: "/approval-flows",
    bottomIcon: receivableBottomIcon,
  },
  {
    title: "Workflow Management",
    subtitle: "Enforce spending rules automatically to ensure full compliance.",
    url: "/workflow-management",
    bottomIcon: receivableBottomIcon,
  },
]
const ReceivablesData = [
  {
    title: "Digital Invoicing",
    subtitle:
      "Generate and send GST-compliant invoices in seconds. Track status, set reminders & get paid faster.",
    url: "/digital-invoicing",
    bottomIcon: receivableBottomIcon,
  },
  {
    title: "Auto Reconciliation",
    subtitle:
      "Automatically match incoming payments with invoices - no manual work, zero errors.",
    url: "/auto-reconciliation",
    bottomIcon: receivableBottomIcon,
  },
  {
    title: "Connected Banking",
    subtitle:
      "Link your bank accounts to manage collections, settlements & cash positions - all in one view.",
    url: "/connected-banking",
    bottomIcon: receivableBottomIcon,
  },
  {
    title: "Collection Reminders",
    subtitle:
      "Automated, timely nudges via email, SMS, or WhatsApp – so you never miss a payment follow-up.",
    url: "/collection-reminders",
    bottomIcon: receivableBottomIcon,
  },
  {
    title: "Collection Analytics",
    subtitle:
      "Get deep insights into receivables -  monitor delays, aging, and recovery trends in real-time.",
    url: "/collection-analytics",
    bottomIcon: receivableBottomIcon,
  },
]
const prepaidCardsData = [
  {
    title: "Meal Card",
    subtitle: "Offer tax-saving digital meal benefits with usage tracking.",
    url: "/meal-card",
    topIcon: prepaidTop1,
  },
  {
    title: "Fuel Card",
    subtitle: "Monitor and control fleet or travel-related fuel spends easily.",
    url: "/fuel-card",
    topIcon: prepaidTop2,
  },
  {
    title: "Gift Cards",
    subtitle:
      "Send instant, personalized rewards for any occasion or milestone.",
    url: "/gift-cards",
    topIcon: prepaidTop3,
  },
  {
    title: "Self Card Management",
    subtitle: "Create, assign, and manage cards in minutes - fully self-serve.",
    url: "/self-card-management",
    topIcon: prepaidTop4,
  },
]
const prepaidCardsDataSecond = [
  {
    title: "Meal Card",
    subtitle: "Offer tax-saving digital meal benefits with usage tracking.",
    url: "/meal-card",
    topIcon: prepaidTop5,
    bottomIcon: prepaidBottom1,
    borderColors: "linear-gradient(-90deg, #00A2FF00 0%, #1C5AF4 100%) 1",
  },
  {
    title: "Travel & Expense Card",
    subtitle: "Simplify business travel expenses with pre-set card limits.",
    url: "/travel-and-expense-card",
    topIcon: prepaidTop5,
    bottomIcon: prepaidBottom2,
    borderColors: "linear-gradient(-90deg, #00A2FF00 0%, #1C5AF4 100%) 1",
  },
]

const rewardData = [
  {
    title: "Employee",
    title2: "Rewards",
    subtitle:
      "Reward achievements and special occasions with instant vouchers.",
    icon: rewardIcon,
    image: rewardImg1,
    overlayColorClass: "homePagerewards1",
  },

  {
    title: "Channel",
    title2: "Incentives",
    subtitle:
      "Run incentive programs that motivate and drive channel performance.",
    icon: rewardIcon,
    image: rewardImg2,
    overlayColorClass: "homePagerewards2",
  },
  {
    title: "Exclusive",
    title2: "Offers",
    subtitle:
      "Provide access to curated brand deals and discounts for employees and teams.",
    icon: rewardIcon,
    image: rewardImg3,
    overlayColorClass: "homePagerewards3",
  },
]
const ctaButtonData = [
  {
    title: "Collect Payments",
    theme: "outline-blue" as RectangleButtonTheme,
    actionImage: "",
    hoverImage: "",
    url: "/collect-payments",
  },
  {
    title: " Make Payments",
    theme: "outline-blue" as RectangleButtonTheme,
    actionImage: "",
    hoverImage: "",
    url: "/make-payments",
  },
  {
    title: "Manage Expenses",
    theme: "outline-blue" as RectangleButtonTheme,
    actionImage: "",
    hoverImage: "",
    url: "/manage-expenses",
  },
  {
    title: "Get Corporate Cards",
    theme: "outline-blue" as RectangleButtonTheme,
    actionImage: "",
    hoverImage: "",
    url: "/products/corporate-cards",
  },
  {
    title: "Distribute Brand Vouchers",
    theme: "outline-blue" as RectangleButtonTheme,
    actionImage: "",
    hoverImage: "",
    url: "/brand-vouchers",
  },
  {
    title: "Reward Employees",
    theme: "outline-blue" as RectangleButtonTheme,
    actionImage: "",
    hoverImage: "",
    url: "/products/employee-rewards",
  },
]
const counterData = [
  {
    end: 2,
    suffix: " Million +",
    label: "Corporate Cards Processed",
  },
  {
    end: 250000,
    label: "Network Members",
  },
  {
    end: 5000,
    suffix: " +",
    label: "Businesses Powered",
  },
]
const Home = (): React.JSX.Element => {
  return (
    <>
      <div className={`color-white ${styles.home_container}`}>
        <Header utmSource="expense_management" />

        <TalkToSales />
        <section className={`${styles.topBanner}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.banner_heading}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Unifying Payments. Simplifying Spends",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h1"
                    className="text-center mb-4"
                  />
                </div>
                <div className={`${styles.banner_subHeading}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "SPEND LESS | Save Time | Scale Fast",
                        color: "color-black subHeading",
                      },
                    ]}
                    headingTag="p"
                    className="text-center mb-4"
                  />
                </div>
                <div className={`${styles.banner_button}`}>
                  <RectangleButton
                    title="Connect with Us"
                    theme="outline-blue"
                    actionImage=""
                    hoverImage=""
                    url="/sales/"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.ctaLogoSlider}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.ctaButtonSection}`}>
                  {ctaButtonData.map((item, index) => (
                    <div className={`${styles.ctaButtonBox}`} key={index}>
                      <RectangleButton {...item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.logoSliderSection}`}>
                  <LogoSlider />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.collectPaymentSection}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.collectPaymentHeadingBox}`}>
                  <div className={`${styles.collectPaymentHeading}`}>
                    <DynamicHeading
                      content={[
                        {
                          title:
                            "India’s Only End-to-End Payments & Spend Stack",
                          color: "color-black",
                        },
                      ]}
                      headingTag="h2"
                      className="text-center mb-2"
                    />
                  </div>
                  <div className={`${styles.collectPaymentSubHeading}`}>
                    <DynamicHeading
                      content={[
                        {
                          title:
                            "Built for Businesses. Powered by RBI Licenses. Trusted by Enterprises.",
                          color: "color-black subHeading",
                        },
                      ]}
                      headingTag="p"
                      className="text-center mb-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.collectPaymentInnerHeadingSection}`}>
              <div className="row">
                <div className="col-md-7">
                  <div className={`{collectPaymentInnerHeading}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Collect Payments",
                          color: "color-black italic f-3 d-block",
                        },
                        {
                          title: "Like a Pro",
                          color: "color-black",
                        },
                      ]}
                      headingTag="h3"
                      className="text-start mb-4"
                    />
                  </div>
                </div>
                <div className="col-md-5"></div>
              </div>
            </div>
            <div className={`${styles.collectPaymentsBoxSection}`}>
              <div className="row">
                {cardsData.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <div className={`${styles.collectPaymentBox}`}>
                      <PaymentGatewayCare {...item} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.makePaymentSection}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.makePaymentsInner}`}>
                  <div className="row">
                    <div className="col-md-12">
                      <div
                        className={`${styles.makePaymentHeading} mb-4 mb-md-5`}
                      >
                        <DynamicHeading
                          content={[
                            {
                              title: "Make Payments",
                              color: "color-black italic f-3 d-block",
                            },
                            {
                              title: "Effortlessly",
                              color: "color-black",
                            },
                          ]}
                          headingTag="h3"
                          className="text-start mb-4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {makePaymentData.map((item, index) => (
                      <div
                        className={`${styles.makePaymentsBoxData} col-md-6`}
                        key={index}
                      >
                        <div className={`${styles.makesPaymentsBox} `}>
                          <UtilityBillPayments
                            {...item}
                            womanImg={item.womanImg.src}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.makePaymentExpenseMagement}`}>
              <div className="row">
                <div className="col-md-6">
                  <div className={`${styles.lotty_files}`}>
                    <LottieDynamicLoadComponent
                      animationName={"HomeAnimationLottie"}
                      loop={true}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className={`${styles.makePaymentExpenseManagementContent}`}
                  >
                    <div className={`${styles.headings_section}`}>
                      <DynamicHeading
                        content={[
                          {
                            title: "AI-Powered",
                            color: "color-black",
                          },
                          {
                            title: "Expense Management",
                            color: "color-black italic f-3 d-block",
                          },
                        ]}
                        headingTag="h3"
                        className="text-start mb-4 mb-md-5"
                      />
                    </div>
                    <div className={`${styles.scrollableSection}`}>
                      <ScrollableCardsSection
                        cardsData={scrollCardsData}
                        showScroll={true}
                        maxHeight="400px"
                        buttonTitle=""
                        buttonTheme="outline-blue"
                        buttonUrl=""
                        marginBottoms="24px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.prepaidCardSection}`}>
          <div className="max-w-auto">
            <div className={`${styles.prepaidCardTopSection}`}>
              <div className="row">
                <div className="col-md-12">
                  <div className={`${styles.prepaidCardHeading}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Prepaid Cards",
                          color: "color-white italic f-3 d-block",
                        },
                        {
                          title: "with Total Spend Control",
                          color: "color-white",
                        },
                      ]}
                      headingTag="h3"
                      className="text-start mb-4"
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.prepaidCardSectionInner}`}>
                <div className="row g-md-5">
                  {prepaidCardsData.map((item, index) => (
                    <div className="col-md-6" key={index}>
                      <div className={`${styles.prepaidCardBox}`}>
                        <PrepaidCardHome {...item} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={`${styles.prepaidCardSectionBottom}`}>
              <div className="row">
                <div className="col-md-12">
                  <div className={`${styles.prepaidCardHeading} mb-4 mb-md-5`}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Corporate Credit Cards*",
                          color: "color-white italic f-3 d-block",
                        },
                        {
                          title: "Built to Power Growth",
                          color: "color-white",
                        },
                      ]}
                      headingTag="h3"
                      className="text-start mb-4"
                    />
                  </div>
                </div>
              </div>
              <div className="row g-md-5">
                {prepaidCardsDataSecond.map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <div className={`${styles.prepaidCardBox}`}>
                      <PrepaidCardHome {...item} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.rewardSction}`}>
          <div className="max-w-auto">
            <div className={`${styles.rewardSectionInner}`}>
              <div className="row">
                <div className="col-md-12">
                  <div className={`${styles.rewardHeading} mb-4 mb-md-5`}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Rewards & Vouchers ",
                          color: "color-black f-3 d-block",
                        },
                        {
                          title: "That Motivate and Matter",
                          color: "color-black",
                        },
                      ]}
                      headingTag="h2"
                      className="f-6 text-center"
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.rewardSectionContent}`}>
                <div className="row g-md-5">
                  {rewardData.map((item, index) => (
                    <div className="col-md-4" key={index}>
                      <div className={`${styles.rewardVauchersBox}`}>
                        <HomePageRewardsVouchers
                          {...item}
                          image={item.image.src}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className={`${styles.rewardBottomText} `}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Vouchers",
                          color: "color-white subHeading",
                        },
                      ]}
                      headingTag="p"
                      className="text-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.rewardsBottomSlider} container`}>
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.rewardsBottomSliderContent}`}>
                  {HomePageRewardsVouchersSlide.map((item, index) => (
                    <div
                      className={`${styles.rewardsBottomSliderContentBox}`}
                      key={index}
                    >
                      <div className={`${styles.rewardsBottomSliderBox}`}>
                        <FeatureCard {...item} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.receivablesPayablesSection}`}>
          <div className="max-w-auto">
            <div className={`${styles.receivablesPayablesOuter}`}>
              <div className={`${styles.spline_background}`}>
                <Spline scene="https://prod.spline.design/ljGW-FUjmmMBrg2W/scene.splinecode" />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className={`${styles.receivablesPayablesHeading}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Automating Your Accounts",
                          color: "color-black f-3 d-block",
                        },
                        {
                          title: "Receivable and Payables",
                          color: "color-black",
                        },
                      ]}
                      headingTag="h2"
                      className="text-start mb-4 mb-md-5"
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.receivablesSection}`}>
                <div className="row">
                  <div className="col-md-12">
                    <DynamicHeading
                      content={[
                        {
                          title: "Receivables Automation",
                          color: "color-black subHeading",
                        },
                      ]}
                      headingTag="p"
                      className="mb-3"
                    />
                  </div>
                </div>

                <div className="row gap-x-3">
                  {ReceivablesData.map((item, index) => (
                    <div className="col-md-4  mb-4" key={index}>
                      <div className={`${styles.ReceivablesPayablesBoxOuter}`}>
                        <HomeReceivablesPayables {...item} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${styles.receivablesSection}`}>
                <div className="row">
                  <div className="col-md-12">
                    <DynamicHeading
                      content={[
                        {
                          title: "Payables Automation",
                          color: "color-black subHeading",
                        },
                      ]}
                      headingTag="p"
                      className="mb-3 mt-md-5 mt-4"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <div className="row">
                      {PayablesData.map((item, index) => (
                        <div className="col-md-6 mb-4" key={index}>
                          <div
                            className={`${styles.ReceivablesPayablesBoxOuter}`}
                          >
                            <HomeReceivablesPayables {...item} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.partnerSection}`}>
          <div className="max-w-auto">
            <div className={`${styles.partnerRow} row `}>
              <div className="col-md-7">
                <PartnerSection
                  data={{
                    titleTag: "Partner with us",
                    heading: {
                      line1: "Accelerate Growth. Expand reach.",
                      line2: "Monetize your Network.",
                    },
                    partners: [
                      {
                        icon: bankIcons,
                        title: "Banks & NBFC Partners",
                        description:
                          "Launch co-branded cards, gateways, and platforms on our infrastructure - your brand, our tech.",
                      },
                      {
                        icon: bankIcons,
                        title: "Affiliate Network",
                        description:
                          "Refer, earn, and empower India’s next 1M digital-first businesses.",
                      },
                    ],
                    buttonText: "Become a Partner",
                    buttonLinks: "/bank-partnerships",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.counterSection}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.counterHeading} mb-4 mb-md-5`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Say Goodbye to Fragmented Experience",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h2"
                    className="text-center mb-2"
                  />
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "One Unified Platform. Multiple Use Cases. Zero Complexity.",
                        color: "color-black subHeading",
                      },
                    ]}
                    headingTag="p"
                    className="text-center mb-0"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.counterSectionOuter}`}>
              <div className="row">
                {counterData.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <div className={`${styles.counterBox}`}>
                      <Counter {...item} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.brandSection}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.heading}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Don’t Just Take Our Word for It",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h2"
                    className="text-center mb-4"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.brandSliderSection}`}>
              <div className="row">
                <div className={`${styles.brandSliderInner}`}>
                  <HomePageSlider testimonials={adidasData} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.securitySection}`}>
          <div className="max-w-auto">
            <div className={`${styles.securitySectionOuter}`}>
              <div className="row">
                <div className="col-md-7">
                  <div className={`${styles.securityLeft}`}>
                    <Image src={securityIcon1} alt={""}></Image>
                    <DynamicHeading
                      content={[
                        {
                          title: "Our Credentials, Your Confidence",
                          color: "color-white",
                        },
                      ]}
                      headingTag="h3"
                      className="f-5 mb-3 mt-3"
                    />
                    <DynamicHeading
                      content={[
                        {
                          title:
                            "Built for Businesses. Powered by RBI Licenses. Trusted by Enterprises.",
                          color: "color-white",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0"
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className={`${styles.securityRight}`}>
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <div className={`${styles.card}`}>
                          <Image src={securityIcon2} alt={""}></Image>
                          <DynamicHeading
                            content={[
                              {
                                title: "Payment Aggregator License",
                                color: "color-black",
                              },
                            ]}
                            headingTag="p"
                            className="text-center"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6  mb-3">
                        <div className={`${styles.card}`}>
                          <Image src={securityIcon3} alt={""}></Image>
                          <DynamicHeading
                            content={[
                              {
                                title: "Payment Aggregator License",
                                color: "color-black",
                              },
                            ]}
                            headingTag="p"
                            className="text-center"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className={`${styles.card}`}>
                          <Image src={securityIcon4} alt={""}></Image>
                          <DynamicHeading
                            content={[
                              {
                                title: "Payment Aggregator License",
                                color: "color-black",
                              },
                            ]}
                            headingTag="p"
                            className="text-center"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className={`${styles.card}`}>
                          <Image src={securityIcon5} alt={""}></Image>
                          <DynamicHeading
                            content={[
                              {
                                title: "Payment Aggregator License",
                                color: "color-black",
                              },
                            ]}
                            headingTag="p"
                            className="text-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.BuiltforBuildersSection}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.topSubHeading}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Built for ",
                        color: "color-equity-blue f-3",
                      },
                      {
                        title: "Builders",
                        color: "color-equity-blue",
                      },
                    ]}
                    headingTag="h5"
                    className="f-5 "
                  />
                </div>
                <div className={`${styles.topSubHeading}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Everything You Need to Ship Faster",
                        color: "color-white",
                      },
                    ]}
                    headingTag="h2"
                    className="f-6 mb-3"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.BuiltforBuilderscard}`}>
              <div className="row">
                {BuiltforBuildersCardData.map((item, index) => (
                  <div className="col-md-3" key={index}>
                    <div className={`${styles.collectPaymentBox}`}>
                      <BuiltforBuildersSection {...item} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className={`${styles.customButtons}`}>
                    <Link href={"/#"}>
                      {" "}
                      Read the Docs{" "}
                      <svg
                        width="8"
                        height="10"
                        viewBox="0 0 8 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.75 1.25L5.75 5.25L1.75 9.25"
                          stroke="#1C5AF4"
                          stroke-width="2"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.getStartedSection}`}>
          <BottomCtaSection />
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Home
