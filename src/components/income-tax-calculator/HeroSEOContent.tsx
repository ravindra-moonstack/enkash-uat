import React from "react"
import DynamicHeading from "@/components/dynamic-heading"
import styles from "@/src/app/income-tax-calculator/income-tax-calculator.module.scss"

const HeroSEOContent: React.FC = () => {
    return (
        <>
            <DynamicHeading
                content={[
                    { title: "ITR Calculator - ", color: "color-black-200", className: "f-7" },
                    { title: " Calculate Your Income Tax for FY 2026-27", color: "color-black-200", className: "f-7" },
                ]}
                headingTag="h1"
            />
            <div className={styles.heroSection}>
                <DynamicHeading content={[{ title: "Calculating income tax in India is complex. You need to consider exemptions, allowances, tax-free components, different tax slabs, and income from multiple sources. If you have not studied taxation, applying the correct slab rates and rules can be difficult.", color: "color-black-200", className: "f-4 opacity-70" }]} headingTag="p" />
                <DynamicHeading content={[{ title: "With the EnKash Income Tax Calculator, you can calculate your income tax easily by entering a few key details. The tool is designed to help you estimate your tax liability based on the latest applicable slab rates in India so that you can plan your finances with more clarity and confidence.", color: "color-black-200", className: "f-4 opacity-70" }]} headingTag="p" />
            </div>

            {[
                {
                    t: "What is the Income Tax Calculator?",
                    p: [
                        "An Income Tax Calculator is a tool designed to help taxpayers in India quickly and accurately calculate their income tax. It estimates your tax liability based on your gross income, eligible exemptions, and deductions as per the Income Tax Act.",
                        "Our income tax calculator is built in line with the provisions of the Income Tax Act, 1961. It allows you to compare and calculate tax under both the new and old tax regimes, helping you choose the best option to plan your finances.",
                        "If you are not familiar with tax sections, deductions, or calculation methods, this tool simplifies the process for you. You only need to enter a few basic details, and the calculator provides a clear approximation of your tax liability.",
                        "The EnKash Income Tax Calculator is updated in line with the Union Budget 2026 and reflects the latest tax rules for FY 2026–27. It is designed to make income tax calculation simple, accurate, and easy to understand for every taxpayer."
                    ]
                },
                {
                    t: "How to Use the EnKash Income Tax Calculator",
                    p: [
                        "Calculating your income tax with EnKash is fast and simple — just follow these steps:",
                        "1. Select your tax regime: New (default) or Old.",
                        "2. Enter your annual salary, other income, and rental income.",
                        [
                            { title: "3. Under the Old Regime, enter deductions: 80C, ", color: "color-black-200" },
                            { title: "HRA", color: "color-black-200 text-decoration-underline", link: "/resources/blog/what-is-hra-in-salary" },
                            { title: ", 80D, home loan interest, NPS, etc.", color: "color-black-200" },
                        ],
                        "4. Click Calculate My Tax to instantly see a detailed breakdown.",
                        "The calculator will display: taxable income, income tax, cess, Gross Salary, net salary income, and Total Tax payable in both regimes."
                    ]
                },
                {
                    t: "Income Tax Calculation Formula",
                    p: [
                        "For salaried individuals under the New Regime:",
                        [
                            { title: "• Taxable Income = ", color: "color-black-200" },
                            { title: "Gross Income ", color: "color-black-200 text-decoration-underline", link: "/resources/blog/what-is-gross-salary" },
                            { title: " - Standard Deduction (₹75,000)", color: "color-black-200" }
                        ],
                        "• Income Tax = Tax as per slab rates on taxable income",
                        "• Total Tax = Tax + Surcharge + 4% Health & Education Cess − Rebate u/s 87A"
                    ]
                }
            ].map((sec, i) => (
                <div key={i} className={styles.heroSection}>
                    <DynamicHeading content={[{ title: sec.t, color: "color-black-200", className: "mb-2" }]} headingTag="h2" />
                    {Array.isArray(sec.p) ? sec.p.map((para: any, pi: number) => (
                        <div key={pi} className="mb-3">
                            {typeof para === "string" ? (
                                <DynamicHeading content={[{ title: para, color: "color-black-200", className: "f-4 opacity-70 " }]} headingTag="p" />
                            ) : (
                                <DynamicHeading content={para} headingTag="p" className="f-4 opacity-70" />
                            )}
                        </div>
                    )) : (
                        <DynamicHeading content={[{ title: sec.p, color: "color-black-200", className: "f-4 opacity-70" }]} headingTag="p" />
                    )}
                </div>
            ))}
        </>
    )
}

export default HeroSEOContent
