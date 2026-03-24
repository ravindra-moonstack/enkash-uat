import React from "react"
import { Regime, FY, TaxResult } from "@/src/types/income-tax"
import { RecommendedBox } from "@/src/components/tax-calculator-components"
import DynamicHeading from "@/components/dynamic-heading"
import { fc } from "@/src/utils/income-tax-utils"
import styles from "@/src/app/income-tax-calculator/income-tax-calculator.module.scss"

interface TaxResultsBreakdownProps {
    fy: FY
    regime: Regime
    liveResults: { old: TaxResult; new: TaxResult }
    betterRegime: string
    totalSavings: number
    resultsRef: React.RefObject<HTMLDivElement | null>
}

const TaxResultsBreakdown: React.FC<TaxResultsBreakdownProps> = ({
    fy,
    regime,
    liveResults,
    betterRegime,
    totalSavings,
    resultsRef
}) => {
    return (
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

            <p className={styles.disclaimer}>
                <strong>Disclaimer:</strong> Estimated tax per IT Act 1961 & Budget 2026. Surcharge applies above ₹50L. Rebate 87A: ₹60K (New, ≤₹12L) / ₹12.5K (Old, ≤₹5L). Consult a tax professional. Not financial/legal advice.
            </p>
        </div>
    )
}

export default TaxResultsBreakdown
