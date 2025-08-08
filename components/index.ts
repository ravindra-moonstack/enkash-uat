import React from "react"
const Header = React.lazy(() => import("./header/header"))
const Footer = React.lazy(() => import("./footer/footer"))
const Heading = React.lazy(() => import("./heading/heading"))
const FAQHtml = React.lazy(() => import("./faq-new/faqHtml"))
const DynamicHeading = React.lazy(() => import("./dynamicHeading/dynamic-heading"))
const LottieDynamicLoadComponent = React.lazy(() => import("./lottie-client/lottie-dynamic-load-client"))
const CustomBreadcrumb = React.lazy(() => import("./breadcrumb/breadbrumb"))
const TalkToSales = React.lazy(() => import("./mobile-talks-to-sales/mobile-talk-to-sales"))
const AllProducts = React.lazy(() => import("./all-products/all-products"))
const CardProduct = React.lazy(() => import("./card-product/card-product"))
const LogoSlider = React.lazy(() => import("./logo-slider/logo-slider"))
const PolicyCard = React.lazy(() => import("./policyCard/policyCard"))
const FeatureCard = React.lazy(() => import("./featureCard/feature-card"))
const StepCard = React.lazy(() => import("./stepCard/stepCard"))
const AllInOnePolicy = React.lazy(() => import("./all-in-one-policy/all-in-one-policy"))
const RectangleButton = React.lazy(() => import("./buttons/rectangle-button/rectangle-button"))
const CardStacking = React.lazy(() => import("@/components/cardStacking/cardStacking"))
const ContentShowcase = React.lazy(() => import("@/components/contentShowcase/contentShowcase"))
const EnkashWay = React.lazy(() => import("@/components/enkash-way/enkash-way"))
const SecondFaqHtml = React.lazy(() => import("@/components/second-faq/secondFaqHtml"))
const ManagementCard = React.lazy(() => import("@/components/management-card/management-card"))
const SplineAnimation = React.lazy(() => import("@/components/splineAnimation/splineAnimation"))
const FeatureSpotlight = React.lazy(() => import("@/components/featureSpotlight/featureSpotlight"))
const SmartPolicySection = React.lazy(() => import("@/components/smartPolicySection/smartPolicySection"))
const CTASection = React.lazy(() => import("@/components/CTASection/CTASection"))
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
  ContentShowcase,
  EnkashWay,
  SecondFaqHtml,
  ManagementCard,
  SplineAnimation,
  FeatureSpotlight,
  SmartPolicySection,
  CTASection
}
