import { TCategoryOptions } from "@/src/types"

const options: TCategoryOptions = [
  { value: "Google search", label: "Google Search" },
  { value: "Social media", label: "Social media" },
  { value: "Word of mouth/ Referral", label: "Word of mouth / Referral" },
  { value: "Used EnKash Before", label: "Used EnKash Before" },
]

const categoryOptions: TCategoryOptions = [
  {
    value: "Collect Payments",
    label: "Collect Payments",
    children: [
      { value: "Payment Gateway", label: "Payment Gateway" },
      { value: "UPI Payments", label: "UPI Payments" },
      { value: "Payment Link/button", label: "Payment Link/Button" },
      { value: "AR Automation", label: "AR Automation" },
    ],
  },
  {
    value: "Make Payments",
    label: "Make Payments",
    children: [
      { value: "Utility Bill Payment", label: "Utility Bill Payment" },
      { value: "Vendor Payment", label: "Vendor Payment" },
      { value: "Bulk Payments", label: "Bulk Payments" },
      { value: "Rental Payments", label: "Rental Payments" },
      { value: "AP Automation", label: "AP Automation" },
    ],
  },
  {
    value: "Corporate Cards",
    label: "Corporate Cards",
    children: [
      { value: "Secured Credit Card", label: "Secured Credit Card" },
      { value: "Unsecured Credit Card", label: "Unsecured Credit Card" },
      { value: "Gift Cards", label: "Gift Cards" },
      { value: "Employee Cards", label: "Employee Cards" },
      { value: "T&amp;E Cards", label: "Travel and Expense Cards" },
      { value: "Meal Cards", label: "Meal Cards" },
    ],
  },
  {
    value: "Manage Expenses",
    label: "Manage Expenses",
  },
  {
    value: "Rewards",
    label: "Rewards",
    children: [
      { value: "Employee Rewards", label: "Employee Rewards" },
      { value: "Channel Incentives", label: "Channel Incentives" },
    ],
  },
  { value: "Something Else", label: "Something Else" },
]

export { categoryOptions, options }
