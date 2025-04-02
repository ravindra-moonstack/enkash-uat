"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/header/header";
import styles from "./page.module.scss";
import Heading from "@/components/heading/heading";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import Footer from "@/components/footer/footer";
import emailjs from "@emailjs/browser";
import {
  defaultTemplateId,
  emailjs_public_key,
  emailjs_service_id,
  olympusTemplateId,
  space,
} from "@/common/constant";
import { backArrow } from "../bolt";
import Image from "next/image";
import { blueArrow, corporateCreditCardFilled, prepaidCardFilled } from ".";
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
} from "@/components/header";

type Category = {
  name: string;
  products: Product[];
};

type Product = {
  name: string;
  icon: any;
};

// Define our data
const categoryData: Category[] = [
  {
    name: "Make Payment",
    products: [
      { name: "Vendor Payment", icon: vendorPaymentFilled },
      { name: "Utility Payment", icon: billPaymentsFilled },
      { name: "Rental Payment", icon: rentalPaymentsFilled },
      { name: "GST Payment", icon: taxPaymentFilled },
      { name: "Bulk Payouts", icon: bulkPayoutFilled },
    ],
  },
  {
    name: "Collect Payment",
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
    name: "Cards",
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
    name: "Expenses",
    products: [],
  },
  {
    name: "Rewards",
    products: [
      { name: "Gift Card", icon: giftCardFilled },
      { name: "Brand Vouchers", icon: brandVouchersFilled },
      { name: "Channel Incentives", icon: channelIncentiveFilled },
      { name: "Employee Rewards", icon: rewardsPlatformFilled },
    ],
  },
];

const SalesPage = () => {
  //Form Variables
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [showProducts, setShowProducts] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);
  const [interestedPG, setInterestedPG] = useState(false);
  const [isExistingCustomer, setIsExistingCustomer] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  //Url parameters
  let urlParams;
  let source;

  //reset the product everytime category is changed
  useEffect(() => {
    setSelectedProduct([]);
  }, [selectedCategory]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      urlParams = new URLSearchParams(window.location.search);
      source = urlParams.get("source");
      const emailParam = urlParams.get("email");
      if (emailParam !== null) {
        setCompanyEmail(emailParam);
      }
      if (source == "interested-payment-gateway") {
        setInterestedPG(true);
      }
    }
    emailjs.init(emailjs_public_key);
  }, []);

  //Submit functionality
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isDisabled) {
      return;
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
      setIsFormValid(true);
      sendEmailToEnkash();
    } else {
      setIsFormValid(false);
    }
  };

  //toggle existing customer
  const handleExistingCustomer = () => {
    setIsExistingCustomer(!isExistingCustomer);
  };

  //Email validation
  function isValidEmail(val: string): boolean {
    const regEmail: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmail.test(val);
  }

  function isValidWebsite(val: string): boolean {
    if (!val) {
      return true;
    }
    const regWebsite: RegExp =
      /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:[0-9]{1,5})?(\/[^\s]*)?$/i;
    return regWebsite.test(val);
  }

  function hasOlympusPrefix(string: string | null) {
    return string && string.startsWith("olympus");
  }

  function productSelected(product: string) {
    if (selectedProduct.includes(product)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== product));
    } else {
      setSelectedProduct([...selectedProduct, product]);
    }
  }

  function categorySelected(category: string) {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  }

  //Email Send to EmailJs
  function sendEmailToEnkash() {
    setIsDisabled(true);
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("source");

    let templateId = defaultTemplateId;

    // Check if the source is in the Olympus lead
    if (hasOlympusPrefix(source)) {
      templateId = olympusTemplateId;
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
    };

    if (isExistingCustomer) {
      templateParams.products = "Existing Customers";
      templateParams.additional_products = [];
    }

    emailjs
      .send(emailjs_service_id, templateId, templateParams)
      .then(
        (response) => {
          window.location.href = "/confirmation/";
          console.log("form submit successful");
        },
        (error) => {
          console.log(error);
        }
      )
      .finally(() => {
        setIsDisabled(false);
      });
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
          <form onSubmit={handleSubmit} noValidate>
            {/* First Row */}
            <div className="d-flex flex-column w-100 ">
              <Heading
                title="How can we contact you?"
                size="h6"
                color="black"
                weight="5"
              />
              <div className="d-flex w-40 mt-3 flex-column flex-md-row justify-content-start">
                <div className="me-5 mb-2 mb-m-0">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
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
                <div className="me-5 mb-2 mb-m-0">
                  <input
                    type="email"
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e.target.value)}
                    className="form-control"
                    placeholder="Company Email"
                    required
                  />
                  {!isFormValid && !isValidEmail(companyEmail) && (
                    <span className={`${styles.danger} text-danger`}>
                      Invalid email address
                    </span>
                  )}
                </div>
                <div className="me-5 me-m-0">
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => {
                      const sanitizedValue = e.target.value.replace(/\D/g, "");
                      if (sanitizedValue.length > 10) return;
                      setMobileNumber(sanitizedValue);
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
              </div>
            </div>

            {/* second Row */}
            <div className="d-flex flex-column w-100 mt-4">
              <div className="d-flex w-40 mt-3 flex-row justify-content-start">
                <div className="">
                  <Heading
                    title="Existing Customer:"
                    size="h6"
                    color="black"
                    weight="5"
                  />
                </div>
                <div className="mx-4 mb-m-0">
                  <label className={styles.switch_toggle_container}>
                    <input
                      className={styles.switch_toggle_input}
                      checked={isExistingCustomer}
                      onChange={handleExistingCustomer}
                      type="checkbox"
                    />
                    <span className={styles.switch_toggle}></span>
                  </label>
                </div>
              </div>
            </div>

            {/* third Row */}
            <div className="d-flex flex-column w-100 mt-4">
              <Heading
                title="What are your company details?"
                size="h6"
                color="black"
                weight="5"
              />
              <div className="d-flex w-40 mt-3 flex-column flex-md-row justify-content-start">
                <div className="me-5 mb-2 mb-m-0">
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
                <div className="mb-2 mb-m-0">
                  <input
                    type="url"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                    className="form-control"
                    placeholder="Company Website"
                  />
                  {!isFormValid &&
                    !isValidWebsite(companyWebsite) &&
                    companyWebsite.length > 0 && (
                      <span className={`${styles.danger} text-danger`}>
                        Invalid Company website
                      </span>
                    )}
                </div>
              </div>
            </div>

            <div>
              {!isExistingCustomer && (
                <div className="d-flex flex-column w-100 mt-4">
                  <div className="d-flex gap-2">
                    <div className="pt-3">
                      <Heading
                        title="What are you looking for:"
                        size="h6"
                        color="black"
                        weight="5"
                      />
                    </div>
                    <div className="d-md-flex mb-2 mt-2">
                      <div
                        className={` py-2 rounded  ${styles.categoryButton}`}
                        onClick={() => setShowProducts(!showProducts)}
                      >
                        <div className="w-100 d-flex justify-content-center">
                          Select from below
                        </div>
                        <div>
                          <Image
                            src={blueArrow}
                            alt="down-arrow"
                            className={styles.blue_down_arrow}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column w-40 ms-md-3 justify-content-start mt-2 mt-m-0">
                    {showProducts && (
                      <div>
                        <div className="d-md-flex gap-2 mb-4 mt-2 flex-wrap">
                          {categoryData.map((category, index) => (
                            <div className="d-flex flex-column my-2 my-md-0">
                              <div
                                key={index}
                                className={` py-2 rounded ${
                                  selectedCategory === category.name
                                    ? styles.activeButton
                                    : ""
                                } ${styles.categoryButton}`}
                                onClick={() => categorySelected(category.name)}
                              >
                                <div className="w-100 d-flex justify-content-center">
                                  {category.name}
                                </div>

                                {category.name !== "Expenses" && (
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
                                        (category) =>
                                          category.name === selectedCategory
                                      )
                                      ?.products.map((product, index) => (
                                        <div
                                          key={index}
                                          className={`flex items-center justify-between py-2 rounded ${
                                            selectedProduct.includes(
                                              product.name
                                            )
                                              ? styles.activeButton
                                              : ""
                                          } ${styles.product_button} ${
                                            styles.product_button_mobile
                                          }`}
                                          onClick={() =>
                                            productSelected(product.name)
                                          }
                                        >
                                          <div className={styles.product_icon}>
                                            <Image
                                              src={product.icon}
                                              alt={product.name}
                                            />
                                          </div>
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
                            .find(
                              (category) => category.name === selectedCategory
                            )
                            ?.products.map((product, index) => (
                              <div
                                key={index}
                                className={`flex items-center justify-between py-2 rounded ${
                                  selectedProduct.includes(product.name)
                                    ? styles.activeButton
                                    : ""
                                } ${styles.product_button}`}
                                onClick={() => productSelected(product.name)}
                              >
                                <div className={styles.product_icon}>
                                  <Image
                                    src={product.icon}
                                    alt={product.name}
                                  />
                                </div>

                                <span>{product.name}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
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

            {/* Fifth Row (Description) */}
            <div className="d-flex flex-column flex-md-row align-items-md-center w-100 mt-4">
              <Heading
                title="Description of your request"
                size="h6"
                color="black"
                weight="5"
              />
              <div className="ms-md-3 flex-grow-1 mt-3 mt-m-0">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={1}
                  className="form-control"
                  placeholder="Describe your request..."
                />
              </div>
            </div>

            {/* Seventh Row (Submit Button) */}
            <div
              className="d-flex align-items-center w-100 mt-4 justify-content-center justify-content-md-start"
              onClick={handleSubmit}
            >
              <PrimaryButton
                title="Submit"
                theme="blue"
                isDisabled={isDisabled}
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SalesPage;
