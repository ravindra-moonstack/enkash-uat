"use client";

import { space } from "@/common/constant";
import Heading from "../heading/heading";
import styles from "./gst-calculator.module.scss";
import Image from "next/image";
import { gstCalculatorBG } from "@/app/gst-calculator";
import { useState } from "react";
import Link from "next/link";
import arrowRight from "./img/right-arrow-gst.svg";

const GSTCalculator = () => {
  const [userType, setUserType] = useState("");
  const [amount, setAmount] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [profitRatio, setProfitRatio] = useState(0);
  const [isBusiness, setIsBusiness] = useState(false);
  const [inclusiveGST, setInclusiveGST] = useState(false);
  const [result, setResult] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let taxableAmount = amount;
    if (isBusiness) {
      taxableAmount *= 1 + profitRatio / 100;
    }
    let gstAmount = (taxableAmount * taxRate) / 100;
    if (inclusiveGST) {
      gstAmount = taxableAmount - taxableAmount / (1 + taxRate / 100);
    }
    setResult(taxableAmount + gstAmount);
  };

  const handleSetUser = (type: string) => {
    setUserType(type);
    type == "business" ? setIsBusiness(true) : setIsBusiness(false);
  };

  const handleFullBreakup = () => {
    console.log("full");
  };

  return (
    <div>
      <div className={`${styles.container} row color-white`}>
        <div className="col-md-5 col-12 d-flex flex-column">
          <div className="mb-4 d-flex flex-column">
            <Heading
              title="Free Indian Online"
              color="rainy-blue"
              size="h3"
              weight="7"
            />
            <Heading title="GST Calculator" size="h3" weight="7" />
          </div>
          <div className=" mobile-only">
            <Heading
              title="Whether you're a business owner or an individual, calculate your GST instantly with this easy GST calculator online"
              color="white"
              size="h0"
              weight="5"
            />
          </div>
          <div className=" desktop-only">
            <Heading
              title="Whether you're a business owner or an individual, calculate your GST instantly with this easy GST calculator online"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className={styles.calculator}>
            <div className={`container ${styles.container_calc}`}>
              <form onSubmit={handleSubmit}>
                <div className={`mb-3 ${styles.mb3}`}>
                  <label
                    htmlFor="userType"
                    className={`form-label ${styles.form_label}`}
                  >
                    User Type
                  </label>
                  <select
                    className={`form-select ${styles.form_select}`}
                    id="userType"
                    value={userType}
                    onChange={(e) => handleSetUser(e.target.value)}
                  >
                    <option value="individual">Individual</option>
                    <option value="business">Business</option>
                  </select>
                </div>

                <div className={`mb-3 ${styles.mb3}`}>
                  <label
                    htmlFor="amount"
                    className={`form-label ${styles.form_label}`}
                  >
                    Amount
                  </label>
                  <input
                    type="number"
                    className={`form-control ${styles.form_control}`}
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                  />
                </div>

                <div className={`mb-3 ${styles.mb3}`}>
                  <label
                    htmlFor="taxRate"
                    className={`form-label ${styles.form_label}`}
                  >
                    Tax Rate (%)
                  </label>
                  <select
                    className={`form-select ${styles.form_select}`}
                    id="taxRate"
                    value={taxRate}
                    onChange={(e) => setTaxRate(parseInt(e.target.value))}
                  >
                    <option value={8}>8%</option>
                    <option value={12}>12%</option>
                    <option value={18}>18%</option>
                    <option value={24}>24%</option>
                  </select>
                </div>

                {userType === "business" && (
                  <div className={`mb-3 ${styles.mb3}`}>
                    <label
                      htmlFor="profitRatio"
                      className={`form-label ${styles.form_label}`}
                    >
                      Profit Ratio (%)
                    </label>
                    <input
                      type="number"
                      className={`form-control ${styles.form_control}`}
                      id="profitRatio"
                      value={profitRatio}
                      onChange={(e) =>
                        setProfitRatio(parseFloat(e.target.value))
                      }
                    />
                  </div>
                )}

                <div className={`mb-3 d-flex ${styles.radio_buttons}`}>
                  <div className="form-check">
                    <input
                      className={`form-check-input ${styles.form_check_input}`}
                      type="radio"
                      name="inclusiveGST"
                      id="inclusiveGST"
                      checked={inclusiveGST}
                      onChange={() => setInclusiveGST(true)}
                    />
                    <label
                      className={`form-check-label ${styles.form_check_label}`}
                      htmlFor="inclusiveGST"
                    >
                      Inclusive GST
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className={`form-check-input ${styles.form_check_input}`}
                      type="radio"
                      name="exclusiveGST"
                      id="exclusiveGST"
                      checked={!inclusiveGST}
                      onChange={() => setInclusiveGST(false)}
                    />
                    <label
                      className={`form-check-label ${styles.form_check_label}`}
                      htmlFor="exclusiveGST"
                    >
                      Exclusive GST
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.btn_primary}`}
                >
                  Calculate
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={`col-md-6 col-12 ${styles.tax_results_container}`}>
          <div className={styles.tax_results}>
            {isBusiness ? (
              <div className={styles.business_data_div}>
                <div className={styles.business_blue_strip}>
                  Total Selling Price
                </div>
                <div className={styles.selling_price}>₹{result}</div>
                <div className={styles.business_data}>
                  <div className={styles.data_item}>
                    <div>CGST amout</div>
                    <div>
                      {" "}
                      <strong>₹ {result}</strong>
                    </div>
                  </div>
                  <div className={styles.data_item}>
                    <div>CGST amout</div>
                    <div>
                      {" "}
                      <strong>₹ {result}</strong>
                    </div>
                  </div>
                  <div
                    className={styles.full_breakup}
                    onClick={(e) => handleFullBreakup()}
                  >
                    Check full breakup
                    <Image src={arrowRight} alt="" />
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.individual_data}>
                <div className={styles.data_item}>
                  <div>CGST amout</div>
                  <div>
                    {" "}
                    <strong>₹ {result}</strong>
                  </div>
                </div>
                <div className={styles.data_item}>
                  <div>CGST amout</div>
                  <div>
                    {" "}
                    <strong>₹ {result}</strong>
                  </div>
                </div>
                <div className={styles.data_item}>
                  <div>CGST amout</div>
                  <div>
                    {" "}
                    <strong>₹ {result}</strong>
                  </div>
                </div>
                <div className={styles.data_item}>
                  <div>CGST amout</div>
                  <div>
                    {" "}
                    <strong>₹ {result}</strong>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTCalculator;
