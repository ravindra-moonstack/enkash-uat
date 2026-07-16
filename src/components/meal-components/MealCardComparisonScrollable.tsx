import React from "react"
import styles from "./mealstylescrollable.module.scss"
import { DynamicHeading } from ".."
import CommonButton from "../buttons"
import { compititorIcon, succesicon } from "@/src/app/meal-card/img"
import Image from "next/image"

export interface ComparisonRow {
  feature: string
  ourValue: string
  competitorValue: string | string[]
}

export interface MealCardComparisonProps {
  heading?: {
    content: Array<{
      title?: string | number
      name?: string
      text?: string
      color?: string
      tag?: string
      className?: string
      link?: string
    }>
    headingTag?: string
    className?: string
  }
  ourColumnLabel?: string
  competitorColumnLabel?: string | string[]
  rows?: ComparisonRow[]
  ctaButton?: {
    label: string
    href?: string
    onClick?: () => void
  }
  showSuccessIconForCompetitor?: boolean
  swapColumns?: boolean
  centered?: boolean
  hideIcons?: boolean
  highlightFeatureColumn?: boolean
  description?: string
  featureColumnLabel?: string
}

const defaultHeading = {
  content: [
    {
      title: "The Only Meal Card Platform That Gives You Complete Ownership",
      color: "color-black",
    },
  ],
  headingTag: "h2" as const,
  className: "f-7",
}

const defaultRows: ComparisonRow[] = [
  {
    feature: "Control & Independence",
    ourValue: "Full ownership, no dependency",
    competitorValue: "Bank or third-party dependent",
  },
  {
    feature: "Card Issuance",
    ourValue: "Full ownership, no dependency",
    competitorValue: "Bank or third-party dependent",
  },
  {
    feature: "Fund Management",
    ourValue: "Full ownership, no dependency",
    competitorValue: "Bank or third-party dependent",
  },
  {
    feature: "Custom Branding",
    ourValue: "Full ownership, no dependency",
    competitorValue: "Bank or third-party dependent",
  },
  {
    feature: "Real-time Controls",
    ourValue: "Full ownership, no dependency",
    competitorValue: "Bank or third-party dependent",
  },
  {
    feature: "Compliance & KYC",
    ourValue: "Full ownership, no dependency",
    competitorValue: "Bank or third-party dependent",
  },
  {
    feature: "API Access",
    ourValue: "Full ownership, no dependency",
    competitorValue: "Bank or third-party dependent",
  },
  {
    feature: "Support",
    ourValue: "Full ownership, no dependency",
    competitorValue: "Bank or third-party dependent",
  },
  {
    feature: "Analytics & Reporting",
    ourValue: "Full ownership, no dependency",
    competitorValue: "Bank or third-party dependent",
  },
]

const MealCardComparisonScrollable: React.FC<MealCardComparisonProps> = ({
  heading = defaultHeading,
  ourColumnLabel = "EnKash",
  competitorColumnLabel = "Competitors",
  rows = defaultRows,
  ctaButton = {
    label: "Book a Demo to See the Difference",
    href: "#",
  },
  showSuccessIconForCompetitor = false,
  swapColumns = false,
  centered = false,
  hideIcons = false,
  highlightFeatureColumn = false,
  description,
  featureColumnLabel = "Feature",
}) => {
  return (
    <section className={`${styles.comparisonSection} max-w-auto`}>
      <div className={styles.headingWrapper}>
        <DynamicHeading
          content={heading.content as any}
          headingTag={(heading.headingTag as any) || "h2"}
          className={heading.className}
        />
        {description && <p className="color-grey-200 mt-3">{description}</p>}
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.comparisonTable}>
          <thead>
            <tr>
              <th
                className={`${styles.featureCol} fw-bold ${highlightFeatureColumn ? styles.ourCol : ""}`}
              >
                {highlightFeatureColumn ? (
                  <span className={styles.ourLabel}>{featureColumnLabel}</span>
                ) : (
                  featureColumnLabel
                )}
              </th>
              {swapColumns ? (
                <>
                  {Array.isArray(competitorColumnLabel) ? (
                    competitorColumnLabel.map((label, idx) => (
                      <th key={idx} className={`${styles.competitorCol}`}>
                        {label}
                      </th>
                    ))
                  ) : (
                    <th className={`${styles.competitorCol}`}>
                      {competitorColumnLabel}
                    </th>
                  )}
                  <th
                    className={`${highlightFeatureColumn ? styles.competitorCol : `${styles.ourCol} fw-bold`}`}
                  >
                    {highlightFeatureColumn ? (
                      ourColumnLabel
                    ) : (
                      <span className={styles.ourLabel}>{ourColumnLabel}</span>
                    )}
                  </th>
                </>
              ) : (
                <>
                  <th
                    className={`${highlightFeatureColumn ? styles.competitorCol : `${styles.ourCol} fw-bold`}`}
                  >
                    {highlightFeatureColumn ? (
                      ourColumnLabel
                    ) : (
                      <span className={styles.ourLabel}>{ourColumnLabel}</span>
                    )}
                  </th>
                  {Array.isArray(competitorColumnLabel) ? (
                    competitorColumnLabel.map((label, idx) => (
                      <th key={idx} className={`${styles.competitorCol}`}>
                        {label}
                      </th>
                    ))
                  ) : (
                    <th className={`${styles.competitorCol}`}>
                      {competitorColumnLabel}
                    </th>
                  )}
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className={styles.tableRow}>
                <td
                  className={`${styles.featureCell} ${highlightFeatureColumn ? styles.ourCell : ""}`}
                >
                  <span
                    className={
                      highlightFeatureColumn ? styles.ourValueText : ""
                    }
                  >
                    {row.feature}
                  </span>
                </td>
                {swapColumns ? (
                  <>
                    {Array.isArray(row.competitorValue) ? (
                      row.competitorValue.map((val, i) => (
                        <td
                          key={i}
                          className={`${styles.competitorCell} ${centered ? styles.centered : ""}`}
                        >
                          {!hideIcons && (
                            <span
                              className={
                                val === "Yes" && showSuccessIconForCompetitor
                                  ? styles.checkIcon
                                  : styles.warnIcon
                              }
                            >
                              <Image
                                width={24}
                                height={24}
                                src={
                                  val === "Yes" && showSuccessIconForCompetitor
                                    ? succesicon
                                    : compititorIcon
                                }
                                alt="competitor icon"
                              />
                            </span>
                          )}
                          <span className={styles.competitorValueText}>
                            {val}
                          </span>
                        </td>
                      ))
                    ) : (
                      <td
                        className={`${styles.competitorCell} ${centered ? styles.centered : ""}`}
                      >
                        {!hideIcons && (
                          <span
                            className={
                              row.competitorValue === "Yes" &&
                              showSuccessIconForCompetitor
                                ? styles.checkIcon
                                : styles.warnIcon
                            }
                          >
                            <Image
                              width={24}
                              height={24}
                              src={
                                row.competitorValue === "Yes" &&
                                showSuccessIconForCompetitor
                                  ? succesicon
                                  : compititorIcon
                              }
                              alt="competitor icon"
                            />
                          </span>
                        )}
                        <span className={styles.competitorValueText}>
                          {row.competitorValue}
                        </span>
                      </td>
                    )}
                    <td
                      className={`${highlightFeatureColumn ? styles.competitorCell : styles.ourCell} ${centered ? styles.centered : ""}`}
                    >
                      {!hideIcons && (
                        <span className={styles.checkIcon}>
                          <Image
                            width={24}
                            height={24}
                            src={succesicon}
                            alt="success icon"
                          />
                        </span>
                      )}
                      <span
                        className={
                          highlightFeatureColumn
                            ? styles.competitorValueText
                            : styles.ourValueText
                        }
                      >
                        {row.ourValue}
                      </span>
                    </td>
                  </>
                ) : (
                  <>
                    <td
                      className={`${highlightFeatureColumn ? styles.competitorCell : styles.ourCell} ${centered ? styles.centered : ""}`}
                    >
                      {!hideIcons && (
                        <span className={styles.checkIcon}>
                          <Image
                            width={24}
                            height={24}
                            src={succesicon}
                            alt="success icon"
                          />
                        </span>
                      )}
                      <span
                        className={
                          highlightFeatureColumn
                            ? styles.competitorValueText
                            : styles.ourValueText
                        }
                      >
                        {row.ourValue}
                      </span>
                    </td>
                    {Array.isArray(row.competitorValue) ? (
                      row.competitorValue.map((val, i) => (
                        <td
                          key={i}
                          className={`${styles.competitorCell} ${centered ? styles.centered : ""}`}
                        >
                          {!hideIcons && (
                            <span
                              className={
                                val === "Yes" && showSuccessIconForCompetitor
                                  ? styles.checkIcon
                                  : styles.warnIcon
                              }
                            >
                              <Image
                                width={24}
                                height={24}
                                src={
                                  val === "Yes" && showSuccessIconForCompetitor
                                    ? succesicon
                                    : compititorIcon
                                }
                                alt="competitor icon"
                              />
                            </span>
                          )}
                          <span className={styles.competitorValueText}>
                            {val}
                          </span>
                        </td>
                      ))
                    ) : (
                      <td
                        className={`${styles.competitorCell} ${centered ? styles.centered : ""}`}
                      >
                        {!hideIcons && (
                          <span
                            className={
                              row.competitorValue === "Yes" &&
                              showSuccessIconForCompetitor
                                ? styles.checkIcon
                                : styles.warnIcon
                            }
                          >
                            <Image
                              width={24}
                              height={24}
                              src={
                                row.competitorValue === "Yes" &&
                                showSuccessIconForCompetitor
                                  ? succesicon
                                  : compititorIcon
                              }
                              alt="competitor icon"
                            />
                          </span>
                        )}
                        <span className={styles.competitorValueText}>
                          {row.competitorValue}
                        </span>
                      </td>
                    )}
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {ctaButton && (
        <div className={styles.ctaWrapper}>
          <CommonButton
            title={ctaButton.label}
            url={ctaButton.href}
            theme="blue"
            arrow
          />
        </div>
      )}
    </section>
  )
}

export default MealCardComparisonScrollable
