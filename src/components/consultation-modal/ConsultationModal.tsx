"use client"

import React, { useState, useEffect } from "react"
import { Modal } from "react-bootstrap"
import { useFormik } from "formik"
import * as Yup from "yup"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import axios from "axios"
import { FiX } from "react-icons/fi"
import styles from "./ConsultationModal.module.scss"
import CommonButton from "../buttons"

const ConsultationModal = () => {
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    const searchParams = useSearchParams()

    useEffect(() => {
        const isResourcePage = pathname.startsWith("/resources")

        if (isResourcePage) {
            const hasSeenModal = sessionStorage.getItem("hasSeenConsultationModal")

            if (!hasSeenModal) {
                const timer = setTimeout(() => {
                    setShow(true)
                }, 4000)

                return () => clearTimeout(timer)
            }
        }
    }, [pathname])

    const handleClose = () => {
        setShow(false)
        sessionStorage.setItem("hasSeenConsultationModal", "true")
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            company: "",
            phone: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            company: Yup.string().required("Required"),
            phone: Yup.string().required("Required").matches(/^[0-9+ ]+$/, "Invalid phone number"),
        }),
        onSubmit: async (values) => {
            setLoading(true)
            try {
                const getCookie = (name: string) => {
                    if (typeof document === "undefined") return ""
                    const value = `; ${document.cookie}`
                    const parts = value.split(`; ${name}=`)
                    if (parts.length === 2) return parts.pop()?.split(";").shift() || ""
                    return ""
                }

                // Mapping bits to Zoho format based on provided PHP logic
                const zohoData = {
                    SingleLine: values.name,
                    Email: values.email,
                    SingleLine1: values.company,
                    PhoneNumber_countrycode: values.phone,

                    // Static Dropdown Values
                    Dropdown: "",
                    Dropdown1: "",

                    // UTM Parameters mapped to specific Zoho fields
                    SingleLine3: searchParams.get("utm_source") || "",
                    SingleLine2: searchParams.get("utm_medium") || "",
                    SingleLine4: searchParams.get("utm_campaign") || "",

                    // Required tracking fields
                    zf_referrer_name: typeof document !== "undefined" ? document.referrer : "",
                    zf_redirect_url: typeof window !== "undefined" ? `${window.location.origin}/confirmation-sales` : "",
                    zc_gad: getCookie("zc_gad"),

                    // Additional context fields (optional but kept for internal tracking)
                    SingleLine5: pathname,
                    SingleLine6: "Resource Page Consultation Modal",
                }

                await axios.post("/api/zoho", {
                    url: process.env.NEXT_PUBLIC_ZOHO_SALES_URL,
                    data: zohoData,
                })

                handleClose()
                router.push("/confirmation-sales")
            } catch (error) {
                console.error("Submission error:", error)
            } finally {
                setLoading(false)
            }
        },
    })

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            size="lg"
            className={styles.modal_overlay_custom}
            backdrop="static"
        >
            <div className={styles.modal_body}>
                <button className={styles.close_btn} onClick={handleClose}>
                    <FiX />
                </button>

                <div className={styles.content_wrapper}>
                    <h2 className={styles.title}>Seen the Problem? Now Let's Solve It.</h2>
                    <p className={styles.subtitle}>
                        Turn insights into action — book a no obligation quick consult.
                    </p>

                    <form onSubmit={formik.handleSubmit} className={styles.consultation_form}>
                        <div className={styles.input_group}>
                            <input
                                type="text"
                                placeholder="Name"
                                {...formik.getFieldProps("name")}
                            />
                        </div>
                        <div className={styles.input_group}>
                            <input
                                type="email"
                                placeholder="Business Email ID"
                                {...formik.getFieldProps("email")}
                            />
                        </div>
                        <div className={styles.input_group}>
                            <input
                                type="text"
                                placeholder="Company Name"
                                {...formik.getFieldProps("company")}
                            />
                        </div>
                        <div className={styles.input_group}>
                            <input
                                type="text"
                                placeholder="Contact No."
                                {...formik.getFieldProps("phone")}
                            />
                        </div>
                    </form>
                    <div className={styles.submit_btn_wrapper}>
                        <CommonButton title={loading ? "Submitting..." : "Let's Do This"} theme="blue" url={formik.handleSubmit} isDisabled={loading} className={styles.submit_btn} />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ConsultationModal
