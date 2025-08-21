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
        title: "Expense Management System",
        content:
            "Designed to simplify your workflow, our API-first platform plugs into your ERP, HRMS, TMCs, and corporate cards. With smart OCR, real-time sync, custom policies, and multi-level approvals, it’s automation without the hassle.",
        button: {
            text: "Learn more",
            url: "/products/expense-management"
        }
    },
    {
        title: "Bill Payment ",
        content:
            "Offer a unified bill payment experience for you and your customers, enabling utility bills, rent, subscriptions, and more to be paid from a single dashboard.",
        button: {
            text: "Learn more",
            url: "/utility-bill-payment"
        }
    },
    {
        title: "Vendor Management",
        content:
            "Simplify vendor operations for your customers with digital onboarding, compliance checks, and a centralized vendor database for greater control. Enable real-time tracking and custom approval flows as per corporate procurement policies.",
    },
    {
        title: "Supply Chain Finance",
        content:
            "Empower your corporate clients to unlock working capital and optimize cash flow through dynamic discounting and flexible supply chain financing seamlessly delivered via your banking infrastructure..",
    },
    {
        title: "Cashback Reconciliation & Automation    ",
        content:
            "Enable your clients to effortlessly track, reconcile, and optimize cashback earnings across spends with automated tracking across cards, categories, and merchants.",
    },
]
const slideData = [
    {
        id: 1,
        icon: ItemIcon.src,
        title: "Co-Branded Visibility",
        description:
            "Position your bank as a tech-forward brand by offering co-branded solutions across payments, cards, and expense tools.",
    },
    {
        id: 2,
        icon: ItemIcon.src,
        title: "Add New Revenue Models",
        description:
            "Unlock revenue streams, cut costs, grow SME and corporate customers, and offer value-added digital finance—no in-house build needed.",
    },
    {
        id: 3,
        icon: ItemIcon.src,
        title: "Wider Customer Reach",
        description:
            "Expand into new regions and business segments by bundling EnKash with your existing SME and corporate offerings.",
    },
    {
        id: 4,
        icon: ItemIcon.src,
        title: "Joint Go-To-Market Strategy",
        description:
            "Collaborate on targeted GTM plans from product bundling to client-specific sales enablement. Boost lead generation by offering EnKash’s solutions as add-ons to your core banking services.",
    },
    {
        id: 5,
        icon: ItemIcon.src,
        title: "Trusted Recommendation Model",
        description:
            "Accelerate onboarding with businesses through EnKash’s trusted partner positioning by building confidence fast.",
    },
    {
        id: 6,
        icon: ItemIcon.src,
        title: "Faster Sales Cycle & Customization",
        description:
            "Close deals quicker with tailored solutions, flexible workflows, and bank-specific branding.",
    },
]
const stepsData = [
    {
        stepNumber: "Step 1",
        title: "Connect with Us",
        description: "Mail us or fill the form below for our team to reach out to us.",
    },
    {
        stepNumber: "Step 2",
        title: "Customize Your Offering",
        description:
            "We’ll co-create tailored solutions; co-branded, white-labeled, or integrated based on your ecosystem and customers.",
    },
    {
        stepNumber: "Step 3",
        title: "Launch & Grow Together",
        description: "Go live with plug-and-play APIs, dedicated support, and GTM strategies to scale revenue and reach.",
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
        { title: "Unified Solution for Banks Powered by ", color: "color-black f-2 d-md-block" },
        { title: "Advanced Technology & Tools", color: "color-black" },
    ],
    headingTag: "h2",
    className: "f-5 mb-4 mb-md-5",
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