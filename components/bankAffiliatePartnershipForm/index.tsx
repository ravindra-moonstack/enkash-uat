"use client"
import React, { useState } from "react"
import Link from "next/link"
import { useFormik } from "formik"
import axios from "axios"
import { useRouter } from "next/navigation"

import "../../styles/_forms.scss"

// components
import ErrorText from "../ErrorText"
import CategoryWithOther from "../categoryWithOther/categoryWithOther"
import {
  bankAffiliateInitialValue,
  TBankAffiliateInitialValueProp,
} from "./formik"
import { Businessoptions } from "./data"

const BankAffiliatePartnershipForm: React.FC = () => {
  //

  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  const { errors, touched, getFieldProps, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: bankAffiliateInitialValue,
      onSubmit: (values) => {
        onSubmitForm(values)
      },
    })

  const onSubmitForm = async (values: TBankAffiliateInitialValueProp) => {
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
        process.env.NEXT_PUBLIC_ZOHO_AFFILIATE_URL || "",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Accept-Charset": "UTF-8",
          },
        }
      )

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
              required
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
              required
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

export default BankAffiliatePartnershipForm
