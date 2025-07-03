import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
import iconFour from "./img/icon-four.svg"
import iconFive from "./img/icon-five.svg"
import iconSix from "./img/icon-six.svg"
import policyIcon from "./img/policyIcon.svg"
import overviewIcon from "./img/overview.svg"
import controlIcon from "./img/control.svg"
import intelligenceIcon from "./img/intelligence.svg"
import statementIcon from "./img/statement.svg"
import oneClickIcon from "./img/oneClick.svg"
import identifyIcon from "./img/identify.svg"
import detectIcon from "./img/detect.svg"
import monitorIcon from "./img/monitor.svg"
import customizeIcon from "./img/customize.svg"
import instantIcon from "./img/instant-card.svg"
import onboardingIcon from "./img/onboarding.svg"
import noThidPartyIcon from "./img/noThidParty.svg"
import diyControlIcon from "./img/diy-control.svg"
import { clockIcon, multiCardIcon, realTimeTrakingIcon, securityIcon } from "."

const dataSets = [
  {
    imageSrc: iconOne,
    altText: "Allocates hierarchy ",
    heading:
      "Allocates hierarchy : roles It supports and allocates customized approval hierarchy aligned to the company’s policies.",
  },
  {
    imageSrc: iconTwo,
    altText: "Setting up of budgets",
    heading:
      "Setting up of budgets : The automated expense management platform helps define budgets for all departments & projects as per employee allocation",
  },
  {
    imageSrc: iconThree,
    altText: "Simplified expense submission",
    heading:
      "Simplified expense submission: A user-friendly interface ensuring that employees can effortlessly submit expenses from their mobile devices at any time and from any location",
  },
  {
    imageSrc: iconFour,
    altText: "Automated approval workflow",
    heading:
      "Automated approval workflow: On-click approval process based on predefined budgets or policies",
  },
  {
    imageSrc: iconFive,
    altText: "Faster expense tracking",
    heading:
      "Faster expense tracking: AI-powered WhatsApp bot helps report expenses and enables managers to give on-the-go approvals",
  },
  {
    imageSrc: iconSix,
    altText: "Real-time visibility",
    heading:
      "Real-time visibility:  Managers can access up-to-date reports and dashboards that offer insights into spending patterns, budget utilization, and cost centers",
  },
]

const blogData = [
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2022/09/blog_25.a957f315.jpg",
    imageAlt: "Spend Management Platform: An Expense Management Strategy",
    title: "Spend Management Platform: An Expense Management Strategy",
    date: "Aug 03, 2023",
    description:
      "When you think about working capital management or spend management platform, you think of managing expenses that are incurred in your business over a quarter of a year...",
    link: "/resources/blog/spend-management-software-for-smarter-spends/",
  },
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/04/Insights-with-expense-management.jpg",
    imageAlt:
      "Gain Valuable Insights into Your Finances with Expense Management",
    title: "Gain Valuable Insights into Your Finances with Expense Management",
    date: "Apr 07, 2023",
    description:
      "Managing expenses is an essential aspect of personal and professional financial management. Keeping track of expenses can provide valuable insights into your finances, including where...",
    link: "/resources/blog/importance-of-expense-management/",
  },
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/02/Improve-your-cash-flow-with-the-best-expense-management-software.jpg",
    imageAlt:
      "Improve Your Cash Flow with The Best Expense Management Software",
    title: "Improve Your Cash Flow with The Best Expense Management Software",
    date: "Feb 22, 2023",
    description:
      "The foundation for any business’s efficient operation consists of creating precise budget, keeping close check on the business expenses, and streamlining cash flow. We cannot overstate...",
    link: "/resources/blog/best-expense-management-software/",
  },
]

const cardData = [
  {
    icon: clockIcon,
    title: "Instant Card Issuance",
  },
  {
    icon: multiCardIcon,
    title: "Multiple Card Options",
  },
  {
    icon: realTimeTrakingIcon,
    title: "Real-time tracking & controls",
  },
  {
    icon: securityIcon,
    title: "100% RBI-compliant",
  },
]

const cardsData = [
  {
    title: "Fast Performance",
    description:
      "Our app loads quickly and smoothly for a better user experience.",
    icon: policyIcon,
  },
  {
    title: "Secure",
    description: "Top-notch security features keep your data safe and private.",
    icon: policyIcon,
  },
  {
    title: "24/7 Support",
    description: "We provide around-the-clock assistance whenever you need it.",
    icon: policyIcon,
  },
  {
    title: "Customizable",
    description: "Easily tailor the app to fit your unique workflow and needs.",
    icon: policyIcon,
  },
  {
    title: "Cloud Sync",
    description: "Access your data anywhere with secure cloud synchronization.",
    icon: policyIcon,
  },
  {
    title: "Intuitive Design",
    description: "A clean and simple interface that’s easy to navigate.",
    icon: policyIcon,
  },
]

const projects = [
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "rock.jpg",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6aSLQx6QJuytN_V1FK-AxPwT-DL8HQj2JwTKY-v-rOlDkKQbJWeB3ao&s",
    color: "#BBACAF",
  },
  {
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    src: "tree.jpg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D",
  },
  {
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
  },
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "rock.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF",
  },
  {
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    src: "tree.jpg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D",
  },
  {
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
  },
]

const intantActionData = [
  {
    title: "Live Account Overview",
    description:
      "Track balances, credit limits, billing cycles, and dues in real-time.",
    icon: overviewIcon,
  },
  {
    title: "Granular Card Controls",
    description:
      "Set custom limits, manage usage channels, and block or reissue cards with just a click.",
    icon: controlIcon,
  },
  {
    title: "Transaction Intelligence",
    description:
      "Drill down into each transaction by category, user, time, and channel.",
    icon: intelligenceIcon,
  },
  {
    title: "Statement Clarity",
    description:
      "Download detailed, filterable statements for individual or consolidated accounts.",
    icon: statementIcon,
  },
  {
    title: "One-Click Settlements",
    description:
      "Make payments across cards with flexible split options by total, minimum due, or custom logic.",
    icon: oneClickIcon,
  },
]

const spendAnalyticsData = [
  {
    title: "Identify top spenders, vendors, and categories",
    icon: identifyIcon,
  },
  {
    title: "Detect anomalies or policy violations in real time",
    icon: detectIcon,
  },
  {
    title: "Monitor trends across departments, cards, or time periods",
    icon: monitorIcon,
  },
  {
    title: "Customize views for CXOs, finance teams, or department heads",
    icon: customizeIcon,
  },
]

const rbiData = [
  {
    title: "Instant card issuance",
    description: "without routing requests through banks",
    icon: instantIcon,
  },
  {
    title: "Faster onboarding",
    description: "and fewer compliance hurdles",
    icon: onboardingIcon,
  },
  {
    title: "No third-party delays",
    description: "or dependencies",
    icon: noThidPartyIcon,
  },
  {
    title: "DIY control",
    description: "over how your cards are issued, used, and managed",
    icon: diyControlIcon,
  },
]

const corporateCardData = [
  {
    title: "• Reloadable with full/minimum KYC options",
  },
  {
    title: "• Set daily, monthly, and category-based limits",
  },
  {
    title:
      "• Instant card creation, blocking, & top-up from a single dashboard",
  },
  {
    title: "• Real-time tracking, smart analytics, and full policy compliance",
  },
  {
    title: "• Supports digital wallets with future-ready UPI integration",
  },
]
export {
  blogData,
  dataSets,
  cardsData,
  projects,
  intantActionData,
  spendAnalyticsData,
  rbiData,
  corporateCardData,
  cardData,
}
