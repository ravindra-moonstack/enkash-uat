import { TFAQProps } from "@/src/types/faq"

export const faqData: TFAQProps[] = [
    {
        question: "What is income tax?",
        answer: [
            {
                heading:
                    "Income tax is a direct tax collected by the Government of India on the income earned by individuals and businesses during a financial year. It is charged based on applicable tax slabs and provisions under the Income Tax Act, 1961.",
            },
        ],
    },
    {
        question: "What is an income tax return?",
        answer: [
            {
                heading:
                    "An income tax return (ITR) is a form filed with the Income Tax Department where a taxpayer reports income, deductions, and tax paid for a financial year. It is used to calculate final tax liability or claim a tax refund.",
            },
        ],
    },
    {
        question: "How is income tax calculated?",
        answer: [
            {
                heading:
                    "Income tax is calculated by determining total taxable income after exemptions and deductions, applying the relevant tax slab rates, adjusting for rebates if eligible, and adding surcharge and 4% cess if applicable.",
            },
        ],
    },
    {
        question: "What is a rebate in income tax?",
        answer: [
            {
                heading:
                    "A rebate is a reduction in the total tax payable, available under Section 87A for eligible taxpayers whose income falls within specified limits, allowing their final tax liability to be reduced or become zero.",
            },
        ],
    },
    {
        question: "How much income is tax-free?",
        answer: [
            {
                heading:
                    "Under the new tax regime, income up to ₹12 lakh can result in zero tax liability due to the Section 87A rebate of up to ₹60,000, excluding income taxed at special rates. Under the old regime, income up to ₹5 lakh can be tax-free after rebate.",
            },
        ],
    },
    {
        question: "What is a surcharge in income tax?",
        answer: [
            {
                heading:
                    "Surcharge is an additional charge on the income tax payable by individuals whose income exceeds specified thresholds. It is calculated as a percentage of the tax amount, not on total income.",
            },
        ],
    },
    {
        question: "What is marginal relief in income tax?",
        answer: [
            {
                heading:
                    "Marginal relief ensures that the additional tax payable due to surcharge does not exceed the amount by which income exceeds the surcharge threshold. It prevents a sudden increase in tax liability.",
            },
        ],
    },
    {
        question: "What is Section 87A in income tax?",
        answer: [
            {
                heading:
                    "Section 87A provides a tax rebate to resident individuals whose income is within prescribed limits. Under the new regime, it allows a rebate of up to ₹60,000, reducing tax liability to zero within eligible income levels.",
            },
        ],
    },
]

export const NEW_SLABS = [
    { min: 0, max: 400000, rate: 0 },
    { min: 400000, max: 800000, rate: 5 },
    { min: 800000, max: 1200000, rate: 10 },
    { min: 1200000, max: 1600000, rate: 15 },
    { min: 1600000, max: 2000000, rate: 20 },
    { min: 2000000, max: 2400000, rate: 25 },
    { min: 2400000, max: Infinity, rate: 30 },
]
