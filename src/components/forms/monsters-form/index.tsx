"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useFormik } from "formik"
import axios from "axios"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import "@/src/styles/_forms.scss"

// components
import ErrorText from "../../error-text"
import CategoryWithOther from "../../single-select"
import {
  monstersFormInitialValue,
  monstersFormValidation,
  TMonstersFormInitialValueProp,
} from "./formik"
import { Businessoptions } from "./data"

const MonstersFormClient: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()
  const params = useSearchParams()
  const referringPage = usePathname()

  const formik = useFormik({
    initialValues: monstersFormInitialValue,
    validationSchema: monstersFormValidation,
    onSubmit: (values) => {
      onSubmitForm(values)
    },
  })
  const { errors, touched, handleSubmit, getFieldProps, setFieldValue } = formik

  useEffect(() => {
    const utmSource = params.get("utm_source") || "Website Sales Lead"
    const utmMedium = params.get("utm_medium") || ""
    const utmCampaign = params.get("utm_campaign") || ""

    setFieldValue("SingleLine2", utmSource)
    setFieldValue("SingleLine3", utmMedium)
    setFieldValue("SingleLine4", utmCampaign)
    setFieldValue("SingleLine5", referringPage)
    setFieldValue("SingleLine6", "PPC: Payment Gateway")
  }, [params, referringPage, setFieldValue])

  const onSubmitForm = async (values: TMonstersFormInitialValueProp) => {
    try {
      setLoading(true)
      await axios.post("/api/zoho", {
        url: "https://forms.zohopublic.in/Enkash/form/PaymentMonstersCampaignForm/formperma/1HcjaNDQZbOmCEcOpmBxwAqO01R5aXpdFRaYGSNZh8Y/htmlRecords/submit",
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
      <form action="#" onSubmit={handleSubmit} className="">
        <p className={"subtitle"}>We just need a few quick details</p>

        <div className={"grid"}>
          <div className="">
            <input
              className=""
              type="text"
              required
              autoComplete="name"
              placeholder="Name*"
              {...getFieldProps("SingleLine")}
            />
            <ErrorText<TMonstersFormInitialValueProp>
              errors={errors}
              touched={touched}
              field="SingleLine"
            />
          </div>

          <div className="">
            <input
              type="text"
              className=""
              required
              autoComplete="email"
              placeholder="Business Email ID*"
              {...getFieldProps("Email")}
            />
            <ErrorText<TMonstersFormInitialValueProp>
              errors={errors}
              touched={touched}
              field="Email"
            />
          </div>

          <div className="">
            <input
              type="text"
              className=""
              required
              placeholder="Company Name*"
              {...getFieldProps("SingleLine1")}
            />
            <ErrorText<TMonstersFormInitialValueProp>
              errors={errors}
              touched={touched}
              field="SingleLine1"
            />
          </div>

          <div className="">
            <input
              type="text"
              className=""
              required
              autoComplete="tel"
              placeholder="Contact No.*"
              {...getFieldProps("PhoneNumber_countrycode")}
            />
            <ErrorText<TMonstersFormInitialValueProp>
              errors={errors}
              touched={touched}
              field="PhoneNumber_countrycode"
            />
          </div>
        </div>

        <div className={"grid"}>
          <div className="">
            <input
              type="text"
              className=""
              placeholder="Website or App Link"
              {...getFieldProps("Website")}
            />
            <ErrorText<TMonstersFormInitialValueProp>
              errors={errors}
              touched={touched}
              field="Website"
            />
          </div>

          <div className="">
            <input
              type="text"
              className=""
              placeholder="GSTIN"
              {...getFieldProps("SingleLine7")}
            />
            <ErrorText<TMonstersFormInitialValueProp>
              errors={errors}
              touched={touched}
              field="SingleLine7"
            />
          </div>
        </div>

        <div className="">
          <CategoryWithOther
            name="Dropdown6"
            options={Businessoptions}
            placeholder="Type of Business *"
            onChange={(data) => {
              setFieldValue("Dropdown6", data)
            }}
          />
          <ErrorText<TMonstersFormInitialValueProp>
            errors={errors}
            touched={touched}
            field="Dropdown6"
          />
        </div>

        <div className="">
          <textarea
            placeholder={`Comments\n(Please provide more details that will enable us to better understand your needs.)`}
            {...getFieldProps("MultiLine")}
            maxLength={500}
          />
          <ErrorText<TMonstersFormInitialValueProp>
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

      </form>
    </div>
  )
}

export default MonstersFormClient
