/**
 * Format number in Indian currency style (e.g., 1,00,000)
 */
export const fmtInd = (num: number): string => {
  const n = Math.round(Math.abs(num))
  const s = n.toString()
  if (s.length <= 3) return (num < 0 ? "-" : "") + s
  const last3 = s.slice(-3)
  const rest = s.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ",")
  return (num < 0 ? "-" : "") + rest + "," + last3
}

/**
 * Format currency with ₹ symbol
 */
export const fc = (num: number): string =>
  isNaN(num) ? "₹0" : "₹" + fmtInd(Math.round(num))

/**
 * Parse a raw string to a number, removing non-numeric characters
 */
export const raw = (val: string): number =>
  parseInt(val.replace(/[^0-9]/g, ""), 10) || 0
