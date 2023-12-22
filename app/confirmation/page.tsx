"use client";

import React from "react";
import Header from "@/components/header/header";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import styles from "./page.module.scss";
import homeImage from "./take-me-home-page.svg";
import rightArrow from "./right-arrow.svg";

const confirmation = () => {
  return (
    <div>
      <Header />
      <div className={styles.enkash_confirmation_container}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className={styles.confirmation_box}>
                <Image
                  className={styles.confirmation_img}
                  src={homeImage}
                  alt="Take me to home page"
                />
                <div className="pt-12">
                  <h3 className={styles.thank_label}>Thank You!</h3>
                  <p>We will contact you soon</p>
                  <a href="/">Take me to home page</a>{" "}
                  <Image className="ml-2" src={rightArrow} alt="right-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default confirmation;
