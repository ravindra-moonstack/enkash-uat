"use client"

import React, { useEffect } from "react"
import styles from "./paymentGatewayPartnershipForm.module.scss"
import { DynamicHeading } from "@/components"
import Link from "next/link"
import CategoryWithOther from "../categoryWithOther/categoryWithOther"

const options = [
  { value: "0 to 5", label: "0 to 5" },
  { value: "5 to 10", label: "5 to 10" },
  { value: "10+", label: "10+" },
]
const Businessoptions = [
  { value: "Developers", label: "Developers" },
  { value: "ERP/SaaS", label: "ERP/SaaS" },
  { value: "Orchestration", label: "Orchestration" },
  { value: "Digital Marketing Agency", label: "Digital Marketing Agency" },
  { value: "CMS/Plugins", label: "CMS/Plugins" },
]

const PaymentGatewayPartnershipForm: React.FC = () => {
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
        action={process.env.ZOHO_PARTNERSHIP_URL}
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
            { title: "Payment Gateway ", color: "color-black " },
            { title: "Partnerships", color: "color-dark-grey " },
          ]}
          headingTag="h2"
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

        <CategoryWithOther
          name="Dropdown5"
          options={options}
          placeholder="Monthly Merchant Volume"
        />
        <CategoryWithOther
          name="Dropdown6"
          options={Businessoptions}
          placeholder="Line if Business"
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

export default PaymentGatewayPartnershipForm
