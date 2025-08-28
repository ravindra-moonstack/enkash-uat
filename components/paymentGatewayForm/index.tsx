"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import axios from "axios"
import { useFormik } from "formik"

import "../../styles/_forms.scss"

// components
import { DynamicHeading } from "@/components"
import CategoryWithOther from "../categoryWithOther/categoryWithOther"
import ErrorText from "../ErrorText"

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
      const formData = new FormData()

      Object.entries(values).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formData.append(key, value.join(", "))
        } else if (value !== undefined && value !== null) {
          formData.append(key, value)
        }
      })

      const {} = await axios.post(
        process.env.ZOHO_PARTNERSHIP_URL || "",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Accept-Charset": "UTF-8",
          },
        }
      )
      setLoading(false)
      router.push("/confirmation-partnerships")
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  return (
    <div className={"contactFormWrapper"}>
      <form action="#" onSubmit={handleSubmit}>
        <DynamicHeading
          content={[
            { title: "Payment Gateway ", color: "color-black " },
            { title: "Partnerships", color: "color-dark-grey " },
          ]}
          headingTag="h2"
          className="text-center "
        />
        <p className={"subtitle"}>We just need a few quick details</p>

        <div className={"grid"}>
          <div className="">
            <input
              type="text"
              required
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
          <Link href="/privacy-policy" className={"privacyLink"}>
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
