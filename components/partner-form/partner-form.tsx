"use client"

import React, { useEffect, useState, useRef } from "react"
import styles from "./page.module.scss"
import PrimaryButton from "@/components/buttons/primary-button/primary-button"
import emailjs from "@emailjs/browser"
import {
  defaultTemplateId,
  emailjs_public_key,
  emailjs_service_id,
  olympusTemplateId,
  partnerTemplateId,
  space,
} from "@/common/constant"
import Image from "next/image"
import { blueArrow, corporateCreditCardFilled, prepaidCardFilled } from "."

type Category = {
  name: string
  products: Product[]
}

type Product = {
  name: string
  icon?: any
}

// Define our data
const categoryData: Category[] = [
  {
    name: "Monthly Merchant Volume",
    products: [{ name: "0 to 5" }, { name: "5 to 10" }, { name: "10+" }],
  },
  {
    name: "Line of Business ",
    products: [
      { name: "Developers" },
      { name: "ERP/SaaS" },
      { name: "Orchestration" },
      { name: "Digital Marketing Agency" },
      { name: "CMS/Plugins" },
      { name: "Other" },
    ],
  },
]

const PartnerForm = (): React.JSX.Element => {
  //Form Variables
  const [fullName, setFullName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [companyEmail, setCompanyEmail] = useState("")
  const [companyWebsite, setCompanyWebsite] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string[]>([])
  const [selectedProduct, setSelectedProduct] = useState<string[]>([])
  const [selectedAdditionalProduct, setSelectedAdditionalProduct] = useState("")
  const [description, setDescription] = useState("")
  const [isFormValid, setIsFormValid] = useState(true)
  const [interestedPG, setInterestedPG] = useState(false)
  const [isExistingCustomer, setIsExistingCustomer] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [selectedProductsByCategory, setSelectedProductsByCategory] = useState<{
    [category: string]: string
  }>({})
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  //Url parameters
  let urlParams
  let source

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenCategory(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  //reset the product everytime category is changed
  useEffect(() => {
    const validProducts = categoryData
      .filter((cat) => selectedCategory.includes(cat.name))
      .flatMap((cat) => cat.products.map((p) => p.name))

    setSelectedProductsByCategory((prev) => {
      const updated: { [category: string]: string } = {}

      for (const [category, product] of Object.entries(prev)) {
        if (
          selectedCategory.includes(category) &&
          validProducts.includes(product)
        ) {
          updated[category] = product
        }
      }

      return updated
    })
  }, [selectedCategory])

  useEffect(() => {
    if (typeof window !== "undefined") {
      urlParams = new URLSearchParams(window.location.search)
      source = urlParams.get("source")
      const emailParam = urlParams.get("email")
      if (emailParam !== null) {
        setCompanyEmail(emailParam)
      }
      if (source == "interested-payment-gateway") {
        setInterestedPG(true)
      }
    }
    emailjs.init(emailjs_public_key)
  }, [])

  //Submit functionality
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (isDisabled) return

    const formData = {
      fullName,
      companyEmail,
      mobileNumber,
      companyName,
      companyWebsite,
      selectedCategory,
      selectedProductsByCategory,
    }

    console.log("Form Data Submitted:", formData)

    // ✅ Must select all categories and one product for each
    const allCategoriesSelected = categoryData.every((cat) =>
      selectedCategory.includes(cat.name)
    )

    const allProductsSelected = categoryData.every(
      (cat) => selectedProductsByCategory[cat.name]
    )

    const isFormValidNow =
      fullName.trim().length > 1 &&
      isValidEmail(companyEmail) &&
      isValidMobile(mobileNumber) &&
      companyName.trim().length > 1 &&
      isValidWebsite(companyWebsite) &&
      allCategoriesSelected &&
      allProductsSelected

    if (isFormValidNow) {
      setIsFormValid(true)
      sendEmailToEnkash()
    } else {
      setIsFormValid(false)
    }
  }

  //toggle existing customer
  const handleExistingCustomer = () => {
    setIsExistingCustomer(!isExistingCustomer)
  }

  function isValidMobile(number: string): boolean {
    const commonDummies = ["1234567890", "0000000000"]
    const isTenDigits = /^\d{10}$/.test(number)

    // Check if all digits are the same (e.g., 1111111111)
    const isRepeating = /^(\d)\1{9}$/.test(number)

    return isTenDigits && !commonDummies.includes(number) && !isRepeating
  }

  //Email validation
  function isValidEmail(val: string): boolean {
    const regEmail: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regEmail.test(val)
  }

  function isValidWebsite(val: string): boolean {
    if (!val) {
      return true
    }
    const regWebsite: RegExp =
      /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:[0-9]{1,5})?(\/[^\s]*)?$/i
    return regWebsite.test(val)
  }

  function hasOlympusPrefix(string: string | null) {
    return string && string.startsWith("olympus")
  }

  //Email Send to EmailJs
  function sendEmailToEnkash() {
    setIsDisabled(true)
    const urlParams = new URLSearchParams(window.location.search)
    const source = urlParams.get("source")

    let templateId = partnerTemplateId

    // Check if the source is in the Olympus lead
    if (hasOlympusPrefix(source)) {
      templateId = partnerTemplateId
    }

    let templateParams = {
      name: fullName,
      email: companyEmail,
      phone: mobileNumber,
      company: companyName,
      website: companyWebsite,
      products: selectedCategory.join(", "),
      additional_products: Object.entries(selectedProductsByCategory)
        .map(([cat, prod]) => `${cat}: ${prod}`)
        .join(", "),

      query: description,
      source: source,
    }

    if (isExistingCustomer) {
      templateParams.products = "Existing Customers"
      templateParams.additional_products = ""
    }

    emailjs
      .send(emailjs_service_id, templateId, templateParams)
      .then(
        (response) => {
          window.location.href = "/confirmation/"
          console.log("form submit successful")
        },
        (error) => {
          console.log(error)
        }
      )
      .finally(() => {
        setIsDisabled(false)
      })
  }
  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        {/* First Row */}
        <div className="d-flex flex-column w-100 ">
          <div className="d-flex  gap-2  flex-column flex-md-row justify-content-start">
            <div className=" mb-3 mb-m-0 w-100 ">
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value)
                }}
                className="form-control"
                placeholder="Full Name"
                required
              />
              {!isFormValid && fullName.length < 2 && (
                <span className={`${styles.danger} text-danger`}>
                  Fullname is required
                </span>
              )}
            </div>
            <div className=" mb-3 mb-m-0 w-100">
              <input
                type="email"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
                className="form-control"
                placeholder="Email"
                required
              />
              {!isFormValid && !isValidEmail(companyEmail) && (
                <span className={`${styles.danger} text-danger`}>
                  Invalid email address
                </span>
              )}
            </div>
          </div>
        </div>

        {/* second Row */}

        <div className="d-flex flex-column w-100">
          <div className="d-flex w-40 gap-2  flex-column flex-md-row justify-content-start">
            <div className=" mb-3 me-m-0 w-100">
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => {
                  const sanitizedValue = e.target.value.replace(/\D/g, "")
                  if (sanitizedValue.length > 10) return
                  setMobileNumber(sanitizedValue)
                }}
                className="form-control"
                placeholder="Mobile Number"
                required
              />
              {!isFormValid && !isValidMobile(mobileNumber) && (
                <span className={`${styles.danger} text-danger`}>
                  Enter a valid 10-digit mobile number (not a dummy)
                </span>
              )}
            </div>
            <div className=" mb-3 mb-m-0 w-100">
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="form-control"
                placeholder="Company Name"
                required
              />
              {!isFormValid && companyName.length < 2 && (
                <span className={`${styles.danger} text-danger`}>
                  Invalid company name
                </span>
              )}
            </div>
          </div>
        </div>

        <div>
          {!isExistingCustomer && (
            <div className="d-flex flex-column w-100">
              <div className="d-flex flex-column w-40 justify-content-start mt-m-0">
                {categoryData.map((category, index) => (
                  <div
                    key={index}
                    className="d-flex flex-column mb-3"
                    ref={openCategory === category.name ? dropdownRef : null}
                  >
                    {/* Category Button */}
                    <div
                      className={`py-2 rounded ${
                        selectedCategory.includes(category.name)
                          ? styles.activeButton
                          : ""
                      } ${styles.categoryButton}`}
                      onClick={() => {
                        setSelectedCategory((prev) =>
                          prev.includes(category.name)
                            ? prev
                            : [...prev, category.name]
                        )
                        setOpenCategory((prev) =>
                          prev === category.name ? null : category.name
                        )
                      }}
                    >
                      <div className="w-100 d-flex justify-content-center">
                        {category.name}
                      </div>
                      {category.name !== "Expense Management" && (
                        <div>
                          <Image
                            src={blueArrow}
                            alt="down-arrow"
                            className={styles.blue_down_arrow}
                          />
                        </div>
                      )}
                    </div>

                    {/* Products: Mobile & Desktop (inline below category) */}
                    {openCategory === category.name && (
                      <div className="d-flex flex-column flex-wrap gap-2 mt-2">
                        {category.products.map((product, index) => (
                          <div
                            key={index}
                            className={`flex items-center justify-between py-2 rounded ${
                              selectedProductsByCategory[category.name] ===
                              product.name
                                ? styles.activeButton
                                : ""
                            } ${styles.product_button}`}
                            onClick={() => {
                              setSelectedProductsByCategory((prev) => ({
                                ...prev,
                                [category.name]: product.name,
                              }))
                            }}
                          >
                            <div className={styles.product_icon}></div>
                            <span>{product.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Validation Error */}
                {!isFormValid && (
                  <>
                    {selectedCategory.length < categoryData.length && (
                      <span className={`${styles.danger} text-danger mt-2`}>
                        Please select all categories.
                      </span>
                    )}
                    {categoryData.some(
                      (cat) =>
                        selectedCategory.includes(cat.name) &&
                        !selectedProductsByCategory[cat.name]
                    ) && (
                      <span className={`${styles.danger} text-danger mt-2`}>
                        Please select a product for each selected category.
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Seventh Row (Submit Button) */}
        <div className="d-flex align-items-center w-100 mt-4 justify-content-center">
          <PrimaryButton
            title="Submit"
            theme="blue"
            isDisabled={isDisabled}
            width="280px"
          />
        </div>
      </form>
    </>
  )
}

export default PartnerForm
