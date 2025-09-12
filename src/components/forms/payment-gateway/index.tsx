"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import axios from "axios"
import { useFormik } from "formik"

import "@/src/styles/_forms.scss"

// components
import CategoryWithOther from "../../single-select"
import ErrorText from "../../error-text"

// helpers
import { Businessoptions, options } from "./data"
import {
  paymentInitialValue,
  paymentValidation,
  TPaymentInitialValueProp,
} from "./formik"

const PaymentGatewayPartnershipForm: React.FC = () => {
  //

  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue } =
    useFormik({
      initialValues: paymentInitialValue,
      validationSchema: paymentValidation,
      onSubmit: (values) => {
        onSubmitForm(values)
      },
    })

  const onSubmitForm = async (values: TPaymentInitialValueProp) => {
    try {
      setLoading(true)

      const {} = await axios.post("/api/zoho", {
        url: process.env.NEXT_PUBLIC_ZOHO_PARTNERSHIP_URL,
        data: values,
      })

      router.push("/confirmation-partnerships")
      setLoading(false)
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  return (
    <div className={"contactFormWrapper"}>
      <form action="#" onSubmit={handleSubmit}>
        <p className={"subtitle"}>We just need a few quick details</p>

        <div className={"grid"}>
          <div className="">
            <input
              type="text"
              required
              autoComplete="name"
              placeholder="Name*"
              {...getFieldProps("SingleLine")}
            />
            <ErrorText<TPaymentInitialValueProp>
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
            <ErrorText<TPaymentInitialValueProp>
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
            <ErrorText<TPaymentInitialValueProp>
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
            <ErrorText<TPaymentInitialValueProp>
              errors={errors}
              touched={touched}
              field="PhoneNumber_countrycode"
            />
          </div>
        </div>

        <div className="">
          <CategoryWithOther
            name="Dropdown5"
            options={options}
            placeholder="Monthly Merchant Volume"
            onChange={(data) => {
              setFieldValue("Dropdown5", data)
            }}
          />
          <ErrorText<TPaymentInitialValueProp>
            errors={errors}
            touched={touched}
            field="Dropdown5"
          />
        </div>

        <div className="">
          <CategoryWithOther
            name="Dropdown6"
            options={Businessoptions}
            placeholder="Line if Business"
            onChange={(data) => {
              setFieldValue("Dropdown6", data)
            }}
          />
          <ErrorText<TPaymentInitialValueProp>
            errors={errors}
            touched={touched}
            field="Dropdown6"
          />
        </div>

        <div className="">
          <textarea
            name="MultiLine"
            placeholder={`Comments\n(Please provide more details that will enable us to better understand your needs.)`}
          />
          <ErrorText<TPaymentInitialValueProp>
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

export default PaymentGatewayPartnershipForm
