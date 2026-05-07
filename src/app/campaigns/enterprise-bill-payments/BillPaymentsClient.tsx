"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import DynamicHeading from "@/components/dynamic-heading"
import styles from "./page.module.scss"
import { FinanceIcon1, FinanceIcon2, MainImage1, MainImage2, MainImage3, MainImage4, MultiLocationImage, GraphiteImage, FinanceIcon3, FinanceIcon4, HeroBg } from "./img"
import { CommanButton, BillPaymentForm, LogoSlider, CtaBanner, SuspenseLoading } from "@/src/components"
import MealCardComparison from "@/src/components/meal-components/MealCardComparison"
import Counter from "@/components/home-counter"
import { mealCardComparisonData, counterData } from "./data"
import { ctaSideImg } from "../../employee-benefit-multi-wallet/img"

const BillPaymentsClient = () => {
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
                    title: "Business bill payments.",
                    color: "color-white"
                  },
                  {
                    title: "Without disruption.",
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
                className={"mb-0"}
              />
              <div className={styles.heroCtas}>
                <Image
                  src="/images/LicenseGroupIcon.webp"
                  alt="logo"
                  width={366}
                  height={62}
                  priority={true}
                  className={styles.groupIcon}
                />
              </div>
            </div>

            <div id="form-section">
              <div className="contactFormWrapper">
                <div className={styles.formHead}>
                  <DynamicHeading
                    content={[{ title: "We just need a few quick details" }]}
                    headingTag="h2"
                    className="heading-h4 mb-2 text-center fs-4"
                  />
                </div>
                <BillPaymentForm />
              </div>
            </div>
          </div>
        </div>

        {/* Logo Slider */}
        <SuspenseLoading>
          <div className={styles.logoSliderWrap}>
            <div className={styles.sliderOverlay}></div>
            <div className={styles.logoSlider}>
              <LogoSlider />
            </div>
          </div>
        </SuspenseLoading>
      </section >

      <section className={`${styles.counterSection} bg-white pb-0`}>
        <div className="max-w-auto">
          <div className={`${styles.counterHeading} mb-4 mb-md-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Nothing missed. Nothing hidden. Nothing delayed",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="text-center mb-2"
            />
          </div>

          <div className={`${styles.counterSectionOuter}`}>
            <div className="row">
              {counterData.map((item, index) => (
                <div className="col-md-4" key={index.toString()}>
                  <Counter
                    {...item}
                    className={`${styles.counterBox}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MealCardComparison
        heading={mealCardComparisonData.heading}
        ourColumnLabel={mealCardComparisonData.ourColumnLabel}
        competitorColumnLabel={mealCardComparisonData.competitorColumnLabel}
        rows={mealCardComparisonData.rows}
        ctaButton={mealCardComparisonData.ctaButton}
        showSuccessIconForCompetitor={true}
        swapColumns={true}
        centered={true}
      />

      <section className={`${styles.section} ${styles.sectBlue}`}>
        <div className={"max-w-auto"}>
          <div className={styles.overviewCard}>
            <div className={styles.overviewCopy}>
              <DynamicHeading content={[{ title: "One dashboard for every biller, every location." }]} headingTag="h2" className={styles.h2} />
              <DynamicHeading content={[{ title: "EnKash connects to 20,000+ billers across India through Bharat Connect. Every utility type, every location, one place." }]} headingTag="p" className={styles.lead} />
              {/* <a href="#form-section" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}>Make the switch <span className={styles.btnArrow}><ArrowRightIcon /></span></a> */}
              <CommanButton title="Make the switch" arrow theme="outline-blue" url={"#form-section"} />
            </div>
            <div className={styles.overviewVisual}>
              <Image src={GraphiteImage} alt="Dashboard Overview" fill priority />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`${styles.section} ${styles.sectSoft}`}>
        <div className={"max-w-auto"}>
          <div style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 80px)" }}>
            <DynamicHeading content={[{ title: "Everything that used to take days, now happens automatically." }]} headingTag="h2" className={`${styles.h2} mt16`} />
          </div>

          {/* Feature 1 */}
          <div className={styles.featureBlock}>
            <div className={styles.featureCopy}>
              <DynamicHeading content={[{ title: "Real-time visibility" }]} headingTag="h2" className={"heading-h4"} />
              <p className={`${styles.lead}`}>Bills appear in your dashboard. You don't fetch them.</p>
              <p className={`${styles.body}`}>EnKash connects directly with DISCOMs and BBPS partners to retrieve bills the moment they are generated. Amounts, due dates, and bill copies land in your dashboard automatically — for every location, every biller, every cycle.</p>
              <div className={styles.stopDoing}><div className={styles.stopLabel}><StopIcon /> What you stop doing</div><p>Manual bill collection, location-level follow-ups, chasing stores for paper copies.</p></div>
              <CommanButton title="Make the switch" arrow theme="outline-blue" url={"#form-section"} />
            </div>
            <div className={`${styles.featureVisual}`}>
              <Image src={MainImage1} alt="Bills auto-fetched" fill priority style={{ objectFit: "contain" }} />
            </div>
          </div>

          {/* Feature 2 */}
          <div className={`${styles.featureBlock} ${styles.reverse}`}>
            <div className={styles.featureCopy}>
              <DynamicHeading content={[{ title: "Multi-location bill management" }]} headingTag="h2" className={"heading-h4"} />
              <p className={`${styles.lead}`}>1 location or 1,000 — the view is the same.</p>
              <p className={`${styles.body}`}>Every bill across every branch, office, outlet, or warehouse lives in one dashboard. Tag bills to specific locations using unique branch codes. Filter by location, biller, due date, bill type, or payment status. Pay one bill or a hundred in the same action.</p>
              <div className={styles.stopDoing}><div className={styles.stopLabel}><StopIcon /> What you stop doing</div><p>Maintaining separate trackers per city or region, chasing branch managers for payment confirmations.</p></div>
              <CommanButton title="Make the switch" arrow theme="outline-blue" url={"#form-section"} />
            </div>
            <div className={`${styles.featureVisual} `}>
              <Image
                src={MultiLocationImage}
                alt="Multi-location Map"
                priority
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "auto",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: "contain",
                  color: "transparent",
                }}
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className={styles.featureBlock}>
            <div className={styles.featureCopy}>
              <DynamicHeading content={[{ title: "Excess demand and load factor analysis" }]} headingTag="h2" className={"heading-h4"} />
              <p className={`${styles.lead}`}>See where your electricity bill is higher than it needs to be.</p>
              <p className={`${styles.body}`}>EnKash flags overconsumption in real time. Excess demand is identified before it becomes a charge. Load factor penalties and incentives are tracked separately, so your team can see trends, not just totals.</p>
              <div className={styles.stopDoing}><div className={styles.stopLabel}><StopIcon /> What you stop doing</div><p>Discovering penalties after the fact, paying for overconsumption you could have avoided.</p></div>
              <CommanButton title="Make the switch" arrow theme="outline-blue" url={"#form-section"} />
            </div>
            <div className={`${styles.featureVisual} `}>
              <Image src={MainImage2} alt="Load Factor Analysis" fill priority style={{ objectFit: "contain" }} />
            </div>
          </div>

          {/* Feature 4 */}
          <div className={`${styles.featureBlock} ${styles.reverse}`}>
            <div className={styles.featureCopy}>
              <DynamicHeading content={[{ title: "Verified bill copies, auto-attached" }]} headingTag="h2" className={"heading-h4"} />
              <p className={`${styles.lead}`}>Every payment comes with a CA-registered bill copy. Automatically.</p>
              <p className={`${styles.body}`}>Bill copies are fetched directly from BBPS partners and DISCOMs and auto-linked to each transaction. They are CA-registered, verified, and suitable for audits, GST filings, and expense claims. View and download any bill copy from the dashboard at any time — no dependency on DISCOM timelines, no dependency on what the local store manager kept or didn't keep.</p>
              <div className={styles.stopDoing}><div className={styles.stopLabel}><StopIcon /> What you stop doing</div><p>Collecting physical bill copies, requesting duplicates from DISCOMs, building audit packs from scratch.</p></div>
              <CommanButton title="Make the switch" arrow theme="outline-blue" url={"#form-section"} />
            </div>
            <div className={`${styles.featureVisual}`}>
              <Image src={MainImage3} alt="Verified Bill Copies" fill priority style={{ objectFit: "contain" }} />
            </div>
          </div>

          {/* Feature 5 */}
          <div className={styles.featureBlock}>
            <div className={styles.featureCopy}>
              <DynamicHeading content={[{ title: "Bulk payment" }]} headingTag="h2" className={"heading-h4"} />
              <p className={`${styles.lead}`}>Select. Approve. Pay all. Done.</p>
              <p className={`${styles.body}`}>Filter bills by any combination of location, due date, or biller. Select the ones you want to pay. One click sends them all. No individual transactions, no repeated authentication, no switching between screens.</p>
              <div className={styles.stopDoing}><div className={styles.stopLabel}><StopIcon /> What you stop doing</div><p>Processing payments one by one, logging in to multiple portals.</p></div>
              <CommanButton title="Make the switch" arrow theme="outline-blue" url={"#form-section"} />
            </div>
            <div className={`${styles.featureVisual}`}>
              <Image src={MainImage4} alt="Bulk Payment" fill priority style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className={`${styles.section} pt-0 bg-white`}>
        <div className={"max-w-auto"}>
          <div className="text-center mb-5">
            <DynamicHeading content={[{ title: "Every Feature Your Finance Team Actually Needs" }]} headingTag="h2" className={styles.h2} />
          </div>
          <div className={styles.fgGrid}>
            <GridFeatureCard title="Approval before payment" desc="Set up maker-checker flows so every payment goes through the right person before it goes out. Finance heads stay in control across all locations without becoming a bottleneck." icon={FinanceIcon1 ? <Image src={FinanceIcon1} alt="financeIcon1" width={24} height={24} /> : null} />
            <GridFeatureCard title="GST-compliant records" desc="Every payment generates a GST-compliant receipt. Reconciliation reports export in formats your accounts team already uses — Tally, Zoho Books, or custom CSV." icon={FinanceIcon2 ? <Image src={FinanceIcon2} alt="financeIcon2" width={24} height={24} /> : null} />
            <GridFeatureCard title="Real-time payment status" desc="Know immediately if a payment succeeds or fails. No waiting until the next morning to find out a utility bill went unpaid at a live location." icon={FinanceIcon3 ? <Image src={FinanceIcon3} alt="financeIcon3" width={24} height={24} /> : null} />
            <GridFeatureCard title="API access for large teams" desc="For enterprises running ERP systems, EnKash offers API access to trigger and track payments without leaving your existing tools. Works with SAP, Oracle, and custom platforms." icon={FinanceIcon4 ? <Image src={FinanceIcon4} alt="financeIcon4" width={24} height={24} /> : null} />
          </div>
        </div>
      </section>

      <CtaBanner leftImage={ctaSideImg} rightImage={ctaSideImg} buttonText="Make the Switch" buttonUrl={"#form-section"} titleLight="Move your bill payments before disruption" titleBold="becomes downtime." />

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

const StopIcon = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>


const GridFeatureCard = ({ title, desc, icon }: any) => (
  <div className={styles.fgCard}>
    <div className={styles.icon}>{icon}</div>
    <DynamicHeading content={[{ title }]} headingTag="h3" />
    <DynamicHeading content={[{ title: desc }]} headingTag="p" />
  </div>
)


export default BillPaymentsClient
