// app/glossary/page.tsx

import React from "react"
import { Container } from "react-bootstrap"
import Link from "next/link"
import Image from "next/image"
import GlossaryBgImage from "../../../public/images/glossaryBgImage.webp"
import { CustomBreadcrumb, DynamicHeading } from "@/src/components"
import GlossaryHomeClient from "./glossary-home-client"
import styles from "./page.module.scss"
import { fetchGroupedTerms } from "@/src/utils/glossaryData"

const ALPHABET = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export const metadata = {
  title: "FinTech Glossary | Complete Financial Technology Terms",
  description:
    "Explore our comprehensive FinTech glossary with definitions, business context, and explanations of financial technology terms.",
}

export default async function GlossaryPage() {
  const groupedTerms = await fetchGroupedTerms()

  return (
    <section className={styles.glossaryHomeSection}>
      <Image alt="" src={GlossaryBgImage} className={styles.bgImage} />
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

        <GlossaryHomeClient />

        <div className={styles.alphabetBar}>
          <div className={styles.alphabetScroll}>
            {ALPHABET.map((ltr) => (
              <Link
                key={ltr}
                href={`/glossary/${ltr.toLowerCase()}`}
                className={styles.alphabetLink}
              >
                {ltr}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.termsContainer}>
          {Object.keys(groupedTerms)
            .sort()
            .map((letter) => (
              <div key={letter} className={styles.letterSection}>
                <DynamicHeading
                  content={[
                    {
                      text: `${letter}`,
                      color: "color-black f-3",
                    },
                  ]}
                  headingTag="h2"
                  className={styles.letterHeading}
                />
                <div className={styles.termsGrid}>
                  {groupedTerms[letter].map((term) => (
                    <Link
                      key={term.slug}
                      href={`/glossary/${letter.toLowerCase()}/${term.slug.split("/").pop()}`}
                      className={styles.termCard}
                    >
                      <h3 className={styles.termCardTitle}>{term.keyword}</h3>
                      <p className={styles.termCardDescription}>
                        {term.definition.substring(0, 120)}
                        {term.definition.length > 120 ? "..." : ""}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>

        <div className={styles.alphabetBar}>
          <div className={styles.alphabetScroll}>
            {ALPHABET.map((ltr) => (
              <Link
                key={ltr}
                href={`/glossary/${ltr.toLowerCase()}`}
                className={styles.alphabetLink}
              >
                {ltr}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
