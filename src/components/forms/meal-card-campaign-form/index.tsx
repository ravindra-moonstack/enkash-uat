"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useFormik } from "formik"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import axios from "axios"
import "@/src/styles/_forms.scss"

import ErrorText from "../../error-text"
import MultiSelect from "../../multi-select"

import {
  mealCardCampaignInitialValue,
  mealCardCampaignValidation,
  TMealCardCampaignInitialValueProp,
} from "./formik"
import { employeeOptions } from "./data"

const MealCardCampaignForm: React.FC = () => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: mealCardCampaignInitialValue,
    validationSchema: mealCardCampaignValidation,
    onSubmit: (values) => {
      onSubmitForm(values)
    },
  })

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue } = formik

  const params = useSearchParams()
  const referringPage = usePathname()

  useEffect(() => {
    const utmSource = params.get("utm_source") || "Website Sales Leads"
    const utmMedium = params.get("utm_medium") || ""
    const utmCampaign = params.get("utm_campaign") || ""

    setFieldValue("SingleLine2", utmSource)
    setFieldValue("SingleLine3", utmMedium)
    setFieldValue("SingleLine4", utmCampaign)
    setFieldValue("SingleLine5", referringPage)
    setFieldValue("SingleLine6", "Ad ")
  }, [])

  const onSubmitForm = async (values: TMealCardCampaignInitialValueProp) => {
    try {
      setLoading(true)

      await axios.post("/api/zoho", {
        url: "https://forms.zohopublic.in/Enkash/form/LinkedInAdsMealCard/formperma/VUkVHHvlwpB9tH4Yfry8-5ULDphYpd8vabTk8kXvGJc/htmlRecords/submit",
        data: values,
      })

      router.push("/thank-you")
    } catch (error) {
      console.error("Zoho submission error (Meal Card Campaign):", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="grid">
        <div>
          <input
            type="text"
            required
            placeholder="Name*"
            aria-label="Name*"
            autoComplete="name"
            {...getFieldProps("SingleLine")}
          />
          <ErrorText errors={errors} touched={touched} field="SingleLine" />
        </div>

        <div>
          <input
            type="text"
            required
            maxLength={13}
            placeholder="Contact No.*"
            aria-label="Contact No.*"
            autoComplete="tel"
            id="international_PhoneNumber_countrycode"
            {...getFieldProps("PhoneNumber_countrycode")}
          />
          <ErrorText
            errors={errors}
            touched={touched}
            field="PhoneNumber_countrycode"
          />
        </div>
      </div>

      <div className="grid">
        <div>
          <input
            type="email"
            required
            placeholder="Business Email ID*"
            aria-label="Business Email ID*"
            autoComplete="email"
            {...getFieldProps("Email")}
          />
          <ErrorText errors={errors} touched={touched} field="Email" />
        </div>

        <div>
          <input
            type="text"
            required
            placeholder="Company Name*"
            aria-label="Company Name*"
            {...getFieldProps("SingleLine1")}
          />
          <ErrorText errors={errors} touched={touched} field="SingleLine1" />
        </div>
      </div>

      <div>
        <MultiSelect
          name="MultipleChoice"
          options={employeeOptions}
          placeholder="Number of employees*"
          onChange={(data) => {
            setFieldValue("MultipleChoice", data)
          }}
        />
        <ErrorText errors={errors} touched={touched} field="MultipleChoice" />
      </div>

      <div>
        <textarea
          placeholder="How are you planning to use EnKash business bill payments? What are your timelines, and how can we help you to go-live faster?"
          aria-label="Requirement details"
          maxLength={500}
          {...getFieldProps("MultiLine")}
        />
        <ErrorText errors={errors} touched={touched} field="MultiLine" />
      </div>

      <p className="privacy">
        By submitting this form, you are agreeing to our{" "}
        <Link href="/policies/privacy-policy" className="privacyLink">
          privacy policy
        </Link>
      </p>

      <button type="submit" disabled={loading} className="submitBtn">
        {loading ? "..." : "Submit"}
      </button>
    </form>
  )
}

export default MealCardCampaignForm
