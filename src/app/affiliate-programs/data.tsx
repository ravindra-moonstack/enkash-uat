import imaCard from "./img/containerScreen.webp"
import ItemIcon from "./img/itemIcon.svg"

const dataSets = [
  {
    // iconSrc: iconOne,
    // imageSrc: autoCollect,
    altText: "Auto Collect ",
    title: "Instant Issuance & Reload",
    subtitle:
      "Issue cards instantly and refill balances as needed without delays. This feature ensures employees have continuous access to meal benefits without interruptions, improving their overall experience and satisfaction.",
  },
]
const bankSolutions = [
  {
    title: "Startups & Founders",
    content:
      "Offer your users co-branded corporate cards and a smart payment gateway that reflects your brand’s innovation. Unlock new revenue streams and build lasting loyalty.",
  },
  {
    title: "Business Consultants & CFO networks",
    content:
      "Enhance your advisory services with access to modern fintech tools. Help your clients gain control with branded solutions that are easy to onboard and scale.",
  },
  {
    title: "Affiliate marketers with relevant traffic",
    content:
      "Monetize your audience by promoting high-demand fintech products with excellent conversion rates. Get access to ready-made creatives, performance dashboards, and payouts for every qualified referral.",
  },
  {
    title: "Fintech influencers and bloggers",
    content:
      "Partner with EnKash to showcase real solutions that simplify business finances. Share expert insights, review products like co-branded cards or payment gateways, and earn through every engaged referral.",
  },
  {
    title: "Existing EnKash partners and clients",
    content:
      "Amplify your benefits by becoming an affiliate. Refer other businesses in your network and earn while enabling them to experience the same control, efficiency, and growth you do.",
  },
]
const slideData = [
  {
    id: 1,
    icon: ItemIcon.src,
    title: "High Commission Payouts",
    description:
      "Earn rewards with scalable, success-driven payouts for every qualified customer you refer.",
  },
  {
    id: 2,
    icon: ItemIcon.src,
    title: "Ready-to-Use Marketing Collateral",
    description:
      "Everything you need to start promoting, like custom banners, sales decks, and plug-and-play templates, will be at your disposal.",
  },
  {
    id: 3,
    icon: ItemIcon.src,
    title: "Powerful Fintech Products",
    description:
      "From corporate cards to payment gateway,  EnKash offers a full-stack financial platform designed to simplify business payments.",
  },
  {
    id: 4,
    icon: ItemIcon.src,
    title: "Real-Time Performance Tracking",
    description:
      "Stay in control with transparent, real-time dashboards that let you monitor clicks, conversions, and commissions at a glance. Easily track your referral performance, optimise campaigns, and get paid without delays.",
  },
]
const stepsData = [
  {
    stepNumber: "Step 1",
    title: "Sign Up",
    description: "Join the EnKash affiliate program.",
  },
  {
    stepNumber: "Step 2",
    title: "Get Access",
    description: "Get your hands on ready-to-use content for promotion.",
  },
  {
    stepNumber: "Step 3",
    title: "Refer & Earn",
    description: "Share custom links with your audience.",
  },
]

const headingData = {
  content: [
    { title: "How to ", color: "color-black" },
    { title: "Become a Partner", color: "color-equity-blue" },
  ],
  headingTag: "h2",
  className: "f-5 mb-4 mb-md-5",
}
const BankSolutionHeading = {
  content: [
    { title: "Built for Bold Partners ", color: "color-black f-2" },
    { title: "with Bigger Goals", color: "color-black" },
  ],
  headingTag: "h2",
  className: "f-6 mb-3 mb-md-3",
}
export {
  dataSets,
  imaCard,
  bankSolutions,
  slideData,
  headingData,
  stepsData,
  BankSolutionHeading,
}
