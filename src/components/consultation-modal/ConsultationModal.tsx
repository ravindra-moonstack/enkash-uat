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
    const [submitError, setSubmitError] = useState<string | null>(null)
    const pathname = usePathname()
    const router = useRouter()

    const searchParams = useSearchParams()

    useEffect(() => {
        const isResourcePage = pathname.startsWith("/resources")
        if (!isResourcePage) return

        const hasSeenModal = sessionStorage.getItem("hasSeenConsultationModal")
        if (hasSeenModal) return

        const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
        let timer: NodeJS.Timeout

        if (isMobile) {
            // Mobile: Show after 10 seconds
            timer = setTimeout(() => {
                setShow(true)
            }, 10000)
        } else {
            // Desktop: Exit Intent (top of browser)
            const handleExitIntent = (e: MouseEvent) => {
                if (e.clientY <= 20) {
                    setShow(true)
                    document.removeEventListener("mouseout", handleExitIntent)
                }
            }

            document.addEventListener("mouseout", handleExitIntent)

            return () => {
                document.removeEventListener("mouseout", handleExitIntent)
            }
        }

        return () => {
            if (timer) clearTimeout(timer)
        }
    }, [pathname])

    const handleClose = () => {
        setShow(false)
        setSubmitError(null)
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
            email: Yup.string()
                .email("Invalid email")
                .required("Required")
                .test("is-business-email", "Personal domains are not allowed. Please enter your business email.", (value) => {
                    if (!value) return true;
                    const restrictedDomains = ["gmail.com", "hotmail.com", "yahoo.com", "email.com"];
                    const domain = value.split("@")[1]?.toLowerCase().trim();
                    if (!domain) return false;
                    return !restrictedDomains.some(d => domain === d || domain.endsWith("." + d));
                }),
            company: Yup.string().required("Required"),
            phone: Yup.string()
                .required("Required")
                .matches(/^[0-9+\-\s()]+$/, "Invalid phone number format")
                .test("is-valid-phone", "Please enter a valid 10-digit phone number", (value) => {
                    if (!value) return false;
                    const cleaned = value.replace(/\D/g, "");
                    return cleaned.length >= 10 && cleaned.length <= 15;
                }),
        }),
        onSubmit: async (values) => {
            setLoading(true)
            setSubmitError(null)
            try {
                const getCookie = (name: string) => {
                    if (typeof document === "undefined") return ""
                    const value = `; ${document.cookie}`
                    const parts = value.split(`; ${name}=`)
                    if (parts.length === 2) return parts.pop()?.split(";").shift() || ""
                    return ""
                }

                // Sanitize phone number to exactly 10 digits for Zoho
                const cleanedPhone = values.phone.replace(/\D/g, "");
                const sanitizedPhone = cleanedPhone.length > 10 ? cleanedPhone.slice(-10) : cleanedPhone;

                const formData = new FormData()
                formData.append("zf_referrer_name", typeof document !== "undefined" ? document.referrer : "")
                formData.append("zf_redirect_url", "")
                formData.append("zc_gad", getCookie("zc_gad"))
                formData.append("SingleLine", values.name)
                formData.append("Email", values.email)
                formData.append("SingleLine1", values.company)
                formData.append("PhoneNumber_countrycode", sanitizedPhone)
                formData.append("Dropdown", "-Select-")
                formData.append("Dropdown1", "-Select-")
                formData.append("SingleLine3", searchParams.get("utm_source") || "")
                formData.append("SingleLine2", searchParams.get("utm_medium") || "")
                formData.append("SingleLine4", searchParams.get("utm_campaign") || "")

                await axios.post("/api/zoho", {
                    url: process.env.NEXT_PUBLIC_ZOHO_EXIT_INTEND_URL,
                    data: Object.fromEntries(formData),
                    isFormData: true
                })

                handleClose()
                router.push("/confirmation-sales")
            } catch (error: any) {
                console.error("Submission error:", error)
                
                let rawHtml = "";
                if (error.response?.data?.error?.message) {
                    rawHtml = error.response.data.error.message;
                } else if (typeof error.response?.data?.error === "string") {
                    rawHtml = error.response.data.error;
                } else if (error.response?.data?.message) {
                    rawHtml = error.response.data.message;
                } else {
                    rawHtml = error.message || "";
                }

                // If it contains Zoho error signature, extract clean messages
                if (rawHtml && rawHtml.includes("Error Occurred!")) {
                    const regex = /<p><b>(.*?)<\/b>(.*?)<\/p>/gi;
                    let match;
                    const fieldErrors: { [key: string]: string } = {};
                    const generalErrors: string[] = [];
                    
                    while ((match = regex.exec(rawHtml)) !== null) {
                        const field = match[1].replace(/<[^>]*>/g, "").trim();
                        const msg = match[2].replace(/<[^>]*>/g, "").trim();
                        
                        const fieldLower = field.toLowerCase();
                        if (fieldLower.includes("email")) {
                            fieldErrors.email = msg;
                        } else if (fieldLower.includes("phone") || fieldLower.includes("contact") || fieldLower.includes("number")) {
                            fieldErrors.phone = msg;
                        } else if (fieldLower.includes("company")) {
                            fieldErrors.company = msg;
                        } else if (fieldLower.includes("name")) {
                            fieldErrors.name = msg;
                        } else {
                            generalErrors.push(`${field}: ${msg}`);
                        }
                    }

                    if (Object.keys(fieldErrors).length > 0) {
                        formik.setErrors(fieldErrors);
                        // Mark the fields as touched so the errors are displayed immediately
                        const touchedState = Object.keys(fieldErrors).reduce((acc, key) => {
                            acc[key] = true;
                            return acc;
                        }, {} as { [key: string]: boolean });
                        formik.setTouched(touchedState);
                    }

                    if (generalErrors.length > 0) {
                        setSubmitError(generalErrors.join(" | "));
                    } else if (Object.keys(fieldErrors).length > 0) {
                        setSubmitError(null);
                    }
                    return;
                }

                setSubmitError("Submission failed. Please check your details and try again.");
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
                    <h2 className={styles.title}>Reading About Problems Won’t Fix Them.</h2>
                    <p className={styles.subtitle}>
                        Get practical answers for your business from people who’ve built the solutions.
                    </p>

                    <form onSubmit={formik.handleSubmit} className={styles.consultation_form}>
                        <div className={styles.input_group}>
                            <input
                                type="text"
                                placeholder="Name"
                                className={formik.touched.name && formik.errors.name ? styles.input_error : ""}
                                {...formik.getFieldProps("name")}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <span className={styles.error_message}>{formik.errors.name}</span>
                            )}
                        </div>
                        <div className={styles.input_group}>
                            <input
                                type="email"
                                placeholder="Business Email ID"
                                className={formik.touched.email && formik.errors.email ? styles.input_error : ""}
                                {...formik.getFieldProps("email")}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <span className={styles.error_message}>{formik.errors.email}</span>
                            )}
                        </div>
                        <div className={styles.input_group}>
                            <input
                                type="text"
                                placeholder="Company Name"
                                className={formik.touched.company && formik.errors.company ? styles.input_error : ""}
                                {...formik.getFieldProps("company")}
                            />
                            {formik.touched.company && formik.errors.company && (
                                <span className={styles.error_message}>{formik.errors.company}</span>
                            )}
                        </div>
                        <div className={styles.input_group}>
                            <input
                                type="text"
                                placeholder="Contact No."
                                className={formik.touched.phone && formik.errors.phone ? styles.input_error : ""}
                                {...formik.getFieldProps("phone")}
                            />
                            {formik.touched.phone && formik.errors.phone && (
                                <span className={styles.error_message}>{formik.errors.phone}</span>
                            )}
                        </div>
                    </form>

                    {submitError && (
                        <div className={styles.form_error_message}>
                            {submitError}
                        </div>
                    )}

                    <div className={styles.submit_btn_wrapper}>
                        <CommonButton title={loading ? "Submitting..." : "Let's Do This"} theme="blue" url={formik.handleSubmit} isDisabled={loading} className={styles.submit_btn} />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ConsultationModal
