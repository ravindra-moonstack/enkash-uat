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
        title: "Banks",
        content:
            "Use Bharat Connect to offer seamless business payment and collection solutions to your current account holders, powered by ready-to-deploy APIs and plug-and-play tech.",
    },

    {
        title: "ERP & Billing Software Providers",
        content:
            "Integrate Bharat Connect to offer in-built payment and collection capabilities to your customers, making your platform more powerful and sticky."
    },
    {
        title: "Mid to Large Corporates",
        content:
            "Simplify your vendor payouts and receivables with a single, automated platform that connects directly with your ERP.",
    },

]
const slideData = [
    {
        id: 1,
        icon: ItemIcon.src,
        title: "EnKash as Technology Service Provider (TSP)",
        description:
            "As a trusted TSP, our Bharat Connect powered tech enables plug-and-play solutions for banks, simplifying processes and strengthening customer relationships."
    },
    {
        id: 2,
        icon: ItemIcon.src,
        title: "EnKash as Agent Solution",
        description:
            "With Bharat Connect, expand offerings, simplify processes, and help customers manage payments and collections effortlessly from a single platform."
    },
    {
        id: 3,
        icon: ItemIcon.src,
        title: "EnKash as Biller Solution",
        description:
            "Simplify collections and payables by connecting to the Bharat Connect platform. Expand your reach and get paid faster, all in one place."
    },
    {
        id: 4,
        icon: ItemIcon.src,
        title: "Real-Time Reconciliation with EnKash",
        description:
            "Get instant payment confirmations and seamless settlements fully aligned with RBI-regulated standards for speed and accuracy."
    },
    {
        id: 5,
        icon: ItemIcon.src,
        title: "Built for Trust; Backed by RBI & NPCI",
        description:
            "EnKash operates under RBI guidelines, ensuring full data security, fraud protection, and audit-ready compliance so your business runs safely and smoothly."
    },
    {
        id: 6,
        icon: ItemIcon.src,
        title: "Built for Business – Only on EnKash",
        description:
            "Customize your cards, manage them easily,and stay in control. Define spend limits, track usage, and manage it all in real time.",
    },

]
const stepsData = [
    {
        stepNumber: "Steps 1",
        title: "Connect with Us",
        description: "Fill out the form, and our partnerships team will contact you to understand your needs.",

    },
    {
        stepNumber: "Steps 2",
        title: "Integration",
        description:
            "Get API access to embed Bharat Connect or use EnKash’s portal with full support."
    },
    {
        stepNumber: "Steps 3",
        title: "Go Live",
        description: "Go live. We will handle settlement, reconciliation, and real-time reporting.",
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
        { title: "Partner to Power", color: "color-black f-2 d-block" },
        { title: " Business Bill Payments", color: "color-black" },
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
    BankSolutionHeading
} 