import { TFAQProps } from "@/src/types/faq"
import Link from "next/link"

const faqData: TFAQProps[] = [
    {
        question: "What is the EnKash Tax Benefit Multi-Wallet Card?",
        answer: [
            {
                heading: "It is a single prepaid instrument that houses multiple sub-wallets — each mapped to a specific tax-exempt allowance category such as meals, fuel, gifts, telecom, books & periodicals, and LTA. Corporates load the relevant allowance amount into each sub-wallet, and employees spend directly from the appropriate wallet via UPI or the physical card. Every transaction is governed by category-level controls so that spending stays compliant with income tax rules.",
            }
        ]
    },
    {
        question: "Who is the EnKash Tax Benefit Multi-Wallet Card designed for?",
        answerHTML: [
            <p key="1">
                The product is designed for corporate employers — specifically HR, Finance, and Admin teams — who want to optimise{" "}
                <Link href="/resources/blog/what-is-ctc" className="color-equity-blue underline">
                    employee CTC
                </Link>{" "}
                structures and increase take-home pay without raising gross salary costs. It is suitable for organisations of all sizes, from mid-market companies with 50 employees to large enterprises with thousands.
            </p>
        ]
    },
    {
        question: "Why should our company consider a tax benefit wallet programme now?",
        answerHTML: [
            <p key="1">
                The Income Tax Rules 2026, effective 1 April 2026, have significantly increased exemption limits across multiple allowance categories.{" "}
                <Link href="/resources/blog/tax-free-meal-cards" className="color-equity-blue underline">
                    Meal allowance exemptions
                </Link>{" "}
                have risen from ₹50 to ₹200 per meal, gift voucher exemptions have tripled from ₹5,000 to ₹15,000 per year, and children's education and hostel allowances have seen a 30× increase. For the first time, meal and gift allowances are also available under the new tax regime. Companies that restructure CTC now can deliver meaningful salary uplift to employees at zero additional cost.
            </p>
        ]
    },
    {
        question: "What happens to unused wallet balances at the end of the financial year?",
        answer: [
            {
                heading: "Any amount remaining in a sub-wallet at the end of the financial year is automatically moved to a general-purpose wallet. HR receives a detailed report of unused balances per employee so that the corresponding amount can be added back as taxable income in the employee's final salary computation. Corporations can choose to run this process at year-end or one month before, depending on their payroll cycle and policies.",
            }
        ],
    },
    {
        question: "Can the company choose which wallets to offer?",
        answer: [
            {
                heading: "Yes. Corporations have full flexibility to select only the wallet categories that align with their compensation philosophy and company policies. Some companies may choose to offer only meal and gift wallets, while others may activate the full suite, including fuel, telecom, LTA, books & periodicals, and more.",
            }
        ]
    },
    {
        question: "How does EnKash compare with Zaggle?",
        answerHTML: [
            <div key="1">
                <ul className="pl-4 list-disc">
                    <li className="mb-2"><strong>PPI Licence:</strong> EnKash holds a direct RBI-licensed PPI (Prepaid Payment Instrument) issuer licence; Zaggle does not have its own PPI licence.</li>
                    <li className="mb-2"><strong>Card Model:</strong> Zaggle operates via co-branded card partnerships with multiple banking partners, whereas EnKash controls its full issuance stack in-house.</li>
                    <li className="mb-2"><strong>UPI Payments:</strong> EnKash supports{" "}
                        <Link href="/upi-payments" className="color-equity-blue underline">
                            UPI payments
                        </Link>{" "}
                        on its multi-wallet cards, enabling seamless digital transactions beyond just card-based spends; Zaggle does not offer this capability.</li>
                    <li className="mb-2"><strong>Feature Rollout:</strong> Zaggle's feature launches and product updates are subject to partner bank timelines and priorities, slowing down innovation; EnKash can roll out new features independently and faster.</li>
                    <li className="mb-2"><strong>Customisation:</strong> EnKash offers deeper customisation as it owns its entire technology stack; Zaggle's customisation is limited by its banking partners' constraints.</li>
                    <li className="mb-2"><strong>Transaction Rule Flexibility:</strong> Modifying transaction rules at Zaggle requires partner bank involvement; EnKash can make such changes directly and more efficiently.</li>
                    <li className="mb-2"><strong>Issue Resolution:</strong> Operational issue resolution at Zaggle can be delayed due to bank dependency; EnKash provides more responsive support owing to end-to-end in-house control.</li>
                    <li className="mb-2"><strong>Compliance Stack:</strong> EnKash manages its compliance infrastructure independently, giving it greater agility; Zaggle must align with the compliance frameworks of its various banking partners.</li>
                </ul>
            </div>
        ]
    },
    {
        question: "Does EnKash offer UPI payments, unlike legacy providers?",
        answer: [
            {
                heading: "Yes. UPI-based payments from each sub-wallet are a core feature of the EnKash Tax Benefit Multi-Wallet Card. Most legacy providers — including Pluxee — rely primarily on card-based transactions or restricted QR codes within their own merchant networks. EnKash's UPI integration allows employees to pay at virtually any merchant in India, significantly expanding usability beyond the limitations of traditional meal card programmes.",
            }
        ]
    },
    {
        question: "What are employee benefits in India?",
        answerHTML: [
            <p key="1">
                Employee benefits in India, often called flexi benefits, allow companies to structure salaries in a tax-efficient way. These include meal cards,{" "}
                <Link href="/resources/blog/best-prepaid-fuel-cards-in-india" className="color-equity-blue underline">
                    fuel cards
                </Link>{" "}
                , telecom reimbursements, gift vouchers, and LTA — all designed to increase take-home salary without increasing cost.
            </p>
        ]
    },
    {
        question: "What is the meal allowance tax exemption limit from April 1, 2026?",
        answer: [
            {
                heading: "Under the new Income Tax Rules 2025 (effective April 1, 2026), the meal coupon exemption limit has been raised from ₹50 per meal to ₹200 per meal. At 2 meals per working day and 22 working days per month, the annual tax-free meal benefit is now up to ₹8,800/month (₹1,05,600 annually) under structured meal benefits. This applies under Section 17(2)(viii) of the Income Tax Act, read with Rule 3(7)(iii).",
            }
        ]
    },
    {
        question: "Is the EnKash Multi-Wallet Card accepted everywhere in India?",
        answerHTML: [
            <div key="1">
                <p>Yes. The EnKash Multi-Wallet Card operates on the open RuPay network and is accepted at 50 lakh+ merchant touchpoints across all 36 states and Union Territories of India — including:</p>
                <ul className="pl-4 list-disc mt-2">
                    <li>Restaurants and grocery stores</li>
                    <li>Fuel stations</li>
                    <li>Online platforms like Swiggy and Zomato</li>
                    <li>
                        <Link href="/resources/blog/pos-machine-costs-and-fees" className="color-equity-blue underline">
                            POS machines
                        </Link>{" "}
                        across cities and towns
                    </li>
                </ul>
                <p className="mt-2">Each wallet is restricted by merchant category to ensure compliant usage.</p>
            </div>
        ]
    },
    {
        question: "Does the LTA wallet cover the 2026–2029 block?",
        answer: [
            {
                heading: "Yes. Employees can claim tax exemption on up to 2 domestic journeys in the 2026–2029 LTA block under Section 10(5).",
            },
            {
                heading: "The exemption covers actual fare costs for air, rail, or public transport, taken via the shortest route, for the employee and immediate family (spouse, children, dependent parents/siblings).",
            },
            {
                heading: "EnKash's LTA wallet tracks claim eligibility automatically and maintains documentation for audit purposes.",
            }
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
        answerHTML: [
            <p key="1">
                Non-cash gifts and gift vouchers provided by an employer are exempt from tax up to ₹15,000 per year per employee under Section 17(2)(viii).
            </p>,
            <p key="2" className="mt-2">
                Cash gifts, however, are fully taxable regardless of amount. The{" "}
                <Link href="/gift-cards" className="color-equity-blue underline">
                    EnKash Gift Card
                </Link>{" "}
                Wallet ensures that all disbursements are in a compliant, non-cash form, with digital receipts automatically maintained.
            </p>
        ]
    },
    {
        question: "How does EnKash compare with Pluxee (formerly Sodexo)?",
        answer: [
            {
                heading: "Pluxee (operated by Sodexo SVC India Pvt Ltd) is a well-known legacy player with over two decades in the Indian market. However, as a subsidiary of a global French parent company, its product roadmap and support responsiveness are often influenced by global priorities rather than India-specific needs. User reviews on both Google Play and the Apple App Store consistently highlight issues with app reliability — login failures, OTP errors, and intermittent downtime — along with complaints about slow customer support response times. EnKash, by contrast, is a fully India-based, RBI-licensed fintech company with a product roadmap driven entirely by Indian corporate requirements, modern UPI-enabled payments, and dedicated premium support.",
            }
        ]
    },
    {
        question: "Does offering employee benefits increase company costs?",
        answer: [
            {
                heading: "No. Employee benefits are structured by reallocating existing salary components. Companies can improve employee take-home pay without increasing total CTC.",
            }
        ]
    },
    {
        question: "Is EnKash compliant with RBI regulations?",
        answer: [
            {
                heading: "Yes. EnKash operates under an RBI-issued PPI license and follows strict compliance standards, including PCI-DSS and enterprise-grade security protocols.",
            }
        ],
    },
    {
        question: "What does the EnKash Multi-Wallet Card cost?",
        answer: [
            {
                heading: "EnKash offers transparent, competitive pricing tailored to the size of the corporate client and the scope of the wallet programme. Pricing is typically structured as a combination of per-card issuance fees and platform usage charges. There are no hidden costs, and the pricing model is designed so that the employee tax savings far exceed the programme cost, making it cost-positive for the organisation. Contact the EnKash sales team for a customised quote.",
            }
        ]
    },
    {
        question: "Who is the EnKash Tax Benefit Multi-Wallet Card designed for?",
        answer: [
            {
                heading: "The product is designed for corporate employers — specifically HR, Finance, and Admin teams — who want to optimise employee CTC structures and increase take-home pay without raising gross salary costs. It is suitable for organisations of all sizes, from mid-market companies with 50 employees to large enterprises with thousands.",
            }
        ]
    },
]

export default faqData
