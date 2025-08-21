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
        title: "Startups & Digital Brands",
        content:
            "Use these cards to create a seamless payment experience or build deeper loyalty with your customers.",
    },

    {
        title: "Communities & Influencers",
        content:
            "Empower your community with a branded financial tool that simplifies the way they spend."
    },
    {
        title: "Enterprises & Employers",
        content:
            "Hand out expense cards with your logo, while keeping full control over how and where they’re used.",
    },

]
const slideData = [
    {
        id: 1,
        icon: ItemIcon.src,
        title: "End-to-End Process",
        description:
            "Partner with EnKash to access a unified fintech ecosystem with cutting-edge tech, prepaid cards, PPI infrastructure, and scalable white-label solutions.",
    },
    {
        id: 2,
        icon: ItemIcon.src,
        title: "Backed by the RBI",
        description:
            "EnKash, an RBI-regulated PPI license holder, offers partners compliant, secure, credible fintech solutions that elevate trust and market distinction.",
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
        title: "Powered by Experts",
        description:
            "With years of building business-first financial solutions, we offer proven expertise, trusted tools, and an ecosystem-grown platform for partners.",
    },
    {
        id: 5,
        icon: ItemIcon.src,
        title: "Co-Branded Products, Made Simple",
        description:
            "From day one, we’re in your corner. Our expert team makes onboarding a breeze. Consider us your on-call growth partner.",
    },
    {
        id: 6,
        icon: ItemIcon.src,
        title: "Real People, Real Support",
        description:
            "With years of building business-first financial solutions, we offer proven expertise, trusted tools, and an ecosystem-grown platform for partners.",
    },
    {
        id: 7,
        icon: ItemIcon.src,
        title: "Spend Control & Limits",
        description:
            "Customize your cards, manage them easily,and stay in control. Define spend limits, track usage, and manage it all in real time.",
    },
]
const stepsData = [
    {
        stepNumber: "Steps 1",
        title: "Sign Up",
        description: "Share your brand and goals.",
    },
    {
        stepNumber: "Steps 2",
        title: "Design Your Card",
        description:
            "Customize cards with types, benefits, and your brand identity.",
    },
    {
        stepNumber: "Steps 3",
        title: "Integration & Setup",
        description: "The EnKash team helps with infrastructure, APIs, and compliance.",
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
        { title: "Built For Partners", color: "color-black f-2" },
        { title: " Who Think Big", color: "color-black" },
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