// app/glossary/page.tsx

import React from "react"
import { Container } from "react-bootstrap"
import Link from "next/link"
import Image from "next/image"
import GlossaryBgImage from "../../../public/images/glossaryBgImage.webp"
import { CustomBreadcrumb, DynamicHeading } from "@/src/components"
import GlossaryHomeClient from "./glossary-home-client"
import styles from "./page.module.scss"
import { HARDCODED_GLOSSARY_DATA } from "./data"

const ALPHABET = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
 

export const metadata = {
  title: "FinTech Glossary | Complete Financial Technology Terms",
  description:
    "Explore our comprehensive FinTech glossary with definitions, business context, and explanations of financial technology terms.",
}

export default async function GlossaryPage() {
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
          {HARDCODED_GLOSSARY_DATA.map((section, idx) => (
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
                {section.cards.map((card, cardIdx) => (
                  <Link
                    key={cardIdx}
                    href={card.link}
                    className={styles.termCard}
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