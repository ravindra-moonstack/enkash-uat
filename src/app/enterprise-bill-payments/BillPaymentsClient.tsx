"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import DynamicHeading from "@/components/dynamic-heading"
import { enkashBlueLogo } from "@/src/components/header"
import styles from "./page.module.scss"
import { FinanceIcon1, FinanceIcon2, MainImage1, MainImage2, MainImage3, MainImage4, MultiLocationImage, GraphiteImage, SwitchIcon1, SwitchIcon2, SwitchIcon3, FinanceIcon3, FinanceIcon4 } from "./img"
import { CommanButton, BillPaymentForm, LogoSlider, FeatureCard as Notif, CtaBanner } from "@/src/components"
import MealCardComparison from "@/src/components/meal-components/MealCardComparison"
import { allProductSections, mealCardComparisonData } from "./data"
import { ctaSideImg } from "../products/corporate-cards/img"

const mergedCards = allProductSections.flatMap((section) => section.items)
const BillPaymentsClient = () => {
  return (
    <div className={styles.enterpriseBillPayments}>
      <header className={styles.customHeader}>
        <div className={"max-w-auto"}>
          <Link href="/" className={styles.logoLink}>
            <Image src={enkashBlueLogo} alt="Enkash Logo" width={120} priority />
          </Link>
        </div>
      </header>

      <section className={`${styles.section} ${styles.hero}`}>
        <div className={"max-w-auto"}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <DynamicHeading
                content={[
                  {
                    title: "Business bill payments.",
                    tag: "span",
                  },
                  {
                    title: "Without disruption.",
                    tag: "span",
                    className: "d-block",
                  },
                ]}
                headingTag="h1"
                className="h1"
              />
              <DynamicHeading
                content={[
                  {
                    title:
                      "If your previous bill payment setup changed recently, you're not alone. Move your utility bill operations to EnKash without downtime.",
                  },
                ]}
                headingTag="p"
                className={styles.lead}
              />
              <div className={styles.heroCtas}>
                <Image
                  src="/images/groupIcon.png"
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
                    className="heading-h4 mb-2 text-center"
                  />
                </div>
                <BillPaymentForm />
              </div>
            </div>
          </div>
        </div>
      </section >
      <LogoSlider />

      <div className={`${styles.slider_row} relative bg-white`}>
        <div className={`${styles.title} text-center max-w-auto`}>
          <DynamicHeading
            content={[
              {
                title: "Nothing missed. Nothing hidden. Nothing delayed",
                color: "color-black f-5",
              },
            ]}
            headingTag={'h2'}
            className={'f-6'}
          />
        </div>

        <div className="max-w-auto">
          <div className={`row ${styles.integration_row}`}>
            <div className="d-flex align-items-stretch gap-3 gap-md-0 flex-wrap flex-md-nowrap pb-4 pt-4 pt-md-5 justify-content-center">
              {mergedCards?.map((card, index) => (
                <Notif
                  key={index.toString()}
                  titleHtml={card.title}
                  description={card?.description}
                  cardImage={card.image || undefined}
                  hoverClass={styles.hoverClass}
                  iconWidth={48}
                  headingTag="h3"
                  headingClassName="heading-h5"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <MealCardComparison
        heading={mealCardComparisonData.heading}
        ourColumnLabel={mealCardComparisonData.ourColumnLabel}
        competitorColumnLabel={mealCardComparisonData.competitorColumnLabel}
        rows={mealCardComparisonData.rows}
        ctaButton={mealCardComparisonData.ctaButton}
        showSuccessIconForCompetitor={true}
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
              <DynamicHeading content={[{ title: "Real-time visibility" }]} headingTag="h2" className={styles.h2} />
              <p className={styles.lead}>Bills appear in your dashboard. You don't fetch them.</p>
              <p className={styles.body}>EnKash connects directly with DISCOMs and BBPS partners to retrieve bills the moment they are generated. Amounts, due dates, and bill copies land in your dashboard automatically — for every location, every biller, every cycle.</p>
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
              <DynamicHeading content={[{ title: "Multi-location bill management" }]} headingTag="h2" className={styles.h2} />
              <p className={styles.lead}>1 location or 1,000 — the view is the same.</p>
              <p className={styles.body}>Every bill across every branch, office, outlet, or warehouse lives in one dashboard. Tag bills to specific locations using unique branch codes. Filter by location, biller, due date, bill type, or payment status. Pay one bill or a hundred in the same action.</p>
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
              <DynamicHeading content={[{ title: "Excess demand and load factor analysis" }]} headingTag="h2" className={styles.h2} />
              <p className={styles.lead}>See where your electricity bill is higher than it needs to be.</p>
              <p className={styles.body}>EnKash flags overconsumption in real time. Excess demand is identified before it becomes a charge. Load factor penalties and incentives are tracked separately, so your team can see trends, not just totals.</p>
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
              <DynamicHeading content={[{ title: "Verified bill copies, auto-attached" }]} headingTag="h2" className={styles.h2} />
              <p className={styles.lead}>Every payment comes with a CA-registered bill copy. Automatically.</p>
              <p className={styles.body}>Bill copies are fetched directly from BBPS partners and DISCOMs and auto-linked to each transaction. They are CA-registered, verified, and suitable for audits, GST filings, and expense claims. View and download any bill copy from the dashboard at any time — no dependency on DISCOM timelines, no dependency on what the local store manager kept or didn't keep.</p>
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
              <DynamicHeading content={[{ title: "Bulk payment" }]} headingTag="h2" className={styles.h2} />
              <p className={styles.lead}>Select. Approve. Pay all. Done.</p>
              <p className={styles.body}>Filter bills by any combination of location, due date, or biller. Select the ones you want to pay. One click sends them all. No individual transactions, no repeated authentication, no switching between screens.</p>
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
      <section className={`${styles.section} bg-white`}>
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

      {/* <section style={{ paddingTop: 0 }}>
        <div className={"max-w-auto"}>
          <div className={styles.finalCta}>
            <DynamicHeading content={[{ title: "Move your bill payments before disruption becomes downtime." }]} headingTag="h2" className={styles.h2} />
            <p className={styles.lead}>
              Make the Switch &gt;&gt;
            </p>
          </div>
        </div>
      </section> */}
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

const CheckIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
const XIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
const ZapIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
const ArrowRightIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
const StopIcon = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>

const ShieldIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
const FileIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="13" y2="17"></line></svg>
const ActivityIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
const CodeIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>

const BillRow = ({ name, id, due, amt, status }: any) => (
  <div className={styles.billRow}>
    <div className={styles.billIcon}><ZapIcon /></div>
    <div><div className={styles.billName}>{name}</div><div className={styles.billMeta}><span>{id}</span> · <span>Due {due}</span></div></div>
    <div className={styles.billAmt}>{amt}</div>
    <span className={`${styles.billStatus} ${status === "Paid" ? styles.paid : styles.due}`}>{status}</span>
  </div>
)

const GridFeatureCard = ({ title, desc, icon }: any) => (
  <div className={styles.fgCard}>
    <div className={styles.icon}>{icon}</div>
    <DynamicHeading content={[{ title }]} headingTag="h3" />
    <DynamicHeading content={[{ title: desc }]} headingTag="p" />
  </div>
)

const CheckTeal = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#10a76b" />
    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MinusOrange = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#e8a317" />
    <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default BillPaymentsClient
