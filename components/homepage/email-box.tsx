"use client";

import { useState } from "react";
import styles from "@/app/page.module.scss";
import PrimaryButton from "../buttons/primary-button/primary-button";

const EmailBox = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isError, setIsError] = useState(false);

  const validateEmail = (inputEmail: any) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(inputEmail);
  };

  const checkIfEmailValid = (): boolean => {
    const isValid = validateEmail(email);
    if (isValid) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
    return isValid;
  };

  return (
    <div className="col-12 d-flex justify-content-center align-items-center">
      <div className={`${styles.email_box} ${isError ? styles.shake : ""}`}>
        <div className="w-50 d-flex align-items-center">
          <input
            type="text"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              checkIfEmailValid();
            }}
          />
        </div>

        <div onClick={() => setIsError(!isValidEmail)}>
          {isValidEmail && (
            <PrimaryButton
              title="Get Started Now"
              theme="blue"
              url={"/sales?email=" + email}
            />
          )}
          {!isValidEmail && (
            <PrimaryButton title="Get Started Now" theme="blue" />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailBox;
