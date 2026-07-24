"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import DynamicHeading from "@/components/dynamic-heading"
import styles from "./page.module.scss"

const MealCardCampaignForm = dynamic(
  () => import("@/src/components/forms/meal-card-campaign-form/index"),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: "541px" }} />,
  }
)
const LogoSlider = dynamic(() => import("@/src/components/logo-slider/index"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "100px" }} />,
})
const UtilityBeefitSection = dynamic(
  () => import("@/src/components/sections/utilityBenefitSection/index"),
  { ssr: true }
)
const CommanButton = dynamic(
  () => import("@/src/components/buttons/index").then((mod) => mod.default),
  { ssr: true }
)

import { benifitsData } from "../enterprise-bill-payments/data"
import { HeroBg, HeroBgMobile } from "./img"

const MealCardClient = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className={styles.enterpriseBillPayments}>
      <section className={`${styles.hero}`}>
        {(HeroBg || HeroBgMobile) && (
          <Image
            src={isMobile ? HeroBgMobile : HeroBg}
            alt="Hero Background"
            fill
            priority={true}
            fetchPriority="high"
            className={styles.heroBg}
            sizes="100vw"
            decoding="async"
            quality={100}
          />
        )}
        <header className={styles.customHeader}>
          <div className={"max-w-auto"}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src={"/images/Logo-white.svg"}
                alt="Enkash Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
          </div>
        </header>
        <div className={"max-w-auto"}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <DynamicHeading
                content={[
                  {
                    title: "India's First Meal Card with UPI Payments",
                    color: "color-white d-block",
                  },
                ]}
                headingTag="h1"
                className={"mb-0"}
              />
              <p className={styles.heroDesc}>
                Bringing together the power of RuPay, the familiarity of
                {isMobile ? " " : <br />}
                UPI, and the tax efficiency of meal benefits.
              </p>
              <div className={styles.heroCtas}>
                <Image
                  src="/images/LicenseGroupIcon.png"
                  alt="logo"
                  width={366}
                  height={69}
                  priority={true}
                  className={styles.groupIcon}
                />
              </div>
            </div>

            <div
              className={`${styles.mobileLogoSliderWrap} ${styles.showOnlyOnMobile}`}
            >
              <div className={styles.mobileSliderOverlay}></div>
              <div className={styles.logoSlider}>
                <LogoSlider />
              </div>
            </div>

            <div id="form-section" className={styles.formSection}>
              <div className="contactFormWrapper m-0">
                <div className={styles.formHead}>
                  <DynamicHeading
                    content={[
                      {
                        title: "We just need a few quick details",
                        color: "f-4",
                      },
                    ]}
                    headingTag="h2"
                    className={`formH2 mb-2 text-center`}
                  />
                </div>
                <MealCardCampaignForm />
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to maintain hero height since LogoSlider was moved out */}
        <div style={{ height: "70px" }} className="d-none d-md-block"></div>

        {/* Fade gradient inside the hero to handle transition */}
        <div
          className={styles.logoSliderWrap}
          style={{
            marginTop: 0,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <div className={styles.sliderOverlay}></div>
        </div>
      </section>

      <div
        style={{ backgroundColor: "#ffffff", position: "relative", zIndex: 2 }}
      >
        <UtilityBeefitSection
          sectionTitle="The Meal Card Built to Deliver More at Every Step."
          cards={benifitsData}
          className={styles.campaignBenefit}
        />
      </div>

      <div
        className={`${styles.logoSliderWrap} ${styles.hideOnMobile}`}
        style={{ marginTop: 0 }}
      >
        <div className={styles.logoSlider}>
          <LogoSlider />
        </div>
      </div>

      <footer className={styles.customFooter}>
        <div className={"max-w-auto"}>
          <div className={styles.copyrightBar}>
            <p>
              Copyright © 2026 | Nehat Tech Solutions Pvt. Ltd. All rights
              reserved.
            </p>
            <p>
              Copyright © 2026 | Nehat Business Services Pvt. Ltd. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MealCardClient
