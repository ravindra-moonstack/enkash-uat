import { BuiltforBuildersCardIcon } from "."
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
        title: "Integration Partners",
        content:
            "For ERP, SaaS, and cloud-based platforms looking to integrate EnKash’s advanced payment solutions seamlessly."
    },
    {
        title: "Referral Partners",
        content:
            "For digital agencies, consultants, and web developers helping businesses scale with top-tier financial solutions."
    },


]
const slideData = [
    {
        id: 1,
        icon: ItemIcon.src,
        title: "Earn More, Effortlessly",
        description:
            "Whether you’re a consultant, developer, or SaaS provider, unlock new revenue streams by referring clients to EnKash -  no extra work required. Let your expertise pay you back."
    },
    {
        id: 2,
        icon: ItemIcon.src,
        title: "Build Trust with a Market Leader",
        description:
            "Partnering with EnKash means associating with India’s leading spend and payment management platform, giving your clients confidence and putting you ahead of the competition."
    },
    {
        id: 3,
        icon: ItemIcon.src,
        title: "Delight Customers with Superior Fintech",
        description:
            "From instant refunds and smart payouts to seamless UPI, card, and net banking integrations. EnKash offers your clients powerful tools to scale faster and operate smarter."
    },
    {
        id: 4,
        icon: ItemIcon.src,
        title: "Embedded Payments, Made Simple",
        description:
            "Power your platform with EnKash’s embedded finance solutions. One SDK to enable collections, payouts, refunds, and more -  all while maintaining control over the fund flow."
    },
    {
        id: 5,
        icon: ItemIcon.src,
        title: "Dedicated Support, Zero Stress",
        description:
            "Enjoy white-glove onboarding and ongoing support from a dedicated account manager. Your clients stay happy and your operations stay smooth."
    },

]
const stepsData = [
    {
        stepNumber: "Steps 1",
        title: "Sign Up",
        description: "Sign up for EnKash partnership program",
    },
    {
        stepNumber: "Steps 2",
        title: "Refer",
        description:
            "Refer merchants and businesses through our dashboard",
    },
    {
        stepNumber: "Steps 3",
        title: "Earn",
        description: "Receive commissions for every transaction that the business makes.",
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
        { title: "Built for Growth ", color: "color-black f-2" },
        { title: " - Focused Partners", color: "color-black" },
    ],
    headingTag: "h2",
    className: "f-6 mb-3 mb-md-3",
}
const BuiltforBuildersCardData = [
    {
        title: "Languages",
        subtitle2: "Multi-language SDKs & APIs for fast, easy integration",
        subtitle:
            "Shell & HTTP, JavaScript, Java, Swift, Go, PHP, Python, C, C#, Objective-C, Ruby, OCaml, Dart, R",

        icon: BuiltforBuildersCardIcon,
        url: "",
    },
    {
        title: "Plugins",
        subtitle2: "Connect EnKash to the best online store platforms with plugins",
        subtitle:
            "WooCommerce, Magento, OpenCart",

        icon: BuiltforBuildersCardIcon,
        url: "",
    },
    {
        title: "Platform",
        subtitle2: "Choose the best integration method for your business model.",
        subtitle:
            "Hosted Checkout and Server-to-Server",

        icon: BuiltforBuildersCardIcon,
        url: "",
    },
]
export {
    dataSets,
    imaCard,
    bankSolutions,
    slideData,
    headingData,
    stepsData,
    BankSolutionHeading,
    BuiltforBuildersCardData
} 