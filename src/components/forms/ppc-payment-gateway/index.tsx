"use client"
import React, { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import axios from "axios"
import { useFormik } from "formik"

import "@/src/styles/_forms.scss"

// components
import CategoryWithOther from "../../single-select"
import ErrorText from "../../error-text"
import DynamicHeading from "../../dynamic-heading"

// helpers
import { businessTypeOptions } from "./data"
import {
  ppcPaymentInitialValue,
  ppcPaymentValidation,
  TPpcPaymentInitialValueProp,
} from "./formik"

const PpcPaymentGatewayForm: React.FC = () => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: ppcPaymentInitialValue,
    validationSchema: ppcPaymentValidation,
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
    setFieldValue("SingleLine6", "PPC: Payment Gateway")
  }, [])

  const onSubmitForm = async (values: TPpcPaymentInitialValueProp) => {
    try {
      setLoading(true)
      console.log("PPC Submitted Data:", values)
      await axios.post("/api/zoho", {
        url: process.env.NEXT_PUBLIC_ZOHO_PPC_PAYMENT_GATEWAY_URL || "https://forms.zohopublic.in/Enkash/form/PPCPaymentGateway1/formperma/LIhk3r5I-UeCjtcNux8drLLKexJ-ogkK-AZaUP1fsvY/htmlRecords/submit",
        data: values,
      })

      router.push("/confirmation-partnerships")
    } catch (error) {
      console.error("Zoho PPC submission error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={"contactFormWrapper"}>
      <form action="#" onSubmit={handleSubmit}>
        <DynamicHeading
          content={[
            {
              title: "We just need a few quick details",
              color: "color-black d-block text-center ",
            },
          ]}
          headingTag="h5"
        />
        <div className={"grid"}>
          <div className="">
            <input
              type="text"
              required
              autoComplete="name"
              placeholder="Name*"
              {...getFieldProps("SingleLine")}
            />
            <ErrorText<TPpcPaymentInitialValueProp>
              errors={errors}
              touched={touched}
              field="SingleLine"
            />
          </div>

          <div className="">
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="Business Email ID*"
              {...getFieldProps("Email")}
            />
            <ErrorText<TPpcPaymentInitialValueProp>
              errors={errors}
              touched={touched}
              field="Email"
            />
          </div>

          <div className="">
            <input
              type="text"
              required
              placeholder="Company Name*"
              {...getFieldProps("SingleLine1")}
            />
            <ErrorText<TPpcPaymentInitialValueProp>
              errors={errors}
              touched={touched}
              field="SingleLine1"
            />
          </div>

          <div className="">
            <input
              type="text"
              required
              autoComplete="tel"
              placeholder="Contact No.*"
              {...getFieldProps("PhoneNumber_countrycode")}
            />
            <ErrorText<TPpcPaymentInitialValueProp>
              errors={errors}
              touched={touched}
              field="PhoneNumber_countrycode"
            />
          </div>

          <div className="">
            <input
              type="text"
              required
              placeholder="Website or App Link*"
              {...getFieldProps("Website")}
            />
            <ErrorText<TPpcPaymentInitialValueProp>
              errors={errors}
              touched={touched}
              field="Website"
            />
          </div>

          <div className="">
            <input
              type="text"
              placeholder="GSTIN"
              {...getFieldProps("SingleLine7")}
            />
            <ErrorText<TPpcPaymentInitialValueProp>
              errors={errors}
              touched={touched}
              field="SingleLine7"
            />
          </div>
        </div>

        <div className="">
          <CategoryWithOther
            name="Dropdown6"
            options={businessTypeOptions}
            placeholder="Type of Business"
            onChange={(data) => {
              setFieldValue("Dropdown6", data)
            }}
          />
          <ErrorText<TPpcPaymentInitialValueProp>
            errors={errors}
            touched={touched}
            field="Dropdown6"
          />
        </div>

        <div className="">
          <textarea
            placeholder={`Comments\n(Please provide more details that will enable us to better understand your needs.)`}
            {...getFieldProps("MultiLine")}
          />
          <ErrorText<TPpcPaymentInitialValueProp>
            errors={errors}
            touched={touched}
            field="MultiLine"
          />
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

export default PpcPaymentGatewayForm
