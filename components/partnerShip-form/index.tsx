"use client"

import type React from "react"
import { useState } from "react"
import styles from "./partnershipForm.module.scss"
import DynamicHeading from "../dynamicHeading/dynamic-heading"


interface FormData {
    name: string
    email: string
    phone: string
    companyName: string
    monthlyMerchantVolume: string
    lineOfBusiness: string
}

interface Feature {
    id: number
    text: string
}

interface HeadingContent {
    title: string
    color?: string
}

interface PartnerShipFormProps {
    heading: HeadingContent[]
    features: Feature[]
}
const PartnerShipForm: React.FC<PartnerShipFormProps> = ({ heading, features }) => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        monthlyMerchantVolume: "",
        lineOfBusiness: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Handle form submission logic here
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/* Left Section */}
                <div className={styles.leftSection}>
                    <DynamicHeading
                        content={heading}
                        headingTag="h3"
                        className="f-5 mb-4 mb-md-5"
                    />


                    <div className={styles.features}>
                        {features.map((feature) => (
                            <div key={feature.id} className={styles.feature}>
                                <div className={styles.checkmark}>
                                    <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_3858_69384"
                                            maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="25">
                                            <path d="M11.4406 1.77197L14.23 3.80681L17.6832 3.80044L18.7436 7.08635L21.541 9.11057L20.4678 12.3922L21.541 15.6739L18.7436 17.6981L17.6832 20.984L14.23 20.9776L11.4406 23.0125L8.65117 20.9776L5.19799 20.984L4.13756 17.6981L1.34018 15.6739L2.41336 12.3922L1.34018 9.11057L4.13756 7.08635L5.19799 3.80044L8.65117 3.80681L11.4406 1.77197Z" fill="white" stroke="white" strokeWidth="2.12405" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.72275 12.3921L10.3778 15.0472L15.6879 9.73706" stroke="black" strokeWidth="2.12405" strokeLinecap="round" strokeLinejoin="round" />
                                        </mask>
                                        <g mask="url(#mask0_3858_69384)">
                                            <path d="M-1.30881 -0.354492H24.1798V25.1341H-1.30881V-0.354492Z" fill="#1C5AF4" />
                                        </g>
                                    </svg>
                                </div>
                                <span>{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className={styles.rightSection}>
                    {/* <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGrid}>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.inputWrapper}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.inputWrapper}>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.inputWrapper}>
                                <input
                                    type="text"
                                    name="companyName"
                                    placeholder="Company Name"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.inputWrapper}>
                                <select
                                    name="monthlyMerchantVolume"
                                    value={formData.monthlyMerchantVolume}
                                    onChange={handleInputChange}
                                    className={styles.select}
                                    required
                                >
                                    <option value="" disabled>
                                        Monthly Merchant Volume
                                    </option>
                                    <option value="0-50k">₹0 - ₹50,000</option>
                                    <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                                    <option value="1l-5l">₹1,00,000 - ₹5,00,000</option>
                                    <option value="5l-10l">₹5,00,000 - ₹10,00,000</option>
                                    <option value="10l+">₹10,00,000+</option>
                                </select>
                                <div className={styles.selectIcon}>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                                        <path
                                            d="M1 1.5L6 6.5L11 1.5"
                                            stroke="#9CA3AF"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className={styles.inputWrapper}>
                                <select
                                    name="lineOfBusiness"
                                    value={formData.lineOfBusiness}
                                    onChange={handleInputChange}
                                    className={styles.select}
                                    required
                                >
                                    <option value="" disabled>
                                        Line of Business
                                    </option>
                                    <option value="retail">Retail</option>
                                    <option value="ecommerce">E-commerce</option>
                                    <option value="hospitality">Hospitality</option>
                                    <option value="healthcare">Healthcare</option>
                                    <option value="education">Education</option>
                                    <option value="other">Other</option>
                                </select>
                                <div className={styles.selectIcon}>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                                        <path
                                            d="M1 1.5L6 6.5L11 1.5"
                                            stroke="#9CA3AF"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Submit
                        </button>
                    </form> */}
                </div>
            </div>
        </div >
    )
}

export default PartnerShipForm
