"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useFormik } from "formik"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import axios from "axios"
import "@/src/styles/_forms.scss"

// components
import MultiSelect from "../../multi-select"

// helpers
import { contactOptions } from "./data"
import {
  contactInitialValue,
  contactValidation,
  TContactInitialValueProp,
} from "./formik"
import ErrorText from "../../error-text"

const ContactForm: React.FC = () => {
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: contactInitialValue,
    validationSchema: contactValidation,
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

    setFieldValue("SingleLine2", utmSource)
    setFieldValue("SingleLine3", utmMedium)
    setFieldValue("SingleLine4", utmCampaign)
    setFieldValue("SingleLine5", referringPage)
    setFieldValue("SingleLine6", "Contact Us")
  }, [])

  const onSubmitForm = async (values: TContactInitialValueProp) => {
    try {
      setLoading(true)
      await axios.post("/api/zoho", {
        url: process.env.NEXT_PUBLIC_ZOHO_CONTACT_URL,
        data: values,
      })

      router.push("/confirmation-contact-us")
    } catch (error) {
      console.error("Zoho submission error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form action="#" onSubmit={handleSubmit} className="pt-4">
        <div className={"grid"}>
          <div>
            <input
              type="text"
              className=""
              required
              placeholder="Name*"
              autoComplete="name"
              {...getFieldProps("SingleLine")}
            />
            <ErrorText errors={errors} touched={touched} field="SingleLine" />
          </div>
          <div>
            <input
              type="email"
              required
              className=""
              placeholder="Business Email ID*"
              autoComplete="email"
              {...getFieldProps("Email")}
            />
            <ErrorText errors={errors} touched={touched} field="SingleLine" />
          </div>
          <div>
            <input
              type="text"
              required
              placeholder="Company Name*"
              {...getFieldProps("SingleLine1")}
            />
            <ErrorText errors={errors} touched={touched} field="SingleLine1" />
          </div>

          <div className="">
            <input
              type="text"
              required
              className=""
              placeholder="Contact No.*"
              autoComplete="tel"
              {...getFieldProps("PhoneNumber_countrycode")}
            />
            <ErrorText
              errors={errors}
              touched={touched}
              field="PhoneNumber_countrycode"
            />
          </div>
        </div>

        <div className="">
          <MultiSelect
            name="MultipleChoice"
            options={contactOptions}
            placeholder="How can we help you?*"
            onChange={(data) => {
              setFieldValue("MultipleChoice", data)
            }}
          />
          <ErrorText errors={errors} touched={touched} field="MultipleChoice" />
        </div>

        <div className="">
          <textarea
            placeholder={`Comments\n(Please provide more details that will enable us to better understand your needs.)`}
            maxLength={500}
            {...getFieldProps("MultiLine")}
          />
          <ErrorText errors={errors} touched={touched} field="MultiLine" />
        </div>

        <p className={"privacy"}>
          By submitting this form, you are agreeing to our{" "}
          <Link href="/policies/privacy-policy" className={"privacyLink"}>
            privacy policy
          </Link>
        </p>
        <button type="submit" disabled={loading} className={"submitBtn"}>
          {loading ? "..." : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
