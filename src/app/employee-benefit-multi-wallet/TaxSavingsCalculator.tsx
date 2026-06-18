"use client"

import React, { useState, useMemo, useEffect } from "react"
import styles from "./TaxSavingsCalculator.module.scss"

// statutory caps (Income-tax Rules, 2026)
const CAP = {
  meal: 105600,
  gift: 15000,
  eduPerKid: 36000,
  hostelPerKid: 108000,
}

// Formatting helpers
const formatINR = (n: number) => {
  return "₹" + Math.round(n).toLocaleString("en-IN")
}

const parseDigits = (s: string) => {
  return parseInt(String(s).replace(/[^0-9]/g, ""), 10) || 0
}

// Tax Slabs
const NEW_SLABS: [number, number][] = [
  [400000, 0],
  [800000, 0.05],
  [1200000, 0.10],
  [1600000, 0.15],
  [2000000, 0.20],
  [2400000, 0.25],
  [Infinity, 0.30],
]

const OLD_SLABS: [number, number][] = [
  [250000, 0],
  [500000, 0.05],
  [1000000, 0.20],
  [Infinity, 0.30],
]

const slabTax = (income: number, slabs: [number, number][]) => {
  let tax = 0
  let prev = 0
  for (let i = 0; i < slabs.length; i++) {
    const top = slabs[i][0]
    const rate = slabs[i][1]
    if (income > top) {
      tax += (top - prev) * rate
      prev = top
    } else {
      tax += (income - prev) * rate
      break
    }
  }
  return tax
}

const baseTax = (taxable: number, regime: "old" | "new") => {
  taxable = Math.max(0, taxable)
  if (regime === "new") {
    const t = slabTax(taxable, NEW_SLABS)
    if (taxable <= 1200000) return Math.max(0, t - 60000) // 87A rebate
    return Math.min(t, taxable - 1200000) // marginal relief band
  } else {
    const o = slabTax(taxable, OLD_SLABS)
    if (taxable <= 500000) return Math.max(0, o - 12500) // 87A rebate
    return o
  }
}

const surcharge = (taxable: number, base: number, regime: "old" | "new") => {
  const bands: [number, number][] =
    regime === "new"
      ? [
          [5000000, 0.10],
          [10000000, 0.15],
          [20000000, 0.25],
        ]
      : [
          [5000000, 0.10],
          [10000000, 0.15],
          [20000000, 0.25],
          [50000000, 0.37],
        ]
  let rate = 0
  let threshold = 0
  for (let i = 0; i < bands.length; i++) {
    if (taxable > bands[i][0]) {
      rate = bands[i][1]
      threshold = bands[i][0]
    }
  }
  if (rate === 0) return 0
  const sur = base * rate
  const cap = baseTax(threshold, regime) + (taxable - threshold)
  if (base + sur > cap) {
    return Math.max(0, cap - base)
  }
  return sur
}

const totalTax = (taxable: number, regime: "old" | "new") => {
  taxable = Math.max(0, Math.round(taxable))
  const base = baseTax(taxable, regime)
  const sur = surcharge(taxable, base, regime)
  return Math.round((base + sur) * 1.04) // + 4% cess
}

export default function TaxSavingsCalculator() {
  const [salary, setSalary] = useState(1200000)
  const [salaryInput, setSalaryInput] = useState("12,00,000")

  // Wallet states
  const [mealEnabled, setMealEnabled] = useState(true)
  const [mealAmt, setMealAmt] = useState(105600)
  const [mealAmtInput, setMealAmtInput] = useState("1,05,600")

  const [giftEnabled, setGiftEnabled] = useState(true)
  const [giftAmt, setGiftAmt] = useState(15000)
  const [giftAmtInput, setGiftAmtInput] = useState("15,000")

  const [kids, setKids] = useState(0)

  const [eduEnabled, setEduEnabled] = useState(false)
  const [eduAmt, setEduAmt] = useState(0)
  const [eduAmtInput, setEduAmtInput] = useState("0")

  const [hostelEnabled, setHostelEnabled] = useState(false)
  const [hostelAmt, setHostelAmt] = useState(0)
  const [hostelAmtInput, setHostelAmtInput] = useState("0")

  const [otherEnabled, setOtherEnabled] = useState(false)
  const [otherAmt, setOtherAmt] = useState(0)
  const [otherAmtInput, setOtherAmtInput] = useState("0")

  // Dynamic caps based on children count
  const eduCap = useMemo(() => CAP.eduPerKid * kids, [kids])
  const hostelCap = useMemo(() => CAP.hostelPerKid * kids, [kids])

  // Sync children count changes
  useEffect(() => {
    if (kids === 0) {
      setEduEnabled(false)
      setEduAmt(0)
      setEduAmtInput("0")
      setHostelEnabled(false)
      setHostelAmt(0)
      setHostelAmtInput("0")
    } else {
      if (eduEnabled) {
        setEduAmt(eduCap)
        setEduAmtInput(eduCap.toLocaleString("en-IN"))
      }
      if (hostelEnabled) {
        setHostelAmt(hostelCap)
        setHostelAmtInput(hostelCap.toLocaleString("en-IN"))
      }
    }
  }, [kids, eduCap, hostelCap, eduEnabled, hostelEnabled])

  // Synchronize salary text input with slider
  const handleSalaryChange = (value: number) => {
    setSalary(value)
    setSalaryInput(value.toLocaleString("en-IN"))
  }

  const handleSalaryInputBlur = () => {
    const val = parseDigits(salaryInput)
    const clamped = Math.max(300000, Math.min(10000000, val))
    setSalary(clamped)
    setSalaryInput(clamped.toLocaleString("en-IN"))
  }

  // Row toggles
  const handleToggle = (
    checked: boolean,
    setEnabled: (b: boolean) => void,
    setAmt: (n: number) => void,
    setAmtInput: (s: string) => void,
    cap: number
  ) => {
    setEnabled(checked)
    if (checked && cap > 0) {
      setAmt(cap)
      setAmtInput(cap.toLocaleString("en-IN"))
    }
  }

  // Row amount blur clamping
  const handleAmtBlur = (
    inputVal: string,
    setAmt: (n: number) => void,
    setAmtInput: (s: string) => void,
    cap: number
  ) => {
    const parsed = parseDigits(inputVal)
    const clamped = cap === Infinity ? parsed : Math.min(parsed, cap)
    setAmt(clamped)
    setAmtInput(clamped.toLocaleString("en-IN"))
  }

  // Exemptions
  const exemptions = useMemo(() => {
    const meal = mealEnabled ? Math.min(mealAmt, CAP.meal) : 0
    const gift = giftEnabled ? Math.min(giftAmt, CAP.gift) : 0
    const edu = eduEnabled ? Math.min(eduAmt, eduCap) : 0
    const hostel = hostelEnabled ? Math.min(hostelAmt, hostelCap) : 0
    const other = otherEnabled ? otherAmt : 0

    return {
      newRegime: meal + gift,
      oldRegime: meal + gift + edu + hostel + other,
    }
  }, [
    mealEnabled,
    mealAmt,
    giftEnabled,
    giftAmt,
    eduEnabled,
    eduAmt,
    eduCap,
    hostelEnabled,
    hostelAmt,
    hostelCap,
    otherEnabled,
    otherAmt,
  ])

  // Tax and Savings Output
  const taxResults = useMemo(() => {
    const sdNew = 75000
    const sdOld = 50000

    const taxableBaseNew = Math.max(0, salary - sdNew)
    const taxableWithNew = Math.max(0, salary - sdNew - exemptions.newRegime)
    const taxBaseNew = totalTax(taxableBaseNew, "new")
    const taxWithNew = totalTax(taxableWithNew, "new")
    const saveNew = Math.max(0, taxBaseNew - taxWithNew)

    const taxableBaseOld = Math.max(0, salary - sdOld)
    const taxableWithOld = Math.max(0, salary - sdOld - exemptions.oldRegime)
    const taxBaseOld = totalTax(taxableBaseOld, "old")
    const taxWithOld = totalTax(taxableWithOld, "old")
    const saveOld = Math.max(0, taxBaseOld - taxWithOld)

    const recommendedRegime = taxWithNew <= taxWithOld ? "new" : "old"
    const heroSave = recommendedRegime === "new" ? saveNew : saveOld

    return {
      newRegime: { base: taxBaseNew, with: taxWithNew, save: saveNew },
      oldRegime: { base: taxBaseOld, with: taxWithOld, save: saveOld },
      recommended: recommendedRegime,
      heroSave,
    }
  }, [salary, exemptions])

  return (
    <div className={styles.ekCalc} id="ekCalc">
      <div className={styles.ekEyebrow}>
        <span></span>Income-tax Rules 2026 · FY 2026-27
      </div>
      <h2 className={styles.ekTitle}>
        See how much more your team
        <br />
        <em>takes home</em> — at zero extra payroll cost.
      </h2>
      <p className={styles.ekLede}>
        Route part of existing CTC through the EnKash Tax Benefit Multi-Wallet Card and
        convert taxable salary into compliant, tax-exempt allowances. Enter a salary to
        estimate the annual saving under both tax regimes.
      </p>

      <div className={styles.ekGrid}>
        {/* ============ INPUTS ============ */}
        <div className={styles.ekPanel}>
          <div className={styles.ekPanelH}>Your inputs</div>

          <div className={styles.ekField}>
            <label className={styles.ekLbl} htmlFor="ekSalary">
              Annual fixed gross salary
            </label>
            <div className={styles.ekMoneyWrap}>
              <input
                className={`${styles.ekMoney} ${styles.ekNum}`}
                id="ekSalary"
                type="text"
                inputMode="numeric"
                value={salaryInput}
                onChange={(e) => setSalaryInput(e.target.value)}
                onBlur={handleSalaryInputBlur}
                aria-label="Annual fixed gross salary in rupees"
              />
            </div>
            <input
              className={styles.ekSlider}
              id="ekSalarySlider"
              type="range"
              min="300000"
              max="10000000"
              step="25000"
              value={salary}
              onChange={(e) => handleSalaryChange(Number(e.target.value))}
              aria-label="Salary slider"
            />
            <div className={styles.ekRangeScale}>
              <span>₹3L</span>
              <span>₹50L</span>
              <span>₹1Cr</span>
            </div>
          </div>

          <div className={styles.ekWalletgroupH}>Wallets that work in any regime</div>

          {/* Meal Wallet */}
          <div className={styles.ekWallet}>
            <span className={styles.ekToggle}>
              <input
                type="checkbox"
                id="ekMeal"
                checked={mealEnabled}
                onChange={(e) =>
                  handleToggle(
                    e.target.checked,
                    setMealEnabled,
                    setMealAmt,
                    setMealAmtInput,
                    CAP.meal
                  )
                }
                aria-label="Meal & food card"
              />
              <span className={styles.ekTrack}></span>
            </span>
            <span className={styles.ekWinfo}>
              <span className={styles.ekWname}>
                Meal &amp; food card
                <span className={`${styles.ekBadge} ${styles.both}`}>Both regimes</span>
              </span>
              <span className={styles.ekWmeta}>Up to ₹200/meal · ₹8,800/mo</span>
            </span>
            <span className={styles.ekWamt}>
              <input
                className={`${styles.ekAmtin} ${styles.ekNum}`}
                id="ekMealAmt"
                type="text"
                inputMode="numeric"
                value={mealAmtInput}
                disabled={!mealEnabled}
                onChange={(e) => setMealAmtInput(e.target.value)}
                onBlur={() =>
                  handleAmtBlur(
                    mealAmtInput,
                    setMealAmt,
                    setMealAmtInput,
                    CAP.meal
                  )
                }
                aria-label="Meal allowance annual amount"
              />
              <span className={styles.ekAmtcap}>/yr · max ₹1,05,600</span>
            </span>
          </div>

          {/* Gift Wallet */}
          <div className={styles.ekWallet}>
            <span className={styles.ekToggle}>
              <input
                type="checkbox"
                id="ekGift"
                checked={giftEnabled}
                onChange={(e) =>
                  handleToggle(
                    e.target.checked,
                    setGiftEnabled,
                    setGiftAmt,
                    setGiftAmtInput,
                    CAP.gift
                  )
                }
                aria-label="Gift and rewards"
              />
              <span className={styles.ekTrack}></span>
            </span>
            <span className={styles.ekWinfo}>
              <span className={styles.ekWname}>
                Gift &amp; rewards
                <span className={`${styles.ekBadge} ${styles.both}`}>Both regimes</span>
              </span>
              <span className={styles.ekWmeta}>Festival vouchers, R&amp;R, milestones</span>
            </span>
            <span className={styles.ekWamt}>
              <input
                className={`${styles.ekAmtin} ${styles.ekNum}`}
                id="ekGiftAmt"
                type="text"
                inputMode="numeric"
                value={giftAmtInput}
                disabled={!giftEnabled}
                onChange={(e) => setGiftAmtInput(e.target.value)}
                onBlur={() =>
                  handleAmtBlur(
                    giftAmtInput,
                    setGiftAmt,
                    setGiftAmtInput,
                    CAP.gift
                  )
                }
                aria-label="Gift allowance annual amount"
              />
              <span className={styles.ekAmtcap}>/yr · max ₹15,000</span>
            </span>
          </div>

          <div className={styles.ekWalletgroupH}>Old-regime allowances</div>

          <div className={styles.ekChildren}>
            Children (for education &amp; hostel):
            <select
              className={styles.ekKids}
              id="ekKids"
              value={kids}
              onChange={(e) => setKids(Number(e.target.value))}
              aria-label="Number of children"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <span style={{ fontSize: "11.5px", color: "var(--ek-faint)" }}>max 2</span>
          </div>

          {/* Education Wallet */}
          <div className={styles.ekWallet}>
            <span className={styles.ekToggle}>
              <input
                type="checkbox"
                id="ekEdu"
                checked={eduEnabled}
                disabled={kids === 0}
                onChange={(e) =>
                  handleToggle(
                    e.target.checked,
                    setEduEnabled,
                    setEduAmt,
                    setEduAmtInput,
                    eduCap
                  )
                }
                aria-label="Children education allowance"
              />
              <span className={styles.ekTrack}></span>
            </span>
            <span className={styles.ekWinfo}>
              <span className={styles.ekWname}>
                Children&apos;s education
                <span className={`${styles.ekBadge} ${styles.old}`}>Old regime</span>
              </span>
              <span className={styles.ekWmeta}>₹3,000/mo per child</span>
            </span>
            <span className={styles.ekWamt}>
              <input
                className={`${styles.ekAmtin} ${styles.ekNum}`}
                id="ekEduAmt"
                type="text"
                inputMode="numeric"
                value={eduAmtInput}
                disabled={!eduEnabled || kids === 0}
                onChange={(e) => setEduAmtInput(e.target.value)}
                onBlur={() =>
                  handleAmtBlur(
                    eduAmtInput,
                    setEduAmt,
                    setEduAmtInput,
                    eduCap
                  )
                }
                aria-label="Education allowance annual amount"
              />
              <span className={styles.ekAmtcap} id="ekEduCap">
                /yr · max {formatINR(eduCap)}
              </span>
            </span>
          </div>

          {/* Hostel Wallet */}
          <div className={styles.ekWallet}>
            <span className={styles.ekToggle}>
              <input
                type="checkbox"
                id="ekHostel"
                checked={hostelEnabled}
                disabled={kids === 0}
                onChange={(e) =>
                  handleToggle(
                    e.target.checked,
                    setHostelEnabled,
                    setHostelAmt,
                    setHostelAmtInput,
                    hostelCap
                  )
                }
                aria-label="Children hostel allowance"
              />
              <span className={styles.ekTrack}></span>
            </span>
            <span className={styles.ekWinfo}>
              <span className={styles.ekWname}>
                Children&apos;s hostel
                <span className={`${styles.ekBadge} ${styles.old}`}>Old regime</span>
              </span>
              <span className={styles.ekWmeta}>₹9,000/mo per child</span>
            </span>
            <span className={styles.ekWamt}>
              <input
                className={`${styles.ekAmtin} ${styles.ekNum}`}
                id="ekHostelAmt"
                type="text"
                inputMode="numeric"
                value={hostelAmtInput}
                disabled={!hostelEnabled || kids === 0}
                onChange={(e) => setHostelAmtInput(e.target.value)}
                onBlur={() =>
                  handleAmtBlur(
                    hostelAmtInput,
                    setHostelAmt,
                    setHostelAmtInput,
                    hostelCap
                  )
                }
                aria-label="Hostel allowance annual amount"
              />
              <span className={styles.ekAmtcap} id="ekHostelCap">
                /yr · max {formatINR(hostelCap)}
              </span>
            </span>
          </div>

          {/* Other Wallet */}
          <div className={styles.ekWallet}>
            <span className={styles.ekToggle}>
              <input
                type="checkbox"
                id="ekOther"
                checked={otherEnabled}
                onChange={(e) =>
                  handleToggle(
                    e.target.checked,
                    setOtherEnabled,
                    setOtherAmt,
                    setOtherAmtInput,
                    0
                  )
                }
                aria-label="Other reimbursements"
              />
              <span className={styles.ekTrack}></span>
            </span>
            <span className={styles.ekWinfo}>
              <span className={styles.ekWname}>
                Fuel, telecom, LTA, books
                <span className={`${styles.ekBadge} ${styles.old}`}>Old regime</span>
              </span>
              <span className={styles.ekWmeta}>On actual bills — confirm with finance</span>
            </span>
            <span className={styles.ekWamt}>
              <input
                className={`${styles.ekAmtin} ${styles.ekNum}`}
                id="ekOtherAmt"
                type="text"
                inputMode="numeric"
                value={otherAmtInput}
                disabled={!otherEnabled}
                onChange={(e) => setOtherAmtInput(e.target.value)}
                onBlur={() =>
                  handleAmtBlur(
                    otherAmtInput,
                    setOtherAmt,
                    setOtherAmtInput,
                    Infinity
                  )
                }
                aria-label="Other reimbursements annual amount"
              />
              <span className={styles.ekAmtcap}>/yr · planned</span>
            </span>
          </div>
        </div>

        {/* ============ RESULT ============ */}
        <div className={`${styles.ekPanel} ${styles.ekResult}`}>
          <div className={styles.ekPanelH}>Estimated annual take-home gain</div>
          <div className={`${styles.ekHeroNum} ${styles.ekNum}`} id="ekHero">
            {formatINR(taxResults.heroSave)}
          </div>
          <div className={styles.ekHeroSub}>
            more in hand a year ·{" "}
            <span className={`${styles.ekHeroMo} ${styles.ekNum}`} id="ekHeroMo">
              {formatINR(taxResults.heroSave / 12)}/mo
            </span>
          </div>
          <div className={styles.ekReco} id="ekReco">
            Best under the{" "}
            <b id="ekRecoRegime">
              {taxResults.recommended === "new" ? "new" : "old"}
            </b>{" "}
            regime
          </div>

          <div className={styles.ekCompare}>
            <table className={styles.ekTbl}>
              <thead>
                <tr>
                  <th>Per year</th>
                  <th
                    id="ekThOld"
                    className={taxResults.recommended === "old" ? styles.ekColReco : ""}
                  >
                    Old regime
                    {taxResults.recommended === "old" && (
                      <span className={styles.ekColpick}>✓ Recommended</span>
                    )}
                  </th>
                  <th
                    id="ekThNew"
                    className={taxResults.recommended === "new" ? styles.ekColReco : ""}
                  >
                    New regime
                    {taxResults.recommended === "new" && (
                      <span className={styles.ekColpick}>✓ Recommended</span>
                    )}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tax today (no wallet)</td>
                  <td className={styles.ekNum}>{formatINR(taxResults.oldRegime.base)}</td>
                  <td className={styles.ekNum}>{formatINR(taxResults.newRegime.base)}</td>
                </tr>
                <tr>
                  <td>Tax with EnKash wallet</td>
                  <td className={styles.ekNum}>{formatINR(taxResults.oldRegime.with)}</td>
                  <td className={styles.ekNum}>{formatINR(taxResults.newRegime.with)}</td>
                </tr>
                <tr className={styles.ekSaverow}>
                  <td>You save</td>
                  <td
                    className={`${styles.ekNum} ${
                      taxResults.recommended === "old" ? styles.ekColReco : ""
                    }`}
                  >
                    {formatINR(taxResults.oldRegime.save)}
                  </td>
                  <td
                    className={`${styles.ekNum} ${
                      taxResults.recommended === "new" ? styles.ekColReco : ""
                    }`}
                  >
                    {formatINR(taxResults.newRegime.save)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className={styles.ekNotes}>
        <strong>How this is calculated.</strong> Tax is computed for FY 2026-27 (AY 2027-28)
        under both regimes using the notified slabs, the standard deduction (₹75,000 new /
        ₹50,000 old), the Section 87A rebate (with marginal relief near ₹12L under the new
        regime), applicable surcharge and 4% health &amp; education cess. The saving is the
        drop in tax when the selected allowances are structured out of taxable salary
        through the card.
        <ul>
          <li>
            <strong>Meal (₹200/meal, up to ₹1,05,600/yr)</strong> and{" "}
            <strong>gifts (₹15,000/yr)</strong> are exempt under <em>both</em> the old and
            new regimes per the Income-tax Rules, 2026.
          </li>
          <li>
            <strong>Children&apos;s education (₹3,000/mo/child), hostel (₹9,000/mo/child, max 2 children)</strong> and{" "}
            <strong>fuel/telecom/LTA/books reimbursements</strong> are available under the{" "}
            <em>old regime only</em>, and the last group is exempt on actual bills subject
            to your salary structuring.
          </li>
          <li>
            Figures isolate the wallet impact only — they exclude HRA, 80C/Section 123, NPS
            and other deductions you may also claim.
          </li>
        </ul>
        <div className={styles.ekDisc}>
          This is an indicative estimate, not tax advice. Actual savings depend on each
          employee&apos;s salary structure, documentation and regime choice. Please have
          your finance or tax advisor confirm the structuring before rollout.
        </div>
        <a
          className={styles.ekCta}
          href="mailto:sales@enkash.com?subject=Tax%20Benefit%20Multi-Wallet%20Card%20—%20demo"
        >
          Get a personalised CTC walkthrough →
        </a>
      </div>
    </div>
  )
}
