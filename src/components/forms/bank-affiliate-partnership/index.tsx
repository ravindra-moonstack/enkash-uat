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
  bankAffiliateInitialValue,
  bankAffiliateValidation,
  TBankAffiliateInitialValueProp,
} from "./formik"
import { Businessoptions } from "./data"

const BankAffiliatePartnershipForm: React.FC = () => {
  //

  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  const formik = useFormik({
    initialValues: bankAffiliateInitialValue,
    validationSchema: bankAffiliateValidation,
    onSubmit: (values) => {
      onSubmitForm(values)
    },
  })
  const { errors, touched, handleSubmit, getFieldProps, setFieldValue } = formik

  const params = useSearchParams()
  const referringPage = usePathname()

  useEffect(() => {
    const utmSource = params.get("utm_source") || "Website Sales Lead"
    const utmMedium = params.get("utm_medium") || ""
    const utmCampaign = params.get("utm_campaign") || ""

    setFieldValue("SingleLine2", utmSource)
    setFieldValue("SingleLine3", utmMedium)
    setFieldValue("SingleLine4", utmCampaign)
    setFieldValue("SingleLine5", referringPage)
    setFieldValue("SingleLine6", "Bank and Affiliate Partnerships")
  }, [])
  const onSubmitForm = async (values: TBankAffiliateInitialValueProp) => {
    try {
      setLoading(true)
      const {} = await axios.post("/api/zoho", {
        url: process.env.NEXT_PUBLIC_ZOHO_AFFILIATE_URL,
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
            <ErrorText<TBankAffiliateInitialValueProp>
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
            <ErrorText<TBankAffiliateInitialValueProp>
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
            <ErrorText<TBankAffiliateInitialValueProp>
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
            <ErrorText<TBankAffiliateInitialValueProp>
              errors={errors}
              touched={touched}
              field="PhoneNumber_countrycode"
            />
          </div>
        </div>

        <div className="">
          <CategoryWithOther
            name="MultipleChoice"
            options={Businessoptions}
            placeholder="I am looking for *"
            onChange={(data) => {
              setFieldValue("MultipleChoice", data)
            }}
          />
          <ErrorText<TBankAffiliateInitialValueProp>
            errors={errors}
            touched={touched}
            field="MultipleChoice"
          />
        </div>

        <div className="">
          <textarea
            placeholder={`Comments\n(Please provide more details that will enable us to better understand your needs.)`}
            {...getFieldProps("MultiLine")}
            maxLength={500}
          />
          <ErrorText<TBankAffiliateInitialValueProp>
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

export default BankAffiliatePartnershipForm
