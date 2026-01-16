// app/glossary/[letter]/[slug]/page.tsx

import { fetchTermBySlug, fetchAllLetters } from "@/src/utils/glossaryData"
import React from "react"
import { Container } from "react-bootstrap"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import GlossaryBgImage from "../../../../../public/images/glossaryBgImage.webp"
import { CustomBreadcrumb, DynamicHeading } from "@/src/components"
import BlogSection from "@/src/components/sections/blog-section"
import styles from "./page.module.scss"
import GlossaryClient from "./slug-page-client"

const ALPHABET = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

interface PageProps {
  params: Promise<{ letter: string; slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const term = await fetchTermBySlug(slug)

  if (!term) {
    return {
      title: "Term Not Found",
      description: "The requested glossary term was not found.",
    }
  }

  return {
    title: term.metaTitle || `${term.keyword} | FinTech Glossary`,
    description: term.metaDescription || term.definition.substring(0, 160),
  }
}

export default async function GlossaryDetail({ params }: PageProps) {
  const { letter, slug } = await params
  const term = await fetchTermBySlug(slug)
  const availableLetters = await fetchAllLetters()

  if (!term) {
    notFound()
  }

  // Parse related blogs if present
  const relatedBlogIds = term.relatedBlogs
    ? term.relatedBlogs
        .split(",")
        .map((id) => parseInt(id.trim()))
        .filter((id) => !isNaN(id))
    : []

  // Collect all sections to display
  const sections = []

  if (term.sectionHeading1 && term.sectionDescription1) {
    sections.push({
      heading: term.sectionHeading1,
      content: term.sectionDescription1,
    })
  }
  if (term.sectionHeading2 && term.sectionDescription2) {
    sections.push({
      heading: term.sectionHeading2,
      content: term.sectionDescription2,
    })
  }
  if (term.sectionHeading3 && term.sectionDescription3) {
    sections.push({
      heading: term.sectionHeading3,
      content: term.sectionDescription3,
    })
  }
  if (term.sectionHeading4 && term.sectionDescription4) {
    sections.push({
      heading: term.sectionHeading4,
      content: term.sectionDescription4,
    })
  }

  return (
    <>
      <section className={styles.detailPageSection}>
        <Image alt="" src={GlossaryBgImage} className={styles.bgImage} />
        <Container className={`pb-0 ${styles.paddingTop}`}>
          <div className="d-flex mb-3">
            <CustomBreadcrumb
              linkColor="allBlack"
              items={[
                { name: "Home", url: "/" },
                { name: "Glossary", url: "/glossary" },
                { name: letter.toUpperCase(), url: `/glossary/${letter}` },
                { name: term.keyword, url: `/glossary/${letter}/${slug}` },
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

          <GlossaryClient letter={letter} availableLetters={availableLetters} />

          <div className={styles.titleSection}>
            <DynamicHeading
              content={[
                {
                  text: term.keyword,
                  color: "color-black",
                },
              ]}
              headingTag="h1"
              className={styles.termTitle}
            />

            <div className={styles.socialIcons}>
              <button className={styles.iconButton} aria-label="Print">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M11 2H5c-.55 0-1 .45-1 1v3H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-2V3c0-.55-.45-1-1-1zM5 3h6v3H5V3zm6 10H5v-3h6v3z" />
                </svg>
              </button>
              <button className={styles.iconButton} aria-label="Email">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>
              </button>
              <button className={styles.iconButton} aria-label="Share">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M13 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9-9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
                  <path d="M4 8c0-1.383.564-2.633 1.476-3.534a.5.5 0 1 0-.708-.708A6.485 6.485 0 0 0 3 8a6.485 6.485 0 0 0 1.768 4.242.5.5 0 1 0 .708-.708A5.485 5.485 0 0 1 4 8z" />
                  <path d="M13.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
                </svg>
              </button>
            </div>
          </div>

          {/* All Other Sections */}
          {sections.map((section, index) => (
            <section key={index} className={styles.contentSection}>
              <DynamicHeading
                content={[
                  {
                    text: `${section.heading}`,
                    color: "color-alternate-grey f-3",
                  },
                ]}
                headingTag="h2"
                // className={styles.sectionHeading}
              />
              <div className={styles.sectionContent}>
                <DynamicHeading
                  content={[
                    {
                      text: `${section.content}`,
                      color: "color-alternate-grey f-3",
                    },
                  ]}
                  headingTag="p"
                  // className={styles.sectionHeading}
                />
              </div>
            </section>
          ))}

          {/* Bottom Alphabet Navigation - Matching Reference Image */}
          <div className={styles.bottomAlphabetBar}>
            <div className={styles.alphabetScroll}>
              {ALPHABET.map((ltr) => {
                const hasTerms = availableLetters.includes(ltr)
                return (
                  <Link
                    key={ltr}
                    href={hasTerms ? `/glossary/${ltr.toLowerCase()}` : "#"}
                    className={`${styles.alphabetLink} ${
                      letter.toUpperCase() === ltr ? styles.active : ""
                    } ${!hasTerms ? styles.disabled : ""}`}
                  >
                    {ltr}
                  </Link>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Blogs Section */}
      {/* {relatedBlogIds.length > 0 && (
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
          cards={relatedBlogIds}
        />
      )} */}
    </>
  )
}
