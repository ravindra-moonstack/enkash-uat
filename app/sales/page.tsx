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
} from "@/common/constant";


const sales = () => {
  //Form Variables
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("none");
  const [selectedAdditionalProduct, setSelectedAdditionalProduct] =
    useState("");
  const [description, setDescription] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);
  const [selectedProductValid, setSelectedProductValid] = useState(true);

  //Url parameters
  let urlParams;
  let source;

  useEffect(() => {
    if (typeof window !== "undefined") {
      urlParams = new URLSearchParams(window.location.search);
      source = urlParams.get("source");
      const emailParam = urlParams.get("email");
      if (emailParam !== null) {
        setCompanyEmail(emailParam);
      }
    }
    emailjs.init(emailjs_public_key);
  }, []);

  //Submit functionality
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    selectedProduct === "none"
      ? setSelectedProductValid(false)
      : setSelectedProductValid(true);

    if (
      fullName.length > 1 &&
      isValidEmail(companyEmail) &&
      mobileNumber.length === 10 &&
      companyName.length > 1 &&
      selectedProduct !== "none"
    ) {
      setIsFormValid(true);
      sendEmailToEnkash();
    } else {
      setIsFormValid(false);
    }
  };

  //Email validation
  function isValidEmail(val: string): boolean {
    const regEmail: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmail.test(val);
  }

  function hasOlympusPrefix(string: string | null) {
    return string && string.startsWith("olympus");
  }

  //Email Send to EmailJs
  function sendEmailToEnkash() {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("source");

    let templateId = defaultTemplateId;

    // Check if the source is in the Olympus lead
    if (hasOlympusPrefix(source)) {
      templateId = olympusTemplateId;
    }

    const templateParams = {
      name: fullName,
      email: companyEmail,
      phone: mobileNumber,
      company: companyName,
      website: companyWebsite,
      products: selectedProduct,
      additional_products: selectedAdditionalProduct,
      query: description,
      source: source,
    };

    console.log(templateParams);

    emailjs.send(emailjs_service_id, templateId, templateParams).then(
      (response) => {
        window.location.href = "/confirmation/";
        console.log("form submit successful");
      },
      (error) => {
        console.log(error);
      }
    );
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
                    onChange={(e) => setMobileNumber(e.target.value)}
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

            {/* Second Row */}
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
                </div>
              </div>
            </div>

            {/* Third Row */}
            <div className="d-flex flex-column flex-md-row align-items-md-center w-100 mt-4">
              <Heading
                title="Primary product you are interested in:"
                size="h6"
                color="black"
                weight="5"
              />
              <div className="d-flex w-40 ms-md-3 justify-content-start mt-2 mt-m-0">
                <select
                  value={selectedProduct}
                  onChange={(e) => {
                    setSelectedProduct(e.target.value);
                    e.target.value === "none"
                      ? setSelectedProductValid(false)
                      : setSelectedProductValid(true);
                  }}
                  className={`form-select ${
                    !selectedProductValid ? styles.select_box_error : ""
                  }`}
                  required
                >
                  <option value="none">Open this select menu</option>
                  <option value="Payables">Payables</option>
                  <option value="Receievables">Receivables</option>
                  <option value="Ofex">Expense Management</option>
                  <option value="Corporate Cards">Corporate Cards</option>
                  <option value="Reward & Offers">Reward & Offers</option>
                  <option value="Channel Incentive">Channel Incentive</option>
                  <option value="Employee Reward">Employee Reward</option>
                  <option value="Brand Gift Voucher">Brand Gift Voucher</option>
                </select>
              </div>
            </div>

            {/* Fourth Row */}
            <div className="d-flex flex-column flex-md-row  align-items-md-center w-100 mt-4">
              <Heading
                title="Additional products you are interested in:"
                size="h6"
                color="black"
                weight="5"
              />
              <div className="d-flex w-40 ms-md-3 mt-2 mt-m-0 flex-column flex-md-row justify-content-start">
                <select
                  value={selectedAdditionalProduct}
                  onChange={(e) => setSelectedAdditionalProduct(e.target.value)}
                  className="form-select"
                  required
                >
                  <option value="">Open this select menu</option>
                  <option value="Payables">Payables</option>
                  <option value="Receievables">Receivables</option>
                  <option value="Ofex">Expense Management</option>
                  <option value="Corporate Cards">Corporate Cards</option>
                  <option value="Reward & Offers">Reward & Offers</option>
                  <option value="Channel Incentive">Channel Incentive</option>
                  <option value="Employee Reward">Employee Reward</option>
                  <option value="Brand Gift Voucher">Brand Gift Voucher</option>
                </select>
              </div>
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
              className="d-flex align-items-center w-100 mt-4"
              onClick={handleSubmit}
            >
              <PrimaryButton title="Submit" theme="blue" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default sales;
