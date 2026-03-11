import React from "react"
import { Container } from "react-bootstrap"
import Link from "next/link"
import Image from "next/image"
import GlossaryBgImage from "../../../public/images/glossaryBgImage.webp"
import { CustomBreadcrumb, DynamicHeading } from "@/src/components"
import styles from "./page.module.scss"

import dynamic from "next/dynamic"
const BlogSection = dynamic(() => import("@/src/components/sections/blog-section"))
import GlossarySearch from "@/src/components/glossary/GlossarySearch"
import AlphabetBar from "@/src/components/glossary/AlphabetBar"
import { getApiBaseUrl } from "@/src/utils/api-helpers"


export const metadata = {
  title: "FinTech Glossary | Complete Financial Technology Terms",
  description:
    "Explore our comprehensive FinTech glossary with definitions, business context, and explanations of financial technology terms.",
}
async function getLetters() {
  try {
    const baseUrl = getApiBaseUrl()
    const res = await fetch(`${baseUrl}/api/glossary/letters`, { cache: 'no-store' })
    if (!res.ok) return []
    return res.json()
  } catch (error) {
    console.error("Error fetching letters:", error)
    return []
  }
}

async function getGlossaryCategories() {
  try {
    const baseUrl = getApiBaseUrl()
    const res = await fetch(`${baseUrl}/api/glossary/categories`, { cache: 'no-store' })
    if (!res.ok) return []
    return res.json()
  } catch (error) {
    console.error("Error fetching glossary data:", error)
    return []
  }
}
export default async function GlossaryPage() {
  const availableLetters = await getLetters()
  const glossaryData = await getGlossaryCategories()
  return (<>
    <section className={styles.glossaryHomeSection}>
      <Image alt="Glossary Background" src={GlossaryBgImage} className={styles.bgImage} priority={true} fetchPriority="high" />
      <Container className={`pb-0 ${styles.paddingTop}`}>
        <div className="d-flex mb-3">
          <CustomBreadcrumb
            linkColor="allBlack"
            items={[
              { name: "Home", url: "/" },
              { name: "Glossary", url: "/glossary" },
            ]}
          />
        </div>

        <DynamicHeading
          content={[
            {
              text: "FinTech ",
              color: "color-black f-3",
            },
            { text: "Glossary", color: "color-equity-blue" },
          ]}
          headingTag="h1"
          className={styles.pageTitle}
        />

        <GlossarySearch />
        <AlphabetBar availableLetters={availableLetters} />

        <div className={styles.termsContainer}>
          {glossaryData && glossaryData.map((section: any, idx: number) => (
            <div key={idx} className={styles.letterSection}>
              <DynamicHeading
                content={[
                  {
                    text: `${section.heading}`,
                    color: "color-black f-3",
                  },
                ]}
                headingTag="h2"
                className={styles.letterHeading}
              />
              <div className={styles.termsGrid}>
                {section.cards.map((card: any, cardIdx: number) => (
                  <Link
                    key={cardIdx}
                    href={card.link}
                    className={styles.termCard}
                    prefetch={false}
                  >
                    <h3 className={styles.termCardTitle}>{card.heading}</h3>
                    <p className={styles.termCardDescription}>
                      {card.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <AlphabetBar availableLetters={availableLetters} />
      </Container>
    </section>
    <BlogSection
      className="bg-white"
      heading={[
        {
          title: "Related  ",
          color: "color-black ",
        },
        {
          title: " Resources",
          color: "color-black f-4",
        },
      ]}
      cards={[12642, 13675, 12195]}
    /></>
  )
}