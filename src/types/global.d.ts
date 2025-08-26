export {}

declare global {
  interface Window {
    zf_SetDateAndMonthRegexBasedOnDateFormate?: (format: string) => [string, string]
    zf_DateRegex?: RegExp
    zf_MonthYearRegex?: RegExp
    zf_MandArray?: string[]
    zf_FieldArray?: string[]
    isSalesIQIntegrationEnabled?: boolean
    salesIQFieldsArray?: string[]
    zf_ValidateAndSubmit?: () => boolean
  }
}
