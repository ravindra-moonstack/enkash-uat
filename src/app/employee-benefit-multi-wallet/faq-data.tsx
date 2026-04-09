import { TFAQProps } from "@/src/types/faq"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import Link from "next/link"

const salesUrl = getSalesUrl("/employee-benefit-multi-wallet")
const faqData: TFAQProps[] = [
    {
        question: "What is a multi-wallet employee benefit card?",
        answer: [
            {
                heading:
                    "A multi-wallet card allows companies to allocate different benefit categories, such as meals, fuel, gifts, telecom, and LTA, into separate, policy-controlled wallets on a single card.",
            },
            {
                heading: "This ensures tax efficiency, compliance, and real-time control.",
            },
        ],
    },
    {
        question: "What are employee benefits in India?",
        answer: [
            {
                heading:
                    "Employee benefits in India, often called flexi benefits, allow companies to structure salaries in a tax-efficient way. These include meal cards, fuel cards, telecom reimbursements, gift vouchers, and LTA — all designed to increase take-home salary without increasing cost.",
            },
        ],
    },
    {
        question:
            "What is the meal allowance tax exemption limit from April 1, 2026?",
        answer: [
            {
                heading:
                    "Under the new Income Tax Rules 2025 (effective April 1, 2026), the meal coupon exemption limit has been raised from ₹50 per meal to ₹200 per meal. At 2 meals per working day and 22 working days per month, the annual tax-free meal benefit is now up to ₹8,800/month (₹1,05,600 annually) under structured meal benefits. This applies under Section 17(2)(viii) of the Income Tax Act, read with Rule 3(7)(iii).",
            },
        ],
    },
    {
        question: "Are new ITR reform benefits available under the new tax regime?",
        answer: [
            {
                heading:
                    "Yes, but only in a limited and structured way. The new tax regime under Section 115BAC offers lower tax rates with minimal exemptions, so most traditional deductions are not available.",
            },
            {
                heading: "What is allowed:",
                bullets: [
                    "Standard deduction (₹75,000)",
                    "Rebate under Section 87A (as applicable)",
                    "Employer NPS contribution (Section 80CCD(2))",
                    "Select rule-based allowances",
                ],
            },
            {
                heading:
                    "Certain benefits, when structured as per Income Tax Rules, remain tax-efficient. For example: ",
                bullets: [
                    "Meal benefits provided via compliant instruments can offer tax-exempt value up to ₹200 per meal, subject to conditions under Rule 3.",
                ],
            },
            {
                heading: "EnKash helps companies structure benefits based on both regimes.",
            },
        ],
    },
    {
        question: "Is the EnKash Multi-Wallet Card accepted everywhere in India?",
        answer: [
            {
                heading: "Yes.",
            },
            {
                heading:
                    "The EnKash Multi-Wallet Card operates on the open RuPay network and is accepted at 50 lakh+ merchant touchpoints across all 36 states and Union Territories of India — including:",
                bullets: [
                    "Restaurants and grocery stores",
                    "Fuel stations",
                    "Online platforms like Swiggy and Zomato",
                    "POS machines across cities and towns",
                ],
            },
            {
                heading:
                    "Each wallet is restricted by merchant category to ensure compliant usage.",
            },
        ],
    },
    {
        question: "Does the LTA wallet cover the 2026–2029 block?",
        answer: [
            {
                heading: "Yes.",
            },
            {
                heading:
                    "Employees can claim tax exemption on up to 2 domestic journeys in the 2026–2029 LTA block under Section 10(5).",
            },
            {
                heading:
                    "The exemption covers actual fare costs for air, rail, or public transport via the shortest route, for the employee and immediate family (spouse, children, dependent parents/siblings).",
            },
            {
                heading:
                    "EnKash's LTA wallet tracks claim eligibility automatically and maintains documentation for audit purposes.",
            },
        ],
    },
    {
        question: "How quickly can EnKash onboard our company?",
        answer: [
            {
                heading: "Most companies go live within 48 hours after documentation.",
                bullets: [
                    "Virtual cards: issued instantly",
                    "Physical cards: delivered in 3–5 working days",
                ],
            },
            {
                heading: "Dedicated onboarding support ensures a smooth rollout.",
            },
        ],
    },
    {
        question: "What are the gift voucher exemption rules?",
        answer: [
            {
                heading:
                    "Non-cash gifts and gift vouchers provided by an employer are exempt from tax up to ₹15,000 per year per employee under Section 17(2)(viii).",
            },
            {
                heading:
                    "Cash gifts, however, are fully taxable regardless of amount. The EnKash Gift Wallet ensures all disbursements are in a compliant non-cash form, with digital receipts maintained automatically.",
            },
        ],
    },
    {
        question: "Does EnKash integrate with our HRMS?",
        answer: [
            {
                heading: "Yes.",
            },
            {
                heading:
                    "EnKash integrates with leading HRMS and payroll platforms in India, including Darwinbox, Keka, greytHR, Zoho People, and SAP, as well as other payroll systems like Paybooks and Saral.",
            },
            {
                heading: "For custom ERPs, a REST API is available. Bulk upload via CSV is always available as a fallback.",
            },
        ],
    },
    {
        question: "How is EnKash different from Zaggle?",
        answer: [
            {
                heading: "Unlike others, EnKash operates on its own RBI-issued PPI license, enabling:",
                bullets: [
                    "Instant card issuance",
                    "Real-time spend controls",
                    "UPI-enabled payments",
                    "Direct integration with finance systems",
                ],
            },
            {
                heading: "Unlike traditional providers, EnKash gives businesses full control before the transaction happens.",
            },
        ],
    },
    {
        question: "How is EnKash different from Sodexo or Pluxee meal cards?",
        answer: [
            {
                heading: "Unlike traditional Sodexo or Pluxee meal cards, EnKash offers UPI-enabled payments, real-time controls and multi-wallet flexibility across benefits like fuel, telecom, and LTA — all on one card.",
            },
        ],
    },
    {
        question: "Does offering employee benefits increase company costs?",
        answer: [
            {
                heading: "No. Employee benefits are structured by reallocating existing salary components. Companies can improve employee take-home pay without increasing total CTC.",
            },
        ],
    },
    {
        question: "How does EnKash prevent misuse of employee benefits?",
        answer: [
            {
                heading: "Each wallet is restricted using merchant category controls (MCC), ensuring funds are spent only on approved categories like food, fuel, or travel.",
            },
            {
                heading: "This enforces policy at the transaction level, not after.",
            },
        ],
    },
    {
        question: "Is EnKash compliant with RBI regulations?",
        answer: [
            {
                heading: "Yes. EnKash operates under an RBI-issued PPI license and follows strict compliance standards, including PCI-DSS and enterprise-grade security protocols.",
            },
        ],
    },
    {
        question: "What does the EnKash Multi-Wallet Card cost?",
        answerHTML: [
            "Pricing depends on your company’s size, use case, and benefit structure.",
            <Link href={salesUrl} target="_blank" rel="noopener noreferrer" className="d-block">Talk to our experts to unlock exclusive pricing and savings.</Link>
        ],
    },
]

export default faqData
