"use client"

import React, { useState, useCallback, useMemo, useRef, useEffect } from "react"

import DynamicHeading from "@/components/dynamic-heading"
import CommonButton from "@/components/buttons"
import styles from "./income-tax-calculator.module.scss"
import { useTaxCalculator, computeTax, Regime, FY, AgeGroup } from "@/hooks/useTaxCalculator"
import { faqData } from "./data"
import Link from "next/link"
import Image from "next/image"
import { CustomBreadcrumb, FaqSection } from "@/src/components"
import { TaxInput, RecommendedBox } from "@/src/components/tax-calculator-components"


// ─── UTILS ────────────────────────────────────────────────────────────────────
const fmtInd = (num: number): string => {
    const n = Math.round(Math.abs(num))
    const s = n.toString()
    if (s.length <= 3) return (num < 0 ? "-" : "") + s
    const last3 = s.slice(-3)
    const rest = s.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ",")
    return (num < 0 ? "-" : "") + rest + "," + last3
}

const fc = (num: number): string => (isNaN(num) ? "₹0" : "₹" + fmtInd(Math.round(num)))

const raw = (val: string): number => parseInt(val.replace(/[^0-9]/g, ""), 10) || 0





// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function IncomeTaxCalculatorPage() {
    const { form, regime, age, fy, setRegime, setAge, setFy, handleInputChange, resetForm } = useTaxCalculator()
    const [showResults, setShowResults] = useState(false)
    const [slabTab, setSlabTab] = useState<"new" | "old">("new")
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

    const betterRegime = liveBetter

    const totalSavings = liveSavings

    // Slab table data — 3 age-group columns matching design
    // New Regime: same rates for all ages
    const newSlabRows = [
        { range: "Up to ₹2,50,000", col1: "NIL", col2: "NIL", col3: "NIL" },
        { range: "₹2,50,001 – ₹3,00,000", col1: "NIL", col2: "NIL", col3: "NIL" },
        { range: "₹3,00,001 – ₹7,00,000", col1: "5%", col2: "5%", col3: "5%" },
        { range: "₹7,00,001 – ₹10,00,000", col1: "10%", col2: "10%", col3: "10%" },
        { range: "₹10,00,001 – ₹12,00,000", col1: "15%", col2: "15%", col3: "15%" },
        { range: "₹12,00,001 – ₹15,00,000", col1: "20%", col2: "20%", col3: "20%" },
        { range: "Above ₹15,00,000", col1: "30%", col2: "30%", col3: "30%" },
    ]

    // Old Regime: varies by age group
    const oldSlabRows = [
        { range: "Up to ₹2,50,000", col1: "NIL", col2: "NIL", col3: "NIL" },
        { range: "₹2,50,001 – ₹3,00,000", col1: "5%", col2: "NIL", col3: "NIL" },
        { range: "₹3,00,001 – ₹5,00,000", col1: "5%", col2: "5%", col3: "NIL" },
        { range: "₹5,00,001 – ₹10,00,000", col1: "20%", col2: "20%", col3: "20%" },
        { range: "Above ₹10,00,000", col1: "30%", col2: "30%", col3: "30%" },
    ]

    const rateChipClass = (rate: string) => {
        if (rate === "NIL") return styles.chipNil
        if (rate === "5%") return styles.chip5
        if (rate === "10%") return styles.chip10
        if (rate === "15%") return styles.chip15
        if (rate === "20%") return styles.chip20
        if (rate === "25%") return styles.chip25
        return styles.chip30
    }

    const activeSlabRows: Array<{ range: string; col1: string; col2: string; col3: string }> =
        slabTab === "new" ? newSlabRows : oldSlabRows

    return (
        <div className={`${styles.page} `}>
            {/* ─── HERO (contains calculator + results) ─── */}
            <section className={`${styles.hero} ${styles.paddingTop}  ${showResults ? styles.heroWithResults : ""}`}>
                <div className={styles.heroBgOverlay} />
                <div className={styles.heroGrid} />
                <div className={`${styles.heroInner} max-w-auto`}>
                    <CustomBreadcrumb
                        linkColor="allWhite" items={[
                            { name: "Home", url: "/" },
                            {
                                name: "Income Tax Calculator",
                                url: "/income-tax-calculator",
                            },

                        ]} />
                    <div className={styles.heroLayout}>
                        <div className={styles.heroLeft}>
                            <DynamicHeading
                                content={[
                                    { title: "Free Income Tax Calculator.", color: "color-white", className: "f-7" },
                                    { title: " Calculate Income Tax Online Instantly", color: "color-white", className: "f-7" },
                                ]}
                                headingTag="h1"
                            />
                            <div className={styles.heroSection}>
                                <DynamicHeading content={[{ title: "Calculating income tax in India is complex. You need to consider exemptions, allowances, tax-free components, different tax slabs, and income from multiple sources. If you have not studied taxation, applying the correct slab rates and rules can be difficult.", color: "color-white", className: "f-4 opacity-70" }]} headingTag="p" />
                                <DynamicHeading content={[{ title: "With the EnKash Income Tax Calculator, you can calculate your income tax easily by entering a few key details. The tool is designed to help you estimate your tax liability based on the latest applicable slab rates in India so that you can plan your finances with more clarity and confidence.", color: "color-white", className: "f-4 opacity-70" }]} headingTag="p" />
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
                                            { title: "3. Under the Old Regime, enter deductions: 80C, ", color: "color-white" },
                                            { title: "HRA", color: "color-white text-decoration-underline", link: "/resources/blog/what-is-hra-in-salary" },
                                            { title: ", 80D, home loan interest, NPS, etc.", color: "color-white" },
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
                                            { title: "• Taxable Income = ", color: "color-white" },
                                            { title: "Gross Income ", color: "color-white text-decoration-underline", link: "/resources/blog/what-is-gross-salary" },
                                            { title: " - Standard Deduction (₹75,000)", color: "color-white" }
                                        ],

                                        "• Income Tax = Tax as per slab rates on taxable income",
                                        "• Total Tax = Tax + Surcharge + 4% Health & Education Cess − Rebate u/s 87A"
                                    ]
                                }
                            ]
                                .map((sec, i) => (
                                    <div key={i} className={styles.heroSection}>
                                        <DynamicHeading content={[{ title: sec.t, color: "color-white", className: "fs-22 mb-2" }]} headingTag="h5" />
                                        {Array.isArray(sec.p) ? sec.p.map((para: any, pi: number) => (
                                            <div key={pi} className="mb-3">
                                                {typeof para === "string" ? (
                                                    <DynamicHeading content={[{ title: para, color: "color-white", className: "f-4 opacity-70" }]} headingTag="p" />
                                                ) : (
                                                    <DynamicHeading content={para} headingTag="p" className="f-4 opacity-70" />
                                                )}
                                            </div>
                                        )) : (
                                            <DynamicHeading content={[{ title: sec.p, color: "color-white", className: "f-4 opacity-70" }]} headingTag="p" />
                                        )}
                                    </div>
                                ))}
                        </div>

                        <div className={styles.heroRight}>
                            <div className={styles.calcCard}>
                                <div className={styles.calcCardHead}>
                                    <DynamicHeading content={[{ title: `Income Tax Calculator — FY ${fy}`, color: "color-white", className: "fs-24" }]} headingTag="h5" />
                                    <p>AY {fy === "2026-27" ? "2027-28" : "2026-27"} · Updated with Union Budget 2026</p>
                                </div>
                                <div className={styles.calcCardBody}>
                                    <div className={styles.regimeToggle}>
                                        {(["new", "old"] as Regime[]).map(r => (
                                            <button key={r} className={`${styles.regimeBtn} ${regime === r ? styles.regimeBtnActive : ""}`} onClick={() => setRegime(r)}>
                                                {r === "new" ? "New Regime" : "Old Regime"}
                                            </button>
                                        ))}
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Financial Year</label>
                                            <div className={styles.pillGroup}>
                                                {["2026-27", "2025-26"].map(f => (
                                                    <button key={f} className={`${styles.pill} ${fy === f ? styles.pillActive : ""}`} onClick={() => setFy(f as FY)}>FY {f}</button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Age Group</label>
                                            <div className={styles.pillGroup}>
                                                {["0-60", "60-80", "80+"].map(a => (
                                                    <button key={a} className={`${styles.pill} ${age === a ? styles.pillActive : ""}`} onClick={() => setAge(a as AgeGroup)}>{a === "0-60" ? "Below 60" : a}</button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.sectionDivider}><span>Income from Salary</span></div>
                                    <TaxInput label="Annual Salary / CTC (Gross)" value={form.salary} onChange={(v) => handleInputChange("salary", v)} placeholder="15,00,000" />
                                    {regime === "old" && <TaxInput label="Exempt Allowances" hint="HRA + LTA exempted portion" value={form.exemptAllowances} onChange={(v) => handleInputChange("exemptAllowances", v)} placeholder="2,40,000" />}
                                    <div className={styles.infoBlue}>Auto-applied: Standard Deduction of <strong>₹{regime === "new" ? "75,000 (New Regime)" : "50,000 (Old Regime)"}</strong></div>

                                    <div className={styles.sectionDivider}><span>Income from Other Sources</span></div>
                                    <div className={styles.formRow}>
                                        <TaxInput label="Interest Income" hint="FD, Savings" value={form.interestIncome} onChange={(v) => handleInputChange("interestIncome", v)} placeholder="50,000" />
                                        <TaxInput label="Rental Income" value={form.rentalIncome} onChange={(v) => handleInputChange("rentalIncome", v)} />
                                    </div>

                                    <div className={styles.formRow}>
                                        <TaxInput label="Home Loan Int. (Let-out)" value={form.hlRented} onChange={(v) => handleInputChange("hlRented", v)} />
                                        <TaxInput label="Home Loan Int." hint="Self, Max ₹2L" value={form.hlSelf} onChange={(v) => handleInputChange("hlSelf", v)} />
                                    </div>

                                    <TaxInput label="Digital Asset Income (Crypto/VDA)" hint="Net of cost" value={form.digitalAsset} onChange={(v) => handleInputChange("digitalAsset", v)} />

                                    {regime === "old" && (
                                        <>
                                            <div className={styles.sectionDivider}><span>Deductions & Exemptions — Old Regime</span></div>
                                            <div className={styles.infoOrange}>Tip: Maximize deductions below to reduce your taxable income. These are <strong>not available</strong> in the New Regime.</div>
                                            <div className={styles.formRow}>
                                                <TaxInput label="Section 80C" hint="Max ₹25K" value={form.s80C} onChange={(v) => handleInputChange("s80C", v)} />

                                                <TaxInput label="Section 80D" hint="Medical, Max ₹1L" value={form.s80D} onChange={(v) => handleInputChange("s80D", v)} />
                                            </div>
                                            <div className={styles.formRow}>
                                                <TaxInput label="Section 80G — Donations" value={form.s80G} onChange={(v) => handleInputChange("s80G", v)} />
                                                <TaxInput label="Section 80E — Edu. Loan" value={form.s80E} onChange={(v) => handleInputChange("s80E", v)} />
                                            </div>
                                            <div className={styles.formRow}>
                                                <TaxInput label="Section 80TTA" hint="Max ₹10K" value={form.s80TTA} onChange={(v) => handleInputChange("s80TTA", v)} />
                                                <TaxInput label="80CCD — NPS (Employer)" value={form.s80CCD_old} onChange={(v) => handleInputChange("s80CCD_old", v)} />
                                            </div>
                                            <TaxInput label="Other Deductions" hint="80CCD(1B), 80EEA, etc." value={form.otherDed} onChange={(v) => handleInputChange("otherDed", v)} />
                                        </>
                                    )}

                                    {regime === "new" && (
                                        <>
                                            <div className={styles.sectionDivider}><span>Allowed Deductions — New Regime</span></div>
                                            <div className={styles.infoTeal}>New Regime: Most deductions like 80C, 80D, HRA exemption are <strong>not allowed</strong>. Only employer NPS contribution under 80CCD(2) applies.</div>
                                            <TaxInput label="Employer NPS — 80CCD(2)" hint="Up to 14% of basic" value={form.s80CCD_new} onChange={(v) => handleInputChange("s80CCD_new", v)} />
                                        </>
                                    )}

                                    <div className={styles.btnRow}>
                                        <CommonButton title="Reset" theme="border-gray" url={handleReset} width="110px" className="justify-content-center" />
                                        <CommonButton title="Calculate My Tax" theme="blue" url={handleCalculate} width="100%" className="justify-content-center" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {showResults && (
                        <div className={styles.heroResults} ref={resultsRef}>
                            <div className={styles.heroResultsHead}>
                                <DynamicHeading content={[{ title: "Your Tax Breakdown", color: "color-white", className: "f-7" }]} headingTag="h2" />
                                <p className={styles.heroResultsSubtitle}>Calculated for FY {fy} · {regime === "new" ? "New" : "Old"} Tax Regime selected</p>
                            </div>

                            <RecommendedBox
                                winner={betterRegime}
                                oldTax={fc(liveResults.old.total)}
                                newTax={fc(liveResults.new.total)}
                                savings={fc(totalSavings)}
                            />

                            <div className={styles.regimeGrid}>
                                {(["old", "new"] as Regime[]).map(r => {
                                    const res = liveResults[r]
                                    const isW = betterRegime.toLowerCase() === r
                                    return (
                                        <div key={r} className={`${styles.regimeCard} ${isW ? styles.regimeCardWinner : ""}`}>
                                            {isW && <div className={styles.winnerBadge}>Better</div>}
                                            <div className={styles.regimeCardHead}>
                                                <div className={styles.regimeCardLabel}>{r === "old" ? "Old" : "New"} Tax Regime</div>
                                                <div className={styles.regimeCardTotal}>{fc(res.total)}</div>
                                            </div>
                                            <div className={styles.regimeCardBody}>
                                                {[
                                                    { l: "Gross Salary", v: fc(res.nSal + res.sd) },
                                                    { l: `Std. Deduction (${r === "new" ? "₹75K" : "₹50K"})`, v: `- ${fc(res.sd)}`, neg: true },
                                                    { l: "Net Salary Income", v: fc(res.nSal), bold: true },
                                                    { l: "Gross Total Income", v: fc(res.gtiN) },
                                                    ...(res.ded > 0 ? [{ l: r === "old" ? "Total Deductions (80C, 80D…)" : "Deduction 80CCD(2)", v: `– ${fc(res.ded)}`, neg: true }] : []),
                                                    { l: "Taxable Income", v: fc(res.taxable), bold: true },
                                                    { l: "Tax on Income", v: fc(res.taxBefore) },
                                                    ...(res.rebate > 0 ? [{ l: "Rebate u/s 87A", v: `– ${fc(res.rebate)}`, neg: true }] : []),
                                                    ...(res.sc > 0 ? [{ l: "Surcharge", v: `+ ${fc(res.sc)}` }] : []),
                                                    { l: "Health & Edu. Cess (4%)", v: `+ ${fc(res.cess)}` },
                                                    { l: "Total Tax Payable", v: fc(res.total), highlight: true }
                                                ].map((row, i) => (
                                                    <div key={i} className={`${styles.bdRow} ${row.bold ? styles.bdRowBold : ""} ${row.highlight ? styles.bdRowHighlight : ""}`}>
                                                        <span className={styles.bdRowLabel}>{row.l}</span>
                                                        <span className={`${styles.bdRowValue} ${row.neg ? styles.bdRowNeg : ""}`}>{row.v}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* <div className={styles.resultActions}>
                                <CommonButton title="Recalculate" theme="border-gray" url={() => setShowResults(false)} />
                                <CommonButton title="Print / Save" theme="blue" url={() => window.print()} />
                            </div> */}

                            <p className={styles.disclaimer}>
                                <strong>Disclaimer:</strong> Estimated tax per IT Act 1961 & Budget 2026. Surcharge applies above ₹50L. Rebate 87A: ₹60K (New, ≤₹12L) / ₹12.5K (Old, ≤₹5L). Consult a tax professional. Not financial/legal advice.
                            </p>
                        </div>
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

                        <p className={styles.contentP}>
                            <Link href="/glossary/income-tax" className="color-equity-blue text-decoration-underline">Income Tax</Link> Slab Rates for FY 2026-27 under the Old and New Tax regimes are:
                        </p>


                        <div className={styles.slabTabBar}>
                            <button
                                className={`${styles.slabTab} ${slabTab === "new" ? styles.slabTabActive : ""}`}
                                onClick={() => setSlabTab("new")}
                            >
                                New Tax Regime
                            </button>
                            <button
                                className={`${styles.slabTab} ${slabTab === "old" ? styles.slabTabActive : ""}`}
                                onClick={() => setSlabTab("old")}
                            >
                                Old Tax Regime
                            </button>
                        </div>

                        <div className={styles.tblWrap}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Annual Income Slab</th>
                                        <th>Below 60 years</th>
                                        <th>60-80 years (Senior)</th>
                                        <th>Above 80 years (Super Senior)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeSlabRows.map((row, i) => (
                                        <tr key={i}>
                                            <td>{row.range}</td>
                                            <td><span className={`${styles.chip} ${rateChipClass(row.col1)}`}>{row.col1}</span></td>
                                            <td><span className={`${styles.chip} ${rateChipClass(row.col2)}`}>{row.col2}</span></td>
                                            <td><span className={`${styles.chip} ${rateChipClass(row.col3)}`}>{row.col3}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {slabTab === "new" && (
                            <p className={styles.slabFootnote}>
                                Note: There is NO Tax Liability under the new tax regime for income upto 12 lakhs due to the rebate of 60000 rupees under section 87A. Tax is still calculated as per slabs, but the rebate offsets it fully. This rebate does not apply to income taxed at special rates, such as capital gains or lottery winnings.
                            </p>
                        )}

                        <div id="how-calculated">
                            <DynamicHeading content={[{ title: "How Tax Is Calculated Step by Step", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>
                        <p className={styles.contentP}>
                            Income tax in India is calculated in a sequence. Here is the basic step-by-step method used for salaried individuals:
                        </p>
                        {[
                            ["Calculate gross income", "Add salary income, rental income, interest income, and any other taxable income."],
                            ["Subtract eligible deductions", "Under the old tax regime, subtract deductions such as Section 80C, 80D, 80CCD(1B), HRA exemption, and home loan interest, wherever applicable."],
                            ["Apply the standard deduction", "Reduce the applicable standard deduction from salary income."],
                            ["Apply slab rates", "Calculate tax based on the income tax slabs under the selected tax regime."],
                            ["Add surcharge", "If total income crosses the prescribed threshold, add surcharge as applicable."],
                            ["Add Health and Education Cess", "Add 4% cess on the income tax plus surcharge."],
                            ["Apply the rebate under Section 87A", "If your taxable income falls within the eligible limit, reduce tax liability by the applicable rebate."]
                        ].map((step, idx) => (
                            <p key={idx} className={styles.contentP}>
                                <strong>{idx + 1}. {step[0]}</strong>: {step[1]}
                            </p>
                        ))}

                        <div id="surcharge">
                            <DynamicHeading content={[{ title: "Surcharge in Income Tax", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>
                        <p className={styles.contentP}>
                            Surcharge is the extra charge payable on income tax. It is a charge added for taxpayers with high incomes. Surcharge is calculated as a percentage of the income tax that is already payable by the tax assessee. Usually, taxpayers with high incomes are required to pay a surcharge on income tax. If taxpayers cross specific income thresholds, they are liable to pay a surcharge on income tax.
                        </p>

                        <div id="surcharge-rates">
                            <DynamicHeading content={[{ title: "Surcharge Rates", color: "color-main-black", className: "fs-22 mb-3" }]} headingTag="h5" />
                        </div>
                        <ul className={styles.contentList}>
                            <li><strong>10% of income tax</strong> if total income &gt; ₹50 Lakhs and &lt; ₹1 crore.</li>
                            <li><strong>15% of income tax</strong> if total income &gt; ₹1 Crore and &lt; ₹2 Crore.</li>
                            <li><strong>25% of income tax</strong> if total income &gt; ₹2 crore and &lt; ₹5 Crore.</li>
                            <li><strong>37% of income tax</strong> if income is more than ₹5 crores.</li>
                        </ul>

                        <p className={styles.slabFootnote}>
                            Note: The highest surcharge rate is 25% under the New Tax regime, and additionally, 4% of health and education cess is added in income tax liability of the taxpayer.
                        </p>

                        <div id="rebate">
                            <DynamicHeading content={[{ title: "Rebate under Income Tax in India (Rebate u/s 87A)", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>
                        <p className={styles.contentP}>
                            When a taxpayer’s total taxable income falls within the prescribed limit, they can claim a rebate under Section 87A to reduce their tax liability to zero. Under the new tax regime, the rebate has been increased to ₹60,000. For FY 2026–27, the applicable rebate limits are as follows:
                        </p>
                        <div className={styles.tblWrap} style={{ maxWidth: '500px' }}>
                            <table style={{ minWidth: "300px" }}>
                                <thead>
                                    <tr>
                                        <th>Regime</th>
                                        <th>Limit (Rs.)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Old Regime</strong></td>
                                        <td>5 lakhs</td>
                                    </tr>
                                    <tr>
                                        <td><strong>New Regime</strong></td>
                                        <td>12 lakhs*</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ── Old Tax Regime vs New Tax Regime ── */}
                        <div id="comparison">
                            <DynamicHeading content={[{ title: "Old Tax Regime Vs New Tax Regime", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>

                        <p className={styles.contentP}>
                            The choice between Old and New regimes depends on how much you claim in deductions. If your total deductions exceed ~₹3.75 lakh, the old regime generally saves more. Our calculator shows you the exact difference for your numbers.
                        </p>
                        <div className={styles.tblWrap}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Old Tax Regime</th>
                                        <th>New Tax Regime (Default)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Standard Deduction", "₹50,000", "₹75,000"],
                                        ["Basic Exemption Limit", "₹2.5L / ₹3L / ₹5L (age-based)", "₹3,00,000 for all ages"],
                                        ["Section 87A Rebate", "₹12,500 for income ≤ ₹5L", "₹60,000 for income ≤ ₹12L"],
                                        ["Section 80C Deductions", "Up to ₹25,000", "Not available"],

                                        ["HRA Exemption", "Available", "Not available"],
                                        ["Section 80D (Health Ins.)", "₹25,000–₹50,000", "Not available"],
                                        ["NPS Extra 80CCD(1B)", "₹50,000 additional", "Not available"],
                                        ["Home Loan Interest (24b)", "Up to ₹2,00,000", "Not available"],
                                        ["Max Surcharge Rate", "37% (income above ₹5 crore)", "25% (Capped)"],
                                        ["Best Suited For", "Those claiming high deductions", "Simpler filing, lower investments"],
                                    ].map((row, i) => (
                                        <tr key={i}>
                                            <td><strong>{row[0]}</strong></td>
                                            <td>{row[1]}</td>
                                            <td>{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>



                        <div id="how-to-calculate">
                            <DynamicHeading content={[{ title: "How to Calculate Income Tax of a Salaried Person?", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>
                        <div className="mb-4">
                            <DynamicHeading content={[{ title: "Old Regime", color: "color-main-black", className: "fs-22 mb-3" }]} headingTag="h5" />
                            <div className={styles.contentImgWrap}>
                                <Image
                                    src="/images/tax-calc/old-tax-regime-calc.webp"
                                    alt="How to calculate income tax under the Old Regime"
                                    width={900}
                                    height={500}
                                    className={styles.contentImg}
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <DynamicHeading content={[{ title: "New Regime", color: "color-main-black", className: "fs-22 mb-3" }]} headingTag="h5" />
                            <div className={styles.contentImgWrap}>
                                <Image
                                    src="/images/tax-calc/new-tax-regime-calc.webp"
                                    alt="How to calculate income tax under the New Regime"
                                    width={900}
                                    height={500}
                                    className={styles.contentImg}
                                />
                            </div>
                        </div>


                        <div id="benefits">
                            <DynamicHeading content={[{ title: "What are the Benefits of using the Income Tax calculator?", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>
                        <p className={styles.contentP}>Key benefits of using the EnKash Income Tax Calculator include:</p>
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
                        <p className={styles.contentP}>
                            While calculating the income tax, there are several income sources that are exempted i.e., income from these sources is tax-free, you can claim exemptions on this income. It provides relief to the taxpayers.
                        </p>

                        <p className={styles.contentP}>Some key Exempted income sources are:</p>
                        <ol className={styles.contentList}>
                            <li><strong>Agriculture Income</strong>: Agriculture income is fully exempted in India under section 10(1) of the Income Tax Act.</li>
                            <li><strong>Gratuity</strong>: Gratuity is tax-exempt under section 10(10) of the Income Tax Act, up to the maximum amount of 20 Lakhs for private employees and is completely exempted for Government employees.</li>
                            <li><strong>Provident Fund Withdrawal</strong>: Provident Fund withdrawal is generally tax-free if you have completed five continuous years of service.</li>
                            <li>
                                <strong>
                                    <Link href="/resources/blog/what-is-leave-encashment" className="color-equity-blue text-decoration-underline">Leave Encashment</Link>
                                </strong>: For Government employees, leave encashment is fully exempted, whereas for non-government employees it is exempted up to lifetime limit of 25 lakh, under section 10(10AA) of the Income Tax Act.
                            </li>
                            <li><strong>Compensation for Natural Calamities</strong>: Compensation for natural calamities from the government authorities is fully exempted under Section 10(10BC) of the Income Tax Act. It covers the compensation for loss of property or life in natural disasters like floods, landslides, earthquakes, Cyclones etc.</li>
                            <li><strong>Income from Minor Child</strong>: Income from a minor child is clubbed with the income of the parent, but parents can claim the exemption up to ₹1,500 in a financial year under section 10(32) of the Income Tax Act.</li>
                            <li><strong>Tax-free bonds</strong>: Interest earned from a special tax-free bond is exempted.</li>
                        </ol>

                        <div id="deductions">
                            <DynamicHeading content={[{ title: "Deductions Under the Old Tax Regime", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>

                        <p className={styles.contentP}>
                            The old regime allows several deductions that can significantly reduce your taxable income. These deductions are:
                        </p>
                        <div className={styles.tblWrap}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Section</th>
                                        <th>Deduction Type</th>
                                        <th>Maximum Limit</th>
                                        <th>Examples</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["80C", "Tax-Saving Investments", "₹25,000", "PPF, ELSS, LIC, EPF, NSC, 5-yr FD, Home Loan Principal"],

                                        ["80CCD(1B)", "Additional NPS Contribution", "₹50,000", "Over and above the ₹1.5L limit under 80C"],
                                        ["80D", "Health Insurance Premium", "₹25K / ₹50K", "Medical insurance for self, family, and parents"],
                                        ["24(b)", "Home Loan Interest", "₹2,00,000", "Interest on loan for self-occupied property"],
                                        ["10(13A)", "HRA Exemption", "Calculated", "Actual HRA or 40–50% of basic (metro vs non-metro)"],
                                        ["80E", "Education Loan Interest", "No upper limit", "Interest on higher education loan (max 8 years)"],
                                        ["80G", "Donations to Charity", "50–100% of donation", "PM Relief Fund, NGOs, charitable institutions"],
                                        ["80TTA", "Savings Account Interest", "₹10,000", "Interest income from savings bank accounts"],
                                    ].map((row, i) => (
                                        <tr key={i}>
                                            <td><strong>{row[0]}</strong></td>
                                            <td>{row[1]}</td>
                                            <td>{row[2]}</td>
                                            <td>{row[3]}</td>
                                        </tr>
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