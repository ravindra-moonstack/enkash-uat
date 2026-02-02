import dynamic from "next/dynamic"
const Header = dynamic(() => import("./header/header"), { ssr: true })
const Footer = dynamic(() => import("./footer"), { ssr: true })
const Heading = dynamic(() => import("./heading"), { ssr: true })
const FAQHtml = dynamic(() => import("./faq-new/faqHtml"), { ssr: true })

const DynamicHeading = dynamic(() => import("./dynamic-heading"), { ssr: true })
const StatsSection = dynamic(() => import("./stats-section"), { ssr: true })
const LottieDynamicLoadComponent = dynamic(
  () => import("./lottie-client/lottie-dynamic-load-client"),
  { ssr: true }
)

const CustomBreadcrumb = dynamic(() => import("./breadcrumb"), {
  ssr: true,
})

const AllProducts = dynamic(() => import("./all-products"), {
  ssr: true,
})

const CardProduct = dynamic(() => import("./card-product"), {
  ssr: true,
})
const LogoSlider = dynamic(() => import("./logo-slider"), {
  ssr: true,
})
const PolicyCard = dynamic(() => import("./policy-card"), {
  ssr: true,
})
const FeatureCard = dynamic(() => import("./feature-card"), {
  ssr: true,
})
const StepCard = dynamic(() => import("./step-card"), { ssr: true })
const AllInOnePolicy = dynamic(() => import("./all-in-one-policy"), {
  ssr: true,
})
const CardStacking = dynamic(() => import("./card-stacking"), {
  ssr: true,
})
const RectangleButton = dynamic(() => import("./buttons/rectangle-button"), {
  ssr: true,
})
const CTASection = dynamic(() => import("./sections/cta-section"), {
  ssr: true,
})
const SmartPolicySection = dynamic(() => import("./smart-policy-section"), {
  ssr: true,
})
const FeatureSpotlight = dynamic(() => import("./feature-spotlight"), {
  ssr: true,
})
const EnkashWay = dynamic(() => import("./enkash-way/enkash-way"), {
  ssr: true,
})

const ContentShowcase = dynamic(() => import("./content-showcase"), {
  ssr: true,
})
const SecondFaqHtml = dynamic(() => import("./second-faq/secondFaqHtml"), {
  ssr: true,
})
const ManagementCard = dynamic(() => import("./management-card"), { ssr: true })
const TestimonialSlider = dynamic(() => import("./testimonial-slider"), {
  ssr: true,
})
const LocationCard = dynamic(() => import("./location-card"), {
  ssr: true,
})
const SupportCard = dynamic(() => import("./support-card/support-card"), {
  ssr: true,
})
const PaymentLinkTab = dynamic(
  () => import("./payment-link-tabs/payment-link-tab"),
  { ssr: true }
)
const ScrollableCardsSection = dynamic(
  () => import("./scrollable-cards-section"),
  { ssr: true }
)
const RewardsCarousel = dynamic(() => import("./rewards-carousel"), {
  ssr: true,
})
const BankLogoSlider = dynamic(() => import("./banking-slider"), { ssr: true })
const EasyStepCard = dynamic(() => import("./easy-step-card"), {
  ssr: true,
})

const StepsSection = dynamic(() => import("./steps-section"), {
  ssr: true,
})

const FaqSection = dynamic(() => import("./faq-section"), {
  ssr: true,
})

const HowDoesItWork = dynamic(() => import("./how-does-it-work"), { ssr: true })
const BecomePartnerSteps = dynamic(() => import("./becomepartner"), {
  ssr: true,
})

const PartnerShipForm = dynamic(
  () => import("./forms/partnership-form/index"),
  {
    ssr: true,
  }
)

const BpHeroSection = dynamic(() => import("./bp-hero-section/index"), {
  ssr: true,
})

const TabPoliciesWrapper = dynamic(() => import("./tab-policies-wrapper"), {
  ssr: true,
})

const ProductsSection = dynamic(() => import("./our-products-section/index"), {
  ssr: true,
})

const SalesForm = dynamic(() => import("./forms/sales-form"), {
  ssr: true,
})

const OurStoryCard = dynamic(() => import("./about-our-story-card"), {
  ssr: true,
})

const LeadersSection = dynamic(() => import("./about-leaders-card"), {
  ssr: true,
})
const InvestorsLogos = dynamic(() => import("./investors-logos"), { ssr: true })
const EmployeeSlider = dynamic(() => import("./employee-slider"), { ssr: true })

const CareersCard = dynamic(() => import("./about-careers-card"), { ssr: true })

const LocationTabsMap = dynamic(() => import("./location-tabs-map"), {
  ssr: true,
})

const BottomCtaSection = dynamic(() => import("./bottom-cta-section"), {
  ssr: true,
})

const PartnershipSection = dynamic(
  () => import("./partner-ship-slider/PartnershipSection"),
  { ssr: true }
)

const BankAffiliatePartnershipForm = dynamic(
  () => import("./forms/bank-affiliate-partnership"),
  { ssr: true }
)

const BankSolutions = dynamic(() => import("./partnerships/BankSolutions"), {
  ssr: true,
})

const CareersHero = dynamic(() => import("./careers-hero-slider"), {
  ssr: true,
})

const CareersPaycheck = dynamic(() => import("./careers-paycheck"), {
  ssr: true,
})

const CoreValuesData = dynamic(() => import("./core-values-data"), {
  ssr: true,
})

const YourOpportunityCareers = dynamic(
  () => import("./your-opportunity-careers"),
  {
    ssr: true,
  }
)

const CareersTestimonialSlider = dynamic(
  () => import("./careers-testimonial-slider"),
  {
    ssr: true,
  }
)

const HiringProcessModal = dynamic(() => import("./hiring-process-modal"), {
  ssr: true,
})

const PaymentGatewayPartnershipForm = dynamic(
  () => import("./forms/payment-gateway"),
  {
    ssr: true,
  }
)

const PaymentGatewaySection = dynamic(
  () => import("./payment-gateway-slider/PaymentGatewaySection"),
  { ssr: true }
)

const BuiltforBuildersSection = dynamic(
  () => import("./builtfor-builders-card"),
  {
    ssr: true,
  }
)

const UtilityBillPayments = dynamic(() => import("./utility-bill-payments"), {
  ssr: true,
})

const PartnerSection = dynamic(() => import("./partner-section-data"), {
  ssr: true,
})

const SupportForm = dynamic(() => import("./forms/support-form"), {
  ssr: true,
})

const ContactForm = dynamic(() => import("./forms/contact-form"), {
  ssr: true,
})
const ShimmerImage = dynamic(() => import("./shimmer-image"), {
  ssr: true,
})
const BankGradeSecurity = dynamic(() => import("./BankGradeSecurity/BankGradeSecurity"), {
  ssr: true,
})

const CommanButton = dynamic(() => import("./buttons/index"), {
  ssr: true,
})

export {
  Header,
  Footer,
  Heading,
  FAQHtml,
  DynamicHeading,
  StatsSection,
  LottieDynamicLoadComponent,
  CustomBreadcrumb,
  AllProducts,
  CardProduct,
  LogoSlider,
  BankGradeSecurity,
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
  PaymentGatewaySection,
  BuiltforBuildersSection,
  UtilityBillPayments,
  PartnerSection,
  SupportForm,
  ContactForm,
  CommanButton,
  ShimmerImage,
}
