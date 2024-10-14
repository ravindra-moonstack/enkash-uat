import React from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./not-found.module.scss";
import Image from "next/image";
import { pageNotFound } from ".";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.main_section}>
        <div className={styles.error_image}>
          <Image src={pageNotFound} alt="404" />
          <h1>Can't find what you're looking for?</h1>
        </div>

        <div className={`${styles.other_options}`}>
          <PrimaryButton
            title="Explore Products"
            url="/sales"
            theme="blue"
            width="200px"
          />
          <PrimaryButton
            title="About Us"
            url="/sales"
            theme="blue"
            width="200px"
          />
          <PrimaryButton
            title="EnKash Blogs"
            url="/sales"
            theme="blue"
            width="200px"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
