import dynamic from "next/dynamic"
const Header = dynamic(() => import("./header/header"), { ssr: true })
const Footer = dynamic(() => import("./footer/footer"), { ssr: true })
const Heading = dynamic(() => import("./heading/heading"), { ssr: true })
const FAQHtml = dynamic(() => import("./faq-new/faqHtml"), { ssr: true })
const DynamicHeading = dynamic(
  () => import("./dynamicHeading/dynamic-heading"),
  { ssr: true }
)
const LottieDynamicLoadComponent = dynamic(
  () => import("./lottie-client/lottie-dynamic-load-client"),
  { ssr: true }
)
const CustomBreadcrumb = dynamic(() => import("./breadcrumb/breadbrumb"), {
  ssr: true,
})
const TalkToSales = dynamic(
  () => import("./mobile-talks-to-sales/mobile-talk-to-sales"),
  { ssr: true }
)
const AllProducts = dynamic(() => import("./all-products/all-products"), {
  ssr: true,
})
const CardProduct = dynamic(() => import("./card-product/card-product"), {
  ssr: true,
})
const LogoSlider = dynamic(() => import("./logo-slider/logo-slider"), {
  ssr: true,
})
const PolicyCard = dynamic(() => import("./policyCard/policyCard"), {
  ssr: true,
})
const FeatureCard = dynamic(() => import("./featureCard/feature-card"), {
  ssr: true,
})
const StepCard = dynamic(() => import("./stepCard/stepCard"), { ssr: true })
const AllInOnePolicy = dynamic(
  () => import("./all-in-one-policy/all-in-one-policy"),
  { ssr: true }
)
const CardStacking = dynamic(() => import("./cardStacking/cardStacking"), {
  ssr: true,
})
const RectangleButton = dynamic(() => import("./buttons/rectangle-button"), {
  ssr: true,
})
const CTASection = dynamic(() => import("./CTASection/CTASection"), {
  ssr: true,
})
const SmartPolicySection = dynamic(
  () => import("./smartPolicySection/smartPolicySection"),
  { ssr: true }
)
const FeatureSpotlight = dynamic(
  () => import("./featureSpotlight/featureSpotlight"),
  { ssr: true }
)
const EnkashWay = dynamic(() => import("./enkash-way/enkash-way"), {
  ssr: true,
})

const ContentShowcase = dynamic(
  () => import("./contentShowcase/contentShowcase"),
  { ssr: true }
)
const SecondFaqHtml = dynamic(() => import("./second-faq/secondFaqHtml"), {
  ssr: true,
})
const ManagementCard = dynamic(
  () => import("./management-card/management-card"),
  { ssr: true }
)
const TestimonialSlider = dynamic(
  () => import("./testimonialSlider/testimonialSlider"),
  { ssr: true }
)
const LocationCard = dynamic(() => import("./locationCard/location-card"), {
  ssr: true,
})
const SupportCard = dynamic(() => import("./supportCard/support-card"), {
  ssr: true,
})
const PaymentLinkTab = dynamic(
  () => import("./paymentLinkTabs/payment-link-tab"),
  { ssr: true }
)
const ScrollableCardsSection = dynamic(
  () => import("./scrollable-cards-section/scrollableCardsSection"),
  { ssr: true }
)
const RewardsCarousel = dynamic(
  () => import("./rewards-carousel/rewards-carousel"),
  { ssr: true }
)
const BankLogoSlider = dynamic(
  () => import("./banking-slider/banking-slider"),
  { ssr: true }
)
const EasyStepCard = dynamic(() => import("./easy-step-card/easy-step-card"), {
  ssr: true,
})

const StepsSection = dynamic(() => import("./stepsSection/stepsSection"), {
  ssr: true,
})

const FaqSection = dynamic(() => import("./faqSection/faqSection"), {
  ssr: true,
})

const HowDoesItWork = dynamic(
  () => import("./how-does-it-work/how-does-it-work."),
  { ssr: true }
)
const BecomePartnerSteps = dynamic(
  () => import("./becomepartner/become-partner-steps"),
  { ssr: true }
)
const PartnerShipForm = dynamic(() => import("./partnerShip-form/index"), {
  ssr: true,
})
const BpHeroSection = dynamic(() => import("./BpHeroSection/index"), {
  ssr: true,
})
const TabPoliciesWrapper = dynamic(
  () => import("./tabPoliciesWrapper/tabPoliciesWrapper"),
  { ssr: true }
)
const ProductsSection = dynamic(() => import("./ourProductsSection/index"), {
  ssr: true,
})
const SalesForm = dynamic(() => import("./sales-form"), { ssr: true })
const OurStoryCard = dynamic(
  () => import("./AboutOurStoryCard/AboutOurStoryCard"),
  { ssr: true }
)
const LeadersSection = dynamic(
  () => import("./AboutLeadersCard/AboutLeadersCard"),
  { ssr: true }
)
const InvestorsLogos = dynamic(
  () => import("./InvestorsLogos/InvestorsLogos"),
  { ssr: true }
)
const EmployeeSlider = dynamic(
  () => import("./EmployeeSlider/EmployeeSlider"),
  { ssr: true }
)
const CareersCard = dynamic(
  () => import("./AboutCareersCard/AboutCareersCard"),
  { ssr: true }
)
const LocationTabsMap = dynamic(
  () => import("./LocationTabsMap/LocationTabsMap"),
  { ssr: true }
)
const BottomCtaSection = dynamic(
  () => import("./bottomCtaSection/bottomCtaSection"),
  { ssr: true }
)
const PartnershipSection = dynamic(
  () => import("./partnerShipSlider/PartnershipSection"),
  { ssr: true }
)
const BankAffiliatePartnershipForm = dynamic(
  () => import("./bankAffiliatePartnershipForm"),
  { ssr: true }
)
const BankSolutions = dynamic(() => import("./partnerships/BankSolutions"), {
  ssr: true,
})

const CareersHero = dynamic(
  () => import("./CareersHeroSlider/CareersHeroSlider"),
  {
    ssr: true,
  }
)
const CareersPaycheck = dynamic(
  () => import("./CareersPaycheck/CareersPaycheck"),
  {
    ssr: true,
  }
)
const CoreValuesData = dynamic(
  () => import("./CoreValuesData/CoreValuesData"),
  {
    ssr: true,
  }
)
const YourOpportunityCareers = dynamic(
  () => import("./YourOpportunityCareers"),
  {
    ssr: true,
  }
)
const CareersTestimonialSlider = dynamic(
  () => import("./CareersTestimonialSlider/CareersTestimonialSlider"),
  {
    ssr: true,
  }
)
const HiringProcessModal = dynamic(
  () => import("./HiringProcessModal"),
  {
    ssr: true,
  }
)
const PaymentGatewayPartnershipForm = dynamic(
  () => import("./paymentGatewayForm"),
  {
    ssr: true,
  }
)
const BuiltforBuildersSection = dynamic(
  () => import("./BuiltforBuildersCard/BuiltforBuildersSection"),
  {
    ssr: true,
  }
)
const UtilityBillPayments = dynamic(
  () => import("./UtilityBillPayments/UtilityBillPayments"),
  {
    ssr: true,
  }
)
const PartnerSection = dynamic(
  () => import("./partnerSectionData/partnerSectionData"),
  {
    ssr: true,
  }
)

export {
  Header,
  Footer,
  Heading,
  FAQHtml,
  DynamicHeading,
  LottieDynamicLoadComponent,
  CustomBreadcrumb,
  TalkToSales,
  AllProducts,
  CardProduct,
  LogoSlider,
  PolicyCard,
  RectangleButton,
  FeatureCard,
  StepCard,
  CardStacking,
  AllInOnePolicy,
  CTASection,
  SmartPolicySection,
  FeatureSpotlight,
  SecondFaqHtml,
  EnkashWay,
  ContentShowcase,
  ManagementCard,
  TestimonialSlider,
  LocationCard,
  SupportCard,
  PaymentLinkTab,
  ScrollableCardsSection,
  RewardsCarousel,
  BankLogoSlider,
  EasyStepCard,
  StepsSection,
  FaqSection,
  HowDoesItWork,
  BecomePartnerSteps,
  PartnerShipForm,
  BpHeroSection,
  TabPoliciesWrapper,
  ProductsSection,
  SalesForm,
  OurStoryCard,
  LeadersSection,
  InvestorsLogos,
  EmployeeSlider,
  CareersCard,
  LocationTabsMap,
  BottomCtaSection,
  PartnershipSection,
  BankAffiliatePartnershipForm,
  BankSolutions,
  CareersHero,
  CareersPaycheck,
  CoreValuesData,
  YourOpportunityCareers,
  CareersTestimonialSlider,
  HiringProcessModal,
  PaymentGatewayPartnershipForm,
  BuiltforBuildersSection,
  UtilityBillPayments,
  PartnerSection
}
