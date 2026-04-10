import { TCardTypes, TStackCardsProp } from "@/src/types"
import { EmployeeBenefitStepsProps } from "@/components/employee-benefit-steps/EmployeeBenefitSteps"
import { benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4, benefitIcon5, PolicyIcon1, PolicyIcon2, PolicyIcon3, PolicyIcon4, PolicyIcon5, PolicyImage1, PolicyImage2, PolicyImage3, PolicyImage4, PolicyImage5 } from "./img"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

const benifitsData = [
    { icon: "/images/ArtboardBg.svg", title: "Tax Efficiency & Savings" },
    { icon: "/images/blue-arrow.svg", title: "Policy Compliance" },
    { icon: "/images/SubtractImg.webp", title: "Real-time Control" },
]
const salesUrl = getSalesUrl("/employee-benefit-multi-wallet")
const policies: TStackCardsProp = [
    {
        icon: PolicyIcon1,
        title: "RBI-Licensed PPI Issuer — the gold standard",
        description:
            "EnKash holds a full Prepaid Payment Instrument (PPI) license from the Reserve Bank of India. Your money and your employees' data are protected by the highest regulatory framework in Indian fintech.",
        image: PolicyImage1,
        buttonUrl: salesUrl,
        maxImageHeight: "248px",
    },
    {
        icon: PolicyIcon2,
        title: "Real-time Spend Control",
        description:
            "Load, freeze, and manage wallets in real time from the EnKash dashboard. Set merchant category controls per wallet type — ensuring benefits are used only as intended.",
        image: PolicyImage2,
        buttonUrl: salesUrl,
        maxImageHeight: "305px",
        reverse: true,
    },
    {
        icon: PolicyIcon3,
        title: "Connects to Your Existing Stack",
        description:
            "Native integrations with leading HRMSs and accounting systems like Darwinbox, Keka, greytHR, Zoho People, SAP SuccessFactors, and all leading Indian payroll systems. Zero data re-entry.",
        image: PolicyImage3,
        buttonUrl: salesUrl,
        maxImageHeight: "243px",
    },
    {
        icon: PolicyIcon4,
        title: "Audit-ready Reporting, Always",
        description:
            "Auto-generate IT-compliant benefit statements, Form 12BA inputs, and wallet-wise spend reports. ITR filing season becomes routine, not a scramble.",
        image: PolicyImage4,
        buttonUrl: salesUrl,
        maxImageHeight: "259px",
        reverse: true,
    },
    {
        icon: PolicyIcon5,
        title: "Pan-India Open Network Acceptance",
        description:
            "Unlike closed-loop systems, EnKash runs on the RuPay network — accepted at 50 lakh+ merchant touchpoints across every state, city, and town in India.",
        image: PolicyImage5,
        buttonUrl: salesUrl,
        maxImageHeight: "259px",
    },
]

const managementCards: TCardTypes = [
    {
        titleHtml: "Fuel Card",
        description: "Track and control fuel spends with real-time limits and GST-compliant invoices.",
        cardImage: "/images/fuelCardBg.webp",
        linkUrl: "/fuel-card",
    },
    {
        titleHtml: "Meal Card",
        description: "Optimize meal benefits for employees with tax-efficient, policy-controlled spending.",
        cardImage: "/images/mealCardBg.webp",
        linkUrl: "/meal-card",
    },
    {
        titleHtml: "Gift Card",
        description: "Manage non-cash gifts and vouchers for employees with automated digital receipts.",
        cardImage: "/images/giftCardBg.webp",
        linkUrl: "/gift-cards",
    },
]

const stepsData = [
    {
        stepNumber: "Step 1",
        title: "Define your policy",
        description: "Customise wallet limits for each role and level. EnKash recommends optimal amounts to maximise tax savings within legal limits.",
    },
    {
        stepNumber: "Step 2",
        title: "Upload employee details",
        description: "Bulk-import your employee roster via CSV or sync directly with your HRMS (Darwinbox, Keka, greytHR, and more).",
    },
    {
        stepNumber: "Step 3",
        title: "Cards issued instantly",
        description: "RuPay cards dispatched to employee addresses. Digital KYC — no branch visits required.",
    },
    {
        stepNumber: "Step 4",
        title: "Load & manage",
        description: "Load wallet balances monthly via a single bulk transfer. Real-time dashboard for HR/Finance — track spend, generate reports, and stay audit-ready.",
    },
]
const headingData: EmployeeBenefitStepsProps["heading"] = {
    content: [
        { title: "Up and Running Before Your ", color: "color-black" },
        { title: "Next Payroll Cycle", color: "color-equity-blue" },
    ],
    headingTag: "h2" as const,
    className: "text-center",
}
const introductionCards = [
    {
        value: "5,000+", label: "Trust of Businesses"
    },
    { value: "₹1L+", label: "Annual tax savings/employee" },
    {
        value: "100%", label: "RBI & IT Act compliant"
    },
    {
        value: "5 Lakhs+", label: "Online/offline Merchant touchpoints"
    }
]

const benefitGridData = [
    {
        id: 1,
        icon: benefitIcon1,       // use your actual meal icon path
        title: "Food & Meal",
        amount: "₹1,05,600",
        subtitle: "Up to per year",
    },
    {
        id: 2,
        icon: benefitIcon2,        // use your actual fuel icon path
        title: "Fuel Wallet",
        amount: "₹1,80,000",
        subtitle: "Up to per year",
    },
    {
        id: 3,
        icon: benefitIcon3,        // use your actual gift icon path
        title: "Gift Wallet",
        amount: "₹15,000",
        subtitle: "Up to per year",
    },
    {
        id: 4,
        icon: benefitIcon4,     // use your actual telecom icon path
        title: "Telecom Wallet",
        amount: "Actuals",
        subtitle: "fully exempt",
    },
    {
        id: 5,
        icon: benefitIcon5,         // use your actual LTA icon path
        title: "LTA Wallet",
        amount: "Actuals",
        subtitle: "2 journeys / 4-yr block",
    },
]

const walletCards = [
    {
        id: "food-meal",
        icon: benefitIcon1,
        title: "Food & Meal Wallet",
        subtitle: "Turn daily meals into tax-efficient income.",
        description:
            "Move from taxable cash and turn daily meals into tax-efficient income with a structured meal card in India, aligned with meal allowance tax exemption rules. No receipts. No reimbursements.",
        highlights: ["Up to ₹1,05,600/year in tax-efficient benefits", "Based on policy and usage"],
        position: "top-left" as const,
    },
    {
        id: "gift-reward",
        icon: benefitIcon3,
        title: "Gift & Reward Wallet",
        subtitle: "Reward employees without increasing their tax burden.",
        description:
            "Issue non-cash rewards instantly for milestones and festivals. No vendors. No delays. No operational overhead.",
        highlights: ["Tax-free up to ₹15,000/year", "Above this, full amount becomes taxable"],
        position: "top-right" as const,
    },
    {
        id: "fuel-conveyance",
        icon: benefitIcon2,
        title: "Fuel & Conveyance Wallet",
        subtitle: "Eliminate reimbursement chaos for business travel.",
        description:
            "Fuel spends happen directly through a controlled wallet. Every transaction is tracked and policy-aligned from the start.",
        highlights: ["Tax-efficient for official use", "As per Section 10(14)"],
        position: "bottom-left" as const,
        textColor: "white" as const,
    },
    {
        id: "telecom-internet",
        icon: benefitIcon4,
        title: "Telecom & Internet Wallet",
        subtitle: "Support work expenses without chasing bills.",
        description:
            "Allocate telecom benefits upfront. Employees pay directly. Finance gets full visibility, no reimbursements needed.",
        highlights: ["Tax-efficient for official usage"],
        position: "bottom-right" as const,
        textColor: "white" as const,
    },
    {
        id: "lta",
        icon: benefitIcon5,
        title: "LTA Wallet",
        subtitle: "Make travel benefits simple and usable.",
        description:
            "Employees use the wallet for eligible travel while the system tracks compliance automatically. No paperwork. No missed claims.",
        highlights: ["Exemption on eligible travel", "As per LTA rules"],
        position: "center" as const,
        textColor: "white" as const,
    },
]

const statisticsData = [
    {
        id: "stat-1",
        stat: "2 Million+",
        label: "Corporate Cards Processed",
    },
    {
        id: "stat-2",
        stat: "₹500Cr+",
        label: "Monthly transactions processed",
    },
    {
        id: "stat-3",
        stat: "36 of 36",
        label: "States & UTs covered",
    },
    {
        id: "stat-4",
        stat: "100%",
        label: "India-only focus",
    },
]

export {
    managementCards,
    benifitsData,
    introductionCards,
    benefitGridData,
    stepsData,
    policies,
    headingData,
    walletCards,
    statisticsData
}
