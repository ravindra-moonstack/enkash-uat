import Header from "@/components/header/header";
import React from "react";
import styles from "./page.module.scss";
import Heading from "@/components/heading/heading";
import Footer from "@/components/footer/footer";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Heading title="Work in Progress..." color="equity-blue" size="h1" />
      <Footer />
    </div>
  );
};

export default AboutPage;
