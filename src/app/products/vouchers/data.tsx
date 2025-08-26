import crouselIconOne from "./img/crouselIconOne.svg"
import crouselIconTwo from "./img/crouselIconTwo.svg"
import crouselIconThree from "./img/crouselIconThree.svg"
import crouselIconFour from "./img/crouselIconFour.svg"
import crouselIconFive from "./img/crouselIconFive.svg"

import {
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  notificationImage,
  paymentLinkImage,
  paymentOptionImage,
  scrollIconFour,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  secureImage,
  shareImage,
  tabIconFive,
  tabIconFour,
  tabIconOne,
  tabIconThree,
  tabIconTwo,
  taskIconFour,
  taskIconOne,
  taskIconThree,
  taskIconTwo,
} from "."

const cardsData = [
  {
    title: "Onboard in Minutes",
    description: "Sign up and link your business locations to our platform.",
    icon: scrollIconOne,
  },
  {
    title: "Add and Auto-Fetch Bills",
    description:
      "Add utility bill details or let EnKash auto-fetch them for you.",
    icon: scrollIconTwo,
  },
  {
    title: "Pay in One Click",
    description:
      "Make single or bulk payments instantly with robust security measures.",
    icon: scrollIconThree,
  },
  {
    title: "Track & Reconcile",
    description:
      "Monitor all payment statuses and reconcile them effortlessly.",
    icon: scrollIconFour,
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Personalized ",
        title2: "Rewards:",
        description:
          "Tailor incentives for employees, partners, and stakeholders.",
        image: crouselIconOne,
      },
      {
        title: "Automated ",
        title2: "Processes:",
        description: "Streamline reward allocation, redemption, and tracking.",
        image: crouselIconTwo,
      },

      {
        title: "Flexible ",
        title2: "Redemption: ",
        description:
          " Offer multiple reward types—vouchers, gift cards, discounts, and more.",
        image: crouselIconThree,
      },
      {
        title: "Real-Time Tracking ",
        title2: "& Analytics:",
        description: " Gain insights into reward performance and engagement.",
        image: crouselIconFour,
      },
      {
        title: "Seamless ",
        title2: "Integration:",
        description:
          "Easily integrate with HRMS, CRMs, and business platforms.",
        image: crouselIconFive,
      },
    ],
  },
]

const allInOnePolicyData = [
  {
    icon: taskIconOne,
    title: "Instant Access to 400+ Brands",
    description:
      "From e-commerce giants to luxury fashion, gourmet dining to health essentials—you’ll find every major category covered through our curated gift voucher collection.",
    image: paymentLinkImage,
    buttonUrl: "/employee-rewards/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Flexible Denominations",
    description:
      "Pick the value that fits your budget and purpose. Choose from multiple denominations so you can personalize gifting or budget-friendly perks.",
    image: shareImage,
    buttonUrl: "/channel-incentives/",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Bulk Ordering Benefits",
    description:
      "Need to distribute vouchers at scale? Enjoy exclusive discounts on bulk orders for employee rewards, customer promotions, or festive gifting.",
    image: paymentOptionImage,
    buttonUrl: "/gift-cards/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconFour,
    title: "Smart Distribution & Auto-Alerts",
    description:
      "Each voucher comes with automated alerts on WhatsApp and email, complete with redemption instructions. No guesswork, no manual follow-ups.",
    image: notificationImage,
    buttonUrl: "/offers/",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "One Dashboard. Total Control.",
    description:
      "Track, manage, and analyze voucher usage from a single interface. Customize campaigns, set expiry dates, and view real-time redemption insights.",
    image: secureImage,
    buttonUrl: "/gift-cards/",
    maxImageHeight: "243px",
  },
]

const categoriesData = [
  {
    itemArray: ["E-commerce"],
    title: "E-commerce",
    description:
      "Access a wide range of online shopping platforms. From electronics to everyday essentials, get everything you need—conveniently and affordably.",
    icon: tabIconOne,
    bgImage: bg4,
    url: "/e-commerce-vouchers",
  },
  {
    itemArray: ["Food & Beverages"],
    title: "Food & Beverages",
    description:
      "Whether it’s a gourmet meal, a quick bite, or your daily staples, savor irresistible savings every time you eat in or dine out.",
    icon: tabIconTwo,
    bgImage: bg1,
    url: "/food-and-beverages-vouchers",
  },
  {
    itemArray: ["Apparels & Fashion"],
    title: "Apparels & Fashion",
    description:
      "Stay stylish without overspending. Explore discounted options across fashion staples, premium labels, and seasonal collections.",
    icon: tabIconThree,
    bgImage: bg2,
    url: "/apparels-vouchers",
  },
  {
    itemArray: ["Movies & Music"],
    title: "Movies & Music",
    description:
      "Dive into your favorite entertainment - be it movies, concerts, or streaming—while saving big on unforgettable experiences.",
    icon: tabIconFour,
    bgImage: bg3,
    url: "/movie-and-music-vouchers",
  },
  {
    itemArray: ["Health & Wellness"],
    title: "Health & Wellness",
    description:
      "Make your well-being a priority with value-driven vouchers for healthcare, fitness, wellness services, and daily health needs.",
    icon: tabIconFive,
    bgImage: bg5,
    url: "/health-and-wellness-vouchers",
  },
]

export { cardsData, allProductSections, allInOnePolicyData, categoriesData }
