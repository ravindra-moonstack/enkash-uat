"use client";

import { useState } from "react";
import styles from "@/app/page.module.scss";
import PrimaryButton from "../buttons/primary-button/primary-button";

const EmailBox = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="col-12 d-flex justify-content-center align-items-center">
      <div className={styles.email_box}>
        <div className="w-50 d-flex align-items-center">
          <input
            type="text"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <PrimaryButton
            title="Get Started Now"
            theme="blue"
            url={"/sales?email=" + email}
          />
        </div>
      </div>
    </div>
  );
};

export default EmailBox;
