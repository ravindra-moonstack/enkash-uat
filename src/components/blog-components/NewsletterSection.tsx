"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import styles from "./singleBlog.module.scss"
import { ctaSideImg } from "@/src/app/employee-benefit-multi-wallet/img"

const NewsletterSection = () => {
  const [redirectUrl, setRedirectUrl] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRedirectUrl(window.location.origin + "/thank-you")
    }
  }, [])

  return (
    <section className={styles.newsletterSection}>
      <div className={styles.p_relative}>
        <div className={`${styles.sideLines} ${styles.sideLinesLeft}`}>
          <Image
            src={ctaSideImg}
            alt="Decorative side lines"
            width={100}
            height={100}
          />
        </div>

        <div className={`${styles.sideLines} ${styles.sideLinesRight}`}>
          <Image
            src={ctaSideImg}
            alt="Decorative side lines"
            width={100}
            height={100}
          />
        </div>

        <div className="max-w-auto">
          <div className={styles.newsletterCard}>
            {/* Decorative SVG Waves */}
            <div className={styles.wavyDecoration}>
              <Image
                src="/svgs/newsletterBg.svg"
                alt="Decorative background"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <h2 className={styles.newsletterHeading}>
              Don&apos;t Worry. We Hate Boring Newsletters Too.
            </h2>

            <form
              action="https://forms.zohopublic.in/Enkash/form/NewsletterBlogSubscription/formperma/3paywroXfgN1lrIuMcm-D1AvrJAyaU_PTB9-CYBVR_Q/htmlRecords/submit"
              name="form"
              id="form"
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
              className={styles.newsletterForm}
            >
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value={redirectUrl} />
              <input type="hidden" name="zc_gad" value="" />

              <div className={styles.formGroup}>
                <input
                  type="text"
                  maxLength={255}
                  name="Email"
                  defaultValue=""
                  // @ts-ignore
                  fieldtype="9"
                  placeholder="Enter Your Email"
                  required
                  className={styles.newsletterInput}
                />
                <button type="submit" className={styles.newsletterBtn}>
                  Keep Me Updated
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
