"use client"

import React, { useEffect } from "react"
import styles from "./salesForm.module.scss"
import { DynamicHeading } from "@/components"
import Link from "next/link"
import CategoryMultiSelect from "../categoryMultiSelect/categoryMultiSelect"
import CategoryWithOther from "../categoryWithOther/categoryWithOther"

const options = [
  { value: "google_search", label: "Google Search" },
  { value: "social_media", label: "Social media" },
  { value: "referral", label: "Word of mouth / Referral" },
  { value: "used_enkash", label: "Used EnKash Before" },
  { value: "other", label: "Other (Please Specify)" },
]

const categoryOptions = [
  {
    value: "collect_payments",
    label: "Collect Payments",
    children: [
      { value: "payment_gateway", label: "Payment Gateway" },
      { value: "upi_payments", label: "UPI Payments" },
      { value: "payment_link", label: "Payment Link/Button" },
      { value: "ar_automation", label: "AR Automation" },
      { value: "others_collect", label: "Others" },
    ],
  },
  {
    value: "make_payments",
    label: "Make Payments",
    children: [
      { value: "utility_bill", label: "Utility Bill Payment" },
      { value: "vendor_payment", label: "Vendor Payment" },
      { value: "bulk_payments", label: "Bulk Payments" },
      { value: "rental_payments", label: "Rental Payments" },
      { value: "ap_automation", label: "AP Automation" },
      { value: "others_make", label: "Others" },
    ],
  },
  {
    value: "corporate_cards",
    label: "Corporate Cards",
    children: [
      { value: "credit_secured", label: "Secured Credit Card" },
      { value: "credit_unsecured", label: "Unsecured Credit Card" },
      { value: "prepaid_gift", label: "Gift Cards" },
      { value: "prepaid_employee", label: "Employee Cards" },
      { value: "prepaid_te", label: "T&E Cards" },
      { value: "prepaid_meal", label: "Meal Cards" },
      { value: "prepaid_others", label: "Others" },
    ],
  },
  { value: "manage_expenses", label: "Manage Expenses" },
  {
    value: "rewards",
    label: "Rewards",
    children: [
      { value: "employee_rewards", label: "Employee Rewards" },
      { value: "channel_incentives", label: "Channel Incentives" },
    ],
  },
  { value: "something_else", label: "Something Else" }, // you can show input field if this selected
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
        "MultiLine",
      ]
      window.isSalesIQIntegrationEnabled = false
      window.salesIQFieldsArray = []
    }
  }, [])

  return (
    <>
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
            content={[
              {
                title: "New to EnKash? ",
                color: "color-dark-grey ",
              },
            ]}
            headingTag="h5"
            className="text-center "
          />
          <DynamicHeading
            content={[
              {
                title: "Talk",
                color: "color-black ",
              },
              {
                title: " to Sales",
                color: "color-dark-grey ",
              },
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
    </>
  )
}

export default SalesForm
