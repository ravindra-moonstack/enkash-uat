"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useFormik } from "formik"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import axios from "axios"
import "@/src/styles/_forms.scss"

// components
import ErrorText from "../../error-text"
import CategoryMultiSelect from "../../category-multi-select"
import CategoryWithOther from "../../single-select"

import {
  billPaymentInitialValue,
  billPaymentValidation,
  TBillPaymentInitialValueProp,
} from "./formik"
import { billOptions, heardOptions } from "./data"

const BillPaymentForm: React.FC = () => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: billPaymentInitialValue,
    validationSchema: billPaymentValidation,
    onSubmit: (values) => {
      onSubmitForm(values)
    },
  })

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue } = formik

  const params = useSearchParams()
  const referringPage = usePathname()

  useEffect(() => {
    const utmSource = params.get("utm_source") || ""
    const utmMedium = params.get("utm_medium") || ""
    const utmCampaign = params.get("utm_campaign") || ""

    setFieldValue("SingleLine2", utmSource || "Website Sales Leads")
    setFieldValue("SingleLine3", utmMedium)
    setFieldValue("SingleLine4", utmCampaign)
    setFieldValue("SingleLine5", referringPage)
    setFieldValue("SingleLine6", "PPC")
  }, [])

  const onSubmitForm = async (values: TBillPaymentInitialValueProp) => {
    try {
      setLoading(true)
      console.log("Submitted Bill Payment Data:", values)

      await axios.post("/api/zoho", {
        url: "https://forms.zohopublic.in/Enkash/form/PPCBillPayments/formperma/UTWVV_9G5Xfft83hv4cxWUw1JalSjqpNqQbuwtuPjjo/htmlRecords/submit",
        data: values,
      })

      router.push("/thank-you")
    } catch (error) {
      console.error("Zoho submission error (Bill Payments):", error)
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
        <CategoryWithOther
          name="MultipleChoice"
          options={billOptions}
          placeholder="Which bills do you want to manage?*"
          onChange={(val) => {
            setFieldValue("MultipleChoice", val)
          }}
        />
        <ErrorText errors={errors} touched={touched} field="MultipleChoice" />
      </div>

      <div>
        <textarea
          placeholder="Tell us more about your requirement (timelines, specific needs, etc.)"
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

export default BillPaymentForm
