"use client"

import React, { useEffect, useState } from "react"
import styles from "./page.module.scss"
import PrimaryButton from "@/components/buttons/primary-button/primary-button"
import emailjs from "@emailjs/browser"
import {
  defaultTemplateId,
  emailjs_public_key,
  emailjs_service_id,
  olympusTemplateId,
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
  const [selectedCategory, setSelectedCategory] = useState("Payables")
  const [selectedProduct, setSelectedProduct] = useState("none")
  const [selectedAdditionalProduct, setSelectedAdditionalProduct] = useState("")
  const [description, setDescription] = useState("")
  const [isFormValid, setIsFormValid] = useState(true)
  const [interestedPG, setInterestedPG] = useState(false)
  const [isExistingCustomer, setIsExistingCustomer] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  //Url parameters
  let urlParams
  let source

  //reset the product everytime category is changed
  useEffect(() => {
    setSelectedProduct("none")
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
    if (isDisabled) {
      return
    }

    if (
      fullName.length > 1 &&
      isValidEmail(companyEmail) &&
      mobileNumber.length === 10 &&
      companyName.length > 1 &&
      isValidWebsite(companyWebsite) &&
      (selectedProduct !== "none" ||
        selectedCategory === "Expense Management" ||
        isExistingCustomer)
    ) {
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

    let templateId = defaultTemplateId

    // Check if the source is in the Olympus lead
    if (hasOlympusPrefix(source)) {
      templateId = olympusTemplateId
    }

    let templateParams = {
      name: fullName,
      email: companyEmail,
      phone: mobileNumber,
      company: companyName,
      website: companyWebsite,
      products: selectedCategory,
      additional_products: selectedProduct,
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
          <div className="d-flex w-40 gap-2  flex-column flex-md-row justify-content-start">
            <div className=" mb-3 mb-m-0">
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
            <div className=" mb-3 mb-m-0">
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
            <div className=" mb-3 me-m-0">
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
              {!isFormValid && mobileNumber.length !== 10 && (
                <span className={`${styles.danger} text-danger`}>
                  Mobile number should be 10 digits
                </span>
              )}
            </div>
            <div className=" mb-3 mb-m-0">
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
            <div className="d-flex flex-column w-100 ">
              <div className="d-flex flex-column w-40  justify-content-start mt-m-0">
                <div className=" gap-2  flex-wrap ">
                  {categoryData.map((category, index) => (
                    <div className="d-flex flex-column mb-3 ">
                      <div
                        key={index}
                        className={` py-2 rounded ${
                          selectedCategory === category.name
                            ? styles.activeButton
                            : ""
                        } ${styles.categoryButton}`}
                        onClick={() =>
                          setSelectedCategory((prevCategory) =>
                            prevCategory === category.name ? "" : category.name
                          )
                        }
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
                      <div className="d-block d-md-none">
                        {selectedCategory == category.name && (
                          <div className="d-flex flex-column justofy-content-center d-md-none flex-wrap gap-2 mt-2">
                            {categoryData
                              .find(
                                (category) => category.name === selectedCategory
                              )
                              ?.products.map((product, index) => (
                                <div
                                  key={index}
                                  className={`flex items-center justify-between py-2 rounded ${
                                    selectedProduct === product.name
                                      ? styles.activeButton
                                      : ""
                                  } ${styles.product_button} ${
                                    styles.product_button_mobile
                                  }`}
                                  onClick={() =>
                                    setSelectedProduct(product.name)
                                  }
                                >
                                  <div className={styles.product_icon}></div>
                                  <span>{product.name}</span>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="d-none d-md-flex flex-wrap gap-2 mt-2">
                  {categoryData
                    .find((category) => category.name === selectedCategory)
                    ?.products.map((product, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between py-2 rounded ${
                          selectedProduct === product.name
                            ? styles.activeButton
                            : ""
                        } ${styles.product_button}`}
                        onClick={() => setSelectedProduct(product.name)}
                      >
                        <span>{product.name}</span>
                      </div>
                    ))}
                </div>
                {!isFormValid &&
                  !isExistingCustomer &&
                  selectedProduct === "none" &&
                  selectedCategory !== "Expense Management" && (
                    <span className={`${styles.danger} text-danger mt-2`}>
                      Please select a product
                    </span>
                  )}
              </div>
            </div>
          )}
        </div>

        {/* Seventh Row (Submit Button) */}
        <div
          className="d-flex align-items-center w-100 mt-4 justify-content-center "
          onClick={handleSubmit}
        >
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
