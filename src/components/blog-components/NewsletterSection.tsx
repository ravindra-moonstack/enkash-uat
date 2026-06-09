"use client"
import React, { useEffect, useState } from "react"
import styles from "./singleBlog.module.scss"

const NewsletterSection = () => {
  const [redirectUrl, setRedirectUrl] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRedirectUrl(window.location.origin + "/thank-you")
    }
  }, [])

  return (
    <section className={styles.newsletterSection}>
      <div className="max-w-auto">
        <div className={styles.newsletterCard}>
          {/* Decorative SVG Waves */}
          <div className={styles.wavyDecoration}>
            <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path
                fill="rgba(255, 255, 255, 0.08)"
                d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,128C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
              <path
                fill="rgba(255, 255, 255, 0.05)"
                d="M0,192L48,202.7C96,213,192,235,288,218.7C384,203,480,149,576,144C672,139,768,181,864,192C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
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
    </section>
  )
}

export default NewsletterSection
