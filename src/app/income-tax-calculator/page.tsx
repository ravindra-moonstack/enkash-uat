"use client"

import React, { useState, useCallback, useMemo, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

// Components
import { CustomBreadcrumb, FaqSection } from "@/src/components"
import DynamicHeading from "@/components/dynamic-heading"
import HeroSEOContent from "@/src/components/income-tax-calculator/HeroSEOContent"
import CalculatorForm from "@/src/components/income-tax-calculator/CalculatorForm"
import TaxResultsBreakdown from "@/src/components/income-tax-calculator/TaxResultsBreakdown"
import IncomeTaxSlabTable from "@/src/components/income-tax-calculator/IncomeTaxSlabTable"

// Hooks & Types & Utils
import { useTaxCalculator, computeTax } from "@/hooks/useTaxCalculator"
import { Regime, FY, AgeGroup, SlabRow } from "@/src/types/income-tax"
import { fc, raw } from "@/src/utils/income-tax-utils"
import { faqData } from "./data"
import styles from "./income-tax-calculator.module.scss"

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const NEW_SLAB_ROWS: SlabRow[] = [
    { range: "Up to ₹4,00,000", col1: "NIL", col2: "NIL", col3: "NIL" },
    { range: "₹4,00,001 – ₹8,00,000", col1: "5%", col2: "5%", col3: "5%" },
    { range: "₹8,00,001 – ₹12,00,000", col1: "10%", col2: "10%", col3: "10%" },
    { range: "₹12,00,001 – ₹16,00,000", col1: "15%", col2: "15%", col3: "15%" },
    { range: "₹16,00,001 – ₹20,00,000", col1: "20%", col2: "20%", col3: "20%" },
    { range: "₹20,00,001 – ₹24,00,000", col1: "25%", col2: "25%", col3: "25%" },
    { range: "Above ₹24,00,000", col1: "30%", col2: "30%", col3: "30%" },
];

const OLD_SLAB_ROWS: SlabRow[] = [
    { range: "Up to ₹2,50,000", col1: "NIL", col2: "NIL", col3: "NIL" },
    { range: "₹2,50,001 – ₹3,00,000", col1: "5%", col2: "NIL", col3: "NIL" },
    { range: "₹3,00,001 – ₹5,00,000", col1: "5%", col2: "5%", col3: "NIL" },
    { range: "₹5,00,001 – ₹10,00,000", col1: "20%", col2: "20%", col3: "20%" },
    { range: "Above ₹10,00,000", col1: "30%", col2: "30%", col3: "30%" },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function IncomeTaxCalculatorPage() {
    const { form, regime, age, fy, setRegime, setAge, setFy, handleInputChange, resetForm } = useTaxCalculator()
    const [showResults, setShowResults] = useState(false)
    const [slabTab, setSlabTab] = useState<Regime>("new")
    const resultsRef = useRef<HTMLDivElement>(null)
    const [calcCount, setCalcCount] = useState(0)

    useEffect(() => {
        if (showResults && resultsRef.current) {
            const timer = setTimeout(() => {
                resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [showResults, calcCount])

    const liveResults = useMemo(() => ({
        old: computeTax(form, "old", age),
        new: computeTax(form, "new", age)
    }), [form, age])

    const liveBetter = liveResults.old.total <= liveResults.new.total ? "Old" : "New"
    const liveSavings = Math.abs(liveResults.old.total - liveResults.new.total)

    const handleCalculate = useCallback(() => {
        const totalIncome = raw(form.salary) + raw(form.interestIncome) + raw(form.rentalIncome) + raw(form.digitalAsset)
        if (totalIncome <= 0) {
            alert("Please enter at least one income value.")
            return
        }
        setShowResults(true)
        setCalcCount(prev => prev + 1)
    }, [form])

    const handleReset = useCallback(() => {
        resetForm()
        setShowResults(false)
    }, [resetForm])

    const activeSlabRows = slabTab === "new" ? NEW_SLAB_ROWS : OLD_SLAB_ROWS

    return (
        <div className={styles.page}>
            {/* ─── HERO (contains calculator + results) ─── */}
            <section className={`${styles.hero} ${styles.paddingTop} ${showResults ? styles.heroWithResults : ""}`}>
                {/* <div className={styles.heroBgImage}>
                    <Image src="/images/tax-calc/ifscBg.webp" alt="Background" fill priority className="object-fit-cover" />
                </div> */}

                <div className={`${styles.heroInner} max-w-auto`}>
                    <CustomBreadcrumb
                        linkColor="allBlack"
                        items={[
                            { name: "Home", url: "/" },
                            { name: "Income Tax Calculator", url: "/income-tax-calculator" },
                        ]}
                    />
                    <div className={styles.heroLayout}>
                        <div className={styles.heroLeft}>
                            <HeroSEOContent />
                        </div>

                        <div className={styles.heroRight}>
                            <CalculatorForm
                                form={form}
                                regime={regime}
                                age={age}
                                fy={fy}
                                setRegime={setRegime}
                                setAge={setAge}
                                setFy={setFy}
                                handleInputChange={handleInputChange}
                                handleReset={handleReset}
                                handleCalculate={handleCalculate}
                            />
                        </div>
                    </div>

                    {showResults && (
                        <TaxResultsBreakdown
                            fy={fy}
                            regime={regime}
                            liveResults={liveResults}
                            betterRegime={liveBetter}
                            totalSavings={liveSavings}
                            resultsRef={resultsRef}
                        />
                    )}
                </div>
            </section>

            {/* ─── PAGE CONTENT ─── */}
            <section className={styles.pageContent}>
                <div className={styles.contentWithAside}>
                    <div className={styles.mainContent}>
                        {/* ── Income Tax Slabs ── */}
                        <div id="slabs">
                            <DynamicHeading content={[{ title: `Income Tax Slab Rates in India`, color: "color-main-black", className: "fs-28 mb-4" }]} headingTag="h4" />
                        </div>

                        <DynamicHeading
                            content={[
                                { title: "Income Tax", color: "color-equity-blue text-decoration-underline", link: "/glossary/income-tax" },
                                { title: " Slab Rates for FY 2026-27 under the Old and New Tax regimes are:", color: "color-main-grey" }
                            ]}
                            headingTag="p"
                            className={styles.contentP}
                        />

                        <div className={styles.slabTabBar}>
                            <button className={`${styles.slabTab} ${slabTab === "new" ? styles.slabTabActive : ""}`} onClick={() => setSlabTab("new")}>New Tax Regime</button>
                            <button className={`${styles.slabTab} ${slabTab === "old" ? styles.slabTabActive : ""}`} onClick={() => setSlabTab("old")}>Old Tax Regime</button>
                        </div>

                        <IncomeTaxSlabTable rows={activeSlabRows} />
                        {slabTab === "new" && (
                            <DynamicHeading
                                content={[{ title: "Note: There is NO Tax Liability under the new tax regime for income upto 12 lakhs due to the rebate of 60000 rupees under section 87A. Tax is still calculated as per slabs, but the rebate offsets it fully. This rebate does not apply to income taxed at special rates, such as capital gains or lottery winnings.", color: "color-black-200" }]}
                                headingTag="p"
                                className={styles.slabFootnote}
                            />
                        )}

                        <div id="how-calculated">
                            <DynamicHeading content={[{ title: "How Tax Is Calculated Step by Step", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>
                        <DynamicHeading content={[{ title: "Income tax in India is calculated in a sequence. Here is the basic step-by-step method used for salaried individuals:", color: "color-main-grey" }]} headingTag="p" className={styles.contentP} />
                        {[
                            ["Calculate gross income", "Add salary income, rental income, interest income, and any other taxable income."],
                            ["Subtract eligible deductions", "Under the old tax regime, subtract deductions such as Section 80C, 80D, 80CCD(1B), HRA exemption, and home loan interest, wherever applicable."],
                            ["Apply the standard deduction", "Reduce the applicable standard deduction from salary income."],
                            ["Apply slab rates", "Calculate tax based on the income tax slabs under the selected tax regime."],
                            ["Add surcharge", "If total income crosses the prescribed threshold, add surcharge as applicable."],
                            ["Add Health and Education Cess", "Add 4% cess on the income tax plus surcharge."],
                            ["Apply the rebate under Section 87A", "If your taxable income falls within the eligible limit, reduce tax liability by the applicable rebate."]
                        ].map((step, idx) => (
                            <DynamicHeading
                                key={idx}
                                content={[
                                    { title: `${idx + 1}. ${step[0]}: `, color: "color-main-black", className: "font-weight-bold" },
                                    { title: step[1], color: "color-main-grey" }
                                ]}
                                headingTag="p"
                                className={styles.contentP}
                            />
                        ))}

                        <div id="surcharge">
                            <DynamicHeading content={[{ title: "Surcharge in Income Tax", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>
                        <DynamicHeading content={[{ title: "Surcharge is the extra charge payable on income tax. It is a charge added for taxpayers with high incomes. Surcharge is calculated as a percentage of the income tax that is already payable by the tax assessee. Usually, taxpayers with high incomes are required to pay a surcharge on income tax. If taxpayers cross specific income thresholds, they are liable to pay a surcharge on income tax.", color: "color-main-grey" }]} headingTag="p" className={styles.contentP} />

                        <div id="surcharge-rates">
                            <DynamicHeading content={[{ title: "Surcharge Rates", color: "color-main-black", className: "fs-22 mb-3" }]} headingTag="h5" />
                        </div>
                        <ul className={styles.contentList}>
                            <li><strong>10% of income tax</strong> if total income &gt; ₹50 Lakhs and &lt; ₹1 crore.</li>
                            <li><strong>15% of income tax</strong> if total income &gt; ₹1 Crore and &lt; ₹2 Crore.</li>
                            <li><strong>25% of income tax</strong> if total income &gt; ₹2 crore and &lt; ₹5 Crore.</li>
                            <li><strong>37% of income tax</strong> if income is more than ₹5 crores.</li>
                        </ul>
                        <DynamicHeading content={[{ title: "Note: The highest surcharge rate is 25% under the New Tax regime, and additionally, 4% of health and education cess is added in income tax liability of the taxpayer.", color: "color-black-200" }]} headingTag="p" className={styles.slabFootnote} />

                        <div id="rebate">
                            <DynamicHeading content={[{ title: "Rebate under Income Tax in India (Rebate u/s 87A)", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>
                        <DynamicHeading content={[{ title: "When a taxpayer’s total taxable income falls within the prescribed limit, they can claim a rebate under Section 87A to reduce their tax liability to zero. Under the new tax regime, the rebate has been increased to ₹60,000. For FY 2026–27, the applicable rebate limits are as follows:", color: "color-main-grey" }]} headingTag="p" className={styles.contentP} />
                        <div className={styles.tblWrap} style={{ maxWidth: '500px' }}>
                            <table style={{ minWidth: "300px" }}>
                                <thead>
                                    <tr>
                                        <th>Regime</th>
                                        <th>Limit (Rs.)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>Old Regime</strong></td><td>5 lakhs</td></tr>
                                    <tr><td><strong>New Regime</strong></td><td>12 lakhs*</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div id="comparison">
                            <DynamicHeading content={[{ title: "Old Tax Regime Vs New Tax Regime", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>
                        <DynamicHeading content={[{ title: "The choice between Old and New regimes depends on how much you claim in deductions. If your total deductions exceed ~₹3.75 lakh, the old regime generally saves more. Our calculator shows you the exact difference for your numbers.", color: "color-main-grey" }]} headingTag="p" className={styles.contentP} />
                        <div className={styles.tblWrap}>
                            <table>
                                <thead>
                                    <tr><th>Feature</th><th>Old Tax Regime</th><th>New Tax Regime (Default)</th></tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Standard Deduction", "₹50,000", "₹75,000"],
                                        ["Basic Exemption Limit", "₹2.5L / ₹3L / ₹5L (age-based)", "₹3,00,000 for all ages"],
                                        ["Section 87A Rebate", "₹12,500 for income ≤ ₹5L", "₹60,000 for income ≤ ₹12L"],
                                        ["Section 80C Deductions", "Up to ₹1.5L", "Not available"],
                                        ["HRA Exemption", "Available", "Not available"],
                                        ["Section 80D (Health Ins.)", "₹50,000", "Not available"],
                                        ["NPS Extra 80CCD(1B)", "₹50,000 additional", "Not available"],
                                        ["Home Loan Interest (24b)", "Up to ₹2,00,000", "Not available"],
                                        ["Max Surcharge Rate", "37% (income above ₹5 crore)", "25% (Capped)"],
                                        ["Best Suited For", "Those claiming high deductions", "Simpler filing, lower investments"],
                                    ].map((row, i) => (
                                        <tr key={i}><td><strong>{row[0]}</strong></td><td>{row[1]}</td><td>{row[2]}</td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div id="how-to-calculate" style={{ marginBottom: "10px" }}>
                            <DynamicHeading content={[{ title: "How to Calculate Income Tax of a Salaried Person?", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>
                        <div className="mb-4">
                            <DynamicHeading content={[{ title: "Old Regime", color: "color-main-black", className: "fs-22 mb-3" }]} headingTag="h5" />
                            <div className={styles.contentImgWrap}>
                                <Image src="/images/tax-calc/old-tax-regime-calc.webp" alt="How to calculate income tax under the Old Regime" width={900} height={500} className={styles.contentImg} />
                            </div>
                        </div>
                        <div className="mb-5">
                            <DynamicHeading content={[{ title: "New Regime", color: "color-main-black", className: "fs-22 mb-3" }]} headingTag="h5" />
                            <div className={styles.contentImgWrap}>
                                <Image src="/images/tax-calc/new-tax-regime-calc.webp" alt="How to calculate income tax under the New Regime" width={900} height={500} className={styles.contentImg} />
                            </div>
                        </div>

                        <div id="benefits">
                            <DynamicHeading content={[{ title: "What are the Benefits of using the Income Tax calculator?", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>
                        <DynamicHeading content={[{ title: "Key benefits of using the EnKash Income Tax Calculator include:", color: "color-main-grey" }]} headingTag="p" className={styles.contentP} />
                        <ol className={styles.contentList}>
                            <li><strong>Accuracy</strong>: The Income Tax calculator gives you accurate information about your tax liability.</li>
                            <li><strong>Regime Comparison</strong>: You can easily compare the tax liability under the old tax regime and the New Tax regime, which will help you to make an informed decision.</li>
                            <li><strong>Tax Planning</strong>: This calculator helps you to plan your investments accordingly.</li>
                            <li><strong>Fast and Simplified</strong>: The income tax calculator helps you calculate your tax quickly and accurately.</li>
                            <li><strong>User-friendly</strong>: It has a user-friendly interface that allows taxpayers to calculate their tax liability easily.</li>
                        </ol>

                        <div id="exemptions">
                            <DynamicHeading content={[{ title: "Income Sources Exempted Under the New Tax Regime", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>
                        <DynamicHeading content={[{ title: "While calculating the income tax, there are several income sources that are exempted i.e., income from these sources is tax-free, you can claim exemptions on this income. It provides relief to the taxpayers.", color: "color-main-grey" }]} headingTag="p" className={styles.contentP} />
                        <DynamicHeading content={[{ title: "Some key Exempted income sources are:", color: "color-main-grey" }]} headingTag="p" className={styles.contentP} />
                        <ol className={styles.contentList}>
                            <li><strong>Agriculture Income</strong>: Agriculture income is fully exempted in India under section 10(1) of the Income Tax Act.</li>
                            <li><strong>Gratuity</strong>: Gratuity is tax-exempt under section 10(10) of the Income Tax Act, up to the maximum amount of 20 Lakhs for private employees and is completely exempted for Government employees.</li>
                            <li><strong>Provident Fund Withdrawal</strong>: Provident Fund withdrawal is generally tax-free if you have completed five continuous years of service.</li>
                            <li><strong><Link href="/resources/blog/what-is-leave-encashment" className="color-equity-blue text-decoration-underline">Leave Encashment</Link></strong>: For Government employees, leave encashment is fully exempted, whereas for non-government employees it is exempted up to lifetime limit of 25 lakh, under section 10(10AA) of the Income Tax Act.</li>
                            <li><strong>Compensation for Natural Calamities</strong>: Compensation for natural calamities from the government authorities is fully exempted under Section 10(10BC) of the Income Tax Act.</li>
                            <li><strong>Income from Minor Child</strong>: Income from a minor child is clubbed with the income of the parent, but parents can claim the exemption up to ₹1,500 in a financial year under section 10(32) of the Income Tax Act.</li>
                            <li><strong>Tax-free bonds</strong>: Interest earned from a special tax-free bond is exempted.</li>
                        </ol>

                        <div id="deductions">
                            <DynamicHeading content={[{ title: "Deductions Under the Old Tax Regime", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>
                        <DynamicHeading content={[{ title: "The old regime allows several deductions that can significantly reduce your taxable income. These deductions are:", color: "color-main-grey" }]} headingTag="p" className={styles.contentP} />
                        <div className={styles.tblWrap}>
                            <table>
                                <thead>
                                    <tr><th>Section</th><th>Deduction Type</th><th>Maximum Limit</th><th>Examples</th></tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["80C", "Tax-Saving Investments", "₹1,50,000", "PPF, ELSS, LIC, EPF, NSC, 5-yr FD, Home Loan Principal"],
                                        ["80CCD(1B)", "Additional NPS Contribution", "₹50,000", "Over and above the ₹1.5L limit under 80C"],
                                        ["80D", "Health Insurance Premium", "₹50,000", "Medical insurance for self, family, and parents"],
                                        ["24(b)", "Home Loan Interest", "₹2,00,000", "Interest on loan for self-occupied property"],
                                        ["10(13A)", "HRA Exemption", "Calculated", "Actual HRA or 40–50% of basic (metro vs non-metro)"],
                                        ["80E", "Education Loan Interest", "No upper limit", "Interest on higher education loan (max 8 years)"],
                                        ["80G", "Donations to Charity", "50–100% of donation", "PM Relief Fund, NGOs, charitable institutions"],
                                        ["80TTA", "Savings Account Interest", "₹10,000", "Interest income from savings bank accounts"],
                                    ].map((row, i) => (
                                        <tr key={i}><td><strong>{row[0]}</strong></td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <FaqSection faqData={faqData} />
                    </div>
                </div>
            </section>
        </div>
    )
}