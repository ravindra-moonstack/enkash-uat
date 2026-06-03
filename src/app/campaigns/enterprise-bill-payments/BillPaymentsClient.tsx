"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import DynamicHeading from "@/components/dynamic-heading"
import styles from "./page.module.scss"
import { HeroBg } from "./img"

const BillPaymentForm = dynamic(() => import("@/src/components/forms/bill-payment-form/index"), {
  ssr: false,
  loading: () => <div style={{ minHeight: '541px' }} />
})
const LogoSlider = dynamic(() => import("@/src/components/logo-slider/index"), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100px' }} />
})
const CtaBanner = dynamic(() => import("@/src/components/cta-banner/index"), { ssr: true })
const MealCardComparison = dynamic(() => import("@/src/components/meal-components/MealCardComparison"), { ssr: true })
const UtilityBeefitSection = dynamic(() => import("@/src/components/sections/utilityBenefitSection/index"), { ssr: true })
const UtilityWorkflow = dynamic(() => import("@/src/components/sections/utilityWorkflow/index"), { ssr: true })
const OverviewSection = dynamic(() => import("./OverviewSection"), { ssr: true })
const FeaturesSection = dynamic(() => import("./FeaturesSection"), { ssr: true })

import { mealCardComparisonData, benifitsData } from "./data"
import { electricity, gas, water, dth, prepaid, broadband } from "../../utility-bill-payment/img"
import { ctaSideImg } from "../../employee-benefit-multi-wallet/img"

const BillPaymentsClient = () => {
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
        {HeroBg && (
          <Image
            src={HeroBg}
            alt="Hero Background"
            fill
            priority={true}
            fetchPriority="high"
            className={styles.heroBg}
            sizes="100vw"
            decoding="async"
            quality={80}
          />
        )}
        <header className={styles.customHeader}>
          <div className={"max-w-auto"}>
            <Link href="/" className={styles.logoLink}>
              <Image src={"/images/Logo-white.svg"} alt="Enkash Logo" width={120} height={40} priority />
            </Link>
          </div>
        </header>
        <div className={"max-w-auto"}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <DynamicHeading
                content={[
                  {
                    title: "Business Bill Payments.",
                    color: "color-white d-block"
                  },
                  {
                    title: "Without Disruption.",
                    color: "color-white"
                  },
                ]}
                headingTag="h1"
                className={"mb-0"}
              />
              <DynamicHeading
                content={[
                  {
                    title:
                      "Manage electricity, water, gas, broadband, telecom, and other recurring business utility bills across all locations from one unified dashboard powered by Bharat Connect.",
                    color: "color-white f-3"
                  },
                ]}
                headingTag="p"
                className={"mb-3"}
              />
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
            <div id="form-section" className={`${styles.formSection} ${styles.hideOnMobile}`}>
              <div className="contactFormWrapper">
                <div className={styles.formHead}>
                  <DynamicHeading
                    content={[{ title: "We just need a few quick details", color: "f-4" }]}
                    headingTag="h2"
                    className={`formH2 mb-2 text-center`}
                  />
                </div>
                <BillPaymentForm />
              </div>
            </div>
          </div>
        </div>

        {/* Logo Slider */}
        <div className={styles.logoSliderWrap}>
          <div className={styles.sliderOverlay}></div>
          <div className={styles.logoSlider}>
            <LogoSlider />
          </div>
        </div>
      </section >

      <UtilityBeefitSection
        sectionTitle="Nothing missed. Nothing hidden. Nothing delayed"
        cards={benifitsData}
        className={styles.campaignBenefit}
      />

      <MealCardComparison
        heading={mealCardComparisonData.heading}
        ourColumnLabel={mealCardComparisonData.ourColumnLabel}
        competitorColumnLabel={mealCardComparisonData.competitorColumnLabel}
        rows={mealCardComparisonData.rows}
        ctaButton={mealCardComparisonData.ctaButton ? {
          ...mealCardComparisonData.ctaButton,
          href: isMobile ? "#form-section-mobile" : "#form-section"
        } : undefined}
        showSuccessIconForCompetitor={true}
        swapColumns={true}
        centered={true}
      />

      <UtilityWorkflow
        className={styles.campaignWorkflow}
        heading={[
          { text: "All utilities. ", colorClass: "color-black d-block f-3" },
          { text: "All locations. ", colorClass: "color-black d-block f-3" },
          { text: "One workflow.", colorClass: "color-black d-block f-7" },
        ]}
        description={[
          { text: "A platform to manage end-to-end utility payment operations.", colorClass: "color-secondry-black f-4" },
        ]}
        items={[
          { label: "Electricity", icon: electricity },
          { label: "Gas", icon: gas },
          { label: "Water", icon: water },
          { label: "DTH", icon: dth },
          { label: "Electricity Prepaid", icon: prepaid },
          { label: "Broadband", icon: broadband },
        ]}
      />

      <OverviewSection isMobile={isMobile} />

      <FeaturesSection isMobile={isMobile} />

      <CtaBanner leftImage={ctaSideImg} rightImage={ctaSideImg} buttonText="Make the Switch" buttonUrl={isMobile ? "#form-section-mobile" : "#form-section"} titleLight="Move your bill payments before disruption" titleBold="becomes downtime." />

      <div id="form-section-mobile" className={styles.showOnlyOnMobile}>
        <div className="contactFormWrapper">
          <div className={styles.formHead}>
            <DynamicHeading
              content={[{ title: "We just need a few quick details", color: "f-4" }]}
              headingTag="h2"
              className={`formH2 mb-2 text-center`}
            />
          </div>
          <BillPaymentForm />
        </div>
      </div>

      <footer className={styles.customFooter}>
        <div className={"max-w-auto"}>
          <div className={styles.copyrightBar}>
            <p>Copyright © 2026 | Nehat Tech Solutions Pvt. Ltd. All rights reserved.</p>
            <p>Copyright © 2026 | Nehat Business Services Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default BillPaymentsClient
