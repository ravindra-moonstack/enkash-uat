"use client"
import React, { useState } from "react"
import Link from "next/link"
import { useFormik } from "formik"
import { useRouter } from "next/navigation"
import axios from "axios"

import "@/src/styles/_forms.scss"

// components
import { DynamicHeading } from "@/src/components"
import MultiSelect from "../../multi-select"
import ErrorText from "../../error-text"

// helpers
import {
  supportInitialValue,
  supportValidation,
  TSupportInitialValueProp,
} from "./formik"
import { contactOptions } from "./data"

const SupportForm: React.FC = () => {
  //

  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue } =
    useFormik({
      initialValues: supportInitialValue,
      validationSchema: supportValidation,
      onSubmit: (values) => {
        onSubmitForm(values)
      },
    })

  const onSubmitForm = async (values: TSupportInitialValueProp) => {
    try {
      setLoading(true)
      const {} = await axios.post("/api/zoho", {
        url: process.env.NEXT_PUBLIC_ZOHO_SUPPORT_URL,
        data: values,
      })
      router.push("/confirmation-support")
      setLoading(false)
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  return (
    <>
      <div className={"contactFormWrapper"}>
        <form action="#" onSubmit={handleSubmit}>
          <DynamicHeading
            content={[
              {
                title: "How Can ",
                color: "color-dark-grey ",
              },
              {
                title: "We Help You",
                color: "color-black ",
              },
            ]}
            headingTag="h1"
            className="text-center "
          />

          <p className={"subtitle"}>We just need a few quick details</p>

          <div className={"grid"}>
            <div className="">
              <input
                type="text"
                required
                placeholder="Name*"
                autoComplete="text"
                {...getFieldProps("SingleLine")}
              />
              <ErrorText<TSupportInitialValueProp>
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
                autoComplete="email"
                {...getFieldProps("Email")}
              />
              <ErrorText<TSupportInitialValueProp>
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
              <ErrorText<TSupportInitialValueProp>
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
                autoComplete="tel"
                {...getFieldProps("PhoneNumber_countrycode")}
              />
              <ErrorText<TSupportInitialValueProp>
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
            <ErrorText<TSupportInitialValueProp>
              errors={errors}
              touched={touched}
              field="MultipleChoice"
            />
          </div>

          <div className="">
            <textarea
              maxLength={500}
              placeholder={`Comments\n(Please provide more details that will enable us to better understand your needs.)`}
              {...getFieldProps("MultiLine")}
            />
            <ErrorText<TSupportInitialValueProp>
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
    </>
  )
}

export default SupportForm
