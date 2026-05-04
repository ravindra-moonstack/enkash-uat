"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useFormik } from "formik"
import axios from "axios"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import "@/src/styles/_forms.scss"

// components
import ErrorText from "../../error-text"
import {
    ecommerceAffiliateInitialValue,
    ecommerceAffiliateValidation,
    TEcommerceAffiliateInitialValueProp,
} from "./formik"

const EcommerceAffiliateForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()

    const formik = useFormik({
        initialValues: ecommerceAffiliateInitialValue,
        validationSchema: ecommerceAffiliateValidation,
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

        setFieldValue("SingleLine2", utmSource)
        setFieldValue("SingleLine3", utmMedium)
        setFieldValue("SingleLine4", utmCampaign)
        setFieldValue("SingleLine5", referringPage)
        setFieldValue("SingleLine6", "Website - Payment Gateway")
    }, [])

    const onSubmitForm = async (values: TEcommerceAffiliateInitialValueProp) => {
        try {
            setLoading(true)
            await axios.post("/api/zoho", {
                url: "https://forms.zohopublic.in/Enkash/form/WebsitePaymentGateway/formperma/YD_WfaK7EBxBFCdK_d5lwR6s6Oq13FEax-9X867prvQ/htmlRecords/submit",
                data: values,
            })
            router.push("/confirmation-partnerships")
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error("Zoho submission error:", error)
        }
    }

    return (
        <div className={"contactFormWrapper"}>
            <form action="#" onSubmit={handleSubmit} className="">
                <p className={"subtitle"}>We just need a few quick details</p>

                <div className={"grid"}>
                    <div className="">
                        <input
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Full Name*"
                            {...getFieldProps("SingleLine")}
                        />
                        <ErrorText<TEcommerceAffiliateInitialValueProp>
                            errors={errors}
                            touched={touched}
                            field="SingleLine"
                        />
                    </div>

                    <div className="">
                        <input
                            type="text"
                            required
                            autoComplete="email"
                            placeholder="Work Email*"
                            {...getFieldProps("Email")}
                        />
                        <ErrorText<TEcommerceAffiliateInitialValueProp>
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
                        <ErrorText<TEcommerceAffiliateInitialValueProp>
                            errors={errors}
                            touched={touched}
                            field="SingleLine1"
                        />
                    </div>

                    <div className="">
                        <input
                            type="text"
                            required
                            autoComplete="tel"
                            placeholder="Phone Number*"
                            {...getFieldProps("PhoneNumber_countrycode")}
                        />
                        <ErrorText<TEcommerceAffiliateInitialValueProp>
                            errors={errors}
                            touched={touched}
                            field="PhoneNumber_countrycode"
                        />
                    </div>

                    <div className="">
                        <select
                            required
                            {...getFieldProps("Dropdown5")}
                        >
                            <option value="-Select-">Monthly Merchant Volume*</option>
                            <option value="0 to 5">0 to 5</option>
                            <option value="5 to 10">5 to 10</option>
                            <option value="10+">10+</option>
                        </select>
                        <ErrorText<TEcommerceAffiliateInitialValueProp>
                            errors={errors}
                            touched={touched}
                            field="Dropdown5"
                        />
                    </div>

                    <div className="">
                        <select
                            required
                            {...getFieldProps("Dropdown6")}
                        >
                            <option value="-Select-">Line of Business*</option>
                            <option value="Developers">Developers</option>
                            <option value="ERP/SaaS">ERP/SaaS</option>
                            <option value="Orchestration">Orchestration</option>
                            <option value="Digital Marketing Agency">Digital Marketing Agency</option>
                            <option value="CMS/Plugins">CMS/Plugins</option>
                        </select>
                        <ErrorText<TEcommerceAffiliateInitialValueProp>
                            errors={errors}
                            touched={touched}
                            field="Dropdown6"
                        />
                    </div>
                </div>

                <div className="full-width">
                    <textarea
                        placeholder="Please provide more details that will enable us to better understand your needs."
                        rows={3}
                        {...getFieldProps("MultiLine")}
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

export default EcommerceAffiliateForm
