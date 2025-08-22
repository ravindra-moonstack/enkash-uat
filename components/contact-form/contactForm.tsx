"use client"

import React, { useEffect } from "react"
import Script from "next/script"
import styles from "./contactForm.module.scss"
import { DynamicHeading } from "@/components"
import Link from "next/link"
import MultiSelect from "../multiSelect/multiSelect"
const contactOptions = [
  {
    value: "payment_collection",
    label: "Looking for Payment Collection Solution",
  },
  { value: "make_payments", label: "Looking for a solution to make Payments" },
  { value: "expense_management", label: "Looking for Expense Management" },
  { value: "corporate_jobs", label: "Looking for Corporate Jobs" },
  { value: "job_opportunities", label: "Exploring Job Opportunities" },
  { value: "customer_support", label: "Need Customer Support" },
  { value: "partnership", label: "Interested In Partnership Opportunities" },
  { value: "marketing_team", label: "Want to Connect to Marketing Team" },
]
const ContactForm: React.FC = () => {
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
      {/* Load Zoho validation.js */}
      <Script src="./validation.js" strategy="afterInteractive" />

      <div className={styles.contactFormWrapper}>
        <form
          action="https://forms.zohopublic.in/Enkash/form/WebsiteLetsConnect/formperma/ya7rxfABr3dsLPI9Cdv2mwNzv4AEHz92m6N4jgOTEiQ/htmlRecords/submit"
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
                title: "Let's Connect",
                color: "color-black ",
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

          <MultiSelect
            name="contactReasons"
            options={contactOptions}
            placeholder="How can we help you?*"
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
    </>
  )
}

export default ContactForm
