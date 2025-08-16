import iconOne from "./img/subscribtionIcon.svg"
import iconTwo from "./img/employeeIcon.svg"
import iconThree from "./img/vendorIcon.svg"
import iconFour from "./img/travelExpenceIcon.svg"
import sliderOneIcon from "./img/sliderOneIcon.svg"
import sliderTwoIcon from "./img/sliderTwoIcon.svg"
import sliderThreeIcon from "./img/sliderThreeIcon.svg"
import sliderFourIcon from "./img/sliderFourIcon.svg"
import sliderFiveIcon from "./img/sliderFiveIcon.svg"
import firstIcon from "./img/icon-one.svg"
import secondIcon from "./img/icon-two.svg"
import thirdIcon from "./img/icon-three.svg"
import fourthIcon from "./img/icon-four.svg"

import {
  digitalCardImg,
  fleetCardImg,
  fuelCardImg,
  mealCardImg,
  payrollCardImg,
  purchesCardImg,
  sassCardImg,
  termsAndConCardImg,
} from "."

const intantActionData = [
  {
    title: "Create an Account",
    description: "Register your business on EnKash",
    icon: firstIcon,
  },

  {
    title: "Issue Cards Instantly ",
    description: "Generate virtual cards for employees, vendors, or projects.",
    icon: secondIcon,
  },
  {
    title: "Set Limits & Monitor Usage",
    description: "Customize spend limits and track all transactions",
    icon: thirdIcon,
  },
  {
    title: "Make Payments",
    description:
      "Use cards for online purchases, SaaS subscriptions, or other expenses.",
    icon: fourthIcon,
  },
]

const spendAnalyticsData = [
  {
    title: "Subscription Management",
    description:
      "Keep SaaS payments under control with one-time or recurring payment cards.",
    icon: iconOne,
  },

  {
    title: "Employee Expenses",
    description:
      "Keep SaaS payments under control with one-time or recurring payment cards.",
    icon: iconTwo,
  },
  {
    title: "Vendor Payments",
    description:
      "Allocate separate cards for each vendor to simplify expense tracking and reconciliation.",
    icon: iconThree,
  },
  {
    title: "Travel & Entertainment",
    description:
      "Manage travel-related expenses efficiently with real-time monitoring.",
    icon: iconFour,
  },
]

const cardType = [
  {
    titleHtml: "Fuel Card",
    description:
      "Track and control fuel spends with real-time limits, spend visibility, and GST-compliant invoices.",
    cardImage: fuelCardImg,
    linkUrl: "/fuel-card",
  },
  {
    titleHtml: "Digital Marketing Card",
    description:
      "Simplify ad payments across platforms while staying within budget and preventing overspending.",
    cardImage: digitalCardImg,
    linkUrl: "/digital-marketing-card",
  },
  {
    titleHtml: "SaaS Card",
    description:
      "Manage recurring SaaS subscriptions with auto-renewal tracking and vendor-wise expense contro",
    cardImage: sassCardImg,
    linkUrl: "/saas-card",
  },
  {
    titleHtml: "Payroll Card",
    description:
      "Pay employees, freelancers, or gig workers directly with zero bank dependency or delays.",
    cardImage: payrollCardImg,
  },
  {
    titleHtml: "Meal Card",
    description:
      "Offer tax-free meal benefits to employees with wide acceptance and full usage transparency.",
    cardImage: mealCardImg,
    linkUrl: "/meal-card",
  },
  {
    titleHtml: "T&E Card",
    description:
      "Streamline business travel spends—set budgets, track usage, and automate travel expense reconciliation",
    cardImage: termsAndConCardImg,
    linkUrl: "/travel-and-expense-card",
  },
  {
    titleHtml: "Purchase Card",
    description:
      "Centralize vendor and business purchases with approval workflows, spend controls, and GST capture.",
    cardImage: purchesCardImg,
    linkUrl: "/purchase-card",
  },
  {
    titleHtml: "Fleet Card",
    description:
      "Digitize fleet expenses such as fuel, tolls, and repairs, while tracking usage per vehicle or driver",
    cardImage: fleetCardImg,
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "High Security: ",
        description: "Bank-grade encryption to protect your data.",
        image: sliderOneIcon,
        link: "/payment-links/",
      },
      {
        title: "Instant Access:",
        description: "No waiting time—issue cards immediately.",
        image: sliderTwoIcon,
        link: "/payment-page/",
      },
    ],
  },
  {
    title: "Reconciliation & Policy",
    subtitle: "Control and visibility in real time",
    items: [
      {
        title: "No Hidden Fees: ",
        description: "Transparent pricing with no extra charges.",
        image: sliderThreeIcon,
        link: "/payment-button/",
      },
      {
        title: "Seamless Integration",
        description: "Sync with your existing accounting tools.",
        image: sliderFourIcon,
        link: "/qr-codes/",
      },
      {
        title: "Unlimited Cards:",
        description: "Create as many cards as your business needs.",
        image: sliderFiveIcon,
        link: "/auto-collect/",
      },
    ],
  },
]

export { intantActionData, spendAnalyticsData, cardType, allProductSections }
