"use client"

import React, { useEffect } from "react"
import styles from "./bankAffiliatePartnershipForm.module.scss"
import Link from "next/link"
import CategoryWithOther from "../categoryWithOther/categoryWithOther"

const Businessoptions = [
  { value: "Bank Partnership", label: "Bank Partnership" },
  {
    value: "Payment Gateway Partnership",
    label: "Payment Gateway Partnership",
  },
  {
    value: "Co-branded Cards Partnership",
    label: "Co-branded Cards Partnership",
  },
  { value: "Bharat Connect Partnership", label: "Bharat Connect Partnership" },
  { value: "MultipleChoice", label: "MultipleChoice" },
]

const BankAffiliatePartnershipForm: React.FC = () => {
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
        action={process.env.ZOHO_AFFILIATE_URL}
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

        <CategoryWithOther
          name="MultipleChoice"
          options={Businessoptions}
          placeholder="I am looking for *"
        />

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

export default BankAffiliatePartnershipForm
