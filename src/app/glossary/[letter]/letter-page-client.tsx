"use client"


import React from "react"
import styles from "./page.module.scss"
import { Container } from "react-bootstrap"
import Link from "next/link"
import ChevronRight from "../../../../public/svgs/chevron-right.svg"
import Image from "next/image"
import GlossaryBgImage from "../../../../public/images/glossaryBgImage.webp"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import GlossarySearch from "@/src/components/glossary/GlossarySearch"
import AlphabetBar from "@/src/components/glossary/AlphabetBar"



interface Props {
  letter: string
  initialTerms: any[]
}


const LetterPageClient = ({ letter, initialTerms }: Props) => {
  const BigLetter = (letter || "").toUpperCase()
  const activeLetter = BigLetter === "#" ? "#" : BigLetter;

  return (
    <section className={styles.letterPageSection}>
      <Image alt="" src={GlossaryBgImage} className={styles.bgImage} />
      <Container className={`pb-0 ${styles.paddingTop}`}>
        <div className="d-flex mb-3">
          <CustomBreadcrumb
            linkColor="allBlack"
            items={[
              { name: "Home", url: "/" },
              { name: "Glossary", url: "/glossary" },
              { name: `${activeLetter}`, url: `/glossary/${letter}` },
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

        <AlphabetBar currentLetter={activeLetter} />

        <div className={styles.termsGrid}>
          {initialTerms.length > 0 ? (
            initialTerms.map((item) => (
              <div key={item.slug} className={styles.termCol}>
                <Link
                  href={`/glossary/${letter}/${item.slug}`}
                  className={styles.termLink}
                >
                  <span className={styles.title}>{item.word}</span>
                  <Image
                    src={ChevronRight}
                    alt="ChevronRight"
                    className={styles.arrow}
                  />
                </Link>
              </div>
            ))
          ) : (
            <div className={styles.noResultsCol}>
              <p className={styles.noResults}>No Data for This Letter</p>
            </div>
          )}
        </div>

        <AlphabetBar currentLetter={activeLetter} />
      </Container>
    </section>
  )
}

export default LetterPageClient
