import React from "react"
import { Regime, FY, AgeGroup, FormState } from "@/src/types/income-tax"
import { TaxInput } from "@/src/components/tax-calculator-components"
import CommonButton from "@/components/buttons"
import DynamicHeading from "@/components/dynamic-heading"
import styles from "@/src/app/income-tax-calculator/income-tax-calculator.module.scss"

interface CalculatorFormProps {
    form: FormState
    regime: Regime
    age: AgeGroup
    fy: FY
    setRegime: (r: Regime) => void
    setAge: (a: AgeGroup) => void
    setFy: (f: FY) => void
    handleInputChange: (field: keyof FormState, value: string) => void
    handleReset: () => void
    handleCalculate: () => void
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({
    form,
    regime,
    age,
    fy,
    setRegime,
    setAge,
    setFy,
    handleInputChange,
    handleReset,
    handleCalculate
}) => {
    return (
        <div className={styles.calcCard}>
            <div className={styles.calcCardHead}>
                <DynamicHeading content={[{ title: `Income Tax Calculator — FY ${fy}`, color: "color-white", className: "fs-24 font-weight-bold  " }]} headingTag="p" className="mb-0" />
                <DynamicHeading content={[{ title: `AY ${fy === "2026-27" ? "2027-28" : "2026-27"} · Updated with Union Budget 2026`, color: "color-white", className: "f-4" }]} headingTag="p" />
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
                            <TaxInput label="Section 80C" hint="Max ₹1.5L" value={form.s80C} onChange={(v) => handleInputChange("s80C", v)} />
                            <TaxInput label="Section 80D" hint="Medical, Max ₹50K" value={form.s80D} onChange={(v) => handleInputChange("s80D", v)} />
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
    )
}

export default CalculatorForm
