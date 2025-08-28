"use client"
import React, { useState } from "react"
import Link from "next/link"
import { useFormik } from "formik"
import { useRouter } from "next/navigation"
import axios from "axios"

import "../../styles/_forms.scss"

// components
import { DynamicHeading } from "@/components"
import MultiSelect from "../multiSelect"

// helpers
import { contactOptions } from "./data"
import {
  contactInitialValue,
  contactValidation,
  TContactInitialValueProp,
} from "./formik"
import ErrorText from "../ErrorText"

const ContactForm: React.FC = () => {
  //

  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue } =
    useFormik({
      initialValues: contactInitialValue,
      validationSchema: contactValidation,
      onSubmit: (values) => {
        onSubmitForm(values)
      },
    })

  const onSubmitForm = async (values: TContactInitialValueProp) => {
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
        process.env.ZOHO_CONTACT_URL || "",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Accept-Charset": "UTF-8",
          },
        }
      )
      setLoading(false)
      router.push("/confirmation-contact-us")
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
            {
              title: "Let's Connect",
              color: "color-black ",
            },
          ]}
          headingTag="h1"
          className="text-center "
        />
        <p className={"subtitle"}>We just need a few quick details</p>
        <div className={"grid"}>
          <div>
            <input
              type="text"
              required
              placeholder="Name*"
              {...getFieldProps("SingleLine")}
            />
            <ErrorText errors={errors} touched={touched} field="SingleLine" />
          </div>
          <div>
            <input
              type="email"
              required
              placeholder="Business Email ID*"
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
              placeholder="Contact No.*"
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
            name="contactReasons"
            options={contactOptions}
            placeholder="How can we help you?*"
            onChange={(data) => {
              setFieldValue("contactReasons", data)
            }}
          />
          <ErrorText errors={errors} touched={touched} field="contactReasons" />
        </div>

        <div className="">
          <textarea
            name="MultiLine"
            placeholder={`Comments\n(Please provide more details that will enable us to better understand your needs.)`}
            minLength={500}
          />
          <ErrorText errors={errors} touched={touched} field="MultiLine" />
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

export default ContactForm
