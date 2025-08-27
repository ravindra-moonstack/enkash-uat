"use client"
import React from "react"
import Link from "next/link"
import { useFormik } from "formik"
import axios from "axios"
import { useRouter } from "next/navigation"

import styles from "./bankAffiliatePartnershipForm.module.scss"

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
        process.env.ZOHO_AFFILIATE_URL || "",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Accept-Charset": "UTF-8",
          },
        }
      )
      router.push("/confirmation-sales")
    } catch (error) {
      throw error
    }
  }

  return (
    <div className={styles.contactFormWrapper}>
      <form action="#" onSubmit={handleSubmit}>
        <p className={styles.subtitle}>We just need a few quick details</p>

        <div className={styles.grid}>
          <div>
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

          <div>
            <input
              type="text"
              placeholder="Business Email ID*"
              {...getFieldProps("Email")}
            />
            <ErrorText<TBankAffiliateInitialValueProp>
              errors={errors}
              touched={touched}
              field="Email"
            />
          </div>

          <div>
            <input type="text" name="SingleLine1" placeholder="Company Name*" />
            <ErrorText<TBankAffiliateInitialValueProp>
              errors={errors}
              touched={touched}
              field="SingleLine1"
            />
          </div>

          <div className="">
            <input
              type="text"
              name="PhoneNumber_countrycode"
              placeholder="Contact No.*"
              id="international_PhoneNumber_countrycode"
            />
            <ErrorText<TBankAffiliateInitialValueProp>
              errors={errors}
              touched={touched}
              field="PhoneNumber_countrycode"
            />
          </div>
        </div>

        <div>
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
          />
          <ErrorText<TBankAffiliateInitialValueProp>
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

export default BankAffiliatePartnershipForm
