"use client"

import Heading from "@/components/heading/heading"
import Image from "next/image"
import styles from "@/app/page.module.scss"
import Marquee from "react-fast-marquee"
import americanExp from "./img/americanExp.svg"
import pwc from "./img/pwc.svg"
import strip from "./img/strip.svg"

const CompanySection = () => {
  return (
    <div className="col-12">
      {/* Mobile View */}
      <div className="mobile-only">
        <div>
          <div
            className={`${styles.bank_logo} ${styles.customer_logo} d-flex align-items-center justify-content-between mt-3`}
          >
            <Image
              className={styles.americanExp}
              src={americanExp}
              alt="ramericanExp logo"
            />
            <Image className={styles.pwc} src={pwc} alt="pwc logo" />
            <Image className={styles.strip} src={strip} alt="strip logo" />
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="desktop-only">
        <div className={styles.marquee_box}>
          <div id="marquee">
            <Marquee speed={80}>
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
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanySection
