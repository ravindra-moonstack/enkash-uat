"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useFormik } from "formik"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
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

  const formik = useFormik({
    initialValues: supportInitialValue,
    validationSchema: supportValidation,
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
    setFieldValue("SingleLine6", "Support")
  }, [])

  const onSubmitForm = async (values: TSupportInitialValueProp) => {
    try {
      setLoading(true)
      await axios.post("/api/zoho", {
        url: process.env.NEXT_PUBLIC_ZOHO_SUPPORT_URL,
        data: values,
      })
      router.push("/confirmation-support")
    } catch (error) {
      console.error("Zoho submission error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className={"contactFormWrapper"}>
        <form action="#" onSubmit={handleSubmit} className="">
          {/* Static SEO-friendly heading (server-rendered) */}
          <h1 className="text-center">
            How Can <span className="color-black">We Help You</span>
          </h1>

          {/* Your dynamic version for styling/interactivity */}
          <DynamicHeading
            content={[
              { title: "How Can ", color: "color-dark-grey " },
              { title: "We Help You", color: "color-black " },
            ]}
            headingTag="h1"
            className="text-center visually-hidden" // optional
          />

          {/* <DynamicHeading
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
          /> */}

          <p className={"subtitle"}>We just need a few quick details</p>

          <div className={"grid"}>
            <div className="">
              <input
                type="text"
                className=""
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
                className=""
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
                className=""
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
                className=""
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
