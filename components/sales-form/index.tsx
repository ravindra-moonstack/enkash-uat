"use client"
import React, { useState } from "react"
import Link from "next/link"
import { useFormik } from "formik"
import { useRouter } from "next/navigation"
import axios from "axios"

import "../../styles/_forms.scss"

// components
import { DynamicHeading } from "@/components"
import ErrorText from "../ErrorText"
import CategoryMultiSelect from "../categoryMultiSelect"
import CategoryWithOther from "../categoryWithOther/categoryWithOther"
import {
  salesInitialValue,
  salesValidation,
  TSalesInitialValueProp,
} from "./formik"
import { categoryOptions, options } from "./data"

const SalesForm: React.FC = () => {
  //

  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)

  const [showOtherInput, setShowOtherInput] = useState(false)

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue } =
    useFormik({
      initialValues: salesInitialValue,
      validationSchema: salesValidation,
      onSubmit: (values) => {
        onSubmitForm(values)
      },
    })

  const onSubmitForm = async (values: TSalesInitialValueProp) => {
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

      const { } = await axios.post(process.env.ZOHO_SALES_URL || "", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept-Charset": "UTF-8",
        },
      })

      router.push("/confirmation-sales")
      setLoading(false)
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  return (
    <div className={"contactFormWrapper"}>
      <form action="#" onSubmit={handleSubmit} className="">
        <DynamicHeading
          content={[{ title: "New to EnKash? ", color: "color-dark-grey " }]}
          headingTag="h5"
          className="text-center "
        />
        <DynamicHeading
          content={[
            { title: "Talk", color: "color-black " },
            { title: " to Sales", color: "color-dark-grey " },
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
              {...getFieldProps("SingleLine")}
            />
            <ErrorText<TSalesInitialValueProp>
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
            <ErrorText<TSalesInitialValueProp>
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
            <ErrorText<TSalesInitialValueProp>
              errors={errors}
              touched={touched}
              field="SingleLine1"
            />
          </div>

          <div className="">
            <input
              type="text"
              required
              maxLength={13}
              placeholder="Contact No.*"
              id="international_PhoneNumber_countrycode"
              {...getFieldProps("PhoneNumber_countrycode")}
            />
            <ErrorText<TSalesInitialValueProp>
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
            onChange={(vals) => {
              setShowOtherInput(vals.includes("Something Else"))
              setFieldValue("MultipleChoice", vals)
            }}
          />
          <ErrorText<TSalesInitialValueProp>
            errors={errors}
            touched={touched}
            field="MultipleChoice"
          />
        </div>

        {showOtherInput && (
          <input
            type="text"
            placeholder="Please specify*"
            maxLength={500}
            className={"otherInput"}
            {...getFieldProps("SomethingElseInput")}
          />
        )}

        <div className={"grid"}>
          <div>
            <input
              type="url"
              placeholder="Website or App Link"
              {...getFieldProps("Website")}
            />
            <ErrorText<TSalesInitialValueProp>
              errors={errors}
              touched={touched}
              field="Website"
            />
          </div>

          <div className="">
            <CategoryWithOther
              name="Dropdown5"
              options={options}
              placeholder="Select how you heard about us*"
              onChange={(data) => {
                setFieldValue("Dropdown5", data)
              }}
            />
            <ErrorText<TSalesInitialValueProp>
              errors={errors}
              touched={touched}
              field="Dropdown5"
            />
          </div>
        </div>

        <div>
          <textarea
            placeholder={`Comments\n(Please provide more details that will enable us to better understand your needs.)`}
            maxLength={500}
            {...getFieldProps("MultiLine")}
          />
          <ErrorText<TSalesInitialValueProp>
            errors={errors}
            touched={touched}
            field="MultiLine"
          />
        </div>

        <p className={"privacy"}>
          By submitting this form, you are agreeing to our
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

export default SalesForm
