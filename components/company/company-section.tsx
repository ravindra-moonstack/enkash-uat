"use client"

import Heading from "@/components/heading/heading"
import Image from "next/image"
import styles from "./companySection.module.scss"
import Marquee from "react-fast-marquee"
import ayomatix from "./img/ayomatix.png"
import blueSwap from "./img/blueSwap.png"
import blumox from "./img/blumox.png"
import magento from "./img/magento.png"
import rannlab from "./img/rannlab.png"
import woo from "./img/woo.png"
import parvi from "./img/parvi.png"
import blurb from "./img/blurb.png"

const CompanySection = () => {
  return (
    <div className="col-12">
      {/* Mobile View */}
      <div className="mobile-only">
        <div>
          <div
            className={`${styles.bank_logo} ${styles.customer_logo} d-flex align-items-center justify-content-between mt-3`}
          >
            <Image className={styles.americanExp} src={woo} alt="woo" />
            <Image className={styles.pwc} src={blueSwap} alt="pwc logo" />
            <Image
              className={styles.ayomatix}
              src={ayomatix}
              alt="strip logo"
            />
            <Image className={styles.americanExp} src={blurb} alt="woo" />
            <Image className={styles.americanExp} src={blumox} alt="woo" />
            <Image className={styles.pwc} src={rannlab} alt="pwc logo" />
            <Image className={styles.strip} src={magento} alt="strip logo" />
            <Image className={styles.strip} src={parvi} alt="strip logo" />
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="desktop-only">
        <div className={styles.marquee_box}>
          <div id="marquee">
            <Marquee speed={80}>
              <div
                className={`${styles.bank_logo} ${styles.customer_logo} d-flex align-items-center justify-content-between  mt-3`}
              >
                <Image className={styles.americanExp} src={woo} alt="woo" />
                <Image className={styles.pwc} src={blueSwap} alt="pwc logo" />
                <Image
                  className={styles.ayomatix}
                  src={ayomatix}
                  alt="strip logo"
                />
                <Image className={styles.americanExp} src={blurb} alt="woo" />
                <Image className={styles.americanExp} src={blumox} alt="woo" />
                <Image className={styles.pwc} src={rannlab} alt="pwc logo" />
                <Image
                  className={styles.strip}
                  src={magento}
                  alt="strip logo"
                />
                <Image className={styles.strip} src={parvi} alt="strip logo" />
              </div>
              {/* <div
                className={`${styles.bank_logo} ${styles.customer_logo} d-flex align-items-center justify-content-between mt-3`}
              >
                <Image
                  className={styles.americanExp}
                  src={americanExp}
                  alt="americanExp logo"
                />
                <Image className={styles.pwc} src={pwc} alt="pwc logo" />
                <Image className={styles.strip} src={strip} alt="strip logo" />
              </div>
              <div
                className={`${styles.bank_logo} ${styles.customer_logo} d-flex align-items-center justify-content-between mt-3`}
              >
                <Image
                  className={styles.americanExp}
                  src={americanExp}
                  alt="americanExp logo"
                />
                <Image className={styles.pwc} src={pwc} alt="pwc logo" />
                <Image className={styles.strip} src={strip} alt="strip logo" />
              </div>
              <div
                className={`${styles.bank_logo} ${styles.customer_logo} d-flex align-items-center justify-content-between mt-3`}
              >
                <Image
                  className={styles.americanExp}
                  src={americanExp}
                  alt="americanExp logo"
                />
                <Image className={styles.pwc} src={pwc} alt="pwc logo" />
                <Image className={styles.strip} src={strip} alt="strip logo" />
              </div> */}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanySection
