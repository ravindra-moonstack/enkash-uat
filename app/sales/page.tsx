"use client";

import Header from "@/components/header/header";
import styles from "./page.module.scss";
import Image from "next/image";
import teamImage from "./enkash-sales-team.svg";
import Heading from "@/components/heading/heading";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import Footer from "@/components/footer/footer";
import bgImage from "./bg.png";

const sales = () => {
  const validationSales = () => {
    // Add your validation logic here
  };

  const sendEmailToEnkash = (form: any) => {
    // Add your email sending logic here
  };

  const blockSpecialCharSales = (event: any) => {
    // Add your special character blocking logic here
  };

  const emailSales = (event: any) => {
    // Add your email validation logic here
  };

  function contactSales(e: React.KeyboardEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  function numberSales(e: React.ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  function companySales(e: React.KeyboardEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  function websiteSales(e: React.KeyboardEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <div className={styles.container}>
        <Header />
        <div className={styles.inner_container}>
          <div className="d-flex justify-content-center flex-column align-items-center">
            <div className="mb-5">
              <Heading
                title="Contact Our Sales Team"
                size="h3"
                color="equity-blue"
              />
            </div>

            {/* First Row */}
            <div className="d-flex flex-column w-100 ">
              <Heading
                title="How can we contact you?"
                size="h6"
                color="black"
                weight="5"
              />
              <div className="d-flex w-40 mt-3 justify-content-start">
                <div className="me-5">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Full Name"
                  />
                </div>
                <div className="me-5">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Company Email"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Mobile Number"
                  />
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
              <div className="d-flex w-40 mt-3 justify-content-start">
                <div className="me-5">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Company Name"
                  />
                </div>
                <div className="me-5">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Company Website"
                  />
                </div>
              </div>
            </div>

            {/* Third Row */}
            <div className="d-flex align-items-center w-100 mt-4">
              <Heading
                title="Primary product you are interested in:"
                size="h6"
                color="black"
                weight="5"
              />
              <div className="d-flex w-40 ms-3 justify-content-start">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">Payables</option>
                  <option value="2">Receievables</option>
                  <option value="3">Ofex</option>
                  <option value="4">Slash</option>
                  <option value="5">Reward & Offers</option>
                  <option value="6">Channel Incentive</option>
                  <option value="7">Employee Reward</option>
                  <option value="8">Brand Gift Voucher</option>
                </select>
              </div>
            </div>

            {/* Fourth Row */}
            <div className="d-flex align-items-center w-100 mt-4">
              <Heading
                title="Additional products you are interested in:"
                size="h6"
                color="black"
                weight="5"
              />
              <div className="d-flex w-40 ms-3 justify-content-start">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">Payables</option>
                  <option value="2">Receievables</option>
                  <option value="3">Ofex</option>
                  <option value="4">Slash</option>
                  <option value="5">Reward & Offers</option>
                  <option value="6">Channel Incentive</option>
                  <option value="7">Employee Reward</option>
                  <option value="8">Brand Gift Voucher</option>
                </select>
              </div>
            </div>

            {/* Fifth Row */}
            <div className="d-flex align-items-center w-100 mt-4">
              <Heading
                title="Descrtiption of your request"
                size="h6"
                color="black"
                weight="5"
              />
              <div className="ms-3 flex-grow-1">
                <textarea
                  rows={1}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                />
              </div>
            </div>

            {/* Sixth Row */}
            <div className="d-flex align-items-center w-100 mt-4">
              <PrimaryButton title="Submit" theme="theme-blue" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default sales;
