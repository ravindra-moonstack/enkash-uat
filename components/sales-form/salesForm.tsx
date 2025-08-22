"use client"

import React, { useEffect } from "react"
import styles from "./salesForm.module.scss"
import { DynamicHeading } from "@/components"
import Link from "next/link"
import CategoryMultiSelect from "../categoryMultiSelect/categoryMultiSelect"
import CategoryWithOther from "../categoryWithOther/categoryWithOther"

const options = [
  { value: "Google search", label: "Google Search" },
  { value: "Social media", label: "Social media" },
  { value: "Word of mouth/ Referral", label: "Word of mouth / Referral" },
  { value: "Used EnKash Before", label: "Used EnKash Before" },
]

const categoryOptions = [
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
      { value: "T&amp;E Cards", label: "T&amp;E Cards" },
      { value: "Meal Cards", label: "Meal Cards" },
    ],
  },
  {
    value: "Manage Expenses",
    label: "Manage Expenses",
    children: [{ value: "Expense Management", label: "Expense Management" }],
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

const SalesForm: React.FC = () => {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.zf_SetDateAndMonthRegexBasedOnDateFormate
    ) {
      const dateAndMonthRegexFormateArray =
        window.zf_SetDateAndMonthRegexBasedOnDateFormate("dd-MMM-yyyy")

      window.zf_DateRegex = new RegExp(dateAndMonthRegexFormateArray[0])
      window.zf_MonthYearRegex = new RegExp(dateAndMonthRegexFormateArray[1])
      window.zf_MandArray = [
        "SingleLine",
        "Email",
        "SingleLine1",
        "PhoneNumber_countrycode",
        "MultipleChoice",
      ]
      window.zf_FieldArray = [
        "SingleLine",
        "Email",
        "SingleLine1",
        "PhoneNumber_countrycode",
        "MultipleChoice",
        "MultipleChoice1",
        "Website",
        "Dropdown5",
        "MultiLine",
      ]
      window.isSalesIQIntegrationEnabled = false
      window.salesIQFieldsArray = []
    }
  }, [])

  return (
    <div className={styles.contactFormWrapper}>
      <form
        action="https://forms.zohopublic.in/Enkash/form/TalktoSales/formperma/hmsqE173cI_jvQ9Xnh7Bkuxp1UONfPeWnrlK-L_NTBA/htmlRecords/submit"
        name="form"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        id="form"
        onSubmit={() => window.zf_ValidateAndSubmit?.() ?? true}
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />

        <DynamicHeading
          content={[{ title: "New to EnKash? ", color: "color-dark-grey " }]}
          headingTag="h5"
          className="text-center "
        />
        <DynamicHeading
          content={[
            { title: "Talk", color: "color-black " },
            { title: " to Sales", color: "color-dark-grey " },
          ]}
          headingTag="h1"
          className="text-center "
        />
        <p className={styles.subtitle}>We just need a few quick details</p>

        <div className={styles.grid}>
          <input type="text" name="SingleLine" placeholder="Name*" />
          <input type="text" name="Email" placeholder="Business Email ID*" />
          <input type="text" name="SingleLine1" placeholder="Company Name*" />
          <input
            type="text"
            name="PhoneNumber_countrycode"
            placeholder="Contact No.*"
            id="international_PhoneNumber_countrycode"
          />
        </div>

        <CategoryMultiSelect
          name="MultipleChoice"
          options={categoryOptions}
          placeholder="What are you looking for?*"
        />

        <div className={styles.grid}>
          <input
            type="text"
            name="Website"
            placeholder="Website or App Link*"
            id="Website_error"
          />
          <CategoryWithOther
            name="Dropdown5"
            options={options}
            placeholder="Select how you heard about us*"
          />
        </div>

        <textarea
          name="MultiLine"
          placeholder={`Comments\n(Please provide more details that will enable us to better understand your needs.)`}
        />

        <p className={styles.privacy}>
          By submitting this form, you are agreeing to our{" "}
          <Link href="/privacy-policy" className={styles.privacyLink}>
            privacy policy
          </Link>
        </p>

        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default SalesForm
