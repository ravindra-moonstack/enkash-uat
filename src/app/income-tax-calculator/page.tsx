"use client"

import React, { useState, useCallback, useMemo, memo } from "react"
import DynamicHeading from "@/components/dynamic-heading"
import CommonButton from "@/components/buttons"
import styles from "./income-tax-calculator.module.scss"
import { useTaxCalculator, computeTax, Regime, FY, AgeGroup } from "./hooks/useTaxCalculator"
import { faqData, NEW_SLABS } from "./data"
import Link from "next/link"
import { FaqSection } from "@/src/components"

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


// ─── MEMOIZED SUB-COMPONENTS ──────────────────────────────────────────────────

const TaxInput = memo(({
    label,
    value,
    onChange,
    placeholder,
    hint
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    hint?: string
}) => (
    <div className={styles.inpGrp}>
        <label>{label} {hint && <span className={styles.hint}>({hint})</span>}</label>
        <div className={styles.inpWrap}>
            <span className={styles.rupee}>₹</span>
            <input
                type="text"
                inputMode="numeric"
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    const digits = e.target.value.replace(/[^0-9]/g, "")
                    onChange(digits ? fmtInd(parseInt(digits, 10)) : "")
                }}
            />
        </div>
    </div>
))
TaxInput.displayName = "TaxInput"

const SummaryBox = memo(({
    label,
    value,
    sub,
    variant = "default"
}: {
    label: string;
    value: string;
    sub: string;
    variant?: "default" | "primary" | "winner"
}) => (
    <div className={`${styles.summaryBox} ${variant === "primary" ? styles.summaryBoxPrimary : (variant === "winner" ? styles.summaryBoxWinner : "")}`}>
        <div className={styles.summaryBoxLabel}>{label}</div>
        <div className={styles.summaryBoxValue}>{value}</div>
        <div className={styles.summaryBoxSub}>{sub}</div>
    </div>
))
SummaryBox.displayName = "SummaryBox"

const SlabMini = memo(({ regime, regimeSlabs }: { regime: Regime, regimeSlabs: any[] }) => (
    <div className={styles.slabMini}>
        <div className={styles.slabMiniHeader}>{regime === "new" ? "New" : "Old"} Regime Slabs</div>
        {regimeSlabs.map((slab, i) => (
            <div key={i} className={styles.slabMiniRow}>
                <span>{slab.max === Infinity ? `Above ₹${fmtInd(slab.min / 100000)}L` : `₹${fmtInd(slab.min / 100000)}L – ₹${fmtInd(slab.max / 100000)}L`}</span>
                <span className={`${styles.slabRate} ${slab.rate === 0 ? styles.slabRateNil : ""}`}>{slab.rate === 0 ? "Nil" : `${slab.rate}%`}</span>
            </div>
        ))}
    </div>
))
SlabMini.displayName = "SlabMini"

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function IncomeTaxCalculatorPage() {
    const { form, regime, age, fy, setRegime, setAge, setFy, handleInputChange, resetForm } = useTaxCalculator()
    const [showResults, setShowResults] = useState(false)
    const [slabTab, setSlabTab] = useState<"new" | "old">("new")

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
    }, [form])

    const handleReset = useCallback(() => {
        resetForm()
        setShowResults(false)
    }, [resetForm])

    const currentResult = liveResults[regime]
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
        <div className={styles.page}>
            {/* ─── HERO (contains calculator + results) ─── */}
            <section className={`${styles.hero}  ${showResults ? styles.heroWithResults : ""}`}>
                <div className={styles.heroBgOverlay} />
                <div className={styles.heroGrid} />
                <div className={`${styles.heroInner} max-w-auto`}>
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                        <Link href="https://www.enkash.com">Home</Link> <span className={styles.breadcrumbSep}>›</span> <span>Income Tax Calculator</span>
                    </nav>

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
                                            <div className={styles.infoTeal}>ℹ️ New Regime: Most deductions like 80C, 80D, HRA exemption are <strong>not allowed</strong>. Only employer NPS contribution under 80CCD(2) applies.</div>
                                            <TaxInput label="Employer NPS — 80CCD(2)" hint="Up to 14% of basic" value={form.s80CCD_new} onChange={(v) => handleInputChange("s80CCD_new", v)} />
                                        </>
                                    )}

                                    <div className={styles.btnRow}>
                                        <CommonButton title="Reset" theme="border-gray" url={handleReset} width="110px" />
                                        <CommonButton title="Calculate My Tax" theme="blue" url={handleCalculate} width="100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ─── TAX BREAKDOWN — inside hero, below the 2-col layout ─── */}
                    {showResults && (
                        <div className={styles.heroResults}>
                            <div className={styles.heroResultsHead}>
                                <DynamicHeading content={[{ title: "Your Tax Breakdown", color: "color-white", className: "f-7" }]} headingTag="h2" />
                                <p className={styles.heroResultsSubtitle}>Calculated for FY {fy} · {regime === "new" ? "New" : "Old"} Tax Regime selected</p>
                            </div>

                            <div className={styles.summaryGrid}>
                                <SummaryBox label="Total Tax Payable" value={fc(currentResult.total)} sub={`${fc(Math.round(currentResult.total / 12))} / month`} variant="primary" />
                                <SummaryBox label="Taxable Income" value={fc(currentResult.taxable)} sub="After deductions & exemptions" />
                                <SummaryBox label="Better Regime" value={`${betterRegime} Regime`} sub={`Saves ${fc(totalSavings)} vs ${betterRegime === "New" ? "Old" : "New"} Regime`} variant="winner" />
                            </div>

                            <div className={styles.regimeGrid}>
                                {(["old", "new"] as Regime[]).map(r => {
                                    const res = liveResults[r]
                                    const isW = betterRegime.toLowerCase() === r
                                    return (
                                        <div key={r} className={`${styles.regimeCard} ${isW ? styles.regimeCardWinner : ""}`}>
                                            {isW && <div className={styles.winnerBadge}>✓ Better</div>}
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

                            <div className={styles.resultActions}>
                                <CommonButton title="← Recalculate" theme="border-gray" url={() => setShowResults(false)} />
                                <CommonButton title="📄 Print / Save" theme="blue" url={() => window.print()} />
                            </div>

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
                        <p className={styles.slabFootnote}>
                            Source: CBDT, Ministry of Finance, Union Budget 2025. 4% Health &amp; Education Cess applies on all tax amounts. Section 87A rebate up to ₹60,000 under new regime (income ≤ ₹12L), ₹12,500 under old regime (income ≤ ₹5L).
                        </p>

                        {/* ── Old Tax Regime vs New Tax Regime ── */}
                        <div id="comparison">
                            <DynamicHeading content={[{ title: "Old Tax Regime vs New Tax Regime — Which Is Better?", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
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
                                        ["Section 80C Deductions", "✅ Up to ₹25,000", "❌ Not available"],

                                        ["HRA Exemption", "✅ Available", "❌ Not available"],
                                        ["Section 80D (Health Ins.)", "✅ ₹25,000–₹50,000", "❌ Not available"],
                                        ["NPS Extra 80CCD(1B)", "✅ ₹50,000 additional", "❌ Not available"],
                                        ["Home Loan Interest (24b)", "✅ Up to ₹2,00,000", "❌ Not available"],
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

                        {/* ── Key Deductions Under Old Tax Regime ── */}
                        <div id="deductions">
                            <DynamicHeading content={[{ title: "Key Deductions Under Old Tax Regime", color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
                        </div>

                        <p className={styles.contentP}>
                            The old regime allows several deductions that can significantly reduce your taxable income. Here are the most important ones for FY 2025-26:
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

                    <aside className={styles.asideSticky}>
                        <div className={styles.asideCard}>
                            <div className={styles.asideCardHead}>
                                <DynamicHeading content={[{ title: "💰 Live Tax Summary", color: "color-white", className: "fs-18" }]} headingTag="h3" />
                                <p>Updates as you type</p>
                            </div>
                            <div className={styles.asideCompare}>
                                <div className={styles.compareCol}><div className={styles.compareColLabel}>Old Regime</div><div className={`${styles.compareColAmt} ${liveBetter === "Old" ? styles.compareColAmtWinner : ""}`}>{fc(liveResults.old.total)}</div></div>
                                <div className={styles.compareVs}>VS</div>
                                <div className={styles.compareCol}><div className={styles.compareColLabel}>New Regime</div><div className={`${styles.compareColAmt} ${liveBetter === "New" ? styles.compareColAmtWinner : ""}`}>{fc(liveResults.new.total)}</div></div>
                            </div>
                            {liveSavings > 0 && (
                                <div className={styles.saveBox}>
                                    <div className={styles.saveBoxLabel}>You save</div>
                                    <div className={styles.saveBoxAmt}>{fc(liveSavings)}</div>
                                    <div className={styles.saveBoxRegime}>with <strong>{liveBetter} Regime</strong></div>
                                </div>
                            )}
                            <SlabMini regime={regime} regimeSlabs={NEW_SLABS} />
                            <p className={styles.asideNote}>+4% Health & Education Cess on tax. Surcharge applicable above ₹50L income.</p>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    )
}