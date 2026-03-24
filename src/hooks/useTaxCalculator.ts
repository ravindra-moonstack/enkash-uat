import { useState, useCallback } from "react"

import {
  Regime,
  FY,
  AgeGroup,
  TaxResult,
  FormState,
} from "@/src/types/income-tax"

export interface Slab {
  min: number
  max: number
  rate: number
}

// Data model
export const NEW_SLABS: Slab[] = [
  { min: 0, max: 400000, rate: 0 },
  { min: 400000, max: 800000, rate: 5 },
  { min: 800000, max: 1200000, rate: 10 },
  { min: 1200000, max: 1600000, rate: 15 },
  { min: 1600000, max: 2000000, rate: 20 },
  { min: 2000000, max: 2400000, rate: 25 },
  { min: 2400000, max: Infinity, rate: 30 },
]

export const OLD_U60: Slab[] = [
  { min: 0, max: 250000, rate: 0 },
  { min: 250000, max: 500000, rate: 5 },
  { min: 500000, max: 1000000, rate: 20 },
  { min: 1000000, max: Infinity, rate: 30 },
]

export const OLD_6080: Slab[] = [
  { min: 0, max: 300000, rate: 0 },
  { min: 300000, max: 500000, rate: 5 },
  { min: 500000, max: 1000000, rate: 20 },
  { min: 1000000, max: Infinity, rate: 30 },
]

export const OLD_80P: Slab[] = [
  { min: 0, max: 500000, rate: 0 },
  { min: 500000, max: 1000000, rate: 20 },
  { min: 1000000, max: Infinity, rate: 30 },
]

// Pure logic functions
const raw = (val: string): number =>
  parseInt(val.replace(/[^0-9]/g, ""), 10) || 0

const slabTax = (income: number, slabs: Slab[]): number => {
  let t = 0
  for (const slab of slabs) {
    if (income <= slab.min) break
    t += (Math.min(income, slab.max) - slab.min) * (slab.rate / 100)
  }
  return t
}

const calcSurcharge = (tax: number, income: number, isNew: boolean): number => {
  if (income <= 5000000) return 0
  let r = 0
  if (isNew) {
    if (income <= 10000000) r = 10
    else if (income <= 20000000) r = 15
    else r = 25 // Capped at 25% for New Regime
  } else {
    if (income <= 10000000) r = 10
    else if (income <= 20000000) r = 15
    else if (income <= 50000000) r = 25
    else r = 37 // Up to 37% for Old Regime
  }
  return (tax * r) / 100
}

export const computeTax = (
  form: FormState,
  regime: Regime,
  age: AgeGroup
): TaxResult => {
  const isNew = regime === "new"
  const sal = raw(form.salary)
  const interest = raw(form.interestIncome)
  const rental = raw(form.rentalIncome)
  const hlR = raw(form.hlRented)
  const hlS = raw(form.hlSelf)
  const dig = raw(form.digitalAsset)

  // Deductions calculation
  const c80C = Math.min(raw(form.s80C), 150000)
  const c80D = Math.min(raw(form.s80D), 50000)
  const c80CCD = isNew ? raw(form.s80CCD_new) : raw(form.s80CCD_old)

  const exempt = isNew ? 0 : raw(form.exemptAllowances)
  const sd = isNew ? 75000 : 50000

  const gSal = isNew ? sal : Math.max(0, sal - exempt)
  const nSal = Math.max(0, gSal - sd)

  let hp = rental - hlR
  hp -= Math.min(hlS, 200000)

  const gti = nSal + interest + Math.max(0, hp) + dig
  const hpL = hp < 0 ? Math.abs(hp) : 0
  const gtiN = Math.max(0, gti - hpL)

  const ded = isNew
    ? c80CCD
    : Number(c80C) +
      Number(c80D) +
      raw(form.s80G) +
      raw(form.s80E) +
      Math.min(raw(form.s80TTA), 10000) +
      c80CCD +
      raw(form.otherDed)

  const taxable = Math.max(0, gtiN - ded)
  const slabs = isNew
    ? NEW_SLABS
    : age === "0-60"
      ? OLD_U60
      : age === "60-80"
        ? OLD_6080
        : OLD_80P

  const taxBefore = slabTax(taxable, slabs)
  let rebate = 0
  if (isNew && taxable <= 1200000) rebate = Math.min(taxBefore, 60000)
  else if (!isNew && taxable <= 500000) rebate = Math.min(taxBefore, 12500)

  const taxAfterRebate = Math.max(0, taxBefore - rebate)
  const sc = calcSurcharge(taxAfterRebate, taxable, isNew)
  const cess = (taxAfterRebate + sc) * 0.04

  return {
    gSal,
    sd,
    nSal,
    hp,
    gtiN,
    ded,
    taxable,
    taxBefore,
    rebate,
    sc,
    cess,
    total: Math.round(taxAfterRebate + sc + cess),
  }
}

// Hook
export const useTaxCalculator = () => {
  const [form, setForm] = useState<FormState>({
    salary: "",
    exemptAllowances: "",
    interestIncome: "",
    rentalIncome: "",
    hlRented: "",
    hlSelf: "",
    digitalAsset: "",
    s80C: "",
    s80D: "",
    s80G: "",
    s80E: "",
    s80TTA: "",
    s80CCD_old: "",
    s80CCD_new: "",
    otherDed: "",
  })

  const [regime, setRegime] = useState<Regime>("new")
  const [age, setAge] = useState<AgeGroup>("0-60")
  const [fy, setFy] = useState<FY>("2026-27")

  const handleInputChange = useCallback(
    (field: keyof FormState, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }))
    },
    []
  )

  const resetForm = useCallback(() => {
    setForm({
      salary: "",
      exemptAllowances: "",
      interestIncome: "",
      rentalIncome: "",
      hlRented: "",
      hlSelf: "",
      digitalAsset: "",
      s80C: "",
      s80D: "",
      s80G: "",
      s80E: "",
      s80TTA: "",
      s80CCD_old: "",
      s80CCD_new: "",
      otherDed: "",
    })
  }, [])

  return {
    form,
    regime,
    age,
    fy,
    setRegime,
    setAge,
    setFy,
    handleInputChange,
    resetForm,
  }
}
