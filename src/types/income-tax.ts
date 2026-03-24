export type Regime = "new" | "old"
export type FY = "2026-27" | "2025-26"
export type AgeGroup = "0-60" | "60-80" | "80+"

export interface TaxResult {
  gSal: number
  sd: number
  nSal: number
  hp: number
  gtiN: number
  ded: number
  taxable: number
  taxBefore: number
  rebate: number
  sc: number
  cess: number
  total: number
}

export interface FormState {
  salary: string
  exemptAllowances: string
  interestIncome: string
  rentalIncome: string
  hlRented: string
  hlSelf: string
  digitalAsset: string
  s80C: string
  s80D: string
  s80G: string
  s80E: string
  s80TTA: string
  s80CCD_old: string
  s80CCD_new: string
  otherDed: string
}

export interface SlabRow {
  range: string
  col1: string
  col2: string
  col3: string
}
