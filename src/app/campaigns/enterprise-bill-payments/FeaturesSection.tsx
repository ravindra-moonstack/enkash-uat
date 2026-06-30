"use client"
import React from "react"
import Image from "next/image"
import DynamicHeading from "@/components/dynamic-heading"
import styles from "./page.module.scss"
import {
  MainImage1,
  MainImage2,
  MainImage3,
  MainImage4,
  MultiLocationImage,
  FinanceIcon1,
  FinanceIcon2,
  FinanceIcon3,
  FinanceIcon4,
} from "./img"
import dynamic from "next/dynamic"

const CommanButton = dynamic(
  () => import("@/src/components/buttons/index").then((mod) => mod.default),
  { ssr: true }
)

const StopIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
  </svg>
)

const GridFeatureCard = ({ title, desc, icon }: any) => (
  <div className={styles.fgCard}>
    <div className={styles.icon}>{icon}</div>
    <DynamicHeading
      content={[{ title }]}
      headingTag="h3"
      className="fs-4 mb-1"
    />
    <DynamicHeading
      content={[{ title: desc, color: "color-grey-200" }]}
      headingTag="p"
    />
  </div>
)

const FeaturesSection = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      <section className={`${styles.section} ${styles.sectSoft}`}>
        <div className={"max-w-auto"}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(48px, 6vw, 80px)",
            }}
          >
            <DynamicHeading
              content={[
                {
                  title:
                    "Everything that used to take days, now happens automatically.",
                },
              ]}
              headingTag="h2"
              className={`${styles.h2} h2-40 f-4 mt16`}
            />
          </div>

          {/* Feature 1 */}
          <div className={styles.featureBlock}>
            <div className={styles.featureCopy}>
              <p className="color-equity-blue f-4 mb-2">Real-time visibility</p>
              <DynamicHeading
                content={[
                  {
                    title:
                      "Bills appear in your dashboard. You don't fetch them.",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className={"h2-40 f-4 mb-3"}
              />
              <p className={`${styles.body}`}>
                EnKash connects directly with DISCOMs and BBPS partners to
                retrieve bills the moment they are generated. Amounts, due
                dates, and bill copies land in your dashboard automatically —
                for every location, every biller, every cycle.
              </p>
              <div className={styles.stopDoing}>
                <div className={styles.stopLabel}>
                  <StopIcon /> What you stop doing
                </div>
                <p>
                  Manual bill collection, location-level follow-ups, chasing
                  stores for paper copies.
                </p>
              </div>
              <CommanButton
                title="Make the switch"
                arrow
                theme="outline-blue"
                url={isMobile ? "#form-section-mobile" : "#form-section"}
              />
            </div>
            <div className={`${styles.featureVisual}`}>
              <Image
                src={MainImage1}
                alt="Bills auto-fetched"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className={`${styles.featureBlock} ${styles.reverse}`}>
            <div className={styles.featureCopy}>
              <p className="color-equity-blue f-4 mb-2">
                Multi-location bill management
              </p>
              <DynamicHeading
                content={[
                  {
                    title: "1 location or 1,000 — the view is the same.",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className={"h2-40 f-4 mb-3"}
              />
              <p className={`${styles.body}`}>
                Every bill across every branch, office, outlet, or warehouse
                lives in one dashboard. Tag bills to specific locations using
                unique branch codes. Filter by location, biller, due date, bill
                type, or payment status. Pay one bill or a hundred in the same
                action.
              </p>
              <div className={styles.stopDoing}>
                <div className={styles.stopLabel}>
                  <StopIcon /> What you stop doing
                </div>
                <p>
                  Maintaining separate trackers per city or region, chasing
                  branch managers for payment confirmations.
                </p>
              </div>
              <CommanButton
                title="Make the switch"
                arrow
                theme="outline-blue"
                url={isMobile ? "#form-section-mobile" : "#form-section"}
              />
            </div>
            <div className={`${styles.featureVisual} `}>
              <Image
                src={MultiLocationImage}
                alt="Multi-location Map"
                sizes="(max-width: 768px) 100vw, 50vw"
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
              <p className="color-equity-blue f-4 mb-2">
                Excess demand and load factor analysis
              </p>
              <DynamicHeading
                content={[
                  {
                    title:
                      "See where your electricity bill is higher than it needs to be.",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className={"h2-40 f-4 mb-3"}
              />
              <p className={`${styles.body}`}>
                EnKash flags overconsumption in real time. Excess demand is
                identified before it becomes a charge. Load factor penalties and
                incentives are tracked separately, so your team can see trends,
                not just totals.
              </p>
              <div className={styles.stopDoing}>
                <div className={styles.stopLabel}>
                  <StopIcon /> What you stop doing
                </div>
                <p>
                  Discovering penalties after the fact, paying for
                  overconsumption you could have avoided.
                </p>
              </div>
              <CommanButton
                title="Make the switch"
                arrow
                theme="outline-blue"
                url={isMobile ? "#form-section-mobile" : "#form-section"}
              />
            </div>
            <div className={`${styles.featureVisual} `}>
              <Image
                src={MainImage2}
                alt="Load Factor Analysis"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Feature 4 */}
          <div className={`${styles.featureBlock} ${styles.reverse}`}>
            <div className={styles.featureCopy}>
              <p className="color-equity-blue f-4 mb-2">
                Verified bill copies, auto-attached
              </p>
              <DynamicHeading
                content={[
                  {
                    title:
                      "Every payment comes with a CA-registered bill copy. Automatically.",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className={"h2-40 f-4 mb-3"}
              />
              <p className={`${styles.body}`}>
                Bill copies are fetched directly from BBPS partners and DISCOMs
                and auto-linked to each transaction. They are CA-registered,
                verified, and suitable for audits, GST filings, and expense
                claims. View and download any bill copy from the dashboard at
                any time — no dependency on DISCOM timelines, no dependency on
                what the local store manager kept or didn't keep.
              </p>
              <div className={styles.stopDoing}>
                <div className={styles.stopLabel}>
                  <StopIcon /> What you stop doing
                </div>
                <p>
                  Collecting physical bill copies, requesting duplicates from
                  DISCOMs, building audit packs from scratch.
                </p>
              </div>
              <CommanButton
                title="Make the switch"
                arrow
                theme="outline-blue"
                url={isMobile ? "#form-section-mobile" : "#form-section"}
              />
            </div>
            <div className={`${styles.featureVisual}`}>
              <Image
                src={MainImage3}
                alt="Verified Bill Copies"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Feature 5 */}
          <div className={styles.featureBlock}>
            <div className={styles.featureCopy}>
              <p className="color-equity-blue f-4 mb-2">Bulk payment</p>
              <DynamicHeading
                content={[
                  {
                    title: "Select. Approve. Pay all. Done.",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className={"h2-40 f-4 mb-3"}
              />
              <p className={`${styles.body}`}>
                Filter bills by any combination of location, due date, or
                biller. Select the ones you want to pay. One click sends them
                all. No individual transactions, no repeated authentication, no
                switching between screens.
              </p>
              <div className={styles.stopDoing}>
                <div className={styles.stopLabel}>
                  <StopIcon /> What you stop doing
                </div>
                <p>
                  Processing payments one by one, logging in to multiple
                  portals.
                </p>
              </div>
              <CommanButton
                title="Make the switch"
                arrow
                theme="outline-blue"
                url={isMobile ? "#form-section-mobile" : "#form-section"}
              />
            </div>
            <div className={`${styles.featureVisual}`}>
              <Image
                src={MainImage4}
                alt="Bulk Payment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className={`${styles.section} pb-5 bg-white`}>
        <div className={"max-w-auto"}>
          <div className="text-center mb-5">
            <DynamicHeading
              content={[
                { title: "Every Feature Your Finance Team Actually Needs" },
              ]}
              headingTag="h2"
              className={`${styles.h2} h2-40 f-4`}
            />
          </div>
          <div className={styles.fgGrid}>
            <GridFeatureCard
              title="Approval before payment"
              desc="Set up maker-checker flows so every payment goes through the right person before it goes out. Finance heads stay in control across all locations without becoming a bottleneck."
              icon={
                FinanceIcon1 ? (
                  <Image
                    src={FinanceIcon1}
                    alt="financeIcon1"
                    width={32}
                    height={32}
                  />
                ) : null
              }
            />
            <GridFeatureCard
              title="GST-compliant records"
              desc="Every payment generates a GST-compliant receipt. Reconciliation reports export in formats your accounts team already uses — Tally, Zoho Books, or custom CSV."
              icon={
                FinanceIcon2 ? (
                  <Image
                    src={FinanceIcon2}
                    alt="financeIcon2"
                    width={32}
                    height={32}
                  />
                ) : null
              }
            />
            <GridFeatureCard
              title="Real-time payment status"
              desc="Know immediately if a payment succeeds or fails. No waiting until the next morning to find out a utility bill went unpaid at a live location."
              icon={
                FinanceIcon3 ? (
                  <Image
                    src={FinanceIcon3}
                    alt="financeIcon3"
                    width={32}
                    height={32}
                  />
                ) : null
              }
            />
            <GridFeatureCard
              title="API access for large teams"
              desc="For enterprises running ERP systems, EnKash offers API access to trigger and track payments without leaving your existing tools. Works with SAP, Oracle, and custom platforms."
              icon={
                FinanceIcon4 ? (
                  <Image
                    src={FinanceIcon4}
                    alt="financeIcon4"
                    width={32}
                    height={32}
                  />
                ) : null
              }
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturesSection
