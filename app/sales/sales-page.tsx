"use client"

import React, { useEffect, useState } from "react"
import Header from "@/components/header/header"
import styles from "./page.module.scss"
import Heading from "@/components/heading/heading"
import PrimaryButton from "@/components/buttons/primary-button/primary-button"
import Footer from "@/components/footer/footer"
import emailjs from "@emailjs/browser"
import {
  defaultTemplateId,
  emailjs_public_key,
  emailjs_service_id,
  olympusTemplateId,
  space,
} from "@/common/constant"
import { backArrow } from "../vouchers"
import Image from "next/image"
import { blueArrow, corporateCreditCardFilled, prepaidCardFilled } from "."
import {
  autoCollectFilled,
  billPaymentsFilled,
  brandVouchersFilled,
  bulkCollectFilled,
  bulkPayoutFilled,
  channelIncentiveFilled,
  customizedPaymentFilled,
  digitalMarketingCardFilled,
  fuelCardFilled,
  giftCardFilled,
  mealCardFilled,
  paymentButtonFilled,
  paymentGatewayFilled,
  paymentLinksFilled,
  purchaseCardFilled,
  qrCodeFilled,
  rentalPaymentsFilled,
  rewardsPlatformFilled,
  saasFilled,
  taxPaymentFilled,
  tneFilled,
  upiPaymentsFilled,
  vendorPaymentFilled,
  virtualCardFilled,
} from "@/components/header"
import SalesForm from "./sales-form"

type Category = {
  name: string
  products: Product[]
}

type Product = {
  name: string
  icon: any
}

// Define our data
const categoryData: Category[] = [
  {
    name: "Payables",
    products: [
      { name: "Vendor Payment", icon: vendorPaymentFilled },
      { name: "Utility Payment", icon: billPaymentsFilled },
      { name: "Rental Payment", icon: rentalPaymentsFilled },
      { name: "GST Payment", icon: taxPaymentFilled },
      { name: "Bulk Payouts", icon: bulkPayoutFilled },
    ],
  },
  {
    name: "Receivables",
    products: [
      { name: "Payment Gateway", icon: paymentGatewayFilled },
      { name: "Payment Links", icon: paymentLinksFilled },
      { name: "QR Code", icon: qrCodeFilled },
      { name: "UPI Payments", icon: upiPaymentsFilled },
      { name: "Payment Button", icon: paymentButtonFilled },
      { name: "Payment Page", icon: customizedPaymentFilled },
      { name: "Bulk Collect", icon: bulkCollectFilled },
      { name: "Auto Collect", icon: autoCollectFilled },
      { name: "Virtual Account", icon: autoCollectFilled },
      { name: "APIs", icon: vendorPaymentFilled }, //replace
    ],
  },
  {
    name: "Corporate Cards",
    products: [
      { name: "Corporate Credit Card", icon: corporateCreditCardFilled },
      { name: "Prepaid Card", icon: prepaidCardFilled },
      { name: "Virtual Card", icon: virtualCardFilled },
      { name: "Meal Card", icon: mealCardFilled },
      { name: "Fuel Card", icon: fuelCardFilled },
      { name: "Gift Card", icon: giftCardFilled },
      { name: "T&E Card", icon: tneFilled },
      { name: "SaaS Card", icon: saasFilled },
      { name: "Purchase Card", icon: purchaseCardFilled },
      { name: "Digital Marketing Card", icon: digitalMarketingCardFilled },
    ],
  },
  {
    name: "Expense Management",
    products: [],
  },
  {
    name: "Loyalty Lounge",
    products: [
      { name: "Gift Card", icon: giftCardFilled },
      { name: "Brand Vouchers", icon: brandVouchersFilled },
      { name: "Channel Incentives", icon: channelIncentiveFilled },
      { name: "Employee Rewards", icon: rewardsPlatformFilled },
    ],
  },
]

const SalesPage = () => {
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
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className="mb-5 d-flex justify-content-md-center">
            <Heading
              title="Contact Our Sales Team"
              size="h3"
              color="equity-blue"
            />
          </div>
          <SalesForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SalesPage
