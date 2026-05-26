import React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import styles from "./page.module.scss"
import { caseStudiesData } from "../storiesData"
import { BankGradeSecurity, BottomCtaSection, CustomBreadcrumb, DynamicHeading } from "@/src/components"
import vaultSecurity from "@/src/app/payment-gateway/img/vault-security.webp"

interface PageProps {
  params: Promise<{ slug: string }>
}

const securityFeatures = [
  {
    title: "PCI DSS Level 1 Compliance",
    description: "Certified to the highest level of payment card industry security standards. Your transaction data is protected with the same protocols used by major financial institutions.",
  },
  {
    title: "End-to-End Encryption",
    description: "256-bit SSL encryption from initial data capture through final settlement. Payment information is encrypted at every stage of processing.",
  },
  {
    title: "Advanced Tokenization",
    description: "Sensitive card data is replaced with secure tokens. Original card information is never stored, eliminating data breach risks while enabling saved card functionality.",
  },
  {
    title: "Continuous Monitoring",
    description: "24/7 security operations center with real-time threat detection, automated response protocols, and regular third-party security audits.",
  },
]

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data = caseStudiesData[slug]

  if (!data) {
    return {
      title: "Story Not Found | EnKash",
      description: "The requested customer story could not be found.",
    }
  }

  return {
    title: data.meta.metaTitle,
    description: data.meta.metaDescription,
    alternates: {
      canonical: `${process.env.URL || "https://www.enkash.com"}/resources/customer-stories/${slug}`,
    },
    openGraph: {
      title: data.meta.metaTitle,
      description: data.meta.metaDescription,
      type: "website",
      url: `${process.env.URL || "https://www.enkash.com"}/resources/customer-stories/${slug}`,
    }
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const data = caseStudiesData[slug]

  if (!data) {
    notFound()
  }

  const organizationName = data.slug.startsWith("vianet") ? "Vianet" : "Honeycomb Creative"

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Customer Stories", url: "/resources/customer-stories" },
    { name: organizationName, url: `/resources/customer-stories/${slug}` },
  ]

  const colonIndex = data.title.indexOf(":")
  let boldPart = data.title
  let normalPart = ""

  if (colonIndex !== -1) {
    boldPart = data.title.substring(0, colonIndex + 1)
    normalPart = data.title.substring(colonIndex + 1).trim()
  }

  return (
    <div className={styles.caseStudyPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image
            src="/uploads/2025/08/banner-scaled-1.webp"
            alt="Hero Background"
            fill
            priority
            className={styles.bgImage}
          />
        </div>

        <div className="max-w-auto position-relative z-index-2">
          <div className={styles.heroHeaderContainer}>
            <CustomBreadcrumb items={breadcrumbItems} linkColor="white" />
            <DynamicHeading
              content={
                colonIndex !== -1
                  ? [
                    {
                      text: boldPart,
                      color: "color-white",
                      className: styles.heroHeadingBold,
                    },
                    {
                      text: normalPart,
                      color: "color-white",
                      className: styles.heroHeadingNormal,
                    },
                  ]
                  : [{ text: data.title, color: "color-white" }]
              }
              headingTag="h1"
              className={`${styles.heroHeading} mt-3`}
            />
          </div>
          <div className={styles.heroContentGrid}>
            <div className={styles.heroLeft}>
              <div className={styles.quoteContainer}>
                <DynamicHeading
                  content={[{ text: `“${data.hero.clientQuote.quote}”`, color: "color-white f-4" }]}
                  headingTag="p"
                  className={styles.quoteText}
                />
                <DynamicHeading
                  content={[
                    { text: `– ${data.hero.clientQuote.author}`, color: "color-white f-7" }
                  ]}
                  headingTag="p"
                  className={styles.quoteAuthor}
                />
              </div>

              <div className={styles.aboutSection}>
                <DynamicHeading
                  content={[{ text: "About the Organisation", color: "color-white f-7" }]}
                  headingTag="p"
                  className={styles.sectionHeadingSmall}
                />

                <div className={styles.orgDetailsCard}>
                  <div className={styles.detailRow}>
                    <div className={styles.detailCol}>
                      <div className={styles.detailHeader}>
                        <span className={styles.verticalBar}>|</span>
                        <DynamicHeading
                          content={[{ text: "INDUSTRY:", color: "color-white f-5" }]}
                          headingTag="p"
                          className={styles.detailLabel}
                        />
                      </div>
                      <DynamicHeading
                        content={[{ text: data.industry, color: "color-white" }]}
                        headingTag="p"
                        className={styles.detailValue}
                      />
                    </div>

                    <div className={styles.detailCol}>
                      <div className={styles.detailHeader}>
                        <span className={styles.verticalBar}>|</span>
                        <DynamicHeading
                          content={[{ text: "LOCATION:", color: "color-white f-5" }]}
                          headingTag="p"
                          className={styles.detailLabel}
                        />
                      </div>
                      <DynamicHeading
                        content={[{ text: data.location, color: "color-white" }]}
                        headingTag="p"
                        className={styles.detailValue}
                      />
                    </div>

                    <div className={styles.detailCol}>
                      <div className={styles.detailHeader}>
                        <span className={styles.verticalBar}>|</span>
                        <DynamicHeading
                          content={[{ text: "EMPLOYEE SIZE:", color: "color-white f-5" }]}
                          headingTag="p"
                          className={styles.detailLabel}
                        />
                      </div>
                      <DynamicHeading
                        content={[{ text: data.employeeSize, color: "color-white" }]}
                        headingTag="p"
                        className={styles.detailValue}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className={styles.impactContainer}>
            <DynamicHeading
              content={[{ text: "IMPACT", color: "color-equity-blue f-2" }]}
              headingTag="h2"
              className={styles.impactLabel}
            />

            <div className={styles.metricsGrid}>
              {data.featuredMetrics.map((metric, i) => (
                <div key={i} className={styles.metricCard}>
                  <div className={styles.metricIconWrapper}>
                    <Image
                      src="/uploads/2025/08/Frame-1.svg"
                      alt="Success metric icon"
                      width={30}
                      height={31}
                      className={styles.checkmarkIcon}
                    />
                  </div>
                  <DynamicHeading
                    content={[{ text: metric, color: "color-white" }]}
                    headingTag="p"
                    className={styles.metricText}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className={styles.challengesSection}>
        <div className={styles.challengesBackground}>
          <Image
            src="/uploads/2025/08/Group-1171277148-scaled-1.webp"
            alt="Challenges background overlay"
            fill
            className={styles.bgImage}
          />
        </div>

        <div className="max-w-auto position-relative z-index-2">
          <div className={styles.challengesContainer}>
            <div className={styles.challengesHeader}>
              <DynamicHeading
                content={[{ text: "Challenges", color: "color-white" }]}
                headingTag="h2"
                className={styles.challengesHeading}
              />
            </div>

            <div className={styles.challengesList}>
              {data.challenges.map((challenge, index) => (
                <div key={index} className={styles.challengeItem}>
                  <DynamicHeading
                    headingTag="p"
                    className={styles.challengeParagraph}
                    content={[
                      {
                        text: `${index + 1}. `,
                        className: styles.challengeNumber,
                        color: "color-white"
                      },
                      {
                        text: challenge.title,
                        className: styles.challengeBoldTitle,
                        tag: "strong",
                        color: "color-white"
                      },
                      {
                        text: challenge.description,
                        className: styles.challengeDesc,
                        color: "color-grey-300"
                      }
                    ]}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.solutionsContentBox}>
            <div className={styles.solutionsLeft}>
              <div className={styles.solutionsImageWrapper}>
                <Image
                  src="/uploads/2025/08/image-17957.webp"
                  alt="Solutions Puzzle Illustration"
                  width={320}
                  height={320}
                  priority
                  className={styles.solutionsImage}
                />
              </div>
            </div>

            <div className={styles.solutionsRight}>
              <DynamicHeading
                content={[{ text: "Solutions", color: "color-black font-bold" }]}
                headingTag="h2"
                className={styles.solutionsMainHeading}
              />

              <div className={styles.solutionsFeaturesList}>
                {data.solutions.map((sol, index) => (
                  <div key={index} className={styles.solutionsFeatureCard}>
                    <DynamicHeading
                      content={[{ text: sol.title, color: "color-black" }]}
                      headingTag="h3"
                      className={`heading-h5 ${styles.solutionsFeatureTitle}`}
                    />
                    <DynamicHeading
                      content={[{ text: sol.description, color: "color-grey-200" }]}
                      headingTag="p"
                      className="mb-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Results Section */}
      <section className={styles.resultsSectionNew}>
        <div className={styles.resultsGetStartedBox}>
          <div className={`${styles.resultsGetStartedBoxInner} max-w-auto`}>
            <DynamicHeading
              content={[{ text: "Business Results", color: "color-grey-200 f-3" }]}
              headingTag="h2"
              className={styles.resultsHeading}
            />

            <div className={styles.resultsContentRow}>
              <div className={styles.customListIndicator}></div>
              <ul className={styles.customBulletList}>
                {data.resultsBullets?.map((bullet, index) => {
                  const colonIndex = bullet.indexOf(":")
                  if (colonIndex !== -1 && colonIndex < 40) {
                    const boldPart = bullet.substring(0, colonIndex + 1)
                    const normalPart = bullet.substring(colonIndex + 1)
                    return (
                      <li key={index} className={styles.customBulletItem}>
                        <span className={styles.bulletBoldText}>{boldPart}</span>
                        <DynamicHeading
                          content={[{ text: normalPart, color: "color-black" }]}
                          headingTag="span"
                        />
                      </li>
                    )
                  }
                  return (
                    <li key={index} className={styles.customBulletItem}>
                      <DynamicHeading
                        content={[{ text: bullet, color: "color-black" }]}
                        headingTag="span"
                      />
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

