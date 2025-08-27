"use client"
import React from "react"
import Script from "next/script"
import styles from "./contactForm.module.scss"
import { DynamicHeading } from "@/components"
import Link from "next/link"
import MultiSelect from "../multiSelect"
import { contactOptions } from "./data"
import {
  contactInitialValue,
  contactValidation,
  TContactInitialValueProp,
} from "./formik"
import { useRouter } from "next/navigation"
import { useFormik } from "formik"
import axios from "axios"
import ErrorText from "../ErrorText"

const ContactForm: React.FC = () => {
  //

  const router = useRouter()

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
      const formData = new FormData()

      Object.entries(values).forEach(([key, value]) => {
        // If value is an array (e.g. for multi-select), append each item separately
        if (Array.isArray(value)) {
          value.forEach((val) => formData.append(key, val))
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
      router.push("/confirmation-contact-us")
    } catch (error) {
      throw error
    }
  }

  return (
    <>
      {/* Load Zoho validation.js */}
      <Script src="./validation.js" strategy="afterInteractive" />

      <div className={styles.contactFormWrapper}>
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
          <p className={styles.subtitle}>We just need a few quick details</p>
          <div className={styles.grid}>
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
              <ErrorText
                errors={errors}
                touched={touched}
                field="SingleLine1"
              />
            </div>

            <div>
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

          <MultiSelect
            name="contactReasons"
            options={contactOptions}
            placeholder="How can we help you?*"
            onChange={(data) => {
              setFieldValue("contactReasons", data)
            }}
          />

          <textarea
            name="MultiLine"
            placeholder={`Comments\n(Please provide more details that will enable us to better understand your needs.)`}
          />
      
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
    </>
  )
}

export default ContactForm
