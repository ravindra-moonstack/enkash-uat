"use client"
import React, { useState } from "react"
import Link from "next/link"
import { useFormik } from "formik"
import { useRouter } from "next/navigation"

import styles from "./salesForm.module.scss"

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
import axios from "axios"

const SalesForm: React.FC = () => {
  //

  const router = useRouter()

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
      const formData = new FormData()

      Object.entries(values).forEach(([key, value]) => {
        // If value is an array (e.g. for multi-select), append each item separately
        if (Array.isArray(value)) {
          value.forEach((val) => formData.append(key, val))
        } else if (value !== undefined && value !== null) {
          formData.append(key, value)
        }
      })

      const {} = await axios.post(process.env.ZOHO_SALES_URL || "", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept-Charset": "UTF-8",
        },
      })
      router.push("/confirmation-sales")
    } catch (error) {
      throw error
    }
  }

  return (
    <div className={styles.contactFormWrapper}>
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
        <p className={styles.subtitle}>We just need a few quick details</p>

        <div className={styles.grid}>
          <div>
            <input
              type="text"
              placeholder="Name*"
              {...getFieldProps("SingleLine")}
            />
            <ErrorText<TSalesInitialValueProp>
              errors={errors}
              touched={touched}
              field="SingleLine"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Business Email ID*"
              {...getFieldProps("Email")}
            />
            <ErrorText<TSalesInitialValueProp>
              errors={errors}
              touched={touched}
              field="Email"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Company Name*"
              {...getFieldProps("SingleLine1")}
            />
            <ErrorText<TSalesInitialValueProp>
              errors={errors}
              touched={touched}
              field="SingleLine1"
            />
          </div>

          <div>
            <input
              type="text"
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

        {showOtherInput && (
          <input
            type="text"
            name="SomethingElseInput"
            placeholder="Please specify*"
            className={styles.otherInput}
          />
        )}

        <div className={styles.grid}>
          <div>
            <input
              type="text"
              placeholder="Website or App Link"
              {...getFieldProps("Website")}
            />
            <ErrorText<TSalesInitialValueProp>
              errors={errors}
              touched={touched}
              field="Website"
            />
          </div>

          <CategoryWithOther
            name="Dropdown5"
            options={options}
            placeholder="Select how you heard about us*"
          />
        </div>

        <div>
          <textarea
            placeholder={`Comments\n(Please provide more details that will enable us to better understand your needs.)`}
            {...getFieldProps("MultiLine")}
          />
          <ErrorText<TSalesInitialValueProp>
            errors={errors}
            touched={touched}
            field="MultiLine"
          />
        </div>

        <p className={styles.privacy}>
          By submitting this form, you are agreeing to our{" "}
          <Link href="/privacy-policy" className={styles.privacyLink}>
            privacy policy
          </Link>
        </p>

        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default SalesForm
