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
                const handleExitIntent = (e: MouseEvent) => {
                    if (e.clientY <= 0) {
                        setShow(true)
                        document.removeEventListener("mouseout", handleExitIntent)
                    }
                }

                document.addEventListener("mouseout", handleExitIntent)

                return () => {
                    document.removeEventListener("mouseout", handleExitIntent)
                }
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

                const formData = new FormData()
                formData.append("zf_referrer_name", typeof document !== "undefined" ? document.referrer : "")
                formData.append("zf_redirect_url", "")
                formData.append("zc_gad", getCookie("zc_gad"))
                formData.append("SingleLine", values.name)
                formData.append("Email", values.email)
                formData.append("SingleLine1", values.company)
                formData.append("PhoneNumber_countrycode", values.phone)
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
                    <h2 className={styles.title}>Reading About Problems Won’t Fix Them.</h2>
                    <p className={styles.subtitle}>
                        Get practical answers for your business from people who’ve built the solutions.
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
