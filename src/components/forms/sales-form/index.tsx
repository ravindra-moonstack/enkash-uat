"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useFormik } from "formik"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import axios from "axios"
import "@/src/styles/_forms.scss"

// components
import { DynamicHeading } from "@/src/components"
import ErrorText from "../../error-text"
import CategoryMultiSelect from "../../category-multi-select"
import CategoryWithOther from "../../single-select"

import {
  salesInitialValue,
  salesValidation,
  TSalesInitialValueProp,
} from "./formik"
import { categoryOptions, options } from "./data"

interface SalesFormProps {
  isParagraph?: boolean
}

const SalesForm: React.FC<SalesFormProps> = ({ isParagraph = false }) => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [showOtherInput, setShowOtherInput] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: salesInitialValue,
    validationSchema: salesValidation,
    onSubmit: (values) => {
      onSubmitForm(values)
    },
  })

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue } = formik

  const params = useSearchParams()
  const referringPage = usePathname()

  useEffect(() => {
    const utmSource = "Website Sales Leads"

    const utmMedium = params.get("utm_medium") || ""
    const utmCampaign = params.get("utm_campaign") || ""

    console.log({
      utmSource,
      utmMedium,
      utmCampaign,
      referringPage,
    })

    setFieldValue("SingleLine2", utmSource)
    setFieldValue("SingleLine3", utmMedium)
    setFieldValue("SingleLine4", utmCampaign)
    setFieldValue("SingleLine5", referringPage)
    setFieldValue("SingleLine6", "Talk to Sales")
  }, [])

  const onSubmitForm = async (values: TSalesInitialValueProp) => {
    try {
      setLoading(true)
      console.log("Submitted Data:", values)

      await axios.post("/api/zoho", {
        url: process.env.NEXT_PUBLIC_ZOHO_SALES_URL,
        data: values,
      })

      router.push("/confirmation-sales")
    } catch (error) {
      console.error("Zoho submission error:", error)
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
            autoComplete="name"
            {...getFieldProps("SingleLine")}
          />
          <ErrorText errors={errors} touched={touched} field="SingleLine" />
        </div>

        <div>
          <input
            type="email"
            required
            placeholder="Business Email ID*"
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
            {...getFieldProps("SingleLine1")}
          />
          <ErrorText errors={errors} touched={touched} field="SingleLine1" />
        </div>

        <div>
          <input
            type="text"
            required
            maxLength={13}
            placeholder="Contact No.*"
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

      <div>
        <CategoryMultiSelect
          name="MultipleChoice"
          options={categoryOptions}
          placeholder="What are you looking for?*"
          onChange={(parent, children) => {
            setShowOtherInput(parent.includes("Something Else"))
            setFieldValue("MultipleChoice", parent)
            setFieldValue("MultipleChoice1", children)
          }}
        />
        <ErrorText errors={errors} touched={touched} field="MultipleChoice" />
      </div>

      {showOtherInput && (
        <input
          type="text"
          required
          placeholder="Please specify*"
          maxLength={500}
          className="otherInput"
          {...getFieldProps("SomethingElseInput")}
        />
      )}

      <div className="grid">
        <div>
          <input
            type="url"
            placeholder="Website or App Link"
            {...getFieldProps("Website")}
          />
          <ErrorText errors={errors} touched={touched} field="Website" />
        </div>

        <div>
          <CategoryWithOther
            name="Dropdown5"
            options={options}
            placeholder="How you heard about us"
            onChange={(data) => {
              setFieldValue("Dropdown5", data)
            }}
          />
          <ErrorText errors={errors} touched={touched} field="Dropdown5" />
        </div>
      </div>

      <div>
        <textarea
          placeholder={`Comments\n(Please provide more details that will enable us to better understand your needs.)`}
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

export default SalesForm
